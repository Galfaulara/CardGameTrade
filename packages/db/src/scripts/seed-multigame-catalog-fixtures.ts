/** Controlled Pokémon/Yu-Gi-Oh! catalog fixtures for the certified disposable clone. */
import "dotenv/config";

import { createDbClient, Prisma } from "../client";
import {
  fixtureCounts,
  fixtureRawData,
  MULTIGAME_CATALOG_FIXTURE,
  MULTIGAME_FIXTURE_NAMESPACE,
  MULTIGAME_FIXTURE_SOURCE,
  MULTIGAME_FIXTURE_VERSION,
  type FixtureGame,
  type FixturePrinting,
} from "../fixtures/multigame-catalog-fixture";

const ALLOWED_DATABASE = "deckdeal_multigame_dryrun";
const args = new Set(process.argv.slice(2));
const apply = args.has("--apply");
const cleanup = args.has("--cleanup");

type Db = ReturnType<typeof createDbClient>;
type Tx = Prisma.TransactionClient;

function json(value: unknown): Prisma.InputJsonValue {
  return JSON.parse(JSON.stringify(value)) as Prisma.InputJsonValue;
}

function requireMode() {
  if (apply && cleanup) throw new Error("Choose either --apply or --cleanup, not both.");
  if ([...args].some((arg) => arg !== "--apply" && arg !== "--cleanup")) {
    throw new Error("Supported modes are the default dry run, --apply, and --cleanup.");
  }
}

async function requireSafeDatabase(db: Db) {
  const result = await db.$queryRaw<Array<{ current_database: string }>>`SELECT current_database()`;
  const database = result[0]?.current_database;
  if (database !== ALLOWED_DATABASE) {
    throw new Error(`Fixture operation refused: current_database() is ${database ?? "unknown"}.`);
  }
  return database;
}

function ownedRawData(raw: unknown, slug: string) {
  if (!raw || typeof raw !== "object" || !("deckdeal_fixture" in raw)) return false;
  const marker = (raw as { deckdeal_fixture?: unknown }).deckdeal_fixture;
  return Boolean(marker && typeof marker === "object"
    && (marker as Record<string, unknown>).namespace === MULTIGAME_FIXTURE_NAMESPACE
    && (marker as Record<string, unknown>).version === MULTIGAME_FIXTURE_VERSION
    && (marker as Record<string, unknown>).game === slug);
}

async function scryfallCounts(db: Db | Tx) {
  const [sets, cards, printings] = await Promise.all([
    db.card_sets.count({ where: { source: "scryfall" } }),
    db.canonical_cards.count({ where: { source: "scryfall" } }),
    db.card_printings.count({ where: { source: "scryfall" } }),
  ]);
  return { sets, cards, printings };
}

async function assertFixtureOwnership(tx: Db | Tx, game: FixtureGame) {
  const existingGame = await tx.games.findUnique({ where: { slug: game.slug }, select: { id: true, name: true } });
  if (existingGame && existingGame.id !== game.id) {
    throw new Error(`${game.slug}: existing game is not owned by this manifest.`);
  }

  for (const set of game.sets) {
    const existing = existingGame
      ? await tx.card_sets.findUnique({ where: { game_id_code: { game_id: game.id, code: set.code } }, select: { id: true, source: true, source_id: true } })
      : null;
    if (existing && (existing.id !== set.id || existing.source !== MULTIGAME_FIXTURE_SOURCE || existing.source_id !== set.key)) {
      throw new Error(`${game.slug}/${set.code}: existing set is not owned by this manifest.`);
    }
  }

  for (const card of game.cards) {
    const existing = existingGame
      ? await tx.canonical_cards.findUnique({ where: { game_id_source_source_key: { game_id: game.id, source: MULTIGAME_FIXTURE_SOURCE, source_key: card.key } }, select: { id: true, raw_data: true } })
      : null;
    if (existing && (existing.id !== card.id || !ownedRawData(existing.raw_data, game.slug))) {
      throw new Error(`${game.slug}/${card.key}: existing canonical card is not owned by this manifest.`);
    }
  }

  for (const printing of game.printings) {
    const existing = existingGame
      ? await tx.card_printings.findUnique({ where: { game_id_source_source_key: { game_id: game.id, source: MULTIGAME_FIXTURE_SOURCE, source_key: printing.key } }, select: { id: true, raw_data: true } })
      : null;
    if (existing && (existing.id !== printing.id || !ownedRawData(existing.raw_data, game.slug))) {
      throw new Error(`${game.slug}/${printing.key}: existing printing is not owned by this manifest.`);
    }
  }
}

