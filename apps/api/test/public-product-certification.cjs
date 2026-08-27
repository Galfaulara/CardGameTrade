const path = require("node:path");
require("dotenv").config({ path: path.resolve(__dirname, "../../../.env") });
const { createDbClient } = require("@repo/db");
const database = createDbClient(process.env.DATABASE_URL);
const apiBase = process.env.API_BASE_URL ?? "http://localhost:4000/api";
const webBase = process.env.WEB_BASE_URL ?? "http://localhost:3000";
const assert = (value, message) => { if (!value) throw new Error(message); };
async function json(url, expected = 200) { const response = await fetch(`${apiBase}${url}`); assert(response.status === expected, `${url}: expected ${expected}, got ${response.status}`); return response.json(); }
async function html(url, expected = 200) { const response = await fetch(`${webBase}${url}`); assert(response.status === expected, `${url}: expected ${expected}, got ${response.status}`); return response.text(); }
const models = ["inventory_items", "collections", "listings", "listing_offers", "inventory_item_interests", "wishlists", "wishlist_items", "transactions", "user_profiles", "stores", "store_trade_handoffs", "transaction_item_custody"];
async function snapshot() { const result = {}; for (const model of models) { const rows = await database[model].findMany({ select: { id: true, updated_at: true }, orderBy: { id: "asc" } }); result[model] = rows.map((row) => `${row.id}:${row.updated_at.toISOString()}`); } return result; }
async function explain(name, query) { const rows = await database.$queryRawUnsafe(`EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT) ${query}`); console.log(`\n${name} PLAN\n${rows.map((row) => row["QUERY PLAN"]).join("\n")}`); }
async function cursorWalk(pathname, id) { const seen = new Set(); let cursor; let pages = 0; do { const separator = pathname.includes("?") ? "&" : "?"; const page = await json(`${pathname}${cursor ? `${separator}cursor=${encodeURIComponent(cursor)}` : ""}`); pages += 1; for (const item of page.items) { assert(!seen.has(item[id]), `${pathname}: duplicate ${item[id]}`); seen.add(item[id]); } cursor = page.next_cursor; assert(page.has_more === Boolean(cursor), `${pathname}: cursor/has_more mismatch`); assert(pages < 100, `${pathname}: failed to reach end`); } while (cursor); return { pages, seen }; }

