import { z } from "zod";

export const idSchema =
  z.string().min(1);

export const paginationSchema =
  z.object({
    page: z
      .number()
      .int()
      .min(1)
      .default(1),

    pageSize: z
      .number()
      .int()
      .min(1)
      .max(100)
      .default(20),
  });

export const inventoryConditionSchema =
  z.enum([
    "mint",
    "near_mint",
    "lightly_played",
    "moderately_played",
    "heavily_played",
    "damaged",
  ]);

export const inventoryStatusSchema =
  z.enum([
    "available",
    "not_for_trade",
    "reserved",
    "in_trade",
    "sold",
    "removed",
  ]);

export const collectionVisibilitySchema =
  z.enum([
    "private",
    "unlisted",
    "public",
  ]);

export const createUserInventoryItemSchema =
  z
    .object({
      printingId: z
        .string()
        .uuid(),

      finish: z
        .string()
        .trim()
        .min(1),

      collectionId: z
        .string()
        .uuid()
        .nullable()
        .optional(),

      condition:
        inventoryConditionSchema,

      quantity: z
        .number()
        .int()
        .positive()
        .default(1),

      isSigned: z
        .boolean()
        .default(false),

      isAltered: z
        .boolean()
        .default(false),

      isGraded: z
        .boolean()
        .default(false),

      gradingCompany: z
        .string()
        .trim()
        .min(1)
        .nullable()
        .optional(),

      grade: z
        .string()
        .trim()
        .min(1)
        .nullable()
        .optional(),

      certificationNumber: z
        .string()
        .trim()
        .min(1)
        .nullable()
        .optional(),

      acquiredAt: z
        .coerce
        .date()
        .nullable()
        .optional(),

      acquiredPrice: z
        .number()
        .nonnegative()
        .nullable()
        .optional(),

      notes: z
        .string()
        .trim()
        .nullable()
        .optional(),
    })
    .strict()
    .superRefine(
      (
        value,
        context,
      ) => {
        if (
          value.isGraded &&
          (
            !value.gradingCompany ||
            !value.grade
          )
        ) {
          context.addIssue({
            code:
              z.ZodIssueCode
                .custom,
            message:
              "A graded card must include gradingCompany and grade.",
            path: [
              "gradingCompany",
            ],
          });
        }

        if (
          !value.isGraded &&
          (
            value.gradingCompany ||
            value.grade ||
            value.certificationNumber
          )
        ) {
          context.addIssue({
            code:
              z.ZodIssueCode
                .custom,
            message:
              "Grading information cannot be provided when isGraded is false.",
            path: [
              "isGraded",
            ],
          });
        }
      },
    );

export const updateUserInventoryItemSchema =
  z
    .object({
      condition:
        inventoryConditionSchema
          .optional(),

      quantity: z
        .number()
        .int()
        .positive()
        .optional(),

      isSigned: z
        .boolean()
        .optional(),

      isAltered: z
        .boolean()
        .optional(),

      isGraded: z
        .boolean()
        .optional(),

      gradingCompany: z
        .string()
        .trim()
        .min(1)
        .nullable()
        .optional(),

      grade: z
        .string()
        .trim()
        .min(1)
        .nullable()
        .optional(),

      certificationNumber: z
        .string()
        .trim()
        .min(1)
        .nullable()
        .optional(),

      acquiredAt: z
        .coerce
        .date()
        .nullable()
        .optional(),

      acquiredPrice: z
        .number()
        .nonnegative()
        .nullable()
        .optional(),

      notes: z
        .string()
        .trim()
        .nullable()
        .optional(),
    })
    .strict()
    .refine(
      (value) =>
        Object.keys(
          value,
        ).length > 0,
      {
        message:
          "At least one inventory field must be provided.",
      },
    );

export const createUserCollectionSchema =
  z
    .object({
      gameSlug: z
        .string()
        .trim()
        .min(1)
        .toLowerCase(),

      name: z
        .string()
        .trim()
        .min(1),

      description: z
        .string()
        .trim()
        .nullable()
        .optional(),

      visibility:
        collectionVisibilitySchema
          .default(
            "private",
          ),
    })
    .strict();

export const setInventoryCollectionSchema =
  z
    .object({
      collectionId: z
        .string()
        .uuid()
        .nullable(),
    })
    .strict();

