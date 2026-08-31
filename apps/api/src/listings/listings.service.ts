import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import type {
  CollectionListingInput,
  CreateUserListingInput,
  SetUserListingStatusInput,
  UpdateUserListingInput,
} from "@repo/validation";

import { DatabaseService } from "../database/database.service";

type ListingPreferredStore = {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  city: string;
  state_region: string | null;
  country_code: string;
  verification_status: string;
  status: string;
  trade_mediation_enabled: boolean;
};

type ListingPreferredStoreRelations = {
  store_games: {
    stores:
      ListingPreferredStore;
  } | null;
};

@Injectable()
export class ListingsService {
  constructor(
    private readonly database:
      DatabaseService,
  ) {}

  private async resolveGameId(gameSlug?: string) {
    if (!gameSlug) return undefined;
    const game = await this.database.client.games.findUnique({
      where: { slug: gameSlug },
      select: { id: true },
    });
    if (!game) throw new BadRequestException("The selected game does not exist.");
    return game.id;
  }

  private async collectionListingCandidates(userId: string, collectionId: string, gameSlug: string) {
    if (!gameSlug?.trim()) throw new BadRequestException("A game is required.");
    const gameId = await this.resolveGameId(gameSlug);
    const collection = await this.database.client.collections.findFirst({
      where: { id: collectionId, user_id: userId, game_id: gameId },
      select: {
        id: true,
        inventory_items: {
          where: { owner_user_id: userId, owner_store_id: null, game_id: gameId },
          select: {
            id: true,
            quantity: true,
            status: true,
            listings_listings_inventory_item_id_game_idToinventory_items: {
              where: { status: { in: ["active", "paused"] } },
              select: { id: true },
            },
          },
        },
      },
    });
    if (!collection) throw new NotFoundException("Collection was not found or does not belong to this user and game.");
    const items = collection.inventory_items.map((item) => ({
      inventory_item_id: item.id,
      reason: item.listings_listings_inventory_item_id_game_idToinventory_items.length
        ? "ALREADY_LISTED"
        : item.status !== "available"
          ? "INELIGIBLE_STATUS"
          : item.quantity < 1
            ? "NO_AVAILABLE_QUANTITY"
            : "ELIGIBLE",
    }));
    return { gameId: gameId!, items };
  }

  async preflightCollectionListings(userId: string, collectionId: string, gameSlug: string) {
    const result = await this.collectionListingCandidates(userId, collectionId, gameSlug);
    return {
      requested_items: result.items.length,
      eligible: result.items.filter((item) => item.reason === "ELIGIBLE").length,
      skipped_already_listed: result.items.filter((item) => item.reason === "ALREADY_LISTED").length,
      skipped_ineligible: result.items.filter((item) => item.reason !== "ELIGIBLE" && item.reason !== "ALREADY_LISTED").length,
      items: result.items,
    };
  }

  async createCollectionListings(userId: string, collectionId: string, input: CollectionListingInput) {
    const user = await this.database.client.user_profiles.findFirst({ where: { id: userId, status: "active" }, select: { id: true } });
    if (!user) throw new ForbiddenException("Listings cannot be created for an inactive user.");
    const candidates = await this.collectionListingCandidates(userId, collectionId, input.gameSlug);
    const eligibleIds = candidates.items.filter((item) => item.reason === "ELIGIBLE").map((item) => item.inventory_item_id);
    const preferredStoreId = await this.resolvePreferredStoreForNewListing(userId, candidates.gameId, input.preferredStoreId);
    await this.database.client.$transaction(async (transaction) => {
      const current = await transaction.inventory_items.findMany({
        where: { id: { in: eligibleIds }, collection_id: collectionId, owner_user_id: userId, owner_store_id: null, game_id: candidates.gameId, status: "available", quantity: { gt: 0 } },
        select: { id: true },
      });
      if (current.length !== eligibleIds.length) throw new ConflictException("Collection inventory changed after preflight. Review the collection again.");
      const newlyOpen = await transaction.listings.count({ where: { inventory_item_id: { in: eligibleIds }, status: { in: ["active", "paused"] } } });
      if (newlyOpen) throw new ConflictException("A collection item was listed after preflight. Review the collection again.");
      if (eligibleIds.length) await transaction.listings.createMany({
        data: eligibleIds.map((inventoryItemId) => ({
          game_id: candidates.gameId,
          inventory_item_id: inventoryItemId,
          seller_user_id: userId,
          seller_store_id: null,
          accepts_cash: input.acceptsCash,
          accepts_trade: input.acceptsTrade,
          asking_price: input.acceptsCash ? input.askingPrice : null,
          currency_code: input.acceptsCash ? input.currencyCode : null,
          preferred_store_id: preferredStoreId,
          title: input.title ?? null,
          description: input.description ?? null,
          status: "active",
        })),
      });
    });
    return {
      requested_items: candidates.items.length,
      created_listings: eligibleIds.length,
      skipped_already_listed: candidates.items.filter((item) => item.reason === "ALREADY_LISTED").length,
      skipped_ineligible: candidates.items.filter((item) => item.reason !== "ELIGIBLE" && item.reason !== "ALREADY_LISTED").length,
    };
  }

