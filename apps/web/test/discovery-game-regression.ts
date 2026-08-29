import { gameSwitchHref, resourceGameSyncTarget, type DeckDealGame } from "../features/games/active-game.ts";
import { canAppendDiscoveryResponse, discoveryFeedSearch } from "../features/games/discovery-game.ts";

const assert = (condition: unknown, message: string) => {
  if (!condition) throw new Error(message);
};

const pokemon = discoveryFeedSearch({ view: "listings", filter: "all", cursor: "poke-cursor", gameSlug: "pokemon" });
assert(pokemon.get("game") === "pokemon", "Pokémon discovery must build a Pokémon BFF request.");
assert(pokemon.get("cursor") === "poke-cursor", "Load-more must preserve its cursor.");
const yugioh = discoveryFeedSearch({ view: "listings", filter: "trade", gameSlug: "yugioh" });
assert(yugioh.get("game") === "yugioh", "Yu-Gi-Oh! discovery must build a Yu-Gi-Oh! BFF request.");
assert(!discoveryFeedSearch({ view: "stores", filter: "all", gameSlug: "pokemon" }).has("game"), "The global store feed must remain unfiltered.");

// 4G.9: card-centric collection discovery must be scoped by game exactly like listings,
// including through load-more (cursor is preserved alongside the game param).
const pokemonCollections = discoveryFeedSearch({ view: "collections", filter: "all", cursor: "collection-cursor", gameSlug: "pokemon" });
assert(pokemonCollections.get("game") === "pokemon", "Collection discovery must build a game-scoped BFF request.");
assert(pokemonCollections.get("cursor") === "collection-cursor", "Collection load-more must preserve its cursor alongside the game filter.");
assert(discoveryFeedSearch({ view: "collections", filter: "all", gameSlug: "yugioh" }).get("game") === "yugioh", "Yu-Gi-Oh! collection discovery must build a Yu-Gi-Oh! BFF request.");
assert(!discoveryFeedSearch({ view: "collections", filter: "all" }).has("game"), "An unresolved active game must not fabricate a collection game filter.");

const switched = new URL(gameSwitchHref("/discover", "view=listings&cursor=old&intent=trade", "yugioh"), "https://deckdeal.test");
assert(switched.searchParams.get("game") === "yugioh" && !switched.searchParams.has("cursor"), "A discovery game switch must reset cursor.");
assert(canAppendDiscoveryResponse("pokemon", "pokemon"), "Same-game load-more results may append.");
assert(!canAppendDiscoveryResponse("pokemon", "yugioh"), "A stale old-game response must not append.");

const games: DeckDealGame[] = [
  { id: "mtg-id", slug: "mtg", name: "Magic: The Gathering" },
  { id: "pokemon-id", slug: "pokemon", name: "Pokémon" },
];
assert(resourceGameSyncTarget(games, "mtg-id", "mtg-id") === null, "Same-game listing detail must not synchronize.");
assert(resourceGameSyncTarget(games, "mtg-id", "pokemon-id")?.slug === "pokemon", "Cross-game listing detail must synchronize.");
const listingUrl = "/trade/00000000-0000-4000-8000-000000000001";
assert(!new URL(listingUrl, "https://deckdeal.test").searchParams.has("game"), "Listing UUID URLs must remain free of game query parameters.");

console.log("Discovery game regression passed.");
