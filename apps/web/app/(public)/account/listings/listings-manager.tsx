"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import type { PublicListing } from "../../../../features/marketplace/api";
import styles from "./page.module.css";

const pretty = (value: string) =>
  value.replaceAll("_", " ");

const artwork = (listing: PublicListing) =>
  listing.inventory_item?.printing
    .image_large_uri ??
  listing.inventory_item?.printing
    .image_normal_uri ??
  listing.inventory_item?.printing
    .image_small_uri ??
  null;

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

const parseBody = async (
  response: Response,
) => {
  try {
    return (await response.json()) as {
      message?: string;
    };
  } catch {
    return {};
  }
};

export function ListingsManager({
  listings,
}: {
  listings: PublicListing[];
}) {
  const router = useRouter();
  const [pending, startTransition] =
    useTransition();
  const [cancellingId, setCancellingId] =
    useState<string | null>(null);
  const [error, setError] = useState<
    string | null
  >(null);

  const cancelListing = (
    listingId: string,
  ) => {
    startTransition(async () => {
      setCancellingId(listingId);
      setError(null);

      const response = await fetch(
        `/api/me/listings/${encodeURIComponent(listingId)}/status`,
        {
          method: "PATCH",
        },
      );

      if (!response.ok) {
        setError(
          (await parseBody(response))
            .message ??
            "This listing could not be cancelled.",
        );
        setCancellingId(null);
        return;
      }

      setCancellingId(null);
      router.refresh();
    });
  };

  if (!listings.length) {
    return (
      <section className={styles.empty}>
        <h2>You don’t have any cards listed for trade yet.</h2>
        <Link
          className={styles.primaryAction}
          href="/account/inventory"
        >
          Go to Inventory
        </Link>
      </section>
    );
  }

  return (
    <div className={styles.page}>
      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
      <ul className={styles.grid}>
        {listings.map((listing) => {
          const item =
            listing.inventory_item;
          const image = artwork(listing);
          const href = cardHref(listing);

          return (
            <li key={listing.id}>
              <article className={styles.card}>
                <Link
                  className={styles.art}
                  href={href}
                >
                  {image ? (
                    <Image
                      src={image}
                      alt={`${item?.printing.canonical_cards.name ?? "Listed card"} card`}
                      fill
                      sizes="(max-width: 42rem) 42vw, (max-width: 72rem) 28vw, 240px"
                      unoptimized
                    />
                  ) : (
                    <span>
                      Card image unavailable
                    </span>
                  )}
                </Link>
                <div className={styles.info}>
                  <div className={styles.heading}>
                    <div>
                      <p className={styles.kicker}>
                        Trade listing
                      </p>
                      <h2>
                        <Link href={href}>
                          {item?.printing
                            .canonical_cards.name ??
                            "Unavailable card"}
                        </Link>
                      </h2>
                    </div>
                    <span className={styles.state}>
                      Active
                    </span>
                  </div>
                  <p className={styles.printing}>
                    {item?.printing.card_sets.name ??
                      "Unknown set"}{" "}
                    · {item?.printing.card_sets.code.toUpperCase() ?? "—"} #
                    {item?.printing.collector_number ??
                      "—"}
                  </p>
                  <p className={styles.meta}>
                    {item
                      ? `${pretty(item.condition)} · ${pretty(item.finish)}${item.quantity > 1 ? ` · ×${item.quantity}` : ""}`
                      : "Inventory details unavailable"}
                  </p>
                  {listing.preferred_store ? (
                    <p className={styles.store}>
                      Preferred store · {
                        listing.preferred_store.name
                      }
                    </p>
                  ) : null}
                  <p className={styles.date}>
                    Created {new Date(listing.created_at).toLocaleDateString()}
                  </p>
                  <div className={styles.actions}>
                    <Link
                      className={styles.secondaryAction}
                      href={href}
                    >
                      View card
                    </Link>
                    <button
                      className={styles.dangerAction}
                      type="button"
                      disabled={pending && cancellingId === listing.id}
                      onClick={() =>
                        cancelListing(listing.id)
                      }
                    >
                      {pending &&
                      cancellingId === listing.id
                        ? "Cancelling…"
                        : "Cancel listing"}
                    </button>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
