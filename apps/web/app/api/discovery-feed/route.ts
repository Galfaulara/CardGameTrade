import { NextRequest, NextResponse } from "next/server";
import { getDiscoveryFeed } from "../../../features/marketplace/api";

const views = new Set(["collections", "stores", "listings"]);

export async function GET(request: NextRequest) {
  const view = request.nextUrl.searchParams.get("view") ?? "collections";
  if (!views.has(view)) return NextResponse.json({ message: "Invalid discovery view." }, { status: 400 });
  const defaultFilter = view === "listings" ? "all" : "all";
  const filter = request.nextUrl.searchParams.get("filter") ?? defaultFilter;
  const cursor = request.nextUrl.searchParams.get("cursor") ?? undefined;
  try {
    return NextResponse.json(await getDiscoveryFeed(view as "collections" | "stores" | "listings", filter, cursor));
  } catch {
    return NextResponse.json({ message: "Discovery is temporarily unavailable." }, { status: 502 });
  }
}
