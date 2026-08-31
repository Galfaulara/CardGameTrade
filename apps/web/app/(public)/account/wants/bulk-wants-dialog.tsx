"use client";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { parseBulkInventoryCsv, parseBulkInventoryLine } from "@repo/validation";
import type { MyWishlist } from "../../../../features/auth/authenticated-api";
import type { CatalogPrinting, CatalogSearchResult } from "../../../../features/marketplace/api";
import type { DeckDealGame } from "../../../../features/games/active-game";
import { groupPrintingVersions } from "../../../../features/catalog/version-families";
import styles from "./page.module.css";

type Row = {
  source: string; name: string; quantity: number; set: string | null; collectorNumber: string | null;
  card: CatalogSearchResult["items"][number] | null; candidates: CatalogSearchResult["items"]; printings: CatalogPrinting[]; versionKey: string;
  printingId: string; mode: "general" | "printing"; status: "READY" | "NEEDS_SELECTION" | "ALREADY_IN_WISHLIST" | "INVALID"; message: string;
  priority: "low" | "normal" | "high" | "urgent"; cash: boolean; trade: boolean;
  finishes: string[]; finish: string;
};
const normalized = (value: string) => value.trim().toLowerCase().replace(/\s+/g, " ");

export function BulkWantsDialog({ game, wishlist, onClose, onSaved }: {
  game: DeckDealGame; wishlist: MyWishlist; onClose: () => void; onSaved: () => Promise<void>;
}) {
  const [text, setText] = useState("");
  const [rows, setRows] = useState<Row[]>([]);
  const [busy, setBusy] = useState<"resolve" | "confirm" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const busyRef = useRef(false);
  const parsed = () => text.trimStart().toLowerCase().startsWith("quantity,")
    ? parseBulkInventoryCsv(text).rows
    : text.split(/\r?\n/).map(parseBulkInventoryLine).filter((value): value is NonNullable<typeof value> => Boolean(value));
  const resolve = async () => {
    if (busyRef.current) return;
    busyRef.current = true; setBusy("resolve"); setError(null);
    try {
      const values = await Promise.all(parsed().map(async (input): Promise<Row> => {
        const quantity = Number(input.quantity);
        const base = { source: input.source, name: input.name, quantity, set: input.set ?? null,
          collectorNumber: input.collectorNumber ?? null, card: null, candidates: [], printings: [], versionKey: "", printingId: "",
          mode: input.set ? "printing" as const : "general" as const, priority: "normal" as const, cash: true, trade: true,
          finishes: [], finish: "" };
        if (!Number.isInteger(quantity) || quantity < 1 || !input.name.trim()) return { ...base, status: "INVALID", message: "Quantity and card name are required." };
        const response = await fetch(`/api/catalog/search?q=${encodeURIComponent(input.name)}&game=${encodeURIComponent(game.slug)}`);
        if (!response.ok) return { ...base, status: "INVALID", message: "Catalog search failed." };
        const result = (await response.json()) as CatalogSearchResult;
        const card = result.items.find((value) => normalized(value.name) === normalized(input.name)) ?? (result.items.length === 1 ? result.items[0]! : null);
        if (!card) return { ...base, candidates: result.items, status: "NEEDS_SELECTION", message: "Choose the intended card." };
        const duplicateGeneral = wishlist.items.some((item) => item.status === "active" && item.target.type === "canonical_card" && item.target.canonical_card?.id === card.id);
        if (!input.set) return { ...base, card, candidates: result.items, status: duplicateGeneral ? "ALREADY_IN_WISHLIST" : "READY", message: duplicateGeneral ? "This card is already an active Want." : "Any acceptable printing" };
        const printResponse = await fetch(`/api/catalog/cards/${encodeURIComponent(card.id)}/printings`);
        const all = printResponse.ok ? await printResponse.json() as CatalogPrinting[] : [];
        const matches = all.filter((printing) =>
          (printing.card_sets.code.toLowerCase() === input.set!.toLowerCase() || printing.card_sets.name.toLowerCase() === input.set!.toLowerCase()) &&
          (!input.collectorNumber || printing.collector_number.toLowerCase() === input.collectorNumber.toLowerCase()));
        const families = groupPrintingVersions(matches);
        if (!families.length) return { ...base, card, candidates: result.items, status: "INVALID", message: "No exact version matches the supplied set and collector number." };
        const family = families.length === 1 ? families[0]! : null;
        const printingId = family?.printings.length === 1 ? family.printings[0]!.id : "";
        const finishResponse = printingId ? await fetch(`/api/catalog/printings/${encodeURIComponent(printingId)}/finishes`) : null;
        const finishes = finishResponse?.ok ? (await finishResponse.json() as Array<{ finish: string }>).map((value) => value.finish) : [];
        const finish = finishes.length === 1 ? finishes[0]! : "";
        const duplicate = printingId && wishlist.items.some((item) => item.status === "active" && item.target.type === "printing" && item.target.printing?.id === printingId);
        return { ...base, card, candidates: result.items, printings: matches, versionKey: family?.key ?? "", printingId,
          finishes, finish, status: duplicate ? "ALREADY_IN_WISHLIST" : printingId && finish ? "READY" : "NEEDS_SELECTION",
          message: duplicate ? "This exact printing is already an active Want." : printingId && finish ? "Exact printing ready" : printingId ? "Choose a finish." : families.length > 1 ? "Choose a version." : "Choose a language." };
      }));
      setRows(values);
    } catch { setError("Bulk wants could not be resolved."); }
    finally { busyRef.current = false; setBusy(null); }
  };
  const update = (index: number, patch: Partial<Row>) => setRows((current) => current.map((row, rowIndex) => rowIndex === index ? { ...row, ...patch } : row));
  const ready = rows.length > 0 && rows.every((row) => (row.status === "READY" || row.status === "ALREADY_IN_WISHLIST") && (row.cash || row.trade));
  const confirm = async () => {
    if (busyRef.current || !ready) return;
    busyRef.current = true; setBusy("confirm"); setError(null);
    try {
      const creates = rows.filter((row) => row.status === "READY");
      const responses = await Promise.all(creates.map((row) => fetch(`/api/me/wishlists/${encodeURIComponent(wishlist.id)}/items?gameSlug=${encodeURIComponent(game.slug)}`, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({
          canonicalCardId: row.mode === "general" ? row.card!.id : null, printingId: row.mode === "printing" ? row.printingId : null,
          quantityDesired: row.quantity, willingToPayCash: row.cash, willingToTradeCards: row.trade, priority: row.priority,
          desiredFinish: row.mode === "printing" ? row.finish : null,
        }),
      })));
      const failed = responses.find((response) => !response.ok);
      if (failed) throw new Error((await failed.json().catch(() => ({})) as { message?: string }).message ?? "Bulk add failed.");
      await onSaved();
    } catch (reason) { setError(reason instanceof Error ? reason.message : "Bulk add failed."); }
    finally { busyRef.current = false; setBusy(null); }
  };
  return <div className={styles.backdrop}>
    <section className={`${styles.dialog} ${styles.bulkDialog}`} role="dialog" aria-modal="true" aria-labelledby="bulk-wants-title">
      <header><div><h2 id="bulk-wants-title">Bulk add wants</h2><p>{wishlist.name} · {game.name}</p></div><button type="button" onClick={onClose} aria-label="Close">×</button></header>
      {!rows.length ? <>
        <label>Paste card list<textarea className={styles.pasteArea} value={text} onChange={(event) => setText(event.target.value)} placeholder={"1 Rhystic Study\n1 Lightning Bolt (M11) 149\n2 Sol Ring [CMM]"} /></label>
        <p className={styles.help}>Supports DeckDeal text, Moxfield-style set/collector syntax, and shared CSV parsing.</p>
        <button className={styles.primary} type="button" disabled={busy !== null || !text.trim()} aria-busy={busy === "resolve"} onClick={() => void resolve()}>{busy === "resolve" ? "Resolving…" : "Resolve wants"}</button>
      </> : <>
        <div className={styles.bulkReview}>{rows.map((row, index) => <BulkRow key={`${row.source}-${index}`} row={row} onUpdate={(patch) => update(index, patch)} onRemove={() => setRows((current) => current.filter((_, i) => i !== index))} />)}</div>
        <div className={styles.bulkActions}><button className={styles.secondary} type="button" disabled={busy !== null} onClick={() => setRows([])}>Back to paste</button><button className={styles.primary} type="button" disabled={!ready || busy !== null} aria-busy={busy === "confirm"} onClick={() => void confirm()}>{busy === "confirm" ? "Adding wants…" : "Confirm wants"}</button></div>
      </>}
      {error ? <p className={styles.error} role="alert">{error}</p> : null}
    </section>
  </div>;
}

