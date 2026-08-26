import Link from "next/link";
import styles from "./brand.module.css";

export function Brand() {
  return (
    <Link className={styles.brand} href="/" aria-label="DeckDeal home">
      <span className={styles.mark} aria-hidden="true">
        DD
      </span>
      <span>DeckDeal</span>
    </Link>
  );
}
