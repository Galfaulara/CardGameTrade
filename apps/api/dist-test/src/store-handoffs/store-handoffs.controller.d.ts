import type { AuthenticatedPrincipal } from "../auth/auth.types";
import { StoreHandoffsService } from "./store-handoffs.service";
export declare class StoreHandoffsController {
    private readonly storeHandoffsService;
    constructor(storeHandoffsService: StoreHandoffsService);
    private requireCurrentStaff;
    getStoreHandoffs(storeId: string, principal: AuthenticatedPrincipal): Promise<{
        id: any;
        transaction_id: any;
        store_id: any;
        status: any;
        store_notes: any;
        created_at: any;
        updated_at: any;
        completed_at: any;
        cancelled_at: any;
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
        } | null;
        transaction: any;
        items: any[];
        progress: {
            total_items: number;
            received_items: number;
            verified_items: number;
            released_items: number;
        };
    }[]>;
    getHandoff(handoffId: string, principal: AuthenticatedPrincipal): Promise<{
        id: any;
        transaction_id: any;
        store_id: any;
        status: any;
        store_notes: any;
        created_at: any;
        updated_at: any;
        completed_at: any;
        cancelled_at: any;
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
        } | null;
        transaction: any;
        items: any[];
        progress: {
            total_items: number;
            received_items: number;
            verified_items: number;
            released_items: number;
        };
    } | undefined>;
    receiveItemForCurrentStaff(handoffId: string, transactionItemId: string, principal: AuthenticatedPrincipal): Promise<{
        id: any;
        transaction_id: any;
        store_id: any;
        status: any;
        store_notes: any;
        created_at: any;
        updated_at: any;
        completed_at: any;
        cancelled_at: any;
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
        } | null;
        transaction: any;
        items: any[];
        progress: {
            total_items: number;
            received_items: number;
            verified_items: number;
            released_items: number;
        };
    } | undefined>;
    receiveItem(handoffId: string, transactionItemId: string, staffUserId: string, principal: AuthenticatedPrincipal): Promise<{
        id: any;
        transaction_id: any;
        store_id: any;
        status: any;
        store_notes: any;
        created_at: any;
        updated_at: any;
        completed_at: any;
        cancelled_at: any;
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
        } | null;
        transaction: any;
        items: any[];
        progress: {
            total_items: number;
            received_items: number;
            verified_items: number;
            released_items: number;
        };
    } | undefined>;
    verifyItemForCurrentStaff(handoffId: string, transactionItemId: string, principal: AuthenticatedPrincipal): Promise<{
        id: any;
        transaction_id: any;
        store_id: any;
        status: any;
        store_notes: any;
        created_at: any;
        updated_at: any;
        completed_at: any;
        cancelled_at: any;
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
        } | null;
        transaction: any;
        items: any[];
        progress: {
            total_items: number;
            received_items: number;
            verified_items: number;
            released_items: number;
        };
    } | undefined>;
    verifyItem(handoffId: string, transactionItemId: string, staffUserId: string, principal: AuthenticatedPrincipal): Promise<{
        id: any;
        transaction_id: any;
        store_id: any;
        status: any;
        store_notes: any;
        created_at: any;
        updated_at: any;
        completed_at: any;
        cancelled_at: any;
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
        } | null;
        transaction: any;
        items: any[];
        progress: {
            total_items: number;
            received_items: number;
            verified_items: number;
            released_items: number;
        };
    } | undefined>;
    releaseItemForCurrentStaff(handoffId: string, transactionItemId: string, principal: AuthenticatedPrincipal): Promise<{
        id: any;
        transaction_id: any;
        store_id: any;
        status: any;
        store_notes: any;
        created_at: any;
        updated_at: any;
        completed_at: any;
        cancelled_at: any;
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
        } | null;
        transaction: any;
        items: any[];
        progress: {
            total_items: number;
            received_items: number;
            verified_items: number;
            released_items: number;
        };
    } | undefined>;
    releaseItem(handoffId: string, transactionItemId: string, staffUserId: string, principal: AuthenticatedPrincipal): Promise<{
        id: any;
        transaction_id: any;
        store_id: any;
        status: any;
        store_notes: any;
        created_at: any;
        updated_at: any;
        completed_at: any;
        cancelled_at: any;
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
        } | null;
        transaction: any;
        items: any[];
        progress: {
            total_items: number;
            received_items: number;
            verified_items: number;
            released_items: number;
        };
    } | undefined>;
}
//# sourceMappingURL=store-handoffs.controller.d.ts.map