import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import {
  createUserWishlistSchema,
  createWishlistItemSchema,
  bulkCreateWishlistItemsSchema,
  gameScopedListQuerySchema,
  updateUserWishlistSchema,
  updateWishlistItemSchema,
} from "@repo/validation";
import type { AuthenticatedPrincipal } from "../auth/auth.types";
import type {
  CreateUserWishlistInput,
  CreateWishlistItemInput,
  BulkCreateWishlistItemsInput,
  GameScopedListQuery,
  UpdateUserWishlistInput,
  UpdateWishlistItemInput,
} from "@repo/validation";
import { CurrentUser } from "../auth/current-user.decorator";
import { ZodValidationPipe } from "../common/pipes/zod-validation.pipe";
import { WishlistsService } from "./wishlists.service";

@Controller("me/wishlists")
export class MeWishlistsController {
  constructor(private readonly wishlists: WishlistsService) {}
  @Get() list(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Query(new ZodValidationPipe(gameScopedListQuerySchema))
    query: GameScopedListQuery,
  ) {
    return this.wishlists.getUserWishlists(principal.deckdealUserId!, query);
  }
  @Post() create(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Body(new ZodValidationPipe(createUserWishlistSchema))
    input: CreateUserWishlistInput,
  ) {
    return this.wishlists.createUserWishlist(principal.deckdealUserId!, input);
  }
  @Get(":wishlistId") async get(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Param("wishlistId", new ParseUUIDPipe({ version: "4" }))
    wishlistId: string,
    @Query("gameSlug") gameSlug: string,
  ) {
    await this.wishlists.assertOwnedWishlistGame(
      principal.deckdealUserId!,
      wishlistId,
      gameSlug,
    );
    return this.wishlists.getUserWishlist(
      principal.deckdealUserId!,
      wishlistId,
    );
  }
  @Patch(":wishlistId") async update(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Param("wishlistId", new ParseUUIDPipe({ version: "4" }))
    wishlistId: string,
    @Query("gameSlug") gameSlug: string,
    @Body(new ZodValidationPipe(updateUserWishlistSchema))
    input: UpdateUserWishlistInput,
  ) {
    await this.wishlists.assertOwnedWishlistGame(
      principal.deckdealUserId!,
      wishlistId,
      gameSlug,
    );
    return this.wishlists.updateUserWishlist(
      principal.deckdealUserId!,
      wishlistId,
      input,
    );
  }
  @Post(":wishlistId/items") async addItem(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Param("wishlistId", new ParseUUIDPipe({ version: "4" }))
    wishlistId: string,
    @Query("gameSlug") gameSlug: string,
    @Body(new ZodValidationPipe(createWishlistItemSchema))
    input: CreateWishlistItemInput,
  ) {
    await this.wishlists.assertOwnedWishlistGame(
      principal.deckdealUserId!,
      wishlistId,
      gameSlug,
    );
    return this.wishlists.createWishlistItem(
      principal.deckdealUserId!,
      wishlistId,
      input,
    );
  }
  @Post(":wishlistId/items/bulk") async addItemsBulk(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Param("wishlistId", new ParseUUIDPipe({ version: "4" })) wishlistId: string,
    @Query("gameSlug") gameSlug: string,
    @Body(new ZodValidationPipe(bulkCreateWishlistItemsSchema)) input: BulkCreateWishlistItemsInput,
  ) {
    return this.wishlists.createWishlistItemsBulk(
      principal.deckdealUserId!, wishlistId, gameSlug, input,
    );
  }
  @Patch(":wishlistId/items/:itemId") async updateItem(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Param("wishlistId", new ParseUUIDPipe({ version: "4" }))
    wishlistId: string,
    @Param("itemId", new ParseUUIDPipe({ version: "4" })) itemId: string,
    @Query("gameSlug") gameSlug: string,
    @Body(new ZodValidationPipe(updateWishlistItemSchema))
    input: UpdateWishlistItemInput,
  ) {
    await this.wishlists.assertOwnedWishlistGame(
      principal.deckdealUserId!,
      wishlistId,
      gameSlug,
    );
    return this.wishlists.updateWishlistItem(
      principal.deckdealUserId!,
      wishlistId,
      itemId,
      input,
    );
  }
}
