import "dotenv/config";
import { randomUUID } from "node:crypto";
import { createDbClient } from "@repo/db";
import type { AuthenticatedPrincipal } from "../src/auth/auth.types";
import {
  USER_1_ID,
  USER_2_ID,
  activePrincipal,
  createAuthenticatedHarness,
} from "./support/authenticated-app-harness";

const db = createDbClient(process.env.DATABASE_URL!);
const assert: (value: unknown, message: string) => asserts value = (value, message) => {
  if (!value) {
    throw new Error(message);
  }
};
const TABLES = [
  "user_profiles",
  "user_preferences",
  "collections",
  "listings",
  "wishlists",
  "transactions",
  "store_trade_handoffs",
  "stores",
] as const;

const unmappedPrincipal = (
  providerSubject: string,
): AuthenticatedPrincipal => ({
  provider: "clerk",
  providerSubject,
  deckdealUserId: null,
  sessionId: `test-session-${providerSubject}`,
  accountStatus: null,
});

async function tableCounts() {
  const counts: Record<string, number> = {};
  for (const table of TABLES) {
    counts[table] = await (db as any)[table].count();
  }
  return counts;
}

async function userSnapshot(userId: string) {
  return db.user_profiles.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      auth_provider: true,
      auth_user_id: true,
      email: true,
      username: true,
      username_normalized: true,
      display_name: true,
      preferred_store_id: true,
      status: true,
      updated_at: true,
    },
  });
}

async function preferenceSnapshot(userId: string) {
  return db.user_preferences.findUnique({
    where: {
      user_id: userId,
    },
    select: {
      user_id: true,
      preferred_trade_store_id: true,
      created_at: true,
      updated_at: true,
    },
  });
}

async function authoritySnapshot(userId: string) {
  const [listings, wishlists, handoffs] = await Promise.all([
    db.listings.findMany({
      where: {
        seller_user_id: userId,
      },
      select: {
        id: true,
        preferred_store_id: true,
      },
      orderBy: {
        id: "asc",
      },
    }),
    db.wishlists.findMany({
      where: {
        user_id: userId,
      },
      select: {
        id: true,
        preferred_store_id: true,
      },
      orderBy: {
        id: "asc",
      },
    }),
    db.store_trade_handoffs.findMany({
      where: {
        transactions: {
          OR: [
            {
              seller_user_id: userId,
            },
            {
              counterparty_user_id: userId,
            },
          ],
        },
      },
      select: {
        id: true,
        transaction_id: true,
        store_id: true,
      },
      orderBy: {
        id: "asc",
      },
    }),
  ]);

  return {
    listings,
    wishlists,
    handoffs,
  };
}

async function profileState(userId: string) {
  return JSON.stringify({
    user: await userSnapshot(userId),
    preference: await preferenceSnapshot(userId),
    authority: await authoritySnapshot(userId),
  });
}

