const fs = require("node:fs");
const path = require("node:path");
require("dotenv").config({ path: path.resolve(__dirname, "../../../.env") });
const { createDbClient } = require("@repo/db");
const { ClerkAuthService } = require("../dist/auth/clerk-auth.service");
const database = createDbClient(process.env.DATABASE_URL);
const apiBase = process.env.API_BASE_URL ?? "http://localhost:4000/api";
const webBase = process.env.WEB_BASE_URL ?? "http://localhost:3000";
const assert = (value, message) => { if (!value) throw new Error(message); };
async function request(base, pathname, expected, init) { const response = await fetch(`${base}${pathname}`, init); assert(response.status === expected, `${pathname}: expected ${expected}, got ${response.status}`); return response; }
const models = ["inventory_items", "collections", "listings", "listing_offers", "inventory_item_interests", "wishlists", "wishlist_items", "transactions", "user_profiles", "stores", "store_trade_handoffs", "transaction_item_custody"];
async function snapshot() { const result = {}; for (const model of models) { const rows = await database[model].findMany({ select: { id: true, updated_at: true }, orderBy: { id: "asc" } }); result[model] = rows.map((row) => `${row.id}:${row.updated_at.toISOString()}`); } return result; }
function sourceFiles(directory) { return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() && entry.name !== ".next" ? sourceFiles(path.join(directory, entry.name)) : entry.isFile() ? [path.join(directory, entry.name)] : []); }

async function main() {
  await database.$connect(); const before = await snapshot();
  const collection = (await (await request(apiBase, "/discovery/feed/collections?limit=1&previewLimit=5&availability=all", 200)).json()).items[0];
  const store = (await (await request(apiBase, "/discovery/feed/stores?limit=1&previewLimit=5&availability=all", 200)).json()).items[0];
  assert(collection && store, "public fixtures are required");
  const userId = collection.owner.id; const card = collection.preview_items[0];
  const publicPages = ["/", "/discover", `/search?q=${encodeURIComponent(card?.printing?.canonical_cards?.name ?? "Mountain")}`,
    card ? `/cards/${card.printing.canonical_cards.id}?printing=${card.printing.id}` : "/search", `/collections/${collection.id}`, `/users/${userId}`, `/stores/${store.id}`];
  for (const pathname of publicPages) await request(webBase, pathname, 200);
  await request(apiBase, "/catalog/games", 200); await request(apiBase, "/discovery/feed/collections?limit=1", 200);
  await request(apiBase, "/auth/me", 401);
  await request(apiBase, "/auth/me", 401, { headers: { Authorization: "Bearer malformed-token", Origin: "http://localhost:3000" } });
  await request(apiBase, "/auth/me", 401, { headers: { Authorization: "Bearer eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJ1c2VyX2ZvcmdlZCJ9.forged", Origin: "http://localhost:3000" } });
  const deniedCors = await request(apiBase, "/auth/me", 401, { headers: { Origin: "https://evil.example" } });
  assert(!deniedCors.headers.get("access-control-allow-origin"), "unconfigured origin received CORS access");
  const stateService = new ClerkAuthService({ client: { user_profiles: { findUnique: async ({ where }) => where.id === "active-id"
    ? { id: "active-id", display_name: "Active", username: "active", status: "active" }
    : { id: "inactive-id", display_name: "Inactive", username: "inactive", status: "suspended" } } } });
  const basePrincipal = { provider: "clerk", providerSubject: "user_test", sessionId: "sess_test", accountStatus: null };
  const unmapped = await stateService.currentUser({ ...basePrincipal, deckdealUserId: null });
  const active = await stateService.currentUser({ ...basePrincipal, deckdealUserId: "active-id" });
  const inactive = await stateService.currentUser({ ...basePrincipal, deckdealUserId: "inactive-id" });
  assert(unmapped.authenticated && !unmapped.onboarded, "unmapped state contract failed");
  assert(active.onboarded && active.account_status === "active" && active.user.id === "active-id", "mapped active state contract failed");
  assert(inactive.onboarded && inactive.account_status === "disabled", "mapped inactive state contract failed");
  const sanza = await database.user_profiles.findUnique({ where: { id: "16e1b0bc-3b75-4a82-a7e4-b6a88a6cbc2e" }, select: { auth_provider: true } });
  assert(sanza, "Sanza development user is missing");
  const webSources = sourceFiles(path.resolve(__dirname, "../../web")).filter((file) => /\.(ts|tsx|js|jsx)$/.test(file) && !file.includes(`${path.sep}.next${path.sep}`));
  const source = webSources.map((file) => fs.readFileSync(file, "utf8")).join("\n");
  assert(!source.includes("localStorage.setItem") && !source.includes("NEXT_PUBLIC_CLERK_SECRET_KEY"), "custom web code stores tokens or exposes the Clerk secret");
  assert(JSON.stringify(await snapshot()) === JSON.stringify(before), "auth/public reads mutated domain state");
  console.log(`Authentication foundation regression passed. Sanza Clerk-mapped: ${sanza.auth_provider === "clerk"}.`);
}
main().finally(() => database.$disconnect()).catch((error) => { console.error(error); process.exitCode = 1; });
