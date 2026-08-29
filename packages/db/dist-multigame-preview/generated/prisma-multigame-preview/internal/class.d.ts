import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.PrismaClientConstructorArgs<Options>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.canonical_cards`: Exposes CRUD operations for the **canonical_cards** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Canonical_cards
  * const canonical_cards = await prisma.canonical_cards.findMany()
  * ```
  */
    get canonical_cards(): Prisma.canonical_cardsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.card_printings`: Exposes CRUD operations for the **card_printings** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Card_printings
      * const card_printings = await prisma.card_printings.findMany()
      * ```
      */
    get card_printings(): Prisma.card_printingsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.card_sets`: Exposes CRUD operations for the **card_sets** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Card_sets
      * const card_sets = await prisma.card_sets.findMany()
      * ```
      */
    get card_sets(): Prisma.card_setsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.collections`: Exposes CRUD operations for the **collections** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Collections
      * const collections = await prisma.collections.findMany()
      * ```
      */
    get collections(): Prisma.collectionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.games`: Exposes CRUD operations for the **games** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Games
      * const games = await prisma.games.findMany()
      * ```
      */
    get games(): Prisma.gamesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.inventory_item_interests`: Exposes CRUD operations for the **inventory_item_interests** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Inventory_item_interests
      * const inventory_item_interests = await prisma.inventory_item_interests.findMany()
      * ```
      */
    get inventory_item_interests(): Prisma.inventory_item_interestsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.inventory_item_photos`: Exposes CRUD operations for the **inventory_item_photos** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Inventory_item_photos
      * const inventory_item_photos = await prisma.inventory_item_photos.findMany()
      * ```
      */
    get inventory_item_photos(): Prisma.inventory_item_photosDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.inventory_items`: Exposes CRUD operations for the **inventory_items** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Inventory_items
      * const inventory_items = await prisma.inventory_items.findMany()
      * ```
      */
    get inventory_items(): Prisma.inventory_itemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.listing_offers`: Exposes CRUD operations for the **listing_offers** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Listing_offers
      * const listing_offers = await prisma.listing_offers.findMany()
      * ```
      */
    get listing_offers(): Prisma.listing_offersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.listings`: Exposes CRUD operations for the **listings** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Listings
      * const listings = await prisma.listings.findMany()
      * ```
      */
    get listings(): Prisma.listingsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.offer_items`: Exposes CRUD operations for the **offer_items** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Offer_items
      * const offer_items = await prisma.offer_items.findMany()
      * ```
      */
    get offer_items(): Prisma.offer_itemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.price_snapshots`: Exposes CRUD operations for the **price_snapshots** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Price_snapshots
      * const price_snapshots = await prisma.price_snapshots.findMany()
      * ```
      */
    get price_snapshots(): Prisma.price_snapshotsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.printing_finishes`: Exposes CRUD operations for the **printing_finishes** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Printing_finishes
      * const printing_finishes = await prisma.printing_finishes.findMany()
      * ```
      */
    get printing_finishes(): Prisma.printing_finishesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.store_staff`: Exposes CRUD operations for the **store_staff** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Store_staffs
      * const store_staffs = await prisma.store_staff.findMany()
      * ```
      */
    get store_staff(): Prisma.store_staffDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.store_trade_handoffs`: Exposes CRUD operations for the **store_trade_handoffs** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Store_trade_handoffs
      * const store_trade_handoffs = await prisma.store_trade_handoffs.findMany()
      * ```
      */
    get store_trade_handoffs(): Prisma.store_trade_handoffsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.stores`: Exposes CRUD operations for the **stores** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Stores
      * const stores = await prisma.stores.findMany()
      * ```
      */
    get stores(): Prisma.storesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.transaction_item_custody`: Exposes CRUD operations for the **transaction_item_custody** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Transaction_item_custodies
      * const transaction_item_custodies = await prisma.transaction_item_custody.findMany()
      * ```
      */
    get transaction_item_custody(): Prisma.transaction_item_custodyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.transaction_items`: Exposes CRUD operations for the **transaction_items** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Transaction_items
      * const transaction_items = await prisma.transaction_items.findMany()
      * ```
      */
    get transaction_items(): Prisma.transaction_itemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.transactions`: Exposes CRUD operations for the **transactions** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Transactions
      * const transactions = await prisma.transactions.findMany()
      * ```
      */
    get transactions(): Prisma.transactionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.user_profiles`: Exposes CRUD operations for the **user_profiles** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more User_profiles
      * const user_profiles = await prisma.user_profiles.findMany()
      * ```
      */
    get user_profiles(): Prisma.user_profilesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.wishlist_items`: Exposes CRUD operations for the **wishlist_items** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Wishlist_items
      * const wishlist_items = await prisma.wishlist_items.findMany()
      * ```
      */
    get wishlist_items(): Prisma.wishlist_itemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.wishlist_offer_items`: Exposes CRUD operations for the **wishlist_offer_items** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Wishlist_offer_items
      * const wishlist_offer_items = await prisma.wishlist_offer_items.findMany()
      * ```
      */
    get wishlist_offer_items(): Prisma.wishlist_offer_itemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.wishlist_offer_requested_items`: Exposes CRUD operations for the **wishlist_offer_requested_items** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Wishlist_offer_requested_items
      * const wishlist_offer_requested_items = await prisma.wishlist_offer_requested_items.findMany()
      * ```
      */
    get wishlist_offer_requested_items(): Prisma.wishlist_offer_requested_itemsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.wishlist_offers`: Exposes CRUD operations for the **wishlist_offers** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Wishlist_offers
      * const wishlist_offers = await prisma.wishlist_offers.findMany()
      * ```
      */
    get wishlist_offers(): Prisma.wishlist_offersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.wishlists`: Exposes CRUD operations for the **wishlists** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Wishlists
      * const wishlists = await prisma.wishlists.findMany()
      * ```
      */
    get wishlists(): Prisma.wishlistsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.user_preferences`: Exposes CRUD operations for the **user_preferences** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more User_preferences
      * const user_preferences = await prisma.user_preferences.findMany()
      * ```
      */
    get user_preferences(): Prisma.user_preferencesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.store_games`: Exposes CRUD operations for the **store_games** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Store_games
      * const store_games = await prisma.store_games.findMany()
      * ```
      */
    get store_games(): Prisma.store_gamesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
