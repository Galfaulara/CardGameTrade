import {
  Module,
} from "@nestjs/common";
import {
  ConfigModule,
} from "@nestjs/config";
import { APP_GUARD } from "@nestjs/core";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { DeckDealAuthorizationGuard } from "./auth/deckdeal-authorization.guard";
import { CatalogModule } from "./catalog/catalog.module";
import { DatabaseModule } from "./database/database.module";
import { DiscoveryModule } from "./discovery/discovery.module";
import { InventoryModule } from "./inventory/inventory.module";
import { InventoryInterestsModule } from "./inventory-interests/inventory-interests.module";
import { ListingsModule } from "./listings/listings.module";
import { MeModule } from "./me/me.module";
import { OffersModule } from "./offers/offers.module";
import { OnboardingModule } from "./onboarding/onboarding.module";
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
    AuthModule,
    DiscoveryModule,
    CatalogModule,
    InventoryModule,
    InventoryInterestsModule,
    ListingsModule,
    MeModule,
    OffersModule,
    OnboardingModule,
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
    {
      provide: APP_GUARD,
      useClass: DeckDealAuthorizationGuard,
    },
  ],
})
export class AppModule {}
