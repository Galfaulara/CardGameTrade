import { NextRequest, NextResponse } from "next/server";
import {
  AuthenticatedApiError,
  authenticatedApiRequest,
} from "../../../../../features/auth/authenticated-api";
async function forward(
  request: NextRequest,
  context: { params: Promise<{ wishlistId: string }> },
  method: "GET" | "PATCH",
) {
  try {
    const { wishlistId } = await context.params;
    const query = request.nextUrl.searchParams.toString();
    const response = await authenticatedApiRequest(
      `/me/wishlists/${encodeURIComponent(wishlistId)}${query ? `?${query}` : ""}`,
      {
        method,
        ...(method === "PATCH"
          ? {
              body: await request.text(),
              headers: { "Content-Type": "application/json" },
            }
          : {}),
      },
    );
    return new NextResponse(await response.text(), {
      status: response.status,
      headers: {
        "content-type":
          response.headers.get("content-type") ?? "application/json",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof AuthenticatedApiError
            ? "Authentication is required."
            : "Wishlist is temporarily unavailable.",
      },
      { status: error instanceof AuthenticatedApiError ? error.status : 502 },
    );
  }
}
export const GET = (
  request: NextRequest,
  context: { params: Promise<{ wishlistId: string }> },
) => forward(request, context, "GET");
export const PATCH = (
  request: NextRequest,
  context: { params: Promise<{ wishlistId: string }> },
) => forward(request, context, "PATCH");
