import Link from "next/link";
import { cookies } from "next/headers";
import { CardTile } from "../../../components/card-tile/card-tile";
import { SearchForm } from "../../../components/search-form/search-form";
import {
  ACTIVE_GAME_COOKIE,
  catalogSearchHref,
  resolveActiveGame,
} from "../../../features/games/active-game";
import { loadGames } from "../../../features/games/games.server";
import { searchCatalog } from "../../../features/marketplace/api";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string; game?: string }>;
}) {
  const [params, games, cookieStore] = await Promise.all([
    searchParams,
    loadGames(),
    cookies(),
  ]);
  const query = params.q?.trim().replace(/\s+/g, " ") ?? "";
  const parsed = Number(params.page);
  const page = Number.isInteger(parsed) && parsed > 0 ? parsed : 1;
  const game = resolveActiveGame(
    games,
    params.game,
    cookieStore.get(ACTIVE_GAME_COOKIE)?.value,
  );
  const result = game
    ? await searchCatalog({ query, page, gameId: game.id })
    : {
        query,
        items: [],
        page,
        page_size: 60,
        total_results: 0,
        total_pages: 0,
        cards: [],
      };
  const start = result.total_results
    ? (result.page - 1) * result.page_size + 1
    : 0;
  const end = Math.min(
    result.page * result.page_size,
    result.total_results,
  );
  const href = (value: number) =>
    game ? catalogSearchHref(query, game.slug, value) : `/search?q=${encodeURIComponent(query)}`;

  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <p>Catalog search</p>
        <h1>{query ? `Results for “${query}”` : "Find your next card"}</h1>
        {query && <p>{result.total_results.toLocaleString()} cards found</p>}
        <SearchForm defaultValue={query} />
      </div>
      <section className={styles.results} aria-label="Catalog search results">
        {result.cards.length ? (
          <ul className={styles.grid}>
            {result.cards.map((card) => (
              <li key={card.canonicalCardId}>
                <CardTile card={card} layout="grid" canonicalAdd />
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.empty}>
            {query
              ? "No matching cards were found. Try another card name."
              : "Enter a card name to explore the catalog."}
          </p>
        )}
        {result.total_pages > 0 && (
          <nav className={styles.pagination} aria-label="Search result pages">
            <p>
              Showing {start}–{end} of {result.total_results.toLocaleString()} ·
              Page {result.page} of {result.total_pages}
            </p>
            <div>
              {result.page > 1 ? (
                <Link href={href(result.page - 1)}>Previous</Link>
              ) : (
                <span />
              )}
              {result.page < result.total_pages && (
                <Link href={href(result.page + 1)}>Next</Link>
              )}
            </div>
          </nav>
        )}
      </section>
    </main>
  );
}
