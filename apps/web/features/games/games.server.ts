import "server-only";

import type { DeckDealGame } from "./active-game";

const apiBase = process.env.DECKDEAL_API_URL ?? "http://localhost:4000/api";

export async function loadGames(): Promise<DeckDealGame[]> {
  try {
    const response = await fetch(`${apiBase}/catalog/games`, { cache: "no-store" });
    if (!response.ok) return [];
    const values = (await response.json()) as Array<DeckDealGame & { created_at?: string }>;
    return values.flatMap((game) =>
      typeof game.id === "string" && typeof game.name === "string" && typeof game.slug === "string"
        ? [{ id: game.id, name: game.name, slug: game.slug }]
        : [],
    );
  } catch {
    return [];
  }
}
