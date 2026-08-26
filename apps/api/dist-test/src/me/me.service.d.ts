import type { MyProfileStoreOptionsQuery, UpdateMyProfileInput } from "@repo/validation";
import { DatabaseService } from "../database/database.service";
export declare class MeService {
    private readonly database;
    constructor(database: DatabaseService);
    private publicUserWhere;
    private mapStore;
    private requireUser;
    private requireEligibleStore;
    getProfile(userId: string): Promise<{
        id: string;
        display_name: string | null;
        username: string | null;
        preferred_store_id: string | null;
        preferred_store: any;
        public_profile_available: boolean;
    }>;
    updateProfile(userId: string, input: UpdateMyProfileInput): Promise<{
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
//# sourceMappingURL=me.service.d.ts.map