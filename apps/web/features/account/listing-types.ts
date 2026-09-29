import type { PublicListing } from "../marketplace/api";

/** Authenticated owner/offer-participant representation, never a public read DTO. */
export type ManagementListing = Omit<PublicListing, "available" | "inventory_item"> & {
  public_share_path?: string | null;
  inventory_item_id: string;
  preferred_store_id: string | null;
  status: string;
  updated_at: string;
  inventory_item: (NonNullable<PublicListing["inventory_item"]> & {
    id: string;
    quantity: number;
    status: string;
  }) | null;
};