export const createInventoryPhotoSchema =
  z
    .object({
      isPrimary: z
        .preprocess(
          (value) => {
            if (
              value ===
                undefined ||
              value === ""
            ) {
              return undefined;
            }

            if (
              value === true ||
              value === "true"
            ) {
              return true;
            }

            if (
              value === false ||
              value === "false"
            ) {
              return false;
            }

            return value;
          },

          z
            .boolean()
            .optional(),
        ),

      sortOrder: z
        .preprocess(
          (value) => {
            if (
              value ===
                undefined ||
              value === ""
            ) {
              return undefined;
            }

            if (
              typeof value ===
              "string"
            ) {
              return Number(
                value,
              );
            }

            return value;
          },

          z
            .number()
            .int()
            .min(0)
            .optional(),
        ),
    })
    .strict();

export const listingStatusSchema =
  z.enum([
    "active",
    "paused",
    "closed",
    "sold",
    "traded",
    "removed",
  ]);

const listingSettingsFields = {
  acceptsCash: z.boolean().default(false),
  acceptsTrade: z.boolean().default(true),
  askingPrice: z.number().nonnegative().nullable().optional(),
  currencyCode: z.string().trim().length(3).transform((value) => value.toUpperCase()).nullable().optional(),
  preferredStoreId: z.string().uuid().nullable().optional(),
  title: z.string().trim().min(1).nullable().optional(),
  description: z.string().trim().min(1).nullable().optional(),
};

export const createUserListingSchema =
  z
    .object({
      inventoryItemId: z
        .string()
        .uuid(),

      ...listingSettingsFields,
    })
    .strict()
    .superRefine(
      (
        value,
        context,
      ) => {
        if (
          !value.acceptsCash &&
          !value.acceptsTrade
        ) {
          context.addIssue({
            code:
              z.ZodIssueCode
                .custom,
            message:
              "A listing must accept cash, trade, or both.",
            path: [
              "acceptsTrade",
            ],
          });
        }

        if (
          value.acceptsCash
        ) {
          if (
            value.askingPrice ===
              undefined ||
            value.askingPrice ===
              null
          ) {
            context.addIssue({
              code:
                z.ZodIssueCode
                  .custom,
              message:
                "askingPrice is required when acceptsCash is true.",
              path: [
                "askingPrice",
              ],
            });
          }

          if (
            !value.currencyCode
          ) {
            context.addIssue({
              code:
                z.ZodIssueCode
                  .custom,
              message:
                "currencyCode is required when acceptsCash is true.",
              path: [
                "currencyCode",
              ],
            });
          }
        }

        if (
          !value.acceptsCash &&
          (
            value.askingPrice !=
              null ||
            value.currencyCode !=
              null
          )
        ) {
          context.addIssue({
            code:
              z.ZodIssueCode
                .custom,
            message:
              "askingPrice and currencyCode cannot be provided when acceptsCash is false.",
            path: [
              "acceptsCash",
            ],
          });
        }
      },
    );

export const collectionListingInputSchema = z.object({
  gameSlug: z.string().trim().min(1).max(64).toLowerCase(),
  ...listingSettingsFields,
}).strict().superRefine((value, context) => {
  if (!value.acceptsCash && !value.acceptsTrade) context.addIssue({ code: z.ZodIssueCode.custom, message: "A listing must accept cash, trade, or both.", path: ["acceptsTrade"] });
  if (value.acceptsCash && value.askingPrice == null) context.addIssue({ code: z.ZodIssueCode.custom, message: "askingPrice is required when acceptsCash is true.", path: ["askingPrice"] });
  if (value.acceptsCash && !value.currencyCode) context.addIssue({ code: z.ZodIssueCode.custom, message: "currencyCode is required when acceptsCash is true.", path: ["currencyCode"] });
  if (!value.acceptsCash && (value.askingPrice != null || value.currencyCode != null)) context.addIssue({ code: z.ZodIssueCode.custom, message: "askingPrice and currencyCode cannot be provided when acceptsCash is false.", path: ["acceptsCash"] });
});

