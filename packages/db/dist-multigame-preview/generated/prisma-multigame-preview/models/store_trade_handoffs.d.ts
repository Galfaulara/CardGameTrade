import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model store_trade_handoffs
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type store_trade_handoffsModel = runtime.Types.Result.DefaultSelection<Prisma.$store_trade_handoffsPayload>;
export type AggregateStore_trade_handoffs = {
    _count: Store_trade_handoffsCountAggregateOutputType | null;
    _min: Store_trade_handoffsMinAggregateOutputType | null;
    _max: Store_trade_handoffsMaxAggregateOutputType | null;
};
export type Store_trade_handoffsMinAggregateOutputType = {
    id: string | null;
    transaction_id: string | null;
    store_id: string | null;
    status: string | null;
    store_notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    completed_at: Date | null;
    cancelled_at: Date | null;
    game_id: string | null;
};
export type Store_trade_handoffsMaxAggregateOutputType = {
    id: string | null;
    transaction_id: string | null;
    store_id: string | null;
    status: string | null;
    store_notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    completed_at: Date | null;
    cancelled_at: Date | null;
    game_id: string | null;
};
export type Store_trade_handoffsCountAggregateOutputType = {
    id: number;
    transaction_id: number;
    store_id: number;
    status: number;
    store_notes: number;
    created_at: number;
    updated_at: number;
    completed_at: number;
    cancelled_at: number;
    game_id: number;
    _all: number;
};
export type Store_trade_handoffsMinAggregateInputType = {
    id?: true;
    transaction_id?: true;
    store_id?: true;
    status?: true;
    store_notes?: true;
    created_at?: true;
    updated_at?: true;
    completed_at?: true;
    cancelled_at?: true;
    game_id?: true;
};
export type Store_trade_handoffsMaxAggregateInputType = {
    id?: true;
    transaction_id?: true;
    store_id?: true;
    status?: true;
    store_notes?: true;
    created_at?: true;
    updated_at?: true;
    completed_at?: true;
    cancelled_at?: true;
    game_id?: true;
};
export type Store_trade_handoffsCountAggregateInputType = {
    id?: true;
    transaction_id?: true;
    store_id?: true;
    status?: true;
    store_notes?: true;
    created_at?: true;
    updated_at?: true;
    completed_at?: true;
    cancelled_at?: true;
    game_id?: true;
    _all?: true;
};
export type Store_trade_handoffsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which store_trade_handoffs to aggregate.
     */
    where?: Prisma.store_trade_handoffsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of store_trade_handoffs to fetch.
     */
    orderBy?: Prisma.store_trade_handoffsOrderByWithRelationInput | Prisma.store_trade_handoffsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.store_trade_handoffsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` store_trade_handoffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` store_trade_handoffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned store_trade_handoffs
    **/
    _count?: true | Store_trade_handoffsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Store_trade_handoffsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Store_trade_handoffsMaxAggregateInputType;
};
export type GetStore_trade_handoffsAggregateType<T extends Store_trade_handoffsAggregateArgs> = {
    [P in keyof T & keyof AggregateStore_trade_handoffs]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStore_trade_handoffs[P]> : Prisma.GetScalarType<T[P], AggregateStore_trade_handoffs[P]>;
};
export type store_trade_handoffsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.store_trade_handoffsWhereInput;
    orderBy?: Prisma.store_trade_handoffsOrderByWithAggregationInput | Prisma.store_trade_handoffsOrderByWithAggregationInput[];
    by: Prisma.Store_trade_handoffsScalarFieldEnum[] | Prisma.Store_trade_handoffsScalarFieldEnum;
    having?: Prisma.store_trade_handoffsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Store_trade_handoffsCountAggregateInputType | true;
    _min?: Store_trade_handoffsMinAggregateInputType;
    _max?: Store_trade_handoffsMaxAggregateInputType;
};
export type Store_trade_handoffsGroupByOutputType = {
    id: string;
    transaction_id: string;
    store_id: string;
    status: string;
    store_notes: string | null;
    created_at: Date;
    updated_at: Date;
    completed_at: Date | null;
    cancelled_at: Date | null;
    game_id: string;
    _count: Store_trade_handoffsCountAggregateOutputType | null;
    _min: Store_trade_handoffsMinAggregateOutputType | null;
    _max: Store_trade_handoffsMaxAggregateOutputType | null;
};
export type GetStore_trade_handoffsGroupByPayload<T extends store_trade_handoffsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Store_trade_handoffsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Store_trade_handoffsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Store_trade_handoffsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Store_trade_handoffsGroupByOutputType[P]>;
}>>;
export type store_trade_handoffsWhereInput = {
    AND?: Prisma.store_trade_handoffsWhereInput | Prisma.store_trade_handoffsWhereInput[];
    OR?: Prisma.store_trade_handoffsWhereInput[];
    NOT?: Prisma.store_trade_handoffsWhereInput | Prisma.store_trade_handoffsWhereInput[];
    id?: Prisma.UuidFilter<"store_trade_handoffs"> | string;
    transaction_id?: Prisma.UuidFilter<"store_trade_handoffs"> | string;
    store_id?: Prisma.UuidFilter<"store_trade_handoffs"> | string;
    status?: Prisma.StringFilter<"store_trade_handoffs"> | string;
    store_notes?: Prisma.StringNullableFilter<"store_trade_handoffs"> | string | null;
    created_at?: Prisma.DateTimeFilter<"store_trade_handoffs"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"store_trade_handoffs"> | Date | string;
    completed_at?: Prisma.DateTimeNullableFilter<"store_trade_handoffs"> | Date | string | null;
    cancelled_at?: Prisma.DateTimeNullableFilter<"store_trade_handoffs"> | Date | string | null;
    game_id?: Prisma.UuidFilter<"store_trade_handoffs"> | string;
    store_games?: Prisma.XOR<Prisma.Store_gamesScalarRelationFilter, Prisma.store_gamesWhereInput>;
    transactions?: Prisma.XOR<Prisma.TransactionsScalarRelationFilter, Prisma.transactionsWhereInput>;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.Transaction_item_custodyListRelationFilter;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.Transaction_item_custodyListRelationFilter;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.Transaction_item_custodyListRelationFilter;
};
export type store_trade_handoffsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    store_notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelled_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    store_games?: Prisma.store_gamesOrderByWithRelationInput;
    transactions?: Prisma.transactionsOrderByWithRelationInput;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyOrderByRelationAggregateInput;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyOrderByRelationAggregateInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyOrderByRelationAggregateInput;
};
export type store_trade_handoffsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    transaction_id?: string;
    id_store_id?: Prisma.store_trade_handoffsIdStore_idCompoundUniqueInput;
    id_transaction_id?: Prisma.store_trade_handoffsIdTransaction_idCompoundUniqueInput;
    AND?: Prisma.store_trade_handoffsWhereInput | Prisma.store_trade_handoffsWhereInput[];
    OR?: Prisma.store_trade_handoffsWhereInput[];
    NOT?: Prisma.store_trade_handoffsWhereInput | Prisma.store_trade_handoffsWhereInput[];
    store_id?: Prisma.UuidFilter<"store_trade_handoffs"> | string;
    status?: Prisma.StringFilter<"store_trade_handoffs"> | string;
    store_notes?: Prisma.StringNullableFilter<"store_trade_handoffs"> | string | null;
    created_at?: Prisma.DateTimeFilter<"store_trade_handoffs"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"store_trade_handoffs"> | Date | string;
    completed_at?: Prisma.DateTimeNullableFilter<"store_trade_handoffs"> | Date | string | null;
    cancelled_at?: Prisma.DateTimeNullableFilter<"store_trade_handoffs"> | Date | string | null;
    game_id?: Prisma.UuidFilter<"store_trade_handoffs"> | string;
    store_games?: Prisma.XOR<Prisma.Store_gamesScalarRelationFilter, Prisma.store_gamesWhereInput>;
    transactions?: Prisma.XOR<Prisma.TransactionsScalarRelationFilter, Prisma.transactionsWhereInput>;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.Transaction_item_custodyListRelationFilter;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.Transaction_item_custodyListRelationFilter;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.Transaction_item_custodyListRelationFilter;
}, "id" | "transaction_id" | "id_store_id" | "id_transaction_id">;
export type store_trade_handoffsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    store_notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelled_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    _count?: Prisma.store_trade_handoffsCountOrderByAggregateInput;
    _max?: Prisma.store_trade_handoffsMaxOrderByAggregateInput;
    _min?: Prisma.store_trade_handoffsMinOrderByAggregateInput;
};
export type store_trade_handoffsScalarWhereWithAggregatesInput = {
    AND?: Prisma.store_trade_handoffsScalarWhereWithAggregatesInput | Prisma.store_trade_handoffsScalarWhereWithAggregatesInput[];
    OR?: Prisma.store_trade_handoffsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.store_trade_handoffsScalarWhereWithAggregatesInput | Prisma.store_trade_handoffsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"store_trade_handoffs"> | string;
    transaction_id?: Prisma.UuidWithAggregatesFilter<"store_trade_handoffs"> | string;
    store_id?: Prisma.UuidWithAggregatesFilter<"store_trade_handoffs"> | string;
    status?: Prisma.StringWithAggregatesFilter<"store_trade_handoffs"> | string;
    store_notes?: Prisma.StringNullableWithAggregatesFilter<"store_trade_handoffs"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"store_trade_handoffs"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"store_trade_handoffs"> | Date | string;
    completed_at?: Prisma.DateTimeNullableWithAggregatesFilter<"store_trade_handoffs"> | Date | string | null;
    cancelled_at?: Prisma.DateTimeNullableWithAggregatesFilter<"store_trade_handoffs"> | Date | string | null;
    game_id?: Prisma.UuidWithAggregatesFilter<"store_trade_handoffs"> | string;
};
export type store_trade_handoffsCreateInput = {
    id?: string;
    status?: string;
    store_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    completed_at?: Date | string | null;
    cancelled_at?: Date | string | null;
    store_games: Prisma.store_gamesCreateNestedOneWithoutStore_trade_handoffsInput;
    transactions: Prisma.transactionsCreateNestedOneWithoutStore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
};
export type store_trade_handoffsUncheckedCreateInput = {
    id?: string;
    transaction_id: string;
    store_id: string;
    status?: string;
    store_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    completed_at?: Date | string | null;
    cancelled_at?: Date | string | null;
    game_id: string;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
};
export type store_trade_handoffsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    store_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    store_games?: Prisma.store_gamesUpdateOneRequiredWithoutStore_trade_handoffsNestedInput;
    transactions?: Prisma.transactionsUpdateOneRequiredWithoutStore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput;
};
export type store_trade_handoffsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    store_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput;
};
export type store_trade_handoffsCreateManyInput = {
    id?: string;
    transaction_id: string;
    store_id: string;
    status?: string;
    store_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    completed_at?: Date | string | null;
    cancelled_at?: Date | string | null;
    game_id: string;
};
export type store_trade_handoffsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    store_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type store_trade_handoffsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    store_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type store_trade_handoffsIdStore_idCompoundUniqueInput = {
    id: string;
    store_id: string;
};
export type store_trade_handoffsIdTransaction_idCompoundUniqueInput = {
    id: string;
    transaction_id: string;
};
export type store_trade_handoffsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    store_notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    cancelled_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type store_trade_handoffsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    store_notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    cancelled_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type store_trade_handoffsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    store_notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    cancelled_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type Store_trade_handoffsScalarRelationFilter = {
    is?: Prisma.store_trade_handoffsWhereInput;
    isNot?: Prisma.store_trade_handoffsWhereInput;
};
export type Store_trade_handoffsListRelationFilter = {
    every?: Prisma.store_trade_handoffsWhereInput;
    some?: Prisma.store_trade_handoffsWhereInput;
    none?: Prisma.store_trade_handoffsWhereInput;
};
export type store_trade_handoffsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    create?: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput>;
    connectOrCreate?: Prisma.store_trade_handoffsCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    connect?: Prisma.store_trade_handoffsWhereUniqueInput;
};
export type store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    create?: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput>;
    connectOrCreate?: Prisma.store_trade_handoffsCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
    connect?: Prisma.store_trade_handoffsWhereUniqueInput;
};
export type store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    create?: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput>;
    connectOrCreate?: Prisma.store_trade_handoffsCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
    connect?: Prisma.store_trade_handoffsWhereUniqueInput;
};
export type store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput = {
    create?: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput>;
    connectOrCreate?: Prisma.store_trade_handoffsCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    upsert?: Prisma.store_trade_handoffsUpsertWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    connect?: Prisma.store_trade_handoffsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_trade_handoffsUpdateToOneWithWhereWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput>, Prisma.store_trade_handoffsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput>;
};
export type store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput = {
    create?: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput>;
    connectOrCreate?: Prisma.store_trade_handoffsCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
    upsert?: Prisma.store_trade_handoffsUpsertWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
    connect?: Prisma.store_trade_handoffsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_trade_handoffsUpdateToOneWithWhereWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput>, Prisma.store_trade_handoffsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput>;
};
export type store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput = {
    create?: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput>;
    connectOrCreate?: Prisma.store_trade_handoffsCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
    upsert?: Prisma.store_trade_handoffsUpsertWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
    connect?: Prisma.store_trade_handoffsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.store_trade_handoffsUpdateToOneWithWhereWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput>, Prisma.store_trade_handoffsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput>;
};
export type store_trade_handoffsCreateNestedManyWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutTransactionsInput, Prisma.store_trade_handoffsUncheckedCreateWithoutTransactionsInput> | Prisma.store_trade_handoffsCreateWithoutTransactionsInput[] | Prisma.store_trade_handoffsUncheckedCreateWithoutTransactionsInput[];
    connectOrCreate?: Prisma.store_trade_handoffsCreateOrConnectWithoutTransactionsInput | Prisma.store_trade_handoffsCreateOrConnectWithoutTransactionsInput[];
    createMany?: Prisma.store_trade_handoffsCreateManyTransactionsInputEnvelope;
    connect?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
};
export type store_trade_handoffsUncheckedCreateNestedManyWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutTransactionsInput, Prisma.store_trade_handoffsUncheckedCreateWithoutTransactionsInput> | Prisma.store_trade_handoffsCreateWithoutTransactionsInput[] | Prisma.store_trade_handoffsUncheckedCreateWithoutTransactionsInput[];
    connectOrCreate?: Prisma.store_trade_handoffsCreateOrConnectWithoutTransactionsInput | Prisma.store_trade_handoffsCreateOrConnectWithoutTransactionsInput[];
    createMany?: Prisma.store_trade_handoffsCreateManyTransactionsInputEnvelope;
    connect?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
};
export type store_trade_handoffsUpdateManyWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutTransactionsInput, Prisma.store_trade_handoffsUncheckedCreateWithoutTransactionsInput> | Prisma.store_trade_handoffsCreateWithoutTransactionsInput[] | Prisma.store_trade_handoffsUncheckedCreateWithoutTransactionsInput[];
    connectOrCreate?: Prisma.store_trade_handoffsCreateOrConnectWithoutTransactionsInput | Prisma.store_trade_handoffsCreateOrConnectWithoutTransactionsInput[];
    upsert?: Prisma.store_trade_handoffsUpsertWithWhereUniqueWithoutTransactionsInput | Prisma.store_trade_handoffsUpsertWithWhereUniqueWithoutTransactionsInput[];
    createMany?: Prisma.store_trade_handoffsCreateManyTransactionsInputEnvelope;
    set?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
    disconnect?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
    delete?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
    connect?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
    update?: Prisma.store_trade_handoffsUpdateWithWhereUniqueWithoutTransactionsInput | Prisma.store_trade_handoffsUpdateWithWhereUniqueWithoutTransactionsInput[];
    updateMany?: Prisma.store_trade_handoffsUpdateManyWithWhereWithoutTransactionsInput | Prisma.store_trade_handoffsUpdateManyWithWhereWithoutTransactionsInput[];
    deleteMany?: Prisma.store_trade_handoffsScalarWhereInput | Prisma.store_trade_handoffsScalarWhereInput[];
};
export type store_trade_handoffsUncheckedUpdateManyWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutTransactionsInput, Prisma.store_trade_handoffsUncheckedCreateWithoutTransactionsInput> | Prisma.store_trade_handoffsCreateWithoutTransactionsInput[] | Prisma.store_trade_handoffsUncheckedCreateWithoutTransactionsInput[];
    connectOrCreate?: Prisma.store_trade_handoffsCreateOrConnectWithoutTransactionsInput | Prisma.store_trade_handoffsCreateOrConnectWithoutTransactionsInput[];
    upsert?: Prisma.store_trade_handoffsUpsertWithWhereUniqueWithoutTransactionsInput | Prisma.store_trade_handoffsUpsertWithWhereUniqueWithoutTransactionsInput[];
    createMany?: Prisma.store_trade_handoffsCreateManyTransactionsInputEnvelope;
    set?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
    disconnect?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
    delete?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
    connect?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
    update?: Prisma.store_trade_handoffsUpdateWithWhereUniqueWithoutTransactionsInput | Prisma.store_trade_handoffsUpdateWithWhereUniqueWithoutTransactionsInput[];
    updateMany?: Prisma.store_trade_handoffsUpdateManyWithWhereWithoutTransactionsInput | Prisma.store_trade_handoffsUpdateManyWithWhereWithoutTransactionsInput[];
    deleteMany?: Prisma.store_trade_handoffsScalarWhereInput | Prisma.store_trade_handoffsScalarWhereInput[];
};
export type store_trade_handoffsCreateNestedManyWithoutStore_gamesInput = {
    create?: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutStore_gamesInput, Prisma.store_trade_handoffsUncheckedCreateWithoutStore_gamesInput> | Prisma.store_trade_handoffsCreateWithoutStore_gamesInput[] | Prisma.store_trade_handoffsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.store_trade_handoffsCreateOrConnectWithoutStore_gamesInput | Prisma.store_trade_handoffsCreateOrConnectWithoutStore_gamesInput[];
    createMany?: Prisma.store_trade_handoffsCreateManyStore_gamesInputEnvelope;
    connect?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
};
export type store_trade_handoffsUncheckedCreateNestedManyWithoutStore_gamesInput = {
    create?: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutStore_gamesInput, Prisma.store_trade_handoffsUncheckedCreateWithoutStore_gamesInput> | Prisma.store_trade_handoffsCreateWithoutStore_gamesInput[] | Prisma.store_trade_handoffsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.store_trade_handoffsCreateOrConnectWithoutStore_gamesInput | Prisma.store_trade_handoffsCreateOrConnectWithoutStore_gamesInput[];
    createMany?: Prisma.store_trade_handoffsCreateManyStore_gamesInputEnvelope;
    connect?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
};
export type store_trade_handoffsUpdateManyWithoutStore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutStore_gamesInput, Prisma.store_trade_handoffsUncheckedCreateWithoutStore_gamesInput> | Prisma.store_trade_handoffsCreateWithoutStore_gamesInput[] | Prisma.store_trade_handoffsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.store_trade_handoffsCreateOrConnectWithoutStore_gamesInput | Prisma.store_trade_handoffsCreateOrConnectWithoutStore_gamesInput[];
    upsert?: Prisma.store_trade_handoffsUpsertWithWhereUniqueWithoutStore_gamesInput | Prisma.store_trade_handoffsUpsertWithWhereUniqueWithoutStore_gamesInput[];
    createMany?: Prisma.store_trade_handoffsCreateManyStore_gamesInputEnvelope;
    set?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
    disconnect?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
    delete?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
    connect?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
    update?: Prisma.store_trade_handoffsUpdateWithWhereUniqueWithoutStore_gamesInput | Prisma.store_trade_handoffsUpdateWithWhereUniqueWithoutStore_gamesInput[];
    updateMany?: Prisma.store_trade_handoffsUpdateManyWithWhereWithoutStore_gamesInput | Prisma.store_trade_handoffsUpdateManyWithWhereWithoutStore_gamesInput[];
    deleteMany?: Prisma.store_trade_handoffsScalarWhereInput | Prisma.store_trade_handoffsScalarWhereInput[];
};
export type store_trade_handoffsUncheckedUpdateManyWithoutStore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutStore_gamesInput, Prisma.store_trade_handoffsUncheckedCreateWithoutStore_gamesInput> | Prisma.store_trade_handoffsCreateWithoutStore_gamesInput[] | Prisma.store_trade_handoffsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.store_trade_handoffsCreateOrConnectWithoutStore_gamesInput | Prisma.store_trade_handoffsCreateOrConnectWithoutStore_gamesInput[];
    upsert?: Prisma.store_trade_handoffsUpsertWithWhereUniqueWithoutStore_gamesInput | Prisma.store_trade_handoffsUpsertWithWhereUniqueWithoutStore_gamesInput[];
    createMany?: Prisma.store_trade_handoffsCreateManyStore_gamesInputEnvelope;
    set?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
    disconnect?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
    delete?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
    connect?: Prisma.store_trade_handoffsWhereUniqueInput | Prisma.store_trade_handoffsWhereUniqueInput[];
    update?: Prisma.store_trade_handoffsUpdateWithWhereUniqueWithoutStore_gamesInput | Prisma.store_trade_handoffsUpdateWithWhereUniqueWithoutStore_gamesInput[];
    updateMany?: Prisma.store_trade_handoffsUpdateManyWithWhereWithoutStore_gamesInput | Prisma.store_trade_handoffsUpdateManyWithWhereWithoutStore_gamesInput[];
    deleteMany?: Prisma.store_trade_handoffsScalarWhereInput | Prisma.store_trade_handoffsScalarWhereInput[];
};
export type store_trade_handoffsCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    id?: string;
    status?: string;
    store_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    completed_at?: Date | string | null;
    cancelled_at?: Date | string | null;
    store_games: Prisma.store_gamesCreateNestedOneWithoutStore_trade_handoffsInput;
    transactions: Prisma.transactionsCreateNestedOneWithoutStore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
};
export type store_trade_handoffsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    id?: string;
    transaction_id: string;
    store_id: string;
    status?: string;
    store_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    completed_at?: Date | string | null;
    cancelled_at?: Date | string | null;
    game_id: string;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
};
export type store_trade_handoffsCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    where: Prisma.store_trade_handoffsWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput>;
};
export type store_trade_handoffsCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    id?: string;
    status?: string;
    store_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    completed_at?: Date | string | null;
    cancelled_at?: Date | string | null;
    store_games: Prisma.store_gamesCreateNestedOneWithoutStore_trade_handoffsInput;
    transactions: Prisma.transactionsCreateNestedOneWithoutStore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
};
export type store_trade_handoffsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    id?: string;
    transaction_id: string;
    store_id: string;
    status?: string;
    store_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    completed_at?: Date | string | null;
    cancelled_at?: Date | string | null;
    game_id: string;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
};
export type store_trade_handoffsCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    where: Prisma.store_trade_handoffsWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput>;
};
export type store_trade_handoffsCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    id?: string;
    status?: string;
    store_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    completed_at?: Date | string | null;
    cancelled_at?: Date | string | null;
    store_games: Prisma.store_gamesCreateNestedOneWithoutStore_trade_handoffsInput;
    transactions: Prisma.transactionsCreateNestedOneWithoutStore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
};
export type store_trade_handoffsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    id?: string;
    transaction_id: string;
    store_id: string;
    status?: string;
    store_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    completed_at?: Date | string | null;
    cancelled_at?: Date | string | null;
    game_id: string;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
};
export type store_trade_handoffsCreateOrConnectWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    where: Prisma.store_trade_handoffsWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput>;
};
export type store_trade_handoffsUpsertWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    update: Prisma.XOR<Prisma.store_trade_handoffsUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput>;
    create: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput>;
    where?: Prisma.store_trade_handoffsWhereInput;
};
export type store_trade_handoffsUpdateToOneWithWhereWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    where?: Prisma.store_trade_handoffsWhereInput;
    data: Prisma.XOR<Prisma.store_trade_handoffsUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput>;
};
export type store_trade_handoffsUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    store_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    store_games?: Prisma.store_gamesUpdateOneRequiredWithoutStore_trade_handoffsNestedInput;
    transactions?: Prisma.transactionsUpdateOneRequiredWithoutStore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput;
};
export type store_trade_handoffsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    store_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput;
};
export type store_trade_handoffsUpsertWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    update: Prisma.XOR<Prisma.store_trade_handoffsUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput>;
    create: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput>;
    where?: Prisma.store_trade_handoffsWhereInput;
};
export type store_trade_handoffsUpdateToOneWithWhereWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    where?: Prisma.store_trade_handoffsWhereInput;
    data: Prisma.XOR<Prisma.store_trade_handoffsUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput>;
};
export type store_trade_handoffsUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    store_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    store_games?: Prisma.store_gamesUpdateOneRequiredWithoutStore_trade_handoffsNestedInput;
    transactions?: Prisma.transactionsUpdateOneRequiredWithoutStore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput;
};
export type store_trade_handoffsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    store_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput;
};
export type store_trade_handoffsUpsertWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    update: Prisma.XOR<Prisma.store_trade_handoffsUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput>;
    create: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUncheckedCreateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput>;
    where?: Prisma.store_trade_handoffsWhereInput;
};
export type store_trade_handoffsUpdateToOneWithWhereWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    where?: Prisma.store_trade_handoffsWhereInput;
    data: Prisma.XOR<Prisma.store_trade_handoffsUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput, Prisma.store_trade_handoffsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput>;
};
export type store_trade_handoffsUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    store_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    store_games?: Prisma.store_gamesUpdateOneRequiredWithoutStore_trade_handoffsNestedInput;
    transactions?: Prisma.transactionsUpdateOneRequiredWithoutStore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput;
};
export type store_trade_handoffsUncheckedUpdateWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    store_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput;
};
export type store_trade_handoffsCreateWithoutTransactionsInput = {
    id?: string;
    status?: string;
    store_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    completed_at?: Date | string | null;
    cancelled_at?: Date | string | null;
    store_games: Prisma.store_gamesCreateNestedOneWithoutStore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
};
export type store_trade_handoffsUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    store_id: string;
    status?: string;
    store_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    completed_at?: Date | string | null;
    cancelled_at?: Date | string | null;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
};
export type store_trade_handoffsCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.store_trade_handoffsWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutTransactionsInput, Prisma.store_trade_handoffsUncheckedCreateWithoutTransactionsInput>;
};
export type store_trade_handoffsCreateManyTransactionsInputEnvelope = {
    data: Prisma.store_trade_handoffsCreateManyTransactionsInput | Prisma.store_trade_handoffsCreateManyTransactionsInput[];
    skipDuplicates?: boolean;
};
export type store_trade_handoffsUpsertWithWhereUniqueWithoutTransactionsInput = {
    where: Prisma.store_trade_handoffsWhereUniqueInput;
    update: Prisma.XOR<Prisma.store_trade_handoffsUpdateWithoutTransactionsInput, Prisma.store_trade_handoffsUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutTransactionsInput, Prisma.store_trade_handoffsUncheckedCreateWithoutTransactionsInput>;
};
export type store_trade_handoffsUpdateWithWhereUniqueWithoutTransactionsInput = {
    where: Prisma.store_trade_handoffsWhereUniqueInput;
    data: Prisma.XOR<Prisma.store_trade_handoffsUpdateWithoutTransactionsInput, Prisma.store_trade_handoffsUncheckedUpdateWithoutTransactionsInput>;
};
export type store_trade_handoffsUpdateManyWithWhereWithoutTransactionsInput = {
    where: Prisma.store_trade_handoffsScalarWhereInput;
    data: Prisma.XOR<Prisma.store_trade_handoffsUpdateManyMutationInput, Prisma.store_trade_handoffsUncheckedUpdateManyWithoutTransactionsInput>;
};
export type store_trade_handoffsScalarWhereInput = {
    AND?: Prisma.store_trade_handoffsScalarWhereInput | Prisma.store_trade_handoffsScalarWhereInput[];
    OR?: Prisma.store_trade_handoffsScalarWhereInput[];
    NOT?: Prisma.store_trade_handoffsScalarWhereInput | Prisma.store_trade_handoffsScalarWhereInput[];
    id?: Prisma.UuidFilter<"store_trade_handoffs"> | string;
    transaction_id?: Prisma.UuidFilter<"store_trade_handoffs"> | string;
    store_id?: Prisma.UuidFilter<"store_trade_handoffs"> | string;
    status?: Prisma.StringFilter<"store_trade_handoffs"> | string;
    store_notes?: Prisma.StringNullableFilter<"store_trade_handoffs"> | string | null;
    created_at?: Prisma.DateTimeFilter<"store_trade_handoffs"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"store_trade_handoffs"> | Date | string;
    completed_at?: Prisma.DateTimeNullableFilter<"store_trade_handoffs"> | Date | string | null;
    cancelled_at?: Prisma.DateTimeNullableFilter<"store_trade_handoffs"> | Date | string | null;
    game_id?: Prisma.UuidFilter<"store_trade_handoffs"> | string;
};
export type store_trade_handoffsCreateWithoutStore_gamesInput = {
    id?: string;
    status?: string;
    store_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    completed_at?: Date | string | null;
    cancelled_at?: Date | string | null;
    transactions: Prisma.transactionsCreateNestedOneWithoutStore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
};
export type store_trade_handoffsUncheckedCreateWithoutStore_gamesInput = {
    id?: string;
    transaction_id: string;
    status?: string;
    store_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    completed_at?: Date | string | null;
    cancelled_at?: Date | string | null;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
};
export type store_trade_handoffsCreateOrConnectWithoutStore_gamesInput = {
    where: Prisma.store_trade_handoffsWhereUniqueInput;
    create: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutStore_gamesInput, Prisma.store_trade_handoffsUncheckedCreateWithoutStore_gamesInput>;
};
export type store_trade_handoffsCreateManyStore_gamesInputEnvelope = {
    data: Prisma.store_trade_handoffsCreateManyStore_gamesInput | Prisma.store_trade_handoffsCreateManyStore_gamesInput[];
    skipDuplicates?: boolean;
};
export type store_trade_handoffsUpsertWithWhereUniqueWithoutStore_gamesInput = {
    where: Prisma.store_trade_handoffsWhereUniqueInput;
    update: Prisma.XOR<Prisma.store_trade_handoffsUpdateWithoutStore_gamesInput, Prisma.store_trade_handoffsUncheckedUpdateWithoutStore_gamesInput>;
    create: Prisma.XOR<Prisma.store_trade_handoffsCreateWithoutStore_gamesInput, Prisma.store_trade_handoffsUncheckedCreateWithoutStore_gamesInput>;
};
export type store_trade_handoffsUpdateWithWhereUniqueWithoutStore_gamesInput = {
    where: Prisma.store_trade_handoffsWhereUniqueInput;
    data: Prisma.XOR<Prisma.store_trade_handoffsUpdateWithoutStore_gamesInput, Prisma.store_trade_handoffsUncheckedUpdateWithoutStore_gamesInput>;
};
export type store_trade_handoffsUpdateManyWithWhereWithoutStore_gamesInput = {
    where: Prisma.store_trade_handoffsScalarWhereInput;
    data: Prisma.XOR<Prisma.store_trade_handoffsUpdateManyMutationInput, Prisma.store_trade_handoffsUncheckedUpdateManyWithoutStore_gamesInput>;
};
export type store_trade_handoffsCreateManyTransactionsInput = {
    id?: string;
    store_id: string;
    status?: string;
    store_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    completed_at?: Date | string | null;
    cancelled_at?: Date | string | null;
};
export type store_trade_handoffsUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    store_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    store_games?: Prisma.store_gamesUpdateOneRequiredWithoutStore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput;
};
export type store_trade_handoffsUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    store_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput;
};
export type store_trade_handoffsUncheckedUpdateManyWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    store_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type store_trade_handoffsCreateManyStore_gamesInput = {
    id?: string;
    transaction_id: string;
    status?: string;
    store_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    completed_at?: Date | string | null;
    cancelled_at?: Date | string | null;
};
export type store_trade_handoffsUpdateWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    store_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    transactions?: Prisma.transactionsUpdateOneRequiredWithoutStore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput;
};
export type store_trade_handoffsUncheckedUpdateWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    store_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput;
};
export type store_trade_handoffsUncheckedUpdateManyWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    store_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type Store_trade_handoffsCountOutputType
 */
