"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useMemo, useRef, useState } from "react";
import {
  BULK_INVENTORY_MAX_QUANTITY,
  BULK_INVENTORY_MAX_ROWS,
  parseBulkInventoryCsv,
  parseBulkInventoryLine,
  type BulkInventorySourceRow,
} from "@repo/validation";
import type { DeckDealGame } from "../../../../../features/games/active-game";
import styles from "./page.module.css";
import { applyBulkPrintingSelection } from "../../../../../features/inventory/bulk-review";

type Candidate = {
  id: string;
  collector_number: string;
  language_code: string;
  image_small_uri: string | null;
  card_sets: { code: string; name: string };
  finishes: string[];
  finish: string | null;
};
type ReviewRow = BulkInventorySourceRow & {
  index: number;
  quantity: number;
  status: "EXACT" | "AMBIGUOUS" | "UNMATCHED" | "INVALID";
  message: string | null;
  condition: string;
  language: string;
  collectionId: string | null;
  printingId?: string;
  finish?: string | null;
  candidates: Candidate[];
  canonicalCard?: { id: string; name: string };
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

export function BulkAddInventory({
  game,
  collections,
}: {
  game: DeckDealGame;
  collections: Array<{ id: string; name: string }>;
}) {
  const router = useRouter();
  const [expandedImage, setExpandedImage] = useState<number | null>(null);
  const [method, setMethod] = useState<"paste" | "csv">("paste");
  const [text, setText] = useState("");
  const [csvRows, setCsvRows] = useState<BulkInventorySourceRow[]>([]);
  const [condition, setCondition] = useState("near_mint");
  const [language, setLanguage] = useState("en");
  const [collectionId, setCollectionId] = useState("");
  const [rows, setRows] = useState<ReviewRow[] | null>(null);
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<{
    addedQuantity: number;
    entryCount: number;
  } | null>(null);
  const inputRows = useMemo(
    () =>
      method === "paste"
        ? text
            .split(/\r?\n/)
            .map(parseBulkInventoryLine)
            .filter((row): row is BulkInventorySourceRow => Boolean(row))
        : csvRows,
    [method, text, csvRows],
  );
  const unresolved = rows?.filter((row) => row.status !== "EXACT").length ?? 0;
  const total = inputRows.reduce(
    (sum, row) => sum + (Number(row.quantity) || 0),
    0,
  );
  const upload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.name.toLowerCase().endsWith(".csv")) {
      setError("Choose a .csv file.");
      return;
    }
    const parsed = parseBulkInventoryCsv(await file.text());
    setError(parsed.errors.join(" ") || null);
    setCsvRows(parsed.rows);
    setRows(null);
  };
  const resolve = async () => {
    setError(null);
    if (!inputRows.length) {
      setError("Enter at least one card.");
      return;
    }
    if (inputRows.length > BULK_INVENTORY_MAX_ROWS) {
      setError(`A batch may contain at most ${BULK_INVENTORY_MAX_ROWS} rows.`);
      return;
    }
    if (total > BULK_INVENTORY_MAX_QUANTITY) {
      setError(
        `A batch may contain at most ${BULK_INVENTORY_MAX_QUANTITY} cards.`,
      );
      return;
    }
    setBusy(true);
    try {
      const response = await fetch("/api/me/inventory/bulk/resolve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gameSlug: game.slug,
          collectionId: collectionId || null,
          defaults: { condition, language, finish: null },
          rows: inputRows,
        }),
      });
      const body = await response.json();
      if (!response.ok)
        throw new Error(body.message ?? "The batch could not be resolved.");
      setRows(body.rows);
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "The batch could not be resolved.",
      );
    } finally {
      setBusy(false);
    }
  };
  const choose = (
    index: number,
    candidateIndex: number,
    chosenFinish: string,
  ) =>
    setRows(
      (current) =>
        current?.map((row) => {
          if (row.index !== index) return row;
          return applyBulkPrintingSelection(row, candidateIndex, chosenFinish);
        }) ?? null,
    );
  const submit = async () => {
    if (busyRef.current || !rows || unresolved) return;
    busyRef.current = true;
    setBusy(true);
    setError(null);
    try {
      const response = await fetch("/api/me/inventory/bulk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gameSlug: game.slug,
          rows: rows.map((row) => ({
            quantity: row.quantity,
            printingId: row.printingId,
            finish: row.finish,
            condition: row.condition,
            language: row.language,
            collectionId: row.collectionId,
          })),
        }),
      });
      const body = await response.json();
      if (!response.ok)
        throw new Error(body.message ?? "The batch could not be added.");
      setSuccess(body);
      router.push(
        `/account/inventory?game=${encodeURIComponent(game.slug)}&added=${body.addedQuantity}`,
      );
      router.refresh();
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "The batch could not be added.",
      );
    } finally {
      busyRef.current = false;
      setBusy(false);
    }
  };
  if (success)
    return (
      <section className={styles.success}>
        <h2>Added {success.addedQuantity} cards</h2>
        <p>across {success.entryCount} entries</p>
        <div className={styles.actions}>
          <Link href={`/account/inventory?game=${game.slug}`}>
            Return to inventory
          </Link>
          <button
            onClick={() => {
              setSuccess(null);
              setRows(null);
              setText("");
              setCsvRows([]);
            }}
          >
            Add another batch
          </button>
        </div>
      </section>
    );
  return (
    <div className={styles.page}>
      <section className={styles.game}>
        <span>Selected game</span>
        <strong>{game.name}</strong>
      </section>
      {!rows && (
        <>
          <section className={styles.defaults}>
            <h2>Defaults</h2>
            <label>
              Condition
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              >
                {conditions.map((value) => (
                  <option key={value} value={value}>
                    {pretty(value)}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Language
              <input
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                maxLength={16}
              />
            </label>
            <label>
              Collection
              <select
                value={collectionId}
                onChange={(e) => setCollectionId(e.target.value)}
              >
                <option value="">Unsorted / no collection</option>
                {collections.map((value) => (
                  <option key={value.id} value={value.id}>
                    {value.name}
                  </option>
                ))}
              </select>
            </label>
          </section>
          <div className={styles.tabs}>
            <button
              aria-pressed={method === "paste"}
              onClick={() => setMethod("paste")}
            >
              Paste list
            </button>
            <button
              aria-pressed={method === "csv"}
              onClick={() => setMethod("csv")}
            >
              CSV upload
            </button>
          </div>
          {method === "paste" ? (
            <section className={styles.entry}>
              <textarea
                aria-label="Cards to add"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={
                  "4 Lightning Bolt\n2 Lightning Bolt [M11]\n1 Lightning Bolt [M11] 149"
                }
              />
              <p>
                Use: quantity card name, optionally followed by [set code] and
                collector number. 4x is accepted.
              </p>
            </section>
          ) : (
            <section className={styles.entry}>
              <input type="file" accept=".csv,text/csv" onChange={upload} />
              <a
                download="deckdeal-bulk-template.csv"
                href="data:text/csv;charset=utf-8,quantity%2Cname%2Cset%2Ccollector_number%2Cfinish%2Ccondition%2Clanguage%0A1%2C%2C%2C%2C%2Cnear_mint%2Cen"
              >
                Download CSV template
              </a>
              <p>{csvRows.length} data rows loaded.</p>
            </section>
          )}
          <p>
            {inputRows.length} rows · {total} cards
          </p>
          <button
            className={styles.primary}
            disabled={busy}
            onClick={() => void resolve()}
          >
            {busy ? "Resolving…" : "Review batch"}
          </button>
        </>
      )}
      {rows && (
        <section>
          <div className={styles.reviewHeader}>
            <div>
              <h2>Review</h2>
              <p>
                {unresolved
                  ? `${unresolved} rows require attention.`
                  : "Every row is fully resolved."}
              </p>
            </div>
            <button onClick={() => setRows(null)} disabled={busy}>
              Back to input
            </button>
          </div>
          <div className={styles.tableWrap}>
            <table>
              <thead>
                <tr>
                  <th>Card</th>
                  <th>Input</th>
                  <th>Qty</th>
                  <th>Card / physical details</th>
                  <th>Condition / destination</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.index}>
                    <td className={styles.thumbnailCell}>
                      {(() => {
                        const candidate =
                          row.candidates.find(
                            (value) => value.id === row.printingId,
                          ) ?? row.candidates[0];
                        return candidate?.image_small_uri ? (
                          <button
                            type="button"
                            className={styles.thumbnail}
                            aria-label={`Enlarge ${row.canonicalCard?.name ?? row.name}`}
                            aria-expanded={expandedImage === row.index}
                            onClick={() =>
                              setExpandedImage((value) =>
                                value === row.index ? null : row.index,
                              )
                            }
                          >
                            <Image
                              src={candidate.image_small_uri}
                              alt=""
                              fill
                              sizes="64px"
                              unoptimized
                            />
                            {expandedImage === row.index ? (
                              <span className={styles.enlarged}>
                                <Image
                                  src={candidate.image_small_uri}
                                  alt={`${row.canonicalCard?.name ?? row.name} preview`}
                                  fill
                                  sizes="240px"
                                  unoptimized
                                />
                              </span>
                            ) : null}
                          </button>
                        ) : (
                          <span className={styles.thumbnailPlaceholder}>
                            No image
                          </span>
                        );
                      })()}
                    </td>
                    <td>{row.source}</td>
                    <td>{row.quantity}</td>
                    <td>
                      <strong>{row.canonicalCard?.name ?? row.name}</strong>
                      <br />
                      {row.set ?? "No set"} ·{" "}
                      {row.collectorNumber ?? "No number"} ·{" "}
                      {row.finish ?? "No finish"} · {row.language}
                      <br />
                      {row.candidates.length > 1 ||
                      row.status === "AMBIGUOUS" ||
                      (row.status === "INVALID" &&
                        row.candidates.length > 0) ? (
                        <select
                          aria-label={`Resolve row ${row.index + 1}`}
                          value={
                            row.printingId && row.finish
                              ? `${row.candidates.findIndex((candidate) => candidate.id === row.printingId)}|${row.finish}`
                              : ""
                          }
                          onChange={(e) => {
                            const [candidateIndex, selectedFinish] =
                              e.target.value.split("|");
                            choose(
                              row.index,
                              Number(candidateIndex),
                              selectedFinish!,
                            );
                          }}
                        >
                          <option value="">
                            Choose exact printing and finish
                          </option>
                          {row.candidates.flatMap((candidate, candidateIndex) =>
                            candidate.finishes.map((value) => (
                              <option
                                key={`${candidate.id}:${value}`}
                                value={`${candidateIndex}|${value}`}
                              >
                                {candidate.card_sets.code.toUpperCase()} #
                                {candidate.collector_number} ·{" "}
                                {candidate.language_code.toUpperCase()} ·{" "}
                                {pretty(value)}
                              </option>
                            )),
                          )}
                        </select>
                      ) : null}
                    </td>
                    <td>
                      {pretty(row.condition)}
                      <br />
                      {collections.find(
                        (value) => value.id === row.collectionId,
                      )?.name ?? "Unsorted"}
                    </td>
                    <td>
                      <span className={styles[row.status.toLowerCase()]}>
                        {row.status}
                      </span>
                      {row.message && <small>{row.message}</small>}
                    </td>
                    <td>
                      <button
                        aria-label={`Remove row ${row.index + 1}`}
                        onClick={() =>
                          setRows(
                            (current) =>
                              current?.filter(
                                (value) => value.index !== row.index,
                              ) ?? null,
                          )
                        }
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button
            className={styles.primary}
            disabled={busy || Boolean(unresolved) || !rows.length}
            onClick={() => void submit()}
          >
            {busy
              ? "Adding…"
              : `Add ${rows.reduce((sum, row) => sum + row.quantity, 0)} cards`}
          </button>
        </section>
      )}
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
