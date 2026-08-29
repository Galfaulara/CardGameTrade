import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model transaction_items
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type transaction_itemsModel = runtime.Types.Result.DefaultSelection<Prisma.$transaction_itemsPayload>;
export type AggregateTransaction_items = {
    _count: Transaction_itemsCountAggregateOutputType | null;
    _avg: Transaction_itemsAvgAggregateOutputType | null;
    _sum: Transaction_itemsSumAggregateOutputType | null;
    _min: Transaction_itemsMinAggregateOutputType | null;
    _max: Transaction_itemsMaxAggregateOutputType | null;
};
export type Transaction_itemsAvgAggregateOutputType = {
    quantity: number | null;
    agreed_unit_value: runtime.Decimal | null;
};
export type Transaction_itemsSumAggregateOutputType = {
    quantity: number | null;
    agreed_unit_value: runtime.Decimal | null;
};
export type Transaction_itemsMinAggregateOutputType = {
    id: string | null;
    transaction_id: string | null;
    inventory_item_id: string | null;
    item_role: string | null;
    quantity: number | null;
    from_user_id: string | null;
    from_store_id: string | null;
    to_user_id: string | null;
    to_store_id: string | null;
    market_snapshot_id: string | null;
    agreed_unit_value: runtime.Decimal | null;
    currency_code: string | null;
    created_at: Date | null;
    result_inventory_item_id: string | null;
    game_id: string | null;
};
export type Transaction_itemsMaxAggregateOutputType = {
    id: string | null;
    transaction_id: string | null;
    inventory_item_id: string | null;
    item_role: string | null;
    quantity: number | null;
    from_user_id: string | null;
    from_store_id: string | null;
    to_user_id: string | null;
    to_store_id: string | null;
    market_snapshot_id: string | null;
    agreed_unit_value: runtime.Decimal | null;
    currency_code: string | null;
    created_at: Date | null;
    result_inventory_item_id: string | null;
    game_id: string | null;
};
export type Transaction_itemsCountAggregateOutputType = {
    id: number;
    transaction_id: number;
    inventory_item_id: number;
    item_role: number;
    quantity: number;
    from_user_id: number;
    from_store_id: number;
    to_user_id: number;
    to_store_id: number;
    market_snapshot_id: number;
    agreed_unit_value: number;
    currency_code: number;
    created_at: number;
    result_inventory_item_id: number;
    game_id: number;
    _all: number;
};
export type Transaction_itemsAvgAggregateInputType = {
    quantity?: true;
    agreed_unit_value?: true;
};
export type Transaction_itemsSumAggregateInputType = {
    quantity?: true;
    agreed_unit_value?: true;
};
export type Transaction_itemsMinAggregateInputType = {
    id?: true;
    transaction_id?: true;
    inventory_item_id?: true;
    item_role?: true;
    quantity?: true;
    from_user_id?: true;
    from_store_id?: true;
    to_user_id?: true;
    to_store_id?: true;
    market_snapshot_id?: true;
    agreed_unit_value?: true;
    currency_code?: true;
    created_at?: true;
    result_inventory_item_id?: true;
    game_id?: true;
};
export type Transaction_itemsMaxAggregateInputType = {
    id?: true;
    transaction_id?: true;
    inventory_item_id?: true;
    item_role?: true;
    quantity?: true;
    from_user_id?: true;
    from_store_id?: true;
    to_user_id?: true;
    to_store_id?: true;
    market_snapshot_id?: true;
    agreed_unit_value?: true;
    currency_code?: true;
    created_at?: true;
    result_inventory_item_id?: true;
    game_id?: true;
};
export type Transaction_itemsCountAggregateInputType = {
    id?: true;
    transaction_id?: true;
    inventory_item_id?: true;
    item_role?: true;
    quantity?: true;
    from_user_id?: true;
    from_store_id?: true;
    to_user_id?: true;
    to_store_id?: true;
    market_snapshot_id?: true;
    agreed_unit_value?: true;
    currency_code?: true;
    created_at?: true;
    result_inventory_item_id?: true;
    game_id?: true;
    _all?: true;
};
export type Transaction_itemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_items to aggregate.
     */
    where?: Prisma.transaction_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transaction_items to fetch.
     */
    orderBy?: Prisma.transaction_itemsOrderByWithRelationInput | Prisma.transaction_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.transaction_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transaction_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transaction_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned transaction_items
    **/
    _count?: true | Transaction_itemsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Transaction_itemsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Transaction_itemsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Transaction_itemsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Transaction_itemsMaxAggregateInputType;
};
export type GetTransaction_itemsAggregateType<T extends Transaction_itemsAggregateArgs> = {
    [P in keyof T & keyof AggregateTransaction_items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTransaction_items[P]> : Prisma.GetScalarType<T[P], AggregateTransaction_items[P]>;
};
export type transaction_itemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transaction_itemsWhereInput;
    orderBy?: Prisma.transaction_itemsOrderByWithAggregationInput | Prisma.transaction_itemsOrderByWithAggregationInput[];
    by: Prisma.Transaction_itemsScalarFieldEnum[] | Prisma.Transaction_itemsScalarFieldEnum;
    having?: Prisma.transaction_itemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Transaction_itemsCountAggregateInputType | true;
    _avg?: Transaction_itemsAvgAggregateInputType;
    _sum?: Transaction_itemsSumAggregateInputType;
    _min?: Transaction_itemsMinAggregateInputType;
    _max?: Transaction_itemsMaxAggregateInputType;
};
export type Transaction_itemsGroupByOutputType = {
    id: string;
    transaction_id: string;
    inventory_item_id: string;
    item_role: string;
    quantity: number;
    from_user_id: string | null;
    from_store_id: string | null;
    to_user_id: string | null;
    to_store_id: string | null;
    market_snapshot_id: string | null;
    agreed_unit_value: runtime.Decimal | null;
    currency_code: string | null;
    created_at: Date;
    result_inventory_item_id: string | null;
    game_id: string;
    _count: Transaction_itemsCountAggregateOutputType | null;
    _avg: Transaction_itemsAvgAggregateOutputType | null;
    _sum: Transaction_itemsSumAggregateOutputType | null;
    _min: Transaction_itemsMinAggregateOutputType | null;
    _max: Transaction_itemsMaxAggregateOutputType | null;
};
export type GetTransaction_itemsGroupByPayload<T extends transaction_itemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Transaction_itemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Transaction_itemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Transaction_itemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Transaction_itemsGroupByOutputType[P]>;
}>>;
export type transaction_itemsWhereInput = {
    AND?: Prisma.transaction_itemsWhereInput | Prisma.transaction_itemsWhereInput[];
    OR?: Prisma.transaction_itemsWhereInput[];
    NOT?: Prisma.transaction_itemsWhereInput | Prisma.transaction_itemsWhereInput[];
    id?: Prisma.UuidFilter<"transaction_items"> | string;
    transaction_id?: Prisma.UuidFilter<"transaction_items"> | string;
    inventory_item_id?: Prisma.UuidFilter<"transaction_items"> | string;
    item_role?: Prisma.StringFilter<"transaction_items"> | string;
    quantity?: Prisma.IntFilter<"transaction_items"> | number;
    from_user_id?: Prisma.UuidNullableFilter<"transaction_items"> | string | null;
    from_store_id?: Prisma.UuidNullableFilter<"transaction_items"> | string | null;
    to_user_id?: Prisma.UuidNullableFilter<"transaction_items"> | string | null;
    to_store_id?: Prisma.UuidNullableFilter<"transaction_items"> | string | null;
    market_snapshot_id?: Prisma.UuidNullableFilter<"transaction_items"> | string | null;
    agreed_unit_value?: Prisma.DecimalNullableFilter<"transaction_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.StringNullableFilter<"transaction_items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"transaction_items"> | Date | string;
    result_inventory_item_id?: Prisma.UuidNullableFilter<"transaction_items"> | string | null;
    game_id?: Prisma.UuidFilter<"transaction_items"> | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.XOR<Prisma.Transaction_item_custodyNullableScalarRelationFilter, Prisma.transaction_item_custodyWhereInput> | null;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.XOR<Prisma.Transaction_item_custodyNullableScalarRelationFilter, Prisma.transaction_item_custodyWhereInput> | null;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.XOR<Prisma.User_profilesNullableScalarRelationFilter, Prisma.user_profilesWhereInput> | null;
    inventory_items?: Prisma.XOR<Prisma.Inventory_itemsScalarRelationFilter, Prisma.inventory_itemsWhereInput>;
    price_snapshots?: Prisma.XOR<Prisma.Price_snapshotsNullableScalarRelationFilter, Prisma.price_snapshotsWhereInput> | null;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsNullableScalarRelationFilter, Prisma.inventory_itemsWhereInput> | null;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.XOR<Prisma.User_profilesNullableScalarRelationFilter, Prisma.user_profilesWhereInput> | null;
    transactions?: Prisma.XOR<Prisma.TransactionsScalarRelationFilter, Prisma.transactionsWhereInput>;
};
export type transaction_itemsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    item_role?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    from_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    from_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    to_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    to_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    market_snapshot_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    agreed_unit_value?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    result_inventory_item_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyOrderByWithRelationInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyOrderByWithRelationInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesOrderByWithRelationInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesOrderByWithRelationInput;
    inventory_items?: Prisma.inventory_itemsOrderByWithRelationInput;
    price_snapshots?: Prisma.price_snapshotsOrderByWithRelationInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsOrderByWithRelationInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesOrderByWithRelationInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesOrderByWithRelationInput;
    transactions?: Prisma.transactionsOrderByWithRelationInput;
};
export type transaction_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    result_inventory_item_id?: string;
    id_transaction_id?: Prisma.transaction_itemsIdTransaction_idCompoundUniqueInput;
    AND?: Prisma.transaction_itemsWhereInput | Prisma.transaction_itemsWhereInput[];
    OR?: Prisma.transaction_itemsWhereInput[];
    NOT?: Prisma.transaction_itemsWhereInput | Prisma.transaction_itemsWhereInput[];
    transaction_id?: Prisma.UuidFilter<"transaction_items"> | string;
    inventory_item_id?: Prisma.UuidFilter<"transaction_items"> | string;
    item_role?: Prisma.StringFilter<"transaction_items"> | string;
    quantity?: Prisma.IntFilter<"transaction_items"> | number;
    from_user_id?: Prisma.UuidNullableFilter<"transaction_items"> | string | null;
    from_store_id?: Prisma.UuidNullableFilter<"transaction_items"> | string | null;
    to_user_id?: Prisma.UuidNullableFilter<"transaction_items"> | string | null;
    to_store_id?: Prisma.UuidNullableFilter<"transaction_items"> | string | null;
    market_snapshot_id?: Prisma.UuidNullableFilter<"transaction_items"> | string | null;
    agreed_unit_value?: Prisma.DecimalNullableFilter<"transaction_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.StringNullableFilter<"transaction_items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"transaction_items"> | Date | string;
    game_id?: Prisma.UuidFilter<"transaction_items"> | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.XOR<Prisma.Transaction_item_custodyNullableScalarRelationFilter, Prisma.transaction_item_custodyWhereInput> | null;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.XOR<Prisma.Transaction_item_custodyNullableScalarRelationFilter, Prisma.transaction_item_custodyWhereInput> | null;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.XOR<Prisma.User_profilesNullableScalarRelationFilter, Prisma.user_profilesWhereInput> | null;
    inventory_items?: Prisma.XOR<Prisma.Inventory_itemsScalarRelationFilter, Prisma.inventory_itemsWhereInput>;
    price_snapshots?: Prisma.XOR<Prisma.Price_snapshotsNullableScalarRelationFilter, Prisma.price_snapshotsWhereInput> | null;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsNullableScalarRelationFilter, Prisma.inventory_itemsWhereInput> | null;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.XOR<Prisma.User_profilesNullableScalarRelationFilter, Prisma.user_profilesWhereInput> | null;
    transactions?: Prisma.XOR<Prisma.TransactionsScalarRelationFilter, Prisma.transactionsWhereInput>;
}, "id" | "result_inventory_item_id" | "id_transaction_id">;
export type transaction_itemsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    item_role?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    from_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    from_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    to_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    to_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    market_snapshot_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    agreed_unit_value?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    result_inventory_item_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    _count?: Prisma.transaction_itemsCountOrderByAggregateInput;
    _avg?: Prisma.transaction_itemsAvgOrderByAggregateInput;
    _max?: Prisma.transaction_itemsMaxOrderByAggregateInput;
    _min?: Prisma.transaction_itemsMinOrderByAggregateInput;
    _sum?: Prisma.transaction_itemsSumOrderByAggregateInput;
};
export type transaction_itemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.transaction_itemsScalarWhereWithAggregatesInput | Prisma.transaction_itemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.transaction_itemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.transaction_itemsScalarWhereWithAggregatesInput | Prisma.transaction_itemsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"transaction_items"> | string;
    transaction_id?: Prisma.UuidWithAggregatesFilter<"transaction_items"> | string;
    inventory_item_id?: Prisma.UuidWithAggregatesFilter<"transaction_items"> | string;
    item_role?: Prisma.StringWithAggregatesFilter<"transaction_items"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"transaction_items"> | number;
    from_user_id?: Prisma.UuidNullableWithAggregatesFilter<"transaction_items"> | string | null;
    from_store_id?: Prisma.UuidNullableWithAggregatesFilter<"transaction_items"> | string | null;
    to_user_id?: Prisma.UuidNullableWithAggregatesFilter<"transaction_items"> | string | null;
    to_store_id?: Prisma.UuidNullableWithAggregatesFilter<"transaction_items"> | string | null;
    market_snapshot_id?: Prisma.UuidNullableWithAggregatesFilter<"transaction_items"> | string | null;
    agreed_unit_value?: Prisma.DecimalNullableWithAggregatesFilter<"transaction_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.StringNullableWithAggregatesFilter<"transaction_items"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"transaction_items"> | Date | string;
    result_inventory_item_id?: Prisma.UuidNullableWithAggregatesFilter<"transaction_items"> | string | null;
    game_id?: Prisma.UuidWithAggregatesFilter<"transaction_items"> | string;
};
export type transaction_itemsCreateInput = {
    id?: string;
    item_role: string;
    quantity?: number;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput;
    inventory_items: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_itemsInput;
    price_snapshots?: Prisma.price_snapshotsCreateNestedOneWithoutTransaction_itemsInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput;
    transactions: Prisma.transactionsCreateNestedOneWithoutTransaction_itemsInput;
};
export type transaction_itemsUncheckedCreateInput = {
    id?: string;
    transaction_id: string;
    inventory_item_id: string;
    item_role: string;
    quantity?: number;
    from_user_id?: string | null;
    from_store_id?: string | null;
    to_user_id?: string | null;
    to_store_id?: string | null;
    market_snapshot_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    result_inventory_item_id?: string | null;
    game_id: string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
};
export type transaction_itemsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
    price_snapshots?: Prisma.price_snapshotsUpdateOneWithoutTransaction_itemsNestedInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions?: Prisma.transactionsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
};
export type transaction_itemsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    from_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    market_snapshot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    result_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
};
export type transaction_itemsCreateManyInput = {
    id?: string;
    transaction_id: string;
    inventory_item_id: string;
    item_role: string;
    quantity?: number;
    from_user_id?: string | null;
    from_store_id?: string | null;
    to_user_id?: string | null;
    to_store_id?: string | null;
    market_snapshot_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    result_inventory_item_id?: string | null;
    game_id: string;
};
export type transaction_itemsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transaction_itemsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    from_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    market_snapshot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    result_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Transaction_itemsListRelationFilter = {
    every?: Prisma.transaction_itemsWhereInput;
    some?: Prisma.transaction_itemsWhereInput;
    none?: Prisma.transaction_itemsWhereInput;
};
export type transaction_itemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Transaction_itemsScalarRelationFilter = {
    is?: Prisma.transaction_itemsWhereInput;
    isNot?: Prisma.transaction_itemsWhereInput;
};
export type transaction_itemsIdTransaction_idCompoundUniqueInput = {
    id: string;
    transaction_id: string;
};
export type transaction_itemsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    item_role?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    from_user_id?: Prisma.SortOrder;
    from_store_id?: Prisma.SortOrder;
    to_user_id?: Prisma.SortOrder;
    to_store_id?: Prisma.SortOrder;
    market_snapshot_id?: Prisma.SortOrder;
    agreed_unit_value?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    result_inventory_item_id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type transaction_itemsAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    agreed_unit_value?: Prisma.SortOrder;
};
export type transaction_itemsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    item_role?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    from_user_id?: Prisma.SortOrder;
    from_store_id?: Prisma.SortOrder;
    to_user_id?: Prisma.SortOrder;
    to_store_id?: Prisma.SortOrder;
    market_snapshot_id?: Prisma.SortOrder;
    agreed_unit_value?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    result_inventory_item_id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type transaction_itemsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    item_role?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    from_user_id?: Prisma.SortOrder;
    from_store_id?: Prisma.SortOrder;
    to_user_id?: Prisma.SortOrder;
    to_store_id?: Prisma.SortOrder;
    market_snapshot_id?: Prisma.SortOrder;
    agreed_unit_value?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    result_inventory_item_id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type transaction_itemsSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    agreed_unit_value?: Prisma.SortOrder;
};
export type transaction_itemsCreateNestedManyWithoutInventory_itemsInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutInventory_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutInventory_itemsInput> | Prisma.transaction_itemsCreateWithoutInventory_itemsInput[] | Prisma.transaction_itemsUncheckedCreateWithoutInventory_itemsInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutInventory_itemsInput | Prisma.transaction_itemsCreateOrConnectWithoutInventory_itemsInput[];
    createMany?: Prisma.transaction_itemsCreateManyInventory_itemsInputEnvelope;
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
};
export type transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput> | Prisma.transaction_itemsCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput[] | Prisma.transaction_itemsUncheckedCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput | Prisma.transaction_itemsCreateOrConnectWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput[];
    createMany?: Prisma.transaction_itemsCreateManyInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInputEnvelope;
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
};
export type transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutInventory_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutInventory_itemsInput> | Prisma.transaction_itemsCreateWithoutInventory_itemsInput[] | Prisma.transaction_itemsUncheckedCreateWithoutInventory_itemsInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutInventory_itemsInput | Prisma.transaction_itemsCreateOrConnectWithoutInventory_itemsInput[];
    createMany?: Prisma.transaction_itemsCreateManyInventory_itemsInputEnvelope;
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
};
export type transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput> | Prisma.transaction_itemsCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput[] | Prisma.transaction_itemsUncheckedCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput | Prisma.transaction_itemsCreateOrConnectWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput[];
    createMany?: Prisma.transaction_itemsCreateManyInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInputEnvelope;
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
};
export type transaction_itemsUpdateManyWithoutInventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutInventory_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutInventory_itemsInput> | Prisma.transaction_itemsCreateWithoutInventory_itemsInput[] | Prisma.transaction_itemsUncheckedCreateWithoutInventory_itemsInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutInventory_itemsInput | Prisma.transaction_itemsCreateOrConnectWithoutInventory_itemsInput[];
    upsert?: Prisma.transaction_itemsUpsertWithWhereUniqueWithoutInventory_itemsInput | Prisma.transaction_itemsUpsertWithWhereUniqueWithoutInventory_itemsInput[];
    createMany?: Prisma.transaction_itemsCreateManyInventory_itemsInputEnvelope;
    set?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    disconnect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    delete?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    update?: Prisma.transaction_itemsUpdateWithWhereUniqueWithoutInventory_itemsInput | Prisma.transaction_itemsUpdateWithWhereUniqueWithoutInventory_itemsInput[];
    updateMany?: Prisma.transaction_itemsUpdateManyWithWhereWithoutInventory_itemsInput | Prisma.transaction_itemsUpdateManyWithWhereWithoutInventory_itemsInput[];
    deleteMany?: Prisma.transaction_itemsScalarWhereInput | Prisma.transaction_itemsScalarWhereInput[];
};
export type transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput> | Prisma.transaction_itemsCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput[] | Prisma.transaction_itemsUncheckedCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput | Prisma.transaction_itemsCreateOrConnectWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput[];
    upsert?: Prisma.transaction_itemsUpsertWithWhereUniqueWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput | Prisma.transaction_itemsUpsertWithWhereUniqueWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput[];
    createMany?: Prisma.transaction_itemsCreateManyInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInputEnvelope;
    set?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    disconnect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    delete?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    update?: Prisma.transaction_itemsUpdateWithWhereUniqueWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput | Prisma.transaction_itemsUpdateWithWhereUniqueWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput[];
    updateMany?: Prisma.transaction_itemsUpdateManyWithWhereWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput | Prisma.transaction_itemsUpdateManyWithWhereWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput[];
    deleteMany?: Prisma.transaction_itemsScalarWhereInput | Prisma.transaction_itemsScalarWhereInput[];
};
export type transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutInventory_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutInventory_itemsInput> | Prisma.transaction_itemsCreateWithoutInventory_itemsInput[] | Prisma.transaction_itemsUncheckedCreateWithoutInventory_itemsInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutInventory_itemsInput | Prisma.transaction_itemsCreateOrConnectWithoutInventory_itemsInput[];
    upsert?: Prisma.transaction_itemsUpsertWithWhereUniqueWithoutInventory_itemsInput | Prisma.transaction_itemsUpsertWithWhereUniqueWithoutInventory_itemsInput[];
    createMany?: Prisma.transaction_itemsCreateManyInventory_itemsInputEnvelope;
    set?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    disconnect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    delete?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    update?: Prisma.transaction_itemsUpdateWithWhereUniqueWithoutInventory_itemsInput | Prisma.transaction_itemsUpdateWithWhereUniqueWithoutInventory_itemsInput[];
    updateMany?: Prisma.transaction_itemsUpdateManyWithWhereWithoutInventory_itemsInput | Prisma.transaction_itemsUpdateManyWithWhereWithoutInventory_itemsInput[];
    deleteMany?: Prisma.transaction_itemsScalarWhereInput | Prisma.transaction_itemsScalarWhereInput[];
};
export type transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput> | Prisma.transaction_itemsCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput[] | Prisma.transaction_itemsUncheckedCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput | Prisma.transaction_itemsCreateOrConnectWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput[];
    upsert?: Prisma.transaction_itemsUpsertWithWhereUniqueWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput | Prisma.transaction_itemsUpsertWithWhereUniqueWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput[];
    createMany?: Prisma.transaction_itemsCreateManyInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInputEnvelope;
    set?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    disconnect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    delete?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    update?: Prisma.transaction_itemsUpdateWithWhereUniqueWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput | Prisma.transaction_itemsUpdateWithWhereUniqueWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput[];
    updateMany?: Prisma.transaction_itemsUpdateManyWithWhereWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput | Prisma.transaction_itemsUpdateManyWithWhereWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput[];
    deleteMany?: Prisma.transaction_itemsScalarWhereInput | Prisma.transaction_itemsScalarWhereInput[];
};
export type transaction_itemsCreateNestedManyWithoutPrice_snapshotsInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutPrice_snapshotsInput, Prisma.transaction_itemsUncheckedCreateWithoutPrice_snapshotsInput> | Prisma.transaction_itemsCreateWithoutPrice_snapshotsInput[] | Prisma.transaction_itemsUncheckedCreateWithoutPrice_snapshotsInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutPrice_snapshotsInput | Prisma.transaction_itemsCreateOrConnectWithoutPrice_snapshotsInput[];
    createMany?: Prisma.transaction_itemsCreateManyPrice_snapshotsInputEnvelope;
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
};
export type transaction_itemsUncheckedCreateNestedManyWithoutPrice_snapshotsInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutPrice_snapshotsInput, Prisma.transaction_itemsUncheckedCreateWithoutPrice_snapshotsInput> | Prisma.transaction_itemsCreateWithoutPrice_snapshotsInput[] | Prisma.transaction_itemsUncheckedCreateWithoutPrice_snapshotsInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutPrice_snapshotsInput | Prisma.transaction_itemsCreateOrConnectWithoutPrice_snapshotsInput[];
    createMany?: Prisma.transaction_itemsCreateManyPrice_snapshotsInputEnvelope;
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
};
export type transaction_itemsUpdateManyWithoutPrice_snapshotsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutPrice_snapshotsInput, Prisma.transaction_itemsUncheckedCreateWithoutPrice_snapshotsInput> | Prisma.transaction_itemsCreateWithoutPrice_snapshotsInput[] | Prisma.transaction_itemsUncheckedCreateWithoutPrice_snapshotsInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutPrice_snapshotsInput | Prisma.transaction_itemsCreateOrConnectWithoutPrice_snapshotsInput[];
    upsert?: Prisma.transaction_itemsUpsertWithWhereUniqueWithoutPrice_snapshotsInput | Prisma.transaction_itemsUpsertWithWhereUniqueWithoutPrice_snapshotsInput[];
    createMany?: Prisma.transaction_itemsCreateManyPrice_snapshotsInputEnvelope;
    set?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    disconnect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    delete?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    update?: Prisma.transaction_itemsUpdateWithWhereUniqueWithoutPrice_snapshotsInput | Prisma.transaction_itemsUpdateWithWhereUniqueWithoutPrice_snapshotsInput[];
    updateMany?: Prisma.transaction_itemsUpdateManyWithWhereWithoutPrice_snapshotsInput | Prisma.transaction_itemsUpdateManyWithWhereWithoutPrice_snapshotsInput[];
    deleteMany?: Prisma.transaction_itemsScalarWhereInput | Prisma.transaction_itemsScalarWhereInput[];
};
export type transaction_itemsUncheckedUpdateManyWithoutPrice_snapshotsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutPrice_snapshotsInput, Prisma.transaction_itemsUncheckedCreateWithoutPrice_snapshotsInput> | Prisma.transaction_itemsCreateWithoutPrice_snapshotsInput[] | Prisma.transaction_itemsUncheckedCreateWithoutPrice_snapshotsInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutPrice_snapshotsInput | Prisma.transaction_itemsCreateOrConnectWithoutPrice_snapshotsInput[];
    upsert?: Prisma.transaction_itemsUpsertWithWhereUniqueWithoutPrice_snapshotsInput | Prisma.transaction_itemsUpsertWithWhereUniqueWithoutPrice_snapshotsInput[];
    createMany?: Prisma.transaction_itemsCreateManyPrice_snapshotsInputEnvelope;
    set?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    disconnect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    delete?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    update?: Prisma.transaction_itemsUpdateWithWhereUniqueWithoutPrice_snapshotsInput | Prisma.transaction_itemsUpdateWithWhereUniqueWithoutPrice_snapshotsInput[];
    updateMany?: Prisma.transaction_itemsUpdateManyWithWhereWithoutPrice_snapshotsInput | Prisma.transaction_itemsUpdateManyWithWhereWithoutPrice_snapshotsInput[];
    deleteMany?: Prisma.transaction_itemsScalarWhereInput | Prisma.transaction_itemsScalarWhereInput[];
};
export type transaction_itemsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>;
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    connect?: Prisma.transaction_itemsWhereUniqueInput;
};
export type transaction_itemsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput>;
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    connect?: Prisma.transaction_itemsWhereUniqueInput;
};
export type transaction_itemsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>;
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    upsert?: Prisma.transaction_itemsUpsertWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    connect?: Prisma.transaction_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.transaction_itemsUpdateToOneWithWhereWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput, Prisma.transaction_itemsUpdateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>, Prisma.transaction_itemsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>;
};
export type transaction_itemsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput>;
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    upsert?: Prisma.transaction_itemsUpsertWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    connect?: Prisma.transaction_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.transaction_itemsUpdateToOneWithWhereWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput, Prisma.transaction_itemsUpdateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput>, Prisma.transaction_itemsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput>;
};
export type transaction_itemsCreateNestedManyWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutTransactionsInput, Prisma.transaction_itemsUncheckedCreateWithoutTransactionsInput> | Prisma.transaction_itemsCreateWithoutTransactionsInput[] | Prisma.transaction_itemsUncheckedCreateWithoutTransactionsInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutTransactionsInput | Prisma.transaction_itemsCreateOrConnectWithoutTransactionsInput[];
    createMany?: Prisma.transaction_itemsCreateManyTransactionsInputEnvelope;
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
};
export type transaction_itemsUncheckedCreateNestedManyWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutTransactionsInput, Prisma.transaction_itemsUncheckedCreateWithoutTransactionsInput> | Prisma.transaction_itemsCreateWithoutTransactionsInput[] | Prisma.transaction_itemsUncheckedCreateWithoutTransactionsInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutTransactionsInput | Prisma.transaction_itemsCreateOrConnectWithoutTransactionsInput[];
    createMany?: Prisma.transaction_itemsCreateManyTransactionsInputEnvelope;
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
};
export type transaction_itemsUpdateManyWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutTransactionsInput, Prisma.transaction_itemsUncheckedCreateWithoutTransactionsInput> | Prisma.transaction_itemsCreateWithoutTransactionsInput[] | Prisma.transaction_itemsUncheckedCreateWithoutTransactionsInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutTransactionsInput | Prisma.transaction_itemsCreateOrConnectWithoutTransactionsInput[];
    upsert?: Prisma.transaction_itemsUpsertWithWhereUniqueWithoutTransactionsInput | Prisma.transaction_itemsUpsertWithWhereUniqueWithoutTransactionsInput[];
    createMany?: Prisma.transaction_itemsCreateManyTransactionsInputEnvelope;
    set?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    disconnect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    delete?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    update?: Prisma.transaction_itemsUpdateWithWhereUniqueWithoutTransactionsInput | Prisma.transaction_itemsUpdateWithWhereUniqueWithoutTransactionsInput[];
    updateMany?: Prisma.transaction_itemsUpdateManyWithWhereWithoutTransactionsInput | Prisma.transaction_itemsUpdateManyWithWhereWithoutTransactionsInput[];
    deleteMany?: Prisma.transaction_itemsScalarWhereInput | Prisma.transaction_itemsScalarWhereInput[];
};
export type transaction_itemsUncheckedUpdateManyWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutTransactionsInput, Prisma.transaction_itemsUncheckedCreateWithoutTransactionsInput> | Prisma.transaction_itemsCreateWithoutTransactionsInput[] | Prisma.transaction_itemsUncheckedCreateWithoutTransactionsInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutTransactionsInput | Prisma.transaction_itemsCreateOrConnectWithoutTransactionsInput[];
    upsert?: Prisma.transaction_itemsUpsertWithWhereUniqueWithoutTransactionsInput | Prisma.transaction_itemsUpsertWithWhereUniqueWithoutTransactionsInput[];
    createMany?: Prisma.transaction_itemsCreateManyTransactionsInputEnvelope;
    set?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    disconnect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    delete?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    update?: Prisma.transaction_itemsUpdateWithWhereUniqueWithoutTransactionsInput | Prisma.transaction_itemsUpdateWithWhereUniqueWithoutTransactionsInput[];
    updateMany?: Prisma.transaction_itemsUpdateManyWithWhereWithoutTransactionsInput | Prisma.transaction_itemsUpdateManyWithWhereWithoutTransactionsInput[];
    deleteMany?: Prisma.transaction_itemsScalarWhereInput | Prisma.transaction_itemsScalarWhereInput[];
};
export type transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput, Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput> | Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput[] | Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput | Prisma.transaction_itemsCreateOrConnectWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput[];
    createMany?: Prisma.transaction_itemsCreateManyUser_profiles_transaction_items_from_user_idTouser_profilesInputEnvelope;
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
};
export type transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput, Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput> | Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput[] | Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput | Prisma.transaction_itemsCreateOrConnectWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput[];
    createMany?: Prisma.transaction_itemsCreateManyUser_profiles_transaction_items_to_user_idTouser_profilesInputEnvelope;
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
};
export type transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput, Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput> | Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput[] | Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput | Prisma.transaction_itemsCreateOrConnectWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput[];
    createMany?: Prisma.transaction_itemsCreateManyUser_profiles_transaction_items_from_user_idTouser_profilesInputEnvelope;
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
};
export type transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput, Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput> | Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput[] | Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput | Prisma.transaction_itemsCreateOrConnectWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput[];
    createMany?: Prisma.transaction_itemsCreateManyUser_profiles_transaction_items_to_user_idTouser_profilesInputEnvelope;
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
};
export type transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput, Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput> | Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput[] | Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput | Prisma.transaction_itemsCreateOrConnectWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput[];
    upsert?: Prisma.transaction_itemsUpsertWithWhereUniqueWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput | Prisma.transaction_itemsUpsertWithWhereUniqueWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput[];
    createMany?: Prisma.transaction_itemsCreateManyUser_profiles_transaction_items_from_user_idTouser_profilesInputEnvelope;
    set?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    disconnect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    delete?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    update?: Prisma.transaction_itemsUpdateWithWhereUniqueWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput | Prisma.transaction_itemsUpdateWithWhereUniqueWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput[];
    updateMany?: Prisma.transaction_itemsUpdateManyWithWhereWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput | Prisma.transaction_itemsUpdateManyWithWhereWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput[];
    deleteMany?: Prisma.transaction_itemsScalarWhereInput | Prisma.transaction_itemsScalarWhereInput[];
};
export type transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput, Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput> | Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput[] | Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput | Prisma.transaction_itemsCreateOrConnectWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput[];
    upsert?: Prisma.transaction_itemsUpsertWithWhereUniqueWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput | Prisma.transaction_itemsUpsertWithWhereUniqueWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput[];
    createMany?: Prisma.transaction_itemsCreateManyUser_profiles_transaction_items_to_user_idTouser_profilesInputEnvelope;
    set?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    disconnect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    delete?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    update?: Prisma.transaction_itemsUpdateWithWhereUniqueWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput | Prisma.transaction_itemsUpdateWithWhereUniqueWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput[];
    updateMany?: Prisma.transaction_itemsUpdateManyWithWhereWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput | Prisma.transaction_itemsUpdateManyWithWhereWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput[];
    deleteMany?: Prisma.transaction_itemsScalarWhereInput | Prisma.transaction_itemsScalarWhereInput[];
};
export type transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput, Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput> | Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput[] | Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput | Prisma.transaction_itemsCreateOrConnectWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput[];
    upsert?: Prisma.transaction_itemsUpsertWithWhereUniqueWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput | Prisma.transaction_itemsUpsertWithWhereUniqueWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput[];
    createMany?: Prisma.transaction_itemsCreateManyUser_profiles_transaction_items_from_user_idTouser_profilesInputEnvelope;
    set?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    disconnect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    delete?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    update?: Prisma.transaction_itemsUpdateWithWhereUniqueWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput | Prisma.transaction_itemsUpdateWithWhereUniqueWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput[];
    updateMany?: Prisma.transaction_itemsUpdateManyWithWhereWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput | Prisma.transaction_itemsUpdateManyWithWhereWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput[];
    deleteMany?: Prisma.transaction_itemsScalarWhereInput | Prisma.transaction_itemsScalarWhereInput[];
};
export type transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput, Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput> | Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput[] | Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput | Prisma.transaction_itemsCreateOrConnectWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput[];
    upsert?: Prisma.transaction_itemsUpsertWithWhereUniqueWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput | Prisma.transaction_itemsUpsertWithWhereUniqueWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput[];
    createMany?: Prisma.transaction_itemsCreateManyUser_profiles_transaction_items_to_user_idTouser_profilesInputEnvelope;
    set?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    disconnect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    delete?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    update?: Prisma.transaction_itemsUpdateWithWhereUniqueWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput | Prisma.transaction_itemsUpdateWithWhereUniqueWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput[];
    updateMany?: Prisma.transaction_itemsUpdateManyWithWhereWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput | Prisma.transaction_itemsUpdateManyWithWhereWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput[];
    deleteMany?: Prisma.transaction_itemsScalarWhereInput | Prisma.transaction_itemsScalarWhereInput[];
};
export type transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput, Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput> | Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput[] | Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsCreateOrConnectWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput[];
    createMany?: Prisma.transaction_itemsCreateManyStore_games_transaction_items_from_store_id_game_idTostore_gamesInputEnvelope;
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
};
export type transaction_itemsCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput, Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput> | Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput[] | Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsCreateOrConnectWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput[];
    createMany?: Prisma.transaction_itemsCreateManyStore_games_transaction_items_to_store_id_game_idTostore_gamesInputEnvelope;
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
};
export type transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput, Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput> | Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput[] | Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsCreateOrConnectWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput[];
    createMany?: Prisma.transaction_itemsCreateManyStore_games_transaction_items_from_store_id_game_idTostore_gamesInputEnvelope;
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
};
export type transaction_itemsUncheckedCreateNestedManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput, Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput> | Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput[] | Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsCreateOrConnectWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput[];
    createMany?: Prisma.transaction_itemsCreateManyStore_games_transaction_items_to_store_id_game_idTostore_gamesInputEnvelope;
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
};
export type transaction_itemsUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput, Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput> | Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput[] | Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsCreateOrConnectWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput[];
    upsert?: Prisma.transaction_itemsUpsertWithWhereUniqueWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsUpsertWithWhereUniqueWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput[];
    createMany?: Prisma.transaction_itemsCreateManyStore_games_transaction_items_from_store_id_game_idTostore_gamesInputEnvelope;
    set?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    disconnect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    delete?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    update?: Prisma.transaction_itemsUpdateWithWhereUniqueWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsUpdateWithWhereUniqueWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput[];
    updateMany?: Prisma.transaction_itemsUpdateManyWithWhereWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsUpdateManyWithWhereWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput[];
    deleteMany?: Prisma.transaction_itemsScalarWhereInput | Prisma.transaction_itemsScalarWhereInput[];
};
export type transaction_itemsUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput, Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput> | Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput[] | Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsCreateOrConnectWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput[];
    upsert?: Prisma.transaction_itemsUpsertWithWhereUniqueWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsUpsertWithWhereUniqueWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput[];
    createMany?: Prisma.transaction_itemsCreateManyStore_games_transaction_items_to_store_id_game_idTostore_gamesInputEnvelope;
    set?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    disconnect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    delete?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    update?: Prisma.transaction_itemsUpdateWithWhereUniqueWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsUpdateWithWhereUniqueWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput[];
    updateMany?: Prisma.transaction_itemsUpdateManyWithWhereWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsUpdateManyWithWhereWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput[];
    deleteMany?: Prisma.transaction_itemsScalarWhereInput | Prisma.transaction_itemsScalarWhereInput[];
};
export type transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput, Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput> | Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput[] | Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsCreateOrConnectWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput[];
    upsert?: Prisma.transaction_itemsUpsertWithWhereUniqueWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsUpsertWithWhereUniqueWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput[];
    createMany?: Prisma.transaction_itemsCreateManyStore_games_transaction_items_from_store_id_game_idTostore_gamesInputEnvelope;
    set?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    disconnect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    delete?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    update?: Prisma.transaction_itemsUpdateWithWhereUniqueWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsUpdateWithWhereUniqueWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput[];
    updateMany?: Prisma.transaction_itemsUpdateManyWithWhereWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsUpdateManyWithWhereWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput[];
    deleteMany?: Prisma.transaction_itemsScalarWhereInput | Prisma.transaction_itemsScalarWhereInput[];
};
export type transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput, Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput> | Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput[] | Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput[];
    connectOrCreate?: Prisma.transaction_itemsCreateOrConnectWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsCreateOrConnectWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput[];
    upsert?: Prisma.transaction_itemsUpsertWithWhereUniqueWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsUpsertWithWhereUniqueWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput[];
    createMany?: Prisma.transaction_itemsCreateManyStore_games_transaction_items_to_store_id_game_idTostore_gamesInputEnvelope;
    set?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    disconnect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    delete?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    connect?: Prisma.transaction_itemsWhereUniqueInput | Prisma.transaction_itemsWhereUniqueInput[];
    update?: Prisma.transaction_itemsUpdateWithWhereUniqueWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsUpdateWithWhereUniqueWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput[];
    updateMany?: Prisma.transaction_itemsUpdateManyWithWhereWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsUpdateManyWithWhereWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput[];
    deleteMany?: Prisma.transaction_itemsScalarWhereInput | Prisma.transaction_itemsScalarWhereInput[];
};
export type transaction_itemsCreateWithoutInventory_itemsInput = {
    id?: string;
    item_role: string;
    quantity?: number;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput;
    price_snapshots?: Prisma.price_snapshotsCreateNestedOneWithoutTransaction_itemsInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput;
    transactions: Prisma.transactionsCreateNestedOneWithoutTransaction_itemsInput;
};
export type transaction_itemsUncheckedCreateWithoutInventory_itemsInput = {
    id?: string;
    transaction_id: string;
    item_role: string;
    quantity?: number;
    from_user_id?: string | null;
    from_store_id?: string | null;
    to_user_id?: string | null;
    to_store_id?: string | null;
    market_snapshot_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    result_inventory_item_id?: string | null;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
};
export type transaction_itemsCreateOrConnectWithoutInventory_itemsInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutInventory_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutInventory_itemsInput>;
};
export type transaction_itemsCreateManyInventory_itemsInputEnvelope = {
    data: Prisma.transaction_itemsCreateManyInventory_itemsInput | Prisma.transaction_itemsCreateManyInventory_itemsInput[];
    skipDuplicates?: boolean;
};
export type transaction_itemsCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    id?: string;
    item_role: string;
    quantity?: number;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput;
    inventory_items: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_itemsInput;
    price_snapshots?: Prisma.price_snapshotsCreateNestedOneWithoutTransaction_itemsInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput;
    transactions: Prisma.transactionsCreateNestedOneWithoutTransaction_itemsInput;
};
export type transaction_itemsUncheckedCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    id?: string;
    transaction_id: string;
    inventory_item_id: string;
    item_role: string;
    quantity?: number;
    from_user_id?: string | null;
    from_store_id?: string | null;
    to_user_id?: string | null;
    to_store_id?: string | null;
    market_snapshot_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
};
export type transaction_itemsCreateOrConnectWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput>;
};
export type transaction_itemsCreateManyInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInputEnvelope = {
    data: Prisma.transaction_itemsCreateManyInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput | Prisma.transaction_itemsCreateManyInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput[];
    skipDuplicates?: boolean;
};
export type transaction_itemsUpsertWithWhereUniqueWithoutInventory_itemsInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutInventory_itemsInput, Prisma.transaction_itemsUncheckedUpdateWithoutInventory_itemsInput>;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutInventory_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutInventory_itemsInput>;
};
export type transaction_itemsUpdateWithWhereUniqueWithoutInventory_itemsInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutInventory_itemsInput, Prisma.transaction_itemsUncheckedUpdateWithoutInventory_itemsInput>;
};
export type transaction_itemsUpdateManyWithWhereWithoutInventory_itemsInput = {
    where: Prisma.transaction_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.transaction_itemsUpdateManyMutationInput, Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsInput>;
};
export type transaction_itemsScalarWhereInput = {
    AND?: Prisma.transaction_itemsScalarWhereInput | Prisma.transaction_itemsScalarWhereInput[];
    OR?: Prisma.transaction_itemsScalarWhereInput[];
    NOT?: Prisma.transaction_itemsScalarWhereInput | Prisma.transaction_itemsScalarWhereInput[];
    id?: Prisma.UuidFilter<"transaction_items"> | string;
    transaction_id?: Prisma.UuidFilter<"transaction_items"> | string;
    inventory_item_id?: Prisma.UuidFilter<"transaction_items"> | string;
    item_role?: Prisma.StringFilter<"transaction_items"> | string;
    quantity?: Prisma.IntFilter<"transaction_items"> | number;
    from_user_id?: Prisma.UuidNullableFilter<"transaction_items"> | string | null;
    from_store_id?: Prisma.UuidNullableFilter<"transaction_items"> | string | null;
    to_user_id?: Prisma.UuidNullableFilter<"transaction_items"> | string | null;
    to_store_id?: Prisma.UuidNullableFilter<"transaction_items"> | string | null;
    market_snapshot_id?: Prisma.UuidNullableFilter<"transaction_items"> | string | null;
    agreed_unit_value?: Prisma.DecimalNullableFilter<"transaction_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.StringNullableFilter<"transaction_items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"transaction_items"> | Date | string;
    result_inventory_item_id?: Prisma.UuidNullableFilter<"transaction_items"> | string | null;
    game_id?: Prisma.UuidFilter<"transaction_items"> | string;
};
export type transaction_itemsUpsertWithWhereUniqueWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput, Prisma.transaction_itemsUncheckedUpdateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput>;
};
export type transaction_itemsUpdateWithWhereUniqueWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput, Prisma.transaction_itemsUncheckedUpdateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput>;
};
export type transaction_itemsUpdateManyWithWhereWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    where: Prisma.transaction_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.transaction_itemsUpdateManyMutationInput, Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput>;
};
export type transaction_itemsCreateWithoutPrice_snapshotsInput = {
    id?: string;
    item_role: string;
    quantity?: number;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput;
    inventory_items: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_itemsInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput;
    transactions: Prisma.transactionsCreateNestedOneWithoutTransaction_itemsInput;
};
export type transaction_itemsUncheckedCreateWithoutPrice_snapshotsInput = {
    id?: string;
    transaction_id: string;
    inventory_item_id: string;
    item_role: string;
    quantity?: number;
    from_user_id?: string | null;
    from_store_id?: string | null;
    to_user_id?: string | null;
    to_store_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    result_inventory_item_id?: string | null;
    game_id: string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
};
export type transaction_itemsCreateOrConnectWithoutPrice_snapshotsInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutPrice_snapshotsInput, Prisma.transaction_itemsUncheckedCreateWithoutPrice_snapshotsInput>;
};
export type transaction_itemsCreateManyPrice_snapshotsInputEnvelope = {
    data: Prisma.transaction_itemsCreateManyPrice_snapshotsInput | Prisma.transaction_itemsCreateManyPrice_snapshotsInput[];
    skipDuplicates?: boolean;
};
export type transaction_itemsUpsertWithWhereUniqueWithoutPrice_snapshotsInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutPrice_snapshotsInput, Prisma.transaction_itemsUncheckedUpdateWithoutPrice_snapshotsInput>;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutPrice_snapshotsInput, Prisma.transaction_itemsUncheckedCreateWithoutPrice_snapshotsInput>;
};
export type transaction_itemsUpdateWithWhereUniqueWithoutPrice_snapshotsInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutPrice_snapshotsInput, Prisma.transaction_itemsUncheckedUpdateWithoutPrice_snapshotsInput>;
};
export type transaction_itemsUpdateManyWithWhereWithoutPrice_snapshotsInput = {
    where: Prisma.transaction_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.transaction_itemsUpdateManyMutationInput, Prisma.transaction_itemsUncheckedUpdateManyWithoutPrice_snapshotsInput>;
};
export type transaction_itemsCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput = {
    id?: string;
    item_role: string;
    quantity?: number;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput;
    inventory_items: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_itemsInput;
    price_snapshots?: Prisma.price_snapshotsCreateNestedOneWithoutTransaction_itemsInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput;
    transactions: Prisma.transactionsCreateNestedOneWithoutTransaction_itemsInput;
};
export type transaction_itemsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput = {
    id?: string;
    transaction_id: string;
    inventory_item_id: string;
    item_role: string;
    quantity?: number;
    from_user_id?: string | null;
    from_store_id?: string | null;
    to_user_id?: string | null;
    to_store_id?: string | null;
    market_snapshot_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    result_inventory_item_id?: string | null;
    game_id: string;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
};
export type transaction_itemsCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>;
};
export type transaction_itemsCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput = {
    id?: string;
    item_role: string;
    quantity?: number;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput;
    inventory_items: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_itemsInput;
    price_snapshots?: Prisma.price_snapshotsCreateNestedOneWithoutTransaction_itemsInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput;
    transactions: Prisma.transactionsCreateNestedOneWithoutTransaction_itemsInput;
};
export type transaction_itemsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput = {
    id?: string;
    transaction_id: string;
    inventory_item_id: string;
    item_role: string;
    quantity?: number;
    from_user_id?: string | null;
    from_store_id?: string | null;
    to_user_id?: string | null;
    to_store_id?: string | null;
    market_snapshot_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    result_inventory_item_id?: string | null;
    game_id: string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
};
export type transaction_itemsCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput>;
};
export type transaction_itemsUpsertWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput = {
    update: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput, Prisma.transaction_itemsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>;
    where?: Prisma.transaction_itemsWhereInput;
};
export type transaction_itemsUpdateToOneWithWhereWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput = {
    where?: Prisma.transaction_itemsWhereInput;
    data: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput, Prisma.transaction_itemsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>;
};
export type transaction_itemsUpdateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
    price_snapshots?: Prisma.price_snapshotsUpdateOneWithoutTransaction_itemsNestedInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions?: Prisma.transactionsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
};
export type transaction_itemsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    from_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    market_snapshot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    result_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
};
export type transaction_itemsUpsertWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput = {
    update: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput, Prisma.transaction_itemsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput>;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput, Prisma.transaction_itemsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput>;
    where?: Prisma.transaction_itemsWhereInput;
};
export type transaction_itemsUpdateToOneWithWhereWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput = {
    where?: Prisma.transaction_itemsWhereInput;
    data: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput, Prisma.transaction_itemsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput>;
};
export type transaction_itemsUpdateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
    price_snapshots?: Prisma.price_snapshotsUpdateOneWithoutTransaction_itemsNestedInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions?: Prisma.transactionsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
};
export type transaction_itemsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    from_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    market_snapshot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    result_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
};
export type transaction_itemsCreateWithoutTransactionsInput = {
    id?: string;
    item_role: string;
    quantity?: number;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput;
    inventory_items: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_itemsInput;
    price_snapshots?: Prisma.price_snapshotsCreateNestedOneWithoutTransaction_itemsInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput;
};
export type transaction_itemsUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    inventory_item_id: string;
    item_role: string;
    quantity?: number;
    from_user_id?: string | null;
    from_store_id?: string | null;
    to_user_id?: string | null;
    to_store_id?: string | null;
    market_snapshot_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    result_inventory_item_id?: string | null;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
};
export type transaction_itemsCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutTransactionsInput, Prisma.transaction_itemsUncheckedCreateWithoutTransactionsInput>;
};
export type transaction_itemsCreateManyTransactionsInputEnvelope = {
    data: Prisma.transaction_itemsCreateManyTransactionsInput | Prisma.transaction_itemsCreateManyTransactionsInput[];
    skipDuplicates?: boolean;
};
export type transaction_itemsUpsertWithWhereUniqueWithoutTransactionsInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutTransactionsInput, Prisma.transaction_itemsUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutTransactionsInput, Prisma.transaction_itemsUncheckedCreateWithoutTransactionsInput>;
};
export type transaction_itemsUpdateWithWhereUniqueWithoutTransactionsInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutTransactionsInput, Prisma.transaction_itemsUncheckedUpdateWithoutTransactionsInput>;
};
export type transaction_itemsUpdateManyWithWhereWithoutTransactionsInput = {
    where: Prisma.transaction_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.transaction_itemsUpdateManyMutationInput, Prisma.transaction_itemsUncheckedUpdateManyWithoutTransactionsInput>;
};
export type transaction_itemsCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput = {
    id?: string;
    item_role: string;
    quantity?: number;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput;
    inventory_items: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_itemsInput;
    price_snapshots?: Prisma.price_snapshotsCreateNestedOneWithoutTransaction_itemsInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput;
    transactions: Prisma.transactionsCreateNestedOneWithoutTransaction_itemsInput;
};
export type transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput = {
    id?: string;
    transaction_id: string;
    inventory_item_id: string;
    item_role: string;
    quantity?: number;
    from_store_id?: string | null;
    to_user_id?: string | null;
    to_store_id?: string | null;
    market_snapshot_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    result_inventory_item_id?: string | null;
    game_id: string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
};
export type transaction_itemsCreateOrConnectWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput, Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput>;
};
export type transaction_itemsCreateManyUser_profiles_transaction_items_from_user_idTouser_profilesInputEnvelope = {
    data: Prisma.transaction_itemsCreateManyUser_profiles_transaction_items_from_user_idTouser_profilesInput | Prisma.transaction_itemsCreateManyUser_profiles_transaction_items_from_user_idTouser_profilesInput[];
    skipDuplicates?: boolean;
};
export type transaction_itemsCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput = {
    id?: string;
    item_role: string;
    quantity?: number;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput;
    inventory_items: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_itemsInput;
    price_snapshots?: Prisma.price_snapshotsCreateNestedOneWithoutTransaction_itemsInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput;
    transactions: Prisma.transactionsCreateNestedOneWithoutTransaction_itemsInput;
};
export type transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput = {
    id?: string;
    transaction_id: string;
    inventory_item_id: string;
    item_role: string;
    quantity?: number;
    from_user_id?: string | null;
    from_store_id?: string | null;
    to_store_id?: string | null;
    market_snapshot_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    result_inventory_item_id?: string | null;
    game_id: string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
};
export type transaction_itemsCreateOrConnectWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput, Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput>;
};
export type transaction_itemsCreateManyUser_profiles_transaction_items_to_user_idTouser_profilesInputEnvelope = {
    data: Prisma.transaction_itemsCreateManyUser_profiles_transaction_items_to_user_idTouser_profilesInput | Prisma.transaction_itemsCreateManyUser_profiles_transaction_items_to_user_idTouser_profilesInput[];
    skipDuplicates?: boolean;
};
export type transaction_itemsUpsertWithWhereUniqueWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput, Prisma.transaction_itemsUncheckedUpdateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput>;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput, Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput>;
};
export type transaction_itemsUpdateWithWhereUniqueWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput, Prisma.transaction_itemsUncheckedUpdateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput>;
};
export type transaction_itemsUpdateManyWithWhereWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput = {
    where: Prisma.transaction_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.transaction_itemsUpdateManyMutationInput, Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput>;
};
export type transaction_itemsUpsertWithWhereUniqueWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput, Prisma.transaction_itemsUncheckedUpdateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput>;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput, Prisma.transaction_itemsUncheckedCreateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput>;
};
export type transaction_itemsUpdateWithWhereUniqueWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput, Prisma.transaction_itemsUncheckedUpdateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput>;
};
export type transaction_itemsUpdateManyWithWhereWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput = {
    where: Prisma.transaction_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.transaction_itemsUpdateManyMutationInput, Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput>;
};
export type transaction_itemsCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput = {
    id?: string;
    item_role: string;
    quantity?: number;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput;
    inventory_items: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_itemsInput;
    price_snapshots?: Prisma.price_snapshotsCreateNestedOneWithoutTransaction_itemsInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput;
    transactions: Prisma.transactionsCreateNestedOneWithoutTransaction_itemsInput;
};
export type transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput = {
    id?: string;
    transaction_id: string;
    inventory_item_id: string;
    item_role: string;
    quantity?: number;
    from_user_id?: string | null;
    to_user_id?: string | null;
    to_store_id?: string | null;
    market_snapshot_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    result_inventory_item_id?: string | null;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
};
export type transaction_itemsCreateOrConnectWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput, Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput>;
};
export type transaction_itemsCreateManyStore_games_transaction_items_from_store_id_game_idTostore_gamesInputEnvelope = {
    data: Prisma.transaction_itemsCreateManyStore_games_transaction_items_from_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsCreateManyStore_games_transaction_items_from_store_id_game_idTostore_gamesInput[];
    skipDuplicates?: boolean;
};
export type transaction_itemsCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput = {
    id?: string;
    item_role: string;
    quantity?: number;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput;
    inventory_items: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_itemsInput;
    price_snapshots?: Prisma.price_snapshotsCreateNestedOneWithoutTransaction_itemsInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput;
    transactions: Prisma.transactionsCreateNestedOneWithoutTransaction_itemsInput;
};
export type transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput = {
    id?: string;
    transaction_id: string;
    inventory_item_id: string;
    item_role: string;
    quantity?: number;
    from_user_id?: string | null;
    from_store_id?: string | null;
    to_user_id?: string | null;
    market_snapshot_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    result_inventory_item_id?: string | null;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
};
export type transaction_itemsCreateOrConnectWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput, Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput>;
};
export type transaction_itemsCreateManyStore_games_transaction_items_to_store_id_game_idTostore_gamesInputEnvelope = {
    data: Prisma.transaction_itemsCreateManyStore_games_transaction_items_to_store_id_game_idTostore_gamesInput | Prisma.transaction_itemsCreateManyStore_games_transaction_items_to_store_id_game_idTostore_gamesInput[];
    skipDuplicates?: boolean;
};
export type transaction_itemsUpsertWithWhereUniqueWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput, Prisma.transaction_itemsUncheckedUpdateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput>;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput, Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput>;
};
export type transaction_itemsUpdateWithWhereUniqueWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput, Prisma.transaction_itemsUncheckedUpdateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput>;
};
export type transaction_itemsUpdateManyWithWhereWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput = {
    where: Prisma.transaction_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.transaction_itemsUpdateManyMutationInput, Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput>;
};
export type transaction_itemsUpsertWithWhereUniqueWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput, Prisma.transaction_itemsUncheckedUpdateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput>;
    create: Prisma.XOR<Prisma.transaction_itemsCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput, Prisma.transaction_itemsUncheckedCreateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput>;
};
export type transaction_itemsUpdateWithWhereUniqueWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput = {
    where: Prisma.transaction_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.transaction_itemsUpdateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput, Prisma.transaction_itemsUncheckedUpdateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput>;
};
export type transaction_itemsUpdateManyWithWhereWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput = {
    where: Prisma.transaction_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.transaction_itemsUpdateManyMutationInput, Prisma.transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput>;
};
export type transaction_itemsCreateManyInventory_itemsInput = {
    id?: string;
    transaction_id: string;
    item_role: string;
    quantity?: number;
    from_user_id?: string | null;
    from_store_id?: string | null;
    to_user_id?: string | null;
    to_store_id?: string | null;
    market_snapshot_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    result_inventory_item_id?: string | null;
};
export type transaction_itemsCreateManyInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    id?: string;
    transaction_id: string;
    inventory_item_id: string;
    item_role: string;
    quantity?: number;
    from_user_id?: string | null;
    from_store_id?: string | null;
    to_user_id?: string | null;
    to_store_id?: string | null;
    market_snapshot_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
};
export type transaction_itemsUpdateWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesNestedInput;
    price_snapshots?: Prisma.price_snapshotsUpdateOneWithoutTransaction_itemsNestedInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions?: Prisma.transactionsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
};
export type transaction_itemsUncheckedUpdateWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    from_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    market_snapshot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    result_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
};
export type transaction_itemsUncheckedUpdateManyWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    from_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    market_snapshot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    result_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transaction_itemsUpdateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
    price_snapshots?: Prisma.price_snapshotsUpdateOneWithoutTransaction_itemsNestedInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions?: Prisma.transactionsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
};
export type transaction_itemsUncheckedUpdateWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    from_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    market_snapshot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
};
export type transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    from_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    market_snapshot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transaction_itemsCreateManyPrice_snapshotsInput = {
    id?: string;
    transaction_id: string;
    inventory_item_id: string;
    item_role: string;
    quantity?: number;
    from_user_id?: string | null;
    from_store_id?: string | null;
    to_user_id?: string | null;
    to_store_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    result_inventory_item_id?: string | null;
    game_id: string;
};
export type transaction_itemsUpdateWithoutPrice_snapshotsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions?: Prisma.transactionsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
};
export type transaction_itemsUncheckedUpdateWithoutPrice_snapshotsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    from_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    result_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
};
export type transaction_itemsUncheckedUpdateManyWithoutPrice_snapshotsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    from_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    result_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type transaction_itemsCreateManyTransactionsInput = {
    id?: string;
    inventory_item_id: string;
    item_role: string;
    quantity?: number;
    from_user_id?: string | null;
    from_store_id?: string | null;
    to_user_id?: string | null;
    to_store_id?: string | null;
    market_snapshot_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    result_inventory_item_id?: string | null;
};
export type transaction_itemsUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
    price_snapshots?: Prisma.price_snapshotsUpdateOneWithoutTransaction_itemsNestedInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesNestedInput;
};
export type transaction_itemsUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    from_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    market_snapshot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    result_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
};
export type transaction_itemsUncheckedUpdateManyWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    from_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    market_snapshot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    result_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transaction_itemsCreateManyUser_profiles_transaction_items_from_user_idTouser_profilesInput = {
    id?: string;
    transaction_id: string;
    inventory_item_id: string;
    item_role: string;
    quantity?: number;
    from_store_id?: string | null;
    to_user_id?: string | null;
    to_store_id?: string | null;
    market_snapshot_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    result_inventory_item_id?: string | null;
    game_id: string;
};
export type transaction_itemsCreateManyUser_profiles_transaction_items_to_user_idTouser_profilesInput = {
    id?: string;
    transaction_id: string;
    inventory_item_id: string;
    item_role: string;
    quantity?: number;
    from_user_id?: string | null;
    from_store_id?: string | null;
    to_store_id?: string | null;
    market_snapshot_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    result_inventory_item_id?: string | null;
    game_id: string;
};
export type transaction_itemsUpdateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
    price_snapshots?: Prisma.price_snapshotsUpdateOneWithoutTransaction_itemsNestedInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions?: Prisma.transactionsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
};
export type transaction_itemsUncheckedUpdateWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    market_snapshot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    result_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
};
export type transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    market_snapshot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    result_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type transaction_itemsUpdateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
    price_snapshots?: Prisma.price_snapshotsUpdateOneWithoutTransaction_itemsNestedInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    transactions?: Prisma.transactionsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
};
export type transaction_itemsUncheckedUpdateWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    from_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    market_snapshot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    result_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
};
export type transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    from_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    market_snapshot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    result_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type transaction_itemsCreateManyStore_games_transaction_items_from_store_id_game_idTostore_gamesInput = {
    id?: string;
    transaction_id: string;
    inventory_item_id: string;
    item_role: string;
    quantity?: number;
    from_user_id?: string | null;
    to_user_id?: string | null;
    to_store_id?: string | null;
    market_snapshot_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    result_inventory_item_id?: string | null;
};
export type transaction_itemsCreateManyStore_games_transaction_items_to_store_id_game_idTostore_gamesInput = {
    id?: string;
    transaction_id: string;
    inventory_item_id: string;
    item_role: string;
    quantity?: number;
    from_user_id?: string | null;
    from_store_id?: string | null;
    to_user_id?: string | null;
    market_snapshot_id?: string | null;
    agreed_unit_value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    created_at?: Date | string;
    result_inventory_item_id?: string | null;
};
export type transaction_itemsUpdateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
    price_snapshots?: Prisma.price_snapshotsUpdateOneWithoutTransaction_itemsNestedInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    store_games_transaction_items_to_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_to_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions?: Prisma.transactionsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
};
export type transaction_itemsUncheckedUpdateWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    market_snapshot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    result_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
};
export type transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_from_store_id_game_idTostore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    market_snapshot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    result_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transaction_itemsUpdateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
    store_games_transaction_items_from_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransaction_items_transaction_items_from_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transaction_items_from_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
    price_snapshots?: Prisma.price_snapshotsUpdateOneWithoutTransaction_itemsNestedInput;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    user_profiles_transaction_items_to_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions?: Prisma.transactionsUpdateOneRequiredWithoutTransaction_itemsNestedInput;
};
export type transaction_itemsUncheckedUpdateWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    from_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    market_snapshot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    result_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
};
export type transaction_itemsUncheckedUpdateManyWithoutStore_games_transaction_items_to_store_id_game_idTostore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    item_role?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    from_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    from_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    to_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    market_snapshot_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    agreed_unit_value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    result_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transaction_itemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transaction_id?: boolean;
    inventory_item_id?: boolean;
    item_role?: boolean;
    quantity?: boolean;
    from_user_id?: boolean;
    from_store_id?: boolean;
    to_user_id?: boolean;
    to_store_id?: boolean;
    market_snapshot_id?: boolean;
    agreed_unit_value?: boolean;
    currency_code?: boolean;
    created_at?: boolean;
    result_inventory_item_id?: boolean;
    game_id?: boolean;
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: boolean | Prisma.transaction_items$transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsArgs<ExtArgs>;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: boolean | Prisma.transaction_items$transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsArgs<ExtArgs>;
    store_games_transaction_items_from_store_id_game_idTostore_games?: boolean | Prisma.transaction_items$store_games_transaction_items_from_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transaction_items_from_user_idTouser_profiles?: boolean | Prisma.transaction_items$user_profiles_transaction_items_from_user_idTouser_profilesArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    price_snapshots?: boolean | Prisma.transaction_items$price_snapshotsArgs<ExtArgs>;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: boolean | Prisma.transaction_items$inventory_items_transaction_items_result_inventory_item_idToinventory_itemsArgs<ExtArgs>;
    store_games_transaction_items_to_store_id_game_idTostore_games?: boolean | Prisma.transaction_items$store_games_transaction_items_to_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transaction_items_to_user_idTouser_profiles?: boolean | Prisma.transaction_items$user_profiles_transaction_items_to_user_idTouser_profilesArgs<ExtArgs>;
    transactions?: boolean | Prisma.transactionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transaction_items"]>;
