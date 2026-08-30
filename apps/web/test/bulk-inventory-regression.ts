import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const client = readFileSync("app/(public)/account/inventory/bulk-add/bulk-add-inventory.tsx", "utf8");
const resolveBff = readFileSync("app/api/me/inventory/bulk/resolve/route.ts", "utf8");
const commitBff = readFileSync("app/api/me/inventory/bulk/route.ts", "utf8");
assert.ok(resolveBff.includes("authenticatedApiRequest") && commitBff.includes("authenticatedApiRequest"), "Bulk BFF routes must forward Clerk authentication.");
assert.ok(client.includes("gameSlug: game.slug"), "Bulk requests must explicitly send the active game.");
assert.ok(client.includes("disabled={busy || Boolean(unresolved) || !rows.length}"), "Unresolved rows must disable commit.");
assert.ok(client.includes("busyRef.current") && client.includes("if (busyRef.current"), "Commit must synchronously prevent double-submit.");
assert.ok(client.includes("addedQuantity") && client.includes("entryCount"), "Success must report quantity and entries.");
console.log("Web bulk inventory regression passed.");
