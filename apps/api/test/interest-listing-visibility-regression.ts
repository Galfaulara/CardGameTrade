import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { isVisibleInterestTarget } from "../src/marketplace/active-public-listing";

assert.equal(
  isVisibleInterestTarget({
    collectionVisibility: "public",
    activeListingCount: 0,
  }),
  true,
);
assert.equal(
  isVisibleInterestTarget({
    collectionVisibility: null,
    activeListingCount: 1,
  }),
  true,
);
assert.equal(
  isVisibleInterestTarget({
    collectionVisibility: "private",
    activeListingCount: 1,
  }),
  true,
);
assert.equal(
  isVisibleInterestTarget({
    collectionVisibility: null,
    activeListingCount: 0,
  }),
  false,
);
assert.equal(
  isVisibleInterestTarget({
    collectionVisibility: "private",
    activeListingCount: 0,
  }),
  false,
);

const service = readFileSync(
  join(process.cwd(), "src/inventory-interests/inventory-interests.service.ts"),
  "utf8",
);
const listingRule = readFileSync(
  join(process.cwd(), "src/marketplace/active-public-listing.ts"),
  "utf8",
);
assert.match(service, /inventoryItem\.status\s*!==[\s\S]*?"available"/);
assert.match(service, /inventoryItem\.owner_user_id\s*===[\s\S]*?userId/);
assert.match(service, /status:[\s\S]*?"active"/);
assert.match(service, /isVisibleInterestTarget/);
assert.match(service, /activePublicListingWhere/);
assert.match(listingRule, /status:\s*"active"/);
assert.match(listingRule, /accepts_trade:\s*true/);
assert.match(listingRule, /accepts_cash:\s*true/);
assert.doesNotMatch(service, /must belong to a visible user collection/);

console.log("Interest Listing visibility regression passed.");
