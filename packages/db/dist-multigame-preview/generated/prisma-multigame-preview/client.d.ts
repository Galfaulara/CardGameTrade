import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Canonical_cards
 * const canonical_cards = await prisma.canonical_cards.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model canonical_cards
 *
 */
export type canonical_cards = Prisma.canonical_cardsModel;
/**
 * Model card_printings
 *
 */
export type card_printings = Prisma.card_printingsModel;
/**
 * Model card_sets
 *
 */
export type card_sets = Prisma.card_setsModel;
/**
 * Model collections
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type collections = Prisma.collectionsModel;
/**
 * Model games
 *
 */
export type games = Prisma.gamesModel;
/**
 * Model inventory_item_interests
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type inventory_item_interests = Prisma.inventory_item_interestsModel;
/**
 * Model inventory_item_photos
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type inventory_item_photos = Prisma.inventory_item_photosModel;
/**
 * Model inventory_items
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type inventory_items = Prisma.inventory_itemsModel;
/**
 * Model listing_offers
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type listing_offers = Prisma.listing_offersModel;
/**
 * Model listings
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type listings = Prisma.listingsModel;
/**
 * Model offer_items
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type offer_items = Prisma.offer_itemsModel;
/**
 * Model price_snapshots
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type price_snapshots = Prisma.price_snapshotsModel;
/**
 * Model printing_finishes
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type printing_finishes = Prisma.printing_finishesModel;
/**
 * Model store_staff
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type store_staff = Prisma.store_staffModel;
/**
 * Model store_trade_handoffs
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type store_trade_handoffs = Prisma.store_trade_handoffsModel;
/**
 * Model stores
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type stores = Prisma.storesModel;
/**
 * Model transaction_item_custody
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type transaction_item_custody = Prisma.transaction_item_custodyModel;
/**
 * Model transaction_items
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type transaction_items = Prisma.transaction_itemsModel;
/**
 * Model transactions
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type transactions = Prisma.transactionsModel;
/**
 * Model user_profiles
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type user_profiles = Prisma.user_profilesModel;
/**
 * Model wishlist_items
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type wishlist_items = Prisma.wishlist_itemsModel;
/**
 * Model wishlist_offer_items
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type wishlist_offer_items = Prisma.wishlist_offer_itemsModel;
/**
 * Model wishlist_offer_requested_items
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type wishlist_offer_requested_items = Prisma.wishlist_offer_requested_itemsModel;
/**
 * Model wishlist_offers
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type wishlist_offers = Prisma.wishlist_offersModel;
/**
 * Model wishlists
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type wishlists = Prisma.wishlistsModel;
/**
 * Model user_preferences
 *
 */
export type user_preferences = Prisma.user_preferencesModel;
/**
 * Model store_games
 *
 */
export type store_games = Prisma.store_gamesModel;