export type transaction_itemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transaction_id?: boolean;
    inventory_item_id?: boolean;
    item_role?: boolean;
    quantity?: boolean;
    from_user_id?: boolean;
    from_store_id?: boolean;
    to_user_id?: boolean;
    to_store_id?: boolean;
    market_snapshot_id?: boolean;
    agreed_unit_value?: boolean;
    currency_code?: boolean;
    created_at?: boolean;
    result_inventory_item_id?: boolean;
    game_id?: boolean;
    store_games_transaction_items_from_store_id_game_idTostore_games?: boolean | Prisma.transaction_items$store_games_transaction_items_from_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transaction_items_from_user_idTouser_profiles?: boolean | Prisma.transaction_items$user_profiles_transaction_items_from_user_idTouser_profilesArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    price_snapshots?: boolean | Prisma.transaction_items$price_snapshotsArgs<ExtArgs>;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: boolean | Prisma.transaction_items$inventory_items_transaction_items_result_inventory_item_idToinventory_itemsArgs<ExtArgs>;
    store_games_transaction_items_to_store_id_game_idTostore_games?: boolean | Prisma.transaction_items$store_games_transaction_items_to_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transaction_items_to_user_idTouser_profiles?: boolean | Prisma.transaction_items$user_profiles_transaction_items_to_user_idTouser_profilesArgs<ExtArgs>;
    transactions?: boolean | Prisma.transactionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transaction_items"]>;
