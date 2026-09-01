"use client";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
type Identity = {
  id: string;
  username: string | null;
  display_name: string | null;
};
type Row = {
  id: string;
  kind: string;
  counterpart: Identity | null;
  lastMessage: { body: string; created_at: string } | null;
  unreadCount: number;
  context: Record<string, string | null> | null;
};
type Inbox = { unreadCount: number; items: Row[] };
type Conversation = Row & {
  canSend: boolean;
  messages: Array<{
    id: string;
    sender_user_id: string;
    body: string;
    created_at: string;
  }>;
  participants: Array<{ user_id: string }>;
};
const contextLabel = (context: Record<string, string | null> | null) =>
  context?.listing_id
    ? "Listing"
    : context?.inventory_item_interest_id
      ? "Interest"
      : context?.listing_offer_id
        ? "Listing Offer"
        : context?.wishlist_offer_id
          ? "Wishlist Offer"
          : context?.transaction_id
            ? "Trade"
            : null;
const contextHref = (context: Record<string, string | null> | null) =>
  context?.listing_id
    ? `/trade/${context.listing_id}`
    : context?.transaction_id
      ? `/account/trades/${context.transaction_id}`
      : context?.listing_offer_id || context?.wishlist_offer_id
        ? "/account/offers"
        : context?.inventory_item_interest_id
          ? "/account/inventory"
          : null;
export function MessagesManager() {
  const query = useSearchParams();
  const [inbox, setInbox] = useState<Inbox | null>(null),
    [selected, setSelected] = useState(() => query.get("conversation") ?? ""),
    [conversation, setConversation] = useState<Conversation | null>(null),
    [body, setBody] = useState(""),
    [busy, setBusy] = useState(false),
    [error, setError] = useState("");
  const loadInbox = useCallback(async () => {
    const response = await fetch("/api/me/social/conversations", {
      cache: "no-store",
    });
    if (response.ok) {
      const value = await response.json();
      setInbox(value);
      setSelected((current) => current || value.items[0]?.id || "");
    }
  }, []);
  const loadConversation = useCallback(async (id: string) => {
    if (!id) return;
    const response = await fetch(`/api/me/social/conversations/${id}`, {
      cache: "no-store",
    });
    if (response.ok) {
      setConversation(await response.json());
      await fetch(`/api/me/social/conversations/${id}/read`, {
        method: "PATCH",
      });
    }
  }, []);
  useEffect(() => {
    void loadInbox();
    const timer = setInterval(() => void loadInbox(), 30000);
    return () => clearInterval(timer);
  }, [loadInbox]);
  useEffect(() => {
    void loadConversation(selected);
    if (!selected) return;
    const timer = setInterval(() => void loadConversation(selected), 15000);
    return () => clearInterval(timer);
  }, [selected, loadConversation]);
  const send = async (event: FormEvent) => {
    event.preventDefault();
    if (!body.trim() || !selected) return;
    setBusy(true);
    setError("");
    try {
      const response = await fetch(
        `/api/me/social/conversations/${selected}/messages`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ body }),
        },
      );
      if (!response.ok) throw new Error((await response.json()).message);
      setBody("");
      await Promise.all([loadConversation(selected), loadInbox()]);
    } catch (value) {
      setError(
        value instanceof Error ? value.message : "Message could not be sent.",
      );
    } finally {
      setBusy(false);
    }
  };
  return (
    <section className={styles.messaging}>
      <aside
        className={`${styles.inbox} ${selected ? styles.mobileHidden : ""}`}
      >
        <h2>Conversations</h2>
        {!inbox ? (
          <p>Loading conversations…</p>
        ) : inbox.items.length ? (
          inbox.items.map((row) => (
            <button
              key={row.id}
              className={selected === row.id ? styles.selected : ""}
              onClick={() => setSelected(row.id)}
            >
              <strong>
                {row.counterpart?.display_name ??
                  row.counterpart?.username ??
                  "Collector"}
              </strong>
              <span>
                {row.lastMessage?.body ??
                  (row.kind === "general"
                    ? "Friend conversation"
                    : "Marketplace conversation")}
              </span>
              {contextLabel(row.context) && (
                <em>{contextLabel(row.context)}</em>
              )}
              {row.unreadCount > 0 && <b>{row.unreadCount} unread</b>}
            </button>
          ))
        ) : (
          <p>No conversations yet.</p>
        )}
      </aside>
      <div
        className={`${styles.thread} ${!selected ? styles.mobileHidden : ""}`}
      >
        {selected && (
          <button className={styles.back} onClick={() => setSelected("")}>
            ← Conversations
          </button>
        )}
        {!selected ? (
          <p>Select a conversation.</p>
        ) : !conversation ? (
          <p>Loading messages…</p>
        ) : (
          <>
            <header>
              <h2>
                {conversation.counterpart?.display_name ??
                  conversation.counterpart?.username ??
                  "Collector"}
              </h2>
              <p>
                {conversation.kind === "general"
                  ? "Friend conversation"
                  : `Regarding ${contextLabel(conversation.context) ?? "marketplace activity"}`}
              </p>
              {contextHref(conversation.context) ? (
                <Link href={contextHref(conversation.context)!}>
                  View context
                </Link>
              ) : null}
            </header>
            <div className={styles.messages}>
              {conversation.messages.length ? (
                conversation.messages.map((message) => (
                  <article
                    key={message.id}
                    className={
                      message.sender_user_id === conversation.counterpart?.id
                        ? styles.theirs
                        : styles.mine
                    }
                  >
                    <p>{message.body}</p>
                    <time>{new Date(message.created_at).toLocaleString()}</time>
                  </article>
                ))
              ) : (
                <p>No messages yet.</p>
              )}
            </div>
            {conversation.canSend ? (
              <form onSubmit={send}>
                <label htmlFor="message-body">Message</label>
                <textarea
                  id="message-body"
                  maxLength={4000}
                  value={body}
                  onChange={(event) => setBody(event.target.value)}
                />
                <button disabled={busy || !body.trim()}>
                  {busy ? "Sending…" : "Send"}
                </button>
                {error && <p className={styles.error}>{error}</p>}
              </form>
            ) : (
              <p className={styles.unavailable}>
                Messaging is unavailable for this conversation.
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
