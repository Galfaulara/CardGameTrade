export const ACTIVE_GAME_COOKIE = "deckdeal_active_game";
export const ACTIVE_GAME_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export type DeckDealGame = {
  id: string;
  name: string;
  slug: string;
};

const preferredGameOrder = ["mtg", "pokemon", "yugioh"] as const;
const preferredRank = new Map<string, number>(
  preferredGameOrder.map((slug, index) => [slug, index]),
);

export function orderGames(games: readonly DeckDealGame[]) {
  return [...games].sort((left, right) => {
    const leftRank = preferredRank.get(left.slug);
    const rightRank = preferredRank.get(right.slug);
    if (leftRank !== undefined || rightRank !== undefined) {
      if (leftRank === undefined) return 1;
      if (rightRank === undefined) return -1;
      return leftRank - rightRank;
    }
    return left.name.localeCompare(right.name) || left.slug.localeCompare(right.slug);
  });
}

export function resolveActiveGame(
  games: readonly DeckDealGame[],
  urlSlug?: string | null,
  cookieSlug?: string | null,
) {
  const ordered = orderGames(games);
  const bySlug = (slug?: string | null) =>
    slug ? ordered.find((game) => game.slug === slug) : undefined;

  return bySlug(urlSlug) ?? bySlug(cookieSlug) ?? bySlug("mtg") ?? ordered[0] ?? null;
}

export const GAME_CENTRIC_ROUTES = [
  "/search",
  "/discover",
  "/account/inventory",
] as const;

export const GAME_SWITCH_RESET_PARAMS = ["page", "cursor", "collection"] as const;

const normalizedPathname = (pathname: string) =>
  pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

export function isGameCentricRoute(pathname: string) {
  return GAME_CENTRIC_ROUTES.includes(
    normalizedPathname(pathname) as (typeof GAME_CENTRIC_ROUTES)[number],
  );
}

export function gameSwitchHref(
  pathname: string,
  currentSearch: URLSearchParams | string,
  gameSlug: string,
) {
  const params = new URLSearchParams(currentSearch);
  if (isGameCentricRoute(pathname)) {
    params.set("game", gameSlug);
    for (const key of GAME_SWITCH_RESET_PARAMS) params.delete(key);
  }
  const query = params.toString();
  return `${pathname}${query ? `?${query}` : ""}`;
}

export function searchHref(query: string, gameSlug: string) {
  const params = new URLSearchParams({ q: query, game: gameSlug });
  return `/search?${params.toString()}`;
}

export function catalogSearchHref(query: string, gameSlug: string, page = 1) {
  const params = new URLSearchParams({ q: query, game: gameSlug });
  if (page > 1) params.set("page", String(page));
  return `/search?${params.toString()}`;
}

export function resolveResourceGame(
  games: readonly DeckDealGame[],
  authoritativeGameId: string,
) {
  return games.find((game) => game.id === authoritativeGameId) ?? null;
}

export function resourceGameSyncTarget(
  games: readonly DeckDealGame[],
  activeGameId: string | null,
  authoritativeGameId: string,
) {
  return activeGameId === authoritativeGameId
    ? null
    : resolveResourceGame(games, authoritativeGameId);
}
