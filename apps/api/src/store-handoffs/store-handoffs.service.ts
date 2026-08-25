import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import { DatabaseService } from "../database/database.service";

@Injectable()
export class StoreHandoffsService {
  constructor(
    private readonly database:
      DatabaseService,
  ) {}

  private async requireActiveStoreStaff(
    storeId: string,
    staffUserId: string,
    transaction?: any,
  ) {
    const client =
      transaction ??
      this.database.client;

    const staff =
      await client.store_staff.findFirst({
        where: {
          store_id:
            storeId,

          user_id:
            staffUserId,

          status:
            "active",
        },

        select: {
          id: true,
          store_id: true,
          user_id: true,
          role: true,
          status: true,
        },
      });

    if (!staff) {
      throw new ForbiddenException(
        "The user is not active staff at the store handling this trade.",
      );
    }

    return staff;
  }

private async synchronizeHandoffStatus(
  handoffId: string,
  transaction: any,
  now: Date = new Date(),
) {
  const custodyRows =
    await transaction.transaction_item_custody.findMany({
      where: {
        handoff_id:
          handoffId,
      },

      select: {
        id: true,
        custody_status:
          true,
      },
    });

  if (
    custodyRows.length ===
    0
  ) {
    throw new ConflictException(
      "This handoff has no custody items.",
    );
  }

  const statuses =
    custodyRows.map(
      (row: {
        custody_status:
          string;
      }) =>
        row.custody_status,
    );

  const allAwaitingDelivery =
    statuses.every(
      (status: string) =>
        status ===
        "awaiting_delivery_to_store",
    );

  const someAwaitingDelivery =
    statuses.some(
      (status: string) =>
        status ===
        "awaiting_delivery_to_store",
    );

  const allReleased =
    statuses.every(
      (status: string) =>
        status ===
        "released_to_recipient",
    );

  const allAtLeastVerified =
    statuses.every(
      (status: string) =>
        status ===
          "verified_by_store" ||
        status ===
          "released_to_recipient",
    );

  const allReturned =
    statuses.every(
      (status: string) =>
        status ===
        "returned",
    );

  const hasProblemState =
    statuses.some(
      (status: string) =>
        status ===
          "missing" ||
        status ===
          "problem" ||
        status ===
          "returned",
    );

  let handoffStatus:
    | "awaiting_items"
    | "partially_received"
    | "all_items_received"
    | "validated"
    | "completed"
    | "cancelled"
    | "disputed";

  if (
    allReturned
  ) {
    handoffStatus =
      "cancelled";
  } else if (
    hasProblemState
  ) {
    handoffStatus =
      "disputed";
  } else if (
    allReleased
  ) {
    handoffStatus =
      "completed";
  } else if (
    allAwaitingDelivery
  ) {
    handoffStatus =
      "awaiting_items";
  } else if (
    someAwaitingDelivery
  ) {
    handoffStatus =
      "partially_received";
  } else if (
    allAtLeastVerified
  ) {
    /*
     * Includes:
     *
     * verified + verified
     * released + verified
     *
     * The handoff remains validated
     * until every item has actually
     * been released.
     */
    handoffStatus =
      "validated";
  } else {
    /*
     * Everything has reached the
     * store, but at least one item
     * is still awaiting verification.
     */
    handoffStatus =
      "all_items_received";
  }

  await transaction.store_trade_handoffs.update({
    where: {
      id:
        handoffId,
    },

    data: {
      status:
        handoffStatus,

      ...(handoffStatus ===
      "completed"
        ? {
            completed_at:
              now,
          }
        : {}),

      ...(handoffStatus ===
      "cancelled"
        ? {
            cancelled_at:
              now,
          }
        : {}),

      updated_at:
        now,
    },
  });

  return handoffStatus;
}

