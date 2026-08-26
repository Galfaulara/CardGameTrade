import { Controller, Get } from "@nestjs/common";
import type { AuthenticatedPrincipal } from "./auth.types";
import { ClerkAuthService } from "./clerk-auth.service";
import { CurrentUser } from "./current-user.decorator";
import { AllowUnmappedDeckDealUser } from "./public.decorator";

@Controller("auth")
export class AuthController {
  constructor(private readonly auth: ClerkAuthService) {}
  @Get("me")
  @AllowUnmappedDeckDealUser()
  getMe(@CurrentUser() principal: AuthenticatedPrincipal) {
    return this.auth.currentUser(principal);
  }
}
