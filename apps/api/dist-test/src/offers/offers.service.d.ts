import type { AcceptListingOfferInput, CreateListingOfferInput } from "@repo/validation";
import { DatabaseService } from "../database/database.service";
export declare class OffersService {
    private readonly database;
    constructor(database: DatabaseService);
    private getOfferSelect;
    private mapOffer;
    private loadOffer;
    private getAcceptedTransaction;
    getUserSentOffers(userId: string): Promise<any[]>;
    getUserReceivedOffers(userId: string, listingId?: string): Promise<any[]>;
    createUserOffer(userId: string, listingId: string, input: CreateListingOfferInput, interestId?: string): Promise<any>;
    withdrawUserOffer(userId: string, offerId: string): Promise<any>;
    rejectUserOffer(sellerUserId: string, offerId: string): Promise<any>;
    acceptUserOffer(sellerUserId: string, offerId: string, input: AcceptListingOfferInput): Promise<{
        custody: {
            id: string;
            store_id: string;
            released_at: Date | null;
            transaction_item_id: string;
            custody_status: string;
            received_at: Date | null;
            verified_at: Date | null;
            issue_notes: string | null;
        }[];
        status: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        store_trade_handoffs: {
            status: string;
            id: string;
            created_at: Date;
            store_id: string;
            stores: {
                name: string;
                id: string;
                slug: string;
                city: string | null;
                state_region: string | null;
                country_code: string | null;
                trade_mediation_enabled: boolean;
            };
        } | null;
        seller_user_id: string | null;
        seller_store_id: string | null;
        currency_code: string;
        transaction_items: {
            id: string;
            inventory_item_id: string;
            quantity: number;
            item_role: string;
            from_user_id: string | null;
            from_store_id: string | null;
            to_user_id: string | null;
            to_store_id: string | null;
        }[];
        listing_id: string | null;
        cash_amount: import("@prisma/client-runtime-utils").Decimal;
        accepted_offer_id: string | null;
        counterparty_user_id: string | null;
        counterparty_store_id: string | null;
        transaction_type: string;
        agreed_at: Date;
        completed_at: Date | null;
    }>;
}
//# sourceMappingURL=offers.service.d.ts.map