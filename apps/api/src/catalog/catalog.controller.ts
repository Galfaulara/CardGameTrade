import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Query,
} from "@nestjs/common";

import { CatalogService } from "./catalog.service";

@Controller("catalog")
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get("games")
  getGames() {
    return this.catalogService.getGames();
  }

  @Get("games/:gameId/sets")
  getSetsByGame(
    @Param("gameId", new ParseUUIDPipe({ version: "4" }))
    gameId: string,
  ) {
    return this.catalogService.getSetsByGame(gameId);
  }

  @Get("games/:gameId/cards")
  searchCards(
    @Param("gameId", new ParseUUIDPipe({ version: "4" }))
    gameId: string,
    @Query("q") query: string,
  ) {
    return this.catalogService.searchCards(gameId, query ?? "");
  }

  @Get("cards/:canonicalCardId/printings")
  getPrintingsByCanonicalCard(
    @Param("canonicalCardId", new ParseUUIDPipe({ version: "4" }))
    canonicalCardId: string,
  ) {
    return this.catalogService.getPrintingsByCanonicalCard(
      canonicalCardId,
    );
  }

  @Get("printings/:printingId/finishes")
  getPrintingFinishes(
    @Param("printingId", new ParseUUIDPipe({ version: "4" }))
    printingId: string,
  ) {
    return this.catalogService.getPrintingFinishes(printingId);
  }
}