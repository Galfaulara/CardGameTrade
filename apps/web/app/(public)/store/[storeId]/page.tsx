import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getAuthenticatedCurrentUser, getStoreHandoffs } from "../../../../features/auth/authenticated-api";
import { storeHandoffStatus } from "../../../../features/store/handoff-types";
import { tradeParticipantLabel } from "../../../../features/account/trade-types";
import styles from "./workspace.module.css";

export default async function StoreWorkspace({ params }: { params: Promise<{ storeId: string }> }) {
  const { storeId } = await params;
  const { userId } = await auth();
  if (!userId) redirect(`/sign-in?redirect_url=${encodeURIComponent(`/store/${storeId}`)}`);
  const current = await getAuthenticatedCurrentUser();
  if (!current.onboarded || current.account_status !== "active") redirect("/account/profile");
  const workspace = current.store_workspaces.find((item) => item.store_id === storeId);
  if (!workspace) redirect("/store");
  const handoffs = await getStoreHandoffs(storeId);

  return <div className={styles.page}>
    <header className={styles.hero}>
      <p className={styles.eyebrow}>Store Workspace</p>
      <h1>{workspace.store.name}</h1>
      <p>Trade Handoffs</p>
    </header>
    {handoffs.length ? <ul className={styles.list}>{handoffs.map((handoff) => <li key={handoff.id}>
      <article className={styles.handoff}>
        <div><p className={styles.eyebrow}>Trade {handoff.transaction_id.slice(0, 8)}</p><h2>{tradeParticipantLabel(handoff.transaction.seller)} ↔ {tradeParticipantLabel(handoff.transaction.counterparty)}</h2></div>
        <strong className={styles.status}>{storeHandoffStatus(handoff)}</strong>
        <div className={styles.progress}>
          <span>{handoff.progress.received_items}/{handoff.progress.total_items} received</span>
          <span>{handoff.progress.verified_items}/{handoff.progress.total_items} verified</span>
          <span>{handoff.progress.released_items}/{handoff.progress.total_items} released</span>
        </div>
        <div className={styles.sides}>
          <span>{handoff.items.filter((item) => item.from_user_id === handoff.transaction.seller_user_id).length} card(s) from {tradeParticipantLabel(handoff.transaction.seller)}</span>
          <span>{handoff.items.filter((item) => item.from_user_id === handoff.transaction.counterparty_user_id).length} card(s) from {tradeParticipantLabel(handoff.transaction.counterparty)}</span>
        </div>
        <Link className={styles.primary} href={`/store/${storeId}/handoffs/${handoff.id}`}>Open handoff</Link>
      </article>
    </li>)}</ul> : <section className={styles.empty}><h2>No trade handoffs yet.</h2><p>Accepted trades mediated by this Store will appear here.</p></section>}
  </div>;
}
