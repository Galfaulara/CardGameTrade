import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path: string) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const share = read("components/share-button/share-button.tsx"),
  shareCss = read("components/share-button/share-button.module.css"),
  profile = read("app/(public)/users/[userId]/page.tsx"),
  collection = read("app/(public)/collections/[collectionId]/page.tsx"),
  card = read("app/(public)/cards/[canonicalCardId]/page.tsx"),
  store = read("app/(public)/stores/[storeId]/page.tsx");

/* --- One consistent share primitive --- */

assert.match(share, /"use client"/);
assert.match(
  share,
  /typeof navigator\.share === "function"/,
  "The Web Share API must be used when the browser supports it.",
);
assert.match(
  share,
  /await navigator\.share\(\{ title, text, url \}\)/,
  "The share payload must carry a title, human-readable text and the canonical URL.",
);
assert.match(
  share,
  /await navigator\.clipboard\.writeText\(url\)/,
  "Desktop/unsupported browsers must fall back to copying the canonical URL.",
);
assert.match(
  share,
  /announce\("Link copied"\)/,
  'The clipboard fallback must give the restrained "Link copied" confirmation.',
);
assert.match(
  share,
  /reason\.name === "AbortError"\) return/,
  "Dismissing the native share sheet must not be reported as a failure.",
);
/* Accessibility and touch ergonomics. */
assert.match(share, /<button/, "Share must be a real button, so it is keyboard accessible.");
assert.match(share, /type="button"/);
assert.match(share, /aria-label=\{`Share \$\{title\}`\}/);
assert.match(share, /role="status" aria-live="polite"/);
assert.match(shareCss, /min-height: 2\.75rem/, "Share must remain a touch-friendly target.");
assert.match(shareCss, /\.button:focus-visible/);
/* A single consistent SVG icon, never a Unicode emoji. */
assert.equal((share.match(/<svg/g) ?? []).length, 1);
assert.match(share, /strokeWidth="1\.8"/, "The share icon must match the existing icon convention.");
assert.doesNotMatch(
  share,
  /[\u{1F300}-\u{1FAFF}\u{2190}-\u{21FF}\u{2600}-\u{27BF}]/u,
  "No Unicode emoji may be used as the share icon.",
);
/* No third-party sharing SDK. */
assert.doesNotMatch(share, /from "(?!\.|react)/);

/* --- Canonical URLs: never a transient, raw-API or private destination --- */

assert.match(
  share,
  /new URL\(path, window\.location\.origin\)/,
  "Share URLs must be built from the app origin plus a canonical app-relative path.",
);
assert.match(
  share,
  /if \(!path\.startsWith\("\/"\)\) return null/,
  "Non app-relative paths must be refused rather than shared.",
);
assert.match(
  share,
  /PRIVATE_PREFIXES = \["\/account", "\/store\/", "\/onboarding", "\/sign-in", "\/sign-up"\]/,
  "Owner-private prefixes must be enumerated and refused.",
);
assert.match(
  share,
  /PRIVATE_PREFIXES\.some\(\(prefix\) => path\.startsWith\(prefix\)\)\) return null/,
  "A private path must make the share control refuse to render, not leak the URL.",
);

/* Guard the private-path contract behaviourally, not just textually. */
const PRIVATE_PREFIXES = ["/account", "/store/", "/onboarding", "/sign-in", "/sign-up"];
const refused = (path: string) =>
  !path.startsWith("/") || PRIVATE_PREFIXES.some((prefix) => path.startsWith(prefix));
for (const path of [
  "/account/inventory",
  "/account/profile",
  "/account/wants",
  "/account/messages",
  "/account/offers",
  "/account/trades/abc",
  "/account/friends",
  "/store/abc",
  "/store/abc/handoffs/def",
  "/onboarding",
  "/sign-in",
  "http://localhost:4000/api/catalog/cards",
  "api/catalog/cards",
])
  assert.ok(refused(path), `${path} must never be shareable.`);
