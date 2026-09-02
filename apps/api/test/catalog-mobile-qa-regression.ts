import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { normalizeCatalogSearchText } from "@repo/validation";

const variants = [
  "Nature's Claim",
  "Nature’s Claim",
  "nature's claim",
  "NATURE’S CLAIM",
];
assert.equal(new Set(variants.map(normalizeCatalogSearchText)).size, 1);
assert.equal(normalizeCatalogSearchText("Nature’s Claim"), "nature's claim");
assert.equal(normalizeCatalogSearchText("  A\u00a0\u00a0Card  "), "a card");

const source = readFileSync("src/catalog/catalog.service.ts", "utf8");
assert.match(source, /cp\.released_at ASC NULLS LAST/);
assert.match(source, /is_reprint = false/);
assert.match(source, /language_code = 'en'/);
assert.match(source, /"double_faced_token"/);
assert.match(source, /layout\s*===\s*"art_series"/);
assert.match(
  source,
  /if \(!ranked\.length\)/,
  "face alias scan should be a fallback for direct-name misses",
);

const inventory = readFileSync("src/inventory/inventory.service.ts", "utf8");
assert.match(inventory, /preflightPrintingChange/);
assert.match(inventory, /active trade and its printing cannot be changed/);
assert.match(inventory, /strategy: historyCount[\s\S]*?"replacement"[\s\S]*?"in_place"/);
assert.match(inventory, /TransactionIsolationLevel\.Serializable/);
assert.match(inventory, /inventory_item_photos\.updateMany/);
console.log("Catalog mobile QA and printing-correction regression passed.");