export type transaction_itemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transaction_id?: boolean;
    inventory_item_id?: boolean;
    item_role?: boolean;
    quantity?: boolean;
    from_user_id?: boolean;
    from_store_id?: boolean;
    to_user_id?: boolean;
    to_store_id?: boolean;
    market_snapshot_id?: boolean;
    agreed_unit_value?: boolean;
    currency_code?: boolean;
    created_at?: boolean;
    result_inventory_item_id?: boolean;
    game_id?: boolean;
    store_games_transaction_items_from_store_id_game_idTostore_games?: boolean | Prisma.transaction_items$store_games_transaction_items_from_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transaction_items_from_user_idTouser_profiles?: boolean | Prisma.transaction_items$user_profiles_transaction_items_from_user_idTouser_profilesArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    price_snapshots?: boolean | Prisma.transaction_items$price_snapshotsArgs<ExtArgs>;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: boolean | Prisma.transaction_items$inventory_items_transaction_items_result_inventory_item_idToinventory_itemsArgs<ExtArgs>;
    store_games_transaction_items_to_store_id_game_idTostore_games?: boolean | Prisma.transaction_items$store_games_transaction_items_to_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transaction_items_to_user_idTouser_profiles?: boolean | Prisma.transaction_items$user_profiles_transaction_items_to_user_idTouser_profilesArgs<ExtArgs>;
    transactions?: boolean | Prisma.transactionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transaction_items"]>;
