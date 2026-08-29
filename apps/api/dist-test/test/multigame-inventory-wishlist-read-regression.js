"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const database_service_1 = require("../src/database/database.service");
const discovery_service_1 = require("../src/discovery/discovery.service");
const inventory_service_1 = require("../src/inventory/inventory.service");
const wishlists_service_1 = require("../src/wishlists/wishlists.service");
const fixtureUserId = "92d9585a-7c59-4c02-8ee4-a9c24b9787d0";
const pokemonCollectionId = "4f300001-0000-4000-8000-000000000001";
const assert = (condition, message) => {
    if (!condition)
        throw new Error(message);
};
const query = (gameSlug) => ({
    page: 1,
    pageSize: 48,
    q: "",
    status: "all",
    condition: "all",
    collection: "all",
    gameSlug,
});
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
        const inventory = new inventory_service_1.InventoryService(database, {});
        const wishlists = new wishlists_service_1.WishlistsService(database);
        const discovery = new discovery_service_1.DiscoveryService(database);
        const games = await database.client.games.findMany({
            where: { slug: { in: ["mtg", "pokemon", "yugioh"] } },
            select: { id: true, slug: true },
        });
        const bySlug = new Map(games.map((game) => [game.slug, game.id]));
        const mtgGameId = bySlug.get("mtg");
        const mtgInventoryOwner = await database.client.inventory_items.findFirst({
            where: { game_id: mtgGameId, owner_user_id: { not: null } },
            select: { owner_user_id: true },
        });
        assert(mtgInventoryOwner?.owner_user_id, "An MTG inventory owner is required for runtime proof.");
        const mtgInventory = await inventory.getMyInventory(mtgInventoryOwner.owner_user_id, query("mtg"));
        assert(mtgInventory.items.length > 0 && mtgInventory.items.every((item) => item.game_id === mtgGameId), "MTG inventory filtering is incorrect.");
        const mtgCollection = await database.client.collections.findFirst({
            where: { game_id: mtgGameId },
            select: { user_id: true },
        });
        assert(mtgCollection, "An MTG collection is required for runtime proof.");
        const mtgCollections = await inventory.getUserCollections(mtgCollection.user_id, { gameSlug: "mtg" });
        assert(mtgCollections.length > 0 && mtgCollections.every((collection) => collection.game_id === mtgGameId), "MTG collection filtering is incorrect.");
        const mtgWishlist = await database.client.wishlists.findFirst({
            where: { game_id: mtgGameId, status: { not: "deleted" } },
            select: { user_id: true },
        });
        assert(mtgWishlist, "An MTG wishlist is required for runtime proof.");
        const mtgWishlists = await wishlists.getUserWishlists(mtgWishlist.user_id, { gameSlug: "mtg" });
        assert(mtgWishlists.length > 0 && mtgWishlists.every((wishlist) => wishlist.game_id === mtgGameId), "MTG wishlist filtering is incorrect.");
        const unfilteredInventory = await inventory.getMyInventory(fixtureUserId, query());
        assert(unfilteredInventory.items.length > 0, "Unfiltered inventory remains available.");
        const unfilteredCollections = await inventory.getUserCollections(fixtureUserId);
        assert(unfilteredCollections.length >= 2, "Unfiltered collection behavior remains available.");
        const unfilteredWishlists = await wishlists.getUserWishlists(fixtureUserId);
        assert(unfilteredWishlists.length >= 2, "Unfiltered wishlist behavior remains available.");
        for (const slug of ["pokemon", "yugioh"]) {
            const gameId = bySlug.get(slug);
            const result = await inventory.getMyInventory(fixtureUserId, query(slug));
            assert(result.items.length > 0, `${slug} fixture inventory is missing.`);
            assert(result.items.every((item) => item.game_id === gameId), `${slug} inventory leaked another game.`);
            assert(result.pagination.total_count === result.summary.filtered_inventory_row_count, `${slug} filtered totals disagree.`);
            const collections = await inventory.getUserCollections(fixtureUserId, { gameSlug: slug });
            assert(collections.length === 1 && collections.every((collection) => collection.game_id === gameId), `${slug} collection filter is incorrect.`);
            const userWishlists = await wishlists.getUserWishlists(fixtureUserId, { gameSlug: slug });
            assert(userWishlists.length === 1 && userWishlists.every((wishlist) => wishlist.game_id === gameId), `${slug} wishlist filter is incorrect.`);
            const publicItems = await wishlists.getPublicWishlistItems({ gameSlug: slug });
            assert(publicItems.length > 0 && publicItems.every((item) => item.game_id === gameId && item.wishlist.game_id === gameId), `${slug} public wishlist items leaked another game.`);
            const persistedTargets = await database.client.wishlist_items.findMany({
                where: { id: { in: publicItems.map((item) => item.id) } },
                select: {
                    game_id: true,
                    canonical_cards: { select: { game_id: true } },
                    card_printings: { select: { game_id: true } },
                },
            });
            assert(persistedTargets.every((item) => item.game_id === gameId &&
                (!item.canonical_cards || item.canonical_cards.game_id === gameId) &&
                (!item.card_printings || item.card_printings.game_id === gameId)), `${slug} wishlist target game disagrees with its parent.`);
        }
        assert(await rejectsUnknown(() => inventory.getMyInventory(fixtureUserId, query("unknown-cert-game"))), "Unknown inventory game must reject.");
        assert(await rejectsUnknown(() => inventory.getUserCollections(fixtureUserId, { gameSlug: "unknown-cert-game" })), "Unknown collection game must reject.");
        assert(await rejectsUnknown(() => wishlists.getPublicWishlistItems({ gameSlug: "unknown-cert-game" })), "Unknown wishlist game must reject.");
        const detail = await discovery.getCollection(pokemonCollectionId, { page: 1, pageSize: 24 });
        assert(detail.collection.game_id === bySlug.get("pokemon"), "Collection detail lacks authoritative game identity.");
        console.log("Multi-game inventory, collection, and wishlist read regression passed.");
    }
    finally {
        await database.onModuleDestroy();
    }
}
void main();
