import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import type { Request } from "express";
import { ClerkAuthService } from "./clerk-auth.service";
import { ALLOW_UNMAPPED_DECKDEAL_USER_KEY, IS_PUBLIC_KEY } from "./public.decorator";

const LEGACY_ACTOR_PARAMS = ["userId", "ownerUserId", "staffUserId"] as const;

@Injectable()
export class DeckDealAuthorizationGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly auth: ClerkAuthService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const request = context.switchToHttp().getRequest<Request>();
    const principal = await this.auth.authenticate(request);
    if (!principal) throw new UnauthorizedException("Authentication is required.");

    request.authenticatedPrincipal = principal;
    const allowUnmapped = this.reflector.getAllAndOverride<boolean>(
      ALLOW_UNMAPPED_DECKDEAL_USER_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (allowUnmapped) return true;

    if (!principal.deckdealUserId) {
      throw new ForbiddenException("A DeckDeal account is required.");
    }
    if (principal.accountStatus !== "active") {
      throw new ForbiddenException("This DeckDeal account is not active.");
    }

    for (const parameter of LEGACY_ACTOR_PARAMS) {
      const claimedUserId = request.params?.[parameter];
      if (claimedUserId && claimedUserId !== principal.deckdealUserId) {
        throw new ForbiddenException("The requested user identity does not match the authenticated account.");
      }
    }
    return true;
  }
}
