import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Query } from "@nestjs/common";
import { bulkMoveCollectionItemsSchema, createUserCollectionSchema, gameScopedListQuerySchema } from "@repo/validation";
import type { AuthenticatedPrincipal } from "../auth/auth.types";
import type { BulkMoveCollectionItemsInput, CreateUserCollectionInput, GameScopedListQuery } from "@repo/validation";
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

  @Post(":collectionId/items/move")
  moveItems(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Param("collectionId", new ParseUUIDPipe({ version: "4" })) collectionId: string,
    @Body(new ZodValidationPipe(bulkMoveCollectionItemsSchema)) input: BulkMoveCollectionItemsInput,
  ) {
    return this.inventoryService.moveCollectionItems(principal.deckdealUserId!, collectionId, input);
  }
}