export type transaction_itemsSelectScalar = {
    id?: boolean;
    transaction_id?: boolean;
    inventory_item_id?: boolean;
    item_role?: boolean;
    quantity?: boolean;
    from_user_id?: boolean;
    from_store_id?: boolean;
    to_user_id?: boolean;
    to_store_id?: boolean;
    market_snapshot_id?: boolean;
    agreed_unit_value?: boolean;
    currency_code?: boolean;
    created_at?: boolean;
    result_inventory_item_id?: boolean;
    game_id?: boolean;
};
export type transaction_itemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "transaction_id" | "inventory_item_id" | "item_role" | "quantity" | "from_user_id" | "from_store_id" | "to_user_id" | "to_store_id" | "market_snapshot_id" | "agreed_unit_value" | "currency_code" | "created_at" | "result_inventory_item_id" | "game_id", ExtArgs["result"]["transaction_items"]>;
export type transaction_itemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: boolean | Prisma.transaction_items$transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsArgs<ExtArgs>;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items?: boolean | Prisma.transaction_items$transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsArgs<ExtArgs>;
    store_games_transaction_items_from_store_id_game_idTostore_games?: boolean | Prisma.transaction_items$store_games_transaction_items_from_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transaction_items_from_user_idTouser_profiles?: boolean | Prisma.transaction_items$user_profiles_transaction_items_from_user_idTouser_profilesArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    price_snapshots?: boolean | Prisma.transaction_items$price_snapshotsArgs<ExtArgs>;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: boolean | Prisma.transaction_items$inventory_items_transaction_items_result_inventory_item_idToinventory_itemsArgs<ExtArgs>;
    store_games_transaction_items_to_store_id_game_idTostore_games?: boolean | Prisma.transaction_items$store_games_transaction_items_to_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transaction_items_to_user_idTouser_profiles?: boolean | Prisma.transaction_items$user_profiles_transaction_items_to_user_idTouser_profilesArgs<ExtArgs>;
    transactions?: boolean | Prisma.transactionsDefaultArgs<ExtArgs>;
};
export type transaction_itemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_games_transaction_items_from_store_id_game_idTostore_games?: boolean | Prisma.transaction_items$store_games_transaction_items_from_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transaction_items_from_user_idTouser_profiles?: boolean | Prisma.transaction_items$user_profiles_transaction_items_from_user_idTouser_profilesArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    price_snapshots?: boolean | Prisma.transaction_items$price_snapshotsArgs<ExtArgs>;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: boolean | Prisma.transaction_items$inventory_items_transaction_items_result_inventory_item_idToinventory_itemsArgs<ExtArgs>;
    store_games_transaction_items_to_store_id_game_idTostore_games?: boolean | Prisma.transaction_items$store_games_transaction_items_to_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transaction_items_to_user_idTouser_profiles?: boolean | Prisma.transaction_items$user_profiles_transaction_items_to_user_idTouser_profilesArgs<ExtArgs>;
    transactions?: boolean | Prisma.transactionsDefaultArgs<ExtArgs>;
};
export type transaction_itemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_games_transaction_items_from_store_id_game_idTostore_games?: boolean | Prisma.transaction_items$store_games_transaction_items_from_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transaction_items_from_user_idTouser_profiles?: boolean | Prisma.transaction_items$user_profiles_transaction_items_from_user_idTouser_profilesArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    price_snapshots?: boolean | Prisma.transaction_items$price_snapshotsArgs<ExtArgs>;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items?: boolean | Prisma.transaction_items$inventory_items_transaction_items_result_inventory_item_idToinventory_itemsArgs<ExtArgs>;
    store_games_transaction_items_to_store_id_game_idTostore_games?: boolean | Prisma.transaction_items$store_games_transaction_items_to_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transaction_items_to_user_idTouser_profiles?: boolean | Prisma.transaction_items$user_profiles_transaction_items_to_user_idTouser_profilesArgs<ExtArgs>;
    transactions?: boolean | Prisma.transactionsDefaultArgs<ExtArgs>;
};
export type $transaction_itemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "transaction_items";
    objects: {
        transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items: Prisma.$transaction_item_custodyPayload<ExtArgs> | null;
        transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items: Prisma.$transaction_item_custodyPayload<ExtArgs> | null;
        store_games_transaction_items_from_store_id_game_idTostore_games: Prisma.$store_gamesPayload<ExtArgs> | null;
        user_profiles_transaction_items_from_user_idTouser_profiles: Prisma.$user_profilesPayload<ExtArgs> | null;
        inventory_items: Prisma.$inventory_itemsPayload<ExtArgs>;
        price_snapshots: Prisma.$price_snapshotsPayload<ExtArgs> | null;
        inventory_items_transaction_items_result_inventory_item_idToinventory_items: Prisma.$inventory_itemsPayload<ExtArgs> | null;
        store_games_transaction_items_to_store_id_game_idTostore_games: Prisma.$store_gamesPayload<ExtArgs> | null;
        user_profiles_transaction_items_to_user_idTouser_profiles: Prisma.$user_profilesPayload<ExtArgs> | null;
        transactions: Prisma.$transactionsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        transaction_id: string;
        inventory_item_id: string;
        item_role: string;
        quantity: number;
        from_user_id: string | null;
        from_store_id: string | null;
        to_user_id: string | null;
        to_store_id: string | null;
        market_snapshot_id: string | null;
        agreed_unit_value: runtime.Decimal | null;
        currency_code: string | null;
        created_at: Date;
        result_inventory_item_id: string | null;
        game_id: string;
    }, ExtArgs["result"]["transaction_items"]>;
    composites: {};
};
export type transaction_itemsGetPayload<S extends boolean | null | undefined | transaction_itemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload, S>;
export type transaction_itemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<transaction_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Transaction_itemsCountAggregateInputType | true;
};
export interface transaction_itemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['transaction_items'];
        meta: {
            name: 'transaction_items';
        };
    };
    /**
     * Find zero or one Transaction_items that matches the filter.
     * @param {transaction_itemsFindUniqueArgs} args - Arguments to find a Transaction_items
     * @example
     * // Get one Transaction_items
     * const transaction_items = await prisma.transaction_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaction_itemsFindUniqueArgs>(args: Prisma.SelectSubset<T, transaction_itemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__transaction_itemsClient<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Transaction_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaction_itemsFindUniqueOrThrowArgs} args - Arguments to find a Transaction_items
     * @example
     * // Get one Transaction_items
     * const transaction_items = await prisma.transaction_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaction_itemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, transaction_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__transaction_itemsClient<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Transaction_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_itemsFindFirstArgs} args - Arguments to find a Transaction_items
     * @example
     * // Get one Transaction_items
     * const transaction_items = await prisma.transaction_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaction_itemsFindFirstArgs>(args?: Prisma.SelectSubset<T, transaction_itemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__transaction_itemsClient<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Transaction_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_itemsFindFirstOrThrowArgs} args - Arguments to find a Transaction_items
     * @example
     * // Get one Transaction_items
     * const transaction_items = await prisma.transaction_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaction_itemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, transaction_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__transaction_itemsClient<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Transaction_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaction_items
     * const transaction_items = await prisma.transaction_items.findMany()
     *
     * // Get first 10 Transaction_items
     * const transaction_items = await prisma.transaction_items.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const transaction_itemsWithIdOnly = await prisma.transaction_items.findMany({ select: { id: true } })
     *
     */
    findMany<T extends transaction_itemsFindManyArgs>(args?: Prisma.SelectSubset<T, transaction_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Transaction_items.
     * @param {transaction_itemsCreateArgs} args - Arguments to create a Transaction_items.
     * @example
     * // Create one Transaction_items
     * const Transaction_items = await prisma.transaction_items.create({
     *   data: {
     *     // ... data to create a Transaction_items
     *   }
     * })
     *
     */
    create<T extends transaction_itemsCreateArgs>(args: Prisma.SelectSubset<T, transaction_itemsCreateArgs<ExtArgs>>): Prisma.Prisma__transaction_itemsClient<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Transaction_items.
     * @param {transaction_itemsCreateManyArgs} args - Arguments to create many Transaction_items.
     * @example
     * // Create many Transaction_items
     * const transaction_items = await prisma.transaction_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends transaction_itemsCreateManyArgs>(args?: Prisma.SelectSubset<T, transaction_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Transaction_items and returns the data saved in the database.
     * @param {transaction_itemsCreateManyAndReturnArgs} args - Arguments to create many Transaction_items.
     * @example
     * // Create many Transaction_items
     * const transaction_items = await prisma.transaction_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Transaction_items and only return the `id`
     * const transaction_itemsWithIdOnly = await prisma.transaction_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends transaction_itemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, transaction_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Transaction_items.
     * @param {transaction_itemsDeleteArgs} args - Arguments to delete one Transaction_items.
     * @example
     * // Delete one Transaction_items
     * const Transaction_items = await prisma.transaction_items.delete({
     *   where: {
     *     // ... filter to delete one Transaction_items
     *   }
     * })
     *
     */
    delete<T extends transaction_itemsDeleteArgs>(args: Prisma.SelectSubset<T, transaction_itemsDeleteArgs<ExtArgs>>): Prisma.Prisma__transaction_itemsClient<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Transaction_items.
     * @param {transaction_itemsUpdateArgs} args - Arguments to update one Transaction_items.
     * @example
     * // Update one Transaction_items
     * const transaction_items = await prisma.transaction_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends transaction_itemsUpdateArgs>(args: Prisma.SelectSubset<T, transaction_itemsUpdateArgs<ExtArgs>>): Prisma.Prisma__transaction_itemsClient<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Transaction_items.
     * @param {transaction_itemsDeleteManyArgs} args - Arguments to filter Transaction_items to delete.
     * @example
     * // Delete a few Transaction_items
     * const { count } = await prisma.transaction_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends transaction_itemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, transaction_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Transaction_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaction_items
     * const transaction_items = await prisma.transaction_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends transaction_itemsUpdateManyArgs>(args: Prisma.SelectSubset<T, transaction_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Transaction_items and returns the data updated in the database.
     * @param {transaction_itemsUpdateManyAndReturnArgs} args - Arguments to update many Transaction_items.
     * @example
     * // Update many Transaction_items
     * const transaction_items = await prisma.transaction_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Transaction_items and only return the `id`
     * const transaction_itemsWithIdOnly = await prisma.transaction_items.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends transaction_itemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, transaction_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Transaction_items.
     * @param {transaction_itemsUpsertArgs} args - Arguments to update or create a Transaction_items.
     * @example
     * // Update or create a Transaction_items
     * const transaction_items = await prisma.transaction_items.upsert({
     *   create: {
     *     // ... data to create a Transaction_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction_items we want to update
     *   }
     * })
     */
    upsert<T extends transaction_itemsUpsertArgs>(args: Prisma.SelectSubset<T, transaction_itemsUpsertArgs<ExtArgs>>): Prisma.Prisma__transaction_itemsClient<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Transaction_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_itemsCountArgs} args - Arguments to filter Transaction_items to count.
     * @example
     * // Count the number of Transaction_items
     * const count = await prisma.transaction_items.count({
     *   where: {
     *     // ... the filter for the Transaction_items we want to count
     *   }
     * })
    **/
    count<T extends transaction_itemsCountArgs>(args?: Prisma.Subset<T, transaction_itemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Transaction_itemsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Transaction_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaction_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Transaction_itemsAggregateArgs>(args: Prisma.Subset<T, Transaction_itemsAggregateArgs>): Prisma.PrismaPromise<GetTransaction_itemsAggregateType<T>>;
    /**
     * Group by Transaction_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_itemsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends transaction_itemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: transaction_itemsGroupByArgs['orderBy'];
    } : {
        orderBy?: transaction_itemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, transaction_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaction_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the transaction_items model
     */
    readonly fields: transaction_itemsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for transaction_items.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__transaction_itemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items<T extends Prisma.transaction_items$transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transaction_items$transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsArgs<ExtArgs>>): Prisma.Prisma__transaction_item_custodyClient<runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items<T extends Prisma.transaction_items$transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transaction_items$transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsArgs<ExtArgs>>): Prisma.Prisma__transaction_item_custodyClient<runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    store_games_transaction_items_from_store_id_game_idTostore_games<T extends Prisma.transaction_items$store_games_transaction_items_from_store_id_game_idTostore_gamesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transaction_items$store_games_transaction_items_from_store_id_game_idTostore_gamesArgs<ExtArgs>>): Prisma.Prisma__store_gamesClient<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user_profiles_transaction_items_from_user_idTouser_profiles<T extends Prisma.transaction_items$user_profiles_transaction_items_from_user_idTouser_profilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transaction_items$user_profiles_transaction_items_from_user_idTouser_profilesArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    inventory_items<T extends Prisma.inventory_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    price_snapshots<T extends Prisma.transaction_items$price_snapshotsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transaction_items$price_snapshotsArgs<ExtArgs>>): Prisma.Prisma__price_snapshotsClient<runtime.Types.Result.GetResult<Prisma.$price_snapshotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    inventory_items_transaction_items_result_inventory_item_idToinventory_items<T extends Prisma.transaction_items$inventory_items_transaction_items_result_inventory_item_idToinventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transaction_items$inventory_items_transaction_items_result_inventory_item_idToinventory_itemsArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    store_games_transaction_items_to_store_id_game_idTostore_games<T extends Prisma.transaction_items$store_games_transaction_items_to_store_id_game_idTostore_gamesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transaction_items$store_games_transaction_items_to_store_id_game_idTostore_gamesArgs<ExtArgs>>): Prisma.Prisma__store_gamesClient<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user_profiles_transaction_items_to_user_idTouser_profiles<T extends Prisma.transaction_items$user_profiles_transaction_items_to_user_idTouser_profilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transaction_items$user_profiles_transaction_items_to_user_idTouser_profilesArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    transactions<T extends Prisma.transactionsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transactionsDefaultArgs<ExtArgs>>): Prisma.Prisma__transactionsClient<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the transaction_items model
 */
