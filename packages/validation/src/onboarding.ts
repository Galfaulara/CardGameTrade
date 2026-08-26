import { z } from "zod";

export const DECKDEAL_RESERVED_USERNAMES = [
  "deckdeal",
  "admin",
  "administrator",
  "support",
  "staff",
  "moderator",
  "official",
  "security",
  "help",
  "system",
] as const;

const reservedUsernames = new Set<string>(DECKDEAL_RESERVED_USERNAMES);
const usernamePattern = /^[A-Za-z0-9][A-Za-z0-9_]{2,23}$/;
const syntaxMessage = "Username must be 3–24 characters, start with a letter or number, and contain only letters, numbers, or underscores.";
const reservedMessage = "This username is reserved.";

export type DeckDealUsernameValidationResult =
  | {
      ok: true;
      username: string;
      normalized: string;
    }
  | {
      ok: false;
      code: "invalid" | "reserved";
      username: string;
      normalized: string;
      message: string;
    };

export const normalizeDeckDealUsername = (value: string) =>
  value.trim().toLowerCase();

export const normalizeDeckDealDisplayName = (
  value: string | null | undefined,
) => {
  if (value == null) {
    return null;
  }

  const trimmed = value.trim();
  return trimmed.length ? trimmed : null;
};

export const validateDeckDealUsername = (
  value: string,
): DeckDealUsernameValidationResult => {
  const username = value.trim();
  const normalized = normalizeDeckDealUsername(value);

  if (!usernamePattern.test(username)) {
    return {
      ok: false,
      code: "invalid",
      username,
      normalized,
      message: syntaxMessage,
    };
  }

  if (reservedUsernames.has(normalized)) {
    return {
      ok: false,
      code: "reserved",
      username,
      normalized,
      message: reservedMessage,
    };
  }

  return {
    ok: true,
    username,
    normalized,
  };
};

export const isReservedDeckDealUsername = (value: string) =>
  reservedUsernames.has(normalizeDeckDealUsername(value));

export const onboardingUsernameAvailabilityQuerySchema = z.object({
  username: z.string(),
});

export const completeOnboardingSchema = z
  .object({
    username: z.string(),
    displayName: z.preprocess(
      (value) =>
        typeof value === "string" || value == null
          ? normalizeDeckDealDisplayName(value)
          : value,
      z.string().min(1).nullable().optional(),
    ),
  })
  .strict()
  .superRefine((value, context) => {
    const result = validateDeckDealUsername(value.username);
    if (!result.ok) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["username"],
        message: result.message,
      });
    }
  });

export type OnboardingUsernameAvailabilityQuery = z.infer<
  typeof onboardingUsernameAvailabilityQuerySchema
>;

export type CompleteOnboardingInput = z.infer<
  typeof completeOnboardingSchema
>;
