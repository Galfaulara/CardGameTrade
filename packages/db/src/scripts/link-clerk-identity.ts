import "dotenv/config";
import { createDbClient } from "../client";

const deckdealUserId = process.env.DECKDEAL_USER_ID;
const clerkSubject = process.env.CLERK_SUBJECT;
const confirmed = process.env.CONFIRM_CLERK_LINK === "yes";

async function main() {
  if (process.env.NODE_ENV === "production") throw new Error("Clerk identity linking is development-only.");
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required.");
  if (!deckdealUserId) throw new Error("DECKDEAL_USER_ID is required.");
  if (!clerkSubject?.startsWith("user_") || clerkSubject.length > 255) throw new Error("CLERK_SUBJECT must be an explicit Clerk user subject.");
  const database = createDbClient(process.env.DATABASE_URL);
  try {
    const [user, subjectOwner] = await Promise.all([
      database.user_profiles.findUnique({ where: { id: deckdealUserId }, select: { id: true, auth_provider: true, auth_user_id: true } }),
      database.user_profiles.findUnique({ where: { auth_provider_auth_user_id: { auth_provider: "clerk", auth_user_id: clerkSubject } }, select: { id: true } }),
    ]);
    if (!user) throw new Error("The DeckDeal user does not exist.");
    if (subjectOwner && subjectOwner.id !== user.id) throw new Error("That Clerk subject is already bound to another DeckDeal user.");
    if (user.auth_provider === "clerk" && user.auth_user_id !== clerkSubject) throw new Error("That DeckDeal user is already bound to a different Clerk subject.");
    if (user.auth_provider === "clerk" && user.auth_user_id === clerkSubject) { console.log("The exact Clerk identity mapping already exists; no change was made."); return; }
    if (!confirmed) throw new Error("No change made. Re-run with CONFIRM_CLERK_LINK=yes after reviewing the explicit user UUID and Clerk subject.");
    await database.user_profiles.update({ where: { id: user.id }, data: { auth_provider: "clerk", auth_user_id: clerkSubject, updated_at: new Date() } });
    console.log(`Linked Clerk identity to DeckDeal user ${user.id}.`);
  } finally { await database.$disconnect(); }
}

main().catch((error) => { console.error(error instanceof Error ? error.message : "Clerk identity linking failed."); process.exitCode = 1; });
