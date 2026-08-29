import "dotenv/config";
import { createDbClient } from "@repo/db";
import {
  USER_1_ID,
  USER_2_ID,
  activePrincipal,
  createAuthenticatedHarness,
} from "./support/authenticated-app-harness";

const configuredPrefix = process.env.MULTIGAME_CERT_PREFIX;
if (!configuredPrefix?.startsWith("multigame-cert-")) {
  throw new Error("A unique MULTIGAME_CERT_PREFIX is required.");
}
const prefix: string = configuredPrefix;

const db = createDbClient(process.env.DATABASE_URL!);
const assert: (value: unknown, message: string) => asserts value = (value, message) => {
  if (!value) throw new Error(message);
};

const tables = [
  "games", "card_sets", "canonical_cards", "card_printings", "printing_finishes",
  "collections", "inventory_items", "listings", "inventory_item_interests",
  "listing_offers", "offer_items", "wishlists", "wishlist_items",
  "wishlist_offers", "wishlist_offer_items", "wishlist_offer_requested_items",
  "transactions", "transaction_items", "store_trade_handoffs", "transaction_item_custody",
  "stores", "store_games",
] as const;

const created = {
  gameId: null as string | null,
  setId: null as string | null,
  canonicalId: null as string | null,
  printingId: null as string | null,
  storeId: null as string | null,
  collections: [] as string[],
  inventories: [] as string[],
  listings: [] as string[],
  interests: [] as string[],
  listingOffers: [] as string[],
  wishlists: [] as string[],
  wishlistOffers: [] as string[],
  transactions: [] as string[],
};

async function counts() {
  const result: Record<string, number> = {};
  for (const table of tables) result[table] = await (db as any)[table].count();
  return result;
}

async function assertCounts(before: Record<string, number>, names: string[], message: string) {
  const after = await counts();
  for (const name of names) assert(after[name] === before[name], `${message}: ${name} changed (${before[name]} -> ${after[name]}).`);
}

async function cleanup() {
  if (created.transactions.length) await db.transactions.deleteMany({ where: { id: { in: created.transactions } } });
  if (created.wishlistOffers.length) await db.wishlist_offers.deleteMany({ where: { id: { in: created.wishlistOffers } } });
  if (created.listingOffers.length) await db.listing_offers.deleteMany({ where: { id: { in: created.listingOffers } } });
  if (created.interests.length) await db.inventory_item_interests.deleteMany({ where: { id: { in: created.interests } } });
  if (created.listings.length) await db.listings.deleteMany({ where: { id: { in: created.listings } } });
  if (created.wishlists.length) await db.wishlists.deleteMany({ where: { id: { in: created.wishlists } } });
  if (created.inventories.length) await db.inventory_items.deleteMany({ where: { id: { in: created.inventories } } });
  if (created.collections.length) await db.collections.deleteMany({ where: { id: { in: created.collections } } });
  if (created.storeId) await db.stores.deleteMany({ where: { id: created.storeId, slug: `${prefix}-unsupported-store` } });
  if (created.printingId) await db.card_printings.deleteMany({ where: { id: created.printingId, source_key: `${prefix}-printing` } });
  if (created.canonicalId) await db.canonical_cards.deleteMany({ where: { id: created.canonicalId, source_key: `${prefix}-card` } });
  if (created.setId) await db.card_sets.deleteMany({ where: { id: created.setId, source_id: `${prefix}-set` } });
  if (created.gameId) await db.games.deleteMany({ where: { id: created.gameId, slug: prefix } });
}

