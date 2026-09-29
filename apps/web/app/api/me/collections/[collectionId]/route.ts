import { NextRequest, NextResponse } from "next/server";
import {
  AuthenticatedApiError,
  authenticatedApiRequest,
} from "../../../../../features/auth/authenticated-api";
export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ collectionId: string }> },
) {
  try {
    const { collectionId } = await context.params;
    const response = await authenticatedApiRequest(
      `/me/collections/${encodeURIComponent(collectionId)}`,
      {
        method: "PATCH",
        body: await request.text(),
        headers: { "Content-Type": "application/json" },
      },
    );
    return new NextResponse(await response.text(), {
      status: response.status,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Collection visibility could not be updated." },
      { status: error instanceof AuthenticatedApiError ? error.status : 502 },
    );
  }
}
