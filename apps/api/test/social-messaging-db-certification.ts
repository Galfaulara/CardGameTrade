import "dotenv/config";
import { createDbClient } from "@repo/db";
import {
  activePrincipal,
  createAuthenticatedHarness,
  USER_1_ID,
  USER_2_ID,
} from "./support/authenticated-app-harness";
import { SocialService } from "../src/social/social.service";
const db = createDbClient(process.env.DATABASE_URL!);
const assert: (value: unknown, message: string) => asserts value = (
  value,
  message,
) => {
  if (!value) throw new Error(message);
};
async function main() {
  await db.$connect();
  const harness = await createAuthenticatedHarness(),
    a = activePrincipal(USER_1_ID),
    b = activePrincipal(USER_2_ID);
  let friendship = "",
    conversation = "",
    listingConversation = "",
    triggerInstalled = false;
  const created = {
    collections: [] as string[],
    inventory: [] as string[],
    listings: [] as string[],
  };
  try {
    await db.user_notifications.deleteMany({
      where: {
        user_friendship: {
          is: {
            OR: [
              { user_low_id: USER_1_ID, user_high_id: USER_2_ID },
              { user_low_id: USER_2_ID, user_high_id: USER_1_ID },
            ],
          },
        },
      },
    });
    await db.user_blocks.deleteMany({
      where: {
        OR: [
          { blocker_user_id: USER_1_ID, blocked_user_id: USER_2_ID },
          { blocker_user_id: USER_2_ID, blocked_user_id: USER_1_ID },
        ],
      },
    });
    await db.user_friendships.deleteMany({
      where: {
        OR: [
          { user_low_id: USER_1_ID, user_high_id: USER_2_ID },
          { user_low_id: USER_2_ID, user_high_id: USER_1_ID },
        ],
      },
    });
    const request = await harness
      .as(a)
      .post(`/api/me/social/friends/${USER_2_ID}`)
      .expect(201);
    friendship = request.body.id;
    await harness.as(a).post(`/api/me/social/friends/${USER_2_ID}`).expect(201);
    await harness.as(b).post(`/api/me/social/friends/${USER_1_ID}`).expect(409);
    assert(
      (await db.user_friendships.count({ where: { id: friendship } })) === 1,
      "unordered pair duplicated",
    );
    assert(
      (await db.user_notifications.count({
        where: {
          user_friendship_id: friendship,
          type: "friend_request_received",
        },
      })) === 1,
      "request notification duplicated",
    );
    await harness
      .as(a)
      .patch(`/api/me/social/friends/${friendship}/accept`)
      .expect(403);
    await harness
      .as(b)
      .patch(`/api/me/social/friends/${friendship}/accept`)
      .expect(200);
    assert(
      (await db.user_notifications.count({
        where: {
          user_friendship_id: friendship,
          type: "friend_request_accepted",
        },
      })) === 1,
      "accept notification missing",
    );
    const opened = await harness
      .as(a)
      .post("/api/me/social/conversations")
      .send({ kind: "general", userId: USER_2_ID })
      .expect(201);
    conversation = opened.body.id;
    const reused = await harness
      .as(b)
      .post("/api/me/social/conversations")
      .send({ kind: "general", userId: USER_1_ID })
      .expect(201);
    assert(reused.body.id === conversation, "general conversation not reused");
    assert(
      (await db.conversation_participants.count({
        where: { conversation_id: conversation },
      })) === 2,
      "conversation does not have exactly two participants",
    );
    const third = await db.user_profiles.findFirst({
      where: { id: { notIn: [USER_1_ID, USER_2_ID] }, status: "active" },
      select: { id: true },
    });
    assert(third, "third active user required");
    await harness
      .as(activePrincipal(third.id))
      .get(`/api/me/social/conversations/${conversation}`)
      .expect(404);
    const social = harness.app.get(SocialService);
    const race = await Promise.allSettled([
      social.requestFriend(USER_1_ID, third.id),
      social.requestFriend(third.id, USER_1_ID),
    ]);
    assert(
      race.filter((result) => result.status === "fulfilled").length === 1,
      "concurrent reverse requests did not converge",
    );
    const racePair = await db.user_friendships.findFirst({
      where: {
        OR: [
          { user_low_id: USER_1_ID, user_high_id: third.id },
          { user_low_id: third.id, user_high_id: USER_1_ID },
        ],
      },
    });
    assert(
      racePair &&
        (await db.user_friendships.count({ where: { id: racePair.id } })) === 1,
      "concurrent reverse requests created duplicate pair rows",
    );
    await db.user_notifications.deleteMany({
      where: { user_friendship_id: racePair.id },
    });
    await db.user_friendships.delete({ where: { id: racePair.id } });
    await harness
      .as(a)
      .post(`/api/me/social/conversations/${conversation}/messages`)
      .send({ body: " Hello social certification " })
      .expect(201);
    const inbox = await harness
      .as(b)
      .get("/api/me/social/conversations")
      .expect(200);
    assert(inbox.body.unreadCount === 1, "recipient unread count incorrect");
    await harness
      .as(b)
      .patch(`/api/me/social/conversations/${conversation}/read`)
      .expect(200);
    assert(
      (await harness.as(b).get("/api/me/social/conversations")).body
        .unreadCount === 0,
      "read state did not clear",
    );
    await harness.as(a).post(`/api/me/social/blocks/${USER_2_ID}`).expect(201);
    await harness
      .as(b)
      .post(`/api/me/social/conversations/${conversation}/messages`)
      .send({ body: "blocked" })
      .expect(403);
    assert(
      (await db.user_friendships.findUnique({ where: { id: friendship } }))
        ?.status === "removed",
      "block did not end friendship",
    );
    await harness
      .as(a)
      .delete(`/api/me/social/blocks/${USER_2_ID}`)
      .expect(200);
    await harness
      .as(a)
      .post(`/api/me/social/conversations/${conversation}/messages`)
      .send({ body: "still not friends" })
      .expect(403);
    const physical = await db.printing_finishes.findFirst({
      where: { card_printings: { is_digital: false, games: { slug: "mtg" } } },
      select: { printing_id: true, finish: true },
    });
    assert(physical, "physical fixture required");
    const collection = (
      await harness
        .as(a)
        .post("/api/me/collections")
        .send({
          gameSlug: "mtg",
          name: `social-cert-${Date.now()}`,
          visibility: "public",
        })
        .expect(201)
    ).body.id;
    created.collections.push(collection);
    const inventory = (
      await harness
        .as(a)
        .post("/api/me/inventory")
        .send({
          printingId: physical.printing_id,
          finish: physical.finish,
          collectionId: collection,
          condition: "near_mint",
          quantity: 1,
          isSigned: false,
          isAltered: false,
          isGraded: false,
        })
        .expect(201)
    ).body.id;
    created.inventory.push(inventory);
    const listing = (
      await harness
        .as(a)
        .post(`/api/listings/users/${USER_1_ID}`)
        .send({
          inventoryItemId: inventory,
          acceptsCash: false,
          acceptsTrade: true,
        })
        .expect(201)
    ).body.id;
    created.listings.push(listing);
    const contextual = await harness
      .as(b)
      .post("/api/me/social/conversations")
      .send({ kind: "contextual", contextType: "listing", contextId: listing })
      .expect(201);
    listingConversation = contextual.body.id;
    const contextualAgain = await harness
      .as(b)
      .post("/api/me/social/conversations")
      .send({ kind: "contextual", contextType: "listing", contextId: listing })
      .expect(201);
    assert(
      contextualAgain.body.id === listingConversation,
      "Listing context thread duplicated",
    );
    await harness
      .as(b)
      .post(`/api/me/social/conversations/${listingConversation}/messages`)
      .send({ body: "Is this available?" })
      .expect(201);
    await harness.as(a).post(`/api/me/social/blocks/${USER_2_ID}`).expect(201);
    const listingBefore = await db.listings.findUnique({
      where: { id: listing },
    });
    await harness
      .as(b)
      .post(`/api/me/social/conversations/${listingConversation}/messages`)
      .send({ body: "blocked contextual" })
      .expect(403);
    assert(
      (await db.listings.findUnique({ where: { id: listing } }))?.status ===
        listingBefore?.status,
      "block mutated marketplace Listing",
    );
    await harness
      .as(a)
      .delete(`/api/me/social/blocks/${USER_2_ID}`)
      .expect(200);
    await db.$executeRawUnsafe(
      `CREATE FUNCTION cert_fail_friend_notification() RETURNS trigger LANGUAGE plpgsql AS $$ BEGIN IF NEW.type='friend_request_received' THEN RAISE EXCEPTION 'forced friend notification failure'; END IF; RETURN NEW; END $$; CREATE TRIGGER cert_fail_friend_notification BEFORE INSERT ON user_notifications FOR EACH ROW EXECUTE FUNCTION cert_fail_friend_notification();`,
    );
    triggerInstalled = true;
    await harness.as(a).post(`/api/me/social/friends/${USER_2_ID}`).expect(500);
    await db.$executeRawUnsafe(
      `DROP TRIGGER cert_fail_friend_notification ON user_notifications; DROP FUNCTION cert_fail_friend_notification()`,
    );
    triggerInstalled = false;
    assert(
      (await db.user_friendships.findUnique({ where: { id: friendship } }))
        ?.status === "removed",
      "notification failure left a pending friendship",
    );
    console.log(
      "Friends, blocks, atomic notifications, conversations, unread, privacy, listing context, and block override certification passed.",
    );
  } finally {
    if (triggerInstalled)
      await db.$executeRawUnsafe(
        `DROP TRIGGER IF EXISTS cert_fail_friend_notification ON user_notifications; DROP FUNCTION IF EXISTS cert_fail_friend_notification()`,
      );
    await db.user_blocks.deleteMany({
      where: {
        OR: [
          { blocker_user_id: USER_1_ID, blocked_user_id: USER_2_ID },
          { blocker_user_id: USER_2_ID, blocked_user_id: USER_1_ID },
        ],
      },
    });
    for (const id of [conversation, listingConversation].filter(Boolean))
      await db.conversations.deleteMany({ where: { id } });
    await db.user_notifications.deleteMany({
      where: { user_friendship_id: friendship || undefined },
    });
    if (friendship)
      await db.user_friendships.deleteMany({ where: { id: friendship } });
    await db.listings.deleteMany({ where: { id: { in: created.listings } } });
    await db.inventory_items.deleteMany({
      where: { id: { in: created.inventory } },
    });
    await db.collections.deleteMany({
      where: { id: { in: created.collections } },
    });
    await harness.close();
    await db.$disconnect();
  }
}
void main();
