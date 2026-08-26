"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const auth_controller_1 = require("./auth.controller");
const clerk_auth_guard_1 = require("./clerk-auth.guard");
const clerk_auth_service_1 = require("./clerk-auth.service");
const deckdeal_authorization_guard_1 = require("./deckdeal-authorization.guard");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({ imports: [database_module_1.DatabaseModule], controllers: [auth_controller_1.AuthController], providers: [clerk_auth_service_1.ClerkAuthService, clerk_auth_guard_1.ClerkAuthGuard, deckdeal_authorization_guard_1.DeckDealAuthorizationGuard], exports: [clerk_auth_service_1.ClerkAuthService, clerk_auth_guard_1.ClerkAuthGuard, deckdeal_authorization_guard_1.DeckDealAuthorizationGuard] })
], AuthModule);
