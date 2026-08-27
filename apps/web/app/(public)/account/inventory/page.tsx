import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  AccountShell,
  AccountState,
} from "../../../../features/account/account-shell";
import {
  AuthenticatedApiError,
  getAuthenticatedCurrentUser,
  getMyCollectionOptions,
  getMyInventory,
} from "../../../../features/auth/authenticated-api";
import { InventoryManager } from "./inventory-manager";

const signInRedirectUrl =
  "/sign-in?redirect_url=%2Faccount%2Finventory";

const statuses = new Set([
  "all",
  "available",
  "not_for_trade",
  "reserved",
  "in_trade",
]);

const conditions = new Set([
  "all",
  "mint",
  "near_mint",
  "lightly_played",
  "moderately_played",
  "heavily_played",
  "damaged",
]);

const normalizePage = (
  value: string | string[] | undefined,
) => {
  const candidate = Array.isArray(value)
    ? value[0]
    : value;

  if (!candidate || !/^\d+$/.test(candidate)) {
    return 1;
  }

  const page = Number(candidate);
  return Number.isSafeInteger(page) && page > 0
    ? page
    : 1;
};

const normalizeText = (
  value: string | string[] | undefined,
) => {
  const candidate = Array.isArray(value)
    ? value[0]
    : value;

  return candidate?.trim().replace(/\s+/g, " ") ?? "";
};

const normalizeOption = (
  value: string | string[] | undefined,
  options: Set<string>,
  fallback: string,
) => {
  const candidate = Array.isArray(value)
    ? value[0]
    : value;

  return candidate && options.has(candidate)
    ? candidate
    : fallback;
};

export default async function AccountInventoryPage({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string | string[];
    q?: string | string[];
    status?: string | string[];
    condition?: string | string[];
    collection?: string | string[];
  }>;
}) {
  const configured = Boolean(
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  );

  if (!configured) {
    return (
      <AccountState
        eyebrow="My DeckDeal"
        title="My Inventory is not configured locally"
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

  const params = await searchParams;
  const page = normalizePage(
    params.page,
  );
  const q = normalizeText(
    params.q,
  );
  const status = normalizeOption(
    params.status,
    statuses,
    "all",
  ) as "all" | "available" | "not_for_trade" | "reserved" | "in_trade";
  const condition = normalizeOption(
    params.condition,
    conditions,
    "all",
  ) as "all" | "mint" | "near_mint" | "lightly_played" | "moderately_played" | "heavily_played" | "damaged";
  const requestedCollection = normalizeText(params.collection);
  const collection = requestedCollection === "unassigned" || /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(requestedCollection)
    ? requestedCollection
    : "all";

  const query = new URLSearchParams({
    page: String(page),
    pageSize: "24",
  });

  if (q) {
    query.set("q", q);
  }

  if (status !== "all") {
    query.set("status", status);
  }

  if (condition !== "all") {
    query.set("condition", condition);
  }
  if (collection !== "all") query.set("collection", collection);

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
          title="This DeckDeal account can’t open My Inventory"
          description="Your authenticated Clerk identity is already bound to a disabled DeckDeal account."
          primaryHref="/"
          primaryLabel="Return to DeckDeal"
        />
      );
    }

    const [inventory, collections] = await Promise.all([
      getMyInventory(query.toString()),
      getMyCollectionOptions(currentUser.user.id),
    ]);

    return (
      <AccountShell
        section="inventory"
        wide
        title="My Inventory"
        intro="Track and organize the cards you own. Selling or trading is handled separately through DeckDeal Listings."
      >
        <InventoryManager
          initialData={inventory}
          initialFilters={{
            page,
            q,
            status,
            condition,
            collection,
          }}
          collections={collections}
        />
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
          title="This DeckDeal account can’t open My Inventory"
          description="Your authenticated Clerk identity does not currently have access to an active DeckDeal account."
          primaryHref="/"
          primaryLabel="Return to DeckDeal"
        />
      );
    }

    return (
      <AccountState
        eyebrow="My DeckDeal"
        title="We couldn’t load your inventory right now"
        description="Please try again shortly."
        primaryHref="/"
        primaryLabel="Return to DeckDeal"
      />
    );
  }
}
