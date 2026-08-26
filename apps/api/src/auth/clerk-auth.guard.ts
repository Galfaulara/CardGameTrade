import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import type { Request } from "express";
import { ClerkAuthService } from "./clerk-auth.service";

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  constructor(private readonly auth: ClerkAuthService) {}
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();
    const principal = await this.auth.authenticate(request);
    if (!principal) throw new UnauthorizedException("Authentication is required.");
    request.authenticatedPrincipal = principal;
    return true;
  }
}
