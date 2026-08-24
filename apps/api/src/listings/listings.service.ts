import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import type {
  CreateUserListingInput,
  SetUserListingStatusInput,
  UpdateUserListingInput,
} from "@repo/validation";

import { DatabaseService } from "../database/database.service";

@Injectable()
export class ListingsService {
  constructor(
    private readonly database:
      DatabaseService,
  ) {}

  private async findEligibleTradeStore(
    storeId: string,
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
      },

      select: {
        id: true,
      },
    });
  }

  private async requireEligibleTradeStore(
    storeId: string,
  ) {
    const store =
      await this.findEligibleTradeStore(
        storeId,
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

    const {
      inventory_items_listings_inventory_item_id_seller_user_idToinventory_items:
        _userInventoryRelation,

      inventory_items_listings_inventory_item_id_seller_store_idToinventory_items:
        _storeInventoryRelation,

      stores:
        preferredStore,

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

  async getActiveListings() {
    const listings =
      await this.database.client.listings.findMany({
        where: {
          status:
            "active",
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
        input.preferredStoreId,
      );

    const listing =
      await this.database.client.listings.create({
        data: {
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