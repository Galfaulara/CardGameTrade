"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type {
  CatalogCard,
  CatalogPrinting,
  CatalogPrintingFinish,
  CatalogSearchResult,
} from "../../features/marketplace/api";
import type { MyInventoryItem } from "../../features/account/inventory-types";
import { useActiveGame } from "../../features/games/active-game-provider";
import { groupPrintingVersions, type VersionFamily } from "../../features/catalog/version-families";
import { authoritativeCollectionGameSlug, collectionOptionsHref } from "../../features/games/inventory-game";
import styles from "./add-to-collection-modal.module.css";

type CollectionOption = { id: string; name: string };
type CardContext = {
  canonicalCardId: string;
  cardName: string;
  printingId?: string;
  gameId?: string;
};
type PickerOrigin = "initial" | "search" | "change" | null;
export type AddToCollectionModalProps = {
  open: boolean;
  onClose: () => void;
  initialCard?: CardContext;
  onAdded?: (item: MyInventoryItem) => void;
};

const conditions = [
  "mint",
  "near_mint",
  "lightly_played",
  "moderately_played",
  "heavily_played",
  "damaged",
];
const pretty = (value: string) => value.replaceAll("_", " ");
const responseBody = async (response: Response) => {
  try {
    return (await response.json()) as { message?: string };
  } catch {
    return {};
  }
};
const rankCards = (cards: CatalogCard[], query: string) => {
  const needle = query.trim().toLowerCase();
  if (!needle) return cards;
  const score = (name: string) => {
    const value = name.toLowerCase();
    if (value === needle) return 0;
    if (value.startsWith(needle)) return 1;
    if (value.split(/\s+/).some((word) => word.startsWith(needle))) return 2;
    if (value.includes(needle)) return 3;
    return 4;
  };
  return [...cards].sort(
    (a, b) => score(a.name) - score(b.name) || a.name.localeCompare(b.name),
  );
};

