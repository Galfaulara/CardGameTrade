import { randomUUID } from "node:crypto";

import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
} from "@nestjs/common";
import { Prisma } from "@repo/db";
import type {
  BulkMoveCollectionItemsInput,
  CreateInventoryPhotoInput,
  CreateUserCollectionInput,
  CreateUserInventoryItemInput,
  GameScopedListQuery,
  MyInventoryListQuery,
  SetInventoryCollectionInput,
  UpdateUserInventoryItemInput,
  ChangeInventoryPrintingInput,
} from "@repo/validation";

import { DatabaseService } from "../database/database.service";
import { StorageService } from "../storage/storage.service";

const currentInventoryStatuses = [
  "available",
  "not_for_trade",
  "reserved",
  "in_trade",
] as const;

const removableInventoryStatuses = ["available", "not_for_trade"] as const;

const openListingStatuses = ["active", "paused"] as const;

export interface InventoryPhotoUploadFile {
  buffer: Buffer;
  mimetype: string;
  size: number;
  originalname: string;
}

@Injectable()
export class InventoryService {
  private async inspectPrintingChange(
    client: Prisma.TransactionClient,
    userId: string,
    inventoryItemId: string,
    input: ChangeInventoryPrintingInput,
  ) {
    const item = await client.inventory_items.findFirst({
      where: {
        id: inventoryItemId,
        owner_user_id: userId,
        owner_store_id: null,
      },
      include: { card_printings: { select: { canonical_card_id: true } } },
    });
    if (!item) throw this.getInventoryItemNotFoundError();
    this.assertInventoryItemIsMutable(item);
    const target = await client.printing_finishes.findFirst({
      where: {
        printing_id: input.printingId,
        finish: input.finish,
        card_printings: { game_id: item.game_id, is_digital: false },
      },
      select: {
        card_printings: {
          select: { language_code: true, canonical_card_id: true },
        },
      },
    });
    if (!target) {
      throw new BadRequestException(
        "Choose a physical printing and finish from the same game.",
      );
    }
    if (
      target.card_printings.canonical_card_id !==
      item.card_printings.canonical_card_id
    ) {
      throw new BadRequestException(
        "The selected printing must be another version of the same card.",
      );
    }
    const [
      listings,
      offerItems,
      wishlistOfferItems,
      requestedItems,
      interests,
      transactions,
    ] = await Promise.all([
      client.listings.count({ where: { inventory_item_id: inventoryItemId } }),
      client.offer_items.count({
        where: { inventory_item_id: inventoryItemId },
      }),
      client.wishlist_offer_items.count({
        where: { inventory_item_id: inventoryItemId },
      }),
      client.wishlist_offer_requested_items.count({
        where: { requested_inventory_item_id: inventoryItemId },
      }),
      client.inventory_item_interests.count({
        where: { inventory_item_id: inventoryItemId },
      }),
      client.transaction_items.findMany({
        where: {
          OR: [
            { inventory_item_id: inventoryItemId },
            { result_inventory_item_id: inventoryItemId },
          ],
        },
        select: {
          transactions: { select: { completed_at: true, status: true } },
        },
      }),
    ]);
    const activeTransaction = transactions.some(
      ({ transactions: value }) => !value.completed_at,
    );
    const historyCount =
      listings +
      offerItems +
      wishlistOfferItems +
      requestedItems +
      interests +
      transactions.length;
    const active = await Promise.all([
      client.listings.count({
        where: {
          inventory_item_id: inventoryItemId,
          status: { in: [...openListingStatuses] },
        },
      }),
      client.inventory_item_interests.count({
        where: { inventory_item_id: inventoryItemId, status: "active" },
      }),
      client.offer_items.count({
        where: {
          inventory_item_id: inventoryItemId,
          listing_offers_offer_items_offer_idTolisting_offers: {
            status: "pending",
          },
        },
      }),
      client.wishlist_offer_items.count({
        where: {
          inventory_item_id: inventoryItemId,
          wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers:
            { status: "pending" },
        },
      }),
      client.wishlist_offer_requested_items.count({
        where: {
          requested_inventory_item_id: inventoryItemId,
          wishlist_offers: { status: "pending" },
        },
      }),
    ]);
    return {
      item,
      languageCode: target.card_printings.language_code,
      blocked: activeTransaction,
      blockReason: activeTransaction
        ? "This card is currently part of an active trade and its printing cannot be changed until that trade is resolved."
        : null,
      strategy: historyCount ? ("replacement" as const) : ("in_place" as const),
      impact: {
        activeListings: active[0],
        pendingOffers: active[2] + active[3] + active[4],
        activeInterests: active[1],
        historicalReferences: historyCount,
      },
    };
  }

  async preflightPrintingChange(
    userId: string,
    inventoryItemId: string,
    input: ChangeInventoryPrintingInput,
  ) {
    const inspected = await this.inspectPrintingChange(
      this.database.client,
      userId,
      inventoryItemId,
      input,
    );
    const { item: _item, languageCode: _languageCode, ...result } = inspected;
    return result;
  }

