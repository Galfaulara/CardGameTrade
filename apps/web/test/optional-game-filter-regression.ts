import {
  ALL_GAMES_VALUE,
  resolveOptionalGameFilter,
} from "../features/games/optional-game-filter.ts";
import type { DeckDealGame } from "../features/games/active-game.ts";

const assert = (condition: unknown, message: string) => {
  if (!condition) throw new Error(message);
};

const games: DeckDealGame[] = [
  { id: "g-mtg", slug: "mtg", name: "Magic: The Gathering" },
  { id: "g-pokemon", slug: "pokemon", name: "Pokémon" },
  { id: "g-yugioh", slug: "yugioh", name: "Yu-Gi-Oh!" },
];

// An explicit "all" URL value must always win and clear any filter — the mandatory
// all-games escape hatch for historical transactions (and available for offers too).
assert(resolveOptionalGameFilter(games, ALL_GAMES_VALUE, "mtg") === undefined, "An explicit 'all' URL value must clear the filter even when a cookie is set.");
assert(resolveOptionalGameFilter(games, "all", null) === undefined, "'all' must clear the filter with no cookie present.");

// A valid URL value selects that game outright.
assert(resolveOptionalGameFilter(games, "pokemon", "mtg") === "pokemon", "A valid URL game must win over the cookie.");
assert(resolveOptionalGameFilter(games, "yugioh", undefined) === "yugioh", "A valid URL game must resolve without needing a cookie.");

// With no URL value, the account's active-game cookie provides the (optional) default —
// "may default to active-game filtering" — but only when it resolves to a real game.
assert(resolveOptionalGameFilter(games, undefined, "mtg") === "mtg", "No URL value must fall back to the active-game cookie.");
assert(resolveOptionalGameFilter(games, null, "pokemon") === "pokemon", "A null URL value must fall back to the active-game cookie.");

// Never a hard access boundary: any unresolvable state fails OPEN to "all games", never to
// an arbitrary default game (no MTG fallback) — this is what keeps history from being
// hidden behind a selection nobody made.
assert(resolveOptionalGameFilter(games, undefined, undefined) === undefined, "No URL value and no cookie must fail open to all games, not assume MTG.");
assert(resolveOptionalGameFilter(games, "not-a-real-game", "mtg") === "mtg", "An invalid URL value must fall back to the cookie rather than erroring or defaulting to MTG.");
assert(resolveOptionalGameFilter(games, "not-a-real-game", "also-not-real") === undefined, "An invalid URL value and an invalid cookie must fail open to all games.");
assert(resolveOptionalGameFilter([], undefined, "mtg") === undefined, "An empty/failed games load must fail open to all games rather than erroring.");

console.log("Optional game filter regression passed.");
