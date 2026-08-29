import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model transaction_item_custody
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type transaction_item_custodyModel = runtime.Types.Result.DefaultSelection<Prisma.$transaction_item_custodyPayload>;
export type AggregateTransaction_item_custody = {
    _count: Transaction_item_custodyCountAggregateOutputType | null;
    _min: Transaction_item_custodyMinAggregateOutputType | null;
    _max: Transaction_item_custodyMaxAggregateOutputType | null;
};
export type Transaction_item_custodyMinAggregateOutputType = {
    id: string | null;
    handoff_id: string | null;
    transaction_id: string | null;
    store_id: string | null;
    transaction_item_id: string | null;
    custody_status: string | null;
    received_by_staff_id: string | null;
    received_at: Date | null;
    verified_by_staff_id: string | null;
    verified_at: Date | null;
    released_by_staff_id: string | null;
    released_at: Date | null;
    issue_notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Transaction_item_custodyMaxAggregateOutputType = {
    id: string | null;
    handoff_id: string | null;
    transaction_id: string | null;
    store_id: string | null;
    transaction_item_id: string | null;
    custody_status: string | null;
    received_by_staff_id: string | null;
    received_at: Date | null;
    verified_by_staff_id: string | null;
    verified_at: Date | null;
    released_by_staff_id: string | null;
    released_at: Date | null;
    issue_notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type Transaction_item_custodyCountAggregateOutputType = {
    id: number;
    handoff_id: number;
    transaction_id: number;
    store_id: number;
    transaction_item_id: number;
    custody_status: number;
    received_by_staff_id: number;
    received_at: number;
    verified_by_staff_id: number;
    verified_at: number;
    released_by_staff_id: number;
    released_at: number;
    issue_notes: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type Transaction_item_custodyMinAggregateInputType = {
    id?: true;
    handoff_id?: true;
    transaction_id?: true;
    store_id?: true;
    transaction_item_id?: true;
    custody_status?: true;
    received_by_staff_id?: true;
    received_at?: true;
    verified_by_staff_id?: true;
    verified_at?: true;
    released_by_staff_id?: true;
    released_at?: true;
    issue_notes?: true;
    created_at?: true;
    updated_at?: true;
};
export type Transaction_item_custodyMaxAggregateInputType = {
    id?: true;
    handoff_id?: true;
    transaction_id?: true;
    store_id?: true;
    transaction_item_id?: true;
    custody_status?: true;
    received_by_staff_id?: true;
    received_at?: true;
    verified_by_staff_id?: true;
    verified_at?: true;
    released_by_staff_id?: true;
    released_at?: true;
    issue_notes?: true;
    created_at?: true;
    updated_at?: true;
};
export type Transaction_item_custodyCountAggregateInputType = {
    id?: true;
    handoff_id?: true;
    transaction_id?: true;
    store_id?: true;
    transaction_item_id?: true;
    custody_status?: true;
    received_by_staff_id?: true;
    received_at?: true;
    verified_by_staff_id?: true;
    verified_at?: true;
    released_by_staff_id?: true;
    released_at?: true;
    issue_notes?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type Transaction_item_custodyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_item_custody to aggregate.
     */
    where?: Prisma.transaction_item_custodyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transaction_item_custodies to fetch.
     */
    orderBy?: Prisma.transaction_item_custodyOrderByWithRelationInput | Prisma.transaction_item_custodyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.transaction_item_custodyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transaction_item_custodies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transaction_item_custodies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned transaction_item_custodies
    **/
    _count?: true | Transaction_item_custodyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Transaction_item_custodyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Transaction_item_custodyMaxAggregateInputType;
};
export type GetTransaction_item_custodyAggregateType<T extends Transaction_item_custodyAggregateArgs> = {
    [P in keyof T & keyof AggregateTransaction_item_custody]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTransaction_item_custody[P]> : Prisma.GetScalarType<T[P], AggregateTransaction_item_custody[P]>;
};
export type transaction_item_custodyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transaction_item_custodyWhereInput;
    orderBy?: Prisma.transaction_item_custodyOrderByWithAggregationInput | Prisma.transaction_item_custodyOrderByWithAggregationInput[];
    by: Prisma.Transaction_item_custodyScalarFieldEnum[] | Prisma.Transaction_item_custodyScalarFieldEnum;
    having?: Prisma.transaction_item_custodyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Transaction_item_custodyCountAggregateInputType | true;
    _min?: Transaction_item_custodyMinAggregateInputType;
    _max?: Transaction_item_custodyMaxAggregateInputType;
};
export type Transaction_item_custodyGroupByOutputType = {
    id: string;
    handoff_id: string;
    transaction_id: string;
    store_id: string;
    transaction_item_id: string;
    custody_status: string;
    received_by_staff_id: string | null;
    received_at: Date | null;
    verified_by_staff_id: string | null;
    verified_at: Date | null;
    released_by_staff_id: string | null;
    released_at: Date | null;
    issue_notes: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Transaction_item_custodyCountAggregateOutputType | null;
    _min: Transaction_item_custodyMinAggregateOutputType | null;
    _max: Transaction_item_custodyMaxAggregateOutputType | null;
};
export type GetTransaction_item_custodyGroupByPayload<T extends transaction_item_custodyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Transaction_item_custodyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Transaction_item_custodyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Transaction_item_custodyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Transaction_item_custodyGroupByOutputType[P]>;
}>>;
export type transaction_item_custodyWhereInput = {
    AND?: Prisma.transaction_item_custodyWhereInput | Prisma.transaction_item_custodyWhereInput[];
    OR?: Prisma.transaction_item_custodyWhereInput[];
    NOT?: Prisma.transaction_item_custodyWhereInput | Prisma.transaction_item_custodyWhereInput[];
    id?: Prisma.UuidFilter<"transaction_item_custody"> | string;
    handoff_id?: Prisma.UuidFilter<"transaction_item_custody"> | string;
    transaction_id?: Prisma.UuidFilter<"transaction_item_custody"> | string;
    store_id?: Prisma.UuidFilter<"transaction_item_custody"> | string;
    transaction_item_id?: Prisma.UuidFilter<"transaction_item_custody"> | string;
    custody_status?: Prisma.StringFilter<"transaction_item_custody"> | string;
    received_by_staff_id?: Prisma.UuidNullableFilter<"transaction_item_custody"> | string | null;
    received_at?: Prisma.DateTimeNullableFilter<"transaction_item_custody"> | Date | string | null;
    verified_by_staff_id?: Prisma.UuidNullableFilter<"transaction_item_custody"> | string | null;
    verified_at?: Prisma.DateTimeNullableFilter<"transaction_item_custody"> | Date | string | null;
    released_by_staff_id?: Prisma.UuidNullableFilter<"transaction_item_custody"> | string | null;
    released_at?: Prisma.DateTimeNullableFilter<"transaction_item_custody"> | Date | string | null;
    issue_notes?: Prisma.StringNullableFilter<"transaction_item_custody"> | string | null;
    created_at?: Prisma.DateTimeFilter<"transaction_item_custody"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"transaction_item_custody"> | Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.XOR<Prisma.Store_trade_handoffsScalarRelationFilter, Prisma.store_trade_handoffsWhereInput>;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.XOR<Prisma.Store_trade_handoffsScalarRelationFilter, Prisma.store_trade_handoffsWhereInput>;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.XOR<Prisma.Store_trade_handoffsScalarRelationFilter, Prisma.store_trade_handoffsWhereInput>;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.XOR<Prisma.Transaction_itemsScalarRelationFilter, Prisma.transaction_itemsWhereInput>;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.XOR<Prisma.Store_staffNullableScalarRelationFilter, Prisma.store_staffWhereInput> | null;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.XOR<Prisma.Store_staffNullableScalarRelationFilter, Prisma.store_staffWhereInput> | null;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.XOR<Prisma.Transaction_itemsScalarRelationFilter, Prisma.transaction_itemsWhereInput>;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.XOR<Prisma.Store_staffNullableScalarRelationFilter, Prisma.store_staffWhereInput> | null;
};
export type transaction_item_custodyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    handoff_id?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    transaction_item_id?: Prisma.SortOrder;
    custody_status?: Prisma.SortOrder;
    received_by_staff_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    received_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    verified_by_staff_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    verified_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    released_by_staff_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    released_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    issue_notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.store_trade_handoffsOrderByWithRelationInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.store_trade_handoffsOrderByWithRelationInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.store_trade_handoffsOrderByWithRelationInput;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_itemsOrderByWithRelationInput;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.store_staffOrderByWithRelationInput;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.store_staffOrderByWithRelationInput;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_itemsOrderByWithRelationInput;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.store_staffOrderByWithRelationInput;
};
export type transaction_item_custodyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    transaction_item_id?: string;
    transaction_item_id_transaction_id?: Prisma.transaction_item_custodyTransaction_item_idTransaction_idCompoundUniqueInput;
    AND?: Prisma.transaction_item_custodyWhereInput | Prisma.transaction_item_custodyWhereInput[];
    OR?: Prisma.transaction_item_custodyWhereInput[];
    NOT?: Prisma.transaction_item_custodyWhereInput | Prisma.transaction_item_custodyWhereInput[];
    handoff_id?: Prisma.UuidFilter<"transaction_item_custody"> | string;
    transaction_id?: Prisma.UuidFilter<"transaction_item_custody"> | string;
    store_id?: Prisma.UuidFilter<"transaction_item_custody"> | string;
    custody_status?: Prisma.StringFilter<"transaction_item_custody"> | string;
    received_by_staff_id?: Prisma.UuidNullableFilter<"transaction_item_custody"> | string | null;
    received_at?: Prisma.DateTimeNullableFilter<"transaction_item_custody"> | Date | string | null;
    verified_by_staff_id?: Prisma.UuidNullableFilter<"transaction_item_custody"> | string | null;
    verified_at?: Prisma.DateTimeNullableFilter<"transaction_item_custody"> | Date | string | null;
    released_by_staff_id?: Prisma.UuidNullableFilter<"transaction_item_custody"> | string | null;
    released_at?: Prisma.DateTimeNullableFilter<"transaction_item_custody"> | Date | string | null;
    issue_notes?: Prisma.StringNullableFilter<"transaction_item_custody"> | string | null;
    created_at?: Prisma.DateTimeFilter<"transaction_item_custody"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"transaction_item_custody"> | Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.XOR<Prisma.Store_trade_handoffsScalarRelationFilter, Prisma.store_trade_handoffsWhereInput>;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.XOR<Prisma.Store_trade_handoffsScalarRelationFilter, Prisma.store_trade_handoffsWhereInput>;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.XOR<Prisma.Store_trade_handoffsScalarRelationFilter, Prisma.store_trade_handoffsWhereInput>;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.XOR<Prisma.Transaction_itemsScalarRelationFilter, Prisma.transaction_itemsWhereInput>;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.XOR<Prisma.Store_staffNullableScalarRelationFilter, Prisma.store_staffWhereInput> | null;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.XOR<Prisma.Store_staffNullableScalarRelationFilter, Prisma.store_staffWhereInput> | null;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.XOR<Prisma.Transaction_itemsScalarRelationFilter, Prisma.transaction_itemsWhereInput>;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.XOR<Prisma.Store_staffNullableScalarRelationFilter, Prisma.store_staffWhereInput> | null;
}, "id" | "transaction_item_id" | "transaction_item_id_transaction_id">;
export type transaction_item_custodyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    handoff_id?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    transaction_item_id?: Prisma.SortOrder;
    custody_status?: Prisma.SortOrder;
    received_by_staff_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    received_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    verified_by_staff_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    verified_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    released_by_staff_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    released_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    issue_notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.transaction_item_custodyCountOrderByAggregateInput;
    _max?: Prisma.transaction_item_custodyMaxOrderByAggregateInput;
    _min?: Prisma.transaction_item_custodyMinOrderByAggregateInput;
};
export type transaction_item_custodyScalarWhereWithAggregatesInput = {
    AND?: Prisma.transaction_item_custodyScalarWhereWithAggregatesInput | Prisma.transaction_item_custodyScalarWhereWithAggregatesInput[];
    OR?: Prisma.transaction_item_custodyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.transaction_item_custodyScalarWhereWithAggregatesInput | Prisma.transaction_item_custodyScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"transaction_item_custody"> | string;
    handoff_id?: Prisma.UuidWithAggregatesFilter<"transaction_item_custody"> | string;
    transaction_id?: Prisma.UuidWithAggregatesFilter<"transaction_item_custody"> | string;
    store_id?: Prisma.UuidWithAggregatesFilter<"transaction_item_custody"> | string;
    transaction_item_id?: Prisma.UuidWithAggregatesFilter<"transaction_item_custody"> | string;
    custody_status?: Prisma.StringWithAggregatesFilter<"transaction_item_custody"> | string;
    received_by_staff_id?: Prisma.UuidNullableWithAggregatesFilter<"transaction_item_custody"> | string | null;
    received_at?: Prisma.DateTimeNullableWithAggregatesFilter<"transaction_item_custody"> | Date | string | null;
    verified_by_staff_id?: Prisma.UuidNullableWithAggregatesFilter<"transaction_item_custody"> | string | null;
    verified_at?: Prisma.DateTimeNullableWithAggregatesFilter<"transaction_item_custody"> | Date | string | null;
    released_by_staff_id?: Prisma.UuidNullableWithAggregatesFilter<"transaction_item_custody"> | string | null;
    released_at?: Prisma.DateTimeNullableWithAggregatesFilter<"transaction_item_custody"> | Date | string | null;
    issue_notes?: Prisma.StringNullableWithAggregatesFilter<"transaction_item_custody"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"transaction_item_custody"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"transaction_item_custody"> | Date | string;
};
export type transaction_item_custodyCreateInput = {
    id?: string;
    custody_status?: string;
    received_at?: Date | string | null;
    verified_at?: Date | string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items: Prisma.transaction_itemsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items: Prisma.transaction_itemsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
};
export type transaction_item_custodyUncheckedCreateInput = {
    id?: string;
    handoff_id: string;
    transaction_id: string;
    store_id: string;
    transaction_item_id: string;
    custody_status?: string;
    received_by_staff_id?: string | null;
    received_at?: Date | string | null;
    verified_by_staff_id?: string | null;
    verified_at?: Date | string | null;
    released_by_staff_id?: string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type transaction_item_custodyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_itemsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_itemsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput;
};
export type transaction_item_custodyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    handoff_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transaction_item_custodyCreateManyInput = {
    id?: string;
    handoff_id: string;
    transaction_id: string;
    store_id: string;
    transaction_item_id: string;
    custody_status?: string;
    received_by_staff_id?: string | null;
    received_at?: Date | string | null;
    verified_by_staff_id?: string | null;
    verified_at?: Date | string | null;
    released_by_staff_id?: string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type transaction_item_custodyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transaction_item_custodyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    handoff_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Transaction_item_custodyListRelationFilter = {
    every?: Prisma.transaction_item_custodyWhereInput;
    some?: Prisma.transaction_item_custodyWhereInput;
    none?: Prisma.transaction_item_custodyWhereInput;
};
export type transaction_item_custodyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type transaction_item_custodyTransaction_item_idTransaction_idCompoundUniqueInput = {
    transaction_item_id: string;
    transaction_id: string;
};
export type transaction_item_custodyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    handoff_id?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    transaction_item_id?: Prisma.SortOrder;
    custody_status?: Prisma.SortOrder;
    received_by_staff_id?: Prisma.SortOrder;
    received_at?: Prisma.SortOrder;
    verified_by_staff_id?: Prisma.SortOrder;
    verified_at?: Prisma.SortOrder;
    released_by_staff_id?: Prisma.SortOrder;
    released_at?: Prisma.SortOrder;
    issue_notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type transaction_item_custodyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    handoff_id?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    transaction_item_id?: Prisma.SortOrder;
    custody_status?: Prisma.SortOrder;
    received_by_staff_id?: Prisma.SortOrder;
    received_at?: Prisma.SortOrder;
    verified_by_staff_id?: Prisma.SortOrder;
    verified_at?: Prisma.SortOrder;
    released_by_staff_id?: Prisma.SortOrder;
    released_at?: Prisma.SortOrder;
    issue_notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type transaction_item_custodyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    handoff_id?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    store_id?: Prisma.SortOrder;
    transaction_item_id?: Prisma.SortOrder;
    custody_status?: Prisma.SortOrder;
    received_by_staff_id?: Prisma.SortOrder;
    received_at?: Prisma.SortOrder;
    verified_by_staff_id?: Prisma.SortOrder;
    verified_at?: Prisma.SortOrder;
    released_by_staff_id?: Prisma.SortOrder;
    released_at?: Prisma.SortOrder;
    issue_notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type Transaction_item_custodyNullableScalarRelationFilter = {
    is?: Prisma.transaction_item_custodyWhereInput | null;
    isNot?: Prisma.transaction_item_custodyWhereInput | null;
};
export type transaction_item_custodyCreateNestedManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput> | Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInputEnvelope;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
};
export type transaction_item_custodyCreateNestedManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput> | Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInputEnvelope;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
};
export type transaction_item_custodyCreateNestedManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput> | Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInputEnvelope;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
};
export type transaction_item_custodyUncheckedCreateNestedManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput> | Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInputEnvelope;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
};
export type transaction_item_custodyUncheckedCreateNestedManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput> | Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInputEnvelope;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
};
export type transaction_item_custodyUncheckedCreateNestedManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput> | Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInputEnvelope;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
};
export type transaction_item_custodyUpdateManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput> | Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput[];
    upsert?: Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInputEnvelope;
    set?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    disconnect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    delete?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    update?: Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput[];
    updateMany?: Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput[];
    deleteMany?: Prisma.transaction_item_custodyScalarWhereInput | Prisma.transaction_item_custodyScalarWhereInput[];
};
export type transaction_item_custodyUpdateManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput> | Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput[];
    upsert?: Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInputEnvelope;
    set?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    disconnect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    delete?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    update?: Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput[];
    updateMany?: Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput[];
    deleteMany?: Prisma.transaction_item_custodyScalarWhereInput | Prisma.transaction_item_custodyScalarWhereInput[];
};
export type transaction_item_custodyUpdateManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput> | Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput[];
    upsert?: Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInputEnvelope;
    set?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    disconnect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    delete?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    update?: Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput[];
    updateMany?: Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput[];
    deleteMany?: Prisma.transaction_item_custodyScalarWhereInput | Prisma.transaction_item_custodyScalarWhereInput[];
};
export type transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput> | Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput[];
    upsert?: Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInputEnvelope;
    set?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    disconnect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    delete?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    update?: Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput[];
    updateMany?: Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput[];
    deleteMany?: Prisma.transaction_item_custodyScalarWhereInput | Prisma.transaction_item_custodyScalarWhereInput[];
};
export type transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput> | Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput[];
    upsert?: Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInputEnvelope;
    set?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    disconnect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    delete?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    update?: Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput[];
    updateMany?: Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput[];
    deleteMany?: Prisma.transaction_item_custodyScalarWhereInput | Prisma.transaction_item_custodyScalarWhereInput[];
};
export type transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput> | Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput[];
    upsert?: Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInputEnvelope;
    set?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    disconnect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    delete?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    update?: Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput[];
    updateMany?: Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput[];
    deleteMany?: Prisma.transaction_item_custodyScalarWhereInput | Prisma.transaction_item_custodyScalarWhereInput[];
};
export type transaction_item_custodyCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput> | Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInputEnvelope;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
};
export type transaction_item_custodyCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput> | Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInputEnvelope;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
};
export type transaction_item_custodyCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput> | Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInputEnvelope;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
};
export type transaction_item_custodyUncheckedCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput> | Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInputEnvelope;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
};
export type transaction_item_custodyUncheckedCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput> | Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInputEnvelope;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
};
export type transaction_item_custodyUncheckedCreateNestedManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput> | Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInputEnvelope;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
};
export type transaction_item_custodyUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput> | Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput[];
    upsert?: Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInputEnvelope;
    set?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    disconnect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    delete?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    update?: Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput[];
    updateMany?: Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput[];
    deleteMany?: Prisma.transaction_item_custodyScalarWhereInput | Prisma.transaction_item_custodyScalarWhereInput[];
};
export type transaction_item_custodyUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput> | Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput[];
    upsert?: Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInputEnvelope;
    set?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    disconnect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    delete?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    update?: Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput[];
    updateMany?: Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput[];
    deleteMany?: Prisma.transaction_item_custodyScalarWhereInput | Prisma.transaction_item_custodyScalarWhereInput[];
};
export type transaction_item_custodyUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput> | Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput[];
    upsert?: Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInputEnvelope;
    set?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    disconnect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    delete?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    update?: Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput[];
    updateMany?: Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput[];
    deleteMany?: Prisma.transaction_item_custodyScalarWhereInput | Prisma.transaction_item_custodyScalarWhereInput[];
};
export type transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput> | Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput[];
    upsert?: Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInputEnvelope;
    set?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    disconnect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    delete?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    update?: Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput[];
    updateMany?: Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput[];
    deleteMany?: Prisma.transaction_item_custodyScalarWhereInput | Prisma.transaction_item_custodyScalarWhereInput[];
};
export type transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput> | Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput[];
    upsert?: Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInputEnvelope;
    set?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    disconnect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    delete?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    update?: Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput[];
    updateMany?: Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput[];
    deleteMany?: Prisma.transaction_item_custodyScalarWhereInput | Prisma.transaction_item_custodyScalarWhereInput[];
};
export type transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput> | Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput[] | Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput[];
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput[];
    upsert?: Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyUpsertWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput[];
    createMany?: Prisma.transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInputEnvelope;
    set?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    disconnect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    delete?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    connect?: Prisma.transaction_item_custodyWhereUniqueInput | Prisma.transaction_item_custodyWhereUniqueInput[];
    update?: Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyUpdateWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput[];
    updateMany?: Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyUpdateManyWithWhereWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput[];
    deleteMany?: Prisma.transaction_item_custodyScalarWhereInput | Prisma.transaction_item_custodyScalarWhereInput[];
};
export type transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>;
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput;
};
export type transaction_item_custodyCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput>;
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput;
};
export type transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>;
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput;
};
export type transaction_item_custodyUncheckedCreateNestedOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput>;
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput;
};
export type transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>;
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    upsert?: Prisma.transaction_item_custodyUpsertWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    disconnect?: Prisma.transaction_item_custodyWhereInput | boolean;
    delete?: Prisma.transaction_item_custodyWhereInput | boolean;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.transaction_item_custodyUpdateToOneWithWhereWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput, Prisma.transaction_item_custodyUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>, Prisma.transaction_item_custodyUncheckedUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>;
};
export type transaction_item_custodyUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput>;
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    upsert?: Prisma.transaction_item_custodyUpsertWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    disconnect?: Prisma.transaction_item_custodyWhereInput | boolean;
    delete?: Prisma.transaction_item_custodyWhereInput | boolean;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.transaction_item_custodyUpdateToOneWithWhereWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput, Prisma.transaction_item_custodyUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput>, Prisma.transaction_item_custodyUncheckedUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput>;
};
export type transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>;
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    upsert?: Prisma.transaction_item_custodyUpsertWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    disconnect?: Prisma.transaction_item_custodyWhereInput | boolean;
    delete?: Prisma.transaction_item_custodyWhereInput | boolean;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.transaction_item_custodyUpdateToOneWithWhereWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput, Prisma.transaction_item_custodyUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>, Prisma.transaction_item_custodyUncheckedUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>;
};
export type transaction_item_custodyUncheckedUpdateOneWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput>;
    connectOrCreate?: Prisma.transaction_item_custodyCreateOrConnectWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    upsert?: Prisma.transaction_item_custodyUpsertWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    disconnect?: Prisma.transaction_item_custodyWhereInput | boolean;
    delete?: Prisma.transaction_item_custodyWhereInput | boolean;
    connect?: Prisma.transaction_item_custodyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.transaction_item_custodyUpdateToOneWithWhereWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput, Prisma.transaction_item_custodyUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput>, Prisma.transaction_item_custodyUncheckedUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput>;
};
export type transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    id?: string;
    custody_status?: string;
    received_at?: Date | string | null;
    verified_at?: Date | string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items: Prisma.transaction_itemsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items: Prisma.transaction_itemsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
};
export type transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    id?: string;
    handoff_id: string;
    transaction_id: string;
    transaction_item_id: string;
    custody_status?: string;
    received_at?: Date | string | null;
    verified_by_staff_id?: string | null;
    verified_at?: Date | string | null;
    released_by_staff_id?: string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    create: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput>;
};
export type transaction_item_custodyCreateManyStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInputEnvelope = {
    data: Prisma.transaction_item_custodyCreateManyStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyCreateManyStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput[];
    skipDuplicates?: boolean;
};
export type transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    id?: string;
    custody_status?: string;
    received_at?: Date | string | null;
    verified_at?: Date | string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items: Prisma.transaction_itemsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items: Prisma.transaction_itemsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
};
export type transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    id?: string;
    handoff_id: string;
    transaction_id: string;
    transaction_item_id: string;
    custody_status?: string;
    received_by_staff_id?: string | null;
    received_at?: Date | string | null;
    verified_by_staff_id?: string | null;
    verified_at?: Date | string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    create: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput>;
};
export type transaction_item_custodyCreateManyStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInputEnvelope = {
    data: Prisma.transaction_item_custodyCreateManyStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyCreateManyStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput[];
    skipDuplicates?: boolean;
};
export type transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    id?: string;
    custody_status?: string;
    received_at?: Date | string | null;
    verified_at?: Date | string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items: Prisma.transaction_itemsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items: Prisma.transaction_itemsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
};
export type transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    id?: string;
    handoff_id: string;
    transaction_id: string;
    transaction_item_id: string;
    custody_status?: string;
    received_by_staff_id?: string | null;
    received_at?: Date | string | null;
    verified_at?: Date | string | null;
    released_by_staff_id?: string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type transaction_item_custodyCreateOrConnectWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    create: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput>;
};
export type transaction_item_custodyCreateManyStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInputEnvelope = {
    data: Prisma.transaction_item_custodyCreateManyStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput | Prisma.transaction_item_custodyCreateManyStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput[];
    skipDuplicates?: boolean;
};
export type transaction_item_custodyUpsertWithWhereUniqueWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    update: Prisma.XOR<Prisma.transaction_item_custodyUpdateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedUpdateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput>;
    create: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput>;
};
export type transaction_item_custodyUpdateWithWhereUniqueWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    data: Prisma.XOR<Prisma.transaction_item_custodyUpdateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedUpdateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput>;
};
export type transaction_item_custodyUpdateManyWithWhereWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    where: Prisma.transaction_item_custodyScalarWhereInput;
    data: Prisma.XOR<Prisma.transaction_item_custodyUpdateManyMutationInput, Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput>;
};
export type transaction_item_custodyScalarWhereInput = {
    AND?: Prisma.transaction_item_custodyScalarWhereInput | Prisma.transaction_item_custodyScalarWhereInput[];
    OR?: Prisma.transaction_item_custodyScalarWhereInput[];
    NOT?: Prisma.transaction_item_custodyScalarWhereInput | Prisma.transaction_item_custodyScalarWhereInput[];
    id?: Prisma.UuidFilter<"transaction_item_custody"> | string;
    handoff_id?: Prisma.UuidFilter<"transaction_item_custody"> | string;
    transaction_id?: Prisma.UuidFilter<"transaction_item_custody"> | string;
    store_id?: Prisma.UuidFilter<"transaction_item_custody"> | string;
    transaction_item_id?: Prisma.UuidFilter<"transaction_item_custody"> | string;
    custody_status?: Prisma.StringFilter<"transaction_item_custody"> | string;
    received_by_staff_id?: Prisma.UuidNullableFilter<"transaction_item_custody"> | string | null;
    received_at?: Prisma.DateTimeNullableFilter<"transaction_item_custody"> | Date | string | null;
    verified_by_staff_id?: Prisma.UuidNullableFilter<"transaction_item_custody"> | string | null;
    verified_at?: Prisma.DateTimeNullableFilter<"transaction_item_custody"> | Date | string | null;
    released_by_staff_id?: Prisma.UuidNullableFilter<"transaction_item_custody"> | string | null;
    released_at?: Prisma.DateTimeNullableFilter<"transaction_item_custody"> | Date | string | null;
    issue_notes?: Prisma.StringNullableFilter<"transaction_item_custody"> | string | null;
    created_at?: Prisma.DateTimeFilter<"transaction_item_custody"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"transaction_item_custody"> | Date | string;
};
export type transaction_item_custodyUpsertWithWhereUniqueWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    update: Prisma.XOR<Prisma.transaction_item_custodyUpdateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedUpdateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput>;
    create: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput>;
};
export type transaction_item_custodyUpdateWithWhereUniqueWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    data: Prisma.XOR<Prisma.transaction_item_custodyUpdateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedUpdateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput>;
};
export type transaction_item_custodyUpdateManyWithWhereWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    where: Prisma.transaction_item_custodyScalarWhereInput;
    data: Prisma.XOR<Prisma.transaction_item_custodyUpdateManyMutationInput, Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput>;
};
export type transaction_item_custodyUpsertWithWhereUniqueWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    update: Prisma.XOR<Prisma.transaction_item_custodyUpdateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedUpdateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput>;
    create: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput>;
};
export type transaction_item_custodyUpdateWithWhereUniqueWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    data: Prisma.XOR<Prisma.transaction_item_custodyUpdateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput, Prisma.transaction_item_custodyUncheckedUpdateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput>;
};
export type transaction_item_custodyUpdateManyWithWhereWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    where: Prisma.transaction_item_custodyScalarWhereInput;
    data: Prisma.XOR<Prisma.transaction_item_custodyUpdateManyMutationInput, Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput>;
};
export type transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    id?: string;
    custody_status?: string;
    received_at?: Date | string | null;
    verified_at?: Date | string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items: Prisma.transaction_itemsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items: Prisma.transaction_itemsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
};
export type transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    id?: string;
    transaction_id: string;
    store_id: string;
    transaction_item_id: string;
    custody_status?: string;
    received_by_staff_id?: string | null;
    received_at?: Date | string | null;
    verified_by_staff_id?: string | null;
    verified_at?: Date | string | null;
    released_by_staff_id?: string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    create: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput>;
};
export type transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInputEnvelope = {
    data: Prisma.transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput[];
    skipDuplicates?: boolean;
};
export type transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    id?: string;
    custody_status?: string;
    received_at?: Date | string | null;
    verified_at?: Date | string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items: Prisma.transaction_itemsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items: Prisma.transaction_itemsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
};
export type transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    id?: string;
    transaction_id: string;
    transaction_item_id: string;
    custody_status?: string;
    received_by_staff_id?: string | null;
    received_at?: Date | string | null;
    verified_by_staff_id?: string | null;
    verified_at?: Date | string | null;
    released_by_staff_id?: string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    create: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput>;
};
export type transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInputEnvelope = {
    data: Prisma.transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput[];
    skipDuplicates?: boolean;
};
export type transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    id?: string;
    custody_status?: string;
    received_at?: Date | string | null;
    verified_at?: Date | string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items: Prisma.transaction_itemsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items: Prisma.transaction_itemsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
};
export type transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    id?: string;
    store_id: string;
    transaction_item_id: string;
    custody_status?: string;
    received_by_staff_id?: string | null;
    received_at?: Date | string | null;
    verified_by_staff_id?: string | null;
    verified_at?: Date | string | null;
    released_by_staff_id?: string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type transaction_item_custodyCreateOrConnectWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    create: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput>;
};
export type transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInputEnvelope = {
    data: Prisma.transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput | Prisma.transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput[];
    skipDuplicates?: boolean;
};
export type transaction_item_custodyUpsertWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    update: Prisma.XOR<Prisma.transaction_item_custodyUpdateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedUpdateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput>;
    create: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput>;
};
export type transaction_item_custodyUpdateWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    data: Prisma.XOR<Prisma.transaction_item_custodyUpdateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedUpdateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput>;
};
export type transaction_item_custodyUpdateManyWithWhereWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    where: Prisma.transaction_item_custodyScalarWhereInput;
    data: Prisma.XOR<Prisma.transaction_item_custodyUpdateManyMutationInput, Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput>;
};
export type transaction_item_custodyUpsertWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    update: Prisma.XOR<Prisma.transaction_item_custodyUpdateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedUpdateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput>;
    create: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput>;
};
export type transaction_item_custodyUpdateWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    data: Prisma.XOR<Prisma.transaction_item_custodyUpdateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedUpdateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput>;
};
export type transaction_item_custodyUpdateManyWithWhereWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    where: Prisma.transaction_item_custodyScalarWhereInput;
    data: Prisma.XOR<Prisma.transaction_item_custodyUpdateManyMutationInput, Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput>;
};
export type transaction_item_custodyUpsertWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    update: Prisma.XOR<Prisma.transaction_item_custodyUpdateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedUpdateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput>;
    create: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput>;
};
export type transaction_item_custodyUpdateWithWhereUniqueWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    data: Prisma.XOR<Prisma.transaction_item_custodyUpdateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput, Prisma.transaction_item_custodyUncheckedUpdateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput>;
};
export type transaction_item_custodyUpdateManyWithWhereWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    where: Prisma.transaction_item_custodyScalarWhereInput;
    data: Prisma.XOR<Prisma.transaction_item_custodyUpdateManyMutationInput, Prisma.transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput>;
};
export type transaction_item_custodyCreateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput = {
    id?: string;
    custody_status?: string;
    received_at?: Date | string | null;
    verified_at?: Date | string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items: Prisma.transaction_itemsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsInput;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
};
export type transaction_item_custodyUncheckedCreateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput = {
    id?: string;
    handoff_id: string;
    store_id: string;
    custody_status?: string;
    received_by_staff_id?: string | null;
    received_at?: Date | string | null;
    verified_by_staff_id?: string | null;
    verified_at?: Date | string | null;
    released_by_staff_id?: string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type transaction_item_custodyCreateOrConnectWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    create: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>;
};
export type transaction_item_custodyCreateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput = {
    id?: string;
    custody_status?: string;
    received_at?: Date | string | null;
    verified_at?: Date | string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs: Prisma.store_trade_handoffsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items: Prisma.transaction_itemsCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.store_staffCreateNestedOneWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput;
};
export type transaction_item_custodyUncheckedCreateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput = {
    id?: string;
    handoff_id: string;
    transaction_id: string;
    store_id: string;
    custody_status?: string;
    received_by_staff_id?: string | null;
    received_at?: Date | string | null;
    verified_by_staff_id?: string | null;
    verified_at?: Date | string | null;
    released_by_staff_id?: string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type transaction_item_custodyCreateOrConnectWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput = {
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    create: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput>;
};
export type transaction_item_custodyUpsertWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput = {
    update: Prisma.XOR<Prisma.transaction_item_custodyUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput, Prisma.transaction_item_custodyUncheckedUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>;
    create: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>;
    where?: Prisma.transaction_item_custodyWhereInput;
};
export type transaction_item_custodyUpdateToOneWithWhereWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput = {
    where?: Prisma.transaction_item_custodyWhereInput;
    data: Prisma.XOR<Prisma.transaction_item_custodyUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput, Prisma.transaction_item_custodyUncheckedUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput>;
};
export type transaction_item_custodyUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_itemsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput;
};
export type transaction_item_custodyUncheckedUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    handoff_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transaction_item_custodyUpsertWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput = {
    update: Prisma.XOR<Prisma.transaction_item_custodyUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput, Prisma.transaction_item_custodyUncheckedUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput>;
    create: Prisma.XOR<Prisma.transaction_item_custodyCreateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput, Prisma.transaction_item_custodyUncheckedCreateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput>;
    where?: Prisma.transaction_item_custodyWhereInput;
};
export type transaction_item_custodyUpdateToOneWithWhereWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput = {
    where?: Prisma.transaction_item_custodyWhereInput;
    data: Prisma.XOR<Prisma.transaction_item_custodyUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput, Prisma.transaction_item_custodyUncheckedUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput>;
};
export type transaction_item_custodyUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_itemsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput;
};
export type transaction_item_custodyUncheckedUpdateWithoutTransaction_items_transaction_item_custody_transaction_item_idTotransaction_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    handoff_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transaction_item_custodyCreateManyStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    id?: string;
    handoff_id: string;
    transaction_id: string;
    transaction_item_id: string;
    custody_status?: string;
    received_at?: Date | string | null;
    verified_by_staff_id?: string | null;
    verified_at?: Date | string | null;
    released_by_staff_id?: string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type transaction_item_custodyCreateManyStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    id?: string;
    handoff_id: string;
    transaction_id: string;
    transaction_item_id: string;
    custody_status?: string;
    received_by_staff_id?: string | null;
    received_at?: Date | string | null;
    verified_by_staff_id?: string | null;
    verified_at?: Date | string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type transaction_item_custodyCreateManyStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    id?: string;
    handoff_id: string;
    transaction_id: string;
    transaction_item_id: string;
    custody_status?: string;
    received_by_staff_id?: string | null;
    received_at?: Date | string | null;
    verified_at?: Date | string | null;
    released_by_staff_id?: string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type transaction_item_custodyUpdateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_itemsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_itemsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput;
};
export type transaction_item_custodyUncheckedUpdateWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    handoff_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    handoff_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transaction_item_custodyUpdateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_itemsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_itemsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput;
};
export type transaction_item_custodyUncheckedUpdateWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    handoff_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    handoff_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transaction_item_custodyUpdateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_itemsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_itemsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
};
export type transaction_item_custodyUncheckedUpdateWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    handoff_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transaction_item_custodyUncheckedUpdateManyWithoutStore_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    handoff_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    id?: string;
    transaction_id: string;
    store_id: string;
    transaction_item_id: string;
    custody_status?: string;
    received_by_staff_id?: string | null;
    received_at?: Date | string | null;
    verified_by_staff_id?: string | null;
    verified_at?: Date | string | null;
    released_by_staff_id?: string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    id?: string;
    transaction_id: string;
    transaction_item_id: string;
    custody_status?: string;
    received_by_staff_id?: string | null;
    received_at?: Date | string | null;
    verified_by_staff_id?: string | null;
    verified_at?: Date | string | null;
    released_by_staff_id?: string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type transaction_item_custodyCreateManyStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    id?: string;
    store_id: string;
    transaction_item_id: string;
    custody_status?: string;
    received_by_staff_id?: string | null;
    received_at?: Date | string | null;
    verified_by_staff_id?: string | null;
    verified_at?: Date | string | null;
    released_by_staff_id?: string | null;
    released_at?: Date | string | null;
    issue_notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type transaction_item_custodyUpdateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_itemsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_itemsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput;
};
export type transaction_item_custodyUncheckedUpdateWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transaction_item_custodyUpdateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsNestedInput;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_itemsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_itemsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput;
};
export type transaction_item_custodyUncheckedUpdateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transaction_item_custodyUpdateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_idTostore_trade_handoffsNestedInput;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: Prisma.store_trade_handoffsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_handoff_id_store_idTostore_trade_handoffsNestedInput;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: Prisma.transaction_itemsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_transaction_item_id_transaction_idTotransaction_itemsNestedInput;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_received_by_staff_id_store_idTostore_staffNestedInput;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_released_by_staff_id_store_idTostore_staffNestedInput;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items?: Prisma.transaction_itemsUpdateOneRequiredWithoutTransaction_item_custody_transaction_item_custody_transaction_item_idTotransaction_itemsNestedInput;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: Prisma.store_staffUpdateOneWithoutTransaction_item_custody_transaction_item_custody_verified_by_staff_id_store_idTostore_staffNestedInput;
};
export type transaction_item_custodyUncheckedUpdateWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transaction_item_custodyUncheckedUpdateManyWithoutStore_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    custody_status?: Prisma.StringFieldUpdateOperationsInput | string;
    received_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    received_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    verified_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verified_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    released_by_staff_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    released_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issue_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transaction_item_custodySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    handoff_id?: boolean;
    transaction_id?: boolean;
    store_id?: boolean;
    transaction_item_id?: boolean;
    custody_status?: boolean;
    received_by_staff_id?: boolean;
    received_at?: boolean;
    verified_by_staff_id?: boolean;
    verified_at?: boolean;
    released_by_staff_id?: boolean;
    released_at?: boolean;
    issue_notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffsDefaultArgs<ExtArgs>;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffsDefaultArgs<ExtArgs>;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffsDefaultArgs<ExtArgs>;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: boolean | Prisma.transaction_itemsDefaultArgs<ExtArgs>;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: boolean | Prisma.transaction_item_custody$store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: boolean | Prisma.transaction_item_custody$store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items?: boolean | Prisma.transaction_itemsDefaultArgs<ExtArgs>;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: boolean | Prisma.transaction_item_custody$store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
}, ExtArgs["result"]["transaction_item_custody"]>;
export type transaction_item_custodySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    handoff_id?: boolean;
    transaction_id?: boolean;
    store_id?: boolean;
    transaction_item_id?: boolean;
    custody_status?: boolean;
    received_by_staff_id?: boolean;
    received_at?: boolean;
    verified_by_staff_id?: boolean;
    verified_at?: boolean;
    released_by_staff_id?: boolean;
    released_at?: boolean;
    issue_notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffsDefaultArgs<ExtArgs>;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffsDefaultArgs<ExtArgs>;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffsDefaultArgs<ExtArgs>;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: boolean | Prisma.transaction_itemsDefaultArgs<ExtArgs>;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: boolean | Prisma.transaction_item_custody$store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: boolean | Prisma.transaction_item_custody$store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items?: boolean | Prisma.transaction_itemsDefaultArgs<ExtArgs>;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: boolean | Prisma.transaction_item_custody$store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
}, ExtArgs["result"]["transaction_item_custody"]>;
export type transaction_item_custodySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    handoff_id?: boolean;
    transaction_id?: boolean;
    store_id?: boolean;
    transaction_item_id?: boolean;
    custody_status?: boolean;
    received_by_staff_id?: boolean;
    received_at?: boolean;
    verified_by_staff_id?: boolean;
    verified_at?: boolean;
    released_by_staff_id?: boolean;
    released_at?: boolean;
    issue_notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffsDefaultArgs<ExtArgs>;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffsDefaultArgs<ExtArgs>;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffsDefaultArgs<ExtArgs>;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: boolean | Prisma.transaction_itemsDefaultArgs<ExtArgs>;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: boolean | Prisma.transaction_item_custody$store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: boolean | Prisma.transaction_item_custody$store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items?: boolean | Prisma.transaction_itemsDefaultArgs<ExtArgs>;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: boolean | Prisma.transaction_item_custody$store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
}, ExtArgs["result"]["transaction_item_custody"]>;
export type transaction_item_custodySelectScalar = {
    id?: boolean;
    handoff_id?: boolean;
    transaction_id?: boolean;
    store_id?: boolean;
    transaction_item_id?: boolean;
    custody_status?: boolean;
    received_by_staff_id?: boolean;
    received_at?: boolean;
    verified_by_staff_id?: boolean;
    verified_at?: boolean;
    released_by_staff_id?: boolean;
    released_at?: boolean;
    issue_notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type transaction_item_custodyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "handoff_id" | "transaction_id" | "store_id" | "transaction_item_id" | "custody_status" | "received_by_staff_id" | "received_at" | "verified_by_staff_id" | "verified_at" | "released_by_staff_id" | "released_at" | "issue_notes" | "created_at" | "updated_at", ExtArgs["result"]["transaction_item_custody"]>;
export type transaction_item_custodyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffsDefaultArgs<ExtArgs>;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffsDefaultArgs<ExtArgs>;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffsDefaultArgs<ExtArgs>;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: boolean | Prisma.transaction_itemsDefaultArgs<ExtArgs>;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: boolean | Prisma.transaction_item_custody$store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: boolean | Prisma.transaction_item_custody$store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items?: boolean | Prisma.transaction_itemsDefaultArgs<ExtArgs>;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: boolean | Prisma.transaction_item_custody$store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
};
export type transaction_item_custodyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffsDefaultArgs<ExtArgs>;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffsDefaultArgs<ExtArgs>;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffsDefaultArgs<ExtArgs>;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: boolean | Prisma.transaction_itemsDefaultArgs<ExtArgs>;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: boolean | Prisma.transaction_item_custody$store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: boolean | Prisma.transaction_item_custody$store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items?: boolean | Prisma.transaction_itemsDefaultArgs<ExtArgs>;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: boolean | Prisma.transaction_item_custody$store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
};
export type transaction_item_custodyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffsDefaultArgs<ExtArgs>;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffsDefaultArgs<ExtArgs>;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs?: boolean | Prisma.store_trade_handoffsDefaultArgs<ExtArgs>;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items?: boolean | Prisma.transaction_itemsDefaultArgs<ExtArgs>;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff?: boolean | Prisma.transaction_item_custody$store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff?: boolean | Prisma.transaction_item_custody$store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items?: boolean | Prisma.transaction_itemsDefaultArgs<ExtArgs>;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff?: boolean | Prisma.transaction_item_custody$store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffArgs<ExtArgs>;
};
export type $transaction_item_custodyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "transaction_item_custody";
    objects: {
        store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs: Prisma.$store_trade_handoffsPayload<ExtArgs>;
        store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs: Prisma.$store_trade_handoffsPayload<ExtArgs>;
        store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs: Prisma.$store_trade_handoffsPayload<ExtArgs>;
        transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items: Prisma.$transaction_itemsPayload<ExtArgs>;
        store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff: Prisma.$store_staffPayload<ExtArgs> | null;
        store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff: Prisma.$store_staffPayload<ExtArgs> | null;
        transaction_items_transaction_item_custody_transaction_item_idTotransaction_items: Prisma.$transaction_itemsPayload<ExtArgs>;
        store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff: Prisma.$store_staffPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        handoff_id: string;
        transaction_id: string;
        store_id: string;
        transaction_item_id: string;
        custody_status: string;
        received_by_staff_id: string | null;
        received_at: Date | null;
        verified_by_staff_id: string | null;
        verified_at: Date | null;
        released_by_staff_id: string | null;
        released_at: Date | null;
        issue_notes: string | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["transaction_item_custody"]>;
    composites: {};
};
export type transaction_item_custodyGetPayload<S extends boolean | null | undefined | transaction_item_custodyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload, S>;
export type transaction_item_custodyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<transaction_item_custodyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Transaction_item_custodyCountAggregateInputType | true;
};
export interface transaction_item_custodyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['transaction_item_custody'];
        meta: {
            name: 'transaction_item_custody';
        };
    };
    /**
     * Find zero or one Transaction_item_custody that matches the filter.
     * @param {transaction_item_custodyFindUniqueArgs} args - Arguments to find a Transaction_item_custody
     * @example
     * // Get one Transaction_item_custody
     * const transaction_item_custody = await prisma.transaction_item_custody.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaction_item_custodyFindUniqueArgs>(args: Prisma.SelectSubset<T, transaction_item_custodyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__transaction_item_custodyClient<runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Transaction_item_custody that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaction_item_custodyFindUniqueOrThrowArgs} args - Arguments to find a Transaction_item_custody
     * @example
     * // Get one Transaction_item_custody
     * const transaction_item_custody = await prisma.transaction_item_custody.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaction_item_custodyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, transaction_item_custodyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__transaction_item_custodyClient<runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Transaction_item_custody that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_item_custodyFindFirstArgs} args - Arguments to find a Transaction_item_custody
     * @example
     * // Get one Transaction_item_custody
     * const transaction_item_custody = await prisma.transaction_item_custody.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaction_item_custodyFindFirstArgs>(args?: Prisma.SelectSubset<T, transaction_item_custodyFindFirstArgs<ExtArgs>>): Prisma.Prisma__transaction_item_custodyClient<runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Transaction_item_custody that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_item_custodyFindFirstOrThrowArgs} args - Arguments to find a Transaction_item_custody
     * @example
     * // Get one Transaction_item_custody
     * const transaction_item_custody = await prisma.transaction_item_custody.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaction_item_custodyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, transaction_item_custodyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__transaction_item_custodyClient<runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Transaction_item_custodies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_item_custodyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaction_item_custodies
     * const transaction_item_custodies = await prisma.transaction_item_custody.findMany()
     *
     * // Get first 10 Transaction_item_custodies
     * const transaction_item_custodies = await prisma.transaction_item_custody.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const transaction_item_custodyWithIdOnly = await prisma.transaction_item_custody.findMany({ select: { id: true } })
     *
     */
    findMany<T extends transaction_item_custodyFindManyArgs>(args?: Prisma.SelectSubset<T, transaction_item_custodyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Transaction_item_custody.
     * @param {transaction_item_custodyCreateArgs} args - Arguments to create a Transaction_item_custody.
     * @example
     * // Create one Transaction_item_custody
     * const Transaction_item_custody = await prisma.transaction_item_custody.create({
     *   data: {
     *     // ... data to create a Transaction_item_custody
     *   }
     * })
     *
     */
    create<T extends transaction_item_custodyCreateArgs>(args: Prisma.SelectSubset<T, transaction_item_custodyCreateArgs<ExtArgs>>): Prisma.Prisma__transaction_item_custodyClient<runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Transaction_item_custodies.
     * @param {transaction_item_custodyCreateManyArgs} args - Arguments to create many Transaction_item_custodies.
     * @example
     * // Create many Transaction_item_custodies
     * const transaction_item_custody = await prisma.transaction_item_custody.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends transaction_item_custodyCreateManyArgs>(args?: Prisma.SelectSubset<T, transaction_item_custodyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Transaction_item_custodies and returns the data saved in the database.
     * @param {transaction_item_custodyCreateManyAndReturnArgs} args - Arguments to create many Transaction_item_custodies.
     * @example
     * // Create many Transaction_item_custodies
     * const transaction_item_custody = await prisma.transaction_item_custody.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Transaction_item_custodies and only return the `id`
     * const transaction_item_custodyWithIdOnly = await prisma.transaction_item_custody.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends transaction_item_custodyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, transaction_item_custodyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Transaction_item_custody.
     * @param {transaction_item_custodyDeleteArgs} args - Arguments to delete one Transaction_item_custody.
     * @example
     * // Delete one Transaction_item_custody
     * const Transaction_item_custody = await prisma.transaction_item_custody.delete({
     *   where: {
     *     // ... filter to delete one Transaction_item_custody
     *   }
     * })
     *
     */
    delete<T extends transaction_item_custodyDeleteArgs>(args: Prisma.SelectSubset<T, transaction_item_custodyDeleteArgs<ExtArgs>>): Prisma.Prisma__transaction_item_custodyClient<runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Transaction_item_custody.
     * @param {transaction_item_custodyUpdateArgs} args - Arguments to update one Transaction_item_custody.
     * @example
     * // Update one Transaction_item_custody
     * const transaction_item_custody = await prisma.transaction_item_custody.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends transaction_item_custodyUpdateArgs>(args: Prisma.SelectSubset<T, transaction_item_custodyUpdateArgs<ExtArgs>>): Prisma.Prisma__transaction_item_custodyClient<runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Transaction_item_custodies.
     * @param {transaction_item_custodyDeleteManyArgs} args - Arguments to filter Transaction_item_custodies to delete.
     * @example
     * // Delete a few Transaction_item_custodies
     * const { count } = await prisma.transaction_item_custody.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends transaction_item_custodyDeleteManyArgs>(args?: Prisma.SelectSubset<T, transaction_item_custodyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Transaction_item_custodies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_item_custodyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaction_item_custodies
     * const transaction_item_custody = await prisma.transaction_item_custody.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends transaction_item_custodyUpdateManyArgs>(args: Prisma.SelectSubset<T, transaction_item_custodyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Transaction_item_custodies and returns the data updated in the database.
     * @param {transaction_item_custodyUpdateManyAndReturnArgs} args - Arguments to update many Transaction_item_custodies.
     * @example
     * // Update many Transaction_item_custodies
     * const transaction_item_custody = await prisma.transaction_item_custody.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Transaction_item_custodies and only return the `id`
     * const transaction_item_custodyWithIdOnly = await prisma.transaction_item_custody.updateManyAndReturn({
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
    updateManyAndReturn<T extends transaction_item_custodyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, transaction_item_custodyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Transaction_item_custody.
     * @param {transaction_item_custodyUpsertArgs} args - Arguments to update or create a Transaction_item_custody.
     * @example
     * // Update or create a Transaction_item_custody
     * const transaction_item_custody = await prisma.transaction_item_custody.upsert({
     *   create: {
     *     // ... data to create a Transaction_item_custody
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction_item_custody we want to update
     *   }
     * })
     */
    upsert<T extends transaction_item_custodyUpsertArgs>(args: Prisma.SelectSubset<T, transaction_item_custodyUpsertArgs<ExtArgs>>): Prisma.Prisma__transaction_item_custodyClient<runtime.Types.Result.GetResult<Prisma.$transaction_item_custodyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Transaction_item_custodies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_item_custodyCountArgs} args - Arguments to filter Transaction_item_custodies to count.
     * @example
     * // Count the number of Transaction_item_custodies
     * const count = await prisma.transaction_item_custody.count({
     *   where: {
     *     // ... the filter for the Transaction_item_custodies we want to count
     *   }
     * })
    **/
    count<T extends transaction_item_custodyCountArgs>(args?: Prisma.Subset<T, transaction_item_custodyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Transaction_item_custodyCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Transaction_item_custody.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaction_item_custodyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Transaction_item_custodyAggregateArgs>(args: Prisma.Subset<T, Transaction_item_custodyAggregateArgs>): Prisma.PrismaPromise<GetTransaction_item_custodyAggregateType<T>>;
    /**
     * Group by Transaction_item_custody.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_item_custodyGroupByArgs} args - Group by arguments.
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
    groupBy<T extends transaction_item_custodyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: transaction_item_custodyGroupByArgs['orderBy'];
    } : {
        orderBy?: transaction_item_custodyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, transaction_item_custodyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaction_item_custodyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the transaction_item_custody model
     */
    readonly fields: transaction_item_custodyFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for transaction_item_custody.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__transaction_item_custodyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    store_trade_handoffs_transaction_item_custody_handoff_idTostore_trade_handoffs<T extends Prisma.store_trade_handoffsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_trade_handoffsDefaultArgs<ExtArgs>>): Prisma.Prisma__store_trade_handoffsClient<runtime.Types.Result.GetResult<Prisma.$store_trade_handoffsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    store_trade_handoffs_transaction_item_custody_handoff_id_store_idTostore_trade_handoffs<T extends Prisma.store_trade_handoffsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_trade_handoffsDefaultArgs<ExtArgs>>): Prisma.Prisma__store_trade_handoffsClient<runtime.Types.Result.GetResult<Prisma.$store_trade_handoffsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    store_trade_handoffs_transaction_item_custody_handoff_id_transaction_idTostore_trade_handoffs<T extends Prisma.store_trade_handoffsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.store_trade_handoffsDefaultArgs<ExtArgs>>): Prisma.Prisma__store_trade_handoffsClient<runtime.Types.Result.GetResult<Prisma.$store_trade_handoffsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    transaction_items_transaction_item_custody_transaction_item_id_transaction_idTotransaction_items<T extends Prisma.transaction_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transaction_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__transaction_itemsClient<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff<T extends Prisma.transaction_item_custody$store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transaction_item_custody$store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffArgs<ExtArgs>>): Prisma.Prisma__store_staffClient<runtime.Types.Result.GetResult<Prisma.$store_staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff<T extends Prisma.transaction_item_custody$store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transaction_item_custody$store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffArgs<ExtArgs>>): Prisma.Prisma__store_staffClient<runtime.Types.Result.GetResult<Prisma.$store_staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    transaction_items_transaction_item_custody_transaction_item_idTotransaction_items<T extends Prisma.transaction_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transaction_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__transaction_itemsClient<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff<T extends Prisma.transaction_item_custody$store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transaction_item_custody$store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffArgs<ExtArgs>>): Prisma.Prisma__store_staffClient<runtime.Types.Result.GetResult<Prisma.$store_staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the transaction_item_custody model
 */
