import { NextRequest, NextResponse } from "next/server";
import {
  AuthenticatedApiError,
  authenticatedApiRequest,
} from "../../../../features/auth/authenticated-api";

export async function GET(request: NextRequest) {
  const username = request.nextUrl.searchParams.get("username") ?? "";

  try {
    const response = await authenticatedApiRequest(
      `/onboarding/username-availability?username=${encodeURIComponent(username)}`,
    );
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
      { message: "Username availability is temporarily unavailable." },
      { status: 502 },
    );
  }
}
