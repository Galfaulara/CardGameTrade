"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activePrincipal = exports.USER_2_ID = exports.USER_1_ID = void 0;
exports.createAuthenticatedHarness = createAuthenticatedHarness;
require("reflect-metadata");
const testing_1 = require("@nestjs/testing");
const db_1 = require("@repo/db");
const supertest_1 = __importDefault(require("supertest"));
const app_module_1 = require("../../src/app.module");
const clerk_auth_service_1 = require("../../src/auth/clerk-auth.service");
const supabase_storage_service_1 = require("../../src/storage/supabase-storage.service");
exports.USER_1_ID = "16e1b0bc-3b75-4a82-a7e4-b6a88a6cbc2e";
exports.USER_2_ID = "92d9585a-7c59-4c02-8ee4-a9c24b9787d0";
const activePrincipal = (deckdealUserId) => ({
    provider: "clerk",
    providerSubject: `test-clerk-${deckdealUserId}`,
    deckdealUserId,
    sessionId: `test-session-${deckdealUserId}`,
    accountStatus: "active",
});
exports.activePrincipal = activePrincipal;
class TestAuthenticationBoundary {
    principal = null;
    db = (0, db_1.createDbClient)(process.env.DATABASE_URL);
    async connect() {
        await this.db.$connect();
    }
    async disconnect() {
        await this.db.$disconnect();
    }
    emailForSubject(providerSubject) {
        if (providerSubject.startsWith("shared-email:")) {
            return "shared-email@deckdeal.test";
        }
        return `${providerSubject.replace(/[^a-zA-Z0-9_-]/g, "_")}@deckdeal.test`;
    }
    async authenticate() {
        if (!this.principal) {
            return null;
        }
        if (this.principal.deckdealUserId) {
            return this.principal;
        }
        const mapped = await this.db.user_profiles.findUnique({
            where: {
                auth_provider_auth_user_id: {
                    auth_provider: "clerk",
                    auth_user_id: this.principal.providerSubject,
                },
            },
            select: {
                id: true,
                status: true,
            },
        });
        return {
            ...this.principal,
            deckdealUserId: mapped?.id ?? null,
            accountStatus: mapped?.status ?? null,
        };
    }
    async getPrimaryEmailAddress(providerSubject) {
        return this.emailForSubject(providerSubject);
    }
    async currentUser(principal) {
        const resolved = principal.deckdealUserId
            ? principal
            : await this.authenticate();
        if (!resolved?.deckdealUserId) {
            return { authenticated: true, onboarded: false };
        }
        const user = await this.db.user_profiles.findUnique({
            where: {
                id: resolved.deckdealUserId,
            },
            select: {
                id: true,
                display_name: true,
                username: true,
                status: true,
            },
        });
        if (!user) {
            return { authenticated: true, onboarded: false };
        }
        if (resolved.accountStatus !== "active" || user.status !== "active") {
            return {
                authenticated: true,
                onboarded: true,
                account_status: "disabled",
                user: {
                    id: user.id,
                    display_name: user.display_name,
                    username: user.username,
                },
            };
        }
        return {
            authenticated: true,
            onboarded: true,
            account_status: "active",
            user: {
                id: user.id,
                display_name: user.display_name,
                username: user.username,
            },
        };
    }
}
async function createAuthenticatedHarness() {
    const authentication = new TestAuthenticationBoundary();
    await authentication.connect();
    const moduleRef = await testing_1.Test.createTestingModule({ imports: [app_module_1.AppModule] })
        .overrideProvider(clerk_auth_service_1.ClerkAuthService)
        .useValue(authentication)
        .overrideProvider(supabase_storage_service_1.SupabaseStorageService)
        .useValue({ provider: "test", upload: async () => undefined, remove: async () => undefined, createSignedUrl: async () => "https://example.invalid/test" })
        .compile();
    const app = moduleRef.createNestApplication();
    app.setGlobalPrefix("api");
    await app.init();
    const http = (0, supertest_1.default)(app.getHttpServer());
    return {
        app,
        http,
        as(principal) {
            authentication.principal = principal;
            return http;
        },
        async close() {
            await app.close();
            await authentication.disconnect();
        },
    };
}
