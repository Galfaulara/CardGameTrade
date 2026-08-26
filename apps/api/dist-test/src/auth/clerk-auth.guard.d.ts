import { CanActivate, ExecutionContext } from "@nestjs/common";
import { ClerkAuthService } from "./clerk-auth.service";
export declare class ClerkAuthGuard implements CanActivate {
    private readonly auth;
    constructor(auth: ClerkAuthService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
//# sourceMappingURL=clerk-auth.guard.d.ts.map