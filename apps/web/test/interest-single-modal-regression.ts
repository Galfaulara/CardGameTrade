import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read = (path: string) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const trigger = read("components/interest-action/interest-action.tsx"),
  provider = read("components/interest-action/interest-dialog-provider.tsx"),
  modal = read("components/page-modal/page-modal.tsx"),
  shell = read("components/app-shell/app-shell.tsx"),
  tile = read("components/card-tile/card-tile.tsx"),
  tileCss = read("components/card-tile/card-tile.module.css"),
  modalCss = read("components/page-modal/page-modal.module.css");
assert.match(tile, /InterestAction/);
assert.match(trigger, /useInterestDialog/);
assert.match(trigger, /stopPropagation\(\)/);
assert.match(trigger, /preventDefault\(\)/);
assert.doesNotMatch(trigger, /role="dialog"|backdrop|createPortal/);
assert.equal((shell.match(/<InterestDialogProvider>/g) ?? []).length, 1);
assert.equal((provider.match(/<PageModal\s/g) ?? []).length, 1);
assert.match(modal, /createPortal/);
assert.match(modal, /document\.body/);
assert.equal((modal.match(/data-deckdeal-modal-overlay/g) ?? []).length, 1);
assert.equal((modal.match(/data-deckdeal-modal-dialog/g) ?? []).length, 1);
assert.match(modal, /event\.key === "Escape"/);
assert.match(modal, /aria-label="Close"/);
assert.match(modal, /type="button"/);
assert.match(tileCss, /overflow:hidden/);
assert.match(tileCss, /transform:translateY/);
assert.match(modalCss, /position:\s*fixed/);
assert.match(modalCss, /inset:\s*0/);
assert.match(modalCss, /\.close:hover/);
assert.match(modalCss, /\.close:focus-visible/);
assert.match(provider, /setSelected\(selection\)/);
assert.match(provider, /setSelected\(null\)/);
assert.match(provider, /selected\.inventoryItemId/);
assert.match(provider, /selected\.cardName/);
assert.equal((provider.match(/data-deckdeal-modal-overlay/g) ?? []).length, 0);
console.log("Interest single page-level modal regression passed.");
