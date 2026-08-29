/** Durable browser/demo marketplace fixtures for the controlled multi-game catalog. */
import "dotenv/config";

import { createDbClient, Prisma } from "../client";
import {
  MULTIGAME_FIXTURE_NAMESPACE,
  MULTIGAME_FIXTURE_SOURCE,
  MULTIGAME_FIXTURE_VERSION,
} from "../fixtures/multigame-catalog-fixture";
import {
  MARKETPLACE_FIXTURE_MARKER,
  MARKETPLACE_FIXTURE_OWNER,
  MARKETPLACE_FIXTURE_STORE,
  MULTIGAME_MARKETPLACE_FIXTURE,
  STORE_GAME_FIXTURE_TIMESTAMP,
  marketplaceFixtureIds,
  type MarketplaceGameFixture,
} from "../fixtures/multigame-marketplace-fixture";

const ALLOWED_DATABASE = "deckdeal_multigame_dryrun";
const args = new Set(process.argv.slice(2));
const apply = args.has("--apply");
const cleanup = args.has("--cleanup");
type Db = ReturnType<typeof createDbClient>;
type Tx = Prisma.TransactionClient;

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function requireMode() {
  if (apply && cleanup) throw new Error("Choose either --apply or --cleanup, not both.");
  if ([...args].some((arg) => arg !== "--apply" && arg !== "--cleanup")) {
    throw new Error("Supported modes are the default dry run, --apply, and --cleanup.");
  }
}

async function requireSafeDatabase(db: Db) {
  const rows = await db.$queryRaw<Array<{ current_database: string }>>`SELECT current_database()`;
  const database = rows[0]?.current_database;
  assert(database === ALLOWED_DATABASE, `Marketplace fixture write refused: current_database() is ${database ?? "unknown"}.`);
  return database;
}

function catalogMarker(raw: unknown, game: string) {
  if (!raw || typeof raw !== "object" || !("deckdeal_fixture" in raw)) return false;
  const value = (raw as { deckdeal_fixture?: unknown }).deckdeal_fixture;
  return Boolean(value && typeof value === "object"
    && (value as Record<string, unknown>).namespace === MULTIGAME_FIXTURE_NAMESPACE
    && (value as Record<string, unknown>).version === MULTIGAME_FIXTURE_VERSION
    && (value as Record<string, unknown>).game === game);
}

async function requireCatalog(tx: Db | Tx) {
  const result = new Map<string, {
    gameId: string;
    printings: Map<string, { id: string; gameId: string; finishes: Set<string> }>;
    cards: Map<string, { id: string; gameId: string }>;
  }>();
  for (const fixture of MULTIGAME_MARKETPLACE_FIXTURE) {
    const game = await tx.games.findUnique({ where: { slug: fixture.slug }, select: {
      id: true,
      canonical_cards: { where: { source: MULTIGAME_FIXTURE_SOURCE }, select: { id: true, game_id: true, source_key: true, raw_data: true } },
      card_printings: { where: { source: MULTIGAME_FIXTURE_SOURCE }, select: {
        id: true, game_id: true, source_key: true, raw_data: true, printing_finishes: { select: { finish: true } },
      } },
    } });
    assert(game, `${fixture.slug}: Phase 4F.2 catalog fixture is missing.`);
    const neededPrintingKeys = new Set([
      ...fixture.inventory.map((item) => item.printingKey),
      ...fixture.wishlistItems.flatMap((item) => item.target.kind === "printing" ? [item.target.key] : []),
    ]);
    const neededCardKeys = new Set(fixture.wishlistItems.flatMap((item) => item.target.kind === "canonical" ? [item.target.key] : []));
    const printings = new Map(game.card_printings.map((printing) => [printing.source_key, {
      id: printing.id, gameId: printing.game_id, finishes: new Set(printing.printing_finishes.map((finish) => finish.finish)),
    }]));
    const cards = new Map(game.canonical_cards.map((card) => [card.source_key, { id: card.id, gameId: card.game_id }]));
    assert([...neededPrintingKeys].every((key) => {
      const row = game.card_printings.find((printing) => printing.source_key === key);
      return row && row.game_id === game.id && catalogMarker(row.raw_data, fixture.slug);
    }), `${fixture.slug}: required manifest printings or namespace/version markers are missing.`);
    assert([...neededCardKeys].every((key) => {
      const row = game.canonical_cards.find((card) => card.source_key === key);
      return row && row.game_id === game.id && catalogMarker(row.raw_data, fixture.slug);
    }), `${fixture.slug}: required manifest canonical cards or namespace/version markers are missing.`);
    for (const item of fixture.inventory) assert(printings.get(item.printingKey)?.finishes.has(item.finish), `${item.printingKey}: required finish ${item.finish} is missing.`);
    for (const item of fixture.wishlistItems) if (item.target.kind === "printing") {
      assert(printings.get(item.target.key)?.finishes.has(item.target.finish), `${item.target.key}: desired finish ${item.target.finish} is missing.`);
    }
    result.set(fixture.slug, { gameId: game.id, printings, cards });
  }
  return result;
}

