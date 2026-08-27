import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@repo/db";
import type { DiscoveryCollectionFeedQuery, DiscoveryCollectionListQuery, DiscoveryInventoryPageQuery,
  DiscoveryListingFeedQuery, DiscoveryStoreFeedQuery, DiscoveryStoreListQuery,
  DiscoveryUserCollectionQuery, DiscoveryUserListingQuery, DiscoveryUserWishlistQuery } from "@repo/validation";
import { DatabaseService } from "../database/database.service";

const available = { status: "available" } as const;
const activeListing = { status: "active", OR: [{ accepts_trade: true }, { accepts_cash: true }] };
const eligibleStore = { status: "active", verification_status: "verified", trade_mediation_enabled: true } as const;
const inventorySelect = {
  id: true, quantity: true, condition: true, finish: true, language_code: true, status: true,
  printing_finishes: { select: { card_printings: { select: {
    id: true, collector_number: true, printed_name: true, rarity: true, treatment: true,
    image_small_uri: true, image_normal_uri: true, image_large_uri: true,
    canonical_cards: { select: { id: true, name: true, mana_cost: true, type_line: true } },
    card_sets: { select: { id: true, code: true, name: true } },
  } } } },
  user_profiles: { select: { id: true, display_name: true, username: true } },
  stores: { select: { id: true, name: true } },
} as const;
const previewSelect = {
  id: true, inventory_item_id: true, accepts_cash: true, accepts_trade: true,
  asking_price: true, currency_code: true,
  inventory_items_listings_inventory_item_id_seller_user_idToinventory_items: { select: inventorySelect },
  inventory_items_listings_inventory_item_id_seller_store_idToinventory_items: { select: inventorySelect },
} as const;
const preferredStoreSelect = {
  id: true, name: true, slug: true, logo_url: true, city: true,
  state_region: true, country_code: true, status: true,
  verification_status: true, trade_mediation_enabled: true,
} as const;
type RankedRow = { listing_id: string; owner_id: string; preview_rank: bigint };

@Injectable()
export class DiscoveryService {
  constructor(private readonly database: DatabaseService) {}

  private encodeCursor(value: object) {
    return Buffer.from(JSON.stringify(value), "utf8").toString("base64url");
  }

  private decodeCursor<T extends object>(cursor: string | undefined, kind: string, filter: string): T | null {
    if (!cursor) return null;
    try {
      const value = JSON.parse(Buffer.from(cursor, "base64url").toString("utf8")) as Record<string, unknown>;
      if (value.v !== 1 || value.kind !== kind || value.filter !== filter) throw new Error();
      return value as T;
    } catch {
      throw new BadRequestException("The discovery cursor is malformed or does not match these filters.");
    }
  }

  private mapItem(item: any) {
    return { id: item.id, quantity: item.quantity, condition: item.condition, finish: item.finish,
      language_code: item.language_code, status: item.status, printing: item.printing_finishes.card_printings };
  }

  private mapFeedListing(listing: any) {
    const item = listing.inventory_items_listings_inventory_item_id_seller_user_idToinventory_items ??
      listing.inventory_items_listings_inventory_item_id_seller_store_idToinventory_items;
    const seller = listing.seller_user_id
      ? { kind: "user", id: item.user_profiles.id, display_name: item.user_profiles.display_name, username: item.user_profiles.username }
      : { kind: "store", id: item.stores.id, name: item.stores.name };
    return { ...this.mapPreview(listing), seller, created_at: listing.created_at };
  }

  private mapPreview(listing: any) {
    const item = listing.inventory_items_listings_inventory_item_id_seller_user_idToinventory_items ??
      listing.inventory_items_listings_inventory_item_id_seller_store_idToinventory_items;
    return { ...this.mapItem(item), listing: { id: listing.id, accepts_cash: listing.accepts_cash,
      accepts_trade: listing.accepts_trade, asking_price: listing.asking_price,
      currency_code: listing.currency_code } };
  }

  private mapPreferredStore(store: any) {
    if (!store || store.status !== "active" || store.verification_status !== "verified" || !store.trade_mediation_enabled) return null;
    const { status: _status, verification_status: _verification, trade_mediation_enabled: _mediation, ...safeStore } = store;
    return safeStore;
  }

  private publicUserWhere(id: string) {
    return { id, status: "active", OR: [
      { collections: { some: { visibility: "public" } } },
      { inventory_items: { some: { ...available, owner_store_id: null,
        listings_listings_inventory_item_id_seller_user_idToinventory_items: { some: activeListing } } } },
      { wishlists: { some: { visibility: "public", status: "active" } } },
    ] };
  }

