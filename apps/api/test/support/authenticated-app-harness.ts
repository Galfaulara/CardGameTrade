import "reflect-metadata";
import { Test } from "@nestjs/testing";
import type { INestApplication } from "@nestjs/common";
import { createDbClient } from "@repo/db";
import request from "supertest";
import { AppModule } from "../../src/app.module";
import { ClerkAuthService } from "../../src/auth/clerk-auth.service";
import type { AuthenticatedPrincipal } from "../../src/auth/auth.types";
import { SupabaseStorageService } from "../../src/storage/supabase-storage.service";

export const USER_1_ID = "16e1b0bc-3b75-4a82-a7e4-b6a88a6cbc2e";
export const USER_2_ID = "92d9585a-7c59-4c02-8ee4-a9c24b9787d0";

export const activePrincipal = (deckdealUserId: string): AuthenticatedPrincipal => ({
  provider: "clerk",
  providerSubject: `test-clerk-${deckdealUserId}`,
  deckdealUserId,
  sessionId: `test-session-${deckdealUserId}`,
  accountStatus: "active",
});

class TestAuthenticationBoundary {
  principal: AuthenticatedPrincipal | null = null;
  private readonly db = createDbClient(process.env.DATABASE_URL!);

  async connect() {
    await this.db.$connect();
  }

  async disconnect() {
    await this.db.$disconnect();
  }

  private emailForSubject(providerSubject: string) {
    if (providerSubject.startsWith("shared-email:")) {
      return "shared-email@deckdeal.test";
    }

    return `${providerSubject.replace(/[^a-zA-Z0-9_-]/g, "_")}@deckdeal.test`;
  }

  async authenticate() {
    if (!this.principal) {
      return null;
    }

    if (this.principal.deckdealUserId) {
      return this.principal;
    }

    const mapped = await this.db.user_profiles.findUnique({
      where: {
        auth_provider_auth_user_id: {
          auth_provider: "clerk",
          auth_user_id: this.principal.providerSubject,
        },
      },
      select: {
        id: true,
        status: true,
      },
    });

    return {
      ...this.principal,
      deckdealUserId: mapped?.id ?? null,
      accountStatus: mapped?.status ?? null,
    };
  }

  async getPrimaryEmailAddress(providerSubject: string) {
    return this.emailForSubject(providerSubject);
  }

  async currentUser(principal: AuthenticatedPrincipal) {
    const resolved = principal.deckdealUserId
      ? principal
      : await this.authenticate();

    if (!resolved?.deckdealUserId) {
      return { authenticated: true, onboarded: false };
    }

    const user = await this.db.user_profiles.findUnique({
      where: {
        id: resolved.deckdealUserId,
      },
      select: {
        id: true,
        display_name: true,
        username: true,
        status: true,
      },
    });

    if (!user) {
      return { authenticated: true, onboarded: false };
    }

    if (resolved.accountStatus !== "active" || user.status !== "active") {
      return {
        authenticated: true,
        onboarded: true,
        account_status: "disabled",
        user: {
          id: user.id,
          display_name: user.display_name,
          username: user.username,
        },
      };
    }

    return {
      authenticated: true,
      onboarded: true,
      account_status: "active",
      user: {
        id: user.id,
        display_name: user.display_name,
        username: user.username,
      },
    };
  }
}

export type AuthenticatedHarness = {
  app: INestApplication;
  http: ReturnType<typeof request>;
  as(principal: AuthenticatedPrincipal | null): ReturnType<typeof request>;
  close(): Promise<void>;
};

export async function createAuthenticatedHarness(): Promise<AuthenticatedHarness> {
  const authentication = new TestAuthenticationBoundary();
  await authentication.connect();
  const moduleRef = await Test.createTestingModule({ imports: [AppModule] })
    .overrideProvider(ClerkAuthService)
    .useValue(authentication)
    .overrideProvider(SupabaseStorageService)
    .useValue({ provider: "test", upload: async () => undefined, remove: async () => undefined, createSignedUrl: async () => "https://example.invalid/test" })
    .compile();
  const app = moduleRef.createNestApplication();
  app.setGlobalPrefix("api");
  await app.init();
  const http = request(app.getHttpServer());
  return {
    app,
    http,
    as(principal) {
      authentication.principal = principal;
      return http;
    },
    async close() {
      await app.close();
      await authentication.disconnect();
    },
  };
}
