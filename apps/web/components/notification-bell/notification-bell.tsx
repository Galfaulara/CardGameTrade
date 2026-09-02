"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./notification-bell.module.css";
import { BellIcon } from "../header-icons/header-icons";

type Notification = {
  id: string;
  type: string;
  readAt: string | null;
  inventoryItemId: string | null;
  canonicalCardId: string | null;
  interestId: string | null;
  friendshipId: string | null;
  cardName: string;
  interestType: string | null;
  actor: {
    id: string;
    username: string | null;
    displayName: string | null;
  } | null;
};
export function NotificationBell() {
  const pathname = usePathname();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const [data, setData] = useState<{
    unreadCount: number;
    items: Notification[];
  }>({ unreadCount: 0, items: [] });
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  async function load() {
    setLoading(true);
    try {
      const response = await fetch("/api/me/notifications", {
        cache: "no-store",
      });
      if (response.ok) setData(await response.json());
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    void load();
  }, []);
  async function markAll() {
    setBusy(true);
    try {
      const response = await fetch("/api/me/notifications/read-all", {
        method: "PATCH",
      });
      if (response.ok) setData(await response.json());
    } finally {
      setBusy(false);
    }
  }
  async function markOne(id: string) {
    setData((current) => {
      const item = current.items.find((value) => value.id === id);
      if (!item || item.readAt) return current;
      return {
        unreadCount: Math.max(0, current.unreadCount - 1),
        items: current.items.map((value) =>
          value.id === id ? { ...value, readAt: new Date().toISOString() } : value,
        ),
      };
    });
    const response = await fetch(`/api/me/notifications/${id}/read`, {
      method: "PATCH",
    });
    if (response.ok) setData(await response.json());
  }
  const destination = (item: Notification) => {
    if (
      item.type === "inventory_interest_created" &&
      item.inventoryItemId &&
      item.canonicalCardId
    ) {
      return `/cards/${item.canonicalCardId}?activity=${item.inventoryItemId}`;
    }
    if (item.type === "inventory_interest_created") {
      return "/account/inventory?activityUnavailable=1";
    }
    if (item.type === "friend_request_received") {
      return "/account/friends?view=incoming";
    }
    if (item.type === "friend_request_accepted" && item.actor?.id) {
      return `/users/${item.actor.id}`;
    }
    return "/account/friends";
  };
  useEffect(() => {
    if (!open) return;
    const pointerdown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        !rootRef.current?.contains(target) &&
        !panelRef.current?.contains(target)
      ) close();
    };
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        triggerRef.current?.focus();
      }
    };
    const otherPopover = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== "notifications") close();
    };
    document.addEventListener("pointerdown", pointerdown);
    document.addEventListener("keydown", keydown);
    document.addEventListener("deckdeal:header-popover-open", otherPopover);
    return () => {
      document.removeEventListener("pointerdown", pointerdown);
      document.removeEventListener("keydown", keydown);
      document.removeEventListener("deckdeal:header-popover-open", otherPopover);
    };
  }, [close, open]);
  useEffect(() => close(), [close, pathname]);
  const toggle = () =>
    setOpen((current) => {
      if (!current)
        document.dispatchEvent(
          new CustomEvent("deckdeal:header-popover-open", {
            detail: "notifications",
          }),
        );
      return !current;
    });
  return (
    <div className={styles.root} ref={rootRef}>
      <button
        ref={triggerRef}
        className={styles.bell}
        type="button"
        aria-label={
          data.unreadCount
            ? `Notifications, ${data.unreadCount} unread`
            : "Notifications"
        }
        aria-expanded={open}
        aria-busy={loading}
        onClick={toggle}
      >
        <BellIcon />
        {loading ? <span className={styles.loader} aria-hidden="true" /> : null}
        {data.unreadCount > 0 ? (
          <span className={styles.badge}>
            {data.unreadCount > 99 ? "99+" : data.unreadCount}
          </span>
        ) : null}
      </button>
      {open ? (
        <section ref={panelRef} className={styles.panel} aria-label="Recent notifications">
          <header>
            <strong>Notifications</strong>
            <button
              disabled={busy || !data.unreadCount}
              onClick={() => void markAll()}
            >
              {busy ? "Marking…" : "Mark all read"}
            </button>
          </header>
          {data.items.length ? (
            <ul>
              {data.items.slice(0, 8).map((item) => (
                <li key={item.id} className={item.readAt ? styles.read : ""}>
                  <Link
                    href={destination(item)}
                    onClick={() => {
                      close();
                      if (!item.readAt) void markOne(item.id);
                    }}
                  >
                    <strong>
                      @
                      {item.actor?.username ??
                        item.actor?.displayName ??
                        "Collector"}
                    </strong>{" "}
                    {item.type === "friend_request_received" ? (
                      "sent you a friend request."
                    ) : item.type === "friend_request_accepted" ? (
                      "accepted your friend request."
                    ) : (
                      <>
                        {item.interestType === "buy"
                          ? "is interested in buying"
                          : item.interestType === "trade"
                            ? "is interested in trading for"
                            : item.interestType === "watch"
                              ? "is watching"
                              : "is interested in"}{" "}
                        your {item.cardName}.
                      </>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.empty}>No notifications yet.</p>
          )}
        </section>
      ) : null}
    </div>
  );
}
