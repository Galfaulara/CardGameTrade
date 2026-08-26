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
exports.WishlistsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let WishlistsService = class WishlistsService {
    database;
    constructor(database) {
        this.database = database;
    }
    async requireActiveUser(userId) {
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
            throw new common_1.ForbiddenException("This action is not available for an inactive user.");
        }
        return user;
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
    async resolvePreferredStoreForNewWishlist(userId, requestedStoreId) {
        if (requestedStoreId ===
            null) {
            return null;
        }
        if (requestedStoreId !==
            undefined) {
            await this.requireEligibleTradeStore(requestedStoreId);
            return requestedStoreId;
        }
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
        const eligibleStore = await this.findEligibleTradeStore(preferredStoreId);
        return (eligibleStore?.id ??
            null);
    }
    getWishlistSelect() {
        return {
            id: true,
            user_id: true,
            name: true,
            description: true,
            visibility: true,
            status: true,
            preferred_store_id: true,
            created_at: true,
            updated_at: true,
        };
    }
    getWishlistItemSelect() {
        return {
            id: true,
            wishlist_id: true,
            canonical_card_id: true,
            printing_id: true,
            desired_finish: true,
            desired_condition: true,
            language_code: true,
            quantity_desired: true,
            priority: true,
            notes: true,
            status: true,
            willing_to_pay_cash: true,
            willing_to_trade_cards: true,
            max_cash_amount: true,
            currency_code: true,
            trade_notes: true,
            created_at: true,
            updated_at: true,
        };
    }
    getWishlistOfferSelect() {
        return {
            id: true,
            wishlist_item_id: true,
            offerer_user_id: true,
            offerer_store_id: true,
            requests_cash: true,
            requests_trade: true,
            cash_ask_amount: true,
            currency_code: true,
            message: true,
            trade_terms_note: true,
            status: true,
            expires_at: true,
            responded_at: true,
            created_at: true,
            updated_at: true,
        };
    }
    getInventoryHydrationSelect() {
        return {
            id: true,
            printing_id: true,
            finish: true,
            owner_user_id: true,
            owner_store_id: true,
            condition: true,
            language_code: true,
            quantity: true,
            is_signed: true,
            is_altered: true,
            is_graded: true,
            status: true,
            printing_finishes: {
                select: {
                    finish: true,
                    card_printings: {
                        select: {
                            id: true,
                            canonical_card_id: true,
                            collector_number: true,
                            language_code: true,
                            printed_name: true,
                            rarity: true,
                            artist_name: true,
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
        };
    }
    mapInventory(inventory) {
        if (!inventory) {
            return null;
        }
        const { printing_finishes, ...inventoryData } = inventory;
        return {
            ...inventoryData,
            printing: {
                ...printing_finishes
                    .card_printings,
                finish: printing_finishes
                    .finish,
            },
        };
    }
    async hydrateWishlistItems(items) {
        if (items.length ===
            0) {
            return [];
        }
        const canonicalIds = [
            ...new Set(items
                .map((item) => item.canonical_card_id)
                .filter((value) => Boolean(value))),
        ];
        const printingIds = [
            ...new Set(items
                .map((item) => item.printing_id)
                .filter((value) => Boolean(value))),
        ];
        const canonicalCards = canonicalIds.length >
            0
            ? await this.database.client.canonical_cards.findMany({
                where: {
                    id: {
                        in: canonicalIds,
                    },
                },
                select: {
                    id: true,
                    name: true,
                    normalized_name: true,
                    mana_cost: true,
                    type_line: true,
                },
            })
            : [];
        const printings = printingIds.length >
            0
            ? await this.database.client.card_printings.findMany({
                where: {
                    id: {
                        in: printingIds,
                    },
                },
                select: {
                    id: true,
                    canonical_card_id: true,
                    collector_number: true,
                    language_code: true,
                    printed_name: true,
                    rarity: true,
                    artist_name: true,
                    treatment: true,
                    image_small_uri: true,
                    image_normal_uri: true,
                    image_large_uri: true,
                    canonical_cards: {
                        select: {
                            id: true,
                            name: true,
                            normalized_name: true,
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
            })
            : [];
        const canonicalById = new Map(canonicalCards.map((card) => [
            card.id,
            card,
        ]));
        const printingById = new Map(printings.map((printing) => [
            printing.id,
            printing,
        ]));
        return items.map((item) => ({
            ...item,
            target: item.canonical_card_id
                ? {
                    type: "canonical_card",
                    canonical_card: canonicalById.get(item.canonical_card_id) ??
                        null,
                }
                : {
                    type: "printing",
                    printing: item.printing_id
                        ? printingById.get(item.printing_id) ??
                            null
                        : null,
                },
        }));
    }
    async hydrateWishlists(wishlists, includeItems = true) {
        if (wishlists.length ===
            0) {
            return [];
        }
        const storeIds = [
            ...new Set(wishlists
                .map((wishlist) => wishlist.preferred_store_id)
                .filter((value) => Boolean(value))),
        ];
        const stores = storeIds.length >
            0
            ? await this.database.client.stores.findMany({
                where: {
                    id: {
                        in: storeIds,
                    },
                },
                select: {
                    id: true,
                    name: true,
                    slug: true,
                    logo_url: true,
                    city: true,
                    state_region: true,
                    country_code: true,
                    status: true,
                    verification_status: true,
                    trade_mediation_enabled: true,
                },
            })
            : [];
        const storesById = new Map(stores.map((store) => [
            store.id,
            store,
        ]));
        let itemsByWishlist = new Map();
        if (includeItems) {
            const wishlistIds = wishlists.map((wishlist) => wishlist.id);
            const items = await this.database.client.wishlist_items.findMany({
                where: {
                    wishlist_id: {
                        in: wishlistIds,
                    },
                    status: {
                        not: "removed",
                    },
                },
                select: this.getWishlistItemSelect(),
                orderBy: [
                    {
                        priority: "desc",
                    },
                    {
                        created_at: "asc",
                    },
                ],
            });
            const hydratedItems = await this.hydrateWishlistItems(items);
            itemsByWishlist =
                new Map();
            for (const item of hydratedItems) {
                const current = itemsByWishlist.get(item.wishlist_id) ??
                    [];
                current.push(item);
                itemsByWishlist.set(item.wishlist_id, current);
            }
        }
        return wishlists.map((wishlist) => ({
            ...wishlist,
            preferred_store: wishlist.preferred_store_id
                ? storesById.get(wishlist.preferred_store_id) ??
                    null
                : null,
            ...(includeItems
                ? {
                    items: itemsByWishlist.get(wishlist.id) ??
                        [],
                }
                : {}),
        }));
    }
    async validateWishlistTargetExists(canonicalCardId, printingId, desiredFinish) {
        if (canonicalCardId) {
            const card = await this.database.client.canonical_cards.findUnique({
                where: {
                    id: canonicalCardId,
                },
                select: {
                    id: true,
                },
            });
            if (!card) {
                throw new common_1.BadRequestException("The requested canonical card does not exist.");
            }
            return;
        }
        if (!printingId) {
            throw new common_1.BadRequestException("A wishlist item must target a canonical card or an exact printing.");
        }
        const printing = await this.database.client.card_printings.findUnique({
            where: {
                id: printingId,
            },
            select: {
                id: true,
            },
        });
        if (!printing) {
            throw new common_1.BadRequestException("The requested printing does not exist.");
        }
        if (desiredFinish) {
            const finish = await this.database.client.printing_finishes.findFirst({
                where: {
                    printing_id: printingId,
                    finish: desiredFinish,
                },
                select: {
                    printing_id: true,
                },
            });
            if (!finish) {
                throw new common_1.BadRequestException("The requested finish is not available for this printing.");
            }
        }
    }
    validateWishlistItemMergedRules(merged) {
        const targetCount = [
            merged.canonicalCardId,
            merged.printingId,
        ].filter(Boolean).length;
        if (targetCount !==
            1) {
            throw new common_1.BadRequestException("A wishlist item must target exactly one canonical card or one exact printing.");
        }
        if (!merged.willingToPayCash &&
            !merged.willingToTradeCards) {
            throw new common_1.BadRequestException("A wishlist item must allow cash, card trade, or both.");
        }
        if (!merged.willingToPayCash &&
            (merged.maxCashAmount !==
                null ||
                merged.currencyCode !==
                    null)) {
            throw new common_1.BadRequestException("Cash amount and currency can only be set when cash acquisition is enabled.");
        }
        if (merged.maxCashAmount !==
            null &&
            !merged.currencyCode) {
            throw new common_1.BadRequestException("currencyCode is required when maxCashAmount is set.");
        }
    }
    async getUserWishlists(userId) {
        await this.requireActiveUser(userId);
        const wishlists = await this.database.client.wishlists.findMany({
            where: {
                user_id: userId,
                status: {
                    not: "deleted",
                },
            },
            select: this.getWishlistSelect(),
            orderBy: {
                created_at: "desc",
            },
        });
        return this.hydrateWishlists(wishlists);
    }
    async getUserWishlist(userId, wishlistId) {
        const wishlist = await this.database.client.wishlists.findFirst({
            where: {
                id: wishlistId,
                user_id: userId,
                status: {
                    not: "deleted",
                },
            },
            select: this.getWishlistSelect(),
        });
        if (!wishlist) {
            throw new common_1.NotFoundException("Wishlist was not found or does not belong to this user.");
        }
        const hydrated = await this.hydrateWishlists([
            wishlist,
        ]);
        return hydrated[0];
    }
    async createUserWishlist(userId, input) {
        await this.requireActiveUser(userId);
        const duplicate = await this.database.client.wishlists.findFirst({
            where: {
                user_id: userId,
                name: input.name,
            },
            select: {
                id: true,
            },
        });
        if (duplicate) {
            throw new common_1.ConflictException("This user already has a wishlist with that name.");
        }
        const preferredStoreId = await this.resolvePreferredStoreForNewWishlist(userId, input.preferredStoreId);
        const wishlist = await this.database.client.wishlists.create({
            data: {
                user_id: userId,
                name: input.name,
                description: input.description ??
                    null,
                visibility: input.visibility,
                status: "active",
                preferred_store_id: preferredStoreId,
            },
            select: {
                id: true,
            },
        });
        return this.getUserWishlist(userId, wishlist.id);
    }
    async updateUserWishlist(userId, wishlistId, input) {
        const wishlist = await this.database.client.wishlists.findFirst({
            where: {
                id: wishlistId,
                user_id: userId,
                status: {
                    not: "deleted",
                },
            },
            select: this.getWishlistSelect(),
        });
        if (!wishlist) {
            throw new common_1.NotFoundException("Wishlist was not found or does not belong to this user.");
        }
        if (input.name !==
            undefined &&
            input.name !==
                wishlist.name) {
            const duplicate = await this.database.client.wishlists.findFirst({
                where: {
                    user_id: userId,
                    name: input.name,
                    id: {
                        not: wishlistId,
                    },
                },
                select: {
                    id: true,
                },
            });
            if (duplicate) {
                throw new common_1.ConflictException("This user already has a wishlist with that name.");
            }
        }
        if (input.status !==
            undefined &&
            input.status !==
                "active") {
            const pendingOffer = await this.database.client.wishlist_offers.findFirst({
                where: {
                    status: "pending",
                    wishlist_items: {
                        wishlist_id: wishlistId,
                    },
                },
                select: {
                    id: true,
                },
            });
            if (pendingOffer) {
                throw new common_1.BadRequestException("A wishlist with pending offers cannot be archived or deleted.");
            }
        }
        let preferredStoreId = wishlist.preferred_store_id;
        if (input.preferredStoreId !==
            undefined) {
            if (input.preferredStoreId ===
                null) {
                preferredStoreId =
                    null;
            }
            else {
                await this.requireEligibleTradeStore(input.preferredStoreId);
                preferredStoreId =
                    input.preferredStoreId;
            }
        }
        await this.database.client.wishlists.update({
            where: {
                id: wishlistId,
            },
            data: {
                ...(input.name !==
                    undefined
                    ? {
                        name: input.name,
                    }
                    : {}),
                ...(input.description !==
                    undefined
                    ? {
                        description: input.description,
                    }
                    : {}),
                ...(input.visibility !==
                    undefined
                    ? {
                        visibility: input.visibility,
                    }
                    : {}),
                ...(input.status !==
                    undefined
                    ? {
                        status: input.status,
                    }
                    : {}),
                preferred_store_id: preferredStoreId,
                updated_at: new Date(),
            },
        });
        if (input.status ===
            "deleted") {
            return {
                id: wishlistId,
                status: "deleted",
            };
        }
        return this.getUserWishlist(userId, wishlistId);
    }
    async createWishlistItem(userId, wishlistId, input) {
        const wishlist = await this.database.client.wishlists.findFirst({
            where: {
                id: wishlistId,
                user_id: userId,
                status: "active",
            },
            select: {
                id: true,
            },
        });
        if (!wishlist) {
            throw new common_1.NotFoundException("Active wishlist was not found or does not belong to this user.");
        }
        await this.validateWishlistTargetExists(input.canonicalCardId ??
            null, input.printingId ??
            null, input.desiredFinish ??
            null);
        const duplicate = await this.database.client.wishlist_items.findFirst({
            where: {
                wishlist_id: wishlistId,
                status: {
                    in: [
                        "active",
                        "paused",
                    ],
                },
                canonical_card_id: input.canonicalCardId ??
                    null,
                printing_id: input.printingId ??
                    null,
            },
            select: {
                id: true,
            },
        });
        if (duplicate) {
            throw new common_1.ConflictException("This wishlist already contains an active item for the same card target.");
        }
        const item = await this.database.client.wishlist_items.create({
            data: {
                wishlist_id: wishlistId,
                canonical_card_id: input.canonicalCardId ??
                    null,
                printing_id: input.printingId ??
                    null,
                desired_finish: input.desiredFinish ??
                    null,
                desired_condition: input.desiredCondition ??
                    null,
                language_code: input.languageCode ??
                    null,
                quantity_desired: input.quantityDesired,
                priority: input.priority,
                notes: input.notes ??
                    null,
                status: "active",
                willing_to_pay_cash: input.willingToPayCash,
                willing_to_trade_cards: input.willingToTradeCards,
                max_cash_amount: input.willingToPayCash
                    ? input.maxCashAmount ??
                        null
                    : null,
                currency_code: input.willingToPayCash
                    ? input.currencyCode ??
                        null
                    : null,
                trade_notes: input.tradeNotes ??
                    null,
            },
            select: this.getWishlistItemSelect(),
        });
        const hydrated = await this.hydrateWishlistItems([
            item,
        ]);
        return hydrated[0];
    }
    async updateWishlistItem(userId, wishlistId, itemId, input) {
        const wishlist = await this.database.client.wishlists.findFirst({
            where: {
                id: wishlistId,
                user_id: userId,
                status: {
                    not: "deleted",
                },
            },
            select: {
                id: true,
            },
        });
        if (!wishlist) {
            throw new common_1.NotFoundException("Wishlist was not found or does not belong to this user.");
        }
        const item = await this.database.client.wishlist_items.findFirst({
            where: {
                id: itemId,
                wishlist_id: wishlistId,
                status: {
                    not: "removed",
                },
            },
            select: this.getWishlistItemSelect(),
        });
        if (!item) {
            throw new common_1.NotFoundException("Wishlist item was not found.");
        }
        const pendingOffer = await this.database.client.wishlist_offers.findFirst({
            where: {
                wishlist_item_id: itemId,
                status: "pending",
            },
            select: {
                id: true,
            },
        });
        if (pendingOffer) {
            throw new common_1.BadRequestException("A wishlist item with pending offers cannot be edited.");
        }
        const canonicalCardId = input.canonicalCardId !==
            undefined
            ? input.canonicalCardId
            : item.canonical_card_id;
        const printingId = input.printingId !==
            undefined
            ? input.printingId
            : item.printing_id;
        const willingToPayCash = input.willingToPayCash ??
            item.willing_to_pay_cash;
        const willingToTradeCards = input.willingToTradeCards ??
            item.willing_to_trade_cards;
        const maxCashAmount = input.maxCashAmount !==
            undefined
            ? input.maxCashAmount
            : item.max_cash_amount ===
                null
                ? null
                : Number(item.max_cash_amount);
        const currencyCode = input.currencyCode !==
            undefined
            ? input.currencyCode
            : item.currency_code;
        this.validateWishlistItemMergedRules({
            canonicalCardId,
            printingId,
            willingToPayCash,
            willingToTradeCards,
            maxCashAmount,
            currencyCode,
        });
        const desiredFinish = input.desiredFinish !==
            undefined
            ? input.desiredFinish
            : item.desired_finish;
        await this.validateWishlistTargetExists(canonicalCardId, printingId, desiredFinish);
        await this.database.client.wishlist_items.update({
            where: {
                id: itemId,
            },
            data: {
                canonical_card_id: canonicalCardId,
                printing_id: printingId,
                ...(input.desiredFinish !==
                    undefined
                    ? {
                        desired_finish: input.desiredFinish,
                    }
                    : {}),
                ...(input.desiredCondition !==
                    undefined
                    ? {
                        desired_condition: input.desiredCondition,
                    }
                    : {}),
                ...(input.languageCode !==
                    undefined
                    ? {
                        language_code: input.languageCode,
                    }
                    : {}),
                ...(input.quantityDesired !==
                    undefined
                    ? {
                        quantity_desired: input.quantityDesired,
                    }
                    : {}),
                ...(input.priority !==
                    undefined
                    ? {
                        priority: input.priority,
                    }
                    : {}),
                ...(input.notes !==
                    undefined
                    ? {
                        notes: input.notes,
                    }
                    : {}),
                ...(input.status !==
                    undefined
                    ? {
                        status: input.status,
                    }
                    : {}),
                willing_to_pay_cash: willingToPayCash,
                willing_to_trade_cards: willingToTradeCards,
                max_cash_amount: willingToPayCash
                    ? maxCashAmount
                    : null,
                currency_code: willingToPayCash
                    ? currencyCode
                    : null,
                ...(input.tradeNotes !==
                    undefined
                    ? {
                        trade_notes: input.tradeNotes,
                    }
                    : {}),
                updated_at: new Date(),
            },
        });
        if (input.status ===
            "removed") {
            return {
                id: itemId,
                status: "removed",
            };
        }
        const updated = await this.database.client.wishlist_items.findUnique({
            where: {
                id: itemId,
            },
            select: this.getWishlistItemSelect(),
        });
        if (!updated) {
            throw new common_1.NotFoundException("Wishlist item was not found after update.");
        }
        const hydrated = await this.hydrateWishlistItems([
            updated,
        ]);
        return hydrated[0];
    }
    async getPublicWishlistItems() {
        const items = await this.database.client.wishlist_items.findMany({
            where: {
                status: "active",
                wishlists: {
                    status: "active",
                    visibility: "public",
                },
            },
            select: this.getWishlistItemSelect(),
            orderBy: {
                created_at: "desc",
            },
            take: 100,
        });
        const hydratedItems = await this.hydrateWishlistItems(items);
        const wishlistIds = [
            ...new Set(items.map((item) => item.wishlist_id)),
        ];
        const wishlists = await this.database.client.wishlists.findMany({
            where: {
                id: {
                    in: wishlistIds,
                },
            },
            select: this.getWishlistSelect(),
        });
        const users = await this.database.client.user_profiles.findMany({
            where: {
                id: {
                    in: wishlists.map((wishlist) => wishlist.user_id),
                },
            },
            select: {
                id: true,
                username: true,
                display_name: true,
            },
        });
        const wishlistById = new Map(wishlists.map((wishlist) => [
            wishlist.id,
            wishlist,
        ]));
        const userById = new Map(users.map((user) => [
            user.id,
            user,
        ]));
        return hydratedItems.map((item) => {
            const wishlist = wishlistById.get(item.wishlist_id);
            return {
                ...item,
                wishlist: wishlist
                    ? {
                        ...wishlist,
                        owner: userById.get(wishlist.user_id) ??
                            null,
                    }
                    : null,
            };
        });
    }
    async loadWishlistOffer(offerId) {
        const offer = await this.database.client.wishlist_offers.findUnique({
            where: {
                id: offerId,
            },
            select: this.getWishlistOfferSelect(),
        });
        if (!offer) {
            throw new common_1.NotFoundException("Wishlist offer was not found.");
        }
        const hydrated = await this.hydrateWishlistOffers([
            offer,
        ]);
        return hydrated[0];
    }
    async hydrateWishlistOffers(offers) {
        if (offers.length ===
            0) {
            return [];
        }
        const offerIds = offers.map((offer) => offer.id);
        const wishlistItemIds = [
            ...new Set(offers.map((offer) => offer.wishlist_item_id)),
        ];
        const offeredRows = await this.database.client.wishlist_offer_items.findMany({
            where: {
                wishlist_offer_id: {
                    in: offerIds,
                },
            },
            select: {
                id: true,
                wishlist_offer_id: true,
                offerer_user_id: true,
                offerer_store_id: true,
                inventory_item_id: true,
                quantity: true,
                notes: true,
                created_at: true,
            },
        });
        const requestedRows = await this.database.client.wishlist_offer_requested_items.findMany({
            where: {
                wishlist_offer_id: {
                    in: offerIds,
                },
            },
            select: {
                id: true,
                wishlist_offer_id: true,
                requested_inventory_item_id: true,
                requested_canonical_card_id: true,
                requested_printing_id: true,
                desired_finish: true,
                desired_condition: true,
                language_code: true,
                quantity: true,
                notes: true,
                created_at: true,
            },
        });
        const wishlistItems = await this.database.client.wishlist_items.findMany({
            where: {
                id: {
                    in: wishlistItemIds,
                },
            },
            select: this.getWishlistItemSelect(),
        });
        const hydratedWishlistItems = await this.hydrateWishlistItems(wishlistItems);
        const wishlistItemById = new Map(hydratedWishlistItems.map((item) => [
            item.id,
            item,
        ]));
        const wishlistIds = [
            ...new Set(wishlistItems.map((item) => item.wishlist_id)),
        ];
        const wishlists = await this.database.client.wishlists.findMany({
            where: {
                id: {
                    in: wishlistIds,
                },
            },
            select: this.getWishlistSelect(),
        });
        const wishlistById = new Map(wishlists.map((wishlist) => [
            wishlist.id,
            wishlist,
        ]));
        const inventoryIds = [
            ...new Set([
                ...offeredRows.map((row) => row.inventory_item_id),
                ...requestedRows
                    .map((row) => row.requested_inventory_item_id)
                    .filter((value) => Boolean(value)),
            ]),
        ];
        const inventories = inventoryIds.length >
            0
            ? await this.database.client.inventory_items.findMany({
                where: {
                    id: {
                        in: inventoryIds,
                    },
                },
                select: this.getInventoryHydrationSelect(),
            })
            : [];
        const inventoryById = new Map(inventories.map((inventory) => [
            inventory.id,
            this.mapInventory(inventory),
        ]));
        const requestedCanonicalIds = [
            ...new Set(requestedRows
                .map((row) => row.requested_canonical_card_id)
                .filter((value) => Boolean(value))),
        ];
        const requestedPrintingIds = [
            ...new Set(requestedRows
                .map((row) => row.requested_printing_id)
                .filter((value) => Boolean(value))),
        ];
        const requestedCanonicalCards = requestedCanonicalIds.length >
            0
            ? await this.database.client.canonical_cards.findMany({
                where: {
                    id: {
                        in: requestedCanonicalIds,
                    },
                },
                select: {
                    id: true,
                    name: true,
                    mana_cost: true,
                    type_line: true,
                },
            })
            : [];
        const requestedPrintings = requestedPrintingIds.length >
            0
            ? await this.database.client.card_printings.findMany({
                where: {
                    id: {
                        in: requestedPrintingIds,
                    },
                },
                select: {
                    id: true,
                    canonical_card_id: true,
                    collector_number: true,
                    language_code: true,
                    printed_name: true,
                    rarity: true,
                    image_small_uri: true,
                    image_normal_uri: true,
                    image_large_uri: true,
                    canonical_cards: {
                        select: {
                            id: true,
                            name: true,
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
            })
            : [];
        const requestedCanonicalById = new Map(requestedCanonicalCards.map((card) => [
            card.id,
            card,
        ]));
        const requestedPrintingById = new Map(requestedPrintings.map((printing) => [
            printing.id,
            printing,
        ]));
        const offererUserIds = [
            ...new Set(offers
                .map((offer) => offer.offerer_user_id)
                .filter((value) => Boolean(value))),
        ];
        const offererStoreIds = [
            ...new Set(offers
                .map((offer) => offer.offerer_store_id)
                .filter((value) => Boolean(value))),
        ];
        const users = offererUserIds.length >
            0
            ? await this.database.client.user_profiles.findMany({
                where: {
                    id: {
                        in: offererUserIds,
                    },
                },
                select: {
                    id: true,
                    username: true,
                    display_name: true,
                    status: true,
                },
            })
            : [];
        const stores = offererStoreIds.length >
            0
            ? await this.database.client.stores.findMany({
                where: {
                    id: {
                        in: offererStoreIds,
                    },
                },
                select: {
                    id: true,
                    name: true,
                    slug: true,
                    logo_url: true,
                    status: true,
                },
            })
            : [];
        const userById = new Map(users.map((user) => [
            user.id,
            user,
        ]));
        const storeById = new Map(stores.map((store) => [
            store.id,
            store,
        ]));
        const offeredByOffer = new Map();
        for (const row of offeredRows) {
            const current = offeredByOffer.get(row.wishlist_offer_id) ??
                [];
            current.push({
                ...row,
                inventory_item: inventoryById.get(row.inventory_item_id) ??
                    null,
            });
            offeredByOffer.set(row.wishlist_offer_id, current);
        }
        const requestedByOffer = new Map();
        for (const row of requestedRows) {
            const current = requestedByOffer.get(row.wishlist_offer_id) ??
                [];
            current.push({
                ...row,
                requested_target: row.requested_inventory_item_id
                    ? {
                        type: "inventory_item",
                        inventory_item: inventoryById.get(row.requested_inventory_item_id) ??
                            null,
                    }
                    : row.requested_canonical_card_id
                        ? {
                            type: "canonical_card",
                            canonical_card: requestedCanonicalById.get(row.requested_canonical_card_id) ??
                                null,
                        }
                        : {
                            type: "printing",
                            printing: row.requested_printing_id
                                ? requestedPrintingById.get(row.requested_printing_id) ??
                                    null
                                : null,
                        },
            });
            requestedByOffer.set(row.wishlist_offer_id, current);
        }
        return offers.map((offer) => {
            const wishlistItem = wishlistItemById.get(offer.wishlist_item_id);
            const wishlist = wishlistItem
                ? wishlistById.get(wishlistItem.wishlist_id) ??
                    null
                : null;
            return {
                ...offer,
                offerer: offer.offerer_user_id
                    ? {
                        type: "user",
                        user: userById.get(offer.offerer_user_id) ??
                            null,
                    }
                    : {
                        type: "store",
                        store: offer.offerer_store_id
                            ? storeById.get(offer.offerer_store_id) ??
                                null
                            : null,
                    },
                wishlist_item: wishlistItem ??
                    null,
                wishlist,
                offered_items: offeredByOffer.get(offer.id) ??
                    [],
                requested_items: requestedByOffer.get(offer.id) ??
                    [],
            };
        });
    }
    async validateOfferedInventoryMatchesWishlistItem(wishlistItem, userId, items) {
        const inventoryIds = items.map((item) => item.inventoryItemId);
        if (new Set(inventoryIds).size !==
            inventoryIds.length) {
            throw new common_1.BadRequestException("The same inventory item cannot appear more than once in a wishlist offer.");
        }
        const inventories = await this.database.client.inventory_items.findMany({
            where: {
                id: {
                    in: inventoryIds,
                },
                owner_user_id: userId,
            },
            select: {
                id: true,
                printing_id: true,
                finish: true,
                condition: true,
                language_code: true,
                quantity: true,
                status: true,
            },
        });
        if (inventories.length !==
            inventoryIds.length) {
            throw new common_1.BadRequestException("Every offered card must exist in the offerer's registered inventory.");
        }
        const inventoryById = new Map(inventories.map((inventory) => [
            inventory.id,
            inventory,
        ]));
        const printingIds = [
            ...new Set(inventories.map((inventory) => inventory.printing_id)),
        ];
        const printings = await this.database.client.card_printings.findMany({
            where: {
                id: {
                    in: printingIds,
                },
            },
            select: {
                id: true,
                canonical_card_id: true,
            },
        });
        const printingById = new Map(printings.map((printing) => [
            printing.id,
            printing,
        ]));
        let totalQuantity = 0;
        for (const requestedItem of items) {
            const inventory = inventoryById.get(requestedItem.inventoryItemId);
            if (!inventory) {
                throw new common_1.BadRequestException("An offered inventory item could not be found.");
            }
            if (inventory.status !==
                "available") {
                throw new common_1.BadRequestException("Only available inventory items can be offered.");
            }
            if (requestedItem.quantity !==
                inventory.quantity) {
                throw new common_1.BadRequestException("A wishlist offer must include the full registered inventory quantity. Split the inventory item first if only part should be offered.");
            }
            const printing = printingById.get(inventory.printing_id);
            if (!printing) {
                throw new common_1.ConflictException("The printing for an offered inventory item could not be loaded.");
            }
            const identityMatches = wishlistItem.printing_id
                ? inventory.printing_id ===
                    wishlistItem.printing_id
                : printing.canonical_card_id ===
                    wishlistItem.canonical_card_id;
            if (!identityMatches) {
                throw new common_1.BadRequestException("Every offered inventory item must match the card requested by this wishlist item.");
            }
            if (wishlistItem.desired_finish &&
                inventory.finish !==
                    wishlistItem.desired_finish) {
                throw new common_1.BadRequestException("An offered card does not match the desired finish.");
            }
            if (wishlistItem.desired_condition &&
                inventory.condition !==
                    wishlistItem.desired_condition) {
                throw new common_1.BadRequestException("An offered card does not match the desired condition.");
            }
            if (wishlistItem.language_code &&
                inventory.language_code !==
                    wishlistItem.language_code) {
                throw new common_1.BadRequestException("An offered card does not match the desired language.");
            }
            totalQuantity +=
                requestedItem.quantity;
        }
        if (totalQuantity >
            wishlistItem.quantity_desired) {
            throw new common_1.BadRequestException("This offer contains more copies than the wishlist item requests.");
        }
    }
    async validateRequestedTradeItems(wishlistOwnerUserId, requestedItems) {
        const exactInventoryRequests = requestedItems.filter((item) => Boolean(item.requestedInventoryItemId));
        if (exactInventoryRequests.length >
            0) {
            const ids = exactInventoryRequests.map((item) => item.requestedInventoryItemId);
            if (new Set(ids).size !==
                ids.length) {
                throw new common_1.BadRequestException("The same exact inventory item cannot be requested more than once.");
            }
            const inventory = await this.database.client.inventory_items.findMany({
                where: {
                    id: {
                        in: ids,
                    },
                    owner_user_id: wishlistOwnerUserId,
                },
                select: {
                    id: true,
                    quantity: true,
                    status: true,
                },
            });
            if (inventory.length !==
                ids.length) {
                throw new common_1.BadRequestException("Every exact requested inventory item must belong to the wishlist owner.");
            }
            const inventoryById = new Map(inventory.map((item) => [
                item.id,
                item,
            ]));
            for (const requested of exactInventoryRequests) {
                const inventoryItem = inventoryById.get(requested.requestedInventoryItemId);
                if (!inventoryItem) {
                    throw new common_1.BadRequestException("An exact requested inventory item could not be found.");
                }
                if (inventoryItem.status !==
                    "available") {
                    throw new common_1.BadRequestException("An exact requested inventory item must currently be available.");
                }
                if (requested.quantity !==
                    inventoryItem.quantity) {
                    throw new common_1.BadRequestException("An exact requested inventory item must use its full registered quantity.");
                }
            }
        }
        const canonicalIds = [
            ...new Set(requestedItems
                .map((item) => item.requestedCanonicalCardId)
                .filter((value) => Boolean(value))),
        ];
        if (canonicalIds.length >
            0) {
            const cards = await this.database.client.canonical_cards.findMany({
                where: {
                    id: {
                        in: canonicalIds,
                    },
                },
                select: {
                    id: true,
                },
            });
            if (cards.length !==
                canonicalIds.length) {
                throw new common_1.BadRequestException("One or more requested canonical cards do not exist.");
            }
        }
        const printingIds = [
            ...new Set(requestedItems
                .map((item) => item.requestedPrintingId)
                .filter((value) => Boolean(value))),
        ];
        if (printingIds.length >
            0) {
            const printings = await this.database.client.card_printings.findMany({
                where: {
                    id: {
                        in: printingIds,
                    },
                },
                select: {
                    id: true,
                },
            });
            if (printings.length !==
                printingIds.length) {
                throw new common_1.BadRequestException("One or more requested printings do not exist.");
            }
        }
    }
    async createUserWishlistOffer(userId, wishlistItemId, input, interestId) {
        await this.requireActiveUser(userId);
        const wishlistItem = await this.database.client.wishlist_items.findUnique({
            where: {
                id: wishlistItemId,
            },
            select: this.getWishlistItemSelect(),
        });
        if (!wishlistItem ||
            wishlistItem.status !==
                "active") {
            throw new common_1.NotFoundException("Active wishlist item was not found.");
        }
        const wishlist = await this.database.client.wishlists.findUnique({
            where: {
                id: wishlistItem.wishlist_id,
            },
            select: this.getWishlistSelect(),
        });
        if (!wishlist ||
            wishlist.status !==
                "active") {
            throw new common_1.BadRequestException("This wishlist is not currently active.");
        }
        if (wishlist.user_id ===
            userId) {
            throw new common_1.BadRequestException("A user cannot make an offer on their own wishlist item.");
        }
        if (wishlist.visibility ===
            "private") {
            throw new common_1.ForbiddenException("Private wishlist items cannot receive public user offers.");
        }
        if (input.requestsCash &&
            !wishlistItem.willing_to_pay_cash) {
            throw new common_1.BadRequestException("The wishlist owner is not accepting cash acquisition terms for this item.");
        }
        if (input.requestsTrade &&
            !wishlistItem.willing_to_trade_cards) {
            throw new common_1.BadRequestException("The wishlist owner is not accepting card-trade terms for this item.");
        }
        if (input.requestsCash &&
            wishlistItem.max_cash_amount !==
                null &&
            input.cashAskAmount !==
                undefined &&
            input.cashAskAmount !==
                null &&
            Number(input.cashAskAmount) >
                Number(wishlistItem.max_cash_amount)) {
            throw new common_1.BadRequestException("The requested cash amount exceeds the wishlist owner's stated maximum.");
        }
        if (input.requestsCash &&
            wishlistItem.currency_code &&
            input.currencyCode !==
                wishlistItem.currency_code) {
            throw new common_1.BadRequestException("The offer currency must match the wishlist item's stated currency.");
        }
        await this.validateOfferedInventoryMatchesWishlistItem(wishlistItem, userId, input.items);
        if (input.requestsTrade) {
            await this.validateRequestedTradeItems(wishlist.user_id, input.requestedItems);
        }
        const offerId = await this.database.client.$transaction(async (transaction) => {
            const now = new Date();
            if (interestId) {
                const interest = await transaction.inventory_item_interests.findUnique({
                    where: {
                        id: interestId,
                    },
                    select: {
                        id: true,
                        inventory_item_id: true,
                        interested_user_id: true,
                        interested_store_id: true,
                        interest_type: true,
                        status: true,
                        converted_listing_offer_id: true,
                        converted_wishlist_offer_id: true,
                        converted_at: true,
                    },
                });
                if (!interest) {
                    throw new common_1.NotFoundException("Inventory-item interest was not found.");
                }
                if (interest.interested_user_id !==
                    wishlist.user_id ||
                    interest.interested_store_id !==
                        null) {
                    throw new common_1.ForbiddenException("Only an interest created by the wishlist owner can be converted into a wishlist offer.");
                }
                const interestInventoryIsOffered = input.items.some((item) => item.inventoryItemId ===
                    interest.inventory_item_id);
                if (!interestInventoryIsOffered) {
                    throw new common_1.BadRequestException("The wishlist offer must include the exact inventory item targeted by this interest.");
                }
                if (interest.status !==
                    "active") {
                    throw new common_1.ConflictException("Only an active inventory-item interest can be converted into an offer.");
                }
                if (interest.converted_listing_offer_id ||
                    interest.converted_wishlist_offer_id ||
                    interest.converted_at) {
                    throw new common_1.ConflictException("This inventory-item interest has already been converted.");
                }
                if (interest.interest_type ===
                    "watch") {
                    throw new common_1.BadRequestException("A watch-only interest cannot be converted into a marketplace offer.");
                }
                if (interest.interest_type ===
                    "buy" &&
                    input.requestsTrade) {
                    throw new common_1.BadRequestException("A buy-only interest cannot be converted into a wishlist offer requesting trade cards.");
                }
                if (interest.interest_type ===
                    "trade" &&
                    input.requestsCash) {
                    throw new common_1.BadRequestException("A trade-only interest cannot be converted into a wishlist offer requesting cash.");
                }
            }
            const offer = await transaction.wishlist_offers.create({
                data: {
                    wishlist_item_id: wishlistItemId,
                    offerer_user_id: userId,
                    offerer_store_id: null,
                    requests_cash: input.requestsCash,
                    requests_trade: input.requestsTrade,
                    cash_ask_amount: input.requestsCash
                        ? input.cashAskAmount ??
                            null
                        : null,
                    currency_code: input.requestsCash
                        ? input.currencyCode ??
                            null
                        : null,
                    message: input.message ??
                        null,
                    trade_terms_note: input.tradeTermsNote ??
                        null,
                    status: "pending",
                    expires_at: input.expiresAt ??
                        null,
                    responded_at: null,
                },
                select: {
                    id: true,
                },
            });
            await transaction.wishlist_offer_items.createMany({
                data: input.items.map((item) => ({
                    wishlist_offer_id: offer.id,
                    offerer_user_id: userId,
                    offerer_store_id: null,
                    inventory_item_id: item.inventoryItemId,
                    quantity: item.quantity,
                    notes: item.notes ??
                        null,
                })),
            });
            if (input.requestedItems.length >
                0) {
                await transaction.wishlist_offer_requested_items.createMany({
                    data: input.requestedItems.map((item) => ({
                        wishlist_offer_id: offer.id,
                        requested_inventory_item_id: item.requestedInventoryItemId ??
                            null,
                        requested_canonical_card_id: item.requestedCanonicalCardId ??
                            null,
                        requested_printing_id: item.requestedPrintingId ??
                            null,
                        desired_finish: item.desiredFinish ??
                            null,
                        desired_condition: item.desiredCondition ??
                            null,
                        language_code: item.languageCode ??
                            null,
                        quantity: item.quantity,
                        notes: item.notes ??
                            null,
                    })),
                });
            }
            if (interestId) {
                const converted = await transaction.inventory_item_interests.updateMany({
                    where: {
                        id: interestId,
                        interested_user_id: wishlist.user_id,
                        interested_store_id: null,
                        status: "active",
                        converted_listing_offer_id: null,
                        converted_wishlist_offer_id: null,
                        converted_at: null,
                    },
                    data: {
                        status: "converted_to_offer",
                        converted_wishlist_offer_id: offer.id,
                        converted_at: now,
                        updated_at: now,
                    },
                });
                if (converted.count !==
                    1) {
                    throw new common_1.ConflictException("The inventory-item interest changed while the wishlist offer was being created.");
                }
            }
            return offer.id;
        });
        return this.loadWishlistOffer(offerId);
    }
    async getUserSentWishlistOffers(userId) {
        await this.requireActiveUser(userId);
        const offers = await this.database.client.wishlist_offers.findMany({
            where: {
                offerer_user_id: userId,
            },
            select: this.getWishlistOfferSelect(),
            orderBy: {
                created_at: "desc",
            },
        });
        return this.hydrateWishlistOffers(offers);
    }
    async getUserReceivedWishlistOffers(ownerUserId, wishlistItemId) {
        const item = await this.database.client.wishlist_items.findFirst({
            where: {
                id: wishlistItemId,
                wishlists: {
                    user_id: ownerUserId,
                },
            },
            select: {
                id: true,
            },
        });
        if (!item) {
            throw new common_1.NotFoundException("Wishlist item was not found or does not belong to this user.");
        }
        const offers = await this.database.client.wishlist_offers.findMany({
            where: {
                wishlist_item_id: wishlistItemId,
            },
            select: this.getWishlistOfferSelect(),
            orderBy: {
                created_at: "desc",
            },
        });
        return this.hydrateWishlistOffers(offers);
    }
    async withdrawUserWishlistOffer(userId, offerId) {
        const offer = await this.database.client.wishlist_offers.findFirst({
            where: {
                id: offerId,
                offerer_user_id: userId,
            },
            select: {
                id: true,
                status: true,
            },
        });
        if (!offer) {
            throw new common_1.NotFoundException("Wishlist offer was not found or does not belong to this user.");
        }
        if (offer.status !==
            "pending") {
            throw new common_1.BadRequestException("Only pending wishlist offers can be withdrawn.");
        }
        await this.database.client.wishlist_offers.update({
            where: {
                id: offerId,
            },
            data: {
                status: "withdrawn",
                updated_at: new Date(),
            },
        });
        return this.loadWishlistOffer(offerId);
    }
    async acceptUserWishlistOffer(ownerUserId, offerId, input) {
        await this.requireActiveUser(ownerUserId);
        return this.database.client.$transaction(async (transaction) => {
            const now = new Date();
            /*
             * The store is mandatory at acceptance.
             * A wishlist/preference store is only a
             * convenience/default for the UI.
             */
            const store = await transaction.stores.findFirst({
                where: {
                    id: input.storeId,
                    status: "active",
                    verification_status: "verified",
                    trade_mediation_enabled: true,
                },
                select: {
                    id: true,
                    name: true,
                    slug: true,
                    city: true,
                    country_code: true,
                },
            });
            if (!store) {
                throw new common_1.BadRequestException("The selected store must be an active affiliated DeckDeal trade-mediation store.");
            }
            const offer = await transaction.wishlist_offers.findUnique({
                where: {
                    id: offerId,
                },
                select: {
                    id: true,
                    wishlist_item_id: true,
                    offerer_user_id: true,
                    offerer_store_id: true,
                    requests_cash: true,
                    requests_trade: true,
                    status: true,
                    expires_at: true,
                },
            });
            if (!offer) {
                throw new common_1.NotFoundException("Wishlist offer was not found.");
            }
            if (offer.status !==
                "pending") {
                throw new common_1.BadRequestException("Only a pending wishlist offer can be accepted.");
            }
            if (offer.expires_at &&
                offer.expires_at <=
                    now) {
                throw new common_1.BadRequestException("This wishlist offer has expired.");
            }
            /*
             * Store-origin wishlist offers are not
             * implemented yet. The current API only
             * creates user-origin offers.
             */
            if (!offer.offerer_user_id ||
                offer.offerer_store_id) {
                throw new common_1.BadRequestException("This acceptance flow currently supports user-to-user wishlist offers only.");
            }
            /*
             * Payment processing is intentionally
             * deferred in the current DeckDeal scope.
             *
             * Therefore conversion to a handoff is
             * currently limited to pure card trades.
             */
            if (offer.requests_cash ||
                !offer.requests_trade) {
                throw new common_1.BadRequestException("Wishlist offer acceptance currently supports pure card trades only. Cash and mixed trades require payment confirmation support first.");
            }
            const wishlistItem = await transaction.wishlist_items.findUnique({
                where: {
                    id: offer.wishlist_item_id,
                },
                select: {
                    id: true,
                    wishlist_id: true,
                    canonical_card_id: true,
                    printing_id: true,
                    desired_finish: true,
                    desired_condition: true,
                    language_code: true,
                    quantity_desired: true,
                    status: true,
                },
            });
            if (!wishlistItem) {
                throw new common_1.NotFoundException("The wishlist item for this offer was not found.");
            }
            if (wishlistItem.status !==
                "active") {
                throw new common_1.BadRequestException("The wishlist item is no longer active.");
            }
            const wishlist = await transaction.wishlists.findUnique({
                where: {
                    id: wishlistItem.wishlist_id,
                },
                select: {
                    id: true,
                    user_id: true,
                    status: true,
                },
            });
            if (!wishlist) {
                throw new common_1.NotFoundException("The wishlist for this offer was not found.");
            }
            if (wishlist.user_id !==
                ownerUserId) {
                throw new common_1.ForbiddenException("Only the wishlist owner can accept this offer.");
            }
            if (wishlist.status !==
                "active") {
                throw new common_1.BadRequestException("This wishlist is not currently active.");
            }
            if (offer.offerer_user_id ===
                ownerUserId) {
                throw new common_1.ConflictException("The wishlist owner and offerer cannot be the same user.");
            }
            const offeredRows = await transaction.wishlist_offer_items.findMany({
                where: {
                    wishlist_offer_id: offer.id,
                },
                select: {
                    id: true,
                    inventory_item_id: true,
                    offerer_user_id: true,
                    offerer_store_id: true,
                    quantity: true,
                },
                orderBy: {
                    created_at: "asc",
                },
            });
            if (offeredRows.length ===
                0) {
                throw new common_1.ConflictException("This wishlist offer contains no offered inventory items.");
            }
            const requestedRows = await transaction.wishlist_offer_requested_items.findMany({
                where: {
                    wishlist_offer_id: offer.id,
                },
                select: {
                    id: true,
                    requested_inventory_item_id: true,
                    requested_canonical_card_id: true,
                    requested_printing_id: true,
                    desired_finish: true,
                    desired_condition: true,
                    language_code: true,
                    quantity: true,
                },
                orderBy: {
                    created_at: "asc",
                },
            });
            if (requestedRows.length ===
                0) {
                throw new common_1.ConflictException("A pure card-trade wishlist offer must request at least one card in return.");
            }
            /*
             * Resolve any flexible requested terms
             * (canonical card / printing) to exact
             * inventory rows before a transaction can
             * be created.
             *
             * Exact requested_inventory_item_id rows
             * do not need an explicit selection.
             */
            const selectionIds = input.requestedInventorySelections.map((selection) => selection.requestedItemId);
            const selectedInventoryIds = input.requestedInventorySelections.map((selection) => selection.inventoryItemId);
            if (new Set(selectionIds).size !==
                selectionIds.length) {
                throw new common_1.BadRequestException("The same requested trade term cannot be selected more than once.");
            }
            if (new Set(selectedInventoryIds).size !==
                selectedInventoryIds.length) {
                throw new common_1.BadRequestException("The same inventory item cannot satisfy more than one requested trade term.");
            }
            const selectionByRequestedItemId = new Map(input.requestedInventorySelections.map((selection) => [
                selection.requestedItemId,
                selection.inventoryItemId,
            ]));
            const requestedRowIds = new Set(requestedRows.map((row) => row.id));
            for (const selection of input.requestedInventorySelections) {
                if (!requestedRowIds.has(selection.requestedItemId)) {
                    throw new common_1.BadRequestException("A requested inventory selection does not belong to this wishlist offer.");
                }
            }
            /*
             * Revalidate the exact cards the offerer
             * is providing. Pending offers do NOT
             * reserve inventory, so this must be done
             * again at acceptance time.
             */
            const offeredInventoryIds = offeredRows.map((row) => row.inventory_item_id);
            const offeredInventory = await transaction.inventory_items.findMany({
                where: {
                    id: {
                        in: offeredInventoryIds,
                    },
                    owner_user_id: offer.offerer_user_id,
                },
                select: {
                    id: true,
                    printing_id: true,
                    finish: true,
                    condition: true,
                    language_code: true,
                    quantity: true,
                    status: true,
                    owner_user_id: true,
                    owner_store_id: true,
                },
            });
            if (offeredInventory.length !==
                offeredInventoryIds.length) {
                throw new common_1.ConflictException("One or more offered inventory items no longer belong to the offerer.");
            }
            const offeredInventoryById = new Map(offeredInventory.map((inventory) => [
                inventory.id,
                inventory,
            ]));
            const offeredPrintingIds = [
                ...new Set(offeredInventory.map((inventory) => inventory.printing_id)),
            ];
            const offeredPrintings = await transaction.card_printings.findMany({
                where: {
                    id: {
                        in: offeredPrintingIds,
                    },
                },
                select: {
                    id: true,
                    canonical_card_id: true,
                },
            });
            const offeredPrintingById = new Map(offeredPrintings.map((printing) => [
                printing.id,
                printing,
            ]));
            let totalOfferedQuantity = 0;
            for (const offeredRow of offeredRows) {
                if (offeredRow.offerer_user_id !==
                    offer.offerer_user_id ||
                    offeredRow.offerer_store_id !==
                        null) {
                    throw new common_1.ConflictException("An offered item no longer matches the wishlist offerer.");
                }
                const inventory = offeredInventoryById.get(offeredRow.inventory_item_id);
                if (!inventory) {
                    throw new common_1.ConflictException("An offered inventory item could not be loaded.");
                }
                if (inventory.status !==
                    "available") {
                    throw new common_1.ConflictException("An offered inventory item is no longer available.");
                }
                if (inventory.quantity !==
                    offeredRow.quantity) {
                    throw new common_1.ConflictException("An offered inventory quantity changed after the wishlist offer was created.");
                }
                const printing = offeredPrintingById.get(inventory.printing_id);
                if (!printing) {
                    throw new common_1.ConflictException("The printing for an offered inventory item could not be loaded.");
                }
                const identityMatches = wishlistItem.printing_id
                    ? inventory.printing_id ===
                        wishlistItem.printing_id
                    : printing.canonical_card_id ===
                        wishlistItem.canonical_card_id;
                if (!identityMatches) {
                    throw new common_1.ConflictException("An offered card no longer matches the wishlist card target.");
                }
                if (wishlistItem.desired_finish &&
                    inventory.finish !==
                        wishlistItem.desired_finish) {
                    throw new common_1.ConflictException("An offered card no longer matches the wishlist finish.");
                }
                if (wishlistItem.desired_condition &&
                    inventory.condition !==
                        wishlistItem.desired_condition) {
                    throw new common_1.ConflictException("An offered card no longer matches the wishlist condition.");
                }
                if (wishlistItem.language_code &&
                    inventory.language_code !==
                        wishlistItem.language_code) {
                    throw new common_1.ConflictException("An offered card no longer matches the wishlist language.");
                }
                totalOfferedQuantity +=
                    offeredRow.quantity;
            }
            if (totalOfferedQuantity >
                wishlistItem.quantity_desired) {
                throw new common_1.ConflictException("The accepted offer now exceeds the wishlist quantity requested.");
            }
            /*
             * Resolve the wishlist owner's cards that
             * the offerer requested in return.
             */
            const resolvedOwnerItems = [];
            for (const requestedRow of requestedRows) {
                if (requestedRow.requested_inventory_item_id) {
                    if (selectionByRequestedItemId.has(requestedRow.id)) {
                        throw new common_1.BadRequestException("An exact requested inventory item must not be replaced by another selection.");
                    }
                    resolvedOwnerItems.push({
                        requestedItemId: requestedRow.id,
                        inventoryItemId: requestedRow.requested_inventory_item_id,
                        quantity: requestedRow.quantity,
                    });
                    continue;
                }
                const selectedInventoryId = selectionByRequestedItemId.get(requestedRow.id);
                if (!selectedInventoryId) {
                    throw new common_1.BadRequestException("Every flexible requested trade term must be resolved to a specific registered inventory item before acceptance.");
                }
                resolvedOwnerItems.push({
                    requestedItemId: requestedRow.id,
                    inventoryItemId: selectedInventoryId,
                    quantity: requestedRow.quantity,
                });
            }
            const flexibleRequestedIds = requestedRows
                .filter((row) => !row.requested_inventory_item_id)
                .map((row) => row.id);
            if (flexibleRequestedIds.length !==
                input.requestedInventorySelections.length) {
                throw new common_1.BadRequestException("The requested inventory selections do not exactly match the flexible trade terms in this offer.");
            }
            const ownerInventoryIds = resolvedOwnerItems.map((item) => item.inventoryItemId);
            if (new Set(ownerInventoryIds).size !==
                ownerInventoryIds.length) {
                throw new common_1.BadRequestException("The same wishlist-owner inventory item cannot satisfy multiple requested trade terms.");
            }
            const ownerInventory = await transaction.inventory_items.findMany({
                where: {
                    id: {
                        in: ownerInventoryIds,
                    },
                    owner_user_id: ownerUserId,
                },
                select: {
                    id: true,
                    printing_id: true,
                    finish: true,
                    condition: true,
                    language_code: true,
                    quantity: true,
                    status: true,
                    owner_user_id: true,
                    owner_store_id: true,
                },
            });
            if (ownerInventory.length !==
                ownerInventoryIds.length) {
                throw new common_1.BadRequestException("Every card selected in return must belong to the wishlist owner.");
            }
            const ownerInventoryById = new Map(ownerInventory.map((inventory) => [
                inventory.id,
                inventory,
            ]));
            const ownerPrintingIds = [
                ...new Set(ownerInventory.map((inventory) => inventory.printing_id)),
            ];
            const ownerPrintings = await transaction.card_printings.findMany({
                where: {
                    id: {
                        in: ownerPrintingIds,
                    },
                },
                select: {
                    id: true,
                    canonical_card_id: true,
                },
            });
            const ownerPrintingById = new Map(ownerPrintings.map((printing) => [
                printing.id,
                printing,
            ]));
            const requestedRowById = new Map(requestedRows.map((row) => [
                row.id,
                row,
            ]));
            for (const resolved of resolvedOwnerItems) {
                const requestedRow = requestedRowById.get(resolved.requestedItemId);
                const inventory = ownerInventoryById.get(resolved.inventoryItemId);
                if (!requestedRow ||
                    !inventory) {
                    throw new common_1.ConflictException("A requested trade item could not be resolved.");
                }
                if (inventory.status !==
                    "available") {
                    throw new common_1.ConflictException("A requested return card is no longer available.");
                }
                if (inventory.quantity !==
                    resolved.quantity) {
                    throw new common_1.ConflictException("A requested return-card quantity no longer matches the accepted trade terms.");
                }
                const printing = ownerPrintingById.get(inventory.printing_id);
                if (!printing) {
                    throw new common_1.ConflictException("The printing for a requested return card could not be loaded.");
                }
                if (requestedRow.requested_inventory_item_id &&
                    inventory.id !==
                        requestedRow.requested_inventory_item_id) {
                    throw new common_1.ConflictException("The exact requested inventory item changed during acceptance.");
                }
                if (requestedRow.requested_canonical_card_id &&
                    printing.canonical_card_id !==
                        requestedRow.requested_canonical_card_id) {
                    throw new common_1.BadRequestException("The selected inventory item does not match the requested canonical card.");
                }
                if (requestedRow.requested_printing_id &&
                    inventory.printing_id !==
                        requestedRow.requested_printing_id) {
                    throw new common_1.BadRequestException("The selected inventory item does not match the requested printing.");
                }
                if (requestedRow.desired_finish &&
                    inventory.finish !==
                        requestedRow.desired_finish) {
                    throw new common_1.BadRequestException("The selected inventory item does not match the requested finish.");
                }
                if (requestedRow.desired_condition &&
                    inventory.condition !==
                        requestedRow.desired_condition) {
                    throw new common_1.BadRequestException("The selected inventory item does not match the requested condition.");
                }
                if (requestedRow.language_code &&
                    inventory.language_code !==
                        requestedRow.language_code) {
                    throw new common_1.BadRequestException("The selected inventory item does not match the requested language.");
                }
            }
            const allInventoryIds = [
                ...offeredInventoryIds,
                ...ownerInventoryIds,
            ];
            if (new Set(allInventoryIds).size !==
                allInventoryIds.length) {
                throw new common_1.ConflictException("The same inventory item cannot appear on both sides of the same trade.");
            }
            /*
             * An inventory item already exposed by an
             * active/paused listing must not silently
             * enter a separate wishlist transaction.
             */
            const conflictingListing = await transaction.listings.findFirst({
                where: {
                    inventory_item_id: {
                        in: allInventoryIds,
                    },
                    status: {
                        in: [
                            "active",
                            "paused",
                        ],
                    },
                },
                select: {
                    id: true,
                    inventory_item_id: true,
                },
            });
            if (conflictingListing) {
                throw new common_1.ConflictException("One of the cards in this wishlist trade is currently attached to an active or paused listing.");
            }
            /*
             * Reserve every physical inventory row
             * atomically. This is the point at which
             * the accepted trade becomes exclusive.
             */
            for (const offeredRow of offeredRows) {
                const reserved = await transaction.inventory_items.updateMany({
                    where: {
                        id: offeredRow.inventory_item_id,
                        owner_user_id: offer.offerer_user_id,
                        owner_store_id: null,
                        status: "available",
                        quantity: offeredRow.quantity,
                    },
                    data: {
                        status: "in_trade",
                        updated_at: now,
                    },
                });
                if (reserved.count !==
                    1) {
                    throw new common_1.ConflictException("An offered card changed while the wishlist offer was being accepted.");
                }
            }
            for (const ownerItem of resolvedOwnerItems) {
                const reserved = await transaction.inventory_items.updateMany({
                    where: {
                        id: ownerItem.inventoryItemId,
                        owner_user_id: ownerUserId,
                        owner_store_id: null,
                        status: "available",
                        quantity: ownerItem.quantity,
                    },
                    data: {
                        status: "in_trade",
                        updated_at: now,
                    },
                });
                if (reserved.count !==
                    1) {
                    throw new common_1.ConflictException("A requested return card changed while the wishlist offer was being accepted.");
                }
            }
            /*
             * For wishlist-origin trades we currently
             * map item_role as follows:
             *
             * listed_item  = wishlist owner's side
             * offered_item = wishlist offerer's side
             *
             * This preserves compatibility with the
             * existing transaction_items constraint.
             */
            const transactionHeader = await transaction.transactions.create({
                data: {
                    listing_id: null,
                    accepted_offer_id: null,
                    accepted_wishlist_offer_id: offer.id,
                    seller_user_id: ownerUserId,
                    seller_store_id: null,
                    counterparty_user_id: offer.offerer_user_id,
                    counterparty_store_id: null,
                    transaction_type: "card_trade",
                    cash_amount: 0,
                    currency_code: "USD",
                    status: "awaiting_handoff",
                    agreed_at: now,
                    completed_at: null,
                    updated_at: now,
                },
                select: {
                    id: true,
                    listing_id: true,
                    accepted_offer_id: true,
                    accepted_wishlist_offer_id: true,
                    seller_user_id: true,
                    seller_store_id: true,
                    counterparty_user_id: true,
                    counterparty_store_id: true,
                    transaction_type: true,
                    cash_amount: true,
                    currency_code: true,
                    status: true,
                    agreed_at: true,
                    completed_at: true,
                    created_at: true,
                    updated_at: true,
                },
            });
            const transactionItems = [];
            for (const ownerItem of resolvedOwnerItems) {
                const created = await transaction.transaction_items.create({
                    data: {
                        transaction_id: transactionHeader.id,
                        inventory_item_id: ownerItem.inventoryItemId,
                        item_role: "listed_item",
                        quantity: ownerItem.quantity,
                        from_user_id: ownerUserId,
                        from_store_id: null,
                        to_user_id: offer.offerer_user_id,
                        to_store_id: null,
                        market_snapshot_id: null,
                        agreed_unit_value: null,
                        currency_code: null,
                        result_inventory_item_id: null,
                    },
                    select: {
                        id: true,
                        transaction_id: true,
                        inventory_item_id: true,
                        result_inventory_item_id: true,
                        item_role: true,
                        quantity: true,
                        from_user_id: true,
                        from_store_id: true,
                        to_user_id: true,
                        to_store_id: true,
                        created_at: true,
                    },
                });
                transactionItems.push(created);
            }
            for (const offeredRow of offeredRows) {
                const created = await transaction.transaction_items.create({
                    data: {
                        transaction_id: transactionHeader.id,
                        inventory_item_id: offeredRow.inventory_item_id,
                        item_role: "offered_item",
                        quantity: offeredRow.quantity,
                        from_user_id: offer.offerer_user_id,
                        from_store_id: null,
                        to_user_id: ownerUserId,
                        to_store_id: null,
                        market_snapshot_id: null,
                        agreed_unit_value: null,
                        currency_code: null,
                        result_inventory_item_id: null,
                    },
                    select: {
                        id: true,
                        transaction_id: true,
                        inventory_item_id: true,
                        result_inventory_item_id: true,
                        item_role: true,
                        quantity: true,
                        from_user_id: true,
                        from_store_id: true,
                        to_user_id: true,
                        to_store_id: true,
                        created_at: true,
                    },
                });
                transactionItems.push(created);
            }
            const handoff = await transaction.store_trade_handoffs.create({
                data: {
                    transaction_id: transactionHeader.id,
                    store_id: store.id,
                    status: "awaiting_items",
                    store_notes: null,
                    completed_at: null,
                    cancelled_at: null,
                    updated_at: now,
                },
                select: {
                    id: true,
                    transaction_id: true,
                    store_id: true,
                    status: true,
                    store_notes: true,
                    completed_at: true,
                    cancelled_at: true,
                    created_at: true,
                    updated_at: true,
                },
            });
            const custody = [];
            for (const transactionItem of transactionItems) {
                const created = await transaction.transaction_item_custody.create({
                    data: {
                        handoff_id: handoff.id,
                        transaction_id: transactionHeader.id,
                        transaction_item_id: transactionItem.id,
                        store_id: store.id,
                        custody_status: "awaiting_delivery_to_store",
                        received_by_staff_id: null,
                        received_at: null,
                        verified_by_staff_id: null,
                        verified_at: null,
                        released_by_staff_id: null,
                        released_at: null,
                        issue_notes: null,
                        updated_at: now,
                    },
                    select: {
                        id: true,
                        handoff_id: true,
                        transaction_id: true,
                        transaction_item_id: true,
                        store_id: true,
                        custody_status: true,
                        received_by_staff_id: true,
                        received_at: true,
                        verified_by_staff_id: true,
                        verified_at: true,
                        released_by_staff_id: true,
                        released_at: true,
                        issue_notes: true,
                        created_at: true,
                        updated_at: true,
                    },
                });
                custody.push(created);
            }
            /*
             * The accepted offer is immediately
             * represented by a transaction, so its
             * terminal offer state is
             * converted_to_transaction rather than
             * merely accepted.
             */
            const converted = await transaction.wishlist_offers.updateMany({
                where: {
                    id: offer.id,
                    status: "pending",
                },
                data: {
                    status: "converted_to_transaction",
                    responded_at: now,
                    updated_at: now,
                },
            });
            if (converted.count !==
                1) {
                throw new common_1.ConflictException("The wishlist offer changed while it was being accepted.");
            }
            /*
             * Other pending offers were not expressly
             * rejected by the owner; they are cancelled
             * because this wishlist item is now locked
             * into a transaction.
             */
            await transaction.wishlist_offers.updateMany({
                where: {
                    wishlist_item_id: wishlistItem.id,
                    id: {
                        not: offer.id,
                    },
                    status: "pending",
                },
                data: {
                    status: "cancelled",
                    responded_at: now,
                    updated_at: now,
                },
            });
            const paused = await transaction.wishlist_items.updateMany({
                where: {
                    id: wishlistItem.id,
                    status: "active",
                },
                data: {
                    status: "paused",
                    updated_at: now,
                },
            });
            if (paused.count !==
                1) {
                throw new common_1.ConflictException("The wishlist item changed while the offer was being accepted.");
            }
            return {
                ...transactionHeader,
                store,
                transaction_items: transactionItems,
                store_trade_handoffs: handoff,
                custody,
            };
        }, {
            isolationLevel: "Serializable",
        });
    }
    async rejectUserWishlistOffer(ownerUserId, offerId) {
        const offer = await this.database.client.wishlist_offers.findUnique({
            where: {
                id: offerId,
            },
            select: {
                id: true,
                wishlist_item_id: true,
                status: true,
            },
        });
        if (!offer) {
            throw new common_1.NotFoundException("Wishlist offer was not found.");
        }
        const item = await this.database.client.wishlist_items.findFirst({
            where: {
                id: offer.wishlist_item_id,
                wishlists: {
                    user_id: ownerUserId,
                },
            },
            select: {
                id: true,
            },
        });
        if (!item) {
            throw new common_1.NotFoundException("Wishlist item was not found or does not belong to this user.");
        }
        if (offer.status !==
            "pending") {
            throw new common_1.BadRequestException("Only pending wishlist offers can be rejected.");
        }
        const now = new Date();
        await this.database.client.wishlist_offers.update({
            where: {
                id: offerId,
            },
            data: {
                status: "rejected",
                responded_at: now,
                updated_at: now,
            },
        });
        return this.loadWishlistOffer(offerId);
    }
};
exports.WishlistsService = WishlistsService;
exports.WishlistsService = WishlistsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], WishlistsService);
