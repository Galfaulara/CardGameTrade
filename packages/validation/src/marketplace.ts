import { z } from "zod";

export const setPreferredTradeStoreSchema = z
  .object({
    storeId: z
      .string()
      .uuid()
      .nullable(),
  })
  .strict();

export const acceptListingOfferSchema = z
  .object({
    storeId: z
      .string()
      .uuid(),
  })
  .strict();

export type SetPreferredTradeStoreInput =
  z.infer<
    typeof setPreferredTradeStoreSchema
  >;

export type AcceptListingOfferInput =
  z.infer<
    typeof acceptListingOfferSchema
  >;