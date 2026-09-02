import { ConfigService } from "@nestjs/config";
import { ConflictException } from "@nestjs/common";
import { DatabaseService } from "../src/database/database.service";
import { InventoryService } from "../src/inventory/inventory.service";
import type { StorageService } from "../src/storage/storage.service";

const assert: (value: unknown, message: string) => asserts value = (value, message) => {
  if (!value) throw new Error(message);
};

async function main() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL is required.");
  const database = new DatabaseService(new ConfigService({ DATABASE_URL: databaseUrl }));
  await database.onModuleInit();
  try {
    const name = await database.client.$queryRaw<Array<{ current_database: string }>>`SELECT current_database()`;
    assert(
      name[0]?.current_database.startsWith("deckdeal_mobile_qa_") ||
        name[0]?.current_database === "deckdeal_multigame_dryrun",
      "Printing regression requires a known disposable clone.",
    );
    const users = await database.client.user_profiles.findMany({ take: 2, select: { id: true } });
    assert(users.length === 2, "Two local user fixtures are required.");
    const candidates = await database.client.card_printings.findMany({
      where: { is_digital: false, printing_finishes: { some: {} } },
      select: { id: true, game_id: true, canonical_card_id: true, language_code: true, printing_finishes: { take: 1, select: { finish: true } } },
      orderBy: { released_at: "asc" }, take: 500,
    });
    const pair = candidates.flatMap((first, index) => {
      const second = candidates.slice(index + 1).find((value) => value.canonical_card_id === first.canonical_card_id && value.game_id === first.game_id);
      return second ? [[first, second] as const] : [];
    })[0];
    assert(pair, "Two physical printings of one canonical card are required.");
    const [first, second] = pair!;
    const service = new InventoryService(database, {} as StorageService);
    const createItem = () => database.client.inventory_items.create({ data: {
      printing_id: first.id, finish: first.printing_finishes[0]!.finish,
      owner_user_id: users[0]!.id, condition: "near_mint", language_code: first.language_code,
      quantity: 2, status: "available", game_id: first.game_id,
    }});

    const plain = await createItem();
    const safe = await service.preflightPrintingChange(users[0]!.id, plain.id, { printingId: second.id, finish: second.printing_finishes[0]!.finish });
    assert(safe.strategy === "in_place" && !safe.blocked, "Inventory-only correction should be in-place.");
    const corrected = await service.changeInventoryPrinting(users[0]!.id, plain.id, { printingId: second.id, finish: second.printing_finishes[0]!.finish });
    assert(corrected.inventoryItemId === plain.id && corrected.item.quantity === 2, "In-place correction must preserve identity and quantity.");

    const listed = await createItem();
    const listing = await database.client.listings.create({ data: {
      inventory_item_id: listed.id, seller_user_id: users[0]!.id, accepts_trade: true,
      status: "active", game_id: first.game_id,
    }});
    const replacement = await service.changeInventoryPrinting(users[0]!.id, listed.id, { printingId: second.id, finish: second.printing_finishes[0]!.finish });
    assert(replacement.strategy === "replacement" && replacement.inventoryItemId !== listed.id, "Listed history must use replacement identity.");
    const [oldRow, listingAfter] = await Promise.all([
      database.client.inventory_items.findUnique({ where: { id: listed.id } }),
      database.client.listings.findUnique({ where: { id: listing.id } }),
    ]);
    assert(oldRow?.status === "removed" && listingAfter?.status === "removed", "Historical item/listing must be preserved and closed.");

    const trading = await createItem();
    const transaction = await database.client.transactions.create({ data: {
      seller_user_id: users[0]!.id, counterparty_user_id: users[1]!.id,
      transaction_type: "trade", status: "agreed", game_id: first.game_id,
    }});
    await database.client.transaction_items.create({ data: {
      transaction_id: transaction.id, inventory_item_id: trading.id, item_role: "listing_item",
      quantity: 1, from_user_id: users[0]!.id, to_user_id: users[1]!.id, game_id: first.game_id,
    }});
    const blocked = await service.preflightPrintingChange(users[0]!.id, trading.id, { printingId: second.id, finish: second.printing_finishes[0]!.finish });
    assert(blocked.blocked, "An unresolved accepted transaction must block correction.");
    let threw = false;
    try { await service.changeInventoryPrinting(users[0]!.id, trading.id, { printingId: second.id, finish: second.printing_finishes[0]!.finish }); }
    catch (error) { threw = error instanceof ConflictException; }
    assert(threw, "Blocked printing correction must fail authoritatively.");
    console.log("Inventory printing-change database regression passed.");
  } finally {
    await database.onModuleDestroy();
  }
}
void main();
