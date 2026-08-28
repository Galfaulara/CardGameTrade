import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { CatalogController } from "./catalog.controller";
import { CatalogService } from "./catalog.service";
import { CatalogSyncService } from "./catalog-sync.service";
import { MarketPricesService } from "./market-prices.service";

@Module({
  imports: [DatabaseModule],
  controllers: [CatalogController],
  providers: [CatalogService, CatalogSyncService, MarketPricesService],
  exports: [CatalogSyncService, MarketPricesService],
})
export class CatalogModule {}
