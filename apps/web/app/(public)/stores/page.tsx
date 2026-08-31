import Link from "next/link";
import { DiscoveryFeedView } from "../../../components/discovery-feed/discovery-feed";
import { getDiscoveryFeed } from "../../../features/marketplace/api";
import styles from "../discover/page.module.css";

export default async function StoresPage({ searchParams }: { searchParams: Promise<{ availability?: string | string[] }> }) {
  const params = await searchParams;
  const requested = Array.isArray(params.availability) ? params.availability[0] : params.availability;
  const filter = requested === "marketplace" ? "marketplace" : "all";
  let initial = null;
  try { initial = await getDiscoveryFeed("stores", filter); } catch { /* recoverable state */ }
  return <div className={styles.page}><header className={styles.header}><p>Local Stores</p><h1>Find participating local game stores that mediate DeckDeal trades.</h1></header><section className={styles.filters} aria-labelledby="store-filter"><h2 id="store-filter">Availability</h2><div><Link href="/stores?availability=all" aria-current={filter === "all" ? "true" : undefined}>All participating stores</Link><Link href="/stores?availability=marketplace" aria-current={filter === "marketplace" ? "true" : undefined}>Available now</Link></div></section>{initial ? <DiscoveryFeedView view="stores" filter={filter} initial={initial} /> : <section className={styles.unavailable}>Store discovery is temporarily unavailable.</section>}</div>;
}
