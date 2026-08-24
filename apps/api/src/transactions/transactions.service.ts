import {
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import { DatabaseService } from "../database/database.service";

@Injectable()
export class TransactionsService {
  constructor(
    private readonly database:
      DatabaseService,
  ) {}

  private getInventoryHistorySelect() {
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

      grading_company: true,
      grade: true,
      certification_number: true,

      status: true,
      created_at: true,
      updated_at: true,

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
              artist_name: true,
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
    } as const;
  }

  private mapInventoryRecord(
    record: any,
  ) {
    if (!record) {
      return null;
    }

    const {
      printing_finishes,
      ...inventoryData
    } = record;

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

  private async loadInventoryRecords(
    inventoryIds: string[],
  ) {
    const uniqueIds = [
      ...new Set(
        inventoryIds.filter(
          Boolean,
        ),
      ),
    ];

    if (
      uniqueIds.length ===
      0
    ) {
      return new Map<
        string,
        any
      >();
    }

    /*
     * IMPORTANT:
     * There is intentionally NO status filter here.
     *
     * Transaction history must be able to retrieve
     * retired "removed"/"sold" ownership rows as
     * well as the new result ownership rows.
     */
    const records =
      await this.database.client.inventory_items.findMany({
        where: {
          id: {
            in:
              uniqueIds,
          },
        },

        select:
          this.getInventoryHistorySelect(),
      });

    return new Map(
      records.map(
        (record) => [
          record.id,
          this.mapInventoryRecord(
            record,
          ),
        ],
      ),
    );
  }

  private async hydrateTransactions(
    headers: any[],
    requestingUserId: string,
  ) {
    if (
      headers.length ===
      0
    ) {
      return [];
    }

    const transactionIds =
      headers.map(
        (transaction) =>
          transaction.id,
      );

    const transactionItems =
      await this.database.client.transaction_items.findMany({
        where: {
          transaction_id: {
            in:
              transactionIds,
          },
        },

        select: {
          id: true,
          transaction_id: true,

          inventory_item_id:
            true,

          result_inventory_item_id:
            true,

          item_role: true,
          quantity: true,

          from_user_id: true,
          from_store_id: true,

          to_user_id: true,
          to_store_id: true,

          market_snapshot_id:
            true,

          agreed_unit_value:
            true,

          currency_code: true,
          created_at: true,
        },

        orderBy: {
          created_at:
            "asc",
        },
      });

    const handoffs =
      await this.database.client.store_trade_handoffs.findMany({
        where: {
          transaction_id: {
            in:
              transactionIds,
          },
        },

        select: {
          id: true,
          transaction_id: true,
          store_id: true,

          status: true,
          store_notes: true,

          created_at: true,
          updated_at: true,
          completed_at: true,
          cancelled_at: true,
        },
      });

    const custodyRows =
      await this.database.client.transaction_item_custody.findMany({
        where: {
          transaction_id: {
            in:
              transactionIds,
          },
        },

        select: {
          id: true,
          handoff_id: true,
          transaction_id: true,
          transaction_item_id:
            true,
          store_id: true,

          custody_status:
            true,

          received_by_staff_id:
            true,
          received_at: true,

          verified_by_staff_id:
            true,
          verified_at: true,

          released_by_staff_id:
            true,
          released_at: true,

          issue_notes: true,

          created_at: true,
          updated_at: true,
        },

        orderBy: {
          created_at:
            "asc",
        },
      });

    const inventoryIds =
      transactionItems.flatMap(
        (item) => [
          item.inventory_item_id,
          ...(item.result_inventory_item_id
            ? [
                item
                  .result_inventory_item_id,
              ]
            : []),
        ],
      );

    const inventoryById =
      await this.loadInventoryRecords(
        inventoryIds,
      );

    const staffIds = [
      ...new Set(
        custodyRows.flatMap(
          (row) => [
            row.received_by_staff_id,
            row.verified_by_staff_id,
            row.released_by_staff_id,
          ],
        )
          .filter(
            (
              value,
            ): value is string =>
              Boolean(value),
          ),
      ),
    ];

    const staffMemberships =
      staffIds.length >
      0
        ? await this.database.client.store_staff.findMany({
            where: {
              id: {
                in:
                  staffIds,
              },
            },

            select: {
              id: true,
              store_id: true,
              user_id: true,
              role: true,
              status: true,
            },
          })
        : [];

    const participantUserIds =
      headers.flatMap(
        (transaction) => [
          transaction
            .seller_user_id,

          transaction
            .counterparty_user_id,
        ],
      )
        .filter(
          (
            value,
          ): value is string =>
            Boolean(value),
        );

    const staffUserIds =
      staffMemberships.map(
        (staff) =>
          staff.user_id,
      );

    const userIds = [
      ...new Set([
        ...participantUserIds,
        ...staffUserIds,
      ]),
    ];

    const users =
      userIds.length >
      0
        ? await this.database.client.user_profiles.findMany({
            where: {
              id: {
                in:
                  userIds,
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

    const storeIds = [
      ...new Set(
        [
          ...headers.flatMap(
            (transaction) => [
              transaction
                .seller_store_id,

              transaction
                .counterparty_store_id,
            ],
          ),

          ...handoffs.map(
            (handoff) =>
              handoff.store_id,
          ),
        ].filter(
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

    const usersById =
      new Map(
        users.map(
          (user) => [
            user.id,
            user,
          ],
        ),
      );

    const storesById =
      new Map(
        stores.map(
          (store) => [
            store.id,
            store,
          ],
        ),
      );

    const staffById =
      new Map(
        staffMemberships.map(
          (staff) => [
            staff.id,
            {
              ...staff,

              user:
                usersById.get(
                  staff.user_id,
                ) ??
                null,
            },
          ],
        ),
      );

    const itemsByTransaction =
      new Map<
        string,
        any[]
      >();

    for (
      const item of
      transactionItems
    ) {
      const existing =
        itemsByTransaction.get(
          item.transaction_id,
        ) ??
        [];

      existing.push(
        item,
      );

      itemsByTransaction.set(
        item.transaction_id,
        existing,
      );
    }

    const custodyByTransactionItem =
      new Map<
        string,
        any
      >();

    for (
      const custody of
      custodyRows
    ) {
      custodyByTransactionItem.set(
        custody.transaction_item_id,
        custody,
      );
    }

    const handoffByTransaction =
      new Map(
        handoffs.map(
          (handoff) => [
            handoff.transaction_id,
            handoff,
          ],
        ),
      );

    return headers.map(
      (header) => {
        const items =
          (
            itemsByTransaction.get(
              header.id,
            ) ??
            []
          ).map(
            (item) => {
              const custody =
                custodyByTransactionItem.get(
                  item.id,
                );

              return {
                ...item,

                source_inventory:
                  inventoryById.get(
                    item.inventory_item_id,
                  ) ??
                  null,

                result_inventory:
                  item.result_inventory_item_id
                    ? inventoryById.get(
                        item.result_inventory_item_id,
                      ) ??
                      null
                    : null,

                custody:
                  custody
                    ? {
                        ...custody,

                        received_by_staff:
                          custody.received_by_staff_id
                            ? staffById.get(
                                custody.received_by_staff_id,
                              ) ??
                              null
                            : null,

                        verified_by_staff:
                          custody.verified_by_staff_id
                            ? staffById.get(
                                custody.verified_by_staff_id,
                              ) ??
                              null
                            : null,

                        released_by_staff:
                          custody.released_by_staff_id
                            ? staffById.get(
                                custody.released_by_staff_id,
                              ) ??
                              null
                            : null,
                      }
                    : null,
              };
            },
          );

        const handoff =
          handoffByTransaction.get(
            header.id,
          );

        const seller =
          header.seller_user_id
            ? {
                type:
                  "user",

                user:
                  usersById.get(
                    header
                      .seller_user_id,
                  ) ??
                  null,
              }
            : header.seller_store_id
              ? {
                  type:
                    "store",

                  store:
                    storesById.get(
                      header
                        .seller_store_id,
                    ) ??
                    null,
                }
              : null;

        const counterparty =
          header.counterparty_user_id
            ? {
                type:
                  "user",

                user:
                  usersById.get(
                    header
                      .counterparty_user_id,
                  ) ??
                  null,
              }
            : header.counterparty_store_id
              ? {
                  type:
                    "store",

                  store:
                    storesById.get(
                      header
                        .counterparty_store_id,
                    ) ??
                    null,
                }
              : null;

        return {
          ...header,

          transaction_role:
            header.seller_user_id ===
            requestingUserId
              ? "seller"
              : "counterparty",

          seller,
          counterparty,

          items,

          handoff:
            handoff
              ? {
                  ...handoff,

                  store:
                    storesById.get(
                      handoff.store_id,
                    ) ??
                    null,
                }
              : null,
        };
      },
    );
  }

  private getTransactionHeaderSelect() {
    return {
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

      cash_amount: true,
      currency_code: true,

      status: true,

      agreed_at: true,
      completed_at: true,

      created_at: true,
      updated_at: true,
    } as const;
  }

  async getUserTransactions(
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
        },
      });

    if (!user) {
      throw new NotFoundException(
        "User was not found.",
      );
    }

    const transactions =
      await this.database.client.transactions.findMany({
        where: {
          OR: [
            {
              seller_user_id:
                userId,
            },
            {
              counterparty_user_id:
                userId,
            },
          ],
        },

        select:
          this.getTransactionHeaderSelect(),

        orderBy: {
          created_at:
            "desc",
        },
      });

    return this.hydrateTransactions(
      transactions,
      userId,
    );
  }

  async getUserTransaction(
    userId: string,
    transactionId: string,
  ) {
    const transaction =
      await this.database.client.transactions.findFirst({
        where: {
          id:
            transactionId,

          OR: [
            {
              seller_user_id:
                userId,
            },
            {
              counterparty_user_id:
                userId,
            },
          ],
        },

        select:
          this.getTransactionHeaderSelect(),
      });

    if (!transaction) {
      throw new NotFoundException(
        "Transaction was not found or does not belong to this user.",
      );
    }

    const hydrated =
      await this.hydrateTransactions(
        [
          transaction,
        ],
        userId,
      );

    return hydrated[0];
  }
}
