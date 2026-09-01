import { NextResponse } from "next/server";
import { authenticatedApiRequest } from "../../../../../features/auth/authenticated-api";

async function forward(request: Request, params: Promise<{ path: string[] }>) {
  try {
    const { path } = await params;
    const body = request.method === "GET" || request.method === "DELETE" ? undefined : await request.text();
    const response = await authenticatedApiRequest(`/me/social/${path.map(encodeURIComponent).join("/")}`, { method: request.method, body: body || undefined });
    return new NextResponse(await response.text(), { status: response.status, headers: { "content-type": "application/json" } });
  } catch {
    return NextResponse.json({ message: "Authentication is required." }, { status: 401 });
  }
}
export const GET = (request: Request, context: { params: Promise<{ path: string[] }> }) => forward(request, context.params);
export const POST = GET;
export const PATCH = GET;
export const DELETE = GET;
