import type { CreateInventoryItemInterestInput, UpdateInventoryItemInterestInput } from "@repo/validation";
import { InventoryInterestsService } from "./inventory-interests.service";
export declare class InventoryInterestsController {
    private readonly inventoryInterestsService;
    constructor(inventoryInterestsService: InventoryInterestsService);
    createUserInterest(inventoryItemId: string, userId: string, input: CreateInventoryItemInterestInput): Promise<any>;
    getUserSentInterests(userId: string): Promise<any[]>;
    getUserReceivedInterests(userId: string): Promise<any[]>;
    updateUserInterest(interestId: string, userId: string, input: UpdateInventoryItemInterestInput): Promise<any>;
    withdrawUserInterest(interestId: string, userId: string): Promise<any>;
    dismissReceivedInterest(interestId: string, ownerUserId: string): Promise<any>;
}
//# sourceMappingURL=inventory-interests.controller.d.ts.map