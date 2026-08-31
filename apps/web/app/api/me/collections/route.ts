import { NextRequest, NextResponse } from "next/server";
import { AuthenticatedApiError, authenticatedApiRequest } from "../../../../features/auth/authenticated-api";

async function forward(request: NextRequest, method: "GET" | "POST") {
  try {
    const query = request.nextUrl.searchParams.toString();
    const response = await authenticatedApiRequest(`/me/collections${query ? `?${query}` : ""}`, {
      method,
      ...(method === "POST" ? { body: await request.text(), headers: { "Content-Type": "application/json" } } : {}),
    });
    return new NextResponse(await response.text(), { status: response.status, headers: { "content-type": response.headers.get("content-type") ?? "application/json" } });
  } catch (error) {
    return NextResponse.json({ message: error instanceof AuthenticatedApiError ? "Authentication is required." : "Collections are temporarily unavailable." }, { status: error instanceof AuthenticatedApiError ? error.status : 502 });
  }
}
export const GET = (request: NextRequest) => forward(request, "GET");
export const POST = (request: NextRequest) => forward(request, "POST");
