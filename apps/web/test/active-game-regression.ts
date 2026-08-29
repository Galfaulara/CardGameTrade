import {
  gameSwitchHref,
  orderGames,
  resolveActiveGame,
  searchHref,
  type DeckDealGame,
} from "../features/games/active-game.ts";

const assert = (condition: unknown, message: string) => {
  if (!condition) throw new Error(message);
};

const games: DeckDealGame[] = [
  { id: "4", slug: "zeta", name: "Zeta Game" },
  { id: "2", slug: "pokemon", name: "Pokémon" },
  { id: "5", slug: "alpha", name: "Alpha Game" },
  { id: "1", slug: "mtg", name: "Magic: The Gathering" },
  { id: "3", slug: "yugioh", name: "Yu-Gi-Oh!" },
];

assert(resolveActiveGame(games, "pokemon", "mtg")?.slug === "pokemon", "A valid URL slug must win over the cookie.");
assert(resolveActiveGame(games, null, "yugioh")?.slug === "yugioh", "A valid cookie must win when URL game is absent.");
assert(resolveActiveGame(games, "stale", "pokemon")?.slug === "pokemon", "A stale URL slug must fall back to a valid cookie.");
assert(resolveActiveGame(games, null, "stale")?.slug === "mtg", "A stale cookie must fall back to MTG.");
assert(resolveActiveGame(games.filter((game) => game.slug !== "mtg"), null, null)?.slug === "pokemon", "Without MTG, deterministic preferred ordering must provide the fallback.");
assert(orderGames(games).map((game) => game.slug).join(",") === "mtg,pokemon,yugioh,alpha,zeta", "Games must use preferred order followed by alphabetical unknown games.");

const switched = new URL(gameSwitchHref("/search", "q=dragon&page=4&cursor=abc&rarity=rare", "pokemon"), "https://deckdeal.test");
assert(switched.searchParams.get("q") === "dragon" && switched.searchParams.get("rarity") === "rare", "Game switching must preserve non-pagination intent.");
assert(!switched.searchParams.has("page") && !switched.searchParams.has("cursor"), "Game switching must reset page and cursor.");
assert(switched.searchParams.get("game") === "pokemon", "Game-centric switching must set game.");

const global = new URL(gameSwitchHref("/account/profile", "tab=stores", "pokemon"), "https://deckdeal.test");
assert(!global.searchParams.has("game") && global.searchParams.get("tab") === "stores", "Global route switching must not add game or discard existing query state.");

const search = new URL(searchHref("Dark Magician", "yugioh"), "https://deckdeal.test");
assert(search.pathname === "/search" && search.searchParams.get("q") === "Dark Magician" && search.searchParams.get("game") === "yugioh", "Search navigation must carry the active game.");

console.log("Active-game regression passed.");
