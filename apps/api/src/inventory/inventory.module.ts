import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { StorageModule } from "../storage/storage.module";
import { InventoryController } from "./inventory.controller";
import { MeInventoryController } from "./me-inventory.controller";
import { InventoryService } from "./inventory.service";

@Module({
  imports: [
    DatabaseModule,
    StorageModule,
  ],
  controllers: [
    InventoryController,
    MeInventoryController,
  ],
  providers: [
    InventoryService,
  ],
})
export class InventoryModule {}