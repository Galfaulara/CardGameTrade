import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  groupPrintingVersions,
  type VersionFamily,
} from "../features/catalog/version-families.ts";
import type { CatalogPrinting } from "../features/marketplace/api.ts";

const read = (path: string) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const modal = read("components/add-to-collection/add-to-collection-modal.tsx");

/* ------------------------------------------------------------------ *
 * ROOT CAUSE
 *
 * The exact-printing selector renders one tile per version family, where a
 * family collapses every language row of the same printed version. The tile
 * click handler used to branch on `family.printings.length === 1` and only
 * called `loadFinishes` for single-language families; multi-language families
 * merely set `pendingFamily`, which revealed a language <select> rendered
 * *after* the whole printing list. Any printing whose family had two or more
 * language rows therefore looked completely dead on click.
 *
 * That is the entire class of defect behind Balmor FDN #237, DMU #295 and
 * DMU #336 — and it covered the majority of the MTG catalog, not just Balmor.
 * ------------------------------------------------------------------ */

assert.doesNotMatch(
  modal,
  /pendingFamily/,
  "The disconnected pendingFamily language step must be gone; it made families dead on click.",
);
assert.doesNotMatch(
  modal,
  /if \(family\.printings\.length === 1\)/,
  "Selection must never branch on how many languages a family happens to contain.",
);
assert.match(
  modal,
  /onClick=\{\(\) => void loadFinishes\(value, finish\)\}/,
  "Every rendered version tile must select an exact printing on click, unconditionally.",
);
assert.match(
  modal,
  /data-selected=\{family\.printings\.some\(\s*\(option\) => option\.id === printing\?\.id,\s*\)\}/,
  "The tile must visibly reflect the selected state.",
);
assert.match(
  modal,
  /aria-pressed=\{family\.printings\.some\(/,
  "Selected state must be exposed to assistive technology.",
);
/* Language is now an explicit refinement beside Finish, on the details panel
   that is already visible once a printing is selected. */
assert.match(
  modal,
  /selectedFamily && selectedFamily\.printings\.length > 1/,
  "Multi-language families must expose an explicit language refinement.",
);
assert.match(
  modal,
  /<select\s+value=\{printing\.id\}/,
  "The language control must be a controlled select bound to the exact selected printing.",
);
assert.doesNotMatch(
  modal,
  /<select\s+value=""/,
  "A language select hard-coded to an empty value cannot reflect real selection state.",
);
/* The tile label must state which language a click will actually select, so the
   deterministic outcome is visible before the click. */
assert.match(
  modal,
  /\{value\.language_code\.toUpperCase\(\)\}/,
  "The tile must name the language it will select.",
);

/* --- Exact identity: selection must never fall back to another printing --- */

assert.match(
  modal,
  /printingId: printing\.id/,
  "The submitted payload must carry the exact selected printing id.",
);
assert.doesNotMatch(
  modal,
  /printings\[0\]!?\.id|representative_printing/,
  "Selection must never silently fall back to a first/representative printing.",
);

/* ------------------------------------------------------------------ *
 * GENERIC ACTIONABILITY CONTRACT
 *
 * This is deliberately not a Balmor fixture test. It models the selector the
 * way the component behaves and asserts the contract for arbitrary catalog
 * shapes: every eligible printing must be reachable, and every rendered tile
 * must resolve to exactly one printing.
 * ------------------------------------------------------------------ */

const printing = (overrides: Partial<CatalogPrinting>): CatalogPrinting =>
  ({
    id: "p",
    canonical_card_id: "card",
    card_set_id: "set",
    collector_number: "1",
    language_code: "en",
    name: "Test Card",
    rarity: "rare",
    artist_name: "Artist",
    treatment: null,
    frame_version: "2015",
    border_color: "black",
    is_promo: false,
    is_reprint: false,
    released_at: null,
    illustration_id: "art",
    variation: false,
    image_small_uri: "small.jpg",
    image_normal_uri: "normal.jpg",
    image_large_uri: "large.jpg",
    card_sets: { id: "set", code: "TST", name: "Test Set", release_date: null },
    ...overrides,
  }) as CatalogPrinting;

/** Exactly what the fixed component does when a tile is clicked. */
const tileSelects = (family: VersionFamily) => family.representative;
/** Exactly what the fixed component offers once a printing is selected. */
const refinements = (family: VersionFamily) =>
  family.printings.length > 1 ? family.printings : [family.representative];

function certify(printings: CatalogPrinting[], label: string) {
  const families = groupPrintingVersions(printings);
  assert.ok(families.length > 0, `${label}: at least one tile must render.`);
  const reachable = new Set<string>();
  const keys = new Set<string>();
  for (const family of families) {
    /* Unique React keys derived from real printing identity. */
    assert.ok(!keys.has(family.key), `${label}: duplicate tile key ${family.key}.`);
    keys.add(family.key);
    /* A tile must always resolve to exactly one concrete printing. */
    const selected = tileSelects(family);
    assert.ok(selected?.id, `${label}: a tile resolved to no printing.`);
    assert.ok(
      family.printings.some((value) => value.id === selected.id),
      `${label}: a tile selected a printing outside its own family.`,
    );
    for (const option of refinements(family)) reachable.add(option.id);
  }
  /* No eligible printing may be rendered-but-unreachable. */
  for (const value of printings)
    assert.ok(
      reachable.has(value.id),
      `${label}: printing ${value.id} is rendered but has no actionable selection path.`,
    );
}

/* The three confirmed Balmor variants, using their real catalog shapes:
   FDN #237 is one 6-language family; DMU #295 and #336 each split into an
   English showcase family plus a multi-language legendary family. */
certify(
  [
    ...["en", "de", "es", "fr", "it", "ja"].map((language) =>
      printing({
        id: `fdn-237-${language}`,
        language_code: language,
        collector_number: "237",
        treatment: "legendary",
        card_set_id: "fdn",
        illustration_id: "0957ed8f",
        card_sets: { id: "fdn", code: "FDN", name: "Foundations", release_date: null },
      }),
    ),
  ],
  "Balmor FDN #237",
);
for (const [collector, languages] of [
  ["295", ["de", "es", "fr", "it", "ja", "pt", "zhs"]],
  ["336", ["de", "fr", "ja", "zhs"]],
] as const)
  certify(
    [
      printing({
        id: `dmu-${collector}-en`,
        language_code: "en",
        collector_number: collector,
        treatment: "showcase,legendary,inverted",
        card_set_id: "dmu",
        illustration_id: "eea6630b",
        card_sets: { id: "dmu", code: "DMU", name: "Dominaria United", release_date: null },
      }),
      ...languages.map((language) =>
        printing({
          id: `dmu-${collector}-${language}`,
          language_code: language,
          collector_number: collector,
          treatment: "legendary",
          card_set_id: "dmu",
          illustration_id: "eea6630b",
          card_sets: { id: "dmu", code: "DMU", name: "Dominaria United", release_date: null },
        }),
      ),
    ],
    `Balmor DMU #${collector}`,
  );

/* Generic catalog shapes: none of these may produce a dead printing. */
certify([printing({ id: "solo" })], "single printing");
certify(
  [printing({ id: "en" }), printing({ id: "ja", language_code: "ja" })],
  "multi-language family",
);
certify(
  [
    printing({ id: "plain" }),
    printing({ id: "borderless", border_color: "borderless", illustration_id: "art-b" }),
    printing({ id: "showcase", treatment: "showcase" }),
    printing({ id: "extended", treatment: "extendedart" }),
    printing({ id: "promo", is_promo: true }),
    printing({ id: "prerelease", is_promo: true, treatment: "prerelease" }),
    printing({ id: "variation", variation: true }),
    printing({ id: "oldframe", frame_version: "1997" }),
  ],
  "special treatments must all stay selectable",
);
certify(
  [printing({ id: "no-art-a", illustration_id: null, artist_name: "A" }),
   printing({ id: "no-art-b", illustration_id: null, artist_name: "B" })],
  "null illustration falls back to artist identity",
);
certify(
  [printing({ id: "alnum", collector_number: "DMU-196" }),
   printing({ id: "star", collector_number: "237★" })],
  "unusual collector numbers",
);
certify(
  [printing({ id: "no-image", image_small_uri: null, image_normal_uri: null, image_large_uri: null })],
  "missing image must not remove the action",
);
certify(
  [printing({ id: "no-treatment", treatment: null }),
   printing({ id: "no-frame", frame_version: null }),
   printing({ id: "no-border", border_color: null })],
  "null optional fields",
);
certify(
  Array.from({ length: 40 }, (_, index) =>
    printing({ id: `many-${index}`, collector_number: String(index) }),
  ),
  "card with many printings",
);

/* A family must never be collapsed so far that two genuinely different
   printings share a tile and one becomes unreachable. */
const distinct = groupPrintingVersions([
  printing({ id: "a", collector_number: "1" }),
  printing({ id: "b", collector_number: "2" }),
]);
assert.equal(distinct.length, 2, "Different collector numbers must stay separate tiles.");

/* Representative-printing search behaviour is a separate concern and must not
   be re-applied to an explicit user selection. */
assert.doesNotMatch(
  modal,
  /representative_printing/,
  "Canonical search's representative printing must not leak into exact-printing selection.",
);

console.log("Exact printing actionability regression passed.");
