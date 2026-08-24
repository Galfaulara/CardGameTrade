import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { ListingsController } from "./listings.controller";
import { ListingsService } from "./listings.service";

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    ListingsController,
  ],
  providers: [
    ListingsService,
  ],
})
export class ListingsModule {}