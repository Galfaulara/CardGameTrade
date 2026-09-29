import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NavigationBack } from "../../../../components/navigation-back/navigation-back";
import { PublicUserLink } from "../../../../components/public-user-link/public-user-link";
import { PublicStoreLink } from "../../../../components/public-store-link/public-store-link";
import { ShareButton } from "../../../../components/share-button/share-button";
import {
  getPublicListing,
  type PublicListing,
} from "../../../../features/marketplace/api";
import { ResourceGameSync } from "../../../../features/games/resource-game-sync";
import styles from "./page.module.css";

const pretty = (value: string) => value.replaceAll("_", " ");

const cardHref = (listing: PublicListing) => {
  const canonicalCardId = listing.inventory_item?.printing.canonical_cards.id;
  const printingId = listing.inventory_item?.printing.id;
  if (!canonicalCardId) return "/discover";
  return `/cards/${canonicalCardId}${printingId ? `?printing=${printingId}` : ""}`;
};

const sellerLabel = (listing: PublicListing) => {
  const user = listing.inventory_item?.user_profiles;
  if (user?.username) return `@${user.username}`;
  if (user?.display_name) return user.display_name;
  return listing.inventory_item?.stores?.name ?? "a DeckDeal seller";
};

const intents = (listing: PublicListing) =>
  [
    listing.accepts_trade ? "Trade" : null,
    listing.accepts_cash ? "Cash" : null,
  ].filter(Boolean) as string[];

export default async function ListingPage({
  params,
}: {
  params: Promise<{ listingId: string }>;
}) {
  const { listingId } = await params;
  const result = await getPublicListing(listingId);

  /* The API applies the authoritative public listing rule, so a paused,
     closed, sold, traded or removed listing — and any listing whose backing
     inventory is no longer available — arrives here as not-found. A stale
     shared link must not reveal that the listing exists privately. */
  if (result.status === "not-found") notFound();

  if (result.status === "unavailable")
    return (
      <main className={styles.main}>
        <NavigationBack fallback="/discover" />
        <section className={styles.state}>
          <p className={styles.kicker}>Listing unavailable</p>
          <h1>We couldn&apos;t load this listing.</h1>
          <p>Please try again shortly or return to marketplace discovery.</p>
          <Link className={styles.primaryAction} href="/discover">
            Back to discovery
          </Link>
        </section>
      </main>
    );

  const listing = result.data;
  const item = listing.inventory_item;
  if (!item) notFound();

  const printing = item.printing;
  const card = printing.canonical_cards;
  const image =
    printing.image_large_uri ??
    printing.image_normal_uri ??
    printing.image_small_uri;
  const shareTitle = `${card.name} — ${printing.card_sets.code.toUpperCase()} #${printing.collector_number}`;
  const offered = intents(listing);

  return (
    <main className={styles.main}>
      <ResourceGameSync gameId={listing.game_id} />
      <NavigationBack fallback={cardHref(listing)} label="Back to card" />
      <section className={styles.layout}>
        <div className={styles.art}>
          {image ? (
            <Image
              src={image}
              alt={`${card.name} — ${printing.card_sets.name} printing`}
              fill
              sizes="(max-width: 48rem) 70vw, 300px"
              unoptimized
            />
          ) : (
            <span>Card image unavailable</span>
          )}
        </div>
        <div className={styles.info}>
          <p className={styles.kicker}>Available on DeckDeal</p>
          <h1>{listing.title ?? card.name}</h1>
          <p className={styles.printing}>
            <Link href={cardHref(listing)}>
              {printing.card_sets.name} ·{" "}
              {printing.card_sets.code.toUpperCase()} #
              {printing.collector_number}
            </Link>
          </p>

          <dl className={styles.facts}>
            <div>
              <dt>Card</dt>
              <dd>{card.name}</dd>
            </div>
            <div>
              <dt>Language</dt>
              <dd>{printing.language_code.toUpperCase()}</dd>
            </div>
            <div>
              <dt>Finish</dt>
              <dd>{pretty(item.finish)}</dd>
            </div>
            <div>
              <dt>Condition</dt>
              <dd>{pretty(item.condition)}</dd>
            </div>
            {printing.treatment && (
              <div>
                <dt>Treatment</dt>
                <dd>{pretty(printing.treatment)}</dd>
              </div>
            )}
            {printing.rarity && (
              <div>
                <dt>Rarity</dt>
                <dd>{pretty(printing.rarity)}</dd>
              </div>
            )}
            <div>
              <dt>Availability</dt>
              <dd>Available now</dd>
            </div>
          </dl>

          {(item.is_signed || item.is_altered || item.is_graded) && (
            <ul className={styles.traits}>
              {item.is_signed && <li>Signed</li>}
              {item.is_altered && <li>Altered</li>}
              {item.is_graded && <li>Graded</li>}
            </ul>
          )}

          <p className={styles.seller}>
            Offered by{" "}
            {item.user_profiles ? (
              <PublicUserLink user={item.user_profiles} compact />
            ) : item.stores ? (
              <PublicStoreLink store={item.stores} />
            ) : (
              sellerLabel(listing)
            )}
          </p>

          {offered.length > 0 && (
            <p className={styles.terms}>
              <span>Accepting</span> {offered.join(" · ")}
              {listing.accepts_cash && listing.asking_price
                ? ` · ${listing.asking_price}${listing.currency_code ? ` ${listing.currency_code}` : ""}`
                : ""}
            </p>
          )}

          {listing.description && (
            <p className={styles.description}>{listing.description}</p>
          )}

          {listing.preferred_store && (
            <p className={styles.mediation}>
              <span>Preferred store</span>
              <PublicStoreLink store={listing.preferred_store} />{" "}
              <b aria-label="verified DeckDeal mediation store">✓</b>
            </p>
          )}

          <div className={styles.actions}>
            {listing.accepts_trade && (
              <Link className={styles.primaryAction} href={`/trade/${listing.id}`}>
                Make a trade offer
              </Link>
            )}
            <ShareButton
              path={`/listings/${listing.id}`}
              title={shareTitle}
              text={`${shareTitle} is available on DeckDeal from ${sellerLabel(listing)}.`}
              label="Share listing"
            />
          </div>
          <p className={styles.note}>
            Making an offer requires a DeckDeal account. Completing a trade
            happens through a participating local game store.
          </p>
        </div>
      </section>
    </main>
  );
}
