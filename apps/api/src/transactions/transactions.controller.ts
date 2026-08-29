import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Query,
} from "@nestjs/common";

import {
  gameScopedListQuerySchema,
} from "@repo/validation";

import type {
  GameScopedListQuery,
} from "@repo/validation";

import { ZodValidationPipe } from "../common/pipes/zod-validation.pipe";
import { TransactionsService } from "./transactions.service";

@Controller("transactions")
export class TransactionsController {
  constructor(
    private readonly transactionsService:
      TransactionsService,
  ) {}

  @Get(
    "users/:userId",
  )
  getUserTransactions(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    userId: string,

    @Query(new ZodValidationPipe(gameScopedListQuerySchema))
    query: GameScopedListQuery,
  ) {
    return this.transactionsService.getUserTransactions(
      userId,
      query,
    );
  }

  @Get(
    ":transactionId/users/:userId",
  )
  getUserTransaction(
    @Param(
      "transactionId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    transactionId: string,

    @Param(
      "userId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    userId: string,
  ) {
    return this.transactionsService.getUserTransaction(
      userId,
      transactionId,
    );
  }
}
