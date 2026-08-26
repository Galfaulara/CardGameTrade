import {
  Body,
  Controller,
  Get,
  Post,
  Query,
} from "@nestjs/common";
import {
  completeOnboardingSchema,
  onboardingUsernameAvailabilityQuerySchema,
} from "@repo/validation";
import type {
  CompleteOnboardingInput,
  OnboardingUsernameAvailabilityQuery,
} from "@repo/validation";
import { CurrentUser } from "../auth/current-user.decorator";
import { AllowUnmappedDeckDealUser } from "../auth/public.decorator";
import type { AuthenticatedPrincipal } from "../auth/auth.types";
import { ZodValidationPipe } from "../common/pipes/zod-validation.pipe";
import { OnboardingService } from "./onboarding.service";

@Controller("onboarding")
@AllowUnmappedDeckDealUser()
export class OnboardingController {
  constructor(private readonly onboarding: OnboardingService) {}

  @Get("username-availability")
  getUsernameAvailability(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Query(new ZodValidationPipe(onboardingUsernameAvailabilityQuerySchema))
    query: OnboardingUsernameAvailabilityQuery,
  ) {
    return this.onboarding.getUsernameAvailability(principal, query);
  }

  @Post("complete")
  complete(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Body(new ZodValidationPipe(completeOnboardingSchema))
    input: CompleteOnboardingInput,
  ) {
    return this.onboarding.complete(principal, input);
  }
}
