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
exports.InventoryInterestsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let InventoryInterestsService = class InventoryInterestsService {
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
    getInterestSelect() {
        return {
            id: true,
            inventory_item_id: true,
            interested_user_id: true,
            interested_store_id: true,
            interest_type: true,
            message: true,
            status: true,
            converted_listing_offer_id: true,
            converted_wishlist_offer_id: true,
            converted_at: true,
            created_at: true,
            updated_at: true,
            user_profiles: {
                select: {
                    id: true,
                    username: true,
                    display_name: true,
                    status: true,
                },
            },
            inventory_items: {
                select: {
                    id: true,
                    printing_id: true,
                    finish: true,
                    owner_user_id: true,
                    owner_store_id: true,
                    collection_id: true,
                    condition: true,
                    language_code: true,
                    quantity: true,
                    is_signed: true,
                    is_altered: true,
                    is_graded: true,
                    status: true,
                    collections: {
                        select: {
                            id: true,
                            user_id: true,
                            name: true,
                            visibility: true,
                        },
                    },
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
                },
            },
        };
    }
    mapInterest(interest) {
        const { user_profiles, inventory_items, ...interestData } = interest;
        let inventoryItem = null;
        if (inventory_items) {
            const { printing_finishes, ...inventoryData } = inventory_items;
            inventoryItem = {
                ...inventoryData,
                printing: printing_finishes
                    ? {
                        ...printing_finishes
                            .card_printings,
                        finish: printing_finishes
                            .finish,
                    }
                    : null,
            };
        }
        return {
            ...interestData,
            interested_party: interest.interested_user_id
                ? {
                    type: "user",
                    user: user_profiles ??
                        null,
                }
                : {
                    type: "store",
                    store: null,
                },
            inventory_item: inventoryItem,
        };
    }
    async loadInterest(interestId) {
        const interest = await this.database.client.inventory_item_interests.findUnique({
            where: {
                id: interestId,
            },
            select: this.getInterestSelect(),
        });
        if (!interest) {
            throw new common_1.NotFoundException("Inventory-item interest was not found.");
        }
        return this.mapInterest(interest);
    }
    async requireVisibleInterestTarget(inventoryItemId) {
        const inventoryItem = await this.database.client.inventory_items.findUnique({
            where: {
                id: inventoryItemId,
            },
            select: {
                id: true,
                owner_user_id: true,
                owner_store_id: true,
                collection_id: true,
                status: true,
                collections: {
                    select: {
                        id: true,
                        user_id: true,
                        visibility: true,
                    },
                },
            },
        });
        if (!inventoryItem) {
            throw new common_1.NotFoundException("Inventory item was not found.");
        }
        if (!inventoryItem.owner_user_id ||
            inventoryItem.owner_store_id) {
            throw new common_1.BadRequestException("The first inventory-interest flow currently supports user-owned cards only.");
        }
        if (inventoryItem.status !==
            "available") {
            throw new common_1.BadRequestException("Interest can only be expressed in a currently available card.");
        }
        if (!inventoryItem.collection_id ||
            !inventoryItem.collections) {
            throw new common_1.ForbiddenException("The card must belong to a visible user collection before another user can express interest in it.");
        }
        if (inventoryItem.collections.visibility ===
            "private") {
            throw new common_1.ForbiddenException("Interest cannot be created for a card in a private collection.");
        }
        return inventoryItem;
    }
    async createUserInterest(userId, inventoryItemId, input) {
        await this.requireActiveUser(userId);
        const inventoryItem = await this.requireVisibleInterestTarget(inventoryItemId);
        if (inventoryItem.owner_user_id ===
            userId) {
            throw new common_1.BadRequestException("A user cannot express interest in their own inventory item.");
        }
        const existing = await this.database.client.inventory_item_interests.findFirst({
            where: {
                inventory_item_id: inventoryItemId,
                interested_user_id: userId,
                status: "active",
            },
            select: {
                id: true,
            },
        });
        if (existing) {
            throw new common_1.ConflictException("This user already has an active interest in this inventory item.");
        }
        try {
            const interest = await this.database.client.inventory_item_interests.create({
                data: {
                    inventory_item_id: inventoryItemId,
                    interested_user_id: userId,
                    interested_store_id: null,
                    interest_type: input.interestType,
                    message: input.message ??
                        null,
                    status: "active",
                    converted_listing_offer_id: null,
                    converted_wishlist_offer_id: null,
                    converted_at: null,
                },
                select: {
                    id: true,
                },
            });
            return this.loadInterest(interest.id);
        }
        catch (error) {
            if (typeof error ===
                "object" &&
                error !==
                    null &&
                "code" in
                    error &&
                error.code ===
                    "P2002") {
                throw new common_1.ConflictException("This user already has an active interest in this inventory item.");
            }
            throw error;
        }
    }
    async getUserSentInterests(userId) {
        await this.requireActiveUser(userId);
        const interests = await this.database.client.inventory_item_interests.findMany({
            where: {
                interested_user_id: userId,
            },
            select: this.getInterestSelect(),
            orderBy: {
                created_at: "desc",
            },
        });
        return interests.map((interest) => this.mapInterest(interest));
    }
    async getUserReceivedInterests(ownerUserId) {
        await this.requireActiveUser(ownerUserId);
        const ownerInventory = await this.database.client.inventory_items.findMany({
            where: {
                owner_user_id: ownerUserId,
            },
            select: {
                id: true,
            },
        });
        if (ownerInventory.length ===
            0) {
            return [];
        }
        const interests = await this.database.client.inventory_item_interests.findMany({
            where: {
                inventory_item_id: {
                    in: ownerInventory.map((inventory) => inventory.id),
                },
            },
            select: this.getInterestSelect(),
            orderBy: {
                created_at: "desc",
            },
        });
        return interests.map((interest) => this.mapInterest(interest));
    }
    async updateUserInterest(userId, interestId, input) {
        await this.requireActiveUser(userId);
        const interest = await this.database.client.inventory_item_interests.findFirst({
            where: {
                id: interestId,
                interested_user_id: userId,
            },
            select: {
                id: true,
                inventory_item_id: true,
                status: true,
            },
        });
        if (!interest) {
            throw new common_1.NotFoundException("Inventory-item interest was not found or does not belong to this user.");
        }
        if (interest.status !==
            "active") {
            throw new common_1.BadRequestException("Only an active interest can be edited.");
        }
        await this.requireVisibleInterestTarget(interest.inventory_item_id);
        await this.database.client.inventory_item_interests.update({
            where: {
                id: interestId,
            },
            data: {
                ...(input.interestType !==
                    undefined
                    ? {
                        interest_type: input.interestType,
                    }
                    : {}),
                ...(input.message !==
                    undefined
                    ? {
                        message: input.message,
                    }
                    : {}),
                updated_at: new Date(),
            },
        });
        return this.loadInterest(interestId);
    }
    async withdrawUserInterest(userId, interestId) {
        await this.requireActiveUser(userId);
        const interest = await this.database.client.inventory_item_interests.findFirst({
            where: {
                id: interestId,
                interested_user_id: userId,
            },
            select: {
                id: true,
                status: true,
            },
        });
        if (!interest) {
            throw new common_1.NotFoundException("Inventory-item interest was not found or does not belong to this user.");
        }
        if (interest.status !==
            "active") {
            throw new common_1.BadRequestException("Only an active interest can be withdrawn.");
        }
        const updated = await this.database.client.inventory_item_interests.updateMany({
            where: {
                id: interestId,
                interested_user_id: userId,
                status: "active",
            },
            data: {
                status: "withdrawn",
                updated_at: new Date(),
            },
        });
        if (updated.count !==
            1) {
            throw new common_1.ConflictException("The interest changed while it was being withdrawn.");
        }
        return this.loadInterest(interestId);
    }
    async dismissReceivedInterest(ownerUserId, interestId) {
        await this.requireActiveUser(ownerUserId);
        const interest = await this.database.client.inventory_item_interests.findUnique({
            where: {
                id: interestId,
            },
            select: {
                id: true,
                inventory_item_id: true,
                status: true,
            },
        });
        if (!interest) {
            throw new common_1.NotFoundException("Inventory-item interest was not found.");
        }
        const inventoryItem = await this.database.client.inventory_items.findFirst({
            where: {
                id: interest.inventory_item_id,
                owner_user_id: ownerUserId,
            },
            select: {
                id: true,
            },
        });
        if (!inventoryItem) {
            throw new common_1.ForbiddenException("Only the inventory owner can dismiss this interest.");
        }
        if (interest.status !==
            "active") {
            throw new common_1.BadRequestException("Only an active interest can be dismissed.");
        }
        const updated = await this.database.client.inventory_item_interests.updateMany({
            where: {
                id: interestId,
                status: "active",
            },
            data: {
                status: "dismissed",
                updated_at: new Date(),
            },
        });
        if (updated.count !==
            1) {
            throw new common_1.ConflictException("The interest changed while it was being dismissed.");
        }
        return this.loadInterest(interestId);
    }
};
exports.InventoryInterestsService = InventoryInterestsService;
exports.InventoryInterestsService = InventoryInterestsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], InventoryInterestsService);
