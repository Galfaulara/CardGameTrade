import { orderGames, type DeckDealGame } from "./active-game.ts";

// Distinguishes account activity surfaces (offers, transaction history) from the hard
// game-centric boundary used by /search, /discover, and /account/inventory. Those routes
// always resolve to *some* active game (falling back to mtg); activity surfaces must never
// do that — an unresolved filter must fail open to "all games" rather than hide history
// behind a default game nobody chose.
export const ALL_GAMES_VALUE = "all";

export function resolveOptionalGameFilter(
  games: readonly DeckDealGame[],
  urlValue: string | null | undefined,
  cookieSlug: string | null | undefined,
): string | undefined {
  if (urlValue === ALL_GAMES_VALUE) return undefined;
  const ordered = orderGames(games);
  const bySlug = (slug?: string | null) =>
    slug ? ordered.find((game) => game.slug === slug) : undefined;
  return (bySlug(urlValue) ?? bySlug(cookieSlug))?.slug;
}
