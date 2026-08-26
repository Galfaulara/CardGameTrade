import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ClerkAuthService } from "./clerk-auth.service";
export declare class DeckDealAuthorizationGuard implements CanActivate {
    private readonly reflector;
    private readonly auth;
    constructor(reflector: Reflector, auth: ClerkAuthService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
//# sourceMappingURL=deckdeal-authorization.guard.d.ts.map