export const updateUserListingSchema =
  z
    .object({
      acceptsCash: z
        .boolean()
        .optional(),

      acceptsTrade: z
        .boolean()
        .optional(),

      askingPrice: z
        .number()
        .nonnegative()
        .nullable()
        .optional(),

      currencyCode: z
        .string()
        .trim()
        .length(3)
        .transform(
          (value) =>
            value.toUpperCase(),
        )
        .nullable()
        .optional(),

      preferredStoreId: z
        .string()
        .uuid()
        .nullable()
        .optional(),

      title: z
        .string()
        .trim()
        .min(1)
        .nullable()
        .optional(),

      description: z
        .string()
        .trim()
        .min(1)
        .nullable()
        .optional(),
    })
    .strict()
    .refine(
      (value) =>
        Object.keys(
          value,
        ).length > 0,
      {
        message:
          "At least one listing field must be provided.",
      },
    );

export const userListingStatusSchema =
  z.enum([
    "active",
    "paused",
    "removed",
  ]);

export const setUserListingStatusSchema =
  z
    .object({
      status:
        userListingStatusSchema,
    })
    .strict();

export const listingOfferVisibilitySchema =
  z.enum([
    "owner_only",
    "public",
  ]);

export const createListingOfferItemSchema =
  z
    .object({
      inventoryItemId: z
        .string()
        .uuid(),

      quantity: z
        .number()
        .int()
        .positive()
        .default(1),

      notes: z
        .string()
        .trim()
        .min(1)
        .nullable()
        .optional(),
    })
    .strict();

export const createListingOfferSchema =
  z
    .object({
      cashAmount: z
        .number()
        .nonnegative()
        .default(0),

      currencyCode: z
        .string()
        .trim()
        .length(3)
        .transform(
          (value) =>
            value.toUpperCase(),
        )
        .default("USD"),

      message: z
        .string()
        .trim()
        .min(1)
        .nullable()
        .optional(),

      visibility:
        listingOfferVisibilitySchema
          .default(
            "owner_only",
          ),

      expiresAt: z
        .coerce
        .date()
        .nullable()
        .optional(),

      items: z
        .array(
          createListingOfferItemSchema,
        )
        .default([]),
    })
    .strict()
    .superRefine(
      (
        value,
        context,
      ) => {
        if (
          value.cashAmount <=
            0 &&
          value.items.length ===
            0
        ) {
          context.addIssue({
            code:
              z.ZodIssueCode
                .custom,
            message:
              "An offer must include cash, at least one inventory item, or both.",
            path: [
              "items",
            ],
          });
        }

        const inventoryIds =
          value.items.map(
            (item) =>
              item
                .inventoryItemId,
          );

        if (
          new Set(
            inventoryIds,
          ).size !==
          inventoryIds.length
        ) {
          context.addIssue({
            code:
              z.ZodIssueCode
                .custom,
            message:
              "The same inventory item cannot appear more than once in an offer.",
            path: [
              "items",
            ],
          });
        }
      },
    );

    // -----------------------------------------------------------------------------
// Wishlist validation
// -----------------------------------------------------------------------------

export const wishlistVisibilitySchema = z.enum([
  "private",
  "unlisted",
  "public",
]);

export const wishlistStatusSchema = z.enum([
  "active",
  "archived",
  "deleted",
]);

export const wishlistItemPrioritySchema = z.enum([
  "low",
  "normal",
  "high",
  "urgent",
]);

export const wishlistItemStatusSchema = z.enum([
  "active",
  "fulfilled",
  "paused",
  "removed",
]);

export const wishlistDesiredConditionSchema = z.enum([
  "mint",
  "near_mint",
  "lightly_played",
  "moderately_played",
  "heavily_played",
  "damaged",
]);

const wishlistCurrencyCodeSchema = z
  .string()
  .trim()
  .length(3)
  .transform((value) =>
    value.toUpperCase(),
  );

const wishlistLanguageCodeSchema = z
  .string()
  .trim()
  .min(2)
  .max(10)
  .transform((value) =>
    value.toLowerCase(),
  );

const wishlistOptionalText = (
  maxLength: number,
) =>
  z
    .string()
    .trim()
    .max(maxLength)
    .optional();

const wishlistTargetFields = {
  canonicalCardId:
    z.string().uuid().nullable().optional(),

  printingId:
    z.string().uuid().nullable().optional(),
};