async function requireOwners(tx: Db | Tx) {
  const [owner, store] = await Promise.all([
    tx.user_profiles.findUnique({ where: { id: MARKETPLACE_FIXTURE_OWNER.id }, select: { id: true, username: true, email: true, status: true } }),
    tx.stores.findUnique({ where: { id: MARKETPLACE_FIXTURE_STORE.id }, select: {
      id: true, slug: true, name: true, status: true, verification_status: true, trade_mediation_enabled: true,
    } }),
  ]);
  assert(owner && owner.username === MARKETPLACE_FIXTURE_OWNER.username && owner.email === MARKETPLACE_FIXTURE_OWNER.email && owner.status === "active",
    "The deterministic trade_test_user fixture identity is missing or changed.");
  assert(store && store.slug === MARKETPLACE_FIXTURE_STORE.slug && store.name === MARKETPLACE_FIXTURE_STORE.name
    && store.status === "active" && store.verification_status === "verified" && store.trade_mediation_enabled,
  "The deterministic DeckDeal Test LGS fixture identity is missing or not globally eligible.");
  const mtg = await tx.games.findUnique({ where: { slug: "mtg" }, select: { id: true } });
  assert(mtg, "The MTG game is missing.");
  const mtgMembership = await tx.store_games.findUnique({ where: { store_id_game_id: { store_id: store.id, game_id: mtg.id } } });
  assert(mtgMembership?.trade_mediation_enabled, "DeckDeal Test LGS must retain its pre-existing mediation-enabled MTG membership.");
  return { owner, store, mtgGameId: mtg.id };
}

async function assertNoIdentityConflicts(tx: Db | Tx, catalogs: Awaited<ReturnType<typeof requireCatalog>>) {
  const [collections, inventory, listings, wishlists, wishlistItems] = await Promise.all([
    tx.collections.findMany({ where: { id: { in: [...marketplaceFixtureIds.collections] } }, select: { id: true, user_id: true, game_id: true, description: true } }),
    tx.inventory_items.findMany({ where: { id: { in: [...marketplaceFixtureIds.inventory] } }, select: { id: true, owner_user_id: true, owner_store_id: true, game_id: true, notes: true } }),
    tx.listings.findMany({ where: { id: { in: [...marketplaceFixtureIds.listings] } }, select: { id: true, game_id: true, title: true, description: true } }),
    tx.wishlists.findMany({ where: { id: { in: [...marketplaceFixtureIds.wishlists] } }, select: { id: true, user_id: true, game_id: true, description: true } }),
    tx.wishlist_items.findMany({ where: { id: { in: [...marketplaceFixtureIds.wishlistItems] } }, select: { id: true, game_id: true, notes: true } }),
  ]);
  assert(collections.every((row) => row.user_id === MARKETPLACE_FIXTURE_OWNER.id && row.description?.startsWith(MARKETPLACE_FIXTURE_MARKER)), "A deterministic collection ID is occupied by non-fixture data.");
  assert(inventory.every((row) => row.notes?.startsWith(MARKETPLACE_FIXTURE_MARKER)
    && (row.owner_user_id === MARKETPLACE_FIXTURE_OWNER.id || row.owner_store_id === MARKETPLACE_FIXTURE_STORE.id)), "A deterministic inventory ID is occupied by non-fixture data.");
  assert(listings.every((row) => row.title?.startsWith("Fixture ") && row.description?.startsWith(MARKETPLACE_FIXTURE_MARKER)), "A deterministic listing ID is occupied by non-fixture data.");
  assert(wishlists.every((row) => row.user_id === MARKETPLACE_FIXTURE_OWNER.id && row.description?.startsWith(MARKETPLACE_FIXTURE_MARKER)), "A deterministic wishlist ID is occupied by non-fixture data.");
  assert(wishlistItems.every((row) => row.notes?.startsWith(MARKETPLACE_FIXTURE_MARKER)), "A deterministic wishlist-item ID is occupied by non-fixture data.");
  for (const fixture of MULTIGAME_MARKETPLACE_FIXTURE) {
    const gameId = catalogs.get(fixture.slug)?.gameId;
    assert(gameId, `${fixture.slug}: catalog context missing.`);
    const [collectionName, wishlistName] = await Promise.all([
      tx.collections.findUnique({ where: { user_id_game_id_name: { user_id: MARKETPLACE_FIXTURE_OWNER.id, game_id: gameId, name: fixture.collection.name } }, select: { id: true } }),
      tx.wishlists.findUnique({ where: { user_id_game_id_name: { user_id: MARKETPLACE_FIXTURE_OWNER.id, game_id: gameId, name: fixture.wishlist.name } }, select: { id: true } }),
    ]);
    assert(!collectionName || collectionName.id === fixture.collection.id, `${fixture.slug}: fixture collection name belongs to another row.`);
    assert(!wishlistName || wishlistName.id === fixture.wishlist.id, `${fixture.slug}: fixture wishlist name belongs to another row.`);
  }
}

