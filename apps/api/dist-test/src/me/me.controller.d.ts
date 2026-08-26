import type { AuthenticatedPrincipal } from "../auth/auth.types";
import type { MyProfileStoreOptionsQuery, UpdateMyProfileInput } from "@repo/validation";
import { MeService } from "./me.service";
export declare class MeController {
    private readonly meService;
    constructor(meService: MeService);
    getProfile(principal: AuthenticatedPrincipal): Promise<{
        id: string;
        display_name: string | null;
        username: string | null;
        preferred_store_id: string | null;
        preferred_store: any;
        public_profile_available: boolean;
    }>;
    updateProfile(principal: AuthenticatedPrincipal, input: UpdateMyProfileInput): Promise<{
        id: string;
        display_name: string | null;
        username: string | null;
        preferred_store_id: string | null;
        preferred_store: any;
        public_profile_available: boolean;
    }>;
    getProfileStoreOptions(query: MyProfileStoreOptionsQuery): Promise<{
        items: {
            name: string;
            id: string;
            slug: string;
            logo_url: string | null;
            city: string | null;
            state_region: string | null;
            country_code: string | null;
        }[];
    }>;
}
//# sourceMappingURL=me.controller.d.ts.map