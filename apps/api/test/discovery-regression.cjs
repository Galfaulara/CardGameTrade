const path = require("node:path");

require("dotenv").config({
  path: path.resolve(__dirname, "../../../.env"),
});

const { createDbClient } = require("@repo/db");

const apiBase = process.env.API_BASE_URL ?? "http://localhost:4000/api";
const database = createDbClient(process.env.DATABASE_URL);

function assert(value, message) {
  if (!value) {
    throw new Error(message);
  }
}

async function getJson(pathname, expectedStatus = 200) {
  const response = await fetch(`${apiBase}${pathname}`);
  assert(
    response.status === expectedStatus,
    `${pathname}: expected ${expectedStatus}, received ${response.status}`,
  );
  return response.json();
}

async function snapshot() {
  const models = [
    "inventory_items",
    "collections",
    "user_profiles",
    "stores",
    "listings",
    "listing_offers",
    "inventory_item_interests",
    "wishlists",
    "wishlist_items",
    "transactions",
    "store_trade_handoffs",
    "transaction_item_custody",
  ];
  const values = {};

  for (const model of models) {
    const rows = await database[model].findMany({
      select: {
        id: true,
        updated_at: true,
      },
      orderBy: {
        id: "asc",
      },
    });
    values[model] = rows.map((row) =>
      `${row.id}:${row.updated_at.toISOString()}`,
    );
  }

  return values;
}

