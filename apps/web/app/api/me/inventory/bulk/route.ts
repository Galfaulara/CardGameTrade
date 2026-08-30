import { NextRequest, NextResponse } from "next/server";
import { AuthenticatedApiError, authenticatedApiRequest } from "../../../../../features/auth/authenticated-api";

export async function POST(request: NextRequest) {
  try {
    const response = await authenticatedApiRequest("/me/inventory/bulk", {
      method: "POST", body: await request.text(), headers: { "Content-Type": "application/json" },
    });
    return new NextResponse(await response.text(), { status: response.status, headers: { "content-type": response.headers.get("content-type") ?? "application/json" } });
  } catch (error) {
    return NextResponse.json({ message: error instanceof AuthenticatedApiError ? "Authentication is required." : "Bulk add is temporarily unavailable." }, { status: error instanceof AuthenticatedApiError ? error.status : 502 });
  }
}
