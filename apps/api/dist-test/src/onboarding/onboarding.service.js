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
exports.OnboardingService = void 0;
const common_1 = require("@nestjs/common");
const validation_1 = require("@repo/validation");
const clerk_auth_service_1 = require("../auth/clerk-auth.service");
const database_service_1 = require("../database/database.service");
let OnboardingService = class OnboardingService {
    database;
    auth;
    constructor(database, auth) {
        this.database = database;
        this.auth = auth;
    }
    requireUnmapped(principal) {
        if (principal.deckdealUserId) {
            throw new common_1.ForbiddenException("This Clerk account has already completed DeckDeal onboarding.");
        }
    }
    usernameValidationError(message) {
        return new common_1.BadRequestException({
            message: "Validation failed",
            errors: [{
                    path: "username",
                    message,
                    code: "custom",
                }],
        });
    }
    availabilityResponse(username, normalized, available, reason, message) {
        return {
            username,
            normalized,
            available,
            reason,
            message,
        };
    }
    async getUsernameAvailability(principal, query) {
        this.requireUnmapped(principal);
        const result = (0, validation_1.validateDeckDealUsername)(query.username);
        if (!result.ok) {
            return this.availabilityResponse(result.username, result.normalized, false, result.code, result.message);
        }
        const existing = await this.database.client.user_profiles.findUnique({
            where: {
                username_normalized: result.normalized,
            },
            select: {
                id: true,
            },
        });
        return existing
            ? this.availabilityResponse(result.username, result.normalized, false, "taken", "This username is already taken.")
            : this.availabilityResponse(result.username, result.normalized, true, null, null);
    }
    async throwUniqueConstraintError(principal, error) {
        const existing = await this.database.client.user_profiles.findUnique({
            where: {
                auth_provider_auth_user_id: {
                    auth_provider: "clerk",
                    auth_user_id: principal.providerSubject,
                },
            },
            select: {
                id: true,
            },
        });
        if (existing) {
            throw new common_1.ForbiddenException("This Clerk account has already completed DeckDeal onboarding.");
        }
        const target = Array.isArray(error.meta?.target)
            ? error.meta.target.join(",")
            : String(error.meta?.target ?? "");
        if (target.includes("username_normalized") ||
            target.includes("uq_user_profiles_username_normalized") ||
            target.includes("username") ||
            target.includes("uq_user_profiles_username")) {
            throw new common_1.ConflictException("This username is already taken.");
        }
        if (target.includes("email") ||
            target.includes("uq_user_profiles_email")) {
            throw new common_1.ConflictException("This Clerk email is already linked to another DeckDeal account.");
        }
        throw error;
    }
    async complete(principal, input) {
        this.requireUnmapped(principal);
        const result = (0, validation_1.validateDeckDealUsername)(input.username);
        if (!result.ok) {
            throw this.usernameValidationError(result.message);
        }
        const email = await this.auth.getPrimaryEmailAddress(principal.providerSubject);
        if (!email) {
            throw new common_1.ConflictException("A Clerk email address is required to complete DeckDeal onboarding.");
        }
        try {
            const user = await this.database.client.$transaction(async (tx) => {
                const existing = await tx.user_profiles.findUnique({
                    where: {
                        auth_provider_auth_user_id: {
                            auth_provider: "clerk",
                            auth_user_id: principal.providerSubject,
                        },
                    },
                    select: {
                        id: true,
                    },
                });
                if (existing) {
                    throw new common_1.ForbiddenException("This Clerk account has already completed DeckDeal onboarding.");
                }
                return tx.user_profiles.create({
                    data: {
                        auth_provider: "clerk",
                        auth_user_id: principal.providerSubject,
                        email,
                        username: result.username,
                        username_normalized: result.normalized,
                        display_name: (0, validation_1.normalizeDeckDealDisplayName)(input.displayName),
                        status: "active",
                    },
                    select: {
                        id: true,
                        display_name: true,
                        username: true,
                    },
                });
            });
            return {
                authenticated: true,
                onboarded: true,
                account_status: "active",
                user,
            };
        }
        catch (error) {
            if (error instanceof common_1.ForbiddenException ||
                error instanceof common_1.BadRequestException ||
                error instanceof common_1.ConflictException) {
                throw error;
            }
            const existing = await this.database.client.user_profiles.findUnique({
                where: {
                    auth_provider_auth_user_id: {
                        auth_provider: "clerk",
                        auth_user_id: principal.providerSubject,
                    },
                },
                select: {
                    id: true,
                },
            });
            if (existing) {
                throw new common_1.ForbiddenException("This Clerk account has already completed DeckDeal onboarding.");
            }
            const takenUsername = await this.database.client.user_profiles.findUnique({
                where: {
                    username_normalized: result.normalized,
                },
                select: {
                    id: true,
                },
            });
            if (takenUsername) {
                throw new common_1.ConflictException("This username is already taken.");
            }
            const existingEmail = await this.database.client.user_profiles.findUnique({
                where: {
                    email,
                },
                select: {
                    id: true,
                },
            });
            if (existingEmail) {
                throw new common_1.ConflictException("This Clerk email is already linked to another DeckDeal account.");
            }
            if (typeof error === "object" &&
                error !== null &&
                "code" in error &&
                error.code === "P2002") {
                await this.throwUniqueConstraintError(principal, error);
            }
            throw error;
        }
    }
};
exports.OnboardingService = OnboardingService;
exports.OnboardingService = OnboardingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService,
        clerk_auth_service_1.ClerkAuthService])
], OnboardingService);
