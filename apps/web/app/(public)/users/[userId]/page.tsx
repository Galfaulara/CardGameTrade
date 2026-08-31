/* eslint-disable @typescript-eslint/no-explicit-any -- Public profile DTO variants are narrowed by API status at runtime. */
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CardRail } from "../../../../components/card-rail/card-rail";
import { CardTile } from "../../../../components/card-tile/card-tile";
import { publicUserLabel } from "../../../../components/public-user-link/public-user-link";
import { PublicStoreLink } from "../../../../components/public-store-link/public-store-link";
import { NavigationBack } from "../../../../components/navigation-back/navigation-back";
import {
  getPublicUser,
  getPublicUserCollections,
  getPublicUserListings,
  getPublicUserWishlists,
} from "../../../../features/marketplace/api";
import styles from "./page.module.css";

type View = "overview" | "collections" | "available" | "wants";
const views: Array<{ id: View; label: string }> = [
  { id: "overview", label: "Overview" },
  { id: "collections", label: "Collections" },
  { id: "available", label: "Available" },
  { id: "wants", label: "Wants" },
];
const pageNumber = (value: string | string[] | undefined) => {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw && /^\d+$/.test(raw) && Number(raw) > 0 ? Number(raw) : 1;
};
const selectedView = (value: string | string[] | undefined): View => {
  const raw = Array.isArray(value) ? value[0] : value;
  return views.some((item) => item.id === raw) ? (raw as View) : "overview";
};
const collectorInitials = (displayName: string | null, username: string | null) => {
  const source = displayName?.trim() || username?.trim() || "DeckDeal collector";
  return source.split(/\s+/).slice(0, 2).map((part) => part[0]?.toUpperCase()).join("");
};
function Pagination({
  userId,
  view,
  page,
  hasMore,
}: {
  userId: string;
  view: View;
  page: number;
  hasMore: boolean;
}) {
  if (page === 1 && !hasMore) return null;
  const href = (target: number) =>
    `/users/${userId}?view=${view}&page=${target}`;
  return (
    <nav className={styles.pagination} aria-label={`${view} pagination`}>
      <span>Page {page}</span>
      <div>
        {page > 1 ? (
          <Link href={href(page - 1)} rel="prev">
            ← Previous
          </Link>
        ) : (
          <span aria-disabled="true">← Previous</span>
        )}
        {hasMore ? (
          <Link href={href(page + 1)} rel="next">
            Next →
          </Link>
        ) : (
          <span aria-disabled="true">Next →</span>
        )}
      </div>
    </nav>
  );
}

