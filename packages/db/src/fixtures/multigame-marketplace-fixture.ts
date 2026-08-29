import {
  MULTIGAME_FIXTURE_NAMESPACE,
  MULTIGAME_FIXTURE_VERSION,
  type FixtureFinish,
} from "./multigame-catalog-fixture";

export const MARKETPLACE_FIXTURE_NAMESPACE = MULTIGAME_FIXTURE_NAMESPACE;
export const MARKETPLACE_FIXTURE_VERSION = MULTIGAME_FIXTURE_VERSION;
export const MARKETPLACE_FIXTURE_MARKER = `${MARKETPLACE_FIXTURE_NAMESPACE}:v${MARKETPLACE_FIXTURE_VERSION}:marketplace`;

export const MARKETPLACE_FIXTURE_OWNER = {
  id: "92d9585a-7c59-4c02-8ee4-a9c24b9787d0",
  username: "trade_test_user",
  email: "trade-test@deckdeal.local",
} as const;

export const MARKETPLACE_FIXTURE_STORE = {
  id: "eca7b68d-6a7a-4e68-89bd-baea637ca59d",
  slug: "deckdeal-test-lgs",
  name: "DeckDeal Test LGS",
} as const;

// A sentinel on newly-created rows lets cleanup distinguish fixture-owned
// store_games memberships from pre-existing store configuration.
export const STORE_GAME_FIXTURE_TIMESTAMP = "2026-08-28T04:03:00.000Z";

export type MarketplaceInventory = {
  readonly id: string;
  readonly printingKey: string;
  readonly finish: FixtureFinish;
  readonly owner: "user" | "store";
  readonly condition: "near_mint" | "lightly_played";
  readonly notes: string;
};

export type MarketplaceListing = {
  readonly id: string;
  readonly inventoryId: string;
  readonly mode: "trade" | "cash" | "mixed";
  readonly askingPrice?: string;
  readonly preferredStore: boolean;
  readonly title: string;
};

export type MarketplaceWishlistItem = {
  readonly id: string;
  readonly target: { readonly kind: "canonical"; readonly key: string }
    | { readonly kind: "printing"; readonly key: string; readonly finish: FixtureFinish };
  readonly priority: "normal" | "high";
  readonly notes: string;
};

export type MarketplaceGameFixture = {
  readonly slug: "pokemon" | "yugioh";
  readonly collection: { readonly id: string; readonly name: string; readonly description: string };
  readonly inventory: readonly MarketplaceInventory[];
  readonly listings: readonly MarketplaceListing[];
  readonly wishlist: { readonly id: string; readonly name: string; readonly description: string };
  readonly wishlistItems: readonly MarketplaceWishlistItem[];
};

function wishlistItems(slug: "pokemon" | "yugioh", items: readonly MarketplaceWishlistItem[]) {
  return items.map((item) => ({ ...item, notes: `${MARKETPLACE_FIXTURE_MARKER}:${slug}:wishlist-item:${item.notes}` }));
}

type InventoryTuple = readonly [
  id: string,
  printingKey: string,
  finish: FixtureFinish,
  owner: "user" | "store",
  condition: "near_mint" | "lightly_played",
  label: string,
];

function inventoryItems(slug: "pokemon" | "yugioh", items: readonly InventoryTuple[]): readonly MarketplaceInventory[] {
  return items.map(([id, printingKey, finish, owner, condition, label]) => ({
    id, printingKey, finish, owner, condition,
    notes: `${MARKETPLACE_FIXTURE_MARKER}:${slug}:inventory:${label}`,
  }));
}

