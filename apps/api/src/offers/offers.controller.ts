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
  acceptListingOfferSchema,
  createListingOfferSchema,
  gameScopedListQuerySchema,
} from "@repo/validation";

import type {
  AcceptListingOfferInput,
  CreateListingOfferInput,
  GameScopedListQuery,
} from "@repo/validation";

import { ZodValidationPipe } from "../common/pipes/zod-validation.pipe";
import { OffersService } from "./offers.service";

@Controller("offers")
export class OffersController {
  constructor(
    private readonly offersService:
      OffersService,
  ) {}

  @Post(
    "listings/:listingId/users/:userId",
  )
  createUserOffer(
    @Param(
      "listingId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    listingId: string,

    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,

    @Body(
      new ZodValidationPipe(
        createListingOfferSchema,
      ),
    )
    input:
      CreateListingOfferInput,
  ) {
    return this.offersService.createUserOffer(
      userId,
      listingId,
      input,
    );
  }

  @Post(
    "listings/:listingId/users/:userId/from-interest/:interestId",
  )
  createUserOfferFromInterest(
    @Param(
      "listingId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    listingId: string,

    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,

    @Param(
      "interestId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    interestId: string,

    @Body(
      new ZodValidationPipe(
        createListingOfferSchema,
      ),
    )
    input:
      CreateListingOfferInput,
  ) {
    return this.offersService.createUserOffer(
      userId,
      listingId,
      input,
      interestId,
    );
  }

  @Get(
    "users/:userId/sent",
  )
  getUserSentOffers(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,

    @Query(new ZodValidationPipe(gameScopedListQuerySchema))
    query: GameScopedListQuery,
  ) {
    return this.offersService.getUserSentOffers(
      userId,
      query,
    );
  }

  @Get(
    "users/:userId/received",
  )
  getUserReceivedOffers(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,

    @Query(new ZodValidationPipe(gameScopedListQuerySchema))
    query: GameScopedListQuery,
  ) {
    return this.offersService.getUserReceivedOffers(
      userId,
      undefined,
      query,
    );
  }

  @Get(
    "listings/:listingId/users/:userId/received",
  )
  getUserReceivedOffersForListing(
    @Param(
      "listingId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    listingId: string,

    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,
  ) {
    return this.offersService.getUserReceivedOffers(
      userId,
      listingId,
    );
  }

  @Patch(
    ":offerId/users/:userId/withdraw",
  )
  withdrawUserOffer(
    @Param(
      "offerId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    offerId: string,

    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,
  ) {
    return this.offersService.withdrawUserOffer(
      userId,
      offerId,
    );
  }

  @Patch(
    ":offerId/users/:userId/reject",
  )
  rejectUserOffer(
    @Param(
      "offerId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    offerId: string,

    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,
  ) {
    return this.offersService.rejectUserOffer(
      userId,
      offerId,
    );
  }

  @Post(
    ":offerId/users/:userId/accept",
  )
  acceptUserOffer(
    @Param(
      "offerId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    offerId: string,

    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,

    @Body(
      new ZodValidationPipe(
        acceptListingOfferSchema,
      ),
    )
    input:
      AcceptListingOfferInput,
  ) {
    return this.offersService.acceptUserOffer(
      userId,
      offerId,
      input,
    );
  }
}