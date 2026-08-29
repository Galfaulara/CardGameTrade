import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model store_games
 *
 */
export type store_gamesModel = runtime.Types.Result.DefaultSelection<Prisma.$store_gamesPayload>;
export type AggregateStore_games = {
    _count: Store_gamesCountAggregateOutputType | null;
    _min: Store_gamesMinAggregateOutputType | null;
    _max: Store_gamesMaxAggregateOutputType | null;
};
export type Store_gamesMinAggregateOutputType = {
    store_id: string | null;
    game_id: string | null;
    trade_mediation_enabled: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Store_gamesMaxAggregateOutputType = {
    store_id: string | null;
    game_id: string | null;
    trade_mediation_enabled: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Store_gamesCountAggregateOutputType = {
    store_id: number;
    game_id: number;
    trade_mediation_enabled: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Store_gamesMinAggregateInputType = {
    store_id?: true;
    game_id?: true;
    trade_mediation_enabled?: true;
    created_at?: true;
    updated_at?: true;
};
export type Store_gamesMaxAggregateInputType = {
    store_id?: true;
    game_id?: true;
    trade_mediation_enabled?: true;
    created_at?: true;
    updated_at?: true;
};
export type Store_gamesCountAggregateInputType = {
    store_id?: true;
    game_id?: true;
    trade_mediation_enabled?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Store_gamesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which store_games to aggregate.
     */
    where?: Prisma.store_gamesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of store_games to fetch.
     */
    orderBy?: Prisma.store_gamesOrderByWithRelationInput | Prisma.store_gamesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.store_gamesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` store_games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` store_games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned store_games
    **/
    _count?: true | Store_gamesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Store_gamesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Store_gamesMaxAggregateInputType;
};
export type GetStore_gamesAggregateType<T extends Store_gamesAggregateArgs> = {
    [P in keyof T & keyof AggregateStore_games]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStore_games[P]> : Prisma.GetScalarType<T[P], AggregateStore_games[P]>;
};
export type store_gamesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.store_gamesWhereInput;
    orderBy?: Prisma.store_gamesOrderByWithAggregationInput | Prisma.store_gamesOrderByWithAggregationInput[];
    by: Prisma.Store_gamesScalarFieldEnum[] | Prisma.Store_gamesScalarFieldEnum;
    having?: Prisma.store_gamesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Store_gamesCountAggregateInputType | true;
    _min?: Store_gamesMinAggregateInputType;
    _max?: Store_gamesMaxAggregateInputType;
};
export type Store_gamesGroupByOutputType = {
    store_id: string;
    game_id: string;
    trade_mediation_enabled: boolean;
    created_at: Date;
    updated_at: Date;
    _count: Store_gamesCountAggregateOutputType | null;
    _min: Store_gamesMinAggregateOutputType | null;
    _max: Store_gamesMaxAggregateOutputType | null;
};
export type GetStore_gamesGroupByPayload<T extends store_gamesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Store_gamesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Store_gamesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Store_gamesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Store_gamesGroupByOutputType[P]>;
}>>;
export type store_gamesWhereInput = {
    AND?: Prisma.store_gamesWhereInput | Prisma.store_gamesWhereInput[];
    OR?: Prisma.store_gamesWhereInput[];
    NOT?: Prisma.store_gamesWhereInput | Prisma.store_gamesWhereInput[];
    store_id?: Prisma.UuidFilter<"store_games"> | string;
    game_id?: Prisma.UuidFilter<"store_games"> | string;
    trade_mediation_enabled?: Prisma.BoolFilter<"store_games"> | boolean;
    created_at?: Prisma.DateTimeFilter<"store_games"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"store_games"> | Date | string;
    inventory_item_interests?: Prisma.Inventory_item_interestsListRelationFilter;
    inventory_items?: Prisma.Inventory_itemsListRelationFilter;
    listing_offers?: Prisma.Listing_offersListRelationFilter;
    listings?: Prisma.ListingsListRelationFilter;
    games?: Prisma.XOR<Prisma.GamesScalarRelationFilter, Prisma.gamesWhereInput>;
    stores?: Prisma.XOR<Prisma.StoresScalarRelationFilter, Prisma.storesWhereInput>;
    store_trade_handoffs?: Prisma.Store_trade_handoffsListRelationFilter;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.Transaction_itemsListRelationFilter;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.Transaction_itemsListRelationFilter;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.TransactionsListRelationFilter;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.TransactionsListRelationFilter;
    wishlist_offers?: Prisma.Wishlist_offersListRelationFilter;
    wishlists?: Prisma.WishlistsListRelationFilter;
};
export type store_gamesOrderByWithRelationInput = {
    store_id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    trade_mediation_enabled?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    inventory_item_interests?: Prisma.inventory_item_interestsOrderByRelationAggregateInput;
    inventory_items?: Prisma.inventory_itemsOrderByRelationAggregateInput;
    listing_offers?: Prisma.listing_offersOrderByRelationAggregateInput;
    listings?: Prisma.listingsOrderByRelationAggregateInput;
    games?: Prisma.gamesOrderByWithRelationInput;
    stores?: Prisma.storesOrderByWithRelationInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsOrderByRelationAggregateInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsOrderByRelationAggregateInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsOrderByRelationAggregateInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsOrderByRelationAggregateInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsOrderByRelationAggregateInput;
    wishlist_offers?: Prisma.wishlist_offersOrderByRelationAggregateInput;
    wishlists?: Prisma.wishlistsOrderByRelationAggregateInput;
};
export type store_gamesWhereUniqueInput = Prisma.AtLeast<{
    store_id_game_id?: Prisma.store_gamesStore_idGame_idCompoundUniqueInput;
    AND?: Prisma.store_gamesWhereInput | Prisma.store_gamesWhereInput[];
    OR?: Prisma.store_gamesWhereInput[];
    NOT?: Prisma.store_gamesWhereInput | Prisma.store_gamesWhereInput[];
    store_id?: Prisma.UuidFilter<"store_games"> | string;
    game_id?: Prisma.UuidFilter<"store_games"> | string;
    trade_mediation_enabled?: Prisma.BoolFilter<"store_games"> | boolean;
    created_at?: Prisma.DateTimeFilter<"store_games"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"store_games"> | Date | string;
    inventory_item_interests?: Prisma.Inventory_item_interestsListRelationFilter;
    inventory_items?: Prisma.Inventory_itemsListRelationFilter;
    listing_offers?: Prisma.Listing_offersListRelationFilter;
    listings?: Prisma.ListingsListRelationFilter;
    games?: Prisma.XOR<Prisma.GamesScalarRelationFilter, Prisma.gamesWhereInput>;
    stores?: Prisma.XOR<Prisma.StoresScalarRelationFilter, Prisma.storesWhereInput>;
    store_trade_handoffs?: Prisma.Store_trade_handoffsListRelationFilter;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.Transaction_itemsListRelationFilter;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.Transaction_itemsListRelationFilter;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.TransactionsListRelationFilter;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.TransactionsListRelationFilter;
    wishlist_offers?: Prisma.Wishlist_offersListRelationFilter;
    wishlists?: Prisma.WishlistsListRelationFilter;
}, "store_id_game_id">;
export type store_gamesOrderByWithAggregationInput = {
    store_id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    trade_mediation_enabled?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.store_gamesCountOrderByAggregateInput;
    _max?: Prisma.store_gamesMaxOrderByAggregateInput;
    _min?: Prisma.store_gamesMinOrderByAggregateInput;
};
export type store_gamesScalarWhereWithAggregatesInput = {
    AND?: Prisma.store_gamesScalarWhereWithAggregatesInput | Prisma.store_gamesScalarWhereWithAggregatesInput[];
    OR?: Prisma.store_gamesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.store_gamesScalarWhereWithAggregatesInput | Prisma.store_gamesScalarWhereWithAggregatesInput[];
    store_id?: Prisma.UuidWithAggregatesFilter<"store_games"> | string;
    game_id?: Prisma.UuidWithAggregatesFilter<"store_games"> | string;
    trade_mediation_enabled?: Prisma.BoolWithAggregatesFilter<"store_games"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"store_games"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"store_games"> | Date | string;
};
export type store_gamesCreateInput = {
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsCreateNestedManyWithoutStore_gamesInput;
    games: Prisma.gamesCreateNestedOneWithoutStore_gamesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesUncheckedCreateInput = {
    store_id: string;
    game_id: string;
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsUncheckedCreateNestedManyWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesUpdateInput = {
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUpdateManyWithoutStore_gamesNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutStore_gamesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesUncheckedUpdateInput = {
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesCreateManyInput = {
    store_id: string;
    game_id: string;
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type store_gamesUpdateManyMutationInput = {
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type store_gamesUncheckedUpdateManyInput = {
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Store_gamesListRelationFilter = {
    every?: Prisma.store_gamesWhereInput;
    some?: Prisma.store_gamesWhereInput;
    none?: Prisma.store_gamesWhereInput;
};
export type store_gamesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Store_gamesNullableScalarRelationFilter = {
    is?: Prisma.store_gamesWhereInput | null;
    isNot?: Prisma.store_gamesWhereInput | null;
};
export type Store_gamesScalarRelationFilter = {
    is?: Prisma.store_gamesWhereInput;
    isNot?: Prisma.store_gamesWhereInput;
};
export type store_gamesStore_idGame_idCompoundUniqueInput = {
    store_id: string;
    game_id: string;
};
export type store_gamesCountOrderByAggregateInput = {
    store_id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    trade_mediation_enabled?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type store_gamesMaxOrderByAggregateInput = {
    store_id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    trade_mediation_enabled?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type store_gamesMinOrderByAggregateInput = {
    store_id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    trade_mediation_enabled?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type store_gamesCreateNestedManyWithoutGamesInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutGamesInput, Prisma.store_gamesUncheckedCreateWithoutGamesInput> | Prisma.store_gamesCreateWithoutGamesInput[] | Prisma.store_gamesUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutGamesInput | Prisma.store_gamesCreateOrConnectWithoutGamesInput[];
    createMany?: Prisma.store_gamesCreateManyGamesInputEnvelope;
    connect?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
};
export type store_gamesUncheckedCreateNestedManyWithoutGamesInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutGamesInput, Prisma.store_gamesUncheckedCreateWithoutGamesInput> | Prisma.store_gamesCreateWithoutGamesInput[] | Prisma.store_gamesUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutGamesInput | Prisma.store_gamesCreateOrConnectWithoutGamesInput[];
    createMany?: Prisma.store_gamesCreateManyGamesInputEnvelope;
    connect?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
};
export type store_gamesUpdateManyWithoutGamesNestedInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutGamesInput, Prisma.store_gamesUncheckedCreateWithoutGamesInput> | Prisma.store_gamesCreateWithoutGamesInput[] | Prisma.store_gamesUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutGamesInput | Prisma.store_gamesCreateOrConnectWithoutGamesInput[];
    upsert?: Prisma.store_gamesUpsertWithWhereUniqueWithoutGamesInput | Prisma.store_gamesUpsertWithWhereUniqueWithoutGamesInput[];
    createMany?: Prisma.store_gamesCreateManyGamesInputEnvelope;
    set?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
    disconnect?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
    delete?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
    connect?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
    update?: Prisma.store_gamesUpdateWithWhereUniqueWithoutGamesInput | Prisma.store_gamesUpdateWithWhereUniqueWithoutGamesInput[];
    updateMany?: Prisma.store_gamesUpdateManyWithWhereWithoutGamesInput | Prisma.store_gamesUpdateManyWithWhereWithoutGamesInput[];
    deleteMany?: Prisma.store_gamesScalarWhereInput | Prisma.store_gamesScalarWhereInput[];
};
export type store_gamesUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutGamesInput, Prisma.store_gamesUncheckedCreateWithoutGamesInput> | Prisma.store_gamesCreateWithoutGamesInput[] | Prisma.store_gamesUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutGamesInput | Prisma.store_gamesCreateOrConnectWithoutGamesInput[];
    upsert?: Prisma.store_gamesUpsertWithWhereUniqueWithoutGamesInput | Prisma.store_gamesUpsertWithWhereUniqueWithoutGamesInput[];
    createMany?: Prisma.store_gamesCreateManyGamesInputEnvelope;
    set?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
    disconnect?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
    delete?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
    connect?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
    update?: Prisma.store_gamesUpdateWithWhereUniqueWithoutGamesInput | Prisma.store_gamesUpdateWithWhereUniqueWithoutGamesInput[];
    updateMany?: Prisma.store_gamesUpdateManyWithWhereWithoutGamesInput | Prisma.store_gamesUpdateManyWithWhereWithoutGamesInput[];
    deleteMany?: Prisma.store_gamesScalarWhereInput | Prisma.store_gamesScalarWhereInput[];
};
export type store_gamesCreateNestedOneWithoutInventory_item_interestsInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutInventory_item_interestsInput, Prisma.store_gamesUncheckedCreateWithoutInventory_item_interestsInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutInventory_item_interestsInput;
    connect?: Prisma.store_gamesWhereUniqueInput;
};
export type store_gamesUpdateOneWithoutInventory_item_interestsNestedInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutInventory_item_interestsInput, Prisma.store_gamesUncheckedCreateWithoutInventory_item_interestsInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutInventory_item_interestsInput;
    upsert?: Prisma.store_gamesUpsertWithoutInventory_item_interestsInput;
    disconnect?: Prisma.store_gamesWhereInput | boolean;
    delete?: Prisma.store_gamesWhereInput | boolean;
    connect?: Prisma.store_gamesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_gamesUpdateToOneWithWhereWithoutInventory_item_interestsInput, Prisma.store_gamesUpdateWithoutInventory_item_interestsInput>, Prisma.store_gamesUncheckedUpdateWithoutInventory_item_interestsInput>;
};
export type store_gamesCreateNestedOneWithoutInventory_itemsInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutInventory_itemsInput, Prisma.store_gamesUncheckedCreateWithoutInventory_itemsInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutInventory_itemsInput;
    connect?: Prisma.store_gamesWhereUniqueInput;
};
export type store_gamesUpdateOneWithoutInventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutInventory_itemsInput, Prisma.store_gamesUncheckedCreateWithoutInventory_itemsInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutInventory_itemsInput;
    upsert?: Prisma.store_gamesUpsertWithoutInventory_itemsInput;
    disconnect?: Prisma.store_gamesWhereInput | boolean;
    delete?: Prisma.store_gamesWhereInput | boolean;
    connect?: Prisma.store_gamesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_gamesUpdateToOneWithWhereWithoutInventory_itemsInput, Prisma.store_gamesUpdateWithoutInventory_itemsInput>, Prisma.store_gamesUncheckedUpdateWithoutInventory_itemsInput>;
};
export type store_gamesCreateNestedOneWithoutListing_offersInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutListing_offersInput, Prisma.store_gamesUncheckedCreateWithoutListing_offersInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutListing_offersInput;
    connect?: Prisma.store_gamesWhereUniqueInput;
};
export type store_gamesUpdateOneWithoutListing_offersNestedInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutListing_offersInput, Prisma.store_gamesUncheckedCreateWithoutListing_offersInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutListing_offersInput;
    upsert?: Prisma.store_gamesUpsertWithoutListing_offersInput;
    disconnect?: Prisma.store_gamesWhereInput | boolean;
    delete?: Prisma.store_gamesWhereInput | boolean;
    connect?: Prisma.store_gamesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_gamesUpdateToOneWithWhereWithoutListing_offersInput, Prisma.store_gamesUpdateWithoutListing_offersInput>, Prisma.store_gamesUncheckedUpdateWithoutListing_offersInput>;
};
export type store_gamesCreateNestedOneWithoutListingsInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutListingsInput, Prisma.store_gamesUncheckedCreateWithoutListingsInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutListingsInput;
    connect?: Prisma.store_gamesWhereUniqueInput;
};
export type store_gamesUpdateOneWithoutListingsNestedInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutListingsInput, Prisma.store_gamesUncheckedCreateWithoutListingsInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutListingsInput;
    upsert?: Prisma.store_gamesUpsertWithoutListingsInput;
    disconnect?: Prisma.store_gamesWhereInput | boolean;
    delete?: Prisma.store_gamesWhereInput | boolean;
    connect?: Prisma.store_gamesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_gamesUpdateToOneWithWhereWithoutListingsInput, Prisma.store_gamesUpdateWithoutListingsInput>, Prisma.store_gamesUncheckedUpdateWithoutListingsInput>;
};
export type store_gamesCreateNestedOneWithoutStore_trade_handoffsInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutStore_trade_handoffsInput, Prisma.store_gamesUncheckedCreateWithoutStore_trade_handoffsInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutStore_trade_handoffsInput;
    connect?: Prisma.store_gamesWhereUniqueInput;
};
export type store_gamesUpdateOneRequiredWithoutStore_trade_handoffsNestedInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutStore_trade_handoffsInput, Prisma.store_gamesUncheckedCreateWithoutStore_trade_handoffsInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutStore_trade_handoffsInput;
    upsert?: Prisma.store_gamesUpsertWithoutStore_trade_handoffsInput;
    connect?: Prisma.store_gamesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_gamesUpdateToOneWithWhereWithoutStore_trade_handoffsInput, Prisma.store_gamesUpdateWithoutStore_trade_handoffsInput>, Prisma.store_gamesUncheckedUpdateWithoutStore_trade_handoffsInput>;
};
export type store_gamesCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutStoresInput, Prisma.store_gamesUncheckedCreateWithoutStoresInput> | Prisma.store_gamesCreateWithoutStoresInput[] | Prisma.store_gamesUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutStoresInput | Prisma.store_gamesCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.store_gamesCreateManyStoresInputEnvelope;
    connect?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
};
export type store_gamesUncheckedCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutStoresInput, Prisma.store_gamesUncheckedCreateWithoutStoresInput> | Prisma.store_gamesCreateWithoutStoresInput[] | Prisma.store_gamesUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutStoresInput | Prisma.store_gamesCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.store_gamesCreateManyStoresInputEnvelope;
    connect?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
};
export type store_gamesUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutStoresInput, Prisma.store_gamesUncheckedCreateWithoutStoresInput> | Prisma.store_gamesCreateWithoutStoresInput[] | Prisma.store_gamesUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutStoresInput | Prisma.store_gamesCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.store_gamesUpsertWithWhereUniqueWithoutStoresInput | Prisma.store_gamesUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.store_gamesCreateManyStoresInputEnvelope;
    set?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
    disconnect?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
    delete?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
    connect?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
    update?: Prisma.store_gamesUpdateWithWhereUniqueWithoutStoresInput | Prisma.store_gamesUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.store_gamesUpdateManyWithWhereWithoutStoresInput | Prisma.store_gamesUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.store_gamesScalarWhereInput | Prisma.store_gamesScalarWhereInput[];
};
export type store_gamesUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutStoresInput, Prisma.store_gamesUncheckedCreateWithoutStoresInput> | Prisma.store_gamesCreateWithoutStoresInput[] | Prisma.store_gamesUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutStoresInput | Prisma.store_gamesCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.store_gamesUpsertWithWhereUniqueWithoutStoresInput | Prisma.store_gamesUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.store_gamesCreateManyStoresInputEnvelope;
    set?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
    disconnect?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
    delete?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
    connect?: Prisma.store_gamesWhereUniqueInput | Prisma.store_gamesWhereUniqueInput[];
    update?: Prisma.store_gamesUpdateWithWhereUniqueWithoutStoresInput | Prisma.store_gamesUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.store_gamesUpdateManyWithWhereWithoutStoresInput | Prisma.store_gamesUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.store_gamesScalarWhereInput | Prisma.store_gamesScalarWhereInput[];
};
export type store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedCreateWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput;
    connect?: Prisma.store_gamesWhereUniqueInput;
};
export type store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedCreateWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput;
    connect?: Prisma.store_gamesWhereUniqueInput;
};
export type store_gamesUpdateOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedCreateWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput;
    upsert?: Prisma.store_gamesUpsertWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput;
    disconnect?: Prisma.store_gamesWhereInput | boolean;
    delete?: Prisma.store_gamesWhereInput | boolean;
    connect?: Prisma.store_gamesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_gamesUpdateToOneWithWhereWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput, Prisma.store_gamesUpdateWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput>, Prisma.store_gamesUncheckedUpdateWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput>;
};
export type store_gamesUpdateOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedCreateWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput;
    upsert?: Prisma.store_gamesUpsertWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput;
    disconnect?: Prisma.store_gamesWhereInput | boolean;
    delete?: Prisma.store_gamesWhereInput | boolean;
    connect?: Prisma.store_gamesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_gamesUpdateToOneWithWhereWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput, Prisma.store_gamesUpdateWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput>, Prisma.store_gamesUncheckedUpdateWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput>;
};
export type store_gamesCreateNestedOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedCreateWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput;
    connect?: Prisma.store_gamesWhereUniqueInput;
};
export type store_gamesCreateNestedOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedCreateWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput;
    connect?: Prisma.store_gamesWhereUniqueInput;
};
export type store_gamesUpdateOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedCreateWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput;
    upsert?: Prisma.store_gamesUpsertWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput;
    disconnect?: Prisma.store_gamesWhereInput | boolean;
    delete?: Prisma.store_gamesWhereInput | boolean;
    connect?: Prisma.store_gamesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_gamesUpdateToOneWithWhereWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput, Prisma.store_gamesUpdateWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput>, Prisma.store_gamesUncheckedUpdateWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput>;
};
export type store_gamesUpdateOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedCreateWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput;
    upsert?: Prisma.store_gamesUpsertWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput;
    disconnect?: Prisma.store_gamesWhereInput | boolean;
    delete?: Prisma.store_gamesWhereInput | boolean;
    connect?: Prisma.store_gamesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_gamesUpdateToOneWithWhereWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput, Prisma.store_gamesUpdateWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput>, Prisma.store_gamesUncheckedUpdateWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput>;
};
export type store_gamesCreateNestedOneWithoutWishlist_offersInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutWishlist_offersInput, Prisma.store_gamesUncheckedCreateWithoutWishlist_offersInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutWishlist_offersInput;
    connect?: Prisma.store_gamesWhereUniqueInput;
};
export type store_gamesUpdateOneWithoutWishlist_offersNestedInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutWishlist_offersInput, Prisma.store_gamesUncheckedCreateWithoutWishlist_offersInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutWishlist_offersInput;
    upsert?: Prisma.store_gamesUpsertWithoutWishlist_offersInput;
    disconnect?: Prisma.store_gamesWhereInput | boolean;
    delete?: Prisma.store_gamesWhereInput | boolean;
    connect?: Prisma.store_gamesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_gamesUpdateToOneWithWhereWithoutWishlist_offersInput, Prisma.store_gamesUpdateWithoutWishlist_offersInput>, Prisma.store_gamesUncheckedUpdateWithoutWishlist_offersInput>;
};
export type store_gamesCreateNestedOneWithoutWishlistsInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutWishlistsInput, Prisma.store_gamesUncheckedCreateWithoutWishlistsInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutWishlistsInput;
    connect?: Prisma.store_gamesWhereUniqueInput;
};
export type store_gamesUpdateOneWithoutWishlistsNestedInput = {
    create?: Prisma.XOR<Prisma.store_gamesCreateWithoutWishlistsInput, Prisma.store_gamesUncheckedCreateWithoutWishlistsInput>;
    connectOrCreate?: Prisma.store_gamesCreateOrConnectWithoutWishlistsInput;
    upsert?: Prisma.store_gamesUpsertWithoutWishlistsInput;
    disconnect?: Prisma.store_gamesWhereInput | boolean;
    delete?: Prisma.store_gamesWhereInput | boolean;
    connect?: Prisma.store_gamesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_gamesUpdateToOneWithWhereWithoutWishlistsInput, Prisma.store_gamesUpdateWithoutWishlistsInput>, Prisma.store_gamesUncheckedUpdateWithoutWishlistsInput>;
};
export type store_gamesCreateWithoutGamesInput = {
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsCreateNestedManyWithoutStore_gamesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesUncheckedCreateWithoutGamesInput = {
    store_id: string;
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsUncheckedCreateNestedManyWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesCreateOrConnectWithoutGamesInput = {
    where: Prisma.store_gamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutGamesInput, Prisma.store_gamesUncheckedCreateWithoutGamesInput>;
};
export type store_gamesCreateManyGamesInputEnvelope = {
    data: Prisma.store_gamesCreateManyGamesInput | Prisma.store_gamesCreateManyGamesInput[];
    skipDuplicates?: boolean;
};
export type store_gamesUpsertWithWhereUniqueWithoutGamesInput = {
    where: Prisma.store_gamesWhereUniqueInput;
    update: Prisma.XOR<Prisma.store_gamesUpdateWithoutGamesInput, Prisma.store_gamesUncheckedUpdateWithoutGamesInput>;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutGamesInput, Prisma.store_gamesUncheckedCreateWithoutGamesInput>;
};
export type store_gamesUpdateWithWhereUniqueWithoutGamesInput = {
    where: Prisma.store_gamesWhereUniqueInput;
    data: Prisma.XOR<Prisma.store_gamesUpdateWithoutGamesInput, Prisma.store_gamesUncheckedUpdateWithoutGamesInput>;
};
export type store_gamesUpdateManyWithWhereWithoutGamesInput = {
    where: Prisma.store_gamesScalarWhereInput;
    data: Prisma.XOR<Prisma.store_gamesUpdateManyMutationInput, Prisma.store_gamesUncheckedUpdateManyWithoutGamesInput>;
};
export type store_gamesScalarWhereInput = {
    AND?: Prisma.store_gamesScalarWhereInput | Prisma.store_gamesScalarWhereInput[];
    OR?: Prisma.store_gamesScalarWhereInput[];
    NOT?: Prisma.store_gamesScalarWhereInput | Prisma.store_gamesScalarWhereInput[];
    store_id?: Prisma.UuidFilter<"store_games"> | string;
    game_id?: Prisma.UuidFilter<"store_games"> | string;
    trade_mediation_enabled?: Prisma.BoolFilter<"store_games"> | boolean;
    created_at?: Prisma.DateTimeFilter<"store_games"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"store_games"> | Date | string;
};
export type store_gamesCreateWithoutInventory_item_interestsInput = {
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsCreateNestedManyWithoutStore_gamesInput;
    games: Prisma.gamesCreateNestedOneWithoutStore_gamesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesUncheckedCreateWithoutInventory_item_interestsInput = {
    store_id: string;
    game_id: string;
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsUncheckedCreateNestedManyWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesCreateOrConnectWithoutInventory_item_interestsInput = {
    where: Prisma.store_gamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutInventory_item_interestsInput, Prisma.store_gamesUncheckedCreateWithoutInventory_item_interestsInput>;
};
export type store_gamesUpsertWithoutInventory_item_interestsInput = {
    update: Prisma.XOR<Prisma.store_gamesUpdateWithoutInventory_item_interestsInput, Prisma.store_gamesUncheckedUpdateWithoutInventory_item_interestsInput>;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutInventory_item_interestsInput, Prisma.store_gamesUncheckedCreateWithoutInventory_item_interestsInput>;
    where?: Prisma.store_gamesWhereInput;
};
export type store_gamesUpdateToOneWithWhereWithoutInventory_item_interestsInput = {
    where?: Prisma.store_gamesWhereInput;
    data: Prisma.XOR<Prisma.store_gamesUpdateWithoutInventory_item_interestsInput, Prisma.store_gamesUncheckedUpdateWithoutInventory_item_interestsInput>;
};
export type store_gamesUpdateWithoutInventory_item_interestsInput = {
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUpdateManyWithoutStore_gamesNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutStore_gamesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesUncheckedUpdateWithoutInventory_item_interestsInput = {
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesCreateWithoutInventory_itemsInput = {
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsCreateNestedManyWithoutStore_gamesInput;
    games: Prisma.gamesCreateNestedOneWithoutStore_gamesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesUncheckedCreateWithoutInventory_itemsInput = {
    store_id: string;
    game_id: string;
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsUncheckedCreateNestedManyWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesCreateOrConnectWithoutInventory_itemsInput = {
    where: Prisma.store_gamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutInventory_itemsInput, Prisma.store_gamesUncheckedCreateWithoutInventory_itemsInput>;
};
export type store_gamesUpsertWithoutInventory_itemsInput = {
    update: Prisma.XOR<Prisma.store_gamesUpdateWithoutInventory_itemsInput, Prisma.store_gamesUncheckedUpdateWithoutInventory_itemsInput>;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutInventory_itemsInput, Prisma.store_gamesUncheckedCreateWithoutInventory_itemsInput>;
    where?: Prisma.store_gamesWhereInput;
};
export type store_gamesUpdateToOneWithWhereWithoutInventory_itemsInput = {
    where?: Prisma.store_gamesWhereInput;
    data: Prisma.XOR<Prisma.store_gamesUpdateWithoutInventory_itemsInput, Prisma.store_gamesUncheckedUpdateWithoutInventory_itemsInput>;
};
export type store_gamesUpdateWithoutInventory_itemsInput = {
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUpdateManyWithoutStore_gamesNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutStore_gamesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesUncheckedUpdateWithoutInventory_itemsInput = {
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesCreateWithoutListing_offersInput = {
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsCreateNestedManyWithoutStore_gamesInput;
    games: Prisma.gamesCreateNestedOneWithoutStore_gamesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesUncheckedCreateWithoutListing_offersInput = {
    store_id: string;
    game_id: string;
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsUncheckedCreateNestedManyWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesCreateOrConnectWithoutListing_offersInput = {
    where: Prisma.store_gamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutListing_offersInput, Prisma.store_gamesUncheckedCreateWithoutListing_offersInput>;
};
export type store_gamesUpsertWithoutListing_offersInput = {
    update: Prisma.XOR<Prisma.store_gamesUpdateWithoutListing_offersInput, Prisma.store_gamesUncheckedUpdateWithoutListing_offersInput>;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutListing_offersInput, Prisma.store_gamesUncheckedCreateWithoutListing_offersInput>;
    where?: Prisma.store_gamesWhereInput;
};
export type store_gamesUpdateToOneWithWhereWithoutListing_offersInput = {
    where?: Prisma.store_gamesWhereInput;
    data: Prisma.XOR<Prisma.store_gamesUpdateWithoutListing_offersInput, Prisma.store_gamesUncheckedUpdateWithoutListing_offersInput>;
};
export type store_gamesUpdateWithoutListing_offersInput = {
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUpdateManyWithoutStore_gamesNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutStore_gamesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesUncheckedUpdateWithoutListing_offersInput = {
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesCreateWithoutListingsInput = {
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStore_gamesInput;
    games: Prisma.gamesCreateNestedOneWithoutStore_gamesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesUncheckedCreateWithoutListingsInput = {
    store_id: string;
    game_id: string;
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesCreateOrConnectWithoutListingsInput = {
    where: Prisma.store_gamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutListingsInput, Prisma.store_gamesUncheckedCreateWithoutListingsInput>;
};
export type store_gamesUpsertWithoutListingsInput = {
    update: Prisma.XOR<Prisma.store_gamesUpdateWithoutListingsInput, Prisma.store_gamesUncheckedUpdateWithoutListingsInput>;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutListingsInput, Prisma.store_gamesUncheckedCreateWithoutListingsInput>;
    where?: Prisma.store_gamesWhereInput;
};
export type store_gamesUpdateToOneWithWhereWithoutListingsInput = {
    where?: Prisma.store_gamesWhereInput;
    data: Prisma.XOR<Prisma.store_gamesUpdateWithoutListingsInput, Prisma.store_gamesUncheckedUpdateWithoutListingsInput>;
};
export type store_gamesUpdateWithoutListingsInput = {
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStore_gamesNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutStore_gamesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesUncheckedUpdateWithoutListingsInput = {
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesCreateWithoutStore_trade_handoffsInput = {
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsCreateNestedManyWithoutStore_gamesInput;
    games: Prisma.gamesCreateNestedOneWithoutStore_gamesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesUncheckedCreateWithoutStore_trade_handoffsInput = {
    store_id: string;
    game_id: string;
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsUncheckedCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesCreateOrConnectWithoutStore_trade_handoffsInput = {
    where: Prisma.store_gamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutStore_trade_handoffsInput, Prisma.store_gamesUncheckedCreateWithoutStore_trade_handoffsInput>;
};
export type store_gamesUpsertWithoutStore_trade_handoffsInput = {
    update: Prisma.XOR<Prisma.store_gamesUpdateWithoutStore_trade_handoffsInput, Prisma.store_gamesUncheckedUpdateWithoutStore_trade_handoffsInput>;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutStore_trade_handoffsInput, Prisma.store_gamesUncheckedCreateWithoutStore_trade_handoffsInput>;
    where?: Prisma.store_gamesWhereInput;
};
export type store_gamesUpdateToOneWithWhereWithoutStore_trade_handoffsInput = {
    where?: Prisma.store_gamesWhereInput;
    data: Prisma.XOR<Prisma.store_gamesUpdateWithoutStore_trade_handoffsInput, Prisma.store_gamesUncheckedUpdateWithoutStore_trade_handoffsInput>;
};
export type store_gamesUpdateWithoutStore_trade_handoffsInput = {
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUpdateManyWithoutStore_gamesNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutStore_gamesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesUncheckedUpdateWithoutStore_trade_handoffsInput = {
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesCreateWithoutStoresInput = {
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsCreateNestedManyWithoutStore_gamesInput;
    games: Prisma.gamesCreateNestedOneWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesUncheckedCreateWithoutStoresInput = {
    game_id: string;
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsUncheckedCreateNestedManyWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesCreateOrConnectWithoutStoresInput = {
    where: Prisma.store_gamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutStoresInput, Prisma.store_gamesUncheckedCreateWithoutStoresInput>;
};
export type store_gamesCreateManyStoresInputEnvelope = {
    data: Prisma.store_gamesCreateManyStoresInput | Prisma.store_gamesCreateManyStoresInput[];
    skipDuplicates?: boolean;
};
export type store_gamesUpsertWithWhereUniqueWithoutStoresInput = {
    where: Prisma.store_gamesWhereUniqueInput;
    update: Prisma.XOR<Prisma.store_gamesUpdateWithoutStoresInput, Prisma.store_gamesUncheckedUpdateWithoutStoresInput>;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutStoresInput, Prisma.store_gamesUncheckedCreateWithoutStoresInput>;
};
export type store_gamesUpdateWithWhereUniqueWithoutStoresInput = {
    where: Prisma.store_gamesWhereUniqueInput;
    data: Prisma.XOR<Prisma.store_gamesUpdateWithoutStoresInput, Prisma.store_gamesUncheckedUpdateWithoutStoresInput>;
};
export type store_gamesUpdateManyWithWhereWithoutStoresInput = {
    where: Prisma.store_gamesScalarWhereInput;
    data: Prisma.XOR<Prisma.store_gamesUpdateManyMutationInput, Prisma.store_gamesUncheckedUpdateManyWithoutStoresInput>;
};
export type store_gamesCreateWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput = {
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsCreateNestedManyWithoutStore_gamesInput;
    games: Prisma.gamesCreateNestedOneWithoutStore_gamesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesUncheckedCreateWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput = {
    store_id: string;
    game_id: string;
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsUncheckedCreateNestedManyWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesCreateOrConnectWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput = {
    where: Prisma.store_gamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedCreateWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput>;
};
export type store_gamesCreateWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput = {
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsCreateNestedManyWithoutStore_gamesInput;
    games: Prisma.gamesCreateNestedOneWithoutStore_gamesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesUncheckedCreateWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput = {
    store_id: string;
    game_id: string;
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsUncheckedCreateNestedManyWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesCreateOrConnectWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput = {
    where: Prisma.store_gamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedCreateWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput>;
};
export type store_gamesUpsertWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput = {
    update: Prisma.XOR<Prisma.store_gamesUpdateWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedUpdateWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput>;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedCreateWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput>;
    where?: Prisma.store_gamesWhereInput;
};
export type store_gamesUpdateToOneWithWhereWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput = {
    where?: Prisma.store_gamesWhereInput;
    data: Prisma.XOR<Prisma.store_gamesUpdateWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedUpdateWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput>;
};
export type store_gamesUpdateWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput = {
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUpdateManyWithoutStore_gamesNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutStore_gamesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesUncheckedUpdateWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput = {
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesUpsertWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput = {
    update: Prisma.XOR<Prisma.store_gamesUpdateWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedUpdateWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput>;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedCreateWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput>;
    where?: Prisma.store_gamesWhereInput;
};
export type store_gamesUpdateToOneWithWhereWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput = {
    where?: Prisma.store_gamesWhereInput;
    data: Prisma.XOR<Prisma.store_gamesUpdateWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedUpdateWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput>;
};
export type store_gamesUpdateWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput = {
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUpdateManyWithoutStore_gamesNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutStore_gamesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesUncheckedUpdateWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput = {
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesCreateWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsCreateNestedManyWithoutStore_gamesInput;
    games: Prisma.gamesCreateNestedOneWithoutStore_gamesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesUncheckedCreateWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    store_id: string;
    game_id: string;
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsUncheckedCreateNestedManyWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesCreateOrConnectWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    where: Prisma.store_gamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedCreateWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput>;
};
export type store_gamesCreateWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput = {
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsCreateNestedManyWithoutStore_gamesInput;
    games: Prisma.gamesCreateNestedOneWithoutStore_gamesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesUncheckedCreateWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput = {
    store_id: string;
    game_id: string;
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsUncheckedCreateNestedManyWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesCreateOrConnectWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput = {
    where: Prisma.store_gamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedCreateWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput>;
};
export type store_gamesUpsertWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    update: Prisma.XOR<Prisma.store_gamesUpdateWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedUpdateWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput>;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedCreateWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput>;
    where?: Prisma.store_gamesWhereInput;
};
export type store_gamesUpdateToOneWithWhereWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    where?: Prisma.store_gamesWhereInput;
    data: Prisma.XOR<Prisma.store_gamesUpdateWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedUpdateWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput>;
};
export type store_gamesUpdateWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUpdateManyWithoutStore_gamesNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutStore_gamesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesUncheckedUpdateWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesUpsertWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput = {
    update: Prisma.XOR<Prisma.store_gamesUpdateWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedUpdateWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput>;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedCreateWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput>;
    where?: Prisma.store_gamesWhereInput;
};
export type store_gamesUpdateToOneWithWhereWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput = {
    where?: Prisma.store_gamesWhereInput;
    data: Prisma.XOR<Prisma.store_gamesUpdateWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput, Prisma.store_gamesUncheckedUpdateWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput>;
};
export type store_gamesUpdateWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput = {
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUpdateManyWithoutStore_gamesNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutStore_gamesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesUncheckedUpdateWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput = {
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesCreateWithoutWishlist_offersInput = {
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsCreateNestedManyWithoutStore_gamesInput;
    games: Prisma.gamesCreateNestedOneWithoutStore_gamesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesUncheckedCreateWithoutWishlist_offersInput = {
    store_id: string;
    game_id: string;
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsUncheckedCreateNestedManyWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesCreateOrConnectWithoutWishlist_offersInput = {
    where: Prisma.store_gamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutWishlist_offersInput, Prisma.store_gamesUncheckedCreateWithoutWishlist_offersInput>;
};
export type store_gamesUpsertWithoutWishlist_offersInput = {
    update: Prisma.XOR<Prisma.store_gamesUpdateWithoutWishlist_offersInput, Prisma.store_gamesUncheckedUpdateWithoutWishlist_offersInput>;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutWishlist_offersInput, Prisma.store_gamesUncheckedCreateWithoutWishlist_offersInput>;
    where?: Prisma.store_gamesWhereInput;
};
export type store_gamesUpdateToOneWithWhereWithoutWishlist_offersInput = {
    where?: Prisma.store_gamesWhereInput;
    data: Prisma.XOR<Prisma.store_gamesUpdateWithoutWishlist_offersInput, Prisma.store_gamesUncheckedUpdateWithoutWishlist_offersInput>;
};
export type store_gamesUpdateWithoutWishlist_offersInput = {
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUpdateManyWithoutStore_gamesNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutStore_gamesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesUncheckedUpdateWithoutWishlist_offersInput = {
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesCreateWithoutWishlistsInput = {
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsCreateNestedManyWithoutStore_gamesInput;
    games: Prisma.gamesCreateNestedOneWithoutStore_gamesInput;
    stores: Prisma.storesCreateNestedOneWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesUncheckedCreateWithoutWishlistsInput = {
    store_id: string;
    game_id: string;
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStore_gamesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStore_gamesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
    listings?: Prisma.listingsUncheckedCreateNestedManyWithoutStore_gamesInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutStore_gamesInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStore_gamesInput;
};
export type store_gamesCreateOrConnectWithoutWishlistsInput = {
    where: Prisma.store_gamesWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutWishlistsInput, Prisma.store_gamesUncheckedCreateWithoutWishlistsInput>;
};
export type store_gamesUpsertWithoutWishlistsInput = {
    update: Prisma.XOR<Prisma.store_gamesUpdateWithoutWishlistsInput, Prisma.store_gamesUncheckedUpdateWithoutWishlistsInput>;
    create: Prisma.XOR<Prisma.store_gamesCreateWithoutWishlistsInput, Prisma.store_gamesUncheckedCreateWithoutWishlistsInput>;
    where?: Prisma.store_gamesWhereInput;
};
export type store_gamesUpdateToOneWithWhereWithoutWishlistsInput = {
    where?: Prisma.store_gamesWhereInput;
    data: Prisma.XOR<Prisma.store_gamesUpdateWithoutWishlistsInput, Prisma.store_gamesUncheckedUpdateWithoutWishlistsInput>;
};
export type store_gamesUpdateWithoutWishlistsInput = {
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUpdateManyWithoutStore_gamesNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutStore_gamesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesUncheckedUpdateWithoutWishlistsInput = {
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesCreateManyGamesInput = {
    store_id: string;
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type store_gamesUpdateWithoutGamesInput = {
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUpdateManyWithoutStore_gamesNestedInput;
    stores?: Prisma.storesUpdateOneRequiredWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesUncheckedUpdateWithoutGamesInput = {
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesUncheckedUpdateManyWithoutGamesInput = {
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type store_gamesCreateManyStoresInput = {
    game_id: string;
    trade_mediation_enabled?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type store_gamesUpdateWithoutStoresInput = {
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUpdateManyWithoutStore_gamesNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesUncheckedUpdateWithoutStoresInput = {
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    listings?: Prisma.listingsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutStore_gamesNestedInput;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    transactions_transactions_seller_store_id_game_idTostore_games?: Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStore_gamesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutStore_gamesNestedInput;
};
export type store_gamesUncheckedUpdateManyWithoutStoresInput = {
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type Store_gamesCountOutputType
 */
export type Store_gamesCountOutputType = {
    inventory_item_interests: number;
    inventory_items: number;
    listing_offers: number;
    listings: number;
    store_trade_handoffs: number;
    transaction_items_transaction_items_from_store_id_game_idTostore_games: number;
    transaction_items_transaction_items_to_store_id_game_idTostore_games: number;
    transactions_transactions_counterparty_store_id_game_idTostore_games: number;
    transactions_transactions_seller_store_id_game_idTostore_games: number;
    wishlist_offers: number;
    wishlists: number;
};
export type Store_gamesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_item_interests?: boolean | Store_gamesCountOutputTypeCountInventory_item_interestsArgs;
    inventory_items?: boolean | Store_gamesCountOutputTypeCountInventory_itemsArgs;
    listing_offers?: boolean | Store_gamesCountOutputTypeCountListing_offersArgs;
    listings?: boolean | Store_gamesCountOutputTypeCountListingsArgs;
    store_trade_handoffs?: boolean | Store_gamesCountOutputTypeCountStore_trade_handoffsArgs;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: boolean | Store_gamesCountOutputTypeCountTransaction_items_transaction_items_from_store_id_game_idTostore_gamesArgs;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: boolean | Store_gamesCountOutputTypeCountTransaction_items_transaction_items_to_store_id_game_idTostore_gamesArgs;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: boolean | Store_gamesCountOutputTypeCountTransactions_transactions_counterparty_store_id_game_idTostore_gamesArgs;
    transactions_transactions_seller_store_id_game_idTostore_games?: boolean | Store_gamesCountOutputTypeCountTransactions_transactions_seller_store_id_game_idTostore_gamesArgs;
    wishlist_offers?: boolean | Store_gamesCountOutputTypeCountWishlist_offersArgs;
    wishlists?: boolean | Store_gamesCountOutputTypeCountWishlistsArgs;
};
/**
 * Store_gamesCountOutputType without action
 */
export type Store_gamesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store_gamesCountOutputType
     */
    select?: Prisma.Store_gamesCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Store_gamesCountOutputType without action
 */
export type Store_gamesCountOutputTypeCountInventory_item_interestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventory_item_interestsWhereInput;
};
/**
 * Store_gamesCountOutputType without action
 */
export type Store_gamesCountOutputTypeCountInventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventory_itemsWhereInput;
};
/**
 * Store_gamesCountOutputType without action
 */
export type Store_gamesCountOutputTypeCountListing_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listing_offersWhereInput;
};
/**
 * Store_gamesCountOutputType without action
 */
export type Store_gamesCountOutputTypeCountListingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listingsWhereInput;
};
/**
 * Store_gamesCountOutputType without action
 */
export type Store_gamesCountOutputTypeCountStore_trade_handoffsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.store_trade_handoffsWhereInput;
};
/**
 * Store_gamesCountOutputType without action
 */
export type Store_gamesCountOutputTypeCountTransaction_items_transaction_items_from_store_id_game_idTostore_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transaction_itemsWhereInput;
};
/**
 * Store_gamesCountOutputType without action
 */
export type Store_gamesCountOutputTypeCountTransaction_items_transaction_items_to_store_id_game_idTostore_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transaction_itemsWhereInput;
};
/**
 * Store_gamesCountOutputType without action
 */
export type Store_gamesCountOutputTypeCountTransactions_transactions_counterparty_store_id_game_idTostore_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transactionsWhereInput;
};
/**
 * Store_gamesCountOutputType without action
 */
export type Store_gamesCountOutputTypeCountTransactions_transactions_seller_store_id_game_idTostore_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transactionsWhereInput;
};
/**
 * Store_gamesCountOutputType without action
 */
export type Store_gamesCountOutputTypeCountWishlist_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_offersWhereInput;
};
/**
 * Store_gamesCountOutputType without action
 */
export type Store_gamesCountOutputTypeCountWishlistsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlistsWhereInput;
};
export type store_gamesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    store_id?: boolean;
    game_id?: boolean;
    trade_mediation_enabled?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    inventory_item_interests?: boolean | Prisma.store_games$inventory_item_interestsArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.store_games$inventory_itemsArgs<ExtArgs>;
    listing_offers?: boolean | Prisma.store_games$listing_offersArgs<ExtArgs>;
    listings?: boolean | Prisma.store_games$listingsArgs<ExtArgs>;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
    store_trade_handoffs?: boolean | Prisma.store_games$store_trade_handoffsArgs<ExtArgs>;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: boolean | Prisma.store_games$transaction_items_transaction_items_from_store_id_game_idTostore_gamesArgs<ExtArgs>;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: boolean | Prisma.store_games$transaction_items_transaction_items_to_store_id_game_idTostore_gamesArgs<ExtArgs>;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: boolean | Prisma.store_games$transactions_transactions_counterparty_store_id_game_idTostore_gamesArgs<ExtArgs>;
    transactions_transactions_seller_store_id_game_idTostore_games?: boolean | Prisma.store_games$transactions_transactions_seller_store_id_game_idTostore_gamesArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.store_games$wishlist_offersArgs<ExtArgs>;
    wishlists?: boolean | Prisma.store_games$wishlistsArgs<ExtArgs>;
    _count?: boolean | Prisma.Store_gamesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["store_games"]>;
export type store_gamesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    store_id?: boolean;
    game_id?: boolean;
    trade_mediation_enabled?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["store_games"]>;
export type store_gamesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    store_id?: boolean;
    game_id?: boolean;
    trade_mediation_enabled?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["store_games"]>;
export type store_gamesSelectScalar = {
    store_id?: boolean;
    game_id?: boolean;
    trade_mediation_enabled?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type store_gamesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"store_id" | "game_id" | "trade_mediation_enabled" | "created_at" | "updated_at", ExtArgs["result"]["store_games"]>;
export type store_gamesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_item_interests?: boolean | Prisma.store_games$inventory_item_interestsArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.store_games$inventory_itemsArgs<ExtArgs>;
    listing_offers?: boolean | Prisma.store_games$listing_offersArgs<ExtArgs>;
    listings?: boolean | Prisma.store_games$listingsArgs<ExtArgs>;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
    store_trade_handoffs?: boolean | Prisma.store_games$store_trade_handoffsArgs<ExtArgs>;
    transaction_items_transaction_items_from_store_id_game_idTostore_games?: boolean | Prisma.store_games$transaction_items_transaction_items_from_store_id_game_idTostore_gamesArgs<ExtArgs>;
    transaction_items_transaction_items_to_store_id_game_idTostore_games?: boolean | Prisma.store_games$transaction_items_transaction_items_to_store_id_game_idTostore_gamesArgs<ExtArgs>;
    transactions_transactions_counterparty_store_id_game_idTostore_games?: boolean | Prisma.store_games$transactions_transactions_counterparty_store_id_game_idTostore_gamesArgs<ExtArgs>;
    transactions_transactions_seller_store_id_game_idTostore_games?: boolean | Prisma.store_games$transactions_transactions_seller_store_id_game_idTostore_gamesArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.store_games$wishlist_offersArgs<ExtArgs>;
    wishlists?: boolean | Prisma.store_games$wishlistsArgs<ExtArgs>;
    _count?: boolean | Prisma.Store_gamesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type store_gamesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
};
export type store_gamesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    stores?: boolean | Prisma.storesDefaultArgs<ExtArgs>;
};
export type $store_gamesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "store_games";
    objects: {
        inventory_item_interests: Prisma.$inventory_item_interestsPayload<ExtArgs>[];
        inventory_items: Prisma.$inventory_itemsPayload<ExtArgs>[];
        listing_offers: Prisma.$listing_offersPayload<ExtArgs>[];
        listings: Prisma.$listingsPayload<ExtArgs>[];
        games: Prisma.$gamesPayload<ExtArgs>;
        stores: Prisma.$storesPayload<ExtArgs>;
        store_trade_handoffs: Prisma.$store_trade_handoffsPayload<ExtArgs>[];
        transaction_items_transaction_items_from_store_id_game_idTostore_games: Prisma.$transaction_itemsPayload<ExtArgs>[];
        transaction_items_transaction_items_to_store_id_game_idTostore_games: Prisma.$transaction_itemsPayload<ExtArgs>[];
        transactions_transactions_counterparty_store_id_game_idTostore_games: Prisma.$transactionsPayload<ExtArgs>[];
        transactions_transactions_seller_store_id_game_idTostore_games: Prisma.$transactionsPayload<ExtArgs>[];
        wishlist_offers: Prisma.$wishlist_offersPayload<ExtArgs>[];
        wishlists: Prisma.$wishlistsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        store_id: string;
        game_id: string;
        trade_mediation_enabled: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["store_games"]>;
    composites: {};
};
export type store_gamesGetPayload<S extends boolean | null | undefined | store_gamesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$store_gamesPayload, S>;
export type store_gamesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<store_gamesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Store_gamesCountAggregateInputType | true;
};
export interface store_gamesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['store_games'];
        meta: {
            name: 'store_games';
        };
    };
    /**
     * Find zero or one Store_games that matches the filter.
     * @param {store_gamesFindUniqueArgs} args - Arguments to find a Store_games
     * @example
     * // Get one Store_games
     * const store_games = await prisma.store_games.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends store_gamesFindUniqueArgs>(args: Prisma.SelectSubset<T, store_gamesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__store_gamesClient<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Store_games that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {store_gamesFindUniqueOrThrowArgs} args - Arguments to find a Store_games
     * @example
     * // Get one Store_games
     * const store_games = await prisma.store_games.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends store_gamesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, store_gamesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__store_gamesClient<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Store_games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_gamesFindFirstArgs} args - Arguments to find a Store_games
     * @example
     * // Get one Store_games
     * const store_games = await prisma.store_games.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends store_gamesFindFirstArgs>(args?: Prisma.SelectSubset<T, store_gamesFindFirstArgs<ExtArgs>>): Prisma.Prisma__store_gamesClient<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Store_games that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_gamesFindFirstOrThrowArgs} args - Arguments to find a Store_games
     * @example
     * // Get one Store_games
     * const store_games = await prisma.store_games.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends store_gamesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, store_gamesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__store_gamesClient<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Store_games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_gamesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Store_games
     * const store_games = await prisma.store_games.findMany()
     *
     * // Get first 10 Store_games
     * const store_games = await prisma.store_games.findMany({ take: 10 })
     *
     * // Only select the `store_id`
     * const store_gamesWithStore_idOnly = await prisma.store_games.findMany({ select: { store_id: true } })
     *
     */
    findMany<T extends store_gamesFindManyArgs>(args?: Prisma.SelectSubset<T, store_gamesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Store_games.
     * @param {store_gamesCreateArgs} args - Arguments to create a Store_games.
     * @example
     * // Create one Store_games
     * const Store_games = await prisma.store_games.create({
     *   data: {
     *     // ... data to create a Store_games
     *   }
     * })
     *
     */
    create<T extends store_gamesCreateArgs>(args: Prisma.SelectSubset<T, store_gamesCreateArgs<ExtArgs>>): Prisma.Prisma__store_gamesClient<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Store_games.
     * @param {store_gamesCreateManyArgs} args - Arguments to create many Store_games.
     * @example
     * // Create many Store_games
     * const store_games = await prisma.store_games.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends store_gamesCreateManyArgs>(args?: Prisma.SelectSubset<T, store_gamesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Store_games and returns the data saved in the database.
     * @param {store_gamesCreateManyAndReturnArgs} args - Arguments to create many Store_games.
     * @example
     * // Create many Store_games
     * const store_games = await prisma.store_games.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Store_games and only return the `store_id`
     * const store_gamesWithStore_idOnly = await prisma.store_games.createManyAndReturn({
     *   select: { store_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends store_gamesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, store_gamesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Store_games.
     * @param {store_gamesDeleteArgs} args - Arguments to delete one Store_games.
     * @example
     * // Delete one Store_games
     * const Store_games = await prisma.store_games.delete({
     *   where: {
     *     // ... filter to delete one Store_games
     *   }
     * })
     *
     */
    delete<T extends store_gamesDeleteArgs>(args: Prisma.SelectSubset<T, store_gamesDeleteArgs<ExtArgs>>): Prisma.Prisma__store_gamesClient<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Store_games.
     * @param {store_gamesUpdateArgs} args - Arguments to update one Store_games.
     * @example
     * // Update one Store_games
     * const store_games = await prisma.store_games.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends store_gamesUpdateArgs>(args: Prisma.SelectSubset<T, store_gamesUpdateArgs<ExtArgs>>): Prisma.Prisma__store_gamesClient<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Store_games.
     * @param {store_gamesDeleteManyArgs} args - Arguments to filter Store_games to delete.
     * @example
     * // Delete a few Store_games
     * const { count } = await prisma.store_games.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends store_gamesDeleteManyArgs>(args?: Prisma.SelectSubset<T, store_gamesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Store_games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_gamesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Store_games
     * const store_games = await prisma.store_games.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends store_gamesUpdateManyArgs>(args: Prisma.SelectSubset<T, store_gamesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Store_games and returns the data updated in the database.
     * @param {store_gamesUpdateManyAndReturnArgs} args - Arguments to update many Store_games.
     * @example
     * // Update many Store_games
     * const store_games = await prisma.store_games.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Store_games and only return the `store_id`
     * const store_gamesWithStore_idOnly = await prisma.store_games.updateManyAndReturn({
     *   select: { store_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends store_gamesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, store_gamesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Store_games.
     * @param {store_gamesUpsertArgs} args - Arguments to update or create a Store_games.
     * @example
     * // Update or create a Store_games
     * const store_games = await prisma.store_games.upsert({
     *   create: {
     *     // ... data to create a Store_games
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store_games we want to update
     *   }
     * })
     */
    upsert<T extends store_gamesUpsertArgs>(args: Prisma.SelectSubset<T, store_gamesUpsertArgs<ExtArgs>>): Prisma.Prisma__store_gamesClient<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Store_games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_gamesCountArgs} args - Arguments to filter Store_games to count.
     * @example
     * // Count the number of Store_games
     * const count = await prisma.store_games.count({
     *   where: {
     *     // ... the filter for the Store_games we want to count
     *   }
     * })
    **/
    count<T extends store_gamesCountArgs>(args?: Prisma.Subset<T, store_gamesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Store_gamesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Store_games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Store_gamesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Store_gamesAggregateArgs>(args: Prisma.Subset<T, Store_gamesAggregateArgs>): Prisma.PrismaPromise<GetStore_gamesAggregateType<T>>;
    /**
     * Group by Store_games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_gamesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends store_gamesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: store_gamesGroupByArgs['orderBy'];
    } : {
        orderBy?: store_gamesGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, store_gamesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStore_gamesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the store_games model
     */
    readonly fields: store_gamesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for store_games.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__store_gamesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    inventory_item_interests<T extends Prisma.store_games$inventory_item_interestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_games$inventory_item_interestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_item_interestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    inventory_items<T extends Prisma.store_games$inventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_games$inventory_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    listing_offers<T extends Prisma.store_games$listing_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_games$listing_offersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    listings<T extends Prisma.store_games$listingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_games$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    games<T extends Prisma.gamesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.gamesDefaultArgs<ExtArgs>>): Prisma.Prisma__gamesClient<runtime.Types.Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    stores<T extends Prisma.storesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.storesDefaultArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    store_trade_handoffs<T extends Prisma.store_games$store_trade_handoffsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_games$store_trade_handoffsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$store_trade_handoffsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transaction_items_transaction_items_from_store_id_game_idTostore_games<T extends Prisma.store_games$transaction_items_transaction_items_from_store_id_game_idTostore_gamesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_games$transaction_items_transaction_items_from_store_id_game_idTostore_gamesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transaction_items_transaction_items_to_store_id_game_idTostore_games<T extends Prisma.store_games$transaction_items_transaction_items_to_store_id_game_idTostore_gamesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_games$transaction_items_transaction_items_to_store_id_game_idTostore_gamesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transactions_transactions_counterparty_store_id_game_idTostore_games<T extends Prisma.store_games$transactions_transactions_counterparty_store_id_game_idTostore_gamesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_games$transactions_transactions_counterparty_store_id_game_idTostore_gamesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transactions_transactions_seller_store_id_game_idTostore_games<T extends Prisma.store_games$transactions_transactions_seller_store_id_game_idTostore_gamesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_games$transactions_transactions_seller_store_id_game_idTostore_gamesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlist_offers<T extends Prisma.store_games$wishlist_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_games$wishlist_offersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlists<T extends Prisma.store_games$wishlistsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_games$wishlistsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the store_games model
 */
export interface store_gamesFieldRefs {
    readonly store_id: Prisma.FieldRef<"store_games", 'String'>;
    readonly game_id: Prisma.FieldRef<"store_games", 'String'>;
    readonly trade_mediation_enabled: Prisma.FieldRef<"store_games", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"store_games", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"store_games", 'DateTime'>;
}
/**
 * store_games findUnique
 */
export type store_gamesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_games
     */
    select?: Prisma.store_gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the store_games
     */
    omit?: Prisma.store_gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_gamesInclude<ExtArgs> | null;
    /**
     * Filter, which store_games to fetch.
     */
    where: Prisma.store_gamesWhereUniqueInput;
};
/**
 * store_games findUniqueOrThrow
 */
export type store_gamesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_games
     */
    select?: Prisma.store_gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the store_games
     */
    omit?: Prisma.store_gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_gamesInclude<ExtArgs> | null;
    /**
     * Filter, which store_games to fetch.
     */
    where: Prisma.store_gamesWhereUniqueInput;
};
/**
 * store_games findFirst
 */
export type store_gamesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_games
     */
    select?: Prisma.store_gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the store_games
     */
    omit?: Prisma.store_gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_gamesInclude<ExtArgs> | null;
    /**
     * Filter, which store_games to fetch.
     */
    where?: Prisma.store_gamesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of store_games to fetch.
     */
    orderBy?: Prisma.store_gamesOrderByWithRelationInput | Prisma.store_gamesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for store_games.
     */
    cursor?: Prisma.store_gamesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` store_games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` store_games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of store_games.
     */
    distinct?: Prisma.Store_gamesScalarFieldEnum | Prisma.Store_gamesScalarFieldEnum[];
};
/**
 * store_games findFirstOrThrow
 */
export type store_gamesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_games
     */
    select?: Prisma.store_gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the store_games
     */
    omit?: Prisma.store_gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_gamesInclude<ExtArgs> | null;
    /**
     * Filter, which store_games to fetch.
     */
    where?: Prisma.store_gamesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of store_games to fetch.
     */
    orderBy?: Prisma.store_gamesOrderByWithRelationInput | Prisma.store_gamesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for store_games.
     */
    cursor?: Prisma.store_gamesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` store_games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` store_games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of store_games.
     */
    distinct?: Prisma.Store_gamesScalarFieldEnum | Prisma.Store_gamesScalarFieldEnum[];
};
/**
 * store_games findMany
 */
export type store_gamesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_games
     */
    select?: Prisma.store_gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the store_games
     */
    omit?: Prisma.store_gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_gamesInclude<ExtArgs> | null;
    /**
     * Filter, which store_games to fetch.
     */
    where?: Prisma.store_gamesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of store_games to fetch.
     */
    orderBy?: Prisma.store_gamesOrderByWithRelationInput | Prisma.store_gamesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing store_games.
     */
    cursor?: Prisma.store_gamesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` store_games from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` store_games.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of store_games.
     */
    distinct?: Prisma.Store_gamesScalarFieldEnum | Prisma.Store_gamesScalarFieldEnum[];
};
/**
 * store_games create
 */
export type store_gamesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_games
     */
    select?: Prisma.store_gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the store_games
     */
    omit?: Prisma.store_gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_gamesInclude<ExtArgs> | null;
    /**
     * The data needed to create a store_games.
     */
    data: Prisma.XOR<Prisma.store_gamesCreateInput, Prisma.store_gamesUncheckedCreateInput>;
};
/**
 * store_games createMany
 */
export type store_gamesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many store_games.
     */
    data: Prisma.store_gamesCreateManyInput | Prisma.store_gamesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * store_games createManyAndReturn
 */
export type store_gamesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_games
     */
    select?: Prisma.store_gamesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the store_games
     */
    omit?: Prisma.store_gamesOmit<ExtArgs> | null;
    /**
     * The data used to create many store_games.
     */
    data: Prisma.store_gamesCreateManyInput | Prisma.store_gamesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_gamesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * store_games update
 */
export type store_gamesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_games
     */
    select?: Prisma.store_gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the store_games
     */
    omit?: Prisma.store_gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_gamesInclude<ExtArgs> | null;
    /**
     * The data needed to update a store_games.
     */
    data: Prisma.XOR<Prisma.store_gamesUpdateInput, Prisma.store_gamesUncheckedUpdateInput>;
    /**
     * Choose, which store_games to update.
     */
    where: Prisma.store_gamesWhereUniqueInput;
};
/**
 * store_games updateMany
 */
export type store_gamesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update store_games.
     */
    data: Prisma.XOR<Prisma.store_gamesUpdateManyMutationInput, Prisma.store_gamesUncheckedUpdateManyInput>;
    /**
     * Filter which store_games to update
     */
    where?: Prisma.store_gamesWhereInput;
    /**
     * Limit how many store_games to update.
     */
    limit?: number;
};
/**
 * store_games updateManyAndReturn
 */
export type store_gamesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_games
     */
    select?: Prisma.store_gamesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the store_games
     */
    omit?: Prisma.store_gamesOmit<ExtArgs> | null;
    /**
     * The data used to update store_games.
     */
    data: Prisma.XOR<Prisma.store_gamesUpdateManyMutationInput, Prisma.store_gamesUncheckedUpdateManyInput>;
    /**
     * Filter which store_games to update
     */
    where?: Prisma.store_gamesWhereInput;
    /**
     * Limit how many store_games to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_gamesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * store_games upsert
 */
export type store_gamesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_games
     */
    select?: Prisma.store_gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the store_games
     */
    omit?: Prisma.store_gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_gamesInclude<ExtArgs> | null;
    /**
     * The filter to search for the store_games to update in case it exists.
     */
    where: Prisma.store_gamesWhereUniqueInput;
    /**
     * In case the store_games found by the `where` argument doesn't exist, create a new store_games with this data.
     */
    create: Prisma.XOR<Prisma.store_gamesCreateInput, Prisma.store_gamesUncheckedCreateInput>;
    /**
     * In case the store_games was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.store_gamesUpdateInput, Prisma.store_gamesUncheckedUpdateInput>;
};
/**
 * store_games delete
 */
export type store_gamesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_games
     */
    select?: Prisma.store_gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the store_games
     */
    omit?: Prisma.store_gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_gamesInclude<ExtArgs> | null;
    /**
     * Filter which store_games to delete.
     */
    where: Prisma.store_gamesWhereUniqueInput;
};
/**
 * store_games deleteMany
 */
export type store_gamesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which store_games to delete
     */
    where?: Prisma.store_gamesWhereInput;
    /**
     * Limit how many store_games to delete.
     */
    limit?: number;
};
/**
 * store_games.inventory_item_interests
 */
export type store_games$inventory_item_interestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_item_interests
     */
    select?: Prisma.inventory_item_interestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory_item_interests
     */
    omit?: Prisma.inventory_item_interestsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.inventory_item_interestsInclude<ExtArgs> | null;
    where?: Prisma.inventory_item_interestsWhereInput;
    orderBy?: Prisma.inventory_item_interestsOrderByWithRelationInput | Prisma.inventory_item_interestsOrderByWithRelationInput[];
    cursor?: Prisma.inventory_item_interestsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Inventory_item_interestsScalarFieldEnum | Prisma.Inventory_item_interestsScalarFieldEnum[];
};
/**
 * store_games.inventory_items
 */
export type store_games$inventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_items
     */
    select?: Prisma.inventory_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory_items
     */
    omit?: Prisma.inventory_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.inventory_itemsInclude<ExtArgs> | null;
    where?: Prisma.inventory_itemsWhereInput;
    orderBy?: Prisma.inventory_itemsOrderByWithRelationInput | Prisma.inventory_itemsOrderByWithRelationInput[];
    cursor?: Prisma.inventory_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Inventory_itemsScalarFieldEnum | Prisma.Inventory_itemsScalarFieldEnum[];
};
/**
 * store_games.listing_offers
 */
export type store_games$listing_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_offers
     */
    select?: Prisma.listing_offersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the listing_offers
     */
    omit?: Prisma.listing_offersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.listing_offersInclude<ExtArgs> | null;
    where?: Prisma.listing_offersWhereInput;
    orderBy?: Prisma.listing_offersOrderByWithRelationInput | Prisma.listing_offersOrderByWithRelationInput[];
    cursor?: Prisma.listing_offersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Listing_offersScalarFieldEnum | Prisma.Listing_offersScalarFieldEnum[];
};
/**
 * store_games.listings
 */
export type store_games$listingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listings
     */
    select?: Prisma.listingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the listings
     */
    omit?: Prisma.listingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.listingsInclude<ExtArgs> | null;
    where?: Prisma.listingsWhereInput;
    orderBy?: Prisma.listingsOrderByWithRelationInput | Prisma.listingsOrderByWithRelationInput[];
    cursor?: Prisma.listingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ListingsScalarFieldEnum | Prisma.ListingsScalarFieldEnum[];
};
/**
 * store_games.store_trade_handoffs
 */
export type store_games$store_trade_handoffsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_trade_handoffs
     */
    select?: Prisma.store_trade_handoffsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the store_trade_handoffs
     */
    omit?: Prisma.store_trade_handoffsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_trade_handoffsInclude<ExtArgs> | null;
    where?: Prisma.store_trade_handoffsWhereInput;
    orderBy?: Prisma.store_trade_handoffsOrderByWithRelationInput | Prisma.store_trade_handoffsOrderByWithRelationInput[];
    cursor?: Prisma.store_trade_handoffsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Store_trade_handoffsScalarFieldEnum | Prisma.Store_trade_handoffsScalarFieldEnum[];
};
/**
 * store_games.transaction_items_transaction_items_from_store_id_game_idTostore_games
 */
export type store_games$transaction_items_transaction_items_from_store_id_game_idTostore_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_items
     */
    select?: Prisma.transaction_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction_items
     */
    omit?: Prisma.transaction_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transaction_itemsInclude<ExtArgs> | null;
    where?: Prisma.transaction_itemsWhereInput;
    orderBy?: Prisma.transaction_itemsOrderByWithRelationInput | Prisma.transaction_itemsOrderByWithRelationInput[];
    cursor?: Prisma.transaction_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Transaction_itemsScalarFieldEnum | Prisma.Transaction_itemsScalarFieldEnum[];
};
/**
 * store_games.transaction_items_transaction_items_to_store_id_game_idTostore_games
 */
export type store_games$transaction_items_transaction_items_to_store_id_game_idTostore_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_items
     */
    select?: Prisma.transaction_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction_items
     */
    omit?: Prisma.transaction_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transaction_itemsInclude<ExtArgs> | null;
    where?: Prisma.transaction_itemsWhereInput;
    orderBy?: Prisma.transaction_itemsOrderByWithRelationInput | Prisma.transaction_itemsOrderByWithRelationInput[];
    cursor?: Prisma.transaction_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Transaction_itemsScalarFieldEnum | Prisma.Transaction_itemsScalarFieldEnum[];
};
/**
 * store_games.transactions_transactions_counterparty_store_id_game_idTostore_games
 */
export type store_games$transactions_transactions_counterparty_store_id_game_idTostore_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: Prisma.transactionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: Prisma.transactionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transactionsInclude<ExtArgs> | null;
    where?: Prisma.transactionsWhereInput;
    orderBy?: Prisma.transactionsOrderByWithRelationInput | Prisma.transactionsOrderByWithRelationInput[];
    cursor?: Prisma.transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionsScalarFieldEnum | Prisma.TransactionsScalarFieldEnum[];
};
/**
 * store_games.transactions_transactions_seller_store_id_game_idTostore_games
 */
export type store_games$transactions_transactions_seller_store_id_game_idTostore_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: Prisma.transactionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: Prisma.transactionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transactionsInclude<ExtArgs> | null;
    where?: Prisma.transactionsWhereInput;
    orderBy?: Prisma.transactionsOrderByWithRelationInput | Prisma.transactionsOrderByWithRelationInput[];
    cursor?: Prisma.transactionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionsScalarFieldEnum | Prisma.TransactionsScalarFieldEnum[];
};
/**
 * store_games.wishlist_offers
 */
export type store_games$wishlist_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offers
     */
    select?: Prisma.wishlist_offersSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offers
     */
    omit?: Prisma.wishlist_offersOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offersInclude<ExtArgs> | null;
    where?: Prisma.wishlist_offersWhereInput;
    orderBy?: Prisma.wishlist_offersOrderByWithRelationInput | Prisma.wishlist_offersOrderByWithRelationInput[];
    cursor?: Prisma.wishlist_offersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Wishlist_offersScalarFieldEnum | Prisma.Wishlist_offersScalarFieldEnum[];
};
/**
 * store_games.wishlists
 */
export type store_games$wishlistsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlists
     */
    select?: Prisma.wishlistsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlists
     */
    omit?: Prisma.wishlistsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlistsInclude<ExtArgs> | null;
    where?: Prisma.wishlistsWhereInput;
    orderBy?: Prisma.wishlistsOrderByWithRelationInput | Prisma.wishlistsOrderByWithRelationInput[];
    cursor?: Prisma.wishlistsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WishlistsScalarFieldEnum | Prisma.WishlistsScalarFieldEnum[];
};
/**
 * store_games without action
 */
export type store_gamesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_games
     */
    select?: Prisma.store_gamesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the store_games
     */
    omit?: Prisma.store_gamesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_gamesInclude<ExtArgs> | null;
};