async function main() {
  await db.$connect();
  const baseline = await counts();
  const harness = await createAuthenticatedHarness();
  const user1 = activePrincipal(USER_1_ID);
  const user2 = activePrincipal(USER_2_ID);

  try {
    const mtg = await db.games.findUnique({ where: { slug: "mtg" }, select: { id: true } });
    assert(mtg, "MTG game fixture is required.");
    const mtgFinish = await db.printing_finishes.findFirst({
      where: { card_printings: { game_id: mtg.id, is_digital: false } },
      select: { printing_id: true, finish: true, card_printings: { select: { canonical_card_id: true } } },
    });
    assert(mtgFinish, "An MTG physical printing fixture is required.");
    const eligibleStore = await db.stores.findFirst({
      where: {
        status: "active", verification_status: "verified", trade_mediation_enabled: true,
        store_games: { some: { game_id: mtg.id, trade_mediation_enabled: true } },
      },
      select: { id: true },
    });
    assert(eligibleStore, "An MTG-enabled mediation store fixture is required.");

    const synthetic = await db.games.create({ data: { name: `${prefix} Synthetic Game`, slug: prefix }, select: { id: true } });
    created.gameId = synthetic.id;
    const set = await db.card_sets.create({
      data: { game_id: synthetic.id, code: "cert", name: `${prefix} Set`, source: prefix, source_id: `${prefix}-set`, set_type: "certification" },
      select: { id: true },
    });
    created.setId = set.id;
    const canonical = await db.canonical_cards.create({
      data: { game_id: synthetic.id, source: prefix, source_key: `${prefix}-card`, name: `${prefix} Card`, normalized_name: `${prefix} card` },
      select: { id: true },
    });
    created.canonicalId = canonical.id;
    const printing = await db.card_printings.create({
      data: {
        game_id: synthetic.id, canonical_card_id: canonical.id, card_set_id: set.id,
        source: prefix, source_key: `${prefix}-printing`, collector_number: "1", language_code: "en", rarity: "common", is_digital: false,
      },
      select: { id: true },
    });
    created.printingId = printing.id;
    await db.printing_finishes.create({ data: { printing_id: printing.id, finish: "nonfoil" } });

    const unsupportedStore = await db.stores.create({
      data: {
        name: `${prefix} Unsupported Store`, slug: `${prefix}-unsupported-store`, city: "Certification",
        country_code: "US", status: "active", verification_status: "verified", trade_mediation_enabled: true,
      },
      select: { id: true },
    });
    created.storeId = unsupportedStore.id;

    const sharedName = `${prefix} Shared Collection`;
    const mtgCollection = await harness.as(user1).post(`/api/inventory/users/${USER_1_ID}/collections`)
      .send({ gameSlug: "mtg", name: sharedName, visibility: "public" }).expect(201);
    created.collections.push(mtgCollection.body.id);
    const syntheticCollection = await harness.as(user1).post(`/api/inventory/users/${USER_1_ID}/collections`)
      .send({ gameSlug: prefix, name: sharedName, visibility: "private" }).expect(201);
    created.collections.push(syntheticCollection.body.id);
    const collectionRows = await db.collections.findMany({ where: { id: { in: created.collections } }, select: { id: true, game_id: true, name: true } });
    assert(collectionRows.length === 2 && collectionRows.some((row) => row.game_id === mtg.id) && collectionRows.some((row) => row.game_id === synthetic.id), "Game-scoped collection identity failed.");
    await harness.as(user1).post(`/api/inventory/users/${USER_1_ID}/collections`)
      .send({ gameSlug: `${prefix}-missing`, name: `${prefix} Missing`, visibility: "private" }).expect(400);

    const inventoryBody = (printingId: string, finish: string, collectionId: string | null, notes: string) => ({
      printingId, finish, collectionId, condition: "near_mint", quantity: 1,
      isSigned: false, isAltered: false, isGraded: false, notes,
    });
    const createInventory = async (actor: typeof user1, printingId: string, finish: string, collectionId: string | null, note: string) => {
      const response = await harness.as(actor).post("/api/me/inventory").send(inventoryBody(printingId, finish, collectionId, note)).expect(201);
      created.inventories.push(response.body.id);
      return response.body.id as string;
    };
    const mtgSellerInventory = await createInventory(user1, mtgFinish.printing_id, mtgFinish.finish, mtgCollection.body.id, `${prefix}-mtg-seller`);
    const mtgOfferInventory = await createInventory(user2, mtgFinish.printing_id, mtgFinish.finish, null, `${prefix}-mtg-offer`);
    const mtgRequestedInventory = await createInventory(user1, mtgFinish.printing_id, mtgFinish.finish, null, `${prefix}-mtg-request`);
    const syntheticOwnerInventory = await createInventory(user1, printing.id, "nonfoil", syntheticCollection.body.id, `${prefix}-synthetic-owner`);
    const syntheticOfferInventory = await createInventory(user2, printing.id, "nonfoil", null, `${prefix}-synthetic-offer`);
    const inventoryRows = await db.inventory_items.findMany({ where: { id: { in: created.inventories } }, select: { id: true, game_id: true, printing_id: true } });
    assert(inventoryRows.every((row) => row.game_id === (row.printing_id === printing.id ? synthetic.id : mtg.id)), "Inventory game propagation failed.");
    await harness.as(user1).patch(`/api/inventory/users/${USER_1_ID}/items/${mtgSellerInventory}/collection`)
      .send({ collectionId: syntheticCollection.body.id }).expect(400);
    assert((await db.inventory_items.findUnique({ where: { id: mtgSellerInventory }, select: { collection_id: true } }))?.collection_id === mtgCollection.body.id, "Cross-game collection rejection mutated inventory.");
    const incompatibleCreateBefore = await db.inventory_items.count();
    await harness.as(user1).post("/api/me/inventory")
      .send(inventoryBody(mtgFinish.printing_id, mtgFinish.finish, syntheticCollection.body.id, `${prefix}-cross-create`)).expect(400);
    assert(await db.inventory_items.count() === incompatibleCreateBefore, "Rejected cross-game inventory creation left a row.");

    const wishlist = await harness.as(user1).post(`/api/wishlists/users/${USER_1_ID}`)
      .send({ gameSlug: "mtg", name: `${prefix} Wishlist`, visibility: "public", preferredStoreId: eligibleStore.id }).expect(201);
    created.wishlists.push(wishlist.body.id);
    const syntheticWishlist = await harness.as(user1).post(`/api/wishlists/users/${USER_1_ID}`)
      .send({ gameSlug: prefix, name: `${prefix} Wishlist`, visibility: "private" }).expect(201);
    created.wishlists.push(syntheticWishlist.body.id);
    await harness.as(user1).post(`/api/wishlists/users/${USER_1_ID}`)
      .send({ gameSlug: "mtg", name: `${prefix} Unsupported Wishlist`, visibility: "private", preferredStoreId: unsupportedStore.id }).expect(400);
    const wishlistItem = await harness.as(user1).post(`/api/wishlists/${wishlist.body.id}/users/${USER_1_ID}/items`)
      .send({ printingId: mtgFinish.printing_id, quantityDesired: 1, willingToPayCash: false, willingToTradeCards: true }).expect(201);
    const storedWishlist = await db.wishlists.findUnique({ where: { id: wishlist.body.id }, select: { game_id: true } });
    const storedWishlistItem = await db.wishlist_items.findUnique({ where: { id: wishlistItem.body.id }, select: { game_id: true, printing_id: true } });
    assert(storedWishlist?.game_id === mtg.id && storedWishlistItem?.game_id === mtg.id, "Wishlist game propagation failed.");
    await harness.as(user1).post(`/api/wishlists/${wishlist.body.id}/users/${USER_1_ID}/items`)
      .send({ printingId: printing.id, quantityDesired: 1, willingToPayCash: false, willingToTradeCards: true }).expect(400);
    await harness.as(user1).patch(`/api/wishlists/${wishlist.body.id}/items/${wishlistItem.body.id}/users/${USER_1_ID}`)
      .send({ printingId: printing.id }).expect(400);
    assert((await db.wishlist_items.findUnique({ where: { id: wishlistItem.body.id }, select: { printing_id: true } }))?.printing_id === mtgFinish.printing_id, "Rejected wishlist target update mutated the item.");

    const unsupportedListingBefore = await db.listings.count();
    await harness.as(user1).post(`/api/listings/users/${USER_1_ID}`).send({
      inventoryItemId: mtgRequestedInventory, acceptsCash: false, acceptsTrade: true, preferredStoreId: unsupportedStore.id,
    }).expect(400);
    assert(await db.listings.count() === unsupportedListingBefore, "Unsupported preferred-store listing left a row.");
    const listing = await harness.as(user1).post(`/api/listings/users/${USER_1_ID}`).send({
      inventoryItemId: mtgSellerInventory, acceptsCash: false, acceptsTrade: true,
      preferredStoreId: eligibleStore.id, title: `${prefix} Listing`,
    }).expect(201);
    created.listings.push(listing.body.id);
    const listingRow = await db.listings.findUnique({ where: { id: listing.body.id }, select: { game_id: true } });
    assert(listingRow?.game_id === mtg.id, "Listing game propagation failed.");
    const listingRead = await harness.as(null).get(`/api/listings/${listing.body.id}`).expect(200);
    assert(listingRead.body.preferred_store?.id === eligibleStore.id, "Preferred-store hydration failed.");
    assert(!Object.prototype.hasOwnProperty.call(listingRead.body, "store_games"), "Listing response leaked store_games.");

    const interest = await harness.as(user2).post(`/api/inventory-interests/inventory/${mtgSellerInventory}/users/${USER_2_ID}`)
      .send({ interestType: "trade", message: prefix }).expect(201);
    created.interests.push(interest.body.id);
    assert((await db.inventory_item_interests.findUnique({ where: { id: interest.body.id }, select: { game_id: true } }))?.game_id === mtg.id, "Interest game propagation failed.");

    const listingOfferTables = ["listing_offers", "offer_items"];
    const crossListingBefore = await counts();
    await harness.as(user2).post(`/api/offers/listings/${listing.body.id}/users/${USER_2_ID}`).send({
      cashAmount: 0, currencyCode: "USD", items: [{ inventoryItemId: syntheticOfferInventory, quantity: 1 }], message: prefix,
    }).expect(400);
    await assertCounts(crossListingBefore, listingOfferTables, "Cross-game listing offer left partial rows");
    const listingOffer = await harness.as(user2).post(`/api/offers/listings/${listing.body.id}/users/${USER_2_ID}`).send({
      cashAmount: 0, currencyCode: "USD", items: [{ inventoryItemId: mtgOfferInventory, quantity: 1 }], message: prefix,
    }).expect(201);
    created.listingOffers.push(listingOffer.body.id);
    const listingOfferRow = await db.listing_offers.findUnique({ where: { id: listingOffer.body.id }, select: { game_id: true, offer_items_offer_items_offer_idTolisting_offers: { select: { game_id: true } } } });
    assert(listingOfferRow?.game_id === mtg.id && listingOfferRow.offer_items_offer_items_offer_idTolisting_offers.every((row) => row.game_id === mtg.id), "Listing-offer game propagation failed.");

    const wishlistOfferTables = ["wishlist_offers", "wishlist_offer_items", "wishlist_offer_requested_items"];
    const negativeWishlistBodies = [
      { items: [{ inventoryItemId: syntheticOfferInventory, quantity: 1 }], requestedItems: [{ requestedInventoryItemId: mtgRequestedInventory, quantity: 1 }] },
      { items: [{ inventoryItemId: mtgOfferInventory, quantity: 1 }], requestedItems: [{ requestedInventoryItemId: syntheticOwnerInventory, quantity: 1 }] },
      { items: [{ inventoryItemId: mtgOfferInventory, quantity: 1 }], requestedItems: [{ requestedCanonicalCardId: canonical.id, quantity: 1 }] },
      { items: [{ inventoryItemId: mtgOfferInventory, quantity: 1 }], requestedItems: [{ requestedPrintingId: printing.id, quantity: 1 }] },
    ];
    for (const body of negativeWishlistBodies) {
      const before = await counts();
      await harness.as(user2).post(`/api/wishlists/items/${wishlistItem.body.id}/offers/users/${USER_2_ID}`).send({
        ...body, requestsCash: false, requestsTrade: true, message: prefix,
      }).expect(400);
      await assertCounts(before, wishlistOfferTables, "Cross-game wishlist offer left partial rows");
    }
    const wishlistOffer = await harness.as(user2).post(`/api/wishlists/items/${wishlistItem.body.id}/offers/users/${USER_2_ID}`).send({
      items: [{ inventoryItemId: mtgOfferInventory, quantity: 1 }], requestsCash: false, requestsTrade: true,
      requestedItems: [{ requestedInventoryItemId: mtgRequestedInventory, quantity: 1 }], message: prefix,
    }).expect(201);
    created.wishlistOffers.push(wishlistOffer.body.id);
    const wishlistOfferRow = await db.wishlist_offers.findUnique({
      where: { id: wishlistOffer.body.id },
      select: {
        game_id: true,
        wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers: { select: { game_id: true } },
        wishlist_offer_requested_items: { select: { game_id: true } },
      },
    });
    assert(wishlistOfferRow?.game_id === mtg.id && wishlistOfferRow.wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers.every((row) => row.game_id === mtg.id) && wishlistOfferRow.wishlist_offer_requested_items.every((row) => row.game_id === mtg.id), "Wishlist-offer game propagation failed.");

    const unsupportedAcceptanceBefore = await counts();
    await harness.as(user1).post(`/api/wishlists/offers/${wishlistOffer.body.id}/users/${USER_1_ID}/accept`)
      .send({ storeId: unsupportedStore.id, requestedInventorySelections: [] }).expect(400);
    await assertCounts(unsupportedAcceptanceBefore, ["transactions", "transaction_items", "store_trade_handoffs", "transaction_item_custody"], "Unsupported wishlist mediation left partial rows");
    assert((await db.wishlist_offers.findUnique({ where: { id: wishlistOffer.body.id }, select: { status: true } }))?.status === "pending", "Unsupported wishlist mediation changed offer status.");

    const acceptedWishlistTransaction = await harness.as(user1).post(`/api/wishlists/offers/${wishlistOffer.body.id}/users/${USER_1_ID}/accept`)
      .send({ storeId: eligibleStore.id, requestedInventorySelections: [] }).expect(201);
    created.transactions.push(acceptedWishlistTransaction.body.id);
    const wishlistTransaction = await db.transactions.findUnique({
      where: { id: acceptedWishlistTransaction.body.id },
      select: {
        game_id: true,
        accepted_wishlist_offer_id: true,
        transaction_items: { select: { game_id: true, inventory_item_id: true, market_snapshot_id: true } },
        store_trade_handoffs: { select: { game_id: true, store_id: true } },
      },
    });
    assert(wishlistTransaction?.game_id === mtg.id && wishlistTransaction.accepted_wishlist_offer_id === wishlistOffer.body.id, "Wishlist transaction game provenance failed.");
    assert(wishlistTransaction.transaction_items.length === 2 && wishlistTransaction.transaction_items.every((row) => row.game_id === mtg.id && row.market_snapshot_id === null), "Wishlist transaction-item game propagation failed.");
    assert(wishlistTransaction.transaction_items.every((row) => [mtgOfferInventory, mtgRequestedInventory].includes(row.inventory_item_id)), "Wishlist transaction items reference unexpected source inventory.");
    assert(wishlistTransaction.store_trade_handoffs.length === 1 && wishlistTransaction.store_trade_handoffs[0]?.game_id === mtg.id && wishlistTransaction.store_trade_handoffs[0]?.store_id === eligibleStore.id, "Wishlist handoff game/store propagation failed.");

    console.log(JSON.stringify({ prefix, collections: "pass", wishlists: "pass", inventory: "pass", listings: "pass", interests: "pass", listingOffers: "pass", wishlistOffers: "pass", wishlistTransaction: "pass", negativeCrossGame: 10, unsupportedStoreRejections: 3, partialWrites: "zero" }));
  } finally {
    await cleanup();
    const restored = await counts();
    assert(JSON.stringify(restored) === JSON.stringify(baseline), `Certification cleanup did not restore baseline counts: ${JSON.stringify({ baseline, restored })}`);
    await harness.close();
    await db.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
