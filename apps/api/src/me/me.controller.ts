import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import {
  myProfileStoreOptionsQuerySchema,
  updateMyProfileSchema,
  cardRelationshipContextSchema,
} from "@repo/validation";
import type {
  AuthenticatedPrincipal,
} from "../auth/auth.types";
import type {
  MyProfileStoreOptionsQuery,
  UpdateMyProfileInput,
  CardRelationshipContextInput,
} from "@repo/validation";
import { CurrentUser } from "../auth/current-user.decorator";
import { ZodValidationPipe } from "../common/pipes/zod-validation.pipe";
import { MeService } from "./me.service";

@Controller("me")
export class MeController {
  constructor(
    private readonly meService:
      MeService,
  ) {}

  @Get("profile")
  getProfile(
    @CurrentUser()
    principal:
      AuthenticatedPrincipal,
  ) {
    return this.meService.getProfile(
      principal.deckdealUserId!,
    );
  }

  @Patch("profile")
  updateProfile(
    @CurrentUser()
    principal:
      AuthenticatedPrincipal,

    @Body(
      new ZodValidationPipe(
        updateMyProfileSchema,
      ),
    )
    input:
      UpdateMyProfileInput,
  ) {
    return this.meService.updateProfile(
      principal.deckdealUserId!,
      input,
    );
  }

  @Get("profile/store-options")
  getProfileStoreOptions(
    @Query(
      new ZodValidationPipe(
        myProfileStoreOptionsQuerySchema,
      ),
    )
    query:
      MyProfileStoreOptionsQuery,
  ) {
    return this.meService.getProfileStoreOptions(
      query,
    );
  }

  @Post("card-context")
  cardContext(
    @CurrentUser() principal: AuthenticatedPrincipal,
    @Body(new ZodValidationPipe(cardRelationshipContextSchema)) input: CardRelationshipContextInput,
  ) { return this.meService.getCardRelationshipContext(principal.deckdealUserId!, input); }
}
