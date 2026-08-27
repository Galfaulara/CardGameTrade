import type { DiscoveryCollectionFeedQuery, DiscoveryCollectionListQuery, DiscoveryInventoryPageQuery, DiscoveryListingFeedQuery, DiscoveryStoreFeedQuery, DiscoveryStoreListQuery, DiscoveryUserCollectionQuery, DiscoveryUserListingQuery, DiscoveryUserWishlistQuery } from "@repo/validation";
import { DatabaseService } from "../database/database.service";
export declare class DiscoveryService {
    private readonly database;
    constructor(database: DatabaseService);
    private encodeCursor;
    private decodeCursor;
    private mapItem;
    private mapFeedListing;
    private mapPreview;
    private mapPreferredStore;
    private publicUserWhere;
    private requirePublicUser;
    private userListingWhere;
    private storeListingWhere;
    private requirePublicStore;
    private representativePrintings;
    getUser(id: string): Promise<{
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
    getUserCollections(id: string, query: DiscoveryUserCollectionQuery): Promise<{
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
    getUserListings(id: string, query: DiscoveryUserListingQuery): Promise<{
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
    getUserWishlists(id: string, query: DiscoveryUserWishlistQuery): Promise<{
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
    /** Database-ranked and capped before card metadata is hydrated. The explicit
     * rarity values reflect the local catalog; unknown/null values safely rank last. */
    private rankedPreviews;
    private diverse;
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
    getCollection(id: string, query: DiscoveryInventoryPageQuery): Promise<{
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
    getStore(id: string): Promise<{
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
    getStoreListings(id: string, query: DiscoveryUserListingQuery): Promise<{
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
    getStoreInventory(id: string, query: DiscoveryInventoryPageQuery): Promise<{
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
}
//# sourceMappingURL=discovery.service.d.ts.map