"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShareButton } from "./share-button";
import { PageModal } from "../page-modal/page-modal";
import styles from "./owner-share-controls.module.css";

export function OwnerShareControls({
  path,
  title,
  visibility: initialVisibility,
  updateUrl,
  eligible = true,
  onVisibilityChange,
}: {
  path: string;
  title: string;
  visibility: string;
  updateUrl: string;
  eligible?: boolean;
  onVisibilityChange?: () => void;
}) {
  const router = useRouter();
  const [visibility, setVisibility] = useState(initialVisibility);
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const shareable =
    eligible && (visibility === "public" || visibility === "unlisted");
  const makeShareable = async () => {
    setBusy(true);
    setError(null);
    try {
      const response = await fetch(updateUrl, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ visibility: "unlisted" }),
      });
      const result = await response.json();
      if (!response.ok || result.visibility !== "unlisted")
        throw new Error("Visibility could not be updated. Please try again.");
      setVisibility("unlisted");
      setConfirming(false);
      onVisibilityChange?.();
      router.refresh();
    } catch {
      setError("Visibility could not be updated. Please try again.");
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className={styles.group}>
      <span className={styles.visibility}>{visibility}</span>
      <ShareButton
        path={path}
        title={title}
        text={`${title} on DeckDeal`}
        label="Share"
        disabled={!shareable || busy}
      />
      {eligible && visibility === "private" ? (
        <button
          className={styles.action}
          type="button"
          onClick={() => {
            setError(null);
            setConfirming(true);
          }}
        >
          Make shareable?
        </button>
      ) : null}
      {confirming ? (
        <PageModal
          title="Make shareable?"
          onClose={() => {
            if (!busy) setConfirming(false);
          }}
        >
          <div className={styles.confirmation}>
            <p>This will allow anyone with the link to view this.</p>
            <p>It will be Unlisted and will not appear in public discovery.</p>
            {error ? <p role="alert">{error}</p> : null}
            <div className={styles.group}>
              <button
                className={styles.action}
                type="button"
                disabled={busy}
                onClick={() => setConfirming(false)}
              >
                Cancel
              </button>
              <button
                className={styles.action}
                type="button"
                disabled={busy}
                onClick={() => void makeShareable()}
              >
                {busy ? "Saving?" : "Make shareable"}
              </button>
            </div>
          </div>
        </PageModal>
      ) : null}
    </div>
  );
}
