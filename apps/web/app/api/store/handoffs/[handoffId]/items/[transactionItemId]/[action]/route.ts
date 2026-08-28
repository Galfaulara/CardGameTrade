import { NextResponse } from "next/server";
import {
  AuthenticatedApiError,
  authenticatedApiRequest,
  requireActiveDeckDealUser,
} from "../../../../../../../../features/auth/authenticated-api";

const actions = new Set(["receive", "verify", "release"]);

export async function PATCH(
  _request: Request,
  context: { params: Promise<{ handoffId: string; transactionItemId: string; action: string }> },
) {
  const { handoffId, transactionItemId, action } = await context.params;
  if (!actions.has(action)) {
    return NextResponse.json({ message: "Unsupported handoff action." }, { status: 404 });
  }

  try {
    await requireActiveDeckDealUser();
    const response = await authenticatedApiRequest(
      `/store-handoffs/${encodeURIComponent(handoffId)}/items/${encodeURIComponent(transactionItemId)}/${action}`,
      { method: "PATCH" },
    );
    return new NextResponse(await response.text(), {
      status: response.status,
      headers: { "content-type": response.headers.get("content-type") ?? "application/json" },
    });
  } catch (error) {
    const status = error instanceof AuthenticatedApiError ? error.status : 502;
    return NextResponse.json(
      { message: status === 401 ? "Authentication is required." : status === 403 ? "Active Store staff access is required." : "The Store action is temporarily unavailable." },
      { status },
    );
  }
}