  private async requirePublicUser(id: string) {
    const user = await this.database.client.user_profiles.findFirst({
      where: this.publicUserWhere(id),
      select: { id: true, display_name: true, username: true,
        preferred_store: { select: preferredStoreSelect } },
    });
    if (!user) throw new NotFoundException("User was not found.");
    return user;
  }

  private userListingWhere(userId: string) {
    return { seller_user_id: userId, seller_store_id: null, ...activeListing,
      inventory_items_listings_inventory_item_id_seller_user_idToinventory_items: {
        is: { owner_user_id: userId, owner_store_id: null, ...available },
      } } as const;
  }

  private storeListingWhere(storeId: string) {
    return { seller_store_id: storeId, seller_user_id: null, ...activeListing,
      inventory_items_listings_inventory_item_id_seller_store_idToinventory_items: {
        is: { owner_store_id: storeId, owner_user_id: null, ...available },
      } } as const;
  }

  private async requirePublicStore(id: string) {
    const store = await this.database.client.stores.findFirst({ where: { id, ...eligibleStore },
      select: { id: true, name: true, slug: true, description: true, logo_url: true,
        city: true, state_region: true, country_code: true } });
    if (!store) throw new NotFoundException("Store was not found.");
    return store;
  }

  private async representativePrintings(canonicalIds: string[]) {
    if (!canonicalIds.length) return new Map<string, any>();
    const rows = await this.database.client.$queryRaw<Array<{ id: string; canonical_card_id: string }>>(Prisma.sql`
      SELECT id, canonical_card_id FROM (
        SELECT cp.id, cp.canonical_card_id, ROW_NUMBER() OVER (PARTITION BY cp.canonical_card_id ORDER BY
          CASE WHEN cp.language_code = 'en' THEN 0 ELSE 1 END,
          CASE WHEN cp.is_digital = false THEN 0 ELSE 1 END,
          CASE WHEN cp.image_normal_uri IS NOT NULL OR cp.image_large_uri IS NOT NULL OR cp.image_small_uri IS NOT NULL THEN 0 ELSE 1 END,
          CASE WHEN cp.is_promo = false THEN 0 ELSE 1 END,
          cp.released_at DESC NULLS LAST, cp.id ASC) rank
        FROM card_printings cp WHERE cp.canonical_card_id IN (${Prisma.join(canonicalIds)})
      ) ranked WHERE rank = 1`);
    const printings = await this.database.client.card_printings.findMany({
      where: { id: { in: rows.map((row) => row.id) } },
      select: { id: true, canonical_card_id: true, collector_number: true, language_code: true,
        printed_name: true, rarity: true, image_small_uri: true, image_normal_uri: true,
        image_large_uri: true, card_sets: { select: { id: true, code: true, name: true } } },
    });
    return new Map(printings.map((printing) => [printing.canonical_card_id, printing]));
  }

  async getUser(id: string) {
    const user = await this.requirePublicUser(id);
    const listingWhere = this.userListingWhere(id);
    const [publicCollectionCount, activeListingCount, publicWishlistCount, publicWishlistItemCount] = await Promise.all([
      this.database.client.collections.count({ where: { user_id: id, visibility: "public" } }),
      this.database.client.listings.count({ where: listingWhere }),
      this.database.client.wishlists.count({ where: { user_id: id, visibility: "public", status: "active" } }),
      this.database.client.wishlist_items.count({ where: { status: "active",
        wishlists: { user_id: id, visibility: "public", status: "active" } } }),
    ]);
    const { preferred_store, ...identity } = user;
    return { user: { ...identity, preferred_store: this.mapPreferredStore(preferred_store) }, summary: {
      public_collection_count: publicCollectionCount, active_listing_count: activeListingCount,
      public_wishlist_count: publicWishlistCount, public_wishlist_item_count: publicWishlistItemCount,
    } };
  }

