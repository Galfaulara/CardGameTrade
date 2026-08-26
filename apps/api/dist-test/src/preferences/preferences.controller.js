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
exports.PreferencesController = void 0;
const common_1 = require("@nestjs/common");
const validation_1 = require("@repo/validation");
const zod_validation_pipe_1 = require("../common/pipes/zod-validation.pipe");
const preferences_service_1 = require("./preferences.service");
let PreferencesController = class PreferencesController {
    preferencesService;
    constructor(preferencesService) {
        this.preferencesService = preferencesService;
    }
    getPreferredTradeStore(userId) {
        return this.preferencesService.getPreferredTradeStore(userId);
    }
    setPreferredTradeStore(userId, input) {
        return this.preferencesService.setPreferredTradeStore(userId, input);
    }
};
exports.PreferencesController = PreferencesController;
__decorate([
    (0, common_1.Get)("users/:userId/trade-store"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PreferencesController.prototype, "getPreferredTradeStore", null);
__decorate([
    (0, common_1.Patch)("users/:userId/trade-store"),
    __param(0, (0, common_1.Param)("userId", new common_1.ParseUUIDPipe({
        version: "4",
    }))),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.setPreferredTradeStoreSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PreferencesController.prototype, "setPreferredTradeStore", null);
exports.PreferencesController = PreferencesController = __decorate([
    (0, common_1.Controller)("preferences"),
    __metadata("design:paramtypes", [preferences_service_1.PreferencesService])
], PreferencesController);