export interface transaction_itemsFieldRefs {
    readonly id: Prisma.FieldRef<"transaction_items", 'String'>;
    readonly transaction_id: Prisma.FieldRef<"transaction_items", 'String'>;
    readonly inventory_item_id: Prisma.FieldRef<"transaction_items", 'String'>;
    readonly item_role: Prisma.FieldRef<"transaction_items", 'String'>;
    readonly quantity: Prisma.FieldRef<"transaction_items", 'Int'>;
    readonly from_user_id: Prisma.FieldRef<"transaction_items", 'String'>;
    readonly from_store_id: Prisma.FieldRef<"transaction_items", 'String'>;
    readonly to_user_id: Prisma.FieldRef<"transaction_items", 'String'>;
    readonly to_store_id: Prisma.FieldRef<"transaction_items", 'String'>;
    readonly market_snapshot_id: Prisma.FieldRef<"transaction_items", 'String'>;
    readonly agreed_unit_value: Prisma.FieldRef<"transaction_items", 'Decimal'>;
    readonly currency_code: Prisma.FieldRef<"transaction_items", 'String'>;
    readonly created_at: Prisma.FieldRef<"transaction_items", 'DateTime'>;
    readonly result_inventory_item_id: Prisma.FieldRef<"transaction_items", 'String'>;
    readonly game_id: Prisma.FieldRef<"transaction_items", 'String'>;
}
/**
 * transaction_items findUnique
 */
