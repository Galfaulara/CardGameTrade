"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let ListingsService = class ListingsService {
    database;
    constructor(database) {
        this.database = database;
    }
    async findEligibleTradeStore(storeId) {
        return this.database.client.stores.findFirst({
            where: {
                id: storeId,
                status: "active",
                verification_status: "verified",
                trade_mediation_enabled: true,
            },
            select: {
                id: true,
            },
        });
    }
    async requireEligibleTradeStore(storeId) {
        const store = await this.findEligibleTradeStore(storeId);
        if (!store) {
            throw new common_1.BadRequestException("The selected store must be an active affiliated DeckDeal trade-mediation store.");
        }
        return store;
    }
    async resolvePreferredStoreForNewListing(userId, requestedStoreId) {
        /*
         * Explicit null means:
         * do not use a preferred store
         * for this listing.
         */
        if (requestedStoreId ===
            null) {
            return null;
        }
        /*
         * Explicit store ID overrides
         * the user's global preference.
         */
        if (requestedStoreId !==
            undefined) {
            await this.requireEligibleTradeStore(requestedStoreId);
            return requestedStoreId;
        }
        /*
         * No value was supplied.
         * Try the user's global
         * preferred trade store.
         */
        const preference = await this.database.client.user_preferences.findUnique({
            where: {
                user_id: userId,
            },
            select: {
                preferred_trade_store_id: true,
            },
        });
        const preferredStoreId = preference
            ?.preferred_trade_store_id ??
            null;
        if (!preferredStoreId) {
            return null;
        }
        /*
         * A user's preferred store may
         * later become inactive,
         * unverified, or lose its
         * mediation affiliation.
         *
         * In that case we allow the
         * listing to be created without
         * a preferred store.
         */
        const eligibleStore = await this.findEligibleTradeStore(preferredStoreId);
        return (eligibleStore?.id ??
            null);
    }
    mapListing(listing) {
        const inventoryItem = listing
            .inventory_items_listings_inventory_item_id_seller_user_idToinventory_items ??
            listing
                .inventory_items_listings_inventory_item_id_seller_store_idToinventory_items;
        const { inventory_items_listings_inventory_item_id_seller_user_idToinventory_items: _userInventoryRelation, inventory_items_listings_inventory_item_id_seller_store_idToinventory_items: _storeInventoryRelation, stores: preferredStore, ...listingData } = listing;
        if (!inventoryItem) {
            return {
                ...listingData,
                preferred_store: preferredStore,
                inventory_item: null,
            };
        }
        const { printing_finishes, ...inventoryData } = inventoryItem;
        return {
            ...listingData,
            preferred_store: preferredStore,
            inventory_item: {
                ...inventoryData,
                printing: {
                    ...printing_finishes
                        .card_printings,
                    finish: printing_finishes
                        .finish,
                },
            },
        };
    }
    getListingSelect() {
        return {
            id: true,
            inventory_item_id: true,
            seller_user_id: true,
            seller_store_id: true,
            accepts_cash: true,
            accepts_trade: true,
            asking_price: true,
            currency_code: true,
            preferred_store_id: true,
            title: true,
            description: true,
            status: true,
            created_at: true,
            updated_at: true,
            stores: {
                select: {
                    id: true,
                    name: true,
                    slug: true,
                    logo_url: true,
                    city: true,
                    state_region: true,
                    country_code: true,
                    verification_status: true,
                    status: true,
                    trade_mediation_enabled: true,
                },
            },
            inventory_items_listings_inventory_item_id_seller_user_idToinventory_items: {
                select: {
                    id: true,
                    finish: true,
                    condition: true,
                    language_code: true,
                    quantity: true,
                    is_signed: true,
                    is_altered: true,
                    is_graded: true,
                    status: true,
                    user_profiles: {
                        select: {
                            id: true,
                            username: true,
                            display_name: true,
                        },
                    },
                    printing_finishes: {
                        select: {
                            finish: true,
                            card_printings: {
                                select: {
                                    id: true,
                                    collector_number: true,
                                    language_code: true,
                                    printed_name: true,
                                    rarity: true,
                                    treatment: true,
                                    image_small_uri: true,
                                    image_normal_uri: true,
                                    image_large_uri: true,
                                    canonical_cards: {
                                        select: {
                                            id: true,
                                            name: true,
                                            mana_cost: true,
                                            type_line: true,
                                        },
                                    },
                                    card_sets: {
                                        select: {
                                            id: true,
                                            code: true,
                                            name: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            inventory_items_listings_inventory_item_id_seller_store_idToinventory_items: {
                select: {
                    id: true,
                    finish: true,
                    condition: true,
                    language_code: true,
                    quantity: true,
                    is_signed: true,
                    is_altered: true,
                    is_graded: true,
                    status: true,
                    stores: {
                        select: {
                            id: true,
                            name: true,
                            slug: true,
                            logo_url: true,
                        },
                    },
                    printing_finishes: {
                        select: {
                            finish: true,
                            card_printings: {
                                select: {
                                    id: true,
                                    collector_number: true,
                                    language_code: true,
                                    printed_name: true,
                                    rarity: true,
                                    treatment: true,
                                    image_small_uri: true,
                                    image_normal_uri: true,
                                    image_large_uri: true,
                                    canonical_cards: {
                                        select: {
                                            id: true,
                                            name: true,
                                            mana_cost: true,
                                            type_line: true,
                                        },
                                    },
                                    card_sets: {
                                        select: {
                                            id: true,
                                            code: true,
                                            name: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        };
    }
    async getActiveListings() {
        const listings = await this.database.client.listings.findMany({
            where: {
                status: "active",
                OR: [
                    {
                        accepts_trade: true,
                    },
                    {
                        accepts_cash: true,
                    },
                ],
                AND: {
                    OR: [
                        {
                            seller_user_id: { not: null },
                            seller_store_id: null,
                            inventory_items_listings_inventory_item_id_seller_user_idToinventory_items: {
                                is: {
                                    status: "available",
                                    owner_store_id: null,
                                    user_profiles: { status: "active" },
                                },
                            },
                        },
                        {
                            seller_store_id: { not: null },
                            seller_user_id: null,
                            inventory_items_listings_inventory_item_id_seller_store_idToinventory_items: {
                                is: {
                                    status: "available",
                                    owner_user_id: null,
                                    stores: {
                                        status: "active",
                                        verification_status: "verified",
                                        trade_mediation_enabled: true,
                                    },
                                },
                            },
                        },
                    ],
                },
            },
            select: this.getListingSelect(),
            orderBy: {
                created_at: "desc",
            },
        });
        return listings.map((listing) => this.mapListing(listing));
    }
    async getListing(listingId) {
        const listing = await this.database.client.listings.findUnique({
            where: {
                id: listingId,
            },
            select: this.getListingSelect(),
        });
        if (!listing) {
            throw new common_1.NotFoundException("Listing was not found.");
        }
        return this.mapListing(listing);
    }
    async createUserListing(userId, input) {
        const user = await this.database.client.user_profiles.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                status: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException("User was not found.");
        }
        if (user.status !==
            "active") {
            throw new common_1.ForbiddenException("Listings cannot be created for an inactive user.");
        }
        const inventoryItem = await this.database.client.inventory_items.findFirst({
            where: {
                id: input.inventoryItemId,
                owner_user_id: userId,
            },
            select: {
                id: true,
                status: true,
            },
        });
        if (!inventoryItem) {
            throw new common_1.NotFoundException("Inventory item was not found or does not belong to this user.");
        }
        if (inventoryItem.status !==
            "available") {
            throw new common_1.BadRequestException("Only available inventory items can be listed.");
        }
        const existingOpenListing = await this.database.client.listings.findFirst({
            where: {
                inventory_item_id: inventoryItem.id,
                status: {
                    in: [
                        "active",
                        "paused",
                    ],
                },
            },
            select: {
                id: true,
            },
        });
        if (existingOpenListing) {
            throw new common_1.ConflictException("This inventory item already has an open listing.");
        }
        const preferredStoreId = await this.resolvePreferredStoreForNewListing(userId, input.preferredStoreId);
        const listing = await this.database.client.listings.create({
            data: {
                inventory_item_id: inventoryItem.id,
                seller_user_id: userId,
                seller_store_id: null,
                accepts_cash: input.acceptsCash,
                accepts_trade: input.acceptsTrade,
                asking_price: input.acceptsCash
                    ? input.askingPrice
                    : null,
                currency_code: input.acceptsCash
                    ? input.currencyCode
                    : null,
                preferred_store_id: preferredStoreId,
                title: input.title ??
                    null,
                description: input.description ??
                    null,
                status: "active",
            },
            select: {
                id: true,
            },
        });
        return this.getListing(listing.id);
    }
    async updateUserListing(userId, listingId, input) {
        const existing = await this.database.client.listings.findFirst({
            where: {
                id: listingId,
                seller_user_id: userId,
            },
            select: {
                id: true,
                inventory_item_id: true,
                accepts_cash: true,
                accepts_trade: true,
                asking_price: true,
                currency_code: true,
                preferred_store_id: true,
                title: true,
                description: true,
                status: true,
            },
        });
        if (!existing) {
            throw new common_1.NotFoundException("Listing was not found or does not belong to this user.");
        }
        if (existing.status !==
            "active" &&
            existing.status !==
                "paused") {
            throw new common_1.BadRequestException("Only active or paused listings can be edited.");
        }
        const finalAcceptsCash = input.acceptsCash ??
            existing.accepts_cash;
        const finalAcceptsTrade = input.acceptsTrade ??
            existing.accepts_trade;
        if (!finalAcceptsCash &&
            !finalAcceptsTrade) {
            throw new common_1.BadRequestException("A listing must accept cash, trade, or both.");
        }
        const finalAskingPrice = finalAcceptsCash
            ? input.askingPrice !==
                undefined
                ? input.askingPrice
                : existing.asking_price
            : null;
        const finalCurrencyCode = finalAcceptsCash
            ? input.currencyCode !==
                undefined
                ? input.currencyCode
                : existing.currency_code
            : null;
        if (finalAcceptsCash &&
            (finalAskingPrice ===
                null ||
                finalCurrencyCode ===
                    null)) {
            throw new common_1.BadRequestException("Cash listings require an asking price and currency code.");
        }
        /*
         * Preserve the current listing-level
         * store unless this PATCH explicitly
         * includes preferredStoreId.
         */
        let finalPreferredStoreId = existing.preferred_store_id;
        if (input.preferredStoreId !==
            undefined) {
            /*
             * Explicit null clears the
             * listing preference.
             */
            if (input.preferredStoreId ===
                null) {
                finalPreferredStoreId =
                    null;
            }
            else {
                /*
                 * A newly selected store
                 * must currently be eligible
                 * for DeckDeal mediation.
                 */
                await this.requireEligibleTradeStore(input.preferredStoreId);
                finalPreferredStoreId =
                    input.preferredStoreId;
            }
        }
        await this.database.client.listings.update({
            where: {
                id: listingId,
            },
            data: {
                accepts_cash: finalAcceptsCash,
                accepts_trade: finalAcceptsTrade,
                asking_price: finalAskingPrice,
                currency_code: finalCurrencyCode,
                preferred_store_id: finalPreferredStoreId,
                ...(input.title !==
                    undefined
                    ? {
                        title: input.title,
                    }
                    : {}),
                ...(input.description !==
                    undefined
                    ? {
                        description: input.description,
                    }
                    : {}),
                updated_at: new Date(),
            },
        });
        return this.getListing(listingId);
    }
    async setUserListingStatus(userId, listingId, input) {
        const listing = await this.database.client.listings.findFirst({
            where: {
                id: listingId,
                seller_user_id: userId,
            },
            select: {
                id: true,
                inventory_item_id: true,
                status: true,
            },
        });
        if (!listing) {
            throw new common_1.NotFoundException("Listing was not found or does not belong to this user.");
        }
        if (listing.status !==
            "active" &&
            listing.status !==
                "paused") {
            throw new common_1.BadRequestException("This listing can no longer be manually changed.");
        }
        if (input.status ===
            "active") {
            const inventoryItem = await this.database.client.inventory_items.findUnique({
                where: {
                    id: listing.inventory_item_id,
                },
                select: {
                    status: true,
                },
            });
            if (!inventoryItem ||
                inventoryItem.status !==
                    "available") {
                throw new common_1.BadRequestException("The listing cannot be activated because the inventory item is not available.");
            }
        }
        await this.database.client.listings.update({
            where: {
                id: listingId,
            },
            data: {
                status: input.status,
                updated_at: new Date(),
            },
        });
        return this.getListing(listingId);
    }
};
exports.ListingsService = ListingsService;
exports.ListingsService = ListingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ListingsService);
