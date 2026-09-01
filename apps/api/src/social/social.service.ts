import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Prisma } from "@repo/db";
import { DatabaseService } from "../database/database.service";

type ContextType =
  | "listing"
  | "inventory_interest"
  | "listing_offer"
  | "wishlist_offer"
  | "transaction";
const identity = {
  id: true,
  username: true,
  display_name: true,
  status: true,
} as const;
const uuidPattern =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

@Injectable()
export class SocialService {
  constructor(private readonly database: DatabaseService) {}
  private pair(a: string, b: string) {
    return a < b ? ([a, b] as const) : ([b, a] as const);
  }
  private async active(userId: string) {
    const user = await this.database.client.user_profiles.findUnique({
      where: { id: userId },
      select: identity,
    });
    if (!user) throw new NotFoundException("Collector was not found.");
    if (user.status !== "active")
      throw new ForbiddenException(
        "This action is unavailable for an inactive collector.",
      );
    return user;
  }
  private async blocked(a: string, b: string, tx: any = this.database.client) {
    return Boolean(
      await tx.user_blocks.findFirst({
        where: {
          OR: [
            { blocker_user_id: a, blocked_user_id: b },
            { blocker_user_id: b, blocked_user_id: a },
          ],
        },
        select: { blocker_user_id: true },
      }),
    );
  }
  private publicFriend(row: any, viewer: string) {
    const other = row.user_low_id === viewer ? row.user_high : row.user_low;
    return {
      id: row.id,
      status: row.status,
      direction: row.requester_user_id === viewer ? "outgoing" : "incoming",
      requestedAt: row.requested_at.toISOString(),
      respondedAt: row.responded_at?.toISOString() ?? null,
      user: other,
    };
  }
  async getRelationship(userId: string, otherId: string) {
    if (userId === otherId) return { state: "self" };
    const [low, high] = this.pair(userId, otherId);
    const [relationship, myBlock, anyBlock] = await Promise.all([
      this.database.client.user_friendships.findUnique({
        where: {
          user_low_id_user_high_id: { user_low_id: low, user_high_id: high },
        },
        include: {
          user_low: { select: identity },
          user_high: { select: identity },
        },
      }),
      this.database.client.user_blocks.findUnique({
        where: {
          blocker_user_id_blocked_user_id: {
            blocker_user_id: userId,
            blocked_user_id: otherId,
          },
        },
      }),
      this.blocked(userId, otherId),
    ]);
    if (myBlock) return { state: "blocked_by_me" };
    if (anyBlock) return { state: "unavailable" };
    if (!relationship || ["declined", "removed"].includes(relationship.status))
      return { state: "none" };
    return {
      state: relationship.status,
      relationship: this.publicFriend(relationship, userId),
    };
  }
  async listRelationships(userId: string) {
    await this.active(userId);
    const [rows, blocks] = await Promise.all([
      this.database.client.user_friendships.findMany({
        where: { OR: [{ user_low_id: userId }, { user_high_id: userId }] },
        include: {
          user_low: { select: identity },
          user_high: { select: identity },
        },
        orderBy: { updated_at: "desc" },
      }),
      this.database.client.user_blocks.findMany({
        where: { blocker_user_id: userId },
        include: { blocked: { select: identity } },
        orderBy: { created_at: "desc" },
      }),
    ]);
    const mapped = rows.map((row) => this.publicFriend(row, userId));
    return {
      friends: mapped.filter((row) => row.status === "accepted"),
      incoming: mapped.filter(
        (row) => row.status === "pending" && row.direction === "incoming",
      ),
      outgoing: mapped.filter(
        (row) => row.status === "pending" && row.direction === "outgoing",
      ),
      blocked: blocks.map((row) => ({
        createdAt: row.created_at.toISOString(),
        user: row.blocked,
      })),
    };
  }
  async requestFriend(userId: string, otherId: string) {
    if (userId === otherId)
      throw new BadRequestException("You cannot friend yourself.");
    await Promise.all([this.active(userId), this.active(otherId)]);
    if (await this.blocked(userId, otherId))
      throw new ForbiddenException("This social action is unavailable.");
    const [low, high] = this.pair(userId, otherId);
    return this.database.client
      .$transaction(
        async (tx) => {
          const existing = await tx.user_friendships.findUnique({
            where: {
              user_low_id_user_high_id: {
                user_low_id: low,
                user_high_id: high,
              },
            },
          });
          if (existing?.status === "pending") {
            if (existing.requester_user_id !== userId)
              throw new ConflictException(
                "This collector already sent you a request. Accept or decline it instead.",
              );
            return existing;
          }
          if (existing?.status === "accepted")
            throw new ConflictException("You are already friends.");
          const row = existing
            ? await tx.user_friendships.update({
                where: { id: existing.id },
                data: {
                  requester_user_id: userId,
                  status: "pending",
                  requested_at: new Date(),
                  responded_at: null,
                  removed_at: null,
                  updated_at: new Date(),
                },
              })
            : await tx.user_friendships.create({
                data: {
                  user_low_id: low,
                  user_high_id: high,
                  requester_user_id: userId,
                },
              });
          await tx.user_notifications.create({
            data: {
              recipient_user_id: otherId,
              actor_user_id: userId,
              type: "friend_request_received",
              user_friendship_id: row.id,
            },
          });
          return row;
        },
        { isolationLevel: Prisma.TransactionIsolationLevel.Serializable },
      )
      .catch((error) => {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          ["P2002", "P2034"].includes(error.code)
        )
          throw new ConflictException(
            "A friend request already exists for this collector.",
          );
        throw error;
      });
  }
  async respondFriend(
    userId: string,
    id: string,
    status: "accepted" | "declined",
  ) {
    await this.active(userId);
    return this.database.client.$transaction(async (tx) => {
      const row = await tx.user_friendships.findUnique({ where: { id } });
      if (!row) throw new NotFoundException("Friend request was not found.");
      if (
        row.status !== "pending" ||
        row.requester_user_id === userId ||
        ![row.user_low_id, row.user_high_id].includes(userId)
      )
        throw new ForbiddenException("Only the request recipient can respond.");
      if (await this.blocked(row.user_low_id, row.user_high_id, tx))
        throw new ForbiddenException("This social action is unavailable.");
      const updated = await tx.user_friendships.update({
        where: { id },
        data: { status, responded_at: new Date(), updated_at: new Date() },
      });
      if (status === "accepted")
        await tx.user_notifications.create({
          data: {
            recipient_user_id: row.requester_user_id,
            actor_user_id: userId,
            type: "friend_request_accepted",
            user_friendship_id: id,
          },
        });
      return updated;
    });
  }
  async cancelFriend(userId: string, id: string) {
    return this.endFriend(userId, id, true);
  }
  async removeFriend(userId: string, id: string) {
    return this.endFriend(userId, id, false);
  }
  private async endFriend(userId: string, id: string, cancel: boolean) {
    const row = await this.database.client.user_friendships.findUnique({
      where: { id },
    });
    if (!row || ![row.user_low_id, row.user_high_id].includes(userId))
      throw new NotFoundException("Friend relationship was not found.");
    if (
      cancel &&
      (row.status !== "pending" || row.requester_user_id !== userId)
    )
      throw new ForbiddenException(
        "Only the requester can cancel this request.",
      );
    if (!cancel && row.status !== "accepted")
      throw new ConflictException("This friendship is not active.");
    return this.database.client.user_friendships.update({
      where: { id },
      data: {
        status: "removed",
        removed_at: new Date(),
        updated_at: new Date(),
      },
    });
  }
  async block(userId: string, otherId: string) {
    if (userId === otherId)
      throw new BadRequestException("You cannot block yourself.");
    await Promise.all([this.active(userId), this.active(otherId)]);
    const [low, high] = this.pair(userId, otherId);
    return this.database.client.$transaction(async (tx) => {
      const block = await tx.user_blocks.upsert({
        where: {
          blocker_user_id_blocked_user_id: {
            blocker_user_id: userId,
            blocked_user_id: otherId,
          },
        },
        create: { blocker_user_id: userId, blocked_user_id: otherId },
        update: {},
      });
      await tx.user_friendships.updateMany({
        where: {
          user_low_id: low,
          user_high_id: high,
          status: { in: ["pending", "accepted"] },
        },
        data: {
          status: "removed",
          removed_at: new Date(),
          updated_at: new Date(),
        },
      });
      return block;
    });
  }
  async unblock(userId: string, otherId: string) {
    await this.database.client.user_blocks.deleteMany({
      where: { blocker_user_id: userId, blocked_user_id: otherId },
    });
    return { unblocked: true };
  }

  private async contextualCounterpart(
    userId: string,
    type: ContextType,
    id: string,
  ) {
    if (type === "listing") {
      const row = await this.database.client.listings.findUnique({
        where: { id },
        select: {
          status: true,
          seller_user_id: true,
          seller_store_id: true,
          inventory_items_listings_inventory_item_id_game_idToinventory_items: {
            select: { collections: { select: { visibility: true } } },
          },
        },
      });
      if (
        !row ||
        row.status !== "active" ||
        !row.seller_user_id ||
        row.seller_store_id ||
        row.inventory_items_listings_inventory_item_id_game_idToinventory_items
          .collections?.visibility !== "public"
      )
        throw new ForbiddenException(
          "This Listing is unavailable for user messaging.",
        );
      return row.seller_user_id;
    }
    if (type === "inventory_interest") {
      const row =
        await this.database.client.inventory_item_interests.findUnique({
          where: { id },
          select: {
            interested_user_id: true,
            inventory_items: { select: { owner_user_id: true } },
          },
        });
      if (
        !row?.interested_user_id ||
        !row.inventory_items.owner_user_id ||
        ![row.interested_user_id, row.inventory_items.owner_user_id].includes(
          userId,
        )
      )
        throw new ForbiddenException(
          "You are not a participant in this Interest.",
        );
      return row.interested_user_id === userId
        ? row.inventory_items.owner_user_id
        : row.interested_user_id;
    }
    if (type === "listing_offer") {
      const row = await this.database.client.listing_offers.findUnique({
        where: { id },
        select: {
          offerer_user_id: true,
          listings: { select: { seller_user_id: true } },
        },
      });
      if (
        !row?.offerer_user_id ||
        !row.listings.seller_user_id ||
        ![row.offerer_user_id, row.listings.seller_user_id].includes(userId)
      )
        throw new ForbiddenException(
          "You are not a participant in this Offer.",
        );
      return row.offerer_user_id === userId
        ? row.listings.seller_user_id
        : row.offerer_user_id;
    }
    if (type === "wishlist_offer") {
      const row = await this.database.client.wishlist_offers.findUnique({
        where: { id },
        select: {
          offerer_user_id: true,
          wishlist_items: {
            select: { wishlists: { select: { user_id: true } } },
          },
        },
      });
      const owner = row?.wishlist_items.wishlists.user_id;
      if (
        !row?.offerer_user_id ||
        !owner ||
        ![row.offerer_user_id, owner].includes(userId)
      )
        throw new ForbiddenException(
          "You are not a participant in this Wishlist Offer.",
        );
      return row.offerer_user_id === userId ? owner : row.offerer_user_id;
    }
    const row = await this.database.client.transactions.findUnique({
      where: { id },
      select: { seller_user_id: true, counterparty_user_id: true },
    });
    if (
      !row?.seller_user_id ||
      !row.counterparty_user_id ||
      ![row.seller_user_id, row.counterparty_user_id].includes(userId)
    )
      throw new ForbiddenException("You are not a participant in this Trade.");
    return row.seller_user_id === userId
      ? row.counterparty_user_id
      : row.seller_user_id;
  }
  async openConversation(
    userId: string,
    input: {
      kind?: string;
      userId?: string;
      contextType?: string;
      contextId?: string;
    },
  ) {
    await this.active(userId);
    const kind = input.kind === "general" ? "general" : "contextual";
    let otherId: string;
    if (kind === "general") {
      if (!input.userId || !uuidPattern.test(input.userId))
        throw new BadRequestException("A valid collector is required.");
      otherId = input.userId;
      await this.active(otherId);
      const [low, high] = this.pair(userId, otherId);
      const friend = await this.database.client.user_friendships.findUnique({
        where: {
          user_low_id_user_high_id: { user_low_id: low, user_high_id: high },
        },
      });
      if (friend?.status !== "accepted")
        throw new ForbiddenException(
          "General conversations are available to friends.",
        );
    } else {
      if (
        !input.contextId ||
        !uuidPattern.test(input.contextId) ||
        ![
          "listing",
          "inventory_interest",
          "listing_offer",
          "wishlist_offer",
          "transaction",
        ].includes(input.contextType ?? "")
      )
        throw new BadRequestException(
          "A supported marketplace context is required.",
        );
      otherId = await this.contextualCounterpart(
        userId,
        input.contextType as ContextType,
        input.contextId,
      );
      await this.active(otherId);
    }
    if (userId === otherId)
      throw new BadRequestException(
        "A conversation requires another collector.",
      );
    if (await this.blocked(userId, otherId))
      throw new ForbiddenException("Messaging is unavailable.");
    const [low, high] = this.pair(userId, otherId);
    if (kind === "general") {
      const existing = await this.database.client.conversations.findFirst({
        where: { kind, user_low_id: low, user_high_id: high },
      });
      if (existing) return existing;
    } else {
      const key = `${input.contextType}_id` as "listing_id";
      const existing =
        await this.database.client.conversation_contexts.findFirst({
          where: { [key]: input.contextId },
        });
      if (existing)
        return this.database.client.conversations.findUnique({
          where: { id: existing.conversation_id },
        });
    }
    try {
      return await this.database.client.$transaction(
        async (tx) => {
          const conversation = await tx.conversations.create({
            data: {
              kind,
              user_low_id: low,
              user_high_id: high,
              created_by_user_id: userId,
              participants: {
                create: [
                  { user_id: userId, last_read_at: new Date() },
                  { user_id: otherId },
                ],
              },
            },
          });
          if (kind === "contextual")
            await tx.conversation_contexts.create({
              data: {
                conversation_id: conversation.id,
                [`${input.contextType}_id`]: input.contextId,
              },
            });
          return conversation;
        },
        { isolationLevel: Prisma.TransactionIsolationLevel.Serializable },
      );
    } catch (error) {
      if (
        !(error instanceof Prisma.PrismaClientKnownRequestError) ||
        !["P2002", "P2034"].includes(error.code)
      )
        throw error;
      return kind === "general"
        ? this.database.client.conversations.findFirstOrThrow({
            where: { kind, user_low_id: low, user_high_id: high },
          })
        : this.database.client.conversations.findFirstOrThrow({
            where: {
              context: { is: { [`${input.contextType}_id`]: input.contextId } },
            },
          });
    }
  }
  private async participant(userId: string, conversationId: string) {
    const row = await this.database.client.conversation_participants.findUnique(
      {
        where: {
          conversation_id_user_id: {
            conversation_id: conversationId,
            user_id: userId,
          },
        },
        include: { conversation: true },
      },
    );
    if (!row) throw new NotFoundException("Conversation was not found.");
    return row;
  }
  async inbox(userId: string) {
    await this.active(userId);
    const rows = await this.database.client.conversation_participants.findMany({
      where: { user_id: userId, archived_at: null },
      include: {
        conversation: {
          include: {
            participants: { include: { user: { select: identity } } },
            messages: {
              where: { deleted_at: null },
              orderBy: { created_at: "desc" },
              take: 1,
            },
            context: true,
          },
        },
      },
      orderBy: { conversation: { last_message_at: "desc" } },
    });
    const unreadRows = rows.length
      ? await this.database.client.$queryRaw<
          Array<{ conversation_id: string; unread_count: bigint }>
        >(
          Prisma.sql`SELECT m.conversation_id, count(*)::bigint AS unread_count FROM messages m JOIN conversation_participants cp ON cp.conversation_id=m.conversation_id AND cp.user_id=${userId}::uuid WHERE m.sender_user_id<>${userId}::uuid AND m.deleted_at IS NULL AND m.created_at>COALESCE(cp.last_read_at,cp.joined_at) GROUP BY m.conversation_id`,
        )
      : [];
    const unread = new Map(
      unreadRows.map((row) => [row.conversation_id, Number(row.unread_count)]),
    );
    const items = rows.map((row) => ({
      id: row.conversation_id,
      kind: row.conversation.kind,
      counterpart:
        row.conversation.participants.find((p) => p.user_id !== userId)?.user ??
        null,
      lastMessage: row.conversation.messages[0] ?? null,
      context: row.conversation.context,
      unreadCount: unread.get(row.conversation_id) ?? 0,
    }));
    return {
      unreadCount: items.reduce((sum, row) => sum + row.unreadCount, 0),
      items,
    };
  }
  async getConversation(userId: string, id: string) {
    await this.active(userId);
    const participant = await this.participant(userId, id);
    const conversation =
      await this.database.client.conversations.findUniqueOrThrow({
        where: { id },
        include: {
          participants: { include: { user: { select: identity } } },
          messages: {
            where: { deleted_at: null },
            orderBy: { created_at: "asc" },
            take: 200,
          },
          context: true,
        },
      });
    const other = conversation.participants.find(
      (row) => row.user_id !== userId,
    )!;
    return {
      ...conversation,
      canSend:
        !(await this.blocked(userId, other.user_id)) &&
        (conversation.kind === "contextual" ||
          (
            await this.database.client.user_friendships.findUnique({
              where: {
                user_low_id_user_high_id: {
                  user_low_id: conversation.user_low_id,
                  user_high_id: conversation.user_high_id,
                },
              },
            })
          )?.status === "accepted"),
      counterpart: other.user,
      lastReadAt: participant.last_read_at?.toISOString() ?? null,
    };
  }
  async sendMessage(userId: string, id: string, value?: string) {
    await this.active(userId);
    const participant = await this.participant(userId, id);
    const body = value?.trim() ?? "";
    if (!body || body.length > 4000)
      throw new BadRequestException(
        "Message must be between 1 and 4,000 characters.",
      );
    const conversation = participant.conversation;
    const otherId =
      conversation.user_low_id === userId
        ? conversation.user_high_id
        : conversation.user_low_id;
    if (await this.blocked(userId, otherId))
      throw new ForbiddenException(
        "Messaging is unavailable for this conversation.",
      );
    if (conversation.kind === "general") {
      const friend = await this.database.client.user_friendships.findUnique({
        where: {
          user_low_id_user_high_id: {
            user_low_id: conversation.user_low_id,
            user_high_id: conversation.user_high_id,
          },
        },
      });
      if (friend?.status !== "accepted")
        throw new ForbiddenException(
          "Messaging is unavailable for this conversation.",
        );
    }
    return this.database.client.$transaction(async (tx) => {
      const now = new Date();
      const message = await tx.messages.create({
        data: { conversation_id: id, sender_user_id: userId, body },
      });
      await tx.conversations.update({
        where: { id },
        data: { last_message_at: now, updated_at: now },
      });
      await tx.conversation_participants.update({
        where: {
          conversation_id_user_id: { conversation_id: id, user_id: userId },
        },
        data: { last_read_at: now },
      });
      return message;
    });
  }
  async markRead(userId: string, id: string) {
    await this.participant(userId, id);
    await this.database.client.conversation_participants.update({
      where: {
        conversation_id_user_id: { conversation_id: id, user_id: userId },
      },
      data: { last_read_at: new Date() },
    });
    return this.inbox(userId);
  }
}
