import type { AuthenticatedPrincipal } from "../auth/auth.types";
import type { CreateUserInventoryItemInput, MyInventoryListQuery, UpdateUserInventoryItemInput } from "@repo/validation";
import { InventoryService } from "./inventory.service";
export declare class MeInventoryController {
    private readonly inventoryService;
    constructor(inventoryService: InventoryService);
    getMyInventory(principal: AuthenticatedPrincipal, query: MyInventoryListQuery): Promise<{
        items: any[];
        summary: {
            total_inventory_row_count: number;
            total_card_quantity: number;
            filtered_inventory_row_count: number;
            filtered_card_quantity: number;
        };
        pagination: {
            page: number;
            page_size: number;
            total_count: number;
            has_more: boolean;
        };
    }>;
    createMyInventoryItem(principal: AuthenticatedPrincipal, input: CreateUserInventoryItemInput): Promise<any>;
    getMyInventoryItem(principal: AuthenticatedPrincipal, inventoryItemId: string): Promise<any>;
    updateMyInventoryItem(principal: AuthenticatedPrincipal, inventoryItemId: string, input: UpdateUserInventoryItemInput): Promise<any>;
    removeMyInventoryItem(principal: AuthenticatedPrincipal, inventoryItemId: string): Promise<any>;
}
//# sourceMappingURL=me-inventory.controller.d.ts.map