import Link from "next/link";
import { notFound } from "next/navigation";
import { CardTile } from "../../../../components/card-tile/card-tile";
import { ShareButton } from "../../../../components/share-button/share-button";
import { ResourceGameSync } from "../../../../features/games/resource-game-sync";
import { getPublicWishlist } from "../../../../features/marketplace/api";
import styles from "./page.module.css";

export default async function WishlistPage({
  params,
  searchParams,
}: {
  params: Promise<{ wishlistId: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const [{ wishlistId }, query] = await Promise.all([params, searchParams]);
  const parsed = Number(query.page ?? 1);
  const page = Number.isSafeInteger(parsed) && parsed > 0 ? parsed : 1;
  const result = await getPublicWishlist(wishlistId, page);
  if (result.status === "not-found") notFound();
  if (result.status !== "ready")
    return (
      <main className={styles.page}>
        <h1>Wishlist unavailable</h1>
        <p>Please try again shortly.</p>
      </main>
    );
  const { wishlist, items, pagination } = result.data;
  return (
    <main className={styles.page}>
      <ResourceGameSync gameId={wishlist.game_id} />
      <header className={styles.header}>
        <p>
          {wishlist.owner.display_name ?? wishlist.owner.username ?? "Player"}
          &apos;s Wishlist
        </p>
        <h1>{wishlist.name}</h1>
        {wishlist.description ? <p>{wishlist.description}</p> : null}
        <ShareButton
          path={`/wishlists/${wishlist.id}`}
          title={wishlist.name}
          text={`${wishlist.name} on DeckDeal`}
          label="Share"
        />
      </header>
      {items.length ? (
        <div className={styles.grid}>
          {items.map((card) => (
            <CardTile key={card.id} card={card} />
          ))}
        </div>
      ) : (
        <p>No active wants to display.</p>
      )}
      <nav className={styles.pagination} aria-label="Wishlist pages">
        {page > 1 ? (
          <Link href={`/wishlists/${wishlist.id}?page=${page - 1}`}>
            Previous
          </Link>
        ) : null}
        {pagination.has_more ? (
          <Link href={`/wishlists/${wishlist.id}?page=${page + 1}`}>Next</Link>
        ) : null}
      </nav>
    </main>
  );
}
