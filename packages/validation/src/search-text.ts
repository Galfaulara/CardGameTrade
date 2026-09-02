const apostrophes = /[\u2018\u2019\u02bc\uff07]/g;
const doubleQuotes = /[\u201c\u201d\uff02]/g;
const spaces = /[\s\u00a0]+/g;

/** Deterministic catalog-name normalization shared by ingestion and lookup. */
export function normalizeCatalogSearchText(value: string) {
  return value
    .normalize("NFKC")
    .replace(apostrophes, "'")
    .replace(doubleQuotes, '"')
    .replace(spaces, " ")
    .trim()
    .toLocaleLowerCase("en-US");
}
