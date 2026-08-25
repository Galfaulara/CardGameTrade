import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import type {
  AcceptListingOfferInput,
  CreateListingOfferInput,
} from "@repo/validation";

import { DatabaseService } from "../database/database.service";

@Injectable()
export class OffersService {
  constructor(
    private readonly database: DatabaseService,
  ) {}

  private getOfferSelect() {
    return {
      id: true,
      listing_id: true,
      offerer_user_id: true,
      offerer_store_id: true,
      cash_amount: true,
      currency_code: true,
      message: true,
      visibility: true,
      status: true,
      expires_at: true,
      responded_at: true,
      created_at: true,
      updated_at: true,

      user_profiles: {
        select: {
          id: true,
          username: true,
          display_name: true,
        },
      },

      stores: {
        select: {
          id: true,
          name: true,
          slug: true,
          logo_url: true,
        },
      },

      listings: {
        select: {
          id: true,
          inventory_item_id: true,
          seller_user_id: true,
          seller_store_id: true,
          accepts_cash: true,
          accepts_trade: true,
          asking_price: true,
          currency_code: true,
          preferred_store_id: true,
          title: true,
          description: true,
          status: true,
        },
      },

      offer_items_offer_items_offer_idTolisting_offers: {
        select: {
          id: true,
          inventory_item_id: true,
          quantity: true,
          notes: true,
          created_at: true,

          inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items:
            {
              select: {
                id: true,
                finish: true,
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
                        collector_number: true,
                        language_code: true,
                        printed_name: true,
                        rarity: true,
                        treatment: true,

                        image_small_uri: true,
                        image_normal_uri: true,
                        image_large_uri: true,

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
              },
            },

          inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items:
            {
              select: {
                id: true,
                finish: true,
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
                        collector_number: true,
                        language_code: true,
                        printed_name: true,
                        rarity: true,
                        treatment: true,

                        image_small_uri: true,
                        image_normal_uri: true,
                        image_large_uri: true,

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
              },
            },
        },
      },
    } as const;
  }

  private mapOffer(
    offer: any,
  ) {
    const {
      offer_items_offer_items_offer_idTolisting_offers: rawItems,
      ...offerData
    } = offer;

    const items = rawItems.map(
      (item: any) => {
        const inventoryItem =
          item
            .inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items ??
          item
            .inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items;

        const {
          inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items:
            _userRelation,
          inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items:
            _storeRelation,
          ...itemData
        } = item;

        if (!inventoryItem) {
          return {
            ...itemData,
            inventory_item: null,
          };
        }

        const {
          printing_finishes,
          ...inventoryData
        } = inventoryItem;

        return {
          ...itemData,
          inventory_item: {
            ...inventoryData,
            printing: {
              ...printing_finishes.card_printings,
              finish: printing_finishes.finish,
            },
          },
        };
      },
    );

    return {
      ...offerData,
      items,
    };
  }

  private async loadOffer(
    offerId: string,
  ) {
    const offer =
      await this.database.client.listing_offers.findUnique({
        where: {
          id: offerId,
        },
        select: this.getOfferSelect(),
      });

    if (!offer) {
      throw new NotFoundException(
        "Offer was not found.",
      );
    }

    return this.mapOffer(offer);
  }

  private async getAcceptedTransaction(
    transactionId: string,
  ) {
    const transaction =
      await this.database.client.transactions.findUnique({
        where: {
          id: transactionId,
        },

        select: {
          id: true,
          listing_id: true,
          accepted_offer_id: true,

          seller_user_id: true,
          seller_store_id: true,

          counterparty_user_id: true,
          counterparty_store_id: true,

          transaction_type: true,
          cash_amount: true,
          currency_code: true,

          status: true,
          agreed_at: true,
          completed_at: true,
          created_at: true,
          updated_at: true,

          transaction_items: {
            select: {
              id: true,
              inventory_item_id: true,
              item_role: true,
              quantity: true,
              from_user_id: true,
              from_store_id: true,
              to_user_id: true,
              to_store_id: true,
            },
            orderBy: {
              created_at: "asc",
            },
          },

          store_trade_handoffs: {
            select: {
              id: true,
              store_id: true,
              status: true,
              created_at: true,

              stores: {
                select: {
                  id: true,
                  name: true,
                  slug: true,
                  city: true,
                  state_region: true,
                  country_code: true,
                  trade_mediation_enabled: true,
                },
              },
            },
          },
        },
      });

    if (!transaction) {
      throw new NotFoundException(
        "Transaction was not found after offer acceptance.",
      );
    }

    const custody =
      await this.database.client.transaction_item_custody.findMany({
        where: {
          transaction_id: transactionId,
        },

        select: {
          id: true,
          transaction_item_id: true,
          store_id: true,
          custody_status: true,
          received_at: true,
          verified_at: true,
          released_at: true,
          issue_notes: true,
        },

        orderBy: {
          created_at: "asc",
        },
      });

    return {
      ...transaction,
      custody,
    };
  }