export interface transaction_item_custodyFieldRefs {
    readonly id: Prisma.FieldRef<"transaction_item_custody", 'String'>;
    readonly handoff_id: Prisma.FieldRef<"transaction_item_custody", 'String'>;
    readonly transaction_id: Prisma.FieldRef<"transaction_item_custody", 'String'>;
    readonly store_id: Prisma.FieldRef<"transaction_item_custody", 'String'>;
    readonly transaction_item_id: Prisma.FieldRef<"transaction_item_custody", 'String'>;
    readonly custody_status: Prisma.FieldRef<"transaction_item_custody", 'String'>;
    readonly received_by_staff_id: Prisma.FieldRef<"transaction_item_custody", 'String'>;
    readonly received_at: Prisma.FieldRef<"transaction_item_custody", 'DateTime'>;
    readonly verified_by_staff_id: Prisma.FieldRef<"transaction_item_custody", 'String'>;
    readonly verified_at: Prisma.FieldRef<"transaction_item_custody", 'DateTime'>;
    readonly released_by_staff_id: Prisma.FieldRef<"transaction_item_custody", 'String'>;
    readonly released_at: Prisma.FieldRef<"transaction_item_custody", 'DateTime'>;
    readonly issue_notes: Prisma.FieldRef<"transaction_item_custody", 'String'>;
    readonly created_at: Prisma.FieldRef<"transaction_item_custody", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"transaction_item_custody", 'DateTime'>;
}
/**
 * transaction_item_custody findUnique
 */
