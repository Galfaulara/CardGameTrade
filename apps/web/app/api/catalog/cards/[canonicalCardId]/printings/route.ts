import { NextRequest, NextResponse } from "next/server";
import { getCatalogCardPrintings } from "../../../../../../features/marketplace/api";

export async function GET(
  _request: NextRequest,
  context: {
    params: Promise<{
      canonicalCardId: string;
    }>;
  },
) {
  const { canonicalCardId } =
    await context.params;

  try {
    return NextResponse.json(
      await getCatalogCardPrintings(
        canonicalCardId,
      ),
    );
  } catch {
    return NextResponse.json(
      {
        message: "Catalog printings are temporarily unavailable.",
      },
      {
        status: 502,
      },
    );
  }
}