  async getUserCollections(id: string, query: DiscoveryUserCollectionQuery) {
    const user = await this.requirePublicUser(id);
    const where = { user_id: id, visibility: "public" } as const;
    const [collections, total] = await Promise.all([
      this.database.client.collections.findMany({ where,
        select: { id: true, name: true, description: true, created_at: true, updated_at: true },
        orderBy: [{ updated_at: "desc" }, { id: "asc" }], skip: (query.page - 1) * query.pageSize, take: query.pageSize }),
      this.database.client.collections.count({ where }),
    ]);
    const ids = collections.map((collection) => collection.id);
    const marketplace = { ...available,
      listings_listings_inventory_item_id_seller_user_idToinventory_items: { some: activeListing } };
    const [allCounts, marketCounts, previews] = await Promise.all([
      this.database.client.inventory_items.groupBy({ by: ["collection_id"], where: { collection_id: { in: ids }, owner_user_id: id, ...available }, _sum: { quantity: true }, _count: { _all: true } }),
      this.database.client.inventory_items.groupBy({ by: ["collection_id"], where: { collection_id: { in: ids }, owner_user_id: id, ...marketplace }, _sum: { quantity: true }, _count: { _all: true } }),
      this.rankedPreviews("collection", ids, query.previewLimit),
    ]);
    const allById = new Map(allCounts.map((value: any) => [value.collection_id, value]));
    const marketById = new Map(marketCounts.map((value: any) => [value.collection_id, value]));
    return { user: { id: user.id, display_name: user.display_name, username: user.username },
      items: collections.map((collection) => ({ ...collection,
        inventory_row_count: allById.get(collection.id)?._count._all ?? 0,
        card_quantity: allById.get(collection.id)?._sum.quantity ?? 0,
        marketplace_inventory_row_count: marketById.get(collection.id)?._count._all ?? 0,
        marketplace_card_quantity: marketById.get(collection.id)?._sum.quantity ?? 0,
        preview_items: previews.get(collection.id) ?? [] })),
      pagination: { page: query.page, page_size: query.pageSize, total_count: total,
        has_more: query.page * query.pageSize < total } };
  }

  async getUserListings(id: string, query: DiscoveryUserListingQuery) {
    const user = await this.requirePublicUser(id);
    const where = this.userListingWhere(id);
    const [listings, total] = await Promise.all([
      this.database.client.listings.findMany({ where, select: previewSelect,
        orderBy: [{ created_at: "desc" }, { id: "asc" }], skip: (query.page - 1) * query.pageSize, take: query.pageSize }),
      this.database.client.listings.count({ where }),
    ]);
    return { user: { id: user.id, display_name: user.display_name, username: user.username },
      items: listings.map((listing) => this.mapPreview(listing)),
      pagination: { page: query.page, page_size: query.pageSize, total_count: total,
        has_more: query.page * query.pageSize < total } };
  }

  async getUserWishlists(id: string, query: DiscoveryUserWishlistQuery) {
    const user = await this.requirePublicUser(id);
    const where = { user_id: id, visibility: "public", status: "active" } as const;
    const [wishlists, total] = await Promise.all([
      this.database.client.wishlists.findMany({ where,
        select: { id: true, name: true, description: true, created_at: true, updated_at: true },
        orderBy: [{ updated_at: "desc" }, { id: "asc" }], skip: (query.page - 1) * query.pageSize, take: query.pageSize }),
      this.database.client.wishlists.count({ where }),
    ]);
    const ids = wishlists.map((wishlist) => wishlist.id);
    const counts = await this.database.client.wishlist_items.groupBy({ by: ["wishlist_id"],
      where: { wishlist_id: { in: ids }, status: "active" }, _count: { _all: true }, _sum: { quantity_desired: true } });
    const items = await this.database.client.wishlist_items.findMany({
      where: { wishlist_id: { in: ids }, status: "active" },
      select: { id: true, wishlist_id: true, canonical_card_id: true, printing_id: true,
        desired_finish: true, desired_condition: true, language_code: true, quantity_desired: true,
        canonical_cards: { select: { id: true, name: true } },
        card_printings: { select: { id: true, canonical_card_id: true, collector_number: true,
          language_code: true, printed_name: true, rarity: true, image_small_uri: true,
          image_normal_uri: true, image_large_uri: true, canonical_cards: { select: { id: true, name: true } },
          card_sets: { select: { id: true, code: true, name: true } } } } },
      orderBy: [{ priority: "desc" }, { created_at: "asc" }, { id: "asc" }],
    });
    const canonicalIds = [...new Set(items.flatMap((item) => item.canonical_card_id ? [item.canonical_card_id] : []))];
    const representatives = await this.representativePrintings(canonicalIds);
    const grouped = new Map<string, any[]>();
    for (const item of items) {
      const values = grouped.get(item.wishlist_id) ?? [];
      if (values.length < query.previewLimit) {
        const printing = item.card_printings ?? (item.canonical_card_id ? representatives.get(item.canonical_card_id) ?? null : null);
        const canonical = item.canonical_cards ?? item.card_printings?.canonical_cards ?? null;
        values.push({ id: item.id, quantity_desired: item.quantity_desired, desired_finish: item.desired_finish,
          desired_condition: item.desired_condition, language_code: item.language_code,
          target: { canonical_card: canonical, printing: item.printing_id ? printing : null,
            representative_printing: item.printing_id ? null : printing } });
        grouped.set(item.wishlist_id, values);
      }
    }
    const countsById = new Map(counts.map((value: any) => [value.wishlist_id, value]));
    return { user: { id: user.id, display_name: user.display_name, username: user.username },
      items: wishlists.map((wishlist) => ({ ...wishlist,
        active_item_count: countsById.get(wishlist.id)?._count._all ?? 0,
        wanted_card_quantity: countsById.get(wishlist.id)?._sum.quantity_desired ?? 0,
        preview_items: grouped.get(wishlist.id) ?? [] })),
      pagination: { page: query.page, page_size: query.pageSize, total_count: total,
        has_more: query.page * query.pageSize < total } };
  }