async function plan(db: Db) {
  const rows = [];
  for (const game of MULTIGAME_CATALOG_FIXTURE) {
    await assertFixtureOwnership(db, game);
    const existing = await db.games.findUnique({ where: { slug: game.slug }, select: { id: true } });
    const counts = fixtureCounts(game);
    const current = existing ? {
      sets: await db.card_sets.count({ where: { game_id: game.id, source: MULTIGAME_FIXTURE_SOURCE, source_id: { in: game.sets.map((set) => set.key) } } }),
      canonicalCards: await db.canonical_cards.count({ where: { game_id: game.id, source: MULTIGAME_FIXTURE_SOURCE, source_key: { in: game.cards.map((card) => card.key) } } }),
      printings: await db.card_printings.count({ where: { game_id: game.id, source: MULTIGAME_FIXTURE_SOURCE, source_key: { in: game.printings.map((printing) => printing.key) } } }),
      finishes: await db.printing_finishes.count({ where: { printing_id: { in: game.printings.map((printing) => printing.id) } } }),
    } : { sets: 0, canonicalCards: 0, printings: 0, finishes: 0 };
    rows.push({ game: game.slug, gameAction: existing ? "update" : "create", expected: counts, current,
      creates: Object.fromEntries(Object.entries(counts).map(([key, value]) => [key, value - current[key as keyof typeof current]])) });
  }
  return rows;
}

async function verifyGame(tx: Db | Tx, game: FixtureGame) {
  const expected = fixtureCounts(game);
  const loaded = await tx.games.findUnique({ where: { slug: game.slug }, select: {
    id: true,
    card_sets: { where: { source: MULTIGAME_FIXTURE_SOURCE, source_id: { in: game.sets.map((set) => set.key) } }, select: { id: true, game_id: true } },
    canonical_cards: { where: { source: MULTIGAME_FIXTURE_SOURCE, source_key: { in: game.cards.map((card) => card.key) } }, select: { id: true, game_id: true, raw_data: true } },
    card_printings: { where: { source: MULTIGAME_FIXTURE_SOURCE, source_key: { in: game.printings.map((printing) => printing.key) } }, select: {
      id: true, game_id: true, canonical_cards: { select: { game_id: true } }, card_sets: { select: { game_id: true } }, raw_data: true,
      printing_finishes: { select: { finish: true } },
    } },
  } });
  if (!loaded || loaded.id !== game.id) throw new Error(`${game.slug}: fixture game verification failed.`);
  const finishCount = loaded.card_printings.reduce((total, printing) => total + printing.printing_finishes.length, 0);
  if (loaded.card_sets.length !== expected.sets || loaded.canonical_cards.length !== expected.canonicalCards
    || loaded.card_printings.length !== expected.printings || finishCount !== expected.finishes) {
    throw new Error(`${game.slug}: fixture count verification failed.`);
  }
  if (loaded.card_sets.some((set) => set.game_id !== game.id)
    || loaded.canonical_cards.some((card) => card.game_id !== game.id || !ownedRawData(card.raw_data, game.slug))
    || loaded.card_printings.some((printing) => printing.game_id !== game.id || printing.canonical_cards.game_id !== game.id
      || printing.card_sets.game_id !== game.id || !ownedRawData(printing.raw_data, game.slug))) {
    throw new Error(`${game.slug}: same-game or ownership verification failed.`);
  }
}