function BulkRow({ row, onUpdate, onRemove }: { row: Row; onUpdate: (patch: Partial<Row>) => void; onRemove: () => void }) {
  const families = useMemo(() => groupPrintingVersions(row.printings), [row.printings]);
  const family = families.find((value) => value.key === row.versionKey);
  const chooseVersion = (key: string) => {
    const selected = families.find((value) => value.key === key);
    const printingId = selected?.printings.length === 1 ? selected.printings[0]!.id : "";
    onUpdate({ versionKey: key, printingId, finishes: [], finish: "", status: "NEEDS_SELECTION", message: printingId ? "Choose a finish." : "Choose a language." });
    if (printingId) void chooseLanguage(printingId);
  };
  const chooseLanguage = async (printingId: string) => {
    onUpdate({ printingId, finishes: [], finish: "", status: "NEEDS_SELECTION", message: printingId ? "Loading finishes…" : "Choose a language." });
    if (!printingId) return;
    const response = await fetch(`/api/catalog/printings/${encodeURIComponent(printingId)}/finishes`);
    const finishes = response.ok ? (await response.json() as Array<{ finish: string }>).map((value) => value.finish) : [];
    const finish = finishes.length === 1 ? finishes[0]! : "";
    onUpdate({ printingId, finishes, finish, status: finish ? "READY" : "NEEDS_SELECTION", message: finish ? "Exact printing ready" : "Choose a finish." });
  };
  return <article className={styles.bulkRow}>
    <div className={styles.bulkArt}>{row.card?.representative_printing?.image_normal_uri || row.card?.representative_printing?.image_small_uri ? <Image src={row.card.representative_printing.image_normal_uri ?? row.card.representative_printing.image_small_uri!} alt="" fill sizes="84px" unoptimized /> : <span>No image</span>}</div>
    <div className={styles.bulkRowBody}><div className={styles.bulkRowHeading}><strong>{row.card?.name ?? row.name}</strong><span data-status={row.status}>{row.status}</span></div><p>{row.message}</p>
      <div className={styles.bulkControls}><label>Quantity<input type="number" min="1" value={row.quantity} onChange={(event) => onUpdate({ quantity: Number(event.target.value), status: Number(event.target.value) > 0 ? row.status : "INVALID" })} /></label>
        <label>Card<select value={row.card?.id ?? ""} onChange={(event) => { const card = row.candidates.find((value) => value.id === event.target.value) ?? null; onUpdate({ card, mode: "general", printings: [], printingId: "", versionKey: "", finishes: [], finish: "", status: card ? "READY" : "NEEDS_SELECTION", message: card ? "Any acceptable printing" : "Choose the intended card." }); }}><option value="">Choose card</option>{row.candidates.map((card) => <option key={card.id} value={card.id}>{card.name}</option>)}</select></label>
        <label>Target<select value={row.mode} onChange={(event) => onUpdate({ mode: event.target.value as Row["mode"], printingId: "", status: event.target.value === "general" && row.card ? "READY" : "NEEDS_SELECTION" })}><option value="general">Any printing</option><option value="printing">Exact printing</option></select></label>
        {row.mode === "printing" && families.length ? <label>Version<select value={row.versionKey} onChange={(event) => chooseVersion(event.target.value)}><option value="">Choose version</option>{families.map((value) => <option key={value.key} value={value.key}>{value.representative.card_sets.name} #{value.representative.collector_number}</option>)}</select></label> : null}
        {row.mode === "printing" && family && family.printings.length > 1 ? <label>Language<select value={row.printingId} onChange={(event) => void chooseLanguage(event.target.value)}><option value="">Choose language</option>{family.printings.map((printing) => <option key={printing.id} value={printing.id}>{printing.language_code.toUpperCase()}</option>)}</select></label> : null}
        {row.mode === "printing" && row.printingId ? <label>Finish<select value={row.finish} onChange={(event) => onUpdate({ finish: event.target.value, status: event.target.value ? "READY" : "NEEDS_SELECTION", message: event.target.value ? "Exact printing ready" : "Choose a finish." })}><option value="">Choose finish</option>{row.finishes.map((finish) => <option key={finish}>{finish}</option>)}</select></label> : null}
        <label>Priority<select value={row.priority} onChange={(event) => onUpdate({ priority: event.target.value as Row["priority"] })}><option value="low">Low</option><option value="normal">Normal</option><option value="high">High</option><option value="urgent">Urgent</option></select></label>
      </div>
      <div className={styles.checks}><label><input type="checkbox" checked={row.cash} onChange={(event) => onUpdate({ cash: event.target.checked })} /> Cash</label><label><input type="checkbox" checked={row.trade} onChange={(event) => onUpdate({ trade: event.target.checked })} /> Trade</label>{!row.cash && !row.trade ? <span className={styles.error}>Choose cash or trade.</span> : null}</div>
    </div><button className={styles.removeRow} type="button" onClick={onRemove}>Remove</button>
  </article>;
}