export type transaction_item_custodyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which transaction_item_custody to fetch.
     */
    where: Prisma.transaction_item_custodyWhereUniqueInput;
};
/**
 * transaction_item_custody findUniqueOrThrow
 */
export type transaction_item_custodyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which transaction_item_custody to fetch.
     */
    where: Prisma.transaction_item_custodyWhereUniqueInput;
};
/**
 * transaction_item_custody findFirst
 */
export type transaction_item_custodyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which transaction_item_custody to fetch.
     */
    where?: Prisma.transaction_item_custodyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transaction_item_custodies to fetch.
     */
    orderBy?: Prisma.transaction_item_custodyOrderByWithRelationInput | Prisma.transaction_item_custodyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for transaction_item_custodies.
     */
    cursor?: Prisma.transaction_item_custodyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transaction_item_custodies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transaction_item_custodies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of transaction_item_custodies.
     */
    distinct?: Prisma.Transaction_item_custodyScalarFieldEnum | Prisma.Transaction_item_custodyScalarFieldEnum[];
};
/**
 * transaction_item_custody findFirstOrThrow
 */
export type transaction_item_custodyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which transaction_item_custody to fetch.
     */
    where?: Prisma.transaction_item_custodyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transaction_item_custodies to fetch.
     */
    orderBy?: Prisma.transaction_item_custodyOrderByWithRelationInput | Prisma.transaction_item_custodyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for transaction_item_custodies.
     */
    cursor?: Prisma.transaction_item_custodyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transaction_item_custodies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transaction_item_custodies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of transaction_item_custodies.
     */
    distinct?: Prisma.Transaction_item_custodyScalarFieldEnum | Prisma.Transaction_item_custodyScalarFieldEnum[];
};
/**
 * transaction_item_custody findMany
 */
