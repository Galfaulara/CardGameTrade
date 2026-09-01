"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useAddToCollection } from "../../../../components/add-to-collection/add-to-collection-provider";
import type {
  MyInventoryItem,
  MyInventoryListResult,
} from "../../../../features/account/inventory-types";
import type { MarketPrice } from "../../../../features/marketplace/api";
import { MarketPrices } from "../../../../features/marketplace/market-prices";
import styles from "./page.module.css";
import { CollectionActions } from "./collection-actions";
import { custodyStatusLabel } from "../../../../features/account/trade-types";
import { MessageContextAction } from "../../../../components/message-context-action/message-context-action";

type Status = "all" | "available" | "not_for_trade" | "reserved" | "in_trade";
type Condition =
  | "all"
  | "mint"
  | "near_mint"
  | "lightly_played"
  | "moderately_played"
  | "heavily_played"
  | "damaged";
type Filters = {
  game: string;
  page: number;
  q: string;
  status: Status;
  condition: Condition;
  collection: string;
};
type Collection = {
  id: string;
  game_id: string;
  name: string;
  visibility: string;
  _count: { inventory_items: number };
};
type PublicIdentity = {
  id: string;
  username: string | null;
  display_name: string | null;
};
type ActivityData = {
  summary: { interested: number; wantedBy: number; offers: number };
  collection: { name: string } | null;
  listing: {
    status: string;
    accepts_trade: boolean;
    accepts_cash: boolean;
  } | null;
  people: Array<{
    user: PublicIdentity;
    interest: { id: string; type: string; message: string | null } | null;
    publicWantIds: string[];
  }>;
  offers: {
    receivedOnListing: Array<{
      id: string;
      listingId: string;
      status: string;
      cashAmount: string;
      currencyCode: string;
      tradeItemCount: number;
      offerer:
        | (PublicIdentity & { kind: "user" })
        | { kind: "store"; id: string; name: string; slug: string }
        | null;
      transactionId: string | null;
    }>;
    inventoryOfferedElsewhere: Array<{
      offer_id: string;
      listing_offers_offer_items_offer_idTolisting_offers: { status: string };
    }>;
    wishlistOffersUsingInventory: Array<{
      wishlist_offer_id: string;
      wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers: {
        status: string;
      };
    }>;
    requestedInventoryRelations: Array<{
      wishlist_offer_id: string;
      wishlist_offers: { status: string };
    }>;
  };
  transactions: Array<{
    transactionItemId: string;
    direction: "incoming" | "outgoing" | "involved";
    counterpart: PublicIdentity | null;
    transaction: {
      id: string;
      status: string;
      type: string;
      acceptedOfferId: string | null;
      acceptedWishlistOfferId: string | null;
    };
    handoff: {
      id: string;
      status: string;
      store: { id: string; name: string; slug: string };
    } | null;
    custody: { id: string; custody_status: string } | null;
  }>;
};
const pretty = (value: string) => value.replaceAll("_", " ");
const cardHref = (item: MyInventoryItem) =>
  `/cards/${item.printing.canonical_cards.id}?printing=${item.printing.id}`;
const artwork = (item: MyInventoryItem) =>
  item.printing.image_large_uri ??
  item.printing.image_normal_uri ??
  item.printing.image_small_uri;
const statuses: [Status, string][] = [
  ["all", "All statuses"],
  ["available", "Available"],
  ["not_for_trade", "Not for trade"],
  ["reserved", "Reserved"],
  ["in_trade", "In trade"],
];
const conditions: [Condition, string][] = [
  ["all", "All conditions"],
  ["mint", "Mint"],
  ["near_mint", "Near mint"],
  ["lightly_played", "Lightly played"],
  ["moderately_played", "Moderately played"],
  ["heavily_played", "Heavily played"],
  ["damaged", "Damaged"],
];
const href = (filters: Filters) => {
  const query = new URLSearchParams({ page: String(filters.page) });
  if (filters.game) query.set("game", filters.game);
  if (filters.q) query.set("q", filters.q);
  if (filters.status !== "all") query.set("status", filters.status);
  if (filters.condition !== "all") query.set("condition", filters.condition);
  if (filters.collection !== "all") query.set("collection", filters.collection);
  const value = query.toString();
  return value === "page=1"
    ? "/account/inventory"
    : `/account/inventory?${value}`;
};
const parseBody = async (response: Response) => {
  try {
    return (await response.json()) as { message?: string };
  } catch {
    return {};
  }
};

