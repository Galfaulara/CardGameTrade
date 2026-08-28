"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAuthenticatedAuthorizationRegression = runAuthenticatedAuthorizationRegression;
require("dotenv/config");
const node_crypto_1 = require("node:crypto");
const db_1 = require("@repo/db");
const authenticated_app_harness_1 = require("./support/authenticated-app-harness");
const db = (0, db_1.createDbClient)(process.env.DATABASE_URL);
const assert = (value, message) => { if (!value)
    throw new Error(message); };
const TABLES = ["inventory_items", "collections", "listings", "listing_offers", "inventory_item_interests", "wishlists", "wishlist_items", "wishlist_offers", "transactions", "transaction_items", "store_trade_handoffs", "transaction_item_custody"];
async function snapshot() {
    const state = {};
    for (const table of TABLES) {
        const rows = await db[table].findMany({ orderBy: { id: "asc" } });
        state[table] = rows.map((row) => JSON.stringify(row));
    }
    return JSON.stringify(state);
}
async function runAuthenticatedAuthorizationRegression() {
    await db.$connect();
    const harness = await (0, authenticated_app_harness_1.createAuthenticatedHarness)();
    const user1 = (0, authenticated_app_harness_1.activePrincipal)(authenticated_app_harness_1.USER_1_ID);
    const user2 = (0, authenticated_app_harness_1.activePrincipal)(authenticated_app_harness_1.USER_2_ID);
    const marker = `Step 3B auth ${(0, node_crypto_1.randomUUID)()}`;
    const cleanup = { collections: [], inventories: [], listings: [], interests: [], offers: [], wishlists: [], wishlistOffers: [] };
    try {
        const staff = await db.store_staff.findFirst({
            where: { status: "active", stores: { name: "DeckDeal Test LGS", status: "active", verification_status: "verified", trade_mediation_enabled: true } },
            select: { user_id: true, store_id: true, role: true, status: true },
        });
        assert(staff, "Actual active DeckDeal Test LGS staff membership is required.");
        const staffPrincipal = (0, authenticated_app_harness_1.activePrincipal)(staff.user_id);
        const physical = await db.printing_finishes.findFirst({
            where: { card_printings: { is_digital: false } },
            select: { printing_id: true, finish: true, card_printings: { select: { canonical_card_id: true } } },
        });
        assert(physical, "Physical printing fixture is required.");
        await harness.as(null).get(`/api/inventory/users/${authenticated_app_harness_1.USER_1_ID}/items`).expect(401);
        await harness.as(null).get("/api/auth/me").expect(401);
        const unmapped = { provider: "clerk", providerSubject: "test-unmapped", deckdealUserId: null, sessionId: "test", accountStatus: null };
        const unmappedMe = await harness.as(unmapped).get("/api/auth/me").expect(200);
        assert(unmappedMe.body.authenticated === true && unmappedMe.body.onboarded === false, "Unmapped /auth/me contract failed.");
        await harness.as(unmapped).get(`/api/inventory/users/${authenticated_app_harness_1.USER_1_ID}/items`).expect(403);
        const disabled = { ...(0, authenticated_app_harness_1.activePrincipal)(authenticated_app_harness_1.USER_1_ID), accountStatus: "suspended" };
        const disabledMe = await harness.as(disabled).get("/api/auth/me").expect(200);
        assert(disabledMe.body.account_status === "disabled", "Disabled /auth/me contract failed.");
        await harness.as(disabled).get(`/api/inventory/users/${authenticated_app_harness_1.USER_1_ID}/items`).expect(403);
        const activeMe = await harness.as(user1).get("/api/auth/me").expect(200);
        assert(activeMe.body.authenticated === true && activeMe.body.onboarded === true && activeMe.body.account_status === "active", "Active /auth/me contract failed.");
        await harness.as(user1).get(`/api/inventory/users/${authenticated_app_harness_1.USER_1_ID}/items`).expect(200);
        await harness.as(user1).get(`/api/inventory/users/${authenticated_app_harness_1.USER_2_ID}/items`).expect(403);
        await harness.as(user2).get(`/api/inventory/users/${authenticated_app_harness_1.USER_1_ID}/items`).expect(403);
        const collection1 = await harness.as(user1).post(`/api/inventory/users/${authenticated_app_harness_1.USER_1_ID}/collections`)
            .send({ name: `${marker} one`, visibility: "public" }).expect(201);
        cleanup.collections.push(collection1.body.id);
        const collection2 = await harness.as(user2).post(`/api/inventory/users/${authenticated_app_harness_1.USER_2_ID}/collections`)
            .send({ name: `${marker} two`, visibility: "public" }).expect(201);
        cleanup.collections.push(collection2.body.id);
        await harness.as(user1).get(`/api/inventory/users/${authenticated_app_harness_1.USER_1_ID}/collections`).expect(200);
        await harness.as(user2).get(`/api/inventory/users/${authenticated_app_harness_1.USER_1_ID}/collections`).expect(403);
        await harness.as(user2).post(`/api/inventory/users/${authenticated_app_harness_1.USER_1_ID}/collections`).send({ name: `${marker} spoof`, visibility: "private" }).expect(403);
        const inventoryBody = (collectionId, note) => ({ printingId: physical.printing_id, finish: physical.finish, collectionId, condition: "near_mint", quantity: 1, isSigned: false, isAltered: false, isGraded: false, notes: note });
        const inventory1 = await harness.as(user1).post(`/api/inventory/users/${authenticated_app_harness_1.USER_1_ID}/items`).send(inventoryBody(collection1.body.id, marker)).expect(201);
        cleanup.inventories.push(inventory1.body.id);
        const inventory2 = await harness.as(user2).post(`/api/inventory/users/${authenticated_app_harness_1.USER_2_ID}/items`).send(inventoryBody(collection2.body.id, marker)).expect(201);
        cleanup.inventories.push(inventory2.body.id);
        const inventory2b = await harness.as(user2).post(`/api/inventory/users/${authenticated_app_harness_1.USER_2_ID}/items`).send(inventoryBody(collection2.body.id, `${marker} b`)).expect(201);
        cleanup.inventories.push(inventory2b.body.id);
        const inventory1b = await harness.as(user1).post(`/api/inventory/users/${authenticated_app_harness_1.USER_1_ID}/items`).send(inventoryBody(collection1.body.id, `${marker} b`)).expect(201);
        cleanup.inventories.push(inventory1b.body.id);
        await harness.as(user1).patch(`/api/inventory/users/${authenticated_app_harness_1.USER_1_ID}/items/${inventory1.body.id}`).send({ notes: `${marker} updated` }).expect(200);
        await harness.as(user2).patch(`/api/inventory/users/${authenticated_app_harness_1.USER_1_ID}/items/${inventory1.body.id}`).send({ notes: "forbidden" }).expect(403);
        await harness.as(user1).post(`/api/inventory/users/${authenticated_app_harness_1.USER_1_ID}/items`).send({ ...inventoryBody(collection1.body.id, marker), owner_user_id: authenticated_app_harness_1.USER_2_ID }).expect(400);
        const listing = await harness.as(user1).post(`/api/listings/users/${authenticated_app_harness_1.USER_1_ID}`).send({ inventoryItemId: inventory1.body.id, acceptsCash: false, acceptsTrade: true, preferredStoreId: staff.store_id, title: marker }).expect(201);
        cleanup.listings.push(listing.body.id);
        await harness.as(user1).patch(`/api/listings/users/${authenticated_app_harness_1.USER_1_ID}/${listing.body.id}`).send({ description: `${marker} managed` }).expect(200);
        await harness.as(user2).patch(`/api/listings/users/${authenticated_app_harness_1.USER_1_ID}/${listing.body.id}`).send({ description: "forbidden" }).expect(403);
        await harness.as(user1).post(`/api/listings/users/${authenticated_app_harness_1.USER_1_ID}`).send({ inventoryItemId: inventory2.body.id, acceptsCash: false, acceptsTrade: true, seller_user_id: authenticated_app_harness_1.USER_2_ID }).expect(400);
        const interest = await harness.as(user2).post(`/api/inventory-interests/inventory/${inventory1.body.id}/users/${authenticated_app_harness_1.USER_2_ID}`).send({ interestType: "trade", message: marker }).expect(201);
        cleanup.interests.push(interest.body.id);
        await harness.as(user2).patch(`/api/inventory-interests/${interest.body.id}/users/${authenticated_app_harness_1.USER_2_ID}`).send({ message: `${marker} updated` }).expect(200);
        await harness.as(user1).patch(`/api/inventory-interests/${interest.body.id}/users/${authenticated_app_harness_1.USER_2_ID}`).send({ message: "forbidden" }).expect(403);
        const makeOffer = async (inventoryId) => {
            const response = await harness.as(user2).post(`/api/offers/listings/${listing.body.id}/users/${authenticated_app_harness_1.USER_2_ID}`)
                .send({ cashAmount: 0, currencyCode: "USD", items: [{ inventoryItemId: inventoryId, quantity: 1 }], message: marker }).expect(201);
            cleanup.offers.push(response.body.id);
            return response.body.id;
        };
        const withdrawOffer = await makeOffer(inventory2.body.id);
        await harness.as(staffPrincipal).patch(`/api/offers/${withdrawOffer}/users/${staff.user_id}/withdraw`).expect(404);
        await harness.as(user2).patch(`/api/offers/${withdrawOffer}/users/${authenticated_app_harness_1.USER_2_ID}/withdraw`).expect(200);
        const rejectOffer = await makeOffer(inventory2.body.id);
        await harness.as(user1).get(`/api/offers/users/${authenticated_app_harness_1.USER_1_ID}/received`).expect(200);
        await harness.as(user2).get(`/api/offers/users/${authenticated_app_harness_1.USER_1_ID}/received`).expect(403);
        await harness.as(user2).patch(`/api/offers/${rejectOffer}/users/${authenticated_app_harness_1.USER_2_ID}/reject`).expect(404);
        await harness.as(user1).patch(`/api/offers/${rejectOffer}/users/${authenticated_app_harness_1.USER_1_ID}/reject`).expect(200);
        const wishlist = await harness.as(user1).post(`/api/wishlists/users/${authenticated_app_harness_1.USER_1_ID}`).send({ name: marker, visibility: "public", preferredStoreId: staff.store_id }).expect(201);
        cleanup.wishlists.push(wishlist.body.id);
        await harness.as(user1).get(`/api/wishlists/${wishlist.body.id}/users/${authenticated_app_harness_1.USER_1_ID}`).expect(200);
        await harness.as(user2).get(`/api/wishlists/${wishlist.body.id}/users/${authenticated_app_harness_1.USER_1_ID}`).expect(403);
        const wishlistItem = await harness.as(user1).post(`/api/wishlists/${wishlist.body.id}/users/${authenticated_app_harness_1.USER_1_ID}/items`).send({
            printingId: physical.printing_id, quantityDesired: 1, willingToPayCash: false, willingToTradeCards: true,
        }).expect(201);
        const makeWishlistOffer = async (offeredInventoryId) => {
            const response = await harness.as(user2).post(`/api/wishlists/items/${wishlistItem.body.id}/offers/users/${authenticated_app_harness_1.USER_2_ID}`).send({
                items: [{ inventoryItemId: offeredInventoryId, quantity: 1 }], requestsCash: false, requestsTrade: true,
                requestedItems: [{ requestedInventoryItemId: inventory1b.body.id, quantity: 1 }], message: marker,
            }).expect(201);
            cleanup.wishlistOffers.push(response.body.id);
            return response.body.id;
        };
        const withdrawnWishlistOffer = await makeWishlistOffer(inventory2b.body.id);
        await harness.as(user2).get(`/api/wishlists/offers/users/${authenticated_app_harness_1.USER_2_ID}/sent`).expect(200);
        await harness.as(user1).get(`/api/wishlists/items/${wishlistItem.body.id}/offers/users/${authenticated_app_harness_1.USER_1_ID}/received`).expect(200);
        await harness.as(staffPrincipal).patch(`/api/wishlists/offers/${withdrawnWishlistOffer}/users/${staff.user_id}/withdraw`).expect(404);
        await harness.as(user2).patch(`/api/wishlists/offers/${withdrawnWishlistOffer}/users/${authenticated_app_harness_1.USER_2_ID}/withdraw`).expect(200);
        const rejectedWishlistOffer = await makeWishlistOffer(inventory2b.body.id);
        await harness.as(user2).patch(`/api/wishlists/offers/${rejectedWishlistOffer}/users/${authenticated_app_harness_1.USER_2_ID}/reject`).expect(404);
        await harness.as(user1).patch(`/api/wishlists/offers/${rejectedWishlistOffer}/users/${authenticated_app_harness_1.USER_1_ID}/reject`).expect(200);
        const participantTransaction = await db.transactions.findFirst({ where: { OR: [{ seller_user_id: authenticated_app_harness_1.USER_1_ID }, { counterparty_user_id: authenticated_app_harness_1.USER_1_ID }] }, select: { id: true } });
        assert(participantTransaction, "An existing User1 transaction fixture is required.");
        await harness.as(user1).get(`/api/transactions/${participantTransaction.id}/users/${authenticated_app_harness_1.USER_1_ID}`).expect(200);
        await harness.as(staffPrincipal).get(`/api/transactions/${participantTransaction.id}/users/${staff.user_id}`).expect(404);
        const staffHandoff = await db.store_trade_handoffs.findFirst({ where: { store_id: staff.store_id }, select: { id: true } });
        assert(staffHandoff, "An existing DeckDeal Test LGS handoff is required.");
        const staffHandoffList = await harness.as(staffPrincipal).get(`/api/store-handoffs/stores/${staff.store_id}`).expect(200);
        assert(staffHandoffList.body.some((handoff) => handoff.id === staffHandoff.id), "Store-scoped handoff read omitted an authorized handoff.");
        await harness.as(staffPrincipal).get(`/api/store-handoffs/${staffHandoff.id}`).expect(200);
        await harness.as(user1).get(`/api/store-handoffs/stores/${staff.store_id}`).expect(403);
        await harness.as(user1).get(`/api/store-handoffs/${staffHandoff.id}`).expect(403);
        const beforeDenied = await snapshot();
        await harness.as(user2).patch(`/api/inventory/users/${authenticated_app_harness_1.USER_1_ID}/items/${inventory1.body.id}`).send({ notes: "blocked" }).expect(403);
        await harness.as(user1).post(`/api/offers/listings/${listing.body.id}/users/${authenticated_app_harness_1.USER_2_ID}`).send({ cashAmount: 1, currencyCode: "USD", items: [] }).expect(403);
        await harness.as(user1).patch(`/api/store-handoffs/${staffHandoff.id}/items/${(0, node_crypto_1.randomUUID)()}/receive/users/${authenticated_app_harness_1.USER_1_ID}`).expect(403);
        await harness.as(user1).patch(`/api/store-handoffs/${staffHandoff.id}/items/${(0, node_crypto_1.randomUUID)()}/receive`).send({ storeId: staff.store_id, staffUserId: staff.user_id }).expect(403);
        assert(await snapshot() === beforeDenied, "Denied requests changed protected domain state.");
        await harness.as(null).get("/api/catalog/games").expect(200);
        await harness.as(null).get("/api/discovery/feed/collections?limit=1").expect(200);
        await harness.as(null).get(`/api/discovery/users/${authenticated_app_harness_1.USER_1_ID}`).expect(200);
        await harness.as(null).get(`/api/discovery/collections/${collection1.body.id}`).expect(200);
        await harness.as(null).get(`/api/discovery/stores/${staff.store_id}`).expect(200);
        await harness.as(null).get(`/api/catalog/cards/${physical.card_printings.canonical_card_id}`).expect(200);
        await harness.as(null).get(`/api/listings/${listing.body.id}`).expect(200);
        await harness.as(null).get("/api/wishlists/public/items").expect(200);
        console.log(`Authenticated authorization regression passed (User1, User2, staff ${staff.user_id}).`);
    }
    finally {
        if (cleanup.wishlists.length)
            await db.wishlists.deleteMany({ where: { id: { in: cleanup.wishlists } } });
        if (cleanup.interests.length)
            await db.inventory_item_interests.deleteMany({ where: { id: { in: cleanup.interests } } });
        if (cleanup.offers.length)
            await db.listing_offers.deleteMany({ where: { id: { in: cleanup.offers } } });
        if (cleanup.listings.length)
            await db.listings.deleteMany({ where: { id: { in: cleanup.listings } } });
        if (cleanup.inventories.length)
            await db.inventory_items.deleteMany({ where: { id: { in: cleanup.inventories } } });
        if (cleanup.collections.length)
            await db.collections.deleteMany({ where: { id: { in: cleanup.collections } } });
        await harness.close();
        await db.$disconnect();
    }
}
runAuthenticatedAuthorizationRegression().catch((error) => { console.error(error); process.exitCode = 1; });
