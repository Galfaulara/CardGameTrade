import type { AcceptWishlistOfferInput, CreateUserWishlistInput, CreateWishlistItemInput, CreateWishlistOfferInput, UpdateUserWishlistInput, UpdateWishlistItemInput } from "@repo/validation";
import { WishlistsService } from "./wishlists.service";
export declare class WishlistsController {
    private readonly wishlistsService;
    constructor(wishlistsService: WishlistsService);
    getPublicWishlistItems(): Promise<any[]>;
    getUserWishlists(userId: string): Promise<any[]>;
    getUserWishlist(wishlistId: string, userId: string): Promise<any>;
    createUserWishlist(userId: string, input: CreateUserWishlistInput): Promise<any>;
    updateUserWishlist(wishlistId: string, userId: string, input: UpdateUserWishlistInput): Promise<any>;
    createWishlistItem(wishlistId: string, userId: string, input: CreateWishlistItemInput): Promise<any>;
    updateWishlistItem(wishlistId: string, itemId: string, userId: string, input: UpdateWishlistItemInput): Promise<any>;
    createUserWishlistOffer(wishlistItemId: string, userId: string, input: CreateWishlistOfferInput): Promise<any>;
    createUserWishlistOfferFromInterest(wishlistItemId: string, userId: string, interestId: string, input: CreateWishlistOfferInput): Promise<any>;
    getUserSentWishlistOffers(userId: string): Promise<any[]>;
    getUserReceivedWishlistOffers(wishlistItemId: string, userId: string): Promise<any[]>;
    withdrawUserWishlistOffer(offerId: string, userId: string): Promise<any>;
    acceptUserWishlistOffer(offerId: string, userId: string, input: AcceptWishlistOfferInput): Promise<{
        store: {
            name: string;
            id: string;
            slug: string;
            city: string | null;
            country_code: string | null;
        };
        transaction_items: any[];
        store_trade_handoffs: {
            status: string;
            id: string;
            created_at: Date;
            updated_at: Date;
            transaction_id: string;
            completed_at: Date | null;
            store_id: string;
            store_notes: string | null;
            cancelled_at: Date | null;
        };
        custody: any[];
        status: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        seller_user_id: string | null;
        seller_store_id: string | null;
        currency_code: string;
        listing_id: string | null;
        cash_amount: import("@prisma/client-runtime-utils").Decimal;
        accepted_offer_id: string | null;
        accepted_wishlist_offer_id: string | null;
        counterparty_user_id: string | null;
        counterparty_store_id: string | null;
        transaction_type: string;
        agreed_at: Date;
        completed_at: Date | null;
    }>;
    rejectUserWishlistOffer(offerId: string, userId: string): Promise<any>;
}
//# sourceMappingURL=wishlists.controller.d.ts.map