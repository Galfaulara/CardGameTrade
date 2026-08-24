import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
} from "@nestjs/common";

import {
  setPreferredTradeStoreSchema,
} from "@repo/validation";

import type {
  SetPreferredTradeStoreInput,
} from "@repo/validation";

import { ZodValidationPipe } from "../common/pipes/zod-validation.pipe";
import { PreferencesService } from "./preferences.service";

@Controller("preferences")
export class PreferencesController {
  constructor(
    private readonly preferencesService:
      PreferencesService,
  ) {}

  @Get(
    "users/:userId/trade-store",
  )
  getPreferredTradeStore(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,
  ) {
    return this.preferencesService.getPreferredTradeStore(
      userId,
    );
  }

  @Patch(
    "users/:userId/trade-store",
  )
  setPreferredTradeStore(
    @Param(
      "userId",
      new ParseUUIDPipe({
        version: "4",
      }),
    )
    userId: string,

    @Body(
      new ZodValidationPipe(
        setPreferredTradeStoreSchema,
      ),
    )
    input:
      SetPreferredTradeStoreInput,
  ) {
    return this.preferencesService.setPreferredTradeStore(
      userId,
      input,
    );
  }
}