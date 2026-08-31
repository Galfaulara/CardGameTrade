"use client";
import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { MyWishlist } from "../../../../features/auth/authenticated-api";
import type {
  CatalogCard,
  CatalogPrinting,
  CatalogSearchResult,
} from "../../../../features/marketplace/api";
import type { DeckDealGame } from "../../../../features/games/active-game";
import { groupPrintingVersions } from "../../../../features/catalog/version-families";
import styles from "./page.module.css";

const parse = async (response: Response) =>
  response.json().catch(() => ({})) as Promise<{ message?: string }>;
const pretty = (value: string) => value.replaceAll("_", " ");

export function WantsManager({
  game,
  initialWishlists,
  initialWishlistId,
}: {
  game: DeckDealGame;
  initialWishlists: MyWishlist[];
  initialWishlistId?: string;
}) {
  const router = useRouter();
  const [wishlists, setWishlists] = useState(initialWishlists);
  const [selectedId, setSelectedId] = useState(initialWishlistId ?? "");
  const [createOpen, setCreateOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const selected = wishlists.find((value) => value.id === selectedId);
  const reload = async (preferredId = selectedId) => {
    const response = await fetch(
      `/api/me/wishlists?gameSlug=${encodeURIComponent(game.slug)}`,
    );
    if (response.ok) {
      const values = (await response.json()) as MyWishlist[];
      setWishlists(values);
      setSelectedId(
        values.some((value) => value.id === preferredId)
          ? preferredId
          : (values[0]?.id ?? ""),
      );
      router.refresh();
    }
  };
  const create = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy(true);
    setError(null);
    const data = new FormData(event.currentTarget);
    const response = await fetch("/api/me/wishlists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gameSlug: game.slug,
        name: data.get("name"),
        description: data.get("description") || null,
        visibility: data.get("visibility"),
      }),
    });
    const result = await parse(response);
    if (!response.ok) {
      setError(result.message ?? "Wishlist creation failed.");
      setBusy(false);
      return;
    }
    setCreateOpen(false);
    setBusy(false);
    await reload((result as { id: string }).id);
  };
  const updateWishlist = async (input: Record<string, unknown>) => {
    if (!selected) return;
    setBusy(true);
    setError(null);
    const response = await fetch(
      `/api/me/wishlists/${encodeURIComponent(selected.id)}?gameSlug=${encodeURIComponent(game.slug)}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      },
    );
    const result = await parse(response);
    if (!response.ok) setError(result.message ?? "Wishlist update failed.");
    else await reload(selected.id);
    setBusy(false);
  };
  const updateItem = async (itemId: string, status: string) => {
    if (!selected) return;
    setBusy(true);
    const response = await fetch(
      `/api/me/wishlists/${encodeURIComponent(selected.id)}/items/${encodeURIComponent(itemId)}?gameSlug=${encodeURIComponent(game.slug)}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      },
    );
    if (!response.ok)
      setError((await parse(response)).message ?? "Want update failed.");
    else await reload(selected.id);
    setBusy(false);
  };
  return (
    <div className={styles.page}>
      <header className={styles.toolbar}>
        <div>
          <strong>{game.name}</strong>
          <span>
            {wishlists.length} wishlist{wishlists.length === 1 ? "" : "s"}
          </span>
        </div>
        <button
          className={styles.primary}
          onClick={() => {
            setCreateOpen(true);
            setError(null);
          }}
        >
          + Create wishlist
        </button>
      </header>
      {!wishlists.length ? (
        <section className={styles.empty}>
          <h2>No wishlists yet</h2>
          <p>Create a Wishlist for the cards you want in {game.name}.</p>
          <button
            className={styles.primary}
            onClick={() => setCreateOpen(true)}
          >
            Create wishlist
          </button>
        </section>
      ) : (
        <div className={styles.layout}>
          <nav className={styles.list} aria-label="My Wishlists">
            {wishlists.map((wishlist) => (
              <button
                key={wishlist.id}
                aria-current={wishlist.id === selectedId ? "page" : undefined}
                onClick={() => setSelectedId(wishlist.id)}
              >
                <strong>{wishlist.name}</strong>
                <span>
                  {wishlist.items.length} wants · {wishlist.visibility} ·{" "}
                  {wishlist.status}
                </span>
              </button>
            ))}
          </nav>
          {selected ? (
            <section className={styles.detail}>
              <header>
                <div>
                  <p>
                    {selected.visibility} · {selected.status}
                  </p>
                  <h2>{selected.name}</h2>
                  {selected.description ? (
                    <span>{selected.description}</span>
                  ) : null}
                </div>
                <div className={styles.actions}>
                  <select
                    aria-label="Wishlist visibility"
                    value={selected.visibility}
                    disabled={busy}
                    onChange={(event) =>
                      void updateWishlist({ visibility: event.target.value })
                    }
                  >
                    <option value="private">Private</option>
                    <option value="unlisted">Unlisted</option>
                    <option value="public">Public</option>
                  </select>
                  <button
                    className={styles.primary}
                    disabled={selected.status !== "active"}
                    onClick={() => setAddOpen(true)}
                  >
                    + Add want
                  </button>
                </div>
              </header>
              <WishlistMetadataForm
                wishlist={selected}
                busy={busy}
                onSave={updateWishlist}
              />
              {!selected.items.length ? (
                <div className={styles.empty}>
                  <h3>No wants in this wishlist yet</h3>
                  <button
                    className={styles.primary}
                    onClick={() => setAddOpen(true)}
                  >
                    Add want
                  </button>
                </div>
              ) : (
                <ul className={styles.items}>
                  {selected.items.map((item) => {
                    const printing =
                      item.target.type === "printing"
                        ? item.target.printing
                        : null;
                    const card =
                      item.target.type === "canonical_card"
                        ? item.target.canonical_card
                        : printing?.canonical_cards;
                    return (
                      <li key={item.id}>
                        <div>
                          <strong>{card?.name ?? "Unknown card"}</strong>
                          <span>
                            {printing
                              ? `${printing.card_sets.name} · ${printing.card_sets.code.toUpperCase()} #${printing.collector_number}`
                              : "Any acceptable printing"}
                          </span>
                          <span>
                            ×{item.quantity_desired} · {pretty(item.priority)} ·{" "}
                            {item.willing_to_pay_cash ? "cash" : ""}
                            {item.willing_to_pay_cash &&
                            item.willing_to_trade_cards
                              ? " + "
                              : ""}
                            {item.willing_to_trade_cards ? "trade" : ""}
                          </span>
                          <span>
                            {[
                              item.desired_finish,
                              item.desired_condition &&
                                pretty(item.desired_condition),
                              item.language_code,
                            ]
                              .filter(Boolean)
                              .join(" · ") || "No printing preferences"}
                          </span>
                        </div>
                        <div className={styles.itemActions}>
                          <span>{item.status}</span>
                          {item.status === "active" ? (
                            <>
                              <button
                                disabled={busy}
                                onClick={() =>
                                  void updateItem(item.id, "paused")
                                }
                              >
                                Pause
                              </button>
                              <button
                                disabled={busy}
                                onClick={() =>
                                  void updateItem(item.id, "fulfilled")
                                }
                              >
                                Fulfill
                              </button>
                            </>
                          ) : item.status === "paused" ? (
                            <button
                              disabled={busy}
                              onClick={() => void updateItem(item.id, "active")}
                            >
                              Resume
                            </button>
                          ) : null}
                          <button
                            disabled={busy}
                            onClick={() => void updateItem(item.id, "removed")}
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          ) : null}
        </div>
      )}
      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}
      {createOpen ? (
        <div className={styles.backdrop}>
          <form className={styles.dialog} onSubmit={create}>
            <header>
              <h2>Create wishlist</h2>
              <button
                type="button"
                onClick={() => setCreateOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </header>
            <p>
              Active game: <strong>{game.name}</strong>
            </p>
            <label>
              Name
              <input name="name" required maxLength={120} />
            </label>
            <label>
              Description (optional)
              <textarea name="description" maxLength={1000} />
            </label>
            <label>
              Visibility
              <select name="visibility" defaultValue="private">
                <option value="private">Private</option>
                <option value="unlisted">Unlisted</option>
                <option value="public">Public</option>
              </select>
            </label>
            {error ? <p className={styles.error}>{error}</p> : null}
            <button className={styles.primary} disabled={busy} aria-busy={busy}>
              {busy ? "Creating…" : "Create wishlist"}
            </button>
          </form>
        </div>
      ) : null}
      {addOpen && selected ? (
        <AddWantDialog
          game={game}
          wishlist={selected}
          onClose={() => setAddOpen(false)}
          onSaved={async () => {
            setAddOpen(false);
            await reload(selected.id);
          }}
        />
      ) : null}
    </div>
  );
}

function WishlistMetadataForm({
  wishlist,
  busy,
  onSave,
}: {
  wishlist: MyWishlist;
  busy: boolean;
  onSave: (input: Record<string, unknown>) => Promise<void>;
}) {
  return (
    <form
      className={styles.fields}
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        void onSave({
          name: data.get("name"),
          description: data.get("description") || null,
          visibility: data.get("visibility"),
        });
      }}
    >
      <label>
        Name
        <input
          name="name"
          defaultValue={wishlist.name}
          maxLength={120}
          required
        />
      </label>
      <label>
        Description
        <input
          name="description"
          defaultValue={wishlist.description ?? ""}
          maxLength={1000}
        />
      </label>
      <label>
        Visibility
        <select name="visibility" defaultValue={wishlist.visibility}>
          <option value="private">Private</option>
          <option value="unlisted">Unlisted</option>
          <option value="public">Public</option>
        </select>
      </label>
      <button className={styles.primary} disabled={busy} aria-busy={busy}>
        {busy ? "Saving…" : "Save Wishlist details"}
      </button>
    </form>
  );
}

function AddWantDialog({
  game,
  wishlist,
  onClose,
  onSaved,
}: {
  game: DeckDealGame;
  wishlist: MyWishlist;
  onClose: () => void;
  onSaved: () => Promise<void>;
}) {
  const [query, setQuery] = useState("");
  const [cards, setCards] = useState<CatalogCard[]>([]);
  const [card, setCard] = useState<CatalogCard | null>(null);
  const [mode, setMode] = useState<"general" | "printing">("general");
  const [printings, setPrintings] = useState<CatalogPrinting[]>([]);
  const [printingId, setPrintingId] = useState("");
  const [versionKey, setVersionKey] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const versionFamilies = useMemo(() => groupPrintingVersions(printings), [printings]);
  const selectedFamily = versionFamilies.find((value) => value.key === versionKey);
  const search = async (event: FormEvent) => {
    event.preventDefault();
    setBusy(true);
    const response = await fetch(
      `/api/catalog/search?q=${encodeURIComponent(query)}&game=${encodeURIComponent(game.slug)}`,
    );
    if (response.ok)
      setCards(((await response.json()) as CatalogSearchResult).items);
    else setError("Catalog search failed.");
    setBusy(false);
  };
  const choose = async (value: CatalogCard) => {
    setCard(value);
    setCards([]);
    setPrintingId("");
    setVersionKey("");
    const response = await fetch(
      `/api/catalog/cards/${encodeURIComponent(value.id)}/printings`,
    );
    setPrintings(
      response.ok ? ((await response.json()) as CatalogPrinting[]) : [],
    );
  };
  const save = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!card || (mode === "printing" && !printingId)) {
      setError("Choose a card and exact printing when requested.");
      return;
    }
    const data = new FormData(event.currentTarget);
    const cash = data.get("cash") === "on",
      trade = data.get("trade") === "on";
    setBusy(true);
    setError(null);
    const max = String(data.get("maxCash") ?? "").trim();
    const response = await fetch(
      `/api/me/wishlists/${encodeURIComponent(wishlist.id)}/items?gameSlug=${encodeURIComponent(game.slug)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          canonicalCardId: mode === "general" ? card.id : null,
          printingId: mode === "printing" ? printingId : null,
          quantityDesired: Number(data.get("quantity")),
          willingToPayCash: cash,
          willingToTradeCards: trade,
          desiredFinish: data.get("finish") || null,
          desiredCondition: data.get("condition") || null,
          languageCode: data.get("language") || null,
          priority: data.get("priority"),
          notes: data.get("notes") || null,
          maxCashAmount: cash && max ? Number(max) : null,
          currencyCode: cash && max ? data.get("currency") : null,
          tradeNotes: data.get("tradeNotes") || null,
        }),
      },
    );
    const result = await parse(response);
    if (!response.ok) {
      setError(result.message ?? "Want creation failed.");
      setBusy(false);
      return;
    }
    await onSaved();
  };
  return (
    <div className={styles.backdrop}>
      <form className={styles.dialog} onSubmit={save}>
        <header>
          <div>
            <h2>Add want</h2>
            <p>
              {wishlist.name} · {game.name}
            </p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close">
            ×
          </button>
        </header>
        <div className={styles.search}>
          <input
            aria-label="Search cards"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search DeckDeal catalog"
          />
          <button
            type="button"
            disabled={busy}
            aria-busy={busy}
            onClick={(event) => void search(event as unknown as FormEvent)}
          >
            {busy ? "Searching…" : "Search"}
          </button>
        </div>
        {cards.length ? (
          <div className={styles.results}>
            {cards.slice(0, 12).map((value) => (
              <button
                type="button"
                key={value.id}
                onClick={() => void choose(value)}
              >
                {value.name}
              </button>
            ))}
          </div>
        ) : null}
        {card ? (
          <>
            <strong>{card.name}</strong>
            <div className={styles.checks}>
              <label>
                <input
                  type="radio"
                  checked={mode === "general"}
                  onChange={() => setMode("general")}
                />{" "}
                Any acceptable printing
              </label>
              <label>
                <input
                  type="radio"
                  checked={mode === "printing"}
                  onChange={() => setMode("printing")}
                />{" "}
                Exact printing
              </label>
            </div>
            {mode === "printing" ? (
              <>
                <label>
                  Version
                  <select value={versionKey} onChange={(event) => {
                    const family = versionFamilies.find((value) => value.key === event.target.value);
                    setVersionKey(event.target.value);
                    setPrintingId(family?.printings.length === 1 ? family.printings[0]!.id : "");
                  }} required>
                    <option value="">Choose version</option>
                    {versionFamilies.map((family) => {
                      const value = family.representative;
                      return <option key={family.key} value={family.key}>
                        {value.card_sets.name} · {value.card_sets.code.toUpperCase()} #{value.collector_number} · {family.printings.length} language{family.printings.length === 1 ? "" : "s"}
                      </option>;
                    })}
                  </select>
                </label>
                {selectedFamily && selectedFamily.printings.length > 1 ? (
                  <label>
                    Language
                    <select value={printingId} onChange={(event) => setPrintingId(event.target.value)} required>
                      <option value="">Choose language</option>
                      {selectedFamily.printings.map((value) => (
                        <option key={value.id} value={value.id}>{value.language_code.toUpperCase()}</option>
                      ))}
                    </select>
                  </label>
                ) : null}
              </>
            ) : null}
            <div className={styles.fields}>
              <label>
                Quantity
                <input
                  name="quantity"
                  type="number"
                  min="1"
                  max="1000"
                  defaultValue="1"
                  required
                />
              </label>
              <label>
                Priority
                <select name="priority" defaultValue="normal">
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </label>
              <label>
                Desired finish
                <input name="finish" placeholder="Optional" />
              </label>
              <label>
                Desired condition
                <select name="condition" defaultValue="">
                  <option value="">Any</option>
                  {[
                    "mint",
                    "near_mint",
                    "lightly_played",
                    "moderately_played",
                    "heavily_played",
                    "damaged",
                  ].map((value) => (
                    <option key={value} value={value}>
                      {pretty(value)}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Language
                <input name="language" placeholder="Any" maxLength={10} />
              </label>
              <label>
                Max cash
                <input name="maxCash" type="number" min="0" step="0.01" />
              </label>
              <label>
                Currency
                <input name="currency" defaultValue="USD" maxLength={3} />
              </label>
            </div>
            <div className={styles.checks}>
              <label>
                <input name="cash" type="checkbox" defaultChecked /> Willing to
                buy/pay cash
              </label>
              <label>
                <input name="trade" type="checkbox" defaultChecked /> Willing to
                trade cards
              </label>
            </div>
            <label>
              Notes
              <textarea name="notes" />
            </label>
            <label>
              Trade notes
              <textarea name="tradeNotes" />
            </label>
          </>
        ) : (
          <p>Search and choose a card.</p>
        )}
        {error ? (
          <p className={styles.error} role="alert">
            {error}
          </p>
        ) : null}
        <button className={styles.primary} disabled={busy || !card} aria-busy={busy}>
          {busy ? "Saving…" : "Save want"}
        </button>
      </form>
    </div>
  );
}
