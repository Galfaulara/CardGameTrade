import { NextResponse } from "next/server";
import {
  AuthenticatedApiError,
  authenticatedApiRequest,
} from "../../../../../features/auth/authenticated-api";

export async function GET() {
  try {
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
      `/inventory/users/${encodeURIComponent(me.user.id)}/collections`,
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
