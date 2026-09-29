"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./share-button.module.css";

/**
 * Routes that are owner-private. A canonical share URL must never point at one,
 * so the component refuses to render rather than leak a private destination.
 */
const PRIVATE_PREFIXES = ["/account", "/store/", "/onboarding", "/sign-in", "/sign-up"];

export function ShareIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="21" height="21">
      <path
        d="M8.7 13.1l6.6 3.8M15.3 7.1l-6.6 3.8M18 4.5a2.5 2.5 0 11-2.5 2.5A2.5 2.5 0 0118 4.5zM6 9.5A2.5 2.5 0 116 14.5 2.5 2.5 0 016 9.5zM18 17a2.5 2.5 0 11-2.5 2.5A2.5 2.5 0 0118 17z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type ShareButtonProps = {
  /** Canonical, public, app-relative path. Must start with "/". */
  path: string;
  /** Concise share title. */
  title: string;
  /** Human-readable share text. */
  text: string;
  /** Show a visible text label next to the icon. */
  label?: string;
  disabled?: boolean;
};

export function ShareButton({ path, title, text, label, disabled = false }: ShareButtonProps) {
  const [status, setStatus] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  if (!path.startsWith("/")) return null;
  if (PRIVATE_PREFIXES.some((prefix) => path.startsWith(prefix))) return null;

  const announce = (message: string) => {
    setStatus(message);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus(null), 2600);
  };
  const share = async () => {
    if (disabled) return;
    const url = new URL(path, window.location.origin).toString();
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (reason) {
        // A deliberate dismissal is not an error worth reporting.
        if (reason instanceof DOMException && reason.name === "AbortError") return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      announce("Link copied");
    } catch {
      announce("Copy failed");
    }
  };
  return (
    <span className={styles.root}>
      <button
        className={styles.button}
        type="button"
        disabled={disabled}
        aria-label={`Share ${title}`}
        onClick={() => void share()}
      >
        <ShareIcon />
        {label ? <span className={styles.label}>{label}</span> : null}
      </button>
      <span className={styles.status} role="status" aria-live="polite">
        {status}
      </span>
    </span>
  );
}
