"use client";

import Link from "next/link";
import { useClerk } from "@clerk/nextjs";
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
  return (
    <details className={styles.root}>
      <summary aria-label="Account menu">
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" />
        </svg>
      </summary>
      <div className={styles.menu}>
        {links.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
        <button
          type="button"
          onClick={() => void signOut({ redirectUrl: "/" })}
        >
          Sign out
        </button>
      </div>
    </details>
  );
}