export type Store_trade_handoffsCountOutputType = {
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs: number;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs: number;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs: number;
};
export type Store_trade_handoffsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: boolean | Store_trade_handoffsCountOutputTypeCountTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsArgs;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: boolean | Store_trade_handoffsCountOutputTypeCountTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsArgs;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: boolean | Store_trade_handoffsCountOutputTypeCountTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsArgs;
};
/**
 * Store_trade_handoffsCountOutputType without action
 */
export type Store_trade_handoffsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store_trade_handoffsCountOutputType
     */
    select?: Prisma.Store_trade_handoffsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Store_trade_handoffsCountOutputType without action
 */
export type Store_trade_handoffsCountOutputTypeCountTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transaction_item_custodyWhereInput;
};
/**
 * Store_trade_handoffsCountOutputType without action
 */
export type Store_trade_handoffsCountOutputTypeCountTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transaction_item_custodyWhereInput;
};
/**
 * Store_trade_handoffsCountOutputType without action
 */
export type Store_trade_handoffsCountOutputTypeCountTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transaction_item_custodyWhereInput;
};
export type store_trade_handoffsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transaction_id?: boolean;
    store_id?: boolean;
    status?: boolean;
    store_notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    completed_at?: boolean;
    cancelled_at?: boolean;
    game_id?: boolean;
    store_games?: boolean | Prisma.store_gamesDefaultArgs<ExtArgs>;
    transactions?: boolean | Prisma.transactionsDefaultArgs<ExtArgs>;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffs$transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsArgs<ExtArgs>;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffs$transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsArgs<ExtArgs>;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffs$transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsArgs<ExtArgs>;
    _count?: boolean | Prisma.Store_trade_handoffsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["store_trade_handoffs"]>;
