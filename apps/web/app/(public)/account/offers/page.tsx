import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  AccountShell,
  AccountState,
} from "../../../../features/account/account-shell";
import type {
  MyListingOffer,
  MyOfferEntry,
} from "../../../../features/account/offer-types";
import {
  tradeInventoryImage,
  tradeInventoryName,
  tradeInventoryPhysical,
  tradeInventoryPrinting,
} from "../../../../features/account/trade-types";
import {
  AuthenticatedApiError,
  getAuthenticatedCurrentUser,
  getMyReceivedOffers,
  getMySentOffers,
  getMyTransactions,
} from "../../../../features/auth/authenticated-api";
import {
  getPublicListing,
  getLatestMarketPrices,
  getTradeMediators,
  type PublicListing,
} from "../../../../features/marketplace/api";
import { ReceivedOffersManager } from "./received-offers-manager";
import styles from "./page.module.css";

const signInRedirectUrl =
  "/sign-in?redirect_url=%2Faccount%2Foffers%3Fview%3Dsent";

const views = new Set(["sent", "received"]);

const cardHref = (listing: PublicListing | null) => {
  const canonicalCardId = listing?.inventory_item?.printing.canonical_cards.id;
  const printingId = listing?.inventory_item?.printing.id;

  if (!canonicalCardId) {
    return "/discover";
  }

  return `/cards/${canonicalCardId}${printingId ? `?printing=${printingId}` : ""}`;
};

const sellerMeta = (listing: PublicListing | null) => {
  const user = listing?.inventory_item?.user_profiles;
  if (user?.id) {
    return {
      href: `/users/${user.id}`,
      label: user.username
        ? `@${user.username}`
        : (user.display_name ?? "DeckDeal collector"),
    };
  }

  const store = listing?.inventory_item?.stores;
  if (store?.id) {
    return {
      href: `/stores/${store.id}`,
      label: store.name,
    };
  }

  return null;
};

async function loadOfferEntries(
  offers: MyListingOffer[],
  transactionIdByOfferId: Map<string, string>,
): Promise<MyOfferEntry[]> {
  const listings = new Map(
    await Promise.all(
      [...new Set(offers.map((offer) => offer.listing_id))].map(
        async (listingId) => {
          const result = await getPublicListing(listingId);
          return [
            listingId,
            result.status === "ready" ? result.data : null,
          ] as const;
        },
      ),
    ),
  );

  return offers.map((offer) => ({
    offer,
    listing: listings.get(offer.listing_id) ?? null,
    transactionId: transactionIdByOfferId.get(offer.id) ?? null,
  }));
}

