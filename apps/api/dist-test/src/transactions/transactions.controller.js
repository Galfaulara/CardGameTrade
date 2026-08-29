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
exports.TransactionsController = void 0;
const common_1 = require("@nestjs/common");
const validation_1 = require("@repo/validation");
const zod_validation_pipe_1 = require("../common/pipes/zod-validation.pipe");
const transactions_service_1 = require("./transactions.service");
let TransactionsController = class TransactionsController {
    transactionsService;
    constructor(transactionsService) {
        this.transactionsService = transactionsService;
    }
    getUserTransactions(userId, query) {
        return this.transactionsService.getUserTransactions(userId, query);
    }
    getUserTransaction(transactionId, userId) {
        return this.transactionsService.getUserTransaction(userId, transactionId);
    }
};
exports.TransactionsController = TransactionsController;
__decorate([
    (0, common_1.Get)("users/:userId"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.gameScopedListQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TransactionsController.prototype, "getUserTransactions", null);
__decorate([
    (0, common_1.Get)(":transactionId/users/:userId"),
    __param(0, (0, common_1.Param)("transactionId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TransactionsController.prototype, "getUserTransaction", null);
exports.TransactionsController = TransactionsController = __decorate([
    (0, common_1.Controller)("transactions"),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
], TransactionsController);
