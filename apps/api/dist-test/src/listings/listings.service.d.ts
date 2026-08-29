import type { CreateUserListingInput, SetUserListingStatusInput, UpdateUserListingInput } from "@repo/validation";
import { DatabaseService } from "../database/database.service";
export declare class ListingsService {
    private readonly database;
    constructor(database: DatabaseService);
    private resolveGameId;
    private findEligibleTradeStore;
    private requireEligibleTradeStore;
    private resolvePreferredStoreForNewListing;
    private mapListing;
    private getListingSelect;
    getActiveListings(gameSlug?: string): Promise<any[]>;
    getListing(listingId: string): Promise<any>;
    getUserListings(userId: string, gameSlug?: string): Promise<any[]>;
    createUserListing(userId: string, input: CreateUserListingInput): Promise<any>;
    updateUserListing(userId: string, listingId: string, input: UpdateUserListingInput): Promise<any>;
    setUserListingStatus(userId: string, listingId: string, input: SetUserListingStatusInput): Promise<any>;
}
//# sourceMappingURL=listings.service.d.ts.map