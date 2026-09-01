import "server-only";
import { auth } from "@clerk/nextjs/server";
import type { MyInventoryListResult } from "../account/inventory-types";
import type {
  MyListingOffer,
  MySentOffer,
} from "../account/offer-types";
import type { MyProfile } from "../account/profile-types";
import type { MyTrade } from "../account/trade-types";
import type { StoreHandoff } from "../store/handoff-types";
import type { PublicListing } from "../marketplace/api";

const apiBase = process.env.DECKDEAL_API_URL ?? "http://localhost:4000/api";

export type DeckDealPublicIdentity = {
  id: string;
  display_name: string | null;
  username: string | null;
};

export type AuthenticatedCurrentUser =
  | {
      authenticated: true;
      onboarded: false;
    }
  | {
      authenticated: true;
      onboarded: true;
      account_status: "active" | "disabled";
      user: DeckDealPublicIdentity;
      store_workspaces: StoreWorkspace[];
    };

export type StoreWorkspace = {
  id: string;
  role: string;
  store_id: string;
  store: {
    id: string;
    name: string;
    slug: string;
    logo_url: string | null;
    city: string | null;
    state_region: string | null;
    country_code: string | null;
    status: string;
    verification_status: string;
    trade_mediation_enabled: boolean;
  };
};

export class AuthenticatedApiError extends Error {
  constructor(public readonly status: number) {
    super("Authenticated DeckDeal API request failed");
  }
}

export async function authenticatedApiRequest(
  path: string,
  init: RequestInit = {},
) {
  const { getToken, userId } = await auth();
  const token = await getToken();
  if (!userId || !token) throw new AuthenticatedApiError(401);
  const headers = new Headers(init.headers);
  headers.set("Authorization", `Bearer ${token}`);
  headers.set("Accept", "application/json");
  if (init.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  return fetch(`${apiBase}${path}`, { ...init, headers, cache: "no-store" });
}

export async function authenticatedApiFetch(path: string, init: RequestInit = {}) {
  const response = await authenticatedApiRequest(path, init);
  if (!response.ok) throw new AuthenticatedApiError(response.status);
  return response;
}

export async function getAuthenticatedCurrentUser() {
  return (await authenticatedApiFetch("/auth/me")).json() as Promise<AuthenticatedCurrentUser>;
}

export async function requireActiveDeckDealUser() {
  const currentUser = await getAuthenticatedCurrentUser();
  if (!currentUser.onboarded || currentUser.account_status !== "active") {
    throw new AuthenticatedApiError(403);
  }
  return currentUser.user;
}

export async function getMyProfile() {
  return (await authenticatedApiFetch("/me/profile")).json() as Promise<MyProfile>;
}
export type CardRelationshipContext={canonicalOwned:Record<string,number>;printingOwned:Record<string,number>;canonicalWants:string[];printingWants:string[]};
export async function getMyCardRelationshipContext(gameSlug:string,canonicalCardIds:string[],printingIds:string[]=[]){return (await authenticatedApiFetch("/me/card-context",{method:"POST",body:JSON.stringify({gameSlug,canonicalCardIds,printingIds})})).json() as Promise<CardRelationshipContext>}

export async function getMyInventory(
  query: string,
) {
  const path = query
    ? `/me/inventory?${query}`
    : "/me/inventory";

  return (await authenticatedApiFetch(path)).json() as Promise<MyInventoryListResult>;
}

export async function getMyListings(userId: string) {
  return (await authenticatedApiFetch(
    `/listings/users/${encodeURIComponent(userId)}`,
  )).json() as Promise<PublicListing[]>;
}

export async function getMySentOffers(userId: string, gameSlug?: string) {
  const query = gameSlug ? `?gameSlug=${encodeURIComponent(gameSlug)}` : "";
  return (await authenticatedApiFetch(
    `/offers/users/${encodeURIComponent(userId)}/sent${query}`,
  )).json() as Promise<MySentOffer[]>;
}

export async function getMyReceivedOffers(userId: string, gameSlug?: string) {
  const query = gameSlug ? `?gameSlug=${encodeURIComponent(gameSlug)}` : "";
  return (await authenticatedApiFetch(
    `/offers/users/${encodeURIComponent(userId)}/received${query}`,
  )).json() as Promise<MyListingOffer[]>;
}

export async function getMyTransactions(userId: string, gameSlug?: string) {
  const query = gameSlug ? `?gameSlug=${encodeURIComponent(gameSlug)}` : "";
  return (await authenticatedApiFetch(
    `/transactions/users/${encodeURIComponent(userId)}${query}`,
  )).json() as Promise<MyTrade[]>;
}

export async function getMyTransaction(
  userId: string,
  transactionId: string,
) {
  return (await authenticatedApiFetch(
    `/transactions/${encodeURIComponent(transactionId)}/users/${encodeURIComponent(userId)}`,
  )).json() as Promise<MyTrade>;
}

export async function getStoreHandoffs(storeId: string) {
  return (await authenticatedApiFetch(
    `/store-handoffs/stores/${encodeURIComponent(storeId)}`,
  )).json() as Promise<StoreHandoff[]>;
}

export async function getStoreHandoff(handoffId: string) {
  return (await authenticatedApiFetch(
    `/store-handoffs/${encodeURIComponent(handoffId)}`,
  )).json() as Promise<StoreHandoff>;
}

export async function getMyCollectionOptions(userId: string, gameSlug?: string) {
  const query = gameSlug ? `?gameSlug=${encodeURIComponent(gameSlug)}` : "";
  return (await authenticatedApiFetch(
    `/inventory/users/${encodeURIComponent(userId)}/collections${query}`,
  )).json() as Promise<Array<{
    id: string;
    game_id: string;
    name: string;
    visibility: "private" | "unlisted" | "public";
    _count: { inventory_items: number };
  }>>;
}

export type MyWishlistItem = {
  id: string; status: "active" | "fulfilled" | "paused" | "removed"; quantity_desired: number;
  desired_finish: string | null; desired_condition: string | null; language_code: string | null;
  priority: "low" | "normal" | "high" | "urgent"; notes: string | null;
  willing_to_pay_cash: boolean; willing_to_trade_cards: boolean; max_cash_amount: string | null;
  currency_code: string | null; trade_notes: string | null;
  target: { type: "canonical_card"; canonical_card: { id: string; name: string } | null } |
    { type: "printing"; printing: { id: string; collector_number: string; language_code: string; image_small_uri: string | null; canonical_cards: { id: string; name: string }; card_sets: { code: string; name: string } } | null };
};
export type MyWishlist = {
  id: string; game_id: string; name: string; description: string | null;
  visibility: "private" | "unlisted" | "public"; status: "active" | "archived";
  preferred_store: { id: string; name: string } | null; items: MyWishlistItem[];
};
export async function getMyWishlists(gameSlug: string) {
  return (await authenticatedApiFetch(`/me/wishlists?gameSlug=${encodeURIComponent(gameSlug)}`)).json() as Promise<MyWishlist[]>;
}

export async function tryGetAuthenticatedCurrentUser() {
  try {
    return await getAuthenticatedCurrentUser();
  } catch (error) {
    if (error instanceof AuthenticatedApiError && error.status === 401) {
      return null;
    }

    throw error;
  }
}
