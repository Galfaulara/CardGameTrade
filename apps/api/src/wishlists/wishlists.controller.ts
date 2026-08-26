import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from "@nestjs/common";

import {
  createUserWishlistSchema,
  createWishlistItemSchema,
  createWishlistOfferSchema,
  acceptWishlistOfferSchema,
  updateUserWishlistSchema,
  updateWishlistItemSchema,
} from "@repo/validation";

import type {
  AcceptWishlistOfferInput,
  CreateUserWishlistInput,
  CreateWishlistItemInput,
  CreateWishlistOfferInput,
  UpdateUserWishlistInput,
  UpdateWishlistItemInput,
} from "@repo/validation";

import { ZodValidationPipe } from "../common/pipes/zod-validation.pipe";
import { WishlistsService } from "./wishlists.service";
import { Public } from "../auth/public.decorator";

@Controller("wishlists")
export class WishlistsController {
  constructor(
    private readonly wishlistsService:
      WishlistsService,
  ) {}

  @Get(
    "public/items",
  )
  @Public()
  getPublicWishlistItems() {
    return this.wishlistsService.getPublicWishlistItems();
  }

  @Get(
    "users/:userId",
  )
  getUserWishlists(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    userId: string,
  ) {
    return this.wishlistsService.getUserWishlists(
      userId,
    );
  }

  @Get(
    ":wishlistId/users/:userId",
  )
  getUserWishlist(
    @Param(
      "wishlistId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    wishlistId: string,

    @Param(
      "userId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    userId: string,
  ) {
    return this.wishlistsService.getUserWishlist(
      userId,
      wishlistId,
    );
  }

  @Post(
    "users/:userId",
  )
  createUserWishlist(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    userId: string,

    @Body(
      new ZodValidationPipe(
        createUserWishlistSchema,
      ),
    )
    input:
      CreateUserWishlistInput,
  ) {
    return this.wishlistsService.createUserWishlist(
      userId,
      input,
    );
  }

  @Patch(
    ":wishlistId/users/:userId",
  )
  updateUserWishlist(
    @Param(
      "wishlistId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    wishlistId: string,

    @Param(
      "userId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    userId: string,

    @Body(
      new ZodValidationPipe(
        updateUserWishlistSchema,
      ),
    )
    input:
      UpdateUserWishlistInput,
  ) {
    return this.wishlistsService.updateUserWishlist(
      userId,
      wishlistId,
      input,
    );
  }

  @Post(
    ":wishlistId/users/:userId/items",
  )
  createWishlistItem(
    @Param(
      "wishlistId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    wishlistId: string,

    @Param(
      "userId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    userId: string,

    @Body(
      new ZodValidationPipe(
        createWishlistItemSchema,
      ),
    )
    input:
      CreateWishlistItemInput,
  ) {
    return this.wishlistsService.createWishlistItem(
      userId,
      wishlistId,
      input,
    );
  }

  @Patch(
    ":wishlistId/items/:itemId/users/:userId",
  )
  updateWishlistItem(
    @Param(
      "wishlistId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    wishlistId: string,

    @Param(
      "itemId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    itemId: string,

    @Param(
      "userId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    userId: string,

    @Body(
      new ZodValidationPipe(
        updateWishlistItemSchema,
      ),
    )
    input:
      UpdateWishlistItemInput,
  ) {
    return this.wishlistsService.updateWishlistItem(
      userId,
      wishlistId,
      itemId,
      input,
    );
  }

  @Post(
    "items/:wishlistItemId/offers/users/:userId",
  )
  createUserWishlistOffer(
    @Param(
      "wishlistItemId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    wishlistItemId: string,

    @Param(
      "userId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    userId: string,

    @Body(
      new ZodValidationPipe(
        createWishlistOfferSchema,
      ),
    )
    input:
      CreateWishlistOfferInput,
  ) {
    return this.wishlistsService.createUserWishlistOffer(
      userId,
      wishlistItemId,
      input,
    );
  }

  @Post(
    "items/:wishlistItemId/offers/users/:userId/from-interest/:interestId",
  )
  createUserWishlistOfferFromInterest(
    @Param(
      "wishlistItemId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    wishlistItemId: string,

    @Param(
      "userId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    userId: string,

    @Param(
      "interestId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    interestId: string,

    @Body(
      new ZodValidationPipe(
        createWishlistOfferSchema,
      ),
    )
    input:
      CreateWishlistOfferInput,
  ) {
    return this.wishlistsService.createUserWishlistOffer(
      userId,
      wishlistItemId,
      input,
      interestId,
    );
  }

  @Get(
    "offers/users/:userId/sent",
  )
  getUserSentWishlistOffers(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    userId: string,
  ) {
    return this.wishlistsService.getUserSentWishlistOffers(
      userId,
    );
  }

  @Get(
    "items/:wishlistItemId/offers/users/:userId/received",
  )
  getUserReceivedWishlistOffers(
    @Param(
      "wishlistItemId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    wishlistItemId: string,

    @Param(
      "userId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    userId: string,
  ) {
    return this.wishlistsService.getUserReceivedWishlistOffers(
      userId,
      wishlistItemId,
    );
  }

  @Patch(
    "offers/:offerId/users/:userId/withdraw",
  )
  withdrawUserWishlistOffer(
    @Param(
      "offerId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    offerId: string,

    @Param(
      "userId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    userId: string,
  ) {
    return this.wishlistsService.withdrawUserWishlistOffer(
      userId,
      offerId,
    );
  }

  @Post(
    "offers/:offerId/users/:userId/accept",
  )
  acceptUserWishlistOffer(
    @Param(
      "offerId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    offerId: string,

    @Param(
      "userId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    userId: string,

    @Body(
      new ZodValidationPipe(
        acceptWishlistOfferSchema,
      ),
    )
    input:
      AcceptWishlistOfferInput,
  ) {
    return this.wishlistsService.acceptUserWishlistOffer(
      userId,
      offerId,
      input,
    );
  }

  @Patch(
    "offers/:offerId/users/:userId/reject",
  )
  rejectUserWishlistOffer(
    @Param(
      "offerId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    offerId: string,

    @Param(
      "userId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    userId: string,
  ) {
    return this.wishlistsService.rejectUserWishlistOffer(
      userId,
      offerId,
    );
  }
}
