import type { CreateInventoryItemInterestInput, UpdateInventoryItemInterestInput } from "@repo/validation";
import { DatabaseService } from "../database/database.service";
export declare class InventoryInterestsService {
    private readonly database;
    constructor(database: DatabaseService);
    private requireActiveUser;
    private getInterestSelect;
    private mapInterest;
    private loadInterest;
    private requireVisibleInterestTarget;
    createUserInterest(userId: string, inventoryItemId: string, input: CreateInventoryItemInterestInput): Promise<any>;
    getUserSentInterests(userId: string): Promise<any[]>;
    getUserReceivedInterests(ownerUserId: string): Promise<any[]>;
    updateUserInterest(userId: string, interestId: string, input: UpdateInventoryItemInterestInput): Promise<any>;
    withdrawUserInterest(userId: string, interestId: string): Promise<any>;
    dismissReceivedInterest(ownerUserId: string, interestId: string): Promise<any>;
}
//# sourceMappingURL=inventory-interests.service.d.ts.map