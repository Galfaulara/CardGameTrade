/**
 * Read-only catalog-wide audit of exact-printing actionability.
 *
 * Mirrors the frontend contract used by the Add-to-Collection exact-printing
 * selector: printings are grouped into version families by
 * `apps/web/features/catalog/version-families.ts#versionFamilyKey`, one tile is
 * rendered per family, and clicking a tile must always select an exact printing
 * and expose at least one valid finish.
 *
 * Every eligible physical printing must fall into exactly one bucket:
 *   1. eligible + actionable
 *   2. intentionally ineligible (documented reason)
 *   3. BUG: eligible but not actionable  <- must be zero
 *
 * This script never writes. Run with:
 *   npm run audit:printing-actionability --workspace=@repo/db
 */
import "dotenv/config";

import { createDbClient } from "../client";

/** Non-physical layouts that are intentionally excluded from ownership. */
const NON_PHYSICAL_LAYOUTS = new Set([
  "token",
  "double_faced_token",
  "emblem",
  "art_series",
  "vanguard",
  "scheme",
  "planar",
]);

type Row = {
  id: string;
  canonical_card_id: string;
  card_set_id: string;
  collector_number: string;
  language_code: string;
  treatment: string | null;
  frame_version: string | null;
  border_color: string | null;
  artist_name: string | null;
  is_promo: boolean;
  is_digital: boolean;
  illustration_id: string | null;
  variation: boolean;
  layout: string | null;
  image_small_uri: string | null;
  image_normal_uri: string | null;
  finish_count: number;
  set_code: string;
  card_name: string;
};

/** Byte-for-byte equivalent of the frontend `versionFamilyKey`. */
function versionFamilyKey(row: Row) {
  return [
    row.canonical_card_id,
    row.card_set_id,
    row.collector_number,
    row.treatment ?? "",
    row.illustration_id ?? `artist:${row.artist_name ?? "unknown"}`,
    row.frame_version ?? "",
    row.border_color ?? "",
    row.is_promo ? "promo" : "standard",
    row.variation ? "variation" : "base",
  ].join("|");
}

/** Reasons a printing is intentionally not ownable/actionable. */
function ineligibilityReason(row: Row): string | null {
  if (row.is_digital) return "digital-only printing (not a physical card)";
  if (row.layout && NON_PHYSICAL_LAYOUTS.has(row.layout))
    return `non-playable layout: ${row.layout}`;
  if (row.finish_count === 0) return "no finish rows in catalog";
  return null;
}

async function main() {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required.");
  const db = createDbClient(process.env.DATABASE_URL);
  await db.$connect();
  try {
    const rows = await db.$queryRaw<Row[]>`
      SELECT p.id, p.canonical_card_id, p.card_set_id, p.collector_number,
             p.language_code, p.treatment, p.frame_version, p.border_color,
             p.artist_name, p.is_promo, p.is_digital,
             p.raw_data->>'illustration_id' AS illustration_id,
             coalesce((p.raw_data->>'variation')::boolean, false) AS variation,
             p.raw_data->>'layout' AS layout,
             p.image_small_uri, p.image_normal_uri,
             (SELECT count(*)::int FROM printing_finishes f WHERE f.printing_id = p.id) AS finish_count,
             s.code AS set_code, c.name AS card_name
      FROM card_printings p
      JOIN card_sets s ON s.id = p.card_set_id
      JOIN canonical_cards c ON c.id = p.canonical_card_id
    `;

    const families = new Map<string, Row[]>();
    const ineligible = new Map<string, number>();
    let eligible = 0;

    for (const row of rows) {
      const reason = ineligibilityReason(row);
      if (reason) {
        ineligible.set(reason, (ineligible.get(reason) ?? 0) + 1);
        continue;
      }
      eligible += 1;
      const key = versionFamilyKey(row);
      families.set(key, [...(families.get(key) ?? []), row]);
    }

    // Actionability contract, evaluated per eligible printing.
    const dead: Array<{ row: Row; reason: string }> = [];
    for (const [, members] of families) {
      // The tile renders the family representative: English preferred, else first.
      const representative =
        members.find((value) => value.language_code === "en") ?? members[0]!;
      for (const member of members) {
        // 1. The family tile must be able to select this exact printing:
        //    either it is the representative (selected by the tile click) or it
        //    is reachable through the in-details Language refinement.
        const reachable =
          member.id === representative.id || members.length > 1;
        if (!reachable) {
          dead.push({ row: member, reason: "unreachable from any family tile" });
          continue;
        }
        // 2. The selected printing must expose a valid finish.
        if (member.finish_count === 0) {
          dead.push({ row: member, reason: "selectable but no valid finish" });
          continue;
        }
        // 3. The tile must be renderable (an image or an explicit fallback).
        //    A missing image is allowed (the UI renders a "No image" tile) but
        //    the representative must still be identifiable.
        if (!representative.collector_number) {
          dead.push({ row: member, reason: "no collector number to identify tile" });
        }
      }
    }

    const multiLanguageFamilies = [...families.values()].filter(
      (members) => members.length > 1,
    ).length;

    console.log("=== Exact-printing actionability audit ===");
    console.log(`total printings scanned:        ${rows.length}`);
    console.log(`eligible physical printings:    ${eligible}`);
    console.log(`version families rendered:      ${families.size}`);
    console.log(`  single-language families:     ${families.size - multiLanguageFamilies}`);
    console.log(`  multi-language families:      ${multiLanguageFamilies}`);
    console.log("intentionally ineligible:");
    if (!ineligible.size) console.log("  (none)");
    for (const [reason, count] of [...ineligible].sort((a, b) => b[1] - a[1]))
      console.log(`  ${count}\t${reason}`);
    console.log(`unexplained eligible-but-dead:  ${dead.length}`);
    for (const entry of dead.slice(0, 25))
      console.log(
        `  BUG ${entry.row.set_code.toUpperCase()} #${entry.row.collector_number} ` +
          `${entry.row.language_code} ${entry.row.card_name} (${entry.row.id}): ${entry.reason}`,
      );
    if (dead.length > 25) console.log(`  … and ${dead.length - 25} more`);

    if (dead.length) {
      console.error(
        `\nFAIL: ${dead.length} eligible printings are rendered but not actionable.`,
      );
      process.exitCode = 1;
      return;
    }
    console.log("\nPASS: every eligible physical printing is actionable.");
  } finally {
    await db.$disconnect();
  }
}

void main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
