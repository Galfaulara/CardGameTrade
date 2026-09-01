import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./account-shell.module.css";

const sections = [
  {
    id: "profile",
    label: "Profile",
    href: "/account/profile",
  },
  {
    id: "inventory",
    label: "Inventory",
    href: "/account/inventory",
  },
  {
    id: "listings",
    label: "Listings",
    href: "/account/listings",
  },
  {
    id: "wants",
    label: "Wants",
    href: "/account/wants",
  },
  {
    id: "offers",
    label: "Offers",
    href: "/account/offers?view=sent",
  },
  {
    id: "trades",
    label: "Trades",
    href: "/account/trades",
  },
  { id: "friends", label: "Friends", href: "/account/friends" },
  { id: "messages", label: "Messages", href: "/account/messages" },
] as const;

export type AccountSection =
  (typeof sections)[number]["id"];

export function AccountState({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
}) {
  return (
    <main className={styles.main}>
      <section className={styles.statePanel}>
        <p className={styles.stateEyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.stateActions}>
          <Link className={styles.primaryAction} href={primaryHref}>
            {primaryLabel}
          </Link>
        </div>
      </section>
    </main>
  );
}

export function AccountShell({
  section,
  title,
  intro,
  actions,
  wide = false,
  children,
}: {
  section: AccountSection;
  title: string;
  intro: ReactNode;
  actions?: ReactNode;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <main className={styles.main}>
      <div className={`${styles.shell} ${wide ? styles.wideShell : ""}`}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>My DeckDeal</p>
          <nav className={styles.sectionNav} aria-label="My DeckDeal sections">
            {sections.map((item) => (
              <Link
                key={item.id}
                className={styles.sectionLink}
                href={item.href}
                aria-current={section === item.id ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.headingRow}>
            <div className={styles.headingCopy}>
              <h1>{title}</h1>
              <p className={styles.intro}>{intro}</p>
            </div>
            {actions ? <div className={styles.actions}>{actions}</div> : null}
          </div>
        </header>
        {children}
      </div>
    </main>
  );
}