async function applyFixture(db: Db) {
  const beforeScryfall = await scryfallCounts(db);
  await db.$transaction(async (tx) => {
    for (const game of MULTIGAME_CATALOG_FIXTURE) {
      await assertFixtureOwnership(tx, game);
      await tx.games.upsert({ where: { slug: game.slug }, update: { name: game.name }, create: { id: game.id, slug: game.slug, name: game.name } });
      for (const set of game.sets) {
        const data = { name: set.name, source: MULTIGAME_FIXTURE_SOURCE, source_id: set.key, release_date: new Date(`${set.releaseDate}T00:00:00.000Z`), set_type: set.setType };
        await tx.card_sets.upsert({ where: { game_id_code: { game_id: game.id, code: set.code } }, update: data,
          create: { id: set.id, game_id: game.id, code: set.code, ...data } });
      }
      for (const card of game.cards) {
        const data = { name: card.name, normalized_name: card.name.toLowerCase(), mana_cost: null, type_line: card.typeLine,
          oracle_text: null, colors: [], color_identity: [], raw_data: json(fixtureRawData(game, card.metadata)) };
        await tx.canonical_cards.upsert({ where: { game_id_source_source_key: { game_id: game.id, source: MULTIGAME_FIXTURE_SOURCE, source_key: card.key } }, update: data,
          create: { id: card.id, game_id: game.id, source: MULTIGAME_FIXTURE_SOURCE, source_key: card.key, ...data } });
      }
      const cards = new Map<string, string>(game.cards.map((card) => [card.key, card.id]));
      const sets = new Map<string, string>(game.sets.map((set) => [set.key, set.id]));
      for (const printing of game.printings as readonly FixturePrinting[]) {
        const canonicalCardId = cards.get(printing.cardKey); const cardSetId = sets.get(printing.setKey);
        if (!canonicalCardId || !cardSetId) throw new Error(`${printing.key}: manifest reference is invalid.`);
        const data = { canonical_card_id: canonicalCardId, card_set_id: cardSetId, collector_number: printing.collectorNumber,
          language_code: "en", printed_name: null, printed_type_line: null, printed_text: null, rarity: printing.rarity,
          artist_name: printing.artistName ?? null, treatment: null, frame_version: null, border_color: null,
          is_promo: false, is_reprint: printing.isReprint, is_digital: false,
          released_at: new Date(`${printing.releasedAt}T00:00:00.000Z`), image_small_uri: null, image_normal_uri: null,
          image_large_uri: null, raw_data: json(fixtureRawData(game, printing.metadata)) };
        await tx.card_printings.upsert({ where: { game_id_source_source_key: { game_id: game.id, source: MULTIGAME_FIXTURE_SOURCE, source_key: printing.key } }, update: data,
          create: { id: printing.id, game_id: game.id, source: MULTIGAME_FIXTURE_SOURCE, source_key: printing.key, ...data } });
        for (const finish of printing.finishes) {
          await tx.printing_finishes.upsert({ where: { printing_id_finish: { printing_id: printing.id, finish } }, update: {}, create: { printing_id: printing.id, finish } });
        }
      }
      await verifyGame(tx, game);
    }
    const afterScryfall = await scryfallCounts(tx);
    if (JSON.stringify(beforeScryfall) !== JSON.stringify(afterScryfall)) throw new Error("Scryfall catalog counts changed; rolling back.");
  });
  return { beforeScryfall, afterScryfall: await scryfallCounts(db) };
}

async function blockingReferenceCounts(tx: Db | Tx, game: FixtureGame) {
  const printingIds = game.printings.map((printing) => printing.id);
  const cardIds = game.cards.map((card) => card.id);
  const results = await Promise.all([
    tx.price_snapshots.count({ where: { printing_id: { in: printingIds } } }),
    tx.inventory_items.count({ where: { game_id: game.id } }),
    tx.collections.count({ where: { game_id: game.id } }),
    tx.listings.count({ where: { game_id: game.id } }),
    tx.listing_offers.count({ where: { game_id: game.id } }),
    tx.offer_items.count({ where: { game_id: game.id } }),
    tx.inventory_item_interests.count({ where: { game_id: game.id } }),
    tx.wishlists.count({ where: { game_id: game.id } }),
    tx.wishlist_items.count({ where: { OR: [{ game_id: game.id }, { canonical_card_id: { in: cardIds } }, { printing_id: { in: printingIds } }] } }),
    tx.wishlist_offers.count({ where: { game_id: game.id } }),
    tx.wishlist_offer_items.count({ where: { game_id: game.id } }),
    tx.wishlist_offer_requested_items.count({ where: { OR: [{ game_id: game.id }, { requested_canonical_card_id: { in: cardIds } }, { requested_printing_id: { in: printingIds } }] } }),
    tx.transactions.count({ where: { game_id: game.id } }),
    tx.transaction_items.count({ where: { game_id: game.id } }),
    tx.store_trade_handoffs.count({ where: { game_id: game.id } }),
    tx.store_games.count({ where: { game_id: game.id } }),
  ]);
  const names = ["priceSnapshots", "inventory", "collections", "listings", "listingOffers", "offerItems", "interests", "wishlists",
    "wishlistItems", "wishlistOffers", "wishlistOfferItems", "wishlistRequestedItems", "transactions", "transactionItems", "handoffs", "storeGames"];
  return Object.fromEntries(names.map((name, index) => [name, results[index]!]));
}

