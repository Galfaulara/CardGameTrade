import type { CompleteOnboardingInput, OnboardingUsernameAvailabilityQuery } from "@repo/validation";
import type { AuthenticatedPrincipal } from "../auth/auth.types";
import { OnboardingService } from "./onboarding.service";
export declare class OnboardingController {
    private readonly onboarding;
    constructor(onboarding: OnboardingService);
    getUsernameAvailability(principal: AuthenticatedPrincipal, query: OnboardingUsernameAvailabilityQuery): Promise<{
        readonly username: string;
        readonly normalized: string;
        readonly available: boolean;
        readonly reason: "reserved" | "invalid" | "taken" | null;
        readonly message: string | null;
    }>;
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
//# sourceMappingURL=onboarding.controller.d.ts.map