async function ensureStoreGame(tx: Tx, gameId: string) {
  const existing = await tx.store_games.findUnique({ where: { store_id_game_id: { store_id: MARKETPLACE_FIXTURE_STORE.id, game_id: gameId } } });
  if (existing) {
    assert(existing.trade_mediation_enabled, "An existing store_games row is not mediation enabled; refusing to overwrite it.");
    return "existing" as const;
  }
  const markerTime = new Date(STORE_GAME_FIXTURE_TIMESTAMP);
  await tx.store_games.create({ data: {
    store_id: MARKETPLACE_FIXTURE_STORE.id, game_id: gameId, trade_mediation_enabled: true,
    created_at: markerTime, updated_at: markerTime,
  } });
  return "created" as const;
}

async function createGameRows(tx: Tx, fixture: MarketplaceGameFixture, catalog: NonNullable<Awaited<ReturnType<typeof requireCatalog>> extends Map<string, infer V> ? V : never>) {
  const membership = await ensureStoreGame(tx, catalog.gameId);
  const existingCollection = await tx.collections.findUnique({ where: { id: fixture.collection.id } });
  if (!existingCollection) await tx.collections.create({ data: {
    id: fixture.collection.id, user_id: MARKETPLACE_FIXTURE_OWNER.id, game_id: catalog.gameId,
    name: fixture.collection.name, description: fixture.collection.description, visibility: "public",
  } });

  let createdInventory = 0;
  for (const item of fixture.inventory) {
    if (await tx.inventory_items.findUnique({ where: { id: item.id }, select: { id: true } })) continue;
    const printing = catalog.printings.get(item.printingKey);
    assert(printing && printing.gameId === catalog.gameId, `${item.printingKey}: printing game mismatch.`);
    await tx.inventory_items.create({ data: {
      id: item.id, printing_id: printing.id, game_id: catalog.gameId, finish: item.finish,
      owner_user_id: item.owner === "user" ? MARKETPLACE_FIXTURE_OWNER.id : null,
      owner_store_id: item.owner === "store" ? MARKETPLACE_FIXTURE_STORE.id : null,
      collection_id: item.owner === "user" ? fixture.collection.id : null,
      condition: item.condition, language_code: "en", quantity: 1, status: "available", notes: item.notes,
    } });
    createdInventory += 1;
  }

  let createdListings = 0;
  for (const listing of fixture.listings) {
    if (await tx.listings.findUnique({ where: { id: listing.id }, select: { id: true } })) continue;
    const inventory = fixture.inventory.find((item) => item.id === listing.inventoryId);
    assert(inventory, `${listing.id}: listing inventory is absent from the manifest.`);
    const acceptsCash = listing.mode !== "trade";
    await tx.listings.create({ data: {
      id: listing.id, inventory_item_id: inventory.id, game_id: catalog.gameId,
      seller_user_id: inventory.owner === "user" ? MARKETPLACE_FIXTURE_OWNER.id : null,
      seller_store_id: inventory.owner === "store" ? MARKETPLACE_FIXTURE_STORE.id : null,
      accepts_cash: acceptsCash, accepts_trade: listing.mode !== "cash",
      asking_price: acceptsCash ? new Prisma.Decimal(listing.askingPrice!) : null,
      currency_code: acceptsCash ? "USD" : null,
      preferred_store_id: listing.preferredStore ? MARKETPLACE_FIXTURE_STORE.id : null,
      title: listing.title, description: `${MARKETPLACE_FIXTURE_MARKER}:${fixture.slug}:listing`, status: "active",
    } });
    createdListings += 1;
  }

  if (!await tx.wishlists.findUnique({ where: { id: fixture.wishlist.id }, select: { id: true } })) {
    await tx.wishlists.create({ data: {
      id: fixture.wishlist.id, user_id: MARKETPLACE_FIXTURE_OWNER.id, game_id: catalog.gameId,
      name: fixture.wishlist.name, description: fixture.wishlist.description, visibility: "public", status: "active",
      preferred_store_id: MARKETPLACE_FIXTURE_STORE.id,
    } });
  }
  let createdWishlistItems = 0;
  for (const item of fixture.wishlistItems) {
    if (await tx.wishlist_items.findUnique({ where: { id: item.id }, select: { id: true } })) continue;
    const canonical = item.target.kind === "canonical" ? catalog.cards.get(item.target.key) : undefined;
    const printing = item.target.kind === "printing" ? catalog.printings.get(item.target.key) : undefined;
    assert((canonical?.gameId ?? printing?.gameId) === catalog.gameId, `${item.id}: wishlist target game mismatch.`);
    await tx.wishlist_items.create({ data: {
      id: item.id, wishlist_id: fixture.wishlist.id, game_id: catalog.gameId,
      canonical_card_id: canonical?.id ?? null, printing_id: printing?.id ?? null,
      desired_finish: item.target.kind === "printing" ? item.target.finish : null,
      desired_condition: "near_mint", language_code: "en", quantity_desired: 1,
      priority: item.priority, notes: item.notes, status: "active",
      willing_to_pay_cash: true, willing_to_trade_cards: true,
    } });
    createdWishlistItems += 1;
  }
  return { game: fixture.slug, membership, collection: existingCollection ? "existing" : "created", createdInventory, createdListings, createdWishlistItems };
}

