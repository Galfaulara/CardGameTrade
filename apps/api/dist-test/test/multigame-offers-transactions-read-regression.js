"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const database_service_1 = require("../src/database/database.service");
const offers_service_1 = require("../src/offers/offers.service");
const transactions_service_1 = require("../src/transactions/transactions.service");
const wishlists_service_1 = require("../src/wishlists/wishlists.service");
const fixtureUserId = "92d9585a-7c59-4c02-8ee4-a9c24b9787d0";
const assert = (condition, message) => {
    if (!condition)
        throw new Error(message);
};
async function rejectsUnknown(action) {
    try {
        await action();
    }
    catch (error) {
        return error instanceof common_1.BadRequestException;
    }
    return false;
}
async function main() {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl)
        throw new Error("DATABASE_URL is required.");
    const database = new database_service_1.DatabaseService(new config_1.ConfigService({ DATABASE_URL: databaseUrl }));
    await database.onModuleInit();
    try {
        const current = await database.client.$queryRaw `SELECT current_database()`;
        assert(current[0]?.current_database === "deckdeal_multigame_dryrun", "Regression must run against the certified clone.");
        const games = await database.client.games.findMany({
            where: { slug: { in: ["mtg", "pokemon", "yugioh"] } },
            select: { id: true, slug: true },
        });
        const gameIdBySlug = new Map(games.map((game) => [game.slug, game.id]));
        const mtgId = gameIdBySlug.get("mtg");
        assert(mtgId, "The mtg game fixture is required.");
        const offers = new offers_service_1.OffersService(database);
        const transactions = new transactions_service_1.TransactionsService(database);
        const wishlists = new wishlists_service_1.WishlistsService(database);
        // Real durable fixtures in this clone predate the multi-game catalog seed and are all
        // MTG (backfilled game_id). This proves the real, unfiltered/mtg/game_id-exposure paths
        // against genuine rows, and proves pokemon/yugioh filtering genuinely narrows in
        // Postgres (to zero, since no such offer/transaction rows exist yet) rather than
        // silently falling back to the unfiltered set. It does not prove a *mixed*-game result
        // set partitions correctly with real rows — that is covered by the deterministic unit
        // regressions (test:offer-list-game-filter, test:transaction-game-filter) instead.
        // --- Listing offers: sent ---
        const sentAll = await offers.getUserSentOffers(fixtureUserId);
        assert(sentAll.length > 0, "The fixture user must have real sent offers to read.");
        assert(sentAll.every((offer) => typeof offer.game_id === "string"), "Sent offers must expose authoritative game_id.");
        const sentMtg = await offers.getUserSentOffers(fixtureUserId, { gameSlug: "mtg" });
        assert(sentMtg.length === sentAll.length, "mtg-filtered sent offers must match the unfiltered set (all real offers are MTG today).");
        if (gameIdBySlug.has("pokemon")) {
            const sentPokemon = await offers.getUserSentOffers(fixtureUserId, { gameSlug: "pokemon" });
            assert(sentPokemon.length === 0, "pokemon-filtered sent offers must be empty against real data with no such rows yet.");
        }
        assert(await rejectsUnknown(() => offers.getUserSentOffers(fixtureUserId, { gameSlug: "unknown-cert-game" })), "Unknown gameSlug must reject with a clean 400 for sent offers.");
        // --- Listing offers: received ---
        const receivedAll = await offers.getUserReceivedOffers(fixtureUserId);
        assert(receivedAll.length > 0, "The fixture user must have real received offers to read.");
        assert(receivedAll.every((offer) => typeof offer.game_id === "string"), "Received offers must expose authoritative game_id.");
        const receivedMtg = await offers.getUserReceivedOffers(fixtureUserId, undefined, { gameSlug: "mtg" });
        assert(receivedMtg.length === receivedAll.length, "mtg-filtered received offers must match the unfiltered set.");
        assert(await rejectsUnknown(() => offers.getUserReceivedOffers(fixtureUserId, undefined, { gameSlug: "unknown-cert-game" })), "Unknown gameSlug must reject with a clean 400 for received offers.");
        // --- Wishlist offers: sent ---
        const wishlistSentAll = await wishlists.getUserSentWishlistOffers(fixtureUserId);
        if (wishlistSentAll.length > 0) {
            assert(wishlistSentAll.every((offer) => typeof offer.game_id === "string"), "Sent wishlist offers must expose authoritative game_id.");
            const wishlistSentMtg = await wishlists.getUserSentWishlistOffers(fixtureUserId, { gameSlug: "mtg" });
            assert(wishlistSentMtg.length === wishlistSentAll.length, "mtg-filtered sent wishlist offers must match the unfiltered set.");
        }
        assert(await rejectsUnknown(() => wishlists.getUserSentWishlistOffers(fixtureUserId, { gameSlug: "unknown-cert-game" })), "Unknown gameSlug must reject with a clean 400 for sent wishlist offers.");
        // --- Transactions: unfiltered history remains available, all-games path intact ---
        const transactionsAll = await transactions.getUserTransactions(fixtureUserId);
        assert(transactionsAll.length > 0, "The fixture user must have real transaction history to read.");
        assert(transactionsAll.every((t) => typeof t.game_id === "string"), "Transactions must expose authoritative game_id.");
        const transactionsMtg = await transactions.getUserTransactions(fixtureUserId, { gameSlug: "mtg" });
        assert(transactionsMtg.length === transactionsAll.length, "mtg-filtered transaction history must match the unfiltered set (all real transactions are MTG today).");
        if (gameIdBySlug.has("yugioh")) {
            const transactionsYugioh = await transactions.getUserTransactions(fixtureUserId, { gameSlug: "yugioh" });
            assert(transactionsYugioh.length === 0, "yugioh-filtered transaction history must be empty against real data with no such rows yet.");
        }
        assert(await rejectsUnknown(() => transactions.getUserTransactions(fixtureUserId, { gameSlug: "unknown-cert-game" })), "Unknown gameSlug must reject with a clean 400 for transaction history.");
        // --- Transaction detail: UUID-addressed, no gameSlug, exposes authoritative game_id ---
        const detail = await transactions.getUserTransaction(fixtureUserId, transactionsAll[0].id);
        assert(detail.id === transactionsAll[0].id && typeof detail.game_id === "string", "Transaction detail must expose authoritative game_id without requiring a gameSlug parameter.");
        console.log(JSON.stringify({
            sentOffers: sentAll.length,
            receivedOffers: receivedAll.length,
            transactions: transactionsAll.length,
            allExposeGameId: "pass",
            mtgMatchesUnfiltered: "pass",
            unknownGameSlugRejected: "pass",
        }));
    }
    finally {
        await database.onModuleDestroy();
    }
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
