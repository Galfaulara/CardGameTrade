import assert from "node:assert/strict";
import { BulkInventoryService } from "../src/inventory/bulk-inventory.service";

const game = { id: "game-1", slug: "game-one", name: "Game One" };
const canonical = { id: "card-1", name: "Bolt", normalized_name: "bolt" };
const printing = (id: string, finishes: string[], gameId = game.id) => ({
  id,
  game_id: gameId,
  canonical_card_id: canonical.id,
  collector_number: id === "printing-1" ? "149" : "150",
  language_code: "en",
  image_small_uri: null,
  card_sets: { code: "SET", name: "Set" },
  printing_finishes: finishes.map((finish) => ({ finish })),
});
let created = 0;
const client: any = {
  games: {
    findUnique: async ({ where }: any) =>
      where.slug === game.slug ? game : null,
  },
  collections: { findFirst: async () => null },
  canonical_cards: {
    findMany: async ({ where }: any) =>
      where.normalized_name.in.includes("bolt") ? [canonical] : [],
  },
  card_printings: {
    findMany: async () => [
      printing("printing-1", ["normal"]),
      printing("printing-2", ["normal", "foil"]),
    ],
  },
  $queryRaw: async () => [],
  $transaction: async (callback: any) =>
    callback({
      games: client.games,
      collections: {
        count: async ({ where }: any) =>
          where.user_id === "owner" && where.game_id === game.id
            ? where.id.in.length
            : 0,
      },
      printing_finishes: {
        findMany: async ({ where }: any) =>
          where.card_printings.is.game_id === game.id &&
          where.printing_id.in.includes("00000000-0000-4000-8000-000000000001")
            ? [
                {
                  printing_id: "00000000-0000-4000-8000-000000000001",
                  finish: "normal",
                  card_printings: { language_code: "en" },
                },
              ]
            : [],
      },
      inventory_items: {
        createMany: async ({ data }: any) => {
          created += data.length;
          return { count: data.length };
        },
      },
    }),
};
const service = new BulkInventoryService({ client } as any);
const defaults = {
  condition: "near_mint" as const,
  language: "en",
  finish: null,
};
async function main() {
  const exact = await service.resolve("owner", {
    gameSlug: game.slug,
    defaults,
    rows: [
      {
        source: "1 Bolt [SET] 149",
        quantity: 1,
        name: "Bolt",
        set: "SET",
        collectorNumber: "149",
      },
    ],
  });
  assert.equal(
    exact.rows[0]!.status,
    "EXACT",
    "Set and collector number plus a sole finish must resolve exactly.",
  );
  const ambiguous = await service.resolve("owner", {
    gameSlug: game.slug,
    defaults,
    rows: [{ source: "1 Bolt", quantity: 1, name: "Bolt" }],
  });
  assert.equal(
    ambiguous.rows[0]!.status,
    "AMBIGUOUS",
    "Name-only rows with multiple physical choices must remain ambiguous.",
  );
  const unmatched = await service.resolve("owner", {
    gameSlug: game.slug,
    defaults,
    rows: [{ source: "1 Missing", quantity: 1, name: "Missing" }],
  });
  assert.equal(unmatched.rows[0]!.status, "UNMATCHED");
  const multiFinish = await service.resolve("owner", {
    gameSlug: game.slug,
    defaults,
    rows: [{ source: "1 Bolt [SET]", quantity: 1, name: "Bolt", set: "SET" }],
  });
  assert.equal(
    multiFinish.rows[0]!.status,
    "AMBIGUOUS",
    "Multiple finishes must not be guessed.",
  );
  await assert.rejects(
    () =>
      service.commit("intruder", {
        gameSlug: game.slug,
        rows: [
          {
            quantity: 1,
            printingId: "00000000-0000-4000-8000-000000000001",
            finish: "normal",
            condition: "near_mint",
            language: "en",
            collectionId: "00000000-0000-4000-8000-000000000002",
          },
        ],
      }),
    /collection/,
  );
  assert.equal(created, 0, "A failed row must leave no partial inventory.");
  await assert.rejects(
    () =>
      service.commit("owner", {
        gameSlug: game.slug,
        rows: [
          {
            quantity: 1,
            printingId: "00000000-0000-4000-8000-000000000099",
            finish: "normal",
            condition: "near_mint",
            language: "en",
            collectionId: null,
          },
        ],
      }),
    /unresolved|another game/,
  );
  assert.equal(
    created,
    0,
    "An unresolved or wrong-game printing must not create inventory.",
  );
  const result = await service.commit("owner", {
    gameSlug: game.slug,
    rows: [
      {
        quantity: 2,
        printingId: "00000000-0000-4000-8000-000000000001",
        finish: "normal",
        condition: "near_mint",
        language: "en",
        collectionId: null,
      },
    ],
  });
  assert.deepEqual(result, { addedQuantity: 2, entryCount: 1 });
  console.log("API bulk inventory regression passed.");
}
void main();
