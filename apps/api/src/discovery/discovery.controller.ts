import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Query,
} from "@nestjs/common";
import {
  discoveryCollectionListQuerySchema,
  discoveryCollectionFeedQuerySchema,
  discoveryListingFeedQuerySchema,
  discoveryStoreFeedQuerySchema,
  discoveryInventoryPageQuerySchema,
  discoveryStoreListQuerySchema,
  discoveryUserCollectionQuerySchema,
  discoveryUserListingQuerySchema,
  discoveryUserWishlistQuerySchema,
} from "@repo/validation";
import type {
  DiscoveryCollectionListQuery,
  DiscoveryCollectionFeedQuery,
  DiscoveryListingFeedQuery,
  DiscoveryStoreFeedQuery,
  DiscoveryInventoryPageQuery,
  DiscoveryStoreListQuery,
  DiscoveryUserCollectionQuery,
  DiscoveryUserListingQuery,
  DiscoveryUserWishlistQuery,
} from "@repo/validation";

import { ZodValidationPipe } from "../common/pipes/zod-validation.pipe";
import { Public } from "../auth/public.decorator";
import { DiscoveryService } from "./discovery.service";

@Public()
@Controller("discovery")
export class DiscoveryController {
  constructor(
    private readonly discoveryService: DiscoveryService,
  ) {}

  @Get("feed/collections")
  getCollectionFeed(@Query(new ZodValidationPipe(discoveryCollectionFeedQuerySchema)) query: DiscoveryCollectionFeedQuery) {
    return this.discoveryService.getCollectionFeed(query);
  }

  @Get("feed/stores")
  getStoreFeed(@Query(new ZodValidationPipe(discoveryStoreFeedQuerySchema)) query: DiscoveryStoreFeedQuery) {
    return this.discoveryService.getStoreFeed(query);
  }

  @Get("feed/listings")
  getListingFeed(@Query(new ZodValidationPipe(discoveryListingFeedQuerySchema)) query: DiscoveryListingFeedQuery) {
    return this.discoveryService.getListingFeed(query);
  }

  @Get("users/:userId")
  getUser(@Param("userId", new ParseUUIDPipe({ version: "4" })) userId: string) {
    return this.discoveryService.getUser(userId);
  }

  @Get("users/:userId/collections")
  getUserCollections(
    @Param("userId", new ParseUUIDPipe({ version: "4" })) userId: string,
    @Query(new ZodValidationPipe(discoveryUserCollectionQuerySchema)) query: DiscoveryUserCollectionQuery,
  ) {
    return this.discoveryService.getUserCollections(userId, query);
  }

  @Get("users/:userId/listings")
  getUserListings(
    @Param("userId", new ParseUUIDPipe({ version: "4" })) userId: string,
    @Query(new ZodValidationPipe(discoveryUserListingQuerySchema)) query: DiscoveryUserListingQuery,
  ) {
    return this.discoveryService.getUserListings(userId, query);
  }

  @Get("users/:userId/wishlists")
  getUserWishlists(
    @Param("userId", new ParseUUIDPipe({ version: "4" })) userId: string,
    @Query(new ZodValidationPipe(discoveryUserWishlistQuerySchema)) query: DiscoveryUserWishlistQuery,
  ) {
    return this.discoveryService.getUserWishlists(userId, query);
  }

  @Get("collections")
  getCollections(
    @Query(
      new ZodValidationPipe(
        discoveryCollectionListQuerySchema,
      ),
    )
    query: DiscoveryCollectionListQuery,
  ) {
    return this.discoveryService.getCollections(query);
  }

  @Get("collections/:collectionId")
  getCollection(
    @Param("collectionId", new ParseUUIDPipe({ version: "4" }))
    collectionId: string,
    @Query(
      new ZodValidationPipe(
        discoveryInventoryPageQuerySchema,
      ),
    )
    query: DiscoveryInventoryPageQuery,
  ) {
    return this.discoveryService.getCollection(
      collectionId,
      query,
    );
  }

  @Get("stores")
  getStores(
    @Query(
      new ZodValidationPipe(
        discoveryStoreListQuerySchema,
      ),
    )
    query: DiscoveryStoreListQuery,
  ) {
    return this.discoveryService.getStores(query);
  }

  @Get("stores/:storeId/inventory")
  getStoreInventory(
    @Param("storeId", new ParseUUIDPipe({ version: "4" }))
    storeId: string,
    @Query(
      new ZodValidationPipe(
        discoveryInventoryPageQuerySchema,
      ),
    )
    query: DiscoveryInventoryPageQuery,
  ) {
    return this.discoveryService.getStoreInventory(
      storeId,
      query,
    );
  }

  @Get("stores/:storeId/listings")
  getStoreListings(
    @Param("storeId", new ParseUUIDPipe({ version: "4" })) storeId: string,
    @Query(new ZodValidationPipe(discoveryUserListingQuerySchema)) query: DiscoveryUserListingQuery,
  ) {
    return this.discoveryService.getStoreListings(storeId, query);
  }

  @Get("stores/:storeId")
  getStore(@Param("storeId", new ParseUUIDPipe({ version: "4" })) storeId: string) {
    return this.discoveryService.getStore(storeId);
  }
}
