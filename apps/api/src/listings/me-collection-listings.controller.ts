import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Query } from "@nestjs/common";
import { collectionListingInputSchema } from "@repo/validation";
import type { AuthenticatedPrincipal } from "../auth/auth.types";
import type { CollectionListingInput } from "@repo/validation";
import { CurrentUser } from "../auth/current-user.decorator";
import { ZodValidationPipe } from "../common/pipes/zod-validation.pipe";
import { ListingsService } from "./listings.service";

@Controller("me/collections/:collectionId/listings")
export class MeCollectionListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Get("preflight")
  preflight(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Param("collectionId", new ParseUUIDPipe({ version: "4" })) collectionId: string,
    @Query("gameSlug") gameSlug: string,
  ) {
    return this.listingsService.preflightCollectionListings(principal.deckdealUserId!, collectionId, gameSlug);
  }

  @Post()
  create(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Param("collectionId", new ParseUUIDPipe({ version: "4" })) collectionId: string,
    @Body(new ZodValidationPipe(collectionListingInputSchema)) input: CollectionListingInput,
  ) {
    return this.listingsService.createCollectionListings(principal.deckdealUserId!, collectionId, input);
  }
}
