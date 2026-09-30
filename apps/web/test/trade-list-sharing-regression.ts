import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { getPublicTradeList } from "../features/marketplace/api.ts";
const read = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const page = read("app/(public)/users/[userId]/public-trade-list.tsx");
const profile = read("app/(public)/users/[userId]/page.tsx");
const owner = read("app/(public)/account/listings/page.tsx");
const tile = read("components/card-tile/card-tile.tsx");
assert(profile.includes('view === "listings"'));
assert(profile.includes('<PublicTradeList'));
assert.equal((owner.match(/<ShareButton/g) ?? []).length, 1);
assert(owner.includes('?view=listings')); assert(owner.includes('Share trade list'));
assert.equal((page.match(/<ShareButton/g) ?? []).length, 1);
assert(page.includes('detailHref={`/listings/${listing.id}`}'));
assert(tile.includes('detailHref ?? (card.canonicalCardId ?'));
assert.doesNotMatch(page, /inventory_item_id|item\.id|item\.quantity|item\.status|InterestAction|CardActivity/);
assert(page.includes('gameId: listing.game_id'));
const previous = globalThis.fetch;
let available = true;
try {
  globalThis.fetch = async (input, init) => {
    const url = new URL(String(input));
    assert.equal(url.pathname, '/api/listings/public/users/user-id');
    assert.equal(url.searchParams.get('page'), '2');
    assert.equal(url.searchParams.get('pageSize'), '24');
    assert.equal(init?.cache, 'no-store');
    return available ? Response.json({ items: [{ id: 'listing-a' }, { id: 'listing-b' }], pagination: { page: 2, total_count: 26 } }) : new Response(null, { status: 404 });
  };
  const result = await getPublicTradeList('user-id', 2);
  assert.equal(result.status, 'ready');
  if (result.status === 'ready') assert.deepEqual(result.data.items.map(item => item.id), ['listing-a', 'listing-b']);
  available = false;
  assert.deepEqual(await getPublicTradeList('user-id', 2), { status: 'not-found' });
} finally { globalThis.fetch = previous; }
console.log('Aggregate Trade List identity, projection, paging, route, and container Share regression passed.');
