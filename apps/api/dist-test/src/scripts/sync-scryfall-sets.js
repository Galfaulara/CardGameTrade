"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app.module");
const catalog_sync_service_1 = require("../catalog/catalog-sync.service");
async function main() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    try {
        const catalogSyncService = app.get(catalog_sync_service_1.CatalogSyncService);
        const result = await catalogSyncService.syncSets();
        console.log("Scryfall set synchronization complete:");
        console.table([result]);
    }
    finally {
        await app.close();
    }
}
main().catch((error) => {
    console.error("Scryfall set synchronization failed:");
    console.error(error);
    process.exitCode = 1;
});
