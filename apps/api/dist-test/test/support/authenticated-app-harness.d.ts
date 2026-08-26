import "reflect-metadata";
import type { INestApplication } from "@nestjs/common";
import request from "supertest";
import type { AuthenticatedPrincipal } from "../../src/auth/auth.types";
export declare const USER_1_ID = "16e1b0bc-3b75-4a82-a7e4-b6a88a6cbc2e";
export declare const USER_2_ID = "92d9585a-7c59-4c02-8ee4-a9c24b9787d0";
export declare const activePrincipal: (deckdealUserId: string) => AuthenticatedPrincipal;
export type AuthenticatedHarness = {
    app: INestApplication;
    http: ReturnType<typeof request>;
    as(principal: AuthenticatedPrincipal | null): ReturnType<typeof request>;
    close(): Promise<void>;
};
export declare function createAuthenticatedHarness(): Promise<AuthenticatedHarness>;
//# sourceMappingURL=authenticated-app-harness.d.ts.map