const validateWishlistTarget = (
  value: {
    canonicalCardId?:
      | string
      | null;

    printingId?:
      | string
      | null;
  },
  ctx: z.RefinementCtx,
) => {
  const targetCount = [
    value.canonicalCardId,
    value.printingId,
  ].filter(Boolean).length;

  if (
    targetCount !==
    1
  ) {
    ctx.addIssue({
      code:
        z.ZodIssueCode.custom,
      message:
        "A wishlist item must target exactly one canonical card or one exact printing.",
      path: [
        "canonicalCardId",
      ],
    });
  }
};

const validateWishlistAcquisitionRules = (
  value: {
    willingToPayCash:
      boolean;

    willingToTradeCards:
      boolean;

    maxCashAmount?:
      | number
      | null;

    currencyCode?:
      | string
      | null;
  },
  ctx: z.RefinementCtx,
) => {
  if (
    !value.willingToPayCash &&
    !value.willingToTradeCards
  ) {
    ctx.addIssue({
      code:
        z.ZodIssueCode.custom,
      message:
        "A wishlist item must allow cash, card trade, or both.",
      path: [
        "willingToPayCash",
      ],
    });
  }

  if (
    !value.willingToPayCash &&
    (
      value.maxCashAmount !==
        undefined &&
      value.maxCashAmount !==
        null
    )
  ) {
    ctx.addIssue({
      code:
        z.ZodIssueCode.custom,
      message:
        "maxCashAmount can only be set when willingToPayCash is true.",
      path: [
        "maxCashAmount",
      ],
    });
  }

  if (
    value.maxCashAmount !==
      undefined &&
    value.maxCashAmount !==
      null &&
    !value.currencyCode
  ) {
    ctx.addIssue({
      code:
        z.ZodIssueCode.custom,
      message:
        "currencyCode is required when maxCashAmount is provided.",
      path: [
        "currencyCode",
      ],
    });
  }

  if (
    !value.willingToPayCash &&
    value.currencyCode
  ) {
    ctx.addIssue({
      code:
        z.ZodIssueCode.custom,
      message:
        "currencyCode can only be set when willingToPayCash is true.",
      path: [
        "currencyCode",
      ],
    });
  }
};

export const createUserWishlistSchema =
  z.object({
    gameSlug:
      z
        .string()
        .trim()
        .min(1)
        .toLowerCase(),

    name:
      z
        .string()
        .trim()
        .min(1)
        .max(120),

    description:
      z
        .string()
        .trim()
        .max(1000)
        .nullable()
        .optional(),

    visibility:
      wishlistVisibilitySchema
        .default(
          "private",
        ),

    preferredStoreId:
      z
        .string()
        .uuid()
        .nullable()
        .optional(),
  });

export const updateUserWishlistSchema =
  z
    .object({
      name:
        z
          .string()
          .trim()
          .min(1)
          .max(120)
          .optional(),

      description:
        z
          .string()
          .trim()
          .max(1000)
          .nullable()
          .optional(),

      visibility:
        wishlistVisibilitySchema
          .optional(),

      status:
        wishlistStatusSchema
          .optional(),

      preferredStoreId:
        z
          .string()
          .uuid()
          .nullable()
          .optional(),
    })
    .refine(
      (value) =>
        Object.keys(
          value,
        ).length >
        0,
      {
        message:
          "At least one wishlist field must be provided.",
      },
    );

export const createWishlistItemSchema =
  z
    .object({
      ...wishlistTargetFields,

      desiredFinish:
        z
          .string()
          .trim()
          .min(1)
          .max(50)
          .nullable()
          .optional(),

      desiredCondition:
        wishlistDesiredConditionSchema
          .nullable()
          .optional(),

      languageCode:
        wishlistLanguageCodeSchema
          .nullable()
          .optional(),

      quantityDesired:
        z
          .number()
          .int()
          .positive()
          .max(1000)
          .default(1),

      priority:
        wishlistItemPrioritySchema
          .default(
            "normal",
          ),

      notes:
        z
          .string()
          .trim()
          .max(1000)
          .nullable()
          .optional(),

      willingToPayCash:
        z
          .boolean()
          .default(
            true,
          ),

      willingToTradeCards:
        z
          .boolean()
          .default(
            true,
          ),

      maxCashAmount:
        z
          .number()
          .nonnegative()
          .nullable()
          .optional(),

      currencyCode:
        wishlistCurrencyCodeSchema
          .nullable()
          .optional(),

      tradeNotes:
        z
          .string()
          .trim()
          .max(1000)
          .nullable()
          .optional(),
    })
    .superRefine(
      (
        value,
        ctx,
      ) => {
        validateWishlistTarget(
          value,
          ctx,
        );

        validateWishlistAcquisitionRules(
          value,
          ctx,
        );
      },
    );

