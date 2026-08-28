import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { CatalogSyncService } from "../catalog/catalog-sync.service";
import { MarketPricesService } from "../catalog/market-prices.service";

async function main() {
  const app = await NestFactory.createApplicationContext(AppModule);
  try {
    const provider = process.argv[2] ?? "all";
    if (!["all", "tcgplayer", "cardkingdom"].includes(provider))
      throw new Error(`Unknown pricing provider: ${provider}`);
    const catalog = app.get(CatalogSyncService);
    const prices = app.get(MarketPricesService);
    if (provider === "all" || provider === "tcgplayer") {
      console.log(
        await prices.syncTcgplayerFromScryfallBulk(catalog.readPricingCards()),
      );
    }
    if (provider === "all" || provider === "cardkingdom")
      console.log(await prices.syncCardKingdom());
  } finally {
    await app.close();
  }
}
main().catch((error) => {
  console.error("Daily market pricing sync failed:", error);
  process.exitCode = 1;
});
