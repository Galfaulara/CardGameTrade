import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import type {
  CreateUserWishlistInput,
  CreateWishlistItemInput,
  CreateWishlistOfferInput,
  UpdateUserWishlistInput,
  UpdateWishlistItemInput,
} from "@repo/validation";

import { DatabaseService } from "../database/database.service";

@Injectable()
export class WishlistsService {
  constructor(
    private readonly database:
      DatabaseService,
  ) {}

  private async requireActiveUser(
    userId: string,
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
        "This action is not available for an inactive user.",
      );
    }

    return user;
  }

  private async findEligibleTradeStore(
    storeId: string,
  ) {
    return this.database.client.stores.findFirst({
      where: {
        id:
          storeId,

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

  private async resolvePreferredStoreForNewWishlist(
    userId: string,
    requestedStoreId:
      | string
      | null
      | undefined,
  ) {
    if (
      requestedStoreId ===
      null
    ) {
      return null;
    }

    if (
      requestedStoreId !==
      undefined
    ) {
      await this.requireEligibleTradeStore(
        requestedStoreId,
      );

      return requestedStoreId;
    }

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

    const eligibleStore =
      await this.findEligibleTradeStore(
        preferredStoreId,
      );

    return (
      eligibleStore?.id ??
      null
    );
  }

  private getWishlistSelect() {
    return {
      id: true,
      user_id: true,
      name: true,
      description: true,
      visibility: true,
      status: true,
      preferred_store_id:
        true,
      created_at: true,
      updated_at: true,
    } as const;
  }

  private getWishlistItemSelect() {
    return {
      id: true,
      wishlist_id: true,
      canonical_card_id:
        true,
      printing_id: true,

      desired_finish: true,
      desired_condition:
        true,
      language_code: true,
      quantity_desired:
        true,
      priority: true,
      notes: true,
      status: true,

      willing_to_pay_cash:
        true,
      willing_to_trade_cards:
        true,
      max_cash_amount:
        true,
      currency_code: true,
      trade_notes: true,

      created_at: true,
      updated_at: true,
    } as const;
  }

  private getWishlistOfferSelect() {
    return {
      id: true,
      wishlist_item_id:
        true,
      offerer_user_id:
        true,
      offerer_store_id:
        true,

      requests_cash:
        true,
      requests_trade:
        true,
      cash_ask_amount:
        true,
      currency_code: true,

      message: true,
      trade_terms_note:
        true,

      status: true,
      expires_at: true,
      responded_at: true,
      created_at: true,
      updated_at: true,
    } as const;
  }

  private getInventoryHydrationSelect() {
    return {
      id: true,
      printing_id: true,
      finish: true,

      owner_user_id: true,
      owner_store_id: true,

      condition: true,
      language_code: true,
      quantity: true,

      is_signed: true,
      is_altered: true,
      is_graded: true,

      status: true,

      printing_finishes: {
        select: {
          finish: true,

          card_printings: {
            select: {
              id: true,
              canonical_card_id:
                true,
              collector_number:
                true,
              language_code:
                true,
              printed_name:
                true,
              rarity: true,
              artist_name: true,
              treatment: true,

              image_small_uri:
                true,
              image_normal_uri:
                true,
              image_large_uri:
                true,

              canonical_cards: {
                select: {
                  id: true,
                  name: true,
                  mana_cost: true,
                  type_line: true,
                },
              },

              card_sets: {
                select: {
                  id: true,
                  code: true,
                  name: true,
                },
              },
            },
          },
        },
      },
    } as const;
  }

  private mapInventory(
    inventory: any,
  ) {
    if (!inventory) {
      return null;
    }

    const {
      printing_finishes,
      ...inventoryData
    } = inventory;

    return {
      ...inventoryData,

      printing: {
        ...printing_finishes
          .card_printings,

        finish:
          printing_finishes
            .finish,
      },
    };
  }

  private async hydrateWishlistItems(
    items: any[],
  ) {
    if (
      items.length ===
      0
    ) {
      return [];
    }

    const canonicalIds = [
      ...new Set(
        items
          .map(
            (item) =>
              item.canonical_card_id,
          )
          .filter(
            (
              value,
            ): value is string =>
              Boolean(value),
          ),
      ),
    ];

    const printingIds = [
      ...new Set(
        items
          .map(
            (item) =>
              item.printing_id,
          )
          .filter(
            (
              value,
            ): value is string =>
              Boolean(value),
          ),
      ),
    ];

    const canonicalCards =
      canonicalIds.length >
      0
        ? await this.database.client.canonical_cards.findMany({
            where: {
              id: {
                in:
                  canonicalIds,
              },
            },

            select: {
              id: true,
              name: true,
              normalized_name:
                true,
              mana_cost: true,
              type_line: true,
            },
          })
        : [];

    const printings =
      printingIds.length >
      0
        ? await this.database.client.card_printings.findMany({
            where: {
              id: {
                in:
                  printingIds,
              },
            },

            select: {
              id: true,
              canonical_card_id:
                true,
              collector_number:
                true,
              language_code:
                true,
              printed_name:
                true,
              rarity: true,
              artist_name: true,
              treatment: true,

              image_small_uri:
                true,
              image_normal_uri:
                true,
              image_large_uri:
                true,

              canonical_cards: {
                select: {
                  id: true,
                  name: true,
                  normalized_name:
                    true,
                  mana_cost: true,
                  type_line: true,
                },
              },

              card_sets: {
                select: {
                  id: true,
                  code: true,
                  name: true,
                },
              },
            },
          })
        : [];

    const canonicalById =
      new Map(
        canonicalCards.map(
          (card) => [
            card.id,
            card,
          ],
        ),
      );

    const printingById =
      new Map(
        printings.map(
          (printing) => [
            printing.id,
            printing,
          ],
        ),
      );

    return items.map(
      (item) => ({
        ...item,

        target:
          item.canonical_card_id
            ? {
                type:
                  "canonical_card",

                canonical_card:
                  canonicalById.get(
                    item.canonical_card_id,
                  ) ??
                  null,
              }
            : {
                type:
                  "printing",

                printing:
                  item.printing_id
                    ? printingById.get(
                        item.printing_id,
                      ) ??
                      null
                    : null,
              },
      }),
    );
  }

  private async hydrateWishlists(
    wishlists: any[],
    includeItems:
      boolean =
      true,
  ) {
    if (
      wishlists.length ===
      0
    ) {
      return [];
    }

    const storeIds = [
      ...new Set(
        wishlists
          .map(
            (wishlist) =>
              wishlist.preferred_store_id,
          )
          .filter(
            (
              value,
            ): value is string =>
              Boolean(value),
          ),
      ),
    ];

    const stores =
      storeIds.length >
      0
        ? await this.database.client.stores.findMany({
            where: {
              id: {
                in:
                  storeIds,
              },
            },

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
              status: true,
              verification_status:
                true,
              trade_mediation_enabled:
                true,
            },
          })
        : [];

    const storesById =
      new Map(
        stores.map(
          (store) => [
            store.id,
            store,
          ],
        ),
      );

    let itemsByWishlist =
      new Map<
        string,
        any[]
      >();

    if (
      includeItems
    ) {
      const wishlistIds =
        wishlists.map(
          (wishlist) =>
            wishlist.id,
        );

      const items =
        await this.database.client.wishlist_items.findMany({
          where: {
            wishlist_id: {
              in:
                wishlistIds,
            },

            status: {
              not:
                "removed",
            },
          },

          select:
            this.getWishlistItemSelect(),

          orderBy: [
            {
              priority:
                "desc",
            },
            {
              created_at:
                "asc",
            },
          ],
        });

      const hydratedItems =
        await this.hydrateWishlistItems(
          items,
        );

      itemsByWishlist =
        new Map();

      for (
        const item of
        hydratedItems
      ) {
        const current =
          itemsByWishlist.get(
            item.wishlist_id,
          ) ??
          [];

        current.push(
          item,
        );

        itemsByWishlist.set(
          item.wishlist_id,
          current,
        );
      }
    }

    return wishlists.map(
      (wishlist) => ({
        ...wishlist,

        preferred_store:
          wishlist.preferred_store_id
            ? storesById.get(
                wishlist.preferred_store_id,
              ) ??
              null
            : null,

        ...(includeItems
          ? {
              items:
                itemsByWishlist.get(
                  wishlist.id,
                ) ??
                [],
            }
          : {}),
      }),
    );
  }

  private async validateWishlistTargetExists(
    canonicalCardId:
      | string
      | null,
    printingId:
      | string
      | null,
    desiredFinish:
      | string
      | null,
  ) {
    if (
      canonicalCardId
    ) {
      const card =
        await this.database.client.canonical_cards.findUnique({
          where: {
            id:
              canonicalCardId,
          },

          select: {
            id: true,
          },
        });

      if (!card) {
        throw new BadRequestException(
          "The requested canonical card does not exist.",
        );
      }

      return;
    }

    if (
      !printingId
    ) {
      throw new BadRequestException(
        "A wishlist item must target a canonical card or an exact printing.",
      );
    }

    const printing =
      await this.database.client.card_printings.findUnique({
        where: {
          id:
            printingId,
        },

        select: {
          id: true,
        },
      });

    if (!printing) {
      throw new BadRequestException(
        "The requested printing does not exist.",
      );
    }

    if (
      desiredFinish
    ) {
      const finish =
        await this.database.client.printing_finishes.findFirst({
          where: {
            printing_id:
              printingId,

            finish:
              desiredFinish,
          },

          select: {
            printing_id:
              true,
          },
        });

      if (!finish) {
        throw new BadRequestException(
          "The requested finish is not available for this printing.",
        );
      }
    }
  }

  private validateWishlistItemMergedRules(
    merged: {
      canonicalCardId:
        | string
        | null;

      printingId:
        | string
        | null;

      willingToPayCash:
        boolean;

      willingToTradeCards:
        boolean;

      maxCashAmount:
        | number
        | null;

      currencyCode:
        | string
        | null;
    },
  ) {
    const targetCount = [
      merged.canonicalCardId,
      merged.printingId,
    ].filter(Boolean).length;

    if (
      targetCount !==
      1
    ) {
      throw new BadRequestException(
        "A wishlist item must target exactly one canonical card or one exact printing.",
      );
    }

    if (
      !merged.willingToPayCash &&
      !merged.willingToTradeCards
    ) {
      throw new BadRequestException(
        "A wishlist item must allow cash, card trade, or both.",
      );
    }

    if (
      !merged.willingToPayCash &&
      (
        merged.maxCashAmount !==
          null ||
        merged.currencyCode !==
          null
      )
    ) {
      throw new BadRequestException(
        "Cash amount and currency can only be set when cash acquisition is enabled.",
      );
    }

    if (
      merged.maxCashAmount !==
        null &&
      !merged.currencyCode
    ) {
      throw new BadRequestException(
        "currencyCode is required when maxCashAmount is set.",
      );
    }
  }

  async getUserWishlists(
    userId: string,
  ) {
    await this.requireActiveUser(
      userId,
    );

    const wishlists =
      await this.database.client.wishlists.findMany({
        where: {
          user_id:
            userId,

          status: {
            not:
              "deleted",
          },
        },

        select:
          this.getWishlistSelect(),

        orderBy: {
          created_at:
            "desc",
        },
      });

    return this.hydrateWishlists(
      wishlists,
    );
  }

  async getUserWishlist(
    userId: string,
    wishlistId: string,
  ) {
    const wishlist =
      await this.database.client.wishlists.findFirst({
        where: {
          id:
            wishlistId,

          user_id:
            userId,

          status: {
            not:
              "deleted",
          },
        },

        select:
          this.getWishlistSelect(),
      });

    if (!wishlist) {
      throw new NotFoundException(
        "Wishlist was not found or does not belong to this user.",
      );
    }

    const hydrated =
      await this.hydrateWishlists(
        [
          wishlist,
        ],
      );

    return hydrated[0];
  }

  async createUserWishlist(
    userId: string,
    input:
      CreateUserWishlistInput,
  ) {
    await this.requireActiveUser(
      userId,
    );

    const duplicate =
      await this.database.client.wishlists.findFirst({
        where: {
          user_id:
            userId,

          name:
            input.name,
        },

        select: {
          id: true,
        },
      });

    if (duplicate) {
      throw new ConflictException(
        "This user already has a wishlist with that name.",
      );
    }

    const preferredStoreId =
      await this.resolvePreferredStoreForNewWishlist(
        userId,
        input.preferredStoreId,
      );

    const wishlist =
      await this.database.client.wishlists.create({
        data: {
          user_id:
            userId,

          name:
            input.name,

          description:
            input.description ??
            null,

          visibility:
            input.visibility,

          status:
            "active",

          preferred_store_id:
            preferredStoreId,
        },

        select: {
          id: true,
        },
      });

    return this.getUserWishlist(
      userId,
      wishlist.id,
    );
  }

  async updateUserWishlist(
    userId: string,
    wishlistId: string,
    input:
      UpdateUserWishlistInput,
  ) {
    const wishlist =
      await this.database.client.wishlists.findFirst({
        where: {
          id:
            wishlistId,

          user_id:
            userId,

          status: {
            not:
              "deleted",
          },
        },

        select:
          this.getWishlistSelect(),
      });

    if (!wishlist) {
      throw new NotFoundException(
        "Wishlist was not found or does not belong to this user.",
      );
    }

    if (
      input.name !==
        undefined &&
      input.name !==
        wishlist.name
    ) {
      const duplicate =
        await this.database.client.wishlists.findFirst({
          where: {
            user_id:
              userId,

            name:
              input.name,

            id: {
              not:
                wishlistId,
            },
          },

          select: {
            id: true,
          },
        });

      if (duplicate) {
        throw new ConflictException(
          "This user already has a wishlist with that name.",
        );
      }
    }

    if (
      input.status !==
        undefined &&
      input.status !==
        "active"
    ) {
      const pendingOffer =
        await this.database.client.wishlist_offers.findFirst({
          where: {
            status:
              "pending",

            wishlist_items: {
              wishlist_id:
                wishlistId,
            },
          },

          select: {
            id: true,
          },
        });

      if (pendingOffer) {
        throw new BadRequestException(
          "A wishlist with pending offers cannot be archived or deleted.",
        );
      }
    }

    let preferredStoreId =
      wishlist.preferred_store_id;

    if (
      input.preferredStoreId !==
      undefined
    ) {
      if (
        input.preferredStoreId ===
        null
      ) {
        preferredStoreId =
          null;
      } else {
        await this.requireEligibleTradeStore(
          input.preferredStoreId,
        );

        preferredStoreId =
          input.preferredStoreId;
      }
    }

    await this.database.client.wishlists.update({
      where: {
        id:
          wishlistId,
      },

      data: {
        ...(input.name !==
        undefined
          ? {
              name:
                input.name,
            }
          : {}),

        ...(input.description !==
        undefined
          ? {
              description:
                input.description,
            }
          : {}),

        ...(input.visibility !==
        undefined
          ? {
              visibility:
                input.visibility,
            }
          : {}),

        ...(input.status !==
        undefined
          ? {
              status:
                input.status,
            }
          : {}),

        preferred_store_id:
          preferredStoreId,

        updated_at:
          new Date(),
      },
    });

    if (
      input.status ===
      "deleted"
    ) {
      return {
        id:
          wishlistId,
        status:
          "deleted",
      };
    }

    return this.getUserWishlist(
      userId,
      wishlistId,
    );
  }

  async createWishlistItem(
    userId: string,
    wishlistId: string,
    input:
      CreateWishlistItemInput,
  ) {
    const wishlist =
      await this.database.client.wishlists.findFirst({
        where: {
          id:
            wishlistId,

          user_id:
            userId,

          status:
            "active",
        },

        select: {
          id: true,
        },
      });

    if (!wishlist) {
      throw new NotFoundException(
        "Active wishlist was not found or does not belong to this user.",
      );
    }

    await this.validateWishlistTargetExists(
      input.canonicalCardId ??
        null,
      input.printingId ??
        null,
      input.desiredFinish ??
        null,
    );

    const duplicate =
      await this.database.client.wishlist_items.findFirst({
        where: {
          wishlist_id:
            wishlistId,

          status: {
            in: [
              "active",
              "paused",
            ],
          },

          canonical_card_id:
            input.canonicalCardId ??
            null,

          printing_id:
            input.printingId ??
            null,
        },

        select: {
          id: true,
        },
      });

    if (duplicate) {
      throw new ConflictException(
        "This wishlist already contains an active item for the same card target.",
      );
    }

    const item =
      await this.database.client.wishlist_items.create({
        data: {
          wishlist_id:
            wishlistId,

          canonical_card_id:
            input.canonicalCardId ??
            null,

          printing_id:
            input.printingId ??
            null,

          desired_finish:
            input.desiredFinish ??
            null,

          desired_condition:
            input.desiredCondition ??
            null,

          language_code:
            input.languageCode ??
            null,

          quantity_desired:
            input.quantityDesired,

          priority:
            input.priority,

          notes:
            input.notes ??
            null,

          status:
            "active",

          willing_to_pay_cash:
            input.willingToPayCash,

          willing_to_trade_cards:
            input.willingToTradeCards,

          max_cash_amount:
            input.willingToPayCash
              ? input.maxCashAmount ??
                null
              : null,

          currency_code:
            input.willingToPayCash
              ? input.currencyCode ??
                null
              : null,

          trade_notes:
            input.tradeNotes ??
            null,
        },

        select:
          this.getWishlistItemSelect(),
      });

    const hydrated =
      await this.hydrateWishlistItems(
        [
          item,
        ],
      );

    return hydrated[0];
  }

  async updateWishlistItem(
    userId: string,
    wishlistId: string,
    itemId: string,
    input:
      UpdateWishlistItemInput,
  ) {
    const wishlist =
      await this.database.client.wishlists.findFirst({
        where: {
          id:
            wishlistId,

          user_id:
            userId,

          status: {
            not:
              "deleted",
          },
        },

        select: {
          id: true,
        },
      });

    if (!wishlist) {
      throw new NotFoundException(
        "Wishlist was not found or does not belong to this user.",
      );
    }

    const item =
      await this.database.client.wishlist_items.findFirst({
        where: {
          id:
            itemId,

          wishlist_id:
            wishlistId,

          status: {
            not:
              "removed",
          },
        },

        select:
          this.getWishlistItemSelect(),
      });

    if (!item) {
      throw new NotFoundException(
        "Wishlist item was not found.",
      );
    }

    const pendingOffer =
      await this.database.client.wishlist_offers.findFirst({
        where: {
          wishlist_item_id:
            itemId,

          status:
            "pending",
        },

        select: {
          id: true,
        },
      });

    if (pendingOffer) {
      throw new BadRequestException(
        "A wishlist item with pending offers cannot be edited.",
      );
    }

    const canonicalCardId =
      input.canonicalCardId !==
      undefined
        ? input.canonicalCardId
        : item.canonical_card_id;

    const printingId =
      input.printingId !==
      undefined
        ? input.printingId
        : item.printing_id;

    const willingToPayCash =
      input.willingToPayCash ??
      item.willing_to_pay_cash;

    const willingToTradeCards =
      input.willingToTradeCards ??
      item.willing_to_trade_cards;

    const maxCashAmount =
      input.maxCashAmount !==
      undefined
        ? input.maxCashAmount
        : item.max_cash_amount ===
            null
          ? null
          : Number(
              item.max_cash_amount,
            );

    const currencyCode =
      input.currencyCode !==
      undefined
        ? input.currencyCode
        : item.currency_code;

    this.validateWishlistItemMergedRules({
      canonicalCardId,
      printingId,
      willingToPayCash,
      willingToTradeCards,
      maxCashAmount,
      currencyCode,
    });

    const desiredFinish =
      input.desiredFinish !==
      undefined
        ? input.desiredFinish
        : item.desired_finish;

    await this.validateWishlistTargetExists(
      canonicalCardId,
      printingId,
      desiredFinish,
    );

    await this.database.client.wishlist_items.update({
      where: {
        id:
          itemId,
      },

      data: {
        canonical_card_id:
          canonicalCardId,

        printing_id:
          printingId,

        ...(input.desiredFinish !==
        undefined
          ? {
              desired_finish:
                input.desiredFinish,
            }
          : {}),

        ...(input.desiredCondition !==
        undefined
          ? {
              desired_condition:
                input.desiredCondition,
            }
          : {}),

        ...(input.languageCode !==
        undefined
          ? {
              language_code:
                input.languageCode,
            }
          : {}),

        ...(input.quantityDesired !==
        undefined
          ? {
              quantity_desired:
                input.quantityDesired,
            }
          : {}),

        ...(input.priority !==
        undefined
          ? {
              priority:
                input.priority,
            }
          : {}),

        ...(input.notes !==
        undefined
          ? {
              notes:
                input.notes,
            }
          : {}),

        ...(input.status !==
        undefined
          ? {
              status:
                input.status,
            }
          : {}),

        willing_to_pay_cash:
          willingToPayCash,

        willing_to_trade_cards:
          willingToTradeCards,

        max_cash_amount:
          willingToPayCash
            ? maxCashAmount
            : null,

        currency_code:
          willingToPayCash
            ? currencyCode
            : null,

        ...(input.tradeNotes !==
        undefined
          ? {
              trade_notes:
                input.tradeNotes,
            }
          : {}),

        updated_at:
          new Date(),
      },
    });

    if (
      input.status ===
      "removed"
    ) {
      return {
        id:
          itemId,
        status:
          "removed",
      };
    }

    const updated =
      await this.database.client.wishlist_items.findUnique({
        where: {
          id:
            itemId,
        },

        select:
          this.getWishlistItemSelect(),
      });

    if (!updated) {
      throw new NotFoundException(
        "Wishlist item was not found after update.",
      );
    }

    const hydrated =
      await this.hydrateWishlistItems(
        [
          updated,
        ],
      );

    return hydrated[0];
  }

  async getPublicWishlistItems() {
    const items =
      await this.database.client.wishlist_items.findMany({
        where: {
          status:
            "active",

          wishlists: {
            status:
              "active",

            visibility:
              "public",
          },
        },

        select:
          this.getWishlistItemSelect(),

        orderBy: {
          created_at:
            "desc",
        },

        take:
          100,
      });

    const hydratedItems =
      await this.hydrateWishlistItems(
        items,
      );

    const wishlistIds = [
      ...new Set(
        items.map(
          (item) =>
            item.wishlist_id,
        ),
      ),
    ];

    const wishlists =
      await this.database.client.wishlists.findMany({
        where: {
          id: {
            in:
              wishlistIds,
          },
        },

        select:
          this.getWishlistSelect(),
      });

    const users =
      await this.database.client.user_profiles.findMany({
        where: {
          id: {
            in:
              wishlists.map(
                (wishlist) =>
                  wishlist.user_id,
              ),
          },
        },

        select: {
          id: true,
          username: true,
          display_name: true,
        },
      });

    const wishlistById =
      new Map(
        wishlists.map(
          (wishlist) => [
            wishlist.id,
            wishlist,
          ],
        ),
      );

    const userById =
      new Map(
        users.map(
          (user) => [
            user.id,
            user,
          ],
        ),
      );

    return hydratedItems.map(
      (item) => {
        const wishlist =
          wishlistById.get(
            item.wishlist_id,
          );

        return {
          ...item,

          wishlist:
            wishlist
              ? {
                  ...wishlist,

                  owner:
                    userById.get(
                      wishlist.user_id,
                    ) ??
                    null,
                }
              : null,
        };
      },
    );
  }

  private async loadWishlistOffer(
    offerId: string,
  ) {
    const offer =
      await this.database.client.wishlist_offers.findUnique({
        where: {
          id:
            offerId,
        },

        select:
          this.getWishlistOfferSelect(),
      });

    if (!offer) {
      throw new NotFoundException(
        "Wishlist offer was not found.",
      );
    }

    const hydrated =
      await this.hydrateWishlistOffers(
        [
          offer,
        ],
      );

    return hydrated[0];
  }

  private async hydrateWishlistOffers(
    offers: any[],
  ) {
    if (
      offers.length ===
      0
    ) {
      return [];
    }

    const offerIds =
      offers.map(
        (offer) =>
          offer.id,
      );

    const wishlistItemIds = [
      ...new Set(
        offers.map(
          (offer) =>
            offer.wishlist_item_id,
        ),
      ),
    ];

    const offeredRows =
      await this.database.client.wishlist_offer_items.findMany({
        where: {
          wishlist_offer_id: {
            in:
              offerIds,
          },
        },

        select: {
          id: true,
          wishlist_offer_id:
            true,
          offerer_user_id:
            true,
          offerer_store_id:
            true,
          inventory_item_id:
            true,
          quantity: true,
          notes: true,
          created_at: true,
        },
      });

    const requestedRows =
      await this.database.client.wishlist_offer_requested_items.findMany({
        where: {
          wishlist_offer_id: {
            in:
              offerIds,
          },
        },

        select: {
          id: true,
          wishlist_offer_id:
            true,

          requested_inventory_item_id:
            true,
          requested_canonical_card_id:
            true,
          requested_printing_id:
            true,

          desired_finish:
            true,
          desired_condition:
            true,
          language_code:
            true,
          quantity: true,
          notes: true,
          created_at: true,
        },
      });

    const wishlistItems =
      await this.database.client.wishlist_items.findMany({
        where: {
          id: {
            in:
              wishlistItemIds,
          },
        },

        select:
          this.getWishlistItemSelect(),
      });

    const hydratedWishlistItems =
      await this.hydrateWishlistItems(
        wishlistItems,
      );

    const wishlistItemById =
      new Map(
        hydratedWishlistItems.map(
          (item) => [
            item.id,
            item,
          ],
        ),
      );

    const wishlistIds = [
      ...new Set(
        wishlistItems.map(
          (item) =>
            item.wishlist_id,
        ),
      ),
    ];

    const wishlists =
      await this.database.client.wishlists.findMany({
        where: {
          id: {
            in:
              wishlistIds,
          },
        },

        select:
          this.getWishlistSelect(),
      });

    const wishlistById =
      new Map(
        wishlists.map(
          (wishlist) => [
            wishlist.id,
            wishlist,
          ],
        ),
      );

    const inventoryIds = [
      ...new Set([
        ...offeredRows.map(
          (row) =>
            row.inventory_item_id,
        ),

        ...requestedRows
          .map(
            (row) =>
              row.requested_inventory_item_id,
          )
          .filter(
            (
              value,
            ): value is string =>
              Boolean(value),
          ),
      ]),
    ];

    const inventories =
      inventoryIds.length >
      0
        ? await this.database.client.inventory_items.findMany({
            where: {
              id: {
                in:
                  inventoryIds,
              },
            },

            select:
              this.getInventoryHydrationSelect(),
          })
        : [];

    const inventoryById =
      new Map(
        inventories.map(
          (inventory) => [
            inventory.id,
            this.mapInventory(
              inventory,
            ),
          ],
        ),
      );

    const requestedCanonicalIds = [
      ...new Set(
        requestedRows
          .map(
            (row) =>
              row.requested_canonical_card_id,
          )
          .filter(
            (
              value,
            ): value is string =>
              Boolean(value),
          ),
      ),
    ];

    const requestedPrintingIds = [
      ...new Set(
        requestedRows
          .map(
            (row) =>
              row.requested_printing_id,
          )
          .filter(
            (
              value,
            ): value is string =>
              Boolean(value),
          ),
      ),
    ];

    const requestedCanonicalCards =
      requestedCanonicalIds.length >
      0
        ? await this.database.client.canonical_cards.findMany({
            where: {
              id: {
                in:
                  requestedCanonicalIds,
              },
            },

            select: {
              id: true,
              name: true,
              mana_cost: true,
              type_line: true,
            },
          })
        : [];

    const requestedPrintings =
      requestedPrintingIds.length >
      0
        ? await this.database.client.card_printings.findMany({
            where: {
              id: {
                in:
                  requestedPrintingIds,
              },
            },

            select: {
              id: true,
              canonical_card_id:
                true,
              collector_number:
                true,
              language_code:
                true,
              printed_name:
                true,
              rarity: true,
              image_small_uri:
                true,
              image_normal_uri:
                true,
              image_large_uri:
                true,

              canonical_cards: {
                select: {
                  id: true,
                  name: true,
                },
              },

              card_sets: {
                select: {
                  id: true,
                  code: true,
                  name: true,
                },
              },
            },
          })
        : [];

    const requestedCanonicalById =
      new Map(
        requestedCanonicalCards.map(
          (card) => [
            card.id,
            card,
          ],
        ),
      );

    const requestedPrintingById =
      new Map(
        requestedPrintings.map(
          (printing) => [
            printing.id,
            printing,
          ],
        ),
      );

    const offererUserIds = [
      ...new Set(
        offers
          .map(
            (offer) =>
              offer.offerer_user_id,
          )
          .filter(
            (
              value,
            ): value is string =>
              Boolean(value),
          ),
      ),
    ];

    const offererStoreIds = [
      ...new Set(
        offers
          .map(
            (offer) =>
              offer.offerer_store_id,
          )
          .filter(
            (
              value,
            ): value is string =>
              Boolean(value),
          ),
      ),
    ];

    const users =
      offererUserIds.length >
      0
        ? await this.database.client.user_profiles.findMany({
            where: {
              id: {
                in:
                  offererUserIds,
              },
            },

            select: {
              id: true,
              username: true,
              display_name: true,
              status: true,
            },
          })
        : [];

    const stores =
      offererStoreIds.length >
      0
        ? await this.database.client.stores.findMany({
            where: {
              id: {
                in:
                  offererStoreIds,
              },
            },

            select: {
              id: true,
              name: true,
              slug: true,
              logo_url: true,
              status: true,
            },
          })
        : [];

    const userById =
      new Map(
        users.map(
          (user) => [
            user.id,
            user,
          ],
        ),
      );

    const storeById =
      new Map(
        stores.map(
          (store) => [
            store.id,
            store,
          ],
        ),
      );

    const offeredByOffer =
      new Map<
        string,
        any[]
      >();

    for (
      const row of
      offeredRows
    ) {
      const current =
        offeredByOffer.get(
          row.wishlist_offer_id,
        ) ??
        [];

      current.push({
        ...row,

        inventory_item:
          inventoryById.get(
            row.inventory_item_id,
          ) ??
          null,
      });

      offeredByOffer.set(
        row.wishlist_offer_id,
        current,
      );
    }

    const requestedByOffer =
      new Map<
        string,
        any[]
      >();

    for (
      const row of
      requestedRows
    ) {
      const current =
        requestedByOffer.get(
          row.wishlist_offer_id,
        ) ??
        [];

      current.push({
        ...row,

        requested_target:
          row.requested_inventory_item_id
            ? {
                type:
                  "inventory_item",

                inventory_item:
                  inventoryById.get(
                    row.requested_inventory_item_id,
                  ) ??
                  null,
              }
            : row.requested_canonical_card_id
              ? {
                  type:
                    "canonical_card",

                  canonical_card:
                    requestedCanonicalById.get(
                      row.requested_canonical_card_id,
                    ) ??
                    null,
                }
              : {
                  type:
                    "printing",

                  printing:
                    row.requested_printing_id
                      ? requestedPrintingById.get(
                          row.requested_printing_id,
                        ) ??
                        null
                      : null,
                },
      });

      requestedByOffer.set(
        row.wishlist_offer_id,
        current,
      );
    }

    return offers.map(
      (offer) => {
        const wishlistItem =
          wishlistItemById.get(
            offer.wishlist_item_id,
          );

        const wishlist =
          wishlistItem
            ? wishlistById.get(
                wishlistItem.wishlist_id,
              ) ??
              null
            : null;

        return {
          ...offer,

          offerer:
            offer.offerer_user_id
              ? {
                  type:
                    "user",

                  user:
                    userById.get(
                      offer.offerer_user_id,
                    ) ??
                    null,
                }
              : {
                  type:
                    "store",

                  store:
                    offer.offerer_store_id
                      ? storeById.get(
                          offer.offerer_store_id,
                        ) ??
                        null
                      : null,
                },

          wishlist_item:
            wishlistItem ??
            null,

          wishlist,

          offered_items:
            offeredByOffer.get(
              offer.id,
            ) ??
            [],

          requested_items:
            requestedByOffer.get(
              offer.id,
            ) ??
            [],
        };
      },
    );
  }

  private async validateOfferedInventoryMatchesWishlistItem(
    wishlistItem: any,
    userId: string,
    items:
      CreateWishlistOfferInput["items"],
  ) {
    const inventoryIds =
      items.map(
        (item) =>
          item.inventoryItemId,
      );

    if (
      new Set(
        inventoryIds,
      ).size !==
      inventoryIds.length
    ) {
      throw new BadRequestException(
        "The same inventory item cannot appear more than once in a wishlist offer.",
      );
    }

    const inventories =
      await this.database.client.inventory_items.findMany({
        where: {
          id: {
            in:
              inventoryIds,
          },

          owner_user_id:
            userId,
        },

        select: {
          id: true,
          printing_id: true,
          finish: true,
          condition: true,
          language_code:
            true,
          quantity: true,
          status: true,
        },
      });

    if (
      inventories.length !==
      inventoryIds.length
    ) {
      throw new BadRequestException(
        "Every offered card must exist in the offerer's registered inventory.",
      );
    }

    const inventoryById =
      new Map(
        inventories.map(
          (inventory) => [
            inventory.id,
            inventory,
          ],
        ),
      );

    const printingIds = [
      ...new Set(
        inventories.map(
          (inventory) =>
            inventory.printing_id,
        ),
      ),
    ];

    const printings =
      await this.database.client.card_printings.findMany({
        where: {
          id: {
            in:
              printingIds,
          },
        },

        select: {
          id: true,
          canonical_card_id:
            true,
        },
      });

    const printingById =
      new Map(
        printings.map(
          (printing) => [
            printing.id,
            printing,
          ],
        ),
      );

    let totalQuantity =
      0;

    for (
      const requestedItem of
      items
    ) {
      const inventory =
        inventoryById.get(
          requestedItem.inventoryItemId,
        );

      if (!inventory) {
        throw new BadRequestException(
          "An offered inventory item could not be found.",
        );
      }

      if (
        inventory.status !==
        "available"
      ) {
        throw new BadRequestException(
          "Only available inventory items can be offered.",
        );
      }

      if (
        requestedItem.quantity !==
        inventory.quantity
      ) {
        throw new BadRequestException(
          "A wishlist offer must include the full registered inventory quantity. Split the inventory item first if only part should be offered.",
        );
      }

      const printing =
        printingById.get(
          inventory.printing_id,
        );

      if (!printing) {
        throw new ConflictException(
          "The printing for an offered inventory item could not be loaded.",
        );
      }

      const identityMatches =
        wishlistItem.printing_id
          ? inventory.printing_id ===
            wishlistItem.printing_id
          : printing.canonical_card_id ===
            wishlistItem.canonical_card_id;

      if (!identityMatches) {
        throw new BadRequestException(
          "Every offered inventory item must match the card requested by this wishlist item.",
        );
      }

      if (
        wishlistItem.desired_finish &&
        inventory.finish !==
          wishlistItem.desired_finish
      ) {
        throw new BadRequestException(
          "An offered card does not match the desired finish.",
        );
      }

      if (
        wishlistItem.desired_condition &&
        inventory.condition !==
          wishlistItem.desired_condition
      ) {
        throw new BadRequestException(
          "An offered card does not match the desired condition.",
        );
      }

      if (
        wishlistItem.language_code &&
        inventory.language_code !==
          wishlistItem.language_code
      ) {
        throw new BadRequestException(
          "An offered card does not match the desired language.",
        );
      }

      totalQuantity +=
        requestedItem.quantity;
    }

    if (
      totalQuantity >
      wishlistItem.quantity_desired
    ) {
      throw new BadRequestException(
        "This offer contains more copies than the wishlist item requests.",
      );
    }
  }

  private async validateRequestedTradeItems(
    wishlistOwnerUserId: string,
    requestedItems:
      CreateWishlistOfferInput["requestedItems"],
  ) {
    const exactInventoryRequests =
      requestedItems.filter(
        (item) =>
          Boolean(
            item.requestedInventoryItemId,
          ),
      );

    if (
      exactInventoryRequests.length >
      0
    ) {
      const ids =
        exactInventoryRequests.map(
          (item) =>
            item.requestedInventoryItemId as string,
        );

      if (
        new Set(
          ids,
        ).size !==
        ids.length
      ) {
        throw new BadRequestException(
          "The same exact inventory item cannot be requested more than once.",
        );
      }

      const inventory =
        await this.database.client.inventory_items.findMany({
          where: {
            id: {
              in:
                ids,
            },

            owner_user_id:
              wishlistOwnerUserId,
          },

          select: {
            id: true,
            quantity: true,
            status: true,
          },
        });

      if (
        inventory.length !==
        ids.length
      ) {
        throw new BadRequestException(
          "Every exact requested inventory item must belong to the wishlist owner.",
        );
      }

      const inventoryById =
        new Map(
          inventory.map(
            (item) => [
              item.id,
              item,
            ],
          ),
        );

      for (
        const requested of
        exactInventoryRequests
      ) {
        const inventoryItem =
          inventoryById.get(
            requested.requestedInventoryItemId as string,
          );

        if (!inventoryItem) {
          throw new BadRequestException(
            "An exact requested inventory item could not be found.",
          );
        }

        if (
          inventoryItem.status !==
          "available"
        ) {
          throw new BadRequestException(
            "An exact requested inventory item must currently be available.",
          );
        }

        if (
          requested.quantity !==
          inventoryItem.quantity
        ) {
          throw new BadRequestException(
            "An exact requested inventory item must use its full registered quantity.",
          );
        }
      }
    }

    const canonicalIds = [
      ...new Set(
        requestedItems
          .map(
            (item) =>
              item.requestedCanonicalCardId,
          )
          .filter(
            (
              value,
            ): value is string =>
              Boolean(value),
          ),
      ),
    ];

    if (
      canonicalIds.length >
      0
    ) {
      const cards =
        await this.database.client.canonical_cards.findMany({
          where: {
            id: {
              in:
                canonicalIds,
            },
          },

          select: {
            id: true,
          },
        });

      if (
        cards.length !==
        canonicalIds.length
      ) {
        throw new BadRequestException(
          "One or more requested canonical cards do not exist.",
        );
      }
    }

    const printingIds = [
      ...new Set(
        requestedItems
          .map(
            (item) =>
              item.requestedPrintingId,
          )
          .filter(
            (
              value,
            ): value is string =>
              Boolean(value),
          ),
      ),
    ];

    if (
      printingIds.length >
      0
    ) {
      const printings =
        await this.database.client.card_printings.findMany({
          where: {
            id: {
              in:
                printingIds,
            },
          },

          select: {
            id: true,
          },
        });

      if (
        printings.length !==
        printingIds.length
      ) {
        throw new BadRequestException(
          "One or more requested printings do not exist.",
        );
      }
    }
  }

  async createUserWishlistOffer(
    userId: string,
    wishlistItemId: string,
    input:
      CreateWishlistOfferInput,
  ) {
    await this.requireActiveUser(
      userId,
    );

    const wishlistItem =
      await this.database.client.wishlist_items.findUnique({
        where: {
          id:
            wishlistItemId,
        },

        select:
          this.getWishlistItemSelect(),
      });

    if (
      !wishlistItem ||
      wishlistItem.status !==
        "active"
    ) {
      throw new NotFoundException(
        "Active wishlist item was not found.",
      );
    }

    const wishlist =
      await this.database.client.wishlists.findUnique({
        where: {
          id:
            wishlistItem.wishlist_id,
        },

        select:
          this.getWishlistSelect(),
      });

    if (
      !wishlist ||
      wishlist.status !==
        "active"
    ) {
      throw new BadRequestException(
        "This wishlist is not currently active.",
      );
    }

    if (
      wishlist.user_id ===
      userId
    ) {
      throw new BadRequestException(
        "A user cannot make an offer on their own wishlist item.",
      );
    }

    if (
      wishlist.visibility ===
      "private"
    ) {
      throw new ForbiddenException(
        "Private wishlist items cannot receive public user offers.",
      );
    }

    if (
      input.requestsCash &&
      !wishlistItem.willing_to_pay_cash
    ) {
      throw new BadRequestException(
        "The wishlist owner is not accepting cash acquisition terms for this item.",
      );
    }

    if (
      input.requestsTrade &&
      !wishlistItem.willing_to_trade_cards
    ) {
      throw new BadRequestException(
        "The wishlist owner is not accepting card-trade terms for this item.",
      );
    }

    if (
      input.requestsCash &&
      wishlistItem.max_cash_amount !==
        null &&
      input.cashAskAmount !==
        undefined &&
      input.cashAskAmount !==
        null &&
      Number(
        input.cashAskAmount,
      ) >
        Number(
          wishlistItem.max_cash_amount,
        )
    ) {
      throw new BadRequestException(
        "The requested cash amount exceeds the wishlist owner's stated maximum.",
      );
    }

    if (
      input.requestsCash &&
      wishlistItem.currency_code &&
      input.currencyCode !==
        wishlistItem.currency_code
    ) {
      throw new BadRequestException(
        "The offer currency must match the wishlist item's stated currency.",
      );
    }

    await this.validateOfferedInventoryMatchesWishlistItem(
      wishlistItem,
      userId,
      input.items,
    );

    if (
      input.requestsTrade
    ) {
      await this.validateRequestedTradeItems(
        wishlist.user_id,
        input.requestedItems,
      );
    }

    const offerId =
      await this.database.client.$transaction(
        async (
          transaction,
        ) => {
          const offer =
            await transaction.wishlist_offers.create({
              data: {
                wishlist_item_id:
                  wishlistItemId,

                offerer_user_id:
                  userId,

                offerer_store_id:
                  null,

                requests_cash:
                  input.requestsCash,

                requests_trade:
                  input.requestsTrade,

                cash_ask_amount:
                  input.requestsCash
                    ? input.cashAskAmount ??
                      null
                    : null,

                currency_code:
                  input.requestsCash
                    ? input.currencyCode ??
                      null
                    : null,

                message:
                  input.message ??
                  null,

                trade_terms_note:
                  input.tradeTermsNote ??
                  null,

                status:
                  "pending",

                expires_at:
                  input.expiresAt ??
                  null,

                responded_at:
                  null,
              },

              select: {
                id: true,
              },
            });

          await transaction.wishlist_offer_items.createMany({
            data:
              input.items.map(
                (item) => ({
                  wishlist_offer_id:
                    offer.id,

                  offerer_user_id:
                    userId,

                  offerer_store_id:
                    null,

                  inventory_item_id:
                    item.inventoryItemId,

                  quantity:
                    item.quantity,

                  notes:
                    item.notes ??
                    null,
                }),
              ),
          });

          if (
            input.requestedItems.length >
            0
          ) {
            await transaction.wishlist_offer_requested_items.createMany({
              data:
                input.requestedItems.map(
                  (item) => ({
                    wishlist_offer_id:
                      offer.id,

                    requested_inventory_item_id:
                      item.requestedInventoryItemId ??
                      null,

                    requested_canonical_card_id:
                      item.requestedCanonicalCardId ??
                      null,

                    requested_printing_id:
                      item.requestedPrintingId ??
                      null,

                    desired_finish:
                      item.desiredFinish ??
                      null,

                    desired_condition:
                      item.desiredCondition ??
                      null,

                    language_code:
                      item.languageCode ??
                      null,

                    quantity:
                      item.quantity,

                    notes:
                      item.notes ??
                      null,
                  }),
                ),
            });
          }

          return offer.id;
        },
      );

    return this.loadWishlistOffer(
      offerId,
    );
  }

  async getUserSentWishlistOffers(
    userId: string,
  ) {
    await this.requireActiveUser(
      userId,
    );

    const offers =
      await this.database.client.wishlist_offers.findMany({
        where: {
          offerer_user_id:
            userId,
        },

        select:
          this.getWishlistOfferSelect(),

        orderBy: {
          created_at:
            "desc",
        },
      });

    return this.hydrateWishlistOffers(
      offers,
    );
  }

  async getUserReceivedWishlistOffers(
    ownerUserId: string,
    wishlistItemId: string,
  ) {
    const item =
      await this.database.client.wishlist_items.findFirst({
        where: {
          id:
            wishlistItemId,

          wishlists: {
            user_id:
              ownerUserId,
          },
        },

        select: {
          id: true,
        },
      });

    if (!item) {
      throw new NotFoundException(
        "Wishlist item was not found or does not belong to this user.",
      );
    }

    const offers =
      await this.database.client.wishlist_offers.findMany({
        where: {
          wishlist_item_id:
            wishlistItemId,
        },

        select:
          this.getWishlistOfferSelect(),

        orderBy: {
          created_at:
            "desc",
        },
      });

    return this.hydrateWishlistOffers(
      offers,
    );
  }

  async withdrawUserWishlistOffer(
    userId: string,
    offerId: string,
  ) {
    const offer =
      await this.database.client.wishlist_offers.findFirst({
        where: {
          id:
            offerId,

          offerer_user_id:
            userId,
        },

        select: {
          id: true,
          status: true,
        },
      });

    if (!offer) {
      throw new NotFoundException(
        "Wishlist offer was not found or does not belong to this user.",
      );
    }

    if (
      offer.status !==
      "pending"
    ) {
      throw new BadRequestException(
        "Only pending wishlist offers can be withdrawn.",
      );
    }

    await this.database.client.wishlist_offers.update({
      where: {
        id:
          offerId,
      },

      data: {
        status:
          "withdrawn",

        updated_at:
          new Date(),
      },
    });

    return this.loadWishlistOffer(
      offerId,
    );
  }

  async rejectUserWishlistOffer(
    ownerUserId: string,
    offerId: string,
  ) {
    const offer =
      await this.database.client.wishlist_offers.findUnique({
        where: {
          id:
            offerId,
        },

        select: {
          id: true,
          wishlist_item_id:
            true,
          status: true,
        },
      });

    if (!offer) {
      throw new NotFoundException(
        "Wishlist offer was not found.",
      );
    }

    const item =
      await this.database.client.wishlist_items.findFirst({
        where: {
          id:
            offer.wishlist_item_id,

          wishlists: {
            user_id:
              ownerUserId,
          },
        },

        select: {
          id: true,
        },
      });

    if (!item) {
      throw new NotFoundException(
        "Wishlist item was not found or does not belong to this user.",
      );
    }

    if (
      offer.status !==
      "pending"
    ) {
      throw new BadRequestException(
        "Only pending wishlist offers can be rejected.",
      );
    }

    const now =
      new Date();

    await this.database.client.wishlist_offers.update({
      where: {
        id:
          offerId,
      },

      data: {
        status:
          "rejected",

        responded_at:
          now,

        updated_at:
          now,
      },
    });

    return this.loadWishlistOffer(
      offerId,
    );
  }
}