export const updateWishlistItemSchema =
  z
    .object({
      canonicalCardId:
        z
          .string()
          .uuid()
          .nullable()
          .optional(),

      printingId:
        z
          .string()
          .uuid()
          .nullable()
          .optional(),

      desiredFinish:
        z
          .string()
          .trim()
          .min(1)
          .max(50)
          .nullable()
          .optional(),

      desiredCondition:
        wishlistDesiredConditionSchema
          .nullable()
          .optional(),

      languageCode:
        wishlistLanguageCodeSchema
          .nullable()
          .optional(),

      quantityDesired:
        z
          .number()
          .int()
          .positive()
          .max(1000)
          .optional(),

      priority:
        wishlistItemPrioritySchema
          .optional(),

      notes:
        z
          .string()
          .trim()
          .max(1000)
          .nullable()
          .optional(),

      status:
        wishlistItemStatusSchema
          .optional(),

      willingToPayCash:
        z
          .boolean()
          .optional(),

      willingToTradeCards:
        z
          .boolean()
          .optional(),

      maxCashAmount:
        z
          .number()
          .nonnegative()
          .nullable()
          .optional(),

      currencyCode:
        wishlistCurrencyCodeSchema
          .nullable()
          .optional(),

      tradeNotes:
        z
          .string()
          .trim()
          .max(1000)
          .nullable()
          .optional(),
    })
    .refine(
      (value) =>
        Object.keys(
          value,
        ).length >
        0,
      {
        message:
          "At least one wishlist item field must be provided.",
      },
    );

export const wishlistOfferInventoryItemSchema =
  z.object({
    inventoryItemId:
      z.string().uuid(),

    quantity:
      z
        .number()
        .int()
        .positive(),

    notes:
      wishlistOptionalText(
        1000,
      ),
  });

export const wishlistOfferRequestedItemSchema =
  z
    .object({
      requestedInventoryItemId:
        z
          .string()
          .uuid()
          .nullable()
          .optional(),

      requestedCanonicalCardId:
        z
          .string()
          .uuid()
          .nullable()
          .optional(),

      requestedPrintingId:
        z
          .string()
          .uuid()
          .nullable()
          .optional(),

      desiredFinish:
        z
          .string()
          .trim()
          .min(1)
          .max(50)
          .nullable()
          .optional(),

      desiredCondition:
        wishlistDesiredConditionSchema
          .nullable()
          .optional(),

      languageCode:
        wishlistLanguageCodeSchema
          .nullable()
          .optional(),

      quantity:
        z
          .number()
          .int()
          .positive()
          .max(1000)
          .default(1),

      notes:
        wishlistOptionalText(
          1000,
        ),
    })
    .superRefine(
      (
        value,
        ctx,
      ) => {
        const targetCount = [
          value.requestedInventoryItemId,
          value.requestedCanonicalCardId,
          value.requestedPrintingId,
        ].filter(Boolean).length;

        if (
          targetCount !==
          1
        ) {
          ctx.addIssue({
            code:
              z.ZodIssueCode.custom,
            message:
              "A requested trade item must reference exactly one inventory item, canonical card, or printing.",
            path: [
              "requestedInventoryItemId",
            ],
          });
        }
      },
    );

