import { CatalogService } from "../src/catalog/catalog.service";

const assert: (value: unknown, message: string) => asserts value = (
  value,
  message,
) => {
  if (!value) throw new Error(message);
};

type FakePrinting = {
  id: string;
  canonical_card_id: string;
  card_sets: { id: string; code: string; name: string; release_date: string | null };
  raw_data: unknown;
};

function fakeDatabase(options: {
  canonicalCardId: string;
  gameId: string;
  representative: FakePrinting;
  explicit?: FakePrinting;
}) {
  const printingsById = new Map<string, FakePrinting>(
    [options.representative, options.explicit].filter(Boolean).map((printing) => [printing!.id, printing!]),
  );
  return {
    client: {
      canonical_cards: {
        findUnique: async () => ({
          id: options.canonicalCardId,
          game_id: options.gameId,
          name: "Regression Card",
          mana_cost: null,
          type_line: null,
          oracle_text: null,
          colors: [],
          color_identity: [],
          raw_data: null,
        }),
      },
      card_printings: {
        findFirst: async ({ where }: { where: { id: string } }) =>
          printingsById.get(where.id) ?? null,
        findMany: async ({ where }: { where: { id?: { in: string[] } } }) => {
          if (where.id?.in) {
            return where.id.in.flatMap((id) => (printingsById.has(id) ? [printingsById.get(id)!] : []));
          }
          return [];
        },
      },
      $queryRaw: async () => [{ id: options.representative.id, canonical_card_id: options.canonicalCardId }],
    },
  } as never;
}

async function main() {
  // 1. Default (no ?printing=) MTG representative-printing path must retain scryfall_uri.
  const mtgCanonicalId = "canonical-mtg";
  const mtgRepresentative: FakePrinting = {
    id: "11111111-1111-1111-1111-111111111111",
    canonical_card_id: mtgCanonicalId,
    card_sets: { id: "set-1", code: "abc", name: "Alpha Block Collection", release_date: null },
    raw_data: { scryfall_uri: "https://scryfall.com/card/abc/1/regression-card" },
  };
  const mtgExplicit: FakePrinting = {
    id: "22222222-2222-2222-2222-222222222222",
    canonical_card_id: mtgCanonicalId,
    card_sets: { id: "set-2", code: "xyz", name: "Explicit Printing Set", release_date: null },
    raw_data: { scryfall_uri: "https://scryfall.com/card/xyz/2/regression-card" },
  };
  const mtgService = new CatalogService(
    fakeDatabase({ canonicalCardId: mtgCanonicalId, gameId: "game-mtg", representative: mtgRepresentative, explicit: mtgExplicit }),
  );

  const defaultDetail = await mtgService.getCardDetail(mtgCanonicalId);
  assert(
    defaultDetail.selected_printing?.scryfall_uri === "https://scryfall.com/card/abc/1/regression-card",
    "Default representative-printing card detail must retain scryfall_uri from source raw_data (double-mapping regression).",
  );
  assert(
    defaultDetail.selected_printing?.id === mtgRepresentative.id,
    "Default path must select the representative printing.",
  );

  // 2. Explicit ?printing= must still resolve its own scryfall_uri correctly.
  const explicitDetail = await mtgService.getCardDetail(mtgCanonicalId, mtgExplicit.id);
  assert(
    explicitDetail.selected_printing?.scryfall_uri === "https://scryfall.com/card/xyz/2/regression-card",
    "Explicit printing selection must independently resolve its own scryfall_uri.",
  );
  assert(
    explicitDetail.selected_printing?.id === mtgExplicit.id,
    "Explicit printing selection must return the requested printing.",
  );

  // 3. Non-MTG (or any printing without a scryfall_uri) must remain null through both paths.
  const nonMtgCanonicalId = "canonical-pokemon";
  const nonMtgRepresentative: FakePrinting = {
    id: "33333333-3333-3333-3333-333333333333",
    canonical_card_id: nonMtgCanonicalId,
    card_sets: { id: "set-3", code: "poke", name: "Pokémon Base Set", release_date: null },
    raw_data: { id: "pokemon-source-id", name: "Regression Card" },
  };
  const nonMtgService = new CatalogService(
    fakeDatabase({ canonicalCardId: nonMtgCanonicalId, gameId: "game-pokemon", representative: nonMtgRepresentative }),
  );
  const nonMtgDefaultDetail = await nonMtgService.getCardDetail(nonMtgCanonicalId);
  assert(
    nonMtgDefaultDetail.selected_printing?.scryfall_uri === null,
    "Non-MTG raw_data without a scryfall_uri must remain null, not error or fabricate a value.",
  );
  const nonMtgExplicitDetail = await nonMtgService.getCardDetail(nonMtgCanonicalId, nonMtgRepresentative.id);
  assert(
    nonMtgExplicitDetail.selected_printing?.scryfall_uri === null,
    "Non-MTG explicit printing selection must also remain null.",
  );

  // 4. No double-mapping regression: mapPrinting must run exactly once over the representative
  // object. A second pass would see raw_data already stripped and null scryfall_uri out again,
  // so a second independent call must still observe the correct, non-null value.
  const repeat = await mtgService.getCardDetail(mtgCanonicalId);
  assert(
    repeat.selected_printing?.scryfall_uri === "https://scryfall.com/card/abc/1/regression-card",
    "Repeated default-path calls must consistently retain scryfall_uri (no double-mapping regression).",
  );
  assert(
    Object.prototype.hasOwnProperty.call(repeat.selected_printing, "set") &&
      !Object.prototype.hasOwnProperty.call(repeat.selected_printing, "raw_data"),
    "selected_printing must expose 'set' and never leak raw_data, regardless of which path selected it.",
  );

  console.log("Catalog card-detail Scryfall regression passed.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