export type store_trade_handoffsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transaction_id?: boolean;
    store_id?: boolean;
    status?: boolean;
    store_notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    completed_at?: boolean;
    cancelled_at?: boolean;
    game_id?: boolean;
    store_games?: boolean | Prisma.store_gamesDefaultArgs<ExtArgs>;
    transactions?: boolean | Prisma.transactionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["store_trade_handoffs"]>;
export type store_trade_handoffsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transaction_id?: boolean;
    store_id?: boolean;
    status?: boolean;
    store_notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    completed_at?: boolean;
    cancelled_at?: boolean;
    game_id?: boolean;
    store_games?: boolean | Prisma.store_gamesDefaultArgs<ExtArgs>;
    transactions?: boolean | Prisma.transactionsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["store_trade_handoffs"]>;
export type store_trade_handoffsSelectScalar = {
    id?: boolean;
    transaction_id?: boolean;
    store_id?: boolean;
    status?: boolean;
    store_notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    completed_at?: boolean;
    cancelled_at?: boolean;
    game_id?: boolean;
};
export type store_trade_handoffsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "transaction_id" | "store_id" | "status" | "store_notes" | "created_at" | "updated_at" | "completed_at" | "cancelled_at" | "game_id", ExtArgs["result"]["store_trade_handoffs"]>;
export type store_trade_handoffsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_games?: boolean | Prisma.store_gamesDefaultArgs<ExtArgs>;
    transactions?: boolean | Prisma.transactionsDefaultArgs<ExtArgs>;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffs$transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsArgs<ExtArgs>;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffs$transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsArgs<ExtArgs>;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffs$transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsArgs<ExtArgs>;
    _count?: boolean | Prisma.Store_trade_handoffsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type store_trade_handoffsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_games?: boolean | Prisma.store_gamesDefaultArgs<ExtArgs>;
    transactions?: boolean | Prisma.transactionsDefaultArgs<ExtArgs>;
};
export type store_trade_handoffsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_games?: boolean | Prisma.store_gamesDefaultArgs<ExtArgs>;
    transactions?: boolean | Prisma.transactionsDefaultArgs<ExtArgs>;
};
export type $store_trade_handoffsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "store_trade_handoffs";
    objects: {
        store_games: Prisma.$store_gamesPayload<ExtArgs>;
        transactions: Prisma.$transactionsPayload<ExtArgs>;
        transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs: Prisma.$transaction_item_custodyPayload<ExtArgs>[];
        transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs: Prisma.$transaction_item_custodyPayload<ExtArgs>[];
        transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs: Prisma.$transaction_item_custodyPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        transaction_id: string;
        store_id: string;
        status: string;
        store_notes: string | null;
        created_at: Date;
        updated_at: Date;
        completed_at: Date | null;
        cancelled_at: Date | null;
        game_id: string;
    }, ExtArgs["result"]["store_trade_handoffs"]>;
    composites: {};
};
export type store_trade_handoffsGetPayload<S extends boolean | null | undefined | store_trade_handoffsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$store_trade_handoffsPayload, S>;
export type store_trade_handoffsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<store_trade_handoffsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Store_trade_handoffsCountAggregateInputType | true;
};
export interface store_trade_handoffsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['store_trade_handoffs'];
        meta: {
            name: 'store_trade_handoffs';
        };
    };
    /**
     * Find zero or one Store_trade_handoffs that matches the filter.
     * @param {store_trade_handoffsFindUniqueArgs} args - Arguments to find a Store_trade_handoffs
     * @example
     * // Get one Store_trade_handoffs
     * const store_trade_handoffs = await prisma.store_trade_handoffs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends store_trade_handoffsFindUniqueArgs>(args: Prisma.SelectSubset<T, store_trade_handoffsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__store_trade_handoffsClient<runtime.Types.Result.GetResult<Prisma.$store_trade_handoffsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Store_trade_handoffs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {store_trade_handoffsFindUniqueOrThrowArgs} args - Arguments to find a Store_trade_handoffs
     * @example
     * // Get one Store_trade_handoffs
     * const store_trade_handoffs = await prisma.store_trade_handoffs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends store_trade_handoffsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, store_trade_handoffsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__store_trade_handoffsClient<runtime.Types.Result.GetResult<Prisma.$store_trade_handoffsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Store_trade_handoffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_trade_handoffsFindFirstArgs} args - Arguments to find a Store_trade_handoffs
     * @example
     * // Get one Store_trade_handoffs
     * const store_trade_handoffs = await prisma.store_trade_handoffs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends store_trade_handoffsFindFirstArgs>(args?: Prisma.SelectSubset<T, store_trade_handoffsFindFirstArgs<ExtArgs>>): Prisma.Prisma__store_trade_handoffsClient<runtime.Types.Result.GetResult<Prisma.$store_trade_handoffsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Store_trade_handoffs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_trade_handoffsFindFirstOrThrowArgs} args - Arguments to find a Store_trade_handoffs
     * @example
     * // Get one Store_trade_handoffs
     * const store_trade_handoffs = await prisma.store_trade_handoffs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends store_trade_handoffsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, store_trade_handoffsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__store_trade_handoffsClient<runtime.Types.Result.GetResult<Prisma.$store_trade_handoffsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Store_trade_handoffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_trade_handoffsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Store_trade_handoffs
     * const store_trade_handoffs = await prisma.store_trade_handoffs.findMany()
     *
     * // Get first 10 Store_trade_handoffs
     * const store_trade_handoffs = await prisma.store_trade_handoffs.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const store_trade_handoffsWithIdOnly = await prisma.store_trade_handoffs.findMany({ select: { id: true } })
     *
     */
    findMany<T extends store_trade_handoffsFindManyArgs>(args?: Prisma.SelectSubset<T, store_trade_handoffsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$store_trade_handoffsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Store_trade_handoffs.
     * @param {store_trade_handoffsCreateArgs} args - Arguments to create a Store_trade_handoffs.
     * @example
     * // Create one Store_trade_handoffs
     * const Store_trade_handoffs = await prisma.store_trade_handoffs.create({
     *   data: {
     *     // ... data to create a Store_trade_handoffs
     *   }
     * })
     *
     */
    create<T extends store_trade_handoffsCreateArgs>(args: Prisma.SelectSubset<T, store_trade_handoffsCreateArgs<ExtArgs>>): Prisma.Prisma__store_trade_handoffsClient<runtime.Types.Result.GetResult<Prisma.$store_trade_handoffsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Store_trade_handoffs.
     * @param {store_trade_handoffsCreateManyArgs} args - Arguments to create many Store_trade_handoffs.
     * @example
     * // Create many Store_trade_handoffs
     * const store_trade_handoffs = await prisma.store_trade_handoffs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends store_trade_handoffsCreateManyArgs>(args?: Prisma.SelectSubset<T, store_trade_handoffsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Store_trade_handoffs and returns the data saved in the database.
     * @param {store_trade_handoffsCreateManyAndReturnArgs} args - Arguments to create many Store_trade_handoffs.
     * @example
     * // Create many Store_trade_handoffs
     * const store_trade_handoffs = await prisma.store_trade_handoffs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Store_trade_handoffs and only return the `id`
     * const store_trade_handoffsWithIdOnly = await prisma.store_trade_handoffs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends store_trade_handoffsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, store_trade_handoffsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$store_trade_handoffsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Store_trade_handoffs.
     * @param {store_trade_handoffsDeleteArgs} args - Arguments to delete one Store_trade_handoffs.
     * @example
     * // Delete one Store_trade_handoffs
     * const Store_trade_handoffs = await prisma.store_trade_handoffs.delete({
     *   where: {
     *     // ... filter to delete one Store_trade_handoffs
     *   }
     * })
     *
     */
    delete<T extends store_trade_handoffsDeleteArgs>(args: Prisma.SelectSubset<T, store_trade_handoffsDeleteArgs<ExtArgs>>): Prisma.Prisma__store_trade_handoffsClient<runtime.Types.Result.GetResult<Prisma.$store_trade_handoffsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Store_trade_handoffs.
     * @param {store_trade_handoffsUpdateArgs} args - Arguments to update one Store_trade_handoffs.
     * @example
     * // Update one Store_trade_handoffs
     * const store_trade_handoffs = await prisma.store_trade_handoffs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends store_trade_handoffsUpdateArgs>(args: Prisma.SelectSubset<T, store_trade_handoffsUpdateArgs<ExtArgs>>): Prisma.Prisma__store_trade_handoffsClient<runtime.Types.Result.GetResult<Prisma.$store_trade_handoffsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Store_trade_handoffs.
     * @param {store_trade_handoffsDeleteManyArgs} args - Arguments to filter Store_trade_handoffs to delete.
     * @example
     * // Delete a few Store_trade_handoffs
     * const { count } = await prisma.store_trade_handoffs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends store_trade_handoffsDeleteManyArgs>(args?: Prisma.SelectSubset<T, store_trade_handoffsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Store_trade_handoffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_trade_handoffsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Store_trade_handoffs
     * const store_trade_handoffs = await prisma.store_trade_handoffs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends store_trade_handoffsUpdateManyArgs>(args: Prisma.SelectSubset<T, store_trade_handoffsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Store_trade_handoffs and returns the data updated in the database.
     * @param {store_trade_handoffsUpdateManyAndReturnArgs} args - Arguments to update many Store_trade_handoffs.
     * @example
     * // Update many Store_trade_handoffs
     * const store_trade_handoffs = await prisma.store_trade_handoffs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Store_trade_handoffs and only return the `id`
     * const store_trade_handoffsWithIdOnly = await prisma.store_trade_handoffs.updateManyAndReturn({
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
    updateManyAndReturn<T extends store_trade_handoffsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, store_trade_handoffsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$store_trade_handoffsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Store_trade_handoffs.
     * @param {store_trade_handoffsUpsertArgs} args - Arguments to update or create a Store_trade_handoffs.
     * @example
     * // Update or create a Store_trade_handoffs
     * const store_trade_handoffs = await prisma.store_trade_handoffs.upsert({
     *   create: {
     *     // ... data to create a Store_trade_handoffs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store_trade_handoffs we want to update
     *   }
     * })
     */
    upsert<T extends store_trade_handoffsUpsertArgs>(args: Prisma.SelectSubset<T, store_trade_handoffsUpsertArgs<ExtArgs>>): Prisma.Prisma__store_trade_handoffsClient<runtime.Types.Result.GetResult<Prisma.$store_trade_handoffsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Store_trade_handoffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_trade_handoffsCountArgs} args - Arguments to filter Store_trade_handoffs to count.
     * @example
     * // Count the number of Store_trade_handoffs
     * const count = await prisma.store_trade_handoffs.count({
     *   where: {
     *     // ... the filter for the Store_trade_handoffs we want to count
     *   }
     * })
    **/
    count<T extends store_trade_handoffsCountArgs>(args?: Prisma.Subset<T, store_trade_handoffsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Store_trade_handoffsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Store_trade_handoffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Store_trade_handoffsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Store_trade_handoffsAggregateArgs>(args: Prisma.Subset<T, Store_trade_handoffsAggregateArgs>): Prisma.PrismaPromise<GetStore_trade_handoffsAggregateType<T>>;
    /**
     * Group by Store_trade_handoffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {store_trade_handoffsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends store_trade_handoffsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: store_trade_handoffsGroupByArgs['orderBy'];
    } : {
        orderBy?: store_trade_handoffsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, store_trade_handoffsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStore_trade_handoffsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the store_trade_handoffs model
     */
    readonly fields: store_trade_handoffsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for store_trade_handoffs.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__store_trade_handoffsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    store_games<T extends Prisma.store_gamesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_gamesDefaultArgs<ExtArgs>>): Prisma.Prisma__store_gamesClient<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    transactions<T extends Prisma.transactionsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transactionsDefaultArgs<ExtArgs>>): Prisma.Prisma__transactionsClient<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs<T extends Prisma.store_trade_handoffs$transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_trade_handoffs$transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs<T extends Prisma.store_trade_handoffs$transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_trade_handoffs$transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs<T extends Prisma.store_trade_handoffs$transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_trade_handoffs$transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the store_trade_handoffs model
 */
export interface store_trade_handoffsFieldRefs {
    readonly id: Prisma.FieldRef<"store_trade_handoffs", 'String'>;
    readonly transaction_id: Prisma.FieldRef<"store_trade_handoffs", 'String'>;
    readonly store_id: Prisma.FieldRef<"store_trade_handoffs", 'String'>;
    readonly status: Prisma.FieldRef<"store_trade_handoffs", 'String'>;
    readonly store_notes: Prisma.FieldRef<"store_trade_handoffs", 'String'>;
    readonly created_at: Prisma.FieldRef<"store_trade_handoffs", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"store_trade_handoffs", 'DateTime'>;
    readonly completed_at: Prisma.FieldRef<"store_trade_handoffs", 'DateTime'>;
    readonly cancelled_at: Prisma.FieldRef<"store_trade_handoffs", 'DateTime'>;
    readonly game_id: Prisma.FieldRef<"store_trade_handoffs", 'String'>;
}
/**
 * store_trade_handoffs findUnique
 */
export type store_trade_handoffsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which store_trade_handoffs to fetch.
     */
    where: Prisma.store_trade_handoffsWhereUniqueInput;
};
/**
 * store_trade_handoffs findUniqueOrThrow
 */
export type store_trade_handoffsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which store_trade_handoffs to fetch.
     */
    where: Prisma.store_trade_handoffsWhereUniqueInput;
};
/**
 * store_trade_handoffs findFirst
 */
export type store_trade_handoffsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which store_trade_handoffs to fetch.
     */
    where?: Prisma.store_trade_handoffsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of store_trade_handoffs to fetch.
     */
    orderBy?: Prisma.store_trade_handoffsOrderByWithRelationInput | Prisma.store_trade_handoffsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for store_trade_handoffs.
     */
    cursor?: Prisma.store_trade_handoffsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` store_trade_handoffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` store_trade_handoffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of store_trade_handoffs.
     */
    distinct?: Prisma.Store_trade_handoffsScalarFieldEnum | Prisma.Store_trade_handoffsScalarFieldEnum[];
};
/**
 * store_trade_handoffs findFirstOrThrow
 */
export type store_trade_handoffsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which store_trade_handoffs to fetch.
     */
    where?: Prisma.store_trade_handoffsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of store_trade_handoffs to fetch.
     */
    orderBy?: Prisma.store_trade_handoffsOrderByWithRelationInput | Prisma.store_trade_handoffsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for store_trade_handoffs.
     */
    cursor?: Prisma.store_trade_handoffsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` store_trade_handoffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` store_trade_handoffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of store_trade_handoffs.
     */
    distinct?: Prisma.Store_trade_handoffsScalarFieldEnum | Prisma.Store_trade_handoffsScalarFieldEnum[];
};
/**
 * store_trade_handoffs findMany
 */
