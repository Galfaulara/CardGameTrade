"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./mobile-bottom-nav.module.css";

const items = [
  ["Home", "/", "M3 11.5 12 4l9 7.5M5.5 10v10h13V10"],
  [
    "Discover",
    "/discover",
    "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm3.5 5.5-2 5-5 2 2-5 5-2Z",
  ],
  [
    "Local Stores",
    "/stores",
    "M4 10h16M6 10v10h12V10M5 4h14l2 6H3l2-6Zm4 16v-5h6v5",
  ],
  ["Inventory", "/account/inventory", "M4 6h16v14H4V6Zm3-3h10v3H7V3Zm2 8h6"],
  ["More", "/account/profile", "M5 12h.01M12 12h.01M19 12h.01"],
] as const;

export function MobileBottomNav({ signedIn }: { signedIn: boolean }) {
  const pathname = usePathname();
  return (
    <nav className={styles.nav} aria-label="Mobile navigation">
      {items.map(([label, destination, path]) => {
        const href =
          label === "Inventory" && !signedIn ? "/sign-in" : destination;
        const active =
          destination === "/"
            ? pathname === "/"
            : pathname.startsWith(destination);
        return (
          <Link
            key={label}
            href={href}
            aria-current={active ? "page" : undefined}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d={path} />
            </svg>
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
