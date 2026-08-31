import { NextRequest, NextResponse } from "next/server";
import {
  AuthenticatedApiError,
  authenticatedApiRequest,
} from "../../../../../../../features/auth/authenticated-api";
export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ wishlistId: string; itemId: string }> },
) {
  try {
    const { wishlistId, itemId } = await context.params;
    const query = request.nextUrl.searchParams.toString();
    const response = await authenticatedApiRequest(
      `/me/wishlists/${encodeURIComponent(wishlistId)}/items/${encodeURIComponent(itemId)}${query ? `?${query}` : ""}`,
      {
        method: "PATCH",
        body: await request.text(),
        headers: { "Content-Type": "application/json" },
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
            : "Want update is temporarily unavailable.",
      },
      { status: error instanceof AuthenticatedApiError ? error.status : 502 },
    );
  }
}
