"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

type Preflight = { requested_items: number; eligible: number; skipped_already_listed: number; skipped_ineligible: number };
const body = async (response: Response) => response.json().catch(() => ({})) as Promise<{ message?: string } & Partial<Preflight> & { created_listings?: number }>;

export function CollectionActions({ gameSlug, collectionId }: { gameSlug: string; collectionId?: string }) {
  const router = useRouter();
  const [creating, setCreating] = useState(false);
  const [listing, setListing] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preflight, setPreflight] = useState<Preflight | null>(null);

  const create = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setBusy(true); setError(null);
    const data = new FormData(event.currentTarget);
    const response = await fetch("/api/me/collections", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ gameSlug, name: data.get("name"), description: data.get("description") || null, visibility: data.get("visibility") }) });
    const result = await body(response);
    if (!response.ok) { setError(result.message ?? "The collection could not be created."); setBusy(false); return; }
    setCreating(false); setBusy(false); router.refresh();
  };
  const review = async () => {
    if (!collectionId) return; setBusy(true); setError(null);
    const response = await fetch(`/api/me/collections/${encodeURIComponent(collectionId)}/listings?gameSlug=${encodeURIComponent(gameSlug)}`);
    const result = await body(response);
    if (!response.ok) setError(result.message ?? "The collection could not be reviewed.");
    else { setPreflight(result as Preflight); setListing(true); }
    setBusy(false);
  };
  const list = async () => {
    if (!collectionId) return; setBusy(true); setError(null);
    const response = await fetch(`/api/me/collections/${encodeURIComponent(collectionId)}/listings`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ gameSlug, acceptsCash: false, acceptsTrade: true }) });
    const result = await body(response);
    if (!response.ok) { setError(result.message ?? "The collection could not be listed."); setBusy(false); return; }
    setListing(false); setPreflight(null); setBusy(false); router.refresh();
  };
  return <>
    <button className={styles.secondaryButton} type="button" onClick={() => { setCreating(true); setError(null); }}>+ Create collection</button>
    {collectionId ? <button className={styles.secondaryButton} type="button" disabled={busy} onClick={() => void review()}>List collection</button> : null}
    {creating ? <div className={styles.backdrop}><section className={styles.editDialog} role="dialog" aria-modal="true" aria-labelledby="create-collection-title"><header><div><p className={styles.kicker}>Active game</p><h2 id="create-collection-title">Create collection</h2><span>{gameSlug}</span></div><button className={styles.iconButton} type="button" onClick={() => setCreating(false)} aria-label="Close">×</button></header><form className={styles.editForm} onSubmit={create}><label><span>Name</span><input name="name" required maxLength={200} /></label><label><span>Description (optional)</span><textarea name="description" /></label><label><span>Visibility</span><select name="visibility" defaultValue="private"><option value="private">Private</option><option value="unlisted">Unlisted</option><option value="public">Public</option></select></label>{error ? <p className={styles.error} role="alert">{error}</p> : null}<div className={styles.dialogActions}><button className={styles.secondaryButton} type="button" onClick={() => setCreating(false)}>Cancel</button><button className={styles.primaryButton} disabled={busy}>{busy ? "Creating…" : "Create collection"}</button></div></form></section></div> : null}
    {listing && preflight ? <div className={styles.backdrop}><section className={styles.editDialog} role="dialog" aria-modal="true" aria-labelledby="list-collection-title"><header><div><p className={styles.kicker}>Preflight review</p><h2 id="list-collection-title">List collection</h2></div><button className={styles.iconButton} type="button" onClick={() => setListing(false)} aria-label="Close">×</button></header><div className={styles.tradeDialogBody}><p>{preflight.requested_items} cards in Collection</p><p>{preflight.eligible} eligible · {preflight.skipped_already_listed} already listed · {preflight.skipped_ineligible} unavailable</p><p>Eligible cards will become normal individual trade listings. The Collection will not change.</p><p><strong>Common listing settings:</strong> trade offers accepted; cash offers not accepted.</p>{error ? <p className={styles.error} role="alert">{error}</p> : null}<div className={styles.dialogActions}><button className={styles.secondaryButton} type="button" onClick={() => setListing(false)}>Cancel</button><button className={styles.primaryButton} disabled={busy || !preflight.eligible} onClick={() => void list()}>{busy ? "Listing…" : `Create ${preflight.eligible} listings`}</button></div></div></section></div> : null}
  </>;
}
