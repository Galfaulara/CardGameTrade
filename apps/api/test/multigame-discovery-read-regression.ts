const apiBase = process.env.DECKDEAL_API_URL ?? "http://localhost:4000/api";

const assert = (condition: unknown, message: string) => {
  if (!condition) throw new Error(message);
};

async function get(path: string, expectedStatus = 200) {
  const response = await fetch(`${apiBase}${path}`);
  assert(response.status === expectedStatus, `${path} returned ${response.status}, expected ${expectedStatus}.`);
  return response.json() as Promise<any>;
}

async function main() {
const games = await get("/catalog/games") as Array<{ id: string; slug: string }>;
const bySlug = new Map(games.map((game) => [game.slug, game]));
for (const slug of ["mtg", "pokemon", "yugioh"]) assert(bySlug.has(slug), `Missing ${slug} game fixture.`);

const unfiltered = await get("/listings") as Array<{ id: string; game_id: string }>;
assert(unfiltered.length > 0, "Unfiltered listings must preserve the existing mixed-game response.");

for (const slug of ["mtg", "pokemon", "yugioh"]) {
  const game = bySlug.get(slug)!;
  const listings = await get(`/listings?gameSlug=${slug}`) as Array<{ id: string; game_id: string }>;
  assert(listings.length > 0, `${slug} must have readable listings.`);
  assert(listings.every((listing) => listing.game_id === game.id), `${slug} listing filter leaked another game.`);

  const detail = await get(`/listings/${listings[0]!.id}`) as { game_id: string };
  assert(detail.game_id === game.id, `${slug} listing detail lacks authoritative game_id.`);

  const feed = await get(`/discovery/feed/listings?limit=1&intent=all&gameSlug=${slug}`) as {
    items: Array<{ game_id: string; listing: { game_id: string } }>;
    next_cursor: string | null;
    has_more: boolean;
  };
  assert(feed.items.length === 1, `${slug} cursor feed should return its first item.`);
  assert(feed.items.every((item) => item.game_id === game.id && item.listing.game_id === game.id), `${slug} feed leaked another game.`);
  if (feed.next_cursor) {
    const next = await get(`/discovery/feed/listings?limit=1&intent=all&gameSlug=${slug}&cursor=${encodeURIComponent(feed.next_cursor)}`) as typeof feed;
    assert(next.items.every((item) => item.game_id === game.id), `${slug} cursor page leaked another game.`);
    const otherSlug = slug === "pokemon" ? "yugioh" : "pokemon";
    await get(`/discovery/feed/listings?limit=1&intent=all&gameSlug=${otherSlug}&cursor=${encodeURIComponent(feed.next_cursor)}`, 400);
  }
}

await get("/listings?gameSlug=unknown-cert-game", 400);
await get("/discovery/feed/listings?gameSlug=unknown-cert-game", 400);

// 4G.9: collection discovery (the /discover default tab) must be scoped by game exactly like
// listing discovery — same-game filtering, same cursor/game binding, before pagination.
const unfilteredCollections = await get("/discovery/feed/collections?limit=24&availability=all") as {
  items: Array<{ id: string; game_id: string }>;
};
assert(unfilteredCollections.items.length > 0, "Unfiltered collection feed must preserve the existing mixed-game response (backward compatible).");

for (const slug of ["mtg", "pokemon", "yugioh"]) {
  const game = bySlug.get(slug)!;
  const feed = await get(`/discovery/feed/collections?limit=1&availability=all&gameSlug=${slug}`) as {
    items: Array<{ id: string; game_id: string; inventory_row_count: number; preview_items: Array<{ game_id?: string }> }>;
    next_cursor: string | null;
    has_more: boolean;
  };
  assert(feed.items.length === 1, `${slug} collection feed should return its first item.`);
  assert(feed.items.every((item) => item.game_id === game.id), `${slug} collection feed leaked another game.`);
  // Counts/previews are derived strictly from the already-game-filtered collection ids, so a
  // same-game collection's own preview listings (if any) must never belong to another game.
  assert(feed.items.every((item) => item.preview_items.every((preview) => !preview.game_id || preview.game_id === game.id)), `${slug} collection preview items leaked another game.`);
  if (feed.next_cursor) {
    const next = await get(`/discovery/feed/collections?limit=1&availability=all&gameSlug=${slug}&cursor=${encodeURIComponent(feed.next_cursor)}`) as typeof feed;
    assert(next.items.every((item) => item.game_id === game.id), `${slug} collection cursor page leaked another game.`);
    const otherSlug = slug === "pokemon" ? "yugioh" : "pokemon";
    await get(`/discovery/feed/collections?limit=1&availability=all&gameSlug=${otherSlug}&cursor=${encodeURIComponent(feed.next_cursor)}`, 400);
  }
}

await get("/discovery/feed/collections?gameSlug=unknown-cert-game", 400);

console.log("Multi-game discovery read regression passed.");
}

void main();
