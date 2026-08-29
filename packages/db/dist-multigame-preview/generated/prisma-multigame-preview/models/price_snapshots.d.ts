import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model price_snapshots
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type price_snapshotsModel = runtime.Types.Result.DefaultSelection<Prisma.$price_snapshotsPayload>;
export type AggregatePrice_snapshots = {
    _count: Price_snapshotsCountAggregateOutputType | null;
    _avg: Price_snapshotsAvgAggregateOutputType | null;
    _sum: Price_snapshotsSumAggregateOutputType | null;
    _min: Price_snapshotsMinAggregateOutputType | null;
    _max: Price_snapshotsMaxAggregateOutputType | null;
};
export type Price_snapshotsAvgAggregateOutputType = {
    market_price: runtime.Decimal | null;
    low_price: runtime.Decimal | null;
    mid_price: runtime.Decimal | null;
    high_price: runtime.Decimal | null;
    direct_price: runtime.Decimal | null;
};
export type Price_snapshotsSumAggregateOutputType = {
    market_price: runtime.Decimal | null;
    low_price: runtime.Decimal | null;
    mid_price: runtime.Decimal | null;
    high_price: runtime.Decimal | null;
    direct_price: runtime.Decimal | null;
};
export type Price_snapshotsMinAggregateOutputType = {
    id: string | null;
    printing_id: string | null;
    finish: string | null;
    condition: string | null;
    source: string | null;
    source_ref: string | null;
    currency_code: string | null;
    market_price: runtime.Decimal | null;
    low_price: runtime.Decimal | null;
    mid_price: runtime.Decimal | null;
    high_price: runtime.Decimal | null;
    direct_price: runtime.Decimal | null;
    captured_at: Date | null;
    created_at: Date | null;
};
export type Price_snapshotsMaxAggregateOutputType = {
    id: string | null;
    printing_id: string | null;
    finish: string | null;
    condition: string | null;
    source: string | null;
    source_ref: string | null;
    currency_code: string | null;
    market_price: runtime.Decimal | null;
    low_price: runtime.Decimal | null;
    mid_price: runtime.Decimal | null;
    high_price: runtime.Decimal | null;
    direct_price: runtime.Decimal | null;
    captured_at: Date | null;
    created_at: Date | null;
};
export type Price_snapshotsCountAggregateOutputType = {
    id: number;
    printing_id: number;
    finish: number;
    condition: number;
    source: number;
    source_ref: number;
    currency_code: number;
    market_price: number;
    low_price: number;
    mid_price: number;
    high_price: number;
    direct_price: number;
    captured_at: number;
    raw_data: number;
    created_at: number;
    _all: number;
};
export type Price_snapshotsAvgAggregateInputType = {
    market_price?: true;
    low_price?: true;
    mid_price?: true;
    high_price?: true;
    direct_price?: true;
};
export type Price_snapshotsSumAggregateInputType = {
    market_price?: true;
    low_price?: true;
    mid_price?: true;
    high_price?: true;
    direct_price?: true;
};
export type Price_snapshotsMinAggregateInputType = {
    id?: true;
    printing_id?: true;
    finish?: true;
    condition?: true;
    source?: true;
    source_ref?: true;
    currency_code?: true;
    market_price?: true;
    low_price?: true;
    mid_price?: true;
    high_price?: true;
    direct_price?: true;
    captured_at?: true;
    created_at?: true;
};
export type Price_snapshotsMaxAggregateInputType = {
    id?: true;
    printing_id?: true;
    finish?: true;
    condition?: true;
    source?: true;
    source_ref?: true;
    currency_code?: true;
    market_price?: true;
    low_price?: true;
    mid_price?: true;
    high_price?: true;
    direct_price?: true;
    captured_at?: true;
    created_at?: true;
};
export type Price_snapshotsCountAggregateInputType = {
    id?: true;
    printing_id?: true;
    finish?: true;
    condition?: true;
    source?: true;
    source_ref?: true;
    currency_code?: true;
    market_price?: true;
    low_price?: true;
    mid_price?: true;
    high_price?: true;
    direct_price?: true;
    captured_at?: true;
    raw_data?: true;
    created_at?: true;
    _all?: true;
};
export type Price_snapshotsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which price_snapshots to aggregate.
     */
    where?: Prisma.price_snapshotsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of price_snapshots to fetch.
     */
    orderBy?: Prisma.price_snapshotsOrderByWithRelationInput | Prisma.price_snapshotsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.price_snapshotsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` price_snapshots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` price_snapshots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned price_snapshots
    **/
    _count?: true | Price_snapshotsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Price_snapshotsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Price_snapshotsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Price_snapshotsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Price_snapshotsMaxAggregateInputType;
};
export type GetPrice_snapshotsAggregateType<T extends Price_snapshotsAggregateArgs> = {
    [P in keyof T & keyof AggregatePrice_snapshots]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePrice_snapshots[P]> : Prisma.GetScalarType<T[P], AggregatePrice_snapshots[P]>;
};
export type price_snapshotsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.price_snapshotsWhereInput;
    orderBy?: Prisma.price_snapshotsOrderByWithAggregationInput | Prisma.price_snapshotsOrderByWithAggregationInput[];
    by: Prisma.Price_snapshotsScalarFieldEnum[] | Prisma.Price_snapshotsScalarFieldEnum;
    having?: Prisma.price_snapshotsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Price_snapshotsCountAggregateInputType | true;
    _avg?: Price_snapshotsAvgAggregateInputType;
    _sum?: Price_snapshotsSumAggregateInputType;
    _min?: Price_snapshotsMinAggregateInputType;
    _max?: Price_snapshotsMaxAggregateInputType;
};
export type Price_snapshotsGroupByOutputType = {
    id: string;
    printing_id: string;
    finish: string;
    condition: string;
    source: string;
    source_ref: string | null;
    currency_code: string;
    market_price: runtime.Decimal | null;
    low_price: runtime.Decimal | null;
    mid_price: runtime.Decimal | null;
    high_price: runtime.Decimal | null;
    direct_price: runtime.Decimal | null;
    captured_at: Date;
    raw_data: runtime.JsonValue | null;
    created_at: Date;
    _count: Price_snapshotsCountAggregateOutputType | null;
    _avg: Price_snapshotsAvgAggregateOutputType | null;
    _sum: Price_snapshotsSumAggregateOutputType | null;
    _min: Price_snapshotsMinAggregateOutputType | null;
    _max: Price_snapshotsMaxAggregateOutputType | null;
};
export type GetPrice_snapshotsGroupByPayload<T extends price_snapshotsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Price_snapshotsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Price_snapshotsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Price_snapshotsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Price_snapshotsGroupByOutputType[P]>;
}>>;
export type price_snapshotsWhereInput = {
    AND?: Prisma.price_snapshotsWhereInput | Prisma.price_snapshotsWhereInput[];
    OR?: Prisma.price_snapshotsWhereInput[];
    NOT?: Prisma.price_snapshotsWhereInput | Prisma.price_snapshotsWhereInput[];
    id?: Prisma.UuidFilter<"price_snapshots"> | string;
    printing_id?: Prisma.UuidFilter<"price_snapshots"> | string;
    finish?: Prisma.StringFilter<"price_snapshots"> | string;
    condition?: Prisma.StringFilter<"price_snapshots"> | string;
    source?: Prisma.StringFilter<"price_snapshots"> | string;
    source_ref?: Prisma.StringNullableFilter<"price_snapshots"> | string | null;
    currency_code?: Prisma.StringFilter<"price_snapshots"> | string;
    market_price?: Prisma.DecimalNullableFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: Prisma.DecimalNullableFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: Prisma.DecimalNullableFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: Prisma.DecimalNullableFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: Prisma.DecimalNullableFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Prisma.DateTimeFilter<"price_snapshots"> | Date | string;
    raw_data?: Prisma.JsonNullableFilter<"price_snapshots">;
    created_at?: Prisma.DateTimeFilter<"price_snapshots"> | Date | string;
    printing_finishes?: Prisma.XOR<Prisma.Printing_finishesScalarRelationFilter, Prisma.printing_finishesWhereInput>;
    transaction_items?: Prisma.Transaction_itemsListRelationFilter;
};
export type price_snapshotsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    printing_id?: Prisma.SortOrder;
    finish?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_ref?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    market_price?: Prisma.SortOrderInput | Prisma.SortOrder;
    low_price?: Prisma.SortOrderInput | Prisma.SortOrder;
    mid_price?: Prisma.SortOrderInput | Prisma.SortOrder;
    high_price?: Prisma.SortOrderInput | Prisma.SortOrder;
    direct_price?: Prisma.SortOrderInput | Prisma.SortOrder;
    captured_at?: Prisma.SortOrder;
    raw_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    printing_finishes?: Prisma.printing_finishesOrderByWithRelationInput;
    transaction_items?: Prisma.transaction_itemsOrderByRelationAggregateInput;
};
export type price_snapshotsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.price_snapshotsWhereInput | Prisma.price_snapshotsWhereInput[];
    OR?: Prisma.price_snapshotsWhereInput[];
    NOT?: Prisma.price_snapshotsWhereInput | Prisma.price_snapshotsWhereInput[];
    printing_id?: Prisma.UuidFilter<"price_snapshots"> | string;
    finish?: Prisma.StringFilter<"price_snapshots"> | string;
    condition?: Prisma.StringFilter<"price_snapshots"> | string;
    source?: Prisma.StringFilter<"price_snapshots"> | string;
    source_ref?: Prisma.StringNullableFilter<"price_snapshots"> | string | null;
    currency_code?: Prisma.StringFilter<"price_snapshots"> | string;
    market_price?: Prisma.DecimalNullableFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: Prisma.DecimalNullableFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: Prisma.DecimalNullableFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: Prisma.DecimalNullableFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: Prisma.DecimalNullableFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Prisma.DateTimeFilter<"price_snapshots"> | Date | string;
    raw_data?: Prisma.JsonNullableFilter<"price_snapshots">;
    created_at?: Prisma.DateTimeFilter<"price_snapshots"> | Date | string;
    printing_finishes?: Prisma.XOR<Prisma.Printing_finishesScalarRelationFilter, Prisma.printing_finishesWhereInput>;
    transaction_items?: Prisma.Transaction_itemsListRelationFilter;
}, "id">;
export type price_snapshotsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    printing_id?: Prisma.SortOrder;
    finish?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_ref?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    market_price?: Prisma.SortOrderInput | Prisma.SortOrder;
    low_price?: Prisma.SortOrderInput | Prisma.SortOrder;
    mid_price?: Prisma.SortOrderInput | Prisma.SortOrder;
    high_price?: Prisma.SortOrderInput | Prisma.SortOrder;
    direct_price?: Prisma.SortOrderInput | Prisma.SortOrder;
    captured_at?: Prisma.SortOrder;
    raw_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.price_snapshotsCountOrderByAggregateInput;
    _avg?: Prisma.price_snapshotsAvgOrderByAggregateInput;
    _max?: Prisma.price_snapshotsMaxOrderByAggregateInput;
    _min?: Prisma.price_snapshotsMinOrderByAggregateInput;
    _sum?: Prisma.price_snapshotsSumOrderByAggregateInput;
};
export type price_snapshotsScalarWhereWithAggregatesInput = {
    AND?: Prisma.price_snapshotsScalarWhereWithAggregatesInput | Prisma.price_snapshotsScalarWhereWithAggregatesInput[];
    OR?: Prisma.price_snapshotsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.price_snapshotsScalarWhereWithAggregatesInput | Prisma.price_snapshotsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"price_snapshots"> | string;
    printing_id?: Prisma.UuidWithAggregatesFilter<"price_snapshots"> | string;
    finish?: Prisma.StringWithAggregatesFilter<"price_snapshots"> | string;
    condition?: Prisma.StringWithAggregatesFilter<"price_snapshots"> | string;
    source?: Prisma.StringWithAggregatesFilter<"price_snapshots"> | string;
    source_ref?: Prisma.StringNullableWithAggregatesFilter<"price_snapshots"> | string | null;
    currency_code?: Prisma.StringWithAggregatesFilter<"price_snapshots"> | string;
    market_price?: Prisma.DecimalNullableWithAggregatesFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: Prisma.DecimalNullableWithAggregatesFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: Prisma.DecimalNullableWithAggregatesFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: Prisma.DecimalNullableWithAggregatesFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: Prisma.DecimalNullableWithAggregatesFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Prisma.DateTimeWithAggregatesFilter<"price_snapshots"> | Date | string;
    raw_data?: Prisma.JsonNullableWithAggregatesFilter<"price_snapshots">;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"price_snapshots"> | Date | string;
};
export type price_snapshotsCreateInput = {
    id?: string;
    condition?: string;
    source: string;
    source_ref?: string | null;
    currency_code?: string;
    market_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Date | string;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutPrice_snapshotsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutPrice_snapshotsInput;
};
export type price_snapshotsUncheckedCreateInput = {
    id?: string;
    printing_id: string;
    finish: string;
    condition?: string;
    source: string;
    source_ref?: string | null;
    currency_code?: string;
    market_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Date | string;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutPrice_snapshotsInput;
};
export type price_snapshotsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    market_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutPrice_snapshotsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutPrice_snapshotsNestedInput;
};
export type price_snapshotsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    market_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutPrice_snapshotsNestedInput;
};
export type price_snapshotsCreateManyInput = {
    id?: string;
    printing_id: string;
    finish: string;
    condition?: string;
    source: string;
    source_ref?: string | null;
    currency_code?: string;
    market_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Date | string;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
};
export type price_snapshotsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    market_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type price_snapshotsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    market_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type price_snapshotsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    printing_id?: Prisma.SortOrder;
    finish?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_ref?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    market_price?: Prisma.SortOrder;
    low_price?: Prisma.SortOrder;
    mid_price?: Prisma.SortOrder;
    high_price?: Prisma.SortOrder;
    direct_price?: Prisma.SortOrder;
    captured_at?: Prisma.SortOrder;
    raw_data?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type price_snapshotsAvgOrderByAggregateInput = {
    market_price?: Prisma.SortOrder;
    low_price?: Prisma.SortOrder;
    mid_price?: Prisma.SortOrder;
    high_price?: Prisma.SortOrder;
    direct_price?: Prisma.SortOrder;
};
export type price_snapshotsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    printing_id?: Prisma.SortOrder;
    finish?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_ref?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    market_price?: Prisma.SortOrder;
    low_price?: Prisma.SortOrder;
    mid_price?: Prisma.SortOrder;
    high_price?: Prisma.SortOrder;
    direct_price?: Prisma.SortOrder;
    captured_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type price_snapshotsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    printing_id?: Prisma.SortOrder;
    finish?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    source_ref?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    market_price?: Prisma.SortOrder;
    low_price?: Prisma.SortOrder;
    mid_price?: Prisma.SortOrder;
    high_price?: Prisma.SortOrder;
    direct_price?: Prisma.SortOrder;
    captured_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type price_snapshotsSumOrderByAggregateInput = {
    market_price?: Prisma.SortOrder;
    low_price?: Prisma.SortOrder;
    mid_price?: Prisma.SortOrder;
    high_price?: Prisma.SortOrder;
    direct_price?: Prisma.SortOrder;
};
export type Price_snapshotsListRelationFilter = {
    every?: Prisma.price_snapshotsWhereInput;
    some?: Prisma.price_snapshotsWhereInput;
    none?: Prisma.price_snapshotsWhereInput;
};
export type price_snapshotsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Price_snapshotsNullableScalarRelationFilter = {
    is?: Prisma.price_snapshotsWhereInput | null;
    isNot?: Prisma.price_snapshotsWhereInput | null;
};
export type price_snapshotsCreateNestedManyWithoutPrinting_finishesInput = {
    create?: Prisma.XOR<Prisma.price_snapshotsCreateWithoutPrinting_finishesInput, Prisma.price_snapshotsUncheckedCreateWithoutPrinting_finishesInput> | Prisma.price_snapshotsCreateWithoutPrinting_finishesInput[] | Prisma.price_snapshotsUncheckedCreateWithoutPrinting_finishesInput[];
    connectOrCreate?: Prisma.price_snapshotsCreateOrConnectWithoutPrinting_finishesInput | Prisma.price_snapshotsCreateOrConnectWithoutPrinting_finishesInput[];
    createMany?: Prisma.price_snapshotsCreateManyPrinting_finishesInputEnvelope;
    connect?: Prisma.price_snapshotsWhereUniqueInput | Prisma.price_snapshotsWhereUniqueInput[];
};
export type price_snapshotsUncheckedCreateNestedManyWithoutPrinting_finishesInput = {
    create?: Prisma.XOR<Prisma.price_snapshotsCreateWithoutPrinting_finishesInput, Prisma.price_snapshotsUncheckedCreateWithoutPrinting_finishesInput> | Prisma.price_snapshotsCreateWithoutPrinting_finishesInput[] | Prisma.price_snapshotsUncheckedCreateWithoutPrinting_finishesInput[];
    connectOrCreate?: Prisma.price_snapshotsCreateOrConnectWithoutPrinting_finishesInput | Prisma.price_snapshotsCreateOrConnectWithoutPrinting_finishesInput[];
    createMany?: Prisma.price_snapshotsCreateManyPrinting_finishesInputEnvelope;
    connect?: Prisma.price_snapshotsWhereUniqueInput | Prisma.price_snapshotsWhereUniqueInput[];
};
export type price_snapshotsUpdateManyWithoutPrinting_finishesNestedInput = {
    create?: Prisma.XOR<Prisma.price_snapshotsCreateWithoutPrinting_finishesInput, Prisma.price_snapshotsUncheckedCreateWithoutPrinting_finishesInput> | Prisma.price_snapshotsCreateWithoutPrinting_finishesInput[] | Prisma.price_snapshotsUncheckedCreateWithoutPrinting_finishesInput[];
    connectOrCreate?: Prisma.price_snapshotsCreateOrConnectWithoutPrinting_finishesInput | Prisma.price_snapshotsCreateOrConnectWithoutPrinting_finishesInput[];
    upsert?: Prisma.price_snapshotsUpsertWithWhereUniqueWithoutPrinting_finishesInput | Prisma.price_snapshotsUpsertWithWhereUniqueWithoutPrinting_finishesInput[];
    createMany?: Prisma.price_snapshotsCreateManyPrinting_finishesInputEnvelope;
    set?: Prisma.price_snapshotsWhereUniqueInput | Prisma.price_snapshotsWhereUniqueInput[];
    disconnect?: Prisma.price_snapshotsWhereUniqueInput | Prisma.price_snapshotsWhereUniqueInput[];
    delete?: Prisma.price_snapshotsWhereUniqueInput | Prisma.price_snapshotsWhereUniqueInput[];
    connect?: Prisma.price_snapshotsWhereUniqueInput | Prisma.price_snapshotsWhereUniqueInput[];
    update?: Prisma.price_snapshotsUpdateWithWhereUniqueWithoutPrinting_finishesInput | Prisma.price_snapshotsUpdateWithWhereUniqueWithoutPrinting_finishesInput[];
    updateMany?: Prisma.price_snapshotsUpdateManyWithWhereWithoutPrinting_finishesInput | Prisma.price_snapshotsUpdateManyWithWhereWithoutPrinting_finishesInput[];
    deleteMany?: Prisma.price_snapshotsScalarWhereInput | Prisma.price_snapshotsScalarWhereInput[];
};
export type price_snapshotsUncheckedUpdateManyWithoutPrinting_finishesNestedInput = {
    create?: Prisma.XOR<Prisma.price_snapshotsCreateWithoutPrinting_finishesInput, Prisma.price_snapshotsUncheckedCreateWithoutPrinting_finishesInput> | Prisma.price_snapshotsCreateWithoutPrinting_finishesInput[] | Prisma.price_snapshotsUncheckedCreateWithoutPrinting_finishesInput[];
    connectOrCreate?: Prisma.price_snapshotsCreateOrConnectWithoutPrinting_finishesInput | Prisma.price_snapshotsCreateOrConnectWithoutPrinting_finishesInput[];
    upsert?: Prisma.price_snapshotsUpsertWithWhereUniqueWithoutPrinting_finishesInput | Prisma.price_snapshotsUpsertWithWhereUniqueWithoutPrinting_finishesInput[];
    createMany?: Prisma.price_snapshotsCreateManyPrinting_finishesInputEnvelope;
    set?: Prisma.price_snapshotsWhereUniqueInput | Prisma.price_snapshotsWhereUniqueInput[];
    disconnect?: Prisma.price_snapshotsWhereUniqueInput | Prisma.price_snapshotsWhereUniqueInput[];
    delete?: Prisma.price_snapshotsWhereUniqueInput | Prisma.price_snapshotsWhereUniqueInput[];
    connect?: Prisma.price_snapshotsWhereUniqueInput | Prisma.price_snapshotsWhereUniqueInput[];
    update?: Prisma.price_snapshotsUpdateWithWhereUniqueWithoutPrinting_finishesInput | Prisma.price_snapshotsUpdateWithWhereUniqueWithoutPrinting_finishesInput[];
    updateMany?: Prisma.price_snapshotsUpdateManyWithWhereWithoutPrinting_finishesInput | Prisma.price_snapshotsUpdateManyWithWhereWithoutPrinting_finishesInput[];
    deleteMany?: Prisma.price_snapshotsScalarWhereInput | Prisma.price_snapshotsScalarWhereInput[];
};
export type price_snapshotsCreateNestedOneWithoutTransaction_itemsInput = {
    create?: Prisma.XOR<Prisma.price_snapshotsCreateWithoutTransaction_itemsInput, Prisma.price_snapshotsUncheckedCreateWithoutTransaction_itemsInput>;
    connectOrCreate?: Prisma.price_snapshotsCreateOrConnectWithoutTransaction_itemsInput;
    connect?: Prisma.price_snapshotsWhereUniqueInput;
};
export type price_snapshotsUpdateOneWithoutTransaction_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.price_snapshotsCreateWithoutTransaction_itemsInput, Prisma.price_snapshotsUncheckedCreateWithoutTransaction_itemsInput>;
    connectOrCreate?: Prisma.price_snapshotsCreateOrConnectWithoutTransaction_itemsInput;
    upsert?: Prisma.price_snapshotsUpsertWithoutTransaction_itemsInput;
    disconnect?: Prisma.price_snapshotsWhereInput | boolean;
    delete?: Prisma.price_snapshotsWhereInput | boolean;
    connect?: Prisma.price_snapshotsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.price_snapshotsUpdateToOneWithWhereWithoutTransaction_itemsInput, Prisma.price_snapshotsUpdateWithoutTransaction_itemsInput>, Prisma.price_snapshotsUncheckedUpdateWithoutTransaction_itemsInput>;
};
export type price_snapshotsCreateWithoutPrinting_finishesInput = {
    id?: string;
    condition?: string;
    source: string;
    source_ref?: string | null;
    currency_code?: string;
    market_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Date | string;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutPrice_snapshotsInput;
};
export type price_snapshotsUncheckedCreateWithoutPrinting_finishesInput = {
    id?: string;
    condition?: string;
    source: string;
    source_ref?: string | null;
    currency_code?: string;
    market_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Date | string;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutPrice_snapshotsInput;
};
export type price_snapshotsCreateOrConnectWithoutPrinting_finishesInput = {
    where: Prisma.price_snapshotsWhereUniqueInput;
    create: Prisma.XOR<Prisma.price_snapshotsCreateWithoutPrinting_finishesInput, Prisma.price_snapshotsUncheckedCreateWithoutPrinting_finishesInput>;
};
export type price_snapshotsCreateManyPrinting_finishesInputEnvelope = {
    data: Prisma.price_snapshotsCreateManyPrinting_finishesInput | Prisma.price_snapshotsCreateManyPrinting_finishesInput[];
    skipDuplicates?: boolean;
};
export type price_snapshotsUpsertWithWhereUniqueWithoutPrinting_finishesInput = {
    where: Prisma.price_snapshotsWhereUniqueInput;
    update: Prisma.XOR<Prisma.price_snapshotsUpdateWithoutPrinting_finishesInput, Prisma.price_snapshotsUncheckedUpdateWithoutPrinting_finishesInput>;
    create: Prisma.XOR<Prisma.price_snapshotsCreateWithoutPrinting_finishesInput, Prisma.price_snapshotsUncheckedCreateWithoutPrinting_finishesInput>;
};
export type price_snapshotsUpdateWithWhereUniqueWithoutPrinting_finishesInput = {
    where: Prisma.price_snapshotsWhereUniqueInput;
    data: Prisma.XOR<Prisma.price_snapshotsUpdateWithoutPrinting_finishesInput, Prisma.price_snapshotsUncheckedUpdateWithoutPrinting_finishesInput>;
};
export type price_snapshotsUpdateManyWithWhereWithoutPrinting_finishesInput = {
    where: Prisma.price_snapshotsScalarWhereInput;
    data: Prisma.XOR<Prisma.price_snapshotsUpdateManyMutationInput, Prisma.price_snapshotsUncheckedUpdateManyWithoutPrinting_finishesInput>;
};
export type price_snapshotsScalarWhereInput = {
    AND?: Prisma.price_snapshotsScalarWhereInput | Prisma.price_snapshotsScalarWhereInput[];
    OR?: Prisma.price_snapshotsScalarWhereInput[];
    NOT?: Prisma.price_snapshotsScalarWhereInput | Prisma.price_snapshotsScalarWhereInput[];
    id?: Prisma.UuidFilter<"price_snapshots"> | string;
    printing_id?: Prisma.UuidFilter<"price_snapshots"> | string;
    finish?: Prisma.StringFilter<"price_snapshots"> | string;
    condition?: Prisma.StringFilter<"price_snapshots"> | string;
    source?: Prisma.StringFilter<"price_snapshots"> | string;
    source_ref?: Prisma.StringNullableFilter<"price_snapshots"> | string | null;
    currency_code?: Prisma.StringFilter<"price_snapshots"> | string;
    market_price?: Prisma.DecimalNullableFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: Prisma.DecimalNullableFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: Prisma.DecimalNullableFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: Prisma.DecimalNullableFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: Prisma.DecimalNullableFilter<"price_snapshots"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Prisma.DateTimeFilter<"price_snapshots"> | Date | string;
    raw_data?: Prisma.JsonNullableFilter<"price_snapshots">;
    created_at?: Prisma.DateTimeFilter<"price_snapshots"> | Date | string;
};
export type price_snapshotsCreateWithoutTransaction_itemsInput = {
    id?: string;
    condition?: string;
    source: string;
    source_ref?: string | null;
    currency_code?: string;
    market_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Date | string;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutPrice_snapshotsInput;
};
export type price_snapshotsUncheckedCreateWithoutTransaction_itemsInput = {
    id?: string;
    printing_id: string;
    finish: string;
    condition?: string;
    source: string;
    source_ref?: string | null;
    currency_code?: string;
    market_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Date | string;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
};
export type price_snapshotsCreateOrConnectWithoutTransaction_itemsInput = {
    where: Prisma.price_snapshotsWhereUniqueInput;
    create: Prisma.XOR<Prisma.price_snapshotsCreateWithoutTransaction_itemsInput, Prisma.price_snapshotsUncheckedCreateWithoutTransaction_itemsInput>;
};
export type price_snapshotsUpsertWithoutTransaction_itemsInput = {
    update: Prisma.XOR<Prisma.price_snapshotsUpdateWithoutTransaction_itemsInput, Prisma.price_snapshotsUncheckedUpdateWithoutTransaction_itemsInput>;
    create: Prisma.XOR<Prisma.price_snapshotsCreateWithoutTransaction_itemsInput, Prisma.price_snapshotsUncheckedCreateWithoutTransaction_itemsInput>;
    where?: Prisma.price_snapshotsWhereInput;
};
export type price_snapshotsUpdateToOneWithWhereWithoutTransaction_itemsInput = {
    where?: Prisma.price_snapshotsWhereInput;
    data: Prisma.XOR<Prisma.price_snapshotsUpdateWithoutTransaction_itemsInput, Prisma.price_snapshotsUncheckedUpdateWithoutTransaction_itemsInput>;
};
export type price_snapshotsUpdateWithoutTransaction_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    market_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutPrice_snapshotsNestedInput;
};
export type price_snapshotsUncheckedUpdateWithoutTransaction_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    market_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type price_snapshotsCreateManyPrinting_finishesInput = {
    id?: string;
    condition?: string;
    source: string;
    source_ref?: string | null;
    currency_code?: string;
    market_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Date | string;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
};
export type price_snapshotsUpdateWithoutPrinting_finishesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    market_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutPrice_snapshotsNestedInput;
};
export type price_snapshotsUncheckedUpdateWithoutPrinting_finishesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    market_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutPrice_snapshotsNestedInput;
};
export type price_snapshotsUncheckedUpdateManyWithoutPrinting_finishesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.StringFieldUpdateOperationsInput | string;
    source_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    market_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    low_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mid_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    high_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    direct_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    captured_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    raw_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type Price_snapshotsCountOutputType
 */
