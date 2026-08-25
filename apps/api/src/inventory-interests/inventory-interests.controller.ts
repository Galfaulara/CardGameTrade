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
  createInventoryItemInterestSchema,
  updateInventoryItemInterestSchema,
} from "@repo/validation";

import type {
  CreateInventoryItemInterestInput,
  UpdateInventoryItemInterestInput,
} from "@repo/validation";

import { ZodValidationPipe } from "../common/pipes/zod-validation.pipe";
import { InventoryInterestsService } from "./inventory-interests.service";

@Controller(
  "inventory-interests",
)
export class InventoryInterestsController {
  constructor(
    private readonly inventoryInterestsService:
      InventoryInterestsService,
  ) {}

  @Post(
    "inventory/:inventoryItemId/users/:userId",
  )
  createUserInterest(
    @Param(
      "inventoryItemId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    inventoryItemId:
      string,

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
        createInventoryItemInterestSchema,
      ),
    )
    input:
      CreateInventoryItemInterestInput,
  ) {
    return this.inventoryInterestsService.createUserInterest(
      userId,
      inventoryItemId,
      input,
    );
  }

  @Get(
    "users/:userId/sent",
  )
  getUserSentInterests(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    userId: string,
  ) {
    return this.inventoryInterestsService.getUserSentInterests(
      userId,
    );
  }

  @Get(
    "users/:userId/received",
  )
  getUserReceivedInterests(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    userId: string,
  ) {
    return this.inventoryInterestsService.getUserReceivedInterests(
      userId,
    );
  }

  @Patch(
    ":interestId/users/:userId",
  )
  updateUserInterest(
    @Param(
      "interestId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    interestId:
      string,

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
        updateInventoryItemInterestSchema,
      ),
    )
    input:
      UpdateInventoryItemInterestInput,
  ) {
    return this.inventoryInterestsService.updateUserInterest(
      userId,
      interestId,
      input,
    );
  }

  @Patch(
    ":interestId/users/:userId/withdraw",
  )
  withdrawUserInterest(
    @Param(
      "interestId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    interestId:
      string,

    @Param(
      "userId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    userId: string,
  ) {
    return this.inventoryInterestsService.withdrawUserInterest(
      userId,
      interestId,
    );
  }

  @Patch(
    ":interestId/owners/:ownerUserId/dismiss",
  )
  dismissReceivedInterest(
    @Param(
      "interestId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    interestId:
      string,

    @Param(
      "ownerUserId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    ownerUserId:
      string,
  ) {
    return this.inventoryInterestsService.dismissReceivedInterest(
      ownerUserId,
      interestId,
    );
  }
}