  private async findEligibleTradeStore(
    storeId: string,
    gameId: string,
  ) {
    return this.database.client.stores.findFirst({
      where: {
        id: storeId,

        status:
          "active",

        verification_status:
          "verified",

        trade_mediation_enabled:
          true,

        store_games: {
          some: {
            game_id:
              gameId,

            trade_mediation_enabled:
              true,
          },
        },
      },

      select: {
        id: true,
      },
    });
  }

  private async requireEligibleTradeStore(
    storeId: string,
    gameId: string,
  ) {
    const store =
      await this.findEligibleTradeStore(
        storeId,
        gameId,
      );

    if (!store) {
      throw new BadRequestException(
        "The selected store must be an active affiliated DeckDeal trade-mediation store.",
      );
    }

    return store;
  }

  private async resolvePreferredStoreForNewListing(
    userId: string,
    gameId: string,
    requestedStoreId:
      | string
      | null
      | undefined,
  ) {
    /*
     * Explicit null means:
     * do not use a preferred store
     * for this listing.
     */
    if (
      requestedStoreId ===
      null
    ) {
      return null;
    }

    /*
     * Explicit store ID overrides
     * the user's global preference.
     */
    if (
      requestedStoreId !==
      undefined
    ) {
      await this.requireEligibleTradeStore(
        requestedStoreId,
        gameId,
      );

      return requestedStoreId;
    }

    /*
     * No value was supplied.
     * Try the user's global
     * preferred trade store.
     */
    const preference =
      await this.database.client.user_preferences.findUnique({
        where: {
          user_id:
            userId,
        },

        select: {
          preferred_trade_store_id:
            true,
        },
      });

    const preferredStoreId =
      preference
        ?.preferred_trade_store_id ??
      null;

    if (!preferredStoreId) {
      return null;
    }

    /*
     * A user's preferred store may
     * later become inactive,
     * unverified, or lose its
     * mediation affiliation.
     *
     * In that case we allow the
     * listing to be created without
     * a preferred store.
     */
    const eligibleStore =
      await this.findEligibleTradeStore(
        preferredStoreId,
        gameId,
      );

    return (
      eligibleStore?.id ??
      null
    );
  }

  private mapListing(
    listing: any,
  ) {
    const inventoryItem =
      listing
        .inventory_items_listings_inventory_item_id_seller_user_idToinventory_items ??
      listing
        .inventory_items_listings_inventory_item_id_seller_store_idToinventory_items;

    const preferredStoreRelations =
      listing as ListingPreferredStoreRelations;

    const preferredStore =
      preferredStoreRelations
        .store_games
        ?.stores ?? null;

    const {
      inventory_items_listings_inventory_item_id_seller_user_idToinventory_items:
        _userInventoryRelation,

      inventory_items_listings_inventory_item_id_seller_store_idToinventory_items:
        _storeInventoryRelation,

      store_games:
        _preferredStoreRelation,

      ...listingData
    } = listing;

    if (!inventoryItem) {
      return {
        ...listingData,

        preferred_store:
          preferredStore,

        inventory_item:
          null,
      };
    }

    const {
      printing_finishes,
      ...inventoryData
    } = inventoryItem;

    return {
      ...listingData,

      preferred_store:
        preferredStore,

      inventory_item: {
        ...inventoryData,

        printing: {
          ...printing_finishes
            .card_printings,

          finish:
            printing_finishes
              .finish,
        },
      },
    };
  }

