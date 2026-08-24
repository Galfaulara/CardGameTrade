import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { OffersController } from "./offers.controller";
import { OffersService } from "./offers.service";

@Module({
  imports: [
    DatabaseModule,
  ],

  controllers: [
    OffersController,
  ],

  providers: [
    OffersService,
  ],
})
export class OffersModule {}