  /** Database-ranked and capped before card metadata is hydrated. The explicit
   * rarity values reflect the local catalog; unknown/null values safely rank last. */
  private async rankedPreviews(kind: "collection" | "store", ids: string[], limit: number) {
    if (!ids.length) return new Map<string, any[]>();
    const owner = kind === "collection" ? Prisma.raw("i.collection_id") : Prisma.raw("i.owner_store_id");
    const ownership = kind === "collection"
      ? Prisma.sql`l.seller_user_id = i.owner_user_id AND l.seller_store_id IS NULL`
      : Prisma.sql`l.seller_store_id = i.owner_store_id AND l.seller_user_id IS NULL`;
    const ranked = await this.database.client.$queryRaw<RankedRow[]>(Prisma.sql`
      SELECT listing_id, owner_id, preview_rank FROM (
        SELECT l.id listing_id, ${owner} owner_id,
          ROW_NUMBER() OVER (PARTITION BY ${owner} ORDER BY
            CASE WHEN l.accepts_trade THEN 0 ELSE 1 END,
            CASE LOWER(COALESCE(cp.rarity, '')) WHEN 'mythic' THEN 0 WHEN 'rare' THEN 1
              WHEN 'special' THEN 2 WHEN 'bonus' THEN 2 WHEN 'uncommon' THEN 3
              WHEN 'common' THEN 4 ELSE 5 END,
            l.created_at DESC, l.id ASC) preview_rank
        FROM listings l JOIN inventory_items i ON i.id = l.inventory_item_id
        JOIN card_printings cp ON cp.id = i.printing_id
        WHERE ${owner} IN (${Prisma.join(ids)}) AND i.status = 'available'
          AND l.status = 'active' AND (l.accepts_trade OR l.accepts_cash) AND ${ownership}
      ) ranked WHERE preview_rank <= ${limit} ORDER BY owner_id, preview_rank`);
    const listings = await this.database.client.listings.findMany({
      where: { id: { in: ranked.map((row) => row.listing_id) } }, select: previewSelect,
    });
    const byId = new Map(listings.map((listing) => [listing.id, listing]));
    const result = new Map<string, any[]>();
    for (const row of ranked) {
      const listing = byId.get(row.listing_id); if (!listing) continue;
      const values = result.get(row.owner_id) ?? []; values.push(this.mapPreview(listing)); result.set(row.owner_id, values);
    }
    return result;
  }

  private diverse<T extends { user_id: string }>(items: T[], limit: number) {
    const result: T[] = []; const owners = new Set<string>();
    for (const item of items) { if (!owners.has(item.user_id)) { result.push(item); owners.add(item.user_id); } if (result.length === limit) return result; }
    for (const item of items) { if (!result.includes(item)) result.push(item); if (result.length === limit) break; }
    return result;
  }

