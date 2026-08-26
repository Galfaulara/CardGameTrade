"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const validation_1 = require("@repo/validation");
const app_module_1 = require("../app.module");
const database_service_1 = require("../database/database.service");
async function main() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    try {
        const database = app.get(database_service_1.DatabaseService);
        const email = process.env.BOOTSTRAP_USER_EMAIL;
        const usernameInput = process.env.BOOTSTRAP_USER_USERNAME;
        const displayNameInput = process.env.BOOTSTRAP_USER_DISPLAY_NAME;
        if (!email) {
            throw new Error("BOOTSTRAP_USER_EMAIL is required.");
        }
        if (!usernameInput) {
            throw new Error("BOOTSTRAP_USER_USERNAME is required.");
        }
        if (!displayNameInput) {
            throw new Error("BOOTSTRAP_USER_DISPLAY_NAME is required.");
        }
        const username = (0, validation_1.validateDeckDealUsername)(usernameInput);
        if (!username.ok) {
            throw new Error(username.message);
        }
        const displayName = (0, validation_1.normalizeDeckDealDisplayName)(displayNameInput);
        if (!displayName) {
            throw new Error("BOOTSTRAP_USER_DISPLAY_NAME is required.");
        }
        const existingUser = await database.client.user_profiles.findUnique({
            where: {
                email,
            },
        });
        if (existingUser) {
            const user = await database.client.user_profiles.update({
                where: {
                    id: existingUser.id,
                },
                data: {
                    username: username.username,
                    username_normalized: username.normalized,
                    display_name: displayName,
                    status: "active",
                    updated_at: new Date(),
                },
            });
            console.log("Existing DeckDeal user updated:");
            console.table([
                {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    displayName: user.display_name,
                    authProvider: user.auth_provider,
                    authUserId: user.auth_user_id,
                    status: user.status,
                },
            ]);
            return;
        }
        const user = await database.client.user_profiles.create({
            data: {
                auth_provider: "bootstrap",
                auth_user_id: "bootstrap-primary-user",
                email,
                username: username.username,
                username_normalized: username.normalized,
                display_name: displayName,
                status: "active",
            },
        });
        console.log("DeckDeal user created:");
        console.table([
            {
                id: user.id,
                email: user.email,
                username: user.username,
                displayName: user.display_name,
                authProvider: user.auth_provider,
                authUserId: user.auth_user_id,
                status: user.status,
            },
        ]);
    }
    finally {
        await app.close();
    }
}
main().catch((error) => {
    console.error("DeckDeal user bootstrap failed:");
    console.error(error);
    process.exitCode = 1;
});
