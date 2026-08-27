import { NextRequest, NextResponse } from "next/server";
import { searchCatalog } from "../../../../features/marketplace/api";

const normalizePage = (
  value: string | null,
) => {
  if (!value || !/^\d+$/.test(value)) {
    return 1;
  }

  const page = Number(value);
  return Number.isSafeInteger(page) && page > 0
    ? page
    : 1;
};

export async function GET(
  request: NextRequest,
) {
  const query =
    request.nextUrl.searchParams.get("q") ?? "";

  const page = normalizePage(
    request.nextUrl.searchParams.get(
      "page",
    ),
  );

  try {
    return NextResponse.json(
      await searchCatalog(
        query,
        page,
      ),
    );
  } catch {
    return NextResponse.json(
      {
        message: "Catalog search is temporarily unavailable.",
      },
      {
        status: 502,
      },
    );
  }
}
