import { gameSwitchHref, resourceGameSyncTarget, type DeckDealGame } from "../features/games/active-game.ts";
import { authoritativeCollectionGameSlug, collectionOptionsApiPath, collectionOptionsHref, inventoryGameQuery } from "../features/games/inventory-game.ts";

const assert = (condition: unknown, message: string) => {
  if (!condition) throw new Error(message);
};

const games: DeckDealGame[] = [
  { id: "mtg-id", slug: "mtg", name: "Magic: The Gathering" },
  { id: "pokemon-id", slug: "pokemon", name: "Pokémon" },
  { id: "yugioh-id", slug: "yugioh", name: "Yu-Gi-Oh!" },
];

assert(inventoryGameQuery("pokemon").get("gameSlug") === "pokemon", "Pokémon inventory must request Pokémon.");
assert(inventoryGameQuery("yugioh").get("gameSlug") === "yugioh", "Yu-Gi-Oh! inventory must request Yu-Gi-Oh!.");

const switched = new URL(
  gameSwitchHref("/account/inventory", "game=pokemon&page=3&cursor=old&collection=pokemon-id&q=char", "yugioh"),
  "https://deckdeal.test",
);
assert(!switched.searchParams.has("page") && !switched.searchParams.has("cursor"), "A game switch must reset inventory pagination.");
assert(!switched.searchParams.has("collection"), "A game switch must remove the prior game's collection filter.");
assert(switched.searchParams.get("q") === "char", "A game switch must preserve the text filter.");

assert(authoritativeCollectionGameSlug(games, "mtg-id", "pokemon") === "mtg", "The resource game must win over active preference.");
assert(collectionOptionsHref("pokemon") === "/api/me/collections/options?game=pokemon", "Collection options must be game-scoped.");
assert(collectionOptionsApiPath("user/id", "yugioh") === "/inventory/users/user%2Fid/collections?gameSlug=yugioh", "The BFF must map its game slug to the Nest collection contract.");
assert(collectionOptionsHref(null) === null, "An unresolved resource game must not fall back to mixed collections.");
assert(authoritativeCollectionGameSlug(games, "missing", "pokemon") === null, "An unknown resource game must fail closed.");

assert(resourceGameSyncTarget(games, "mtg-id", "mtg-id") === null, "A same-game collection detail must not synchronize.");
assert(resourceGameSyncTarget(games, "mtg-id", "pokemon-id")?.slug === "pokemon", "A cross-game collection detail must synchronize.");
assert(!new URL("/collections/00000000-0000-4000-8000-000000000001", "https://deckdeal.test").searchParams.has("game"), "Collection UUID routes stay game-query-free.");

console.log("Inventory and wishlist game regression passed.");