export const createWishlistOfferSchema =
  z
    .object({
      items:
        z
          .array(
            wishlistOfferInventoryItemSchema,
          )
          .min(1)
          .max(100),

      requestsCash:
        z
          .boolean()
          .default(
            false,
          ),

      requestsTrade:
        z
          .boolean()
          .default(
            true,
          ),

      cashAskAmount:
        z
          .number()
          .nonnegative()
          .nullable()
          .optional(),

      currencyCode:
        wishlistCurrencyCodeSchema
          .nullable()
          .optional(),

      message:
        z
          .string()
          .trim()
          .max(2000)
          .nullable()
          .optional(),

      tradeTermsNote:
        z
          .string()
          .trim()
          .max(2000)
          .nullable()
          .optional(),

      requestedItems:
        z
          .array(
            wishlistOfferRequestedItemSchema,
          )
          .max(100)
          .default([]),

      expiresAt:
        z
          .coerce
          .date()
          .nullable()
          .optional(),
    })
    .superRefine(
      (
        value,
        ctx,
      ) => {
        if (
          !value.requestsCash &&
          !value.requestsTrade
        ) {
          ctx.addIssue({
            code:
              z.ZodIssueCode.custom,
            message:
              "A wishlist offer must request cash, trade, or both.",
            path: [
              "requestsCash",
            ],
          });
        }

        if (
          value.requestsCash
        ) {
          if (
            value.cashAskAmount ===
              undefined ||
            value.cashAskAmount ===
              null
          ) {
            ctx.addIssue({
              code:
                z.ZodIssueCode.custom,
              message:
                "cashAskAmount is required when requestsCash is true.",
              path: [
                "cashAskAmount",
              ],
            });
          }

          if (
            !value.currencyCode
          ) {
            ctx.addIssue({
              code:
                z.ZodIssueCode.custom,
              message:
                "currencyCode is required when requestsCash is true.",
              path: [
                "currencyCode",
              ],
            });
          }
        } else {
          if (
            value.cashAskAmount !==
              undefined &&
            value.cashAskAmount !==
              null
          ) {
            ctx.addIssue({
              code:
                z.ZodIssueCode.custom,
              message:
                "cashAskAmount can only be set when requestsCash is true.",
              path: [
                "cashAskAmount",
              ],
            });
          }

          if (
            value.currencyCode
          ) {
            ctx.addIssue({
              code:
                z.ZodIssueCode.custom,
              message:
                "currencyCode can only be set when requestsCash is true.",
              path: [
                "currencyCode",
              ],
            });
          }
        }

        if (
          value.requestsTrade &&
          value.requestedItems.length ===
            0
        ) {
          ctx.addIssue({
            code:
              z.ZodIssueCode.custom,
            message:
              "At least one requested item is required when requestsTrade is true.",
            path: [
              "requestedItems",
            ],
          });
        }

        if (
          !value.requestsTrade &&
          value.requestedItems.length >
            0
        ) {
          ctx.addIssue({
            code:
              z.ZodIssueCode.custom,
            message:
              "requestedItems can only be provided when requestsTrade is true.",
            path: [
              "requestedItems",
            ],
          });
        }

        if (
          value.expiresAt &&
          value.expiresAt <=
            new Date()
        ) {
          ctx.addIssue({
            code:
              z.ZodIssueCode.custom,
            message:
              "Offer expiration must be in the future.",
            path: [
              "expiresAt",
            ],
          });
        }
      },
    );

    // -----------------------------------------------------------------------------
// Wishlist offer acceptance
// -----------------------------------------------------------------------------

export const wishlistOfferRequestedInventorySelectionSchema =
  z.object({
    requestedItemId:
      z.string().uuid(),

    inventoryItemId:
      z.string().uuid(),
  });

export const acceptWishlistOfferSchema =
  z
    .object({
      /*
       * Mandatory final LGS selection.
       *
       * A user's preferred store/wishlist store is
       * only a UI default. Acceptance must always
       * explicitly identify the actual mediating
       * affiliated store.
       */
      storeId:
        z.string().uuid(),

      /*
       * Only needed when a wishlist offer requests
       * a flexible canonical-card or printing target.
       *
       * Exact requested_inventory_item_id terms need
       * no selection because the inventory row is
       * already known.
       */
      requestedInventorySelections:
        z
          .array(
            wishlistOfferRequestedInventorySelectionSchema,
          )
          .max(100)
          .default([]),
    })
    .superRefine(
      (
        value,
        ctx,
      ) => {
        const requestedItemIds =
          value.requestedInventorySelections.map(
            (selection) =>
              selection.requestedItemId,
          );

        if (
          new Set(
            requestedItemIds,
          ).size !==
          requestedItemIds.length
        ) {
          ctx.addIssue({
            code:
              z.ZodIssueCode.custom,
            message:
              "The same requested trade term cannot be selected more than once.",
            path: [
              "requestedInventorySelections",
            ],
          });
        }

        const inventoryItemIds =
          value.requestedInventorySelections.map(
            (selection) =>
              selection.inventoryItemId,
          );

        if (
          new Set(
            inventoryItemIds,
          ).size !==
          inventoryItemIds.length
        ) {
          ctx.addIssue({
            code:
              z.ZodIssueCode.custom,
            message:
              "The same inventory item cannot satisfy more than one requested trade term.",
            path: [
              "requestedInventorySelections",
            ],
          });
        }
      },
    );

    // -----------------------------------------------------------------------------
