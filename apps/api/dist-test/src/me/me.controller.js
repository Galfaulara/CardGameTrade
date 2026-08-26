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
exports.MeController = void 0;
const common_1 = require("@nestjs/common");
const validation_1 = require("@repo/validation");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const zod_validation_pipe_1 = require("../common/pipes/zod-validation.pipe");
const me_service_1 = require("./me.service");
let MeController = class MeController {
    meService;
    constructor(meService) {
        this.meService = meService;
    }
    getProfile(principal) {
        return this.meService.getProfile(principal.deckdealUserId);
    }
    updateProfile(principal, input) {
        return this.meService.updateProfile(principal.deckdealUserId, input);
    }
    getProfileStoreOptions(query) {
        return this.meService.getProfileStoreOptions(query);
    }
};
exports.MeController = MeController;
__decorate([
    (0, common_1.Get)("profile"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MeController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Patch)("profile"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.updateMyProfileSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MeController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Get)("profile/store-options"),
    __param(0, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.myProfileStoreOptionsQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MeController.prototype, "getProfileStoreOptions", null);
exports.MeController = MeController = __decorate([
    (0, common_1.Controller)("me"),
    __metadata("design:paramtypes", [me_service_1.MeService])
], MeController);
