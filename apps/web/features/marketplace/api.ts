/* eslint-disable @typescript-eslint/no-explicit-any -- External read DTOs are runtime-owned by the API. */
import { shouldRequestMtgMarketPrices } from "../cards/presentation.ts";

export type CardPrinting = {
  id: string;
  collector_number: string;
  printed_name: string | null;
  image_small_uri: string | null;
  image_normal_uri: string | null;
  rarity?: string | null;
  card_sets: { code: string; name: string };
};

export type CatalogPrinting = CardPrinting & {
  canonical_card_id: string;
  card_set_id: string;
  language_code: string;
  artist_name: string | null;
  treatment: string | null;
  frame_version: string | null;
  border_color: string | null;
  is_promo: boolean;
  is_reprint: boolean;
  released_at: string | null;
  image_large_uri: string | null;
  illustration_id: string | null;
  variation: boolean;
  card_sets: {
    id: string;
    code: string;
    name: string;
    release_date: string | null;
  };
};

export type CatalogPrintingFinish = {
  finish: string;
};

export type MarketPrice = {
  printing_id: string;
  finish: string;
  source: "tcgplayer" | "cardkingdom";
  currency_code: string;
  market_price: string;
  captured_at: string;
};

export type CatalogCard = {
  id: string;
  game_id: string;
  name: string;
  type_line: string | null;
};

export type Listing = {
  id: string;
  accepts_cash: boolean;
  accepts_trade: boolean;
  asking_price: string | null;
  currency_code: string | null;
  inventory_item: {
    id: string;
    finish: string;
    condition: string;
    user_profiles?: {
      id: string;
      display_name: string | null;
      username: string | null;
    };
    stores?: { id: string; name: string };
    printing: CardPrinting & {
      canonical_cards: { id: string; name: string };
    };
  } | null;
};

export type PublicListing = {
  id: string;
  game_id: string;
  inventory_item_id: string;
  seller_user_id: string | null;
  seller_store_id: string | null;
  accepts_cash: boolean;
  accepts_trade: boolean;
  asking_price: string | null;
  currency_code: string | null;
  preferred_store_id: string | null;
  title: string | null;
  description: string | null;
  status: string;
  created_at: string;
  updated_at: string;
  inventory_item: {
    id: string;
    finish: string;
    condition: string;
    language_code: string;
    quantity: number;
    is_signed: boolean;
    is_altered: boolean;
    is_graded: boolean;
    status: string;
    user_profiles?: {
      id: string;
      display_name: string | null;
      username: string | null;
    };
    stores?: {
      id: string;
      name: string;
      slug: string;
      logo_url: string | null;
    };
    printing: CardPrinting & {
      image_large_uri: string | null;
      canonical_cards: {
        id: string;
        name: string;
        mana_cost: string | null;
        type_line: string | null;
      };
    };
  } | null;
  preferred_store: PreferredStore | null;
};

export type PublicListingResult =
  | { status: "ready"; data: PublicListing }
  | { status: "not-found" }
  | { status: "unavailable" };

export type CardView = {
  id: string;
  name: string;
  imageUrl: string | null;
  setName: string;
  setCode: string;
  collectorNumber: string;
  finish?: string;
  condition?: string;
  price?: string;
  trade?: boolean;
  source?:
    | {
        kind: "user";
        id: string;
        display_name: string | null;
        username: string | null;
      }
    | { kind: "store"; id: string; name: string };
  quantity?: number;
  language?: string;
  rarity?: string | null;
  listing?: {
    id: string;
    acceptsCash: boolean;
    acceptsTrade: boolean;
    askingPrice: string | null;
    currencyCode: string | null;
  };
  canonicalCardId?: string;
  printingId?: string;
  gameId?: string;
};

export type CatalogSearchResult = {
  query: string;
  items: Array<CatalogCard & { representative_printing: CardPrinting | null }>;
  page: number;
  page_size: number;
  total_results: number;
  total_pages: number;
  cards: CardView[];
};

