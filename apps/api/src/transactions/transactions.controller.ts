import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
} from "@nestjs/common";

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
  ) {
    return this.transactionsService.getUserTransactions(
      userId,
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
