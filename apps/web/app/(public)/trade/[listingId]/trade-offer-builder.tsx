"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import type {
  MyInventoryItem,
  MyInventoryListResult,
} from "../../../../features/account/inventory-types";
import styles from "./trade-offer-builder.module.css";

type SelectedItem = {
  inventoryItemId: string;
  quantity: number;
  name: string;
  printing: string;
  finish: string;
  condition: string;
  imageUrl: string | null;
};

const pretty = (value: string) =>
  value.replaceAll("_", " ");

const artwork = (item: MyInventoryItem) =>
  item.printing.image_large_uri ??
  item.printing.image_normal_uri ??
  item.printing.image_small_uri ??
  null;

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

const parseBody = async (
  response: Response,
) => {
  try {
    return (await response.json()) as {
      id?: string;
      message?: string;
    };
  } catch {
    return {};
  }
};

export function TradeOfferBuilder({
  listingId,
  targetCardHref,
  targetCardName,
  initialQuery,
  initialPage,
  initialInventory,
}: {
  listingId: string;
  targetCardHref: string;
  targetCardName: string;
  initialQuery: string;
  initialPage: number;
  initialInventory: MyInventoryListResult;
}) {
  const router = useRouter();
  const [inventory, setInventory] =
    useState(initialInventory);
  const [search, setSearch] =
    useState(initialQuery);
  const [currentQuery, setCurrentQuery] =
    useState(initialQuery);
  const [currentPage, setCurrentPage] =
    useState(initialPage);
  const [loadingInventory, setLoadingInventory] =
    useState(false);
  const [submitting, setSubmitting] =
    useState(false);
  const [error, setError] = useState<
    string | null
  >(null);
  const [selected, setSelected] = useState<
    Record<string, SelectedItem>
  >({});

  const selectedItems = useMemo(
    () => Object.values(selected),
    [selected],
  );

  const loadInventory = async (
    page: number,
    q: string,
  ) => {
    setLoadingInventory(true);
    setError(null);

    const response = await fetch(
      `/api/me/inventory?${inventoryQuery(page, q)}`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      setError(
        (await parseBody(response))
          .message ??
          "Your inventory could not be loaded.",
      );
      setLoadingInventory(false);
      return;
    }

    setInventory(
      (await response.json()) as MyInventoryListResult,
    );
    setCurrentPage(page);
    setCurrentQuery(q);
    setLoadingInventory(false);
  };

  const toggleSelection = (
    item: MyInventoryItem,
  ) => {
    setSelected((current) => {
      if (current[item.id]) {
        const next = { ...current };
        delete next[item.id];
        return next;
      }

      return {
        ...current,
        [item.id]: {
          inventoryItemId: item.id,
          quantity: item.quantity,
          name: item.printing.canonical_cards.name,
          printing: `${item.printing.card_sets.code.toUpperCase()} #${item.printing.collector_number}`,
          finish: item.finish,
          condition: item.condition,
          imageUrl: artwork(item),
        },
      };
    });
  };

  const submit = async () => {
    setSubmitting(true);
    setError(null);

    const response = await fetch(
      "/api/me/offers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          listingId,
          items: selectedItems.map(
            (item) => ({
              inventoryItemId:
                item.inventoryItemId,
              quantity: item.quantity,
            }),
          ),
        }),
      },
    );

    const body = await parseBody(
      response,
    );

    if (!response.ok || !body.id) {
      setError(
        body.message ??
          "This offer could not be sent.",
      );
      setSubmitting(false);
      return;
    }

    router.push(
      `/account/offers?view=sent&createdOfferId=${encodeURIComponent(body.id)}`,
    );
  };

  const firstItem =
    inventory.pagination.total_count &&
    inventory.items.length
      ? (inventory.pagination.page - 1) *
          inventory.pagination.page_size +
        1
      : 0;
  const lastItem = firstItem
    ? firstItem + inventory.items.length - 1
    : 0;

  return (
    <section className={styles.panel}>
      <div className={styles.header}>
        <div>
          <p className={styles.kicker}>
            Your offer
          </p>
          <h2>Choose exact inventory you own</h2>
        </div>
        <div className={styles.selectionSummary}>
          <strong>
            {selectedItems.length} selected
          </strong>
          {selectedItems.length ? (
            <button
              className={styles.clearAction}
              type="button"
              onClick={() => setSelected({})}
              disabled={submitting}
            >
              Clear selection
            </button>
          ) : null}
        </div>
      </div>

      <form
        className={styles.searchForm}
        onSubmit={(event: FormEvent) => {
          event.preventDefault();
          void loadInventory(
            1,
            search.trim(),
          );
        }}
      >
        <label className={styles.searchField}>
          <span className={styles.srOnly}>
            Search your inventory
          </span>
          <input
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search your inventory…"
          />
        </label>
        <button
          className={styles.secondaryAction}
          disabled={loadingInventory}
        >
          {loadingInventory
            ? "Searching…"
            : "Search"}
        </button>
      </form>

      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}

      {selectedItems.length ? (
        <section className={styles.selectedPanel}>
          <h3>Selected cards</h3>
          <ul className={styles.selectedGrid}>
            {selectedItems.map((item) => (
              <li key={item.inventoryItemId}>
                <button
                  className={styles.selectedCard}
                  type="button"
                  onClick={() =>
                    setSelected((current) => {
                      const next = {
                        ...current,
                      };
                      delete next[
                        item.inventoryItemId
                      ];
                      return next;
                    })
                  }
                  disabled={submitting}
                >
                  <div className={styles.selectedArt}>
                    {item.imageUrl ? (
                      <Image
                        src={item.imageUrl}
                        alt={`${item.name} card`}
                        fill
                        sizes="88px"
                        unoptimized
                      />
                    ) : (
                      <span>—</span>
                    )}
                  </div>
                  <div>
                    <strong>{item.name}</strong>
                    <p>
                      {item.printing}
                    </p>
                    <p>
                      {pretty(item.condition)} · {pretty(item.finish)}
                      {item.quantity > 1
                        ? ` · ×${item.quantity}`
                        : ""}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {inventory.items.length ? (
        <>
          <ul className={styles.grid}>
            {inventory.items.map((item) => {
              const isSelected = Boolean(
                selected[item.id],
              );
              const image = artwork(item);
              return (
                <li key={item.id}>
                  <button
                    className={`${styles.card} ${isSelected ? styles.cardSelected : ""}`}
                    type="button"
                    onClick={() =>
                      toggleSelection(item)
                    }
                    disabled={submitting}
                    aria-pressed={isSelected}
                  >
                    <div className={styles.art}>
                      {image ? (
                        <Image
                          src={image}
                          alt={`${item.printing.canonical_cards.name} card`}
                          fill
                          sizes="(max-width: 42rem) 36vw, 180px"
                          unoptimized
                        />
                      ) : (
                        <span>
                          Card image unavailable
                        </span>
                      )}
                    </div>
                    <div className={styles.info}>
                      <div className={styles.titleRow}>
                        <strong>
                          {item.printing
                            .canonical_cards.name}
                        </strong>
                        <span className={styles.toggleState}>
                          {isSelected
                            ? "Selected"
                            : "Select"}
                        </span>
                      </div>
                      <p>
                        {item.printing.card_sets.name} · {item.printing.card_sets.code.toUpperCase()} #
                        {item.printing.collector_number}
                      </p>
                      <p>
                        {pretty(item.condition)} · {pretty(item.finish)}
                        {item.quantity > 1
                          ? ` · ×${item.quantity}`
                          : ""}
                      </p>
                      <p>
                        Collection · {item.collection?.name ?? "Unsorted"}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
          <nav
            className={styles.pagination}
            aria-label="Offer inventory pages"
          >
            <p>
              {firstItem
                ? `Showing ${firstItem}–${lastItem} of ${inventory.pagination.total_count}`
                : `Showing 0 of ${inventory.pagination.total_count}`}
            </p>
            <div>
              <button
                className={styles.paginationButton}
                type="button"
                onClick={() =>
                  void loadInventory(
                    currentPage - 1,
                    currentQuery,
                  )
                }
                disabled={
                  loadingInventory ||
                  currentPage <= 1
                }
              >
                ← Previous
              </button>
              <button
                className={styles.paginationButton}
                type="button"
                onClick={() =>
                  void loadInventory(
                    currentPage + 1,
                    currentQuery,
                  )
                }
                disabled={
                  loadingInventory ||
                  !inventory.pagination.has_more
                }
              >
                Next →
              </button>
            </div>
          </nav>
        </>
      ) : (
        <section className={styles.empty}>
          <h3>No eligible inventory found</h3>
          <p>
            Try another card name or add more exact inventory before sending an
            offer for {targetCardName}.
          </p>
        </section>
      )}

      <div className={styles.actions}>
        <Link
          className={styles.secondaryAction}
          href={targetCardHref}
        >
          Cancel
        </Link>
        <button
          className={styles.primaryAction}
          type="button"
          onClick={() => void submit()}
          disabled={
            submitting ||
            loadingInventory ||
            selectedItems.length === 0
          }
        >
          {submitting
            ? "Sending…"
            : "Send offer"}
        </button>
      </div>
    </section>
  );
}
