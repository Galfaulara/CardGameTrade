"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runNonPaymentLifecycleRegression = runNonPaymentLifecycleRegression;
require("dotenv/config");
const node_crypto_1 = require("node:crypto");
const db_1 = require("@repo/db");
const authenticated_app_harness_1 = require("./support/authenticated-app-harness");
const db = (0, db_1.createDbClient)(process.env.DATABASE_URL);
const assert = (value, message) => { if (!value)
    throw new Error(message); };
const created = { collections: [], inventories: [], listings: [], interests: [], offers: [], transactions: [] };
const BASELINE_TABLES = ["collections", "inventory_items", "listings", "listing_offers", "offer_items", "inventory_item_interests", "transactions", "transaction_items", "store_trade_handoffs", "transaction_item_custody"];
async function tableCounts() {
    const counts = {};
    for (const table of BASELINE_TABLES)
        counts[table] = await db[table].count();
    return counts;
}
async function cleanup() {
    if (created.transactions.length)
        await db.transactions.deleteMany({ where: { id: { in: created.transactions } } });
    if (created.interests.length)
        await db.inventory_item_interests.deleteMany({ where: { id: { in: created.interests } } });
    if (created.offers.length)
        await db.listing_offers.deleteMany({ where: { id: { in: created.offers } } });
    if (created.listings.length)
        await db.listings.deleteMany({ where: { id: { in: created.listings } } });
    if (created.inventories.length)
        await db.inventory_items.deleteMany({ where: { id: { in: created.inventories } } });
    if (created.collections.length)
        await db.collections.deleteMany({ where: { id: { in: created.collections } } });
}
async function runNonPaymentLifecycleRegression() {
    await db.$connect();
    const baseline = await tableCounts();
    const harness = await (0, authenticated_app_harness_1.createAuthenticatedHarness)();
    const user1 = (0, authenticated_app_harness_1.activePrincipal)(authenticated_app_harness_1.USER_1_ID);
    const user2 = (0, authenticated_app_harness_1.activePrincipal)(authenticated_app_harness_1.USER_2_ID);
    try {
        const staff = await db.store_staff.findFirst({
            where: { status: "active", stores: { name: "DeckDeal Test LGS", status: "active", verification_status: "verified", trade_mediation_enabled: true } },
            select: { user_id: true, store_id: true, role: true },
        });
        assert(staff, "Active DeckDeal Test LGS staff fixture is required.");
        const staffPrincipal = (0, authenticated_app_harness_1.activePrincipal)(staff.user_id);
        const printingFinish = await db.printing_finishes.findFirst({
            where: { card_printings: { is_digital: false } },
            select: { printing_id: true, finish: true },
        });
        assert(printingFinish, "A physical printing finish is required.");
        const marker = `Step 3B ${(0, node_crypto_1.randomUUID)()}`;
        for (const [actor, ownerId, suffix] of [[user1, authenticated_app_harness_1.USER_1_ID, "seller"], [user2, authenticated_app_harness_1.USER_2_ID, "offerer"]]) {
            const collectionResponse = await harness.as(actor).post(`/api/inventory/users/${ownerId}/collections`)
                .send({ name: `${marker} ${suffix}`, description: marker, visibility: "public" }).expect(201);
            created.collections.push(collectionResponse.body.id);
        }
        const createInventory = async (actor, ownerId, collectionId, suffix) => {
            const response = await harness.as(actor).post(`/api/inventory/users/${ownerId}/items`).send({
                printingId: printingFinish.printing_id,
                finish: printingFinish.finish,
                collectionId,
                condition: "near_mint",
                quantity: 1,
                isSigned: false,
                isAltered: false,
                isGraded: false,
                acquiredPrice: 17.25,
                notes: `${marker} private ${suffix}`,
            }).expect(201);
            created.inventories.push(response.body.id);
            return response.body.id;
        };
        const sellerCollectionId = created.collections[0];
        const offererCollectionId = created.collections[1];
        assert(sellerCollectionId && offererCollectionId, "Lifecycle regression must create both collections before inventory.");
        const sellerInventory = await createInventory(user1, authenticated_app_harness_1.USER_1_ID, sellerCollectionId, "seller");
        const offererInventory = await createInventory(user2, authenticated_app_harness_1.USER_2_ID, offererCollectionId, "offerer");
        const listingResponse = await harness.as(user1).post(`/api/listings/users/${authenticated_app_harness_1.USER_1_ID}`).send({
            inventoryItemId: sellerInventory, acceptsCash: false, acceptsTrade: true,
            preferredStoreId: staff.store_id, title: marker,
        }).expect(201);
        const listingId = listingResponse.body.id;
        created.listings.push(listingId);
        const interestResponse = await harness.as(user2)
            .post(`/api/inventory-interests/inventory/${sellerInventory}/users/${authenticated_app_harness_1.USER_2_ID}`)
            .send({ interestType: "trade", message: marker }).expect(201);
        const interestId = interestResponse.body.id;
        created.interests.push(interestId);
        const offerResponse = await harness.as(user2)
            .post(`/api/offers/listings/${listingId}/users/${authenticated_app_harness_1.USER_2_ID}/from-interest/${interestId}`)
            .send({ cashAmount: 0, currencyCode: "USD", message: marker, items: [{ inventoryItemId: offererInventory, quantity: 1 }] })
            .expect(201);
        const offerId = offerResponse.body.id;
        created.offers.push(offerId);
        await harness.as(user2).post(`/api/offers/${offerId}/users/${authenticated_app_harness_1.USER_2_ID}/accept`).send({ storeId: staff.store_id }).expect(403);
        const accepted = await harness.as(user1).post(`/api/offers/${offerId}/users/${authenticated_app_harness_1.USER_1_ID}/accept`)
            .send({ storeId: staff.store_id }).expect(201);
        const transactionId = accepted.body.id;
        created.transactions.push(transactionId);
        const transaction = await db.transactions.findUnique({ where: { id: transactionId }, select: { seller_user_id: true, counterparty_user_id: true, status: true } });
        assert(transaction?.seller_user_id === authenticated_app_harness_1.USER_1_ID && transaction.counterparty_user_id === authenticated_app_harness_1.USER_2_ID, "Transaction actors are incorrect.");
        const handoff = await db.store_trade_handoffs.findUnique({ where: { transaction_id: transactionId }, select: { id: true, store_id: true } });
        assert(handoff?.store_id === staff.store_id, "Transaction did not select the expected mediator.");
        const transactionItems = await db.transaction_items.findMany({ where: { transaction_id: transactionId }, orderBy: { created_at: "asc" } });
        assert(transactionItems.length === 2, "Card trade must create two transaction items.");
        const firstTransactionItem = transactionItems[0];
        assert(firstTransactionItem, "Card trade must create a first transaction item.");
        await harness.as(user1).get(`/api/store-handoffs/${handoff.id}`).expect(403);
        await harness.as(user1).patch(`/api/store-handoffs/${handoff.id}/items/${firstTransactionItem.id}/receive/users/${authenticated_app_harness_1.USER_1_ID}`).expect(403);
        for (const item of transactionItems) {
            await harness.as(staffPrincipal).patch(`/api/store-handoffs/${handoff.id}/items/${item.id}/receive/users/${staff.user_id}`).expect(200);
        }
        for (const item of transactionItems) {
            await harness.as(staffPrincipal).patch(`/api/store-handoffs/${handoff.id}/items/${item.id}/verify/users/${staff.user_id}`).expect(200);
        }
        for (const item of transactionItems) {
            await harness.as(staffPrincipal).patch(`/api/store-handoffs/${handoff.id}/items/${item.id}/release/users/${staff.user_id}`).expect(200);
        }
        const releasedItems = await db.transaction_items.findMany({ where: { transaction_id: transactionId }, orderBy: { created_at: "asc" } });
        for (const item of releasedItems)
            assert(item.result_inventory_item_id, "Released transaction item lacks result inventory.");
        const resultIds = releasedItems.map((item) => item.result_inventory_item_id);
        created.inventories.push(...resultIds);
        const sources = await db.inventory_items.findMany({ where: { id: { in: [sellerInventory, offererInventory] } } });
        assert(sources.every((item) => item.status === "removed" && item.collection_id === null), "Sources were not preserved as removed history with cleared collections.");
        const results = await db.inventory_items.findMany({ where: { id: { in: resultIds } } });
        assert(results.every((item) => item.status === "available" && item.collection_id === null), "Recipient result Inventory is not available/uncollected.");
        assert(results.every((item) => item.notes === null && item.acquired_price === null), "Private source metadata was copied to recipient Inventory.");
        const user2Received = releasedItems.find((item) => item.to_user_id === authenticated_app_harness_1.USER_2_ID)?.result_inventory_item_id;
        const user1Received = releasedItems.find((item) => item.to_user_id === authenticated_app_harness_1.USER_1_ID)?.result_inventory_item_id;
        assert(user2Received && user1Received, "First-generation recipient inventory could not be resolved.");
        await harness.as(user2).patch(`/api/inventory/users/${authenticated_app_harness_1.USER_2_ID}/items/${user2Received}/collection`)
            .send({ collectionId: created.collections[1] }).expect(200);
        await harness.as(user1).patch(`/api/inventory/users/${authenticated_app_harness_1.USER_1_ID}/items/${user1Received}/collection`)
            .send({ collectionId: created.collections[0] }).expect(200);
        const secondListingResponse = await harness.as(user2).post(`/api/listings/users/${authenticated_app_harness_1.USER_2_ID}`).send({
            inventoryItemId: user2Received, acceptsCash: false, acceptsTrade: true, preferredStoreId: staff.store_id, title: `${marker} generation 2`,
        }).expect(201);
        const secondListingId = secondListingResponse.body.id;
        created.listings.push(secondListingId);
        const secondInterestResponse = await harness.as(user1)
            .post(`/api/inventory-interests/inventory/${user2Received}/users/${authenticated_app_harness_1.USER_1_ID}`)
            .send({ interestType: "trade", message: `${marker} generation 2` }).expect(201);
        const secondInterestId = secondInterestResponse.body.id;
        created.interests.push(secondInterestId);
        const secondOfferResponse = await harness.as(user1)
            .post(`/api/offers/listings/${secondListingId}/users/${authenticated_app_harness_1.USER_1_ID}/from-interest/${secondInterestId}`)
            .send({ cashAmount: 0, currencyCode: "USD", items: [{ inventoryItemId: user1Received, quantity: 1 }] }).expect(201);
        const secondOfferId = secondOfferResponse.body.id;
        created.offers.push(secondOfferId);
        const secondAccepted = await harness.as(user2).post(`/api/offers/${secondOfferId}/users/${authenticated_app_harness_1.USER_2_ID}/accept`)
            .send({ storeId: staff.store_id }).expect(201);
        const secondTransactionId = secondAccepted.body.id;
        created.transactions.push(secondTransactionId);
        const secondHandoff = await db.store_trade_handoffs.findUnique({ where: { transaction_id: secondTransactionId }, select: { id: true } });
        assert(secondHandoff, "Second-generation handoff was not created.");
        const secondItems = await db.transaction_items.findMany({ where: { transaction_id: secondTransactionId } });
        for (const item of secondItems)
            await harness.as(staffPrincipal).patch(`/api/store-handoffs/${secondHandoff.id}/items/${item.id}/receive/users/${staff.user_id}`).expect(200);
        for (const item of secondItems)
            await harness.as(staffPrincipal).patch(`/api/store-handoffs/${secondHandoff.id}/items/${item.id}/verify/users/${staff.user_id}`).expect(200);
        for (const item of secondItems)
            await harness.as(staffPrincipal).patch(`/api/store-handoffs/${secondHandoff.id}/items/${item.id}/release/users/${staff.user_id}`).expect(200);
        const secondReleased = await db.transaction_items.findMany({ where: { transaction_id: secondTransactionId } });
        const secondResultIds = secondReleased.map((item) => item.result_inventory_item_id).filter((id) => Boolean(id));
        assert(secondResultIds.length === 2, "Second-generation ownership results were not created.");
        created.inventories.push(...secondResultIds);
        const firstGenerationNowHistorical = await db.inventory_items.findMany({ where: { id: { in: [user1Received, user2Received] } } });
        assert(firstGenerationNowHistorical.every((item) => item.status === "removed"), "First-generation chain was not preserved as history.");
        console.log(`Non-payment lifecycle regression passed (two generations, staff ${staff.user_id}, store ${staff.store_id}).`);
    }
    finally {
        await cleanup();
        const restored = await tableCounts();
        assert(JSON.stringify(restored) === JSON.stringify(baseline), `Lifecycle cleanup did not restore baseline counts: ${JSON.stringify({ baseline, restored })}`);
        await harness.close();
        await db.$disconnect();
    }
}
runNonPaymentLifecycleRegression().catch((error) => { console.error(error); process.exitCode = 1; });
