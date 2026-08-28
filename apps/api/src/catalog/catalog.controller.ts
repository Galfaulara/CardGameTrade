import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Body,
  Query,
} from "@nestjs/common";

import { CatalogService } from "./catalog.service";
import { Public } from "../auth/public.decorator";
import { MarketPricesService } from "./market-prices.service";

@Public()
@Controller("catalog")
export class CatalogController {
  constructor(private readonly catalogService: CatalogService, private readonly marketPrices: MarketPricesService) {}

  @Post("prices/latest")
  latestPrices(@Body() body: { items?: Array<{ printingId?: unknown; finish?: unknown }> }) {
    const items = Array.isArray(body?.items) ? body.items.slice(0, 100).flatMap((item) =>
      typeof item.printingId === "string" && /^[0-9a-f-]{36}$/i.test(item.printingId) && typeof item.finish === "string" && ["nonfoil", "foil", "etched"].includes(item.finish)
        ? [{ printingId: item.printingId, finish: item.finish }] : []) : [];
    return this.marketPrices.latest(items);
  }

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

  @Get("games/:gameId/search")
  searchCanonicalCards(
    @Param("gameId", new ParseUUIDPipe({ version: "4" })) gameId: string,
    @Query("q") query = "",
    @Query("page") page = "1",
    @Query("pageSize") pageSize = "60",
  ) {
    return this.catalogService.searchCanonicalCards(gameId, query, page, pageSize);
  }

  @Get("cards/:canonicalCardId")
  getCardDetail(
    @Param("canonicalCardId", new ParseUUIDPipe({ version: "4" })) canonicalCardId: string,
    @Query("printing") printingId?: string,
  ) {
    return this.catalogService.getCardDetail(canonicalCardId, printingId);
  }

  @Get("cards/:canonicalCardId/listings")
  getCardListings(
    @Param("canonicalCardId", new ParseUUIDPipe({ version: "4" })) canonicalCardId: string,
    @Query("printing") printingId = "",
    @Query("page") page = "1",
    @Query("pageSize") pageSize = "12",
  ) {
    return this.catalogService.getCardListings(canonicalCardId, printingId, page, pageSize);
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
