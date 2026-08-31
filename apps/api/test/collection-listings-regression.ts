import assert from "node:assert/strict";
import { ListingsService } from "../src/listings/listings.service";

const ids = {
  collection: "00000000-0000-4000-8000-000000000001",
  eligible: "00000000-0000-4000-8000-000000000002",
  listed: "00000000-0000-4000-8000-000000000003",
  ineligible: "00000000-0000-4000-8000-000000000004",
};
let created: any[] = [];
let failCreate = false;
const inventory = [
  { id: ids.eligible, quantity: 1, status: "available", listings_listings_inventory_item_id_game_idToinventory_items: [] },
  { id: ids.listed, quantity: 1, status: "available", listings_listings_inventory_item_id_game_idToinventory_items: [{ id: "listing" }] },
  { id: ids.ineligible, quantity: 1, status: "in_trade", listings_listings_inventory_item_id_game_idToinventory_items: [] },
];
const tx: any = {
  inventory_items: { findMany: async ({ where }: any) => inventory.filter((item) => where.id.in.includes(item.id) && item.status === "available").map(({ id }) => ({ id })) },
  listings: {
    count: async () => 0,
    createMany: async ({ data }: any) => { if (failCreate) throw new Error("database failure"); created.push(...data); return { count: data.length }; },
  },
};
const client: any = {
  games: { findUnique: async ({ where }: any) => where.slug === "mtg" ? { id: "game-mtg" } : where.slug === "pokemon" ? { id: "game-pokemon" } : null },
  user_profiles: { findFirst: async ({ where }: any) => where.id === "owner" ? { id: "owner" } : null },
  user_preferences: { findUnique: async () => null },
  collections: { findFirst: async ({ where }: any) => where.id === ids.collection && where.user_id === "owner" && where.game_id === "game-mtg" ? { id: ids.collection, inventory_items: inventory } : null },
  $transaction: async (callback: any) => { const before = [...created]; try { return await callback(tx); } catch (error) { created = before; throw error; } },
};
const service = new ListingsService({ client } as any);
const settings = { gameSlug: "mtg", acceptsCash: false, acceptsTrade: true };

async function main() {
  const preflight = await service.preflightCollectionListings("owner", ids.collection, "mtg");
  assert.deepEqual({ requested: preflight.requested_items, eligible: preflight.eligible, listed: preflight.skipped_already_listed, ineligible: preflight.skipped_ineligible }, { requested: 3, eligible: 1, listed: 1, ineligible: 1 });
  await assert.rejects(() => service.preflightCollectionListings("intruder", ids.collection, "mtg"), /does not belong/);
  await assert.rejects(() => service.preflightCollectionListings("owner", ids.collection, "pokemon"), /does not belong/);
  const result = await service.createCollectionListings("owner", ids.collection, settings);
  assert.deepEqual(result, { requested_items: 3, created_listings: 1, skipped_already_listed: 1, skipped_ineligible: 1 });
  assert.equal(created[0].inventory_item_id, ids.eligible, "Bulk listing must preserve the exact inventory id.");
  assert.equal(created[0].seller_store_id, null, "Collection listing must never create Store inventory listings.");
  assert.equal(created[0].status, "active", "Created rows must be normal active listings.");
  created = []; failCreate = true;
  await assert.rejects(() => service.createCollectionListings("owner", ids.collection, settings), /database failure/);
  assert.equal(created.length, 0, "An unexpected failure must leave no partial batch.");
  console.log("Collection listings regression passed.");
}
void main();
