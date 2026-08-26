export type AuthenticatedPrincipal = {
  provider: "clerk";
  providerSubject: string;
  deckdealUserId: string | null;
  sessionId: string | null;
  accountStatus: string | null;
};

declare module "express-serve-static-core" {
  interface Request {
    authenticatedPrincipal?: AuthenticatedPrincipal;
  }
}
