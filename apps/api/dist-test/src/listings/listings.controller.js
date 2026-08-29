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
exports.ListingsController = void 0;
const common_1 = require("@nestjs/common");
const validation_1 = require("@repo/validation");
const zod_validation_pipe_1 = require("../common/pipes/zod-validation.pipe");
const listings_service_1 = require("./listings.service");
const public_decorator_1 = require("../auth/public.decorator");
let ListingsController = class ListingsController {
    listingsService;
    constructor(listingsService) {
        this.listingsService = listingsService;
    }
    getActiveListings(query) {
        return this.listingsService.getActiveListings(query.gameSlug);
    }
    getListing(listingId) {
        return this.listingsService.getListing(listingId);
    }
    getUserListings(userId, query) {
        return this.listingsService.getUserListings(userId, query.gameSlug);
    }
    createUserListing(userId, input) {
        return this.listingsService.createUserListing(userId, input);
    }
    updateUserListing(userId, listingId, input) {
        return this.listingsService.updateUserListing(userId, listingId, input);
    }
    setUserListingStatus(userId, listingId, input) {
        return this.listingsService.setUserListingStatus(userId, listingId, input);
    }
};
exports.ListingsController = ListingsController;
__decorate([
    (0, common_1.Get)(),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.listingListQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ListingsController.prototype, "getActiveListings", null);
__decorate([
    (0, common_1.Get)(":listingId"),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Param)("listingId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ListingsController.prototype, "getListing", null);
__decorate([
    (0, common_1.Get)("users/:userId"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.listingListQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ListingsController.prototype, "getUserListings", null);
__decorate([
    (0, common_1.Post)("users/:userId"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.createUserListingSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ListingsController.prototype, "createUserListing", null);
__decorate([
    (0, common_1.Patch)("users/:userId/:listingId"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("listingId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.updateUserListingSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], ListingsController.prototype, "updateUserListing", null);
__decorate([
    (0, common_1.Patch)("users/:userId/:listingId/status"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("listingId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.setUserListingStatusSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], ListingsController.prototype, "setUserListingStatus", null);
exports.ListingsController = ListingsController = __decorate([
    (0, common_1.Controller)("listings"),
    __metadata("design:paramtypes", [listings_service_1.ListingsService])
], ListingsController);
