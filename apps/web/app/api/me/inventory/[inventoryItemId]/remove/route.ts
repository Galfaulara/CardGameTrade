import { NextRequest, NextResponse } from "next/server";
import {
  AuthenticatedApiError,
  authenticatedApiRequest,
} from "../../../../../../features/auth/authenticated-api";

export async function POST(
  _request: NextRequest,
  context: {
    params: Promise<{
      inventoryItemId: string;
    }>;
  },
) {
  const { inventoryItemId } =
    await context.params;

  try {
    const response = await authenticatedApiRequest(
      `/me/inventory/${encodeURIComponent(inventoryItemId)}/remove`,
      {
        method: "POST",
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
        message: "Inventory removal is temporarily unavailable.",
      },
      {
        status: 502,
      },
    );
  }
}
