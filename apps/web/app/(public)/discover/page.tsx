import Link from "next/link";
import { getDiscoveryFeed } from "../../../features/marketplace/api";
import { DiscoveryFeedView } from "../../../components/discovery-feed/discovery-feed";
import styles from "./page.module.css";
import { cookies } from "next/headers";
import { ACTIVE_GAME_COOKIE, resolveActiveGame } from "../../../features/games/active-game";
import { loadGames } from "../../../features/games/games.server";

type View = "collections" | "stores" | "listings";
const viewOptions: Array<{ value: View; label: string }> = [
  { value: "collections", label: "Collections" }, { value: "stores", label: "Stores" }, { value: "listings", label: "Listings" },
];
const filters = {
  collections: [{ value: "all", label: "All" }, { value: "marketplace", label: "Available now" }],
  stores: [{ value: "all", label: "All participating stores" }, { value: "marketplace", label: "Available now" }],
  listings: [{ value: "all", label: "All" }, { value: "trade", label: "Trade" }, { value: "sale", label: "For sale" }, { value: "mixed", label: "Trade + sale" }],
} as const;

export default async function DiscoverPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const [params, games, cookieStore] = await Promise.all([searchParams, loadGames(), cookies()]);
  const requestedGame = typeof params.game === "string" ? params.game : undefined;
  const game = resolveActiveGame(games, requestedGame, cookieStore.get(ACTIVE_GAME_COOKIE)?.value);
  const gameSuffix = game ? `&game=${encodeURIComponent(game.slug)}` : "";
  const requestedView = typeof params.view === "string" ? params.view : "collections";
  const view: View = viewOptions.some((item) => item.value === requestedView) ? requestedView as View : "collections";
  const filterName = view === "listings" ? "intent" : "availability";
  const requestedFilter = typeof params[filterName] === "string" ? params[filterName] : "all";
  const options = filters[view];
  const filter = options.some((item) => item.value === requestedFilter) ? requestedFilter : "all";
  // Card-centric discovery (listings, collections) is scoped to the active game; the store
  // directory stays global.
  const gameScopedView = view === "listings" || view === "collections";
  let initial = null;
  try {
    initial = gameScopedView && !game
      ? { items: [], next_cursor: null, has_more: false }
      : await getDiscoveryFeed(view, filter, undefined, gameScopedView ? game?.slug : undefined);
  } catch { /* Render a recoverable compact state. */ }

  return <div className={styles.page}>
    <header className={styles.header}>
      <p>Discover DeckDeal</p><h1>Explore collectors, local stores, and cards currently available on DeckDeal.</h1>
      <nav aria-label="Discovery views" className={styles.tabs}>{viewOptions.map((option) => <Link key={option.value}
        href={`/discover?view=${option.value}${gameSuffix}`} aria-current={view === option.value ? "page" : undefined}>{option.label}</Link>)}</nav>
    </header>
    <section className={styles.filters} aria-labelledby="filter-heading">
      <h2 id="filter-heading">{view === "listings" ? "Intent" : "Availability"}</h2>
      <div>{options.map((option) => <Link key={option.value} aria-current={filter === option.value ? "true" : undefined}
        href={`/discover?view=${view}&${filterName}=${option.value}${gameSuffix}`}>{option.label}</Link>)}</div>
    </section>
    {initial ? <DiscoveryFeedView key={`${view}:${filter}:${game?.slug ?? "none"}`} view={view} filter={filter} gameSlug={gameScopedView ? game?.slug : undefined} initial={initial} />
      : <section className={styles.unavailable}><p>Discovery is temporarily unavailable.</p><Link href={`/discover?view=${view}&${filterName}=${filter}${gameSuffix}`}>Try again</Link></section>}
  </div>;
}
