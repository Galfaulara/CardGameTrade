import "server-only";
import { auth } from "@clerk/nextjs/server";
import type { MyInventoryListResult } from "../account/inventory-types";
import type { MySentOffer } from "../account/offer-types";
import type { MyProfile } from "../account/profile-types";
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

export async function getMySentOffers(userId: string) {
  return (await authenticatedApiFetch(
    `/offers/users/${encodeURIComponent(userId)}/sent`,
  )).json() as Promise<MySentOffer[]>;
}

export async function getMyCollectionOptions(userId: string) {
  return (await authenticatedApiFetch(
    `/inventory/users/${encodeURIComponent(userId)}/collections`,
  )).json() as Promise<Array<{
    id: string;
    name: string;
    visibility: "private" | "unlisted" | "public";
    _count: { inventory_items: number };
  }>>;
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
