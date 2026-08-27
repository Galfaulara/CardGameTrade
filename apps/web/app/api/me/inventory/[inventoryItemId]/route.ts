import { NextRequest, NextResponse } from "next/server";
import {
  AuthenticatedApiError,
  authenticatedApiRequest,
} from "../../../../../features/auth/authenticated-api";

async function forward(
  inventoryItemId: string,
  method: "GET" | "PATCH",
  request?: NextRequest,
) {
  try {
    const response = await authenticatedApiRequest(
      `/me/inventory/${encodeURIComponent(inventoryItemId)}`,
      {
        method,
        ...(request
          ? {
              body: await request.text(),
              headers: {
                "Content-Type": request.headers.get("content-type") ?? "application/json",
              },
            }
          : {}),
      },
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
        message: "Inventory item is temporarily unavailable.",
      },
      {
        status: 502,
      },
    );
  }
}

export async function GET(
  _request: NextRequest,
  context: {
    params: Promise<{
      inventoryItemId: string;
    }>;
  },
) {
  const { inventoryItemId } =
    await context.params;

  return forward(
    inventoryItemId,
    "GET",
  );
}

export async function PATCH(
  request: NextRequest,
  context: {
    params: Promise<{
      inventoryItemId: string;
    }>;
  },
) {
  const { inventoryItemId } =
    await context.params;

  return forward(
    inventoryItemId,
    "PATCH",
    request,
  );
}