export type store_trade_handoffsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which store_trade_handoffs to fetch.
     */
    where?: Prisma.store_trade_handoffsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of store_trade_handoffs to fetch.
     */
    orderBy?: Prisma.store_trade_handoffsOrderByWithRelationInput | Prisma.store_trade_handoffsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing store_trade_handoffs.
     */
    cursor?: Prisma.store_trade_handoffsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` store_trade_handoffs from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` store_trade_handoffs.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of store_trade_handoffs.
     */
    distinct?: Prisma.Store_trade_handoffsScalarFieldEnum | Prisma.Store_trade_handoffsScalarFieldEnum[];
};
/**
 * store_trade_handoffs create
 */
export type store_trade_handoffsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a store_trade_handoffs.
     */
    data: Prisma.XOR<Prisma.store_trade_handoffsCreateInput, Prisma.store_trade_handoffsUncheckedCreateInput>;
};
/**
 * store_trade_handoffs createMany
 */
export type store_trade_handoffsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many store_trade_handoffs.
     */
    data: Prisma.store_trade_handoffsCreateManyInput | Prisma.store_trade_handoffsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * store_trade_handoffs createManyAndReturn
 */
export type store_trade_handoffsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_trade_handoffs
     */
    select?: Prisma.store_trade_handoffsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the store_trade_handoffs
     */
    omit?: Prisma.store_trade_handoffsOmit<ExtArgs> | null;
    /**
     * The data used to create many store_trade_handoffs.
     */
    data: Prisma.store_trade_handoffsCreateManyInput | Prisma.store_trade_handoffsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_trade_handoffsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * store_trade_handoffs update
 */