async function main() {
  await database.$connect();
  const before = await snapshot();
  const preferredStoreId = "eca7b68d-6a7a-4e68-89bd-baea637ca59d";
  const preferredUserIds = [
    "16e1b0bc-3b75-4a82-a7e4-b6a88a6cbc2e",
    "92d9585a-7c59-4c02-8ee4-a9c24b9787d0",
  ];
  const preferredUsers = await database.user_profiles.findMany({
    where: { id: { in: preferredUserIds } },
    select: { id: true, preferred_store_id: true },
  });
  assert(preferredUsers.length === 2 && preferredUsers.every((user) => user.preferred_store_id === preferredStoreId),
    "preferred-store fixture assignment was missing");
  const foreignKey = await database.$queryRawUnsafe(`
    SELECT rc.delete_rule
    FROM information_schema.referential_constraints rc
    WHERE rc.constraint_name = 'fk_user_profiles_preferred_store'
  `);
  assert(foreignKey.length === 1 && foreignKey[0].delete_rule === "SET NULL",
    "user preferred-store FK is not ON DELETE SET NULL");

  const collections = await getJson(
    "/discovery/collections?limit=12&previewLimit=10&marketplaceOnly=true&diverseOwners=true",
  );
  const fixtureNames = [
    "Avengers Assemble",
    "Turtle Power!",
    "Prismari Artistry",
  ];

  for (const name of fixtureNames) {
    const collection = collections.find((value) => value.name === name);
    assert(collection, `${name} was not discoverable`);
    assert(collection.card_quantity === 100, `${name} quantity was not 100`);
    assert(collection.marketplace_card_quantity === 14, `${name} marketplace quantity was not 14`);
    assert(collection.preview_items.length <= 10, `${name} preview exceeded 10`);
    assert(collection.preview_items.every((item) => item.listing && item.listing.accepts_trade), `${name} returned non-marketplace inventory`);
    assert(collection.preferred_store?.id === preferredStoreId, `${name} preferred store was not publicly resolved`);
  }

  const selected = collections.find(
    (collection) => collection.name === fixtureNames[0],
  );
  const defaultCollection = await getJson(
    `/discovery/collections/${selected.id}`,
  );
  assert(defaultCollection.items.length === 24, "default collection page was not 24");
  assert(defaultCollection.pagination.has_more, "collection should have another page");
  const customCollection = await getJson(
    `/discovery/collections/${selected.id}?page=2&pageSize=48`,
  );
  assert(customCollection.items.length > 0 && customCollection.items.length <= 48,
    "legal collection page size failed");
  await getJson(
    `/discovery/collections/${selected.id}?pageSize=49`,
    400,
  );

  const sanzaCollection = collections.find((value) => value.owner.id === preferredUserIds[0]);
  assert(sanzaCollection, "Sanza marketplace collection was not discoverable");
  await database.user_profiles.update({ where: { id: preferredUserIds[0] }, data: { preferred_store_id: null } });
  try {
    const withoutPreference = await getJson(`/discovery/collections/${sanzaCollection.id}`);
    assert(withoutPreference.collection.card_quantity === 100 && withoutPreference.collection.preferred_store === null,
      "null preferred store hid or malformed a public collection");
  } finally {
    await database.user_profiles.update({ where: { id: preferredUserIds[0] }, data: { preferred_store_id: preferredStoreId } });
  }

  await database.stores.update({ where: { id: preferredStoreId }, data: { status: "inactive" } });
  try {
    const ineligiblePreference = await getJson(`/discovery/collections/${selected.id}`);
    assert(ineligiblePreference.collection.preferred_store === null,
      "currently ineligible preferred store was exposed publicly");
    const retained = await database.user_profiles.count({ where: { id: { in: preferredUserIds }, preferred_store_id: preferredStoreId } });
    assert(retained === 2, "ineligible preference was cleared from storage");
  } finally {
    await database.stores.update({ where: { id: preferredStoreId }, data: { status: "active" } });
  }

  const nonPublic = await database.collections.findFirst({
    where: {
      visibility: {
        not: "public",
      },
    },
    select: {
      id: true,
    },
  });
  if (nonPublic) {
    await getJson(`/discovery/collections/${nonPublic.id}`, 404);
    assert(!collections.some((value) => value.id === nonPublic.id),
      "non-public collection was discoverable");
  }

  const stores = await getJson(
    "/discovery/stores?limit=1&previewLimit=10&marketplaceOnly=true",
  );
  const testStore = stores.find((store) => store.name === "DeckDeal Test LGS");
  assert(testStore, "DeckDeal Test LGS was not discoverable");
  assert(testStore.card_quantity >= 200, "eligible store inventory omitted imported cards");
  assert(testStore.marketplace_card_quantity === 18, "store marketplace quantity was not 18");
  assert(testStore.preview_items.length <= 10, "store preview exceeded 10");
  assert(testStore.preview_items.every((item) => item.listing && item.listing.accepts_trade), "store returned non-marketplace inventory");
  const storeInventory = await getJson(
    `/discovery/stores/${testStore.id}/inventory`,
  );
  assert(storeInventory.items.length <= 24, "default store page exceeded 24");
  assert(storeInventory.store.card_quantity === testStore.card_quantity,
    "store quantity changed between discovery resources");
  await getJson(
    `/discovery/stores/${testStore.id}/inventory?pageSize=49`,
    400,
  );

  const hiddenStore = await database.stores.findFirst({
    where: {
      OR: [
        { status: { not: "active" } },
        { verification_status: { not: "verified" } },
        { trade_mediation_enabled: false },
        { inventory_items: { none: { status: "available", owner_user_id: null } } },
      ],
    },
    select: {
      id: true,
    },
  });
  if (hiddenStore) {
    await getJson(`/discovery/stores/${hiddenStore.id}/inventory`, 404);
    assert(!stores.some((value) => value.id === hiddenStore.id),
      "ineligible store was discoverable");
  }

  const publicJson = JSON.stringify({ collections, stores, defaultCollection, storeInventory });
  for (const forbidden of [
    "acquired_price",
    "notes",
    "email",
    "auth_provider",
    "auth_user_id",
    "inventory_item_photos",
  ]) {
    assert(!publicJson.includes(`\"${forbidden}\"`), `${forbidden} leaked publicly`);
  }
  const sample = defaultCollection.items[0];
  const detailIds = defaultCollection.items.map((item) => item.id);
  const detailListings = await database.listings.findMany({ where: {
    inventory_item_id: { in: detailIds }, status: "active",
    OR: [{ accepts_trade: true }, { accepts_cash: true }],
  }, select: { id: true, inventory_item_id: true, accepts_cash: true, accepts_trade: true } });
  const listingByItem = new Map(detailListings.map((listing) => [listing.inventory_item_id, listing]));
  for (const item of defaultCollection.items) {
    const expected = listingByItem.get(item.id);
    if (!expected) assert(!item.listing, "unlisted collection item gained marketplace intent");
    else assert(item.listing?.id === expected.id && item.listing.accepts_cash === expected.accepts_cash && item.listing.accepts_trade === expected.accepts_trade,
      "full collection detail lost or changed exact active Listing intent");
  }
  assert(defaultCollection.items.some((item) => !item.listing), "full collection fixture lacked an unlisted verification card");
  const fullCollectionItems = [];
  for (let page = 1; page <= Math.ceil(defaultCollection.pagination.total_count / 24); page += 1) {
    const detail = page === 1 ? defaultCollection : await getJson(`/discovery/collections/${selected.id}?page=${page}&pageSize=24`);
    fullCollectionItems.push(...detail.items);
  }
  const listedDetailItems = fullCollectionItems.filter((item) => item.listing);
  assert(listedDetailItems.length === 14, "full public Collection did not preserve all exact active Listing intents");
  assert(fullCollectionItems.length - listedDetailItems.length === 86, "unlisted public Collection cards were filtered or mislabeled");
  assert(listedDetailItems.every((item) => item.listing.accepts_trade || item.listing.accepts_cash), "Collection detail exposed an intent-free Listing");
  assert(sample.printing.id, "printing ID missing");
  assert(sample.printing.canonical_cards.name, "card name missing");
  assert(sample.printing.card_sets.id && sample.printing.card_sets.code && sample.printing.card_sets.name,
    "set metadata missing");
  assert(sample.condition && sample.finish && sample.language_code && sample.quantity,
    "physical inventory metadata missing");

  const after = await snapshot();
  assert(JSON.stringify(after) === JSON.stringify(before),
    "a protected marketplace row count or timestamp changed");

  const repeated = await getJson(
    "/discovery/collections?limit=12&previewLimit=10&marketplaceOnly=true&diverseOwners=true",
  );
  assert(JSON.stringify(repeated) === JSON.stringify(collections), "preview ordering was not deterministic");

  const previewIds = [...collections, testStore].flatMap((owner) => owner.preview_items.map((item) => item.id));
  const eligibleListings = await database.listings.findMany({ where: { inventory_item_id: { in: previewIds } }, select: {
    inventory_item_id: true, status: true, accepts_cash: true, accepts_trade: true,
  } });
  assert(eligibleListings.length === previewIds.length, "preview item lacked an exact Listing");
  assert(eligibleListings.every((listing) => listing.status === "active" && (listing.accepts_cash || listing.accepts_trade)), "preview contained an ineligible Listing");

  console.log(JSON.stringify({
    collections: fixtureNames,
    collectionQuantity: 100,
    collectionDefaultPageSize: defaultCollection.items.length,
    store: testStore.name,
    storeAvailableQuantity: testStore.card_quantity,
    storeDefaultPageSize: storeInventory.items.length,
    privacy: "passed",
    nonMutation: "passed",
  }, null, 2));
}

main()
  .finally(() => database.$disconnect())
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