  async getCollectionFeed(query: DiscoveryCollectionFeedQuery) {
    type Cursor = { v: 1; kind: "collections"; filter: string; updatedAt: string; id: string };
    const cursor = this.decodeCursor<Cursor>(query.cursor, "collections", query.availability);
    const cursorDate = cursor ? new Date(cursor.updatedAt) : null;
    if (cursor && (!cursor.id || !cursorDate || Number.isNaN(cursorDate.getTime()))) {
      throw new BadRequestException("The discovery cursor is malformed or does not match these filters.");
    }
    const marketplace = { ...available,
      listings_listings_inventory_item_id_seller_user_idToinventory_items: { some: activeListing } };
    const where: Prisma.collectionsWhereInput = {
      visibility: "public", user_profiles: { status: "active" },
      ...(query.availability === "marketplace" ? { inventory_items: { some: marketplace } } : {}),
      ...(cursor && cursorDate ? { OR: [
        { updated_at: { lt: cursorDate } },
        { updated_at: cursorDate, id: { gt: cursor.id } },
      ] } : {}),
    };
    const rows = await this.database.client.collections.findMany({ where,
      select: { id: true, user_id: true, name: true, description: true, created_at: true, updated_at: true,
        user_profiles: { select: { id: true, display_name: true, username: true,
          preferred_store: { select: preferredStoreSelect } } } },
      orderBy: [{ updated_at: "desc" }, { id: "asc" }], take: query.limit + 1 });
    const hasMore = rows.length > query.limit; const collections = rows.slice(0, query.limit);
    const ids = collections.map((value) => value.id);
    const [allCounts, marketCounts, previews] = await Promise.all([
      this.database.client.inventory_items.groupBy({ by: ["collection_id"], where: { collection_id: { in: ids }, ...available }, _sum: { quantity: true }, _count: { _all: true } }),
      this.database.client.inventory_items.groupBy({ by: ["collection_id"], where: { collection_id: { in: ids }, ...marketplace }, _sum: { quantity: true }, _count: { _all: true } }),
      this.rankedPreviews("collection", ids, query.previewLimit),
    ]);
    const allById = new Map(allCounts.map((value: any) => [value.collection_id, value]));
    const marketById = new Map(marketCounts.map((value: any) => [value.collection_id, value]));
    const items = collections.map(({ user_profiles, user_id: _ownerId, ...metadata }) => {
      const { preferred_store, ...owner } = user_profiles;
      return { ...metadata, owner, preferred_store: this.mapPreferredStore(preferred_store),
        inventory_row_count: allById.get(metadata.id)?._count._all ?? 0, card_quantity: allById.get(metadata.id)?._sum.quantity ?? 0,
        marketplace_inventory_row_count: marketById.get(metadata.id)?._count._all ?? 0,
        marketplace_card_quantity: marketById.get(metadata.id)?._sum.quantity ?? 0,
        preview_items: previews.get(metadata.id) ?? [] };
    });
    const last = collections.at(-1);
    return { items, next_cursor: hasMore && last ? this.encodeCursor({ v: 1, kind: "collections", filter: query.availability,
      updatedAt: last.updated_at.toISOString(), id: last.id }) : null, has_more: hasMore };
  }

  async getStoreFeed(query: DiscoveryStoreFeedQuery) {
    type Cursor = { v: 1; kind: "stores"; filter: string; name: string; id: string };
    const cursor = this.decodeCursor<Cursor>(query.cursor, "stores", query.availability);
    if (cursor && (typeof cursor.name !== "string" || !cursor.id)) throw new BadRequestException("The discovery cursor is malformed or does not match these filters.");
    const marketplace = { ...available, owner_user_id: null,
      listings_listings_inventory_item_id_seller_store_idToinventory_items: { some: activeListing } };
    const where: Prisma.storesWhereInput = { ...eligibleStore,
      ...(query.availability === "marketplace" ? { inventory_items: { some: marketplace } } : {}),
      ...(cursor ? { OR: [{ name: { gt: cursor.name } }, { name: cursor.name, id: { gt: cursor.id } }] } : {}) };
    const rows = await this.database.client.stores.findMany({ where,
      select: { id: true, name: true, slug: true, description: true, logo_url: true, city: true, state_region: true, country_code: true },
      orderBy: [{ name: "asc" }, { id: "asc" }], take: query.limit + 1 });
    const hasMore = rows.length > query.limit; const stores = rows.slice(0, query.limit); const ids = stores.map((value) => value.id);
    const [allCounts, marketCounts, previews] = await Promise.all([
      this.database.client.inventory_items.groupBy({ by: ["owner_store_id"], where: { owner_store_id: { in: ids }, owner_user_id: null, ...available }, _sum: { quantity: true }, _count: { _all: true } }),
      this.database.client.inventory_items.groupBy({ by: ["owner_store_id"], where: { owner_store_id: { in: ids }, ...marketplace }, _sum: { quantity: true }, _count: { _all: true } }),
      this.rankedPreviews("store", ids, query.previewLimit),
    ]);
    const allById = new Map(allCounts.map((value: any) => [value.owner_store_id, value])); const marketById = new Map(marketCounts.map((value: any) => [value.owner_store_id, value]));
    const items = stores.map((store) => ({ ...store, inventory_row_count: allById.get(store.id)?._count._all ?? 0,
      card_quantity: allById.get(store.id)?._sum.quantity ?? 0, marketplace_inventory_row_count: marketById.get(store.id)?._count._all ?? 0,
      marketplace_card_quantity: marketById.get(store.id)?._sum.quantity ?? 0, preview_items: previews.get(store.id) ?? [] }));
    const last = stores.at(-1);
    return { items, next_cursor: hasMore && last ? this.encodeCursor({ v: 1, kind: "stores", filter: query.availability,
      name: last.name, id: last.id }) : null, has_more: hasMore };
  }