export type store_trade_handoffsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a store_trade_handoffs.
     */
    data: Prisma.XOR<Prisma.store_trade_handoffsUpdateInput, Prisma.store_trade_handoffsUncheckedUpdateInput>;
    /**
     * Choose, which store_trade_handoffs to update.
     */
    where: Prisma.store_trade_handoffsWhereUniqueInput;
};
/**
 * store_trade_handoffs updateMany
 */
export type store_trade_handoffsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update store_trade_handoffs.
     */
    data: Prisma.XOR<Prisma.store_trade_handoffsUpdateManyMutationInput, Prisma.store_trade_handoffsUncheckedUpdateManyInput>;
    /**
     * Filter which store_trade_handoffs to update
     */
    where?: Prisma.store_trade_handoffsWhereInput;
    /**
     * Limit how many store_trade_handoffs to update.
     */
    limit?: number;
};
/**
 * store_trade_handoffs updateManyAndReturn
 */
export type store_trade_handoffsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_trade_handoffs
     */
    select?: Prisma.store_trade_handoffsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the store_trade_handoffs
     */
    omit?: Prisma.store_trade_handoffsOmit<ExtArgs> | null;
    /**
     * The data used to update store_trade_handoffs.
     */
    data: Prisma.XOR<Prisma.store_trade_handoffsUpdateManyMutationInput, Prisma.store_trade_handoffsUncheckedUpdateManyInput>;
    /**
     * Filter which store_trade_handoffs to update
     */
    where?: Prisma.store_trade_handoffsWhereInput;
    /**
     * Limit how many store_trade_handoffs to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_trade_handoffsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * store_trade_handoffs upsert
 */
