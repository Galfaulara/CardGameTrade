"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
type Person = {
  id: string;
  username: string | null;
  display_name: string | null;
};
type Relation = { id: string; status: string; direction: string; user: Person };
type Data = {
  friends: Relation[];
  incoming: Relation[];
  outgoing: Relation[];
  blocked: Array<{ user: Person }>;
};
const tabs = ["friends", "incoming", "outgoing", "blocked"] as const;
export function FriendsManager() {
  const router = useRouter();
  const [data, setData] = useState<Data | null>(null),
    [tab, setTab] = useState<(typeof tabs)[number]>("friends"),
    [busy, setBusy] = useState(""),
    [error, setError] = useState("");
  const load = async () => {
    const response = await fetch("/api/me/social/friends", {
      cache: "no-store",
    });
    if (response.ok) setData(await response.json());
    else setError("Friends could not be loaded.");
  };
  useEffect(() => {
    void load();
  }, []);
  const act = async (path: string, method = "PATCH") => {
    setBusy(path);
    setError("");
    try {
      const response = await fetch(`/api/me/social/${path}`, { method });
      if (!response.ok) throw new Error((await response.json()).message);
      await load();
    } catch (value) {
      setError(value instanceof Error ? value.message : "Action failed.");
    } finally {
      setBusy("");
    }
  };
  const message = async (userId: string) => {
    setBusy(userId);
    try {
      const response = await fetch("/api/me/social/conversations", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ kind: "general", userId }),
      });
      if (!response.ok) throw new Error((await response.json()).message);
      router.push(
        `/account/messages?conversation=${(await response.json()).id}`,
      );
    } catch (value) {
      setError(
        value instanceof Error
          ? value.message
          : "Conversation could not be opened.",
      );
    } finally {
      setBusy("");
    }
  };
  const rows =
    tab === "blocked"
      ? (data?.blocked ?? []).map((row) => ({
          id: row.user.id,
          user: row.user,
          status: "blocked",
          direction: "",
        }))
      : (data?.[tab] ?? []);
  return (
    <section className={styles.panel}>
      <nav className={styles.tabs} aria-label="Friend lists">
        {tabs.map((value) => (
          <button
            key={value}
            aria-pressed={tab === value}
            onClick={() => setTab(value)}
          >
            {value === "incoming"
              ? "Requests"
              : value === "outgoing"
                ? "Sent"
                : value.charAt(0).toUpperCase() + value.slice(1)}
          </button>
        ))}
      </nav>
      {error && <p className={styles.error}>{error}</p>}
      {!data ? (
        <p>Loading friends…</p>
      ) : rows.length ? (
        <div className={styles.list}>
          {rows.map((row) => (
            <article key={row.id}>
              <div>
                <strong>
                  {row.user.display_name ?? row.user.username ?? "Collector"}
                </strong>
                {row.user.username && <span>@{row.user.username}</span>}
                <Link href={`/users/${row.user.id}`}>View profile</Link>
              </div>
              <div className={styles.actions}>
                {tab === "friends" && (
                  <>
                    <button
                      disabled={!!busy}
                      onClick={() => void message(row.user.id)}
                    >
                      {busy === row.user.id ? "Opening…" : "Message"}
                    </button>
                    <button
                      disabled={!!busy}
                      onClick={() => void act(`friends/${row.id}/remove`)}
                    >
                      {busy.includes(row.id) ? "Removing…" : "Unfriend"}
                    </button>
                    <button
                      disabled={!!busy}
                      onClick={() => void act(`blocks/${row.user.id}`, "POST")}
                    >
                      Block
                    </button>
                  </>
                )}
                {tab === "incoming" && (
                  <>
                    <button
                      disabled={!!busy}
                      onClick={() => void act(`friends/${row.id}/accept`)}
                    >
                      {busy.includes(row.id) ? "Accepting…" : "Accept"}
                    </button>
                    <button
                      disabled={!!busy}
                      onClick={() => void act(`friends/${row.id}/decline`)}
                    >
                      Decline
                    </button>
                  </>
                )}
                {tab === "outgoing" && (
                  <button
                    disabled={!!busy}
                    onClick={() => void act(`friends/${row.id}/cancel`)}
                  >
                    {busy.includes(row.id) ? "Canceling…" : "Cancel"}
                  </button>
                )}
                {tab === "blocked" && (
                  <button
                    disabled={!!busy}
                    onClick={() => void act(`blocks/${row.user.id}`, "DELETE")}
                  >
                    {busy.includes(row.user.id) ? "Unblocking…" : "Unblock"}
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className={styles.empty}>
          No {tab === "incoming" ? "friend requests" : tab} yet.
        </p>
      )}
    </section>
  );
}