export type transaction_itemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which transaction_items to fetch.
     */
    where: Prisma.transaction_itemsWhereUniqueInput;
};
/**
 * transaction_items findUniqueOrThrow
 */
export type transaction_itemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which transaction_items to fetch.
     */
    where: Prisma.transaction_itemsWhereUniqueInput;
};
/**
 * transaction_items findFirst
 */
export type transaction_itemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which transaction_items to fetch.
     */
    where?: Prisma.transaction_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transaction_items to fetch.
     */
    orderBy?: Prisma.transaction_itemsOrderByWithRelationInput | Prisma.transaction_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for transaction_items.
     */
    cursor?: Prisma.transaction_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transaction_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transaction_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of transaction_items.
     */
    distinct?: Prisma.Transaction_itemsScalarFieldEnum | Prisma.Transaction_itemsScalarFieldEnum[];
};
/**
 * transaction_items findFirstOrThrow
 */
export type transaction_itemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which transaction_items to fetch.
     */
    where?: Prisma.transaction_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transaction_items to fetch.
     */
    orderBy?: Prisma.transaction_itemsOrderByWithRelationInput | Prisma.transaction_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for transaction_items.
     */
    cursor?: Prisma.transaction_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transaction_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transaction_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of transaction_items.
     */
    distinct?: Prisma.Transaction_itemsScalarFieldEnum | Prisma.Transaction_itemsScalarFieldEnum[];
};
/**
 * transaction_items findMany
 */
