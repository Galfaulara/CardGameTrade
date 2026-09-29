import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";

async function main() {
  const value = process.env.DATABASE_URL;
  assert(value, "Explicit disposable DATABASE_URL required");
  const url = new URL(value);
  assert(["localhost", "127.0.0.1"].includes(url.hostname));
  assert.equal(url.port, "5433");
  assert.equal(url.pathname, "/deckdeal_share_printing_test");
  assert(!value.toLowerCase().includes("supabase"));
  const { createDbClient } = await import("@repo/db");
  const { createAuthenticatedHarness, activePrincipal } =
    await import("./support/authenticated-app-harness");
  const db = createDbClient(value);
  await db.$connect();
  assert.equal(
    (await db.$queryRaw<any[]>`SELECT current_database()`)[0].current_database,
    "deckdeal_share_printing_test",
  );
  const harness = await createAuthenticatedHarness();
  const collections: string[] = [],
    wishlists: string[] = [],
    inventories: string[] = [],
    listings: string[] = [];
  try {
    const users = await db.user_profiles.findMany({
      where: { status: "active" },
      take: 2,
      orderBy: { id: "asc" },
    });
    const owner = activePrincipal(users[0]!.id),
      other = activePrincipal(users[1]!.id);
    const game = await db.games.findUniqueOrThrow({ where: { slug: "mtg" } });
    const printing = await db.card_printings.findUniqueOrThrow({
      where: { id: "0918afe9-7e88-4001-8930-742c488d8b9c" },
      include: { printing_finishes: true },
    });
    for (const visibility of ["private", "unlisted", "public"]) {
      const c = await harness
        .as(owner)
        .post("/api/me/collections")
        .send({
          gameSlug: game.slug,
          name: `Share ${visibility} ${randomUUID()}`,
          visibility,
        })
        .expect(201);
      collections.push(c.body.id);
      const w = await harness
        .as(owner)
        .post("/api/me/wishlists")
        .send({
          gameSlug: game.slug,
          name: `Share ${visibility} ${randomUUID()}`,
          visibility,
        })
        .expect(201);
      wishlists.push(w.body.id);
      await db.wishlist_items.create({
        data: {
          wishlist_id: w.body.id,
          game_id: game.id,
          canonical_card_id: printing.canonical_card_id,
          quantity_desired: 1,
          status: "active",
        },
      });
      const detail = await harness
        .as(null)
        .get(`/api/discovery/collections/${c.body.id}`)
        .expect(visibility === "private" ? 404 : 200);
      if (visibility !== "private")
        assert.equal(detail.body.collection.id, c.body.id);
      const wants = await harness
        .as(null)
        .get(`/api/discovery/wishlists/${w.body.id}`)
        .expect(visibility === "private" ? 404 : 200);
      if (visibility !== "private") {
        assert.equal(wants.body.wishlist.id, w.body.id);
        assert.equal(wants.body.items.length, 1);
        assert(!JSON.stringify(wants.body).includes('"notes"'));
      }
      const item = await db.inventory_items.create({
        data: {
          game_id: game.id,
          owner_user_id: owner.deckdealUserId!,
          collection_id: c.body.id,
          printing_id: printing.id,
          finish: printing.printing_finishes[0]!.finish,
          condition: "near_mint",
          language_code: "en",
          quantity: 1,
          status: "available",
        },
      });
      inventories.push(item.id);
      const own = await harness
        .as(owner)
        .get(`/api/me/inventory/${item.id}`)
        .expect(200);
      assert.equal(
        own.body.public_share_path,
        visibility === "private" ? null : `/collections/${c.body.id}`,
      );
    }
    const profileItems = async (kind: string) => {
      const items: any[] = [];
      for (let page = 1; ; page++) {
        const response = await harness
          .as(null)
          .get(
            `/api/discovery/users/${owner.deckdealUserId}/${kind}?page=${page}&pageSize=6`,
          )
          .expect(200);
        items.push(...response.body.items);
        if (!response.body.pagination.has_more) return items;
      }
    };
    const assertDiscovery = async () => {
      const c = await profileItems("collections");
      const w = await profileItems("wishlists");
      for (let i = 0; i < 3; i++) {
        assert.equal(
          c.some((x: any) => x.id === collections[i]),
          i === 2,
        );
        assert.equal(
          w.some((x: any) => x.id === wishlists[i]),
          i === 2,
        );
      }
      const publicWants = await harness
        .as(null)
        .get("/api/wishlists/public/items?gameSlug=mtg")
        .expect(200);
      const json = JSON.stringify(publicWants.body);
      assert(!json.includes(wishlists[0]!));
      assert(!json.includes(wishlists[1]!));
      const discovery = await harness
        .as(null)
        .get("/api/discovery/collections?limit=12")
        .expect(200);
      assert(!JSON.stringify(discovery.body).includes(collections[0]!));
      assert(!JSON.stringify(discovery.body).includes(collections[1]!));
    };
    await assertDiscovery();
    for (const [kind, id] of [
      ["collections", collections[0]],
      ["wishlists", wishlists[0]],
    ] as const) {
      const path = `/api/me/${kind}/${id}?gameSlug=mtg`;
      await harness
        .as(null)
        .patch(path)
        .send({ visibility: "unlisted" })
        .expect(401);
      const forbidden = await harness
        .as(other)
        .patch(path)
        .send({ visibility: "unlisted" });
      assert([403, 404].includes(forbidden.status));
      const unchanged =
        kind === "collections"
          ? await db.collections.findUniqueOrThrow({ where: { id } })
          : await db.wishlists.findUniqueOrThrow({ where: { id } });
      assert.equal(unchanged.visibility, "private");
      const updated = await harness
        .as(owner)
        .patch(path)
        .send({ visibility: "unlisted" })
        .expect(200);
      assert.equal(updated.body.visibility, "unlisted");
      await harness.as(null).get(`/api/discovery/${kind}/${id}`).expect(200);
    }
    await assertDiscovery();
    const listed = await harness
      .as(owner)
      .post(`/api/listings/users/${owner.deckdealUserId}`)
      .send({
        inventoryItemId: inventories[0],
        acceptsTrade: true,
        acceptsCash: false,
        preferredStoreId: null,
      })
      .expect(201);
    listings.push(listed.body.id);
    let own = await harness
      .as(owner)
      .get(`/api/me/inventory/${inventories[0]}`)
      .expect(200);
    assert.equal(own.body.public_share_path, `/listings/${listings[0]}`);
    const managed = await harness
      .as(owner)
      .get(`/api/listings/users/${owner.deckdealUserId}`)
      .expect(200);
    assert.equal(
      managed.body.find((x: any) => x.id === listings[0]).public_share_path,
      `/listings/${listings[0]}`,
    );
    const publicListing = await harness
      .as(null)
      .get(`/api/listings/${listings[0]}`)
      .expect(200);
    assert(!JSON.stringify(publicListing.body).includes("inventory_item_id"));
    assert(!("id" in publicListing.body.inventory_item));
    for (const status of ["paused", "closed", "sold", "traded", "removed"]) {
      await db.listings.update({
        where: { id: listings[0]! },
        data: { status },
      });
      await harness.as(null).get(`/api/listings/${listings[0]}`).expect(404);
      own = await harness
        .as(owner)
        .get(`/api/me/inventory/${inventories[0]}`)
        .expect(200);
      assert.equal(
        own.body.public_share_path,
        `/collections/${collections[0]}`,
      );
    }
    await harness
      .as(owner)
      .patch(`/api/me/collections/${collections[0]}`)
      .send({ visibility: "private" })
      .expect(200);
    own = await harness
      .as(owner)
      .get(`/api/me/inventory/${inventories[0]}`)
      .expect(200);
    assert.equal(own.body.public_share_path, null);
    for (const id of inventories) {
      const response = await harness
        .as(owner)
        .get(`/api/me/inventory/${id}`)
        .expect(200);
      assert(!response.body.public_share_path?.includes("/account/"));
      assert(!response.body.public_share_path?.includes(id));
    }
    await db.wishlists.update({
      where: { id: wishlists[1]! },
      data: { status: "archived" },
    });
    await harness
      .as(null)
      .get(`/api/discovery/wishlists/${wishlists[1]}`)
      .expect(404);
    await harness
      .as(null)
      .get(`/api/discovery/wishlists/${randomUUID()}`)
      .expect(404);
    console.log(
      JSON.stringify({
        result: "PASS",
        collections,
        wishlists,
        visibility:
          "private denied; unlisted exact access only; public discovered",
        ownership: "foreign mutations rejected",
        inventory: "listing > shareable collection > disabled",
        staleListings: "all inactive states denied",
      }),
    );
  } finally {
    await db.listings.deleteMany({ where: { id: { in: listings } } });
    await db.inventory_items.deleteMany({ where: { id: { in: inventories } } });
    await db.wishlist_items.deleteMany({
      where: { wishlist_id: { in: wishlists } },
    });
    await db.wishlists.deleteMany({ where: { id: { in: wishlists } } });
    await db.collections.deleteMany({ where: { id: { in: collections } } });
    await harness.close();
    await db.$disconnect();
  }
}
void main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
