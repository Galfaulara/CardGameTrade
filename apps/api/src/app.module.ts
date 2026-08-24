import {
  Module,
} from "@nestjs/common";
import {
  ConfigModule,
} from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CatalogModule } from "./catalog/catalog.module";
import { DatabaseModule } from "./database/database.module";
import { InventoryModule } from "./inventory/inventory.module";
import { ListingsModule } from "./listings/listings.module";
import { OffersModule } from "./offers/offers.module";
import { PreferencesModule } from "./preferences/preferences.module";
import { StoresModule } from "./stores/stores.module";
import { StoreHandoffsModule } from "./store-handoffs/store-handoffs.module";
import { TransactionsModule } from "./transactions/transactions.module";
import { WishlistsModule } from "./wishlists/wishlists.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    DatabaseModule,
    CatalogModule,
    InventoryModule,
    ListingsModule,
    OffersModule,
    StoresModule,
    PreferencesModule,
    StoreHandoffsModule,
    TransactionsModule,
    WishlistsModule,
  ],

  controllers: [
    AppController,
  ],

  providers: [
    AppService,
  ],
})
export class AppModule {}