export type transaction_itemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which transaction_items to fetch.
     */
    where?: Prisma.transaction_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transaction_items to fetch.
     */
    orderBy?: Prisma.transaction_itemsOrderByWithRelationInput | Prisma.transaction_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing transaction_items.
     */
    cursor?: Prisma.transaction_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transaction_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transaction_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of transaction_items.
     */
    distinct?: Prisma.Transaction_itemsScalarFieldEnum | Prisma.Transaction_itemsScalarFieldEnum[];
};
/**
 * transaction_items create
 */
export type transaction_itemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a transaction_items.
     */
    data: Prisma.XOR<Prisma.transaction_itemsCreateInput, Prisma.transaction_itemsUncheckedCreateInput>;
};
/**
 * transaction_items createMany
 */
export type transaction_itemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaction_items.
     */
    data: Prisma.transaction_itemsCreateManyInput | Prisma.transaction_itemsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * transaction_items createManyAndReturn
 */
export type transaction_itemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_items
     */
    select?: Prisma.transaction_itemsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction_items
     */
    omit?: Prisma.transaction_itemsOmit<ExtArgs> | null;
    /**
     * The data used to create many transaction_items.
     */
    data: Prisma.transaction_itemsCreateManyInput | Prisma.transaction_itemsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transaction_itemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * transaction_items update
 */
