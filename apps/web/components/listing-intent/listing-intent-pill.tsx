import Link from "next/link";
import styles from "./listing-intent-pill.module.css";

export type ListingIntent = {
  id: string;
  acceptsCash: boolean;
  acceptsTrade: boolean;
};

export function ListingIntentPill({ listing }: { listing: ListingIntent }) {
  if (!listing.acceptsCash && !listing.acceptsTrade) return null;
  const mixed = listing.acceptsCash && listing.acceptsTrade;
  const label = mixed ? "TRADE + SALE" : listing.acceptsTrade ? "TRADE" : "FOR SALE";
  const tone = mixed ? styles.mixed : listing.acceptsTrade ? styles.trade : styles.sale;
  // A publicly offered card resolves to its exact public Listing identity, not
  // to the canonical card and not to the authenticated offer builder. Two
  // sellers offering the same printing therefore remain distinguishable.
  return (
    <Link
      className={`${styles.pill} ${tone} ${styles.interactive}`}
      href={`/listings/${listing.id}`}
      data-listing-id={listing.id}
    >
      {label}
    </Link>
  );
}
