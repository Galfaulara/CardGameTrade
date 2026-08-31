import { auth } from "@clerk/nextjs/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  AccountShell,
  AccountState,
} from "../../../../features/account/account-shell";
import {
  AuthenticatedApiError,
  getAuthenticatedCurrentUser,
  getMyWishlists,
} from "../../../../features/auth/authenticated-api";
import {
  ACTIVE_GAME_COOKIE,
  resolveActiveGame,
} from "../../../../features/games/active-game";
import { loadGames } from "../../../../features/games/games.server";
import { WantsManager } from "./wants-manager";

export default async function WantsPage({
  searchParams,
}: {
  searchParams: Promise<{
    game?: string | string[];
    wishlist?: string | string[];
  }>;
}) {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)
    return (
      <AccountState
        eyebrow="My DeckDeal"
        title="My Wants is not configured locally"
        description="Configure Clerk to manage Wishlists."
        primaryHref="/"
        primaryLabel="Continue browsing"
      />
    );
  if (!(await auth()).userId)
    redirect("/sign-in?redirect_url=%2Faccount%2Fwants");
  const [params, games, cookieStore] = await Promise.all([
    searchParams,
    loadGames(),
    cookies(),
  ]);
  const requested = Array.isArray(params.game) ? params.game[0] : params.game;
  const game = resolveActiveGame(
    games,
    requested,
    cookieStore.get(ACTIVE_GAME_COOKIE)?.value,
  );
  if (!game)
    return (
      <AccountState
        eyebrow="My DeckDeal"
        title="Choose a game to manage Wants"
        description="An active game is required."
        primaryHref="/"
        primaryLabel="Return home"
      />
    );
  try {
    const me = await getAuthenticatedCurrentUser();
    if (!me.onboarded) redirect("/onboarding");
    const wishlists = await getMyWishlists(game.slug);
    const selectedId = Array.isArray(params.wishlist)
      ? params.wishlist[0]
      : params.wishlist;
    return (
      <AccountShell
        section="wants"
        wide
        title="My Wants / Wishlists"
        intro="Create game-scoped Wishlists and tell other collectors which cards you want."
      >
        <WantsManager
          game={game}
          initialWishlists={wishlists}
          initialWishlistId={
            wishlists.some((value) => value.id === selectedId)
              ? selectedId
              : wishlists[0]?.id
          }
        />
      </AccountShell>
    );
  } catch (error) {
    if (error instanceof AuthenticatedApiError && error.status === 401)
      redirect("/sign-in?redirect_url=%2Faccount%2Fwants");
    return (
      <AccountState
        eyebrow="My DeckDeal"
        title="We couldn’t load My Wants"
        description="Please try again shortly."
        primaryHref="/account"
        primaryLabel="Back to account"
      />
    );
  }
}
