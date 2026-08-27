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
  createUserListingSchema,
  setUserListingStatusSchema,
  updateUserListingSchema,
} from "@repo/validation";
import type {
  CreateUserListingInput,
  SetUserListingStatusInput,
  UpdateUserListingInput,
} from "@repo/validation";

import { ZodValidationPipe } from "../common/pipes/zod-validation.pipe";
import { ListingsService } from "./listings.service";
import { Public } from "../auth/public.decorator";

@Controller("listings")
export class ListingsController {
  constructor(
    private readonly listingsService: ListingsService,
  ) {}

  @Get()
  @Public()
  getActiveListings() {
    return this.listingsService.getActiveListings();
  }

  @Get(":listingId")
  @Public()
  getListing(
    @Param(
      "listingId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    listingId: string,
  ) {
    return this.listingsService.getListing(
      listingId,
    );
  }

  @Get("users/:userId")
  getUserListings(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,
  ) {
    return this.listingsService.getUserListings(
      userId,
    );
  }

  @Post("users/:userId")
  createUserListing(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,

    @Body(
      new ZodValidationPipe(
        createUserListingSchema,
      ),
    )
    input: CreateUserListingInput,
  ) {
    return this.listingsService.createUserListing(
      userId,
      input,
    );
  }

  @Patch(
    "users/:userId/:listingId",
  )
  updateUserListing(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,

    @Param(
      "listingId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    listingId: string,

    @Body(
      new ZodValidationPipe(
        updateUserListingSchema,
      ),
    )
    input: UpdateUserListingInput,
  ) {
    return this.listingsService.updateUserListing(
      userId,
      listingId,
      input,
    );
  }

  @Patch(
    "users/:userId/:listingId/status",
  )
  setUserListingStatus(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,

    @Param(
      "listingId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    listingId: string,

    @Body(
      new ZodValidationPipe(
        setUserListingStatusSchema,
      ),
    )
    input: SetUserListingStatusInput,
  ) {
    return this.listingsService.setUserListingStatus(
      userId,
      listingId,
      input,
    );
  }
}
