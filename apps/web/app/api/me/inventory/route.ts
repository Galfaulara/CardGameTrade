import { NextRequest, NextResponse } from "next/server";
import {
  AuthenticatedApiError,
  authenticatedApiRequest,
} from "../../../../features/auth/authenticated-api";

async function forward(
  method: "GET" | "POST",
  request?: NextRequest,
) {
  const query = request?.nextUrl.searchParams.toString() ?? "";
  const path = query
    ? `/me/inventory?${query}`
    : "/me/inventory";

  try {
    const response = await authenticatedApiRequest(path, {
      method,
      ...(method === "POST" && request
        ? {
            body: await request.text(),
            headers: {
              "Content-Type": request.headers.get("content-type") ?? "application/json",
            },
          }
        : {}),
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
        message: "My Inventory is temporarily unavailable.",
      },
      {
        status: 502,
      },
    );
  }
}

export function GET(
  request: NextRequest,
) {
  return forward(
    "GET",
    request,
  );
}

export function POST(
  request: NextRequest,
) {
  return forward(
    "POST",
    request,
  );
}
