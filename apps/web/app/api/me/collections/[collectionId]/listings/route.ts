import { NextRequest, NextResponse } from "next/server";
import { AuthenticatedApiError, authenticatedApiRequest } from "../../../../../../features/auth/authenticated-api";

async function forward(request: NextRequest, context: { params: Promise<{ collectionId: string }> }, method: "GET" | "POST") {
  try {
    const { collectionId } = await context.params;
    const query = request.nextUrl.searchParams.toString();
    const suffix = method === "GET" ? `/preflight${query ? `?${query}` : ""}` : "";
    const response = await authenticatedApiRequest(`/me/collections/${encodeURIComponent(collectionId)}/listings${suffix}`, {
      method,
      ...(method === "POST" ? { body: await request.text(), headers: { "Content-Type": "application/json" } } : {}),
    });
    return new NextResponse(await response.text(), { status: response.status, headers: { "content-type": response.headers.get("content-type") ?? "application/json" } });
  } catch (error) {
    return NextResponse.json({ message: error instanceof AuthenticatedApiError ? "Authentication is required." : "Collection listings are temporarily unavailable." }, { status: error instanceof AuthenticatedApiError ? error.status : 502 });
  }
}
export const GET = (request: NextRequest, context: { params: Promise<{ collectionId: string }> }) => forward(request, context, "GET");
export const POST = (request: NextRequest, context: { params: Promise<{ collectionId: string }> }) => forward(request, context, "POST");
