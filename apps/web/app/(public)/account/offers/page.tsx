import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  AccountShell,
  AccountState,
} from "../../../../features/account/account-shell";
import {
  AuthenticatedApiError,
  getAuthenticatedCurrentUser,
  getMySentOffers,
} from "../../../../features/auth/authenticated-api";
import {
  getPublicListing,
  type PublicListing,
  type PublicListingResult,
} from "../../../../features/marketplace/api";
import styles from "./page.module.css";

const signInRedirectUrl =
  "/sign-in?redirect_url=%2Faccount%2Foffers%3Fview%3Dsent";

const views = new Set([
  "sent",
  "received",
]);

const pretty = (value: string) =>
  value.replaceAll("_", " ");

const cardHref = (listing: PublicListing | null) => {
  const canonicalCardId =
    listing?.inventory_item?.printing
      .canonical_cards.id;
  const printingId =
    listing?.inventory_item?.printing.id;

  if (!canonicalCardId) {
    return "/discover";
  }

  return `/cards/${canonicalCardId}${printingId ? `?printing=${printingId}` : ""}`;
};

const sellerMeta = (
  listing: PublicListing | null,
) => {
  const user =
    listing?.inventory_item?.user_profiles;
  if (user?.id) {
    return {
      href: `/users/${user.id}`,
      label: user.username
        ? `@${user.username}`
        : user.display_name ??
          "DeckDeal collector",
    };
  }

  const store =
    listing?.inventory_item?.stores;
  if (store?.id) {
    return {
      href: `/stores/${store.id}`,
      label: store.name,
    };
  }

  return null;
};

export default async function AccountOffersPage({
  searchParams,
}: {
  searchParams: Promise<{
    view?: string | string[];
    createdOfferId?: string | string[];
  }>;
}) {
  const configured = Boolean(
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  );

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
  const viewRaw = Array.isArray(params.view)
    ? params.view[0]
    : params.view;
  const view = views.has(viewRaw ?? "")
    ? (viewRaw as "sent" | "received")
    : "sent";
  const createdOfferId = Array.isArray(
    params.createdOfferId,
  )
    ? params.createdOfferId[0]
    : params.createdOfferId;

  try {
    const currentUser =
      await getAuthenticatedCurrentUser();

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

    const sentOffers =
      view === "sent"
        ? await getMySentOffers(
            currentUser.user.id,
          )
        : [];

    const listingResults = new Map<
      string,
      PublicListingResult
    >(
      await Promise.all(
        [...new Set(
          sentOffers.map(
            (offer) =>
              offer.listing_id,
          ),
        )].map(async (listingId) => [
          listingId,
          await getPublicListing(
            listingId,
          ),
        ] as const),
      ),
    );

    const createdOffer =
      createdOfferId &&
      view === "sent"
        ? sentOffers.find(
            (offer) =>
              offer.id ===
              createdOfferId,
          ) ?? null
        : null;
    const createdOfferListing =
      createdOffer
        ? listingResults.get(
            createdOffer.listing_id,
          )
        : null;

    return (
      <AccountShell
        section="offers"
        title="Offers"
        intro="Track the exact inventory you’ve offered into active DeckDeal trades. Pending offers do not reserve ownership or create transactions."
      >
        <div className={styles.page}>
          <nav
            className={styles.tabs}
            aria-label="Offer views"
          >
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
            <section className={styles.empty}>
              <h2>Received offers are next.</h2>
              <p>
                This Friday MVP includes sent-offer persistence and confirmation.
                Offer review and acceptance are the next phase.
              </p>
            </section>
          ) : (
            <>
              {createdOffer && (
                <section className={styles.success}>
                  <p className={styles.kicker}>
                    Offer sent
                  </p>
                  <h2>Your trade offer is saved.</h2>
                  <div className={styles.successColumns}>
                    <div>
                      <h3>You offered</h3>
                      <ul>
                        {createdOffer.items.map(
                          (item) => (
                            <li key={item.id}>
                              {item.inventory_item
                                ?.printing
                                .canonical_cards.name ?? "Unavailable card"}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                    <div>
                      <h3>For</h3>
                      <p>
                        {createdOfferListing?.status === "ready"
                          ? createdOfferListing.data
                              .inventory_item?.printing
                              .canonical_cards.name ?? "Unavailable card"
                          : "Unavailable card"}
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
                    {createdOfferListing?.status === "ready" ? (
                      <Link
                        className={styles.secondaryAction}
                        href={`/trade/${createdOffer.listing_id}`}
                      >
                        View listing
                      </Link>
                    ) : null}
                  </div>
                </section>
              )}

              {sentOffers.length ? (
                <ul className={styles.list}>
                  {sentOffers.map((offer) => {
                    const listingResult =
                      listingResults.get(
                        offer.listing_id,
                      );
                    const listing =
                      listingResult?.status ===
                      "ready"
                        ? listingResult.data
                        : null;
                    const seller = sellerMeta(
                      listing,
                    );

                    return (
                      <li key={offer.id}>
                        <article className={styles.card}>
                          <div className={styles.cardHeader}>
                            <div>
                              <p className={styles.kicker}>
                                Sent offer
                              </p>
                              <h2>
                                {listing?.inventory_item?.printing
                                  .canonical_cards.name ?? "Unavailable card"}
                              </h2>
                            </div>
                            <span className={styles.status}>
                              {pretty(offer.status)}
                            </span>
                          </div>
                          <p className={styles.meta}>
                            {listing?.inventory_item
                              ?.printing.card_sets.name ?? "Unknown set"}{" "}
                            · {listing?.inventory_item?.printing.card_sets.code.toUpperCase() ?? "—"} #
                            {listing?.inventory_item?.printing.collector_number ?? "—"}
                          </p>
                          <p className={styles.meta}>
                            Seller{" "}
                            {seller ? (
                              <Link href={seller.href}>
                                {seller.label}
                              </Link>
                            ) : (
                              "unavailable"
                            )}
                          </p>
                          <p className={styles.meta}>
                            Offered{" "}
                            {offer.items.length
                              ? offer.items
                                  .map(
                                    (item) =>
                                      item.inventory_item
                                        ?.printing
                                        .canonical_cards.name ?? "Unavailable card",
                                  )
                                  .join(", ")
                              : "No cards"}
                          </p>
                          <p className={styles.meta}>
                            Created {new Date(offer.created_at).toLocaleString()}
                          </p>
                          <div className={styles.actions}>
                            <Link
                              className={styles.secondaryAction}
                              href={`/trade/${offer.listing_id}`}
                            >
                              View listing
                            </Link>
                            <Link
                              className={styles.secondaryAction}
                              href={cardHref(listing)}
                            >
                              View card
                            </Link>
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
                    Find a listed card, open its TRADE action, and offer exact
                    inventory you already own.
                  </p>
                </section>
              )}
            </>
          )}
        </div>
      </AccountShell>
    );
  } catch (error) {
    if (
      error instanceof AuthenticatedApiError &&
      error.status === 401
    ) {
      redirect(signInRedirectUrl);
    }

    if (
      error instanceof AuthenticatedApiError &&
      error.status === 403
    ) {
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
