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
exports.CatalogController = void 0;
const common_1 = require("@nestjs/common");
const catalog_service_1 = require("./catalog.service");
const public_decorator_1 = require("../auth/public.decorator");
let CatalogController = class CatalogController {
    catalogService;
    constructor(catalogService) {
        this.catalogService = catalogService;
    }
    getGames() {
        return this.catalogService.getGames();
    }
    getSetsByGame(gameId) {
        return this.catalogService.getSetsByGame(gameId);
    }
    searchCards(gameId, query) {
        return this.catalogService.searchCards(gameId, query ?? "");
    }
    searchCanonicalCards(gameId, query = "", page = "1", pageSize = "60") {
        return this.catalogService.searchCanonicalCards(gameId, query, page, pageSize);
    }
    getCardDetail(canonicalCardId, printingId) {
        return this.catalogService.getCardDetail(canonicalCardId, printingId);
    }
    getCardListings(canonicalCardId, printingId = "", page = "1", pageSize = "12") {
        return this.catalogService.getCardListings(canonicalCardId, printingId, page, pageSize);
    }
    getPrintingsByCanonicalCard(canonicalCardId) {
        return this.catalogService.getPrintingsByCanonicalCard(canonicalCardId);
    }
    getPrintingFinishes(printingId) {
        return this.catalogService.getPrintingFinishes(printingId);
    }
};
exports.CatalogController = CatalogController;
__decorate([
    (0, common_1.Get)("games"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "getGames", null);
__decorate([
    (0, common_1.Get)("games/:gameId/sets"),
    __param(0, (0, common_1.Param)("gameId", new common_1.ParseUUIDPipe({ version: "4" }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "getSetsByGame", null);
__decorate([
    (0, common_1.Get)("games/:gameId/cards"),
    __param(0, (0, common_1.Param)("gameId", new common_1.ParseUUIDPipe({ version: "4" }))),
    __param(1, (0, common_1.Query)("q")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "searchCards", null);
__decorate([
    (0, common_1.Get)("games/:gameId/search"),
    __param(0, (0, common_1.Param)("gameId", new common_1.ParseUUIDPipe({ version: "4" }))),
    __param(1, (0, common_1.Query)("q")),
    __param(2, (0, common_1.Query)("page")),
    __param(3, (0, common_1.Query)("pageSize")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "searchCanonicalCards", null);
__decorate([
    (0, common_1.Get)("cards/:canonicalCardId"),
    __param(0, (0, common_1.Param)("canonicalCardId", new common_1.ParseUUIDPipe({ version: "4" }))),
    __param(1, (0, common_1.Query)("printing")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "getCardDetail", null);
__decorate([
    (0, common_1.Get)("cards/:canonicalCardId/listings"),
    __param(0, (0, common_1.Param)("canonicalCardId", new common_1.ParseUUIDPipe({ version: "4" }))),
    __param(1, (0, common_1.Query)("printing")),
    __param(2, (0, common_1.Query)("page")),
    __param(3, (0, common_1.Query)("pageSize")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, Object]),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "getCardListings", null);
__decorate([
    (0, common_1.Get)("cards/:canonicalCardId/printings"),
    __param(0, (0, common_1.Param)("canonicalCardId", new common_1.ParseUUIDPipe({ version: "4" }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "getPrintingsByCanonicalCard", null);
__decorate([
    (0, common_1.Get)("printings/:printingId/finishes"),
    __param(0, (0, common_1.Param)("printingId", new common_1.ParseUUIDPipe({ version: "4" }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatalogController.prototype, "getPrintingFinishes", null);
exports.CatalogController = CatalogController = __decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Controller)("catalog"),
    __metadata("design:paramtypes", [catalog_service_1.CatalogService])
], CatalogController);
