import { resolveResourceGame, type DeckDealGame } from "./active-game.ts";

// A trade mediator picker tied to a specific resource (a listing, an offer targeting a
// listing, etc.) must resolve eligibility from that resource's authoritative game_id, not
// the account's active-game cookie/selector. When the game_id can't be resolved against the
// loaded games, this returns null so callers fail closed instead of requesting the
// unfiltered/global mediator list.
export function resolveMediatorGameSlug(
  games: readonly DeckDealGame[],
  authoritativeGameId: string | null | undefined,
): string | null {
  if (!authoritativeGameId) return null;
  return resolveResourceGame(games, authoritativeGameId)?.slug ?? null;
}

// Never falls back to a global/unfiltered entry when slug is null — there is no key under
// which a "global" list could be stored here, so an unresolved resource game always yields
// an empty eligible-store list rather than every mediator.
export function selectMediatorsForSlug<T>(
  slug: string | null,
  mediatorsBySlug: ReadonlyMap<string, T[]>,
): T[] {
  return slug ? (mediatorsBySlug.get(slug) ?? []) : [];
}