export type Price_snapshotsCountOutputType = {
    transaction_items: number;
};
export type Price_snapshotsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    transaction_items?: boolean | Price_snapshotsCountOutputTypeCountTransaction_itemsArgs;
};
/**
 * Price_snapshotsCountOutputType without action
 */
export type Price_snapshotsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price_snapshotsCountOutputType
     */
    select?: Prisma.Price_snapshotsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Price_snapshotsCountOutputType without action
 */
export type Price_snapshotsCountOutputTypeCountTransaction_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transaction_itemsWhereInput;
};
export type price_snapshotsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    printing_id?: boolean;
    finish?: boolean;
    condition?: boolean;
    source?: boolean;
    source_ref?: boolean;
    currency_code?: boolean;
    market_price?: boolean;
    low_price?: boolean;
    mid_price?: boolean;
    high_price?: boolean;
    direct_price?: boolean;
    captured_at?: boolean;
    raw_data?: boolean;
    created_at?: boolean;
    printing_finishes?: boolean | Prisma.printing_finishesDefaultArgs<ExtArgs>;
    transaction_items?: boolean | Prisma.price_snapshots$transaction_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Price_snapshotsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["price_snapshots"]>;
export type price_snapshotsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    printing_id?: boolean;
    finish?: boolean;
    condition?: boolean;
    source?: boolean;
    source_ref?: boolean;
    currency_code?: boolean;
    market_price?: boolean;
    low_price?: boolean;
    mid_price?: boolean;
    high_price?: boolean;
    direct_price?: boolean;
    captured_at?: boolean;
    raw_data?: boolean;
    created_at?: boolean;
    printing_finishes?: boolean | Prisma.printing_finishesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["price_snapshots"]>;
