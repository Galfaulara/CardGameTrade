import type { CreateInventoryPhotoInput, CreateUserCollectionInput, CreateUserInventoryItemInput, SetInventoryCollectionInput, UpdateUserInventoryItemInput } from "@repo/validation";
import { InventoryService } from "./inventory.service";
import type { InventoryPhotoUploadFile } from "./inventory.service";
export declare class InventoryController {
    private readonly inventoryService;
    constructor(inventoryService: InventoryService);
    getUserInventory(userId: string): Promise<{
        inventory_item_photos: ({
            signed_url: string;
            id: string;
            storage_provider: string;
            storage_key: string;
            public_url: string | null;
            sort_order: number;
            is_primary: boolean;
        } | {
            signed_url: null;
            id: string;
            storage_provider: string;
            storage_key: string;
            public_url: string | null;
            sort_order: number;
            is_primary: boolean;
        })[];
        printing: {
            finish: string;
            id: string;
            canonical_cards: {
                name: string;
                id: string;
                mana_cost: string | null;
                type_line: string | null;
            };
            card_sets: {
                name: string;
                id: string;
                code: string;
            };
            collector_number: string;
            language_code: string;
            printed_name: string | null;
            rarity: string | null;
            artist_name: string | null;
            treatment: string | null;
            image_small_uri: string | null;
            image_normal_uri: string | null;
            image_large_uri: string | null;
        };
        status: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        collections: {
            name: string;
            id: string;
            visibility: string;
        } | null;
        language_code: string;
        printing_id: string;
        finish: string;
        collection_id: string | null;
        condition: string;
        quantity: number;
        is_signed: boolean;
        is_altered: boolean;
        is_graded: boolean;
        grading_company: string | null;
        grade: string | null;
        certification_number: string | null;
        acquired_at: Date | null;
        acquired_price: import("@prisma/client-runtime-utils").Decimal | null;
        notes: string | null;
    }[]>;
    createUserInventoryItem(userId: string, input: CreateUserInventoryItemInput): Promise<{
        inventory_item_photos: ({
            signed_url: string;
            id: string;
            storage_provider: string;
            storage_key: string;
            public_url: string | null;
            sort_order: number;
            is_primary: boolean;
        } | {
            signed_url: null;
            id: string;
            storage_provider: string;
            storage_key: string;
            public_url: string | null;
            sort_order: number;
            is_primary: boolean;
        })[];
        printing: {
            finish: string;
            id: string;
            canonical_cards: {
                name: string;
                id: string;
                mana_cost: string | null;
                type_line: string | null;
            };
            card_sets: {
                name: string;
                id: string;
                code: string;
            };
            collector_number: string;
            language_code: string;
            printed_name: string | null;
            rarity: string | null;
            artist_name: string | null;
            treatment: string | null;
            image_small_uri: string | null;
            image_normal_uri: string | null;
            image_large_uri: string | null;
        };
        status: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        collections: {
            name: string;
            id: string;
            visibility: string;
        } | null;
        language_code: string;
        printing_id: string;
        finish: string;
        collection_id: string | null;
        condition: string;
        quantity: number;
        is_signed: boolean;
        is_altered: boolean;
        is_graded: boolean;
        grading_company: string | null;
        grade: string | null;
        certification_number: string | null;
        acquired_at: Date | null;
        acquired_price: import("@prisma/client-runtime-utils").Decimal | null;
        notes: string | null;
    }>;
    getUserCollections(userId: string): Promise<{
        name: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        _count: {
            inventory_items: number;
        };
        description: string | null;
        visibility: string;
    }[]>;
    createUserCollection(userId: string, input: CreateUserCollectionInput): Promise<{
        name: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        description: string | null;
        user_id: string;
        visibility: string;
    }>;
    setUserInventoryCollection(userId: string, itemId: string, input: SetInventoryCollectionInput): Promise<{
        inventory_item_photos: ({
            signed_url: string;
            id: string;
            storage_provider: string;
            storage_key: string;
            public_url: string | null;
            sort_order: number;
            is_primary: boolean;
        } | {
            signed_url: null;
            id: string;
            storage_provider: string;
            storage_key: string;
            public_url: string | null;
            sort_order: number;
            is_primary: boolean;
        })[];
        printing: {
            finish: string;
            id: string;
            canonical_cards: {
                name: string;
                id: string;
                mana_cost: string | null;
                type_line: string | null;
            };
            card_sets: {
                name: string;
                id: string;
                code: string;
            };
            collector_number: string;
            language_code: string;
            printed_name: string | null;
            rarity: string | null;
            artist_name: string | null;
            treatment: string | null;
            image_small_uri: string | null;
            image_normal_uri: string | null;
            image_large_uri: string | null;
        };
        status: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        collections: {
            name: string;
            id: string;
            visibility: string;
        } | null;
        language_code: string;
        printing_id: string;
        finish: string;
        collection_id: string | null;
        condition: string;
        quantity: number;
        is_signed: boolean;
        is_altered: boolean;
        is_graded: boolean;
        grading_company: string | null;
        grade: string | null;
        certification_number: string | null;
        acquired_at: Date | null;
        acquired_price: import("@prisma/client-runtime-utils").Decimal | null;
        notes: string | null;
    }>;
    updateUserInventoryItem(userId: string, itemId: string, input: UpdateUserInventoryItemInput): Promise<{
        inventory_item_photos: ({
            signed_url: string;
            id: string;
            storage_provider: string;
            storage_key: string;
            public_url: string | null;
            sort_order: number;
            is_primary: boolean;
        } | {
            signed_url: null;
            id: string;
            storage_provider: string;
            storage_key: string;
            public_url: string | null;
            sort_order: number;
            is_primary: boolean;
        })[];
        printing: {
            finish: string;
            id: string;
            canonical_cards: {
                name: string;
                id: string;
                mana_cost: string | null;
                type_line: string | null;
            };
            card_sets: {
                name: string;
                id: string;
                code: string;
            };
            collector_number: string;
            language_code: string;
            printed_name: string | null;
            rarity: string | null;
            artist_name: string | null;
            treatment: string | null;
            image_small_uri: string | null;
            image_normal_uri: string | null;
            image_large_uri: string | null;
        };
        status: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        collections: {
            name: string;
            id: string;
            visibility: string;
        } | null;
        language_code: string;
        printing_id: string;
        finish: string;
        collection_id: string | null;
        condition: string;
        quantity: number;
        is_signed: boolean;
        is_altered: boolean;
        is_graded: boolean;
        grading_company: string | null;
        grade: string | null;
        certification_number: string | null;
        acquired_at: Date | null;
        acquired_price: import("@prisma/client-runtime-utils").Decimal | null;
        notes: string | null;
    }>;
    uploadUserInventoryPhoto(userId: string, itemId: string, input: CreateInventoryPhotoInput, file: InventoryPhotoUploadFile): Promise<{
        inventory_item_photos: ({
            signed_url: string;
            id: string;
            storage_provider: string;
            storage_key: string;
            public_url: string | null;
            sort_order: number;
            is_primary: boolean;
        } | {
            signed_url: null;
            id: string;
            storage_provider: string;
            storage_key: string;
            public_url: string | null;
            sort_order: number;
            is_primary: boolean;
        })[];
        printing: {
            finish: string;
            id: string;
            canonical_cards: {
                name: string;
                id: string;
                mana_cost: string | null;
                type_line: string | null;
            };
            card_sets: {
                name: string;
                id: string;
                code: string;
            };
            collector_number: string;
            language_code: string;
            printed_name: string | null;
            rarity: string | null;
            artist_name: string | null;
            treatment: string | null;
            image_small_uri: string | null;
            image_normal_uri: string | null;
            image_large_uri: string | null;
        };
        status: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        collections: {
            name: string;
            id: string;
            visibility: string;
        } | null;
        language_code: string;
        printing_id: string;
        finish: string;
        collection_id: string | null;
        condition: string;
        quantity: number;
        is_signed: boolean;
        is_altered: boolean;
        is_graded: boolean;
        grading_company: string | null;
        grade: string | null;
        certification_number: string | null;
        acquired_at: Date | null;
        acquired_price: import("@prisma/client-runtime-utils").Decimal | null;
        notes: string | null;
    }>;
}
//# sourceMappingURL=inventory.controller.d.ts.map