function EditDialog({
  item,
  collections,
  onClose,
  onChanged,
}: {
  item: MyInventoryItem;
  collections: Collection[];
  onClose: () => void;
  onChanged: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [condition, setCondition] = useState(item.condition);
  const [quantity, setQuantity] = useState(String(item.quantity));
  const [signed, setSigned] = useState(item.is_signed);
  const [altered, setAltered] = useState(item.is_altered);
  const [acquiredAt, setAcquiredAt] = useState(
    item.acquired_at?.slice(0, 10) ?? "",
  );
  const [acquiredPrice, setAcquiredPrice] = useState(item.acquired_price ?? "");
  const [notes, setNotes] = useState(item.notes ?? "");
  const [collectionId, setCollectionId] = useState(item.collection_id ?? "");
  const [saving, setSaving] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !saving) onClose();
    };
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", key);
    };
  }, [onClose, saving]);
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setSaving(true);
    setError(null);
    const response = await fetch(
      `/api/me/inventory/${encodeURIComponent(item.id)}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          condition,
          quantity: Number(quantity),
          isSigned: signed,
          isAltered: altered,
          isGraded: item.is_graded,
          gradingCompany: item.grading_company,
          grade: item.grade,
          certificationNumber: item.certification_number,
          acquiredAt: acquiredAt || null,
          acquiredPrice: acquiredPrice ? Number(acquiredPrice) : null,
          notes: notes.trim() || null,
        }),
      },
    );
    if (!response.ok) {
      setError(
        (await parseBody(response)).message ??
          "This item could not be updated.",
      );
      setSaving(false);
      return;
    }
    if (collectionId !== (item.collection_id ?? "")) {
      const move = await fetch(
        `/api/me/inventory/${encodeURIComponent(item.id)}/collection`,
        {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ collectionId: collectionId || null }),
        },
      );
      if (!move.ok) {
        setError(
          (await parseBody(move)).message ?? "The card could not be moved.",
        );
        setSaving(false);
        return;
      }
    }
    onChanged();
  };
  const remove = async () => {
    setSaving(true);
    setError(null);
    const response = await fetch(
      `/api/me/inventory/${encodeURIComponent(item.id)}/remove`,
      { method: "POST" },
    );
    if (!response.ok) {
      setError(
        (await parseBody(response)).message ??
          "This item could not be removed.",
      );
      setSaving(false);
      return;
    }
    onChanged();
  };
  return (
    <div className={styles.backdrop}>
      <section
        className={styles.editDialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="edit-title"
      >
        <header>
          <div>
            <p className={styles.kicker}>Inventory details</p>
            <h2 id="edit-title">{item.printing.canonical_cards.name}</h2>
            <span>
              {item.printing.card_sets.code.toUpperCase()} #
              {item.printing.collector_number} · {pretty(item.finish)}
            </span>
          </div>
          <button
            ref={closeRef}
            className={styles.iconButton}
            type="button"
            onClick={onClose}
            aria-label="Close edit dialog"
          >
            ×
          </button>
        </header>
        <form onSubmit={submit} className={styles.editForm}>
          <div className={styles.editFields}>
            <label>
              <span>Collection</span>
              <select
                value={collectionId}
                onChange={(event) => setCollectionId(event.target.value)}
              >
                <option value="">No collection</option>
                {collections
                  .filter((value) => value.game_id === item.game_id)
                  .map((value) => (
                    <option key={value.id} value={value.id}>
                      {value.name}
                    </option>
                  ))}
              </select>
            </label>
            <label>
              <span>Condition</span>
              <select
                value={condition}
                onChange={(event) => setCondition(event.target.value)}
              >
                {conditions.slice(1).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span>Quantity</span>
              <input
                inputMode="numeric"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
            </label>
            <label>
              <span>Acquired date</span>
              <input
                type="date"
                value={acquiredAt}
                onChange={(event) => setAcquiredAt(event.target.value)}
              />
            </label>
            <label>
              <span>Acquisition price</span>
              <input
                inputMode="decimal"
                value={acquiredPrice}
                onChange={(event) => setAcquiredPrice(event.target.value)}
              />
            </label>
          </div>
          <div className={styles.checks}>
            <label>
              <input
                type="checkbox"
                checked={signed}
                onChange={(event) => setSigned(event.target.checked)}
              />{" "}
              Signed
            </label>
            <label>
              <input
                type="checkbox"
                checked={altered}
                onChange={(event) => setAltered(event.target.checked)}
              />{" "}
              Altered
            </label>
          </div>
          <label className={styles.notes}>
            <span>Private notes</span>
            <textarea
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
          </label>
          {error && (
            <p className={styles.error} role="alert">
              {error}
            </p>
          )}
          <div className={styles.dialogActions}>
            <button
              className={styles.secondaryButton}
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
            <button className={styles.primaryButton} disabled={saving}>
              {saving ? "Saving…" : "Save changes"}
            </button>
          </div>
        </form>
        <div className={styles.removeBox}>
          <div>
            <strong>Remove from current inventory</strong>
            <p>The historical Inventory record will be preserved.</p>
          </div>
          {confirm ? (
            <div className={styles.dialogActions}>
              <button
                className={styles.secondaryButton}
                type="button"
                onClick={() => setConfirm(false)}
              >
                Keep card
              </button>
              <button
                className={styles.dangerButton}
                type="button"
                onClick={remove}
                disabled={saving}
              >
                Confirm removal
              </button>
            </div>
          ) : (
            <button
              className={styles.dangerButton}
              type="button"
              onClick={() => setConfirm(true)}
            >
              Remove
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

function ListForTradeDialog({
  item,
  onClose,
  onChanged,
}: {
  item: MyInventoryItem;
  onClose: () => void;
  onChanged: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [marketPrices, setMarketPrices] = useState<MarketPrice[]>([]);

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !saving) onClose();
    };
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", key);
    };
  }, [onClose, saving]);

  useEffect(() => {
    void fetch("/api/market-prices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: [{ printingId: item.printing.id, finish: item.finish }],
      }),
    })
      .then((response) =>
        response.ok ? (response.json() as Promise<MarketPrice[]>) : [],
      )
      .then(setMarketPrices);
  }, [item.finish, item.printing.id]);

  const submit = async () => {
    setSaving(true);
    setError(null);
    const response = await fetch("/api/me/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        inventoryItemId: item.id,
      }),
    });

    if (!response.ok) {
      setError(
        (await parseBody(response)).message ??
          "This card could not be listed for trade.",
      );
      setSaving(false);
      return;
    }

    onChanged();
  };

  return (
    <div className={styles.backdrop}>
      <section
        className={styles.editDialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="trade-listing-title"
      >
        <header>
          <div>
            <p className={styles.kicker}>List for trade</p>
            <h2 id="trade-listing-title">
              {item.printing.canonical_cards.name}
            </h2>
            <span>
              {item.printing.card_sets.code.toUpperCase()} #
              {item.printing.collector_number} · {pretty(item.finish)}
            </span>
          </div>
          <button
            ref={closeRef}
            className={styles.iconButton}
            type="button"
            onClick={onClose}
            aria-label="Close listing dialog"
          >
            ×
          </button>
        </header>
        <div className={styles.tradeDialogBody}>
          <div className={styles.tradeDialogArt}>
            {artwork(item) ? (
              <Image
                src={artwork(item)!}
                alt={`${item.printing.canonical_cards.name} card`}
                fill
                sizes="(max-width: 36rem) 42vw, 220px"
                unoptimized
              />
            ) : (
              <span>Card image unavailable</span>
            )}
          </div>
          <div className={styles.tradeDialogCopy}>
            <MarketPrices
              prices={marketPrices}
              title="Market reference"
              compact
            />
            <p>
              This card will be visible to other collectors for trade offers.
            </p>
            <p>
              {pretty(item.condition)} · {pretty(item.finish)}
              {item.quantity > 1 ? ` · ×${item.quantity}` : ""}
            </p>
            <p>
              {item.collection?.name
                ? `Collection · ${item.collection.name}`
                : "Collection · Unsorted"}
            </p>
          </div>
        </div>
        {error && (
          <p className={styles.error} role="alert">
            {error}
          </p>
        )}
        <div className={styles.dialogActions}>
          <button
            className={styles.secondaryButton}
            type="button"
            onClick={onClose}
            disabled={saving}
          >
            Cancel
          </button>
          <button
            className={styles.primaryButton}
            type="button"
            onClick={() => void submit()}
            disabled={saving}
          >
            {saving ? "Listing…" : "List for trade"}
          </button>
        </div>
      </section>
    </div>
  );
}

function ActivityDialog({
  item,
  onClose,
}: {
  item: MyInventoryItem;
  onClose: () => void;
}) {
  const [data, setData] = useState<ActivityData | null>(null),
    [error, setError] = useState<string | null>(null);
  useEffect(() => {
    void fetch(`/api/me/inventory/${item.id}/activity`)
      .then(async (response) => {
        if (!response.ok) throw new Error((await parseBody(response)).message);
        setData(await response.json());
      })
      .catch((value) =>
        setError(value.message ?? "Activity could not be loaded."),
      );
  }, [item.id]);
  return (
    <div className={styles.backdrop}>
      <section
        className={styles.editDialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="activity-title"
      >
        <header>
          <div>
            <p className={styles.kicker}>Exact owned card</p>
            <h2 id="activity-title">
              Card activity · {item.printing.canonical_cards.name}
            </h2>
          </div>
          <button
            className={styles.iconButton}
            onClick={onClose}
            aria-label="Close activity"
          >
            ×
          </button>
        </header>
        {error ? (
          <p className={styles.error}>{error}</p>
        ) : !data ? (
          <p>Loading activity…</p>
        ) : (
          <div className={styles.tradeDialogCopy}>
            <div className={styles.tags}>
              <span>{data.summary.interested} Interested</span>
              <span>Wanted by {data.summary.wantedBy}</span>
              <span>{data.summary.offers} Offers</span>
            </div>
            <section>
              <h3>Interest & demand</h3>
              {data.people.length ? (
                data.people.map((person: any) => (
                  <article key={person.user.id}>
                    <strong>
                      {person.user.display_name ??
                        person.user.username ??
                        "Collector"}
                    </strong>
                    {person.user.username ? (
                      <span> @{person.user.username}</span>
                    ) : null}
                    <p>
                      {person.interest
                        ? `Interested: ${pretty(person.interest.type)}`
                        : ""}
                      {person.publicWantIds.length
                        ? `${person.interest ? " · " : ""}In public Wishlist`
                        : ""}
                    </p>
                    {person.interest?.message ? (
                      <blockquote>{person.interest.message}</blockquote>
                    ) : null}
                    {person.interest ? <MessageContextAction contextType="inventory_interest" contextId={person.interest.id} /> : null}
                  </article>
                ))
              ) : (
                <p>No collector activity yet.</p>
              )}
            </section>
            <section>
              <h3>Listing</h3>
              <p>
                {data.listing
                  ? `${pretty(data.listing.status)} · ${data.listing.accepts_trade ? "Trade" : ""}${data.listing.accepts_cash ? `${data.listing.accepts_trade ? " or " : ""}sale` : ""}`
                  : "No Listing"}
              </p>
            </section>
            <section>
              <h3>Offers</h3>
              {data.offers.receivedOnListing.length ? (
                <div className={styles.activityList}>
                  {data.offers.receivedOnListing.map((offer) => {
                    const offerer = offer.offerer;
                    const offererName =
                      offerer?.kind === "store"
                        ? offerer.name
                        : (offerer?.display_name ??
                          offerer?.username ??
                          "Collector");
                    return (
                      <article key={offer.id}>
                        <div className={styles.tags}>
                          <span>Received on this card</span>
                          <span>{pretty(offer.status)}</span>
                        </div>
                        <strong>Offer from {offererName}</strong>
                        <p>
                          {Number(offer.cashAmount) > 0
                            ? `${offer.cashAmount} ${offer.currencyCode}`
                            : "No cash component"}
                          {offer.tradeItemCount
                            ? ` · ${offer.tradeItemCount} offered card${offer.tradeItemCount === 1 ? "" : "s"}`
                            : ""}
                        </p>
                        {offer.transactionId ? (
                          <p>Accepted into trade {offer.transactionId}</p>
                        ) : null}
                        <MessageContextAction contextType="listing_offer" contextId={offer.id} />
                      </article>
                    );
                  })}
                </div>
              ) : (
                <p>No Offers received against this card&apos;s Listing.</p>
              )}
              <div className={styles.tags}>
                {data.offers.inventoryOfferedElsewhere.length ? (
                  <span>
                    My card included in an offer ×
                    {data.offers.inventoryOfferedElsewhere.length}
                  </span>
                ) : null}
                {data.offers.wishlistOffersUsingInventory.length ? (
                  <span>
                    My card included in a Wishlist Offer ×
                    {data.offers.wishlistOffersUsingInventory.length}
                  </span>
                ) : null}
                {data.offers.requestedInventoryRelations.length ? (
                  <span>
                    My card requested ×
                    {data.offers.requestedInventoryRelations.length}
                  </span>
                ) : null}
              </div>
            </section>
            <section>
              <h3>Trade / transaction</h3>
              {data.transactions.length ? (
                <div className={styles.activityList}>
                  {data.transactions.map((relation) => (
                    <article key={relation.transactionItemId}>
                      <div className={styles.tags}>
                        <span>{pretty(relation.transaction.status)}</span>
                        <span>{pretty(relation.direction)}</span>
                      </div>
                      <strong>
                        {relation.direction === "outgoing"
                          ? "Outgoing to"
                          : relation.direction === "incoming"
                            ? "Incoming from"
                            : "Trade with"}{" "}
                        {relation.counterpart?.display_name ??
                          relation.counterpart?.username ??
                          "collector"}
                      </strong>
                      {relation.handoff ? (
                        <p>
                          Store: {relation.handoff.store.name} · Handoff:{" "}
                          {pretty(relation.handoff.status)}
                        </p>
                      ) : (
                        <p>No store handoff</p>
                      )}
                      <p>
                        This card:{" "}
                        {relation.custody
                          ? custodyStatusLabel(
                              relation.custody.custody_status as any,
                            )
                          : "No custody record"}
                      </p>
                      <Link href="/account/trades">View trade</Link>
                      <MessageContextAction contextType="transaction" contextId={relation.transaction.id} />
                    </article>
                  ))}
                </div>
              ) : (
                <p>No active trade involving this card.</p>
              )}
            </section>
            <section>
              <h3>Collection</h3>
              <p>{data.collection?.name ?? "No Collection"}</p>
            </section>
          </div>
        )}
      </section>
    </div>
  );
}

export function InventoryManager({
  initialData,
  initialFilters,
  collections,
}: {
  initialData: MyInventoryListResult;
  initialFilters: Filters;
  collections: Collection[];
}) {
  const router = useRouter();
  const { openAddToCollection } = useAddToCollection();
  const [pending, startTransition] = useTransition();
  const [editing, setEditing] = useState<MyInventoryItem | null>(null);
  const [listingItem, setListingItem] = useState<MyInventoryItem | null>(null);
  const [activityItem, setActivityItem] = useState<MyInventoryItem | null>(
    null,
  );
  const [moveOpen, setMoveOpen] = useState(false),
    [moveBusy, setMoveBusy] = useState(false),
    [moveIds, setMoveIds] = useState<string[]>([]),
    [moveDestination, setMoveDestination] = useState("");
  const [q, setQ] = useState(initialFilters.q);
  const [managerError, setError] = useState<string | null>(null);
  const [status, setStatus] = useState(initialFilters.status);
  const [condition, setCondition] = useState(initialFilters.condition);
  const filterDirty =
    q.trim() !== initialFilters.q ||
    status !== initialFilters.status ||
    condition !== initialFilters.condition;
  const count = initialData.summary.total_card_quantity,
    entries = initialData.summary.total_inventory_row_count,
    hasFilters = Boolean(
      initialFilters.q ||
      initialFilters.status !== "all" ||
      initialFilters.condition !== "all" ||
      initialFilters.collection !== "all",
    ),
    first = initialData.items.length
      ? (initialFilters.page - 1) * initialData.pagination.page_size + 1
      : 0,
    last = first + initialData.items.length - 1;
  const navigate = (value: Filters) =>
    startTransition(() => router.push(href(value)));
  const changed = () => {
    setEditing(null);
    setListingItem(null);
    router.refresh();
  };
  const openAdd = () => openAddToCollection({ onAdded: changed });
  const sourceCollection = collections.find(
    (value) => value.id === initialFilters.collection,
  );
  const moveCards = async () => {
    if (!sourceCollection || !moveIds.length) return;
    setMoveBusy(true);
    setError(null);
    const response = await fetch(
      `/api/me/collections/${sourceCollection.id}/items/move`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          gameSlug: initialFilters.game,
          destinationCollectionId: moveDestination || null,
          inventoryItemIds: moveIds,
        }),
      },
    );
    if (response.ok) {
      setMoveOpen(false);
      setMoveIds([]);
      router.refresh();
    } else
      setError(
        (await parseBody(response)).message ?? "Cards could not be moved.",
      );
    setMoveBusy(false);
  };
  return (
    <div className={styles.page}>
      <section className={styles.inventoryHeader}>
        <div>
          <p className={styles.kicker}>Your cards</p>
          <h2>
            {count.toLocaleString()} card{count === 1 ? "" : "s"}
            {entries !== count ? (
              <span> · {entries.toLocaleString()} entries</span>
            ) : null}
          </h2>
        </div>
        <div className={styles.headerActions}>
          <CollectionActions
            gameSlug={initialFilters.game}
            collectionId={
              collections.some(
                (value) => value.id === initialFilters.collection,
              )
                ? initialFilters.collection
                : undefined
            }
          />
          {sourceCollection ? (
            <button
              className={styles.secondaryButton}
              type="button"
              onClick={() => {
                setMoveIds(initialData.items.map((item) => item.id));
                setMoveOpen(true);
              }}
            >
              Move cards
            </button>
          ) : null}
          <Link
            className={styles.secondaryButton}
            href={`/account/inventory/bulk-add${initialFilters.game ? `?game=${encodeURIComponent(initialFilters.game)}` : ""}`}
          >
            Bulk add cards
          </Link>
          <button
            className={styles.primaryButton}
            type="button"
            onClick={openAdd}
          >
            + Add cards
          </button>
        </div>
      </section>
      {managerError ? (
        <p className={styles.error} role="alert">
          {managerError}
        </p>
      ) : null}
      <nav className={styles.binders} aria-label="Collections and binders">
        <Link
          href={href({ ...initialFilters, page: 1, collection: "all" })}
          aria-current={
            initialFilters.collection === "all" ? "page" : undefined
          }
        >
          All cards
        </Link>
        <Link
          href={href({ ...initialFilters, page: 1, collection: "unassigned" })}
          aria-current={
            initialFilters.collection === "unassigned" ? "page" : undefined
          }
        >
          Unsorted
        </Link>
        {collections.map((value) => (
          <Link
            key={value.id}
            href={href({ ...initialFilters, page: 1, collection: value.id })}
            aria-current={
              initialFilters.collection === value.id ? "page" : undefined
            }
          >
            {value.name}
          </Link>
        ))}
      </nav>
      <form
        className={styles.filters}
        onSubmit={(event) => {
          event.preventDefault();
          navigate({
            ...initialFilters,
            page: 1,
            q: q.trim(),
            status,
            condition,
          });
        }}
      >
        <label className={styles.searchField}>
          <span className={styles.srOnly}>Search your cards</span>
          <input
            value={q}
            onChange={(event) => setQ(event.target.value)}
            placeholder="Search your cards…"
          />
        </label>
        <label>
          <span className={styles.srOnly}>Status</span>
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value as Status)}
          >
            {statuses.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className={styles.srOnly}>Condition</span>
          <select
            value={condition}
            onChange={(event) => setCondition(event.target.value as Condition)}
          >
            {conditions.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <button
          className={styles.secondaryButton}
          disabled={pending || !filterDirty}
          aria-busy={pending}
        >
          {pending ? "Applying…" : "Apply"}
        </button>
        {hasFilters && (
          <button
            className={styles.textButton}
            type="button"
            onClick={() => router.push("/account/inventory")}
          >
            Clear
          </button>
        )}
      </form>
      {entries === 0 ? (
        <section className={styles.empty}>
          <h2>Your collection starts here</h2>
          <p>
            Add the physical cards you own, then organize them into Collections
            and binders whenever you like.
          </p>
          <button className={styles.primaryButton} onClick={openAdd}>
            Add your first card
          </button>
        </section>
      ) : initialData.items.length ? (
        <>
          <ul className={styles.grid}>
            {initialData.items.map((item) => (
              <li key={item.id}>
                <article className={styles.card}>
                  <Link className={styles.art} href={cardHref(item)}>
                    {artwork(item) ? (
                      <Image
                        src={artwork(item)!}
                        alt={`${item.printing.canonical_cards.name} card`}
                        fill
                        sizes="(max-width: 40rem) 46vw, (max-width: 60rem) 30vw, 190px"
                        unoptimized
                      />
                    ) : (
                      <span>Card image unavailable</span>
                    )}
                  </Link>
                  <div className={styles.cardInfo}>
                    <div className={styles.nameRow}>
                      <h3>
                        <Link href={cardHref(item)}>
                          {item.printing.canonical_cards.name}
                        </Link>
                      </h3>
                      {item.active_listing && (
                        <span className={styles.listed}>Listed</span>
                      )}
                    </div>
                    <p className={styles.printing}>
                      {item.printing.card_sets.code.toUpperCase()} · #
                      {item.printing.collector_number}
                    </p>
                    <p className={styles.physical}>
                      {pretty(item.condition)} · {pretty(item.finish)}
                      {item.quantity > 1 ? ` · ×${item.quantity}` : ""}
                    </p>
                    {item.relationship_summary &&
                    (item.relationship_summary.interested ||
                      item.relationship_summary.wanted_by ||
                      item.relationship_summary.offers) ? (
                      <div className={styles.tags}>
                        {item.relationship_summary.interested ? (
                          <span>
                            {item.relationship_summary.interested} Interested
                          </span>
                        ) : null}
                        {item.relationship_summary.wanted_by ? (
                          <span>
                            Wanted by {item.relationship_summary.wanted_by}
                          </span>
                        ) : null}
                        {item.relationship_summary.offers ? (
                          <span>
                            {item.relationship_summary.offers} Offer
                            {item.relationship_summary.offers === 1 ? "" : "s"}
                          </span>
                        ) : null}
                      </div>
                    ) : null}
                    <div className={styles.locationRow}>
                      <span className={styles.location}>
                        ▱ {item.collection?.name ?? "Unsorted"}
                      </span>
                      <div className={styles.cardActions}>
                        {item.status === "available" && !item.active_listing ? (
                          <button
                            className={styles.tradeButton}
                            type="button"
                            onClick={() => setListingItem(item)}
                          >
                            List for trade
                          </button>
                        ) : null}
                        <button
                          className={styles.editButton}
                          type="button"
                          onClick={() => setEditing(item)}
                        >
                          Edit
                        </button>
                        <button
                          className={styles.editButton}
                          type="button"
                          onClick={() => setActivityItem(item)}
                        >
                          Activity
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <nav className={styles.pagination} aria-label="Inventory pages">
            <p>
              Showing {first}–{last} of {initialData.pagination.total_count}
            </p>
            <div>
              {initialFilters.page > 1 ? (
                <Link
                  href={href({
                    ...initialFilters,
                    page: initialFilters.page - 1,
                  })}
                >
                  ← Previous
                </Link>
              ) : (
                <span />
              )}
              {initialData.pagination.has_more ? (
                <Link
                  href={href({
                    ...initialFilters,
                    page: initialFilters.page + 1,
                  })}
                >
                  Next →
                </Link>
              ) : (
                <span />
              )}
            </div>
          </nav>
        </>
      ) : (
        <section className={styles.empty}>
          <h2>No cards found</h2>
          <p>Try another Collection, card name, status, or condition.</p>
        </section>
      )}
      {editing && (
        <EditDialog
          item={editing}
          collections={collections}
          onClose={() => setEditing(null)}
          onChanged={changed}
        />
      )}
      {activityItem && (
        <ActivityDialog
          item={activityItem}
          onClose={() => setActivityItem(null)}
        />
      )}
      {moveOpen && sourceCollection ? (
        <div className={styles.backdrop}>
          <section
            className={styles.editDialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="move-title"
          >
            <header>
              <div>
                <p className={styles.kicker}>From {sourceCollection.name}</p>
                <h2 id="move-title">Move cards</h2>
              </div>
              <button
                className={styles.iconButton}
                onClick={() => setMoveOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </header>
            <label className={styles.notes}>
              <span>Move to</span>
              <select
                value={moveDestination}
                onChange={(event) => setMoveDestination(event.target.value)}
              >
                <option value="">No collection</option>
                {collections
                  .filter(
                    (value) =>
                      value.id !== sourceCollection.id &&
                      value.game_id === sourceCollection.game_id,
                  )
                  .map((value) => (
                    <option key={value.id} value={value.id}>
                      {value.name}
                    </option>
                  ))}
              </select>
            </label>
            <div className={styles.dialogActions}>
              <button
                className={styles.secondaryButton}
                type="button"
                onClick={() =>
                  setMoveIds(initialData.items.map((item) => item.id))
                }
              >
                Select all
              </button>
              <button
                className={styles.secondaryButton}
                type="button"
                onClick={() => setMoveIds([])}
              >
                Clear
              </button>
            </div>
            <ul className={styles.items}>
              {initialData.items.map((item) => (
                <li key={item.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={moveIds.includes(item.id)}
                      onChange={(event) =>
                        setMoveIds((ids) =>
                          event.target.checked
                            ? [...ids, item.id]
                            : ids.filter((id) => id !== item.id),
                        )
                      }
                    />
                    {item.printing.canonical_cards.name} ×{item.quantity}
                  </label>
                </li>
              ))}
            </ul>
            <div className={styles.dialogActions}>
              <button
                className={styles.primaryButton}
                disabled={moveBusy || !moveIds.length}
                onClick={() => void moveCards()}
              >
                {moveBusy ? "Moving…" : `Move ${moveIds.length} cards`}
              </button>
            </div>
          </section>
        </div>
      ) : null}
      {listingItem && (
        <ListForTradeDialog
          item={listingItem}
          onClose={() => setListingItem(null)}
          onChanged={changed}
        />
      )}
    </div>
  );
}
