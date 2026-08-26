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
exports.PreferencesService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let PreferencesService = class PreferencesService {
    database;
    constructor(database) {
        this.database = database;
    }
    async getPreferredTradeStore(userId) {
        const user = await this.database.client.user_profiles.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException("User was not found.");
        }
        const preference = await this.database.client.user_preferences.findUnique({
            where: {
                user_id: userId,
            },
            select: {
                user_id: true,
                preferred_trade_store_id: true,
                created_at: true,
                updated_at: true,
            },
        });
        if (!preference ||
            !preference.preferred_trade_store_id) {
            return {
                user_id: userId,
                preferred_trade_store_id: null,
                preferred_trade_store: null,
            };
        }
        const store = await this.database.client.stores.findUnique({
            where: {
                id: preference.preferred_trade_store_id,
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
        });
        return {
            ...preference,
            preferred_trade_store: store,
        };
    }
    async setPreferredTradeStore(userId, input) {
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
            throw new common_1.BadRequestException("An inactive user cannot change trade preferences.");
        }
        if (input.storeId) {
            const store = await this.database.client.stores.findFirst({
                where: {
                    id: input.storeId,
                    status: "active",
                    verification_status: "verified",
                    trade_mediation_enabled: true,
                },
                select: {
                    id: true,
                },
            });
            if (!store) {
                throw new common_1.BadRequestException("The preferred trade store must be an active affiliated DeckDeal trade-mediation store.");
            }
        }
        await this.database.client.user_preferences.upsert({
            where: {
                user_id: userId,
            },
            create: {
                user_id: userId,
                preferred_trade_store_id: input.storeId,
                updated_at: new Date(),
            },
            update: {
                preferred_trade_store_id: input.storeId,
                updated_at: new Date(),
            },
        });
        return this.getPreferredTradeStore(userId);
    }
};
exports.PreferencesService = PreferencesService;
exports.PreferencesService = PreferencesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], PreferencesService);