export type transaction_item_custodyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which transaction_item_custodies to fetch.
     */
    where?: Prisma.transaction_item_custodyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transaction_item_custodies to fetch.
     */
    orderBy?: Prisma.transaction_item_custodyOrderByWithRelationInput | Prisma.transaction_item_custodyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing transaction_item_custodies.
     */
    cursor?: Prisma.transaction_item_custodyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transaction_item_custodies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transaction_item_custodies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of transaction_item_custodies.
     */
    distinct?: Prisma.Transaction_item_custodyScalarFieldEnum | Prisma.Transaction_item_custodyScalarFieldEnum[];
};
/**
 * transaction_item_custody create
 */
export type transaction_item_custodyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a transaction_item_custody.
     */
    data: Prisma.XOR<Prisma.transaction_item_custodyCreateInput, Prisma.transaction_item_custodyUncheckedCreateInput>;
};
/**
 * transaction_item_custody createMany
 */
export type transaction_item_custodyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaction_item_custodies.
     */
    data: Prisma.transaction_item_custodyCreateManyInput | Prisma.transaction_item_custodyCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * transaction_item_custody createManyAndReturn
 */
export type transaction_item_custodyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_item_custody
     */
    select?: Prisma.transaction_item_custodySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction_item_custody
     */
    omit?: Prisma.transaction_item_custodyOmit<ExtArgs> | null;
    /**
     * The data used to create many transaction_item_custodies.
     */
    data: Prisma.transaction_item_custodyCreateManyInput | Prisma.transaction_item_custodyCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transaction_item_custodyIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * transaction_item_custody update
 */
