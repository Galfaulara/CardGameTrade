require("dotenv").config();
const { createDbClient } = require("../../../packages/db/dist");

async function main() {
  const db = createDbClient(process.env.DATABASE_URL);
  try {
    const game = await db.games.findUniqueOrThrow({ where: { slug: "mtg" } });
    for (const query of ["light", "lightning", "dragon", "jace", "sol ring"]) {
      const terms = query.split(/\s+/);
      const where = { game_id: game.id, AND: terms.map((term) => ({ normalized_name: { contains: term } })) };
      const cards = await db.canonical_cards.findMany({ where, select: { id: true, name: true }, orderBy: [{ name: "asc" }, { id: "asc" }] });
      const ids = new Set(cards.map((card) => card.id));
      if (ids.size !== cards.length || cards.some((card) => terms.some((term) => !card.name.toLowerCase().includes(term)))) throw new Error(`Search semantics failed for ${query}`);
      console.log(JSON.stringify({ query, local_total: cards.length, page_count_at_60: Math.ceil(cards.length / 60), unique_ids: ids.size }));
    }
    const structures = await db.canonical_cards.findMany({ where: { game_id: game.id }, select: { id: true, name: true, raw_data: true }, take: 5000 });
    const kinds = { creature: (raw) => raw?.power != null && raw?.toughness != null, planeswalker: (raw) => raw?.loyalty != null,
      battle: (raw) => raw?.defense != null, multi_face: (raw) => Array.isArray(raw?.card_faces) && raw.card_faces.length > 1,
      land: (raw) => typeof raw?.type_line === "string" && raw.type_line.includes("Land") && !raw.mana_cost };
    for (const [kind, predicate] of Object.entries(kinds)) { const card = structures.find((item) => predicate(item.raw_data)); console.log(JSON.stringify({ kind, fixture: card ? { id: card.id, name: card.name } : null })); }
  } finally { await db.$disconnect(); }
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
