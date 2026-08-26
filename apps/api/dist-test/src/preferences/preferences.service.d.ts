import type { SetPreferredTradeStoreInput } from "@repo/validation";
import { DatabaseService } from "../database/database.service";
export declare class PreferencesService {
    private readonly database;
    constructor(database: DatabaseService);
    getPreferredTradeStore(userId: string): Promise<{
        user_id: string;
        preferred_trade_store_id: null;
        preferred_trade_store: null;
    } | {
        preferred_trade_store: {
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
        } | null;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        preferred_trade_store_id: string | null;
    }>;
    setPreferredTradeStore(userId: string, input: SetPreferredTradeStoreInput): Promise<{
        user_id: string;
        preferred_trade_store_id: null;
        preferred_trade_store: null;
    } | {
        preferred_trade_store: {
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
        } | null;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        preferred_trade_store_id: string | null;
    }>;
}
//# sourceMappingURL=preferences.service.d.ts.map