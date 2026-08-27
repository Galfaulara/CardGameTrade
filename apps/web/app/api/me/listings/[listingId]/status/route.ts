import { NextRequest, NextResponse } from "next/server";
import {
  AuthenticatedApiError,
  authenticatedApiRequest,
  requireActiveDeckDealUser,
} from "../../../../../../features/auth/authenticated-api";

const jsonError = (
  message: string,
  status: number,
) =>
  NextResponse.json(
    { message },
    { status },
  );

export async function PATCH(
  _request: NextRequest,
  context: {
    params: Promise<{
      listingId: string;
    }>;
  },
) {
  const { listingId } =
    await context.params;

  try {
    const user =
      await requireActiveDeckDealUser();

    const response =
      await authenticatedApiRequest(
        `/listings/users/${encodeURIComponent(user.id)}/${encodeURIComponent(listingId)}/status`,
        {
          method: "PATCH",
          body: JSON.stringify({
            status: "removed",
          }),
        },
      );

    const body =
      await response.text();

    return new NextResponse(body, {
      status: response.status,
      headers: {
        "content-type":
          response.headers.get(
            "content-type",
          ) ?? "application/json",
      },
    });
  } catch (error) {
    if (
      error instanceof
      AuthenticatedApiError
    ) {
      return jsonError(
        error.status === 401
          ? "Authentication is required."
          : "An active DeckDeal account is required.",
        error.status,
      );
    }

    return jsonError(
      "Listing cancellation is temporarily unavailable.",
      502,
    );
  }
}
