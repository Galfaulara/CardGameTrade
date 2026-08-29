import Link from "next/link";
import { notFound } from "next/navigation";

import { CardTile } from "../../../../components/card-tile/card-tile";
import { PublicUserLink } from "../../../../components/public-user-link/public-user-link";
import { PublicStoreLink } from "../../../../components/public-store-link/public-store-link";
import { NavigationBack } from "../../../../components/navigation-back/navigation-back";
import { getPublicCollectionPage } from "../../../../features/marketplace/api";
import { ResourceGameSync } from "../../../../features/games/resource-game-sync";
import styles from "./page.module.css";

const normalizePage = (value: string | string[] | undefined) => {
  const candidate = Array.isArray(value) ? value[0] : value;
  if (!candidate || !/^\d+$/.test(candidate)) return 1;
  const page = Number(candidate);
  return Number.isSafeInteger(page) && page > 0 ? page : 1;
};

const ownerLabel = (owner: { id: string; display_name: string | null; username: string | null }) =>
  (owner.display_name ?? owner.username)
    ? <><PublicUserLink user={owner} />&apos;s collection</>
    : "Public collection";

export default async function CollectionPage({
  params,
  searchParams,
}: {
  params: Promise<{ collectionId: string }>;
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const [{ collectionId }, query] = await Promise.all([params, searchParams]);
  const requestedPage = normalizePage(query.page);
  const result = await getPublicCollectionPage(collectionId, requestedPage);

  if (result.status === "not-found") notFound();

  if (result.status === "unavailable") {
    return (
      <main className={styles.main}>
        <section className={styles.unavailable}>
          <p>Collection unavailable</p>
          <h1>We couldn&apos;t load this collection.</h1>
          <span>Please try again shortly or return to marketplace discovery.</span>
          <Link href="/discover">Back to discovery</Link>
        </section>
      </main>
    );
  }

  const { collection, cards, pagination } = result.data;
  const totalPages = Math.max(1, Math.ceil(pagination.total_count / pagination.page_size));
  const firstItem = pagination.total_count && cards.length
    ? (pagination.page - 1) * pagination.page_size + 1
    : 0;
  const lastItem = firstItem ? firstItem + cards.length - 1 : 0;
  const pageHref = (page: number) => `/collections/${collection.id}?page=${page}`;

  return (
    <main className={styles.main}>
      <ResourceGameSync gameId={collection.game_id} />
      <NavigationBack fallback={`/users/${collection.owner.id}?view=collections`} label="Back to collections" />
      <header className={styles.collectionHeader}>
        <p className={styles.eyebrow}>{ownerLabel(collection.owner)}</p>
        <h1>{collection.name}</h1>
        <p className={styles.count}>{collection.card_quantity.toLocaleString()} cards</p>
        {collection.preferred_store && <p className={styles.preferredStore}><span>Preferred store</span><PublicStoreLink store={collection.preferred_store} /> <span aria-label="verified DeckDeal mediation store">✓</span></p>}
        {collection.description && <p className={styles.description}>{collection.description}</p>}
      </header>

      <section className={styles.inventory} aria-labelledby="collection-inventory-heading">
        <div className={styles.inventoryHeading}>
          <div>
            <p>Public inventory</p>
            <h2 id="collection-inventory-heading">Cards in this collection</h2>
          </div>
          <span>Page {pagination.page} of {totalPages}</span>
        </div>

        {cards.length ? (
          <ul className={styles.grid}>
            {cards.map((card) => (
              <li key={card.id}><CardTile card={card} layout="grid" /></li>
            ))}
          </ul>
        ) : (
          <div className={styles.empty}>No available cards were found on this page.</div>
        )}

        <nav className={styles.pagination} aria-label="Collection inventory pagination">
          <p>{firstItem ? `Showing ${firstItem.toLocaleString()}–${lastItem.toLocaleString()} of ${pagination.total_count.toLocaleString()}` : `Showing 0 of ${pagination.total_count.toLocaleString()}`}</p>
          <div>
            {pagination.page > 1 ? <Link href={pageHref(pagination.page - 1)} rel="prev">← Previous</Link> : <span aria-disabled="true">← Previous</span>}
            {pagination.has_more ? <Link href={pageHref(pagination.page + 1)} rel="next">Next →</Link> : <span aria-disabled="true">Next →</span>}
          </div>
        </nav>
      </section>
    </main>
  );
}
