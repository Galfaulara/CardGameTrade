"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryInterestsModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const inventory_interests_controller_1 = require("./inventory-interests.controller");
const inventory_interests_service_1 = require("./inventory-interests.service");
let InventoryInterestsModule = class InventoryInterestsModule {
};
exports.InventoryInterestsModule = InventoryInterestsModule;
exports.InventoryInterestsModule = InventoryInterestsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
        ],
        controllers: [
            inventory_interests_controller_1.InventoryInterestsController,
        ],
        providers: [
            inventory_interests_service_1.InventoryInterestsService,
        ],
        exports: [
            inventory_interests_service_1.InventoryInterestsService,
        ],
    })
], InventoryInterestsModule);
