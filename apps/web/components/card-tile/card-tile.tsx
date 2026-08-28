import Image from "next/image";
import Link from "next/link";
import type { CardView } from "../../features/marketplace/api";
import { PublicUserLink } from "../public-user-link/public-user-link";
import { PublicStoreLink } from "../public-store-link/public-store-link";
import { AddToCollectionLauncher } from "../add-to-collection/add-to-collection-launcher";
import { ListingIntentPill } from "../listing-intent/listing-intent-pill";
import styles from "./card-tile.module.css";

const label = (value: string) => value.replaceAll("_", " ");
const formatPrice = (amount: string, currency: string) => {
  try { return new Intl.NumberFormat(undefined, { style: "currency", currency }).format(Number(amount)); }
  catch { return `${currency} ${amount}`; }
};

export function CardTile({ card, layout = "rail", canonicalAdd = false }: { card: CardView; layout?: "rail" | "grid"; canonicalAdd?: boolean }) {
  const specialFinish = card.finish && card.finish !== "nonfoil";

  // Scryfall rejects the generic User-Agent used by Next's image optimizer.
  // Its size-specific catalog assets are therefore requested by the browser.

  const href = card.canonicalCardId ? `/cards/${card.canonicalCardId}${card.printingId ? `?printing=${card.printingId}` : ""}` : undefined;
  const artwork = <div className={styles.art}>{card.imageUrl ? <Image src={card.imageUrl} alt={`${card.name} card artwork`} fill sizes="(max-width: 640px) 58vw, (max-width: 832px) 188px, 216px" unoptimized /> : <span>Card image unavailable</span>}</div>;
  return (
    <article className={`${styles.tile} ${layout === "grid" ? styles.gridTile : ""}`}>
      <div className={styles.imageArea}>
        {href ? <Link className={styles.artLink} href={href} aria-label={`View ${card.name}`}>{artwork}</Link> : artwork}
        {card.canonicalCardId ? <AddToCollectionLauncher className={styles.addButton} compact canonicalCardId={card.canonicalCardId} cardName={card.name} printingId={canonicalAdd ? undefined : card.printingId} /> : null}
      </div>
      <div className={styles.details}>
        <h3>{href ? <Link href={href}>{card.name}</Link> : card.name}</h3>
        <p className={styles.printing}>{card.setName} · {card.setCode.toUpperCase()} #{card.collectorNumber}</p>
        {(card.rarity || specialFinish || card.condition || (card.language && card.language !== "en")) && <div className={styles.tags}>{card.rarity && <span>{label(card.rarity)}</span>}{card.condition && <span>{label(card.condition)}</span>}{specialFinish && <span className={styles.special}>{label(card.finish!)}</span>}{card.language && card.language !== "en" && <span>{card.language.toUpperCase()}</span>}</div>}
        {card.quantity && card.quantity > 1 && <p className={styles.quantity}>Quantity {card.quantity}</p>}
        {card.listing && <div className={styles.deal}><ListingIntentPill listing={{id:card.listing.id,acceptsCash:card.listing.acceptsCash,acceptsTrade:card.listing.acceptsTrade}}/>{card.listing.acceptsCash && card.listing.askingPrice && card.listing.currencyCode && <strong>{formatPrice(card.listing.askingPrice, card.listing.currencyCode)}</strong>}</div>}
        {card.source && <p className={styles.source}>From {card.source.kind === "user" ? <PublicUserLink user={card.source} /> : <PublicStoreLink store={{id:card.source.id,name:card.source.name}} />}</p>}
      </div>
    </article>
  );
}
