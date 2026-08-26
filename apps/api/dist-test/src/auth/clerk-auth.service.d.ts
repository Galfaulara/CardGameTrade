import type { Request as ExpressRequest } from "express";
import { DatabaseService } from "../database/database.service";
import type { AuthenticatedPrincipal } from "./auth.types";
export declare class ClerkAuthService {
    private readonly database;
    constructor(database: DatabaseService);
    private authorizedParties;
    private publishableKey;
    private clerkClient;
    private requestUrl;
    authenticate(request: ExpressRequest): Promise<AuthenticatedPrincipal | null>;
    getPrimaryEmailAddress(providerSubject: string): Promise<string | null>;
    currentUser(principal: AuthenticatedPrincipal): Promise<{
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
//# sourceMappingURL=clerk-auth.service.d.ts.map