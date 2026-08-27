import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { NavigationBack } from "../../../../components/navigation-back/navigation-back";
import type { MyInventoryListResult } from "../../../../features/account/inventory-types";
import {
  AuthenticatedApiError,
  getAuthenticatedCurrentUser,
  getMyInventory,
} from "../../../../features/auth/authenticated-api";
import {
  getPublicListing,
  type PublicListing,
} from "../../../../features/marketplace/api";
import { TradeOfferBuilder } from "./trade-offer-builder";
import styles from "./page.module.css";

const pretty = (value: string) =>
  value.replaceAll("_", " ");

const inventoryQuery = (
  page: number,
  q: string,
) => {
  const query = new URLSearchParams({
    page: String(page),
    pageSize: "24",
    status: "available",
  });

  if (q) {
    query.set("q", q);
  }

  return query.toString();
};

const normalizePage = (
  value: string | string[] | undefined,
) => {
  const raw = Array.isArray(value)
    ? value[0]
    : value;
  if (!raw || !/^\d+$/.test(raw)) {
    return 1;
  }
  const page = Number(raw);
  return Number.isSafeInteger(page) &&
    page > 0
    ? page
    : 1;
};

const normalizeQuery = (
  value: string | string[] | undefined,
) => {
  const raw = Array.isArray(value)
    ? value[0]
    : value;
  return raw?.trim().replace(/\s+/g, " ") ?? "";
};

const listingAvailable = (
  listing: PublicListing,
) =>
  listing.status === "active" &&
  listing.accepts_trade &&
  Boolean(listing.inventory_item) &&
  listing.inventory_item?.status ===
    "available";

const sellerLabel = (
  listing: PublicListing,
) => {
  const user =
    listing.inventory_item?.user_profiles;
  if (user?.username) {
    return `@${user.username}`;
  }
  if (user?.display_name) {
    return user.display_name;
  }
  const store =
    listing.inventory_item?.stores;
  return store?.name ?? "DeckDeal seller";
};

const cardHref = (listing: PublicListing) => {
  const canonicalCardId =
    listing.inventory_item?.printing
      .canonical_cards.id;
  const printingId =
    listing.inventory_item?.printing.id;

  if (!canonicalCardId) {
    return "/discover";
  }

  return `/cards/${canonicalCardId}${printingId ? `?printing=${printingId}` : ""}`;
};

