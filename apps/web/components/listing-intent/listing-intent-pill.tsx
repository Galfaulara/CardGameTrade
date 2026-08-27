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
  return <span className={`${styles.pill} ${tone}`} data-listing-id={listing.id}>{label}</span>;
}
