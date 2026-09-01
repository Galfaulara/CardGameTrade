import "dotenv/config";
import { randomUUID } from "node:crypto";
import { createDbClient } from "@repo/db";
import {
  activePrincipal,
  createAuthenticatedHarness,
  USER_1_ID,
  USER_2_ID,
} from "./support/authenticated-app-harness";

const db = createDbClient(process.env.DATABASE_URL!);
const assert: (value: unknown, message: string) => asserts value = (
  value,
  message,
) => {
  if (!value) throw new Error(message);
};

export async function runInterestRelationshipCertification() {
  await db.$connect();
  const harness = await createAuthenticatedHarness();
  const user1 = activePrincipal(USER_1_ID),
    user2 = activePrincipal(USER_2_ID);
  const marker = `relationship-cert-${randomUUID()}`;
  const collections: string[] = [],
    inventory: string[] = [],
    wishlists: string[] = [],
    listings: string[] = [],
    interests: string[] = [],
    offers: string[] = [],
    transactions: string[] = [];
  let triggerInstalled = false;
  try {
    const physical = await db.printing_finishes.findFirst({
      where: { card_printings: { is_digital: false, games: { slug: "mtg" } } },
      select: {
        printing_id: true,
        finish: true,
        card_printings: {
          select: { canonical_card_id: true, language_code: true },
        },
      },
    });
    assert(physical, "MTG physical printing fixture required");
    const staff = await db.store_staff.findFirst({
      where: {
        status: "active",
        stores: {
          status: "active",
          verification_status: "verified",
          trade_mediation_enabled: true,
        },
      },
      select: { user_id: true, store_id: true },
    });
    assert(staff, "Active trade-mediation Store staff fixture required");
    const staffPrincipal = activePrincipal(staff.user_id);
    const createCollection = async (
      actor: typeof user1,
      name: string,
      visibility = "public",
    ) => {
      const response = await harness
        .as(actor)
        .post("/api/me/collections")
        .send({ gameSlug: "mtg", name: `${marker}-${name}`, visibility })
        .expect(201);
      collections.push(response.body.id);
      return response.body.id as string;
    };
    const a = await createCollection(user1, "a"),
      b = await createCollection(user1, "b"),
      other = await createCollection(user2, "other");
    const createInventory = async (
      actor: typeof user1,
      collectionId: string,
      note: string,
      quantity = 1,
    ) => {
      const response = await harness
        .as(actor)
        .post("/api/me/inventory")
        .send({
          printingId: physical.printing_id,
          finish: physical.finish,
          collectionId,
          condition: "near_mint",
          quantity,
          isSigned: false,
          isAltered: false,
          isGraded: false,
          notes: `${marker}-${note}`,
        })
        .expect(201);
      inventory.push(response.body.id);
      return response.body.id as string;
    };
    const x = await createInventory(user1, a, "x", 2),
      y = await createInventory(user1, a, "y"),
      z = await createInventory(user1, a, "z"),
      foreign = await createInventory(user2, other, "foreign");

    const interestResponse = await harness
      .as(user2)
      .post(`/api/inventory-interests/me/inventory/${x}`)
      .send({ interestType: "trade", message: marker })
      .expect(201);
    interests.push(interestResponse.body.id);
    const interest = await db.inventory_item_interests.findUnique({
      where: { id: interestResponse.body.id },
    });
    const notifications = await db.user_notifications.findMany({
      where: { inventory_item_interest_id: interestResponse.body.id },
    });
    assert(interest?.status === "active", "Interest did not commit");
    assert(
      notifications.length === 1,
      "Interest must create exactly one notification",
    );
    assert(
      notifications[0]?.recipient_user_id === USER_1_ID &&
        notifications[0].actor_user_id === USER_2_ID &&
        notifications[0].inventory_item_id === x &&
        !notifications[0].read_at,
      "Notification linkage/read state incorrect",
    );
    await harness
      .as(user2)
      .post(`/api/inventory-interests/me/inventory/${x}`)
      .send({ interestType: "trade" })
      .expect(409);
    assert(
      (await db.user_notifications.count({
        where: { inventory_item_interest_id: interestResponse.body.id },
      })) === 1,
      "Duplicate Interest created a duplicate notification",
    );
    const ownerNotifications = await harness
      .as(user1)
      .get("/api/me/notifications")
      .expect(200);
    const actorNotifications = await harness
      .as(user2)
      .get("/api/me/notifications")
      .expect(200);
    assert(
      ownerNotifications.body.items.some(
        (item: { id: string }) => item.id === notifications[0]!.id,
      ),
      "Recipient cannot retrieve notification",
    );
    assert(
      !actorNotifications.body.items.some(
        (item: { id: string }) => item.id === notifications[0]!.id,
      ),
      "Actor can retrieve recipient notification",
    );
    await harness
      .as(user2)
      .patch(`/api/me/notifications/${notifications[0]!.id}/read`)
      .expect(404);
    const read = await harness
      .as(user1)
      .patch(`/api/me/notifications/${notifications[0]!.id}/read`)
      .expect(200);
    assert(
      read.body.unreadCount ===
        Math.max(0, ownerNotifications.body.unreadCount - 1) &&
        read.body.items.find(
          (item: { id: string }) => item.id === notifications[0]!.id,
        )?.readAt,
      "Recipient read state did not update",
    );

    await db.$executeRawUnsafe(
      `CREATE OR REPLACE FUNCTION cert_fail_interest_notification() RETURNS trigger LANGUAGE plpgsql AS $$ BEGIN RAISE EXCEPTION 'certification forced notification failure'; END $$; CREATE TRIGGER cert_fail_interest_notification BEFORE INSERT ON user_notifications FOR EACH ROW EXECUTE FUNCTION cert_fail_interest_notification();`,
    );
    triggerInstalled = true;
    await harness
      .as(user2)
      .post(`/api/inventory-interests/me/inventory/${y}`)
      .send({ interestType: "buy", message: marker })
      .expect(500);
    await db.$executeRawUnsafe(
      `DROP TRIGGER cert_fail_interest_notification ON user_notifications; DROP FUNCTION cert_fail_interest_notification()`,
    );
    triggerInstalled = false;
    assert(
      (await db.inventory_item_interests.count({
        where: { inventory_item_id: y, interested_user_id: USER_2_ID },
      })) === 0,
      "Forced notification failure left an Interest",
    );
    assert(
      (await db.user_notifications.count({
        where: { inventory_item_id: y, actor_user_id: USER_2_ID },
      })) === 0,
      "Forced failure left a notification",
    );

    const createWishlist = async (visibility: string, suffix: string) => {
      const response = await harness
        .as(user2)
        .post("/api/me/wishlists")
        .send({ gameSlug: "mtg", name: `${marker}-${suffix}`, visibility })
        .expect(201);
      wishlists.push(response.body.id);
      return response.body.id as string;
    };
    const publicWishlist = await createWishlist("public", "public"),
      privateWishlist = await createWishlist("private", "private"),
      unlistedWishlist = await createWishlist("unlisted", "unlisted");
    for (const wishlistId of [
      publicWishlist,
      privateWishlist,
      unlistedWishlist,
    ])
      await harness
        .as(user2)
        .post(`/api/me/wishlists/${wishlistId}/items?gameSlug=mtg`)
        .send({
          printingId: physical.printing_id,
          desiredFinish: physical.finish,
          desiredCondition: "near_mint",
          languageCode: physical.card_printings.language_code,
          quantityDesired: 1,
          willingToPayCash: false,
          willingToTradeCards: true,
        })
        .expect(201);
    assert(
      (await db.user_notifications.count({
        where: { inventory_item_id: x },
      })) === 1,
      "Passive Wants generated owner notifications",
    );
    const activity = await harness
      .as(user1)
      .get(`/api/me/inventory/${x}/activity`)
      .expect(200);
    await harness.as(user2).get(`/api/me/inventory/${x}/activity`).expect(404);
    const merged = activity.body.people.filter(
      (person: { user: { id: string } }) => person.user.id === USER_2_ID,
    );
    assert(
      merged.length === 1 &&
        merged[0].interest &&
        merged[0].publicWantIds.length === 1,
      "Interest and public Want were not merged once or private demand leaked",
    );
    assert(
      activity.body.summary.wantedBy === 1,
      "Public demand unique-user count incorrect",
    );

    const listingResponse = await harness
      .as(user1)
      .post(`/api/listings/users/${USER_1_ID}`)
      .send({
        inventoryItemId: x,
        acceptsCash: true,
        acceptsTrade: true,
        askingPrice: 12.5,
        currencyCode: "USD",
        preferredStoreId: staff.store_id,
      })
      .expect(201);
    listings.push(listingResponse.body.id);
    const publicItems = (
      await harness
        .as(user2)
        .get(`/api/me/wishlists/${publicWishlist}?gameSlug=mtg`)
        .expect(200)
    ).body.items;
    const wantId = publicItems[0].id;
    const availability = await harness
      .as(user2)
      .get(
        `/api/me/wishlists/${publicWishlist}/items/${wantId}/availability?gameSlug=mtg`,
      )
      .expect(200);
    assert(
      availability.body.listings.some(
        (row: { id: string; asking_price: string }) =>
          row.id === listingResponse.body.id && row.asking_price === "12.5",
      ),
      "Matching seller Listing/asking price missing",
    );
    assert(
      Array.isArray(availability.body.formalWishlistOffers),
      "Formal Wishlist Offers are not separated",
    );
    const offerResponse = await harness
      .as(user2)
      .post(
        `/api/offers/listings/${listingResponse.body.id}/users/${USER_2_ID}/from-interest/${interestResponse.body.id}`,
      )
      .send({
        cashAmount: 0,
        currencyCode: "USD",
        message: marker,
        items: [{ inventoryItemId: foreign, quantity: 1 }],
      })
      .expect(201);
    offers.push(offerResponse.body.id);
    const offeredActivity = await harness
      .as(user1)
      .get(`/api/me/inventory/${x}/activity`)
      .expect(200);
    const receivedOffer = offeredActivity.body.offers.receivedOnListing.find(
      (offer: { id: string }) => offer.id === offerResponse.body.id,
    );
    assert(
      receivedOffer?.listingId === listingResponse.body.id &&
        receivedOffer.status === "pending" &&
        receivedOffer.tradeItemCount === 1 &&
        receivedOffer.offerer?.id === USER_2_ID,
      "Card Activity did not expose the received Listing Offer accurately",
    );

    const accepted = await harness
      .as(user1)
      .post(`/api/offers/${offerResponse.body.id}/users/${USER_1_ID}/accept`)
      .send({ storeId: staff.store_id })
      .expect(201);
    transactions.push(accepted.body.id);
    const exactTransactionItem = await db.transaction_items.findFirst({
      where: { transaction_id: accepted.body.id, inventory_item_id: x },
      include: {
        transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items: true,
      },
    });
    const exactCustody =
      exactTransactionItem?.transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items;
    assert(
      exactTransactionItem && exactCustody,
      "Accepted trade lacks exact transaction-item custody",
    );
    const otherTransactionItem = await db.transaction_items.findFirst({
      where: {
        transaction_id: accepted.body.id,
        inventory_item_id: { not: x },
      },
      include: {
        transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items: true,
      },
    });
    assert(otherTransactionItem, "Accepted trade lacks counterparty item");
    const handoff = await db.store_trade_handoffs.findUnique({
      where: { transaction_id: accepted.body.id },
    });
    assert(handoff, "Accepted trade lacks Store handoff");
    await harness
      .as(staffPrincipal)
      .patch(
        `/api/store-handoffs/${handoff.id}/items/${exactTransactionItem.id}/receive/users/${staff.user_id}`,
      )
      .expect(200);
    const lifecycleActivity = await harness
      .as(user1)
      .get(`/api/me/inventory/${x}/activity`)
      .expect(200);
    const lifecycle = lifecycleActivity.body.transactions.find(
      (relation: { transaction: { id: string } }) =>
        relation.transaction.id === accepted.body.id,
    );
    assert(
      lifecycle?.transactionItemId === exactTransactionItem.id &&
        lifecycle.direction === "outgoing" &&
        lifecycle.counterpart?.id === USER_2_ID,
      "Card Activity did not trace the exact transaction item/direction",
    );
    assert(
      lifecycle.handoff?.id === handoff.id &&
        lifecycle.handoff.store.id === staff.store_id,
      "Card Activity did not expose the exact Transaction handoff/Store",
    );
    assert(
      lifecycle.custody?.id === exactCustody.id &&
        lifecycle.custody.custody_status === "in_store" &&
        otherTransactionItem
          .transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items
          ?.custody_status === "awaiting_delivery_to_store",
      "Card Activity did not expose this exact card's per-item custody",
    );
    assert(
      lifecycleActivity.body.offers.receivedOnListing.find(
        (offer: { id: string; transactionId: string | null }) =>
          offer.id === offerResponse.body.id &&
          offer.transactionId === accepted.body.id,
      ),
      "Accepted received Offer was not linked to its Transaction",
    );
    await harness.as(user2).get(`/api/me/inventory/${x}/activity`).expect(404);
    const context = await harness
      .as(user1)
      .post("/api/me/card-context")
      .send({
        gameSlug: "mtg",
        canonicalCardIds: [physical.card_printings.canonical_card_id],
        printingIds: [physical.printing_id],
      })
      .expect(201);
    assert(
      context.body.canonicalOwned[physical.card_printings.canonical_card_id] ===
        4 && context.body.printingOwned[physical.printing_id] === 4,
      "Batched ownership quantities incorrect",
    );

    await harness
      .as(user1)
      .patch(`/api/me/inventory/${x}/collection`)
      .send({ collectionId: b })
      .expect(200);
    let moved = await db.inventory_items.findUnique({ where: { id: x } });
    assert(
      moved?.collection_id === b &&
        moved.quantity === 2 &&
        moved.owner_user_id === USER_1_ID,
      "Single move changed Inventory invariants",
    );
    assert(
      (await db.listings.count({ where: { inventory_item_id: x } })) === 1 &&
        (await db.inventory_item_interests.count({
          where: { inventory_item_id: x },
        })) === 1,
      "Move broke Listing or Interest relation",
    );
    await harness
      .as(user1)
      .patch(`/api/me/inventory/${x}/collection`)
      .send({ collectionId: null })
      .expect(200);
    moved = await db.inventory_items.findUnique({ where: { id: x } });
    assert(
      moved?.collection_id === null && moved.id === x,
      "Move to no Collection failed",
    );
    await harness
      .as(user1)
      .post(`/api/me/collections/${a}/items/move`)
      .send({
        gameSlug: "mtg",
        destinationCollectionId: b,
        inventoryItemIds: [y, z],
      })
      .expect(201);
    assert(
      (await db.inventory_items.count({
        where: { id: { in: [y, z] }, collection_id: b },
      })) === 2,
      "Successful bulk move incomplete",
    );
    await harness
      .as(user1)
      .post(`/api/me/collections/${b}/items/move`)
      .send({
        gameSlug: "mtg",
        destinationCollectionId: a,
        inventoryItemIds: [y, foreign],
      })
      .expect(400);
    assert(
      (await db.inventory_items.findUnique({ where: { id: y } }))
        ?.collection_id === b,
      "Invalid bulk move partially moved a valid row",
    );
    await harness
      .as(user1)
      .patch(`/api/me/inventory/${foreign}/collection`)
      .send({ collectionId: a })
      .expect(404);
    await harness
      .as(user1)
      .patch(`/api/me/inventory/${y}/collection`)
      .send({ collectionId: other })
      .expect(400);
    console.log(
      "Interest, notification, exact lifecycle activity, availability, ownership, and Collection movement DB certification passed.",
    );
  } finally {
    if (triggerInstalled)
      await db.$executeRawUnsafe(
        `DROP TRIGGER IF EXISTS cert_fail_interest_notification ON user_notifications; DROP FUNCTION IF EXISTS cert_fail_interest_notification()`,
      );
    await db.transactions.deleteMany({ where: { id: { in: transactions } } });
    await db.listing_offers.deleteMany({ where: { id: { in: offers } } });
    await db.user_notifications.deleteMany({
      where: {
        OR: [
          { inventory_item_id: { in: inventory } },
          { inventory_item_interest_id: { in: interests } },
        ],
      },
    });
    await db.inventory_item_interests.deleteMany({
      where: {
        OR: [
          { id: { in: interests } },
          { inventory_item_id: { in: inventory } },
        ],
      },
    });
    await db.listings.deleteMany({ where: { id: { in: listings } } });
    await db.wishlists.deleteMany({ where: { id: { in: wishlists } } });
    await db.inventory_items.deleteMany({ where: { id: { in: inventory } } });
    await db.collections.deleteMany({ where: { id: { in: collections } } });
    await db.$disconnect();
  }
}
void runInterestRelationshipCertification();
