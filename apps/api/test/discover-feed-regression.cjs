const path = require("node:path");
require("dotenv").config({ path: path.resolve(__dirname, "../../../.env") });
const { createDbClient } = require("@repo/db");
const apiBase = process.env.API_BASE_URL ?? "http://localhost:4000/api";
const database = createDbClient(process.env.DATABASE_URL);
const assert = (value, message) => { if (!value) throw new Error(message); };
async function get(pathname, status = 200) { const response = await fetch(`${apiBase}${pathname}`); assert(response.status === status, `${pathname}: ${response.status}`); return response.json(); }
async function counts() { return Promise.all([database.inventory_items.count(), database.collections.count(), database.listings.count(),
  database.listing_offers.count(), database.inventory_item_interests.count(), database.wishlists.count(), database.transactions.count(),
  database.user_profiles.count(), database.stores.count(), database.store_trade_handoffs.count(), database.transaction_item_custody.count()]); }
async function main() {
  await database.$connect(); const before = await counts();
  const collections = await get("/discovery/feed/collections?limit=12&previewLimit=5&availability=all");
  assert(collections.items.length <= 12 && collections.items.every((item) => item.preview_items.length <= 5), "collection bounds failed");
  assert(collections.items.some((item) => item.marketplace_card_quantity === 0), "All did not preserve a zero-marketplace Collection");
  const availableCollections = await get("/discovery/feed/collections?limit=24&previewLimit=5&availability=marketplace");
  assert(availableCollections.items.every((item) => item.marketplace_card_quantity > 0 && item.preview_items.every((card) => card.status === "available" && card.listing)), "collection marketplace filter failed");
  const stores = await get("/discovery/feed/stores?limit=12&previewLimit=5&availability=all");
  assert(stores.items.length <= 12 && stores.items.every((item) => item.preview_items.length <= 5), "store bounds failed");
  const availableStores = await get("/discovery/feed/stores?limit=24&previewLimit=5&availability=marketplace");
  assert(availableStores.items.every((item) => item.marketplace_card_quantity > 0 && item.preview_items.every((card) => card.status === "available" && card.listing)), "store marketplace filter failed");
  for (const intent of ["all", "trade", "sale", "mixed"]) {
    const first = await get(`/discovery/feed/listings?limit=24&intent=${intent}`); assert(first.items.length <= 24, `${intent} bounds failed`);
    const predicate = intent === "trade" ? (x) => x.listing.accepts_trade && !x.listing.accepts_cash : intent === "sale" ? (x) => !x.listing.accepts_trade && x.listing.accepts_cash : intent === "mixed" ? (x) => x.listing.accepts_trade && x.listing.accepts_cash : (x) => x.listing.accepts_trade || x.listing.accepts_cash;
    assert(first.items.every((item) => item.status === "available" && predicate(item) && ["user", "store"].includes(item.seller.kind)), `${intent} truthfulness failed`);
    if (first.next_cursor) { const second = await get(`/discovery/feed/listings?limit=24&intent=${intent}&cursor=${encodeURIComponent(first.next_cursor)}`); const ids = new Set(first.items.map((item) => item.id)); assert(second.items.every((item) => !ids.has(item.id)), `${intent} cursor duplicated items`); }
  }
  await get("/discovery/feed/stores?cursor=not-a-cursor", 400);
  const trade = await get("/discovery/feed/listings?limit=1&intent=trade"); if (trade.next_cursor) await get(`/discovery/feed/listings?intent=sale&cursor=${encodeURIComponent(trade.next_cursor)}`, 400);
  assert(JSON.stringify(before) === JSON.stringify(await counts()), "read-only feeds mutated domain row counts");
  console.log("Discover feed regression passed.");
}
main().finally(() => database.$disconnect());
