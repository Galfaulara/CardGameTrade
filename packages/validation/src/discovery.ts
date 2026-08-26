import { z } from "zod";

const boundedInteger = (
  defaultValue: number,
  maximum: number,
) =>
  z.coerce
    .number()
    .int()
    .min(1)
    .max(maximum)
    .default(defaultValue);

const booleanQuery = z
  .enum(["true", "false"])
  .transform((value) => value === "true")
  .default("false");

export const discoveryCollectionListQuerySchema =
  z
    .object({
      limit: boundedInteger(6, 12),
      previewLimit: boundedInteger(10, 12),
      marketplaceOnly: booleanQuery,
      diverseOwners: booleanQuery,
    })
    .strict();

export const discoveryStoreListQuerySchema =
  z
    .object({
      limit: boundedInteger(6, 12),
      previewLimit: boundedInteger(10, 12),
      marketplaceOnly: booleanQuery,
    })
    .strict();

const cursor = z.string().min(1).max(1000).optional();

export const discoveryCollectionFeedQuerySchema = z.object({
  limit: boundedInteger(12, 24),
  previewLimit: boundedInteger(5, 5),
  availability: z.enum(["all", "marketplace"]).default("all"),
  cursor,
}).strict();

export const discoveryStoreFeedQuerySchema = z.object({
  limit: boundedInteger(12, 24),
  previewLimit: boundedInteger(5, 5),
  availability: z.enum(["all", "marketplace"]).default("all"),
  cursor,
}).strict();

export const discoveryListingFeedQuerySchema = z.object({
  limit: boundedInteger(24, 48),
  intent: z.enum(["all", "trade", "sale", "mixed"]).default("all"),
  cursor,
}).strict();

export const discoveryInventoryPageQuerySchema =
  z
    .object({
      page: boundedInteger(1, 1000000),
      pageSize: boundedInteger(24, 48),
    })
    .strict();

export const discoveryUserCollectionQuerySchema = z.object({
  page: boundedInteger(1, 1000000),
  pageSize: boundedInteger(6, 6),
  previewLimit: boundedInteger(4, 6),
}).strict();

export const discoveryUserListingQuerySchema = z.object({
  page: boundedInteger(1, 1000000),
  pageSize: boundedInteger(24, 48),
}).strict();

export const discoveryUserWishlistQuerySchema = z.object({
  page: boundedInteger(1, 1000000),
  pageSize: boundedInteger(6, 12),
  previewLimit: boundedInteger(6, 6),
}).strict();

export type DiscoveryCollectionListQuery =
  z.infer<
    typeof discoveryCollectionListQuerySchema
  >;

export type DiscoveryStoreListQuery =
  z.infer<
    typeof discoveryStoreListQuerySchema
  >;

export type DiscoveryCollectionFeedQuery = z.infer<typeof discoveryCollectionFeedQuerySchema>;
export type DiscoveryStoreFeedQuery = z.infer<typeof discoveryStoreFeedQuerySchema>;
export type DiscoveryListingFeedQuery = z.infer<typeof discoveryListingFeedQuerySchema>;

export type DiscoveryInventoryPageQuery =
  z.infer<
    typeof discoveryInventoryPageQuerySchema
  >;

export type DiscoveryUserCollectionQuery = z.infer<typeof discoveryUserCollectionQuerySchema>;
export type DiscoveryUserListingQuery = z.infer<typeof discoveryUserListingQuerySchema>;
export type DiscoveryUserWishlistQuery = z.infer<typeof discoveryUserWishlistQuerySchema>;
