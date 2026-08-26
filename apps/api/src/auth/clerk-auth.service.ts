import { Injectable } from "@nestjs/common";
import { createClerkClient } from "@clerk/backend";
import type { Request as ExpressRequest } from "express";
import { DatabaseService } from "../database/database.service";
import type { AuthenticatedPrincipal } from "./auth.types";

@Injectable()
export class ClerkAuthService {
  constructor(private readonly database: DatabaseService) {}

  private authorizedParties() {
    return (process.env.CLERK_AUTHORIZED_PARTIES ?? "http://localhost:3000")
      .split(",").map((value) => value.trim()).filter(Boolean);
  }

  private publishableKey() {
    return process.env.CLERK_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  }

  private clerkClient() {
    const secretKey = process.env.CLERK_SECRET_KEY;
    const publishableKey = this.publishableKey();
    if (!secretKey || !publishableKey) return null;
    return createClerkClient({ secretKey, publishableKey });
  }

  private requestUrl(request: ExpressRequest) {
    const forwardedProto = request.header("x-forwarded-proto")?.split(",")[0]?.trim();
    const protocol = forwardedProto ?? request.protocol;
    const host = request.header("x-forwarded-host") ?? request.header("host");
    return `${protocol}://${host}${request.originalUrl}`;
  }

  async authenticate(request: ExpressRequest): Promise<AuthenticatedPrincipal | null> {
    const clerk = this.clerkClient();
    if (!clerk) return null;
    try {
      const headers = new Headers();
      for (const [name, raw] of Object.entries(request.headers)) {
        if (Array.isArray(raw)) raw.forEach((value) => headers.append(name, value));
        else if (raw !== undefined) headers.set(name, raw);
      }
      const state = await clerk.authenticateRequest(
        new Request(this.requestUrl(request), { method: request.method, headers }),
        { authorizedParties: this.authorizedParties(), acceptsToken: "session_token" },
      );
      if (!state.isAuthenticated) return null;
      const auth = state.toAuth();
      if (!auth.userId) return null;
      const user = await this.database.client.user_profiles.findUnique({
        where: { auth_provider_auth_user_id: { auth_provider: "clerk", auth_user_id: auth.userId } },
        select: { id: true, status: true },
      });
      return { provider: "clerk", providerSubject: auth.userId,
        deckdealUserId: user?.id ?? null, sessionId: auth.sessionId ?? null,
        accountStatus: user?.status ?? null };
    } catch {
      return null;
    }
  }

  async getPrimaryEmailAddress(providerSubject: string) {
    const clerk = this.clerkClient();
    if (!clerk) return null;
    try {
      const user = await clerk.users.getUser(providerSubject);
      return user.primaryEmailAddress?.emailAddress ?? user.emailAddresses[0]?.emailAddress ?? null;
    } catch {
      return null;
    }
  }

  async currentUser(principal: AuthenticatedPrincipal) {
    if (!principal.deckdealUserId) return { authenticated: true as const, onboarded: false as const };
    const user = await this.database.client.user_profiles.findUnique({ where: { id: principal.deckdealUserId },
      select: { id: true, display_name: true, username: true, status: true } });
    if (!user) return { authenticated: true as const, onboarded: false as const };
    if (user.status !== "active") return { authenticated: true as const, onboarded: true as const,
      account_status: "disabled" as const, user: { id: user.id, display_name: user.display_name, username: user.username } };
    const { status: _status, ...identity } = user;
    return { authenticated: true as const, onboarded: true as const, account_status: "active" as const, user: identity };
  }
}