export type DiscoveryInventoryItem = {
  id: string;
  game_id: string;
  quantity: number;
  condition: string;
  finish: string;
  language_code: string;
  status: string;
  printing: CardPrinting & {
    image_large_uri: string | null;
    rarity: string | null;
    treatment: string | null;
    canonical_cards: {
      id: string;
      name: string;
      mana_cost: string | null;
      type_line: string | null;
    };
    card_sets: { id: string; code: string; name: string };
  };
  listing?: {
    id: string;
    game_id: string;
    accepts_cash: boolean;
    accepts_trade: boolean;
    asking_price: string | null;
    currency_code: string | null;
  };
};

export type PreferredStore = {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  city: string | null;
  state_region: string | null;
  country_code: string | null;
};

export type TradeMediatorStore = PreferredStore & {
  description: string | null;
  email: string | null;
  phone: string | null;
  website_url: string | null;
  address_line1: string | null;
  address_line2: string | null;
  postal_code: string | null;
  verification_status: string;
  status: string;
  trade_mediation_enabled: boolean;
};

export type PublicCollection = {
  id: string;
  name: string;
  description: string | null;
  owner: { id: string; display_name: string | null; username: string | null };
  preferred_store: PreferredStore | null;
  inventory_row_count: number;
  card_quantity: number;
  marketplace_inventory_row_count: number;
  marketplace_card_quantity: number;
  preview_items: DiscoveryInventoryItem[];
};

export type PublicStore = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  logo_url: string | null;
  city?: string | null;
  state_region?: string | null;
  country_code?: string | null;
  inventory_row_count: number;
  card_quantity: number;
  marketplace_inventory_row_count: number;
  marketplace_card_quantity: number;
  preview_items: DiscoveryInventoryItem[];
};

export type PublicStoreProfile = {
  store: Pick<
    PublicStore,
    | "id"
    | "name"
    | "slug"
    | "description"
    | "logo_url"
    | "city"
    | "state_region"
    | "country_code"
  >;
  summary: {
    available_inventory_row_count: number;
    available_card_quantity: number;
    marketplace_inventory_row_count: number;
    marketplace_card_quantity: number;
    active_listing_count: number;
  };
};

export type PublicCollectionPage = {
  collection: Omit<PublicCollection, "preview_items"> & {
    game_id: string;
    created_at: string;
    updated_at: string;
  };
  items: DiscoveryInventoryItem[];
  pagination: {
    page: number;
    page_size: number;
    total_count: number;
    has_more: boolean;
  };
};

export type PublicCollectionPageResult =
  | { status: "ready"; data: PublicCollectionPage & { cards: CardView[] } }
  | { status: "not-found" }
  | { status: "unavailable" };

export type PublicUserProfile = {
  user: PublicCollection["owner"] & { preferred_store: PreferredStore | null };
  summary: {
    public_collection_count: number;
    active_listing_count: number;
    public_wishlist_count: number;
    public_wishlist_item_count: number;
  };
};

export type PublicWishlistItem = {
  id: string;
  quantity_desired: number;
  desired_finish: string | null;
  desired_condition: string | null;
  language_code: string | null;
  target: {
    canonical_card: { id: string; name: string } | null;
    printing:
      | (CardPrinting & {
          canonical_card_id: string;
          canonical_cards: { id: string; name: string };
        })
      | null;
    representative_printing:
      | (CardPrinting & { canonical_card_id: string })
      | null;
  };
};

export type PublicWishlist = {
  id: string;
  name: string;
  description: string | null;
  active_item_count: number;
  wanted_card_quantity: number;
  preview_items: PublicWishlistItem[];
};

type PublicPage<T> = {
  items: T[];
  pagination: {
    page: number;
    page_size: number;
    total_count: number;
    has_more: boolean;
  };
};
export type PublicUserResult<T> =
  | { status: "ready"; data: T }
  | { status: "not-found" }
  | { status: "unavailable" };

