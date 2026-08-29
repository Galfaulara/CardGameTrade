/** Read-only verification for controlled multi-game marketplace fixtures. */
import "dotenv/config";

import { createDbClient } from "../client";
import { MULTIGAME_FIXTURE_SOURCE } from "../fixtures/multigame-catalog-fixture";
import {
  MARKETPLACE_FIXTURE_MARKER,
  MARKETPLACE_FIXTURE_OWNER,
  MARKETPLACE_FIXTURE_STORE,
  MULTIGAME_MARKETPLACE_FIXTURE,
  marketplaceFixtureIds,
} from "../fixtures/multigame-marketplace-fixture";

const ALLOWED_DATABASE = "deckdeal_multigame_dryrun";
function assert(condition: unknown, message: string): asserts condition { if (!condition) throw new Error(message); }

async function main() {
  assert(process.env.DATABASE_URL, "DATABASE_URL is required.");
  const db = createDbClient(process.env.DATABASE_URL); await db.$connect();
  try {
    const database = (await db.$queryRaw<Array<{ current_database: string }>>`SELECT current_database()`)[0]?.current_database;
    assert(database === ALLOWED_DATABASE, `Verification refused: current_database() is ${database ?? "unknown"}.`);
    const owner = await db.user_profiles.findUnique({ where: { id: MARKETPLACE_FIXTURE_OWNER.id }, select: { username: true, email: true, status: true } });
    assert(owner?.username === MARKETPLACE_FIXTURE_OWNER.username && owner.email === MARKETPLACE_FIXTURE_OWNER.email && owner.status === "active", "Fixture owner verification failed.");
    const store = await db.stores.findUnique({ where: { id: MARKETPLACE_FIXTURE_STORE.id }, select: {
      slug: true, name: true, status: true, verification_status: true, trade_mediation_enabled: true,
      store_games: { select: { game_id: true, trade_mediation_enabled: true, games: { select: { slug: true } } } },
    } });
    assert(store?.slug === MARKETPLACE_FIXTURE_STORE.slug && store.name === MARKETPLACE_FIXTURE_STORE.name
      && store.status === "active" && store.verification_status === "verified" && store.trade_mediation_enabled, "Fixture store verification failed.");
    for (const slug of ["mtg", "pokemon", "yugioh"]) {
      assert(store.store_games.some((membership) => membership.games.slug === slug && membership.trade_mediation_enabled), `Fixture store lacks mediation-enabled ${slug} support.`);
    }

    const report = [];
    for (const fixture of MULTIGAME_MARKETPLACE_FIXTURE) {
      const game = await db.games.findUnique({ where: { slug: fixture.slug }, select: { id: true } });
      assert(game, `${fixture.slug}: game is missing.`);
      const collection = await db.collections.findUnique({ where: { id: fixture.collection.id }, select: { user_id: true, game_id: true, visibility: true, description: true } });
      assert(collection?.user_id === MARKETPLACE_FIXTURE_OWNER.id && collection.game_id === game.id && collection.visibility === "public"
        && collection.description === fixture.collection.description, `${fixture.slug}: collection verification failed.`);

      const inventory = await db.inventory_items.findMany({ where: { id: { in: fixture.inventory.map((item) => item.id) } }, select: {
        id: true, game_id: true, printing_id: true, finish: true, owner_user_id: true, owner_store_id: true, collection_id: true,
        condition: true, language_code: true, quantity: true, status: true, notes: true,
        card_printings: { select: { game_id: true, source: true, source_key: true } },
        store_games: { select: { store_id: true, game_id: true, trade_mediation_enabled: true } },
      } });
      assert(inventory.length === fixture.inventory.length, `${fixture.slug}: expected ${fixture.inventory.length} inventory rows, found ${inventory.length}.`);
      for (const expected of fixture.inventory) {
        const row = inventory.find((item) => item.id === expected.id);
        assert(row && row.game_id === game.id && row.card_printings.game_id === game.id
          && row.card_printings.source === MULTIGAME_FIXTURE_SOURCE && row.card_printings.source_key === expected.printingKey
          && row.finish === expected.finish && row.condition === expected.condition && row.language_code === "en"
          && row.quantity === 1 && row.status === "available" && row.notes === expected.notes, `${fixture.slug}/${expected.id}: inventory provenance or fields differ.`);
        if (expected.owner === "user") assert(row.owner_user_id === MARKETPLACE_FIXTURE_OWNER.id && row.owner_store_id === null
          && row.collection_id === fixture.collection.id, `${expected.id}: user ownership/collection verification failed.`);
        else assert(row.owner_user_id === null && row.owner_store_id === MARKETPLACE_FIXTURE_STORE.id && row.collection_id === null
          && row.store_games?.game_id === game.id && row.store_games.trade_mediation_enabled, `${expected.id}: store ownership/store_games verification failed.`);
      }

      const listings = await db.listings.findMany({ where: { id: { in: fixture.listings.map((item) => item.id) } }, select: {
        id: true, game_id: true, inventory_item_id: true, seller_user_id: true, seller_store_id: true, preferred_store_id: true,
        accepts_cash: true, accepts_trade: true, asking_price: true, currency_code: true, title: true, description: true, status: true,
        inventory_items_listings_inventory_item_id_game_idToinventory_items: { select: { game_id: true, owner_user_id: true, owner_store_id: true } },
        store_games: { select: { store_id: true, game_id: true, trade_mediation_enabled: true } },
      } });
      assert(listings.length === fixture.listings.length, `${fixture.slug}: expected ${fixture.listings.length} listings, found ${listings.length}.`);
      for (const expected of fixture.listings) {
        const row = listings.find((listing) => listing.id === expected.id);
        const source = fixture.inventory.find((item) => item.id === expected.inventoryId)!;
        assert(row && row.game_id === game.id && row.inventory_item_id === source.id
          && row.inventory_items_listings_inventory_item_id_game_idToinventory_items.game_id === game.id
          && row.status === "active" && row.title === expected.title && row.description?.startsWith(MARKETPLACE_FIXTURE_MARKER), `${expected.id}: listing provenance/status verification failed.`);
        assert(source.owner === "user" ? row.seller_user_id === MARKETPLACE_FIXTURE_OWNER.id && row.seller_store_id === null
          : row.seller_user_id === null && row.seller_store_id === MARKETPLACE_FIXTURE_STORE.id, `${expected.id}: listing seller does not own inventory.`);
        assert(row.accepts_cash === (expected.mode !== "trade") && row.accepts_trade === (expected.mode !== "cash"), `${expected.id}: listing mode differs.`);
        assert(expected.mode === "trade" ? row.asking_price === null && row.currency_code === null
          : row.asking_price?.toFixed(2) === expected.askingPrice && row.currency_code === "USD", `${expected.id}: fixture asking price differs.`);
        assert(expected.preferredStore ? row.preferred_store_id === MARKETPLACE_FIXTURE_STORE.id
          && row.store_games?.game_id === game.id && row.store_games.trade_mediation_enabled : row.preferred_store_id === null, `${expected.id}: preferred-store game support differs.`);
      }

      const wishlist = await db.wishlists.findUnique({ where: { id: fixture.wishlist.id }, select: {
        user_id: true, game_id: true, visibility: true, status: true, preferred_store_id: true, description: true,
        store_games: { select: { game_id: true, trade_mediation_enabled: true } },
      } });
      assert(wishlist?.user_id === MARKETPLACE_FIXTURE_OWNER.id && wishlist.game_id === game.id && wishlist.visibility === "public"
        && wishlist.status === "active" && wishlist.description === fixture.wishlist.description
        && wishlist.preferred_store_id === MARKETPLACE_FIXTURE_STORE.id && wishlist.store_games?.game_id === game.id
        && wishlist.store_games.trade_mediation_enabled, `${fixture.slug}: wishlist verification failed.`);
      const wishlistItems = await db.wishlist_items.findMany({ where: { id: { in: fixture.wishlistItems.map((item) => item.id) } }, select: {
        id: true, wishlist_id: true, game_id: true, canonical_card_id: true, printing_id: true, desired_finish: true,
        status: true, notes: true, canonical_cards: { select: { game_id: true, source_key: true } },
        card_printings: { select: { game_id: true, source_key: true, printing_finishes: { select: { finish: true } } } },
      } });
      assert(wishlistItems.length === fixture.wishlistItems.length, `${fixture.slug}: wishlist-item count differs.`);
      for (const expected of fixture.wishlistItems) {
        const row = wishlistItems.find((item) => item.id === expected.id);
        assert(row && row.wishlist_id === fixture.wishlist.id && row.game_id === game.id && row.status === "active" && row.notes === expected.notes, `${expected.id}: wishlist-item parent/game differs.`);
        if (expected.target.kind === "canonical") assert(row.canonical_card_id && !row.printing_id && row.canonical_cards?.game_id === game.id
          && row.canonical_cards.source_key === expected.target.key, `${expected.id}: canonical target differs.`);
        else {
          const desiredFinish = expected.target.finish;
          assert(row.printing_id && !row.canonical_card_id && row.card_printings?.game_id === game.id
            && row.card_printings.source_key === expected.target.key && row.desired_finish === desiredFinish
            && row.card_printings.printing_finishes.some((finish) => finish.finish === desiredFinish), `${expected.id}: printing target/finish differs.`);
        }
      }
      report.push({ game: fixture.slug, collection: 1, userInventory: fixture.inventory.filter((item) => item.owner === "user").length,
        storeInventory: fixture.inventory.filter((item) => item.owner === "store").length, listings: listings.length, wishlists: 1, wishlistItems: wishlistItems.length });
    }

    const fixtureCatalogPrintings = await db.card_printings.findMany({ where: { source: MULTIGAME_FIXTURE_SOURCE }, select: { id: true } });
    const [listingOffers, listingOfferItems, wishlistOffers, wishlistOfferItems, requestedItems, interests, transactions, transactionItems, priceSnapshots] = await Promise.all([
      db.listing_offers.count({ where: { listing_id: { in: [...marketplaceFixtureIds.listings] } } }),
      db.offer_items.count({ where: { inventory_item_id: { in: [...marketplaceFixtureIds.inventory] } } }),
      db.wishlist_offers.count({ where: { wishlist_item_id: { in: [...marketplaceFixtureIds.wishlistItems] } } }),
      db.wishlist_offer_items.count({ where: { inventory_item_id: { in: [...marketplaceFixtureIds.inventory] } } }),
      db.wishlist_offer_requested_items.count({ where: { requested_inventory_item_id: { in: [...marketplaceFixtureIds.inventory] } } }),
      db.inventory_item_interests.count({ where: { inventory_item_id: { in: [...marketplaceFixtureIds.inventory] } } }),
      db.transactions.count({ where: { listing_id: { in: [...marketplaceFixtureIds.listings] } } }),
      db.transaction_items.count({ where: { inventory_item_id: { in: [...marketplaceFixtureIds.inventory] } } }),
      db.price_snapshots.count({ where: { printing_id: { in: fixtureCatalogPrintings.map((printing) => printing.id) } } }),
    ]);
    assert(listingOffers === 0 && listingOfferItems === 0 && wishlistOffers === 0 && wishlistOfferItems === 0
      && requestedItems === 0 && interests === 0 && transactions === 0 && transactionItems === 0 && priceSnapshots === 0,
    `Forbidden fixture lifecycle rows exist: ${JSON.stringify({ listingOffers, listingOfferItems, wishlistOffers, wishlistOfferItems, requestedItems, interests, transactions, transactionItems, priceSnapshots })}.`);
    const handoffs = await db.store_trade_handoffs.count({ where: { transactions: { listing_id: { in: [...marketplaceFixtureIds.listings] } } } });
    const custody = await db.transaction_item_custody.count({ where: { transaction_items_transaction_item_custody_transaction_item_idTotransaction_items: { transactions: { listing_id: { in: [...marketplaceFixtureIds.listings] } } } } });
    assert(handoffs === 0 && custody === 0, `Fixture handoff/custody rows exist: ${JSON.stringify({ handoffs, custody })}.`);
    console.log(JSON.stringify({ database, owner: MARKETPLACE_FIXTURE_OWNER.id, store: MARKETPLACE_FIXTURE_STORE.id,
      games: report, forbidden: { listingOffers, listingOfferItems, wishlistOffers, wishlistOfferItems, requestedItems,
        interests, transactions, transactionItems, handoffs, custody, priceSnapshots }, status: "PASS" }, null, 2));
  } finally { await db.$disconnect(); }
}

main().catch((error) => { console.error(error instanceof Error ? error.message : error); process.exitCode = 1; });