  async changeInventoryPrinting(
    userId: string,
    inventoryItemId: string,
    input: ChangeInventoryPrintingInput,
  ) {
    const result = await this.database.client.$transaction(
      async (tx) => {
        const inspected = await this.inspectPrintingChange(
          tx,
          userId,
          inventoryItemId,
          input,
        );
        if (inspected.blocked)
          throw new ConflictException(inspected.blockReason!);
        const now = new Date();
        if (inspected.strategy === "in_place") {
          await tx.inventory_items.update({
            where: { id: inventoryItemId },
            data: {
              printing_id: input.printingId,
              finish: input.finish,
              language_code: inspected.languageCode,
              updated_at: now,
            },
          });
          return {
            inventoryItemId,
            replacedInventoryItemId: null,
            strategy: inspected.strategy,
          };
        }
        const source = inspected.item;
        const created = await tx.inventory_items.create({
          data: {
            printing_id: input.printingId,
            finish: input.finish,
            owner_user_id: source.owner_user_id,
            owner_store_id: null,
            collection_id: source.collection_id,
            condition: source.condition,
            language_code: inspected.languageCode,
            quantity: source.quantity,
            is_signed: source.is_signed,
            is_altered: source.is_altered,
            is_graded: source.is_graded,
            grading_company: source.grading_company,
            grade: source.grade,
            certification_number: source.certification_number,
            acquired_at: source.acquired_at,
            acquired_price: source.acquired_price,
            status: "available",
            notes: source.notes,
            game_id: source.game_id,
          },
          select: { id: true },
        });
        await tx.listing_offers.updateMany({
          where: {
            status: "pending",
            listings: { inventory_item_id: inventoryItemId },
          },
          data: { status: "rejected", responded_at: now, updated_at: now },
        });
        await tx.listings.updateMany({
          where: {
            inventory_item_id: inventoryItemId,
            status: { in: [...openListingStatuses] },
          },
          data: { status: "removed", updated_at: now },
        });
        await tx.listing_offers.updateMany({
          where: {
            status: "pending",
            offer_items_offer_items_offer_idTolisting_offers: {
              some: { inventory_item_id: inventoryItemId },
            },
          },
          data: { status: "withdrawn", responded_at: now, updated_at: now },
        });
        await tx.wishlist_offers.updateMany({
          where: {
            status: "pending",
            wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers:
              { some: { inventory_item_id: inventoryItemId } },
          },
          data: { status: "withdrawn", responded_at: now, updated_at: now },
        });
        await tx.wishlist_offers.updateMany({
          where: {
            status: "pending",
            wishlist_offer_requested_items: {
              some: { requested_inventory_item_id: inventoryItemId },
            },
          },
          data: { status: "rejected", responded_at: now, updated_at: now },
        });
        await tx.inventory_item_interests.updateMany({
          where: { inventory_item_id: inventoryItemId, status: "active" },
          data: { status: "dismissed", updated_at: now },
        });
        await tx.inventory_item_photos.updateMany({
          where: { inventory_item_id: inventoryItemId },
          data: { inventory_item_id: created.id },
        });
        await tx.inventory_items.update({
          where: { id: inventoryItemId },
          data: { status: "removed", collection_id: null, updated_at: now },
        });
        return {
          inventoryItemId: created.id,
          replacedInventoryItemId: inventoryItemId,
          strategy: inspected.strategy,
        };
      },
      { isolationLevel: Prisma.TransactionIsolationLevel.Serializable },
    );
    return {
      ...result,
      item: await this.getMyInventoryItem(userId, result.inventoryItemId),
    };
  }
  private assertInventoryItemIsMutable(item: { status: string }) {
    if (item.status === "sold" || item.status === "removed") {
      throw new BadRequestException(
        "Historical inventory items cannot be modified.",
      );
    }
  }

  private readonly logger = new Logger(InventoryService.name);

  constructor(
    private readonly database: DatabaseService,
    private readonly storage: StorageService,
  ) {}

  private async resolveGameId(gameSlug: string) {
    const game = await this.database.client.games.findUnique({
      where: { slug: gameSlug },
      select: { id: true },
    });
    if (!game) throw new BadRequestException("Unknown gameSlug.");
    return game.id;
  }

  private myInventoryBaseWhere(
    userId: string,
    gameId?: string,
  ): Prisma.inventory_itemsWhereInput {
    return {
      owner_user_id: userId,
      owner_store_id: null,
      ...(gameId ? { game_id: gameId } : {}),
      status: {
        in: [...currentInventoryStatuses],
      },
    };
  }

  private myInventoryTerms(query: string) {
    return query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  }