// Inventory item interests
// -----------------------------------------------------------------------------

export const inventoryItemInterestTypeSchema =
  z.enum([
    "buy",
    "trade",
    "buy_or_trade",
    "watch",
  ]);

export const createInventoryItemInterestSchema =
  z.object({
    interestType:
      inventoryItemInterestTypeSchema
        .default(
          "buy_or_trade",
        ),

    message:
      z
        .string()
        .trim()
        .max(2000)
        .nullable()
        .optional(),
  });

export const updateInventoryItemInterestSchema =
  z
    .object({
      interestType:
        inventoryItemInterestTypeSchema
          .optional(),

      message:
        z
          .string()
          .trim()
          .max(2000)
          .nullable()
          .optional(),
    })
    .refine(
      (value) =>
        Object.keys(
          value,
        ).length >
        0,
      {
        message:
          "At least one interest field must be provided.",
      },
    );

export type CreateInventoryItemInterestInput =
  z.infer<
    typeof createInventoryItemInterestSchema
  >;

export type UpdateInventoryItemInterestInput =
  z.infer<
    typeof updateInventoryItemInterestSchema
  >;

export type AcceptWishlistOfferInput =
  z.infer<
    typeof acceptWishlistOfferSchema
  >;

export type CreateUserWishlistInput =
  z.infer<
    typeof createUserWishlistSchema
  >;

export type UpdateUserWishlistInput =
  z.infer<
    typeof updateUserWishlistSchema
  >;

export type CreateWishlistItemInput =
  z.infer<
    typeof createWishlistItemSchema
  >;

export type UpdateWishlistItemInput =
  z.infer<
    typeof updateWishlistItemSchema
  >;

export type CreateWishlistOfferInput =
  z.infer<
    typeof createWishlistOfferSchema
  >;


export type PaginationInput =
  z.infer<
    typeof paginationSchema
  >;

export type InventoryCondition =
  z.infer<
    typeof inventoryConditionSchema
  >;

export type InventoryStatus =
  z.infer<
    typeof inventoryStatusSchema
  >;

export type CollectionVisibility =
  z.infer<
    typeof collectionVisibilitySchema
  >;

export type CreateUserInventoryItemInput =
  z.infer<
    typeof createUserInventoryItemSchema
  >;

export type UpdateUserInventoryItemInput =
  z.infer<
    typeof updateUserInventoryItemSchema
  >;

export type CreateUserCollectionInput =
  z.infer<
    typeof createUserCollectionSchema
  >;

export type SetInventoryCollectionInput =
  z.infer<
    typeof setInventoryCollectionSchema
  >;

export type CreateInventoryPhotoInput =
  z.infer<
    typeof createInventoryPhotoSchema
  >;

export type ListingStatus =
  z.infer<
    typeof listingStatusSchema
  >;

export type CreateUserListingInput =
  z.infer<
    typeof createUserListingSchema
  >;

export type CollectionListingInput =
  z.infer<
    typeof collectionListingInputSchema
  >;

export type UpdateUserListingInput =
  z.infer<
    typeof updateUserListingSchema
  >;

export type SetUserListingStatusInput =
  z.infer<
    typeof setUserListingStatusSchema
  >;

export type ListingOfferVisibility =
  z.infer<
    typeof listingOfferVisibilitySchema
  >;

export type CreateListingOfferItemInput =
  z.infer<
    typeof createListingOfferItemSchema
  >;

export type CreateListingOfferInput =
  z.infer<
    typeof createListingOfferSchema
  >;
