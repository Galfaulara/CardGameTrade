import type { Prisma } from "@repo/db";

export const activePublicListingWhere = {
  status: "active",
  OR: [{ accepts_trade: true }, { accepts_cash: true }],
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
