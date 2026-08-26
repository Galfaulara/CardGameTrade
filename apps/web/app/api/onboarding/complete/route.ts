import { NextRequest, NextResponse } from "next/server";
import {
  AuthenticatedApiError,
  authenticatedApiRequest,
} from "../../../../features/auth/authenticated-api";

export async function POST(request: NextRequest) {
  try {
    const response = await authenticatedApiRequest("/onboarding/complete", {
      method: "POST",
      body: await request.text(),
      headers: {
        "Content-Type": request.headers.get("content-type") ?? "application/json",
      },
    });
    const body = await response.text();
    return new NextResponse(body, {
      status: response.status,
      headers: {
        "content-type": response.headers.get("content-type") ?? "application/json",
      },
    });
  } catch (error) {
    if (error instanceof AuthenticatedApiError) {
      return NextResponse.json(
        { message: "Authentication is required." },
        { status: error.status },
      );
    }

    return NextResponse.json(
      { message: "DeckDeal onboarding is temporarily unavailable." },
      { status: 502 },
    );
  }
}
