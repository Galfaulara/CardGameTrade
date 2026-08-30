import { auth } from "@clerk/nextjs/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AccountShell } from "../../../../../features/account/account-shell";
import {
  getAuthenticatedCurrentUser,
  getMyCollectionOptions,
} from "../../../../../features/auth/authenticated-api";
import {
  ACTIVE_GAME_COOKIE,
  resolveActiveGame,
} from "../../../../../features/games/active-game";
import { loadGames } from "../../../../../features/games/games.server";
import { BulkAddInventory } from "./bulk-add-inventory";

export default async function BulkAddPage({
  searchParams,
}: {
  searchParams: Promise<{ game?: string }>;
}) {
  const { userId } = await auth();
  if (!userId)
    redirect("/sign-in?redirect_url=%2Faccount%2Finventory%2Fbulk-add");
  const [me, games, params, cookieStore] = await Promise.all([
    getAuthenticatedCurrentUser(),
    loadGames(),
    searchParams,
    cookies(),
  ]);
  if (!me.onboarded) redirect("/onboarding");
  if (me.account_status !== "active") redirect("/account/inventory");
  const game = resolveActiveGame(
    games,
    params.game,
    cookieStore.get(ACTIVE_GAME_COOKIE)?.value,
  );
  if (!game) redirect("/account/inventory");
  const collections = await getMyCollectionOptions(me.user.id, game.slug);
  return (
    <AccountShell
      section="inventory"
      wide
      title="Bulk add cards"
      intro="Resolve exact physical printings before adding a batch to your inventory."
    >
      <BulkAddInventory game={game} collections={collections} />
    </AccountShell>
  );
}
