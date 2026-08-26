import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
} from "@nestjs/common";

import { StoreHandoffsService } from "./store-handoffs.service";
import { CurrentUser } from "../auth/current-user.decorator";
import type { AuthenticatedPrincipal } from "../auth/auth.types";

@Controller("store-handoffs")
export class StoreHandoffsController {
  constructor(
    private readonly storeHandoffsService:
      StoreHandoffsService,
  ) {}

  @Get(":handoffId")
  getHandoff(
    @Param(
      "handoffId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    handoffId: string,
    @CurrentUser() principal: AuthenticatedPrincipal,
  ) {
    return this.storeHandoffsService.getHandoff(
      handoffId,
      principal.deckdealUserId!,
    );
  }

  @Patch(
    ":handoffId/items/:transactionItemId/receive/users/:staffUserId",
  )
  receiveItem(
    @Param(
      "handoffId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    handoffId: string,

    @Param(
      "transactionItemId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    transactionItemId: string,

    @Param(
      "staffUserId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    staffUserId: string,
  ) {
    return this.storeHandoffsService.receiveItem(
      handoffId,
      transactionItemId,
      staffUserId,
    );
  }

  @Patch(
    ":handoffId/items/:transactionItemId/verify/users/:staffUserId",
  )
  verifyItem(
    @Param(
      "handoffId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    handoffId: string,

    @Param(
      "transactionItemId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    transactionItemId: string,

    @Param(
      "staffUserId",
      new ParseUUIDPipe({
        version:
          "4",
      }),
    )
    staffUserId: string,
  ) {
    return this.storeHandoffsService.verifyItem(
      handoffId,
      transactionItemId,
      staffUserId,
    );
  }
  @Patch(
  ":handoffId/items/:transactionItemId/release/users/:staffUserId",
)
releaseItem(
  @Param(
    "handoffId",
    new ParseUUIDPipe({
      version:
        "4",
    }),
  )
  handoffId: string,

  @Param(
    "transactionItemId",
    new ParseUUIDPipe({
      version:
        "4",
    }),
  )
  transactionItemId: string,

  @Param(
    "staffUserId",
    new ParseUUIDPipe({
      version:
        "4",
    }),
  )
  staffUserId: string,
) {
  return this.storeHandoffsService.releaseItem(
    handoffId,
    transactionItemId,
    staffUserId,
  );
}
}