async function main() {
  await database.$connect(); const baseline = await snapshot(); let temporaryStoreId = null;
  try {
    const collections = await cursorWalk("/discovery/feed/collections?limit=1&previewLimit=5&availability=all", "id");
    assert(collections.pages >= 3, "Collection cursor did not reach three pages");
    const firstCollections = await json("/discovery/feed/collections?limit=12&previewLimit=5&availability=all");
    const collection = firstCollections.items.find((item) => item.preview_items.length) ?? firstCollections.items[0]; assert(collection, "No public Collection fixture");
    const card = collection.preview_items[0]; assert(card, "No card fixture for navigation certification");
    const storeFeed = await json("/discovery/feed/stores?limit=12&previewLimit=5&availability=all"); const store = storeFeed.items[0]; assert(store, "No participating Store fixture");

    const suffix = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const temporary = await database.stores.create({ data: { name: `ZZ Step 2H Cursor Store ${suffix}`, slug: `step-2h-cursor-store-${suffix}`, status: "active", verification_status: "verified", trade_mediation_enabled: true }, select: { id: true } });
    temporaryStoreId = temporary.id;
    const stores = await cursorWalk("/discovery/feed/stores?limit=1&previewLimit=5&availability=all", "id");
    assert(stores.pages >= 2 && stores.seen.has(temporaryStoreId), "temporary zero-Listing Store did not cursor-page in All");
    const availableStores = await json("/discovery/feed/stores?limit=24&previewLimit=5&availability=marketplace"); assert(!availableStores.items.some((item) => item.id === temporaryStoreId), "zero-Listing Store appeared in Available now");
    await json(`/discovery/stores/${temporaryStoreId}`);

    const listingWalk = await cursorWalk("/discovery/feed/listings?limit=24&intent=all", "id"); assert(listingWalk.pages >= 2, "Listing cursor continuation was not exercised");
    const printingHref = `/cards/${card.printing.canonical_cards.id}?printing=${card.printing.id}`;
    const home = await html("/"); assert(home.includes("/discover") && home.includes("/collections/") && home.includes("/stores/") && home.includes("/users/") && home.includes("/cards/"), "Homepage graph links missing");
    const search = await html(`/search?q=${encodeURIComponent(card.printing.canonical_cards.name)}`); assert(search.includes(`/cards/${card.printing.canonical_cards.id}`), "Search did not link canonical Card");
    const discoverCollections = await html("/discover?view=collections&availability=all"); assert(discoverCollections.includes(`/collections/${collection.id}`) && discoverCollections.includes(`/users/${collection.owner.id}`) && discoverCollections.includes(printingHref), "Discover Collection graph missing");
    const discoverStores = await html("/discover?view=stores&availability=all"); assert(discoverStores.includes(`/stores/${store.id}`), "Discover Store graph missing");
    const discoverListings = await html("/discover?view=listings&intent=all"); assert(discoverListings.includes("/cards/") && (discoverListings.includes("/users/") || discoverListings.includes("/stores/")), "Discover Listing graph missing");
    const collectionPage = await html(`/collections/${collection.id}`); assert(collectionPage.includes(`/users/${collection.owner.id}`) && collectionPage.includes("/cards/") && collectionPage.includes("printing="), "Collection graph missing"); assert(collectionPage.includes("Back to collections"), "Collection detail Back navigation missing"); if (collection.preferred_store) assert(collectionPage.includes(`/stores/${collection.preferred_store.id}`), "Collection preferred Store link missing");
    const collectionDetail = await json(`/discovery/collections/${collection.id}?page=1&pageSize=24`);
    const expectedIntent = collectionDetail.items.find((item) => item.listing)?.listing;
    if (expectedIntent) {
      const label = expectedIntent.accepts_trade && expectedIntent.accepts_cash ? "TRADE + SALE" : expectedIntent.accepts_trade ? "TRADE" : "FOR SALE";
      assert(collectionPage.includes(label), "full Collection page lost active Listing intent presentation");
    }
    const userPage = await html(`/users/${collection.owner.id}`); assert(userPage.includes(`/collections/${collection.id}`) && userPage.includes("Collection highlights"), "User Overview summary missing");
    const userCollectionsPage = await html(`/users/${collection.owner.id}?view=collections`); assert(userCollectionsPage.includes("Browse public collections") && !userCollectionsPage.includes("Collection highlights"), "Overview and Collections remained effectively identical"); if (collection.preferred_store) assert(userPage.includes(`/stores/${collection.preferred_store.id}`), "User preferred Store link missing");
    const storePage = await html(`/stores/${store.id}`); assert(storePage.includes("/cards/"), "Store graph missing");
    const cardPage = await html(printingHref); assert(cardPage.includes("scryfall.com") && (cardPage.includes("/users/") || cardPage.includes("/stores/")), "Card seller/Scryfall graph missing"); assert(cardPage.includes('type="button">← <!-- -->Back</button>'), "Card detail Back navigation missing");
    await Promise.all([html("/cards/00000000-0000-4000-8000-000000000000", 404), html("/collections/00000000-0000-4000-8000-000000000000", 404), html("/users/00000000-0000-4000-8000-000000000000", 404), html("/stores/00000000-0000-4000-8000-000000000000", 404)]);
    await explain("COLLECTION", "SELECT c.id FROM collections c JOIN user_profiles u ON u.id=c.user_id WHERE c.visibility='public' AND u.status='active' ORDER BY c.updated_at DESC,c.id ASC LIMIT 13");
    await explain("STORE", "SELECT s.id FROM stores s WHERE s.status='active' AND s.verification_status='verified' AND s.trade_mediation_enabled=true ORDER BY s.name ASC,s.id ASC LIMIT 13");
    await explain("LISTING", "SELECT l.id FROM listings l JOIN inventory_items i ON i.id=l.inventory_item_id WHERE l.status='active' AND i.status='available' AND (l.accepts_trade OR l.accepts_cash) AND ((l.seller_user_id=i.owner_user_id AND l.seller_store_id IS NULL) OR (l.seller_store_id=i.owner_store_id AND l.seller_user_id IS NULL)) ORDER BY l.created_at DESC,l.id ASC LIMIT 25");
  } finally {
    if (temporaryStoreId) await database.stores.delete({ where: { id: temporaryStoreId } });
    const finalState = await snapshot(); assert(JSON.stringify(finalState) === JSON.stringify(baseline), "public certification did not restore the exact domain baseline");
    await database.$disconnect();
  }
  console.log("Public product certification passed with exact baseline restoration.");
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