for (const path of [
  "/users/11111111-1111-4111-8111-111111111111",
  "/users/11111111-1111-4111-8111-111111111111?view=wants",
  "/collections/22222222-2222-4222-8222-222222222222",
  "/cards/33333333-3333-4333-8333-333333333333?printing=44444444-4444-4444-8444-444444444444",
  "/stores/55555555-5555-4555-8555-555555555555",
])
  assert.ok(!refused(path), `${path} must be shareable.`);

/* --- Placement on legitimately public surfaces only --- */

/* Public profile: server-rendered only when the profile resolves publicly
   (getPublicUser 404s otherwise), so Share cannot leak a private profile. */
assert.match(profile, /import \{ ShareButton \}/);
assert.match(
  profile,
  /path=\{view === "overview" \? `\/users\/\$\{user\.id\}` : `\/users\/\$\{user\.id\}\?view=\$\{view\}`\}/,
  "Profile share must use the stable public profile route, view-aware for wants/collections/available.",
);
assert.match(
  profile,
  /if \(profile\.status === "not-found"\) notFound\(\)/,
  "Private/unresolvable profiles must 404 before Share is ever rendered.",
);

/* Public collection: the API resolves public or unlisted exact links. */
assert.match(collection, /import \{ ShareButton \}/);
assert.match(
  collection,
  /path=\{`\/collections\/\$\{collection\.id\}`\}/,
  "Collection share must be the stable collection route without transient page state.",
);
assert.doesNotMatch(
  collection,
  /path=\{`\/collections\/\$\{collection\.id\}\?page=/,
  "Pagination state must not leak into the canonical collection share URL.",
);
assert.match(
  collection,
  /if \(result\.status === "not-found"\) notFound\(\)/,
  "A private collection must 404 rather than render a Share control.",
);

/* Card details / exact printing / public tradeable context. */
assert.match(card, /import \{ ShareButton \}/);
assert.match(
  card,
  /path=\{`\/cards\/\$\{canonicalCardId\}\?printing=\$\{selected\.id\}`\}/,
  "Card share must resolve to the exact selected printing, not the representative printing.",
);
assert.doesNotMatch(
  card,
  /path=\{`\/account\//,
  "The card page must never share an owner-private inventory URL.",
);

/* Public store. */
assert.match(store, /import \{ ShareButton \}/);
assert.match(
  store,
  /path=\{`\/stores\/\$\{store\.id\}`\}/,
  "Store share must use the public storefront route, not the private /store workspace.",
);
assert.doesNotMatch(
  store,
  /path=\{`\/store\/\$\{/,
  "The private store workspace route must never be shared.",
);

/* --- Surfaces that must NOT gain a Share control --- */

for (const path of [
  "app/(public)/account/messages/page.tsx",
  "app/(public)/account/offers/page.tsx",
  "app/(public)/account/friends/page.tsx",
  "app/(public)/trade/[listingId]/page.tsx",
  "components/notification-bell/notification-bell.tsx",
])
  assert.doesNotMatch(
    read(path),
    /ShareButton/,
    `${path} is private or auth-gated and must not expose Share.`,
  );

/* Repeated browse tiles must stay quiet: no inline Share on every card tile. */
for (const path of [
  "components/card-tile/card-tile.tsx",
  "components/card-rail/card-rail.tsx",
])
  assert.doesNotMatch(
    read(path),
    /ShareButton/,
    `${path} must not add a redundant Share to every tile.`,
  );

/* --- Entities that do not exist must not get a fake Share feature --- */

/* Decks are not implemented anywhere in the app; no deck route or share exists. */
assert.doesNotMatch(
  share,
  /deck(list)?s?\//i,
  "No Deck share destination may exist while Decks are unimplemented.",
);
for (const path of [
  "app/(public)/users/[userId]/page.tsx",
  "app/(public)/collections/[collectionId]/page.tsx",
])
  assert.doesNotMatch(
    read(path),
    /\/decks\//,
    "No /decks route may be referenced; Decks are not implemented.",
  );

console.log("Share action regression passed.");
