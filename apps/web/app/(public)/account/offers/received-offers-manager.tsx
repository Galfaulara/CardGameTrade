"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import type { MyOfferEntry } from "../../../../features/account/offer-types";
import type { MarketPrice } from "../../../../features/marketplace/api";
import {
  buildMarketComparison,
  groupMarketPrices,
  marketPriceKey,
  MarketValueSummary,
} from "../../../../features/marketplace/market-prices";
import {
  prettyTradeValue,
  tradeInventoryImage,
  tradeInventoryName,
  tradeInventoryPhysical,
  tradeInventoryPrinting,
} from "../../../../features/account/trade-types";
import type { TradeMediatorStore } from "../../../../features/marketplace/api";
import styles from "./page.module.css";

const parseBody = async (response: Response) => {
  try {
    return (await response.json()) as {
      id?: string;
      message?: string;
    };
  } catch {
    return {};
  }
};

const listingCardHref = (entry: MyOfferEntry) => {
  const canonicalCardId =
    entry.listing?.inventory_item?.printing.canonical_cards.id;
  const printingId = entry.listing?.inventory_item?.printing.id;

  if (!canonicalCardId) {
    return "/discover";
  }

  return `/cards/${canonicalCardId}${printingId ? `?printing=${printingId}` : ""}`;
};

const senderLabel = (entry: MyOfferEntry) => {
  const username = entry.offer.user_profiles?.username;
  const displayName = entry.offer.user_profiles?.display_name;

  if (username && displayName) {
    return `@${username} · ${displayName}`;
  }

  if (username) {
    return `@${username}`;
  }

  if (displayName) {
    return displayName;
  }

  return entry.offer.stores?.name ?? "DeckDeal participant";
};

const senderHref = (entry: MyOfferEntry) => {
  if (entry.offer.user_profiles?.id) {
    return `/users/${entry.offer.user_profiles.id}`;
  }

  if (entry.offer.stores?.id) {
    return `/stores/${entry.offer.stores.id}`;
  }

  return null;
};

