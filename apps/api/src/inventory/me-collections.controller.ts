import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { createUserCollectionSchema, gameScopedListQuerySchema } from "@repo/validation";
import type { AuthenticatedPrincipal } from "../auth/auth.types";
import type { CreateUserCollectionInput, GameScopedListQuery } from "@repo/validation";
import { CurrentUser } from "../auth/current-user.decorator";
import { ZodValidationPipe } from "../common/pipes/zod-validation.pipe";
import { InventoryService } from "./inventory.service";

@Controller("me/collections")
export class MeCollectionsController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  list(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Query(new ZodValidationPipe(gameScopedListQuerySchema)) query: GameScopedListQuery,
  ) {
    return this.inventoryService.getUserCollections(principal.deckdealUserId!, query);
  }

  @Post()
  create(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Body(new ZodValidationPipe(createUserCollectionSchema)) input: CreateUserCollectionInput,
  ) {
    return this.inventoryService.createUserCollection(principal.deckdealUserId!, input);
  }
}
