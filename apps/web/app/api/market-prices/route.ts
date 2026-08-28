import { NextResponse } from "next/server";

const apiBase = process.env.DECKDEAL_API_URL ?? "http://localhost:4000/api";
export async function POST(request: Request) {
  const response = await fetch(`${apiBase}/catalog/prices/latest`, {
    method: "POST", headers: { "Content-Type": "application/json" }, body: await request.text(), cache: "no-store",
  });
  return new NextResponse(await response.text(), { status: response.status, headers: { "content-type": "application/json" } });
}
