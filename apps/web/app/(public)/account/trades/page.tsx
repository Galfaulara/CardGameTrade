import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  AccountShell,
  AccountState,
} from "../../../../features/account/account-shell";
import {
  tradeCounterparty,
  tradeInventoryName,
  tradeInventoryPrinting,
  tradeNextStep,
  tradeParticipantHref,
  tradeParticipantLabel,
  tradePerspectiveItems,
  tradeStatusLabel,
} from "../../../../features/account/trade-types";
import {
  AuthenticatedApiError,
  getAuthenticatedCurrentUser,
  getMyTransactions,
} from "../../../../features/auth/authenticated-api";
import { loadGames } from "../../../../features/games/games.server";
import { ACTIVE_GAME_COOKIE, orderGames } from "../../../../features/games/active-game";
import {
  ALL_GAMES_VALUE,
  resolveOptionalGameFilter,
} from "../../../../features/games/optional-game-filter";
import styles from "./page.module.css";

const signInRedirectUrl =
  "/sign-in?redirect_url=%2Faccount%2Ftrades";

const tradesGameHref = (gameSlug: string) =>
  `/account/trades?${new URLSearchParams({ game: gameSlug }).toString()}`;

export default async function AccountTradesPage({
  searchParams,
}: {
  searchParams: Promise<{ game?: string | string[] }>;
}) {
  const configured = Boolean(
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  );

  if (!configured) {
    return (
      <AccountState
        eyebrow="My DeckDeal"
        title="My Trades are not configured locally"
        description="Add the Clerk development environment values described in .env.example, then restart the web app."
        primaryHref="/"
        primaryLabel="Continue browsing DeckDeal"
      />
    );
  }

  const { userId } = await auth();
  if (!userId) {
    redirect(signInRedirectUrl);
  }

  const [params, games, cookieStore] = await Promise.all([
    searchParams,
    loadGames(),
    cookies(),
  ]);
  const gameRaw = Array.isArray(params.game) ? params.game[0] : params.game;
  const gameFilter = resolveOptionalGameFilter(
    games,
    gameRaw,
    cookieStore.get(ACTIVE_GAME_COOKIE)?.value,
  );

  try {
    const currentUser =
      await getAuthenticatedCurrentUser();

    if (!currentUser.onboarded) {
      redirect("/onboarding");
    }

    if (currentUser.account_status !== "active") {
      return (
        <AccountState
          eyebrow="DeckDeal account unavailable"
          title="This DeckDeal account can’t open My Trades"
          description="Your authenticated Clerk identity is already bound to a disabled DeckDeal account."
          primaryHref="/"
          primaryLabel="Return to DeckDeal"
        />
      );
    }

    const trades = await getMyTransactions(
      currentUser.user.id,
      gameFilter,
    );

    return (
      <AccountShell
        section="trades"
        title="My Trades"
        intro="These are your accepted Store-mediated DeckDeal trades. Ownership stays unchanged until authorized Store release."
      >
        {games.length > 0 && (
          <nav className={styles.tabs} aria-label="Trade game filter">
            <Link
              href={tradesGameHref(ALL_GAMES_VALUE)}
              aria-current={!gameFilter ? "page" : undefined}
            >
              All games
            </Link>
            {orderGames(games).map((game) => (
              <Link
                key={game.id}
                href={tradesGameHref(game.slug)}
                aria-current={gameFilter === game.slug ? "page" : undefined}
              >
                {game.name}
              </Link>
            ))}
          </nav>
        )}
        {trades.length ? (
          <ul className={styles.list}>
            {trades.map((trade) => {
              const counterpart =
                tradeCounterparty(trade);
              const counterpartHref =
                tradeParticipantHref(
                  counterpart,
                );
              const perspective =
                tradePerspectiveItems(
                  trade,
                  currentUser.user.id,
                );

              return (
                <li key={trade.id}>
                  <article className={styles.card}>
                    <div className={styles.header}>
                      <div>
                        <p className={styles.kicker}>
                          Trade
                        </p>
                        <h2>
                          {counterpartHref ? (
                            <Link href={counterpartHref}>
                              {tradeParticipantLabel(counterpart)}
                            </Link>
                          ) : (
                            tradeParticipantLabel(counterpart)
                          )}
                        </h2>
                      </div>
                      <span className={styles.status}>
                        {tradeStatusLabel(trade)}
                      </span>
                    </div>

                    <p className={styles.meta}>
                      Handoff location · {trade.handoff?.store?.name ?? "Store pending"}
                    </p>
                    <p className={styles.meta}>
                      {tradeNextStep(trade)}
                    </p>
                    <p className={styles.meta}>
                      Agreed {new Date(trade.agreed_at).toLocaleString()}
                    </p>

                    <div className={styles.columns}>
                      <section>
                        <h3>You give</h3>
                        <ul>
                          {perspective.give.map(
                            (item) => (
                              <li key={item.id}>
                                {tradeInventoryName(item.source_inventory)}
                                <span>
                                  {tradeInventoryPrinting(item.source_inventory)}
                                </span>
                              </li>
                            ),
                          )}
                        </ul>
                      </section>
                      <section>
                        <h3>You receive</h3>
                        <ul>
                          {perspective.receive.map(
                            (item) => (
                              <li key={item.id}>
                                {tradeInventoryName(item.source_inventory)}
                                <span>
                                  {tradeInventoryPrinting(item.source_inventory)}
                                </span>
                              </li>
                            ),
                          )}
                        </ul>
                      </section>
                    </div>

                    <div className={styles.actions}>
                      <Link
                        className={styles.primaryAction}
                        href={`/account/trades/${trade.id}`}
                      >
                        View trade
                      </Link>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        ) : (
          <section className={styles.empty}>
            <h2>You don’t have any accepted trades yet.</h2>
            <p>
              Accepted offers will appear here once both collectors are routed
              into a Store-mediated handoff.
            </p>
          </section>
        )}
      </AccountShell>
    );
  } catch (error) {
    if (
      error instanceof AuthenticatedApiError &&
      error.status === 401
    ) {
      redirect(signInRedirectUrl);
    }

    if (
      error instanceof AuthenticatedApiError &&
      error.status === 403
    ) {
      return (
        <AccountState
          eyebrow="DeckDeal account unavailable"
          title="This DeckDeal account can’t open My Trades"
          description="Your authenticated Clerk identity does not currently have access to an active DeckDeal account."
          primaryHref="/"
          primaryLabel="Return to DeckDeal"
        />
      );
    }

    return (
      <AccountState
        eyebrow="My DeckDeal"
        title="We couldn’t load your trades right now"
        description="Please try again shortly."
        primaryHref="/"
        primaryLabel="Return to DeckDeal"
      />
    );
  }
}
