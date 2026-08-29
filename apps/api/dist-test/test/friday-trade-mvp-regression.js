"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runFridayTradeMvpRegression = runFridayTradeMvpRegression;
require("dotenv/config");
const node_crypto_1 = require("node:crypto");
const db_1 = require("@repo/db");
const authenticated_app_harness_1 = require("./support/authenticated-app-harness");
const db = (0, db_1.createDbClient)(process.env.DATABASE_URL);
const assert = (value, message) => {
    if (!value)
        throw new Error(message);
};
const BASELINE_TABLES = [
    "collections",
    "inventory_items",
    "inventory_item_photos",
    "listings",
    "listing_offers",
    "offer_items",
    "transactions",
    "transaction_items",
    "store_trade_handoffs",
    "transaction_item_custody",
];
const created = {
    collections: [],
    inventories: [],
    listings: [],
    offers: [],
    transactions: [],
    temporaryStaffMemberships: [],
    temporaryStores: [],
};
async function tableCounts() {
    const counts = {};
    for (const table of BASELINE_TABLES) {
        counts[table] = await db[table].count();
    }
    return counts;
}
const sameCounts = async (before, message) => {
    const after = await tableCounts();
    assert(JSON.stringify(after) === JSON.stringify(before), `${message}: ${JSON.stringify({ before, after })}`);
};
async function cleanup() {
    if (created.transactions.length) {
        await db.transactions.deleteMany({
            where: {
                id: {
                    in: created.transactions,
                },
            },
        });
    }
    if (created.offers.length) {
        await db.listing_offers.deleteMany({
            where: {
                id: {
                    in: created.offers,
                },
            },
        });
    }
    if (created.listings.length) {
        await db.listings.deleteMany({
            where: {
                id: {
                    in: created.listings,
                },
            },
        });
    }
    if (created.inventories.length) {
        await db.inventory_items.deleteMany({
            where: {
                id: {
                    in: created.inventories,
                },
            },
        });
    }
    if (created.collections.length) {
        await db.collections.deleteMany({
            where: { id: { in: created.collections } },
        });
    }
    if (created.temporaryStaffMemberships.length) {
        await db.store_staff.deleteMany({
            where: { id: { in: created.temporaryStaffMemberships } },
        });
    }
    if (created.temporaryStores.length) {
        await db.stores.deleteMany({
            where: { id: { in: created.temporaryStores } },
        });
    }
}
async function physicalFixture() {
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
                },
            },
        },
    });
    assert(physical, "A physical printing fixture is required.");
    return physical;
}
async function createInventory(harness, principal, note) {
    const physical = await physicalFixture();
    const response = await harness.as(principal).post("/api/me/inventory").send({
        printingId: physical.printing_id,
        finish: physical.finish,
        collectionId: null,
        condition: "near_mint",
        quantity: 1,
        isSigned: false,
        isAltered: false,
        isGraded: false,
        notes: note,
        acquiredPrice: 13.25,
    }).expect(201);
    created.inventories.push(response.body.id);
    return {
        inventoryId: response.body.id,
        printingId: physical.printing_id,
        canonicalCardId: physical.card_printings.canonical_card_id,
        finish: physical.finish,
    };
}
async function createListing(harness, inventoryItemId, preferredStoreId, seed) {
    const response = await harness.as((0, authenticated_app_harness_1.activePrincipal)(authenticated_app_harness_1.USER_1_ID)).post(`/api/listings/users/${authenticated_app_harness_1.USER_1_ID}`).send({
        inventoryItemId,
        acceptsCash: false,
        acceptsTrade: true,
        preferredStoreId,
        title: `Friday trade ${seed}`,
    }).expect(201);
    created.listings.push(response.body.id);
    return response.body.id;
}
async function createOffer(harness, listingId, inventoryItemId, seed) {
    const response = await harness.as((0, authenticated_app_harness_1.activePrincipal)(authenticated_app_harness_1.USER_2_ID)).post(`/api/offers/listings/${listingId}/users/${authenticated_app_harness_1.USER_2_ID}`).send({
        cashAmount: 0,
        currencyCode: "USD",
        items: [{ inventoryItemId, quantity: 1 }],
        message: `Friday trade ${seed}`,
    }).expect(201);
    created.offers.push(response.body.id);
    return response.body.id;
}
async function inventorySnapshot(inventoryId) {
    return db.inventory_items.findUnique({
        where: {
            id: inventoryId,
        },
        select: {
            owner_user_id: true,
            owner_store_id: true,
            status: true,
            notes: true,
            acquired_price: true,
        },
    });
}
async function runFridayTradeMvpRegression() {
    await db.$connect();
    const baseline = await tableCounts();
    const harness = await (0, authenticated_app_harness_1.createAuthenticatedHarness)();
    const user1 = (0, authenticated_app_harness_1.activePrincipal)(authenticated_app_harness_1.USER_1_ID);
    const user2 = (0, authenticated_app_harness_1.activePrincipal)(authenticated_app_harness_1.USER_2_ID);
    const seed = `friday-trade-${(0, node_crypto_1.randomUUID)()}`;
    try {
        const staff = await db.store_staff.findFirst({
            where: {
                status: "active",
                stores: {
                    name: "DeckDeal Test LGS",
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
        assert(staff, "DeckDeal Test LGS fixture is required.");
        const staffPrincipal = (0, authenticated_app_harness_1.activePrincipal)(staff.user_id);
        let otherStore = await db.stores.findFirst({
            where: {
                id: { not: staff.store_id },
                status: "active",
                verification_status: "verified",
                trade_mediation_enabled: true,
                store_games: { none: { games: { slug: "mtg" } } },
            },
            select: { id: true },
        });
        if (!otherStore) {
            otherStore = await db.stores.create({
                data: {
                    name: `Friday authorization Store ${seed}`,
                    slug: `friday-authorization-${(0, node_crypto_1.randomUUID)()}`,
                    status: "active",
                    verification_status: "verified",
                    trade_mediation_enabled: true,
                },
                select: { id: true },
            });
            created.temporaryStores.push(otherStore.id);
        }
        let wrongStaff = await db.store_staff.findFirst({
            where: { store_id: otherStore.id, status: "active" },
            select: { id: true, user_id: true },
        });
        if (!wrongStaff) {
            const membership = await db.store_staff.create({
                data: { store_id: otherStore.id, user_id: authenticated_app_harness_1.USER_2_ID, role: "staff", status: "active" },
                select: { id: true, user_id: true },
            });
            created.temporaryStaffMemberships.push(membership.id);
            wrongStaff = membership;
        }
        const wrongStaffPrincipal = (0, authenticated_app_harness_1.activePrincipal)(wrongStaff.user_id);
        const rejectSellerInventory = await createInventory(harness, user1, `${seed}-reject-seller`);
        const acceptSellerInventory = await createInventory(harness, user1, `${seed}-accept-seller`);
        const staleSellerInventory = await createInventory(harness, user1, `${seed}-stale-seller`);
        const rejectOffererInventory = await createInventory(harness, user2, `${seed}-reject-offerer`);
        const acceptOffererInventory = await createInventory(harness, user2, `${seed}-accept-offerer`);
        const staleOffererInventory = await createInventory(harness, user2, `${seed}-stale-offerer`);
        const rejectListingId = await createListing(harness, rejectSellerInventory.inventoryId, staff.store_id, `${seed}-reject`);
        const acceptListingId = await createListing(harness, acceptSellerInventory.inventoryId, staff.store_id, `${seed}-accept`);
        const staleListingId = await createListing(harness, staleSellerInventory.inventoryId, staff.store_id, `${seed}-stale`);
        const rejectOfferId = await createOffer(harness, rejectListingId, rejectOffererInventory.inventoryId, `${seed}-reject`);
        const acceptOfferId = await createOffer(harness, acceptListingId, acceptOffererInventory.inventoryId, `${seed}-accept`);
        const staleOfferId = await createOffer(harness, staleListingId, staleOffererInventory.inventoryId, `${seed}-stale`);
        for (const [actor, ownerId, inventoryId, suffix] of [
            [user1, authenticated_app_harness_1.USER_1_ID, acceptSellerInventory.inventoryId, "seller"],
            [user2, authenticated_app_harness_1.USER_2_ID, acceptOffererInventory.inventoryId, "offerer"],
        ]) {
            const collection = await harness.as(actor).post(`/api/inventory/users/${ownerId}/collections`)
                .send({ gameSlug: "mtg", name: `${seed}-${suffix}`, visibility: "private" }).expect(201);
            created.collections.push(collection.body.id);
            await harness.as(actor).patch(`/api/inventory/users/${ownerId}/items/${inventoryId}/collection`)
                .send({ collectionId: collection.body.id }).expect(200);
            await db.inventory_item_photos.create({ data: {
                    inventory_item_id: inventoryId,
                    storage_provider: "test",
                    storage_key: `${seed}/${suffix}.jpg`,
                    public_url: null,
                    is_primary: true,
                } });
        }
        const sellerReceived = await harness.as(user1).get(`/api/offers/users/${authenticated_app_harness_1.USER_1_ID}/received`).expect(200);
        assert(sellerReceived.body.some((offer) => offer.id === rejectOfferId), "Seller received offers must include the reject candidate.");
        assert(sellerReceived.body.some((offer) => offer.id === acceptOfferId), "Seller received offers must include the accept candidate.");
        assert(sellerReceived.body.some((offer) => offer.id === staleOfferId), "Seller received offers must include the stale candidate.");
        const sellerPerListing = await harness.as(user1).get(`/api/offers/listings/${rejectListingId}/users/${authenticated_app_harness_1.USER_1_ID}/received`).expect(200);
        assert(sellerPerListing.body.length === 1 && sellerPerListing.body[0].id === rejectOfferId, "Listing-scoped received offers must stay seller-scoped.");
        await harness.as(user2).get(`/api/offers/users/${authenticated_app_harness_1.USER_1_ID}/received`).expect(403);
        await harness.as(staffPrincipal).get(`/api/offers/users/${authenticated_app_harness_1.USER_1_ID}/received`).expect(403);
        const beforeUnauthorizedReject = await tableCounts();
        const rejectOfferBeforeUnauthorized = await db.listing_offers.findUnique({ where: { id: rejectOfferId }, select: { status: true } });
        await harness.as(user2).patch(`/api/offers/${rejectOfferId}/users/${authenticated_app_harness_1.USER_2_ID}/reject`).expect(404);
        await sameCounts(beforeUnauthorizedReject, "Unauthorized seller-style reject mutated state");
        const rejectOfferAfterUnauthorized = await db.listing_offers.findUnique({ where: { id: rejectOfferId }, select: { status: true } });
        assert(rejectOfferBeforeUnauthorized?.status === rejectOfferAfterUnauthorized?.status, "Unauthorized reject changed the offer status.");
        const rejectSellerBefore = await inventorySnapshot(rejectSellerInventory.inventoryId);
        const rejectOffererBefore = await inventorySnapshot(rejectOffererInventory.inventoryId);
        const beforeRejectCounts = await tableCounts();
        const rejected = await harness.as(user1).patch(`/api/offers/${rejectOfferId}/users/${authenticated_app_harness_1.USER_1_ID}/reject`).expect(200);
        assert(rejected.body.status === "rejected", "Seller reject must return rejected status.");
        const rejectOfferRow = await db.listing_offers.findUnique({ where: { id: rejectOfferId }, select: { status: true, responded_at: true } });
        assert(rejectOfferRow?.status === "rejected", "Reject must persist rejected status.");
        assert(Boolean(rejectOfferRow.responded_at), "Reject must timestamp seller response.");
        const afterRejectCounts = await tableCounts();
        assert(afterRejectCounts.transactions === beforeRejectCounts.transactions, "Reject must not create a transaction.");
        assert(afterRejectCounts.transaction_items === beforeRejectCounts.transaction_items, "Reject must not create transaction items.");
        assert(afterRejectCounts.store_trade_handoffs === beforeRejectCounts.store_trade_handoffs, "Reject must not create handoffs.");
        assert(afterRejectCounts.transaction_item_custody === beforeRejectCounts.transaction_item_custody, "Reject must not create custody rows.");
        assert(JSON.stringify(await inventorySnapshot(rejectSellerInventory.inventoryId)) === JSON.stringify(rejectSellerBefore), "Reject must leave seller inventory ownership unchanged.");
        assert(JSON.stringify(await inventorySnapshot(rejectOffererInventory.inventoryId)) === JSON.stringify(rejectOffererBefore), "Reject must leave offerer inventory ownership unchanged.");
        const sentAfterReject = await harness.as(user2).get(`/api/offers/users/${authenticated_app_harness_1.USER_2_ID}/sent`).expect(200);
        assert(sentAfterReject.body.find((offer) => offer.id === rejectOfferId)?.status === "rejected", "Sent offers must reflect rejected status after refresh.");
        const beforeUnauthorizedAccept = await tableCounts();
        await harness.as(user2).post(`/api/offers/${acceptOfferId}/users/${authenticated_app_harness_1.USER_2_ID}/accept`).send({ storeId: staff.store_id }).expect(403);
        await sameCounts(beforeUnauthorizedAccept, "Unauthorized seller-style accept mutated state");
        const beforeSpoofAccept = await tableCounts();
        await harness.as(user1).post(`/api/offers/${acceptOfferId}/users/${authenticated_app_harness_1.USER_1_ID}/accept`).send({ storeId: staff.store_id, sellerUserId: authenticated_app_harness_1.USER_2_ID }).expect(400);
        await sameCounts(beforeSpoofAccept, "Actor spoof fields changed accept authority");
        const acceptSellerBefore = await inventorySnapshot(acceptSellerInventory.inventoryId);
        const acceptOffererBefore = await inventorySnapshot(acceptOffererInventory.inventoryId);
        const beforeUnsupportedStoreAccept = await tableCounts();
        await harness.as(user1).post(`/api/offers/${acceptOfferId}/users/${authenticated_app_harness_1.USER_1_ID}/accept`).send({ storeId: otherStore.id }).expect(400);
        await sameCounts(beforeUnsupportedStoreAccept, "Game-unsupported mediation Store created partial acceptance state");
        assert((await db.listing_offers.findUnique({ where: { id: acceptOfferId }, select: { status: true } }))?.status === "pending", "Game-unsupported mediation changed offer status.");
        const beforeAcceptCounts = await tableCounts();
        const accepted = await harness.as(user1).post(`/api/offers/${acceptOfferId}/users/${authenticated_app_harness_1.USER_1_ID}/accept`).send({ storeId: staff.store_id }).expect(201);
        const transactionId = accepted.body.id;
        created.transactions.push(transactionId);
        assert(accepted.body.accepted_offer_id === acceptOfferId, "Accepted transaction must reference the accepted offer.");
        assert(accepted.body.seller_user_id === authenticated_app_harness_1.USER_1_ID, "Accepted transaction must record the seller participant.");
        assert(accepted.body.counterparty_user_id === authenticated_app_harness_1.USER_2_ID, "Accepted transaction must record the counterparty participant.");
        assert(accepted.body.status === "awaiting_handoff", "Accepted transaction must enter awaiting_handoff.");
        assert(accepted.body.transaction_items.length === 2, "Accepted trade must create exactly two transaction items.");
        assert(Boolean(accepted.body.store_trade_handoffs?.id), "Accepted trade must create exactly one store handoff.");
        assert(accepted.body.store_trade_handoffs.store_id === staff.store_id, "Accepted trade must use the selected mediator store.");
        assert(accepted.body.custody.length === 2, "Accepted trade must prepare custody for each transaction item.");
        const afterAcceptCounts = await tableCounts();
        assert(afterAcceptCounts.transactions === beforeAcceptCounts.transactions + 1, "Accept must create exactly one transaction.");
        assert(afterAcceptCounts.transaction_items === beforeAcceptCounts.transaction_items + 2, "Accept must create exactly two transaction items.");
        assert(afterAcceptCounts.store_trade_handoffs === beforeAcceptCounts.store_trade_handoffs + 1, "Accept must create exactly one handoff.");
        assert(afterAcceptCounts.transaction_item_custody === beforeAcceptCounts.transaction_item_custody + 2, "Accept must create custody rows for each transaction item.");
        assert(afterAcceptCounts.inventory_items === beforeAcceptCounts.inventory_items, "Accept must not transfer ownership or create recipient inventory before release.");
        const acceptedOfferRow = await db.listing_offers.findUnique({
            where: { id: acceptOfferId },
            select: { status: true, responded_at: true },
        });
        assert(acceptedOfferRow?.status === "accepted", "Accepted offer must persist accepted status.");
        assert(Boolean(acceptedOfferRow.responded_at), "Accepted offer must timestamp seller response.");
        const acceptedListingRow = await db.listings.findUnique({
            where: { id: acceptListingId },
            select: { status: true, seller_user_id: true, seller_store_id: true },
        });
        assert(acceptedListingRow?.status === "closed", "Accept must close the listing through existing lifecycle rules.");
        assert(acceptedListingRow.seller_user_id === authenticated_app_harness_1.USER_1_ID && acceptedListingRow.seller_store_id === null, "Accept must not change listing ownership.");
        const acceptedTransaction = await db.transactions.findUnique({
            where: { id: transactionId },
            select: {
                id: true,
                game_id: true,
                accepted_offer_id: true,
                seller_user_id: true,
                counterparty_user_id: true,
                status: true,
            },
        });
        assert(acceptedTransaction?.accepted_offer_id === acceptOfferId, "Transaction row must reference the accepted offer.");
        assert(acceptedTransaction.seller_user_id === authenticated_app_harness_1.USER_1_ID && acceptedTransaction.counterparty_user_id === authenticated_app_harness_1.USER_2_ID, "Transaction participants are incorrect.");
        assert(acceptedTransaction.status === "awaiting_handoff", "Accepted transaction must remain awaiting_handoff before Store processing.");
        const transactionItems = await db.transaction_items.findMany({
            where: { transaction_id: transactionId },
            orderBy: { created_at: "asc" },
            select: {
                id: true,
                game_id: true,
                inventory_item_id: true,
                result_inventory_item_id: true,
                market_snapshot_id: true,
                item_role: true,
                quantity: true,
                from_user_id: true,
                to_user_id: true,
            },
        });
        assert(transactionItems.length === 2, "Accepted trade must persist two transaction items.");
        const listedItem = transactionItems.find((item) => item.item_role === "listed_item");
        const offeredItem = transactionItems.find((item) => item.item_role === "offered_item");
        assert(listedItem?.inventory_item_id === acceptSellerInventory.inventoryId, "Listed transaction item must reference the exact seller inventory item.");
        assert(listedItem.from_user_id === authenticated_app_harness_1.USER_1_ID && listedItem.to_user_id === authenticated_app_harness_1.USER_2_ID, "Listed transaction item participants are incorrect.");
        assert(offeredItem?.inventory_item_id === acceptOffererInventory.inventoryId, "Offered transaction item must reference the exact offerer inventory item.");
        assert(offeredItem.from_user_id === authenticated_app_harness_1.USER_2_ID && offeredItem.to_user_id === authenticated_app_harness_1.USER_1_ID, "Offered transaction item participants are incorrect.");
        assert(transactionItems.every((item) => item.result_inventory_item_id === null), "Ownership result inventory must not exist before Store release.");
        assert(transactionItems.every((item) => item.game_id === acceptedTransaction?.game_id), "Every transaction item must inherit the transaction game.");
        assert(transactionItems.every((item) => item.market_snapshot_id === null), "Current transaction creation must leave market_snapshot_id null.");
        const handoff = await db.store_trade_handoffs.findUnique({
            where: { transaction_id: transactionId },
            select: { id: true, game_id: true, store_id: true, status: true },
        });
        assert(handoff?.store_id === staff.store_id, "Accepted trade chose the wrong mediator store.");
        assert(handoff.status === "awaiting_items", "Accepted trade must prepare an awaiting_items handoff.");
        assert(handoff.game_id === acceptedTransaction?.game_id, "Handoff must inherit the transaction game.");
        assert(await db.store_games.count({ where: { store_id: handoff.store_id, game_id: handoff.game_id, trade_mediation_enabled: true } }) === 1, "Mediation Store must have enabled store_games membership.");
        const custody = await db.transaction_item_custody.findMany({
            where: { transaction_id: transactionId },
            orderBy: { created_at: "asc" },
            select: {
                handoff_id: true,
                transaction_id: true,
                transaction_item_id: true,
                store_id: true,
                custody_status: true,
            },
        });
        assert(custody.length === 2, "Accepted trade must prepare custody rows for both cards.");
        assert(custody.every((row) => row.store_id === staff.store_id), "Custody rows must point at the selected mediator store.");
        assert(custody.every((row) => row.custody_status === "awaiting_delivery_to_store"), "Custody rows must begin awaiting_delivery_to_store.");
        assert(custody.every((row) => row.handoff_id === handoff.id && row.transaction_id === transactionId), "Custody rows must reference the correct handoff and transaction.");
        const acceptSellerAfter = await inventorySnapshot(acceptSellerInventory.inventoryId);
        const acceptOffererAfter = await inventorySnapshot(acceptOffererInventory.inventoryId);
        assert(acceptSellerAfter, "Seller inventory must still exist after acceptance.");
        assert(acceptOffererAfter, "Offerer inventory must still exist after acceptance.");
        assert(acceptSellerAfter.owner_user_id === acceptSellerBefore?.owner_user_id, "Accept must not transfer seller ownership before release.");
        assert(acceptSellerAfter.owner_store_id === acceptSellerBefore?.owner_store_id, "Accept must not move seller inventory into Store ownership.");
        assert(acceptSellerAfter.status === "in_trade", "Accept must reserve seller inventory as in_trade.");
        assert(acceptSellerAfter.notes === acceptSellerBefore?.notes && String(acceptSellerAfter.acquired_price) === String(acceptSellerBefore?.acquired_price), "Accept must not rewrite seller private metadata before release.");
        assert(acceptOffererAfter.owner_user_id === acceptOffererBefore?.owner_user_id, "Accept must not transfer offerer ownership before release.");
        assert(acceptOffererAfter.owner_store_id === acceptOffererBefore?.owner_store_id, "Accept must not move offerer inventory into Store ownership.");
        assert(acceptOffererAfter.status === "in_trade", "Accept must reserve offerer inventory as in_trade.");
        assert(acceptOffererAfter.notes === acceptOffererBefore?.notes && String(acceptOffererAfter.acquired_price) === String(acceptOffererBefore?.acquired_price), "Accept must not rewrite offerer private metadata before release.");
        const repeatedBefore = await tableCounts();
        await harness.as(user1).post(`/api/offers/${acceptOfferId}/users/${authenticated_app_harness_1.USER_1_ID}/accept`).send({ storeId: staff.store_id }).expect(409);
        await sameCounts(repeatedBefore, "Repeated accept created duplicate transaction state");
        assert(await db.transactions.count({ where: { accepted_offer_id: acceptOfferId } }) === 1, "One offer must never create two accepted trade transactions.");
        const sellerTransactionList = await harness.as(user1).get(`/api/transactions/users/${authenticated_app_harness_1.USER_1_ID}`).expect(200);
        assert(sellerTransactionList.body.some((trade) => trade.id === transactionId), "Seller My Trades read must include the accepted trade.");
        const offererTransactionList = await harness.as(user2).get(`/api/transactions/users/${authenticated_app_harness_1.USER_2_ID}`).expect(200);
        assert(offererTransactionList.body.some((trade) => trade.id === transactionId), "Offerer My Trades read must include the accepted trade.");
        const sellerTradeDetail = await harness.as(user1).get(`/api/transactions/${transactionId}/users/${authenticated_app_harness_1.USER_1_ID}`).expect(200);
        const offererTradeDetail = await harness.as(user2).get(`/api/transactions/${transactionId}/users/${authenticated_app_harness_1.USER_2_ID}`).expect(200);
        await harness.as(staffPrincipal).get(`/api/transactions/${transactionId}/users/${staff.user_id}`).expect(404);
        assert(sellerTradeDetail.body.id === transactionId && offererTradeDetail.body.id === transactionId, "Both participants must read the same transaction record.");
        assert(sellerTradeDetail.body.transaction_role === "seller", "Seller trade detail must identify seller perspective.");
        assert(offererTradeDetail.body.transaction_role === "counterparty", "Offerer trade detail must identify counterparty perspective.");
        assert(sellerTradeDetail.body.handoff?.store?.id === staff.store_id, "Seller trade detail must expose the mediator store.");
        assert(offererTradeDetail.body.handoff?.store?.id === staff.store_id, "Offerer trade detail must expose the mediator store.");
        assert(sellerTradeDetail.body.items.filter((item) => item.from_user_id === authenticated_app_harness_1.USER_1_ID).length === 1, "Seller trade detail must expose exactly one give-side item.");
        assert(sellerTradeDetail.body.items.filter((item) => item.to_user_id === authenticated_app_harness_1.USER_1_ID).length === 1, "Seller trade detail must expose exactly one receive-side item.");
        assert(offererTradeDetail.body.items.filter((item) => item.from_user_id === authenticated_app_harness_1.USER_2_ID).length === 1, "Offerer trade detail must expose exactly one give-side item.");
        assert(offererTradeDetail.body.items.filter((item) => item.to_user_id === authenticated_app_harness_1.USER_2_ID).length === 1, "Offerer trade detail must expose exactly one receive-side item.");
        assert(sellerTradeDetail.body.items.some((item) => item.from_user_id === authenticated_app_harness_1.USER_1_ID && item.inventory_item_id === acceptSellerInventory.inventoryId), "Seller perspective must give the listed inventory item.");
        assert(sellerTradeDetail.body.items.some((item) => item.to_user_id === authenticated_app_harness_1.USER_1_ID && item.inventory_item_id === acceptOffererInventory.inventoryId), "Seller perspective must receive the offered inventory item.");
        assert(offererTradeDetail.body.items.some((item) => item.from_user_id === authenticated_app_harness_1.USER_2_ID && item.inventory_item_id === acceptOffererInventory.inventoryId), "Offerer perspective must give the offered inventory item.");
        assert(offererTradeDetail.body.items.some((item) => item.to_user_id === authenticated_app_harness_1.USER_2_ID && item.inventory_item_id === acceptSellerInventory.inventoryId), "Offerer perspective must receive the listed inventory item.");
        const sentAfterAccept = await harness.as(user2).get(`/api/offers/users/${authenticated_app_harness_1.USER_2_ID}/sent`).expect(200);
        assert(sentAfterAccept.body.find((offer) => offer.id === acceptOfferId)?.status === "accepted", "Sent offers must reflect accepted status after refresh.");
        const receivedAfterActions = await harness.as(user1).get(`/api/offers/users/${authenticated_app_harness_1.USER_1_ID}/received`).expect(200);
        assert(receivedAfterActions.body.find((offer) => offer.id === rejectOfferId)?.status === "rejected", "Received offers must reflect rejected status after refresh.");
        assert(receivedAfterActions.body.find((offer) => offer.id === acceptOfferId)?.status === "accepted", "Received offers must reflect accepted status after refresh.");
        await db.inventory_items.update({
            where: { id: staleOffererInventory.inventoryId },
            data: { status: "reserved" },
        });
        const staleBeforeCounts = await tableCounts();
        const staleOfferBefore = await db.listing_offers.findUnique({ where: { id: staleOfferId }, select: { status: true } });
        const staleListingBefore = await db.listings.findUnique({ where: { id: staleListingId }, select: { status: true } });
        const staleSellerBefore = await inventorySnapshot(staleSellerInventory.inventoryId);
        const staleOffererBefore = await inventorySnapshot(staleOffererInventory.inventoryId);
        await harness.as(user1).post(`/api/offers/${staleOfferId}/users/${authenticated_app_harness_1.USER_1_ID}/accept`).send({ storeId: staff.store_id }).expect(409);
        await sameCounts(staleBeforeCounts, "Stale acceptance created partial transaction state");
        assert((await db.transactions.count({ where: { accepted_offer_id: staleOfferId } })) === 0, "Failed stale acceptance must not create a transaction.");
        assert((await db.store_trade_handoffs.count({ where: { transaction_id: { in: (await db.transactions.findMany({ where: { accepted_offer_id: staleOfferId }, select: { id: true } })).map((row) => row.id) } } })) === 0, "Failed stale acceptance must not create handoffs.");
        assert((await db.transaction_item_custody.count({ where: { transaction_id: { in: (await db.transactions.findMany({ where: { accepted_offer_id: staleOfferId }, select: { id: true } })).map((row) => row.id) } } })) === 0, "Failed stale acceptance must not create custody rows.");
        assert((await db.listing_offers.findUnique({ where: { id: staleOfferId }, select: { status: true } }))?.status === staleOfferBefore?.status, "Failed stale acceptance must not change the pending offer state.");
        assert((await db.listings.findUnique({ where: { id: staleListingId }, select: { status: true } }))?.status === staleListingBefore?.status, "Failed stale acceptance must not close the listing.");
        assert(JSON.stringify(await inventorySnapshot(staleSellerInventory.inventoryId)) === JSON.stringify(staleSellerBefore), "Failed stale acceptance must not mutate seller inventory.");
        assert(JSON.stringify(await inventorySnapshot(staleOffererInventory.inventoryId)) === JSON.stringify(staleOffererBefore), "Failed stale acceptance must not mutate stale offered inventory beyond the precondition.");
        const staffList = await harness.as(staffPrincipal).get(`/api/store-handoffs/stores/${staff.store_id}`).expect(200);
        assert(staffList.body.some((row) => row.id === handoff.id), "Authorized Store staff must see the exact accepted handoff.");
        assert(!staffList.body.some((row) => row.store_id !== staff.store_id), "Store handoff list leaked another Store's work.");
        await harness.as(user1).get(`/api/store-handoffs/stores/${staff.store_id}`).expect(403);
        await harness.as(wrongStaffPrincipal).get(`/api/store-handoffs/${handoff.id}`).expect(403);
        const lifecycleBeforeUnauthorized = await tableCounts();
        await harness.as(user1).patch(`/api/store-handoffs/${handoff.id}/items/${listedItem.id}/receive`).send({ storeId: staff.store_id, staffUserId: staff.user_id }).expect(403);
        await harness.as(wrongStaffPrincipal).patch(`/api/store-handoffs/${handoff.id}/items/${listedItem.id}/receive/users/${staff.user_id}`).expect(403);
        await sameCounts(lifecycleBeforeUnauthorized, "Unauthorized or spoofed Store receive mutated lifecycle state");
        await harness.as(staffPrincipal).patch(`/api/store-handoffs/${handoff.id}/items/${listedItem.id}/verify`).expect(400);
        await harness.as(staffPrincipal).patch(`/api/store-handoffs/${handoff.id}/items/${listedItem.id}/release`).expect(400);
        for (const item of transactionItems) {
            await harness.as(staffPrincipal).patch(`/api/store-handoffs/${handoff.id}/items/${item.id}/receive`).expect(200);
        }
        await harness.as(staffPrincipal).patch(`/api/store-handoffs/${handoff.id}/items/${listedItem.id}/receive`).expect(400);
        const receivedCustody = await db.transaction_item_custody.findMany({ where: { transaction_id: transactionId } });
        assert(receivedCustody.every((row) => row.custody_status === "in_store" && row.received_by_staff_id), "Receive must persist in-store custody and an audit staff membership.");
        assert(receivedCustody.every((row) => row.received_by_staff_id === receivedCustody[0]?.received_by_staff_id), "Receive audit actor must be the authenticated Store staff membership.");
        for (const item of transactionItems) {
            await harness.as(staffPrincipal).patch(`/api/store-handoffs/${handoff.id}/items/${item.id}/verify`).expect(200);
        }
        await harness.as(staffPrincipal).patch(`/api/store-handoffs/${handoff.id}/items/${listedItem.id}/verify`).expect(400);
        const verifiedCustody = await db.transaction_item_custody.findMany({ where: { transaction_id: transactionId } });
        assert(verifiedCustody.every((row) => row.custody_status === "verified_by_store" && row.verified_by_staff_id === row.received_by_staff_id), "Verify must preserve ordering and authenticated staff audit identity.");
        const sourceBeforeRelease = await db.inventory_items.findMany({
            where: { id: { in: [acceptSellerInventory.inventoryId, acceptOffererInventory.inventoryId] } },
            select: { id: true, game_id: true, printing_id: true, finish: true, owner_user_id: true, owner_store_id: true, collection_id: true, condition: true, language_code: true, quantity: true, is_signed: true, is_altered: true, is_graded: true, grading_company: true, grade: true, certification_number: true, acquired_price: true, notes: true },
        });
        assert(sourceBeforeRelease.every((row) => row.collection_id && row.acquired_price !== null && row.notes), "Release fixture must contain owner-private metadata before transfer.");
        assert(await db.inventory_item_photos.count({ where: { inventory_item_id: { in: sourceBeforeRelease.map((row) => row.id) } } }) === 2, "Release fixture must contain former-owner private photos.");
        const inventoryCountBeforeRelease = await db.inventory_items.count();
        for (const item of transactionItems) {
            await harness.as(staffPrincipal).patch(`/api/store-handoffs/${handoff.id}/items/${item.id}/release`).expect(200);
        }
        const inventoryCountAfterRelease = await db.inventory_items.count();
        assert(inventoryCountAfterRelease === inventoryCountBeforeRelease + transactionItems.length, "Release must create exactly one recipient ownership row per transaction item.");
        await harness.as(staffPrincipal).patch(`/api/store-handoffs/${handoff.id}/items/${listedItem.id}/release`).expect(400);
        assert(await db.inventory_items.count() === inventoryCountAfterRelease, "Duplicate release created duplicate ownership.");
        const releasedItems = await db.transaction_items.findMany({ where: { transaction_id: transactionId } });
        const resultIds = releasedItems.map((item) => item.result_inventory_item_id).filter((id) => Boolean(id));
        assert(resultIds.length === transactionItems.length, "Every released transaction item must link its result inventory provenance.");
        created.inventories.push(...resultIds);
        const sourcesAfterRelease = await db.inventory_items.findMany({ where: { id: { in: sourceBeforeRelease.map((row) => row.id) } } });
        assert(sourcesAfterRelease.every((row) => row.status === "removed" && row.collection_id === null), "Source ownership history must be removed from current inventory and collections cleared.");
        assert(sourcesAfterRelease.every((row) => sourceBeforeRelease.find((before) => before.id === row.id)?.owner_user_id === row.owner_user_id), "Historical source owners must be preserved.");
        const results = await db.inventory_items.findMany({ where: { id: { in: resultIds } } });
        assert(results.every((row) => row.status === "available" && row.collection_id === null && row.acquired_price === null && row.notes === null), "Recipient inventory must be available and exclude former private metadata.");
        assert(sourceBeforeRelease.every((row) => row.game_id === acceptedTransaction?.game_id), "Every source inventory item must match the transaction game.");
        assert(releasedItems.every((row) => row.game_id === acceptedTransaction?.game_id), "Released transaction items must retain the transaction game.");
        assert(results.every((row) => row.game_id === acceptedTransaction?.game_id), "Result inventory must inherit the transaction game.");
        for (const result of results) {
            const item = releasedItems.find((row) => row.result_inventory_item_id === result.id);
            const source = sourceBeforeRelease.find((row) => row.id === item?.inventory_item_id);
            assert(source && result.owner_user_id === item?.to_user_id, "Result inventory has the wrong recipient owner.");
            for (const field of ["printing_id", "finish", "condition", "language_code", "quantity", "is_signed", "is_altered", "is_graded", "grading_company", "grade", "certification_number"]) {
                assert(result[field] === source[field], `Result inventory did not preserve physical characteristic ${field}.`);
            }
        }
        assert(await db.inventory_item_photos.count({ where: { inventory_item_id: { in: resultIds } } }) === 0, "Former owner photos must not be copied to recipient Inventory.");
        const completedHandoff = await db.store_trade_handoffs.findUnique({ where: { id: handoff.id } });
        const completedTransaction = await db.transactions.findUnique({ where: { id: transactionId } });
        assert(completedHandoff?.status === "completed" && completedHandoff.completed_at, "Final release must complete the Store handoff.");
        assert(completedTransaction?.status === "completed" && completedTransaction.completed_at, "Final release must complete the participant transaction.");
        const sellerInventoryRead = await harness.as(user1).get("/api/me/inventory?page=1&pageSize=48").expect(200);
        const offererInventoryRead = await harness.as(user2).get("/api/me/inventory?page=1&pageSize=48").expect(200);
        assert(results.filter((row) => row.owner_user_id === authenticated_app_harness_1.USER_1_ID).every((row) => sellerInventoryRead.body.items.some((item) => item.id === row.id)), "Seller recipient does not see newly received current Inventory.");
        assert(results.filter((row) => row.owner_user_id === authenticated_app_harness_1.USER_2_ID).every((row) => offererInventoryRead.body.items.some((item) => item.id === row.id)), "Offerer recipient does not see newly received current Inventory.");
        assert(!sellerInventoryRead.body.items.some((item) => item.id === acceptSellerInventory.inventoryId), "Former seller source remains in current Inventory.");
        assert(!offererInventoryRead.body.items.some((item) => item.id === acceptOffererInventory.inventoryId), "Former offerer source remains in current Inventory.");
        console.log(`Friday trade MVP regression passed (${seed}).`);
    }
    finally {
        await cleanup();
        const restored = await tableCounts();
        assert(JSON.stringify(restored) === JSON.stringify(baseline), `Friday trade cleanup did not restore baseline counts: ${JSON.stringify({ baseline, restored })}`);
        await harness.close();
        await db.$disconnect();
    }
}
runFridayTradeMvpRegression().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
