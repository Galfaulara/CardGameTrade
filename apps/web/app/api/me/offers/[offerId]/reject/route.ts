import { NextResponse } from "next/server";
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
  _request: Request,
  context: {
    params: Promise<{
      offerId: string;
    }>;
  },
) {
  const { offerId } =
    await context.params;

  try {
    const user =
      await requireActiveDeckDealUser();

    const response =
      await authenticatedApiRequest(
        `/offers/${encodeURIComponent(offerId)}/users/${encodeURIComponent(user.id)}/reject`,
        {
          method: "PATCH",
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
      "Offer rejection is temporarily unavailable.",
      502,
    );
  }
}
