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
  acceptListingOfferSchema,
  createListingOfferSchema,
} from "@repo/validation";

import type {
  AcceptListingOfferInput,
  CreateListingOfferInput,
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
  ) {
    return this.offersService.getUserSentOffers(
      userId,
    );
  }

  @Get(
    "listings/:listingId/users/:userId/received",
  )
  getUserReceivedOffers(
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