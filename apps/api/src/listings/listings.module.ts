import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { ListingsController } from "./listings.controller";
import { MeCollectionListingsController } from "./me-collection-listings.controller";
import { ListingsService } from "./listings.service";

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    ListingsController,
    MeCollectionListingsController,
  ],
  providers: [
    ListingsService,
  ],
})
export class ListingsModule {}
