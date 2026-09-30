import Link from "next/link";
import { notFound } from "next/navigation";
import { CardTile } from "../../../../components/card-tile/card-tile";
import { ShareButton } from "../../../../components/share-button/share-button";
import {
  getPublicTradeList,
  type CardView,
} from "../../../../features/marketplace/api";
import styles from "./page.module.css";

export async function PublicTradeList({
  userId,
  name,
  page,
}: {
  userId: string;
  name: string;
  page: number;
}) {
  const result = await getPublicTradeList(userId, page);
  if (result.status === "not-found") notFound();
  if (result.status !== "ready")
    return (
      <main className={styles.main}>
        <h1>Trade list unavailable</h1>
        <p>Please try again shortly.</p>
      </main>
    );
  const { items, pagination } = result.data;
  return (
    <main className={styles.main}>
      <Link href={`/users/${userId}`}>Back to profile</Link>
      <header className={styles.tradeListHeader}>
        <h1>{name}&apos;s trade list</h1>
        <p>Currently available Listings</p>
        <ShareButton
          path={`/users/${userId}?view=listings`}
          title={`${name}'s trade list`}
          text={`${name}'s trade cards on DeckDeal`}
          label="Share trade list"
          showLabelOnMobile
        />
      </header>
      {items.length ? (
        <div className={styles.grid}>
          {items.map((listing) => {
            const item = listing.inventory_item;
            if (!item) return null;
            const printing = item.printing;
            const card: CardView = {
              id: listing.id,
              gameId: listing.game_id,
              name: printing.canonical_cards.name,
              canonicalCardId: printing.canonical_cards.id,
              printingId: printing.id,
              imageUrl: printing.image_normal_uri ?? printing.image_small_uri,
              setName: printing.card_sets.name,
              setCode: printing.card_sets.code,
              collectorNumber: printing.collector_number,
              finish: item.finish,
              condition: item.condition,
              language: item.language_code,
              listing: {
                id: listing.id,
                acceptsCash: listing.accepts_cash,
                acceptsTrade: listing.accepts_trade,
                askingPrice: listing.asking_price,
                currencyCode: listing.currency_code,
              },
            };
            return (
              <CardTile
                key={listing.id}
                card={card}
                layout="grid"
                detailHref={`/listings/${listing.id}`}
              />
            );
          })}
        </div>
      ) : (
        <p>No public Listings are currently available.</p>
      )}
      <nav className={styles.pagination} aria-label="Trade list pages">
        {page > 1 ? (
          <Link href={`/users/${userId}?view=listings&page=${page - 1}`}>
            Previous
          </Link>
        ) : null}
        {pagination.has_more ? (
          <Link href={`/users/${userId}?view=listings&page=${page + 1}`}>
            Next
          </Link>
        ) : null}
      </nav>
    </main>
  );
}