export default async function TradePage({
  params,
  searchParams,
}: {
  params: Promise<{
    listingId: string;
  }>;
  searchParams: Promise<{
    page?: string | string[];
    q?: string | string[];
  }>;
}) {
  const [{ listingId }, query] =
    await Promise.all([
      params,
      searchParams,
    ]);
  const signInRedirectUrl = `/sign-in?redirect_url=${encodeURIComponent(`/trade/${listingId}`)}`;
  const page = normalizePage(
    query.page,
  );
  const q = normalizeQuery(query.q);

  const listingResult =
    await getPublicListing(listingId);

  if (listingResult.status !== "ready") {
    return (
      <main className={styles.main}>
        <NavigationBack fallback="/discover" />
        <section className={styles.state}>
          <p className={styles.kicker}>
            Trade unavailable
          </p>
          <h1>This listing isn’t available for trade.</h1>
          <p>
            The exact listing may have been removed, changed, or is no longer
            active.
          </p>
          <Link
            className={styles.primaryAction}
            href="/discover"
          >
            Return to discovery
          </Link>
        </section>
      </main>
    );
  }

  const listing = listingResult.data;
  const fallback = cardHref(listing);

  if (!listingAvailable(listing)) {
    return (
      <main className={styles.main}>
        <NavigationBack fallback={fallback} />
        <section className={styles.state}>
          <p className={styles.kicker}>
            Trade unavailable
          </p>
          <h1>This listing isn’t accepting trade offers right now.</h1>
          <p>
            Only active trade-capable listings backed by available inventory can
            accept new offers.
          </p>
          <Link
            className={styles.primaryAction}
            href={fallback}
          >
            View card
          </Link>
        </section>
      </main>
    );
  }

  const configured = Boolean(
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  );

  if (!configured) {
    return (
      <main className={styles.main}>
        <NavigationBack fallback={fallback} />
        <section className={styles.state}>
          <p className={styles.kicker}>
            Trade unavailable
          </p>
          <h1>Trade sign-in is not configured locally.</h1>
          <p>
            Add the Clerk development environment values described in
            .env.example, then restart the web app.
          </p>
        </section>
      </main>
    );
  }

  const { userId } = await auth();
  if (!userId) {
    redirect(signInRedirectUrl);
  }

  try {
    const currentUser =
      await getAuthenticatedCurrentUser();

    if (!currentUser.onboarded) {
      redirect("/onboarding");
    }

    if (currentUser.account_status !== "active") {
      return (
        <main className={styles.main}>
          <NavigationBack fallback={fallback} />
          <section className={styles.state}>
            <p className={styles.kicker}>
              DeckDeal account unavailable
            </p>
            <h1>This DeckDeal account can’t start a trade.</h1>
            <p>
              Your authenticated Clerk identity does not currently have access
              to an active DeckDeal account.
            </p>
          </section>
        </main>
      );
    }

    if (listing.seller_user_id === currentUser.user.id) {
      return (
        <main className={styles.main}>
          <NavigationBack fallback={fallback} />
          <section className={styles.state}>
            <p className={styles.kicker}>
              Own listing
            </p>
            <h1>You can’t make an offer on your own listing.</h1>
            <p>
              Open this card from public discovery or My Listings if you want to
              manage the listing instead.
            </p>
            <Link
              className={styles.primaryAction}
              href="/account/listings"
            >
              Go to My Listings
            </Link>
          </section>
        </main>
      );
    }

    const inventory =
      (await getMyInventory(
        inventoryQuery(page, q),
      )) as MyInventoryListResult;

    return (
      <main className={styles.main}>
        <NavigationBack fallback={fallback} />
        <section className={styles.layout}>
          <header className={styles.hero}>
            <p className={styles.kicker}>
              Trade for
            </p>
            <div className={styles.targetCard}>
              <div className={styles.art}>
                {listing.inventory_item?.printing
                  .image_large_uri ||
                listing.inventory_item?.printing
                  .image_normal_uri ? (
                  <Image
                    src={listing.inventory_item.printing.image_large_uri ?? listing.inventory_item.printing.image_normal_uri ?? listing.inventory_item.printing.image_small_uri ?? ""}
                    alt={`${listing.inventory_item.printing.canonical_cards.name} card`}
                    fill
                    sizes="(max-width: 48rem) 70vw, 280px"
                    unoptimized
                  />
                ) : (
                  <span>
                    Card image unavailable
                  </span>
                )}
              </div>
              <div className={styles.targetInfo}>
                <h1>
                  {listing.inventory_item?.printing
                    .canonical_cards.name}
                </h1>
                <p>
                  {listing.inventory_item?.printing
                    .card_sets.name} · {listing.inventory_item?.printing.card_sets.code.toUpperCase()} #
                  {listing.inventory_item?.printing
                    .collector_number}
                </p>
                <p>
                  {pretty(
                    listing.inventory_item
                      ?.condition ?? "unknown",
                  )} · {pretty(
                    listing.inventory_item
                      ?.finish ?? "unknown",
                  )}
                </p>
                <p>
                  Offered by {sellerLabel(listing)}
                </p>
                <span className={styles.intent}>
                  TRADE
                </span>
              </div>
            </div>
          </header>
          <TradeOfferBuilder
            listingId={listing.id}
            targetCardHref={fallback}
            targetCardName={listing.inventory_item?.printing.canonical_cards.name ?? "Unavailable card"}
            initialQuery={q}
            initialPage={page}
            initialInventory={inventory}
          />
        </section>
      </main>
    );
  } catch (error) {
    if (
      error instanceof AuthenticatedApiError &&
      error.status === 401
    ) {
      redirect(signInRedirectUrl);
    }

    return (
      <main className={styles.main}>
        <NavigationBack fallback={fallback} />
        <section className={styles.state}>
          <p className={styles.kicker}>
            Trade unavailable
          </p>
          <h1>We couldn’t load this trade right now.</h1>
          <p>
            Please try again shortly.
          </p>
          <Link
            className={styles.primaryAction}
            href={fallback}
          >
            View card
          </Link>
        </section>
      </main>
    );
  }
}
