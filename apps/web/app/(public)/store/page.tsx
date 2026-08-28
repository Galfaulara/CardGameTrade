import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getAuthenticatedCurrentUser } from "../../../features/auth/authenticated-api";

export default async function StoreWorkspaceEntry() {
  const configured = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
  if (!configured) redirect("/");
  const { userId } = await auth();
  if (!userId) redirect("/sign-in?redirect_url=%2Fstore");
  const current = await getAuthenticatedCurrentUser();
  if (!current.onboarded || current.account_status !== "active" || current.store_workspaces.length === 0) {
    redirect("/account/profile");
  }
  redirect(`/store/${current.store_workspaces[0]!.store_id}`);
}
