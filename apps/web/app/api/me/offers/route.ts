import { NextRequest, NextResponse } from "next/server";
import {
  AuthenticatedApiError,
  authenticatedApiRequest,
  requireActiveDeckDealUser,
} from "../../../../features/auth/authenticated-api";

const jsonError = (
  message: string,
  status: number,
) =>
  NextResponse.json(
    { message },
    { status },
  );

export async function POST(
  request: NextRequest,
) {
  let listingId: string | null = null;
  let items: Array<{
    inventoryItemId: string;
    quantity: number;
  }> = [];

  try {
    const body = (await request.json()) as {
      listingId?: unknown;
      items?: unknown;
    };

    listingId =
      typeof body.listingId === "string"
        ? body.listingId.trim()
        : null;

    items = Array.isArray(body.items)
      ? body.items.flatMap((item) => {
          if (
            !item ||
            typeof item !== "object"
          ) {
            return [];
          }

          const inventoryItemId =
            typeof item.inventoryItemId ===
            "string"
              ? item.inventoryItemId.trim()
              : "";
          const quantity =
            typeof item.quantity ===
              "number" &&
            Number.isFinite(item.quantity)
              ? item.quantity
              : NaN;

          return inventoryItemId &&
            Number.isInteger(quantity) &&
            quantity > 0
            ? [
                {
                  inventoryItemId,
                  quantity,
                },
              ]
            : [];
        })
      : [];
  } catch {
    return jsonError(
      "A valid trade offer is required.",
      400,
    );
  }

  if (!listingId) {
    return jsonError(
      "A valid listing is required.",
      400,
    );
  }

  if (!items.length) {
    return jsonError(
      "Choose at least one inventory item to offer.",
      400,
    );
  }

  try {
    const user =
      await requireActiveDeckDealUser();

    const response =
      await authenticatedApiRequest(
        `/offers/listings/${encodeURIComponent(listingId)}/users/${encodeURIComponent(user.id)}`,
        {
          method: "POST",
          body: JSON.stringify({
            cashAmount: 0,
            currencyCode: "USD",
            items,
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
      "Offer submission is temporarily unavailable.",
      502,
    );
  }
}