async function plan(db: Db) {
  const catalogs = await requireCatalog(db); await requireOwners(db); await assertNoIdentityConflicts(db, catalogs);
  const rows = [];
  for (const fixture of MULTIGAME_MARKETPLACE_FIXTURE) {
    const gameId = catalogs.get(fixture.slug)!.gameId;
    const [membership, collection, inventory, listings, wishlist, items] = await Promise.all([
      db.store_games.count({ where: { store_id: MARKETPLACE_FIXTURE_STORE.id, game_id: gameId } }),
      db.collections.count({ where: { id: fixture.collection.id } }),
      db.inventory_items.count({ where: { id: { in: fixture.inventory.map((item) => item.id) } } }),
      db.listings.count({ where: { id: { in: fixture.listings.map((item) => item.id) } } }),
      db.wishlists.count({ where: { id: fixture.wishlist.id } }),
      db.wishlist_items.count({ where: { id: { in: fixture.wishlistItems.map((item) => item.id) } } }),
    ]);
    rows.push({ game: fixture.slug, creates: { storeGames: 1 - membership, collections: 1 - collection,
      inventory: fixture.inventory.length - inventory, listings: fixture.listings.length - listings,
      wishlists: 1 - wishlist, wishlistItems: fixture.wishlistItems.length - items } });
  }
  return rows;
}

async function applyFixture(db: Db) {
  return db.$transaction(async (tx) => {
    const catalogs = await requireCatalog(tx); await requireOwners(tx); await assertNoIdentityConflicts(tx, catalogs);
    const report = [];
    for (const fixture of MULTIGAME_MARKETPLACE_FIXTURE) report.push(await createGameRows(tx, fixture, catalogs.get(fixture.slug)!));
    return report;
  });
}

