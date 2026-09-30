import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { spawnSync } from "node:child_process";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

// Validate before importing any application module or opening a connection.
function disposableUrl() {
  const value = process.env.DATABASE_URL;
  assert(value, "An explicit disposable DATABASE_URL is required.");
  const url = new URL(value);
  assert(["127.0.0.1", "localhost"].includes(url.hostname));
  assert.equal(url.port, "5433");
  assert.equal(url.pathname, "/deckdeal_share_printing_test");
  assert(!value.toLowerCase().includes("supabase"));
  return value;
}

async function main() {
  const url = disposableUrl();
  const { createDbClient } = await import("@repo/db");
  const { createAuthenticatedHarness, activePrincipal } = await import("./support/authenticated-app-harness");
  const db = createDbClient(url);
  await db.$connect();
  const name = await db.$queryRaw<Array<{ current_database: string }>>`SELECT current_database()`;
  assert.equal(name[0]?.current_database, "deckdeal_share_printing_test");
  const harness = await createAuthenticatedHarness();
  const inventories: string[] = [];
  const listings: string[] = [];
  const collections: string[] = [];
  try {
    const users = await db.user_profiles.findMany({ where: { status: "active" }, take: 2, orderBy: { id: "asc" }, select: { id: true } });
    assert.equal(users.length, 2);
    const owner = activePrincipal(users[0]!.id), other = activePrincipal(users[1]!.id);
    const balmor = await db.canonical_cards.findFirstOrThrow({ where: { name: "Balmor, Battlemage Captain" }, select: { id: true } });
    const catalog = await harness.as(null).get(`/api/catalog/cards/${balmor.id}/printings`).expect(200);
    const rows = catalog.body as any[];
    // Use the actual frontend grouping function on real catalog rows.
    const groupingModule = pathToFileURL(resolve(__dirname, "../../../../apps/web/features/catalog/version-families.ts")).href;
    const grouping = spawnSync(process.execPath, ["--experimental-strip-types", "--input-type=module", "-e",
      `import { groupPrintingVersions } from ${JSON.stringify(groupingModule)}; let input=''; for await (const part of process.stdin) input+=part; console.log(JSON.stringify(groupPrintingVersions(JSON.parse(input)).map(f=>({representative:f.representative.id,ids:f.printings.map(p=>p.id)}))));`],
      { input: JSON.stringify(rows), encoding: "utf8" });
    assert.equal(grouping.status, 0, grouping.stderr);
    const families = JSON.parse(grouping.stdout) as Array<{ representative: string; ids: string[] }>;
    const pick = (set: string, number: string, english: boolean) => {
      const found = rows.find(p => p.card_sets.code.toLowerCase() === set && p.collector_number === number && (p.language_code === "en") === english);
      assert(found, `${set} ${number} ${english ? "English" : "non-English"} must be selectable`);
      return found;
    };
    const normal = await db.card_printings.findFirstOrThrow({
      where: { is_digital: false, language_code: "en", canonical_cards: { name: "Sol Ring" }, printing_finishes: { some: {} } },
      select: { id: true, canonical_card_id: true, game_id: true, language_code: true },
    });
    const single = await db.$queryRaw<Array<{ id: string; canonical_card_id: string; game_id: string; language_code: string }>>`
      SELECT p.id, p.canonical_card_id, p.game_id, p.language_code FROM card_printings p
      WHERE NOT p.is_digital AND p.language_code = 'en' AND p.source = 'scryfall'
        AND p.raw_data->>'layout' = 'normal'
        AND EXISTS (SELECT 1 FROM printing_finishes f WHERE f.printing_id = p.id)
        AND NOT EXISTS (SELECT 1 FROM card_printings sibling WHERE sibling.canonical_card_id = p.canonical_card_id AND sibling.language_code <> 'en')
      ORDER BY p.id LIMIT 1`;
    assert(single[0]);
    const cases = [
      ["Balmor FDN 237 English", pick("fdn", "237", true)],
      ["Balmor FDN 237 non-English", pick("fdn", "237", false)],
      ["Balmor DMU 295 English showcase", pick("dmu", "295", true)],
      ["Balmor DMU 295 multilingual non-showcase", pick("dmu", "295", false)],
      ["Balmor DMU 336 foil-only", pick("dmu", "336", true)],
      ["Single-language card", single[0]],
      ["Heavily reprinted Sol Ring", normal],
    ] as const;
    const proof: object[] = [];
    for (const [label, selected] of cases) {
      const finishes = await harness.as(null).get(`/api/catalog/printings/${selected.id}/finishes`).expect(200);
      const finish = finishes.body[0]?.finish;
      assert(finish);
      if (label.includes("foil-only")) assert.deepEqual(finishes.body.map((f: any) => f.finish), ["foil"]);
      if (label.includes("non-showcase")) assert.notEqual(selected.treatment, "showcase");
      const submitted = { printingId: selected.id, finish, condition: "near_mint", quantity: 3, isSigned: false, isAltered: false, isGraded: false, notes: "PRIVATE certification marker" };
      const created = await harness.as(owner).post("/api/me/inventory").send(submitted).expect(201);
      inventories.push(created.body.id);
      const persisted = await db.inventory_items.findUniqueOrThrow({ where: { id: created.body.id } });
      assert.equal(selected.id, submitted.printingId);
      assert.equal(submitted.printingId, persisted.printing_id);
      assert.equal(persisted.language_code, selected.language_code);
      assert.equal(persisted.game_id, selected.game_id);
      assert.equal(persisted.finish, finish);
      const exact = await db.card_printings.findUniqueOrThrow({ where: { id: persisted.printing_id } });
      assert.equal(exact.canonical_card_id, selected.canonical_card_id);
      if (label.includes("non-English") || label.includes("non-showcase")) {
        const english = pick(label.includes("FDN") ? "fdn" : "dmu", label.includes("FDN") ? "237" : "295", true);
        assert.notEqual(selected.id, english.id);
        assert.notEqual(persisted.language_code, "en");
      }
      const family = families.find(f => f.ids.includes(selected.id));
      if (label.includes("FDN") && label.includes("non-English")) {
        assert(family);
        assert.notEqual(selected.id, family.representative, "Explicit non-representative language must persist.");
        assert.notEqual(persisted.printing_id, family.representative);
      }
      proof.push({ case: label, selected: selected.id, submitted: submitted.printingId, persisted: persisted.printing_id, language: persisted.language_code, finish, familyRepresentative: family?.representative });
    }
    console.log(JSON.stringify({ database: name[0]!.current_database, printingProof: proof }, null, 2));
    const firstItem = await db.inventory_items.findUniqueOrThrow({ where: { id: inventories[0]! } });
    const collection = await db.collections.create({ data: { user_id: users[0]!.id, game_id: firstItem.game_id, name: `Listing share ${randomUUID()}`, visibility: "public" } });
    collections.push(collection.id);
    await db.inventory_items.update({ where: { id: firstItem.id }, data: { collection_id: collection.id } });
    const secondItem = await db.inventory_items.create({ data: {
      game_id: firstItem.game_id, printing_id: firstItem.printing_id, finish: firstItem.finish,
      condition: firstItem.condition, language_code: firstItem.language_code, quantity: 7,
      owner_user_id: users[1]!.id, status: "available", notes: "PRIVATE other seller",
    } });
    inventories.push(secondItem.id);
    for (const [user, item] of [[owner, firstItem], [other, secondItem]] as const) {
      const response = await harness.as(user).post(`/api/listings/users/${user.deckdealUserId}`).send({ inventoryItemId: item.id, acceptsTrade: true, acceptsCash: false, preferredStoreId: null }).expect(201);
      listings.push(response.body.id);
    }
    const assertPublic = (body: any) => {
      assert.equal(body.available, true);
      assert.equal(body.inventory_item.printing.id, firstItem.printing_id);
      assert(!("id" in body.inventory_item));
      const walk = (value: any) => {
        if (!value || typeof value !== "object") return;
        for (const [key, child] of Object.entries(value)) {
          assert(!["inventory_item_id", "quantity", "status", "notes", "collection_id", "offers", "interests", "transactions", "custody", "handoff", "storage_key"].includes(key), `Public JSON leaked ${key}`);
          walk(child);
        }
      };
      walk(body);
      assert(!JSON.stringify(body).includes("PRIVATE"));
    };
    for (let i = 0; i < 2; i++) {
      const response = await harness.as(null).get(`/api/listings/${listings[i]}`).expect(200);
      assertPublic(response.body);
      assert.equal(response.body.id, listings[i]);
      assert.equal(response.body.seller_user_id, users[i]!.id);
      await harness.as(null).get(`/api/listings/${listings[i]}/trade-context`).expect(401);
    }
    const list = await harness.as(null).get("/api/listings").expect(200);
    for (const id of listings) assertPublic(list.body.find((l: any) => l.id === id));
    assert.notEqual(`/listings/${listings[0]}`, `/listings/${listings[1]}`);
    console.log(JSON.stringify({ listingA: `/listings/${listings[0]}`, listingB: `/listings/${listings[1]}`, samePrinting: firstItem.printing_id }));
    const aggregatePath = `/api/listings/public/users/${owner.deckdealUserId}?page=1&pageSize=48&gameSlug=mtg`;
    const aggregate = await harness.as(null).get(aggregatePath).expect(200);
    assert(aggregate.body.items.every((item: any) => item.seller_user_id === owner.deckdealUserId && item.game_id === firstItem.game_id));
    assertPublic(aggregate.body.items.find((item: any) => item.id === listings[0]));
    assert(!aggregate.body.items.some((item: any) => item.id === listings[1]));
    assert(!JSON.stringify(aggregate.body).includes('inventory_item_id'));
    for (const item of aggregate.body.items) { assert(!('id' in item.inventory_item)); assert(!('quantity' in item.inventory_item)); assert(!('status' in item.inventory_item)); }
    const one = await harness.as(null).get(`/api/listings/public/users/${owner.deckdealUserId}?pageSize=1&gameSlug=mtg`).expect(200);
    assert.equal(one.body.items.length, 1);
    assert.equal(one.body.pagination.total_count, aggregate.body.pagination.total_count);
    await harness.as(null).get(`/api/listings/public/users/${randomUUID()}`).expect(404);
    const tradeable = await harness.as(null).get(`/api/discovery/collections/${collection.id}?page=1&pageSize=24`).expect(200);
    assert.equal(tradeable.body.items.find((i: any) => i.id === firstItem.id).listing.id, listings[0]);
    const cardListings = await harness.as(null).get(`/api/catalog/cards/${balmor.id}/listings?printing=${firstItem.printing_id}&pageSize=24`).expect(200);
    for (const id of listings) assert(cardListings.body.items.some((l: any) => l.id === id));
    await harness.as(null).get(`/api/listings/users/${owner.deckdealUserId}/${listings[0]}`).expect(401);
    await harness.as(other).get(`/api/listings/users/${owner.deckdealUserId}/${listings[0]}`).expect(403);
    await harness.as(other).get(`/api/listings/users/${other.deckdealUserId}/${listings[0]}`).expect(404);
    await harness.as(other).patch(`/api/listings/users/${owner.deckdealUserId}/${listings[0]}/status`).send({ status: "paused" }).expect(403);
    await harness.as(other).patch(`/api/listings/users/${other.deckdealUserId}/${listings[0]}/status`).send({ status: "paused" }).expect(404);
    const paused = await harness.as(owner).patch(`/api/listings/users/${owner.deckdealUserId}/${listings[0]}/status`).send({ status: "paused" }).expect(200);
    assert.equal(paused.body.inventory_item_id, firstItem.id);
    assert.equal(paused.body.status, "paused");
    // Existing offer participants retain their authorized historical context.
    await db.listing_offers.create({ data: { listing_id: listings[0]!, game_id: firstItem.game_id, offerer_user_id: other.deckdealUserId!, status: "withdrawn" } });
    for (const status of ["paused", "closed", "sold", "traded", "removed"]) {
      await db.listings.update({ where: { id: listings[0]! }, data: { status } });
      await harness.as(null).get(`/api/listings/${listings[0]}`).expect(404);
      const staleAggregate = await harness.as(null).get(aggregatePath).expect(200);
      assert(!staleAggregate.body.items.some((item: any) => item.id === listings[0]));
      const account = await harness.as(owner).get(`/api/listings/users/${owner.deckdealUserId}/${listings[0]}`).expect(200);
      assert.equal(account.body.status, status);
      await harness.as(other).get(`/api/listings/users/${other.deckdealUserId}/${listings[0]}`).expect(200);
      const history = await harness.as(owner).get(`/api/me/inventory/${firstItem.id}/activity`).expect(200);
      assert(history.body.listings.some((l: any) => l.id === listings[0] && l.status === status));
      await harness.as(other).get(`/api/me/inventory/${firstItem.id}/activity`).expect(404);
    }
    await harness.as(null).get(`/api/listings/${randomUUID()}`).expect(404);
    const staleCollection = await harness.as(null).get(`/api/discovery/collections/${collection.id}?page=1&pageSize=24`).expect(200);
    assert(!staleCollection.body.items.find((i: any) => i.id === firstItem.id).listing);
    const staleCardListings = await harness.as(null).get(`/api/catalog/cards/${balmor.id}/listings?printing=${firstItem.printing_id}&pageSize=24`).expect(200);
    assert(!staleCardListings.body.items.some((l: any) => l.id === listings[0]));
    await db.inventory_items.update({ where: { id: secondItem.id }, data: { status: "in_trade" } });
    await harness.as(null).get(`/api/listings/${listings[1]}`).expect(404);
    console.log("Public DTO, exact Listing identity, stale links, owner history, and mutation authorization passed.");
  } finally {
    await db.listings.deleteMany({ where: { id: { in: listings } } });
    await db.inventory_items.deleteMany({ where: { id: { in: inventories } } });
    await db.collections.deleteMany({ where: { id: { in: collections } } });
    await harness.close();
    await db.$disconnect();
  }
}
void main().catch(error => { console.error(error); process.exitCode = 1; });