export type transaction_item_custodyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a transaction_item_custody.
     */
    data: Prisma.XOR<Prisma.transaction_item_custodyUpdateInput, Prisma.transaction_item_custodyUncheckedUpdateInput>;
    /**
     * Choose, which transaction_item_custody to update.
     */
    where: Prisma.transaction_item_custodyWhereUniqueInput;
};
/**
 * transaction_item_custody updateMany
 */
export type transaction_item_custodyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update transaction_item_custodies.
     */
    data: Prisma.XOR<Prisma.transaction_item_custodyUpdateManyMutationInput, Prisma.transaction_item_custodyUncheckedUpdateManyInput>;
    /**
     * Filter which transaction_item_custodies to update
     */
    where?: Prisma.transaction_item_custodyWhereInput;
    /**
     * Limit how many transaction_item_custodies to update.
     */
    limit?: number;
};
/**
 * transaction_item_custody updateManyAndReturn
 */
export type transaction_item_custodyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_item_custody
     */
    select?: Prisma.transaction_item_custodySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the transaction_item_custody
     */
    omit?: Prisma.transaction_item_custodyOmit<ExtArgs> | null;
    /**
     * The data used to update transaction_item_custodies.
     */
    data: Prisma.XOR<Prisma.transaction_item_custodyUpdateManyMutationInput, Prisma.transaction_item_custodyUncheckedUpdateManyInput>;
    /**
     * Filter which transaction_item_custodies to update
     */
    where?: Prisma.transaction_item_custodyWhereInput;
    /**
     * Limit how many transaction_item_custodies to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transaction_item_custodyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * transaction_item_custody upsert
 */