export function AddToCollectionModal({
  open,
  onClose,
  initialCard,
  onAdded,
}: AddToCollectionModalProps) {
  const { games, activeGameSlug } = useActiveGame();
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const initialCanonicalCardId = initialCard?.canonicalCardId,
    initialCardName = initialCard?.cardName,
    initialPrintingId = initialCard?.printingId,
    initialGameSlug = initialCard?.gameId
      ? games.find((game) => game.id === initialCard.gameId)?.slug
      : undefined;
  const collectionGameSlug = authoritativeCollectionGameSlug(
    games,
    initialCard?.gameId,
    activeGameSlug,
  );
  const collectionOptionsUrl = collectionOptionsHref(collectionGameSlug);
  const [query, setQuery] = useState("");
  const [cards, setCards] = useState<CatalogCard[]>([]);
  const [card, setCard] = useState<CatalogCard | null>(null);
  const [printings, setPrintings] = useState<CatalogPrinting[]>([]);
  const [printing, setPrinting] = useState<CatalogPrinting | null>(null);
  const [pendingFamily, setPendingFamily] = useState<VersionFamily | null>(null);
  const [pickerOrigin, setPickerOrigin] = useState<PickerOrigin>(null);
  const [finishes, setFinishes] = useState<CatalogPrintingFinish[]>([]);
  const [collections, setCollections] = useState<CollectionOption[]>([]);
  const [finish, setFinish] = useState("");
  const [condition, setCondition] = useState("near_mint");
  const [quantity, setQuantity] = useState("1");
  const [collectionId, setCollectionId] = useState("");
  const [signed, setSigned] = useState(false);
  const [altered, setAltered] = useState(false);
  const [acquiredAt, setAcquiredAt] = useState("");
  const [acquiredPrice, setAcquiredPrice] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const savingRef = useRef(saving);
  savingRef.current = saving;
  const ranked = useMemo(() => rankCards(cards, query), [cards, query]);
  const versionFamilies = useMemo(() => groupPrintingVersions(printings), [printings]);

  const loadFinishes = useCallback(
    async (value: CatalogPrinting, retainedFinish?: string) => {
      setPrinting(value);
      setPendingFamily(null);
      setPickerOrigin(null);
      setFinishes([]);
      setFinish("");
      setError(null);
      const response = await fetch(
        `/api/catalog/printings/${encodeURIComponent(value.id)}/finishes`,
      );
      if (!response.ok) {
        setError("Finishes are unavailable.");
        return;
      }
      const options = (await response.json()) as CatalogPrintingFinish[];
      setFinishes(options);
      if (
        retainedFinish &&
        options.some((option) => option.finish === retainedFinish)
      )
        setFinish(retainedFinish);
      else if (options.length === 1) setFinish(options[0]!.finish);
    },
    [],
  );
  const loadPrintings = useCallback(
    async (canonicalCardId: string, preferred?: string) => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `/api/catalog/cards/${encodeURIComponent(canonicalCardId)}/printings`,
        );
        if (!response.ok) throw new Error("Printings are unavailable.");
        const values = (await response.json()) as CatalogPrinting[];
        setPrintings(values);
        const selected = preferred
          ? (values.find((value) => value.id === preferred) ?? null)
          : null;
        setPrinting(selected);
        if (selected) await loadFinishes(selected);
      } catch (reason) {
        setError(
          reason instanceof Error
            ? reason.message
            : "Printings are unavailable.",
        );
      } finally {
        setLoading(false);
      }
    },
    [loadFinishes],
  );

  useEffect(() => {
    if (!open) return;
    previousFocus.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    setError(null);
    setSuccess(null);
    setCards([]);
    setPrintings([]);
    setPrinting(null);
    setPendingFamily(null);
    setPickerOrigin(null);
    setFinishes([]);
    setFinish("");
    setCollectionId("");
    setCondition("near_mint");
    setQuantity("1");
    setSigned(false);
    setAltered(false);
    setAcquiredAt("");
    setAcquiredPrice("");
    setNotes("");
    setCollections([]);
    if (!collectionOptionsUrl) {
      setError("Collections are unavailable because this card's game could not be resolved.");
    } else fetch(collectionOptionsUrl)
      .then(async (response) => {
        if (response.ok)
          setCollections((await response.json()) as CollectionOption[]);
        else setError("Collections are unavailable for this game.");
      })
      .catch(() => setError("Collections are unavailable for this game."));
    if (initialCanonicalCardId && initialCardName) {
      const value = {
        id: initialCanonicalCardId,
        name: initialCardName,
        game_id: "",
        type_line: null,
      };
      setCard(value);
      setQuery(initialCardName);
      setPickerOrigin(initialPrintingId ? null : "initial");
      void loadPrintings(initialCanonicalCardId, initialPrintingId);
    } else {
      setCard(null);
      setQuery("");
    }
    queueMicrotask(() => closeRef.current?.focus());
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !savingRef.current) onCloseRef.current();
    };
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", key);
      previousFocus.current?.focus();
    };
  }, [
    open,
    initialCanonicalCardId,
    initialCardName,
    initialPrintingId,
    collectionGameSlug,
    collectionOptionsUrl,
    loadPrintings,
  ]);

  if (!open) return null;
  const search = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setCard(null);
    setPrinting(null);
    setPrintings([]);
    try {
      const response = await fetch(
        `/api/catalog/search?q=${encodeURIComponent(query)}&page=1${initialGameSlug ?? activeGameSlug ? `&game=${encodeURIComponent(initialGameSlug ?? activeGameSlug!)}` : ""}`,
      );
      if (!response.ok) throw new Error("Catalog search is unavailable.");
      const result = (await response.json()) as CatalogSearchResult;
      setCards(result.items);
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "Catalog search is unavailable.",
      );
    } finally {
      setLoading(false);
    }
  };
  const chooseCard = (value: CatalogCard) => {
    setCard(value);
    setPickerOrigin("search");
    void loadPrintings(value.id);
  };
  const canGoBack = pickerOrigin === "change" || pickerOrigin === "search";
  const goBack = () => {
    setError(null);
    if (pickerOrigin === "change") {
      setPickerOrigin(null);
      return;
    }
    if (pickerOrigin === "search" && card && !initialCard) {
      setCard(null);
      setPrintings([]);
      setPickerOrigin(null);
    }
  };
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    if (!printing) {
      setError("Choose the exact printing you own.");
      return;
    }
    if (!finish) {
      setError("Choose the finish you own.");
      return;
    }
    const amount = Number(quantity);
    if (!Number.isInteger(amount) || amount < 1) {
      setError("Quantity must be a whole number greater than zero.");
      return;
    }
    setSaving(true);
    try {
      const response = await fetch("/api/me/inventory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          printingId: printing.id,
          finish,
          condition,
          quantity: amount,
          collectionId: collectionId || null,
          isSigned: signed,
          isAltered: altered,
          isGraded: false,
          gradingCompany: null,
          grade: null,
          certificationNumber: null,
          acquiredAt: acquiredAt || null,
          acquiredPrice: acquiredPrice ? Number(acquiredPrice) : null,
          notes: notes.trim() || null,
        }),
      });
      if (!response.ok) {
        const body = await responseBody(response);
        throw new Error(body.message ?? "This card could not be added.");
      }
      const item = (await response.json()) as MyInventoryItem;
      setSuccess(
        `${item.printing.canonical_cards.name} was added to ${item.collection?.name ?? "Unsorted"}.`,
      );
      onAdded?.(item);
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "This card could not be added.",
      );
    } finally {
      setSaving(false);
    }
  };
  return createPortal(
    <div
      className={styles.backdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !saving) onClose();
      }}
    >
      <section
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-card-title"
      >
        <header className={styles.header}>
          <div className={styles.headerLead}>
            {canGoBack && (
              <button className={styles.back} type="button" onClick={goBack}>
                {pickerOrigin === "change"
                  ? "← Back to details"
                  : "← Back to search"}
              </button>
            )}
            <div>
              <p className={styles.eyebrow}>Your physical collection</p>
              <h2 id="add-card-title">Add to collection</h2>
            </div>
          </div>
          <button
            ref={closeRef}
            className={styles.close}
            type="button"
            onClick={onClose}
            aria-label="Close add card dialog"
          >
            ×
          </button>
        </header>
        <div className={styles.content}>
          {success ? (
            <>
              <p className={styles.success} role="status">
                {success}
              </p>
              <div className={styles.actions}>
                <button
                  className={styles.primary}
                  type="button"
                  onClick={onClose}
                >
                  Done
                </button>
              </div>
            </>
          ) : (
            <>
              {!initialCard && !card && (
                <form className={styles.search} onSubmit={search}>
                  <label className={styles.field}>
                    <span>Search card</span>
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      autoFocus
                      placeholder="Card name"
                    />
                  </label>
                  <button className={styles.primary} disabled={loading} aria-busy={loading}>
                    {loading ? "Searching…" : "Search"}
                  </button>
                </form>
              )}
              {ranked.length > 0 && !card && (
                <section className={styles.section}>
                  <div className={styles.sectionHeader}>
                    <h3>Choose the card</h3>
                    <span>{ranked.length} results</span>
                  </div>
                  <ul className={styles.choices}>
                    {ranked.map((value) => (
                      <li key={value.id}>
                        <button
                          className={styles.choice}
                          type="button"
                          onClick={() => chooseCard(value)}
                        >
                          <strong>{value.name}</strong>
                          <span>{value.type_line}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {card && pickerOrigin && (
                <section className={styles.section}>
                  <div className={styles.sectionHeader}>
                    <h3>Choose the exact printing</h3>
                    <span>
                      {loading ? "Loading…" : `${versionFamilies.length} versions`}
                    </span>
                  </div>
                  <ul className={styles.choices}>
                    {versionFamilies.map((family) => {
                      const value = family.representative;
                      return <li key={family.key}>
                        <button
                          className={styles.choice}
                          type="button"
                          onClick={() => {
                            if (family.printings.length === 1) void loadFinishes(value, finish);
                            else setPendingFamily(family);
                          }}
                        >
                          <div className={styles.thumb}>
                            {value.image_normal_uri || value.image_small_uri ? (
                              <Image
                                src={
                                  value.image_normal_uri ??
                                  value.image_small_uri!
                                }
                                alt=""
                                fill
                                sizes="140px"
                                unoptimized
                              />
                            ) : (
                              <span>No image</span>
                            )}
                          </div>
                          <strong>
                            {value.card_sets.code.toUpperCase()} #
                            {value.collector_number}
                          </strong>
                          <span>
                            {value.card_sets.name} · {family.printings.length} languages
                            {value.rarity ? ` · ${pretty(value.rarity)}` : ""}
                            {value.treatment
                              ? ` · ${pretty(value.treatment)}`
                              : ""}
                          </span>
                        </button>
                      </li>;
                    })}
                  </ul>
                  {pendingFamily ? (
                    <label className={styles.field}>
                      <span>Language</span>
                      <select value="" onChange={(event) => {
                        const selected = pendingFamily.printings.find((value) => value.id === event.target.value);
                        if (selected) void loadFinishes(selected, finish);
                      }}>
                        <option value="">Choose language</option>
                        {pendingFamily.printings.map((value) => (
                          <option key={value.id} value={value.id}>{value.language_code.toUpperCase()}</option>
                        ))}
                      </select>
                    </label>
                  ) : null}
                </section>
              )}
              {card && !pickerOrigin && !printing && loading && (
                <p className={styles.muted}>Loading the selected printing…</p>
              )}
              {printing && !pickerOrigin && (
                <div className={styles.detailsLayout}>
                  <aside
                    className={styles.preview}
                    aria-label="Selected exact printing"
                  >
                    <div className={styles.previewArt}>
                      {printing.image_large_uri ||
                      printing.image_normal_uri ||
                      printing.image_small_uri ? (
                        <Image
                          src={
                            printing.image_large_uri ??
                            printing.image_normal_uri ??
                            printing.image_small_uri!
                          }
                          alt={`${card?.name ?? "Selected card"} — ${printing.card_sets.name} printing`}
                          fill
                          sizes="(max-width: 36rem) 58vw, 240px"
                          unoptimized
                        />
                      ) : (
                        <span>Card image unavailable</span>
                      )}
                    </div>
                    <div className={styles.previewMeta}>
                      <h3>{card?.name}</h3>
                      <p>
                        {printing.card_sets.name} ·{" "}
                        {printing.card_sets.code.toUpperCase()} #
                        {printing.collector_number}
                      </p>
                      <p>
                        {printing.language_code.toUpperCase()}
                        {printing.treatment
                          ? ` · ${pretty(printing.treatment)}`
                          : ""}
                      </p>
                    </div>
                    <button
                      className={styles.changePrinting}
                      type="button"
                      onClick={() => {
                        setError(null);
                        setPickerOrigin("change");
                      }}
                    >
                      Change printing
                    </button>
                  </aside>
                  <form className={styles.form} onSubmit={submit}>
                    <div className={styles.fields}>
                      <label className={styles.field}>
                        <span>Condition</span>
                        <select
                          value={condition}
                          onChange={(event) => setCondition(event.target.value)}
                        >
                          {conditions.map((value) => (
                            <option key={value} value={value}>
                              {pretty(value)}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label className={styles.field}>
                        <span>Finish</span>
                        <select
                          value={finish}
                          onChange={(event) => setFinish(event.target.value)}
                        >
                          <option value="">Choose finish</option>
                          {finishes.map((value) => (
                            <option key={value.finish}>{value.finish}</option>
                          ))}
                        </select>
                      </label>
                      <label className={styles.field}>
                        <span>Quantity</span>
                        <input
                          inputMode="numeric"
                          value={quantity}
                          onChange={(event) => setQuantity(event.target.value)}
                        />
                      </label>
                      <label className={styles.field}>
                        <span>Collection</span>
                        <select
                          value={collectionId}
                          onChange={(event) =>
                            setCollectionId(event.target.value)
                          }
                        >
                          <option value="">Unsorted / no collection</option>
                          {collections.map((value) => (
                            <option key={value.id} value={value.id}>
                              {value.name}
                            </option>
                          ))}
                        </select>
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
                    <details className={styles.more}>
                      <summary>More details</summary>
                      <div className={styles.moreFields}>
                        <label className={styles.field}>
                          <span>Acquired date</span>
                          <input
                            type="date"
                            value={acquiredAt}
                            onChange={(event) =>
                              setAcquiredAt(event.target.value)
                            }
                          />
                        </label>
                        <label className={styles.field}>
                          <span>Acquisition price</span>
                          <input
                            inputMode="decimal"
                            value={acquiredPrice}
                            onChange={(event) =>
                              setAcquiredPrice(event.target.value)
                            }
                            placeholder="0.00"
                          />
                        </label>
                        <label className={`${styles.field} ${styles.notes}`}>
                          <span>Private notes</span>
                          <textarea
                            value={notes}
                            onChange={(event) => setNotes(event.target.value)}
                          />
                        </label>
                      </div>
                    </details>
                    {error && (
                      <p className={styles.error} role="alert">
                        {error}
                      </p>
                    )}
                    <div className={styles.actions}>
                      <button
                        className={styles.secondary}
                        type="button"
                        onClick={onClose}
                        disabled={saving}
                      >
                        Cancel
                      </button>
                    <button className={styles.primary} disabled={saving} aria-busy={saving}>
                        {saving ? "Adding…" : "Add card"}
                      </button>
                    </div>
                  </form>
                </div>
              )}
              {error && !printing && (
                <p className={styles.error} role="alert">
                  {error}
                </p>
              )}
            </>
          )}
        </div>
      </section>
    </div>,
    document.body,
  );
}