const apiBase = process.env.DECKDEAL_API_URL ?? "http://localhost:4000/api";

class ApiResponseError extends Error {
  public readonly status: number;

  constructor(status: number) {
    super("DeckDeal API request failed");
    this.status = status;
  }
}

async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(`${apiBase}${path}`, { cache: "no-store" });
  if (!response.ok) throw new ApiResponseError(response.status);
  return response.json() as Promise<T>;
}

export async function getLatestMarketPrices(
  items: Array<{ printingId: string; finish: string }>,
) {
  if (!items.length) return [];
  const unique = [
    ...new Map(
      items.map((item) => [`${item.printingId}:${item.finish}`, item]),
    ).values(),
  ];
  const batches = Array.from(
    { length: Math.ceil(unique.length / 100) },
    (_, index) => unique.slice(index * 100, index * 100 + 100),
  );
  const results = await Promise.all(
    batches.map(async (batch) => {
      const response = await fetch(`${apiBase}/catalog/prices/latest`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: batch }),
        cache: "no-store",
      });
      return response.ok ? (response.json() as Promise<MarketPrice[]>) : [];
    }),
  );
  return results.flat();
}

export function catalogSearchApiPath({
  query,
  page,
  gameId,
  pageSize = 60,
}: {
  query: string;
  page: number;
  gameId: string;
  pageSize?: number;
}) {
  return `/catalog/games/${encodeURIComponent(gameId)}/search?q=${encodeURIComponent(query)}&page=${page}&pageSize=${pageSize}`;
}

export async function searchCatalog({
  query,
  page = 1,
  gameId,
  pageSize = 60,
}: {
  query: string;
  page?: number;
  gameId: string;
  pageSize?: number;
}): Promise<CatalogSearchResult> {
  const empty = {
    query: query.trim(),
    items: [],
    page,
    page_size: pageSize,
    total_results: 0,
    total_pages: 0,
    cards: [],
  };
  if (!query.trim()) return empty;
  try {
    const result = await apiGet<Omit<CatalogSearchResult, "cards">>(
      catalogSearchApiPath({ query, page, gameId, pageSize }),
    );
    return {
      ...result,
      cards: result.items.map((card) => {
        const printing = card.representative_printing;
        return {
          id: printing?.id ?? card.id,
          canonicalCardId: card.id,
          printingId: printing?.id,
          gameId: card.game_id,
          name: card.name,
          imageUrl:
            printing?.image_normal_uri ?? printing?.image_small_uri ?? null,
          setName: printing?.card_sets.name ?? "Printing unavailable",
          setCode: printing?.card_sets.code ?? "—",
          collectorNumber: printing?.collector_number ?? "—",
          rarity: printing?.rarity,
        };
      }),
    };
  } catch {
    return empty;
  }
}

export async function getRecentListings(gameSlug?: string): Promise<CardView[]> {
  try {
    const query = new URLSearchParams({ limit: "14", intent: "all" });
    if (gameSlug) query.set("gameSlug", gameSlug);
    const feed = await apiGet<DiscoveryFeed<DiscoverListing>>(
      `/discovery/feed/listings?${query}`,
    );
    return feed.items.map((item) => {
      const seller = item.seller;
      return {
        ...mapDiscoveredInventory(item),
        source:
          seller.kind === "store"
            ? { kind: "store" as const, id: seller.id, name: seller.name }
            : {
                kind: "user" as const,
                id: seller.id,
                display_name: seller.display_name,
                username: seller.username,
              },
      };
    });
  } catch {
    return [];
  }
}

