import {
  Module,
} from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { InventoryInterestsController } from "./inventory-interests.controller";
import { InventoryInterestsService } from "./inventory-interests.service";

@Module({
  imports: [
    DatabaseModule,
  ],

  controllers: [
    InventoryInterestsController,
  ],

  providers: [
    InventoryInterestsService,
  ],

  exports: [
    InventoryInterestsService,
  ],
})
export class InventoryInterestsModule {}
