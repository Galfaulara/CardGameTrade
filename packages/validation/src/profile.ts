import { z } from "zod";
import { normalizeDeckDealDisplayName } from "./onboarding";

const boundedInteger = (defaultValue: number, maximum: number) =>
  z.coerce
    .number()
    .int()
    .min(1)
    .max(maximum)
    .default(defaultValue);

const displayNameInput = z.preprocess(
  (value) =>
    typeof value === "string" || value === null
      ? normalizeDeckDealDisplayName(value)
      : value,
  z.string().min(1).max(50).nullable().optional(),
);

const preferredStoreInput = z.string().uuid().nullable().optional();

export const updateMyProfileSchema = z
  .object({
    displayName: displayNameInput,
    display_name: displayNameInput,
    preferredStoreId: preferredStoreInput,
    preferred_store_id: preferredStoreInput,
  })
  .strict()
  .superRefine((value, context) => {
    if (
      value.displayName !== undefined &&
      value.display_name !== undefined &&
      value.displayName !== value.display_name
    ) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["displayName"],
        message: "displayName and display_name must match when both are provided.",
      });
    }

    if (
      value.preferredStoreId !== undefined &&
      value.preferred_store_id !== undefined &&
      value.preferredStoreId !== value.preferred_store_id
    ) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["preferredStoreId"],
        message: "preferredStoreId and preferred_store_id must match when both are provided.",
      });
    }
  })
  .transform((value) => ({
    ...(value.displayName !== undefined || value.display_name !== undefined
      ? {
          displayName:
            value.displayName ??
            value.display_name ??
            null,
        }
      : {}),
    ...(value.preferredStoreId !== undefined || value.preferred_store_id !== undefined
      ? {
          preferredStoreId:
            value.preferredStoreId ??
            value.preferred_store_id ??
            null,
        }
      : {}),
  }));

export const myProfileStoreOptionsQuerySchema = z
  .object({
    q: z.preprocess(
      (value) =>
        typeof value === "string"
          ? value.trim()
          : value,
      z.string().max(80).default(""),
    ),
    limit: boundedInteger(8, 12),
  })
  .strict();

export type UpdateMyProfileInput = z.infer<typeof updateMyProfileSchema>;
export type MyProfileStoreOptionsQuery = z.infer<
  typeof myProfileStoreOptionsQuerySchema
>;
