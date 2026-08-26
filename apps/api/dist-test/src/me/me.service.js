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
exports.MeService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const available = {
    status: "available",
};
const activeListing = {
    status: "active",
    OR: [
        {
            accepts_trade: true,
        },
        {
            accepts_cash: true,
        },
    ],
};
const eligibleStore = {
    status: "active",
    verification_status: "verified",
    trade_mediation_enabled: true,
};
const storeSelect = {
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
};
const storeOptionSelect = {
    id: true,
    name: true,
    slug: true,
    logo_url: true,
    city: true,
    state_region: true,
    country_code: true,
};
let MeService = class MeService {
    database;
    constructor(database) {
        this.database = database;
    }
    publicUserWhere(userId) {
        return {
            id: userId,
            status: "active",
            OR: [
                {
                    collections: {
                        some: {
                            visibility: "public",
                        },
                    },
                },
                {
                    inventory_items: {
                        some: {
                            ...available,
                            owner_store_id: null,
                            listings_listings_inventory_item_id_seller_user_idToinventory_items: {
                                some: activeListing,
                            },
                        },
                    },
                },
                {
                    wishlists: {
                        some: {
                            visibility: "public",
                            status: "active",
                        },
                    },
                },
            ],
        };
    }
    mapStore(store) {
        if (!store) {
            return null;
        }
        const { status, verification_status, trade_mediation_enabled, ...safeStore } = store;
        return {
            ...safeStore,
            eligible: status === "active" &&
                verification_status === "verified" &&
                trade_mediation_enabled === true,
        };
    }
    async requireUser(userId) {
        const user = await this.database.client.user_profiles.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                display_name: true,
                username: true,
                preferred_store_id: true,
                preferred_store: {
                    select: storeSelect,
                },
            },
        });
        if (!user) {
            throw new common_1.NotFoundException("User was not found.");
        }
        return user;
    }
    async requireEligibleStore(storeId) {
        const store = await this.database.client.stores.findFirst({
            where: {
                id: storeId,
                ...eligibleStore,
            },
            select: {
                id: true,
            },
        });
        if (!store) {
            throw new common_1.BadRequestException("The preferred store must be an active, verified DeckDeal trade-mediation store.");
        }
    }
    async getProfile(userId) {
        const [user, publicProfileAvailable] = await Promise.all([
            this.requireUser(userId),
            this.database.client.user_profiles.count({
                where: this.publicUserWhere(userId),
            }),
        ]);
        return {
            id: user.id,
            display_name: user.display_name,
            username: user.username,
            preferred_store_id: user.preferred_store_id,
            preferred_store: this.mapStore(user.preferred_store),
            public_profile_available: publicProfileAvailable > 0,
        };
    }
    async updateProfile(userId, input) {
        const current = await this.requireUser(userId);
        const data = {};
        if ("displayName" in input &&
            input.displayName !==
                current.display_name) {
            data.display_name =
                input.displayName ?? null;
        }
        if ("preferredStoreId" in input &&
            input.preferredStoreId !==
                current.preferred_store_id) {
            if (input.preferredStoreId) {
                await this.requireEligibleStore(input.preferredStoreId);
            }
            data.preferred_store_id =
                input.preferredStoreId ?? null;
        }
        if (!("display_name" in data) &&
            !("preferred_store_id" in data)) {
            return this.getProfile(userId);
        }
        await this.database.client.user_profiles.update({
            where: {
                id: userId,
            },
            data: {
                ...data,
                updated_at: new Date(),
            },
        });
        return this.getProfile(userId);
    }
    async getProfileStoreOptions(query) {
        const terms = query.q
            .split(/\s+/)
            .map((value) => value.trim())
            .filter(Boolean);
        const where = terms.length
            ? {
                ...eligibleStore,
                AND: terms.map((term) => ({
                    OR: [
                        {
                            name: {
                                contains: term,
                                mode: "insensitive",
                            },
                        },
                        {
                            slug: {
                                contains: term,
                                mode: "insensitive",
                            },
                        },
                        {
                            city: {
                                contains: term,
                                mode: "insensitive",
                            },
                        },
                        {
                            state_region: {
                                contains: term,
                                mode: "insensitive",
                            },
                        },
                        {
                            country_code: {
                                contains: term,
                                mode: "insensitive",
                            },
                        },
                    ],
                })),
            }
            : eligibleStore;
        return {
            items: await this.database.client.stores.findMany({
                where,
                select: storeOptionSelect,
                orderBy: {
                    name: "asc",
                },
                take: query.limit,
            }),
        };
    }
};
exports.MeService = MeService;
exports.MeService = MeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], MeService);
