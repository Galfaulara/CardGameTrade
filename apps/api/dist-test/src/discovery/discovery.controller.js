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
exports.DiscoveryController = void 0;
const common_1 = require("@nestjs/common");
const validation_1 = require("@repo/validation");
const zod_validation_pipe_1 = require("../common/pipes/zod-validation.pipe");
const public_decorator_1 = require("../auth/public.decorator");
const discovery_service_1 = require("./discovery.service");
let DiscoveryController = class DiscoveryController {
    discoveryService;
    constructor(discoveryService) {
        this.discoveryService = discoveryService;
    }
    getCollectionFeed(query) {
        return this.discoveryService.getCollectionFeed(query);
    }
    getStoreFeed(query) {
        return this.discoveryService.getStoreFeed(query);
    }
    getListingFeed(query) {
        return this.discoveryService.getListingFeed(query);
    }
    getUser(userId) {
        return this.discoveryService.getUser(userId);
    }
    getUserCollections(userId, query) {
        return this.discoveryService.getUserCollections(userId, query);
    }
    getUserListings(userId, query) {
        return this.discoveryService.getUserListings(userId, query);
    }
    getUserWishlists(userId, query) {
        return this.discoveryService.getUserWishlists(userId, query);
    }
    getCollections(query) {
        return this.discoveryService.getCollections(query);
    }
    getCollection(collectionId, query) {
        return this.discoveryService.getCollection(collectionId, query);
    }
    getStores(query) {
        return this.discoveryService.getStores(query);
    }
    getStoreInventory(storeId, query) {
        return this.discoveryService.getStoreInventory(storeId, query);
    }
    getStoreListings(storeId, query) {
        return this.discoveryService.getStoreListings(storeId, query);
    }
    getStore(storeId) {
        return this.discoveryService.getStore(storeId);
    }
};
exports.DiscoveryController = DiscoveryController;
__decorate([
    (0, common_1.Get)("feed/collections"),
    __param(0, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.discoveryCollectionFeedQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DiscoveryController.prototype, "getCollectionFeed", null);
__decorate([
    (0, common_1.Get)("feed/stores"),
    __param(0, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.discoveryStoreFeedQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DiscoveryController.prototype, "getStoreFeed", null);
__decorate([
    (0, common_1.Get)("feed/listings"),
    __param(0, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.discoveryListingFeedQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DiscoveryController.prototype, "getListingFeed", null);
__decorate([
    (0, common_1.Get)("users/:userId"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({ version: "4" }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiscoveryController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)("users/:userId/collections"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({ version: "4" }))),
    __param(1, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.discoveryUserCollectionQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DiscoveryController.prototype, "getUserCollections", null);
__decorate([
    (0, common_1.Get)("users/:userId/listings"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({ version: "4" }))),
    __param(1, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.discoveryUserListingQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DiscoveryController.prototype, "getUserListings", null);
__decorate([
    (0, common_1.Get)("users/:userId/wishlists"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({ version: "4" }))),
    __param(1, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.discoveryUserWishlistQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DiscoveryController.prototype, "getUserWishlists", null);
__decorate([
    (0, common_1.Get)("collections"),
    __param(0, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.discoveryCollectionListQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DiscoveryController.prototype, "getCollections", null);
__decorate([
    (0, common_1.Get)("collections/:collectionId"),
    __param(0, (0, common_1.Param)("collectionId", new common_1.ParseUUIDPipe({ version: "4" }))),
    __param(1, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.discoveryInventoryPageQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DiscoveryController.prototype, "getCollection", null);
__decorate([
    (0, common_1.Get)("stores"),
    __param(0, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.discoveryStoreListQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DiscoveryController.prototype, "getStores", null);
__decorate([
    (0, common_1.Get)("stores/:storeId/inventory"),
    __param(0, (0, common_1.Param)("storeId", new common_1.ParseUUIDPipe({ version: "4" }))),
    __param(1, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.discoveryInventoryPageQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DiscoveryController.prototype, "getStoreInventory", null);
__decorate([
    (0, common_1.Get)("stores/:storeId/listings"),
    __param(0, (0, common_1.Param)("storeId", new common_1.ParseUUIDPipe({ version: "4" }))),
    __param(1, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.discoveryUserListingQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DiscoveryController.prototype, "getStoreListings", null);
__decorate([
    (0, common_1.Get)("stores/:storeId"),
    __param(0, (0, common_1.Param)("storeId", new common_1.ParseUUIDPipe({ version: "4" }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiscoveryController.prototype, "getStore", null);
exports.DiscoveryController = DiscoveryController = __decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Controller)("discovery"),
    __metadata("design:paramtypes", [discovery_service_1.DiscoveryService])
], DiscoveryController);
