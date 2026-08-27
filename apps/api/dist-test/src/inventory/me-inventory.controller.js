"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeInventoryController = void 0;
const common_1 = require("@nestjs/common");
const validation_1 = require("@repo/validation");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const zod_validation_pipe_1 = require("../common/pipes/zod-validation.pipe");
const inventory_service_1 = require("./inventory.service");
let MeInventoryController = class MeInventoryController {
    inventoryService;
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    getMyInventory(principal, query) {
        return this.inventoryService.getMyInventory(principal.deckdealUserId, query);
    }
    createMyInventoryItem(principal, input) {
        return this.inventoryService.createMyInventoryItem(principal.deckdealUserId, input);
    }
    getMyInventoryItem(principal, inventoryItemId) {
        return this.inventoryService.getMyInventoryItem(principal.deckdealUserId, inventoryItemId);
    }
    updateMyInventoryItem(principal, inventoryItemId, input) {
        return this.inventoryService.updateMyInventoryItem(principal.deckdealUserId, inventoryItemId, input);
    }
    removeMyInventoryItem(principal, inventoryItemId) {
        return this.inventoryService.removeMyInventoryItem(principal.deckdealUserId, inventoryItemId);
    }
};
exports.MeInventoryController = MeInventoryController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.myInventoryListQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MeInventoryController.prototype, "getMyInventory", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.createUserInventoryItemSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MeInventoryController.prototype, "createMyInventoryItem", null);
__decorate([
    (0, common_1.Get)(":inventoryItemId"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("inventoryItemId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], MeInventoryController.prototype, "getMyInventoryItem", null);
__decorate([
    (0, common_1.Patch)(":inventoryItemId"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("inventoryItemId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.updateUserInventoryItemSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", void 0)
], MeInventoryController.prototype, "updateMyInventoryItem", null);
__decorate([
    (0, common_1.Post)(":inventoryItemId/remove"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)("inventoryItemId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], MeInventoryController.prototype, "removeMyInventoryItem", null);
exports.MeInventoryController = MeInventoryController = __decorate([
    (0, common_1.Controller)("me/inventory"),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], MeInventoryController);
