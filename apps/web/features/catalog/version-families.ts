import type { CatalogPrinting } from "../marketplace/api";

export type VersionFamily = { key: string; representative: CatalogPrinting; printings: CatalogPrinting[] };

export function versionFamilyKey(printing: CatalogPrinting) {
  return [printing.canonical_card_id, printing.card_set_id || printing.card_sets.id,
    printing.collector_number, printing.treatment ?? "",
    printing.illustration_id ?? `artist:${printing.artist_name ?? "unknown"}`,
    printing.frame_version ?? "", printing.border_color ?? "",
    printing.is_promo ? "promo" : "standard", printing.variation ? "variation" : "base"].join("|");
}

export function groupPrintingVersions(printings: CatalogPrinting[]): VersionFamily[] {
  const groups = new Map<string, CatalogPrinting[]>();
  for (const printing of printings) {
    const key = versionFamilyKey(printing);
    groups.set(key, [...(groups.get(key) ?? []), printing]);
  }
  return [...groups].map(([key, values]) => ({ key,
    representative: values.find((value) => value.language_code === "en") ?? values[0]!,
    printings: [...values].sort((a, b) => a.language_code.localeCompare(b.language_code)) }));
}
