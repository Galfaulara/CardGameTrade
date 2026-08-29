import type { DeckDealGame } from "./active-game";

export function authoritativeCollectionGameSlug(
  games: readonly DeckDealGame[],
  resourceGameId: string | undefined,
  activeGameSlug: string | null,
) {
  if (resourceGameId) {
    return games.find((game) => game.id === resourceGameId)?.slug ?? null;
  }
  return activeGameSlug;
}

export function collectionOptionsHref(gameSlug: string | null) {
  return gameSlug
    ? `/api/me/collections/options?game=${encodeURIComponent(gameSlug)}`
    : null;
}

export function collectionOptionsApiPath(userId: string, gameSlug: string) {
  return `/inventory/users/${encodeURIComponent(userId)}/collections?gameSlug=${encodeURIComponent(gameSlug)}`;
}

export function inventoryGameQuery(gameSlug: string) {
  const query = new URLSearchParams();
  query.set("gameSlug", gameSlug);
  return query;
}
