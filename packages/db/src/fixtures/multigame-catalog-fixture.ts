export const MULTIGAME_FIXTURE_NAMESPACE = "deckdeal_multigame_frontend";
export const MULTIGAME_FIXTURE_VERSION = 1;
export const MULTIGAME_FIXTURE_SOURCE = "deckdeal_fixture";

export type FixtureFinish = "standard" | "holofoil" | "reverse_holofoil" | "foil";

export type FixtureSet = {
  readonly id: string;
  readonly key: string;
  readonly code: string;
  readonly name: string;
  readonly releaseDate: string;
  readonly setType: string;
};

export type FixtureCanonicalCard = {
  readonly id: string;
  readonly key: string;
  readonly name: string;
  readonly typeLine: string;
  readonly metadata: Readonly<Record<string, unknown>>;
};

export type FixturePrinting = {
  readonly id: string;
  readonly key: string;
  readonly cardKey: string;
  readonly setKey: string;
  readonly collectorNumber: string;
  readonly rarity: string;
  readonly artistName?: string;
  readonly releasedAt: string;
  readonly isReprint: boolean;
  readonly finishes: readonly FixtureFinish[];
  readonly metadata: Readonly<Record<string, unknown>>;
};

export type FixtureGame = {
  readonly id: string;
  readonly slug: "pokemon" | "yugioh";
  readonly name: string;
  readonly sets: readonly FixtureSet[];
  readonly cards: readonly FixtureCanonicalCard[];
  readonly printings: readonly FixturePrinting[];
};

const pokemonCards = [
  { id: "4f210001-0000-4000-8000-000000000001", key: "pokemon-card-001", name: "Alakazam", typeLine: "Pokémon — Stage 2", metadata: { hp: 80, stage: "Stage 2", types: ["Psychic"], attacks: ["Confuse Ray"] } },
  { id: "4f210002-0000-4000-8000-000000000002", key: "pokemon-card-002", name: "Blastoise", typeLine: "Pokémon — Stage 2", metadata: { hp: 100, stage: "Stage 2", types: ["Water"], attacks: ["Hydro Pump"] } },
  { id: "4f210003-0000-4000-8000-000000000003", key: "pokemon-card-003", name: "Charizard", typeLine: "Pokémon — Stage 2", metadata: { hp: 120, stage: "Stage 2", types: ["Fire"], attacks: ["Fire Spin"] } },
  { id: "4f210004-0000-4000-8000-000000000004", key: "pokemon-card-004", name: "Pikachu", typeLine: "Pokémon — Basic", metadata: { hp: 40, stage: "Basic", types: ["Lightning"], attacks: ["Gnaw", "Thunder Jolt"] } },
  { id: "4f210005-0000-4000-8000-000000000005", key: "pokemon-card-005", name: "Bulbasaur", typeLine: "Pokémon — Basic", metadata: { hp: 40, stage: "Basic", types: ["Grass"], attacks: ["Leech Seed"] } },
  { id: "4f210006-0000-4000-8000-000000000006", key: "pokemon-card-006", name: "Ivysaur", typeLine: "Pokémon — Stage 1", metadata: { hp: 60, stage: "Stage 1", types: ["Grass"], attacks: ["Vine Whip", "Poisonpowder"] } },
  { id: "4f210007-0000-4000-8000-000000000007", key: "pokemon-card-007", name: "Computer Search", typeLine: "Trainer", metadata: { card_category: "Trainer" } },
  { id: "4f210008-0000-4000-8000-000000000008", key: "pokemon-card-008", name: "Switch", typeLine: "Trainer", metadata: { card_category: "Trainer" } },
  { id: "4f210009-0000-4000-8000-000000000009", key: "pokemon-card-009", name: "Machop", typeLine: "Pokémon — Basic", metadata: { hp: 50, stage: "Basic", types: ["Fighting"], attacks: ["Low Kick"] } },
  { id: "4f210010-0000-4000-8000-000000000010", key: "pokemon-card-010", name: "Potion", typeLine: "Trainer", metadata: { card_category: "Trainer" } },
] as const satisfies readonly FixtureCanonicalCard[];