const mapDiscoveredInventory = (item: DiscoveryInventoryItem): CardView => ({
  id: item.id,
  canonicalCardId: item.printing.canonical_cards.id,
  printingId: item.printing.id,
  name: item.printing.canonical_cards.name,
  imageUrl: item.printing.image_normal_uri ?? item.printing.image_small_uri,
  setName: item.printing.card_sets.name,
  setCode: item.printing.card_sets.code,
  collectorNumber: item.printing.collector_number,
  finish: item.finish,
  condition: item.condition,
  quantity: item.quantity,
  language: item.language_code,
  rarity: item.printing.rarity,
  listing: item.listing
    ? {
        id: item.listing.id,
        acceptsCash: item.listing.accepts_cash,
        acceptsTrade: item.listing.accepts_trade,
        askingPrice: item.listing.asking_price,
        currencyCode: item.listing.currency_code,
      }
    : undefined,
});

export type DiscoveryFeed<T> = {
  items: T[];
  next_cursor: string | null;
  has_more: boolean;
};
export type DiscoverCollection = PublicCollection & { cards: CardView[] };
export type DiscoverStore = PublicStore & { cards: CardView[] };
export type DiscoverListing = DiscoveryInventoryItem & {
  seller:
    | {
        kind: "user";
        id: string;
        display_name: string | null;
        username: string | null;
      }
    | { kind: "store"; id: string; name: string };
  created_at: string;
};

export async function getDiscoveryFeed(
  view: "collections" | "stores" | "listings",
  filter: string,
  cursor?: string,
  gameSlug?: string,
) {
  const limit = view === "listings" ? 24 : 12;
  const filterName = view === "listings" ? "intent" : "availability";
  const query = new URLSearchParams({
    limit: String(limit),
    [filterName]: filter,
  });
  if (view !== "listings") query.set("previewLimit", "5");
  if (cursor) query.set("cursor", cursor);
  if ((view === "listings" || view === "collections") && gameSlug) query.set("gameSlug", gameSlug);
  if (view === "collections") {
    const feed = await apiGet<DiscoveryFeed<PublicCollection>>(
      `/discovery/feed/collections?${query}`,
    );
    return {
      ...feed,
      items: feed.items.map((item) => ({
        ...item,
        cards: item.preview_items.map(mapDiscoveredInventory),
      })),
    } as DiscoveryFeed<DiscoverCollection>;
  }
  if (view === "stores") {
    const feed = await apiGet<DiscoveryFeed<PublicStore>>(
      `/discovery/feed/stores?${query}`,
    );
    return {
      ...feed,
      items: feed.items.map((item) => ({
        ...item,
        cards: item.preview_items.map(mapDiscoveredInventory),
      })),
    } as DiscoveryFeed<DiscoverStore>;
  }
  const feed = await apiGet<DiscoveryFeed<DiscoverListing>>(
    `/discovery/feed/listings?${query}`,
  );
  return {
    ...feed,
    items: feed.items.map((item) => ({
      ...item,
      card: {
        ...mapDiscoveredInventory(item),
        source:
          item.seller.kind === "store"
            ? {
                kind: "store" as const,
                id: item.seller.id,
                name: item.seller.name,
              }
            : {
                kind: "user" as const,
                id: item.seller.id,
                display_name: item.seller.display_name,
                username: item.seller.username,
              },
      },
    })),
  };
}

export async function getCardDetail(
  canonicalCardId: string,
  printingId: string | undefined,
  offersPage: number,
  mtgGameId?: string | null,
) {
  try {
    const suffix = printingId
      ? `?printing=${encodeURIComponent(printingId)}`
      : "";
    const detail = await apiGet<any>(
      `/catalog/cards/${encodeURIComponent(canonicalCardId)}${suffix}`,
    );
    const selected = detail.selected_printing?.id ?? "";
    const [listings, finishes] = await Promise.all([
      apiGet<any>(
        `/catalog/cards/${encodeURIComponent(canonicalCardId)}/listings?printing=${encodeURIComponent(selected)}&page=${offersPage}&pageSize=12`,
      ),
      selected ? getCatalogPrintingFinishes(selected) : Promise.resolve([]),
    ]);
    const market_prices = shouldRequestMtgMarketPrices(detail.card?.game_id, mtgGameId)
      ? await getLatestMarketPrices(
          finishes.map((item) => ({ printingId: selected, finish: item.finish })),
        )
      : [];
    return {
      status: "ready" as const,
      detail,
      listings,
      market_prices,
      market_finishes: finishes,
    };
  } catch (error) {
    return {
      status:
        error instanceof ApiResponseError && error.status === 404
          ? ("not-found" as const)
          : ("unavailable" as const),
    };
  }
}

