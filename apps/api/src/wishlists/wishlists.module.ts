import {
  Module,
} from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { WishlistsController } from "./wishlists.controller";
import { MeWishlistsController } from "./me-wishlists.controller";
import { WishlistsService } from "./wishlists.service";

@Module({
  imports: [
    DatabaseModule,
  ],

  controllers: [
    WishlistsController,
    MeWishlistsController,
  ],

  providers: [
    WishlistsService,
  ],

  exports: [
    WishlistsService,
  ],
})
export class WishlistsModule {}