  async getListingFeed(query: DiscoveryListingFeedQuery) {
    type Cursor = { v: 1; kind: "listings"; filter: string; createdAt: string; id: string };
    const cursor = this.decodeCursor<Cursor>(query.cursor, "listings", query.intent);
    const cursorDate = cursor ? new Date(cursor.createdAt) : null;
    if (cursor && (!cursor.id || !cursorDate || Number.isNaN(cursorDate.getTime()))) throw new BadRequestException("The discovery cursor is malformed or does not match these filters.");
    const intent = query.intent === "trade" ? { accepts_trade: true, accepts_cash: false }
      : query.intent === "sale" ? { accepts_trade: false, accepts_cash: true }
      : query.intent === "mixed" ? { accepts_trade: true, accepts_cash: true }
      : { OR: [{ accepts_trade: true }, { accepts_cash: true }] };
    const ownership: Prisma.listingsWhereInput = { OR: [
      { seller_user_id: { not: null }, seller_store_id: null,
        inventory_items_listings_inventory_item_id_seller_user_idToinventory_items: { is: { ...available, owner_store_id: null, user_profiles: { status: "active" } } } },
      { seller_store_id: { not: null }, seller_user_id: null,
        inventory_items_listings_inventory_item_id_seller_store_idToinventory_items: { is: { ...available, owner_user_id: null, stores: eligibleStore } } },
    ] };
    const where: Prisma.listingsWhereInput = { status: "active", AND: [intent, ownership,
      ...(cursor && cursorDate ? [{ OR: [{ created_at: { lt: cursorDate } }, { created_at: cursorDate, id: { gt: cursor.id } }] }] : [])] };
    const rows = await this.database.client.listings.findMany({ where, select: { ...previewSelect, seller_user_id: true, seller_store_id: true, created_at: true },
      orderBy: [{ created_at: "desc" }, { id: "asc" }], take: query.limit + 1 });
    const hasMore = rows.length > query.limit; const listings = rows.slice(0, query.limit); const last = listings.at(-1);
    return { items: listings.map((listing) => this.mapFeedListing(listing)),
      next_cursor: hasMore && last ? this.encodeCursor({ v: 1, kind: "listings", filter: query.intent,
        createdAt: last.created_at.toISOString(), id: last.id }) : null, has_more: hasMore };
  }

