/** Read-only verification for the controlled multi-game catalog fixture. */
import "dotenv/config";

import { createDbClient } from "../client";
import {
  fixtureCounts,
  MULTIGAME_CATALOG_FIXTURE,
  MULTIGAME_FIXTURE_NAMESPACE,
  MULTIGAME_FIXTURE_SOURCE,
  MULTIGAME_FIXTURE_VERSION,
} from "../fixtures/multigame-catalog-fixture";

const ALLOWED_DATABASE = "deckdeal_multigame_dryrun";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function marker(raw: unknown) {
  if (!raw || typeof raw !== "object" || !("deckdeal_fixture" in raw)) return null;
  const value = (raw as { deckdeal_fixture?: unknown }).deckdeal_fixture;
  return value && typeof value === "object" ? value as Record<string, unknown> : null;
}

async function main() {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required.");
  const db = createDbClient(process.env.DATABASE_URL);
  await db.$connect();
  try {
    const databaseRows = await db.$queryRaw<Array<{ current_database: string }>>`SELECT current_database()`;
    const database = databaseRows[0]?.current_database;
    assert(database === ALLOWED_DATABASE, `Verification refused: current_database() is ${database ?? "unknown"}.`);

    const report = [];
    for (const game of MULTIGAME_CATALOG_FIXTURE) {
      const expected = fixtureCounts(game);
      const loaded = await db.games.findUnique({ where: { slug: game.slug }, select: {
        id: true, name: true,
        card_sets: { select: { id: true, game_id: true, code: true, source: true, source_id: true } },
        canonical_cards: { select: { id: true, game_id: true, source: true, source_key: true, raw_data: true } },
        card_printings: { select: { id: true, game_id: true, source: true, source_key: true, canonical_card_id: true, card_set_id: true,
          raw_data: true, canonical_cards: { select: { game_id: true } }, card_sets: { select: { game_id: true } },
          printing_finishes: { select: { printing_id: true, finish: true } } } },
      } });
      assert(loaded, `${game.slug}: game is missing.`);
      assert(loaded.id === game.id && loaded.name === game.name, `${game.slug}: game identity differs from the manifest.`);
      const manifestSetIds = new Set<string>(game.sets.map((set) => set.id));
      const manifestCardIds = new Set<string>(game.cards.map((card) => card.id));
      const manifestPrintingIds = new Set<string>(game.printings.map((printing) => printing.id));
      const sets = loaded.card_sets.filter((set) => manifestSetIds.has(set.id));
      const cards = loaded.canonical_cards.filter((card) => manifestCardIds.has(card.id));
      const printings = loaded.card_printings.filter((printing) => manifestPrintingIds.has(printing.id));
      const finishes = printings.flatMap((printing) => printing.printing_finishes);

      assert(sets.length === expected.sets, `${game.slug}: expected ${expected.sets} sets, found ${sets.length}.`);
      assert(cards.length === expected.canonicalCards, `${game.slug}: expected ${expected.canonicalCards} cards, found ${cards.length}.`);
      assert(printings.length === expected.printings, `${game.slug}: expected ${expected.printings} printings, found ${printings.length}.`);
      assert(finishes.length === expected.finishes, `${game.slug}: expected ${expected.finishes} finishes, found ${finishes.length}.`);
      assert(sets.every((set) => set.game_id === game.id && set.source === MULTIGAME_FIXTURE_SOURCE
        && game.sets.some((entry) => entry.id === set.id && entry.key === set.source_id && entry.code === set.code)), `${game.slug}: set source/game verification failed.`);
      assert(cards.every((card) => {
        const fixture = marker(card.raw_data);
        return card.game_id === game.id && card.source === MULTIGAME_FIXTURE_SOURCE
          && game.cards.some((entry) => entry.id === card.id && entry.key === card.source_key)
          && fixture?.namespace === MULTIGAME_FIXTURE_NAMESPACE && fixture.version === MULTIGAME_FIXTURE_VERSION && fixture.game === game.slug;
      }), `${game.slug}: canonical source/namespace verification failed.`);
      assert(printings.every((printing) => {
        const fixture = marker(printing.raw_data);
        return printing.game_id === game.id && printing.canonical_cards.game_id === game.id && printing.card_sets.game_id === game.id
          && printing.source === MULTIGAME_FIXTURE_SOURCE
          && game.printings.some((entry) => entry.id === printing.id && entry.key === printing.source_key)
          && fixture?.namespace === MULTIGAME_FIXTURE_NAMESPACE && fixture.version === MULTIGAME_FIXTURE_VERSION && fixture.game === game.slug;
      }), `${game.slug}: printing source/same-game/namespace verification failed.`);
      assert(finishes.every((finish) => manifestPrintingIds.has(finish.printing_id)), `${game.slug}: a finish does not reference a manifest printing.`);
      assert(new Set(cards.map((card) => card.source_key)).size === cards.length, `${game.slug}: duplicate canonical source keys.`);
      assert(new Set(printings.map((printing) => printing.source_key)).size === printings.length, `${game.slug}: duplicate printing source keys.`);

      report.push({ game: game.slug, gameId: game.id, ...expected });
    }

    const [scryfallSets, scryfallCards, scryfallPrintings] = await Promise.all([
      db.card_sets.count({ where: { source: "scryfall" } }),
      db.canonical_cards.count({ where: { source: "scryfall" } }),
      db.card_printings.count({ where: { source: "scryfall" } }),
    ]);
    console.log(JSON.stringify({ database, fixture: { namespace: MULTIGAME_FIXTURE_NAMESPACE, version: MULTIGAME_FIXTURE_VERSION,
      source: MULTIGAME_FIXTURE_SOURCE }, games: report, scryfall: { sets: scryfallSets, cards: scryfallCards, printings: scryfallPrintings }, status: "PASS" }, null, 2));
  } finally {
    await db.$disconnect();
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