  private myInventorySelect() {
    return {
      id: true,
      game_id: true,
      printing_id: true,
      finish: true,
      collection_id: true,
      condition: true,
      language_code: true,
      quantity: true,
      is_signed: true,
      is_altered: true,
      is_graded: true,
      grading_company: true,
      grade: true,
      certification_number: true,
      acquired_at: true,
      acquired_price: true,
      status: true,
      notes: true,
      created_at: true,
      updated_at: true,
      collections: {
        select: {
          id: true,
          game_id: true,
          name: true,
          visibility: true,
        },
      },
      listings_listings_inventory_item_id_seller_user_idToinventory_items: {
        where: {
          status: "active",
          seller_store_id: null,
        },
        select: {
          id: true,
          status: true,
          accepts_cash: true,
          accepts_trade: true,
          asking_price: true,
          currency_code: true,
          created_at: true,
          updated_at: true,
        },
        orderBy: {
          created_at: "desc",
        },
        take: 1,
      },
      printing_finishes: {
        select: {
          finish: true,
          card_printings: {
            select: {
              id: true,
              game_id: true,
              canonical_card_id: true,
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

  private mapMyInventoryItem(item: any) {
    const {
      collections,
      listings_listings_inventory_item_id_seller_user_idToinventory_items,
      printing_finishes,
      ...inventoryItem
    } = item;

    return {
      ...inventoryItem,
      collection: collections,
      active_listing:
        listings_listings_inventory_item_id_seller_user_idToinventory_items.at(
          0,
        ) ?? null,
      printing: {
        ...printing_finishes.card_printings,
        finish: printing_finishes.finish,
      },
    };
  }

  private myInventoryWhere(
    userId: string,
    query: MyInventoryListQuery,
    gameId?: string,
  ): Prisma.inventory_itemsWhereInput {
    const terms = this.myInventoryTerms(query.q);

    return {
      ...this.myInventoryBaseWhere(userId, gameId),
      ...(query.status !== "all"
        ? {
            status: query.status,
          }
        : {}),
      ...(query.condition !== "all"
        ? {
            condition: query.condition,
          }
        : {}),
      ...(query.collection === "unassigned"
        ? {
            collection_id: null,
          }
        : query.collection !== "all"
          ? {
              collection_id: query.collection,
            }
          : {}),
      ...(terms.length
        ? {
            AND: terms.map((term) => ({
              OR: [
                {
                  printing_finishes: {
                    is: {
                      card_printings: {
                        is: {
                          canonical_cards: {
                            is: {
                              normalized_name: {
                                contains: term,
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
                {
                  printing_finishes: {
                    is: {
                      card_printings: {
                        is: {
                          printed_name: {
                            contains: term,
                            mode: "insensitive" as const,
                          },
                        },
                      },
                    },
                  },
                },
                {
                  printing_finishes: {
                    is: {
                      card_printings: {
                        is: {
                          collector_number: {
                            contains: term,
                            mode: "insensitive" as const,
                          },
                        },
                      },
                    },
                  },
                },
                {
                  printing_finishes: {
                    is: {
                      card_printings: {
                        is: {
                          card_sets: {
                            is: {
                              OR: [
                                {
                                  code: {
                                    contains: term,
                                    mode: "insensitive" as const,
                                  },
                                },
                                {
                                  name: {
                                    contains: term,
                                    mode: "insensitive" as const,
                                  },
                                },
                              ],
                            },
                          },
                        },
                      },
                    },
                  },
                },
              ],
            })),
          }
        : {}),
    };
  }

  private getInventoryItemNotFoundError() {
    return new NotFoundException(
      "Inventory item was not found or does not belong to this user.",
    );
  }

  private getOpenListingRemovalError() {
    return new ConflictException(
      "Remove the open listing before removing this inventory item.",
    );
  }

  private getProtectedRemovalStateError() {
    return new ConflictException(
      "Only available or not-for-trade inventory items can be removed.",
    );
  }

  private getValidatedImageExtension(file: InventoryPhotoUploadFile) {
    if (file.size <= 0 || file.buffer.length === 0) {
      throw new BadRequestException("The uploaded photo is empty.");
    }

    const maximumSize = 6 * 1024 * 1024;

    if (file.size > maximumSize) {
      throw new BadRequestException("Inventory photos may not exceed 6 MB.");
    }

    const buffer = file.buffer;

    const isJpeg =
      buffer.length >= 3 &&
      buffer[0] === 0xff &&
      buffer[1] === 0xd8 &&
      buffer[2] === 0xff;

    const isPng =
      buffer.length >= 8 &&
      buffer[0] === 0x89 &&
      buffer[1] === 0x50 &&
      buffer[2] === 0x4e &&
      buffer[3] === 0x47 &&
      buffer[4] === 0x0d &&
      buffer[5] === 0x0a &&
      buffer[6] === 0x1a &&
      buffer[7] === 0x0a;

    const isWebp =
      buffer.length >= 12 &&
      buffer.subarray(0, 4).toString("ascii") === "RIFF" &&
      buffer.subarray(8, 12).toString("ascii") === "WEBP";

    if (isJpeg && file.mimetype === "image/jpeg") {
      return "jpg";
    }

    if (isPng && file.mimetype === "image/png") {
      return "png";
    }

    if (isWebp && file.mimetype === "image/webp") {
      return "webp";
    }

    throw new BadRequestException(
      "Only valid JPEG, PNG, or WebP image files are allowed.",
    );
  }

  private async addSignedUrlToPhoto(photo: {
    id: string;
    storage_provider: string;
    storage_key: string;
    public_url: string | null;
    sort_order: number;
    is_primary: boolean;
  }) {
    try {
      const signedUrl = await this.storage.createSignedUrl(photo.storage_key);

      return {
        ...photo,
        signed_url: signedUrl,
      };
    } catch {
      this.logger.warn(
        `Could not create signed URL for inventory photo ${photo.id}.`,
      );

      return {
        ...photo,
        signed_url: null,
      };
    }
  }

  async getMyInventory(userId: string, query: MyInventoryListQuery) {
    const gameId = query.gameSlug
      ? await this.resolveGameId(query.gameSlug)
      : undefined;
    const baseWhere = this.myInventoryBaseWhere(userId, gameId);

    const where = this.myInventoryWhere(userId, query, gameId);

    const [items, filteredAggregate, totalAggregate] = await Promise.all([
      this.database.client.inventory_items.findMany({
        where,
        select: this.myInventorySelect(),
        orderBy: [
          {
            created_at: "desc",
          },
          {
            id: "asc",
          },
        ],
        skip: (query.page - 1) * query.pageSize,
        take: query.pageSize,
      }),
      this.database.client.inventory_items.aggregate({
        where,
        _count: {
          _all: true,
        },
        _sum: {
          quantity: true,
        },
      }),
      this.database.client.inventory_items.aggregate({
        where: baseWhere,
        _count: {
          _all: true,
        },
        _sum: {
          quantity: true,
        },
      }),
    ]);

    const filteredCount = filteredAggregate._count._all;

    const itemIds = items.map((item) => item.id);
    const canonicalIds = [
      ...new Set(
        items.map(
          (item) => item.printing_finishes.card_printings.canonical_card_id,
        ),
      ),
    ];
    const printingIds = [...new Set(items.map((item) => item.printing_id))];
    const [
      interestGroups,
      publicWants,
      listingOfferGroups,
      offeredGroups,
      wishlistOfferGroups,
      requestedGroups,
    ] = itemIds.length
      ? await Promise.all([
          this.database.client.inventory_item_interests.groupBy({
            by: ["inventory_item_id"],
            where: { inventory_item_id: { in: itemIds }, status: "active" },
            _count: { _all: true },
          }),
          this.database.client.wishlist_items.findMany({
            where: {
              game_id: gameId,
              status: "active",
              wishlists: { visibility: "public", user_id: { not: userId } },
              OR: [
                { canonical_card_id: { in: canonicalIds } },
                { printing_id: { in: printingIds } },
              ],
            },
            select: {
              canonical_card_id: true,
              printing_id: true,
              desired_finish: true,
              desired_condition: true,
              language_code: true,
              wishlists: { select: { user_id: true } },
            },
          }),
          this.database.client.listing_offers.groupBy({
            by: ["listing_id"],
            where: {
              listing_id: {
                in: items.flatMap((item) =>
                  item.listings_listings_inventory_item_id_seller_user_idToinventory_items.map(
                    (listing) => listing.id,
                  ),
                ),
              },
              status: "pending",
            },
            _count: { _all: true },
          }),
          this.database.client.offer_items.groupBy({
            by: ["inventory_item_id"],
            where: {
              inventory_item_id: { in: itemIds },
              listing_offers_offer_items_offer_idTolisting_offers: {
                status: "pending",
              },
            },
            _count: { _all: true },
          }),
          this.database.client.wishlist_offer_items.groupBy({
            by: ["inventory_item_id"],
            where: {
              inventory_item_id: { in: itemIds },
              wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers:
                { status: "pending" },
            },
            _count: { _all: true },
          }),
          this.database.client.wishlist_offer_requested_items.groupBy({
            by: ["requested_inventory_item_id"],
            where: {
              requested_inventory_item_id: { in: itemIds },
              wishlist_offers: { status: "pending" },
            },
            _count: { _all: true },
          }),
        ])
      : [[], [], [], [], [], []];
    const interested = new Map(
      interestGroups.map((row) => [row.inventory_item_id, row._count._all]),
    );
    const listingOffers = new Map(
      listingOfferGroups.map((row) => [row.listing_id, row._count._all]),
    );
    const exactOffers = new Map<string, number>();
    for (const row of [...offeredGroups, ...wishlistOfferGroups])
      exactOffers.set(
        row.inventory_item_id,
        (exactOffers.get(row.inventory_item_id) ?? 0) + row._count._all,
      );
    for (const row of requestedGroups)
      if (row.requested_inventory_item_id)
        exactOffers.set(
          row.requested_inventory_item_id,
          (exactOffers.get(row.requested_inventory_item_id) ?? 0) +
            row._count._all,
        );

    return {
      items: items.map((item) => {
        const wantedBy = new Set(
          publicWants
            .filter(
              (want) =>
                (want.printing_id
                  ? want.printing_id === item.printing_id
                  : want.canonical_card_id ===
                    item.printing_finishes.card_printings.canonical_card_id) &&
                (!want.desired_finish || want.desired_finish === item.finish) &&
                (!want.desired_condition ||
                  want.desired_condition === item.condition) &&
                (!want.language_code ||
                  want.language_code === item.language_code),
            )
            .map((want) => want.wishlists.user_id),
        ).size;
        const listingId =
          item
            .listings_listings_inventory_item_id_seller_user_idToinventory_items[0]
            ?.id;
        return {
          ...this.mapMyInventoryItem(item),
          relationship_summary: {
            interested: interested.get(item.id) ?? 0,
            wanted_by: wantedBy,
            offers:
              (listingId ? (listingOffers.get(listingId) ?? 0) : 0) +
              (exactOffers.get(item.id) ?? 0),
          },
        };
      }),
      summary: {
        total_inventory_row_count: totalAggregate._count._all,
        total_card_quantity: totalAggregate._sum.quantity ?? 0,
        filtered_inventory_row_count: filteredCount,
        filtered_card_quantity: filteredAggregate._sum.quantity ?? 0,
      },
      pagination: {
        page: query.page,
        page_size: query.pageSize,
        total_count: filteredCount,
        has_more: query.page * query.pageSize < filteredCount,
      },
    };
  }

  async getMyInventoryItem(userId: string, inventoryItemId: string) {
    const item = await this.database.client.inventory_items.findFirst({
      where: {
        id: inventoryItemId,
        owner_user_id: userId,
        owner_store_id: null,
      },
      select: this.myInventorySelect(),
    });

    if (!item) {
      throw this.getInventoryItemNotFoundError();
    }

    return this.mapMyInventoryItem(item);
  }

  async createMyInventoryItem(
    userId: string,
    input: CreateUserInventoryItemInput,
  ) {
    const created = await this.createUserInventoryItem(userId, input);

    return this.getMyInventoryItem(userId, created.id);
  }

  async updateMyInventoryItem(
    userId: string,
    inventoryItemId: string,
    input: UpdateUserInventoryItemInput,
  ) {
    await this.updateUserInventoryItem(userId, inventoryItemId, input);

    return this.getMyInventoryItem(userId, inventoryItemId);
  }

  async removeMyInventoryItem(userId: string, inventoryItemId: string) {
    const inventoryItem = await this.database.client.inventory_items.findFirst({
      where: {
        id: inventoryItemId,
        owner_user_id: userId,
        owner_store_id: null,
      },
      select: {
        id: true,
        status: true,
      },
    });

    if (!inventoryItem) {
      throw this.getInventoryItemNotFoundError();
    }

    this.assertInventoryItemIsMutable(inventoryItem);

    if (
      !removableInventoryStatuses.includes(
        inventoryItem.status as (typeof removableInventoryStatuses)[number],
      )
    ) {
      throw this.getProtectedRemovalStateError();
    }

    const openListing = await this.database.client.listings.findFirst({
      where: {
        inventory_item_id: inventoryItemId,
        status: {
          in: [...openListingStatuses],
        },
      },
      select: {
        id: true,
      },
    });

    if (openListing) {
      throw this.getOpenListingRemovalError();
    }

    await this.database.client.inventory_items.update({
      where: {
        id: inventoryItemId,
      },
      data: {
        status: "removed",
        collection_id: null,
        updated_at: new Date(),
      },
    });

    return this.getMyInventoryItem(userId, inventoryItemId);
  }

  async getUserInventory(userId: string) {
    const items = await this.database.client.inventory_items.findMany({
      where: {
        owner_user_id: userId,

        status: {
          in: ["available", "not_for_trade", "reserved", "in_trade"],
        },
      },

      select: {
        id: true,
        printing_id: true,
        finish: true,
        collection_id: true,
        condition: true,
        language_code: true,
        quantity: true,
        is_signed: true,
        is_altered: true,
        is_graded: true,
        grading_company: true,
        grade: true,
        certification_number: true,
        acquired_at: true,
        acquired_price: true,
        status: true,
        notes: true,
        created_at: true,
        updated_at: true,

        collections: {
          select: {
            id: true,
            name: true,
            visibility: true,
          },
        },

        inventory_item_photos: {
          select: {
            id: true,
            storage_provider: true,
            storage_key: true,
            public_url: true,
            sort_order: true,
            is_primary: true,
          },

          orderBy: {
            sort_order: "asc",
          },
        },

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
      },

      orderBy: {
        created_at: "desc",
      },
    });

    return Promise.all(
      items.map(async (item) => {
        const { printing_finishes, ...inventoryItem } = item;

        const photos = await Promise.all(
          item.inventory_item_photos.map((photo) =>
            this.addSignedUrlToPhoto(photo),
          ),
        );

        return {
          ...inventoryItem,

          inventory_item_photos: photos,

          printing: {
            ...printing_finishes.card_printings,
            finish: printing_finishes.finish,
          },
        };
      }),
    );
  }

  async getUserInventoryItem(userId: string, inventoryItemId: string) {
    const item = await this.database.client.inventory_items.findFirst({
      where: {
        id: inventoryItemId,
        owner_user_id: userId,
      },

      select: {
        id: true,
        printing_id: true,
        finish: true,
        collection_id: true,
        condition: true,
        language_code: true,
        quantity: true,
        is_signed: true,
        is_altered: true,
        is_graded: true,
        grading_company: true,
        grade: true,
        certification_number: true,
        acquired_at: true,
        acquired_price: true,
        status: true,
        notes: true,
        created_at: true,
        updated_at: true,

        collections: {
          select: {
            id: true,
            name: true,
            visibility: true,
          },
        },

        inventory_item_photos: {
          select: {
            id: true,
            storage_provider: true,
            storage_key: true,
            public_url: true,
            sort_order: true,
            is_primary: true,
          },

          orderBy: {
            sort_order: "asc",
          },
        },

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
      },
    });

    if (!item) {
      throw new NotFoundException(
        "Inventory item was not found or does not belong to this user.",
      );
    }

    const { printing_finishes, ...inventoryItem } = item;

    const photos = await Promise.all(
      item.inventory_item_photos.map((photo) =>
        this.addSignedUrlToPhoto(photo),
      ),
    );

    return {
      ...inventoryItem,

      inventory_item_photos: photos,

      printing: {
        ...printing_finishes.card_printings,
        finish: printing_finishes.finish,
      },
    };
  }

  async getUserCollections(userId: string, query: GameScopedListQuery = {}) {
    const user = await this.database.client.user_profiles.findUnique({
      where: {
        id: userId,
      },

      select: {
        id: true,
      },
    });

    if (!user) {
      throw new NotFoundException("User was not found.");
    }

    const gameId = query.gameSlug
      ? await this.resolveGameId(query.gameSlug)
      : undefined;

    return this.database.client.collections.findMany({
      where: {
        user_id: userId,
        ...(gameId ? { game_id: gameId } : {}),
      },

      select: {
        id: true,
        game_id: true,
        name: true,
        description: true,
        visibility: true,
        created_at: true,
        updated_at: true,

        _count: {
          select: {
            inventory_items: true,
          },
        },
      },

      orderBy: {
        created_at: "asc",
      },
    });
  }

  async createUserCollection(userId: string, input: CreateUserCollectionInput) {
    const user = await this.database.client.user_profiles.findUnique({
      where: {
        id: userId,
      },

      select: {
        id: true,
        status: true,
      },
    });

    if (!user) {
      throw new NotFoundException("User was not found.");
    }

    if (user.status !== "active") {
      throw new ForbiddenException(
        "Collections cannot be created for an inactive user.",
      );
    }

    const game = await this.database.client.games.findUnique({
      where: {
        slug: input.gameSlug,
      },

      select: {
        id: true,
      },
    });

    if (!game) {
      throw new BadRequestException("The selected game does not exist.");
    }

    const existing = await this.database.client.collections.findFirst({
      where: {
        user_id: userId,
        game_id: game.id,
        name: input.name,
      },

      select: {
        id: true,
      },
    });

    if (existing) {
      throw new ConflictException(
        "A collection with this name already exists for this user.",
      );
    }

    try {
      return await this.database.client.collections.create({
        data: {
          user_id: userId,
          game_id: game.id,
          name: input.name,

          description: input.description ?? null,

          visibility: input.visibility,
        },
      });
    } catch (error) {
      if ((error as { code?: string }).code === "P2002") {
        throw new ConflictException(
          "A collection with this name already exists for this user and game.",
        );
      }
      throw error;
    }
  }

  async setUserInventoryCollection(
    userId: string,
    inventoryItemId: string,
    input: SetInventoryCollectionInput,
  ) {
    const inventoryItem = await this.database.client.inventory_items.findFirst({
      where: {
        id: inventoryItemId,
        owner_user_id: userId,
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

    this.assertInventoryItemIsMutable(inventoryItem);

    if (input.collectionId) {
      const collection = await this.database.client.collections.findFirst({
        where: {
          id: input.collectionId,
          user_id: userId,
        },

        select: {
          id: true,
          game_id: true,
        },
      });

      if (!collection) {
        throw new BadRequestException(
          "The selected collection does not exist or does not belong to this user.",
        );
      }

      if (collection.game_id !== inventoryItem.game_id) {
        throw new BadRequestException(
          "The selected collection belongs to a different game than the inventory item.",
        );
      }
    }

    await this.database.client.inventory_items.update({
      where: {
        id: inventoryItemId,
      },

      data: {
        collection_id: input.collectionId,

        updated_at: new Date(),
      },
    });

    return this.getUserInventoryItem(userId, inventoryItemId);
  }

  async createUserInventoryItem(
    userId: string,
    input: CreateUserInventoryItemInput,
  ) {
    const user = await this.database.client.user_profiles.findUnique({
      where: {
        id: userId,
      },

      select: {
        id: true,
        status: true,
      },
    });

    if (!user) {
      throw new NotFoundException("User was not found.");
    }

    if (user.status !== "active") {
      throw new ForbiddenException(
        "Inventory cannot be added to an inactive user.",
      );
    }

    const printingFinish =
      await this.database.client.printing_finishes.findFirst({
        where: {
          printing_id: input.printingId,

          finish: input.finish,
        },

        select: {
          finish: true,

          card_printings: {
            select: {
              id: true,
              game_id: true,
              language_code: true,
              is_digital: true,
            },
          },
        },
      });

    if (!printingFinish) {
      throw new BadRequestException(
        "The selected finish is not valid for this printing.",
      );
    }

    if (printingFinish.card_printings.is_digital) {
      throw new BadRequestException(
        "Digital printings cannot be registered as physical inventory.",
      );
    }

    if (input.collectionId) {
      const collection = await this.database.client.collections.findFirst({
        where: {
          id: input.collectionId,
          user_id: userId,
        },

        select: {
          id: true,
          game_id: true,
        },
      });

      if (!collection) {
        throw new BadRequestException(
          "The selected collection does not exist or does not belong to this user.",
        );
      }

      if (collection.game_id !== printingFinish.card_printings.game_id) {
        throw new BadRequestException(
          "The selected collection belongs to a different game than the printing.",
        );
      }
    }

    const created = await this.database.client.inventory_items.create({
      data: {
        game_id: printingFinish.card_printings.game_id,

        printing_id: input.printingId,

        finish: input.finish,

        owner_user_id: userId,

        owner_store_id: null,

        collection_id: input.collectionId ?? null,

        condition: input.condition,

        language_code: printingFinish.card_printings.language_code,

        quantity: input.quantity,

        is_signed: input.isSigned,

        is_altered: input.isAltered,

        is_graded: input.isGraded,

        grading_company: input.isGraded ? (input.gradingCompany ?? null) : null,

        grade: input.isGraded ? (input.grade ?? null) : null,

        certification_number: input.isGraded
          ? (input.certificationNumber ?? null)
          : null,

        acquired_at: input.acquiredAt ?? null,

        acquired_price: input.acquiredPrice ?? null,

        status: "available",

        notes: input.notes ?? null,
      },

      select: {
        id: true,
      },
    });

    return this.getUserInventoryItem(userId, created.id);
  }

  async updateUserInventoryItem(
    userId: string,
    inventoryItemId: string,
    input: UpdateUserInventoryItemInput,
  ) {
    const existing = await this.database.client.inventory_items.findFirst({
      where: {
        id: inventoryItemId,
        owner_user_id: userId,
      },

      select: {
        id: true,
        is_graded: true,
        grading_company: true,
        grade: true,
        certification_number: true,
        status: true,
      },
    });

    if (!existing) {
      throw new NotFoundException(
        "Inventory item was not found or does not belong to this user.",
      );
    }

    this.assertInventoryItemIsMutable(existing);

    const finalIsGraded = input.isGraded ?? existing.is_graded;

    const finalGradingCompany =
      input.isGraded === false
        ? null
        : input.gradingCompany !== undefined
          ? input.gradingCompany
          : existing.grading_company;

    const finalGrade =
      input.isGraded === false
        ? null
        : input.grade !== undefined
          ? input.grade
          : existing.grade;

    const finalCertificationNumber =
      input.isGraded === false
        ? null
        : input.certificationNumber !== undefined
          ? input.certificationNumber
          : existing.certification_number;

    if (finalIsGraded && (!finalGradingCompany || !finalGrade)) {
      throw new BadRequestException(
        "A graded card must include a grading company and grade.",
      );
    }

    if (
      !finalIsGraded &&
      (finalGradingCompany || finalGrade || finalCertificationNumber)
    ) {
      throw new BadRequestException(
        "Grading information cannot be stored for an ungraded card.",
      );
    }

    await this.database.client.inventory_items.update({
      where: {
        id: inventoryItemId,
      },

      data: {
        ...(input.condition !== undefined
          ? {
              condition: input.condition,
            }
          : {}),

        ...(input.quantity !== undefined
          ? {
              quantity: input.quantity,
            }
          : {}),

        ...(input.isSigned !== undefined
          ? {
              is_signed: input.isSigned,
            }
          : {}),

        ...(input.isAltered !== undefined
          ? {
              is_altered: input.isAltered,
            }
          : {}),

        ...(input.acquiredAt !== undefined
          ? {
              acquired_at: input.acquiredAt,
            }
          : {}),

        ...(input.acquiredPrice !== undefined
          ? {
              acquired_price: input.acquiredPrice,
            }
          : {}),

        ...(input.notes !== undefined
          ? {
              notes: input.notes,
            }
          : {}),

        is_graded: finalIsGraded,

        grading_company: finalGradingCompany,

        grade: finalGrade,

        certification_number: finalCertificationNumber,

        updated_at: new Date(),
      },
    });

    return this.getUserInventoryItem(userId, inventoryItemId);
  }

  async moveCollectionItems(
    userId: string,
    sourceCollectionId: string,
    input: BulkMoveCollectionItemsInput,
  ) {
    const game = await this.database.client.games.findUnique({
      where: { slug: input.gameSlug },
      select: { id: true },
    });
    if (!game) throw new BadRequestException("The active game was not found.");

    const source = await this.database.client.collections.findFirst({
      where: { id: sourceCollectionId, user_id: userId, game_id: game.id },
      select: { id: true },
    });
    if (!source)
      throw new NotFoundException("Source collection was not found.");

    if (input.destinationCollectionId === sourceCollectionId) {
      throw new BadRequestException(
        "Choose a different destination collection.",
      );
    }
    if (input.destinationCollectionId) {
      const destination = await this.database.client.collections.findFirst({
        where: {
          id: input.destinationCollectionId,
          user_id: userId,
          game_id: game.id,
        },
        select: { id: true },
      });
      if (!destination)
        throw new BadRequestException(
          "Destination collection was not found or belongs to another account or game.",
        );
    }

    const rows = await this.database.client.inventory_items.findMany({
      where: { id: { in: input.inventoryItemIds } },
      select: {
        id: true,
        owner_user_id: true,
        owner_store_id: true,
        collection_id: true,
        game_id: true,
        status: true,
      },
    });
    const valid =
      rows.length === input.inventoryItemIds.length &&
      rows.every(
        (row) =>
          row.owner_user_id === userId &&
          row.owner_store_id === null &&
          row.collection_id === sourceCollectionId &&
          row.game_id === game.id &&
          currentInventoryStatuses.includes(
            row.status as (typeof currentInventoryStatuses)[number],
          ),
      );
    if (!valid)
      throw new BadRequestException(
        "Every selected card must be current Inventory in the source Collection and active game.",
      );

    const moved = await this.database.client.$transaction(
      async (transaction) => {
        const result = await transaction.inventory_items.updateMany({
          where: {
            id: { in: input.inventoryItemIds },
            owner_user_id: userId,
            owner_store_id: null,
            collection_id: sourceCollectionId,
            game_id: game.id,
          },
          data: {
            collection_id: input.destinationCollectionId,
            updated_at: new Date(),
          },
        });
        if (result.count !== input.inventoryItemIds.length)
          throw new ConflictException(
            "Inventory changed while the move was being confirmed. No cards were moved.",
          );
        return result.count;
      },
    );
    return {
      requestedItems: input.inventoryItemIds.length,
      movedItems: moved,
      sourceCollectionId,
      destinationCollectionId: input.destinationCollectionId,
    };
  }

  async getInventoryActivity(userId: string, inventoryItemId: string) {
    const item = await this.database.client.inventory_items.findFirst({
      where: {
        id: inventoryItemId,
        owner_user_id: userId,
        owner_store_id: null,
      },
      select: {
        id: true,
        game_id: true,
        printing_id: true,
        finish: true,
        condition: true,
        language_code: true,
        collection_id: true,
        collections: { select: { id: true, name: true } },
        card_printings: { select: { canonical_card_id: true } },
      },
    });
    if (!item) throw this.getInventoryItemNotFoundError();

    const [
      interests,
      wants,
      listings,
      offered,
      wishlistOffered,
      requested,
      transactionItems,
    ] = await Promise.all([
      this.database.client.inventory_item_interests.findMany({
        where: { inventory_item_id: item.id, status: "active" },
        orderBy: { created_at: "desc" },
        select: {
          id: true,
          interested_user_id: true,
          interest_type: true,
          message: true,
          status: true,
          created_at: true,
          user_profiles: {
            select: { id: true, username: true, display_name: true },
          },
        },
      }),
      this.database.client.wishlist_items.findMany({
        where: {
          game_id: item.game_id,
          status: "active",
          wishlists: { visibility: "public", user_id: { not: userId } },
          OR: [
            { printing_id: item.printing_id },
            { canonical_card_id: item.card_printings.canonical_card_id },
          ],
          AND: [
            { OR: [{ desired_finish: null }, { desired_finish: item.finish }] },
            {
              OR: [
                { desired_condition: null },
                { desired_condition: item.condition },
              ],
            },
            {
              OR: [
                { language_code: null },
                { language_code: item.language_code },
              ],
            },
          ],
        },
        select: {
          id: true,
          wishlist_id: true,
          wishlists: {
            select: {
              user_id: true,
              user_profiles: {
                select: { id: true, username: true, display_name: true },
              },
            },
          },
        },
      }),
      this.database.client.listings.findMany({
        where: { inventory_item_id: item.id },
        orderBy: { created_at: "desc" },
        select: {
          id: true,
          status: true,
          accepts_cash: true,
          accepts_trade: true,
          asking_price: true,
          currency_code: true,
          created_at: true,
          listing_offers: {
            orderBy: { created_at: "desc" },
            select: {
              id: true,
              listing_id: true,
              status: true,
              cash_amount: true,
              currency_code: true,
              message: true,
              expires_at: true,
              responded_at: true,
              created_at: true,
              user_profiles: {
                select: { id: true, username: true, display_name: true },
              },
              stores: { select: { id: true, name: true, slug: true } },
              offer_items_offer_items_offer_idTolisting_offers: {
                select: { id: true, inventory_item_id: true, quantity: true },
              },
              transactions: { select: { id: true } },
            },
          },
        },
      }),
      this.database.client.offer_items.findMany({
        where: { inventory_item_id: item.id },
        select: {
          offer_id: true,
          listing_offers_offer_items_offer_idTolisting_offers: {
            select: { id: true, status: true, created_at: true },
          },
        },
      }),
      this.database.client.wishlist_offer_items.findMany({
        where: { inventory_item_id: item.id },
        select: {
          wishlist_offer_id: true,
          wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers:
            { select: { id: true, status: true, created_at: true } },
        },
      }),
      this.database.client.wishlist_offer_requested_items.findMany({
        where: { requested_inventory_item_id: item.id },
        select: {
          wishlist_offer_id: true,
          wishlist_offers: {
            select: { id: true, status: true, created_at: true },
          },
        },
      }),
      this.database.client.transaction_items.findMany({
        where: { inventory_item_id: item.id },
        orderBy: { created_at: "desc" },
        select: {
          id: true,
          inventory_item_id: true,
          transaction_id: true,
          item_role: true,
          quantity: true,
          from_user_id: true,
          from_store_id: true,
          to_user_id: true,
          to_store_id: true,
          created_at: true,
          user_profiles_transaction_items_from_user_idTouser_profiles: {
            select: { id: true, username: true, display_name: true },
          },
          user_profiles_transaction_items_to_user_idTouser_profiles: {
            select: { id: true, username: true, display_name: true },
          },
          transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items:
            {
              select: {
                id: true,
                custody_status: true,
                received_at: true,
                verified_at: true,
                released_at: true,
                updated_at: true,
              },
            },
          transactions: {
            select: {
              id: true,
              status: true,
              transaction_type: true,
              accepted_offer_id: true,
              accepted_wishlist_offer_id: true,
              agreed_at: true,
              completed_at: true,
              created_at: true,
              updated_at: true,
              user_profiles_transactions_seller_user_idTouser_profiles: {
                select: { id: true, username: true, display_name: true },
              },
              user_profiles_transactions_counterparty_user_idTouser_profiles: {
                select: { id: true, username: true, display_name: true },
              },
              store_trade_handoffs: {
                select: {
                  id: true,
                  status: true,
                  created_at: true,
                  updated_at: true,
                  completed_at: true,
                  store_games: {
                    select: {
                      stores: {
                        select: {
                          id: true,
                          name: true,
                          slug: true,
                          city: true,
                          state_region: true,
                          country_code: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }),
    ]);

    const people = new Map<string, any>();
    for (const interest of interests.filter(
      (value) => value.interested_user_id && value.user_profiles,
    )) {
      people.set(interest.interested_user_id!, {
        user: interest.user_profiles,
        interest: {
          id: interest.id,
          type: interest.interest_type,
          message: interest.message,
          status: interest.status,
          createdAt: interest.created_at.toISOString(),
        },
        publicWantIds: [],
      });
    }
    for (const want of wants) {
      const id = want.wishlists.user_id;
      const current = people.get(id) ?? {
        user: want.wishlists.user_profiles,
        interest: null,
        publicWantIds: [],
      };
      current.publicWantIds.push(want.id);
      people.set(id, current);
    }
    const receivedOnListing = listings.flatMap((listing) =>
      listing.listing_offers.map((offer) => ({
        id: offer.id,
        listingId: listing.id,
        status: offer.status,
        createdAt: offer.created_at.toISOString(),
        respondedAt: offer.responded_at?.toISOString() ?? null,
        expiresAt: offer.expires_at?.toISOString() ?? null,
        cashAmount: offer.cash_amount.toString(),
        currencyCode: offer.currency_code,
        message: offer.message,
        offerer: offer.user_profiles
          ? { kind: "user", ...offer.user_profiles }
          : offer.stores
            ? { kind: "store", ...offer.stores }
            : null,
        tradeItemCount:
          offer.offer_items_offer_items_offer_idTolisting_offers.length,
        tradeQuantity:
          offer.offer_items_offer_items_offer_idTolisting_offers.reduce(
            (sum, row) => sum + row.quantity,
            0,
          ),
        transactionId: offer.transactions?.id ?? null,
      })),
    );
    const transactions = transactionItems.map((row) => {
      const transaction = row.transactions;
      const handoff = transaction.store_trade_handoffs[0];
      const direction =
        row.from_user_id === userId
          ? "outgoing"
          : row.to_user_id === userId
            ? "incoming"
            : "involved";
      const counterpart =
        direction === "outgoing"
          ? row.user_profiles_transaction_items_to_user_idTouser_profiles
          : direction === "incoming"
            ? row.user_profiles_transaction_items_from_user_idTouser_profiles
            : transaction.user_profiles_transactions_counterparty_user_idTouser_profiles;
      return {
        transactionItemId: row.id,
        inventoryItemId: row.inventory_item_id,
        itemRole: row.item_role,
        quantity: row.quantity,
        direction,
        counterpart,
        transaction: {
          id: transaction.id,
          status: transaction.status,
          type: transaction.transaction_type,
          acceptedOfferId: transaction.accepted_offer_id,
          acceptedWishlistOfferId: transaction.accepted_wishlist_offer_id,
          agreedAt: transaction.agreed_at.toISOString(),
          completedAt: transaction.completed_at?.toISOString() ?? null,
          createdAt: transaction.created_at.toISOString(),
          updatedAt: transaction.updated_at.toISOString(),
        },
        handoff: handoff
          ? {
              id: handoff.id,
              status: handoff.status,
              createdAt: handoff.created_at.toISOString(),
              updatedAt: handoff.updated_at.toISOString(),
              completedAt: handoff.completed_at?.toISOString() ?? null,
              store: handoff.store_games.stores,
            }
          : null,
        custody:
          row.transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items
            ? {
                ...row.transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items,
                received_at:
                  row.transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items.received_at?.toISOString() ??
                  null,
                verified_at:
                  row.transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items.verified_at?.toISOString() ??
                  null,
                released_at:
                  row.transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items.released_at?.toISOString() ??
                  null,
                updated_at:
                  row.transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items.updated_at.toISOString(),
              }
            : null,
      };
    });
    const listing = listings[0] ?? null;
    return {
      inventoryItemId: item.id,
      collection: item.collections,
      summary: {
        interested: interests.filter((value) => value.status === "active")
          .length,
        wantedBy: new Set(wants.map((value) => value.wishlists.user_id)).size,
        offers:
          receivedOnListing.length +
          offered.length +
          wishlistOffered.length +
          requested.length,
      },
      people: [...people.values()],
      listing: listing
        ? {
            id: listing.id,
            status: listing.status,
            accepts_cash: listing.accepts_cash,
            accepts_trade: listing.accepts_trade,
            asking_price: listing.asking_price?.toString() ?? null,
            currency_code: listing.currency_code,
          }
        : null,
      listings: listings.map((value) => ({
        id: value.id,
        status: value.status,
        accepts_cash: value.accepts_cash,
        accepts_trade: value.accepts_trade,
        asking_price: value.asking_price?.toString() ?? null,
        currency_code: value.currency_code,
        createdAt: value.created_at.toISOString(),
      })),
      offers: {
        receivedOnListing,
        inventoryOfferedElsewhere: offered,
        wishlistOffersUsingInventory: wishlistOffered,
        requestedInventoryRelations: requested,
      },
      transactions,
    };
  }

  async uploadUserInventoryPhoto(
    userId: string,
    inventoryItemId: string,
    input: CreateInventoryPhotoInput,
    file: InventoryPhotoUploadFile,
  ) {
    if (!file) {
      throw new BadRequestException("A photo file is required.");
    }

    const inventoryItem = await this.database.client.inventory_items.findFirst({
      where: {
        id: inventoryItemId,
        owner_user_id: userId,
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

    this.assertInventoryItemIsMutable(inventoryItem);

    const extension = this.getValidatedImageExtension(file);

    const storageKey = `users/${userId}/inventory/${inventoryItemId}/${randomUUID()}.${extension}`;

    await this.storage.upload({
      key: storageKey,
      buffer: file.buffer,
      contentType: file.mimetype,
    });

    try {
      await this.database.client.$transaction(async (transaction) => {
        const photoCount = await transaction.inventory_item_photos.count({
          where: {
            inventory_item_id: inventoryItemId,
          },
        });

        const makePrimary = photoCount === 0 || input.isPrimary === true;

        if (makePrimary) {
          await transaction.inventory_item_photos.updateMany({
            where: {
              inventory_item_id: inventoryItemId,

              is_primary: true,
            },

            data: {
              is_primary: false,
            },
          });
        }

        const maximumSortOrder =
          await transaction.inventory_item_photos.aggregate({
            where: {
              inventory_item_id: inventoryItemId,
            },

            _max: {
              sort_order: true,
            },
          });

        const sortOrder =
          input.sortOrder ?? (maximumSortOrder._max.sort_order ?? -1) + 1;

        await transaction.inventory_item_photos.create({
          data: {
            inventory_item_id: inventoryItemId,

            storage_provider: this.storage.provider,

            storage_key: storageKey,

            public_url: null,

            sort_order: sortOrder,

            is_primary: makePrimary,
          },
        });
      });
    } catch (error) {
      try {
        await this.storage.remove(storageKey);
      } catch {
        this.logger.error(
          `Database registration failed and storage cleanup also failed for ${storageKey}.`,
        );
      }

      throw error;
    }

    return this.getUserInventoryItem(userId, inventoryItemId);
  }
}
