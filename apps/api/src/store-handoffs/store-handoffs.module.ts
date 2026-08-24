import {
  Module,
} from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { StoreHandoffsController } from "./store-handoffs.controller";
import { StoreHandoffsService } from "./store-handoffs.service";

@Module({
  imports: [
    DatabaseModule,
  ],

  controllers: [
    StoreHandoffsController,
  ],

  providers: [
    StoreHandoffsService,
  ],

  exports: [
    StoreHandoffsService,
  ],
})
export class StoreHandoffsModule {}
