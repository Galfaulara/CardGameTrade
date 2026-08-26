"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runOnboardingRegression = runOnboardingRegression;
require("dotenv/config");
const node_crypto_1 = require("node:crypto");
const db_1 = require("@repo/db");
const authenticated_app_harness_1 = require("./support/authenticated-app-harness");
const db = (0, db_1.createDbClient)(process.env.DATABASE_URL);
const assert = (value, message) => {
    if (!value)
        throw new Error(message);
};
const TABLES = [
    "user_profiles",
    "user_preferences",
    "collections",
    "inventory_items",
    "listings",
    "listing_offers",
    "inventory_item_interests",
    "wishlists",
    "wishlist_items",
    "wishlist_offers",
    "transactions",
    "transaction_items",
    "store_trade_handoffs",
    "transaction_item_custody",
];
const unmappedPrincipal = (providerSubject) => ({
    provider: "clerk",
    providerSubject,
    deckdealUserId: null,
    sessionId: `test-session-${providerSubject}`,
    accountStatus: null,
});
async function tableCounts() {
    const counts = {};
    for (const table of TABLES) {
        counts[table] = await db[table].count();
    }
    return counts;
}
async function sanzaSnapshot() {
    const user = await db.user_profiles.findUnique({
        where: { id: authenticated_app_harness_1.USER_1_ID },
        select: {
            id: true,
            auth_provider: true,
            auth_user_id: true,
            email: true,
            username: true,
            username_normalized: true,
            display_name: true,
            status: true,
        },
    });
    return JSON.stringify(user);
}
async function runOnboardingRegression() {
    await db.$connect();
    const harnesses = [];
    const cleanupUserIds = new Set();
    const beforeCounts = await tableCounts();
    const beforeSanza = await sanzaSnapshot();
    const seed = (0, node_crypto_1.randomUUID)().replaceAll("-", "").toLowerCase();
    const mainHarness = await (0, authenticated_app_harness_1.createAuthenticatedHarness)();
    harnesses.push(mainHarness);
    try {
        const validSubject = `step3c-main-${seed.slice(0, 8)}`;
        const validPrincipal = unmappedPrincipal(validSubject);
        const validUsername = `Step${seed.slice(0, 8)}`;
        const duplicateSubject = `step3c-dup-${seed.slice(8, 16)}`;
        const concurrentUsername = `Case${seed.slice(16, 24)}`;
        const concurrentSubjectA = `step3c-race-a-${seed.slice(0, 6)}`;
        const concurrentSubjectB = `step3c-race-b-${seed.slice(6, 12)}`;
        const subjectRace = `step3c-same-${seed.slice(12, 20)}`;
        const sharedSubjectA = `shared-email:${seed}:one`;
        const sharedSubjectB = `shared-email:${seed}:two`;
        const sharedUsername = `Alias${seed.slice(24, 32)}`;
        await mainHarness.as(null).get("/api/onboarding/username-availability?username=DeckDeal").expect(401);
        await mainHarness.as(null).post("/api/onboarding/complete").send({ username: validUsername, displayName: "Anon" }).expect(401);
        const beforeMe = await mainHarness.as(validPrincipal).get("/api/auth/me").expect(200);
        assert(beforeMe.body.authenticated === true && beforeMe.body.onboarded === false, "Unmapped /auth/me should return onboarded false before onboarding.");
        const invalidAvailability = await mainHarness.as(validPrincipal)
            .get("/api/onboarding/username-availability?username=%20bad%20name%20")
            .expect(200);
        assert(invalidAvailability.body.available === false && invalidAvailability.body.reason === "invalid", "Invalid usernames must fail availability validation.");
        const reservedAvailability = await mainHarness.as(validPrincipal)
            .get("/api/onboarding/username-availability?username=DeckDeal")
            .expect(200);
        assert(reservedAvailability.body.available === false && reservedAvailability.body.reason === "reserved", "Reserved usernames must fail availability validation.");
        const takenAvailability = await mainHarness.as(validPrincipal)
            .get("/api/onboarding/username-availability?username=gaal")
            .expect(200);
        assert(takenAvailability.body.available === false && takenAvailability.body.reason === "taken", "Existing usernames must fail availability validation case-insensitively.");
        const availableAvailability = await mainHarness.as(validPrincipal)
            .get(`/api/onboarding/username-availability?username=${validUsername}`)
            .expect(200);
        assert(availableAvailability.body.available === true && availableAvailability.body.normalized === validUsername.toLowerCase(), "Valid usernames should be reported as available before creation.");
        const created = await mainHarness.as(validPrincipal)
            .post("/api/onboarding/complete")
            .send({ username: ` ${validUsername} `, displayName: "Sanza" })
            .expect(201);
        cleanupUserIds.add(created.body.user.id);
        assert(created.body.authenticated === true && created.body.onboarded === true && created.body.account_status === "active", "Successful onboarding must return an active onboarded response.");
        assert(created.body.user.id !== authenticated_app_harness_1.USER_1_ID, "Onboarding must create a new DeckDeal UUID instead of linking by display name.");
        assert(/^[0-9a-f-]{36}$/i.test(created.body.user.id), "Onboarding must return a UUID DeckDeal user ID.");
        assert(created.body.user.username === validUsername, "Onboarding must preserve chosen username casing in the stored response.");
        assert(created.body.user.display_name === "Sanza", "Onboarding must preserve the submitted display name.");
        const createdUser = await db.user_profiles.findUnique({
            where: { id: created.body.user.id },
            select: {
                id: true,
                auth_provider: true,
                auth_user_id: true,
                email: true,
                username: true,
                username_normalized: true,
                display_name: true,
                status: true,
            },
        });
        assert(createdUser, "Onboarding must create a user_profiles row.");
        assert(createdUser.auth_provider === "clerk" && createdUser.auth_user_id === validSubject, "Onboarding must bind the verified Clerk subject.");
        assert(createdUser.username === validUsername && createdUser.username_normalized === validUsername.toLowerCase(), "Onboarding must store username and normalized username.");
        assert(createdUser.display_name === "Sanza", "Onboarding must store the chosen display name.");
        assert(createdUser.status === "active", "Onboarding must create an active account.");
        const afterCounts = await tableCounts();
        for (const table of TABLES) {
            const expected = (beforeCounts[table] ?? 0) + (table === "user_profiles" ? 1 : 0);
            assert(afterCounts[table] === expected, `Onboarding changed unexpected table ${table}.`);
        }
        const afterMe = await mainHarness.as(validPrincipal).get("/api/auth/me").expect(200);
        assert(afterMe.body.onboarded === true && afterMe.body.user.id === created.body.user.id, "/auth/me must change from onboarded false to true after onboarding.");
        await mainHarness.as(validPrincipal)
            .post("/api/onboarding/complete")
            .send({ username: `Other${seed.slice(0, 6)}`, displayName: "Again" })
            .expect(403);
        const disabledPrincipal = {
            provider: "clerk",
            providerSubject: "disabled-test",
            deckdealUserId: authenticated_app_harness_1.USER_1_ID,
            sessionId: "disabled-test-session",
            accountStatus: "disabled",
        };
        await mainHarness.as(disabledPrincipal)
            .post("/api/onboarding/complete")
            .send({ username: `Block${seed.slice(0, 6)}`, displayName: "Blocked" })
            .expect(403);
        await mainHarness.as(unmappedPrincipal(`step3c-invalid-${seed.slice(0, 6)}`))
            .post("/api/onboarding/complete")
            .send({ username: "ab", displayName: "Short" })
            .expect(400);
        await mainHarness.as(unmappedPrincipal(`step3c-chars-${seed.slice(6, 12)}`))
            .post("/api/onboarding/complete")
            .send({ username: "bad-name", displayName: "Chars" })
            .expect(400);
        await mainHarness.as(unmappedPrincipal(`step3c-reserved-${seed.slice(12, 18)}`))
            .post("/api/onboarding/complete")
            .send({ username: "Support", displayName: "Reserved" })
            .expect(400);
        await mainHarness.as(unmappedPrincipal(duplicateSubject))
            .post("/api/onboarding/complete")
            .send({ username: validUsername.toUpperCase(), displayName: "Duplicate" })
            .expect(409);
        const usernameHarnessA = await (0, authenticated_app_harness_1.createAuthenticatedHarness)();
        const usernameHarnessB = await (0, authenticated_app_harness_1.createAuthenticatedHarness)();
        harnesses.push(usernameHarnessA, usernameHarnessB);
        const [usernameRaceA, usernameRaceB] = await Promise.all([
            usernameHarnessA.as(unmappedPrincipal(concurrentSubjectA))
                .post("/api/onboarding/complete")
                .send({ username: concurrentUsername, displayName: "Race One" }),
            usernameHarnessB.as(unmappedPrincipal(concurrentSubjectB))
                .post("/api/onboarding/complete")
                .send({ username: concurrentUsername.toLowerCase(), displayName: "Race Two" }),
        ]);
        const usernameStatuses = [usernameRaceA.status, usernameRaceB.status].sort((left, right) => left - right);
        assert(usernameStatuses[0] === 201 && usernameStatuses[1] === 409, "Concurrent case-insensitive username claims must produce exactly one success and one conflict.");
        const usernameWinner = usernameRaceA.status === 201 ? usernameRaceA.body.user.id : usernameRaceB.body.user.id;
        cleanupUserIds.add(usernameWinner);
        const usernameRows = await db.user_profiles.findMany({
            where: {
                auth_provider: "clerk",
                auth_user_id: {
                    in: [concurrentSubjectA, concurrentSubjectB],
                },
            },
            select: {
                id: true,
                username_normalized: true,
            },
        });
        assert(usernameRows.length === 1 && usernameRows[0]?.username_normalized === concurrentUsername.toLowerCase(), "The database must enforce exactly one case-insensitive username winner.");
        const subjectHarnessA = await (0, authenticated_app_harness_1.createAuthenticatedHarness)();
        const subjectHarnessB = await (0, authenticated_app_harness_1.createAuthenticatedHarness)();
        harnesses.push(subjectHarnessA, subjectHarnessB);
        const [subjectRaceA, subjectRaceB] = await Promise.all([
            subjectHarnessA.as(unmappedPrincipal(subjectRace))
                .post("/api/onboarding/complete")
                .send({ username: `Twin${seed.slice(0, 6)}`, displayName: "Twin One" }),
            subjectHarnessB.as(unmappedPrincipal(subjectRace))
                .post("/api/onboarding/complete")
                .send({ username: `Dual${seed.slice(6, 12)}`, displayName: "Twin Two" }),
        ]);
        const subjectStatuses = [subjectRaceA.status, subjectRaceB.status].sort((left, right) => left - right);
        assert(subjectStatuses[0] === 201 && subjectStatuses[1] === 403, "The same Clerk subject must not be able to create two DeckDeal profiles concurrently.");
        const subjectWinner = subjectRaceA.status === 201 ? subjectRaceA.body.user.id : subjectRaceB.body.user.id;
        cleanupUserIds.add(subjectWinner);
        const subjectRows = await db.user_profiles.findMany({
            where: {
                auth_provider: "clerk",
                auth_user_id: subjectRace,
            },
            select: {
                id: true,
            },
        });
        assert(subjectRows.length === 1, "Exactly one DeckDeal profile may exist for a single Clerk subject.");
        const sharedCreate = await mainHarness.as(unmappedPrincipal(sharedSubjectA))
            .post("/api/onboarding/complete")
            .send({ username: sharedUsername, displayName: "Shared Email" })
            .expect(201);
        cleanupUserIds.add(sharedCreate.body.user.id);
        const sharedMe = await mainHarness.as(unmappedPrincipal(sharedSubjectB)).get("/api/auth/me").expect(200);
        assert(sharedMe.body.authenticated === true && sharedMe.body.onboarded === false, "A different Clerk subject with the same email must remain unmapped before onboarding.");
        await mainHarness.as(unmappedPrincipal(sharedSubjectB))
            .post("/api/onboarding/complete")
            .send({ username: `Email${seed.slice(0, 6)}`, displayName: "Shared Email Two" })
            .expect(409);
        console.log(`Onboarding regression passed (${seed}).`);
    }
    finally {
        if (cleanupUserIds.size) {
            await db.user_profiles.deleteMany({
                where: {
                    id: {
                        in: [...cleanupUserIds],
                    },
                },
            });
        }
        for (const harness of harnesses.reverse()) {
            await harness.close();
        }
        const afterCleanupCounts = await tableCounts();
        const afterCleanupSanza = await sanzaSnapshot();
        assert(JSON.stringify(afterCleanupCounts) === JSON.stringify(beforeCounts), "Onboarding regression cleanup did not restore the database baseline.");
        assert(afterCleanupSanza === beforeSanza, "The existing Sanza mapping or profile changed during onboarding regression.");
        await db.$disconnect();
    }
}
runOnboardingRegression().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
