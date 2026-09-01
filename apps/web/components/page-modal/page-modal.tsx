"use client";
import { type ReactNode, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./page-modal.module.css";
export function PageModal({
  title,
  eyebrow,
  onClose,
  children,
  className = "",
}: {
  title: ReactNode;
  eyebrow?: ReactNode;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}) {
  const titleId = useId(),
    [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!mounted) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", keydown);
    return () => {
      document.removeEventListener("keydown", keydown);
      document.body.style.overflow = previous;
    };
  }, [mounted, onClose]);
  if (!mounted) return null;
  return createPortal(
    <div
      className={styles.backdrop}
      data-deckdeal-modal-overlay="true"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className={`${styles.dialog} ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        data-deckdeal-modal-dialog="true"
      >
        <header className={styles.header}>
          <div>
            {eyebrow ? <p>{eyebrow}</p> : null}
            <h2 id={titleId}>{title}</h2>
          </div>
          <button
            className={styles.close}
            type="button"
            aria-label="Close"
            onClick={onClose}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
              <path
                d="M6 6l12 12M18 6L6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </header>
        {children}
      </section>
    </div>,
    document.body,
  );
}
