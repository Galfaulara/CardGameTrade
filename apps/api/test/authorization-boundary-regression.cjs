const { DeckDealAuthorizationGuard } = require("../dist/auth/deckdeal-authorization.guard");

const assert = (value, message) => { if (!value) throw new Error(message); };
const requestContext = (request) => ({ switchToHttp: () => ({ getRequest: () => request }), getHandler: () => function handler() {}, getClass: () => class Controller {} });
const principal = (overrides = {}) => ({ provider: "clerk", providerSubject: "clerk-user", deckdealUserId: "user-a", sessionId: "session", accountStatus: "active", ...overrides });

async function expectDenied(run, status, label) {
  try { await run(); } catch (error) { assert(error.getStatus?.() === status, `${label}: expected ${status}, got ${error.getStatus?.()}`); return; }
  throw new Error(`${label}: expected denial`);
}

async function main() {
  const protectedReflector = { getAllAndOverride: () => false };
  const guard = (result) => new DeckDealAuthorizationGuard(protectedReflector, { authenticate: async () => result });

  await expectDenied(() => guard(null).canActivate(requestContext({ params: {} })), 401, "unauthenticated");
  await expectDenied(() => guard(principal({ deckdealUserId: null, accountStatus: null })).canActivate(requestContext({ params: {} })), 403, "unmapped");
  await expectDenied(() => guard(principal({ accountStatus: "suspended" })).canActivate(requestContext({ params: {} })), 403, "inactive");
  await expectDenied(() => guard(principal()).canActivate(requestContext({ params: { userId: "user-b" } })), 403, "legacy user spoof");
  await expectDenied(() => guard(principal()).canActivate(requestContext({ params: { ownerUserId: "user-b" } })), 403, "legacy owner spoof");
  await expectDenied(() => guard(principal()).canActivate(requestContext({ params: { staffUserId: "user-b" } })), 403, "legacy staff spoof");

  const request = { params: { userId: "user-a" } };
  assert(await guard(principal()).canActivate(requestContext(request)), "active matching actor should proceed");
  assert(request.authenticatedPrincipal.deckdealUserId === "user-a", "verified principal was not attached");

  let authenticationCalled = false;
  const publicGuard = new DeckDealAuthorizationGuard({ getAllAndOverride: () => true }, { authenticate: async () => { authenticationCalled = true; return null; } });
  assert(await publicGuard.canActivate(requestContext({ params: {} })), "public route should proceed anonymously");
  assert(!authenticationCalled, "public route unexpectedly invoked authentication");
  console.log("Authorization boundary guard regression passed.");
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
