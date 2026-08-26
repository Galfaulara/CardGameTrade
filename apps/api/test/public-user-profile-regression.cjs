const path = require("node:path");
require("dotenv").config({ path: path.resolve(__dirname, "../../../.env") });
const { createDbClient } = require("@repo/db");

const apiBase = process.env.API_BASE_URL ?? "http://localhost:4000/api";
const database = createDbClient(process.env.DATABASE_URL);
const assert = (value, message) => { if (!value) throw new Error(message); };
async function getJson(pathname, status = 200) {
  const response = await fetch(`${apiBase}${pathname}`);
  assert(response.status === status, `${pathname}: expected ${status}, received ${response.status}`);
  return response.json();
}

async function snapshot() {
  const models = ["inventory_items", "collections", "listings", "wishlists", "wishlist_items", "listing_offers", "inventory_item_interests", "transactions", "store_trade_handoffs", "transaction_item_custody"];
  const result = {};
  for (const model of models) {
    const rows = await database[model].findMany({ select: { id: true, updated_at: true }, orderBy: { id: "asc" } });
    result[model] = rows.map((row) => `${row.id}:${row.updated_at.toISOString()}`);
  }
  return result;
}

async function main() {
  await database.$connect();
  const before = await snapshot();
  const candidate = await database.user_profiles.findFirst({ where: { status: "active", OR: [
    { collections: { some: { visibility: "public" } } },
    { inventory_items: { some: { status: "available", owner_store_id: null, listings_listings_inventory_item_id_seller_user_idToinventory_items: { some: { status: "active", OR: [{ accepts_trade: true }, { accepts_cash: true }] } } } } },
    { wishlists: { some: { visibility: "public", status: "active" } } },
  ] }, select: { id: true } });
  assert(candidate, "No eligible public-profile fixture was found");

  const profile = await getJson(`/discovery/users/${candidate.id}`);
  assert(Object.keys(profile.user).every((key) => ["id", "display_name", "username", "preferred_store"].includes(key)), "unsafe profile field exposed");
  assert(Object.keys(profile.summary).sort().join() === ["active_listing_count", "public_collection_count", "public_wishlist_count", "public_wishlist_item_count"].sort().join(), "summary shape changed");
  const [collectionCount, listingCount, wishlistCount, wishlistItemCount] = await Promise.all([
    database.collections.count({ where: { user_id: candidate.id, visibility: "public" } }),
    database.listings.count({ where: { seller_user_id: candidate.id, seller_store_id: null, status: "active", OR: [{ accepts_trade: true }, { accepts_cash: true }], inventory_items_listings_inventory_item_id_seller_user_idToinventory_items: { is: { owner_user_id: candidate.id, owner_store_id: null, status: "available" } } } }),
    database.wishlists.count({ where: { user_id: candidate.id, visibility: "public", status: "active" } }),
    database.wishlist_items.count({ where: { status: "active", wishlists: { user_id: candidate.id, visibility: "public", status: "active" } } }),
  ]);
  assert(JSON.stringify(profile.summary) === JSON.stringify({ public_collection_count: collectionCount, active_listing_count: listingCount, public_wishlist_count: wishlistCount, public_wishlist_item_count: wishlistItemCount }), "summary counts were inaccurate");

  const collections = await getJson(`/discovery/users/${candidate.id}/collections?page=1&pageSize=6&previewLimit=4`);
  assert(collections.items.length <= 6 && collections.items.every((item) => item.preview_items.length <= 4), "collection bounds failed");
  assert(collections.items.every((item) => item.preview_items.every((card) => card.listing && (card.listing.accepts_trade || card.listing.accepts_cash))), "collection preview included non-marketplace inventory");
  const listings = await getJson(`/discovery/users/${candidate.id}/listings?page=1&pageSize=24`);
  assert(listings.items.length <= 24 && listings.items.every((item) => item.status === "available" && item.listing && (item.listing.accepts_trade || item.listing.accepts_cash)), "listing eligibility failed");
  const wishlists = await getJson(`/discovery/users/${candidate.id}/wishlists?page=1&pageSize=6&previewLimit=6`);
  assert(wishlists.items.length <= 6 && wishlists.items.every((item) => item.preview_items.length <= 6), "Wishlist bounds failed");

  const serialized = JSON.stringify({ profile, collections, listings, wishlists });
  for (const forbidden of ["email", "auth_provider", "auth_user_id", "avatar_url", "notes", "trade_notes", "max_cash_amount", "wishlist_offers", "transactions", "acquired_price"]) {
    assert(!serialized.includes(`\"${forbidden}\"`), `${forbidden} leaked publicly`);
  }
  await getJson("/discovery/users/00000000-0000-4000-8000-000000000000", 404);
  const inactive = await database.user_profiles.findFirst({ where: { status: { not: "active" } }, select: { id: true } });
  if (inactive) await getJson(`/discovery/users/${inactive.id}`, 404);
  const emptyActive = await database.user_profiles.findFirst({ where: { status: "active", collections: { none: { visibility: "public" } },
    inventory_items: { none: { status: "available", owner_store_id: null, listings_listings_inventory_item_id_seller_user_idToinventory_items: { some: { status: "active", OR: [{ accepts_trade: true }, { accepts_cash: true }] } } } },
    wishlists: { none: { visibility: "public", status: "active" } } }, select: { id: true } });
  if (emptyActive) await getJson(`/discovery/users/${emptyActive.id}`, 404);
  await getJson(`/discovery/users/${candidate.id}/listings?pageSize=49`, 400);
  await getJson(`/discovery/users/${candidate.id}/collections?previewLimit=7`, 400);

  const after = await snapshot();
  assert(JSON.stringify(after) === JSON.stringify(before), "public-profile reads mutated protected data");
  console.log(JSON.stringify({ userId: candidate.id, summary: profile.summary, privacy: "passed", bounds: "passed", nonMutation: "passed" }, null, 2));
}
main().finally(() => database.$disconnect()).catch((error) => { console.error(error); process.exitCode = 1; });