export type price_snapshotsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    printing_id?: boolean;
    finish?: boolean;
    condition?: boolean;
    source?: boolean;
    source_ref?: boolean;
    currency_code?: boolean;
    market_price?: boolean;
    low_price?: boolean;
    mid_price?: boolean;
    high_price?: boolean;
    direct_price?: boolean;
    captured_at?: boolean;
    raw_data?: boolean;
    created_at?: boolean;
    printing_finishes?: boolean | Prisma.printing_finishesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["price_snapshots"]>;
export type price_snapshotsSelectScalar = {
    id?: boolean;
    printing_id?: boolean;
    finish?: boolean;
    condition?: boolean;
    source?: boolean;
    source_ref?: boolean;
    currency_code?: boolean;
    market_price?: boolean;
    low_price?: boolean;
    mid_price?: boolean;
    high_price?: boolean;
    direct_price?: boolean;
    captured_at?: boolean;
    raw_data?: boolean;
    created_at?: boolean;
};
export type price_snapshotsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "printing_id" | "finish" | "condition" | "source" | "source_ref" | "currency_code" | "market_price" | "low_price" | "mid_price" | "high_price" | "direct_price" | "captured_at" | "raw_data" | "created_at", ExtArgs["result"]["price_snapshots"]>;
export type price_snapshotsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    printing_finishes?: boolean | Prisma.printing_finishesDefaultArgs<ExtArgs>;
    transaction_items?: boolean | Prisma.price_snapshots$transaction_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Price_snapshotsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type price_snapshotsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    printing_finishes?: boolean | Prisma.printing_finishesDefaultArgs<ExtArgs>;
};
export type price_snapshotsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    printing_finishes?: boolean | Prisma.printing_finishesDefaultArgs<ExtArgs>;
};
export type $price_snapshotsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "price_snapshots";
    objects: {
        printing_finishes: Prisma.$printing_finishesPayload<ExtArgs>;
        transaction_items: Prisma.$transaction_itemsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        printing_id: string;
        finish: string;
        condition: string;
        source: string;
        source_ref: string | null;
        currency_code: string;
        market_price: runtime.Decimal | null;
        low_price: runtime.Decimal | null;
        mid_price: runtime.Decimal | null;
        high_price: runtime.Decimal | null;
        direct_price: runtime.Decimal | null;
        captured_at: Date;
        raw_data: runtime.JsonValue | null;
        created_at: Date;
    }, ExtArgs["result"]["price_snapshots"]>;
    composites: {};
};
export type price_snapshotsGetPayload<S extends boolean | null | undefined | price_snapshotsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$price_snapshotsPayload, S>;
export type price_snapshotsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<price_snapshotsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Price_snapshotsCountAggregateInputType | true;
};
export interface price_snapshotsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['price_snapshots'];
        meta: {
            name: 'price_snapshots';
        };
    };
    /**
     * Find zero or one Price_snapshots that matches the filter.
     * @param {price_snapshotsFindUniqueArgs} args - Arguments to find a Price_snapshots
     * @example
     * // Get one Price_snapshots
     * const price_snapshots = await prisma.price_snapshots.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends price_snapshotsFindUniqueArgs>(args: Prisma.SelectSubset<T, price_snapshotsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__price_snapshotsClient<runtime.Types.Result.GetResult<Prisma.$price_snapshotsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Price_snapshots that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {price_snapshotsFindUniqueOrThrowArgs} args - Arguments to find a Price_snapshots
     * @example
     * // Get one Price_snapshots
     * const price_snapshots = await prisma.price_snapshots.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends price_snapshotsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, price_snapshotsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__price_snapshotsClient<runtime.Types.Result.GetResult<Prisma.$price_snapshotsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Price_snapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_snapshotsFindFirstArgs} args - Arguments to find a Price_snapshots
     * @example
     * // Get one Price_snapshots
     * const price_snapshots = await prisma.price_snapshots.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends price_snapshotsFindFirstArgs>(args?: Prisma.SelectSubset<T, price_snapshotsFindFirstArgs<ExtArgs>>): Prisma.Prisma__price_snapshotsClient<runtime.Types.Result.GetResult<Prisma.$price_snapshotsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Price_snapshots that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_snapshotsFindFirstOrThrowArgs} args - Arguments to find a Price_snapshots
     * @example
     * // Get one Price_snapshots
     * const price_snapshots = await prisma.price_snapshots.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends price_snapshotsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, price_snapshotsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__price_snapshotsClient<runtime.Types.Result.GetResult<Prisma.$price_snapshotsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Price_snapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_snapshotsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Price_snapshots
     * const price_snapshots = await prisma.price_snapshots.findMany()
     *
     * // Get first 10 Price_snapshots
     * const price_snapshots = await prisma.price_snapshots.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const price_snapshotsWithIdOnly = await prisma.price_snapshots.findMany({ select: { id: true } })
     *
     */
    findMany<T extends price_snapshotsFindManyArgs>(args?: Prisma.SelectSubset<T, price_snapshotsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$price_snapshotsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Price_snapshots.
     * @param {price_snapshotsCreateArgs} args - Arguments to create a Price_snapshots.
     * @example
     * // Create one Price_snapshots
     * const Price_snapshots = await prisma.price_snapshots.create({
     *   data: {
     *     // ... data to create a Price_snapshots
     *   }
     * })
     *
     */
    create<T extends price_snapshotsCreateArgs>(args: Prisma.SelectSubset<T, price_snapshotsCreateArgs<ExtArgs>>): Prisma.Prisma__price_snapshotsClient<runtime.Types.Result.GetResult<Prisma.$price_snapshotsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Price_snapshots.
     * @param {price_snapshotsCreateManyArgs} args - Arguments to create many Price_snapshots.
     * @example
     * // Create many Price_snapshots
     * const price_snapshots = await prisma.price_snapshots.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends price_snapshotsCreateManyArgs>(args?: Prisma.SelectSubset<T, price_snapshotsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Price_snapshots and returns the data saved in the database.
     * @param {price_snapshotsCreateManyAndReturnArgs} args - Arguments to create many Price_snapshots.
     * @example
     * // Create many Price_snapshots
     * const price_snapshots = await prisma.price_snapshots.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Price_snapshots and only return the `id`
     * const price_snapshotsWithIdOnly = await prisma.price_snapshots.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends price_snapshotsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, price_snapshotsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$price_snapshotsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Price_snapshots.
     * @param {price_snapshotsDeleteArgs} args - Arguments to delete one Price_snapshots.
     * @example
     * // Delete one Price_snapshots
     * const Price_snapshots = await prisma.price_snapshots.delete({
     *   where: {
     *     // ... filter to delete one Price_snapshots
     *   }
     * })
     *
     */
    delete<T extends price_snapshotsDeleteArgs>(args: Prisma.SelectSubset<T, price_snapshotsDeleteArgs<ExtArgs>>): Prisma.Prisma__price_snapshotsClient<runtime.Types.Result.GetResult<Prisma.$price_snapshotsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Price_snapshots.
     * @param {price_snapshotsUpdateArgs} args - Arguments to update one Price_snapshots.
     * @example
     * // Update one Price_snapshots
     * const price_snapshots = await prisma.price_snapshots.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends price_snapshotsUpdateArgs>(args: Prisma.SelectSubset<T, price_snapshotsUpdateArgs<ExtArgs>>): Prisma.Prisma__price_snapshotsClient<runtime.Types.Result.GetResult<Prisma.$price_snapshotsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Price_snapshots.
     * @param {price_snapshotsDeleteManyArgs} args - Arguments to filter Price_snapshots to delete.
     * @example
     * // Delete a few Price_snapshots
     * const { count } = await prisma.price_snapshots.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends price_snapshotsDeleteManyArgs>(args?: Prisma.SelectSubset<T, price_snapshotsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Price_snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_snapshotsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Price_snapshots
     * const price_snapshots = await prisma.price_snapshots.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends price_snapshotsUpdateManyArgs>(args: Prisma.SelectSubset<T, price_snapshotsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Price_snapshots and returns the data updated in the database.
     * @param {price_snapshotsUpdateManyAndReturnArgs} args - Arguments to update many Price_snapshots.
     * @example
     * // Update many Price_snapshots
     * const price_snapshots = await prisma.price_snapshots.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Price_snapshots and only return the `id`
     * const price_snapshotsWithIdOnly = await prisma.price_snapshots.updateManyAndReturn({
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
    updateManyAndReturn<T extends price_snapshotsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, price_snapshotsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$price_snapshotsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Price_snapshots.
     * @param {price_snapshotsUpsertArgs} args - Arguments to update or create a Price_snapshots.
     * @example
     * // Update or create a Price_snapshots
     * const price_snapshots = await prisma.price_snapshots.upsert({
     *   create: {
     *     // ... data to create a Price_snapshots
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Price_snapshots we want to update
     *   }
     * })
     */
    upsert<T extends price_snapshotsUpsertArgs>(args: Prisma.SelectSubset<T, price_snapshotsUpsertArgs<ExtArgs>>): Prisma.Prisma__price_snapshotsClient<runtime.Types.Result.GetResult<Prisma.$price_snapshotsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Price_snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_snapshotsCountArgs} args - Arguments to filter Price_snapshots to count.
     * @example
     * // Count the number of Price_snapshots
     * const count = await prisma.price_snapshots.count({
     *   where: {
     *     // ... the filter for the Price_snapshots we want to count
     *   }
     * })
    **/
    count<T extends price_snapshotsCountArgs>(args?: Prisma.Subset<T, price_snapshotsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Price_snapshotsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Price_snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Price_snapshotsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Price_snapshotsAggregateArgs>(args: Prisma.Subset<T, Price_snapshotsAggregateArgs>): Prisma.PrismaPromise<GetPrice_snapshotsAggregateType<T>>;
    /**
     * Group by Price_snapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {price_snapshotsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends price_snapshotsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: price_snapshotsGroupByArgs['orderBy'];
    } : {
        orderBy?: price_snapshotsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, price_snapshotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrice_snapshotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the price_snapshots model
     */
    readonly fields: price_snapshotsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for price_snapshots.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__price_snapshotsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    printing_finishes<T extends Prisma.printing_finishesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.printing_finishesDefaultArgs<ExtArgs>>): Prisma.Prisma__printing_finishesClient<runtime.Types.Result.GetResult<Prisma.$printing_finishesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    transaction_items<T extends Prisma.price_snapshots$transaction_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.price_snapshots$transaction_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the price_snapshots model
 */
export interface price_snapshotsFieldRefs {
    readonly id: Prisma.FieldRef<"price_snapshots", 'String'>;
    readonly printing_id: Prisma.FieldRef<"price_snapshots", 'String'>;
    readonly finish: Prisma.FieldRef<"price_snapshots", 'String'>;
    readonly condition: Prisma.FieldRef<"price_snapshots", 'String'>;
    readonly source: Prisma.FieldRef<"price_snapshots", 'String'>;
    readonly source_ref: Prisma.FieldRef<"price_snapshots", 'String'>;
    readonly currency_code: Prisma.FieldRef<"price_snapshots", 'String'>;
    readonly market_price: Prisma.FieldRef<"price_snapshots", 'Decimal'>;
    readonly low_price: Prisma.FieldRef<"price_snapshots", 'Decimal'>;
    readonly mid_price: Prisma.FieldRef<"price_snapshots", 'Decimal'>;
    readonly high_price: Prisma.FieldRef<"price_snapshots", 'Decimal'>;
    readonly direct_price: Prisma.FieldRef<"price_snapshots", 'Decimal'>;
    readonly captured_at: Prisma.FieldRef<"price_snapshots", 'DateTime'>;
    readonly raw_data: Prisma.FieldRef<"price_snapshots", 'Json'>;
    readonly created_at: Prisma.FieldRef<"price_snapshots", 'DateTime'>;
}
/**
 * price_snapshots findUnique
 */
export type price_snapshotsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which price_snapshots to fetch.
     */
    where: Prisma.price_snapshotsWhereUniqueInput;
};
/**
 * price_snapshots findUniqueOrThrow
 */
export type price_snapshotsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which price_snapshots to fetch.
     */
    where: Prisma.price_snapshotsWhereUniqueInput;
};
/**
 * price_snapshots findFirst
 */
export type price_snapshotsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which price_snapshots to fetch.
     */
    where?: Prisma.price_snapshotsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of price_snapshots to fetch.
     */
    orderBy?: Prisma.price_snapshotsOrderByWithRelationInput | Prisma.price_snapshotsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for price_snapshots.
     */
    cursor?: Prisma.price_snapshotsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` price_snapshots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` price_snapshots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of price_snapshots.
     */
    distinct?: Prisma.Price_snapshotsScalarFieldEnum | Prisma.Price_snapshotsScalarFieldEnum[];
};
/**
 * price_snapshots findFirstOrThrow
 */
export type price_snapshotsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which price_snapshots to fetch.
     */
    where?: Prisma.price_snapshotsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of price_snapshots to fetch.
     */
    orderBy?: Prisma.price_snapshotsOrderByWithRelationInput | Prisma.price_snapshotsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for price_snapshots.
     */
    cursor?: Prisma.price_snapshotsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` price_snapshots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` price_snapshots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of price_snapshots.
     */
    distinct?: Prisma.Price_snapshotsScalarFieldEnum | Prisma.Price_snapshotsScalarFieldEnum[];
};
/**
 * price_snapshots findMany
 */
export type price_snapshotsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which price_snapshots to fetch.
     */
    where?: Prisma.price_snapshotsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of price_snapshots to fetch.
     */
    orderBy?: Prisma.price_snapshotsOrderByWithRelationInput | Prisma.price_snapshotsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing price_snapshots.
     */
    cursor?: Prisma.price_snapshotsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` price_snapshots from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` price_snapshots.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of price_snapshots.
     */
    distinct?: Prisma.Price_snapshotsScalarFieldEnum | Prisma.Price_snapshotsScalarFieldEnum[];
};
/**
 * price_snapshots create
 */
