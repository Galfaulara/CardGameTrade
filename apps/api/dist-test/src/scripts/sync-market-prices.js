"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app.module");
const catalog_sync_service_1 = require("../catalog/catalog-sync.service");
const market_prices_service_1 = require("../catalog/market-prices.service");
async function main() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    try {
        const provider = process.argv[2] ?? "all";
        if (!["all", "tcgplayer", "cardkingdom"].includes(provider))
            throw new Error(`Unknown pricing provider: ${provider}`);
        const catalog = app.get(catalog_sync_service_1.CatalogSyncService);
        const prices = app.get(market_prices_service_1.MarketPricesService);
        if (provider === "all" || provider === "tcgplayer") {
            console.log(await prices.syncTcgplayerFromScryfallBulk(catalog.readPricingCards()));
        }
        if (provider === "all" || provider === "cardkingdom")
            console.log(await prices.syncCardKingdom());
    }
    finally {
        await app.close();
    }
}
main().catch((error) => {
    console.error("Daily market pricing sync failed:", error);
    process.exitCode = 1;
});