  private getListingSelect() {
    return {
      id: true,
      game_id: true,
      inventory_item_id:
        true,
      seller_user_id:
        true,
      seller_store_id:
        true,
      accepts_cash:
        true,
      accepts_trade:
        true,
      asking_price:
        true,
      currency_code:
        true,
      preferred_store_id:
        true,
      title: true,
      description: true,
      status: true,
      created_at: true,
      updated_at: true,

      store_games: {
        select: {
          stores: {
            select: {
              id: true,
              name: true,
              slug: true,
              logo_url: true,

              city: true,
              state_region:
                true,
              country_code:
                true,

              verification_status:
                true,

              status:
                true,

              trade_mediation_enabled:
                true,
            },
          },
        },
      },

      inventory_items_listings_inventory_item_id_seller_user_idToinventory_items:
        {
          select: {
            id: true,
            finish: true,
            condition: true,
            language_code:
              true,
            quantity: true,
            is_signed: true,
            is_altered: true,
            is_graded: true,
            status: true,

            user_profiles: {
              select: {
                id: true,
                username: true,
                display_name:
                  true,
              },
            },

            printing_finishes:
              {
                select: {
                  finish: true,

                  card_printings:
                    {
                      select: {
                        id: true,

                        collector_number:
                          true,

                        language_code:
                          true,

                        printed_name:
                          true,

                        rarity:
                          true,

                        treatment:
                          true,

                        image_small_uri:
                          true,

                        image_normal_uri:
                          true,

                        image_large_uri:
                          true,

                        canonical_cards:
                          {
                            select:
                              {
                                id: true,
                                name: true,

                                mana_cost:
                                  true,

                                type_line:
                                  true,
                              },
                          },

                        card_sets:
                          {
                            select:
                              {
                                id: true,
                                code: true,
                                name: true,
                              },
                          },
                      },
                    },
                },
              },
          },
        },

      inventory_items_listings_inventory_item_id_seller_store_idToinventory_items:
        {
          select: {
            id: true,
            finish: true,
            condition: true,
            language_code:
              true,
            quantity: true,
            is_signed: true,
            is_altered: true,
            is_graded: true,
            status: true,

            stores: {
              select: {
                id: true,
                name: true,
                slug: true,
                logo_url: true,
              },
            },

            printing_finishes:
              {
                select: {
                  finish: true,

                  card_printings:
                    {
                      select: {
                        id: true,

                        collector_number:
                          true,

                        language_code:
                          true,

                        printed_name:
                          true,

                        rarity:
                          true,

                        treatment:
                          true,

                        image_small_uri:
                          true,

                        image_normal_uri:
                          true,

                        image_large_uri:
                          true,

                        canonical_cards:
                          {
                            select:
                              {
                                id: true,
                                name: true,

                                mana_cost:
                                  true,

                                type_line:
                                  true,
                              },
                          },

                        card_sets:
                          {
                            select:
                              {
                                id: true,
                                code: true,
                                name: true,
                              },
                          },
                      },
                    },
                },
              },
          },
        },
    } as const;
  }

  async getActiveListings(gameSlug?: string) {
    const gameId = await this.resolveGameId(gameSlug);
    const listings =
      await this.database.client.listings.findMany({
        where: {
          ...(gameId ? { game_id: gameId } : {}),
          status:
            "active",

          OR: [
            {
              accepts_trade: true,
            },
            {
              accepts_cash: true,
            },
          ],

          AND: {
            OR: [
              {
                seller_user_id: { not: null },
                seller_store_id: null,
                inventory_items_listings_inventory_item_id_seller_user_idToinventory_items: {
                  is: {
                    status: "available",
                    owner_store_id: null,
                    user_profiles: { status: "active" },
                  },
                },
              },
              {
                seller_store_id: { not: null },
                seller_user_id: null,
                inventory_items_listings_inventory_item_id_seller_store_idToinventory_items: {
                  is: {
                    status: "available",
                    owner_user_id: null,
                    stores: {
                      status: "active",
                      verification_status: "verified",
                      trade_mediation_enabled: true,
                    },
                  },
                },
              },
            ],
          },
        },

        select:
          this.getListingSelect(),

        orderBy: {
          created_at:
            "desc",
        },
      });

    return listings.map(
      (listing) =>
        this.mapListing(
          listing,
        ),
    );
  }

