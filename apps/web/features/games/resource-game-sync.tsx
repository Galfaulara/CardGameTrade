"use client";

import { useEffect } from "react";
import { resourceGameSyncTarget } from "./active-game";
import { useActiveGame } from "./active-game-provider";

export function ResourceGameSync({ gameId }: { gameId: string }) {
  const { games, activeGameId, setActiveGame } = useActiveGame();

  useEffect(() => {
    const resourceGame = resourceGameSyncTarget(games, activeGameId, gameId);
    if (resourceGame) setActiveGame(resourceGame);
  }, [activeGameId, gameId, games, setActiveGame]);

  return null;
}
