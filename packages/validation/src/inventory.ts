import { z } from "zod";
import { inventoryConditionSchema } from "./schemas";

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
    page: boundedInteger(1, 1000000),
    pageSize: boundedInteger(24, 48),
    q: z.preprocess(
      (value) =>
        typeof value === "string"
          ? value.trim().replace(/\s+/g, " ")
          : value,
      z.string().max(120).default(""),
    ),
    status:
      myInventoryStatusFilterSchema.default(
        "all",
      ),
    condition:
      myInventoryConditionFilterSchema.default(
        "all",
      ),
    collection: z
      .union([
        z.literal("all"),
        z.literal("unassigned"),
        z.string().uuid(),
      ])
      .default("all"),
  })
  .strict();

export type MyInventoryStatusFilter = z.infer<
  typeof myInventoryStatusFilterSchema
>;

export type MyInventoryConditionFilter = z.infer<
  typeof myInventoryConditionFilterSchema
>;

export type MyInventoryListQuery = z.infer<
  typeof myInventoryListQuerySchema
>;