export async function getCatalogCardPrintings(
  canonicalCardId: string,
): Promise<CatalogPrinting[]> {
  return apiGet<CatalogPrinting[]>(
    `/catalog/cards/${encodeURIComponent(canonicalCardId)}/printings`,
  );
}

export async function getCatalogPrintingFinishes(
  printingId: string,
): Promise<CatalogPrintingFinish[]> {
  return apiGet<CatalogPrintingFinish[]>(
    `/catalog/printings/${encodeURIComponent(printingId)}/finishes`,
  );
}

export async function getPublicCollections(): Promise<
  Array<PublicCollection & { cards: CardView[] }>
> {
  try {
    const collections = await apiGet<PublicCollection[]>(
      "/discovery/collections?limit=3&previewLimit=10&marketplaceOnly=true&diverseOwners=true",
    );
    return collections.map((collection) => ({
      ...collection,
      cards: collection.preview_items.map(mapDiscoveredInventory),
    }));
  } catch {
    return [];
  }
}

export async function getPublicStores(): Promise<
  Array<PublicStore & { cards: CardView[] }>
> {
  try {
    const stores = await apiGet<PublicStore[]>(
      "/discovery/stores?limit=1&previewLimit=10&marketplaceOnly=true",
    );
    return stores.map((store) => ({
      ...store,
      cards: store.preview_items.map(mapDiscoveredInventory),
    }));
  } catch {
    return [];
  }
}

export async function getPublicListing(
  listingId: string,
): Promise<PublicListingResult> {
  try {
    return {
      status: "ready",
      data: await apiGet<PublicListing>(
        `/listings/${encodeURIComponent(listingId)}`,
      ),
    };
  } catch (error) {
    if (error instanceof ApiResponseError && error.status === 404) {
      return { status: "not-found" };
    }
    return { status: "unavailable" };
  }
}

export function tradeMediatorsApiPath(gameSlug?: string) {
  return gameSlug
    ? `/stores/trade-mediators?gameSlug=${encodeURIComponent(gameSlug)}`
    : "/stores/trade-mediators";
}

export async function getTradeMediators(gameSlug?: string) {
  return apiGet<TradeMediatorStore[]>(tradeMediatorsApiPath(gameSlug));
}

export async function getPublicCollectionPage(
  collectionId: string,
  page: number,
): Promise<PublicCollectionPageResult> {
  try {
    const data = await apiGet<PublicCollectionPage>(
      `/discovery/collections/${encodeURIComponent(collectionId)}?page=${page}&pageSize=24`,
    );
    return {
      status: "ready",
      data: {
        ...data,
        cards: data.items.map(mapDiscoveredInventory),
      },
    };
  } catch (error) {
    if (error instanceof ApiResponseError && error.status === 404) {
      return { status: "not-found" };
    }
    return { status: "unavailable" };
  }
}

async function publicUserGet<T>(path: string): Promise<PublicUserResult<T>> {
  try {
    return { status: "ready", data: await apiGet<T>(path) };
  } catch (error) {
    if (error instanceof ApiResponseError && error.status === 404)
      return { status: "not-found" };
    return { status: "unavailable" };
  }
}

export function getPublicUser(userId: string) {
  return publicUserGet<PublicUserProfile>(
    `/discovery/users/${encodeURIComponent(userId)}`,
  );
}