async function blockerCounts(tx: Db | Tx, catalogs: Awaited<ReturnType<typeof requireCatalog>>) {
  const printingIds = [...catalogs.values()].flatMap((catalog) => [...catalog.printings.values()].map((printing) => printing.id));
  const [listingOffers, wishlistOffers, interests, offerItems, requestedItems, transactionItems, priceSnapshots] = await Promise.all([
    tx.listing_offers.count({ where: { listing_id: { in: [...marketplaceFixtureIds.listings] } } }),
    tx.wishlist_offers.count({ where: { wishlist_item_id: { in: [...marketplaceFixtureIds.wishlistItems] } } }),
    tx.inventory_item_interests.count({ where: { inventory_item_id: { in: [...marketplaceFixtureIds.inventory] } } }),
    tx.offer_items.count({ where: { inventory_item_id: { in: [...marketplaceFixtureIds.inventory] } } }),
    tx.wishlist_offer_requested_items.count({ where: { requested_inventory_item_id: { in: [...marketplaceFixtureIds.inventory] } } }),
    tx.transaction_items.count({ where: { inventory_item_id: { in: [...marketplaceFixtureIds.inventory] } } }),
    tx.price_snapshots.count({ where: { printing_id: { in: printingIds } } }),
  ]);
  // Catalog price rows are owned by 4F.2/other systems, not this marketplace fixture.
  return { listingOffers, wishlistOffers, interests, offerItems, requestedItems, transactionItems, fixturePriceSnapshots: priceSnapshots };
}

async function cleanupFixture(db: Db) {
  return db.$transaction(async (tx) => {
    const catalogs = await requireCatalog(tx); await requireOwners(tx); await assertNoIdentityConflicts(tx, catalogs);
    const blockers = await blockerCounts(tx, catalogs);
    assert(Object.entries(blockers).filter(([key]) => key !== "fixturePriceSnapshots").every(([, count]) => count === 0),
      `Marketplace cleanup blocked by dependent rows: ${JSON.stringify(blockers)}.`);
    const deleted = {
      listings: (await tx.listings.deleteMany({ where: { id: { in: [...marketplaceFixtureIds.listings] } } })).count,
      wishlistItems: (await tx.wishlist_items.deleteMany({ where: { id: { in: [...marketplaceFixtureIds.wishlistItems] } } })).count,
      wishlists: (await tx.wishlists.deleteMany({ where: { id: { in: [...marketplaceFixtureIds.wishlists] } } })).count,
      inventory: (await tx.inventory_items.deleteMany({ where: { id: { in: [...marketplaceFixtureIds.inventory] } } })).count,
      collections: (await tx.collections.deleteMany({ where: { id: { in: [...marketplaceFixtureIds.collections] } } })).count,
      storeGames: 0,
    };
    const markerTime = new Date(STORE_GAME_FIXTURE_TIMESTAMP).getTime();
    for (const fixture of MULTIGAME_MARKETPLACE_FIXTURE) {
      const gameId = catalogs.get(fixture.slug)!.gameId;
      const membership = await tx.store_games.findUnique({ where: { store_id_game_id: { store_id: MARKETPLACE_FIXTURE_STORE.id, game_id: gameId } } });
      if (membership && membership.created_at.getTime() === markerTime) {
        deleted.storeGames += (await tx.store_games.deleteMany({ where: {
          store_id: MARKETPLACE_FIXTURE_STORE.id, game_id: gameId, created_at: new Date(STORE_GAME_FIXTURE_TIMESTAMP),
        } })).count;
      }
    }
    return { deleted, blockers };
  });
}

async function main() {
  requireMode();
  if (process.env.NODE_ENV === "production") throw new Error("Marketplace fixtures cannot run in production.");
  assert(process.env.DATABASE_URL, "DATABASE_URL is required.");
  const db = createDbClient(process.env.DATABASE_URL); await db.$connect();
  try {
    const database = await requireSafeDatabase(db);
    if (!apply && !cleanup) console.log(JSON.stringify({ mode: "dry-run", database, writes: 0, plan: await plan(db) }, null, 2));
    else if (apply) console.log(JSON.stringify({ mode: "apply", database, result: await applyFixture(db) }, null, 2));
    else console.log(JSON.stringify({ mode: "cleanup", database, result: await cleanupFixture(db) }, null, 2));
  } finally { await db.$disconnect(); }
}

main().catch((error) => { console.error(error instanceof Error ? error.message : error); process.exitCode = 1; });
