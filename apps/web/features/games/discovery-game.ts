export function discoveryFeedSearch({
  view,
  filter,
  cursor,
  gameSlug,
}: {
  view: string;
  filter: string;
  cursor?: string;
  gameSlug?: string;
}) {
  const query = new URLSearchParams({ view, filter });
  if (cursor) query.set("cursor", cursor);
  if ((view === "listings" || view === "collections") && gameSlug) query.set("game", gameSlug);
  return query;
}

export function canAppendDiscoveryResponse(
  requestGameSlug: string | undefined,
  currentGameSlug: string | undefined,
) {
  return requestGameSlug === currentGameSlug;
}
