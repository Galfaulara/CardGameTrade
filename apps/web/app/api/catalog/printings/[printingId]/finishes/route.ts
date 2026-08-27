import { NextRequest, NextResponse } from "next/server";
import { getCatalogPrintingFinishes } from "../../../../../../features/marketplace/api";

export async function GET(
  _request: NextRequest,
  context: {
    params: Promise<{
      printingId: string;
    }>;
  },
) {
  const { printingId } =
    await context.params;

  try {
    return NextResponse.json(
      await getCatalogPrintingFinishes(
        printingId,
      ),
    );
  } catch {
    return NextResponse.json(
      {
        message: "Printing finishes are temporarily unavailable.",
      },
      {
        status: 502,
      },
    );
  }
}
