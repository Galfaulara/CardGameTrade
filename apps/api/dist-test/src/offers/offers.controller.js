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
exports.OffersController = void 0;
const common_1 = require("@nestjs/common");
const validation_1 = require("@repo/validation");
const zod_validation_pipe_1 = require("../common/pipes/zod-validation.pipe");
const offers_service_1 = require("./offers.service");
let OffersController = class OffersController {
    offersService;
    constructor(offersService) {
        this.offersService = offersService;
    }
    createUserOffer(listingId, userId, input) {
        return this.offersService.createUserOffer(userId, listingId, input);
    }
    createUserOfferFromInterest(listingId, userId, interestId, input) {
        return this.offersService.createUserOffer(userId, listingId, input, interestId);
    }
    getUserSentOffers(userId) {
        return this.offersService.getUserSentOffers(userId);
    }
    getUserReceivedOffers(listingId, userId) {
        return this.offersService.getUserReceivedOffers(userId, listingId);
    }
    withdrawUserOffer(offerId, userId) {
        return this.offersService.withdrawUserOffer(userId, offerId);
    }
    rejectUserOffer(offerId, userId) {
        return this.offersService.rejectUserOffer(userId, offerId);
    }
    acceptUserOffer(offerId, userId, input) {
        return this.offersService.acceptUserOffer(userId, offerId, input);
    }
};
exports.OffersController = OffersController;
__decorate([
    (0, common_1.Post)("listings/:listingId/users/:userId"),
    __param(0, (0, common_1.Param)("listingId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.createListingOfferSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], OffersController.prototype, "createUserOffer", null);
__decorate([
    (0, common_1.Post)("listings/:listingId/users/:userId/from-interest/:interestId"),
    __param(0, (0, common_1.Param)("listingId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Param)("interestId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(3, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.createListingOfferSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", void 0)
], OffersController.prototype, "createUserOfferFromInterest", null);
__decorate([
    (0, common_1.Get)("users/:userId/sent"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OffersController.prototype, "getUserSentOffers", null);
__decorate([
    (0, common_1.Get)("listings/:listingId/users/:userId/received"),
    __param(0, (0, common_1.Param)("listingId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], OffersController.prototype, "getUserReceivedOffers", null);
__decorate([
    (0, common_1.Patch)(":offerId/users/:userId/withdraw"),
    __param(0, (0, common_1.Param)("offerId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], OffersController.prototype, "withdrawUserOffer", null);
__decorate([
    (0, common_1.Patch)(":offerId/users/:userId/reject"),
    __param(0, (0, common_1.Param)("offerId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], OffersController.prototype, "rejectUserOffer", null);
__decorate([
    (0, common_1.Post)(":offerId/users/:userId/accept"),
    __param(0, (0, common_1.Param)("offerId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.acceptListingOfferSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], OffersController.prototype, "acceptUserOffer", null);
exports.OffersController = OffersController = __decorate([
    (0, common_1.Controller)("offers"),
    __metadata("design:paramtypes", [offers_service_1.OffersService])
], OffersController);
