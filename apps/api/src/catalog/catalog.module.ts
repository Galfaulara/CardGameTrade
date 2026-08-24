import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { CatalogController } from "./catalog.controller";
import { CatalogService } from "./catalog.service";
import { CatalogSyncService } from "./catalog-sync.service";

@Module({
  imports: [DatabaseModule],
  controllers: [CatalogController],
  providers: [CatalogService, CatalogSyncService],
  exports: [CatalogSyncService],
})
export class CatalogModule {}