  async getListing(
    listingId: string,
  ) {
    const listing =
      await this.database.client.listings.findUnique({
        where: {
          id:
            listingId,
        },

        select:
          this.getListingSelect(),
      });

    if (!listing) {
      throw new NotFoundException(
        "Listing was not found.",
      );
    }

    return this.mapListing(
      listing,
    );
  }

  async getUserListings(
    userId: string,
    gameSlug?: string,
  ) {
    const gameId = await this.resolveGameId(gameSlug);
    const user =
      await this.database.client.user_profiles.findUnique({
        where: {
          ...(gameId ? { game_id: gameId } : {}),
          id:
            userId,
        },

        select: {
          id: true,
          status: true,
        },
      });

    if (!user) {
      throw new NotFoundException(
        "User was not found.",
      );
    }

    if (
      user.status !==
      "active"
    ) {
      throw new ForbiddenException(
        "Listings cannot be loaded for an inactive user.",
      );
    }

    const listings =
      await this.database.client.listings.findMany({
        where: {
          seller_user_id:
            userId,

          seller_store_id:
            null,

          status:
            "active",

          accepts_trade:
            true,
        },

        select:
          this.getListingSelect(),

        orderBy: {
          created_at:
            "desc",
        },
      });

    return listings.map(
      (listing) =>
        this.mapListing(
          listing,
        ),
    );
  }

  async createUserListing(
    userId: string,
    input:
      CreateUserListingInput,
  ) {
    const user =
      await this.database.client.user_profiles.findUnique({
        where: {
          id:
            userId,
        },

        select: {
          id: true,
          status: true,
        },
      });

    if (!user) {
      throw new NotFoundException(
        "User was not found.",
      );
    }

    if (
      user.status !==
      "active"
    ) {
      throw new ForbiddenException(
        "Listings cannot be created for an inactive user.",
      );
    }

    const inventoryItem =
      await this.database.client.inventory_items.findFirst({
        where: {
          id:
            input.inventoryItemId,

          owner_user_id:
            userId,
        },

        select: {
          id: true,
          game_id: true,
          status: true,
        },
      });

    if (!inventoryItem) {
      throw new NotFoundException(
        "Inventory item was not found or does not belong to this user.",
      );
    }

    if (
      inventoryItem.status !==
      "available"
    ) {
      throw new BadRequestException(
        "Only available inventory items can be listed.",
      );
    }

    const existingOpenListing =
      await this.database.client.listings.findFirst({
        where: {
          inventory_item_id:
            inventoryItem.id,

          status: {
            in: [
              "active",
              "paused",
            ],
          },
        },

        select: {
          id: true,
        },
      });

    if (
      existingOpenListing
    ) {
      throw new ConflictException(
        "This inventory item already has an open listing.",
      );
    }

    const preferredStoreId =
      await this.resolvePreferredStoreForNewListing(
        userId,
        inventoryItem.game_id,
        input.preferredStoreId,
      );

    const listing =
      await this.database.client.listings.create({
        data: {
          game_id:
            inventoryItem.game_id,

          inventory_item_id:
            inventoryItem.id,

          seller_user_id:
            userId,

          seller_store_id:
            null,

          accepts_cash:
            input.acceptsCash,

          accepts_trade:
            input.acceptsTrade,

          asking_price:
            input.acceptsCash
              ? input.askingPrice
              : null,

          currency_code:
            input.acceptsCash
              ? input.currencyCode
              : null,

          preferred_store_id:
            preferredStoreId,

          title:
            input.title ??
            null,

          description:
            input.description ??
            null,

          status:
            "active",
        },

        select: {
          id: true,
        },
      });

    return this.getListing(
      listing.id,
    );
  }

