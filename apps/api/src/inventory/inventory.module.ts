import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { StorageModule } from "../storage/storage.module";
import { InventoryController } from "./inventory.controller";
import { MeInventoryController } from "./me-inventory.controller";
import { MeCollectionsController } from "./me-collections.controller";
import { InventoryService } from "./inventory.service";
import { BulkInventoryService } from "./bulk-inventory.service";

@Module({
  imports: [
    DatabaseModule,
    StorageModule,
  ],
  controllers: [
    InventoryController,
    MeInventoryController,
    MeCollectionsController,
  ],
  providers: [
    InventoryService,
    BulkInventoryService,
  ],
})
export class InventoryModule {}
