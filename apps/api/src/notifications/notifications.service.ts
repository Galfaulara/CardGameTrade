import { Injectable, NotFoundException } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";

@Injectable()
export class NotificationsService {
  constructor(private readonly database: DatabaseService) {}

  async list(userId: string) {
    const [items, unreadCount] = await Promise.all([
      this.database.client.user_notifications.findMany({
        where: { recipient_user_id: userId }, orderBy: { created_at: "desc" }, take: 50,
        select: { id: true, type: true, read_at: true, created_at: true, inventory_item_id: true,
          actor: { select: { id: true, username: true, display_name: true } },
          inventory_item_interest: { select: { interest_type: true } },
          user_friendship: { select: { id: true, status: true } },
          inventory_item: { select: { card_printings: { select: { canonical_cards: { select: { name: true } } } } } },
        },
      }),
      this.database.client.user_notifications.count({ where: { recipient_user_id: userId, read_at: null } }),
    ]);
    return { unreadCount, items: items.map((item) => ({
      id: item.id, type: item.type, readAt: item.read_at?.toISOString() ?? null,
      createdAt: item.created_at.toISOString(), inventoryItemId: item.inventory_item_id,
      actor: item.actor ? { id: item.actor.id, username: item.actor.username, displayName: item.actor.display_name } : null,
      interestType: item.inventory_item_interest?.interest_type ?? null,
      friendshipId: item.user_friendship?.id ?? null,
      cardName: item.inventory_item?.card_printings.canonical_cards.name ?? "card",
    })) };
  }

  async markRead(userId: string, notificationId: string) {
    const result = await this.database.client.user_notifications.updateMany({
      where: { id: notificationId, recipient_user_id: userId }, data: { read_at: new Date() },
    });
    if (!result.count) throw new NotFoundException("Notification was not found.");
    return this.list(userId);
  }

  async markAllRead(userId: string) {
    await this.database.client.user_notifications.updateMany({
      where: { recipient_user_id: userId, read_at: null }, data: { read_at: new Date() },
    });
    return this.list(userId);
  }
}