const pokemon = {
  slug: "pokemon",
  collection: {
    id: "4f300001-0000-4000-8000-000000000001",
    name: "DeckDeal Fixture — Pokémon Showcase",
    description: `${MARKETPLACE_FIXTURE_MARKER}:pokemon:collection`,
  },
  inventory: inventoryItems("pokemon", [
    ["4f310001-0000-4000-8000-000000000001", "pokemon-printing-001", "holofoil", "user", "near_mint", "Alakazam — Base Set"],
    ["4f310002-0000-4000-8000-000000000002", "pokemon-printing-004", "holofoil", "user", "lightly_played", "Blastoise — Base Set 2"],
    ["4f310003-0000-4000-8000-000000000003", "pokemon-printing-006", "holofoil", "user", "near_mint", "Charizard — Base Set 2"],
    ["4f310004-0000-4000-8000-000000000004", "pokemon-printing-007", "standard", "user", "near_mint", "Pikachu — Base Set"],
    ["4f310005-0000-4000-8000-000000000005", "pokemon-printing-008", "standard", "user", "lightly_played", "Pikachu — Base Set 2"],
    ["4f310006-0000-4000-8000-000000000006", "pokemon-printing-009", "standard", "user", "near_mint", "Bulbasaur — Base Set"],
    ["4f310007-0000-4000-8000-000000000007", "pokemon-printing-010", "standard", "user", "near_mint", "Ivysaur — Base Set"],
    ["4f310008-0000-4000-8000-000000000008", "pokemon-printing-003", "holofoil", "store", "near_mint", "Blastoise — Base Set"],
    ["4f310009-0000-4000-8000-000000000009", "pokemon-printing-011", "standard", "store", "lightly_played", "Computer Search — Base Set"],
    ["4f310010-0000-4000-8000-000000000010", "pokemon-printing-013", "standard", "store", "near_mint", "Machop — Base Set"],
  ]),
  listings: [
    { id: "4f320001-0000-4000-8000-000000000001", inventoryId: "4f310004-0000-4000-8000-000000000004", mode: "trade", preferredStore: true, title: "Fixture Pokémon trade — Pikachu" },
    { id: "4f320002-0000-4000-8000-000000000002", inventoryId: "4f310003-0000-4000-8000-000000000003", mode: "cash", askingPrice: "199.00", preferredStore: true, title: "Fixture Pokémon cash — Charizard" },
    { id: "4f320003-0000-4000-8000-000000000003", inventoryId: "4f310008-0000-4000-8000-000000000008", mode: "mixed", askingPrice: "85.00", preferredStore: false, title: "Fixture Pokémon mixed — Blastoise" },
  ],
  wishlist: {
    id: "4f330001-0000-4000-8000-000000000001",
    name: "DeckDeal Fixture — Pokémon Wants",
    description: `${MARKETPLACE_FIXTURE_MARKER}:pokemon:wishlist`,
  },
  wishlistItems: wishlistItems("pokemon", [
    { id: "4f340001-0000-4000-8000-000000000001", target: { kind: "canonical", key: "pokemon-card-003" }, priority: "high", notes: "Charizard, any controlled printing" },
    { id: "4f340002-0000-4000-8000-000000000002", target: { kind: "printing", key: "pokemon-printing-002", finish: "holofoil" }, priority: "normal", notes: "Alakazam — Base Set 2" },
    { id: "4f340003-0000-4000-8000-000000000003", target: { kind: "canonical", key: "pokemon-card-004" }, priority: "normal", notes: "Pikachu, either selected set" },
    { id: "4f340004-0000-4000-8000-000000000004", target: { kind: "printing", key: "pokemon-printing-011", finish: "standard" }, priority: "high", notes: "Computer Search — Base Set" },
  ]),
} as const satisfies MarketplaceGameFixture;

