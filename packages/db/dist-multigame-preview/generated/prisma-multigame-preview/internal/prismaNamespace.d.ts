import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.9.1
 * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * Resolved type of the argument passed to the `PrismaClient` constructor.
 *
 * When called without a narrower options type (the common case), this resolves
 * to `PrismaClientOptions` directly, which produces a clear TypeScript error
 * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
 * the argument is missing or incomplete. When the user supplies a narrower
 * options type (e.g. via a literal), it falls back to `Subset` to keep
 * filtering out unknown properties.
 */
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly canonical_cards: "canonical_cards";
    readonly card_printings: "card_printings";
    readonly card_sets: "card_sets";
    readonly collections: "collections";
    readonly games: "games";
    readonly inventory_item_interests: "inventory_item_interests";
    readonly inventory_item_photos: "inventory_item_photos";
    readonly inventory_items: "inventory_items";
    readonly listing_offers: "listing_offers";
    readonly listings: "listings";
    readonly offer_items: "offer_items";
    readonly price_snapshots: "price_snapshots";
    readonly printing_finishes: "printing_finishes";
    readonly store_staff: "store_staff";
    readonly store_trade_handoffs: "store_trade_handoffs";
    readonly stores: "stores";
    readonly transaction_item_custody: "transaction_item_custody";
    readonly transaction_items: "transaction_items";
    readonly transactions: "transactions";
    readonly user_profiles: "user_profiles";
    readonly wishlist_items: "wishlist_items";
    readonly wishlist_offer_items: "wishlist_offer_items";
    readonly wishlist_offer_requested_items: "wishlist_offer_requested_items";
    readonly wishlist_offers: "wishlist_offers";
    readonly wishlists: "wishlists";
    readonly user_preferences: "user_preferences";
    readonly store_games: "store_games";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "canonical_cards" | "card_printings" | "card_sets" | "collections" | "games" | "inventory_item_interests" | "inventory_item_photos" | "inventory_items" | "listing_offers" | "listings" | "offer_items" | "price_snapshots" | "printing_finishes" | "store_staff" | "store_trade_handoffs" | "stores" | "transaction_item_custody" | "transaction_items" | "transactions" | "user_profiles" | "wishlist_items" | "wishlist_offer_items" | "wishlist_offer_requested_items" | "wishlist_offers" | "wishlists" | "user_preferences" | "store_games";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        canonical_cards: {
            payload: Prisma.$canonical_cardsPayload<ExtArgs>;
            fields: Prisma.canonical_cardsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.canonical_cardsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canonical_cardsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.canonical_cardsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canonical_cardsPayload>;
                };
                findFirst: {
                    args: Prisma.canonical_cardsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canonical_cardsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.canonical_cardsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canonical_cardsPayload>;
                };
                findMany: {
                    args: Prisma.canonical_cardsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canonical_cardsPayload>[];
                };
                create: {
                    args: Prisma.canonical_cardsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canonical_cardsPayload>;
                };
                createMany: {
                    args: Prisma.canonical_cardsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.canonical_cardsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canonical_cardsPayload>[];
                };
                delete: {
                    args: Prisma.canonical_cardsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canonical_cardsPayload>;
                };
                update: {
                    args: Prisma.canonical_cardsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canonical_cardsPayload>;
                };
                deleteMany: {
                    args: Prisma.canonical_cardsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.canonical_cardsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.canonical_cardsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canonical_cardsPayload>[];
                };
                upsert: {
                    args: Prisma.canonical_cardsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canonical_cardsPayload>;
                };
                aggregate: {
                    args: Prisma.Canonical_cardsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCanonical_cards>;
                };
                groupBy: {
                    args: Prisma.canonical_cardsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Canonical_cardsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.canonical_cardsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Canonical_cardsCountAggregateOutputType> | number;
                };
            };
        };
        card_printings: {
            payload: Prisma.$card_printingsPayload<ExtArgs>;
            fields: Prisma.card_printingsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.card_printingsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_printingsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.card_printingsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_printingsPayload>;
                };
                findFirst: {
                    args: Prisma.card_printingsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_printingsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.card_printingsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_printingsPayload>;
                };
                findMany: {
                    args: Prisma.card_printingsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_printingsPayload>[];
                };
                create: {
                    args: Prisma.card_printingsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_printingsPayload>;
                };
                createMany: {
                    args: Prisma.card_printingsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.card_printingsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_printingsPayload>[];
                };
                delete: {
                    args: Prisma.card_printingsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_printingsPayload>;
                };
                update: {
                    args: Prisma.card_printingsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_printingsPayload>;
                };
                deleteMany: {
                    args: Prisma.card_printingsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.card_printingsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.card_printingsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_printingsPayload>[];
                };
                upsert: {
                    args: Prisma.card_printingsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_printingsPayload>;
                };
                aggregate: {
                    args: Prisma.Card_printingsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCard_printings>;
                };
                groupBy: {
                    args: Prisma.card_printingsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Card_printingsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.card_printingsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Card_printingsCountAggregateOutputType> | number;
                };
            };
        };
        card_sets: {
            payload: Prisma.$card_setsPayload<ExtArgs>;
            fields: Prisma.card_setsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.card_setsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_setsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.card_setsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_setsPayload>;
                };
                findFirst: {
                    args: Prisma.card_setsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_setsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.card_setsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_setsPayload>;
                };
                findMany: {
                    args: Prisma.card_setsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_setsPayload>[];
                };
                create: {
                    args: Prisma.card_setsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_setsPayload>;
                };
                createMany: {
                    args: Prisma.card_setsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.card_setsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_setsPayload>[];
                };
                delete: {
                    args: Prisma.card_setsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_setsPayload>;
                };
                update: {
                    args: Prisma.card_setsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_setsPayload>;
                };
                deleteMany: {
                    args: Prisma.card_setsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.card_setsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.card_setsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_setsPayload>[];
                };
                upsert: {
                    args: Prisma.card_setsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$card_setsPayload>;
                };
                aggregate: {
                    args: Prisma.Card_setsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCard_sets>;
                };
                groupBy: {
                    args: Prisma.card_setsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Card_setsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.card_setsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Card_setsCountAggregateOutputType> | number;
                };
            };
        };
        collections: {
            payload: Prisma.$collectionsPayload<ExtArgs>;
            fields: Prisma.collectionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.collectionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$collectionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.collectionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$collectionsPayload>;
                };
                findFirst: {
                    args: Prisma.collectionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$collectionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.collectionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$collectionsPayload>;
                };
                findMany: {
                    args: Prisma.collectionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$collectionsPayload>[];
                };
                create: {
                    args: Prisma.collectionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$collectionsPayload>;
                };
                createMany: {
                    args: Prisma.collectionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.collectionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$collectionsPayload>[];
                };
                delete: {
                    args: Prisma.collectionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$collectionsPayload>;
                };
                update: {
                    args: Prisma.collectionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$collectionsPayload>;
                };
                deleteMany: {
                    args: Prisma.collectionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.collectionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.collectionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$collectionsPayload>[];
                };
                upsert: {
                    args: Prisma.collectionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$collectionsPayload>;
                };
                aggregate: {
                    args: Prisma.CollectionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCollections>;
                };
                groupBy: {
                    args: Prisma.collectionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CollectionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.collectionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CollectionsCountAggregateOutputType> | number;
                };
            };
        };
        games: {
            payload: Prisma.$gamesPayload<ExtArgs>;
            fields: Prisma.gamesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.gamesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$gamesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.gamesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$gamesPayload>;
                };
                findFirst: {
                    args: Prisma.gamesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$gamesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.gamesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$gamesPayload>;
                };
                findMany: {
                    args: Prisma.gamesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$gamesPayload>[];
                };
                create: {
                    args: Prisma.gamesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$gamesPayload>;
                };
                createMany: {
                    args: Prisma.gamesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.gamesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$gamesPayload>[];
                };
                delete: {
                    args: Prisma.gamesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$gamesPayload>;
                };
                update: {
                    args: Prisma.gamesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$gamesPayload>;
                };
                deleteMany: {
                    args: Prisma.gamesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.gamesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.gamesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$gamesPayload>[];
                };
                upsert: {
                    args: Prisma.gamesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$gamesPayload>;
                };
                aggregate: {
                    args: Prisma.GamesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGames>;
                };
                groupBy: {
                    args: Prisma.gamesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GamesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.gamesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GamesCountAggregateOutputType> | number;
                };
            };
        };
        inventory_item_interests: {
            payload: Prisma.$inventory_item_interestsPayload<ExtArgs>;
            fields: Prisma.inventory_item_interestsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.inventory_item_interestsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_interestsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.inventory_item_interestsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_interestsPayload>;
                };
                findFirst: {
                    args: Prisma.inventory_item_interestsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_interestsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.inventory_item_interestsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_interestsPayload>;
                };
                findMany: {
                    args: Prisma.inventory_item_interestsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_interestsPayload>[];
                };
                create: {
                    args: Prisma.inventory_item_interestsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_interestsPayload>;
                };
                createMany: {
                    args: Prisma.inventory_item_interestsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.inventory_item_interestsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_interestsPayload>[];
                };
                delete: {
                    args: Prisma.inventory_item_interestsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_interestsPayload>;
                };
                update: {
                    args: Prisma.inventory_item_interestsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_interestsPayload>;
                };
                deleteMany: {
                    args: Prisma.inventory_item_interestsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.inventory_item_interestsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.inventory_item_interestsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_interestsPayload>[];
                };
                upsert: {
                    args: Prisma.inventory_item_interestsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_interestsPayload>;
                };
                aggregate: {
                    args: Prisma.Inventory_item_interestsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInventory_item_interests>;
                };
                groupBy: {
                    args: Prisma.inventory_item_interestsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Inventory_item_interestsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.inventory_item_interestsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Inventory_item_interestsCountAggregateOutputType> | number;
                };
            };
        };
        inventory_item_photos: {
            payload: Prisma.$inventory_item_photosPayload<ExtArgs>;
            fields: Prisma.inventory_item_photosFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.inventory_item_photosFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_photosPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.inventory_item_photosFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_photosPayload>;
                };
                findFirst: {
                    args: Prisma.inventory_item_photosFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_photosPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.inventory_item_photosFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_photosPayload>;
                };
                findMany: {
                    args: Prisma.inventory_item_photosFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_photosPayload>[];
                };
                create: {
                    args: Prisma.inventory_item_photosCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_photosPayload>;
                };
                createMany: {
                    args: Prisma.inventory_item_photosCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.inventory_item_photosCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_photosPayload>[];
                };
                delete: {
                    args: Prisma.inventory_item_photosDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_photosPayload>;
                };
                update: {
                    args: Prisma.inventory_item_photosUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_photosPayload>;
                };
                deleteMany: {
                    args: Prisma.inventory_item_photosDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.inventory_item_photosUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.inventory_item_photosUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_photosPayload>[];
                };
                upsert: {
                    args: Prisma.inventory_item_photosUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_item_photosPayload>;
                };
                aggregate: {
                    args: Prisma.Inventory_item_photosAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInventory_item_photos>;
                };
                groupBy: {
                    args: Prisma.inventory_item_photosGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Inventory_item_photosGroupByOutputType>[];
                };
                count: {
                    args: Prisma.inventory_item_photosCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Inventory_item_photosCountAggregateOutputType> | number;
                };
            };
        };
        inventory_items: {
            payload: Prisma.$inventory_itemsPayload<ExtArgs>;
            fields: Prisma.inventory_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.inventory_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.inventory_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.inventory_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.inventory_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_itemsPayload>;
                };
                findMany: {
                    args: Prisma.inventory_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_itemsPayload>[];
                };
                create: {
                    args: Prisma.inventory_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_itemsPayload>;
                };
                createMany: {
                    args: Prisma.inventory_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.inventory_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_itemsPayload>[];
                };
                delete: {
                    args: Prisma.inventory_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_itemsPayload>;
                };
                update: {
                    args: Prisma.inventory_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.inventory_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.inventory_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.inventory_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.inventory_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$inventory_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Inventory_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInventory_items>;
                };
                groupBy: {
                    args: Prisma.inventory_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Inventory_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.inventory_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Inventory_itemsCountAggregateOutputType> | number;
                };
            };
        };
        listing_offers: {
            payload: Prisma.$listing_offersPayload<ExtArgs>;
            fields: Prisma.listing_offersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.listing_offersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_offersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.listing_offersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_offersPayload>;
                };
                findFirst: {
                    args: Prisma.listing_offersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_offersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.listing_offersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_offersPayload>;
                };
                findMany: {
                    args: Prisma.listing_offersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_offersPayload>[];
                };
                create: {
                    args: Prisma.listing_offersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_offersPayload>;
                };
                createMany: {
                    args: Prisma.listing_offersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.listing_offersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_offersPayload>[];
                };
                delete: {
                    args: Prisma.listing_offersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_offersPayload>;
                };
                update: {
                    args: Prisma.listing_offersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_offersPayload>;
                };
                deleteMany: {
                    args: Prisma.listing_offersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.listing_offersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.listing_offersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_offersPayload>[];
                };
                upsert: {
                    args: Prisma.listing_offersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listing_offersPayload>;
                };
                aggregate: {
                    args: Prisma.Listing_offersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateListing_offers>;
                };
                groupBy: {
                    args: Prisma.listing_offersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Listing_offersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.listing_offersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Listing_offersCountAggregateOutputType> | number;
                };
            };
        };
        listings: {
            payload: Prisma.$listingsPayload<ExtArgs>;
            fields: Prisma.listingsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.listingsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.listingsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload>;
                };
                findFirst: {
                    args: Prisma.listingsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.listingsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload>;
                };
                findMany: {
                    args: Prisma.listingsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload>[];
                };
                create: {
                    args: Prisma.listingsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload>;
                };
                createMany: {
                    args: Prisma.listingsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.listingsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload>[];
                };
                delete: {
                    args: Prisma.listingsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload>;
                };
                update: {
                    args: Prisma.listingsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload>;
                };
                deleteMany: {
                    args: Prisma.listingsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.listingsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.listingsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload>[];
                };
                upsert: {
                    args: Prisma.listingsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$listingsPayload>;
                };
                aggregate: {
                    args: Prisma.ListingsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateListings>;
                };
                groupBy: {
                    args: Prisma.listingsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ListingsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.listingsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ListingsCountAggregateOutputType> | number;
                };
            };
        };
        offer_items: {
            payload: Prisma.$offer_itemsPayload<ExtArgs>;
            fields: Prisma.offer_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.offer_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$offer_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.offer_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$offer_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.offer_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$offer_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.offer_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$offer_itemsPayload>;
                };
                findMany: {
                    args: Prisma.offer_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$offer_itemsPayload>[];
                };
                create: {
                    args: Prisma.offer_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$offer_itemsPayload>;
                };
                createMany: {
                    args: Prisma.offer_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.offer_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$offer_itemsPayload>[];
                };
                delete: {
                    args: Prisma.offer_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$offer_itemsPayload>;
                };
                update: {
                    args: Prisma.offer_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$offer_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.offer_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.offer_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.offer_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$offer_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.offer_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$offer_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Offer_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOffer_items>;
                };
                groupBy: {
                    args: Prisma.offer_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Offer_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.offer_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Offer_itemsCountAggregateOutputType> | number;
                };
            };
        };
        price_snapshots: {
            payload: Prisma.$price_snapshotsPayload<ExtArgs>;
            fields: Prisma.price_snapshotsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.price_snapshotsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$price_snapshotsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.price_snapshotsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$price_snapshotsPayload>;
                };
                findFirst: {
                    args: Prisma.price_snapshotsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$price_snapshotsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.price_snapshotsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$price_snapshotsPayload>;
                };
                findMany: {
                    args: Prisma.price_snapshotsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$price_snapshotsPayload>[];
                };
                create: {
                    args: Prisma.price_snapshotsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$price_snapshotsPayload>;
                };
                createMany: {
                    args: Prisma.price_snapshotsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.price_snapshotsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$price_snapshotsPayload>[];
                };
                delete: {
                    args: Prisma.price_snapshotsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$price_snapshotsPayload>;
                };
                update: {
                    args: Prisma.price_snapshotsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$price_snapshotsPayload>;
                };
                deleteMany: {
                    args: Prisma.price_snapshotsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.price_snapshotsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.price_snapshotsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$price_snapshotsPayload>[];
                };
                upsert: {
                    args: Prisma.price_snapshotsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$price_snapshotsPayload>;
                };
                aggregate: {
                    args: Prisma.Price_snapshotsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePrice_snapshots>;
                };
                groupBy: {
                    args: Prisma.price_snapshotsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Price_snapshotsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.price_snapshotsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Price_snapshotsCountAggregateOutputType> | number;
                };
            };
        };
        printing_finishes: {
            payload: Prisma.$printing_finishesPayload<ExtArgs>;
            fields: Prisma.printing_finishesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.printing_finishesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$printing_finishesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.printing_finishesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$printing_finishesPayload>;
                };
                findFirst: {
                    args: Prisma.printing_finishesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$printing_finishesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.printing_finishesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$printing_finishesPayload>;
                };
                findMany: {
                    args: Prisma.printing_finishesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$printing_finishesPayload>[];
                };
                create: {
                    args: Prisma.printing_finishesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$printing_finishesPayload>;
                };
                createMany: {
                    args: Prisma.printing_finishesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.printing_finishesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$printing_finishesPayload>[];
                };
                delete: {
                    args: Prisma.printing_finishesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$printing_finishesPayload>;
                };
                update: {
                    args: Prisma.printing_finishesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$printing_finishesPayload>;
                };
                deleteMany: {
                    args: Prisma.printing_finishesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.printing_finishesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.printing_finishesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$printing_finishesPayload>[];
                };
                upsert: {
                    args: Prisma.printing_finishesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$printing_finishesPayload>;
                };
                aggregate: {
                    args: Prisma.Printing_finishesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePrinting_finishes>;
                };
                groupBy: {
                    args: Prisma.printing_finishesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Printing_finishesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.printing_finishesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Printing_finishesCountAggregateOutputType> | number;
                };
            };
        };
        store_staff: {
            payload: Prisma.$store_staffPayload<ExtArgs>;
            fields: Prisma.store_staffFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.store_staffFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_staffPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.store_staffFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_staffPayload>;
                };
                findFirst: {
                    args: Prisma.store_staffFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_staffPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.store_staffFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_staffPayload>;
                };
                findMany: {
                    args: Prisma.store_staffFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_staffPayload>[];
                };
                create: {
                    args: Prisma.store_staffCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_staffPayload>;
                };
                createMany: {
                    args: Prisma.store_staffCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.store_staffCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_staffPayload>[];
                };
                delete: {
                    args: Prisma.store_staffDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_staffPayload>;
                };
                update: {
                    args: Prisma.store_staffUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_staffPayload>;
                };
                deleteMany: {
                    args: Prisma.store_staffDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.store_staffUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.store_staffUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_staffPayload>[];
                };
                upsert: {
                    args: Prisma.store_staffUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_staffPayload>;
                };
                aggregate: {
                    args: Prisma.Store_staffAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStore_staff>;
                };
                groupBy: {
                    args: Prisma.store_staffGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Store_staffGroupByOutputType>[];
                };
                count: {
                    args: Prisma.store_staffCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Store_staffCountAggregateOutputType> | number;
                };
            };
        };
        store_trade_handoffs: {
            payload: Prisma.$store_trade_handoffsPayload<ExtArgs>;
            fields: Prisma.store_trade_handoffsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.store_trade_handoffsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_trade_handoffsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.store_trade_handoffsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_trade_handoffsPayload>;
                };
                findFirst: {
                    args: Prisma.store_trade_handoffsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_trade_handoffsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.store_trade_handoffsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_trade_handoffsPayload>;
                };
                findMany: {
                    args: Prisma.store_trade_handoffsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_trade_handoffsPayload>[];
                };
                create: {
                    args: Prisma.store_trade_handoffsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_trade_handoffsPayload>;
                };
                createMany: {
                    args: Prisma.store_trade_handoffsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.store_trade_handoffsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_trade_handoffsPayload>[];
                };
                delete: {
                    args: Prisma.store_trade_handoffsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_trade_handoffsPayload>;
                };
                update: {
                    args: Prisma.store_trade_handoffsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_trade_handoffsPayload>;
                };
                deleteMany: {
                    args: Prisma.store_trade_handoffsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.store_trade_handoffsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.store_trade_handoffsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_trade_handoffsPayload>[];
                };
                upsert: {
                    args: Prisma.store_trade_handoffsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_trade_handoffsPayload>;
                };
                aggregate: {
                    args: Prisma.Store_trade_handoffsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStore_trade_handoffs>;
                };
                groupBy: {
                    args: Prisma.store_trade_handoffsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Store_trade_handoffsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.store_trade_handoffsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Store_trade_handoffsCountAggregateOutputType> | number;
                };
            };
        };
        stores: {
            payload: Prisma.$storesPayload<ExtArgs>;
            fields: Prisma.storesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.storesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.storesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload>;
                };
                findFirst: {
                    args: Prisma.storesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.storesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload>;
                };
                findMany: {
                    args: Prisma.storesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload>[];
                };
                create: {
                    args: Prisma.storesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload>;
                };
                createMany: {
                    args: Prisma.storesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.storesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload>[];
                };
                delete: {
                    args: Prisma.storesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload>;
                };
                update: {
                    args: Prisma.storesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload>;
                };
                deleteMany: {
                    args: Prisma.storesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.storesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.storesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload>[];
                };
                upsert: {
                    args: Prisma.storesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$storesPayload>;
                };
                aggregate: {
                    args: Prisma.StoresAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStores>;
                };
                groupBy: {
                    args: Prisma.storesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StoresGroupByOutputType>[];
                };
                count: {
                    args: Prisma.storesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StoresCountAggregateOutputType> | number;
                };
            };
        };
        transaction_item_custody: {
            payload: Prisma.$transaction_item_custodyPayload<ExtArgs>;
            fields: Prisma.transaction_item_custodyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.transaction_item_custodyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_item_custodyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.transaction_item_custodyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_item_custodyPayload>;
                };
                findFirst: {
                    args: Prisma.transaction_item_custodyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_item_custodyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.transaction_item_custodyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_item_custodyPayload>;
                };
                findMany: {
                    args: Prisma.transaction_item_custodyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_item_custodyPayload>[];
                };
                create: {
                    args: Prisma.transaction_item_custodyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_item_custodyPayload>;
                };
                createMany: {
                    args: Prisma.transaction_item_custodyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.transaction_item_custodyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_item_custodyPayload>[];
                };
                delete: {
                    args: Prisma.transaction_item_custodyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_item_custodyPayload>;
                };
                update: {
                    args: Prisma.transaction_item_custodyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_item_custodyPayload>;
                };
                deleteMany: {
                    args: Prisma.transaction_item_custodyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.transaction_item_custodyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.transaction_item_custodyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_item_custodyPayload>[];
                };
                upsert: {
                    args: Prisma.transaction_item_custodyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_item_custodyPayload>;
                };
                aggregate: {
                    args: Prisma.Transaction_item_custodyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTransaction_item_custody>;
                };
                groupBy: {
                    args: Prisma.transaction_item_custodyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Transaction_item_custodyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.transaction_item_custodyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Transaction_item_custodyCountAggregateOutputType> | number;
                };
            };
        };
        transaction_items: {
            payload: Prisma.$transaction_itemsPayload<ExtArgs>;
            fields: Prisma.transaction_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.transaction_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.transaction_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.transaction_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.transaction_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_itemsPayload>;
                };
                findMany: {
                    args: Prisma.transaction_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_itemsPayload>[];
                };
                create: {
                    args: Prisma.transaction_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_itemsPayload>;
                };
                createMany: {
                    args: Prisma.transaction_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.transaction_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_itemsPayload>[];
                };
                delete: {
                    args: Prisma.transaction_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_itemsPayload>;
                };
                update: {
                    args: Prisma.transaction_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.transaction_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.transaction_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.transaction_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.transaction_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transaction_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Transaction_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTransaction_items>;
                };
                groupBy: {
                    args: Prisma.transaction_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Transaction_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.transaction_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Transaction_itemsCountAggregateOutputType> | number;
                };
            };
        };
        transactions: {
            payload: Prisma.$transactionsPayload<ExtArgs>;
            fields: Prisma.transactionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.transactionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.transactionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload>;
                };
                findFirst: {
                    args: Prisma.transactionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.transactionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload>;
                };
                findMany: {
                    args: Prisma.transactionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload>[];
                };
                create: {
                    args: Prisma.transactionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload>;
                };
                createMany: {
                    args: Prisma.transactionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.transactionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload>[];
                };
                delete: {
                    args: Prisma.transactionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload>;
                };
                update: {
                    args: Prisma.transactionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload>;
                };
                deleteMany: {
                    args: Prisma.transactionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.transactionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.transactionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload>[];
                };
                upsert: {
                    args: Prisma.transactionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transactionsPayload>;
                };
                aggregate: {
                    args: Prisma.TransactionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTransactions>;
                };
                groupBy: {
                    args: Prisma.transactionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TransactionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.transactionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TransactionsCountAggregateOutputType> | number;
                };
            };
        };
        user_profiles: {
            payload: Prisma.$user_profilesPayload<ExtArgs>;
            fields: Prisma.user_profilesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.user_profilesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.user_profilesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>;
                };
                findFirst: {
                    args: Prisma.user_profilesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.user_profilesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>;
                };
                findMany: {
                    args: Prisma.user_profilesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>[];
                };
                create: {
                    args: Prisma.user_profilesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>;
                };
                createMany: {
                    args: Prisma.user_profilesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.user_profilesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>[];
                };
                delete: {
                    args: Prisma.user_profilesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>;
                };
                update: {
                    args: Prisma.user_profilesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>;
                };
                deleteMany: {
                    args: Prisma.user_profilesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.user_profilesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.user_profilesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>[];
                };
                upsert: {
                    args: Prisma.user_profilesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_profilesPayload>;
                };
                aggregate: {
                    args: Prisma.User_profilesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser_profiles>;
                };
                groupBy: {
                    args: Prisma.user_profilesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_profilesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.user_profilesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_profilesCountAggregateOutputType> | number;
                };
            };
        };
        wishlist_items: {
            payload: Prisma.$wishlist_itemsPayload<ExtArgs>;
            fields: Prisma.wishlist_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.wishlist_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.wishlist_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.wishlist_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.wishlist_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload>;
                };
                findMany: {
                    args: Prisma.wishlist_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload>[];
                };
                create: {
                    args: Prisma.wishlist_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload>;
                };
                createMany: {
                    args: Prisma.wishlist_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.wishlist_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload>[];
                };
                delete: {
                    args: Prisma.wishlist_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload>;
                };
                update: {
                    args: Prisma.wishlist_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.wishlist_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.wishlist_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.wishlist_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.wishlist_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Wishlist_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWishlist_items>;
                };
                groupBy: {
                    args: Prisma.wishlist_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Wishlist_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.wishlist_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Wishlist_itemsCountAggregateOutputType> | number;
                };
            };
        };
        wishlist_offer_items: {
            payload: Prisma.$wishlist_offer_itemsPayload<ExtArgs>;
            fields: Prisma.wishlist_offer_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.wishlist_offer_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.wishlist_offer_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.wishlist_offer_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.wishlist_offer_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_itemsPayload>;
                };
                findMany: {
                    args: Prisma.wishlist_offer_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_itemsPayload>[];
                };
                create: {
                    args: Prisma.wishlist_offer_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_itemsPayload>;
                };
                createMany: {
                    args: Prisma.wishlist_offer_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.wishlist_offer_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_itemsPayload>[];
                };
                delete: {
                    args: Prisma.wishlist_offer_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_itemsPayload>;
                };
                update: {
                    args: Prisma.wishlist_offer_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.wishlist_offer_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.wishlist_offer_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.wishlist_offer_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.wishlist_offer_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Wishlist_offer_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWishlist_offer_items>;
                };
                groupBy: {
                    args: Prisma.wishlist_offer_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Wishlist_offer_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.wishlist_offer_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Wishlist_offer_itemsCountAggregateOutputType> | number;
                };
            };
        };
        wishlist_offer_requested_items: {
            payload: Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>;
            fields: Prisma.wishlist_offer_requested_itemsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.wishlist_offer_requested_itemsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_requested_itemsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.wishlist_offer_requested_itemsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_requested_itemsPayload>;
                };
                findFirst: {
                    args: Prisma.wishlist_offer_requested_itemsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_requested_itemsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.wishlist_offer_requested_itemsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_requested_itemsPayload>;
                };
                findMany: {
                    args: Prisma.wishlist_offer_requested_itemsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_requested_itemsPayload>[];
                };
                create: {
                    args: Prisma.wishlist_offer_requested_itemsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_requested_itemsPayload>;
                };
                createMany: {
                    args: Prisma.wishlist_offer_requested_itemsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.wishlist_offer_requested_itemsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_requested_itemsPayload>[];
                };
                delete: {
                    args: Prisma.wishlist_offer_requested_itemsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_requested_itemsPayload>;
                };
                update: {
                    args: Prisma.wishlist_offer_requested_itemsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_requested_itemsPayload>;
                };
                deleteMany: {
                    args: Prisma.wishlist_offer_requested_itemsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.wishlist_offer_requested_itemsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.wishlist_offer_requested_itemsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_requested_itemsPayload>[];
                };
                upsert: {
                    args: Prisma.wishlist_offer_requested_itemsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offer_requested_itemsPayload>;
                };
                aggregate: {
                    args: Prisma.Wishlist_offer_requested_itemsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWishlist_offer_requested_items>;
                };
                groupBy: {
                    args: Prisma.wishlist_offer_requested_itemsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Wishlist_offer_requested_itemsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.wishlist_offer_requested_itemsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Wishlist_offer_requested_itemsCountAggregateOutputType> | number;
                };
            };
        };
        wishlist_offers: {
            payload: Prisma.$wishlist_offersPayload<ExtArgs>;
            fields: Prisma.wishlist_offersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.wishlist_offersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.wishlist_offersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offersPayload>;
                };
                findFirst: {
                    args: Prisma.wishlist_offersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.wishlist_offersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offersPayload>;
                };
                findMany: {
                    args: Prisma.wishlist_offersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offersPayload>[];
                };
                create: {
                    args: Prisma.wishlist_offersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offersPayload>;
                };
                createMany: {
                    args: Prisma.wishlist_offersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.wishlist_offersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offersPayload>[];
                };
                delete: {
                    args: Prisma.wishlist_offersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offersPayload>;
                };
                update: {
                    args: Prisma.wishlist_offersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offersPayload>;
                };
                deleteMany: {
                    args: Prisma.wishlist_offersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.wishlist_offersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.wishlist_offersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offersPayload>[];
                };
                upsert: {
                    args: Prisma.wishlist_offersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlist_offersPayload>;
                };
                aggregate: {
                    args: Prisma.Wishlist_offersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWishlist_offers>;
                };
                groupBy: {
                    args: Prisma.wishlist_offersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Wishlist_offersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.wishlist_offersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Wishlist_offersCountAggregateOutputType> | number;
                };
            };
        };
        wishlists: {
            payload: Prisma.$wishlistsPayload<ExtArgs>;
            fields: Prisma.wishlistsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.wishlistsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.wishlistsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload>;
                };
                findFirst: {
                    args: Prisma.wishlistsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.wishlistsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload>;
                };
                findMany: {
                    args: Prisma.wishlistsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload>[];
                };
                create: {
                    args: Prisma.wishlistsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload>;
                };
                createMany: {
                    args: Prisma.wishlistsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.wishlistsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload>[];
                };
                delete: {
                    args: Prisma.wishlistsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload>;
                };
                update: {
                    args: Prisma.wishlistsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload>;
                };
                deleteMany: {
                    args: Prisma.wishlistsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.wishlistsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.wishlistsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload>[];
                };
                upsert: {
                    args: Prisma.wishlistsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$wishlistsPayload>;
                };
                aggregate: {
                    args: Prisma.WishlistsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWishlists>;
                };
                groupBy: {
                    args: Prisma.wishlistsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WishlistsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.wishlistsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WishlistsCountAggregateOutputType> | number;
                };
            };
        };
        user_preferences: {
            payload: Prisma.$user_preferencesPayload<ExtArgs>;
            fields: Prisma.user_preferencesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.user_preferencesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_preferencesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.user_preferencesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_preferencesPayload>;
                };
                findFirst: {
                    args: Prisma.user_preferencesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_preferencesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.user_preferencesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_preferencesPayload>;
                };
                findMany: {
                    args: Prisma.user_preferencesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_preferencesPayload>[];
                };
                create: {
                    args: Prisma.user_preferencesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_preferencesPayload>;
                };
                createMany: {
                    args: Prisma.user_preferencesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.user_preferencesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_preferencesPayload>[];
                };
                delete: {
                    args: Prisma.user_preferencesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_preferencesPayload>;
                };
                update: {
                    args: Prisma.user_preferencesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_preferencesPayload>;
                };
                deleteMany: {
                    args: Prisma.user_preferencesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.user_preferencesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.user_preferencesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_preferencesPayload>[];
                };
                upsert: {
                    args: Prisma.user_preferencesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_preferencesPayload>;
                };
                aggregate: {
                    args: Prisma.User_preferencesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser_preferences>;
                };
                groupBy: {
                    args: Prisma.user_preferencesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_preferencesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.user_preferencesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_preferencesCountAggregateOutputType> | number;
                };
            };
        };
        store_games: {
            payload: Prisma.$store_gamesPayload<ExtArgs>;
            fields: Prisma.store_gamesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.store_gamesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_gamesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.store_gamesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_gamesPayload>;
                };
                findFirst: {
                    args: Prisma.store_gamesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_gamesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.store_gamesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_gamesPayload>;
                };
                findMany: {
                    args: Prisma.store_gamesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_gamesPayload>[];
                };
                create: {
                    args: Prisma.store_gamesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_gamesPayload>;
                };
                createMany: {
                    args: Prisma.store_gamesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.store_gamesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_gamesPayload>[];
                };
                delete: {
                    args: Prisma.store_gamesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_gamesPayload>;
                };
                update: {
                    args: Prisma.store_gamesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_gamesPayload>;
                };
                deleteMany: {
                    args: Prisma.store_gamesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.store_gamesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.store_gamesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_gamesPayload>[];
                };
                upsert: {
                    args: Prisma.store_gamesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$store_gamesPayload>;
                };
                aggregate: {
                    args: Prisma.Store_gamesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStore_games>;
                };
                groupBy: {
                    args: Prisma.store_gamesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Store_gamesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.store_gamesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Store_gamesCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Canonical_cardsScalarFieldEnum: {
    readonly id: "id";
    readonly game_id: "game_id";
    readonly source: "source";
    readonly source_key: "source_key";
    readonly name: "name";
    readonly normalized_name: "normalized_name";
    readonly mana_cost: "mana_cost";
    readonly type_line: "type_line";
    readonly oracle_text: "oracle_text";
    readonly colors: "colors";
    readonly color_identity: "color_identity";
    readonly raw_data: "raw_data";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Canonical_cardsScalarFieldEnum = (typeof Canonical_cardsScalarFieldEnum)[keyof typeof Canonical_cardsScalarFieldEnum];
export declare const Card_printingsScalarFieldEnum: {
    readonly id: "id";
    readonly game_id: "game_id";
    readonly canonical_card_id: "canonical_card_id";
    readonly card_set_id: "card_set_id";
    readonly source: "source";
    readonly source_key: "source_key";
    readonly collector_number: "collector_number";
    readonly language_code: "language_code";
    readonly printed_name: "printed_name";
    readonly printed_type_line: "printed_type_line";
    readonly printed_text: "printed_text";
    readonly rarity: "rarity";
    readonly artist_name: "artist_name";
    readonly treatment: "treatment";
    readonly frame_version: "frame_version";
    readonly border_color: "border_color";
    readonly is_promo: "is_promo";
    readonly is_reprint: "is_reprint";
    readonly is_digital: "is_digital";
    readonly released_at: "released_at";
    readonly image_small_uri: "image_small_uri";
    readonly image_normal_uri: "image_normal_uri";
    readonly image_large_uri: "image_large_uri";
    readonly raw_data: "raw_data";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Card_printingsScalarFieldEnum = (typeof Card_printingsScalarFieldEnum)[keyof typeof Card_printingsScalarFieldEnum];
export declare const Card_setsScalarFieldEnum: {
    readonly id: "id";
    readonly game_id: "game_id";
    readonly code: "code";
    readonly name: "name";
    readonly source: "source";
    readonly source_id: "source_id";
    readonly release_date: "release_date";
    readonly set_type: "set_type";
    readonly created_at: "created_at";
};
export type Card_setsScalarFieldEnum = (typeof Card_setsScalarFieldEnum)[keyof typeof Card_setsScalarFieldEnum];
export declare const CollectionsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly name: "name";
    readonly description: "description";
    readonly visibility: "visibility";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly game_id: "game_id";
};
export type CollectionsScalarFieldEnum = (typeof CollectionsScalarFieldEnum)[keyof typeof CollectionsScalarFieldEnum];
export declare const GamesScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly created_at: "created_at";
};
export type GamesScalarFieldEnum = (typeof GamesScalarFieldEnum)[keyof typeof GamesScalarFieldEnum];
export declare const Inventory_item_interestsScalarFieldEnum: {
    readonly id: "id";
    readonly inventory_item_id: "inventory_item_id";
    readonly interested_user_id: "interested_user_id";
    readonly interested_store_id: "interested_store_id";
    readonly interest_type: "interest_type";
    readonly message: "message";
    readonly status: "status";
    readonly converted_listing_offer_id: "converted_listing_offer_id";
    readonly converted_wishlist_offer_id: "converted_wishlist_offer_id";
    readonly converted_at: "converted_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly game_id: "game_id";
};
export type Inventory_item_interestsScalarFieldEnum = (typeof Inventory_item_interestsScalarFieldEnum)[keyof typeof Inventory_item_interestsScalarFieldEnum];
export declare const Inventory_item_photosScalarFieldEnum: {
    readonly id: "id";
    readonly inventory_item_id: "inventory_item_id";
    readonly storage_provider: "storage_provider";
    readonly storage_key: "storage_key";
    readonly public_url: "public_url";
    readonly sort_order: "sort_order";
    readonly is_primary: "is_primary";
    readonly created_at: "created_at";
};
export type Inventory_item_photosScalarFieldEnum = (typeof Inventory_item_photosScalarFieldEnum)[keyof typeof Inventory_item_photosScalarFieldEnum];
export declare const Inventory_itemsScalarFieldEnum: {
    readonly id: "id";
    readonly printing_id: "printing_id";
    readonly finish: "finish";
    readonly owner_user_id: "owner_user_id";
    readonly owner_store_id: "owner_store_id";
    readonly collection_id: "collection_id";
    readonly condition: "condition";
    readonly language_code: "language_code";
    readonly quantity: "quantity";
    readonly is_signed: "is_signed";
    readonly is_altered: "is_altered";
    readonly is_graded: "is_graded";
    readonly grading_company: "grading_company";
    readonly grade: "grade";
    readonly certification_number: "certification_number";
    readonly acquired_at: "acquired_at";
    readonly acquired_price: "acquired_price";
    readonly status: "status";
    readonly notes: "notes";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly game_id: "game_id";
};
export type Inventory_itemsScalarFieldEnum = (typeof Inventory_itemsScalarFieldEnum)[keyof typeof Inventory_itemsScalarFieldEnum];
export declare const Listing_offersScalarFieldEnum: {
    readonly id: "id";
    readonly listing_id: "listing_id";
    readonly offerer_user_id: "offerer_user_id";
    readonly offerer_store_id: "offerer_store_id";
    readonly cash_amount: "cash_amount";
    readonly currency_code: "currency_code";
    readonly message: "message";
    readonly visibility: "visibility";
    readonly status: "status";
    readonly expires_at: "expires_at";
    readonly responded_at: "responded_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly game_id: "game_id";
};
export type Listing_offersScalarFieldEnum = (typeof Listing_offersScalarFieldEnum)[keyof typeof Listing_offersScalarFieldEnum];
export declare const ListingsScalarFieldEnum: {
    readonly id: "id";
    readonly inventory_item_id: "inventory_item_id";
    readonly seller_user_id: "seller_user_id";
    readonly seller_store_id: "seller_store_id";
    readonly accepts_cash: "accepts_cash";
    readonly accepts_trade: "accepts_trade";
    readonly asking_price: "asking_price";
    readonly currency_code: "currency_code";
    readonly preferred_store_id: "preferred_store_id";
    readonly title: "title";
    readonly description: "description";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly game_id: "game_id";
};
export type ListingsScalarFieldEnum = (typeof ListingsScalarFieldEnum)[keyof typeof ListingsScalarFieldEnum];
export declare const Offer_itemsScalarFieldEnum: {
    readonly id: "id";
    readonly offer_id: "offer_id";
    readonly offerer_user_id: "offerer_user_id";
    readonly offerer_store_id: "offerer_store_id";
    readonly inventory_item_id: "inventory_item_id";
    readonly quantity: "quantity";
    readonly notes: "notes";
    readonly created_at: "created_at";
    readonly game_id: "game_id";
};
export type Offer_itemsScalarFieldEnum = (typeof Offer_itemsScalarFieldEnum)[keyof typeof Offer_itemsScalarFieldEnum];
export declare const Price_snapshotsScalarFieldEnum: {
    readonly id: "id";
    readonly printing_id: "printing_id";
    readonly finish: "finish";
    readonly condition: "condition";
    readonly source: "source";
    readonly source_ref: "source_ref";
    readonly currency_code: "currency_code";
    readonly market_price: "market_price";
    readonly low_price: "low_price";
    readonly mid_price: "mid_price";
    readonly high_price: "high_price";
    readonly direct_price: "direct_price";
    readonly captured_at: "captured_at";
    readonly raw_data: "raw_data";
    readonly created_at: "created_at";
};
export type Price_snapshotsScalarFieldEnum = (typeof Price_snapshotsScalarFieldEnum)[keyof typeof Price_snapshotsScalarFieldEnum];
export declare const Printing_finishesScalarFieldEnum: {
    readonly printing_id: "printing_id";
    readonly finish: "finish";
    readonly created_at: "created_at";
};
export type Printing_finishesScalarFieldEnum = (typeof Printing_finishesScalarFieldEnum)[keyof typeof Printing_finishesScalarFieldEnum];
export declare const Store_staffScalarFieldEnum: {
    readonly id: "id";
    readonly store_id: "store_id";
    readonly user_id: "user_id";
    readonly role: "role";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Store_staffScalarFieldEnum = (typeof Store_staffScalarFieldEnum)[keyof typeof Store_staffScalarFieldEnum];
export declare const Store_trade_handoffsScalarFieldEnum: {
    readonly id: "id";
    readonly transaction_id: "transaction_id";
    readonly store_id: "store_id";
    readonly status: "status";
    readonly store_notes: "store_notes";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly completed_at: "completed_at";
    readonly cancelled_at: "cancelled_at";
    readonly game_id: "game_id";
};
export type Store_trade_handoffsScalarFieldEnum = (typeof Store_trade_handoffsScalarFieldEnum)[keyof typeof Store_trade_handoffsScalarFieldEnum];
export declare const StoresScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly logo_url: "logo_url";
    readonly banner_url: "banner_url";
    readonly email: "email";
    readonly phone: "phone";
    readonly website_url: "website_url";
    readonly address_line1: "address_line1";
    readonly address_line2: "address_line2";
    readonly city: "city";
    readonly state_region: "state_region";
    readonly postal_code: "postal_code";
    readonly country_code: "country_code";
    readonly verification_status: "verification_status";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly trade_mediation_enabled: "trade_mediation_enabled";
};
export type StoresScalarFieldEnum = (typeof StoresScalarFieldEnum)[keyof typeof StoresScalarFieldEnum];
export declare const Transaction_item_custodyScalarFieldEnum: {
    readonly id: "id";
    readonly handoff_id: "handoff_id";
    readonly transaction_id: "transaction_id";
    readonly store_id: "store_id";
    readonly transaction_item_id: "transaction_item_id";
    readonly custody_status: "custody_status";
    readonly received_by_staff_id: "received_by_staff_id";
    readonly received_at: "received_at";
    readonly verified_by_staff_id: "verified_by_staff_id";
    readonly verified_at: "verified_at";
    readonly released_by_staff_id: "released_by_staff_id";
    readonly released_at: "released_at";
    readonly issue_notes: "issue_notes";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Transaction_item_custodyScalarFieldEnum = (typeof Transaction_item_custodyScalarFieldEnum)[keyof typeof Transaction_item_custodyScalarFieldEnum];
export declare const Transaction_itemsScalarFieldEnum: {
    readonly id: "id";
    readonly transaction_id: "transaction_id";
    readonly inventory_item_id: "inventory_item_id";
    readonly item_role: "item_role";
    readonly quantity: "quantity";
    readonly from_user_id: "from_user_id";
    readonly from_store_id: "from_store_id";
    readonly to_user_id: "to_user_id";
    readonly to_store_id: "to_store_id";
    readonly market_snapshot_id: "market_snapshot_id";
    readonly agreed_unit_value: "agreed_unit_value";
    readonly currency_code: "currency_code";
    readonly created_at: "created_at";
    readonly result_inventory_item_id: "result_inventory_item_id";
    readonly game_id: "game_id";
};
export type Transaction_itemsScalarFieldEnum = (typeof Transaction_itemsScalarFieldEnum)[keyof typeof Transaction_itemsScalarFieldEnum];
export declare const TransactionsScalarFieldEnum: {
    readonly id: "id";
    readonly listing_id: "listing_id";
    readonly accepted_offer_id: "accepted_offer_id";
    readonly seller_user_id: "seller_user_id";
    readonly seller_store_id: "seller_store_id";
    readonly counterparty_user_id: "counterparty_user_id";
    readonly counterparty_store_id: "counterparty_store_id";
    readonly transaction_type: "transaction_type";
    readonly cash_amount: "cash_amount";
    readonly currency_code: "currency_code";
    readonly status: "status";
    readonly agreed_at: "agreed_at";
    readonly completed_at: "completed_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly accepted_wishlist_offer_id: "accepted_wishlist_offer_id";
    readonly game_id: "game_id";
};
export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum];
export declare const User_profilesScalarFieldEnum: {
    readonly id: "id";
    readonly auth_provider: "auth_provider";
    readonly auth_user_id: "auth_user_id";
    readonly email: "email";
    readonly username: "username";
    readonly display_name: "display_name";
    readonly avatar_url: "avatar_url";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly preferred_store_id: "preferred_store_id";
    readonly username_normalized: "username_normalized";
};
export type User_profilesScalarFieldEnum = (typeof User_profilesScalarFieldEnum)[keyof typeof User_profilesScalarFieldEnum];
export declare const Wishlist_itemsScalarFieldEnum: {
    readonly id: "id";
    readonly wishlist_id: "wishlist_id";
    readonly canonical_card_id: "canonical_card_id";
    readonly printing_id: "printing_id";
    readonly desired_finish: "desired_finish";
    readonly desired_condition: "desired_condition";
    readonly language_code: "language_code";
    readonly quantity_desired: "quantity_desired";
    readonly priority: "priority";
    readonly notes: "notes";
    readonly status: "status";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly willing_to_pay_cash: "willing_to_pay_cash";
    readonly willing_to_trade_cards: "willing_to_trade_cards";
    readonly max_cash_amount: "max_cash_amount";
    readonly currency_code: "currency_code";
    readonly trade_notes: "trade_notes";
    readonly game_id: "game_id";
};
export type Wishlist_itemsScalarFieldEnum = (typeof Wishlist_itemsScalarFieldEnum)[keyof typeof Wishlist_itemsScalarFieldEnum];
export declare const Wishlist_offer_itemsScalarFieldEnum: {
    readonly id: "id";
    readonly wishlist_offer_id: "wishlist_offer_id";
    readonly offerer_user_id: "offerer_user_id";
    readonly offerer_store_id: "offerer_store_id";
    readonly inventory_item_id: "inventory_item_id";
    readonly quantity: "quantity";
    readonly notes: "notes";
    readonly created_at: "created_at";
    readonly game_id: "game_id";
};
export type Wishlist_offer_itemsScalarFieldEnum = (typeof Wishlist_offer_itemsScalarFieldEnum)[keyof typeof Wishlist_offer_itemsScalarFieldEnum];
export declare const Wishlist_offer_requested_itemsScalarFieldEnum: {
    readonly id: "id";
    readonly wishlist_offer_id: "wishlist_offer_id";
    readonly requested_inventory_item_id: "requested_inventory_item_id";
    readonly requested_canonical_card_id: "requested_canonical_card_id";
    readonly requested_printing_id: "requested_printing_id";
    readonly desired_finish: "desired_finish";
    readonly desired_condition: "desired_condition";
    readonly language_code: "language_code";
    readonly quantity: "quantity";
    readonly notes: "notes";
    readonly created_at: "created_at";
    readonly game_id: "game_id";
};
export type Wishlist_offer_requested_itemsScalarFieldEnum = (typeof Wishlist_offer_requested_itemsScalarFieldEnum)[keyof typeof Wishlist_offer_requested_itemsScalarFieldEnum];
export declare const Wishlist_offersScalarFieldEnum: {
    readonly id: "id";
    readonly wishlist_item_id: "wishlist_item_id";
    readonly offerer_user_id: "offerer_user_id";
    readonly offerer_store_id: "offerer_store_id";
    readonly requests_cash: "requests_cash";
    readonly requests_trade: "requests_trade";
    readonly cash_ask_amount: "cash_ask_amount";
    readonly currency_code: "currency_code";
    readonly message: "message";
    readonly trade_terms_note: "trade_terms_note";
    readonly status: "status";
    readonly expires_at: "expires_at";
    readonly responded_at: "responded_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly game_id: "game_id";
};
export type Wishlist_offersScalarFieldEnum = (typeof Wishlist_offersScalarFieldEnum)[keyof typeof Wishlist_offersScalarFieldEnum];
export declare const WishlistsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly name: "name";
    readonly description: "description";
    readonly visibility: "visibility";
    readonly status: "status";
    readonly preferred_store_id: "preferred_store_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
    readonly game_id: "game_id";
};
export type WishlistsScalarFieldEnum = (typeof WishlistsScalarFieldEnum)[keyof typeof WishlistsScalarFieldEnum];
export declare const User_preferencesScalarFieldEnum: {
    readonly user_id: "user_id";
    readonly preferred_trade_store_id: "preferred_trade_store_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type User_preferencesScalarFieldEnum = (typeof User_preferencesScalarFieldEnum)[keyof typeof User_preferencesScalarFieldEnum];
export declare const Store_gamesScalarFieldEnum: {
    readonly store_id: "store_id";
    readonly game_id: "game_id";
    readonly trade_mediation_enabled: "trade_mediation_enabled";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type Store_gamesScalarFieldEnum = (typeof Store_gamesScalarFieldEnum)[keyof typeof Store_gamesScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'Decimal'
 */
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
/**
 * Reference to a field of type 'Decimal[]'
 */
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
/**
 * Options common to all variants of `PrismaClientOptions`, regardless of whether you connect to your database through a driver adapter or through Prisma Accelerate.
 */
export interface PrismaClientBaseOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
}
/**
 * `PrismaClient` options for connecting to your database through Prisma Accelerate instead of a driver adapter.
 *
 * Learn more: https://pris.ly/d/accelerate
 */
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     *
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl: string;
    adapter?: never;
}
/**
 * `PrismaClient` options for connecting to your database through a driver adapter. This is the common case in Prisma 7.
 *
 * Learn more: https://pris.ly/d/driver-adapters
 */
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     *
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     *
     * Learn more: https://pris.ly/d/driver-adapters
     *
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     *
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
/**
 * Options passed to the `PrismaClient` constructor.
 *
 * A driver adapter (or, alternatively, a Prisma Accelerate URL) is **required**. See {@link PrismaClientOptionsWithAdapter} and {@link PrismaClientOptionsWithAccelerateUrl} for the two variants. All other properties live in {@link PrismaClientBaseOptions} and are optional.
 *
 * Learn more about driver adapters: https://pris.ly/d/driver-adapters
 */
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    canonical_cards?: Prisma.canonical_cardsOmit;
    card_printings?: Prisma.card_printingsOmit;
    card_sets?: Prisma.card_setsOmit;
    collections?: Prisma.collectionsOmit;
    games?: Prisma.gamesOmit;
    inventory_item_interests?: Prisma.inventory_item_interestsOmit;
    inventory_item_photos?: Prisma.inventory_item_photosOmit;
    inventory_items?: Prisma.inventory_itemsOmit;
    listing_offers?: Prisma.listing_offersOmit;
    listings?: Prisma.listingsOmit;
    offer_items?: Prisma.offer_itemsOmit;
    price_snapshots?: Prisma.price_snapshotsOmit;
    printing_finishes?: Prisma.printing_finishesOmit;
    store_staff?: Prisma.store_staffOmit;
    store_trade_handoffs?: Prisma.store_trade_handoffsOmit;
    stores?: Prisma.storesOmit;
    transaction_item_custody?: Prisma.transaction_item_custodyOmit;
    transaction_items?: Prisma.transaction_itemsOmit;
    transactions?: Prisma.transactionsOmit;
    user_profiles?: Prisma.user_profilesOmit;
    wishlist_items?: Prisma.wishlist_itemsOmit;
    wishlist_offer_items?: Prisma.wishlist_offer_itemsOmit;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsOmit;
    wishlist_offers?: Prisma.wishlist_offersOmit;
    wishlists?: Prisma.wishlistsOmit;
    user_preferences?: Prisma.user_preferencesOmit;
    store_games?: Prisma.store_gamesOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
