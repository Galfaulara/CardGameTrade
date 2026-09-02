"use client";

import Link from "next/link";
import { useClerk } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { createPortal } from "react-dom";
import styles from "./account-menu.module.css";

const links = [
  ["DeckDeal profile", "/account/profile"],
  ["Inventory", "/account/inventory"],
  ["Listings", "/account/listings"],
  ["Wishlists", "/account/wants"],
  ["Offers", "/account/offers?view=sent"],
  ["Trades", "/account/trades"],
  ["Friends", "/account/friends"],
  ["Messages", "/account/messages"],
] as const;
export function AccountMenu() {
  const { signOut } = useClerk();
  const pathname = usePathname();
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState<CSSProperties>();

  const close = useCallback(() => setOpen(false), []);
  const placeMenu = useCallback(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const viewport = window.visualViewport;
    const viewportLeft = viewport?.offsetLeft ?? 0;
    const viewportTop = viewport?.offsetTop ?? 0;
    const viewportWidth = viewport?.width ?? window.innerWidth;
    const viewportHeight = viewport?.height ?? window.innerHeight;
    const margin = 8;
    const gap = 8;
    const width = Math.min(256, viewportWidth - margin * 2);
    const rect = trigger.getBoundingClientRect();
    const left = Math.min(
      Math.max(rect.right - width, viewportLeft + margin),
      viewportLeft + viewportWidth - width - margin,
    );
    const top = Math.max(rect.bottom + gap, viewportTop + margin);
    const maxHeight = Math.max(
      0,
      viewportTop + viewportHeight - top - margin,
    );
    setMenuStyle({ left, top, width, maxHeight });
  }, []);

  useLayoutEffect(() => {
    if (open) placeMenu();
  }, [open, placeMenu]);

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        !rootRef.current?.contains(target) &&
        !menuRef.current?.contains(target)
      ) {
        close();
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        triggerRef.current?.focus();
      }
    };
    const otherPopover = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== "account") close();
    };
    const viewport = window.visualViewport;
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("deckdeal:header-popover-open", otherPopover);
    window.addEventListener("resize", placeMenu);
    window.addEventListener("scroll", placeMenu, true);
    viewport?.addEventListener("resize", placeMenu);
    viewport?.addEventListener("scroll", placeMenu);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("deckdeal:header-popover-open", otherPopover);
      window.removeEventListener("resize", placeMenu);
      window.removeEventListener("scroll", placeMenu, true);
      viewport?.removeEventListener("resize", placeMenu);
      viewport?.removeEventListener("scroll", placeMenu);
    };
  }, [close, open, placeMenu]);

  useEffect(() => {
    close();
  }, [close, pathname]);

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        ref={triggerRef}
        className={styles.trigger}
        type="button"
        aria-label="Account menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={() =>
          setOpen((current) => {
            if (!current)
              document.dispatchEvent(
                new CustomEvent("deckdeal:header-popover-open", {
                  detail: "account",
                }),
              );
            return !current;
          })
        }
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" />
        </svg>
      </button>
      {open && menuStyle
        ? createPortal(
            <div
              ref={menuRef}
              id={menuId}
              className={styles.menu}
              style={menuStyle}
              aria-label="Account options"
            >
              {links.map(([label, href]) => (
                <Link key={href} href={href} onClick={close}>
                  {label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  close();
                  void signOut({ redirectUrl: "/" });
                }}
              >
                Sign out
              </button>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
