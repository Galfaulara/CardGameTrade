import type { CreateUserListingInput, SetUserListingStatusInput, UpdateUserListingInput, ListingListQuery } from "@repo/validation";
import { ListingsService } from "./listings.service";
export declare class ListingsController {
    private readonly listingsService;
    constructor(listingsService: ListingsService);
    getActiveListings(query: ListingListQuery): Promise<any[]>;
    getListing(listingId: string): Promise<any>;
    getUserListings(userId: string, query: ListingListQuery): Promise<any[]>;
    createUserListing(userId: string, input: CreateUserListingInput): Promise<any>;
    updateUserListing(userId: string, listingId: string, input: UpdateUserListingInput): Promise<any>;
    setUserListingStatus(userId: string, listingId: string, input: SetUserListingStatusInput): Promise<any>;
}
//# sourceMappingURL=listings.controller.d.ts.map