function SentOffersSection({
  entries,
  createdOfferId,
}: {
  entries: MyOfferEntry[];
  createdOfferId: string | undefined;
}) {
  const createdOffer = createdOfferId
    ? (entries.find((entry) => entry.offer.id === createdOfferId) ?? null)
    : null;

  return (
    <>
      {createdOffer ? (
        <section className={styles.success}>
          <p className={styles.kicker}>Offer sent</p>
          <h2>Your trade offer is saved.</h2>
          <div className={styles.successColumns}>
            <div>
              <h3>You offered</h3>
              <ul>
                {createdOffer.offer.items.map((item) => (
                  <li key={item.id}>
                    {tradeInventoryName(item.inventory_item)}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>For</h3>
              <p>
                {tradeInventoryName(
                  createdOffer.listing?.inventory_item ?? null,
                )}
              </p>
            </div>
          </div>
          <div className={styles.actions}>
            <Link
              className={styles.primaryAction}
              href="/account/offers?view=sent"
            >
              View my offers
            </Link>
            <Link
              className={styles.secondaryAction}
              href={`/trade/${createdOffer.offer.listing_id}`}
            >
              View listing
            </Link>
          </div>
        </section>
      ) : null}

      {entries.length ? (
        <ul className={styles.offerList}>
          {entries.map((entry) => {
            const listing = entry.listing;
            const seller = sellerMeta(listing);
            const target = listing?.inventory_item ?? null;

            return (
              <li key={entry.offer.id}>
                <article className={styles.offerCard}>
                  <div className={styles.offerHeader}>
                    <div>
                      <p className={styles.kicker}>Sent offer</p>
                      <h2>{tradeInventoryName(target)}</h2>
                    </div>
                    <span className={styles.status}>
                      {entry.offer.status.replaceAll("_", " ")}
                    </span>
                  </div>

                  <div className={styles.targetLayout}>
                    <Link className={styles.targetArt} href={cardHref(listing)}>
                      {tradeInventoryImage(target) ? (
                        <Image
                          src={tradeInventoryImage(target)!}
                          alt={`${tradeInventoryName(target)} card`}
                          fill
                          sizes="(max-width: 42rem) 40vw, 168px"
                          unoptimized
                        />
                      ) : (
                        <span>Card image unavailable</span>
                      )}
                    </Link>
                    <div className={styles.targetCopy}>
                      <p className={styles.sectionLabel}>Target card</p>
                      <p>{tradeInventoryPrinting(target)}</p>
                      <p>{tradeInventoryPhysical(target)}</p>
                      <p>
                        Seller{" "}
                        {seller ? (
                          <Link href={seller.href}>{seller.label}</Link>
                        ) : (
                          "unavailable"
                        )}
                      </p>
                      <p>
                        Created{" "}
                        {new Date(entry.offer.created_at).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <section className={styles.offerSection}>
                    <p className={styles.sectionLabel}>Offered cards</p>
                    <ul className={styles.itemGrid}>
                      {entry.offer.items.map((item) => (
                        <li key={item.id}>
                          <article className={styles.itemCard}>
                            <div className={styles.itemArt}>
                              {tradeInventoryImage(item.inventory_item) ? (
                                <Image
                                  src={
                                    tradeInventoryImage(item.inventory_item)!
                                  }
                                  alt={`${tradeInventoryName(item.inventory_item)} card`}
                                  fill
                                  sizes="(max-width: 42rem) 36vw, 112px"
                                  unoptimized
                                />
                              ) : (
                                <span>Card image unavailable</span>
                              )}
                            </div>
                            <div>
                              <strong>
                                {tradeInventoryName(item.inventory_item)}
                              </strong>
                              <p>
                                {tradeInventoryPrinting(item.inventory_item)}
                              </p>
                              <p>
                                {tradeInventoryPhysical(item.inventory_item)}
                              </p>
                            </div>
                          </article>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <div className={styles.actions}>
                    <Link
                      className={styles.secondaryAction}
                      href={`/trade/${entry.offer.listing_id}`}
                    >
                      View listing
                    </Link>
                    <Link
                      className={styles.secondaryAction}
                      href={cardHref(listing)}
                    >
                      View card
                    </Link>
                    {entry.transactionId ? (
                      <Link
                        className={styles.primaryAction}
                        href={`/account/trades/${entry.transactionId}`}
                      >
                        View trade
                      </Link>
                    ) : null}
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      ) : (
        <section className={styles.empty}>
          <h2>You haven’t sent any trade offers yet.</h2>
          <p>
            Find a listed card, open its TRADE action, and offer exact inventory
            you already own.
          </p>
        </section>
      )}
    </>
  );
}

export default async function AccountOffersPage({
  searchParams,
}: {
  searchParams: Promise<{
    view?: string | string[];
    createdOfferId?: string | string[];
  }>;
}) {
  const configured = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

  if (!configured) {
    return (
      <AccountState
        eyebrow="My DeckDeal"
        title="My Offers are not configured locally"
        description="Add the Clerk development environment values described in .env.example, then restart the web app."
        primaryHref="/"
        primaryLabel="Continue browsing DeckDeal"
      />
    );
  }

  const { userId } = await auth();
  if (!userId) {
    redirect(signInRedirectUrl);
  }

  const params = await searchParams;
  const viewRaw = Array.isArray(params.view) ? params.view[0] : params.view;
  const view = views.has(viewRaw ?? "")
    ? (viewRaw as "sent" | "received")
    : "sent";
  const createdOfferId = Array.isArray(params.createdOfferId)
    ? params.createdOfferId[0]
    : params.createdOfferId;

  try {
    const currentUser = await getAuthenticatedCurrentUser();

    if (!currentUser.onboarded) {
      redirect("/onboarding");
    }

    if (currentUser.account_status !== "active") {
      return (
        <AccountState
          eyebrow="DeckDeal account unavailable"
          title="This DeckDeal account can’t open My Offers"
          description="Your authenticated Clerk identity is already bound to a disabled DeckDeal account."
          primaryHref="/"
          primaryLabel="Return to DeckDeal"
        />
      );
    }

    const [transactions, offers, tradeMediators] = await Promise.all([
      getMyTransactions(currentUser.user.id),
      view === "received"
        ? getMyReceivedOffers(currentUser.user.id)
        : getMySentOffers(currentUser.user.id),
      view === "received"
        ? getTradeMediators().catch(() => [])
        : Promise.resolve([]),
    ]);

    const transactionIdByOfferId = new Map(
      transactions.flatMap((trade) =>
        trade.accepted_offer_id
          ? [[trade.accepted_offer_id, trade.id] as const]
          : [],
      ),
    );

    const entries = await loadOfferEntries(offers, transactionIdByOfferId);
    const receivedMarketPrices =
      view === "received"
        ? await getLatestMarketPrices(
            entries.flatMap((entry) => {
              const target = entry.listing?.inventory_item;
              return [
                ...(target
                  ? [{ printingId: target.printing.id, finish: target.finish }]
                  : []),
                ...entry.offer.items.flatMap((item) =>
                  item.inventory_item
                    ? [
                        {
                          printingId: item.inventory_item.printing.id,
                          finish: item.inventory_item.finish,
                        },
                      ]
                    : [],
                ),
              ];
            }),
          )
        : [];

    return (
      <AccountShell
        section="offers"
        title="Offers"
        intro="Track the exact inventory moving through DeckDeal trade offers. Pending offers do not transfer ownership; accepted trades move into Store-mediated handoff."
      >
        <div className={styles.page}>
          <nav className={styles.tabs} aria-label="Offer views">
            <Link
              href="/account/offers?view=received"
              aria-current={view === "received" ? "page" : undefined}
            >
              Received
            </Link>
            <Link
              href="/account/offers?view=sent"
              aria-current={view === "sent" ? "page" : undefined}
            >
              Sent
            </Link>
          </nav>

          {view === "received" ? (
            <ReceivedOffersManager
              entries={entries}
              stores={tradeMediators}
              marketPrices={receivedMarketPrices}
            />
          ) : (
            <SentOffersSection
              entries={entries}
              createdOfferId={createdOfferId}
            />
          )}
        </div>
      </AccountShell>
    );
  } catch (error) {
    if (error instanceof AuthenticatedApiError && error.status === 401) {
      redirect(signInRedirectUrl);
    }

    if (error instanceof AuthenticatedApiError && error.status === 403) {
      return (
        <AccountState
          eyebrow="DeckDeal account unavailable"
          title="This DeckDeal account can’t open My Offers"
          description="Your authenticated Clerk identity does not currently have access to an active DeckDeal account."
          primaryHref="/"
          primaryLabel="Return to DeckDeal"
        />
      );
    }

    return (
      <AccountState
        eyebrow="My DeckDeal"
        title="We couldn’t load your offers right now"
        description="Please try again shortly."
        primaryHref="/"
        primaryLabel="Return to DeckDeal"
      />
    );
  }
}
