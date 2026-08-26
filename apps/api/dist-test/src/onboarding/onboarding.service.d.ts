import type { CompleteOnboardingInput, OnboardingUsernameAvailabilityQuery } from "@repo/validation";
import { ClerkAuthService } from "../auth/clerk-auth.service";
import type { AuthenticatedPrincipal } from "../auth/auth.types";
import { DatabaseService } from "../database/database.service";
export declare class OnboardingService {
    private readonly database;
    private readonly auth;
    constructor(database: DatabaseService, auth: ClerkAuthService);
    private requireUnmapped;
    private usernameValidationError;
    private availabilityResponse;
    getUsernameAvailability(principal: AuthenticatedPrincipal, query: OnboardingUsernameAvailabilityQuery): Promise<{
        readonly username: string;
        readonly normalized: string;
        readonly available: boolean;
        readonly reason: "reserved" | "invalid" | "taken" | null;
        readonly message: string | null;
    }>;
    private throwUniqueConstraintError;
    complete(principal: AuthenticatedPrincipal, input: CompleteOnboardingInput): Promise<{
        authenticated: true;
        onboarded: true;
        account_status: "active";
        user: {
            id: string;
            username: string | null;
            display_name: string | null;
        };
    }>;
}
//# sourceMappingURL=onboarding.service.d.ts.map