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
exports.WishlistsController = void 0;
const common_1 = require("@nestjs/common");
const validation_1 = require("@repo/validation");
const zod_validation_pipe_1 = require("../common/pipes/zod-validation.pipe");
const wishlists_service_1 = require("./wishlists.service");
const public_decorator_1 = require("../auth/public.decorator");
let WishlistsController = class WishlistsController {
    wishlistsService;
    constructor(wishlistsService) {
        this.wishlistsService = wishlistsService;
    }
    getPublicWishlistItems(query) {
        return this.wishlistsService.getPublicWishlistItems(query);
    }
    getUserWishlists(userId, query) {
        return this.wishlistsService.getUserWishlists(userId, query);
    }
    getUserWishlist(wishlistId, userId) {
        return this.wishlistsService.getUserWishlist(userId, wishlistId);
    }
    createUserWishlist(userId, input) {
        return this.wishlistsService.createUserWishlist(userId, input);
    }
    updateUserWishlist(wishlistId, userId, input) {
        return this.wishlistsService.updateUserWishlist(userId, wishlistId, input);
    }
    createWishlistItem(wishlistId, userId, input) {
        return this.wishlistsService.createWishlistItem(userId, wishlistId, input);
    }
    updateWishlistItem(wishlistId, itemId, userId, input) {
        return this.wishlistsService.updateWishlistItem(userId, wishlistId, itemId, input);
    }
    createUserWishlistOffer(wishlistItemId, userId, input) {
        return this.wishlistsService.createUserWishlistOffer(userId, wishlistItemId, input);
    }
    createUserWishlistOfferFromInterest(wishlistItemId, userId, interestId, input) {
        return this.wishlistsService.createUserWishlistOffer(userId, wishlistItemId, input, interestId);
    }
    getUserSentWishlistOffers(userId, query) {
        return this.wishlistsService.getUserSentWishlistOffers(userId, query);
    }
    getUserReceivedWishlistOffers(wishlistItemId, userId) {
        return this.wishlistsService.getUserReceivedWishlistOffers(userId, wishlistItemId);
    }
    withdrawUserWishlistOffer(offerId, userId) {
        return this.wishlistsService.withdrawUserWishlistOffer(userId, offerId);
    }
    acceptUserWishlistOffer(offerId, userId, input) {
        return this.wishlistsService.acceptUserWishlistOffer(userId, offerId, input);
    }
    rejectUserWishlistOffer(offerId, userId) {
        return this.wishlistsService.rejectUserWishlistOffer(userId, offerId);
    }
};
exports.WishlistsController = WishlistsController;
__decorate([
    (0, common_1.Get)("public/items"),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.gameScopedListQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "getPublicWishlistItems", null);
__decorate([
    (0, common_1.Get)("users/:userId"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.gameScopedListQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "getUserWishlists", null);
__decorate([
    (0, common_1.Get)(":wishlistId/users/:userId"),
    __param(0, (0, common_1.Param)("wishlistId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "getUserWishlist", null);
__decorate([
    (0, common_1.Post)("users/:userId"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.createUserWishlistSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "createUserWishlist", null);
__decorate([
    (0, common_1.Patch)(":wishlistId/users/:userId"),
    __param(0, (0, common_1.Param)("wishlistId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.updateUserWishlistSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "updateUserWishlist", null);
__decorate([
    (0, common_1.Post)(":wishlistId/users/:userId/items"),
    __param(0, (0, common_1.Param)("wishlistId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.createWishlistItemSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "createWishlistItem", null);
__decorate([
    (0, common_1.Patch)(":wishlistId/items/:itemId/users/:userId"),
    __param(0, (0, common_1.Param)("wishlistId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("itemId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(3, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.updateWishlistItemSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "updateWishlistItem", null);
__decorate([
    (0, common_1.Post)("items/:wishlistItemId/offers/users/:userId"),
    __param(0, (0, common_1.Param)("wishlistItemId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.createWishlistOfferSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "createUserWishlistOffer", null);
__decorate([
    (0, common_1.Post)("items/:wishlistItemId/offers/users/:userId/from-interest/:interestId"),
    __param(0, (0, common_1.Param)("wishlistItemId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Param)("interestId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(3, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.createWishlistOfferSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "createUserWishlistOfferFromInterest", null);
__decorate([
    (0, common_1.Get)("offers/users/:userId/sent"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.gameScopedListQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "getUserSentWishlistOffers", null);
__decorate([
    (0, common_1.Get)("items/:wishlistItemId/offers/users/:userId/received"),
    __param(0, (0, common_1.Param)("wishlistItemId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "getUserReceivedWishlistOffers", null);
__decorate([
    (0, common_1.Patch)("offers/:offerId/users/:userId/withdraw"),
    __param(0, (0, common_1.Param)("offerId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "withdrawUserWishlistOffer", null);
__decorate([
    (0, common_1.Post)("offers/:offerId/users/:userId/accept"),
    __param(0, (0, common_1.Param)("offerId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.acceptWishlistOfferSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "acceptUserWishlistOffer", null);
__decorate([
    (0, common_1.Patch)("offers/:offerId/users/:userId/reject"),
    __param(0, (0, common_1.Param)("offerId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "rejectUserWishlistOffer", null);
exports.WishlistsController = WishlistsController = __decorate([
    (0, common_1.Controller)("wishlists"),
    __metadata("design:paramtypes", [wishlists_service_1.WishlistsService])
], WishlistsController);
