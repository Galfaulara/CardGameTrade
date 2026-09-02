import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path: string) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const shell = read("components/app-shell/app-shell.tsx");
const bottom = read("components/mobile-bottom-nav/mobile-bottom-nav.tsx");
const bottomCss = read(
  "components/mobile-bottom-nav/mobile-bottom-nav.module.css",
);
const account = read("features/account/account-shell.tsx");
const accountMenu = read("components/account-menu/account-menu.tsx");
const inventory = read("app/(public)/account/inventory/inventory-manager.tsx");
const bulk = read(
  "app/(public)/account/inventory/bulk-add/bulk-add-inventory.tsx",
);
const bulkCss = read("app/(public)/account/inventory/bulk-add/page.module.css");
const numeric = read("features/forms/numeric-input.ts");

assert.match(shell, /<MobileBottomNav/);
assert.match(shell, /<AccountMenu/);
assert.doesNotMatch(shell, />DeckDeal profile<\/Link>/);
for (const label of ["Home", "Discover", "Local Stores", "Inventory", "More"])
  assert.match(bottom, new RegExp(label));
assert.match(bottom, /aria-current=/);
assert.match(bottomCss, /safe-area-inset-bottom/);
assert.match(account, /<details className=\{styles\.mobileNav\}/);
assert.match(account, /Wishlists/);
assert.match(accountMenu, /DeckDeal profile/);
assert.match(inventory, /Change printing/);
assert.match(inventory, /printing\/preflight/);
assert.match(inventory, /sanitizeIntegerInput/);
assert.match(inventory, /sanitizeMoneyInput/);
assert.match(bulk, /expandedImage/);
assert.match(bulk, /`\/account\/inventory\?game=\$\{encodeURIComponent\(game\.slug\)\}&added=/);
assert.match(bulkCss, /@media \(max-width: 36rem\)/);
assert.ok(numeric.includes("replace(/\\D/g"));
assert.match(numeric, /slice\(0, 2\)/);
console.log("Mobile QA hardening regression passed.");
