import Link from "next/link";
import type { ReactNode } from "react";
import type { CardView } from "../../features/marketplace/api";
import { CardTile } from "../card-tile/card-tile";
import { PublicStoreLink } from "../public-store-link/public-store-link";
import styles from "./card-rail.module.css";

export function CardRail({ title, eyebrow, cards, emptyMessage, meta, preferredStore, action, tone = "marketplace" }: { title: ReactNode; eyebrow: ReactNode; cards: CardView[]; emptyMessage: string; meta?: string; preferredStore?: { id: string; name: string }; action?: { href: string; label: string }; tone?: "catalog" | "marketplace" | "fresh" }) {
  return (
    <section className={`${styles.section} ${styles[tone]}`}>
      <div className={styles.heading}><div><p>{eyebrow}</p><h2>{title}</h2>{meta && <span className={styles.meta}>{meta}</span>}{preferredStore && <span className={styles.preferredStore}>Preferred store · <PublicStoreLink store={preferredStore} /> <span aria-label="verified DeckDeal mediation store">✓</span></span>}</div>{action ? <Link className={styles.action} href={action.href}>{action.label}</Link> : <span>{cards.length ? `${cards.length} to explore` : "More soon"}</span>}</div>
      {cards.length ? <div className={styles.rail} role="region" aria-label="Card preview" tabIndex={0}>{cards.map(card => <CardTile card={card} key={card.id} />)}</div> : <div className={styles.empty}>{emptyMessage}</div>}
    </section>
  );
}
