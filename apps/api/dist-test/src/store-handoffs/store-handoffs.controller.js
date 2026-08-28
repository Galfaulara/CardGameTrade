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
exports.StoreHandoffsController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const store_handoffs_service_1 = require("./store-handoffs.service");
let StoreHandoffsController = class StoreHandoffsController {
    storeHandoffsService;
    constructor(storeHandoffsService) {
        this.storeHandoffsService = storeHandoffsService;
    }
    requireCurrentStaff(principal, requestedStaffUserId) {
        const actorUserId = principal.deckdealUserId;
        if (!actorUserId) {
            throw new common_1.ForbiddenException("An active DeckDeal user is required for Store operations.");
        }
        if (requestedStaffUserId &&
            requestedStaffUserId !== actorUserId) {
            throw new common_1.ForbiddenException("Store operations must use the authenticated staff identity.");
        }
        return actorUserId;
    }
    getStoreHandoffs(storeId, principal) {
        return this.storeHandoffsService.getStoreHandoffs(storeId, this.requireCurrentStaff(principal));
    }
    getHandoff(handoffId, principal) {
        return this.storeHandoffsService.getHandoff(handoffId, this.requireCurrentStaff(principal));
    }
    receiveItemForCurrentStaff(handoffId, transactionItemId, principal) {
        return this.storeHandoffsService.receiveItem(handoffId, transactionItemId, this.requireCurrentStaff(principal));
    }
    receiveItem(handoffId, transactionItemId, staffUserId, principal) {
        return this.storeHandoffsService.receiveItem(handoffId, transactionItemId, this.requireCurrentStaff(principal, staffUserId));
    }
    verifyItemForCurrentStaff(handoffId, transactionItemId, principal) {
        return this.storeHandoffsService.verifyItem(handoffId, transactionItemId, this.requireCurrentStaff(principal));
    }
    verifyItem(handoffId, transactionItemId, staffUserId, principal) {
        return this.storeHandoffsService.verifyItem(handoffId, transactionItemId, this.requireCurrentStaff(principal, staffUserId));
    }
    releaseItemForCurrentStaff(handoffId, transactionItemId, principal) {
        return this.storeHandoffsService.releaseItem(handoffId, transactionItemId, this.requireCurrentStaff(principal));
    }
    releaseItem(handoffId, transactionItemId, staffUserId, principal) {
        return this.storeHandoffsService.releaseItem(handoffId, transactionItemId, this.requireCurrentStaff(principal, staffUserId));
    }
};
exports.StoreHandoffsController = StoreHandoffsController;
__decorate([
    (0, common_1.Get)("stores/:storeId"),
    __param(0, (0, common_1.Param)("storeId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], StoreHandoffsController.prototype, "getStoreHandoffs", null);
__decorate([
    (0, common_1.Get)(":handoffId"),
    __param(0, (0, common_1.Param)("handoffId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], StoreHandoffsController.prototype, "getHandoff", null);
__decorate([
    (0, common_1.Patch)(":handoffId/items/:transactionItemId/receive"),
    __param(0, (0, common_1.Param)("handoffId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("transactionItemId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], StoreHandoffsController.prototype, "receiveItemForCurrentStaff", null);
__decorate([
    (0, common_1.Patch)(":handoffId/items/:transactionItemId/receive/users/:staffUserId"),
    __param(0, (0, common_1.Param)("handoffId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("transactionItemId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Param)("staffUserId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(3, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", void 0)
], StoreHandoffsController.prototype, "receiveItem", null);
__decorate([
    (0, common_1.Patch)(":handoffId/items/:transactionItemId/verify"),
    __param(0, (0, common_1.Param)("handoffId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("transactionItemId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], StoreHandoffsController.prototype, "verifyItemForCurrentStaff", null);
__decorate([
    (0, common_1.Patch)(":handoffId/items/:transactionItemId/verify/users/:staffUserId"),
    __param(0, (0, common_1.Param)("handoffId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("transactionItemId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Param)("staffUserId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(3, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", void 0)
], StoreHandoffsController.prototype, "verifyItem", null);
__decorate([
    (0, common_1.Patch)(":handoffId/items/:transactionItemId/release"),
    __param(0, (0, common_1.Param)("handoffId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("transactionItemId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], StoreHandoffsController.prototype, "releaseItemForCurrentStaff", null);
__decorate([
    (0, common_1.Patch)(":handoffId/items/:transactionItemId/release/users/:staffUserId"),
    __param(0, (0, common_1.Param)("handoffId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("transactionItemId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(2, (0, common_1.Param)("staffUserId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(3, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", void 0)
], StoreHandoffsController.prototype, "releaseItem", null);
exports.StoreHandoffsController = StoreHandoffsController = __decorate([
    (0, common_1.Controller)("store-handoffs"),
    __metadata("design:paramtypes", [store_handoffs_service_1.StoreHandoffsService])
], StoreHandoffsController);
