import { CatalogService } from "../src/catalog/catalog.service";

const canonicalId = "canonical", gameId = "game";
const printing = (layout: string, language = "ja") => ({ id: "11111111-1111-4111-8111-111111111111", canonical_card_id: canonicalId,
  language_code: language, card_sets: { id: "set", code: "znr", name: "Zendikar Rising", release_date: null },
  raw_data: { layout, card_faces: [
    { name: "Front", type_line: "Sorcery", oracle_text: "Front rules", image_uris: { normal: "https://cards.example/front.jpg" } },
    { name: "Back", type_line: "Land", oracle_text: "Back rules", image_uris: { normal: "https://cards.example/back.jpg" } },
  ] } });
const serviceFor = (layout: string) => new CatalogService({ client: {
  canonical_cards: { findUnique: async () => ({ id: canonicalId, game_id: gameId, name: "Front // Back", raw_data: null }) },
  card_printings: { findFirst: async () => printing(layout), findMany: async () => [] },
} } as any);

async function main() {
  for (const layout of ["modal_dfc", "transform"]) {
    const detail = await serviceFor(layout).getCardDetail(canonicalId, "11111111-1111-4111-8111-111111111111");
    const selected = detail.selected_printing!;
    if (selected.layout !== layout || selected.faces?.[0]?.image_normal_uri !== "https://cards.example/front.jpg" || selected.faces?.[1]?.image_normal_uri !== "https://cards.example/back.jpg") throw new Error(`${layout} face data was not mapped from stored printing raw_data.`);
    if (selected.id !== "11111111-1111-4111-8111-111111111111" || selected.canonical_card_id !== canonicalId || selected.language_code !== "ja") throw new Error("Face mapping changed exact printing, canonical card, or language identity.");
  }
  console.log("Card-detail DFC read-model regression passed.");
}
void main();
