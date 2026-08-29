"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CardView, DiscoverCollection, DiscoverStore, DiscoveryFeed } from "../../features/marketplace/api";
import { CardRail } from "../card-rail/card-rail";
import { CardTile } from "../card-tile/card-tile";
import { PublicUserLink } from "../public-user-link/public-user-link";
import { PublicStoreLink } from "../public-store-link/public-store-link";
import styles from "./discovery-feed.module.css";
import { canAppendDiscoveryResponse, discoveryFeedSearch } from "../../features/games/discovery-game";

type ListingItem = { id: string; card: CardView };
type FeedItem = DiscoverCollection | DiscoverStore | ListingItem;

export function DiscoveryFeedView({ view, filter, gameSlug, initial }: { view: "collections" | "stores" | "listings"; filter: string; gameSlug?: string; initial: DiscoveryFeed<FeedItem> }) {
  const [items, setItems] = useState(initial.items); const [cursor, setCursor] = useState(initial.next_cursor);
  const [hasMore, setHasMore] = useState(initial.has_more); const [loading, setLoading] = useState(false); const [failed, setFailed] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  const gameRef = useRef(gameSlug); gameRef.current = gameSlug;
  const requestRef = useRef<AbortController | null>(null);
  const loadMore = useCallback(async () => {
    if (!cursor || loading) return; setLoading(true); setFailed(false);
    const requestGame = gameSlug;
    requestRef.current?.abort();
    const controller = new AbortController(); requestRef.current = controller;
    try {
      const query = discoveryFeedSearch({ view, filter, cursor, gameSlug });
      const response = await fetch(`/api/discovery-feed?${query}`, { signal: controller.signal });
      if (!response.ok) throw new Error(); const page = await response.json() as DiscoveryFeed<FeedItem>;
      if (!canAppendDiscoveryResponse(requestGame, gameRef.current)) return;
      setItems((current) => { const ids = new Set(current.map((item) => item.id)); return [...current, ...page.items.filter((item) => !ids.has(item.id))]; });
      setCursor(page.next_cursor); setHasMore(page.has_more);
    } catch (error) { if (!(error instanceof DOMException && error.name === "AbortError")) setFailed(true); }
    finally { if (requestRef.current === controller) { requestRef.current = null; setLoading(false); } }
  }, [cursor, filter, gameSlug, loading, view]);
  useEffect(() => () => requestRef.current?.abort(), [gameSlug]);
  useEffect(() => {
    const node = sentinel.current; if (!node || !hasMore || !cursor || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => { if (entries[0]?.isIntersecting) void loadMore(); }, { rootMargin: "400px" });
    observer.observe(node); return () => observer.disconnect();
  }, [cursor, hasMore, loadMore]);

  const empty = view === "collections" ? "No public collections match these filters." : view === "stores"
    ? "No participating stores match these filters." : "No active Listings match these filters.";
  return <section className={styles.results} aria-label={`${view} discovery results`}>
    {!items.length ? <p className={styles.empty}>{empty}</p> : view === "listings"
      ? <div className={styles.grid}>{(items as ListingItem[]).map((item) => <CardTile key={item.id} card={item.card} layout="grid" />)}</div>
      : <div className={styles.previews}>{view === "collections" ? (items as DiscoverCollection[]).map((item) => <CardRail key={item.id}
          eyebrow={<><PublicUserLink user={item.owner} />&apos;s collection</>} title={item.name}
          meta={`${item.card_quantity.toLocaleString()} cards`} preferredStore={item.preferred_store ?? undefined}
          action={{ href: `/collections/${item.id}`, label: "View collection →" }} cards={item.cards}
          emptyMessage="No cards from this collection are currently listed." />)
        : (items as DiscoverStore[]).map((item) => <CardRail key={item.id} tone="fresh" eyebrow="Local game store"
          title={<><PublicStoreLink store={item} /> <span aria-label="verified DeckDeal mediation store">✓</span></>}
          meta={`${[item.city,item.state_region,item.country_code].filter(Boolean).join(", ") || "Location not provided"} · ${item.card_quantity.toLocaleString()} cards in public inventory · ${item.marketplace_card_quantity.toLocaleString()} available on DeckDeal`}
          action={{ href: `/stores/${item.id}`, label: "View store →" }} cards={item.cards} emptyMessage="No cards currently listed." />)}</div>}
    <div ref={sentinel} className={styles.sentinel} aria-hidden="true" />
    {loading && <p className={styles.status} role="status">Loading more results…</p>}
    {failed && <div className={styles.failure} role="alert"><p>Could not load more results.</p><button type="button" onClick={() => void loadMore()}>Try again</button></div>}
    {hasMore && !failed && <button className={styles.load} type="button" disabled={loading} onClick={() => void loadMore()}>{loading ? "Loading…" : "Load more"}</button>}
    {!hasMore && items.length > 0 && <p className={styles.end}>You&apos;ve reached the end.</p>}
  </section>;
}
