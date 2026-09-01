"use client";
/* eslint-disable @next/next/no-img-element */
import {
  createContext,
  FormEvent,
  type ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { PageModal } from "../page-modal/page-modal";
import styles from "./interest-action.module.css";
type Selection = {
  inventoryItemId: string;
  cardName: string;
  imageUrl: string | null;
  onSent: () => void;
};
const InterestDialogContext = createContext<
  ((selection: Selection) => void) | null
>(null);
export function InterestDialogProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<Selection | null>(null),
    [busy, setBusy] = useState(false),
    [error, setError] = useState<string | null>(null);
  const close = useCallback(() => {
    if (!busy) {
      setSelected(null);
      setError(null);
    }
  }, [busy]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selected || busy) return;
    setBusy(true);
    setError(null);
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch(
        `/api/me/interests/inventory/${selected.inventoryItemId}`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            interestType: form.get("interestType"),
            message: String(form.get("message") || "").trim() || null,
          }),
        },
      );
      const body = await response.json();
      if (!response.ok)
        throw new Error(body.message || "Interest could not be sent.");
      selected.onSent();
      setSelected(null);
    } catch (value) {
      setError(
        value instanceof Error ? value.message : "Interest could not be sent.",
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <InterestDialogContext.Provider
      value={(selection) => {
        setError(null);
        setSelected(selection);
      }}
    >
      {children}
      {selected ? (
        <PageModal
          eyebrow="Interest in this card"
          title={selected.cardName}
          onClose={close}
        >
          {selected.imageUrl ? (
            <img
              className={styles.preview}
              src={selected.imageUrl}
              alt={`${selected.cardName} card`}
            />
          ) : null}
          <form className={styles.form} onSubmit={submit}>
            <fieldset>
              <legend>What are you interested in?</legend>
              {[
                ["buy", "Buying"],
                ["trade", "Trading"],
                ["buy_or_trade", "Buy or trade"],
                ["watch", "Watching"],
              ].map(([value, label]) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="interestType"
                    value={value}
                    defaultChecked={value === "buy_or_trade"}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </fieldset>
            <label className={styles.message}>
              <span>Message (optional)</span>
              <textarea name="message" maxLength={1000} />
            </label>
            {error ? (
              <p role="alert" className={styles.error}>
                {error}
              </p>
            ) : null}
            <div className={styles.actions}>
              <button type="button" onClick={close} disabled={busy}>
                Cancel
              </button>
              <button disabled={busy} aria-busy={busy}>
                {busy ? "Sending…" : "Send interest"}
              </button>
            </div>
          </form>
        </PageModal>
      ) : null}
    </InterestDialogContext.Provider>
  );
}
export function useInterestDialog() {
  const open = useContext(InterestDialogContext);
  if (!open)
    throw new Error(
      "InterestAction must be used inside InterestDialogProvider.",
    );
  return open;
}
