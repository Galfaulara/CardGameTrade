import { NextRequest, NextResponse } from "next/server";
import { getDiscoveryFeed } from "../../../features/marketplace/api";
import { ACTIVE_GAME_COOKIE, resolveActiveGame } from "../../../features/games/active-game";
import { loadGames } from "../../../features/games/games.server";

const views = new Set(["collections", "stores", "listings"]);

export async function GET(request: NextRequest) {
  const view = request.nextUrl.searchParams.get("view") ?? "collections";
  if (!views.has(view)) return NextResponse.json({ message: "Invalid discovery view." }, { status: 400 });
  const defaultFilter = view === "listings" ? "all" : "all";
  const filter = request.nextUrl.searchParams.get("filter") ?? defaultFilter;
  const cursor = request.nextUrl.searchParams.get("cursor") ?? undefined;
  try {
    let gameSlug: string | undefined;
    if (view === "listings" || view === "collections") {
      const game = resolveActiveGame(
        await loadGames(),
        request.nextUrl.searchParams.get("game"),
        request.cookies.get(ACTIVE_GAME_COOKIE)?.value,
      );
      gameSlug = game?.slug;
      if (!gameSlug) {
        return NextResponse.json({ items: [], next_cursor: null, has_more: false });
      }
    }
    return NextResponse.json(await getDiscoveryFeed(view as "collections" | "stores" | "listings", filter, cursor, gameSlug));
  } catch {
    return NextResponse.json({ message: "Discovery is temporarily unavailable." }, { status: 502 });
  }
}
