import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import {
  FileInterceptor,
} from "@nestjs/platform-express";
import {
  createInventoryPhotoSchema,
  createUserCollectionSchema,
  createUserInventoryItemSchema,
  setInventoryCollectionSchema,
  updateUserInventoryItemSchema,
} from "@repo/validation";
import type {
  CreateInventoryPhotoInput,
  CreateUserCollectionInput,
  CreateUserInventoryItemInput,
  SetInventoryCollectionInput,
  UpdateUserInventoryItemInput,
} from "@repo/validation";

import { ZodValidationPipe } from "../common/pipes/zod-validation.pipe";
import {
  InventoryService,
} from "./inventory.service";
import type {
  InventoryPhotoUploadFile,
} from "./inventory.service";

@Controller("inventory")
export class InventoryController {
  constructor(
    private readonly inventoryService:
      InventoryService,
  ) {}

  @Get("users/:userId/items")
  getUserInventory(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,
  ) {
    return this.inventoryService.getUserInventory(
      userId,
    );
  }

  @Post("users/:userId/items")
  createUserInventoryItem(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,

    @Body(
      new ZodValidationPipe(
        createUserInventoryItemSchema,
      ),
    )
    input: CreateUserInventoryItemInput,
  ) {
    return this.inventoryService.createUserInventoryItem(
      userId,
      input,
    );
  }

  @Get(
    "users/:userId/collections",
  )
  getUserCollections(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,
  ) {
    return this.inventoryService.getUserCollections(
      userId,
    );
  }

  @Post(
    "users/:userId/collections",
  )
  createUserCollection(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,

    @Body(
      new ZodValidationPipe(
        createUserCollectionSchema,
      ),
    )
    input: CreateUserCollectionInput,
  ) {
    return this.inventoryService.createUserCollection(
      userId,
      input,
    );
  }

  @Patch(
    "users/:userId/items/:itemId/collection",
  )
  setUserInventoryCollection(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,

    @Param(
      "itemId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    itemId: string,

    @Body(
      new ZodValidationPipe(
        setInventoryCollectionSchema,
      ),
    )
    input: SetInventoryCollectionInput,
  ) {
    return this.inventoryService.setUserInventoryCollection(
      userId,
      itemId,
      input,
    );
  }

  @Patch(
    "users/:userId/items/:itemId",
  )
  updateUserInventoryItem(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,

    @Param(
      "itemId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    itemId: string,

    @Body(
      new ZodValidationPipe(
        updateUserInventoryItemSchema,
      ),
    )
    input: UpdateUserInventoryItemInput,
  ) {
    return this.inventoryService.updateUserInventoryItem(
      userId,
      itemId,
      input,
    );
  }

  @Post(
    "users/:userId/items/:itemId/photos",
  )
  @UseInterceptors(
    FileInterceptor(
      "file",
      {
        limits: {
          fileSize:
            6 * 1024 * 1024,
        },
      },
    ),
  )
  uploadUserInventoryPhoto(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,

    @Param(
      "itemId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    itemId: string,

    @Body(
      new ZodValidationPipe(
        createInventoryPhotoSchema,
      ),
    )
    input: CreateInventoryPhotoInput,

    @UploadedFile()
    file: InventoryPhotoUploadFile,
  ) {
    return this.inventoryService.uploadUserInventoryPhoto(
      userId,
      itemId,
      input,
      file,
    );
  }
}