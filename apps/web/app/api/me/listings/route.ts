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

async function forward(
  method: "GET" | "POST",
  body?: string,
) {
  try {
    const user =
      await requireActiveDeckDealUser();

    const response =
      await authenticatedApiRequest(
        `/listings/users/${encodeURIComponent(user.id)}`,
        {
          method,
          ...(body
            ? {
                body,
              }
            : {}),
        },
      );

    const text =
      await response.text();

    return new NextResponse(text, {
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
      method === "GET"
        ? "My Listings are temporarily unavailable."
        : "Trade listing creation is temporarily unavailable.",
      502,
    );
  }
}

export async function GET() {
  return forward("GET");
}

export async function POST(
  request: NextRequest,
) {
  let inventoryItemId: string | null = null;

  try {
    const body = (await request.json()) as {
      inventoryItemId?: unknown;
    };

    inventoryItemId =
      typeof body.inventoryItemId ===
      "string"
        ? body.inventoryItemId
            .trim()
        : null;
  } catch {
    return jsonError(
      "A valid inventory item is required.",
      400,
    );
  }

  if (!inventoryItemId) {
    return jsonError(
      "A valid inventory item is required.",
      400,
    );
  }

  return forward(
    "POST",
    JSON.stringify({
      inventoryItemId,
      acceptsCash: false,
      acceptsTrade: true,
    }),
  );
}
