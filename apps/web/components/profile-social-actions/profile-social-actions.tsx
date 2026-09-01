"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./profile-social-actions.module.css";
type State = {
  state: string;
  relationship?: { id: string; direction: string };
};
export function ProfileSocialActions({ userId }: { userId: string }) {
  const router = useRouter(),
    [state, setState] = useState<State | null>(null),
    [busy, setBusy] = useState(""),
    [error, setError] = useState("");
  const load = useCallback(async () => {
    const response = await fetch(`/api/me/social/relationship/${userId}`, {
      cache: "no-store",
    });
    if (response.ok) setState(await response.json());
  }, [userId]);
  useEffect(() => {
    void load();
  }, [load]);
  const act = async (path: string, method = "POST") => {
    setBusy(path);
    setError("");
    try {
      const response = await fetch(`/api/me/social/${path}`, { method });
      if (!response.ok) throw new Error((await response.json()).message);
      await load();
    } catch (value) {
      setError(
        value instanceof Error ? value.message : "Social action failed.",
      );
    } finally {
      setBusy("");
    }
  };
  const message = async () => {
    setBusy("message");
    try {
      const response = await fetch("/api/me/social/conversations", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ kind: "general", userId }),
      });
      if (!response.ok) throw new Error((await response.json()).message);
      const conversation = await response.json();
      router.push(`/account/messages?conversation=${conversation.id}`);
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
  if (!state || state.state === "self" || state.state === "unavailable")
    return null;
  return (
    <div className={styles.root}>
      {state.state === "none" && (
        <>
          <button
            disabled={!!busy}
            onClick={() => void act(`friends/${userId}`)}
          >
            {busy ? "Sending…" : "Add friend"}
          </button>
          <button
            className={styles.secondary}
            disabled={!!busy}
            onClick={() => void act(`blocks/${userId}`)}
          >
            Block
          </button>
        </>
      )}
      {state.state === "pending" && state.relationship && (
        <>
          {state.relationship.direction === "outgoing" ? (
            <>
              <span>Request sent</span>
              <button
                className={styles.secondary}
                disabled={!!busy}
                onClick={() =>
                  void act(`friends/${state.relationship!.id}/cancel`, "PATCH")
                }
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                disabled={!!busy}
                onClick={() =>
                  void act(`friends/${state.relationship!.id}/accept`, "PATCH")
                }
              >
                Accept
              </button>
              <button
                className={styles.secondary}
                disabled={!!busy}
                onClick={() =>
                  void act(`friends/${state.relationship!.id}/decline`, "PATCH")
                }
              >
                Decline
              </button>
            </>
          )}
        </>
      )}
      {state.state === "accepted" && (
        <>
          <span>Friends ✓</span>
          <button disabled={!!busy} onClick={() => void message()}>
            {busy ? "Opening…" : "Message"}
          </button>
        </>
      )}
      {state.state === "blocked_by_me" && (
        <button
          disabled={!!busy}
          onClick={() => void act(`blocks/${userId}`, "DELETE")}
        >
          {busy ? "Unblocking…" : "Unblock"}
        </button>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
