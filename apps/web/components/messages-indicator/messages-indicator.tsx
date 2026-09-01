"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./messages-indicator.module.css";

export function MessagesIndicator() {
  const [unread, setUnread] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const response = await fetch("/api/me/social/conversations", {
          cache: "no-store",
        });
        if (active && response.ok)
          setUnread((await response.json()).unreadCount ?? 0);
      } finally {
        if (active) setLoading(false);
      }
    };
    void load();
    const timer = window.setInterval(load, 60_000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, []);
  return (
    <Link
      className={styles.link}
      href="/account/messages"
      aria-label={unread ? `Messages, ${unread} unread` : "Messages"}
    >
      {loading ? "…" : "💬"}
      {unread > 0 ? <span>{unread > 99 ? "99+" : unread}</span> : null}
    </Link>
  );
}
