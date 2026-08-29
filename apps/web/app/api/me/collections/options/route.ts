import { NextRequest, NextResponse } from "next/server";
import {
  AuthenticatedApiError,
  authenticatedApiRequest,
} from "../../../../../features/auth/authenticated-api";
import { collectionOptionsApiPath } from "../../../../../features/games/inventory-game";

export async function GET(request: NextRequest) {
  try {
    const game = request.nextUrl.searchParams.get("game")?.trim().toLowerCase();
    if (!game) {
      return NextResponse.json({ message: "A game is required for collection options." }, { status: 400 });
    }
    const meResponse = await authenticatedApiRequest("/auth/me");
    if (!meResponse.ok) {
      return NextResponse.json({ message: "Collection options are unavailable." }, { status: meResponse.status });
    }
    const me = await meResponse.json() as {
      onboarded: boolean;
      account_status?: string;
      user?: { id: string };
    };
    if (!me.onboarded || me.account_status !== "active" || !me.user?.id) {
      return NextResponse.json({ message: "An active DeckDeal account is required." }, { status: 403 });
    }
    const response = await authenticatedApiRequest(
      collectionOptionsApiPath(me.user.id, game),
    );
    const body = await response.text();
    return new NextResponse(body, {
      status: response.status,
      headers: { "content-type": response.headers.get("content-type") ?? "application/json" },
    });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof AuthenticatedApiError ? "Authentication is required." : "Collection options are temporarily unavailable." },
      { status: error instanceof AuthenticatedApiError ? error.status : 502 },
    );
  }
}
