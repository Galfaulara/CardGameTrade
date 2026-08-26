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
exports.DeckDealAuthorizationGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const clerk_auth_service_1 = require("./clerk-auth.service");
const public_decorator_1 = require("./public.decorator");
const LEGACY_ACTOR_PARAMS = ["userId", "ownerUserId", "staffUserId"];
let DeckDealAuthorizationGuard = class DeckDealAuthorizationGuard {
    reflector;
    auth;
    constructor(reflector, auth) {
        this.reflector = reflector;
        this.auth = auth;
    }
    async canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(public_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic)
            return true;
        const request = context.switchToHttp().getRequest();
        const principal = await this.auth.authenticate(request);
        if (!principal)
            throw new common_1.UnauthorizedException("Authentication is required.");
        request.authenticatedPrincipal = principal;
        const allowUnmapped = this.reflector.getAllAndOverride(public_decorator_1.ALLOW_UNMAPPED_DECKDEAL_USER_KEY, [context.getHandler(), context.getClass()]);
        if (allowUnmapped)
            return true;
        if (!principal.deckdealUserId) {
            throw new common_1.ForbiddenException("A DeckDeal account is required.");
        }
        if (principal.accountStatus !== "active") {
            throw new common_1.ForbiddenException("This DeckDeal account is not active.");
        }
        for (const parameter of LEGACY_ACTOR_PARAMS) {
            const claimedUserId = request.params?.[parameter];
            if (claimedUserId && claimedUserId !== principal.deckdealUserId) {
                throw new common_1.ForbiddenException("The requested user identity does not match the authenticated account.");
            }
        }
        return true;
    }
};
exports.DeckDealAuthorizationGuard = DeckDealAuthorizationGuard;
exports.DeckDealAuthorizationGuard = DeckDealAuthorizationGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        clerk_auth_service_1.ClerkAuthService])
], DeckDealAuthorizationGuard);