  async getCollections(query: DiscoveryCollectionListQuery) {
    const marketplace = { ...available,
      listings_listings_inventory_item_id_seller_user_idToinventory_items: { some: activeListing } };
    const candidates = await this.database.client.collections.findMany({
      where: { visibility: "public", user_profiles: { status: "active" },
        inventory_items: { some: query.marketplaceOnly ? marketplace : available } },
      select: { id: true, user_id: true, name: true, description: true, created_at: true, updated_at: true,
        user_profiles: { select: { id: true, display_name: true, username: true,
          preferred_store: { select: preferredStoreSelect } } } },
      orderBy: [{ updated_at: "desc" }, { id: "asc" }], take: query.diverseOwners ? query.limit * 4 : query.limit,
    });
    const distinctOwnerCandidates = query.diverseOwners
      ? await this.database.client.collections.findMany({
          where: { visibility: "public", user_profiles: { status: "active" },
            inventory_items: { some: query.marketplaceOnly ? marketplace : available } },
          select: { id: true, user_id: true, name: true, description: true, created_at: true, updated_at: true,
            user_profiles: { select: { id: true, display_name: true, username: true,
              preferred_store: { select: preferredStoreSelect } } } },
          distinct: ["user_id"], orderBy: [{ updated_at: "desc" }, { id: "asc" }], take: query.limit,
        })
      : [];
    const candidateById = new Map([...candidates, ...distinctOwnerCandidates].map((value) => [value.id, value]));
    const rankedCandidates = [...candidateById.values()].sort((a, b) =>
      b.updated_at.getTime() - a.updated_at.getTime() || a.id.localeCompare(b.id));
    const collections = query.diverseOwners ? this.diverse(rankedCandidates, query.limit) : candidates;
    const ids = collections.map((value) => value.id);
    const [allCounts, marketCounts, previews] = await Promise.all([
      this.database.client.inventory_items.groupBy({ by: ["collection_id"], where: { collection_id: { in: ids }, ...available }, _sum: { quantity: true }, _count: { _all: true } }),
      this.database.client.inventory_items.groupBy({ by: ["collection_id"], where: { collection_id: { in: ids }, ...marketplace }, _sum: { quantity: true }, _count: { _all: true } }),
      this.rankedPreviews("collection", ids, query.previewLimit),
    ]);
    const allById = new Map(allCounts.map((value: any) => [value.collection_id, value]));
    const marketById = new Map(marketCounts.map((value: any) => [value.collection_id, value]));
    return collections.map(({ user_profiles, user_id: _ownerId, ...metadata }) => {
      const { preferred_store, ...owner } = user_profiles;
      return ({ ...metadata, owner, preferred_store: this.mapPreferredStore(preferred_store),
      inventory_row_count: allById.get(metadata.id)?._count._all ?? 0, card_quantity: allById.get(metadata.id)?._sum.quantity ?? 0,
      marketplace_inventory_row_count: marketById.get(metadata.id)?._count._all ?? 0,
      marketplace_card_quantity: marketById.get(metadata.id)?._sum.quantity ?? 0,
      preview_items: previews.get(metadata.id) ?? [] });
    });
  }

  async getCollection(id: string, query: DiscoveryInventoryPageQuery) {
    const collection = await this.database.client.collections.findFirst({ where: { id, visibility: "public", user_profiles: { status: "active" } },
      select: { id: true, name: true, description: true, created_at: true, updated_at: true,
        user_profiles: { select: { id: true, display_name: true, username: true,
          preferred_store: { select: preferredStoreSelect } } } } });
    if (!collection) throw new NotFoundException("Collection was not found.");
    const where = { collection_id: id, owner_user_id: collection.user_profiles.id, ...available } as const;
    const [items, aggregate] = await Promise.all([
      this.database.client.inventory_items.findMany({ where, select: {
        ...inventorySelect,
        listings_listings_inventory_item_id_seller_user_idToinventory_items: {
          where: activeListing,
          select: { id: true, accepts_cash: true, accepts_trade: true,
            asking_price: true, currency_code: true },
          orderBy: [{ created_at: "desc" }, { id: "asc" }],
          take: 1,
        },
      }, orderBy: [{ created_at: "desc" }, { id: "asc" }], skip: (query.page - 1) * query.pageSize, take: query.pageSize }),
      this.database.client.inventory_items.aggregate({ where, _count: { _all: true }, _sum: { quantity: true } }),
    ]); const total = aggregate._count._all;
    const { preferred_store, ...owner } = collection.user_profiles;
    return { collection: { id: collection.id, name: collection.name, description: collection.description, created_at: collection.created_at,
      updated_at: collection.updated_at, owner, preferred_store: this.mapPreferredStore(preferred_store), inventory_row_count: total, card_quantity: aggregate._sum.quantity ?? 0 },
      items: items.map((item) => {
        const { listings_listings_inventory_item_id_seller_user_idToinventory_items: listings, ...safeItem } = item;
        const listing = listings[0];
        return { ...this.mapItem(safeItem), listing: listing ? {
          id: listing.id, accepts_cash: listing.accepts_cash,
          accepts_trade: listing.accepts_trade, asking_price: listing.asking_price,
          currency_code: listing.currency_code,
        } : undefined };
      }), pagination: { page: query.page, page_size: query.pageSize,
        total_count: total, has_more: query.page * query.pageSize < total } };
  }