  private async loadHandoff(
    handoffId: string,
  ) {
    const handoff =
      await this.database.client.store_trade_handoffs.findUnique({
        where: {
          id:
            handoffId,
        },

        select: {
          id: true,
          transaction_id:
            true,
          store_id: true,
          status: true,
          store_notes: true,
          created_at: true,
          updated_at: true,
          completed_at: true,
          cancelled_at: true,

          stores: {
            select: {
              id: true,
              name: true,
              slug: true,
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

          transactions: {
            select: {
              id: true,
              listing_id: true,
              accepted_offer_id:
                true,

              accepted_wishlist_offer_id:
                true,

              seller_user_id:
                true,

              seller_store_id:
                true,

              counterparty_user_id:
                true,

              counterparty_store_id:
                true,

              transaction_type:
                true,

              cash_amount:
                true,

              currency_code:
                true,

              status:
                true,

              agreed_at:
                true,
            },
          },

          transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs:
            {
              select: {
                id: true,

                transaction_item_id:
                  true,

                custody_status:
                  true,

                received_by_staff_id:
                  true,

                received_at:
                  true,

                verified_by_staff_id:
                  true,

                verified_at:
                  true,

                released_by_staff_id:
                  true,

                released_at:
                  true,

                issue_notes:
                  true,

                created_at:
                  true,

                updated_at:
                  true,
              },

              orderBy: {
                created_at:
                  "asc",
              },
            },
        },
      });

    if (!handoff) {
      throw new NotFoundException(
        "Store handoff was not found.",
      );
    }

    const {
      transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs:
        custody,

      ...handoffData
    } = handoff;

    return {
      ...handoffData,
      custody,
    };
  }

  async getHandoff(
    handoffId: string,
  ) {
    return this.loadHandoff(
      handoffId,
    );
  }

  async receiveItem(
    handoffId: string,
    transactionItemId: string,
    staffUserId: string,
  ) {
    await this.database.client.$transaction(
      async (
        transaction,
      ) => {
        const now =
          new Date();

        const handoff =
          await transaction.store_trade_handoffs.findUnique({
            where: {
              id:
                handoffId,
            },

            select: {
              id: true,
              transaction_id:
                true,
              store_id: true,
              status: true,
            },
          });

        if (!handoff) {
          throw new NotFoundException(
            "Store handoff was not found.",
          );
        }

        if (
          handoff.status ===
            "completed" ||
          handoff.status ===
            "cancelled" ||
          handoff.status ===
            "disputed"
        ) {
          throw new BadRequestException(
            "Items cannot be received for a closed or disputed handoff.",
          );
        }

        const staff =
          await this.requireActiveStoreStaff(
            handoff.store_id,
            staffUserId,
            transaction,
          );

        const custody =
          await transaction.transaction_item_custody.findFirst({
            where: {
              handoff_id:
                handoff.id,

              transaction_id:
                handoff.transaction_id,

              transaction_item_id:
                transactionItemId,

              store_id:
                handoff.store_id,
            },

            select: {
              id: true,
              custody_status:
                true,
            },
          });

        if (!custody) {
          throw new NotFoundException(
            "The transaction item does not belong to this store handoff.",
          );
        }

        if (
          custody.custody_status !==
          "awaiting_delivery_to_store"
        ) {
          throw new BadRequestException(
            "Only an item awaiting delivery to the store can be received.",
          );
        }

        const updated =
          await transaction.transaction_item_custody.updateMany({
            where: {
              id:
                custody.id,

              custody_status:
                "awaiting_delivery_to_store",
            },

            data: {
              custody_status:
                "in_store",

              received_by_staff_id:
                staff.id,

              received_at:
                now,

              updated_at:
                now,
            },
          });

        if (
          updated.count !==
          1
        ) {
          throw new ConflictException(
            "The custody item changed while it was being received.",
          );
        }

        await this.synchronizeHandoffStatus(
          handoff.id,
          transaction,
        );
      },
      {
        isolationLevel:
          "Serializable",
      },
    );

    return this.loadHandoff(
      handoffId,
    );
  }

  async verifyItem(
    handoffId: string,
    transactionItemId: string,
    staffUserId: string,
  ) {
    await this.database.client.$transaction(
      async (
        transaction,
      ) => {
        const now =
          new Date();

        const handoff =
          await transaction.store_trade_handoffs.findUnique({
            where: {
              id:
                handoffId,
            },

            select: {
              id: true,
              transaction_id:
                true,
              store_id: true,
              status: true,
            },
          });

        if (!handoff) {
          throw new NotFoundException(
            "Store handoff was not found.",
          );
        }

        if (
          handoff.status ===
            "completed" ||
          handoff.status ===
            "cancelled" ||
          handoff.status ===
            "disputed"
        ) {
          throw new BadRequestException(
            "Items cannot be verified for a closed or disputed handoff.",
          );
        }

        const staff =
          await this.requireActiveStoreStaff(
            handoff.store_id,
            staffUserId,
            transaction,
          );

        const custody =
          await transaction.transaction_item_custody.findFirst({
            where: {
              handoff_id:
                handoff.id,

              transaction_id:
                handoff.transaction_id,

              transaction_item_id:
                transactionItemId,

              store_id:
                handoff.store_id,
            },

            select: {
              id: true,

              custody_status:
                true,

              received_by_staff_id:
                true,

              received_at:
                true,
            },
          });

        if (!custody) {
          throw new NotFoundException(
            "The transaction item does not belong to this store handoff.",
          );
        }

        if (
          custody.custody_status !==
          "in_store"
        ) {
          throw new BadRequestException(
            "Only a card currently in the store can be verified.",
          );
        }

        if (
          !custody.received_by_staff_id ||
          !custody.received_at
        ) {
          throw new ConflictException(
            "The card cannot be verified because its store-receipt record is incomplete.",
          );
        }

        const updated =
          await transaction.transaction_item_custody.updateMany({
            where: {
              id:
                custody.id,

              custody_status:
                "in_store",
            },

            data: {
              custody_status:
                "verified_by_store",

              verified_by_staff_id:
                staff.id,

              verified_at:
                now,

              updated_at:
                now,
            },
          });

        if (
          updated.count !==
          1
        ) {
          throw new ConflictException(
            "The custody item changed while it was being verified.",
          );
        }

        await this.synchronizeHandoffStatus(
          handoff.id,
          transaction,
        );
      },
      {
        isolationLevel:
          "Serializable",
      },
    );

    return this.loadHandoff(
      handoffId,
    );
  }
  async releaseItem(
  handoffId: string,
  transactionItemId: string,
  staffUserId: string,
) {
  await this.database.client.$transaction(
    async (
      transaction,
    ) => {
      const now =
        new Date();

      /*
       * 1. The complete trade must already
       * be validated before either side
       * receives a card.
       */
      const handoff =
        await transaction.store_trade_handoffs.findUnique({
          where: {
            id:
              handoffId,
          },

          select: {
            id: true,
            transaction_id:
              true,
            store_id: true,
            status: true,
          },
        });

      if (!handoff) {
        throw new NotFoundException(
          "Store handoff was not found.",
        );
      }

      if (
        handoff.status !==
        "validated"
      ) {
        throw new BadRequestException(
          "Cards can only be released after the entire store handoff has been validated.",
        );
      }

      const staff =
        await this.requireActiveStoreStaff(
          handoff.store_id,
          staffUserId,
          transaction,
        );

      /*
       * 2. For now, release only pure
       * card-for-card trades.
       *
       * Cash/mixed transactions require
       * payment confirmation first.
       */
      const transactionHeader =
        await transaction.transactions.findUnique({
          where: {
            id:
              handoff.transaction_id,
          },

          select: {
            id: true,
            listing_id: true,

            accepted_wishlist_offer_id:
              true,

            transaction_type:
              true,
            status: true,
          },
        });

      if (!transactionHeader) {
        throw new NotFoundException(
          "The transaction for this handoff was not found.",
        );
      }

      if (
        transactionHeader.status !==
        "awaiting_handoff"
      ) {
        throw new ConflictException(
          "The transaction is not awaiting store handoff.",
        );
      }

      if (
        transactionHeader.transaction_type !==
        "card_trade"
      ) {
        throw new BadRequestException(
          "Card release is currently enabled only for pure card trades. Cash and mixed transactions require payment confirmation support first.",
        );
      }

      /*
       * 3. Verify custody audit trail.
       */
      const custody =
        await transaction.transaction_item_custody.findFirst({
          where: {
            handoff_id:
              handoff.id,

            transaction_id:
              handoff.transaction_id,

            transaction_item_id:
              transactionItemId,

            store_id:
              handoff.store_id,
          },

          select: {
            id: true,

            custody_status:
              true,

            received_by_staff_id:
              true,

            received_at:
              true,

            verified_by_staff_id:
              true,

            verified_at:
              true,

            released_by_staff_id:
              true,

            released_at:
              true,
          },
        });

      if (!custody) {
        throw new NotFoundException(
          "The transaction item does not belong to this store handoff.",
        );
      }

      if (
        custody.custody_status !==
        "verified_by_store"
      ) {
        throw new BadRequestException(
          "Only a store-verified card can be released to its recipient.",
        );
      }

      if (
        !custody.received_by_staff_id ||
        !custody.received_at ||
        !custody.verified_by_staff_id ||
        !custody.verified_at
      ) {
        throw new ConflictException(
          "The card cannot be released because its receive/verification audit trail is incomplete.",
        );
      }

      if (
        custody.released_by_staff_id ||
        custody.released_at
      ) {
        throw new ConflictException(
          "This card already has release information.",
        );
      }

      /*
       * 4. Load the transaction item.
       *
       * inventory_item_id:
       * old/source ownership record
       *
       * result_inventory_item_id:
       * new recipient ownership record
       */
      const transactionItem =
        await transaction.transaction_items.findFirst({
          where: {
            id:
              transactionItemId,

            transaction_id:
              handoff.transaction_id,
          },

          select: {
            id: true,

            inventory_item_id:
              true,

            result_inventory_item_id:
              true,

            quantity:
              true,

            from_user_id:
              true,

            from_store_id:
              true,

            to_user_id:
              true,

            to_store_id:
              true,
          },
        });

      if (!transactionItem) {
        throw new NotFoundException(
          "Transaction item was not found.",
        );
      }

      if (
        transactionItem.result_inventory_item_id
      ) {
        throw new ConflictException(
          "This transaction item already produced a recipient inventory record.",
        );
      }

      const hasUserRecipient =
        transactionItem.to_user_id !==
        null;

      const hasStoreRecipient =
        transactionItem.to_store_id !==
        null;

      if (
        hasUserRecipient ===
        hasStoreRecipient
      ) {
        throw new ConflictException(
          "The transaction item does not have exactly one recipient.",
        );
      }

      /*
       * 5. Load and validate the old
       * ownership record.
       */
      const sourceInventory =
        await transaction.inventory_items.findUnique({
          where: {
            id:
              transactionItem.inventory_item_id,
          },

          select: {
            id: true,

            printing_id:
              true,

            finish:
              true,

            owner_user_id:
              true,

            owner_store_id:
              true,

            condition:
              true,

            language_code:
              true,

            quantity:
              true,

            is_signed:
              true,

            is_altered:
              true,

            is_graded:
              true,

            grading_company:
              true,

            grade:
              true,

            certification_number:
              true,

            status:
              true,
          },
        });

      if (!sourceInventory) {
        throw new ConflictException(
          "The source inventory record no longer exists.",
        );
      }

      if (
        sourceInventory.status !==
        "in_trade"
      ) {
        throw new ConflictException(
          "The source inventory item is no longer reserved in this trade.",
        );
      }

      if (
        sourceInventory.quantity !==
        transactionItem.quantity
      ) {
        throw new ConflictException(
          "The source inventory quantity no longer matches the transaction item.",
        );
      }

      const sourceOwnerMatches =
        transactionItem.from_user_id
          ? sourceInventory.owner_user_id ===
              transactionItem.from_user_id &&
            sourceInventory.owner_store_id ===
              null
          : transactionItem.from_store_id
            ? sourceInventory.owner_store_id ===
                transactionItem.from_store_id &&
              sourceInventory.owner_user_id ===
                null
            : false;

      if (
        !sourceOwnerMatches
      ) {
        throw new ConflictException(
          "The source inventory owner no longer matches the owner recorded in the transaction.",
        );
      }

      /*
       * 6. Retire the OLD ownership row.
       *
       * We intentionally KEEP its old
       * owner_user_id / owner_store_id.
       *
       * Historical listings/offers depend
       * on that ownership relationship.
       */
      const retiredSource =
        await transaction.inventory_items.updateMany({
          where: {
            id:
              sourceInventory.id,

            status:
              "in_trade",

            ...(transactionItem.from_user_id
              ? {
                  owner_user_id:
                    transactionItem.from_user_id,

                  owner_store_id:
                    null,
                }
              : {
                  owner_user_id:
                    null,

                  owner_store_id:
                    transactionItem.from_store_id,
                }),
          },

          data: {
            status:
              "removed",

            collection_id:
              null,

            updated_at:
              now,
          },
        });

      if (
        retiredSource.count !==
        1
      ) {
        throw new ConflictException(
          "The source inventory item changed while release was being processed.",
        );
      }

      /*
       * 7. Create NEW recipient ownership.
       *
       * Physical/card characteristics are
       * copied.
       *
       * Former owner's private metadata is
       * deliberately NOT copied:
       *
       * collection
       * acquired_price
       * notes
       * inventory photos
       */
      const resultInventory =
        await transaction.inventory_items.create({
          data: {
            printing_id:
              sourceInventory.printing_id,

            finish:
              sourceInventory.finish,

            owner_user_id:
              transactionItem.to_user_id,

            owner_store_id:
              transactionItem.to_store_id,

            collection_id:
              null,

            condition:
              sourceInventory.condition,

            language_code:
              sourceInventory.language_code,

            quantity:
              sourceInventory.quantity,

            is_signed:
              sourceInventory.is_signed,

            is_altered:
              sourceInventory.is_altered,

            is_graded:
              sourceInventory.is_graded,

            grading_company:
              sourceInventory.grading_company,

            grade:
              sourceInventory.grade,

            certification_number:
              sourceInventory.certification_number,

            acquired_at:
              now,

            acquired_price:
              null,

            status:
              "available",

            notes:
              null,

            updated_at:
              now,
          },

          select: {
            id: true,
          },
        });

      /*
       * 8. Provenance link:
       *
       * transaction item
       *      ↓
       * new recipient inventory row
       */
      const linkedResult =
        await transaction.transaction_items.updateMany({
          where: {
            id:
              transactionItem.id,

            transaction_id:
              handoff.transaction_id,

            result_inventory_item_id:
              null,
          },

          data: {
            result_inventory_item_id:
              resultInventory.id,
          },
        });

      if (
        linkedResult.count !==
        1
      ) {
        throw new ConflictException(
          "The transaction item changed while the recipient ownership record was being linked.",
        );
      }

      /*
       * 9. Physical release.
       */
      const released =
        await transaction.transaction_item_custody.updateMany({
          where: {
            id:
              custody.id,

            custody_status:
              "verified_by_store",

            released_by_staff_id:
              null,

            released_at:
              null,
          },

          data: {
            custody_status:
              "released_to_recipient",

            released_by_staff_id:
              staff.id,

            released_at:
              now,

            updated_at:
              now,
          },
        });

      if (
        released.count !==
        1
      ) {
        throw new ConflictException(
          "The custody item changed while release was being processed.",
        );
      }

      /*
       * 10. First release keeps handoff
       * validated.
       *
       * Final release changes it to
       * completed.
       */
      const handoffStatus =
        await this.synchronizeHandoffStatus(
          handoff.id,
          transaction,
          now,
        );

      /*
       * 11. If this was the LAST card,
       * complete the entire trade.
       */
      if (
        handoffStatus ===
        "completed"
      ) {
        const completedTransaction =
          await transaction.transactions.updateMany({
            where: {
              id:
                handoff.transaction_id,

              status:
                "awaiting_handoff",
            },

            data: {
              status:
                "completed",

              completed_at:
                now,

              updated_at:
                now,
            },
          });

        if (
          completedTransaction.count !==
          1
        ) {
          throw new ConflictException(
            "The transaction changed while completion was being finalized.",
          );
        }

        if (
          transactionHeader.listing_id
        ) {
          const completedListing =
            await transaction.listings.updateMany({
              where: {
                id:
                  transactionHeader.listing_id,

                status:
                  "closed",
              },

              data: {
                status:
                  "traded",

                updated_at:
                  now,
              },
            });

          if (
            completedListing.count !==
            1
          ) {
            throw new ConflictException(
              "The listing changed while trade completion was being finalized.",
            );
          }
        }

        /*
         * Wishlist-origin transactions are not
         * fulfilled merely because an offer was
         * accepted.
         *
         * Acceptance pauses the wishlist item.
         * The item becomes fulfilled only after
         * every card in the mediated LGS handoff
         * has been released to its recipient.
         */
        if (
          transactionHeader.accepted_wishlist_offer_id
        ) {
          const completedWishlistOffer =
            await transaction.wishlist_offers.findUnique({
              where: {
                id:
                  transactionHeader.accepted_wishlist_offer_id,
              },

              select: {
                id: true,

                wishlist_item_id:
                  true,

                status: true,
              },
            });

          if (!completedWishlistOffer) {
            throw new ConflictException(
              "The wishlist offer linked to this transaction could not be found.",
            );
          }

          if (
            completedWishlistOffer.status !==
            "converted_to_transaction"
          ) {
            throw new ConflictException(
              "The wishlist offer is not in the expected transaction-converted state.",
            );
          }

          const fulfilledWishlistItem =
            await transaction.wishlist_items.updateMany({
              where: {
                id:
                  completedWishlistOffer.wishlist_item_id,

                status:
                  "paused",
              },

              data: {
                status:
                  "fulfilled",

                updated_at:
                  now,
              },
            });

          if (
            fulfilledWishlistItem.count !==
            1
          ) {
            throw new ConflictException(
              "The wishlist item changed while transaction completion was being finalized.",
            );
          }
        }
      }
    },
    {
      isolationLevel:
        "Serializable",
    },
  );

  return this.loadHandoff(
    handoffId,
  );
}
}