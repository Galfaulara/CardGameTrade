import { BadRequestException } from "@nestjs/common";
import { StoresService } from "../src/stores/stores.service";

const assert: (value: unknown, message: string) => asserts value = (
  value,
  message,
) => {
  if (!value) throw new Error(message);
};

const fixtureGames = [
  { id: "game-mtg", slug: "mtg" },
  { id: "game-pokemon", slug: "pokemon" },
  { id: "game-yugioh", slug: "yugioh" },
];

type FixtureStore = {
  id: string;
  name: string;
  status: string;
  verification_status: string;
  trade_mediation_enabled: boolean;
  store_games: Array<{ game_id: string; trade_mediation_enabled: boolean }>;
};

const fixtureStores: FixtureStore[] = [
  {
    id: "store-all-games",
    name: "All-Games LGS",
    status: "active",
    verification_status: "verified",
    trade_mediation_enabled: true,
    store_games: [
      { game_id: "game-mtg", trade_mediation_enabled: true },
      { game_id: "game-pokemon", trade_mediation_enabled: true },
      { game_id: "game-yugioh", trade_mediation_enabled: true },
    ],
  },
  {
    id: "store-mtg-only",
    name: "MTG-Only LGS",
    status: "active",
    verification_status: "verified",
    trade_mediation_enabled: true,
    store_games: [{ game_id: "game-mtg", trade_mediation_enabled: true }],
  },
  {
    id: "store-pokemon-mediation-disabled",
    name: "Pokemon Non-Mediating LGS",
    status: "active",
    verification_status: "verified",
    trade_mediation_enabled: true,
    store_games: [{ game_id: "game-pokemon", trade_mediation_enabled: false }],
  },
  {
    id: "store-unverified",
    name: "Unverified All-Games LGS",
    status: "active",
    verification_status: "unverified",
    trade_mediation_enabled: true,
    store_games: [
      { game_id: "game-mtg", trade_mediation_enabled: true },
      { game_id: "game-pokemon", trade_mediation_enabled: true },
      { game_id: "game-yugioh", trade_mediation_enabled: true },
    ],
  },
];

function matchesWhere(store: FixtureStore, where: Record<string, unknown>) {
  if (where.status !== undefined && store.status !== where.status) return false;
  if (
    where.verification_status !== undefined &&
    store.verification_status !== where.verification_status
  )
    return false;
  if (
    where.trade_mediation_enabled !== undefined &&
    store.trade_mediation_enabled !== where.trade_mediation_enabled
  )
    return false;
  const storeGames = where.store_games as
    | { some: { game_id: string; trade_mediation_enabled: boolean } }
    | undefined;
  if (storeGames) {
    const match = store.store_games.some(
      (row) =>
        row.game_id === storeGames.some.game_id &&
        row.trade_mediation_enabled === storeGames.some.trade_mediation_enabled,
    );
    if (!match) return false;
  }
  return true;
}

function project(store: FixtureStore, select: Record<string, unknown>) {
  const result: Record<string, unknown> = {};
  for (const key of Object.keys(select)) {
    if (select[key]) result[key] = (store as unknown as Record<string, unknown>)[key];
  }
  return result;
}

function fakeDatabase() {
  return {
    client: {
      games: {
        findUnique: async ({ where: { slug } }: { where: { slug: string } }) =>
          fixtureGames.find((game) => game.slug === slug) ?? null,
      },
      stores: {
        findMany: async ({
          where,
          select,
        }: {
          where: Record<string, unknown>;
          select: Record<string, unknown>;
        }) =>
          fixtureStores
            .filter((store) => matchesWhere(store, where))
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((store) => project(store, select)),
      },
    },
  } as never;
}

async function main() {
  const service = new StoresService(fakeDatabase());

  // 1. Unfiltered endpoint must remain backward compatible: identical global eligibility
  // rule (active + verified + trade_mediation_enabled), with store_games entirely ignored.
  const unfiltered = await service.getTradeMediators();
  assert(
    unfiltered.map((store: any) => store.id).sort().join(",") ===
      ["store-all-games", "store-mtg-only", "store-pokemon-mediation-disabled"].sort().join(","),
    "Unfiltered mediators must preserve the pre-existing global eligibility rule, independent of store_games.",
  );

  // 2/6. mtg must include stores with mtg-eligible store_games and exclude the unverified store.
  const mtg = await service.getTradeMediators("mtg");
  assert(
    mtg.map((store: any) => store.id).sort().join(",") ===
      ["store-all-games", "store-mtg-only"].sort().join(","),
    "mtg filter must return only MTG-supported mediators.",
  );

  // 3/5. pokemon must exclude the store with trade_mediation_enabled=false for pokemon and
  // the store with no pokemon store_games row at all (both count as "unsupported store").
  const pokemon = await service.getTradeMediators("pokemon");
  assert(
    pokemon.length === 1 && pokemon[0]?.id === "store-all-games",
    "pokemon filter must return only Pokémon-supported mediators, excluding disabled/absent store_games.",
  );

  // 4. yugioh must return only the store with an eligible yugioh store_games row.
  const yugioh = await service.getTradeMediators("yugioh");
  assert(
    yugioh.length === 1 && yugioh[0]?.id === "store-all-games",
    "yugioh filter must return only Yu-Gi-Oh!-supported mediators.",
  );

  // 5 (explicit). The unverified store must never appear, regardless of filter.
  for (const list of [unfiltered, mtg, pokemon, yugioh]) {
    assert(
      !list.some((store: any) => store.id === "store-unverified"),
      "An unverified store must be excluded from every mediator view (global and game-filtered).",
    );
  }

  // 6. Unknown game slug must produce a clean 400 (BadRequestException), not a silent
  // fallback or a raw DB error.
  let threwBadRequest = false;
  try {
    await service.getTradeMediators("unknown-cert-game");
  } catch (error) {
    threwBadRequest = error instanceof BadRequestException;
  }
  assert(threwBadRequest, "An unknown gameSlug must raise a BadRequestException (clean 400).");

  // 7. The public shape must never expose store_games, filtered or not.
  for (const list of [unfiltered, mtg, pokemon, yugioh]) {
    for (const store of list) {
      assert(
        !Object.prototype.hasOwnProperty.call(store, "store_games"),
        "Trade-mediator responses must never leak the internal store_games relation.",
      );
    }
  }

  console.log("Store trade-mediator game filter regression passed.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
