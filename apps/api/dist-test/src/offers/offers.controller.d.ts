import type { AcceptListingOfferInput, CreateListingOfferInput } from "@repo/validation";
import { OffersService } from "./offers.service";
export declare class OffersController {
    private readonly offersService;
    constructor(offersService: OffersService);
    createUserOffer(listingId: string, userId: string, input: CreateListingOfferInput): Promise<any>;
    createUserOfferFromInterest(listingId: string, userId: string, interestId: string, input: CreateListingOfferInput): Promise<any>;
    getUserSentOffers(userId: string): Promise<any[]>;
    getUserReceivedOffers(userId: string): Promise<any[]>;
    getUserReceivedOffersForListing(listingId: string, userId: string): Promise<any[]>;
    withdrawUserOffer(offerId: string, userId: string): Promise<any>;
    rejectUserOffer(offerId: string, userId: string): Promise<any>;
    acceptUserOffer(offerId: string, userId: string, input: AcceptListingOfferInput): Promise<{
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
//# sourceMappingURL=offers.controller.d.ts.map