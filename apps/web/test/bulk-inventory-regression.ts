import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { applyBulkPrintingSelection } from "../features/inventory/bulk-review.ts";

const client = readFileSync("app/(public)/account/inventory/bulk-add/bulk-add-inventory.tsx", "utf8");
const resolveBff = readFileSync("app/api/me/inventory/bulk/resolve/route.ts", "utf8");
const commitBff = readFileSync("app/api/me/inventory/bulk/route.ts", "utf8");
assert.ok(resolveBff.includes("authenticatedApiRequest") && commitBff.includes("authenticatedApiRequest"), "Bulk BFF routes must forward Clerk authentication.");
assert.ok(client.includes("gameSlug: game.slug"), "Bulk requests must explicitly send the active game.");
assert.ok(client.includes("disabled={busy || Boolean(unresolved) || !rows.length}"), "Unresolved rows must disable commit.");
assert.ok(client.includes("busyRef.current") && client.includes("if (busyRef.current"), "Commit must synchronously prevent double-submit.");
assert.ok(client.includes("addedQuantity") && client.includes("entryCount"), "Success must report quantity and entries.");
const row = { candidates: [
  { id: "A", collector_number: "1", language_code: "en", card_sets: { code: "AAA", name: "A" }, finishes: ["foil"] },
  { id: "B", collector_number: "2", language_code: "ja", card_sets: { code: "BBB", name: "B" }, finishes: ["nonfoil"] },
], status: "AMBIGUOUS", language: "en", set: null, collectorNumber: null, message: "choose", finish: null, printingId: undefined as string | undefined };
const selectedA = applyBulkPrintingSelection(row, 0, "foil");
const selectedB = applyBulkPrintingSelection(selectedA, 1, "foil");
assert.equal(selectedB.printingId, "B", "Reopening the selector must replace printing A with B.");
assert.equal(selectedB.finish, "nonfoil", "An incompatible stale finish must clear or safely auto-resolve to the sole valid finish.");
assert.equal(selectedB.set, "BBB");
assert.equal(selectedB.collectorNumber, "2");
const commit = { rows: [{ printingId: selectedB.printingId, finish: selectedB.finish }] };
assert.equal(commit.rows[0]!.printingId, "B", "The commit payload must contain printing B, not A.");
console.log("Web bulk inventory regression passed.");