export type transaction_itemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a transaction_items.
     */
    data: Prisma.XOR<Prisma.transaction_itemsUpdateInput, Prisma.transaction_itemsUncheckedUpdateInput>;
    /**
     * Choose, which transaction_items to update.
     */
    where: Prisma.transaction_itemsWhereUniqueInput;
};
/**
 * transaction_items updateMany
 */
export type transaction_itemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update transaction_items.
     */
    data: Prisma.XOR<Prisma.transaction_itemsUpdateManyMutationInput, Prisma.transaction_itemsUncheckedUpdateManyInput>;
    /**
     * Filter which transaction_items to update
     */
    where?: Prisma.transaction_itemsWhereInput;
    /**
     * Limit how many transaction_items to update.
     */
    limit?: number;
};
/**
 * transaction_items updateManyAndReturn
 */
export type transaction_itemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_items
     */
    select?: Prisma.transaction_itemsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction_items
     */
    omit?: Prisma.transaction_itemsOmit<ExtArgs> | null;
    /**
     * The data used to update transaction_items.
     */
    data: Prisma.XOR<Prisma.transaction_itemsUpdateManyMutationInput, Prisma.transaction_itemsUncheckedUpdateManyInput>;
    /**
     * Filter which transaction_items to update
     */
    where?: Prisma.transaction_itemsWhereInput;
    /**
     * Limit how many transaction_items to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transaction_itemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * transaction_items upsert
 */
export type transaction_itemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the transaction_items to update in case it exists.
     */
    where: Prisma.transaction_itemsWhereUniqueInput;
    /**
     * In case the transaction_items found by the `where` argument doesn't exist, create a new transaction_items with this data.
     */
    create: Prisma.XOR<Prisma.transaction_itemsCreateInput, Prisma.transaction_itemsUncheckedCreateInput>;
    /**
     * In case the transaction_items was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.transaction_itemsUpdateInput, Prisma.transaction_itemsUncheckedUpdateInput>;
};
/**
 * transaction_items delete
 */
export type transaction_itemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which transaction_items to delete.
     */
    where: Prisma.transaction_itemsWhereUniqueInput;
};
/**
 * transaction_items deleteMany
 */
export type transaction_itemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_items to delete
     */
    where?: Prisma.transaction_itemsWhereInput;
    /**
     * Limit how many transaction_items to delete.
     */
    limit?: number;
};
/**
 * transaction_items.transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items
 */
export type transaction_items$transaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_item_custody
     */
    select?: Prisma.transaction_item_custodySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction_item_custody
     */
    omit?: Prisma.transaction_item_custodyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transaction_item_custodyInclude<ExtArgs> | null;
    where?: Prisma.transaction_item_custodyWhereInput;
};
/**
 * transaction_items.transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_items
 */
export type transaction_items$transaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_item_custody
     */
    select?: Prisma.transaction_item_custodySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction_item_custody
     */
    omit?: Prisma.transaction_item_custodyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transaction_item_custodyInclude<ExtArgs> | null;
    where?: Prisma.transaction_item_custodyWhereInput;
};
/**
 * transaction_items.store_games_transaction_items_from_store_id_game_idTostore_games
 */
export type transaction_items$store_games_transaction_items_from_store_id_game_idTostore_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.store_gamesWhereInput;
};
/**
 * transaction_items.user_profiles_transaction_items_from_user_idTouser_profiles
 */
export type transaction_items$user_profiles_transaction_items_from_user_idTouser_profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    where?: Prisma.user_profilesWhereInput;
};
/**
 * transaction_items.price_snapshots
 */
export type transaction_items$price_snapshotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_snapshots
     */
    select?: Prisma.price_snapshotsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the price_snapshots
     */
    omit?: Prisma.price_snapshotsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.price_snapshotsInclude<ExtArgs> | null;
    where?: Prisma.price_snapshotsWhereInput;
};
/**
 * transaction_items.inventory_items_transaction_items_result_inventory_item_idToinventory_items
 */
export type transaction_items$inventory_items_transaction_items_result_inventory_item_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * transaction_items.store_games_transaction_items_to_store_id_game_idTostore_games
 */
export type transaction_items$store_games_transaction_items_to_store_id_game_idTostore_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.store_gamesWhereInput;
};
/**
 * transaction_items.user_profiles_transaction_items_to_user_idTouser_profiles
 */
export type transaction_items$user_profiles_transaction_items_to_user_idTouser_profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: Prisma.user_profilesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.user_profilesInclude<ExtArgs> | null;
    where?: Prisma.user_profilesWhereInput;
};
/**
 * transaction_items without action
 */
export type transaction_itemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
