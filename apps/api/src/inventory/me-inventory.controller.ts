import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import {
  createUserInventoryItemSchema,
  myInventoryListQuerySchema,
  updateUserInventoryItemSchema,
} from "@repo/validation";
import type {
  AuthenticatedPrincipal,
} from "../auth/auth.types";
import type {
  CreateUserInventoryItemInput,
  MyInventoryListQuery,
  UpdateUserInventoryItemInput,
} from "@repo/validation";
import { CurrentUser } from "../auth/current-user.decorator";
import { ZodValidationPipe } from "../common/pipes/zod-validation.pipe";
import { InventoryService } from "./inventory.service";

@Controller("me/inventory")
export class MeInventoryController {
  constructor(
    private readonly inventoryService:
      InventoryService,
  ) {}

  @Get()
  getMyInventory(
    @CurrentUser()
    principal:
      AuthenticatedPrincipal,

    @Query(
      new ZodValidationPipe(
        myInventoryListQuerySchema,
      ),
    )
    query: MyInventoryListQuery,
  ) {
    return this.inventoryService.getMyInventory(
      principal.deckdealUserId!,
      query,
    );
  }

  @Post()
  createMyInventoryItem(
    @CurrentUser()
    principal:
      AuthenticatedPrincipal,

    @Body(
      new ZodValidationPipe(
        createUserInventoryItemSchema,
      ),
    )
    input:
      CreateUserInventoryItemInput,
  ) {
    return this.inventoryService.createMyInventoryItem(
      principal.deckdealUserId!,
      input,
    );
  }

  @Get(":inventoryItemId")
  getMyInventoryItem(
    @CurrentUser()
    principal:
      AuthenticatedPrincipal,

    @Param(
      "inventoryItemId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    inventoryItemId: string,
  ) {
    return this.inventoryService.getMyInventoryItem(
      principal.deckdealUserId!,
      inventoryItemId,
    );
  }

  @Patch(":inventoryItemId")
  updateMyInventoryItem(
    @CurrentUser()
    principal:
      AuthenticatedPrincipal,

    @Param(
      "inventoryItemId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    inventoryItemId: string,

    @Body(
      new ZodValidationPipe(
        updateUserInventoryItemSchema,
      ),
    )
    input:
      UpdateUserInventoryItemInput,
  ) {
    return this.inventoryService.updateMyInventoryItem(
      principal.deckdealUserId!,
      inventoryItemId,
      input,
    );
  }

  @Post(":inventoryItemId/remove")
  @HttpCode(200)
  removeMyInventoryItem(
    @CurrentUser()
    principal:
      AuthenticatedPrincipal,

    @Param(
      "inventoryItemId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    inventoryItemId: string,
  ) {
    return this.inventoryService.removeMyInventoryItem(
      principal.deckdealUserId!,
      inventoryItemId,
    );
  }
}
