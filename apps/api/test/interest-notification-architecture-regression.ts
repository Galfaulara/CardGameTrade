import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, resolve } from "node:path";
const apiRoot = process.cwd().endsWith(join("apps", "api"))
  ? process.cwd()
  : resolve(process.cwd(), "apps", "api");
const read=(path:string)=>readFileSync(resolve(apiRoot,path),"utf8");
const interests=read("src/inventory-interests/inventory-interests.service.ts"), notifications=read("src/notifications/notifications.service.ts"), inventory=read("src/inventory/inventory.service.ts");
assert.match(interests,/\$transaction/); assert.match(interests,/user_notifications\.create/); assert.match(interests,/inventory_item_interest_id: created\.id/);
assert.match(notifications,/recipient_user_id: userId/); assert.match(inventory,/updateMany/); assert.match(inventory,/result\.count !== input\.inventoryItemIds\.length/);
assert.match(notifications,/canonical_cards: \{ select: \{ id: true, name: true \}/, "Interest destinations must derive canonical identity through the exact inventory printing.");
assert.match(notifications,/canonicalCardId: item\.inventory_item\?\.card_printings\.canonical_cards\.id/, "The notification response must expose the derived canonical ID.");
assert.match(notifications,/interestId: item\.inventory_item_interest\?\.id/, "The exact Interest relationship must remain represented.");
console.log("interest notification architecture regression passed");
