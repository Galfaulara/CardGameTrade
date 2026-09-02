import { z } from "zod";
import { inventoryConditionSchema } from "./schemas";

const boundedInteger = (defaultValue: number, maximum: number) =>
  z.coerce.number().int().min(1).max(maximum).default(defaultValue);

export const myInventoryStatusFilterSchema = z.enum([
  "all",
  "available",
  "not_for_trade",
  "reserved",
  "in_trade",
]);

export const myInventoryConditionFilterSchema = z.union([
  z.literal("all"),
  inventoryConditionSchema,
]);

export const myInventoryListQuerySchema = z
  .object({
    gameSlug: z.string().trim().min(1).max(64).toLowerCase().optional(),
    page: boundedInteger(1, 1000000),
    pageSize: boundedInteger(24, 48),
    q: z.preprocess(
      (value) =>
        typeof value === "string" ? value.trim().replace(/\s+/g, " ") : value,
      z.string().max(120).default(""),
    ),
    status: myInventoryStatusFilterSchema.default("all"),
    condition: myInventoryConditionFilterSchema.default("all"),
    collection: z
      .union([z.literal("all"), z.literal("unassigned"), z.string().uuid()])
      .default("all"),
  })
  .strict();

export const gameScopedListQuerySchema = z
  .object({
    gameSlug: z.string().trim().min(1).max(64).toLowerCase().optional(),
  })
  .strict();

export const bulkMoveCollectionItemsSchema = z
  .object({
    gameSlug: z.string().trim().min(1).max(64).toLowerCase(),
    destinationCollectionId: z.string().uuid().nullable(),
    inventoryItemIds: z
      .array(z.string().uuid())
      .min(1)
      .max(500)
      .refine(
        (ids) => new Set(ids).size === ids.length,
        "Inventory item IDs must be unique.",
      ),
  })
  .strict();

export type BulkMoveCollectionItemsInput = z.infer<
  typeof bulkMoveCollectionItemsSchema
>;

export const cardRelationshipContextSchema = z
  .object({
    gameSlug: z.string().trim().min(1).max(64).toLowerCase(),
    canonicalCardIds: z.array(z.string().uuid()).max(200).default([]),
    printingIds: z.array(z.string().uuid()).max(200).default([]),
  })
  .strict();
export type CardRelationshipContextInput = z.infer<
  typeof cardRelationshipContextSchema
>;

export const changeInventoryPrintingSchema = z
  .object({
    printingId: z.string().uuid(),
    finish: z.string().trim().min(1).max(40),
  })
  .strict();
export type ChangeInventoryPrintingInput = z.infer<
  typeof changeInventoryPrintingSchema
>;

export type MyInventoryStatusFilter = z.infer<
  typeof myInventoryStatusFilterSchema
>;

export type MyInventoryConditionFilter = z.infer<
  typeof myInventoryConditionFilterSchema
>;

export type MyInventoryListQuery = z.infer<typeof myInventoryListQuerySchema>;

export type GameScopedListQuery = z.infer<typeof gameScopedListQuerySchema>;
