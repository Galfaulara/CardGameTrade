import { Controller, Get, Param, ParseUUIDPipe, Patch } from "@nestjs/common";
import type { AuthenticatedPrincipal } from "../auth/auth.types";
import { CurrentUser } from "../auth/current-user.decorator";
import { NotificationsService } from "./notifications.service";

@Controller("me/notifications")
export class NotificationsController {
  constructor(private readonly notifications: NotificationsService) {}
  @Get() list(@CurrentUser() principal: AuthenticatedPrincipal) { return this.notifications.list(principal.deckdealUserId!); }
  @Patch("read-all") markAll(@CurrentUser() principal: AuthenticatedPrincipal) { return this.notifications.markAllRead(principal.deckdealUserId!); }
  @Patch(":notificationId/read") markOne(@CurrentUser() principal: AuthenticatedPrincipal, @Param("notificationId", new ParseUUIDPipe({ version: "4" })) id: string) { return this.notifications.markRead(principal.deckdealUserId!, id); }
}