const yugioh = {
  slug: "yugioh",
  collection: {
    id: "4f300002-0000-4000-8000-000000000002",
    name: "DeckDeal Fixture — Yu-Gi-Oh! Showcase",
    description: `${MARKETPLACE_FIXTURE_MARKER}:yugioh:collection`,
  },
  inventory: inventoryItems("yugioh", [
    ["4f350001-0000-4000-8000-000000000001", "yugioh-printing-001", "foil", "user", "near_mint", "Dark Magician — LOB"],
    ["4f350002-0000-4000-8000-000000000002", "yugioh-printing-002", "foil", "user", "lightly_played", "Dark Magician — SDY"],
    ["4f350003-0000-4000-8000-000000000003", "yugioh-printing-004", "standard", "user", "near_mint", "Gaia — SDY"],
    ["4f350004-0000-4000-8000-000000000004", "yugioh-printing-005", "foil", "user", "near_mint", "Celtic Guardian — LOB"],
    ["4f350005-0000-4000-8000-000000000005", "yugioh-printing-008", "standard", "user", "lightly_played", "Mystical Elf — SDY"],
    ["4f350006-0000-4000-8000-000000000006", "yugioh-printing-011", "foil", "user", "near_mint", "Dark Hole — LOB"],
    ["4f350007-0000-4000-8000-000000000007", "yugioh-printing-012", "foil", "user", "near_mint", "Trap Hole — LOB"],
    ["4f350008-0000-4000-8000-000000000008", "yugioh-printing-009", "foil", "store", "near_mint", "Blue-Eyes — LOB"],
    ["4f350009-0000-4000-8000-000000000009", "yugioh-printing-010", "standard", "store", "lightly_played", "Skull Servant — LOB"],
    ["4f350010-0000-4000-8000-000000000010", "yugioh-printing-014", "foil", "store", "near_mint", "Card Destruction — SDY"],
  ]),
  listings: [
    { id: "4f360001-0000-4000-8000-000000000001", inventoryId: "4f350003-0000-4000-8000-000000000003", mode: "trade", preferredStore: true, title: "Fixture Yu-Gi-Oh! trade — Gaia" },
    { id: "4f360002-0000-4000-8000-000000000002", inventoryId: "4f350001-0000-4000-8000-000000000001", mode: "cash", askingPrice: "74.00", preferredStore: true, title: "Fixture Yu-Gi-Oh! cash — Dark Magician" },
    { id: "4f360003-0000-4000-8000-000000000003", inventoryId: "4f350008-0000-4000-8000-000000000008", mode: "mixed", askingPrice: "95.00", preferredStore: false, title: "Fixture Yu-Gi-Oh! mixed — Blue-Eyes" },
  ],
  wishlist: {
    id: "4f370001-0000-4000-8000-000000000001",
    name: "DeckDeal Fixture — Yu-Gi-Oh! Wants",
    description: `${MARKETPLACE_FIXTURE_MARKER}:yugioh:wishlist`,
  },
  wishlistItems: wishlistItems("yugioh", [
    { id: "4f380001-0000-4000-8000-000000000001", target: { kind: "canonical", key: "yugioh-card-001" }, priority: "high", notes: "Dark Magician, either selected product" },
    { id: "4f380002-0000-4000-8000-000000000002", target: { kind: "printing", key: "yugioh-printing-006", finish: "standard" }, priority: "normal", notes: "Celtic Guardian — SDY" },
    { id: "4f380003-0000-4000-8000-000000000003", target: { kind: "canonical", key: "yugioh-card-008" }, priority: "normal", notes: "Trap Hole" },
    { id: "4f380004-0000-4000-8000-000000000004", target: { kind: "printing", key: "yugioh-printing-009", finish: "foil" }, priority: "high", notes: "Blue-Eyes White Dragon — LOB" },
  ]),
} as const satisfies MarketplaceGameFixture;

export const MULTIGAME_MARKETPLACE_FIXTURE = [pokemon, yugioh] as const satisfies readonly MarketplaceGameFixture[];

export const marketplaceFixtureIds = {
  collections: MULTIGAME_MARKETPLACE_FIXTURE.map((game) => game.collection.id),
  inventory: MULTIGAME_MARKETPLACE_FIXTURE.flatMap((game) => game.inventory.map((item) => item.id)),
  listings: MULTIGAME_MARKETPLACE_FIXTURE.flatMap((game) => game.listings.map((listing) => listing.id)),
  wishlists: MULTIGAME_MARKETPLACE_FIXTURE.map((game) => game.wishlist.id),
  wishlistItems: MULTIGAME_MARKETPLACE_FIXTURE.flatMap((game) => game.wishlistItems.map((item) => item.id)),
} as const;
