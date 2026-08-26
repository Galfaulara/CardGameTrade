import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { AuthController } from "./auth.controller";
import { ClerkAuthGuard } from "./clerk-auth.guard";
import { ClerkAuthService } from "./clerk-auth.service";
import { DeckDealAuthorizationGuard } from "./deckdeal-authorization.guard";

@Module({ imports: [DatabaseModule], controllers: [AuthController], providers: [ClerkAuthService, ClerkAuthGuard, DeckDealAuthorizationGuard], exports: [ClerkAuthService, ClerkAuthGuard, DeckDealAuthorizationGuard] })
export class AuthModule {}
