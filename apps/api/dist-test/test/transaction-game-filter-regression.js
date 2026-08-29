"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const transactions_service_1 = require("../src/transactions/transactions.service");
const assert = (value, message) => {
    if (!value)
        throw new Error(message);
};
const games = [
    { id: "game-mtg", slug: "mtg" },
    { id: "game-pokemon", slug: "pokemon" },
    { id: "game-yugioh", slug: "yugioh" },
];
const transactions = [
    { id: "txn-mtg", game_id: "game-mtg", seller_user_id: "user-1", counterparty_user_id: "user-2", seller_store_id: null, counterparty_store_id: null },
    { id: "txn-pokemon", game_id: "game-pokemon", seller_user_id: "user-3", counterparty_user_id: "user-1", seller_store_id: null, counterparty_store_id: null },
    { id: "txn-other-user", game_id: "game-mtg", seller_user_id: "user-2", counterparty_user_id: "user-3", seller_store_id: null, counterparty_store_id: null },
];
function matchesWhere(row, where) {
    return Object.keys(where).every((key) => {
        if (key === "OR") {
            const options = where.OR;
            return options.some((option) => matchesWhere(row, option));
        }
        return row[key] === where[key];
    });
}
function fakeDatabase() {
    return {
        client: {
            user_profiles: {
                findUnique: async ({ where: { id } }) => id === "user-1" ? { id: "user-1" } : null,
                findMany: async () => [],
            },
            games: {
                findUnique: async ({ where: { slug } }) => games.find((game) => game.slug === slug) ?? null,
            },
            transactions: {
                findMany: async ({ where }) => transactions.filter((transaction) => matchesWhere(transaction, where)),
                findFirst: async ({ where }) => transactions.find((transaction) => matchesWhere(transaction, where)) ?? null,
            },
            transaction_items: { findMany: async () => [] },
            store_trade_handoffs: { findMany: async () => [] },
            transaction_item_custody: { findMany: async () => [] },
            store_staff: { findMany: async () => [] },
            stores: { findMany: async () => [] },
        },
    };
}
async function main() {
    const service = new transactions_service_1.TransactionsService(fakeDatabase());
    // 5. Unfiltered history remains available (both of the user's transactions, either role).
    const all = await service.getUserTransactions("user-1");
    assert(all.map((t) => t.id).sort().join(",") === ["txn-mtg", "txn-pokemon"].sort().join(","), "Unfiltered transaction history must preserve current behavior (both seller and counterparty roles, all games).");
    // 6. Optional game filter returns only the requested game, without narrowing ownership.
    const mtgOnly = await service.getUserTransactions("user-1", { gameSlug: "mtg" });
    assert(mtgOnly.length === 1 && mtgOnly[0].id === "txn-mtg" && mtgOnly[0].game_id === "game-mtg", "mtg-filtered transactions must return only the user's MTG transaction and expose game_id.");
    const pokemonOnly = await service.getUserTransactions("user-1", { gameSlug: "pokemon" });
    assert(pokemonOnly.length === 1 && pokemonOnly[0].id === "txn-pokemon", "pokemon-filtered transactions must return only the user's Pokémon transaction.");
    // 10. A game with zero matching transactions must return empty, using the same predicate
    // (never silently falls back to the unfiltered set).
    const yugiohOnly = await service.getUserTransactions("user-1", { gameSlug: "yugioh" });
    assert(yugiohOnly.length === 0, "yugioh-filtered transactions must be empty when the user has no such transactions.");
    // Never expands access: another user's transaction must not leak in regardless of filter.
    for (const list of [all, mtgOnly, pokemonOnly, yugiohOnly]) {
        assert(!list.some((t) => t.id === "txn-other-user"), "The game filter must never surface a transaction the user isn't a participant in.");
    }
    // 3 (transactions analog). Unknown game must produce a clean 400.
    let threw = false;
    try {
        await service.getUserTransactions("user-1", { gameSlug: "unknown-cert-game" });
    }
    catch (error) {
        threw = error instanceof common_1.BadRequestException;
    }
    assert(threw, "An unknown gameSlug must raise a BadRequestException for transaction history.");
    // 7/8. Detail remains UUID-addressed (no gameSlug param) and exposes authoritative game_id,
    // which the web layer uses to synchronize ActiveGame without any URL rewrite.
    const detail = await service.getUserTransaction("user-1", "txn-mtg");
    assert(detail.id === "txn-mtg" && detail.game_id === "game-mtg", "Transaction detail must expose the authoritative game_id.");
    // Detail must remain scoped to the requesting user's own participation, unaffected by this change.
    let detailThrew = false;
    try {
        await service.getUserTransaction("user-1", "txn-other-user");
    }
    catch (error) {
        detailThrew = error instanceof common_1.NotFoundException;
    }
    assert(detailThrew, "Transaction detail must still reject a transaction the user does not participate in.");
    console.log("Transaction game filter regression passed.");
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
