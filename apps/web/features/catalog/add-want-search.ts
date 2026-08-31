export const ADD_WANT_SEARCH_PAGE_SIZE = 12;

export function addWantSearchHref(query: string, gameSlug: string, page: number) {
  const params = new URLSearchParams({ q: query.trim(), game: gameSlug, page: String(page), pageSize: String(ADD_WANT_SEARCH_PAGE_SIZE) });
  return `/api/catalog/search?${params}`;
}

export function addWantQueryChanged(draft: string, searchedQuery: string) {
  return draft.trim() !== searchedQuery;
}