  async updateUserListing(
    userId: string,
    listingId: string,
    input:
      UpdateUserListingInput,
  ) {
    const existing =
      await this.database.client.listings.findFirst({
        where: {
          id:
            listingId,

          seller_user_id:
            userId,
        },

        select: {
          id: true,

          game_id: true,

          inventory_item_id:
            true,

          accepts_cash:
            true,

          accepts_trade:
            true,

          asking_price:
            true,

          currency_code:
            true,

          preferred_store_id:
            true,

          title: true,
          description: true,
          status: true,
        },
      });

    if (!existing) {
      throw new NotFoundException(
        "Listing was not found or does not belong to this user.",
      );
    }

    const listingGameId =
      existing.game_id;

    if (
      existing.status !==
        "active" &&
      existing.status !==
        "paused"
    ) {
      throw new BadRequestException(
        "Only active or paused listings can be edited.",
      );
    }

    const finalAcceptsCash =
      input.acceptsCash ??
      existing.accepts_cash;

    const finalAcceptsTrade =
      input.acceptsTrade ??
      existing.accepts_trade;

    if (
      !finalAcceptsCash &&
      !finalAcceptsTrade
    ) {
      throw new BadRequestException(
        "A listing must accept cash, trade, or both.",
      );
    }

    const finalAskingPrice =
      finalAcceptsCash
        ? input.askingPrice !==
          undefined
          ? input.askingPrice
          : existing.asking_price
        : null;

    const finalCurrencyCode =
      finalAcceptsCash
        ? input.currencyCode !==
          undefined
          ? input.currencyCode
          : existing.currency_code
        : null;

    if (
      finalAcceptsCash &&
      (
        finalAskingPrice ===
          null ||
        finalCurrencyCode ===
          null
      )
    ) {
      throw new BadRequestException(
        "Cash listings require an asking price and currency code.",
      );
    }

    /*
     * Preserve the current listing-level
     * store unless this PATCH explicitly
     * includes preferredStoreId.
     */
    let finalPreferredStoreId =
      existing.preferred_store_id;

    if (
      input.preferredStoreId !==
      undefined
    ) {
      /*
       * Explicit null clears the
       * listing preference.
       */
      if (
        input.preferredStoreId ===
        null
      ) {
        finalPreferredStoreId =
          null;
      } else {
        /*
         * A newly selected store
         * must currently be eligible
         * for DeckDeal mediation.
         */
        await this.requireEligibleTradeStore(
          input.preferredStoreId,
          listingGameId,
        );

        finalPreferredStoreId =
          input.preferredStoreId;
      }
    }

    await this.database.client.listings.update({
      where: {
        id:
          listingId,
      },

      data: {
        accepts_cash:
          finalAcceptsCash,

        accepts_trade:
          finalAcceptsTrade,

        asking_price:
          finalAskingPrice,

        currency_code:
          finalCurrencyCode,

        preferred_store_id:
          finalPreferredStoreId,

        ...(input.title !==
        undefined
          ? {
              title:
                input.title,
            }
          : {}),

        ...(input.description !==
        undefined
          ? {
              description:
                input.description,
            }
          : {}),

        updated_at:
          new Date(),
      },
    });

    return this.getListing(
      listingId,
    );
  }

  async setUserListingStatus(
    userId: string,
    listingId: string,
    input:
      SetUserListingStatusInput,
  ) {
    const listing =
      await this.database.client.listings.findFirst({
        where: {
          id:
            listingId,

          seller_user_id:
            userId,
        },

        select: {
          id: true,

          inventory_item_id:
            true,

          status:
            true,
        },
      });

    if (!listing) {
      throw new NotFoundException(
        "Listing was not found or does not belong to this user.",
      );
    }

    if (
      listing.status !==
        "active" &&
      listing.status !==
        "paused"
    ) {
      throw new BadRequestException(
        "This listing can no longer be manually changed.",
      );
    }

    if (
      input.status ===
      "active"
    ) {
      const inventoryItem =
        await this.database.client.inventory_items.findUnique({
          where: {
            id:
              listing.inventory_item_id,
          },

          select: {
            status:
              true,
          },
        });

      if (
        !inventoryItem ||
        inventoryItem.status !==
          "available"
      ) {
        throw new BadRequestException(
          "The listing cannot be activated because the inventory item is not available.",
        );
      }
    }

    await this.database.client.listings.update({
      where: {
        id:
          listingId,
      },

      data: {
        status:
          input.status,

        updated_at:
          new Date(),
      },
    });

    return this.getListing(
      listingId,
    );
  }
}
