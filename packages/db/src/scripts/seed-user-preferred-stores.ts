/** Development/test-only user preferred-store fixture. Never imported by an app. */
import "dotenv/config";
import { createDbClient } from "../client";

const storeId = "eca7b68d-6a7a-4e68-89bd-baea637ca59d";
const userIds = [
  "16e1b0bc-3b75-4a82-a7e4-b6a88a6cbc2e",
  "92d9585a-7c59-4c02-8ee4-a9c24b9787d0",
];

async function main() {
  if (process.env.NODE_ENV === "production") throw new Error("Preferred-store fixtures cannot run in production.");
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required.");
  const db = createDbClient(process.env.DATABASE_URL);
  await db.$connect();
  try {
    const result = await db.$transaction(async (tx) => {
      const store = await tx.stores.findUnique({ where: { id: storeId }, select: {
        id: true, name: true, status: true, verification_status: true, trade_mediation_enabled: true,
      } });
      if (!store) throw new Error(`Fixture store ${storeId} was not found.`);
      if (store.status !== "active" || store.verification_status !== "verified" || !store.trade_mediation_enabled) {
        throw new Error("Fixture store is not currently eligible for DeckDeal mediation.");
      }
      const users = await tx.user_profiles.findMany({ where: { id: { in: userIds } },
        select: { id: true, preferred_store_id: true } });
      if (users.length !== userIds.length) throw new Error("One or more fixture users were not found.");
      const changed = users.filter((user) => user.preferred_store_id !== storeId);
      if (changed.length) await tx.user_profiles.updateMany({
        where: { id: { in: changed.map((user) => user.id) } }, data: { preferred_store_id: storeId },
      });
      return { store: { id: store.id, name: store.name }, assigned: users.length, changed: changed.length };
    });
    console.log(JSON.stringify(result, null, 2));
  } finally { await db.$disconnect(); }
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
