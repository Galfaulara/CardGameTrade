import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { getPublicListing } from "../features/marketplace/api.ts";

const read = (path: string) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const page = read("app/(public)/listings/[listingId]/page.tsx");
const pill = read("components/listing-intent/listing-intent-pill.tsx");
const trade = read("app/(public)/trade/[listingId]/page.tsx");
assert.match(page, /getPublicListing\(listingId\)/);
assert.match(page, /result.status === "not-found"\) notFound\(\)/);
assert.match(page, /<ShareButton[\s\S]*path=\{`\/listings\/\$\{listing.id\}`\}/);
assert.match(pill, /href=\{`\/listings\/\$\{listing.id\}`\}/);
assert.doesNotMatch(page, /inventory_item_id|item\.id|item\.quantity|item\.status|CardActivity/);
assert.doesNotMatch(page, /await auth\(|getAuthenticatedCurrentUser/);
assert.match(page, /href=\{`\/trade\/\$\{listing.id\}`\}/);
assert.match(trade, /if \(!userId\) \{\s*redirect\(signInRedirectUrl\)/);
assert.match(trade, /authenticatedApiFetch\(`\/listings\/\$\{encodeURIComponent\(listing.id\)\}\/trade-context`\)/);
for (const field of ["language_code", "collector_number", "finish", "condition", "preferred_store"]) assert(page.includes(field));

// Exercise the real public fetch adapter: identical printings cannot collapse IDs.
const ids = ["11111111-1111-4111-8111-111111111111", "22222222-2222-4222-8222-222222222222"];
const originalFetch = globalThis.fetch;
const calls: string[] = [];
let active = true;
try {
  globalThis.fetch = async (input, init) => {
    const path = new URL(String(input)).pathname;
    calls.push(path);
    assert.equal(init?.cache, "no-store");
    const id = path.split("/").at(-1);
    return active && ids.includes(id!)
      ? Response.json({ id, available: true, inventory_item: { printing: { id: "same-printing" } } })
      : new Response(null, { status: 404 });
  };
  for (const id of ids) {
    const result = await getPublicListing(id);
    assert.equal(result.status, "ready");
    if (result.status === "ready") assert.equal(result.data.id, id);
  }
  assert.notEqual(calls[0], calls[1]);
  active = false;
  assert.deepEqual(await getPublicListing(ids[0]!), { status: "not-found" });
} finally {
  globalThis.fetch = originalFetch;
}
console.log("Exact public Listing routing, sharing, stale links, and authenticated action contract passed.");
