import "dotenv/config";
import { randomUUID } from "node:crypto";
import { createDbClient } from "@repo/db";
import type { AuthenticatedPrincipal } from "../src/auth/auth.types";
import {
  USER_1_ID,
  USER_2_ID,
  activePrincipal,
  createAuthenticatedHarness,
} from "./support/authenticated-app-harness";

const db = createDbClient(process.env.DATABASE_URL!);
const assert: (value: unknown, message: string) => asserts value = (value, message) => {
  if (!value) {
    throw new Error(message);
  }
};

const TABLES = [
  "inventory_items",
  "collections",
  "listings",
] as const;

const unmappedPrincipal = (
  providerSubject: string,
): AuthenticatedPrincipal => ({
  provider: "clerk",
  providerSubject,
  deckdealUserId: null,
  sessionId: `test-session-${providerSubject}`,
  accountStatus: null,
});

async function tableCounts() {
  const counts: Record<string, number> = {};
  for (const table of TABLES) {
    counts[table] = await (db as any)[table].count();
  }
  return counts;
}

async function baselineSnapshot() {
  const [inventory, collections, listings] = await Promise.all([
    db.inventory_items.findMany({
      select: {
        id: true,
        owner_user_id: true,
        owner_store_id: true,
        collection_id: true,
        status: true,
        updated_at: true,
      },
      orderBy: { id: "asc" },
    }),
    db.collections.findMany({
      select: { id: true, user_id: true, updated_at: true },
      orderBy: { id: "asc" },
    }),
    db.listings.findMany({
      select: { id: true, inventory_item_id: true, status: true, updated_at: true },
      orderBy: { id: "asc" },
    }),
  ]);

  return JSON.stringify({ inventory, collections, listings });
}

async function inventorySnapshot(
  inventoryItemId: string,
) {
  return db.inventory_items.findUnique({
    where: {
      id: inventoryItemId,
    },
    select: {
      id: true,
      owner_user_id: true,
      collection_id: true,
      condition: true,
      quantity: true,
      is_signed: true,
      is_altered: true,
      is_graded: true,
      grading_company: true,
      grade: true,
      certification_number: true,
      acquired_at: true,
      acquired_price: true,
      status: true,
      notes: true,
      updated_at: true,
    },
  });
}

