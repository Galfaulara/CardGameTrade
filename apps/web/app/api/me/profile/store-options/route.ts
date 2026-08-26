import { NextRequest, NextResponse } from "next/server";
import {
  AuthenticatedApiError,
  authenticatedApiRequest,
} from "../../../../../features/auth/authenticated-api";

export async function GET(
  request: NextRequest,
) {
  const query = request.nextUrl.searchParams.toString();
  const path = query
    ? `/me/profile/store-options?${query}`
    : "/me/profile/store-options";

  try {
    const response = await authenticatedApiRequest(
      path,
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
        {
          message: "Authentication is required.",
        },
        {
          status: error.status,
        },
      );
    }

    return NextResponse.json(
      {
        message: "Preferred LGS options are temporarily unavailable.",
      },
      {
        status: 502,
      },
    );
  }
}
