"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./message-context-action.module.css";
export function MessageContextAction({
  contextType,
  contextId,
  label = "Message",
}: {
  contextType:
    | "listing"
    | "inventory_interest"
    | "listing_offer"
    | "wishlist_offer"
    | "transaction";
  contextId: string;
  label?: string;
}) {
  const router = useRouter(),
    [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  const open = async () => {
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/me/social/conversations", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ kind: "contextual", contextType, contextId }),
      });
      if (!response.ok) throw new Error((await response.json()).message);
      const conversation = await response.json();
      router.push(`/account/messages?conversation=${conversation.id}`);
    } catch (value) {
      setError(
        value instanceof Error ? value.message : "Messaging is unavailable.",
      );
    } finally {
      setBusy(false);
    }
  };
  return (
    <span className={styles.root}>
      <button type="button" disabled={busy} onClick={() => void open()}>
        {busy ? "Opening…" : label}
      </button>
      {error && <small>{error}</small>}
    </span>
  );
}