export type transaction_item_custodyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the transaction_item_custody to update in case it exists.
     */
    where: Prisma.transaction_item_custodyWhereUniqueInput;
    /**
     * In case the transaction_item_custody found by the `where` argument doesn't exist, create a new transaction_item_custody with this data.
     */
    create: Prisma.XOR<Prisma.transaction_item_custodyCreateInput, Prisma.transaction_item_custodyUncheckedCreateInput>;
    /**
     * In case the transaction_item_custody was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.transaction_item_custodyUpdateInput, Prisma.transaction_item_custodyUncheckedUpdateInput>;
};
/**
 * transaction_item_custody delete
 */
export type transaction_item_custodyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which transaction_item_custody to delete.
     */
    where: Prisma.transaction_item_custodyWhereUniqueInput;
};
/**
 * transaction_item_custody deleteMany
 */
export type transaction_item_custodyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_item_custodies to delete
     */
    where?: Prisma.transaction_item_custodyWhereInput;
    /**
     * Limit how many transaction_item_custodies to delete.
     */
    limit?: number;
};
/**
 * transaction_item_custody.store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staff
 */
export type transaction_item_custody$store_staff_transaction_item_custody_received_by_staff_id_store_idTostore_staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_staff
     */
    select?: Prisma.store_staffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the store_staff
     */
    omit?: Prisma.store_staffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_staffInclude<ExtArgs> | null;
    where?: Prisma.store_staffWhereInput;
};
/**
 * transaction_item_custody.store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staff
 */
export type transaction_item_custody$store_staff_transaction_item_custody_released_by_staff_id_store_idTostore_staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_staff
     */
    select?: Prisma.store_staffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the store_staff
     */
    omit?: Prisma.store_staffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_staffInclude<ExtArgs> | null;
    where?: Prisma.store_staffWhereInput;
};
/**
 * transaction_item_custody.store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staff
 */
export type transaction_item_custody$store_staff_transaction_item_custody_verified_by_staff_id_store_idTostore_staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_staff
     */
    select?: Prisma.store_staffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the store_staff
     */
    omit?: Prisma.store_staffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_staffInclude<ExtArgs> | null;
    where?: Prisma.store_staffWhereInput;
};
/**
 * transaction_item_custody without action
 */
export type transaction_item_custodyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