async function cleanupFixture(db: Db) {
  const beforeScryfall = await scryfallCounts(db);
  const removed = await db.$transaction(async (tx) => {
    const report: Record<string, unknown> = {};
    for (const game of [...MULTIGAME_CATALOG_FIXTURE].reverse()) {
      const existing = await tx.games.findUnique({ where: { slug: game.slug }, select: { id: true } });
      if (!existing) { report[game.slug] = "already absent"; continue; }
      await assertFixtureOwnership(tx, game);
      const blockers = await blockingReferenceCounts(tx, game);
      if (Object.values(blockers).some((count) => count !== 0)) throw new Error(`${game.slug}: cleanup blocked by references ${JSON.stringify(blockers)}.`);
      const [otherSets, otherCards, otherPrintings] = await Promise.all([
        tx.card_sets.count({ where: { game_id: game.id, NOT: { id: { in: game.sets.map((set) => set.id) } } } }),
        tx.canonical_cards.count({ where: { game_id: game.id, NOT: { id: { in: game.cards.map((card) => card.id) } } } }),
        tx.card_printings.count({ where: { game_id: game.id, NOT: { id: { in: game.printings.map((printing) => printing.id) } } } }),
      ]);
      if (otherSets || otherCards || otherPrintings) throw new Error(`${game.slug}: cleanup blocked by non-manifest catalog rows.`);
      const expectedFinishes = new Set(game.printings.flatMap((printing) => printing.finishes.map((finish) => `${printing.id}:${finish}`)));
      const actualFinishes = await tx.printing_finishes.findMany({ where: { printing_id: { in: game.printings.map((printing) => printing.id) } }, select: { printing_id: true, finish: true } });
      if (actualFinishes.some((finish) => !expectedFinishes.has(`${finish.printing_id}:${finish.finish}`))) {
        throw new Error(`${game.slug}: cleanup blocked by a non-manifest finish.`);
      }
      const finishes = await tx.printing_finishes.deleteMany({ where: { OR: game.printings.flatMap((printing) => printing.finishes.map((finish) => ({ printing_id: printing.id, finish }))) } });
      const printings = await tx.card_printings.deleteMany({ where: { game_id: game.id, source: MULTIGAME_FIXTURE_SOURCE, source_key: { in: game.printings.map((printing) => printing.key) } } });
      const cards = await tx.canonical_cards.deleteMany({ where: { game_id: game.id, source: MULTIGAME_FIXTURE_SOURCE, source_key: { in: game.cards.map((card) => card.key) } } });
      const sets = await tx.card_sets.deleteMany({ where: { game_id: game.id, source: MULTIGAME_FIXTURE_SOURCE, source_id: { in: game.sets.map((set) => set.key) } } });
      const deletedGame = await tx.games.deleteMany({ where: { id: game.id, slug: game.slug } });
      report[game.slug] = { finishes: finishes.count, printings: printings.count, canonicalCards: cards.count, sets: sets.count, games: deletedGame.count };
    }
    const afterScryfall = await scryfallCounts(tx);
    if (JSON.stringify(beforeScryfall) !== JSON.stringify(afterScryfall)) throw new Error("Scryfall catalog counts changed; rolling back.");
    return report;
  });
  return { removed, beforeScryfall, afterScryfall: await scryfallCounts(db) };
}

async function main() {
  requireMode();
  if (process.env.NODE_ENV === "production") throw new Error("Multi-game fixtures cannot run in production.");
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required.");
  const db = createDbClient(process.env.DATABASE_URL);
  await db.$connect();
  try {
    const database = await requireSafeDatabase(db);
    const mode = cleanup ? "CLEANUP" : apply ? "APPLY" : "DRY RUN";
    const intended = await plan(db);
    console.log(JSON.stringify({ mode, database, namespace: MULTIGAME_FIXTURE_NAMESPACE, version: MULTIGAME_FIXTURE_VERSION,
      source: MULTIGAME_FIXTURE_SOURCE, intended, scryfallBefore: await scryfallCounts(db) }, null, 2));
    if (cleanup) console.log(JSON.stringify(await cleanupFixture(db), null, 2));
    else if (apply) console.log(JSON.stringify(await applyFixture(db), null, 2));
    else console.log("Dry run complete; no writes performed.");
  } finally {
    await db.$disconnect();
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