const pokemonPrintings = [
  { id: "4f220001-0000-4000-8000-000000000001", key: "pokemon-printing-001", cardKey: "pokemon-card-001", setKey: "pokemon-set-001", collectorNumber: "1", rarity: "Rare Holo", artistName: "Ken Sugimori", releasedAt: "1999-01-09", isReprint: false, finishes: ["holofoil"], metadata: { verification_ref: "base1-1" } },
  { id: "4f220002-0000-4000-8000-000000000002", key: "pokemon-printing-002", cardKey: "pokemon-card-001", setKey: "pokemon-set-002", collectorNumber: "1", rarity: "Rare Holo", artistName: "Ken Sugimori", releasedAt: "2000-02-24", isReprint: true, finishes: ["holofoil"], metadata: { verification_ref: "base4-1" } },
  { id: "4f220003-0000-4000-8000-000000000003", key: "pokemon-printing-003", cardKey: "pokemon-card-002", setKey: "pokemon-set-001", collectorNumber: "2", rarity: "Rare Holo", artistName: "Ken Sugimori", releasedAt: "1999-01-09", isReprint: false, finishes: ["holofoil"], metadata: { verification_ref: "base1-2" } },
  { id: "4f220004-0000-4000-8000-000000000004", key: "pokemon-printing-004", cardKey: "pokemon-card-002", setKey: "pokemon-set-002", collectorNumber: "2", rarity: "Rare Holo", artistName: "Ken Sugimori", releasedAt: "2000-02-24", isReprint: true, finishes: ["holofoil"], metadata: { verification_ref: "base4-2" } },
  { id: "4f220005-0000-4000-8000-000000000005", key: "pokemon-printing-005", cardKey: "pokemon-card-003", setKey: "pokemon-set-001", collectorNumber: "4", rarity: "Rare Holo", artistName: "Mitsuhiro Arita", releasedAt: "1999-01-09", isReprint: false, finishes: ["holofoil"], metadata: { verification_ref: "base1-4" } },
  { id: "4f220006-0000-4000-8000-000000000006", key: "pokemon-printing-006", cardKey: "pokemon-card-003", setKey: "pokemon-set-002", collectorNumber: "4", rarity: "Rare Holo", artistName: "Mitsuhiro Arita", releasedAt: "2000-02-24", isReprint: true, finishes: ["holofoil"], metadata: { verification_ref: "base4-4" } },
  { id: "4f220007-0000-4000-8000-000000000007", key: "pokemon-printing-007", cardKey: "pokemon-card-004", setKey: "pokemon-set-001", collectorNumber: "58", rarity: "Common", artistName: "Mitsuhiro Arita", releasedAt: "1999-01-09", isReprint: false, finishes: ["standard"], metadata: { verification_ref: "base1-58" } },
  { id: "4f220008-0000-4000-8000-000000000008", key: "pokemon-printing-008", cardKey: "pokemon-card-004", setKey: "pokemon-set-002", collectorNumber: "87", rarity: "Common", artistName: "Mitsuhiro Arita", releasedAt: "2000-02-24", isReprint: true, finishes: ["standard"], metadata: { verification_ref: "base4-87" } },
  { id: "4f220009-0000-4000-8000-000000000009", key: "pokemon-printing-009", cardKey: "pokemon-card-005", setKey: "pokemon-set-001", collectorNumber: "44", rarity: "Common", artistName: "Mitsuhiro Arita", releasedAt: "1999-01-09", isReprint: false, finishes: ["standard"], metadata: { verification_ref: "base1-44" } },
  { id: "4f220010-0000-4000-8000-000000000010", key: "pokemon-printing-010", cardKey: "pokemon-card-006", setKey: "pokemon-set-001", collectorNumber: "30", rarity: "Uncommon", artistName: "Ken Sugimori", releasedAt: "1999-01-09", isReprint: false, finishes: ["standard"], metadata: { verification_ref: "base1-30" } },
  { id: "4f220011-0000-4000-8000-000000000011", key: "pokemon-printing-011", cardKey: "pokemon-card-007", setKey: "pokemon-set-001", collectorNumber: "71", rarity: "Rare", artistName: "Keiji Kinebuchi", releasedAt: "1999-01-09", isReprint: false, finishes: ["standard"], metadata: { verification_ref: "base1-71" } },
  { id: "4f220012-0000-4000-8000-000000000012", key: "pokemon-printing-012", cardKey: "pokemon-card-008", setKey: "pokemon-set-001", collectorNumber: "95", rarity: "Common", artistName: "Keiji Kinebuchi", releasedAt: "1999-01-09", isReprint: false, finishes: ["standard"], metadata: { verification_ref: "base1-95" } },
  { id: "4f220013-0000-4000-8000-000000000013", key: "pokemon-printing-013", cardKey: "pokemon-card-009", setKey: "pokemon-set-001", collectorNumber: "52", rarity: "Common", artistName: "Mitsuhiro Arita", releasedAt: "1999-01-09", isReprint: false, finishes: ["standard"], metadata: { verification_ref: "base1-52" } },
  { id: "4f220014-0000-4000-8000-000000000014", key: "pokemon-printing-014", cardKey: "pokemon-card-010", setKey: "pokemon-set-001", collectorNumber: "94", rarity: "Common", artistName: "Keiji Kinebuchi", releasedAt: "1999-01-09", isReprint: false, finishes: ["standard"], metadata: { verification_ref: "base1-94" } },
] as const satisfies readonly FixturePrinting[];

