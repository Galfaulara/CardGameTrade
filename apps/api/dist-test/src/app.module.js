"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const deckdeal_authorization_guard_1 = require("./auth/deckdeal-authorization.guard");
const catalog_module_1 = require("./catalog/catalog.module");
const database_module_1 = require("./database/database.module");
const discovery_module_1 = require("./discovery/discovery.module");
const inventory_module_1 = require("./inventory/inventory.module");
const inventory_interests_module_1 = require("./inventory-interests/inventory-interests.module");
const listings_module_1 = require("./listings/listings.module");
const me_module_1 = require("./me/me.module");
const offers_module_1 = require("./offers/offers.module");
const onboarding_module_1 = require("./onboarding/onboarding.module");
const preferences_module_1 = require("./preferences/preferences.module");
const stores_module_1 = require("./stores/stores.module");
const store_handoffs_module_1 = require("./store-handoffs/store-handoffs.module");
const transactions_module_1 = require("./transactions/transactions.module");
const wishlists_module_1 = require("./wishlists/wishlists.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            discovery_module_1.DiscoveryModule,
            catalog_module_1.CatalogModule,
            inventory_module_1.InventoryModule,
            inventory_interests_module_1.InventoryInterestsModule,
            listings_module_1.ListingsModule,
            me_module_1.MeModule,
            offers_module_1.OffersModule,
            onboarding_module_1.OnboardingModule,
            stores_module_1.StoresModule,
            preferences_module_1.PreferencesModule,
            store_handoffs_module_1.StoreHandoffsModule,
            transactions_module_1.TransactionsModule,
            wishlists_module_1.WishlistsModule,
        ],
        controllers: [
            app_controller_1.AppController,
        ],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: deckdeal_authorization_guard_1.DeckDealAuthorizationGuard,
            },
        ],
    })
], AppModule);