export type price_snapshotsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a price_snapshots.
     */
    data: Prisma.XOR<Prisma.price_snapshotsCreateInput, Prisma.price_snapshotsUncheckedCreateInput>;
};
/**
 * price_snapshots createMany
 */
export type price_snapshotsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many price_snapshots.
     */
    data: Prisma.price_snapshotsCreateManyInput | Prisma.price_snapshotsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * price_snapshots createManyAndReturn
 */
export type price_snapshotsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_snapshots
     */
    select?: Prisma.price_snapshotsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the price_snapshots
     */
    omit?: Prisma.price_snapshotsOmit<ExtArgs> | null;
    /**
     * The data used to create many price_snapshots.
     */
    data: Prisma.price_snapshotsCreateManyInput | Prisma.price_snapshotsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.price_snapshotsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * price_snapshots update
 */
export type price_snapshotsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a price_snapshots.
     */
    data: Prisma.XOR<Prisma.price_snapshotsUpdateInput, Prisma.price_snapshotsUncheckedUpdateInput>;
    /**
     * Choose, which price_snapshots to update.
     */
    where: Prisma.price_snapshotsWhereUniqueInput;
};
/**
 * price_snapshots updateMany
 */
export type price_snapshotsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update price_snapshots.
     */
    data: Prisma.XOR<Prisma.price_snapshotsUpdateManyMutationInput, Prisma.price_snapshotsUncheckedUpdateManyInput>;
    /**
     * Filter which price_snapshots to update
     */
    where?: Prisma.price_snapshotsWhereInput;
    /**
     * Limit how many price_snapshots to update.
     */
    limit?: number;
};
/**
 * price_snapshots updateManyAndReturn
 */