function AcceptTradeDialog({
  entry,
  stores,
  onClose,
}: {
  entry: MyOfferEntry;
  stores: TradeMediatorStore[];
  onClose: () => void;
}) {
  const router = useRouter();
  const closeRef = useRef<HTMLButtonElement>(null);
  const submittingRef = useRef(false);
  const [selectedStoreId, setSelectedStoreId] = useState(
    stores.some((store) => store.id === entry.offer.listings.preferred_store_id)
      ? (entry.offer.listings.preferred_store_id ?? "")
      : (stores[0]?.id ?? ""),
  );
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !submitting) {
        onClose();
      }
    };
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", key);
    };
  }, [onClose, submitting]);

  const target = entry.listing?.inventory_item ?? null;

  const submit = async () => {
    if (submittingRef.current) {
      return;
    }

    if (!selectedStoreId) {
      setError("Choose an eligible DeckDeal mediation store.");
      return;
    }

    submittingRef.current = true;
    setSubmitting(true);
    setError(null);

    const response = await fetch(
      `/api/me/offers/${encodeURIComponent(entry.offer.id)}/accept`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          storeId: selectedStoreId,
        }),
      },
    );

    const body = await parseBody(response);

    if (!response.ok || !body.id) {
      setError(
        response.status === 400 || response.status === 409
          ? "This offer can no longer be accepted."
          : (body.message ?? "This offer could not be accepted."),
      );
      submittingRef.current = false;
      setSubmitting(false);
      return;
    }

    router.push(`/account/trades/${encodeURIComponent(body.id)}`);
  };

  return (
    <div className={styles.backdrop}>
      <section
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="accept-trade-title"
      >
        <header className={styles.dialogHeader}>
          <div>
            <p className={styles.kicker}>Accept trade</p>
            <h2 id="accept-trade-title">Confirm this trade</h2>
          </div>
          <button
            ref={closeRef}
            className={styles.iconButton}
            type="button"
            onClick={onClose}
            disabled={submitting}
            aria-label="Close accept trade dialog"
          >
            ×
          </button>
        </header>

        <div className={styles.confirmationColumns}>
          <section className={styles.confirmationBlock}>
            <h3>You give</h3>
            <article className={styles.compactCard}>
              <div className={styles.compactArt}>
                {tradeInventoryImage(target) ? (
                  <Image
                    src={tradeInventoryImage(target)!}
                    alt={`${tradeInventoryName(target)} card`}
                    fill
                    sizes="88px"
                    unoptimized
                  />
                ) : (
                  <span>—</span>
                )}
              </div>
              <div>
                <strong>{tradeInventoryName(target)}</strong>
                <p>{tradeInventoryPrinting(target)}</p>
                <p>{tradeInventoryPhysical(target)}</p>
              </div>
            </article>
          </section>

          <section className={styles.confirmationBlock}>
            <h3>You receive</h3>
            <ul className={styles.compactList}>
              {entry.offer.items.map((item) => (
                <li key={item.id}>
                  <article className={styles.compactCard}>
                    <div className={styles.compactArt}>
                      {tradeInventoryImage(item.inventory_item) ? (
                        <Image
                          src={tradeInventoryImage(item.inventory_item)!}
                          alt={`${tradeInventoryName(item.inventory_item)} card`}
                          fill
                          sizes="88px"
                          unoptimized
                        />
                      ) : (
                        <span>—</span>
                      )}
                    </div>
                    <div>
                      <strong>{tradeInventoryName(item.inventory_item)}</strong>
                      <p>{tradeInventoryPrinting(item.inventory_item)}</p>
                      <p>{tradeInventoryPhysical(item.inventory_item)}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <label className={styles.field}>
          <span>Handoff location</span>
          <select
            value={selectedStoreId}
            onChange={(event) => setSelectedStoreId(event.target.value)}
            disabled={submitting || !stores.length}
          >
            {stores.length ? (
              stores.map((store) => (
                <option key={store.id} value={store.id}>
                  {store.name}
                  {store.city || store.state_region
                    ? ` · ${[store.city, store.state_region].filter(Boolean).join(", ")}`
                    : ""}
                </option>
              ))
            ) : (
              <option value="">No eligible stores available</option>
            )}
          </select>
          <p className={styles.help}>
            After acceptance, both collectors bring their cards to the selected
            Store for verification.
          </p>
        </label>

        {error ? (
          <p className={styles.error} role="alert">
            {error}
          </p>
        ) : null}

        <div className={styles.dialogActions}>
          <button
            className={styles.secondaryAction}
            type="button"
            onClick={onClose}
            disabled={submitting}
          >
            Cancel
          </button>
          <button
            className={styles.primaryAction}
            type="button"
            onClick={() => void submit()}
            disabled={submitting || !stores.length}
          >
            {submitting ? "Accepting…" : "Accept trade"}
          </button>
        </div>
      </section>
    </div>
  );
}

export function ReceivedOffersManager({
  entries,
  stores,
  marketPrices,
}: {
  entries: MyOfferEntry[];
  stores: TradeMediatorStore[];
  marketPrices: MarketPrice[];
}) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [busyOfferId, setBusyOfferId] = useState<string | null>(null);
  const [accepting, setAccepting] = useState<MyOfferEntry | null>(null);

  const pendingCount = useMemo(
    () => entries.filter((entry) => entry.offer.status === "pending").length,
    [entries],
  );
  const priceMap = useMemo(
    () => groupMarketPrices(marketPrices),
    [marketPrices],
  );

  const rejectOffer = async (offerId: string) => {
    setBusyOfferId(offerId);
    setError(null);

    const response = await fetch(
      `/api/me/offers/${encodeURIComponent(offerId)}/reject`,
      {
        method: "PATCH",
      },
    );

    if (!response.ok) {
      setError(
        (await parseBody(response)).message ??
          "This offer could not be rejected.",
      );
      setBusyOfferId(null);
      return;
    }

    setBusyOfferId(null);
    router.refresh();
  };

  if (!entries.length) {
    return (
      <section className={styles.empty}>
        <h2>No one has sent you a trade offer yet.</h2>
        <p>
          When another collector offers exact owned inventory for one of your
          Listings, it will appear here.
        </p>
      </section>
    );
  }

  return (
    <div className={styles.page}>
      <section className={styles.infoBanner}>
        <strong>
          {pendingCount} pending offer{pendingCount === 1 ? "" : "s"}
        </strong>
        <span>
          Review exact cards, choose an eligible mediation Store, and accept or
          reject.
        </span>
      </section>

      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}

      <ul className={styles.offerList}>
        {entries.map((entry) => {
          const target = entry.listing?.inventory_item ?? null;
          const targetHref = listingCardHref(entry);
          const senderLink = senderHref(entry);
          const busy = busyOfferId === entry.offer.id;
          const comparison = buildMarketComparison(
            entry.offer.items.flatMap((item) =>
              item.inventory_item
                ? [
                    {
                      prices:
                        priceMap.get(
                          marketPriceKey(
                            item.inventory_item.printing.id,
                            item.inventory_item.finish,
                          ),
                        ) ?? [],
                      quantity: item.quantity,
                    },
                  ]
                : [],
            ),
            target
              ? [
                  {
                    prices:
                      priceMap.get(
                        marketPriceKey(target.printing.id, target.finish),
                      ) ?? [],
                    quantity: target.quantity,
                  },
                ]
              : [],
          );

          return (
            <li key={entry.offer.id}>
              <article className={styles.offerCard}>
                <div className={styles.offerHeader}>
                  <div>
                    <p className={styles.kicker}>Received offer</p>
                    <h2>{tradeInventoryName(target)}</h2>
                  </div>
                  <span className={styles.status}>
                    {prettyTradeValue(entry.offer.status)}
                  </span>
                </div>

                <div className={styles.targetLayout}>
                  <Link className={styles.targetArt} href={targetHref}>
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
                      From{" "}
                      {senderLink ? (
                        <Link href={senderLink}>{senderLabel(entry)}</Link>
                      ) : (
                        senderLabel(entry)
                      )}
                    </p>
                    <p>
                      Created{" "}
                      {new Date(entry.offer.created_at).toLocaleString()}
                    </p>
                  </div>
                </div>

                <MarketValueSummary
                  rows={comparison}
                  targetTitle="Target card market prices"
                  offeredTitle="Offered cards market prices"
                  differenceTitle="Price difference"
                />

                <section className={styles.offerSection}>
                  <p className={styles.sectionLabel}>Offered cards</p>
                  <ul className={styles.itemGrid}>
                    {entry.offer.items.map((item) => (
                      <li key={item.id}>
                        <article className={styles.itemCard}>
                          <div className={styles.itemArt}>
                            {tradeInventoryImage(item.inventory_item) ? (
                              <Image
                                src={tradeInventoryImage(item.inventory_item)!}
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
                            <p>{tradeInventoryPrinting(item.inventory_item)}</p>
                            <p>{tradeInventoryPhysical(item.inventory_item)}</p>
                          </div>
                        </article>
                      </li>
                    ))}
                  </ul>
                </section>

                <div className={styles.actions}>
                  <Link className={styles.secondaryAction} href={targetHref}>
                    View card
                  </Link>
                  {entry.transactionId ? (
                    <Link
                      className={styles.secondaryAction}
                      href={`/account/trades/${entry.transactionId}`}
                    >
                      View trade
                    </Link>
                  ) : null}
                  {entry.offer.status === "pending" ? (
                    <>
                      <button
                        className={styles.dangerAction}
                        type="button"
                        disabled={busy}
                        onClick={() => void rejectOffer(entry.offer.id)}
                      >
                        {busy ? "Rejecting…" : "Reject"}
                      </button>
                      <button
                        className={styles.primaryAction}
                        type="button"
                        disabled={busy}
                        onClick={() => {
                          setError(null);
                          setAccepting(entry);
                        }}
                      >
                        Accept trade
                      </button>
                    </>
                  ) : null}
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      {accepting ? (
        <AcceptTradeDialog
          entry={accepting}
          stores={stores}
          onClose={() => setAccepting(null)}
        />
      ) : null}
    </div>
  );
}
