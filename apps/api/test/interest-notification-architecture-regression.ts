import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const read=(path:string)=>readFileSync(new URL(`../${path}`,import.meta.url),"utf8");
const interests=read("src/inventory-interests/inventory-interests.service.ts"), notifications=read("src/notifications/notifications.service.ts"), inventory=read("src/inventory/inventory.service.ts");
assert.match(interests,/\$transaction/); assert.match(interests,/user_notifications\.create/); assert.match(interests,/inventory_item_interest_id: created\.id/);
assert.match(notifications,/recipient_user_id: userId/); assert.match(inventory,/updateMany/); assert.match(inventory,/result\.count !== input\.inventoryItemIds\.length/);
console.log("interest notification architecture regression passed");
