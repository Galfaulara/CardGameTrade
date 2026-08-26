import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import {
  normalizeDeckDealDisplayName,
  validateDeckDealUsername,
} from "@repo/validation";
import type {
  CompleteOnboardingInput,
  OnboardingUsernameAvailabilityQuery,
} from "@repo/validation";
import { ClerkAuthService } from "../auth/clerk-auth.service";
import type { AuthenticatedPrincipal } from "../auth/auth.types";
import { DatabaseService } from "../database/database.service";

@Injectable()
export class OnboardingService {
  constructor(
    private readonly database: DatabaseService,
    private readonly auth: ClerkAuthService,
  ) {}

  private requireUnmapped(principal: AuthenticatedPrincipal) {
    if (principal.deckdealUserId) {
      throw new ForbiddenException(
        "This Clerk account has already completed DeckDeal onboarding.",
      );
    }
  }

  private usernameValidationError(message: string) {
    return new BadRequestException({
      message: "Validation failed",
      errors: [{
        path: "username",
        message,
        code: "custom",
      }],
    });
  }

  private availabilityResponse(
    username: string,
    normalized: string,
    available: boolean,
    reason: "invalid" | "reserved" | "taken" | null,
    message: string | null,
  ) {
    return {
      username,
      normalized,
      available,
      reason,
      message,
    } as const;
  }

  async getUsernameAvailability(
    principal: AuthenticatedPrincipal,
    query: OnboardingUsernameAvailabilityQuery,
  ) {
    this.requireUnmapped(principal);
    const result = validateDeckDealUsername(query.username);

    if (!result.ok) {
      return this.availabilityResponse(
        result.username,
        result.normalized,
        false,
        result.code,
        result.message,
      );
    }

    const existing = await this.database.client.user_profiles.findUnique({
      where: {
        username_normalized: result.normalized,
      },
      select: {
        id: true,
      },
    });

    return existing
      ? this.availabilityResponse(
          result.username,
          result.normalized,
          false,
          "taken",
          "This username is already taken.",
        )
      : this.availabilityResponse(
          result.username,
          result.normalized,
          true,
          null,
          null,
        );
  }

  private async throwUniqueConstraintError(
    principal: AuthenticatedPrincipal,
    error: { meta?: { target?: unknown } },
  ): Promise<never> {
    const existing = await this.database.client.user_profiles.findUnique({
      where: {
        auth_provider_auth_user_id: {
          auth_provider: "clerk",
          auth_user_id: principal.providerSubject,
        },
      },
      select: {
        id: true,
      },
    });

    if (existing) {
      throw new ForbiddenException(
        "This Clerk account has already completed DeckDeal onboarding.",
      );
    }

    const target = Array.isArray(error.meta?.target)
      ? error.meta.target.join(",")
      : String(error.meta?.target ?? "");

    if (
      target.includes("username_normalized") ||
      target.includes("uq_user_profiles_username_normalized") ||
      target.includes("username") ||
      target.includes("uq_user_profiles_username")
    ) {
      throw new ConflictException("This username is already taken.");
    }

    if (
      target.includes("email") ||
      target.includes("uq_user_profiles_email")
    ) {
      throw new ConflictException(
        "This Clerk email is already linked to another DeckDeal account.",
      );
    }

    throw error;
  }

  async complete(
    principal: AuthenticatedPrincipal,
    input: CompleteOnboardingInput,
  ) {
    this.requireUnmapped(principal);
    const result = validateDeckDealUsername(input.username);

    if (!result.ok) {
      throw this.usernameValidationError(result.message);
    }

    const email = await this.auth.getPrimaryEmailAddress(
      principal.providerSubject,
    );

    if (!email) {
      throw new ConflictException(
        "A Clerk email address is required to complete DeckDeal onboarding.",
      );
    }

    try {
      const user = await this.database.client.$transaction(async (tx) => {
        const existing = await tx.user_profiles.findUnique({
          where: {
            auth_provider_auth_user_id: {
              auth_provider: "clerk",
              auth_user_id: principal.providerSubject,
            },
          },
          select: {
            id: true,
          },
        });

        if (existing) {
          throw new ForbiddenException(
            "This Clerk account has already completed DeckDeal onboarding.",
          );
        }

        return tx.user_profiles.create({
          data: {
            auth_provider: "clerk",
            auth_user_id: principal.providerSubject,
            email,
            username: result.username,
            username_normalized: result.normalized,
            display_name: normalizeDeckDealDisplayName(input.displayName),
            status: "active",
          },
          select: {
            id: true,
            display_name: true,
            username: true,
          },
        });
      });

      return {
        authenticated: true as const,
        onboarded: true as const,
        account_status: "active" as const,
        user,
      };
    } catch (error) {
      if (
        error instanceof ForbiddenException ||
        error instanceof BadRequestException ||
        error instanceof ConflictException
      ) {
        throw error;
      }

      const existing = await this.database.client.user_profiles.findUnique({
        where: {
          auth_provider_auth_user_id: {
            auth_provider: "clerk",
            auth_user_id: principal.providerSubject,
          },
        },
        select: {
          id: true,
        },
      });

      if (existing) {
        throw new ForbiddenException(
          "This Clerk account has already completed DeckDeal onboarding.",
        );
      }

      const takenUsername = await this.database.client.user_profiles.findUnique({
        where: {
          username_normalized: result.normalized,
        },
        select: {
          id: true,
        },
      });

      if (takenUsername) {
        throw new ConflictException("This username is already taken.");
      }

      const existingEmail = await this.database.client.user_profiles.findUnique({
        where: {
          email,
        },
        select: {
          id: true,
        },
      });

      if (existingEmail) {
        throw new ConflictException(
          "This Clerk email is already linked to another DeckDeal account.",
        );
      }

      if (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        error.code === "P2002"
      ) {
        await this.throwUniqueConstraintError(
          principal,
          error as { meta?: { target?: unknown } },
        );
      }

      throw error;
    }
  }
}