  async getStores(query: DiscoveryStoreListQuery) {
    const marketplace = { ...available, owner_user_id: null,
      listings_listings_inventory_item_id_seller_store_idToinventory_items: { some: activeListing } };
    const stores = await this.database.client.stores.findMany({ where: { ...eligibleStore,
      inventory_items: { some: query.marketplaceOnly ? marketplace : { ...available, owner_user_id: null } } },
      select: { id: true, name: true, slug: true, description: true, logo_url: true },
      orderBy: [{ updated_at: "desc" }, { id: "asc" }], take: query.limit });
    const ids = stores.map((value) => value.id);
    const [allCounts, marketCounts, previews] = await Promise.all([
      this.database.client.inventory_items.groupBy({ by: ["owner_store_id"], where: { owner_store_id: { in: ids }, owner_user_id: null, ...available }, _sum: { quantity: true }, _count: { _all: true } }),
      this.database.client.inventory_items.groupBy({ by: ["owner_store_id"], where: { owner_store_id: { in: ids }, ...marketplace }, _sum: { quantity: true }, _count: { _all: true } }),
      this.rankedPreviews("store", ids, query.previewLimit),
    ]);
    const allById = new Map(allCounts.map((value: any) => [value.owner_store_id, value])); const marketById = new Map(marketCounts.map((value: any) => [value.owner_store_id, value]));
    return stores.map((store) => ({ ...store, inventory_row_count: allById.get(store.id)?._count._all ?? 0,
      card_quantity: allById.get(store.id)?._sum.quantity ?? 0, marketplace_inventory_row_count: marketById.get(store.id)?._count._all ?? 0,
      marketplace_card_quantity: marketById.get(store.id)?._sum.quantity ?? 0, preview_items: previews.get(store.id) ?? [] }));
  }

  async getStore(id: string) {
    const store = await this.requirePublicStore(id);
    const inventoryWhere = { owner_store_id: id, owner_user_id: null, ...available } as const;
    const listingWhere = this.storeListingWhere(id);
    const [inventory, marketplaceInventory, activeListingCount] = await Promise.all([
      this.database.client.inventory_items.aggregate({ where: inventoryWhere, _count: { _all: true }, _sum: { quantity: true } }),
      this.database.client.inventory_items.aggregate({ where: { ...inventoryWhere,
        listings_listings_inventory_item_id_seller_store_idToinventory_items: { some: activeListing } },
        _count: { _all: true }, _sum: { quantity: true } }),
      this.database.client.listings.count({ where: listingWhere }),
    ]);
    return { store, summary: {
      available_inventory_row_count: inventory._count._all,
      available_card_quantity: inventory._sum.quantity ?? 0,
      marketplace_inventory_row_count: marketplaceInventory._count._all,
      marketplace_card_quantity: marketplaceInventory._sum.quantity ?? 0,
      active_listing_count: activeListingCount,
    } };
  }

  async getStoreListings(id: string, query: DiscoveryUserListingQuery) {
    const store = await this.requirePublicStore(id);
    const where = this.storeListingWhere(id);
    const [listings, total] = await Promise.all([
      this.database.client.listings.findMany({ where, select: previewSelect,
        orderBy: [{ created_at: "desc" }, { id: "asc" }], skip: (query.page - 1) * query.pageSize, take: query.pageSize }),
      this.database.client.listings.count({ where }),
    ]);
    return { store, items: listings.map((listing) => this.mapPreview(listing)), pagination: {
      page: query.page, page_size: query.pageSize, total_count: total,
      has_more: query.page * query.pageSize < total,
    } };
  }

  async getStoreInventory(id: string, query: DiscoveryInventoryPageQuery) {
    const store = await this.requirePublicStore(id);
    const where = { owner_store_id: id, owner_user_id: null, ...available } as const;
    const [items, aggregate] = await Promise.all([
      this.database.client.inventory_items.findMany({ where, select: inventorySelect, orderBy: [{ created_at: "desc" }, { id: "asc" }], skip: (query.page - 1) * query.pageSize, take: query.pageSize }),
      this.database.client.inventory_items.aggregate({ where, _count: { _all: true }, _sum: { quantity: true } }),
    ]); const total = aggregate._count._all;
    return { store: { ...store, inventory_row_count: total, card_quantity: aggregate._sum.quantity ?? 0 }, items: items.map((item) => this.mapItem(item)),
      pagination: { page: query.page, page_size: query.pageSize, total_count: total, has_more: query.page * query.pageSize < total } };
  }
}
