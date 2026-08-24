import {
  Module,
} from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { StoresController } from "./stores.controller";
import { StoresService } from "./stores.service";

@Module({
  imports: [
    DatabaseModule,
  ],

  controllers: [
    StoresController,
  ],

  providers: [
    StoresService,
  ],

  exports: [
    StoresService,
  ],
})
export class StoresModule {}