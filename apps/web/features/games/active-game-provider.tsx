"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  ACTIVE_GAME_COOKIE,
  ACTIVE_GAME_COOKIE_MAX_AGE,
  isGameCentricRoute,
  orderGames,
  resolveActiveGame,
  type DeckDealGame,
} from "./active-game";

type ActiveGameContextValue = {
  games: DeckDealGame[];
  activeGame: DeckDealGame | null;
  activeGameId: string | null;
  activeGameSlug: string | null;
  setActiveGame: (game: DeckDealGame | string) => void;
};

const ActiveGameContext = createContext<ActiveGameContextValue | null>(null);

function persistGame(slug: string) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${ACTIVE_GAME_COOKIE}=${encodeURIComponent(slug)}; Path=/; Max-Age=${ACTIVE_GAME_COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
}

export function ActiveGameProvider({
  games,
  serverResolvedGame,
  children,
}: {
  games: DeckDealGame[];
  serverResolvedGame: DeckDealGame | null;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const orderedGames = useMemo(() => orderGames(games), [games]);
  const urlSlug = isGameCentricRoute(pathname) ? searchParams.get("game") : null;
  const [activeGame, setActiveGameState] = useState(() =>
    resolveActiveGame(orderedGames, urlSlug, serverResolvedGame?.slug),
  );

  useEffect(() => {
    if (!urlSlug) return;
    const resolved = orderedGames.find((game) => game.slug === urlSlug);
    if (resolved && resolved.id !== activeGame?.id) setActiveGameState(resolved);
  }, [activeGame?.id, orderedGames, urlSlug]);

  useEffect(() => {
    if (activeGame) persistGame(activeGame.slug);
  }, [activeGame]);

  const value = useMemo<ActiveGameContextValue>(() => ({
    games: orderedGames,
    activeGame,
    activeGameId: activeGame?.id ?? null,
    activeGameSlug: activeGame?.slug ?? null,
    setActiveGame: (candidate) => {
      const slug = typeof candidate === "string" ? candidate : candidate.slug;
      const selected = orderedGames.find((game) => game.slug === slug);
      if (!selected) return;
      setActiveGameState(selected);
      persistGame(selected.slug);
    },
  }), [activeGame, orderedGames]);

  return <ActiveGameContext.Provider value={value}>{children}</ActiveGameContext.Provider>;
}

export function useActiveGame() {
  const context = useContext(ActiveGameContext);
  if (!context) throw new Error("useActiveGame must be used inside ActiveGameProvider.");
  return context;
}
