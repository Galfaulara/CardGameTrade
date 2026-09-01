import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from "@nestjs/common";
import type { AuthenticatedPrincipal } from "../auth/auth.types";
import { CurrentUser } from "../auth/current-user.decorator";
import { SocialService } from "./social.service";

const uuid = new ParseUUIDPipe({ version: "4" });

@Controller("me/social")
export class SocialController {
  constructor(private readonly social: SocialService) {}

  @Get("friends") list(@CurrentUser() principal: AuthenticatedPrincipal) {
    return this.social.listRelationships(principal.deckdealUserId!);
  }
  @Get("relationship/:targetUserId") relationship(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Param("targetUserId", uuid) userId: string,
  ) {
    return this.social.getRelationship(principal.deckdealUserId!, userId);
  }
  @Post("friends/:targetUserId") request(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Param("targetUserId", uuid) userId: string,
  ) {
    return this.social.requestFriend(principal.deckdealUserId!, userId);
  }
  @Patch("friends/:friendshipId/accept") accept(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Param("friendshipId", uuid) id: string,
  ) {
    return this.social.respondFriend(principal.deckdealUserId!, id, "accepted");
  }
  @Patch("friends/:friendshipId/decline") decline(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Param("friendshipId", uuid) id: string,
  ) {
    return this.social.respondFriend(principal.deckdealUserId!, id, "declined");
  }
  @Patch("friends/:friendshipId/cancel") cancel(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Param("friendshipId", uuid) id: string,
  ) {
    return this.social.cancelFriend(principal.deckdealUserId!, id);
  }
  @Patch("friends/:friendshipId/remove") remove(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Param("friendshipId", uuid) id: string,
  ) {
    return this.social.removeFriend(principal.deckdealUserId!, id);
  }
  @Post("blocks/:targetUserId") block(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Param("targetUserId", uuid) userId: string,
  ) {
    return this.social.block(principal.deckdealUserId!, userId);
  }
  @Delete("blocks/:targetUserId") unblock(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Param("targetUserId", uuid) userId: string,
  ) {
    return this.social.unblock(principal.deckdealUserId!, userId);
  }

  @Get("conversations") inbox(
    @CurrentUser() principal: AuthenticatedPrincipal,
  ) {
    return this.social.inbox(principal.deckdealUserId!);
  }
  @Post("conversations") open(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Body()
    input: {
      kind?: string;
      userId?: string;
      contextType?: string;
      contextId?: string;
    },
  ) {
    return this.social.openConversation(principal.deckdealUserId!, input);
  }
  @Get("conversations/:conversationId") conversation(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Param("conversationId", uuid) id: string,
  ) {
    return this.social.getConversation(principal.deckdealUserId!, id);
  }
  @Post("conversations/:conversationId/messages") send(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Param("conversationId", uuid) id: string,
    @Body() input: { body?: string },
  ) {
    return this.social.sendMessage(principal.deckdealUserId!, id, input.body);
  }
  @Patch("conversations/:conversationId/read") read(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Param("conversationId", uuid) id: string,
  ) {
    return this.social.markRead(principal.deckdealUserId!, id);
  }
}
