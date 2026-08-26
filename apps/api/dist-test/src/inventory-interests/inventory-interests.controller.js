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
exports.InventoryInterestsController = void 0;
const common_1 = require("@nestjs/common");
const validation_1 = require("@repo/validation");
const zod_validation_pipe_1 = require("../common/pipes/zod-validation.pipe");
const inventory_interests_service_1 = require("./inventory-interests.service");
let InventoryInterestsController = class InventoryInterestsController {
    inventoryInterestsService;
    constructor(inventoryInterestsService) {
        this.inventoryInterestsService = inventoryInterestsService;
    }
    createUserInterest(inventoryItemId, userId, input) {
        return this.inventoryInterestsService.createUserInterest(userId, inventoryItemId, input);
    }
    getUserSentInterests(userId) {
        return this.inventoryInterestsService.getUserSentInterests(userId);
    }
    getUserReceivedInterests(userId) {
        return this.inventoryInterestsService.getUserReceivedInterests(userId);
    }
    updateUserInterest(interestId, userId, input) {
        return this.inventoryInterestsService.updateUserInterest(userId, interestId, input);
    }
    withdrawUserInterest(interestId, userId) {
        return this.inventoryInterestsService.withdrawUserInterest(userId, interestId);
    }
    dismissReceivedInterest(interestId, ownerUserId) {
        return this.inventoryInterestsService.dismissReceivedInterest(ownerUserId, interestId);
    }
};
exports.InventoryInterestsController = InventoryInterestsController;
__decorate([
    (0, common_1.Post)("inventory/:inventoryItemId/users/:userId"),
    __param(0, (0, common_1.Param)("inventoryItemId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.createInventoryItemInterestSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], InventoryInterestsController.prototype, "createUserInterest", null);
__decorate([
    (0, common_1.Get)("users/:userId/sent"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoryInterestsController.prototype, "getUserSentInterests", null);
__decorate([
    (0, common_1.Get)("users/:userId/received"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoryInterestsController.prototype, "getUserReceivedInterests", null);
__decorate([
    (0, common_1.Patch)(":interestId/users/:userId"),
    __param(0, (0, common_1.Param)("interestId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.updateInventoryItemInterestSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], InventoryInterestsController.prototype, "updateUserInterest", null);
__decorate([
    (0, common_1.Patch)(":interestId/users/:userId/withdraw"),
    __param(0, (0, common_1.Param)("interestId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], InventoryInterestsController.prototype, "withdrawUserInterest", null);
__decorate([
    (0, common_1.Patch)(":interestId/owners/:ownerUserId/dismiss"),
    __param(0, (0, common_1.Param)("interestId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("ownerUserId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], InventoryInterestsController.prototype, "dismissReceivedInterest", null);
exports.InventoryInterestsController = InventoryInterestsController = __decorate([
    (0, common_1.Controller)("inventory-interests"),
    __metadata("design:paramtypes", [inventory_interests_service_1.InventoryInterestsService])
], InventoryInterestsController);