export type price_snapshotsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the price_snapshots
     */
    select?: Prisma.price_snapshotsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the price_snapshots
     */
    omit?: Prisma.price_snapshotsOmit<ExtArgs> | null;
    /**
     * The data used to update price_snapshots.
     */
    data: Prisma.XOR<Prisma.price_snapshotsUpdateManyMutationInput, Prisma.price_snapshotsUncheckedUpdateManyInput>;
    /**
     * Filter which price_snapshots to update
     */
    where?: Prisma.price_snapshotsWhereInput;
    /**
     * Limit how many price_snapshots to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.price_snapshotsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * price_snapshots upsert
 */
export type price_snapshotsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the price_snapshots to update in case it exists.
     */
    where: Prisma.price_snapshotsWhereUniqueInput;
    /**
     * In case the price_snapshots found by the `where` argument doesn't exist, create a new price_snapshots with this data.
     */
    create: Prisma.XOR<Prisma.price_snapshotsCreateInput, Prisma.price_snapshotsUncheckedCreateInput>;
    /**
     * In case the price_snapshots was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.price_snapshotsUpdateInput, Prisma.price_snapshotsUncheckedUpdateInput>;
};
/**
 * price_snapshots delete
 */
export type price_snapshotsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which price_snapshots to delete.
     */
    where: Prisma.price_snapshotsWhereUniqueInput;
};
/**
 * price_snapshots deleteMany
 */
export type price_snapshotsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which price_snapshots to delete
     */
    where?: Prisma.price_snapshotsWhereInput;
    /**
     * Limit how many price_snapshots to delete.
     */
    limit?: number;
};
/**
 * price_snapshots.transaction_items
 */
export type price_snapshots$transaction_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * price_snapshots without action
 */
export type price_snapshotsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