export async function runProfileRegression() {
  await db.$connect();
  const harness = await createAuthenticatedHarness();
  const user1 = activePrincipal(USER_1_ID);
  const user2 = activePrincipal(USER_2_ID);
  const seed = randomUUID().replaceAll("-", "").toLowerCase();
  const updatedDisplayName = `Profile ${seed.slice(0, 8)}`;
  const cleanup = {
    tempUserId: null as string | null,
    ineligibleStoreId: null as string | null,
    tempCollectionId: null as string | null,
  };
  const beforeCounts = await tableCounts();
  const beforeUser1 = await userSnapshot(USER_1_ID);
  const beforeUser2 = await userSnapshot(USER_2_ID);
  const beforeUser1Preference = await preferenceSnapshot(USER_1_ID);
  const beforeUser1Authority = await authoritySnapshot(USER_1_ID);

  assert(beforeUser1, "User1 fixture is required.");
  assert(beforeUser2, "User2 fixture is required.");

  try {
    const eligibleStore = await db.stores.findFirst({
      where: {
        status: "active",
        verification_status: "verified",
        trade_mediation_enabled: true,
      },
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: "asc",
      },
    });
    assert(eligibleStore, "An eligible trade-mediation store fixture is required.");

    const ineligibleStore = await db.stores.create({
      data: {
        name: `Step 4A Ineligible ${seed.slice(0, 6)}`,
        slug: `step-4a-ineligible-${seed.slice(0, 12)}`,
        verification_status: "unverified",
        status: "active",
        trade_mediation_enabled: false,
      },
      select: {
        id: true,
      },
    });
    cleanup.ineligibleStoreId = ineligibleStore.id;

    const tempUser = await db.user_profiles.create({
      data: {
        auth_provider: "clerk",
        auth_user_id: `step4a-profile-${seed}`,
        email: `step4a-profile-${seed}@deckdeal.test`,
        username: `Step4A${seed.slice(0, 8)}`,
        username_normalized: `step4a${seed.slice(0, 8)}`,
        display_name: "Step 4A Empty User",
        status: "active",
      },
      select: {
        id: true,
      },
    });
    cleanup.tempUserId = tempUser.id;
    const tempPrincipal = activePrincipal(tempUser.id);

    await harness.as(null).get("/api/me/profile").expect(401);
    await harness.as(unmappedPrincipal(`step4a-unmapped-${seed.slice(0, 8)}`)).get("/api/me/profile").expect(403);
    await harness.as({ ...activePrincipal(USER_1_ID), accountStatus: "disabled" }).get("/api/me/profile").expect(403);

    const user1Profile = await harness.as(user1).get("/api/me/profile").expect(200);
    assert(user1Profile.body.id === USER_1_ID, "Active User1 must receive User1 profile data.");
    assert(user1Profile.body.username === beforeUser1.username, "User1 profile must expose the current username.");

    const user2Profile = await harness.as(user2).get("/api/me/profile").expect(200);
    assert(user2Profile.body.id === USER_2_ID, "Active User2 must receive User2 profile data.");
    assert(user2Profile.body.username === beforeUser2.username, "Active User2 must receive User2 identity data.");

    const spoofedQuery = await harness.as(user1).get(`/api/me/profile?userId=${USER_2_ID}`).expect(200);
    assert(spoofedQuery.body.id === USER_1_ID, "Query-string userId spoofing must not change self-profile authority.");

    const tempBeforePublic = await harness.as(tempPrincipal).get("/api/me/profile").expect(200);
    assert(tempBeforePublic.body.id === tempUser.id, "Temp actor must reach its own profile.");
    assert(tempBeforePublic.body.public_profile_available === false, "A new active user without public resources must not be publicly discoverable yet.");
    await harness.as(null).get(`/api/discovery/users/${tempUser.id}`).expect(404);

    const renamed = await harness.as(user1).patch("/api/me/profile").send({ displayName: `  ${updatedDisplayName}  ` }).expect(200);
    assert(renamed.body.display_name === updatedDisplayName, "User1 must be able to edit the display name with normalization.");
    assert(renamed.body.username === beforeUser1.username, "Display-name edits must not change username.");

    const user2Unchanged = await harness.as(user2).get("/api/me/profile").expect(200);
    assert(user2Unchanged.body.display_name === beforeUser2.display_name, "User2 profile must remain unchanged after User1 edits their own display name.");

    const publicUser1AfterRename = await harness.as(null).get(`/api/discovery/users/${USER_1_ID}`).expect(200);
    assert(publicUser1AfterRename.body.user.display_name === updatedDisplayName, "Public read models must reflect the updated display name.");
    assert(publicUser1AfterRename.body.user.username === beforeUser1.username, "Public read models must preserve the unique username.");

    const clearedStore = await harness.as(user1).patch("/api/me/profile").send({ preferredStoreId: null }).expect(200);
    assert(clearedStore.body.preferred_store_id === null, "Preferred store must be clearable.");
    assert(clearedStore.body.preferred_store === null, "Clearing preferred store must return a null preferred store mapping.");

    const setStore = await harness.as(user1).patch("/api/me/profile").send({ preferredStoreId: eligibleStore.id }).expect(200);
    assert(setStore.body.preferred_store_id === eligibleStore.id, "Preferred store must be set to the eligible store ID.");
    assert(setStore.body.preferred_store?.id === eligibleStore.id, "Preferred store mapping must reflect the eligible store.");
    assert(setStore.body.preferred_store?.eligible === true, "Preferred store mapping must report eligible true for an eligible store.");

    const user1AfterStore = await userSnapshot(USER_1_ID);
    assert(user1AfterStore?.preferred_store_id === eligibleStore.id, "user_profiles.preferred_store_id must change when the actor updates Preferred LGS.");

    const user1PreferenceAfterStore = await preferenceSnapshot(USER_1_ID);
    assert(JSON.stringify(user1PreferenceAfterStore) === JSON.stringify(beforeUser1Preference), "user_preferences.preferred_trade_store_id must remain unchanged by /me/profile updates.");

    const user1AuthorityAfterStore = await authoritySnapshot(USER_1_ID);
    assert(JSON.stringify(user1AuthorityAfterStore) === JSON.stringify(beforeUser1Authority), "Profile preferred-store updates must not alter Listing, Wishlist, or Transaction store authority fields.");

    const publicUser1AfterStore = await harness.as(null).get(`/api/discovery/users/${USER_1_ID}`).expect(200);
    assert(publicUser1AfterStore.body.user.preferred_store?.id === eligibleStore.id, "Public preferred store mapping must follow user_profiles.preferred_store_id when the store is eligible.");

    const beforeRejected = JSON.stringify({
      user1: await profileState(USER_1_ID),
      user2: await profileState(USER_2_ID),
      temp: await profileState(tempUser.id),
    });

    await harness.as(user1).patch("/api/me/profile").send({ userId: USER_2_ID, displayName: "Spoofed" }).expect(400);
    await harness.as(user1).patch("/api/me/profile").send({ username: `Blocked${seed.slice(0, 6)}` }).expect(400);
    await harness.as(user1).patch("/api/me/profile").send({ preferredStoreId: ineligibleStore.id }).expect(400);
    await harness.as(user1).patch("/api/me/profile").send({ preferredStoreId: randomUUID() }).expect(400);

    const afterRejected = JSON.stringify({
      user1: await profileState(USER_1_ID),
      user2: await profileState(USER_2_ID),
      temp: await profileState(tempUser.id),
    });
    assert(afterRejected === beforeRejected, "Rejected /me/profile requests must not mutate domain state.");

    const tempCollection = await harness.as(tempPrincipal).post(`/api/inventory/users/${tempUser.id}/collections`).send({
      name: `Step 4A Public ${seed.slice(0, 8)}`,
      visibility: "public",
    }).expect(201);
    cleanup.tempCollectionId = tempCollection.body.id;

    const tempAfterPublic = await harness.as(tempPrincipal).get("/api/me/profile").expect(200);
    assert(tempAfterPublic.body.public_profile_available === true, "A public collection must make the actor's public profile discoverable.");
    await harness.as(null).get(`/api/discovery/users/${tempUser.id}`).expect(200);

    console.log(`Profile regression passed (${seed}).`);
  } finally {
    if (beforeUser1) {
      await db.user_profiles.update({
        where: {
          id: beforeUser1.id,
        },
        data: {
          display_name: beforeUser1.display_name,
          preferred_store_id: beforeUser1.preferred_store_id,
          updated_at: beforeUser1.updated_at,
        },
      });
    }

    if (cleanup.tempCollectionId) {
      await db.collections.deleteMany({
        where: {
          id: cleanup.tempCollectionId,
        },
      });
    }

    if (cleanup.tempUserId) {
      await db.user_profiles.deleteMany({
        where: {
          id: cleanup.tempUserId,
        },
      });
    }

    if (cleanup.ineligibleStoreId) {
      await db.stores.deleteMany({
        where: {
          id: cleanup.ineligibleStoreId,
        },
      });
    }

    const afterCounts = await tableCounts();
    const afterUser1 = await userSnapshot(USER_1_ID);
    const afterUser2 = await userSnapshot(USER_2_ID);
    const afterUser1Preference = await preferenceSnapshot(USER_1_ID);
    const afterUser1Authority = await authoritySnapshot(USER_1_ID);

    assert(JSON.stringify(afterCounts) === JSON.stringify(beforeCounts), "Profile regression cleanup did not restore table-count baseline.");
    assert(JSON.stringify(afterUser1) === JSON.stringify(beforeUser1), "User1 profile baseline was not restored after profile regression cleanup.");
    assert(JSON.stringify(afterUser2) === JSON.stringify(beforeUser2), "User2 profile changed during profile regression cleanup.");
    assert(JSON.stringify(afterUser1Preference) === JSON.stringify(beforeUser1Preference), "User1 legacy trade-store preference changed during profile regression cleanup.");
    assert(JSON.stringify(afterUser1Authority) === JSON.stringify(beforeUser1Authority), "Listing, Wishlist, or Transaction store authority changed during profile regression cleanup.");

    await harness.close();
    await db.$disconnect();
  }
}

runProfileRegression().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
