import {
  Controller,
  ForbiddenException,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
} from "@nestjs/common";

import { CurrentUser } from "../auth/current-user.decorator";
import type { AuthenticatedPrincipal } from "../auth/auth.types";
import { StoreHandoffsService } from "./store-handoffs.service";

@Controller("store-handoffs")
export class StoreHandoffsController {
  constructor(
    private readonly storeHandoffsService: StoreHandoffsService,
  ) {}

  private requireCurrentStaff(
    principal: AuthenticatedPrincipal,
    requestedStaffUserId?: string,
  ) {
    const actorUserId =
      principal.deckdealUserId;

    if (!actorUserId) {
      throw new ForbiddenException(
        "An active DeckDeal user is required for Store operations.",
      );
    }

    if (
      requestedStaffUserId &&
      requestedStaffUserId !== actorUserId
    ) {
      throw new ForbiddenException(
        "Store operations must use the authenticated staff identity.",
      );
    }

    return actorUserId;
  }

  @Get(
    "stores/:storeId",
  )
  getStoreHandoffs(
    @Param(
      "storeId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    storeId: string,
    @CurrentUser() principal: AuthenticatedPrincipal,
  ) {
    return this.storeHandoffsService.getStoreHandoffs(
      storeId,
      this.requireCurrentStaff(
        principal,
      ),
    );
  }

  @Get(":handoffId")
  getHandoff(
    @Param(
      "handoffId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    handoffId: string,
    @CurrentUser() principal: AuthenticatedPrincipal,
  ) {
    return this.storeHandoffsService.getHandoff(
      handoffId,
      this.requireCurrentStaff(
        principal,
      ),
    );
  }

  @Patch(
    ":handoffId/items/:transactionItemId/receive",
  )
  receiveItemForCurrentStaff(
    @Param(
      "handoffId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    handoffId: string,
    @Param(
      "transactionItemId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    transactionItemId: string,
    @CurrentUser() principal: AuthenticatedPrincipal,
  ) {
    return this.storeHandoffsService.receiveItem(
      handoffId,
      transactionItemId,
      this.requireCurrentStaff(
        principal,
      ),
    );
  }

  @Patch(
    ":handoffId/items/:transactionItemId/receive/users/:staffUserId",
  )
  receiveItem(
    @Param(
      "handoffId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    handoffId: string,
    @Param(
      "transactionItemId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    transactionItemId: string,
    @Param(
      "staffUserId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    staffUserId: string,
    @CurrentUser() principal: AuthenticatedPrincipal,
  ) {
    return this.storeHandoffsService.receiveItem(
      handoffId,
      transactionItemId,
      this.requireCurrentStaff(
        principal,
        staffUserId,
      ),
    );
  }

  @Patch(
    ":handoffId/items/:transactionItemId/verify",
  )
  verifyItemForCurrentStaff(
    @Param(
      "handoffId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    handoffId: string,
    @Param(
      "transactionItemId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    transactionItemId: string,
    @CurrentUser() principal: AuthenticatedPrincipal,
  ) {
    return this.storeHandoffsService.verifyItem(
      handoffId,
      transactionItemId,
      this.requireCurrentStaff(
        principal,
      ),
    );
  }

  @Patch(
    ":handoffId/items/:transactionItemId/verify/users/:staffUserId",
  )
  verifyItem(
    @Param(
      "handoffId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    handoffId: string,
    @Param(
      "transactionItemId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    transactionItemId: string,
    @Param(
      "staffUserId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    staffUserId: string,
    @CurrentUser() principal: AuthenticatedPrincipal,
  ) {
    return this.storeHandoffsService.verifyItem(
      handoffId,
      transactionItemId,
      this.requireCurrentStaff(
        principal,
        staffUserId,
      ),
    );
  }

  @Patch(
    ":handoffId/items/:transactionItemId/release",
  )
  releaseItemForCurrentStaff(
    @Param(
      "handoffId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    handoffId: string,
    @Param(
      "transactionItemId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    transactionItemId: string,
    @CurrentUser() principal: AuthenticatedPrincipal,
  ) {
    return this.storeHandoffsService.releaseItem(
      handoffId,
      transactionItemId,
      this.requireCurrentStaff(
        principal,
      ),
    );
  }

  @Patch(
    ":handoffId/items/:transactionItemId/release/users/:staffUserId",
  )
  releaseItem(
    @Param(
      "handoffId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    handoffId: string,
    @Param(
      "transactionItemId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    transactionItemId: string,
    @Param(
      "staffUserId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    staffUserId: string,
    @CurrentUser() principal: AuthenticatedPrincipal,
  ) {
    return this.storeHandoffsService.releaseItem(
      handoffId,
      transactionItemId,
      this.requireCurrentStaff(
        principal,
        staffUserId,
      ),
    );
  }
}
