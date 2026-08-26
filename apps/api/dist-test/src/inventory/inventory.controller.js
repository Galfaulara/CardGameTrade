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
exports.InventoryController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const validation_1 = require("@repo/validation");
const zod_validation_pipe_1 = require("../common/pipes/zod-validation.pipe");
const inventory_service_1 = require("./inventory.service");
let InventoryController = class InventoryController {
    inventoryService;
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    getUserInventory(userId) {
        return this.inventoryService.getUserInventory(userId);
    }
    createUserInventoryItem(userId, input) {
        return this.inventoryService.createUserInventoryItem(userId, input);
    }
    getUserCollections(userId) {
        return this.inventoryService.getUserCollections(userId);
    }
    createUserCollection(userId, input) {
        return this.inventoryService.createUserCollection(userId, input);
    }
    setUserInventoryCollection(userId, itemId, input) {
        return this.inventoryService.setUserInventoryCollection(userId, itemId, input);
    }
    updateUserInventoryItem(userId, itemId, input) {
        return this.inventoryService.updateUserInventoryItem(userId, itemId, input);
    }
    uploadUserInventoryPhoto(userId, itemId, input, file) {
        return this.inventoryService.uploadUserInventoryPhoto(userId, itemId, input, file);
    }
};
exports.InventoryController = InventoryController;
__decorate([
    (0, common_1.Get)("users/:userId/items"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "getUserInventory", null);
__decorate([
    (0, common_1.Post)("users/:userId/items"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.createUserInventoryItemSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "createUserInventoryItem", null);
__decorate([
    (0, common_1.Get)("users/:userId/collections"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "getUserCollections", null);
__decorate([
    (0, common_1.Post)("users/:userId/collections"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.createUserCollectionSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "createUserCollection", null);
__decorate([
    (0, common_1.Patch)("users/:userId/items/:itemId/collection"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("itemId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.setInventoryCollectionSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "setUserInventoryCollection", null);
__decorate([
    (0, common_1.Patch)("users/:userId/items/:itemId"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("itemId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.updateUserInventoryItemSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "updateUserInventoryItem", null);
__decorate([
    (0, common_1.Post)("users/:userId/items/:itemId/photos"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file", {
        limits: {
            fileSize: 6 * 1024 * 1024,
        },
    })),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("itemId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.createInventoryPhotoSchema))),
    __param(3, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", void 0)
], InventoryController.prototype, "uploadUserInventoryPhoto", null);
exports.InventoryController = InventoryController = __decorate([
    (0, common_1.Controller)("inventory"),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