export default async function UserPage({
  params,
  searchParams,
}: {
  params: Promise<{ userId: string }>;
  searchParams: Promise<{ view?: string | string[]; page?: string | string[] }>;
}) {
  const [{ userId }, query] = await Promise.all([params, searchParams]),
    view = selectedView(query.view),
    page = pageNumber(query.page),
    profile = await getPublicUser(userId);
  if (profile.status === "not-found") notFound();
  if (profile.status !== "ready")
    return (
      <main className={styles.main}>
        <section className={styles.message}>
          <p>Collector</p>
          <h1>Profile temporarily unavailable</h1>
          <span>Please try again shortly.</span>
        </section>
      </main>
    );
  const { user, summary } = profile.data,
    name = publicUserLabel(user) ?? "DeckDeal collector",
    headingName = user.display_name ?? user.username ?? "DeckDeal collector",
    initials = collectorInitials(user.display_name, user.username);
  const resources =
    view === "overview"
      ? await Promise.all([
          getPublicUserCollections(userId, 1, 3, 4),
          getPublicUserListings(userId, 1, 8),
          getPublicUserWishlists(userId, 1, 2, 4),
        ])
      : view === "collections"
        ? [await getPublicUserCollections(userId, page, 6, 4)]
        : view === "available"
          ? [await getPublicUserListings(userId, page, 24)]
          : [await getPublicUserWishlists(userId, page, 6, 6)];
  if (resources.some((resource) => resource.status === "not-found")) notFound();
  const failed = resources.some((resource) => resource.status !== "ready");
  const collections =
      view === "overview"
        ? resources[0]
        : view === "collections"
          ? resources[0]
          : null,
    listings =
      view === "overview"
        ? resources[1]
        : view === "available"
          ? resources[0]
          : null,
    wishlists =
      view === "overview"
        ? resources[2]
        : view === "wants"
          ? resources[0]
          : null;
  const collectionData: any =
      collections?.status === "ready" ? collections.data : null,
    listingData: any = listings?.status === "ready" ? listings.data : null,
    wishlistData: any = wishlists?.status === "ready" ? wishlists.data : null;
  return (
    <main className={styles.main}>
      <NavigationBack fallback="/discover" />
      <header className={styles.profileHeader}>
        <div className={styles.avatar} aria-label={`${headingName} avatar fallback`}>
          <span aria-hidden="true">{initials}</span>
        </div>
        <div className={styles.identityBlock}>
          <p className={styles.eyebrow}>Collector</p>
          <div className={styles.identity}>
            <h1>{headingName}</h1>
            {user.username && <span>@{user.username}</span>}
          </div>
          {user.preferred_store && (
            <p className={styles.store}>
              <span>Preferred store</span>
              <PublicStoreLink store={user.preferred_store} />{" "}
              <b aria-label="verified DeckDeal mediation store">✓</b>
            </p>
          )}
        </div>
        <dl className={styles.summary}>
          <div>
            <dd>{summary.public_collection_count.toLocaleString()}</dd>
            <dt>Public collections</dt>
          </div>
          <div>
            <dd>{summary.active_listing_count.toLocaleString()}</dd>
            <dt>Cards available</dt>
          </div>
          <div>
            <dd>{summary.public_wishlist_count.toLocaleString()}</dd>
            <dt>Public wishlists</dt>
          </div>
        </dl>
      </header>
      <nav className={styles.views} aria-label="Collector profile views">
        {views.map((item) => (
          <Link
            key={item.id}
            href={
              item.id === "overview"
                ? `/users/${userId}`
                : `/users/${userId}?view=${item.id}`
            }
            aria-current={view === item.id ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      {failed ? (
        <section className={styles.compactEmpty}>
          We couldn&apos;t load this profile content. Please try again shortly.
        </section>
      ) : (
        <>
          {view === "overview" && collectionData?.items.length > 0 && (
            <section aria-labelledby="profile-collections">
              <div className={styles.overviewHeading}>
                <h2 className={styles.sectionTitle} id="profile-collections">
                  Collection highlights
                </h2>
                <Link href={`/users/${userId}?view=collections`}>
                  Explore all collections →
                </Link>
              </div>
              <div className={styles.overviewCollections}>
                {collectionData.items.map((collection: any) => (
                  <article key={collection.id}>
                    <div className={styles.miniCards}>
                      {collection.cards.slice(0, 3).map((card: any) => (
                        <span key={card.id}>
                          {card.imageUrl ? (
                            <Image
                              src={card.imageUrl}
                              alt=""
                              fill
                              sizes="84px"
                              unoptimized
                            />
                          ) : null}
                        </span>
                      ))}
                    </div>
                    <p>
                      {collection.card_quantity.toLocaleString()} public cards ·{" "}
                      {collection.marketplace_card_quantity.toLocaleString()}{" "}
                      listed
                    </p>
                    <h3>{collection.name}</h3>
                    <Link href={`/collections/${collection.id}`}>
                      View collection →
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          )}
          {view === "collections" && collectionData?.items.length > 0 && (
            <section aria-labelledby="profile-collections">
              <h2 className={styles.sectionTitle} id="profile-collections">
                Browse public collections
              </h2>
              <p className={styles.sectionIntro}>
                Explore the public Collections this collector uses to organize
                and showcase their cards.
              </p>
              {collectionData.items.map((collection: any) => (
                <CardRail
                  key={collection.id}
                  tone="marketplace"
                  eyebrow={`${collection.card_quantity.toLocaleString()} public cards`}
                  title={collection.name}
                  meta={`${collection.marketplace_card_quantity.toLocaleString()} currently listed`}
                  action={{
                    href: `/collections/${collection.id}`,
                    label: "View collection →",
                  }}
                  cards={collection.cards}
                  emptyMessage="No cards from this collection are currently listed."
                />
              ))}
              <Pagination
                userId={userId}
                view={view}
                page={page}
                hasMore={collectionData.pagination.has_more}
              />
            </section>
          )}
          {view === "collections" && collectionData?.items.length === 0 && (
            <section className={styles.compactEmpty}>
              No public collections were found on this page.
            </section>
          )}
          {listingData?.items.length > 0 && (
            <section aria-labelledby="profile-available">
              <h2 className={styles.sectionTitle} id="profile-available">
                {view === "overview"
                  ? "Currently available"
                  : `Available from ${name}`}
              </h2>
              <div className={styles.grid}>
                {listingData.items.map((card: any) => (
                  <CardTile key={card.id} card={card} layout="grid" />
                ))}
              </div>
              {view === "available" && (
                <Pagination
                  userId={userId}
                  view={view}
                  page={page}
                  hasMore={listingData.pagination.has_more}
                />
              )}
            </section>
          )}
          {view === "available" && listingData?.items.length === 0 && (
            <section className={styles.compactEmpty}>
              This collector has no active Listings on this page.
            </section>
          )}
          {wishlistData?.items.length > 0 && (
            <section aria-labelledby="profile-wants">
              <h2 className={styles.sectionTitle} id="profile-wants">
                {view === "overview"
                  ? "Wishlist preview"
                  : `${name} is looking for`}
              </h2>
              {wishlistData.items.map((wishlist: any) => (
                <CardRail
                  key={wishlist.id}
                  tone="catalog"
                  eyebrow={`${wishlist.wanted_card_quantity.toLocaleString()} wanted cards`}
                  title={wishlist.name}
                  meta={wishlist.description ?? undefined}
                  cards={wishlist.cards}
                  emptyMessage="This public Wishlist has no active wanted cards."
                />
              ))}
              {view === "wants" && (
                <Pagination
                  userId={userId}
                  view={view}
                  page={page}
                  hasMore={wishlistData.pagination.has_more}
                />
              )}
            </section>
          )}
          {view === "wants" && wishlistData?.items.length === 0 && (
            <section className={styles.compactEmpty}>
              This collector has no public Wishlists on this page.
            </section>
          )}
          {view === "overview" &&
            !collectionData?.items.length &&
            !listingData?.items.length &&
            !wishlistData?.items.length && (
              <section className={styles.compactEmpty}>
                This collector has no public content to preview right now.
              </section>
            )}
        </>
      )}
    </main>
  );
}
