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
    "listings",
    "listing_offers",
    "offer_items",
    "transactions",
    "transaction_items",
    "store_trade_handoffs",
    "transaction_item_custody",
];
const created = {
    inventories: [],
    listings: [],
    offers: [],
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
    assert(JSON.stringify(after) ===
        JSON.stringify(before), `${message}: ${JSON.stringify({ before, after })}`);
};
async function cleanup() {
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
}
function unmappedPrincipal(seed) {
    return {
        provider: "clerk",
        providerSubject: seed,
        deckdealUserId: null,
        sessionId: `session-${seed}`,
        accountStatus: null,
    };
}
async function createInventory(harness, principal, note) {
    const physical = await db.printing_finishes.findFirst({
        where: {
            card_printings: {
                is_digital: false,
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
    }).expect(201);
    created.inventories.push(response.body.id);
    return {
        inventoryId: response.body.id,
        printingId: physical.printing_id,
        canonicalCardId: physical.card_printings.canonical_card_id,
        finish: physical.finish,
    };
}
async function runFridayTradeMvpRegression() {
    await db.$connect();
    const baseline = await tableCounts();
    const harness = await (0, authenticated_app_harness_1.createAuthenticatedHarness)();
    const user1 = (0, authenticated_app_harness_1.activePrincipal)(authenticated_app_harness_1.USER_1_ID);
    const user2 = (0, authenticated_app_harness_1.activePrincipal)(authenticated_app_harness_1.USER_2_ID);
    const disabled = {
        ...user1,
        accountStatus: "suspended",
    };
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
                },
            },
            select: {
                store_id: true,
            },
        });
        assert(staff, "DeckDeal Test LGS fixture is required.");
        const sellerInventory = await createInventory(harness, user1, `${seed}-seller`);
        const offererInventory = await createInventory(harness, user2, `${seed}-offerer`);
        const storeOwnedCandidate = await createInventory(harness, user2, `${seed}-store`);
        await db.inventory_items.update({
            where: {
                id: storeOwnedCandidate.inventoryId,
            },
            data: {
                owner_user_id: null,
                owner_store_id: staff.store_id,
            },
        });
        const beforeAnonymousListing = await tableCounts();
        await harness.as(null).post(`/api/listings/users/${authenticated_app_harness_1.USER_1_ID}`).send({
            inventoryItemId: sellerInventory.inventoryId,
            acceptsCash: false,
            acceptsTrade: true,
        }).expect(401);
        await sameCounts(beforeAnonymousListing, "Anonymous listing creation mutated state");
        const beforeUnmappedListing = await tableCounts();
        await harness.as(unmappedPrincipal(`${seed}-unmapped-listing`)).post(`/api/listings/users/${authenticated_app_harness_1.USER_1_ID}`).send({
            inventoryItemId: sellerInventory.inventoryId,
            acceptsCash: false,
            acceptsTrade: true,
        }).expect(403);
        await sameCounts(beforeUnmappedListing, "Unmapped listing creation mutated state");
        const beforeDisabledListing = await tableCounts();
        await harness.as(disabled).post(`/api/listings/users/${authenticated_app_harness_1.USER_1_ID}`).send({
            inventoryItemId: sellerInventory.inventoryId,
            acceptsCash: false,
            acceptsTrade: true,
        }).expect(403);
        await sameCounts(beforeDisabledListing, "Disabled listing creation mutated state");
        const listingResponse = await harness.as(user1).post(`/api/listings/users/${authenticated_app_harness_1.USER_1_ID}`).send({
            inventoryItemId: sellerInventory.inventoryId,
            acceptsCash: false,
            acceptsTrade: true,
        }).expect(201);
        const listingId = listingResponse.body.id;
        created.listings.push(listingId);
        assert(listingResponse.body.seller_user_id === authenticated_app_harness_1.USER_1_ID, "Created listing must belong to User1.");
        assert(listingResponse.body.inventory_item_id === sellerInventory.inventoryId, "Created listing must target the exact User1 inventory item.");
        assert(listingResponse.body.accepts_trade === true, "Friday listing must accept trade.");
        assert(listingResponse.body.accepts_cash === false, "Friday listing must reject cash.");
        assert(listingResponse.body.asking_price === null, "Friday listing must not fabricate a cash price.");
        assert(listingResponse.body.currency_code === null, "Friday listing must not fabricate a cash currency.");
        const ownerListings = await harness.as(user1).get(`/api/listings/users/${authenticated_app_harness_1.USER_1_ID}`).expect(200);
        assert(ownerListings.body.some((listing) => listing.id === listingId), "User1 listings must include the new active trade listing.");
        const beforeCrossUserListing = await tableCounts();
        await harness.as(user1).post(`/api/listings/users/${authenticated_app_harness_1.USER_1_ID}`).send({
            inventoryItemId: offererInventory.inventoryId,
            acceptsCash: false,
            acceptsTrade: true,
        }).expect(404);
        await sameCounts(beforeCrossUserListing, "Cross-user listing creation mutated state");
        const beforeOwnerSpoofListing = await tableCounts();
        await harness.as(user1).post(`/api/listings/users/${authenticated_app_harness_1.USER_1_ID}`).send({
            inventoryItemId: sellerInventory.inventoryId,
            acceptsCash: false,
            acceptsTrade: true,
            seller_user_id: authenticated_app_harness_1.USER_2_ID,
        }).expect(400);
        await sameCounts(beforeOwnerSpoofListing, "Owner spoof listing creation mutated state");
        const beforeStoreSpoofListing = await tableCounts();
        await harness.as(user1).post(`/api/listings/users/${authenticated_app_harness_1.USER_1_ID}`).send({
            inventoryItemId: sellerInventory.inventoryId,
            acceptsCash: false,
            acceptsTrade: true,
            owner_store_id: staff.store_id,
        }).expect(400);
        await sameCounts(beforeStoreSpoofListing, "Store spoof listing creation mutated state");
        const publicListing = await harness.as(null).get(`/api/listings/${listingId}`).expect(200);
        assert(publicListing.body.id === listingId, "Public listing detail must expose the created listing.");
        const publicCardListings = await harness.as(null).get(`/api/catalog/cards/${sellerInventory.canonicalCardId}/listings?printing=${sellerInventory.printingId}&page=1&pageSize=12`).expect(200);
        const exactCardListing = publicCardListings.body.items.find((listing) => listing.id === listingId);
        assert(exactCardListing, "Exact card listing feed must include the created active listing.");
        assert(exactCardListing.accepts_trade === true, "Exact card listing feed must preserve TRADE intent.");
        assert(exactCardListing.accepts_cash === false, "Exact card listing feed must not expose sale intent for Friday trade listings.");
        const beforeOtherUserCancel = await db.listings.findUnique({
            where: { id: listingId },
        });
        await harness.as(user2).patch(`/api/listings/users/${authenticated_app_harness_1.USER_2_ID}/${listingId}/status`).send({
            status: "removed",
        }).expect(404);
        const afterOtherUserCancel = await db.listings.findUnique({
            where: { id: listingId },
        });
        assert(JSON.stringify(afterOtherUserCancel) === JSON.stringify(beforeOtherUserCancel), "Cross-user listing cancellation must not mutate the listing.");
        const beforeAnonymousOffer = await tableCounts();
        await harness.as(null).post(`/api/offers/listings/${listingId}/users/${authenticated_app_harness_1.USER_2_ID}`).send({
            cashAmount: 0,
            currencyCode: "USD",
            items: [{ inventoryItemId: offererInventory.inventoryId, quantity: 1 }],
        }).expect(401);
        await sameCounts(beforeAnonymousOffer, "Anonymous offer creation mutated state");
        const beforeOwnOffer = await tableCounts();
        await harness.as(user1).post(`/api/offers/listings/${listingId}/users/${authenticated_app_harness_1.USER_1_ID}`).send({
            cashAmount: 0,
            currencyCode: "USD",
            items: [{ inventoryItemId: sellerInventory.inventoryId, quantity: 1 }],
        }).expect(400);
        await sameCounts(beforeOwnOffer, "Owner self-offer attempt mutated state");
        const beforeCrossUserOffer = await tableCounts();
        await harness.as(user2).post(`/api/offers/listings/${listingId}/users/${authenticated_app_harness_1.USER_2_ID}`).send({
            cashAmount: 0,
            currencyCode: "USD",
            items: [{ inventoryItemId: sellerInventory.inventoryId, quantity: 1 }],
        }).expect(400);
        await sameCounts(beforeCrossUserOffer, "Cross-user offered inventory mutated state");
        const beforeStoreOffer = await tableCounts();
        await harness.as(user2).post(`/api/offers/listings/${listingId}/users/${authenticated_app_harness_1.USER_2_ID}`).send({
            cashAmount: 0,
            currencyCode: "USD",
            items: [{ inventoryItemId: storeOwnedCandidate.inventoryId, quantity: 1 }],
        }).expect(400);
        await sameCounts(beforeStoreOffer, "Store-owned offered inventory mutated state");
        const beforeOfferCounts = await tableCounts();
        const offerResponse = await harness.as(user2).post(`/api/offers/listings/${listingId}/users/${authenticated_app_harness_1.USER_2_ID}`).send({
            cashAmount: 0,
            currencyCode: "USD",
            items: [{ inventoryItemId: offererInventory.inventoryId, quantity: 1 }],
        }).expect(201);
        const offerId = offerResponse.body.id;
        created.offers.push(offerId);
        assert(offerResponse.body.listing_id === listingId, "Offer must target the exact listing ID.");
        assert(offerResponse.body.offerer_user_id === authenticated_app_harness_1.USER_2_ID, "Offer must be owned by User2.");
        assert(offerResponse.body.cash_amount === "0", "Friday offer must not include cash.");
        assert(offerResponse.body.items.length === 1, "Friday offer must persist the offered inventory item.");
        assert(offerResponse.body.items[0].inventory_item_id === offererInventory.inventoryId, "Offer must persist the exact offered inventory ID.");
        const afterOfferCounts = await tableCounts();
        assert(afterOfferCounts.listing_offers === beforeOfferCounts.listing_offers + 1, "Offer creation must insert exactly one listing offer.");
        assert(afterOfferCounts.offer_items === beforeOfferCounts.offer_items + 1, "Offer creation must insert exactly one offer item.");
        assert(afterOfferCounts.transactions === beforeOfferCounts.transactions, "Pending offer creation must not create a transaction.");
        assert(afterOfferCounts.transaction_items === beforeOfferCounts.transaction_items, "Pending offer creation must not create transaction items.");
        assert(afterOfferCounts.store_trade_handoffs === beforeOfferCounts.store_trade_handoffs, "Pending offer creation must not create store handoffs.");
        assert(afterOfferCounts.transaction_item_custody === beforeOfferCounts.transaction_item_custody, "Pending offer creation must not create custody rows.");
        assert(afterOfferCounts.inventory_items === beforeOfferCounts.inventory_items, "Pending offer creation must not create ownership-transfer inventory rows.");
        const sellerInventoryRow = await db.inventory_items.findUnique({
            where: { id: sellerInventory.inventoryId },
            select: {
                owner_user_id: true,
                owner_store_id: true,
                status: true,
            },
        });
        const offererInventoryRow = await db.inventory_items.findUnique({
            where: { id: offererInventory.inventoryId },
            select: {
                owner_user_id: true,
                owner_store_id: true,
                status: true,
            },
        });
        const listingRow = await db.listings.findUnique({
            where: { id: listingId },
            select: {
                seller_user_id: true,
                seller_store_id: true,
                status: true,
            },
        });
        assert(sellerInventoryRow?.owner_user_id === authenticated_app_harness_1.USER_1_ID, "Target inventory must remain owned by User1 after a pending offer.");
        assert(sellerInventoryRow.owner_store_id === null, "Pending offer must not move target inventory into store ownership.");
        assert(sellerInventoryRow.status === "available", "Pending offer must not reserve or transfer the listed inventory item.");
        assert(offererInventoryRow?.owner_user_id === authenticated_app_harness_1.USER_2_ID, "Offered inventory must remain owned by User2 after a pending offer.");
        assert(offererInventoryRow.owner_store_id === null, "Pending offer must not move offered inventory into store ownership.");
        assert(offererInventoryRow.status === "available", "Pending offer must not reserve or transfer the offered inventory item.");
        assert(listingRow?.seller_user_id === authenticated_app_harness_1.USER_1_ID && listingRow.seller_store_id === null, "Pending offer must not change listing ownership.");
        assert(listingRow.status === "active", "Pending offer must not close the active listing.");
        const sentOffers = await harness.as(user2).get(`/api/offers/users/${authenticated_app_harness_1.USER_2_ID}/sent`).expect(200);
        assert(sentOffers.body.some((offer) => offer.id === offerId), "User2 sent offers must include the persisted pending offer.");
        const cancelledListing = await harness.as(user1).patch(`/api/listings/users/${authenticated_app_harness_1.USER_1_ID}/${listingId}/status`).send({
            status: "removed",
        }).expect(200);
        assert(cancelledListing.body.status === "removed", "User1 must be able to cancel the active listing using status semantics.");
        const ownerListingsAfterCancel = await harness.as(user1).get(`/api/listings/users/${authenticated_app_harness_1.USER_1_ID}`).expect(200);
        assert(!ownerListingsAfterCancel.body.some((listing) => listing.id === listingId), "Cancelled listings must leave the active My Listings read model.");
        const beforeInactiveOffer = await tableCounts();
        await harness.as(user2).post(`/api/offers/listings/${listingId}/users/${authenticated_app_harness_1.USER_2_ID}`).send({
            cashAmount: 0,
            currencyCode: "USD",
            items: [{ inventoryItemId: offererInventory.inventoryId, quantity: 1 }],
        }).expect(400);
        await sameCounts(beforeInactiveOffer, "Inactive listing offer rejection mutated state");
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
