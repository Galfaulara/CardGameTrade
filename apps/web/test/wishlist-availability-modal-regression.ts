import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path: string) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const wants = read("app/(public)/account/wants/wants-manager.tsx"),
  wantsCss = read("app/(public)/account/wants/page.module.css"),
  modal = read("components/page-modal/page-modal.tsx"),
  modalCss = read("components/page-modal/page-modal.module.css");

assert.match(wants, /import \{ PageModal \}/);
assert.equal(
  (wants.match(/title="Available from collectors"/g) ?? []).length,
  1,
);
assert.doesNotMatch(wants, /styles\.modal/);
assert.match(wants, /className=\{styles\.availabilityDialog\}/);
assert.match(wants, /matching active listing/);
assert.match(wants, /className=\{styles\.items\}/);
assert.match(wants, /Offers sent to this Want/);
assert.match(wants, /No formal Wishlist Offers yet/);
assert.match(wantsCss, /\.availabilityContent/);
assert.match(wantsCss, /\.availabilityOffers/);
assert.equal((modal.match(/data-deckdeal-modal-overlay/g) ?? []).length, 1);
assert.equal((modal.match(/data-deckdeal-modal-dialog/g) ?? []).length, 1);
assert.match(modal, /createPortal/);
assert.match(modal, /document\.body/);
assert.match(modal, /event\.key === "Escape"/);
assert.match(modal, /aria-label="Close"/);
assert.match(
  modalCss,
  /\.dialog\s*\{[^}]*background:\s*var\(--color-surface\)/s,
);
assert.doesNotMatch(modalCss, /\.dialog\s*\{[^}]*opacity\s*:/s);
assert.match(modalCss, /\.backdrop\s*\{[^}]*rgba\(/s);

console.log("Wishlist availability PageModal regression passed.");