export async function runMyInventoryRegression() {
  await db.$connect();
  const harness = await createAuthenticatedHarness();
  const user1 = activePrincipal(USER_1_ID);
  const user2 = activePrincipal(USER_2_ID);
  const seed = randomUUID().replaceAll("-", "").toLowerCase();
  const listedNote = `inventory-private-listed-${seed}`;
  const removableNote = `inventory-private-removed-${seed}`;
  const listedPrice = "9876.54";
  const cleanup = {
    collections: [] as string[],
    inventories: [] as string[],
    listings: [] as string[],
  };
  const beforeCounts = await tableCounts();
  const beforeBaseline = await baselineSnapshot();

  try {
    const staff = await db.store_staff.findFirst({
      where: {
        status: "active",
        stores: {
          status: "active",
          verification_status: "verified",
          trade_mediation_enabled: true,
          store_games: {
            some: {
              games: { slug: "mtg" },
              trade_mediation_enabled: true,
            },
          },
        },
      },
      select: {
        user_id: true,
        store_id: true,
      },
    });
    assert(staff, "An active verified trade-mediation store fixture is required.");

    const physical = await db.printing_finishes.findFirst({
      where: {
        card_printings: {
          is_digital: false,
          games: { slug: "mtg" },
        },
      },
      select: {
        printing_id: true,
        finish: true,
        card_printings: {
          select: {
            canonical_card_id: true,
            canonical_cards: {
              select: {
                name: true,
              },
            },
            collector_number: true,
            card_sets: {
              select: {
                code: true,
                name: true,
              },
            },
          },
        },
      },
    });
    assert(physical, "A physical printing fixture is required.");

    const searchTerm =
      physical.card_printings.canonical_cards.name
        .split(/\s+/)
        .filter(Boolean)[0] ??
      physical.card_printings.canonical_cards.name;

    await harness.as(null).get("/api/me/inventory").expect(401);
    await harness.as(unmappedPrincipal(`inventory-unmapped-${seed.slice(0, 8)}`)).get("/api/me/inventory").expect(403);
    await harness.as({ ...user1, accountStatus: "disabled" }).get("/api/me/inventory").expect(403);

    const publicCollection = await harness.as(user1).post(`/api/inventory/users/${USER_1_ID}/collections`).send({
      gameSlug: "mtg",
      name: `My Inventory ${seed.slice(0, 8)}`,
      visibility: "public",
    }).expect(201);
    cleanup.collections.push(publicCollection.body.id);

    const createBody = (
      note: string,
      condition: "near_mint" | "damaged",
      acquiredPrice: string,
      collectionId: string | null,
    ) => ({
      printingId: physical.printing_id,
      finish: physical.finish,
      collectionId,
      condition,
      quantity: 1,
      isSigned: false,
      isAltered: false,
      isGraded: false,
      acquiredAt: "2024-01-15",
      acquiredPrice: Number(acquiredPrice),
      notes: note,
    });

    const beforeRejectedCreate = await db.inventory_items.count({
      where: {
        owner_user_id: USER_1_ID,
      },
    });
    await harness.as(user1).post("/api/me/inventory").send({
      ...createBody(`inventory-rejected-${seed}`, "near_mint", "1.11", publicCollection.body.id),
      owner_user_id: USER_2_ID,
    }).expect(400);
    await harness.as(user1).post("/api/me/inventory").send({
      ...createBody(`inventory-store-spoof-${seed}`, "near_mint", "1.12", publicCollection.body.id),
      owner_store_id: staff.store_id,
    }).expect(400);
    await harness.as(user1).post("/api/me/inventory").send({
      ...createBody(`inventory-store-create-${seed}`, "near_mint", "1.13", publicCollection.body.id),
      ownerStoreId: staff.store_id,
    }).expect(400);
    const afterRejectedCreate = await db.inventory_items.count({
      where: {
        owner_user_id: USER_1_ID,
      },
    });
    assert(afterRejectedCreate === beforeRejectedCreate, "Rejected self inventory creation must not insert a row.");

    const listedItem = await harness.as(user1).post("/api/me/inventory").send(
      createBody(listedNote, "near_mint", listedPrice, publicCollection.body.id),
    ).expect(201);
    cleanup.inventories.push(listedItem.body.id);
    const createdListedRow = await db.inventory_items.findUnique({
      where: { id: listedItem.body.id },
      select: { owner_user_id: true, owner_store_id: true, status: true },
    });
    assert(createdListedRow?.owner_user_id === USER_1_ID, "New self inventory must be owned by the authenticated DeckDeal user.");
    assert(createdListedRow.owner_store_id === null, "Normal self inventory creation must never create Store-owned inventory.");
    assert(createdListedRow.status === "available", "New self inventory must start in the available operational state.");
    assert(await db.listings.count({ where: { inventory_item_id: listedItem.body.id } }) === 0, "Available inventory creation must not create a Listing or sale/trade intent.");
    assert(await db.inventory_item_interests.count({ where: { inventory_item_id: listedItem.body.id } }) === 0, "Available inventory creation must not create marketplace Interest intent.");

    const removableItem = await harness.as(user1).post("/api/me/inventory").send(
      createBody(removableNote, "damaged", "456.78", publicCollection.body.id),
    ).expect(201);
    cleanup.inventories.push(removableItem.body.id);

    const user2Item = await harness.as(user2).post("/api/me/inventory").send(
      createBody(`inventory-user2-${seed}`, "near_mint", "111.22", null),
    ).expect(201);
    cleanup.inventories.push(user2Item.body.id);

    const selfList = await harness.as(user1).get(`/api/me/inventory?page=1&pageSize=48&q=${encodeURIComponent(searchTerm)}&condition=near_mint`).expect(200);
    assert(selfList.body.pagination.page_size === 48, "Self inventory pagination must respect validated pageSize overrides.");
    assert(selfList.body.items.some((item: any) => item.id === listedItem.body.id), "Condition and search filters must be able to find the actor's own inventory item.");
    assert(!selfList.body.items.some((item: any) => item.id === user2Item.body.id), "User1's list must exclude User2's private inventory.");

    for (const catalogQuery of [
      physical.card_printings.collector_number,
      physical.card_printings.card_sets.code,
      physical.card_printings.card_sets.name,
    ]) {
      const catalogFiltered = await harness.as(user1).get(`/api/me/inventory?page=1&pageSize=48&q=${encodeURIComponent(catalogQuery)}`).expect(200);
      assert(catalogFiltered.body.items.some((item: any) => item.id === listedItem.body.id), "Inventory search must truthfully support collector number and set identity.");
    }

    const user2List = await harness.as(user2).get(`/api/me/inventory?page=1&pageSize=48&q=${encodeURIComponent(searchTerm)}`).expect(200);
    assert(user2List.body.items.some((item: any) => item.id === user2Item.body.id), "User2's list must contain User2's own matching inventory.");
    assert(!user2List.body.items.some((item: any) => item.id === listedItem.body.id), "User2's list must exclude User1's private inventory.");

    const collectionList = await harness.as(user1).get(`/api/me/inventory?page=1&pageSize=48&collection=${publicCollection.body.id}`).expect(200);
    assert(collectionList.body.items.some((item: any) => item.id === listedItem.body.id), "Collection filtering must include matching actor-owned Inventory.");
    assert(!collectionList.body.items.some((item: any) => item.id === user2Item.body.id), "Collection filtering must remain actor-scoped.");
    const unassignedList = await harness.as(user2).get("/api/me/inventory?page=1&pageSize=48&collection=unassigned").expect(200);
    assert(unassignedList.body.items.some((item: any) => item.id === user2Item.body.id), "Unsorted must truthfully represent actor-owned rows with no collection.");

    const beforeRejectedListSpoof = await tableCounts();
    await harness.as(user1).get(`/api/me/inventory?page=1&pageSize=48&userId=${USER_2_ID}`).expect(400);
    assert(JSON.stringify(await tableCounts()) === JSON.stringify(beforeRejectedListSpoof), "Rejected query-string userId spoofing must create zero mutation.");

    const ownerDetail = await harness.as(user1).get(`/api/me/inventory/${listedItem.body.id}`).expect(200);
    assert(ownerDetail.body.notes === listedNote, "Owners must receive private notes through /api/me/inventory.");
    assert(ownerDetail.body.acquired_price === listedPrice, "Owners must receive private acquisition price through /api/me/inventory.");
    assert(ownerDetail.body.printing.id === physical.printing_id, "Inventory detail must preserve the exact owned printing.");
    assert(ownerDetail.body.printing.finish === physical.finish, "Inventory detail must preserve the exact owned finish.");

    const beforeCrossUserDenials = JSON.stringify(await inventorySnapshot(listedItem.body.id));
    await harness.as(user2).get(`/api/me/inventory/${listedItem.body.id}`).expect(404);
    await harness.as(user2).patch(`/api/me/inventory/${listedItem.body.id}`).send({ notes: "forbidden" }).expect(404);
    await harness.as(user2).post(`/api/me/inventory/${listedItem.body.id}/remove`).expect(404);
    assert(JSON.stringify(await inventorySnapshot(listedItem.body.id)) === beforeCrossUserDenials, "Cross-user private reads and writes must create zero mutation.");

    const beforeRejectedEdit = JSON.stringify(await inventorySnapshot(listedItem.body.id));
    await harness.as(user1).patch(`/api/me/inventory/${listedItem.body.id}`).send({ userId: USER_2_ID, notes: "spoofed" }).expect(400);
    assert(JSON.stringify(await inventorySnapshot(listedItem.body.id)) === beforeRejectedEdit, "Rejected self inventory edits must not mutate the row.");

    const updated = await harness.as(user1).patch(`/api/me/inventory/${listedItem.body.id}`).send({
      condition: "moderately_played",
      notes: `${listedNote}-updated`,
      acquiredPrice: Number(listedPrice),
    }).expect(200);
    assert(updated.body.condition === "moderately_played", "Owners must be able to edit mutable inventory condition.");
    assert(updated.body.notes === `${listedNote}-updated`, "Owners must be able to edit private inventory notes.");

    const updatedFilter = await harness.as(user1).get(`/api/me/inventory?page=1&pageSize=48&q=${encodeURIComponent(searchTerm)}&condition=moderately_played`).expect(200);
    assert(updatedFilter.body.items.some((item: any) => item.id === listedItem.body.id), "Updated condition filters must reflect self inventory edits.");

    const listing = await harness.as(user1).post(`/api/listings/users/${USER_1_ID}`).send({
      inventoryItemId: listedItem.body.id,
      acceptsCash: false,
      acceptsTrade: true,
      preferredStoreId: staff.store_id,
      title: `Inventory listing ${seed.slice(0, 8)}`,
    }).expect(201);
    cleanup.listings.push(listing.body.id);

    const listedDetail = await harness.as(user1).get(`/api/me/inventory/${listedItem.body.id}`).expect(200);
    assert(listedDetail.body.active_listing?.id === listing.body.id, "Self inventory detail must indicate the actor's active Listing for this card.");

    const publicCollectionPage = await harness.as(null).get(`/api/discovery/collections/${publicCollection.body.id}?page=1&pageSize=24`).expect(200);
    const publicListingDetail = await harness.as(null).get(`/api/listings/${listing.body.id}`).expect(200);
    const publicCardListings = await harness.as(null).get(`/api/catalog/cards/${physical.card_printings.canonical_card_id}/listings?printing=${physical.printing_id}&page=1&pageSize=12`).expect(200);
    const publicPayloads = [
      JSON.stringify(publicCollectionPage.body),
      JSON.stringify(publicListingDetail.body),
      JSON.stringify(publicCardListings.body),
    ].join("\n");
    assert(!publicPayloads.includes(`${listedNote}-updated`), "Private inventory notes must not leak through public discovery, listing, or card endpoints.");
    assert(!publicPayloads.includes(listedPrice), "Private acquisition price must not leak through public discovery, listing, or card endpoints.");

    const beforeBlockedRemoval = JSON.stringify(await inventorySnapshot(listedItem.body.id));
    await harness.as(user1).post(`/api/me/inventory/${listedItem.body.id}/remove`).expect(409);
    assert(JSON.stringify(await inventorySnapshot(listedItem.body.id)) === beforeBlockedRemoval, "Active listing conflicts must block inventory removal without mutating the row.");

    const removed = await harness.as(user1).post(`/api/me/inventory/${removableItem.body.id}/remove`).expect(200);
    assert(removed.body.status === "removed", "Self inventory removal must preserve history through the removed status.");
    assert(removed.body.collection_id === null, "Removed self inventory must clear collection placement.");
    assert(removed.body.collection === null, "Removed self inventory mapping must report a cleared collection.");

    const removedRow = await inventorySnapshot(removableItem.body.id);
    assert(removedRow?.status === "removed", "The removed inventory row must remain present in the database as historical ownership.");
    assert(removedRow?.collection_id === null, "Historical removed inventory must clear its collection reference.");

    const protectedItem = await harness.as(user1).post("/api/me/inventory").send(
      createBody(`inventory-protected-${seed}`, "near_mint", "222.33", null),
    ).expect(201);
    cleanup.inventories.push(protectedItem.body.id);
    await db.inventory_items.update({
      where: { id: protectedItem.body.id },
      data: { status: "reserved" },
    });
    const beforeProtectedRemoval = JSON.stringify(await inventorySnapshot(protectedItem.body.id));
    await harness.as(user1).post(`/api/me/inventory/${protectedItem.body.id}/remove`).expect(409);
    assert(JSON.stringify(await inventorySnapshot(protectedItem.body.id)) === beforeProtectedRemoval, "Protected lifecycle states must block removal without mutation.");

    const postRemovalList = await harness.as(user1).get("/api/me/inventory?page=1&pageSize=48").expect(200);
    assert(!postRemovalList.body.items.some((item: any) => item.id === removableItem.body.id), "Removed inventory must not remain in the current self inventory list.");

    console.log(`My Inventory regression passed (${seed}).`);
  } finally {
    if (cleanup.listings.length) {
      await db.listings.deleteMany({
        where: {
          id: {
            in: cleanup.listings,
          },
        },
      });
    }

    if (cleanup.inventories.length) {
      await db.inventory_items.deleteMany({
        where: {
          id: {
            in: cleanup.inventories,
          },
        },
      });
    }

    if (cleanup.collections.length) {
      await db.collections.deleteMany({
        where: {
          id: {
            in: cleanup.collections,
          },
        },
      });
    }

    const afterCounts = await tableCounts();
    assert(JSON.stringify(afterCounts) === JSON.stringify(beforeCounts), "My Inventory regression cleanup did not restore table-count baseline.");
    assert(await baselineSnapshot() === beforeBaseline, "My Inventory regression cleanup did not restore the original baseline rows exactly.");

    await harness.close();
    await db.$disconnect();
  }
}

runMyInventoryRegression().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
