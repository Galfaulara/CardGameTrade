import {
  catalogSearchHref,
  resolveActiveGame,
  resourceGameSyncTarget,
  type DeckDealGame,
} from "../features/games/active-game.ts";
import {
  catalogSearchApiPath,
  searchCatalog,
} from "../features/marketplace/api.ts";

const assert = (condition: unknown, message: string) => {
  if (!condition) throw new Error(message);
};

const games: DeckDealGame[] = [
  { id: "game-mtg", slug: "mtg", name: "Magic: The Gathering" },
  { id: "game-pokemon", slug: "pokemon", name: "Pokémon" },
  { id: "game-yugioh", slug: "yugioh", name: "Yu-Gi-Oh!" },
];

for (const game of games) {
  const path = catalogSearchApiPath({
    query: "test card",
    page: 2,
    gameId: game.id,
  });
  assert(
    path.startsWith(`/catalog/games/${game.id}/search?`),
    `${game.slug} search must request its explicit game ID.`,
  );
}

assert(
  resolveActiveGame(games, "pokemon", "mtg")?.id === "game-pokemon",
  "The search URL game must win over a conflicting cookie.",
);
assert(
  resolveActiveGame(games, "removed-game", "yugioh")?.id === "game-yugioh",
  "A stale search URL game must use the approved fallback chain.",
);

const pageTwo = new URL(
  catalogSearchHref("Pikachu", "pokemon", 2),
  "https://deckdeal.test",
);
assert(
  pageTwo.searchParams.get("q") === "Pikachu" &&
    pageTwo.searchParams.get("game") === "pokemon" &&
    pageTwo.searchParams.get("page") === "2",
  "Search pagination must preserve query and game.",
);

const mtg = games[0]!;
assert(
  resourceGameSyncTarget(games, mtg.id, mtg.id) === null,
  "A matching resource game must not change the preference.",
);
assert(
  resourceGameSyncTarget(games, mtg.id, "game-pokemon")?.slug === "pokemon",
  "A cross-game card detail must synchronize to its authoritative game.",
);
assert(
  resourceGameSyncTarget(games, mtg.id, "unknown-game") === null,
  "An unresolved resource game must fail safely.",
);

const originalFetch = globalThis.fetch;
const requests: string[] = [];
globalThis.fetch = (async (input: string | URL | Request) => {
  requests.push(String(input));
  return new Response(
    JSON.stringify({
      query: "missing",
      items: [],
      page: 1,
      page_size: 60,
      total_results: 0,
      total_pages: 0,
    }),
    { status: 200, headers: { "Content-Type": "application/json" } },
  );
}) as typeof fetch;

try {
  const result = await searchCatalog({
    query: "missing",
    gameId: "game-pokemon",
  });
  assert(result.total_results === 0, "Zero selected-game results must remain empty.");
  assert(requests.length === 1, "Zero results must not trigger a cross-game retry.");
  assert(
    requests[0]?.includes("/catalog/games/game-pokemon/search?"),
    "The data helper must use only the supplied game ID.",
  );
} finally {
  globalThis.fetch = originalFetch;
}

console.log("Catalog game regression passed.");