const yugiohCards = [
  { id: "4f230001-0000-4000-8000-000000000001", key: "yugioh-card-001", name: "Dark Magician", typeLine: "Monster — Spellcaster / Normal", metadata: { card_category: "Monster", attribute: "DARK", level: 7, atk: 2500, def: 2100 } },
  { id: "4f230002-0000-4000-8000-000000000002", key: "yugioh-card-002", name: "Gaia The Fierce Knight", typeLine: "Monster — Warrior / Normal", metadata: { card_category: "Monster", attribute: "EARTH", level: 7, atk: 2300, def: 2100 } },
  { id: "4f230003-0000-4000-8000-000000000003", key: "yugioh-card-003", name: "Celtic Guardian", typeLine: "Monster — Warrior / Normal", metadata: { card_category: "Monster", attribute: "EARTH", level: 4, atk: 1400, def: 1200 } },
  { id: "4f230004-0000-4000-8000-000000000004", key: "yugioh-card-004", name: "Mystical Elf", typeLine: "Monster — Spellcaster / Normal", metadata: { card_category: "Monster", attribute: "LIGHT", level: 4, atk: 800, def: 2000 } },
  { id: "4f230005-0000-4000-8000-000000000005", key: "yugioh-card-005", name: "Blue-Eyes White Dragon", typeLine: "Monster — Dragon / Normal", metadata: { card_category: "Monster", attribute: "LIGHT", level: 8, atk: 3000, def: 2500 } },
  { id: "4f230006-0000-4000-8000-000000000006", key: "yugioh-card-006", name: "Skull Servant", typeLine: "Monster — Zombie / Normal", metadata: { card_category: "Monster", attribute: "DARK", level: 1, atk: 300, def: 200 } },
  { id: "4f230007-0000-4000-8000-000000000007", key: "yugioh-card-007", name: "Dark Hole", typeLine: "Spell", metadata: { card_category: "Spell" } },
  { id: "4f230008-0000-4000-8000-000000000008", key: "yugioh-card-008", name: "Trap Hole", typeLine: "Trap", metadata: { card_category: "Trap" } },
  { id: "4f230009-0000-4000-8000-000000000009", key: "yugioh-card-009", name: "Monster Reborn", typeLine: "Spell", metadata: { card_category: "Spell" } },
  { id: "4f230010-0000-4000-8000-000000000010", key: "yugioh-card-010", name: "Card Destruction", typeLine: "Spell", metadata: { card_category: "Spell" } },
] as const satisfies readonly FixtureCanonicalCard[];