  async getUserSentOffers(
    userId: string,
  ) {
    const user =
      await this.database.client.user_profiles.findUnique({
        where: {
          id: userId,
        },
        select: {
          id: true,
        },
      });

    if (!user) {
      throw new NotFoundException(
        "User was not found.",
      );
    }

    const offers =
      await this.database.client.listing_offers.findMany({
        where: {
          offerer_user_id: userId,
        },
        select: this.getOfferSelect(),
        orderBy: {
          created_at: "desc",
        },
      });

    return offers.map(
      (offer) =>
        this.mapOffer(offer),
    );
  }

  async getUserReceivedOffers(
    userId: string,
    listingId: string,
  ) {
    const listing =
      await this.database.client.listings.findFirst({
        where: {
          id: listingId,
          seller_user_id: userId,
        },
        select: {
          id: true,
        },
      });

    if (!listing) {
      throw new NotFoundException(
        "Listing was not found or does not belong to this user.",
      );
    }

    const offers =
      await this.database.client.listing_offers.findMany({
        where: {
          listing_id: listingId,
        },
        select: this.getOfferSelect(),
        orderBy: {
          created_at: "desc",
        },
      });

    return offers.map(
      (offer) =>
        this.mapOffer(offer),
    );
  }

  async createUserOffer(
    userId: string,
    listingId: string,
    input: CreateListingOfferInput,
    interestId?: string,
  ) {
    const user =
      await this.database.client.user_profiles.findUnique({
        where: {
          id: userId,
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

    if (user.status !== "active") {
      throw new ForbiddenException(
        "Offers cannot be created for an inactive user.",
      );
    }

    const listing =
      await this.database.client.listings.findUnique({
        where: {
          id: listingId,
        },
        select: {
          id: true,
          inventory_item_id: true,
          seller_user_id: true,
          seller_store_id: true,
          accepts_cash: true,
          accepts_trade: true,
          status: true,
        },
      });

    if (!listing) {
      throw new NotFoundException(
        "Listing was not found.",
      );
    }

    if (listing.status !== "active") {
      throw new BadRequestException(
        "Offers can only be made on active listings.",
      );
    }

    if (
      listing.seller_user_id ===
      userId
    ) {
      throw new BadRequestException(
        "A user cannot make an offer on their own listing.",
      );
    }

    const hasCash =
      input.cashAmount > 0;

    const hasTradeItems =
      input.items.length > 0;

    if (
      hasCash &&
      !listing.accepts_cash
    ) {
      throw new BadRequestException(
        "This listing does not accept cash offers.",
      );
    }

    if (
      hasTradeItems &&
      !listing.accepts_trade
    ) {
      throw new BadRequestException(
        "This listing does not accept card trades.",
      );
    }

    if (
      input.expiresAt &&
      input.expiresAt <=
        new Date()
    ) {
      throw new BadRequestException(
        "Offer expiration must be in the future.",
      );
    }

    if (hasTradeItems) {
      const inventoryIds =
        input.items.map(
          (item) =>
            item.inventoryItemId,
        );

      const inventoryItems =
        await this.database.client.inventory_items.findMany({
          where: {
            id: {
              in: inventoryIds,
            },
            owner_user_id: userId,
          },
          select: {
            id: true,
            status: true,
            quantity: true,
          },
        });

      if (
        inventoryItems.length !==
        inventoryIds.length
      ) {
        throw new BadRequestException(
          "Every offered card must exist in the offerer's inventory.",
        );
      }

      const inventoryById =
        new Map(
          inventoryItems.map(
            (item) => [
              item.id,
              item,
            ],
          ),
        );

      for (
        const requestedItem of
        input.items
      ) {
        const inventoryItem =
          inventoryById.get(
            requestedItem.inventoryItemId,
          );

        if (!inventoryItem) {
          throw new BadRequestException(
            "An offered inventory item could not be found.",
          );
        }

        if (
          inventoryItem.status !==
          "available"
        ) {
          throw new BadRequestException(
            "Only available inventory items can be offered.",
          );
        }

        if (
          requestedItem.quantity !==
          inventoryItem.quantity
        ) {
          throw new BadRequestException(
            "An offered inventory item must include its full registered quantity. Split the inventory item first if only part of the quantity should be offered.",
          );
        }
      }
    }

    const offerId =
      await this.database.client.$transaction(
        async (
          transaction,
        ) => {
          const now =
            new Date();

          if (interestId) {
            const interest =
              await transaction.inventory_item_interests.findUnique({
                where: {
                  id: interestId,
                },
                select: {
                  id: true,
                  inventory_item_id: true,
                  interested_user_id: true,
                  interested_store_id: true,
                  interest_type: true,
                  status: true,
                  converted_listing_offer_id: true,
                  converted_wishlist_offer_id: true,
                  converted_at: true,
                },
              });

            if (!interest) {
              throw new NotFoundException(
                "Inventory-item interest was not found.",
              );
            }

            if (
              interest.interested_user_id !==
                userId ||
              interest.interested_store_id !==
                null
            ) {
              throw new ForbiddenException(
                "Only the user who created this interest can convert it into a listing offer.",
              );
            }

            if (
              interest.inventory_item_id !==
              listing.inventory_item_id
            ) {
              throw new BadRequestException(
                "This interest does not target the inventory item used by this listing.",
              );
            }

            if (
              interest.status !==
              "active"
            ) {
              throw new ConflictException(
                "Only an active inventory-item interest can be converted into an offer.",
              );
            }

            if (
              interest.converted_listing_offer_id ||
              interest.converted_wishlist_offer_id ||
              interest.converted_at
            ) {
              throw new ConflictException(
                "This inventory-item interest has already been converted.",
              );
            }

            if (
              interest.interest_type ===
                "watch"
            ) {
              throw new BadRequestException(
                "A watch-only interest cannot be converted into a marketplace offer.",
              );
            }

            if (
              interest.interest_type ===
                "buy" &&
              hasTradeItems
            ) {
              throw new BadRequestException(
                "A buy-only interest cannot be converted into an offer containing trade items.",
              );
            }

            if (
              interest.interest_type ===
                "trade" &&
              hasCash
            ) {
              throw new BadRequestException(
                "A trade-only interest cannot be converted into an offer containing cash.",
              );
            }
          }

          const offer =
            await transaction.listing_offers.create({
              data: {
                listing_id: listingId,
                offerer_user_id: userId,
                offerer_store_id: null,
                cash_amount: input.cashAmount,
                currency_code: input.currencyCode,
                message: input.message ?? null,
                visibility: input.visibility,
                status: "pending",
                expires_at:
                  input.expiresAt ?? null,
                responded_at: null,
              },
              select: {
                id: true,
              },
            });

          if (
            input.items.length > 0
          ) {
            await transaction.offer_items.createMany({
              data:
                input.items.map(
                  (item) => ({
                    offer_id: offer.id,
                    offerer_user_id:
                      userId,
                    offerer_store_id:
                      null,
                    inventory_item_id:
                      item.inventoryItemId,
                    quantity:
                      item.quantity,
                    notes:
                      item.notes ?? null,
                  }),
                ),
            });
          }

          if (interestId) {
            const converted =
              await transaction.inventory_item_interests.updateMany({
                where: {
                  id: interestId,
                  interested_user_id: userId,
                  interested_store_id: null,
                  inventory_item_id: listing.inventory_item_id,
                  status: "active",
                  converted_listing_offer_id: null,
                  converted_wishlist_offer_id: null,
                  converted_at: null,
                },
                data: {
                  status: "converted_to_offer",
                  converted_listing_offer_id: offer.id,
                  converted_at: now,
                  updated_at: now,
                },
              });

            if (
              converted.count !==
              1
            ) {
              throw new ConflictException(
                "The inventory-item interest changed while the listing offer was being created.",
              );
            }
          }

          return offer.id;
        },
      );

    return this.loadOffer(
      offerId,
    );
  }

  async withdrawUserOffer(
    userId: string,
    offerId: string,
  ) {
    const offer =
      await this.database.client.listing_offers.findFirst({
        where: {
          id: offerId,
          offerer_user_id: userId,
        },
        select: {
          id: true,
          status: true,
        },
      });

    if (!offer) {
      throw new NotFoundException(
        "Offer was not found or does not belong to this user.",
      );
    }

    if (
      offer.status !==
      "pending"
    ) {
      throw new BadRequestException(
        "Only pending offers can be withdrawn.",
      );
    }

    await this.database.client.listing_offers.update({
      where: {
        id: offerId,
      },
      data: {
        status: "withdrawn",
        updated_at: new Date(),
      },
    });

    return this.loadOffer(
      offerId,
    );
  }

  async rejectUserOffer(
    sellerUserId: string,
    offerId: string,
  ) {
    const offer =
      await this.database.client.listing_offers.findUnique({
        where: {
          id: offerId,
        },
        select: {
          id: true,
          listing_id: true,
          status: true,
        },
      });

    if (!offer) {
      throw new NotFoundException(
        "Offer was not found.",
      );
    }

    const listing =
      await this.database.client.listings.findFirst({
        where: {
          id:
            offer.listing_id,
          seller_user_id:
            sellerUserId,
        },
        select: {
          id: true,
        },
      });

    if (!listing) {
      throw new NotFoundException(
        "Listing was not found or does not belong to this user.",
      );
    }

    if (
      offer.status !==
      "pending"
    ) {
      throw new BadRequestException(
        "Only pending offers can be rejected.",
      );
    }

    const now =
      new Date();

    await this.database.client.listing_offers.update({
      where: {
        id: offerId,
      },
      data: {
        status: "rejected",
        responded_at: now,
        updated_at: now,
      },
    });

    return this.loadOffer(
      offerId,
    );
  }

  async acceptUserOffer(
    sellerUserId: string,
    offerId: string,
    input: AcceptListingOfferInput,
  ) {
    const transactionId =
      await this.database.client.$transaction(
        async (
          transaction,
        ) => {
          const now =
            new Date();

          const offer =
            await transaction.listing_offers.findUnique({
              where: {
                id: offerId,
              },
              select: {
                id: true,
                listing_id: true,
                offerer_user_id: true,
                offerer_store_id: true,
                cash_amount: true,
                currency_code: true,
                status: true,
                expires_at: true,
              },
            });

          if (!offer) {
            throw new NotFoundException(
              "Offer was not found.",
            );
          }

          if (
            offer.status !==
            "pending"
          ) {
            throw new ConflictException(
              "This offer is no longer pending.",
            );
          }

          if (
            offer.expires_at &&
            offer.expires_at <=
              now
          ) {
            throw new BadRequestException(
              "This offer has expired.",
            );
          }

          if (
            !offer.offerer_user_id ||
            offer.offerer_store_id
          ) {
            throw new BadRequestException(
              "Store-created offer acceptance is not implemented yet.",
            );
          }

          const listing =
            await transaction.listings.findUnique({
              where: {
                id:
                  offer.listing_id,
              },
              select: {
                id: true,
                inventory_item_id: true,
                seller_user_id: true,
                seller_store_id: true,
                status: true,
              },
            });

          if (!listing) {
            throw new NotFoundException(
              "Listing was not found.",
            );
          }

          if (
            listing.seller_user_id !==
              sellerUserId ||
            listing.seller_store_id !==
              null
          ) {
            throw new ForbiddenException(
              "Only the user who owns this listing can accept the offer.",
            );
          }

          if (
            listing.status !==
            "active"
          ) {
            throw new ConflictException(
              "The listing is no longer active.",
            );
          }

          const store =
            await transaction.stores.findFirst({
              where: {
                id: input.storeId,
                status: "active",
                verification_status:
                  "verified",
                trade_mediation_enabled:
                  true,
              },
              select: {
                id: true,
              },
            });

          if (!store) {
            throw new BadRequestException(
              "The selected store is not currently eligible to mediate DeckDeal trades.",
            );
          }

          const listedInventory =
            await transaction.inventory_items.findFirst({
              where: {
                id:
                  listing.inventory_item_id,
                owner_user_id:
                  sellerUserId,
              },
              select: {
                id: true,
                quantity: true,
                status: true,
              },
            });

          if (!listedInventory) {
            throw new ConflictException(
              "The listed inventory item no longer belongs to the seller.",
            );
          }

          if (
            listedInventory.status !==
            "available"
          ) {
            throw new ConflictException(
              "The listed inventory item is no longer available.",
            );
          }

          const offerItems =
            await transaction.offer_items.findMany({
              where: {
                offer_id: offerId,
              },
              select: {
                id: true,
                inventory_item_id: true,
                quantity: true,
              },
            });

          const offeredInventoryIds =
            offerItems.map(
              (item) =>
                item.inventory_item_id,
            );

          const offeredInventory =
            offeredInventoryIds.length >
            0
              ? await transaction.inventory_items.findMany({
                  where: {
                    id: {
                      in:
                        offeredInventoryIds,
                    },
                    owner_user_id:
                      offer.offerer_user_id,
                  },
                  select: {
                    id: true,
                    quantity: true,
                    status: true,
                  },
                })
              : [];

          if (
            offeredInventory.length !==
            offeredInventoryIds.length
          ) {
            throw new ConflictException(
              "One or more offered inventory items no longer belong to the offerer.",
            );
          }

          const offeredInventoryById =
            new Map(
              offeredInventory.map(
                (item) => [
                  item.id,
                  item,
                ],
              ),
            );

          for (
            const offerItem of
            offerItems
          ) {
            const inventoryItem =
              offeredInventoryById.get(
                offerItem.inventory_item_id,
              );

            if (!inventoryItem) {
              throw new ConflictException(
                "An offered inventory item could not be loaded.",
              );
            }

            if (
              inventoryItem.status !==
              "available"
            ) {
              throw new ConflictException(
                "One or more offered cards are no longer available.",
              );
            }

            if (
              offerItem.quantity !==
              inventoryItem.quantity
            ) {
              throw new ConflictException(
                "An offered inventory quantity no longer matches the registered inventory lot.",
              );
            }
          }

          const claimedListing =
            await transaction.listings.updateMany({
              where: {
                id: listing.id,
                status: "active",
              },
              data: {
                status: "closed",
                updated_at: now,
              },
            });

          if (
            claimedListing.count !==
            1
          ) {
            throw new ConflictException(
              "The listing changed while the offer was being accepted.",
            );
          }

          const claimedOffer =
            await transaction.listing_offers.updateMany({
              where: {
                id: offer.id,
                status: "pending",
              },
              data: {
                status: "accepted",
                responded_at: now,
                updated_at: now,
              },
            });

          if (
            claimedOffer.count !==
            1
          ) {
            throw new ConflictException(
              "The offer changed while it was being accepted.",
            );
          }

          await transaction.listing_offers.updateMany({
            where: {
              listing_id:
                listing.id,
              id: {
                not: offer.id,
              },
              status: "pending",
            },
            data: {
              status: "cancelled",
              updated_at: now,
            },
          });

          const hasCash =
            Number(
              offer.cash_amount,
            ) > 0;

          const hasTradeItems =
            offerItems.length > 0;
/*
 * These values follow the PostgreSQL
 * chk_transactions_type constraint:
 *
 * cash_sale
 * card_trade
 * mixed_cash_and_trade
 */
const transactionType =
  hasCash &&
  hasTradeItems
    ? "mixed_cash_and_trade"
    : hasTradeItems
      ? "card_trade"
      : "cash_sale";

          const createdTransaction =
            await transaction.transactions.create({
              data: {
                listing_id: listing.id,
                accepted_offer_id:
                  offer.id,
                accepted_wishlist_offer_id:
                  null,

                seller_user_id:
                  sellerUserId,
                seller_store_id:
                  null,

                counterparty_user_id:
                  offer.offerer_user_id,
                counterparty_store_id:
                  null,

                transaction_type:
                  transactionType,

                cash_amount:
                  offer.cash_amount,
                currency_code:
                  offer.currency_code,

                status:
                  "awaiting_handoff",
                agreed_at:
                  now,
                completed_at:
                  null,
                updated_at:
                  now,
              },
              select: {
                id: true,
              },
            });

          const listedTransactionItem =
            await transaction.transaction_items.create({
              data: {
                transaction_id:
                  createdTransaction.id,
                inventory_item_id:
                  listedInventory.id,
                item_role:
                  "listed_item",
                quantity:
                  listedInventory.quantity,

                from_user_id:
                  sellerUserId,
                from_store_id:
                  null,
                to_user_id:
                  offer.offerer_user_id,
                to_store_id:
                  null,

                market_snapshot_id:
                  null,
                agreed_unit_value:
                  null,
                currency_code:
                  null,
              },
              select: {
                id: true,
              },
            });

          const offeredTransactionItemIds:
            string[] = [];

          for (
            const offerItem of
            offerItems
          ) {
            const transactionItem =
              await transaction.transaction_items.create({
                data: {
                  transaction_id:
                    createdTransaction.id,
                  inventory_item_id:
                    offerItem.inventory_item_id,
                  item_role:
                    "offered_item",
                  quantity:
                    offerItem.quantity,

                  from_user_id:
                    offer.offerer_user_id,
                  from_store_id:
                    null,
                  to_user_id:
                    sellerUserId,
                  to_store_id:
                    null,

                  market_snapshot_id:
                    null,
                  agreed_unit_value:
                    null,
                  currency_code:
                    null,
                },
                select: {
                  id: true,
                },
              });

            offeredTransactionItemIds.push(
              transactionItem.id,
            );
          }

          const listedReservation =
            await transaction.inventory_items.updateMany({
              where: {
                id:
                  listedInventory.id,
                owner_user_id:
                  sellerUserId,
                status:
                  "available",
              },
              data: {
                status: "in_trade",
                updated_at: now,
              },
            });

          if (
            listedReservation.count !==
            1
          ) {
            throw new ConflictException(
              "The listed card could not be reserved for the trade.",
            );
          }

          for (
            const inventoryItem of
            offeredInventory
          ) {
            const reservation =
              await transaction.inventory_items.updateMany({
                where: {
                  id:
                    inventoryItem.id,
                  owner_user_id:
                    offer.offerer_user_id,
                  status:
                    "available",
                },
                data: {
                  status:
                    "in_trade",
                  updated_at:
                    now,
                },
              });

            if (
              reservation.count !==
              1
            ) {
              throw new ConflictException(
                "An offered card could not be reserved for the trade.",
              );
            }
          }

          const handoff =
            await transaction.store_trade_handoffs.create({
              data: {
                transaction_id:
                  createdTransaction.id,
                store_id:
                  store.id,
                status:
                  "awaiting_items",
                updated_at:
                  now,
              },
              select: {
                id: true,
              },
            });

          const transactionItemIds = [
            listedTransactionItem.id,
            ...offeredTransactionItemIds,
          ];

          for (
            const transactionItemId of
            transactionItemIds
          ) {
            await transaction.transaction_item_custody.create({
              data: {
                handoff_id:
                  handoff.id,
                transaction_id:
                  createdTransaction.id,
                store_id:
                  store.id,
                transaction_item_id:
                  transactionItemId,
                custody_status:
                  "awaiting_delivery_to_store",
                updated_at:
                  now,
              },
            });
          }

          return createdTransaction.id;
        },
        {
          isolationLevel:
            "Serializable",
        },
      );

    return this.getAcceptedTransaction(
      transactionId,
    );
  }
}