export async function getPublicUserCollections(
  userId: string,
  page: number,
  pageSize: number,
  previewLimit: number,
) {
  const result = await publicUserGet<PublicPage<PublicCollection>>(
    `/discovery/users/${encodeURIComponent(userId)}/collections?page=${page}&pageSize=${pageSize}&previewLimit=${previewLimit}`,
  );
  return result.status === "ready"
    ? {
        ...result,
        data: {
          ...result.data,
          items: result.data.items.map((collection) => ({
            ...collection,
            cards: collection.preview_items.map(mapDiscoveredInventory),
          })),
        },
      }
    : result;
}

export async function getPublicUserListings(
  userId: string,
  page: number,
  pageSize: number,
) {
  const result = await publicUserGet<PublicPage<DiscoveryInventoryItem>>(
    `/discovery/users/${encodeURIComponent(userId)}/listings?page=${page}&pageSize=${pageSize}`,
  );
  return result.status === "ready"
    ? {
        ...result,
        data: {
          ...result.data,
          items: result.data.items.map(mapDiscoveredInventory),
        },
      }
    : result;
}

const mapWishlistCard = (item: PublicWishlistItem): CardView => {
  const printing = item.target.printing ?? item.target.representative_printing;
  const canonical =
    item.target.canonical_card ?? item.target.printing?.canonical_cards;
  return {
    id: item.id,
    canonicalCardId: canonical?.id,
    printingId: item.target.printing?.id,
    name: canonical?.name ?? "Unknown card",
    imageUrl: printing?.image_normal_uri ?? printing?.image_small_uri ?? null,
    setName: printing?.card_sets.name ?? "Any printing",
    setCode: printing?.card_sets.code ?? "—",
    collectorNumber: printing?.collector_number ?? "—",
    rarity: printing?.rarity,
    finish: item.desired_finish ?? undefined,
    condition: item.desired_condition ?? undefined,
    language: item.language_code ?? undefined,
    quantity: item.quantity_desired,
  };
};

export async function getPublicUserWishlists(
  userId: string,
  page: number,
  pageSize: number,
  previewLimit: number,
) {
  const result = await publicUserGet<PublicPage<PublicWishlist>>(
    `/discovery/users/${encodeURIComponent(userId)}/wishlists?page=${page}&pageSize=${pageSize}&previewLimit=${previewLimit}`,
  );
  return result.status === "ready"
    ? {
        ...result,
        data: {
          ...result.data,
          items: result.data.items.map((wishlist) => ({
            ...wishlist,
            cards: wishlist.preview_items.map(mapWishlistCard),
          })),
        },
      }
    : result;
}

export function getPublicStore(storeId: string) {
  return publicUserGet<PublicStoreProfile>(
    `/discovery/stores/${encodeURIComponent(storeId)}`,
  );
}

export async function getPublicStoreListings(
  storeId: string,
  page: number,
  pageSize: number,
) {
  const result = await publicUserGet<PublicPage<DiscoveryInventoryItem>>(
    `/discovery/stores/${encodeURIComponent(storeId)}/listings?page=${page}&pageSize=${pageSize}`,
  );
  return result.status === "ready"
    ? {
        ...result,
        data: {
          ...result.data,
          items: result.data.items.map(mapDiscoveredInventory),
        },
      }
    : result;
}

export async function getPublicStoreInventory(
  storeId: string,
  page: number,
  pageSize: number,
) {
  const result = await publicUserGet<{
    store: PublicStore;
    items: DiscoveryInventoryItem[];
    pagination: PublicPage<never>["pagination"];
  }>(
    `/discovery/stores/${encodeURIComponent(storeId)}/inventory?page=${page}&pageSize=${pageSize}`,
  );
  return result.status === "ready"
    ? {
        ...result,
        data: {
          ...result.data,
          cards: result.data.items.map(mapDiscoveredInventory),
        },
      }
    : result;
}
