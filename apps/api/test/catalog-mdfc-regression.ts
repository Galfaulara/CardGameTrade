import { CatalogService } from "../src/catalog/catalog.service";

const canonical = { id: "agadeem", game_id: "mtg", name: "Agadeem's Awakening // Agadeem, the Undercrypt",
  normalized_name: "agadeem's awakening // agadeem, the undercrypt", mana_cost: null, type_line: null,
  oracle_text: null, colors: [], color_identity: [] };
const client: any = {
  $queryRaw: async () => [{ canonical_card_id: canonical.id }],
  canonical_cards: {
    findMany: async ({ where }: any) => {
      const serialized = JSON.stringify(where);
      return serialized.includes("agadeem") ? [canonical] : [];
    },
  },
};

const service = new CatalogService({ client } as any);
async function main() {
  const front = await service.searchCards("mtg", "Agadeem's Awakening");
  const back = await service.searchCards("mtg", "Agadeem, the Undercrypt");
  const full = await service.searchCards("mtg", canonical.name);
  for (const result of [front, back, full]) {
    if (result[0]?.id !== canonical.id) throw new Error("Every source-driven MDFC face alias must resolve to the same canonical card.");
  }
  console.log("API MDFC catalog regression passed.");
}
void main();
