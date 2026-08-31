import { NextRequest, NextResponse } from "next/server";
import { ACTIVE_GAME_COOKIE, resolveActiveGame } from "../../../../features/games/active-game";
import { loadGames } from "../../../../features/games/games.server";
import { searchCatalog } from "../../../../features/marketplace/api";

const normalizePage = (
  value: string | null,
) => {
  if (!value || !/^\d+$/.test(value)) {
    return 1;
  }

  const page = Number(value);
  return Number.isSafeInteger(page) && page > 0
    ? page
    : 1;
};

export async function GET(
  request: NextRequest,
) {
  const query =
    request.nextUrl.searchParams.get("q") ?? "";

  const page = normalizePage(
    request.nextUrl.searchParams.get(
      "page",
    ),
  );
  const pageSizeParam = request.nextUrl.searchParams.get("pageSize");
  const requestedPageSize = pageSizeParam ? normalizePage(pageSizeParam) : 60;
  const pageSize = Math.min(requestedPageSize, 60);

  try {
    const games = await loadGames();
    const game = resolveActiveGame(
      games,
      request.nextUrl.searchParams.get("game"),
      request.cookies.get(ACTIVE_GAME_COOKIE)?.value,
    );
    if (!game) {
      return NextResponse.json({
        query: query.trim(),
        items: [],
        page,
        page_size: pageSize,
        total_results: 0,
        total_pages: 0,
        cards: [],
      });
    }
    return NextResponse.json(
      await searchCatalog({
        query,
        page,
        gameId: game.id,
        pageSize,
      }),
    );
  } catch {
    return NextResponse.json(
      {
        message: "Catalog search is temporarily unavailable.",
      },
      {
        status: 502,
      },
    );
  }
}
