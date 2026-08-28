import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { NavigationBack } from "../../../../../../components/navigation-back/navigation-back";
import { getAuthenticatedCurrentUser, getStoreHandoff } from "../../../../../../features/auth/authenticated-api";
import { HandoffManager } from "./handoff-manager";

export default async function HandoffDetail({ params }: { params: Promise<{ storeId: string; handoffId: string }> }) {
  const { storeId, handoffId } = await params;
  const { userId } = await auth();
  if (!userId) redirect(`/sign-in?redirect_url=${encodeURIComponent(`/store/${storeId}/handoffs/${handoffId}`)}`);
  const current = await getAuthenticatedCurrentUser();
  if (!current.onboarded || current.account_status !== "active" || !current.store_workspaces.some((item) => item.store_id === storeId)) redirect("/store");
  const handoff = await getStoreHandoff(handoffId);
  if (handoff.store_id !== storeId) redirect(`/store/${storeId}`);
  return <HandoffManager handoff={handoff} back={<NavigationBack fallback={`/store/${storeId}`} />} />;
}
