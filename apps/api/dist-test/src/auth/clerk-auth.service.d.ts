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
    private loadActiveStoreWorkspaces;
    currentUser(principal: AuthenticatedPrincipal): Promise<{
        authenticated: true;
        onboarded: false;
        account_status?: undefined;
        user?: undefined;
        store_workspaces?: undefined;
    } | {
        authenticated: true;
        onboarded: true;
        account_status: "disabled";
        user: {
            id: string;
            display_name: string | null;
            username: string | null;
        };
        store_workspaces: {
            id: string;
            role: string;
            store_id: string;
            store: {
                name: string;
                status: string;
                id: string;
                slug: string;
                logo_url: string | null;
                city: string | null;
                state_region: string | null;
                country_code: string | null;
                verification_status: string;
                trade_mediation_enabled: boolean;
            };
        }[];
    } | {
        authenticated: true;
        onboarded: true;
        account_status: "active";
        user: {
            id: string;
            username: string | null;
            display_name: string | null;
        };
        store_workspaces: {
            id: string;
            role: string;
            store_id: string;
            store: {
                name: string;
                status: string;
                id: string;
                slug: string;
                logo_url: string | null;
                city: string | null;
                state_region: string | null;
                country_code: string | null;
                verification_status: string;
                trade_mediation_enabled: boolean;
            };
        }[];
    }>;
}
//# sourceMappingURL=clerk-auth.service.d.ts.map