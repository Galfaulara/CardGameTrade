"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState, type ReactNode } from "react";
import {
  tradeInventoryImage,
  tradeInventoryName,
  tradeInventoryPhysical,
  tradeInventoryPrinting,
  tradeParticipantLabel,
} from "../../../../../../features/account/trade-types";
import { storeHandoffStatus, type StoreHandoff } from "../../../../../../features/store/handoff-types";
import styles from "./page.module.css";

const custodyLabel = (status: string | undefined) => status ? status.replaceAll("_", " ") : "Unavailable";

export function HandoffManager({ handoff, back }: { handoff: StoreHandoff; back: ReactNode }) {
  const router = useRouter();
  const actionLock = useRef(false);
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [confirmRelease, setConfirmRelease] = useState(false);

  const act = async (itemId: string, action: "receive" | "verify" | "release") => {
    if (actionLock.current) return false;
    actionLock.current = true;
    setBusy(`${action}:${itemId}`);
    setError(null);
    const response = await fetch(`/api/store/handoffs/${encodeURIComponent(handoff.id)}/items/${encodeURIComponent(itemId)}/${action}`, { method: "PATCH" });
    if (!response.ok) {
      let message = "This Store action can no longer be completed.";
      try {
        message = ((await response.json()) as { message?: string }).message ?? message;
      } catch {
        message = "This Store action can no longer be completed.";
      }
      setError(message);
      actionLock.current = false;
      setBusy(null);
      return false;
    }
    actionLock.current = false;
    setBusy(null);
    router.refresh();
    return true;
  };

  const releaseTrade = async () => {
    if (actionLock.current) return;
    const items = handoff.items.filter((item) => item.custody?.custody_status === "verified_by_store");
    for (const item of items) {
      if (!(await act(item.id, "release"))) return;
    }
    setConfirmRelease(false);
    router.refresh();
  };

  const bringing = (userId: string | null) => userId === handoff.transaction.seller_user_id
    ? tradeParticipantLabel(handoff.transaction.seller)
    : userId === handoff.transaction.counterparty_user_id
      ? tradeParticipantLabel(handoff.transaction.counterparty)
      : "Store participant";

  return <div className={styles.page}>
    {back}
    <header className={styles.hero}>
      <p className={styles.eyebrow}>Trade handoff</p>
      <h1>{tradeParticipantLabel(handoff.transaction.seller)} ↔ {tradeParticipantLabel(handoff.transaction.counterparty)}</h1>
      <dl><div><dt>Mediator</dt><dd>{handoff.store?.name ?? "DeckDeal Store"}</dd></div><div><dt>Status</dt><dd>{storeHandoffStatus(handoff)}</dd></div><div><dt>Trade</dt><dd>{handoff.transaction_id}</dd></div></dl>
    </header>

    {error ? <p className={styles.error} role="alert">{error}</p> : null}

    <ul className={styles.items}>{handoff.items.map((item) => {
      const status = item.custody?.custody_status;
      const receive = status === "awaiting_delivery_to_store";
      const verify = status === "in_store";
      return <li key={item.id}><article className={styles.card}>
        <div className={styles.art}>{tradeInventoryImage(item.source_inventory) ? <Image src={tradeInventoryImage(item.source_inventory)!} alt={`${tradeInventoryName(item.source_inventory)} card`} fill sizes="160px" unoptimized /> : <span>Card image unavailable</span>}</div>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Brought by {bringing(item.from_user_id)}</p>
          <h2>{tradeInventoryName(item.source_inventory)}</h2>
          <p>{tradeInventoryPrinting(item.source_inventory)}</p>
          <p>{tradeInventoryPhysical(item.source_inventory)}</p>
          <p><strong>Custody:</strong> {custodyLabel(status)}</p>
          {receive ? <button disabled={busy !== null} onClick={() => void act(item.id, "receive")}>{busy === `receive:${item.id}` ? "Receiving…" : "Receive"}</button> : null}
          {verify ? <button disabled={busy !== null} onClick={() => void act(item.id, "verify")}>{busy === `verify:${item.id}` ? "Verifying…" : "Verify"}</button> : null}
        </div>
      </article></li>;
    })}</ul>

    {handoff.status === "validated" ? <section className={styles.release}>
      <p className={styles.eyebrow}>Ready to release</p>
      <h2>Release this trade</h2>
      <p>This completes the handoff and creates each recipient’s new current Inventory record. This action cannot be undone here.</p>
      {confirmRelease ? <div className={styles.actions}><button className={styles.secondary} disabled={busy !== null} onClick={() => setConfirmRelease(false)}>Cancel</button><button className={styles.danger} disabled={busy !== null} onClick={() => void releaseTrade()}>{busy ? "Releasing…" : "Confirm release"}</button></div> : <button className={styles.danger} onClick={() => setConfirmRelease(true)}>Release trade</button>}
    </section> : null}

    {handoff.status === "completed" ? <section className={styles.complete}><p className={styles.eyebrow}>Completed</p><h2>Trade released to both recipients.</h2><p>Ownership transfer is complete and participant Trades and Inventory now reflect the release.</p></section> : null}
  </div>;
}
