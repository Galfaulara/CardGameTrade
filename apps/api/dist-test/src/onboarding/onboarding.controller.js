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
exports.OnboardingController = void 0;
const common_1 = require("@nestjs/common");
const validation_1 = require("@repo/validation");
const current_user_decorator_1 = require("../auth/current-user.decorator");
const public_decorator_1 = require("../auth/public.decorator");
const zod_validation_pipe_1 = require("../common/pipes/zod-validation.pipe");
const onboarding_service_1 = require("./onboarding.service");
let OnboardingController = class OnboardingController {
    onboarding;
    constructor(onboarding) {
        this.onboarding = onboarding;
    }
    getUsernameAvailability(principal, query) {
        return this.onboarding.getUsernameAvailability(principal, query);
    }
    complete(principal, input) {
        return this.onboarding.complete(principal, input);
    }
};
exports.OnboardingController = OnboardingController;
__decorate([
    (0, common_1.Get)("username-availability"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.onboardingUsernameAvailabilityQuerySchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], OnboardingController.prototype, "getUsernameAvailability", null);
__decorate([
    (0, common_1.Post)("complete"),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)(new zod_validation_pipe_1.ZodValidationPipe(validation_1.completeOnboardingSchema))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], OnboardingController.prototype, "complete", null);
exports.OnboardingController = OnboardingController = __decorate([
    (0, common_1.Controller)("onboarding"),
    (0, public_decorator_1.AllowUnmappedDeckDealUser)(),
    __metadata("design:paramtypes", [onboarding_service_1.OnboardingService])
], OnboardingController);
