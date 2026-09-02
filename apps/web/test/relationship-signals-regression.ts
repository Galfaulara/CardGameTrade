import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read = (path: string) =>
  readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const tile = read("components/card-tile/card-tile.tsx"),
  shell = read("components/app-shell/app-shell.tsx");
const inventory = read("app/(public)/account/inventory/inventory-manager.tsx"),
  wants = read("app/(public)/account/wants/wants-manager.tsx");
assert.match(tile, /Owned ×/);
assert.match(tile, /In Wishlists/);
assert.match(tile, /InterestAction/);
assert.match(shell, /NotificationBell/);
assert.match(inventory, /Card activity/);
assert.match(inventory, /Move cards/);
assert.match(inventory, /Received on this card/);
assert.match(inventory, /Trade \/ transaction/);
assert.match(inventory, /custodyStatusLabel/);
assert.match(inventory, /Store:/);
assert.match(inventory, /View trade/);
assert.match(wants, /Available from collectors/);
assert.match(wants, /Offers sent to this Want/);
console.log("relationship signals regression passed");
