"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { gameSwitchHref, isGameCentricRoute } from "../../features/games/active-game";
import { useActiveGame } from "../../features/games/active-game-provider";
import styles from "./active-game-selector.module.css";

export function ActiveGameSelector() {
  const { games, activeGame, setActiveGame } = useActiveGame();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  if (!games.length || !activeGame) return null;

  return (
    <div className={styles.field}>
      <label htmlFor="deckdeal-active-game">Game</label>
      <select
        id="deckdeal-active-game"
        value={activeGame.slug}
        onChange={(event) => {
          const slug = event.currentTarget.value;
          setActiveGame(slug);
          if (isGameCentricRoute(pathname)) {
            router.push(gameSwitchHref(pathname, searchParams.toString(), slug));
          }
        }}
      >
        {games.map((game) => <option key={game.id} value={game.slug}>{game.name}</option>)}
      </select>
    </div>
  );
}