export type store_trade_handoffsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the store_trade_handoffs to update in case it exists.
     */
    where: Prisma.store_trade_handoffsWhereUniqueInput;
    /**
     * In case the store_trade_handoffs found by the `where` argument doesn't exist, create a new store_trade_handoffs with this data.
     */
    create: Prisma.XOR<Prisma.store_trade_handoffsCreateInput, Prisma.store_trade_handoffsUncheckedCreateInput>;
    /**
     * In case the store_trade_handoffs was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.store_trade_handoffsUpdateInput, Prisma.store_trade_handoffsUncheckedUpdateInput>;
};
/**
 * store_trade_handoffs delete
 */
export type store_trade_handoffsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which store_trade_handoffs to delete.
     */
    where: Prisma.store_trade_handoffsWhereUniqueInput;
};
/**
 * store_trade_handoffs deleteMany
 */
export type store_trade_handoffsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which store_trade_handoffs to delete
     */
    where?: Prisma.store_trade_handoffsWhereInput;
    /**
     * Limit how many store_trade_handoffs to delete.
     */
    limit?: number;
};
/**
 * store_trade_handoffs.transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffs
 */
export type store_trade_handoffs$transaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.transaction_item_custodyOrderByWithRelationInput | Prisma.transaction_item_custodyOrderByWithRelationInput[];
    cursor?: Prisma.transaction_item_custodyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Transaction_item_custodyScalarFieldEnum | Prisma.Transaction_item_custodyScalarFieldEnum[];
};
/**
 * store_trade_handoffs.transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs
 */
export type store_trade_handoffs$transaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.transaction_item_custodyOrderByWithRelationInput | Prisma.transaction_item_custodyOrderByWithRelationInput[];
    cursor?: Prisma.transaction_item_custodyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Transaction_item_custodyScalarFieldEnum | Prisma.Transaction_item_custodyScalarFieldEnum[];
};
/**
 * store_trade_handoffs.transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs
 */
export type store_trade_handoffs$transaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.transaction_item_custodyOrderByWithRelationInput | Prisma.transaction_item_custodyOrderByWithRelationInput[];
    cursor?: Prisma.transaction_item_custodyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Transaction_item_custodyScalarFieldEnum | Prisma.Transaction_item_custodyScalarFieldEnum[];
};
/**
 * store_trade_handoffs without action
 */
export type store_trade_handoffsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
