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
exports.ClerkAuthService = void 0;
const common_1 = require("@nestjs/common");
const backend_1 = require("@clerk/backend");
const database_service_1 = require("../database/database.service");
let ClerkAuthService = class ClerkAuthService {
    database;
    constructor(database) {
        this.database = database;
    }
    authorizedParties() {
        return (process.env.CLERK_AUTHORIZED_PARTIES ?? "http://localhost:3000")
            .split(",").map((value) => value.trim()).filter(Boolean);
    }
    publishableKey() {
        return process.env.CLERK_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
    }
    clerkClient() {
        const secretKey = process.env.CLERK_SECRET_KEY;
        const publishableKey = this.publishableKey();
        if (!secretKey || !publishableKey)
            return null;
        return (0, backend_1.createClerkClient)({ secretKey, publishableKey });
    }
    requestUrl(request) {
        const forwardedProto = request.header("x-forwarded-proto")?.split(",")[0]?.trim();
        const protocol = forwardedProto ?? request.protocol;
        const host = request.header("x-forwarded-host") ?? request.header("host");
        return `${protocol}://${host}${request.originalUrl}`;
    }
    async authenticate(request) {
        const clerk = this.clerkClient();
        if (!clerk)
            return null;
        try {
            const headers = new Headers();
            for (const [name, raw] of Object.entries(request.headers)) {
                if (Array.isArray(raw))
                    raw.forEach((value) => headers.append(name, value));
                else if (raw !== undefined)
                    headers.set(name, raw);
            }
            const state = await clerk.authenticateRequest(new Request(this.requestUrl(request), { method: request.method, headers }), { authorizedParties: this.authorizedParties(), acceptsToken: "session_token" });
            if (!state.isAuthenticated)
                return null;
            const auth = state.toAuth();
            if (!auth.userId)
                return null;
            const user = await this.database.client.user_profiles.findUnique({
                where: { auth_provider_auth_user_id: { auth_provider: "clerk", auth_user_id: auth.userId } },
                select: { id: true, status: true },
            });
            return { provider: "clerk", providerSubject: auth.userId,
                deckdealUserId: user?.id ?? null, sessionId: auth.sessionId ?? null,
                accountStatus: user?.status ?? null };
        }
        catch {
            return null;
        }
    }
    async getPrimaryEmailAddress(providerSubject) {
        const clerk = this.clerkClient();
        if (!clerk)
            return null;
        try {
            const user = await clerk.users.getUser(providerSubject);
            return user.primaryEmailAddress?.emailAddress ?? user.emailAddresses[0]?.emailAddress ?? null;
        }
        catch {
            return null;
        }
    }
    async currentUser(principal) {
        if (!principal.deckdealUserId)
            return { authenticated: true, onboarded: false };
        const user = await this.database.client.user_profiles.findUnique({ where: { id: principal.deckdealUserId },
            select: { id: true, display_name: true, username: true, status: true } });
        if (!user)
            return { authenticated: true, onboarded: false };
        if (user.status !== "active")
            return { authenticated: true, onboarded: true,
                account_status: "disabled", user: { id: user.id, display_name: user.display_name, username: user.username } };
        const { status: _status, ...identity } = user;
        return { authenticated: true, onboarded: true, account_status: "active", user: identity };
    }
};
exports.ClerkAuthService = ClerkAuthService;
exports.ClerkAuthService = ClerkAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ClerkAuthService);
