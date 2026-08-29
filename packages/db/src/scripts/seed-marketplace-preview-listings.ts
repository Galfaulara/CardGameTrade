/** Development/test-only marketplace preview fixtures. Never imported by an app. */
import "dotenv/config";
import { createDbClient } from "../client";

const targets = [
  { kind: "collection", name: "Avengers Assemble", count: 14 },
  { kind: "collection", name: "Turtle Power!", count: 14 },
  { kind: "collection", name: "Prismari Artistry", count: 14 },
  { kind: "store", name: "DeckDeal Test LGS", count: 18 },
] as const;
const rarityRank = new Map([["mythic", 0], ["rare", 1], ["special", 2], ["bonus", 2], ["uncommon", 3], ["common", 4]]);
const selectDiverseRarities = (items: any[], count: number) => {
  const buckets = new Map<number, any[]>();
  for (const item of items) {
    const rank = rarityRank.get(item.printing_finishes.card_printings.rarity?.toLowerCase() ?? "") ?? 5;
    buckets.set(rank, [...(buckets.get(rank) ?? []), item]);
  }
  const result: any[] = [];
  while (result.length < count) {
    let added = false;
    for (const rank of [0, 1, 2, 3, 4, 5]) {
      const item = buckets.get(rank)?.shift();
      if (item) { result.push(item); added = true; }
      if (result.length === count) break;
    }
    if (!added) break;
  }
  return result;
};

async function main() {
  if (process.env.NODE_ENV === "production") throw new Error("Marketplace fixtures cannot run in production.");
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is required.");
  const db = createDbClient(url);
  await db.$connect();
  try {
    const game = await db.games.findUnique({ where: { slug: "mtg" }, select: { id: true } });
    if (!game) throw new Error("The MTG game is not configured.");
    const rarityValues = await db.card_printings.groupBy({ by: ["rarity"], _count: { _all: true }, orderBy: { rarity: "asc" } });
    const created = await db.$transaction(async (tx) => {
      const report: Record<string, number> = {};
      for (const target of targets) {
        const owner: any = target.kind === "collection"
          ? await tx.collections.findFirst({ where: { game_id: game.id, name: target.name, visibility: "public", user_profiles: { status: "active" } }, select: { id: true, user_id: true } })
          : await tx.stores.findFirst({ where: { name: target.name, status: "active", verification_status: "verified", trade_mediation_enabled: true, store_games: { some: { game_id: game.id } } }, select: { id: true } });
        if (!owner) throw new Error(`Eligible fixture owner not found: ${target.name}`);
        const ownerWhere: any = target.kind === "collection"
          ? { collection_id: owner.id, owner_user_id: "user_id" in owner ? owner.user_id : undefined, owner_store_id: null }
          : { owner_store_id: owner.id, owner_user_id: null, collection_id: null };
        const inventory: any[] = await tx.inventory_items.findMany({
          where: { ...ownerWhere, game_id: game.id, status: "available" },
          select: { id: true, game_id: true, owner_user_id: true, owner_store_id: true,
            printing_finishes: { select: { card_printings: { select: { rarity: true } } } },
            listings_listings_inventory_item_id_seller_user_idToinventory_items: { where: { status: { in: ["active", "paused"] } }, select: { id: true } },
            listings_listings_inventory_item_id_seller_store_idToinventory_items: { where: { status: { in: ["active", "paused"] } }, select: { id: true } } },
          orderBy: { id: "asc" },
        });
        const open = inventory.filter((item) => item.listings_listings_inventory_item_id_seller_user_idToinventory_items.length || item.listings_listings_inventory_item_id_seller_store_idToinventory_items.length);
        const needed = Math.max(0, target.count - open.length);
        const candidates = selectDiverseRarities(inventory.filter((item) => !item.listings_listings_inventory_item_id_seller_user_idToinventory_items.length && !item.listings_listings_inventory_item_id_seller_store_idToinventory_items.length), needed);
        if (candidates.length !== needed) throw new Error(`${target.name} lacks enough eligible inventory for ${target.count} open listings.`);
        if (candidates.length) await tx.listings.createMany({ data: candidates.map((item) => ({ game_id: item.game_id, inventory_item_id: item.id,
          seller_user_id: target.kind === "collection" ? item.owner_user_id : null,
          seller_store_id: target.kind === "store" ? item.owner_store_id : null,
          accepts_trade: true, accepts_cash: false, asking_price: null, currency_code: null, status: "active" })) });
        report[target.name] = candidates.length;
      }
      return report;
    });
    console.log(JSON.stringify({ rarityValues, created }, null, 2));
  } finally { await db.$disconnect(); }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