const yugiohPrintings = [
  { id: "4f240001-0000-4000-8000-000000000001", key: "yugioh-printing-001", cardKey: "yugioh-card-001", setKey: "yugioh-set-001", collectorNumber: "LOB-005", rarity: "Ultra Rare", releasedAt: "2002-03-08", isReprint: false, finishes: ["foil"], metadata: { verification_ref: "LOB-005" } },
  { id: "4f240002-0000-4000-8000-000000000002", key: "yugioh-printing-002", cardKey: "yugioh-card-001", setKey: "yugioh-set-002", collectorNumber: "SDY-006", rarity: "Ultra Rare", releasedAt: "2002-03-29", isReprint: true, finishes: ["foil"], metadata: { verification_ref: "SDY-006" } },
  { id: "4f240003-0000-4000-8000-000000000003", key: "yugioh-printing-003", cardKey: "yugioh-card-002", setKey: "yugioh-set-001", collectorNumber: "LOB-006", rarity: "Ultra Rare", releasedAt: "2002-03-08", isReprint: false, finishes: ["foil"], metadata: { verification_ref: "LOB-006" } },
  { id: "4f240004-0000-4000-8000-000000000004", key: "yugioh-printing-004", cardKey: "yugioh-card-002", setKey: "yugioh-set-002", collectorNumber: "SDY-007", rarity: "Common", releasedAt: "2002-03-29", isReprint: true, finishes: ["standard"], metadata: { verification_ref: "SDY-007" } },
  { id: "4f240005-0000-4000-8000-000000000005", key: "yugioh-printing-005", cardKey: "yugioh-card-003", setKey: "yugioh-set-001", collectorNumber: "LOB-007", rarity: "Super Rare", releasedAt: "2002-03-08", isReprint: false, finishes: ["foil"], metadata: { verification_ref: "LOB-007" } },
  { id: "4f240006-0000-4000-8000-000000000006", key: "yugioh-printing-006", cardKey: "yugioh-card-003", setKey: "yugioh-set-002", collectorNumber: "SDY-009", rarity: "Common", releasedAt: "2002-03-29", isReprint: true, finishes: ["standard"], metadata: { verification_ref: "SDY-009" } },
  { id: "4f240007-0000-4000-8000-000000000007", key: "yugioh-printing-007", cardKey: "yugioh-card-004", setKey: "yugioh-set-001", collectorNumber: "LOB-062", rarity: "Super Rare", releasedAt: "2002-03-08", isReprint: false, finishes: ["foil"], metadata: { verification_ref: "LOB-062" } },
  { id: "4f240008-0000-4000-8000-000000000008", key: "yugioh-printing-008", cardKey: "yugioh-card-004", setKey: "yugioh-set-002", collectorNumber: "SDY-001", rarity: "Common", releasedAt: "2002-03-29", isReprint: true, finishes: ["standard"], metadata: { verification_ref: "SDY-001" } },
  { id: "4f240009-0000-4000-8000-000000000009", key: "yugioh-printing-009", cardKey: "yugioh-card-005", setKey: "yugioh-set-001", collectorNumber: "LOB-001", rarity: "Ultra Rare", releasedAt: "2002-03-08", isReprint: false, finishes: ["foil"], metadata: { verification_ref: "LOB-001" } },
  { id: "4f240010-0000-4000-8000-000000000010", key: "yugioh-printing-010", cardKey: "yugioh-card-006", setKey: "yugioh-set-001", collectorNumber: "LOB-004", rarity: "Common", releasedAt: "2002-03-08", isReprint: false, finishes: ["standard"], metadata: { verification_ref: "LOB-004" } },
  { id: "4f240011-0000-4000-8000-000000000011", key: "yugioh-printing-011", cardKey: "yugioh-card-007", setKey: "yugioh-set-001", collectorNumber: "LOB-052", rarity: "Super Rare", releasedAt: "2002-03-08", isReprint: false, finishes: ["foil"], metadata: { verification_ref: "LOB-052" } },
  { id: "4f240012-0000-4000-8000-000000000012", key: "yugioh-printing-012", cardKey: "yugioh-card-008", setKey: "yugioh-set-001", collectorNumber: "LOB-058", rarity: "Super Rare", releasedAt: "2002-03-08", isReprint: false, finishes: ["foil"], metadata: { verification_ref: "LOB-058" } },
  { id: "4f240013-0000-4000-8000-000000000013", key: "yugioh-printing-013", cardKey: "yugioh-card-009", setKey: "yugioh-set-001", collectorNumber: "LOB-118", rarity: "Ultra Rare", releasedAt: "2002-03-08", isReprint: false, finishes: ["foil"], metadata: { verification_ref: "LOB-118" } },
  { id: "4f240014-0000-4000-8000-000000000014", key: "yugioh-printing-014", cardKey: "yugioh-card-010", setKey: "yugioh-set-002", collectorNumber: "SDY-042", rarity: "Super Rare", releasedAt: "2002-03-29", isReprint: false, finishes: ["foil"], metadata: { verification_ref: "SDY-042" } },
] as const satisfies readonly FixturePrinting[];

export const MULTIGAME_CATALOG_FIXTURE = [
  {
    id: "4f200001-0000-4000-8000-000000000001",
    slug: "pokemon",
    name: "Pokémon",
    sets: [
      { id: "4f201001-0000-4000-8000-000000000001", key: "pokemon-set-001", code: "BS", name: "Base", releaseDate: "1999-01-09", setType: "Expansion" },
      { id: "4f201002-0000-4000-8000-000000000002", key: "pokemon-set-002", code: "B2", name: "Base Set 2", releaseDate: "2000-02-24", setType: "Expansion" },
    ],
    cards: pokemonCards,
    printings: pokemonPrintings,
  },
  {
    id: "4f200002-0000-4000-8000-000000000002",
    slug: "yugioh",
    name: "Yu-Gi-Oh!",
    sets: [
      { id: "4f202001-0000-4000-8000-000000000001", key: "yugioh-set-001", code: "LOB", name: "Legend of Blue Eyes White Dragon", releaseDate: "2002-03-08", setType: "Booster Pack" },
      { id: "4f202002-0000-4000-8000-000000000002", key: "yugioh-set-002", code: "SDY", name: "Starter Deck: Yugi", releaseDate: "2002-03-29", setType: "Starter Deck" },
    ],
    cards: yugiohCards,
    printings: yugiohPrintings,
  },
] as const satisfies readonly FixtureGame[];

export function fixtureRawData(game: FixtureGame, metadata: Readonly<Record<string, unknown>>) {
  return {
    deckdeal_fixture: {
      namespace: MULTIGAME_FIXTURE_NAMESPACE,
      version: MULTIGAME_FIXTURE_VERSION,
      game: game.slug,
      ...metadata,
    },
  };
}

export function fixtureCounts(game: FixtureGame) {
  return {
    sets: game.sets.length,
    canonicalCards: game.cards.length,
    printings: game.printings.length,
    finishes: game.printings.reduce((total, printing) => total + printing.finishes.length, 0),
  };
}
