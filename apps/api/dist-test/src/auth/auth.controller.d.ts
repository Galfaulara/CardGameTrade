import type { AuthenticatedPrincipal } from "./auth.types";
import { ClerkAuthService } from "./clerk-auth.service";
export declare class AuthController {
    private readonly auth;
    constructor(auth: ClerkAuthService);
    getMe(principal: AuthenticatedPrincipal): Promise<{
        authenticated: true;
        onboarded: false;
        account_status?: undefined;
        user?: undefined;
    } | {
        authenticated: true;
        onboarded: true;
        account_status: "disabled";
        user: {
            id: string;
            display_name: string | null;
            username: string | null;
        };
    } | {
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
//# sourceMappingURL=auth.controller.d.ts.map