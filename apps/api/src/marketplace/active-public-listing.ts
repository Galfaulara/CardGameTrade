import type { Prisma } from "@repo/db";

export const activePublicListingWhere = {
  status: "active",
  OR: [{ accepts_trade: true }, { accepts_cash: true }],
} satisfies Prisma.listingsWhereInput;

/**
 * Seller-side eligibility for a publicly readable listing: the backing
 * inventory item must still be available and its owner must be an eligible
 * public seller. A listing whose inventory moved to `reserved`, `in_trade`,
 * `sold` or `removed` is no longer public marketplace truth even while the
 * listing row itself still says `active`.
 */
const eligiblePublicListingSeller = {
  OR: [
    {
      seller_user_id: { not: null },
      seller_store_id: null,
      inventory_items_listings_inventory_item_id_seller_user_idToinventory_items: {
        is: {
          status: "available",
          owner_store_id: null,
          user_profiles: { status: "active" },
        },
      },
    },
    {
      seller_store_id: { not: null },
      seller_user_id: null,
      inventory_items_listings_inventory_item_id_seller_store_idToinventory_items: {
        is: {
          status: "available",
          owner_user_id: null,
          stores: {
            status: "active",
            verification_status: "verified",
            trade_mediation_enabled: true,
          },
        },
      },
    },
  ],
} satisfies Prisma.listingsWhereInput;

/**
 * The single authoritative rule for whether a listing may be read through an
 * unauthenticated public surface.
 *
 * `listings.status` may be any of active | paused | closed | sold | traded |
 * removed. Only `active` is public, and only when the listing still offers a
 * cash or trade intent and is backed by eligible available inventory. Every
 * other status is terminal or owner-suspended and must be invisible publicly;
 * owners continue to see their own historical listings through the authorized
 * account endpoints, which do not use this rule.
 */
export const publicListingWhere = {
  ...activePublicListingWhere,
  AND: eligiblePublicListingSeller,
} satisfies Prisma.listingsWhereInput;

export function isVisibleInterestTarget({
  collectionVisibility,
  activeListingCount,
}: {
  collectionVisibility: string | null;
  activeListingCount: number;
}) {
  return collectionVisibility !== null && collectionVisibility !== "private"
    ? true
    : activeListingCount > 0;
}
