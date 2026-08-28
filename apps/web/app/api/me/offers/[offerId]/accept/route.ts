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

export async function POST(
  request: Request,
  context: {
    params: Promise<{
      offerId: string;
    }>;
  },
) {
  let storeId: string | null = null;

  try {
    const body = (await request.json()) as {
      storeId?: unknown;
    };

    storeId =
      typeof body.storeId ===
      "string"
        ? body.storeId.trim()
        : null;
  } catch {
    return jsonError(
      "A valid mediation store is required.",
      400,
    );
  }

  if (!storeId) {
    return jsonError(
      "A valid mediation store is required.",
      400,
    );
  }

  const { offerId } =
    await context.params;

  try {
    const user =
      await requireActiveDeckDealUser();

    const response =
      await authenticatedApiRequest(
        `/offers/${encodeURIComponent(offerId)}/users/${encodeURIComponent(user.id)}/accept`,
        {
          method: "POST",
          body: JSON.stringify({
            storeId,
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
      "Offer acceptance is temporarily unavailable.",
      502,
    );
  }
}
