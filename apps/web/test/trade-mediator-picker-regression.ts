import {
  resolveMediatorGameSlug,
  selectMediatorsForSlug,
} from "../features/games/resource-mediators.ts";
import type { DeckDealGame } from "../features/games/active-game.ts";
import { resolveOptionalGameFilter } from "../features/games/optional-game-filter.ts";
import { tradeMediatorsApiPath } from "../features/marketplace/api.ts";

const assert = (condition: unknown, message: string) => {
  if (!condition) throw new Error(message);
};

const games: DeckDealGame[] = [
  { id: "g-mtg", slug: "mtg", name: "Magic: The Gathering" },
  { id: "g-pokemon", slug: "pokemon", name: "Pokémon" },
  { id: "g-yugioh", slug: "yugioh", name: "Yu-Gi-Oh!" },
];

// A resource-authoritative picker must resolve from the resource's own game_id.
assert(resolveMediatorGameSlug(games, "g-mtg") === "mtg", "An MTG resource must resolve MTG-eligible mediators.");
assert(resolveMediatorGameSlug(games, "g-pokemon") === "pokemon", "A Pokémon resource must resolve Pokémon-eligible mediators.");
assert(resolveMediatorGameSlug(games, "g-yugioh") === "yugioh", "A Yu-Gi-Oh! resource must resolve Yu-Gi-Oh!-eligible mediators.");

// Unresolved resources must fail closed (null), never assume a game.
assert(resolveMediatorGameSlug(games, undefined) === null, "A missing resource game_id (e.g. no listing) must fail closed to null.");
assert(resolveMediatorGameSlug(games, null) === null, "A null resource game_id must fail closed to null.");
assert(resolveMediatorGameSlug(games, "g-unknown") === null, "A resource game_id absent from loaded games must fail closed to null, not assume any game.");
assert(resolveMediatorGameSlug([], "g-mtg") === null, "An empty/failed games load must fail closed to null.");

// The picker must never substitute the global/unfiltered list for an unresolved resource
// game: selectMediatorsForSlug(null, ...) has no key it could look up, so it can only ever
// return an empty list, regardless of what mediatorsBySlug happens to contain.
const mediatorsBySlug = new Map<string, { id: string }[]>([
  ["mtg", [{ id: "store-mtg" }]],
  ["pokemon", [{ id: "store-pokemon" }]],
]);
assert(
  selectMediatorsForSlug("mtg", mediatorsBySlug).length === 1 &&
    selectMediatorsForSlug("mtg", mediatorsBySlug)[0]!.id === "store-mtg",
  "A resolved slug must select that game's mediator list.",
);
assert(
  selectMediatorsForSlug(null, mediatorsBySlug).length === 0,
  "An unresolved (null) slug must fail closed to an empty list rather than any global fallback.",
);
assert(
  selectMediatorsForSlug("yugioh", mediatorsBySlug).length === 0,
  "A resolved slug with no cached entry must be empty, not fall back to another game's list.",
);

// The request itself must carry the parent resource's game slug, and the unfiltered path
// must stay exactly as it was for backward compatibility with global/account-level pickers.
assert(tradeMediatorsApiPath() === "/stores/trade-mediators", "The global/unfiltered mediator path must remain unchanged.");
assert(tradeMediatorsApiPath("mtg") === "/stores/trade-mediators?gameSlug=mtg", "An MTG resource picker must request the mtg-filtered path.");
assert(tradeMediatorsApiPath("pokemon") === "/stores/trade-mediators?gameSlug=pokemon", "A Pokémon resource picker must request the pokemon-filtered path.");
assert(tradeMediatorsApiPath("yugioh") === "/stores/trade-mediators?gameSlug=yugioh", "A Yu-Gi-Oh! resource picker must request the yugioh-filtered path.");

// End-to-end composition: given a listing's authoritative game_id, the picker must resolve
// and request exactly that game's mediator path — proving the resource's game drives the
// request, not merely a cookie/selector.
for (const [gameId, expectedSlug] of [["g-mtg", "mtg"], ["g-pokemon", "pokemon"], ["g-yugioh", "yugioh"]] as const) {
  const slug = resolveMediatorGameSlug(games, gameId);
  assert(tradeMediatorsApiPath(slug ?? undefined) === `/stores/trade-mediators?gameSlug=${expectedSlug}`, `Resource game_id ${gameId} must produce the ${expectedSlug}-filtered mediator request.`);
}

// And when the resource's game can't be resolved, the composition must request nothing
// filterable and must not degrade into the unfiltered/global path.
const unresolvedSlug = resolveMediatorGameSlug(games, "g-unknown");
assert(unresolvedSlug === null, "Unresolved resource game must not produce a slug.");
assert(
  selectMediatorsForSlug(unresolvedSlug, mediatorsBySlug).length === 0,
  "Unresolved resource game must fail closed to no mediators rather than the global list.",
);

// 4G.7B: the account/offers page filter (active game / ?game=) must never influence the
// received-offer mediator picker — it must keep resolving strictly from the listing's own
// game_id, even when the page's resolved filter points at a different game entirely.
const pageActiveGame = resolveOptionalGameFilter(games, undefined, "pokemon");
assert(pageActiveGame === "pokemon", "Sanity check: the page filter resolves to pokemon via the active-game cookie.");
const listingGameId = "g-mtg"; // an MTG listing appearing on a page currently filtered to Pokémon
const mediatorSlugForListing = resolveMediatorGameSlug(games, listingGameId);
assert(mediatorSlugForListing === "mtg", "The mediator picker must resolve from the listing's game_id even when the page's active-game filter differs.");
assert(mediatorSlugForListing !== pageActiveGame, "Sanity check: this scenario only proves something when the listing's game actually differs from the page filter.");
assert(tradeMediatorsApiPath(mediatorSlugForListing ?? undefined) === "/stores/trade-mediators?gameSlug=mtg", "The mediator request must use the listing's game, not the page's active-game filter.");

console.log("Trade-mediator picker regression passed.");
