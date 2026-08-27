import type { DiscoveryCollectionListQuery, DiscoveryCollectionFeedQuery, DiscoveryListingFeedQuery, DiscoveryStoreFeedQuery, DiscoveryInventoryPageQuery, DiscoveryStoreListQuery, DiscoveryUserCollectionQuery, DiscoveryUserListingQuery, DiscoveryUserWishlistQuery } from "@repo/validation";
import { DiscoveryService } from "./discovery.service";
export declare class DiscoveryController {
    private readonly discoveryService;
    constructor(discoveryService: DiscoveryService);
    getCollectionFeed(query: DiscoveryCollectionFeedQuery): Promise<{
        items: {
            owner: {
                id: string;
                username: string | null;
                display_name: string | null;
            };
            preferred_store: any;
            inventory_row_count: any;
            card_quantity: any;
            marketplace_inventory_row_count: any;
            marketplace_card_quantity: any;
            preview_items: any[];
            name: string;
            id: string;
            created_at: Date;
            updated_at: Date;
            description: string | null;
        }[];
        next_cursor: string | null;
        has_more: boolean;
    }>;
    getStoreFeed(query: DiscoveryStoreFeedQuery): Promise<{
        items: {
            inventory_row_count: any;
            card_quantity: any;
            marketplace_inventory_row_count: any;
            marketplace_card_quantity: any;
            preview_items: any[];
            name: string;
            id: string;
            slug: string;
            description: string | null;
            logo_url: string | null;
            city: string | null;
            state_region: string | null;
            country_code: string | null;
        }[];
        next_cursor: string | null;
        has_more: boolean;
    }>;
    getListingFeed(query: DiscoveryListingFeedQuery): Promise<{
        items: {
            seller: {
                kind: string;
                id: any;
                display_name: any;
                username: any;
                name?: undefined;
            } | {
                kind: string;
                id: any;
                name: any;
                display_name?: undefined;
                username?: undefined;
            };
            created_at: any;
            listing: {
                id: any;
                accepts_cash: any;
                accepts_trade: any;
                asking_price: any;
                currency_code: any;
            };
            id: any;
            quantity: any;
            condition: any;
            finish: any;
            language_code: any;
            status: any;
            printing: any;
        }[];
        next_cursor: string | null;
        has_more: boolean;
    }>;
    getUser(userId: string): Promise<{
        user: {
            preferred_store: any;
            id: string;
            username: string | null;
            display_name: string | null;
        };
        summary: {
            public_collection_count: number;
            active_listing_count: number;
            public_wishlist_count: number;
            public_wishlist_item_count: number;
        };
    }>;
    getUserCollections(userId: string, query: DiscoveryUserCollectionQuery): Promise<{
        user: {
            id: string;
            display_name: string | null;
            username: string | null;
        };
        items: {
            inventory_row_count: any;
            card_quantity: any;
            marketplace_inventory_row_count: any;
            marketplace_card_quantity: any;
            preview_items: any[];
            name: string;
            id: string;
            created_at: Date;
            updated_at: Date;
            description: string | null;
        }[];
        pagination: {
            page: number;
            page_size: number;
            total_count: number;
            has_more: boolean;
        };
    }>;
    getUserListings(userId: string, query: DiscoveryUserListingQuery): Promise<{
        user: {
            id: string;
            display_name: string | null;
            username: string | null;
        };
        items: {
            listing: {
                id: any;
                accepts_cash: any;
                accepts_trade: any;
                asking_price: any;
                currency_code: any;
            };
            id: any;
            quantity: any;
            condition: any;
            finish: any;
            language_code: any;
            status: any;
            printing: any;
        }[];
        pagination: {
            page: number;
            page_size: number;
            total_count: number;
            has_more: boolean;
        };
    }>;
    getUserWishlists(userId: string, query: DiscoveryUserWishlistQuery): Promise<{
        user: {
            id: string;
            display_name: string | null;
            username: string | null;
        };
        items: {
            active_item_count: any;
            wanted_card_quantity: any;
            preview_items: any[];
            name: string;
            id: string;
            created_at: Date;
            updated_at: Date;
            description: string | null;
        }[];
        pagination: {
            page: number;
            page_size: number;
            total_count: number;
            has_more: boolean;
        };
    }>;
    getCollections(query: DiscoveryCollectionListQuery): Promise<{
        owner: {
            id: string;
            username: string | null;
            display_name: string | null;
        };
        preferred_store: any;
        inventory_row_count: any;
        card_quantity: any;
        marketplace_inventory_row_count: any;
        marketplace_card_quantity: any;
        preview_items: any[];
        name: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        description: string | null;
    }[]>;
    getCollection(collectionId: string, query: DiscoveryInventoryPageQuery): Promise<{
        collection: {
            id: string;
            name: string;
            description: string | null;
            created_at: Date;
            updated_at: Date;
            owner: {
                id: string;
                username: string | null;
                display_name: string | null;
            };
            preferred_store: any;
            inventory_row_count: number;
            card_quantity: number;
        };
        items: {
            listing: {
                id: string;
                accepts_cash: boolean;
                accepts_trade: boolean;
                asking_price: import("@prisma/client-runtime-utils").Decimal | null;
                currency_code: string | null;
            } | undefined;
            id: any;
            quantity: any;
            condition: any;
            finish: any;
            language_code: any;
            status: any;
            printing: any;
        }[];
        pagination: {
            page: number;
            page_size: number;
            total_count: number;
            has_more: boolean;
        };
    }>;
    getStores(query: DiscoveryStoreListQuery): Promise<{
        inventory_row_count: any;
        card_quantity: any;
        marketplace_inventory_row_count: any;
        marketplace_card_quantity: any;
        preview_items: any[];
        name: string;
        id: string;
        slug: string;
        description: string | null;
        logo_url: string | null;
    }[]>;
    getStoreInventory(storeId: string, query: DiscoveryInventoryPageQuery): Promise<{
        store: {
            inventory_row_count: number;
            card_quantity: number;
            name: string;
            id: string;
            slug: string;
            description: string | null;
            logo_url: string | null;
            city: string | null;
            state_region: string | null;
            country_code: string | null;
        };
        items: {
            id: any;
            quantity: any;
            condition: any;
            finish: any;
            language_code: any;
            status: any;
            printing: any;
        }[];
        pagination: {
            page: number;
            page_size: number;
            total_count: number;
            has_more: boolean;
        };
    }>;
    getStoreListings(storeId: string, query: DiscoveryUserListingQuery): Promise<{
        store: {
            name: string;
            id: string;
            slug: string;
            description: string | null;
            logo_url: string | null;
            city: string | null;
            state_region: string | null;
            country_code: string | null;
        };
        items: {
            listing: {
                id: any;
                accepts_cash: any;
                accepts_trade: any;
                asking_price: any;
                currency_code: any;
            };
            id: any;
            quantity: any;
            condition: any;
            finish: any;
            language_code: any;
            status: any;
            printing: any;
        }[];
        pagination: {
            page: number;
            page_size: number;
            total_count: number;
            has_more: boolean;
        };
    }>;
    getStore(storeId: string): Promise<{
        store: {
            name: string;
            id: string;
            slug: string;
            description: string | null;
            logo_url: string | null;
            city: string | null;
            state_region: string | null;
            country_code: string | null;
        };
        summary: {
            available_inventory_row_count: number;
            available_card_quantity: number;
            marketplace_inventory_row_count: number;
            marketplace_card_quantity: number;
            active_listing_count: number;
        };
    }>;
}
//# sourceMappingURL=discovery.controller.d.ts.map