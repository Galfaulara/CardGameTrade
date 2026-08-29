import type { ReactNode } from "react";
import { cookies } from "next/headers";
import { AppShell } from "../../components/app-shell/app-shell";
import { NavigationTracker } from "../../components/navigation-back/navigation-tracker";
import { AddToCollectionProvider } from "../../components/add-to-collection/add-to-collection-provider";
import { ActiveGameProvider } from "../../features/games/active-game-provider";
import { ACTIVE_GAME_COOKIE, resolveActiveGame } from "../../features/games/active-game";
import { loadGames } from "../../features/games/games.server";

export default async function PublicLayout({ children }: { children: ReactNode }) {
  const [games, cookieStore] = await Promise.all([loadGames(), cookies()]);
  const serverResolvedGame = resolveActiveGame(games, null, cookieStore.get(ACTIVE_GAME_COOKIE)?.value);
  return (
    <ActiveGameProvider games={games} serverResolvedGame={serverResolvedGame}>
      <AppShell>
        <NavigationTracker />
        <AddToCollectionProvider>{children}</AddToCollectionProvider>
      </AppShell>
    </ActiveGameProvider>
  );
}
