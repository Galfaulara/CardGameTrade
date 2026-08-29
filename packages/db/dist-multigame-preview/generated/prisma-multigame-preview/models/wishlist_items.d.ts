import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model wishlist_items
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type wishlist_itemsModel = runtime.Types.Result.DefaultSelection<Prisma.$wishlist_itemsPayload>;
export type AggregateWishlist_items = {
    _count: Wishlist_itemsCountAggregateOutputType | null;
    _avg: Wishlist_itemsAvgAggregateOutputType | null;
    _sum: Wishlist_itemsSumAggregateOutputType | null;
    _min: Wishlist_itemsMinAggregateOutputType | null;
    _max: Wishlist_itemsMaxAggregateOutputType | null;
};
export type Wishlist_itemsAvgAggregateOutputType = {
    quantity_desired: number | null;
    max_cash_amount: runtime.Decimal | null;
};
export type Wishlist_itemsSumAggregateOutputType = {
    quantity_desired: number | null;
    max_cash_amount: runtime.Decimal | null;
};
export type Wishlist_itemsMinAggregateOutputType = {
    id: string | null;
    wishlist_id: string | null;
    canonical_card_id: string | null;
    printing_id: string | null;
    desired_finish: string | null;
    desired_condition: string | null;
    language_code: string | null;
    quantity_desired: number | null;
    priority: string | null;
    notes: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    willing_to_pay_cash: boolean | null;
    willing_to_trade_cards: boolean | null;
    max_cash_amount: runtime.Decimal | null;
    currency_code: string | null;
    trade_notes: string | null;
    game_id: string | null;
};
export type Wishlist_itemsMaxAggregateOutputType = {
    id: string | null;
    wishlist_id: string | null;
    canonical_card_id: string | null;
    printing_id: string | null;
    desired_finish: string | null;
    desired_condition: string | null;
    language_code: string | null;
    quantity_desired: number | null;
    priority: string | null;
    notes: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    willing_to_pay_cash: boolean | null;
    willing_to_trade_cards: boolean | null;
    max_cash_amount: runtime.Decimal | null;
    currency_code: string | null;
    trade_notes: string | null;
    game_id: string | null;
};
export type Wishlist_itemsCountAggregateOutputType = {
    id: number;
    wishlist_id: number;
    canonical_card_id: number;
    printing_id: number;
    desired_finish: number;
    desired_condition: number;
    language_code: number;
    quantity_desired: number;
    priority: number;
    notes: number;
    status: number;
    created_at: number;
    updated_at: number;
    willing_to_pay_cash: number;
    willing_to_trade_cards: number;
    max_cash_amount: number;
    currency_code: number;
    trade_notes: number;
    game_id: number;
    _all: number;
};
export type Wishlist_itemsAvgAggregateInputType = {
    quantity_desired?: true;
    max_cash_amount?: true;
};
export type Wishlist_itemsSumAggregateInputType = {
    quantity_desired?: true;
    max_cash_amount?: true;
};
export type Wishlist_itemsMinAggregateInputType = {
    id?: true;
    wishlist_id?: true;
    canonical_card_id?: true;
    printing_id?: true;
    desired_finish?: true;
    desired_condition?: true;
    language_code?: true;
    quantity_desired?: true;
    priority?: true;
    notes?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    willing_to_pay_cash?: true;
    willing_to_trade_cards?: true;
    max_cash_amount?: true;
    currency_code?: true;
    trade_notes?: true;
    game_id?: true;
};
export type Wishlist_itemsMaxAggregateInputType = {
    id?: true;
    wishlist_id?: true;
    canonical_card_id?: true;
    printing_id?: true;
    desired_finish?: true;
    desired_condition?: true;
    language_code?: true;
    quantity_desired?: true;
    priority?: true;
    notes?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    willing_to_pay_cash?: true;
    willing_to_trade_cards?: true;
    max_cash_amount?: true;
    currency_code?: true;
    trade_notes?: true;
    game_id?: true;
};
export type Wishlist_itemsCountAggregateInputType = {
    id?: true;
    wishlist_id?: true;
    canonical_card_id?: true;
    printing_id?: true;
    desired_finish?: true;
    desired_condition?: true;
    language_code?: true;
    quantity_desired?: true;
    priority?: true;
    notes?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    willing_to_pay_cash?: true;
    willing_to_trade_cards?: true;
    max_cash_amount?: true;
    currency_code?: true;
    trade_notes?: true;
    game_id?: true;
    _all?: true;
};
export type Wishlist_itemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which wishlist_items to aggregate.
     */
    where?: Prisma.wishlist_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlist_items to fetch.
     */
    orderBy?: Prisma.wishlist_itemsOrderByWithRelationInput | Prisma.wishlist_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.wishlist_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlist_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlist_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned wishlist_items
    **/
    _count?: true | Wishlist_itemsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Wishlist_itemsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Wishlist_itemsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Wishlist_itemsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Wishlist_itemsMaxAggregateInputType;
};
export type GetWishlist_itemsAggregateType<T extends Wishlist_itemsAggregateArgs> = {
    [P in keyof T & keyof AggregateWishlist_items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWishlist_items[P]> : Prisma.GetScalarType<T[P], AggregateWishlist_items[P]>;
};
export type wishlist_itemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_itemsWhereInput;
    orderBy?: Prisma.wishlist_itemsOrderByWithAggregationInput | Prisma.wishlist_itemsOrderByWithAggregationInput[];
    by: Prisma.Wishlist_itemsScalarFieldEnum[] | Prisma.Wishlist_itemsScalarFieldEnum;
    having?: Prisma.wishlist_itemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Wishlist_itemsCountAggregateInputType | true;
    _avg?: Wishlist_itemsAvgAggregateInputType;
    _sum?: Wishlist_itemsSumAggregateInputType;
    _min?: Wishlist_itemsMinAggregateInputType;
    _max?: Wishlist_itemsMaxAggregateInputType;
};
export type Wishlist_itemsGroupByOutputType = {
    id: string;
    wishlist_id: string;
    canonical_card_id: string | null;
    printing_id: string | null;
    desired_finish: string | null;
    desired_condition: string | null;
    language_code: string | null;
    quantity_desired: number;
    priority: string;
    notes: string | null;
    status: string;
    created_at: Date;
    updated_at: Date;
    willing_to_pay_cash: boolean;
    willing_to_trade_cards: boolean;
    max_cash_amount: runtime.Decimal | null;
    currency_code: string | null;
    trade_notes: string | null;
    game_id: string;
    _count: Wishlist_itemsCountAggregateOutputType | null;
    _avg: Wishlist_itemsAvgAggregateOutputType | null;
    _sum: Wishlist_itemsSumAggregateOutputType | null;
    _min: Wishlist_itemsMinAggregateOutputType | null;
    _max: Wishlist_itemsMaxAggregateOutputType | null;
};
export type GetWishlist_itemsGroupByPayload<T extends wishlist_itemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Wishlist_itemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Wishlist_itemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Wishlist_itemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Wishlist_itemsGroupByOutputType[P]>;
}>>;
export type wishlist_itemsWhereInput = {
    AND?: Prisma.wishlist_itemsWhereInput | Prisma.wishlist_itemsWhereInput[];
    OR?: Prisma.wishlist_itemsWhereInput[];
    NOT?: Prisma.wishlist_itemsWhereInput | Prisma.wishlist_itemsWhereInput[];
    id?: Prisma.UuidFilter<"wishlist_items"> | string;
    wishlist_id?: Prisma.UuidFilter<"wishlist_items"> | string;
    canonical_card_id?: Prisma.UuidNullableFilter<"wishlist_items"> | string | null;
    printing_id?: Prisma.UuidNullableFilter<"wishlist_items"> | string | null;
    desired_finish?: Prisma.StringNullableFilter<"wishlist_items"> | string | null;
    desired_condition?: Prisma.StringNullableFilter<"wishlist_items"> | string | null;
    language_code?: Prisma.StringNullableFilter<"wishlist_items"> | string | null;
    quantity_desired?: Prisma.IntFilter<"wishlist_items"> | number;
    priority?: Prisma.StringFilter<"wishlist_items"> | string;
    notes?: Prisma.StringNullableFilter<"wishlist_items"> | string | null;
    status?: Prisma.StringFilter<"wishlist_items"> | string;
    created_at?: Prisma.DateTimeFilter<"wishlist_items"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"wishlist_items"> | Date | string;
    willing_to_pay_cash?: Prisma.BoolFilter<"wishlist_items"> | boolean;
    willing_to_trade_cards?: Prisma.BoolFilter<"wishlist_items"> | boolean;
    max_cash_amount?: Prisma.DecimalNullableFilter<"wishlist_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.StringNullableFilter<"wishlist_items"> | string | null;
    trade_notes?: Prisma.StringNullableFilter<"wishlist_items"> | string | null;
    game_id?: Prisma.UuidFilter<"wishlist_items"> | string;
    canonical_cards?: Prisma.XOR<Prisma.Canonical_cardsNullableScalarRelationFilter, Prisma.canonical_cardsWhereInput> | null;
    card_printings?: Prisma.XOR<Prisma.Card_printingsNullableScalarRelationFilter, Prisma.card_printingsWhereInput> | null;
    wishlists?: Prisma.XOR<Prisma.WishlistsScalarRelationFilter, Prisma.wishlistsWhereInput>;
    wishlist_offers?: Prisma.Wishlist_offersListRelationFilter;
};
export type wishlist_itemsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    wishlist_id?: Prisma.SortOrder;
    canonical_card_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    printing_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    desired_finish?: Prisma.SortOrderInput | Prisma.SortOrder;
    desired_condition?: Prisma.SortOrderInput | Prisma.SortOrder;
    language_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity_desired?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    willing_to_pay_cash?: Prisma.SortOrder;
    willing_to_trade_cards?: Prisma.SortOrder;
    max_cash_amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    trade_notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    canonical_cards?: Prisma.canonical_cardsOrderByWithRelationInput;
    card_printings?: Prisma.card_printingsOrderByWithRelationInput;
    wishlists?: Prisma.wishlistsOrderByWithRelationInput;
    wishlist_offers?: Prisma.wishlist_offersOrderByRelationAggregateInput;
};
export type wishlist_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    id_game_id?: Prisma.wishlist_itemsIdGame_idCompoundUniqueInput;
    AND?: Prisma.wishlist_itemsWhereInput | Prisma.wishlist_itemsWhereInput[];
    OR?: Prisma.wishlist_itemsWhereInput[];
    NOT?: Prisma.wishlist_itemsWhereInput | Prisma.wishlist_itemsWhereInput[];
    wishlist_id?: Prisma.UuidFilter<"wishlist_items"> | string;
    canonical_card_id?: Prisma.UuidNullableFilter<"wishlist_items"> | string | null;
    printing_id?: Prisma.UuidNullableFilter<"wishlist_items"> | string | null;
    desired_finish?: Prisma.StringNullableFilter<"wishlist_items"> | string | null;
    desired_condition?: Prisma.StringNullableFilter<"wishlist_items"> | string | null;
    language_code?: Prisma.StringNullableFilter<"wishlist_items"> | string | null;
    quantity_desired?: Prisma.IntFilter<"wishlist_items"> | number;
    priority?: Prisma.StringFilter<"wishlist_items"> | string;
    notes?: Prisma.StringNullableFilter<"wishlist_items"> | string | null;
    status?: Prisma.StringFilter<"wishlist_items"> | string;
    created_at?: Prisma.DateTimeFilter<"wishlist_items"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"wishlist_items"> | Date | string;
    willing_to_pay_cash?: Prisma.BoolFilter<"wishlist_items"> | boolean;
    willing_to_trade_cards?: Prisma.BoolFilter<"wishlist_items"> | boolean;
    max_cash_amount?: Prisma.DecimalNullableFilter<"wishlist_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.StringNullableFilter<"wishlist_items"> | string | null;
    trade_notes?: Prisma.StringNullableFilter<"wishlist_items"> | string | null;
    game_id?: Prisma.UuidFilter<"wishlist_items"> | string;
    canonical_cards?: Prisma.XOR<Prisma.Canonical_cardsNullableScalarRelationFilter, Prisma.canonical_cardsWhereInput> | null;
    card_printings?: Prisma.XOR<Prisma.Card_printingsNullableScalarRelationFilter, Prisma.card_printingsWhereInput> | null;
    wishlists?: Prisma.XOR<Prisma.WishlistsScalarRelationFilter, Prisma.wishlistsWhereInput>;
    wishlist_offers?: Prisma.Wishlist_offersListRelationFilter;
}, "id" | "id_game_id">;
export type wishlist_itemsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    wishlist_id?: Prisma.SortOrder;
    canonical_card_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    printing_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    desired_finish?: Prisma.SortOrderInput | Prisma.SortOrder;
    desired_condition?: Prisma.SortOrderInput | Prisma.SortOrder;
    language_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity_desired?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    willing_to_pay_cash?: Prisma.SortOrder;
    willing_to_trade_cards?: Prisma.SortOrder;
    max_cash_amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    trade_notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    _count?: Prisma.wishlist_itemsCountOrderByAggregateInput;
    _avg?: Prisma.wishlist_itemsAvgOrderByAggregateInput;
    _max?: Prisma.wishlist_itemsMaxOrderByAggregateInput;
    _min?: Prisma.wishlist_itemsMinOrderByAggregateInput;
    _sum?: Prisma.wishlist_itemsSumOrderByAggregateInput;
};
export type wishlist_itemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.wishlist_itemsScalarWhereWithAggregatesInput | Prisma.wishlist_itemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.wishlist_itemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.wishlist_itemsScalarWhereWithAggregatesInput | Prisma.wishlist_itemsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"wishlist_items"> | string;
    wishlist_id?: Prisma.UuidWithAggregatesFilter<"wishlist_items"> | string;
    canonical_card_id?: Prisma.UuidNullableWithAggregatesFilter<"wishlist_items"> | string | null;
    printing_id?: Prisma.UuidNullableWithAggregatesFilter<"wishlist_items"> | string | null;
    desired_finish?: Prisma.StringNullableWithAggregatesFilter<"wishlist_items"> | string | null;
    desired_condition?: Prisma.StringNullableWithAggregatesFilter<"wishlist_items"> | string | null;
    language_code?: Prisma.StringNullableWithAggregatesFilter<"wishlist_items"> | string | null;
    quantity_desired?: Prisma.IntWithAggregatesFilter<"wishlist_items"> | number;
    priority?: Prisma.StringWithAggregatesFilter<"wishlist_items"> | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"wishlist_items"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"wishlist_items"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"wishlist_items"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"wishlist_items"> | Date | string;
    willing_to_pay_cash?: Prisma.BoolWithAggregatesFilter<"wishlist_items"> | boolean;
    willing_to_trade_cards?: Prisma.BoolWithAggregatesFilter<"wishlist_items"> | boolean;
    max_cash_amount?: Prisma.DecimalNullableWithAggregatesFilter<"wishlist_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.StringNullableWithAggregatesFilter<"wishlist_items"> | string | null;
    trade_notes?: Prisma.StringNullableWithAggregatesFilter<"wishlist_items"> | string | null;
    game_id?: Prisma.UuidWithAggregatesFilter<"wishlist_items"> | string;
};
export type wishlist_itemsCreateInput = {
    id?: string;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity_desired?: number;
    priority?: string;
    notes?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    willing_to_pay_cash?: boolean;
    willing_to_trade_cards?: boolean;
    max_cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    trade_notes?: string | null;
    canonical_cards?: Prisma.canonical_cardsCreateNestedOneWithoutWishlist_itemsInput;
    card_printings?: Prisma.card_printingsCreateNestedOneWithoutWishlist_itemsInput;
    wishlists: Prisma.wishlistsCreateNestedOneWithoutWishlist_itemsInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutWishlist_itemsInput;
};
export type wishlist_itemsUncheckedCreateInput = {
    id?: string;
    wishlist_id: string;
    canonical_card_id?: string | null;
    printing_id?: string | null;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity_desired?: number;
    priority?: string;
    notes?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    willing_to_pay_cash?: boolean;
    willing_to_trade_cards?: boolean;
    max_cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    trade_notes?: string | null;
    game_id: string;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutWishlist_itemsInput;
};
export type wishlist_itemsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity_desired?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    willing_to_pay_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    willing_to_trade_cards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    max_cash_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canonical_cards?: Prisma.canonical_cardsUpdateOneWithoutWishlist_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneWithoutWishlist_itemsNestedInput;
    wishlists?: Prisma.wishlistsUpdateOneRequiredWithoutWishlist_itemsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutWishlist_itemsNestedInput;
};
export type wishlist_itemsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_id?: Prisma.StringFieldUpdateOperationsInput | string;
    canonical_card_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity_desired?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    willing_to_pay_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    willing_to_trade_cards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    max_cash_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutWishlist_itemsNestedInput;
};
export type wishlist_itemsCreateManyInput = {
    id?: string;
    wishlist_id: string;
    canonical_card_id?: string | null;
    printing_id?: string | null;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity_desired?: number;
    priority?: string;
    notes?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    willing_to_pay_cash?: boolean;
    willing_to_trade_cards?: boolean;
    max_cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    trade_notes?: string | null;
    game_id: string;
};
export type wishlist_itemsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity_desired?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    willing_to_pay_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    willing_to_trade_cards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    max_cash_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type wishlist_itemsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_id?: Prisma.StringFieldUpdateOperationsInput | string;
    canonical_card_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity_desired?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    willing_to_pay_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    willing_to_trade_cards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    max_cash_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Wishlist_itemsListRelationFilter = {
    every?: Prisma.wishlist_itemsWhereInput;
    some?: Prisma.wishlist_itemsWhereInput;
    none?: Prisma.wishlist_itemsWhereInput;
};
export type wishlist_itemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type wishlist_itemsIdGame_idCompoundUniqueInput = {
    id: string;
    game_id: string;
};
export type wishlist_itemsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wishlist_id?: Prisma.SortOrder;
    canonical_card_id?: Prisma.SortOrder;
    printing_id?: Prisma.SortOrder;
    desired_finish?: Prisma.SortOrder;
    desired_condition?: Prisma.SortOrder;
    language_code?: Prisma.SortOrder;
    quantity_desired?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    willing_to_pay_cash?: Prisma.SortOrder;
    willing_to_trade_cards?: Prisma.SortOrder;
    max_cash_amount?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    trade_notes?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type wishlist_itemsAvgOrderByAggregateInput = {
    quantity_desired?: Prisma.SortOrder;
    max_cash_amount?: Prisma.SortOrder;
};
export type wishlist_itemsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wishlist_id?: Prisma.SortOrder;
    canonical_card_id?: Prisma.SortOrder;
    printing_id?: Prisma.SortOrder;
    desired_finish?: Prisma.SortOrder;
    desired_condition?: Prisma.SortOrder;
    language_code?: Prisma.SortOrder;
    quantity_desired?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    willing_to_pay_cash?: Prisma.SortOrder;
    willing_to_trade_cards?: Prisma.SortOrder;
    max_cash_amount?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    trade_notes?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type wishlist_itemsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wishlist_id?: Prisma.SortOrder;
    canonical_card_id?: Prisma.SortOrder;
    printing_id?: Prisma.SortOrder;
    desired_finish?: Prisma.SortOrder;
    desired_condition?: Prisma.SortOrder;
    language_code?: Prisma.SortOrder;
    quantity_desired?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    willing_to_pay_cash?: Prisma.SortOrder;
    willing_to_trade_cards?: Prisma.SortOrder;
    max_cash_amount?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    trade_notes?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type wishlist_itemsSumOrderByAggregateInput = {
    quantity_desired?: Prisma.SortOrder;
    max_cash_amount?: Prisma.SortOrder;
};
export type Wishlist_itemsScalarRelationFilter = {
    is?: Prisma.wishlist_itemsWhereInput;
    isNot?: Prisma.wishlist_itemsWhereInput;
};
export type wishlist_itemsCreateNestedManyWithoutCanonical_cardsInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutCanonical_cardsInput, Prisma.wishlist_itemsUncheckedCreateWithoutCanonical_cardsInput> | Prisma.wishlist_itemsCreateWithoutCanonical_cardsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutCanonical_cardsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutCanonical_cardsInput | Prisma.wishlist_itemsCreateOrConnectWithoutCanonical_cardsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyCanonical_cardsInputEnvelope;
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
};
export type wishlist_itemsUncheckedCreateNestedManyWithoutCanonical_cardsInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutCanonical_cardsInput, Prisma.wishlist_itemsUncheckedCreateWithoutCanonical_cardsInput> | Prisma.wishlist_itemsCreateWithoutCanonical_cardsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutCanonical_cardsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutCanonical_cardsInput | Prisma.wishlist_itemsCreateOrConnectWithoutCanonical_cardsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyCanonical_cardsInputEnvelope;
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
};
export type wishlist_itemsUpdateManyWithoutCanonical_cardsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutCanonical_cardsInput, Prisma.wishlist_itemsUncheckedCreateWithoutCanonical_cardsInput> | Prisma.wishlist_itemsCreateWithoutCanonical_cardsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutCanonical_cardsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutCanonical_cardsInput | Prisma.wishlist_itemsCreateOrConnectWithoutCanonical_cardsInput[];
    upsert?: Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutCanonical_cardsInput | Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutCanonical_cardsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyCanonical_cardsInputEnvelope;
    set?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutCanonical_cardsInput | Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutCanonical_cardsInput[];
    updateMany?: Prisma.wishlist_itemsUpdateManyWithWhereWithoutCanonical_cardsInput | Prisma.wishlist_itemsUpdateManyWithWhereWithoutCanonical_cardsInput[];
    deleteMany?: Prisma.wishlist_itemsScalarWhereInput | Prisma.wishlist_itemsScalarWhereInput[];
};
export type wishlist_itemsUncheckedUpdateManyWithoutCanonical_cardsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutCanonical_cardsInput, Prisma.wishlist_itemsUncheckedCreateWithoutCanonical_cardsInput> | Prisma.wishlist_itemsCreateWithoutCanonical_cardsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutCanonical_cardsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutCanonical_cardsInput | Prisma.wishlist_itemsCreateOrConnectWithoutCanonical_cardsInput[];
    upsert?: Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutCanonical_cardsInput | Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutCanonical_cardsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyCanonical_cardsInputEnvelope;
    set?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutCanonical_cardsInput | Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutCanonical_cardsInput[];
    updateMany?: Prisma.wishlist_itemsUpdateManyWithWhereWithoutCanonical_cardsInput | Prisma.wishlist_itemsUpdateManyWithWhereWithoutCanonical_cardsInput[];
    deleteMany?: Prisma.wishlist_itemsScalarWhereInput | Prisma.wishlist_itemsScalarWhereInput[];
};
export type wishlist_itemsCreateNestedManyWithoutCard_printingsInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutCard_printingsInput, Prisma.wishlist_itemsUncheckedCreateWithoutCard_printingsInput> | Prisma.wishlist_itemsCreateWithoutCard_printingsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutCard_printingsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutCard_printingsInput | Prisma.wishlist_itemsCreateOrConnectWithoutCard_printingsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyCard_printingsInputEnvelope;
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
};
export type wishlist_itemsUncheckedCreateNestedManyWithoutCard_printingsInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutCard_printingsInput, Prisma.wishlist_itemsUncheckedCreateWithoutCard_printingsInput> | Prisma.wishlist_itemsCreateWithoutCard_printingsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutCard_printingsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutCard_printingsInput | Prisma.wishlist_itemsCreateOrConnectWithoutCard_printingsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyCard_printingsInputEnvelope;
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
};
export type wishlist_itemsUpdateManyWithoutCard_printingsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutCard_printingsInput, Prisma.wishlist_itemsUncheckedCreateWithoutCard_printingsInput> | Prisma.wishlist_itemsCreateWithoutCard_printingsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutCard_printingsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutCard_printingsInput | Prisma.wishlist_itemsCreateOrConnectWithoutCard_printingsInput[];
    upsert?: Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutCard_printingsInput | Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutCard_printingsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyCard_printingsInputEnvelope;
    set?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutCard_printingsInput | Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutCard_printingsInput[];
    updateMany?: Prisma.wishlist_itemsUpdateManyWithWhereWithoutCard_printingsInput | Prisma.wishlist_itemsUpdateManyWithWhereWithoutCard_printingsInput[];
    deleteMany?: Prisma.wishlist_itemsScalarWhereInput | Prisma.wishlist_itemsScalarWhereInput[];
};
export type wishlist_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutCard_printingsInput, Prisma.wishlist_itemsUncheckedCreateWithoutCard_printingsInput> | Prisma.wishlist_itemsCreateWithoutCard_printingsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutCard_printingsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutCard_printingsInput | Prisma.wishlist_itemsCreateOrConnectWithoutCard_printingsInput[];
    upsert?: Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutCard_printingsInput | Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutCard_printingsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyCard_printingsInputEnvelope;
    set?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutCard_printingsInput | Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutCard_printingsInput[];
    updateMany?: Prisma.wishlist_itemsUpdateManyWithWhereWithoutCard_printingsInput | Prisma.wishlist_itemsUpdateManyWithWhereWithoutCard_printingsInput[];
    deleteMany?: Prisma.wishlist_itemsScalarWhereInput | Prisma.wishlist_itemsScalarWhereInput[];
};
export type wishlist_itemsCreateNestedOneWithoutWishlist_offersInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutWishlist_offersInput, Prisma.wishlist_itemsUncheckedCreateWithoutWishlist_offersInput>;
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutWishlist_offersInput;
    connect?: Prisma.wishlist_itemsWhereUniqueInput;
};
export type wishlist_itemsUpdateOneRequiredWithoutWishlist_offersNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutWishlist_offersInput, Prisma.wishlist_itemsUncheckedCreateWithoutWishlist_offersInput>;
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutWishlist_offersInput;
    upsert?: Prisma.wishlist_itemsUpsertWithoutWishlist_offersInput;
    connect?: Prisma.wishlist_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.wishlist_itemsUpdateToOneWithWhereWithoutWishlist_offersInput, Prisma.wishlist_itemsUpdateWithoutWishlist_offersInput>, Prisma.wishlist_itemsUncheckedUpdateWithoutWishlist_offersInput>;
};
export type wishlist_itemsCreateNestedManyWithoutWishlistsInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutWishlistsInput, Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput> | Prisma.wishlist_itemsCreateWithoutWishlistsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutWishlistsInput | Prisma.wishlist_itemsCreateOrConnectWithoutWishlistsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyWishlistsInputEnvelope;
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
};
export type wishlist_itemsUncheckedCreateNestedManyWithoutWishlistsInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutWishlistsInput, Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput> | Prisma.wishlist_itemsCreateWithoutWishlistsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutWishlistsInput | Prisma.wishlist_itemsCreateOrConnectWithoutWishlistsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyWishlistsInputEnvelope;
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
};
export type wishlist_itemsUpdateManyWithoutWishlistsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutWishlistsInput, Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput> | Prisma.wishlist_itemsCreateWithoutWishlistsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutWishlistsInput | Prisma.wishlist_itemsCreateOrConnectWithoutWishlistsInput[];
    upsert?: Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutWishlistsInput | Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutWishlistsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyWishlistsInputEnvelope;
    set?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutWishlistsInput | Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutWishlistsInput[];
    updateMany?: Prisma.wishlist_itemsUpdateManyWithWhereWithoutWishlistsInput | Prisma.wishlist_itemsUpdateManyWithWhereWithoutWishlistsInput[];
    deleteMany?: Prisma.wishlist_itemsScalarWhereInput | Prisma.wishlist_itemsScalarWhereInput[];
};
export type wishlist_itemsUncheckedUpdateManyWithoutWishlistsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutWishlistsInput, Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput> | Prisma.wishlist_itemsCreateWithoutWishlistsInput[] | Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput[];
    connectOrCreate?: Prisma.wishlist_itemsCreateOrConnectWithoutWishlistsInput | Prisma.wishlist_itemsCreateOrConnectWithoutWishlistsInput[];
    upsert?: Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutWishlistsInput | Prisma.wishlist_itemsUpsertWithWhereUniqueWithoutWishlistsInput[];
    createMany?: Prisma.wishlist_itemsCreateManyWishlistsInputEnvelope;
    set?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_itemsWhereUniqueInput | Prisma.wishlist_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutWishlistsInput | Prisma.wishlist_itemsUpdateWithWhereUniqueWithoutWishlistsInput[];
    updateMany?: Prisma.wishlist_itemsUpdateManyWithWhereWithoutWishlistsInput | Prisma.wishlist_itemsUpdateManyWithWhereWithoutWishlistsInput[];
    deleteMany?: Prisma.wishlist_itemsScalarWhereInput | Prisma.wishlist_itemsScalarWhereInput[];
};
export type wishlist_itemsCreateWithoutCanonical_cardsInput = {
    id?: string;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity_desired?: number;
    priority?: string;
    notes?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    willing_to_pay_cash?: boolean;
    willing_to_trade_cards?: boolean;
    max_cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    trade_notes?: string | null;
    card_printings?: Prisma.card_printingsCreateNestedOneWithoutWishlist_itemsInput;
    wishlists: Prisma.wishlistsCreateNestedOneWithoutWishlist_itemsInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutWishlist_itemsInput;
};
export type wishlist_itemsUncheckedCreateWithoutCanonical_cardsInput = {
    id?: string;
    wishlist_id: string;
    printing_id?: string | null;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity_desired?: number;
    priority?: string;
    notes?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    willing_to_pay_cash?: boolean;
    willing_to_trade_cards?: boolean;
    max_cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    trade_notes?: string | null;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutWishlist_itemsInput;
};
export type wishlist_itemsCreateOrConnectWithoutCanonical_cardsInput = {
    where: Prisma.wishlist_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutCanonical_cardsInput, Prisma.wishlist_itemsUncheckedCreateWithoutCanonical_cardsInput>;
};
export type wishlist_itemsCreateManyCanonical_cardsInputEnvelope = {
    data: Prisma.wishlist_itemsCreateManyCanonical_cardsInput | Prisma.wishlist_itemsCreateManyCanonical_cardsInput[];
    skipDuplicates?: boolean;
};
export type wishlist_itemsUpsertWithWhereUniqueWithoutCanonical_cardsInput = {
    where: Prisma.wishlist_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlist_itemsUpdateWithoutCanonical_cardsInput, Prisma.wishlist_itemsUncheckedUpdateWithoutCanonical_cardsInput>;
    create: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutCanonical_cardsInput, Prisma.wishlist_itemsUncheckedCreateWithoutCanonical_cardsInput>;
};
export type wishlist_itemsUpdateWithWhereUniqueWithoutCanonical_cardsInput = {
    where: Prisma.wishlist_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlist_itemsUpdateWithoutCanonical_cardsInput, Prisma.wishlist_itemsUncheckedUpdateWithoutCanonical_cardsInput>;
};
export type wishlist_itemsUpdateManyWithWhereWithoutCanonical_cardsInput = {
    where: Prisma.wishlist_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlist_itemsUpdateManyMutationInput, Prisma.wishlist_itemsUncheckedUpdateManyWithoutCanonical_cardsInput>;
};
export type wishlist_itemsScalarWhereInput = {
    AND?: Prisma.wishlist_itemsScalarWhereInput | Prisma.wishlist_itemsScalarWhereInput[];
    OR?: Prisma.wishlist_itemsScalarWhereInput[];
    NOT?: Prisma.wishlist_itemsScalarWhereInput | Prisma.wishlist_itemsScalarWhereInput[];
    id?: Prisma.UuidFilter<"wishlist_items"> | string;
    wishlist_id?: Prisma.UuidFilter<"wishlist_items"> | string;
    canonical_card_id?: Prisma.UuidNullableFilter<"wishlist_items"> | string | null;
    printing_id?: Prisma.UuidNullableFilter<"wishlist_items"> | string | null;
    desired_finish?: Prisma.StringNullableFilter<"wishlist_items"> | string | null;
    desired_condition?: Prisma.StringNullableFilter<"wishlist_items"> | string | null;
    language_code?: Prisma.StringNullableFilter<"wishlist_items"> | string | null;
    quantity_desired?: Prisma.IntFilter<"wishlist_items"> | number;
    priority?: Prisma.StringFilter<"wishlist_items"> | string;
    notes?: Prisma.StringNullableFilter<"wishlist_items"> | string | null;
    status?: Prisma.StringFilter<"wishlist_items"> | string;
    created_at?: Prisma.DateTimeFilter<"wishlist_items"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"wishlist_items"> | Date | string;
    willing_to_pay_cash?: Prisma.BoolFilter<"wishlist_items"> | boolean;
    willing_to_trade_cards?: Prisma.BoolFilter<"wishlist_items"> | boolean;
    max_cash_amount?: Prisma.DecimalNullableFilter<"wishlist_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.StringNullableFilter<"wishlist_items"> | string | null;
    trade_notes?: Prisma.StringNullableFilter<"wishlist_items"> | string | null;
    game_id?: Prisma.UuidFilter<"wishlist_items"> | string;
};
export type wishlist_itemsCreateWithoutCard_printingsInput = {
    id?: string;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity_desired?: number;
    priority?: string;
    notes?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    willing_to_pay_cash?: boolean;
    willing_to_trade_cards?: boolean;
    max_cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    trade_notes?: string | null;
    canonical_cards?: Prisma.canonical_cardsCreateNestedOneWithoutWishlist_itemsInput;
    wishlists: Prisma.wishlistsCreateNestedOneWithoutWishlist_itemsInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutWishlist_itemsInput;
};
export type wishlist_itemsUncheckedCreateWithoutCard_printingsInput = {
    id?: string;
    wishlist_id: string;
    canonical_card_id?: string | null;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity_desired?: number;
    priority?: string;
    notes?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    willing_to_pay_cash?: boolean;
    willing_to_trade_cards?: boolean;
    max_cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    trade_notes?: string | null;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutWishlist_itemsInput;
};
export type wishlist_itemsCreateOrConnectWithoutCard_printingsInput = {
    where: Prisma.wishlist_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutCard_printingsInput, Prisma.wishlist_itemsUncheckedCreateWithoutCard_printingsInput>;
};
export type wishlist_itemsCreateManyCard_printingsInputEnvelope = {
    data: Prisma.wishlist_itemsCreateManyCard_printingsInput | Prisma.wishlist_itemsCreateManyCard_printingsInput[];
    skipDuplicates?: boolean;
};
export type wishlist_itemsUpsertWithWhereUniqueWithoutCard_printingsInput = {
    where: Prisma.wishlist_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlist_itemsUpdateWithoutCard_printingsInput, Prisma.wishlist_itemsUncheckedUpdateWithoutCard_printingsInput>;
    create: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutCard_printingsInput, Prisma.wishlist_itemsUncheckedCreateWithoutCard_printingsInput>;
};
export type wishlist_itemsUpdateWithWhereUniqueWithoutCard_printingsInput = {
    where: Prisma.wishlist_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlist_itemsUpdateWithoutCard_printingsInput, Prisma.wishlist_itemsUncheckedUpdateWithoutCard_printingsInput>;
};
export type wishlist_itemsUpdateManyWithWhereWithoutCard_printingsInput = {
    where: Prisma.wishlist_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlist_itemsUpdateManyMutationInput, Prisma.wishlist_itemsUncheckedUpdateManyWithoutCard_printingsInput>;
};
export type wishlist_itemsCreateWithoutWishlist_offersInput = {
    id?: string;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity_desired?: number;
    priority?: string;
    notes?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    willing_to_pay_cash?: boolean;
    willing_to_trade_cards?: boolean;
    max_cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    trade_notes?: string | null;
    canonical_cards?: Prisma.canonical_cardsCreateNestedOneWithoutWishlist_itemsInput;
    card_printings?: Prisma.card_printingsCreateNestedOneWithoutWishlist_itemsInput;
    wishlists: Prisma.wishlistsCreateNestedOneWithoutWishlist_itemsInput;
};
export type wishlist_itemsUncheckedCreateWithoutWishlist_offersInput = {
    id?: string;
    wishlist_id: string;
    canonical_card_id?: string | null;
    printing_id?: string | null;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity_desired?: number;
    priority?: string;
    notes?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    willing_to_pay_cash?: boolean;
    willing_to_trade_cards?: boolean;
    max_cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    trade_notes?: string | null;
    game_id: string;
};
export type wishlist_itemsCreateOrConnectWithoutWishlist_offersInput = {
    where: Prisma.wishlist_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutWishlist_offersInput, Prisma.wishlist_itemsUncheckedCreateWithoutWishlist_offersInput>;
};
export type wishlist_itemsUpsertWithoutWishlist_offersInput = {
    update: Prisma.XOR<Prisma.wishlist_itemsUpdateWithoutWishlist_offersInput, Prisma.wishlist_itemsUncheckedUpdateWithoutWishlist_offersInput>;
    create: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutWishlist_offersInput, Prisma.wishlist_itemsUncheckedCreateWithoutWishlist_offersInput>;
    where?: Prisma.wishlist_itemsWhereInput;
};
export type wishlist_itemsUpdateToOneWithWhereWithoutWishlist_offersInput = {
    where?: Prisma.wishlist_itemsWhereInput;
    data: Prisma.XOR<Prisma.wishlist_itemsUpdateWithoutWishlist_offersInput, Prisma.wishlist_itemsUncheckedUpdateWithoutWishlist_offersInput>;
};
export type wishlist_itemsUpdateWithoutWishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity_desired?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    willing_to_pay_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    willing_to_trade_cards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    max_cash_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canonical_cards?: Prisma.canonical_cardsUpdateOneWithoutWishlist_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneWithoutWishlist_itemsNestedInput;
    wishlists?: Prisma.wishlistsUpdateOneRequiredWithoutWishlist_itemsNestedInput;
};
export type wishlist_itemsUncheckedUpdateWithoutWishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_id?: Prisma.StringFieldUpdateOperationsInput | string;
    canonical_card_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity_desired?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    willing_to_pay_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    willing_to_trade_cards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    max_cash_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type wishlist_itemsCreateWithoutWishlistsInput = {
    id?: string;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity_desired?: number;
    priority?: string;
    notes?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    willing_to_pay_cash?: boolean;
    willing_to_trade_cards?: boolean;
    max_cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    trade_notes?: string | null;
    canonical_cards?: Prisma.canonical_cardsCreateNestedOneWithoutWishlist_itemsInput;
    card_printings?: Prisma.card_printingsCreateNestedOneWithoutWishlist_itemsInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutWishlist_itemsInput;
};
export type wishlist_itemsUncheckedCreateWithoutWishlistsInput = {
    id?: string;
    canonical_card_id?: string | null;
    printing_id?: string | null;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity_desired?: number;
    priority?: string;
    notes?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    willing_to_pay_cash?: boolean;
    willing_to_trade_cards?: boolean;
    max_cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    trade_notes?: string | null;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutWishlist_itemsInput;
};
export type wishlist_itemsCreateOrConnectWithoutWishlistsInput = {
    where: Prisma.wishlist_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutWishlistsInput, Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput>;
};
export type wishlist_itemsCreateManyWishlistsInputEnvelope = {
    data: Prisma.wishlist_itemsCreateManyWishlistsInput | Prisma.wishlist_itemsCreateManyWishlistsInput[];
    skipDuplicates?: boolean;
};
export type wishlist_itemsUpsertWithWhereUniqueWithoutWishlistsInput = {
    where: Prisma.wishlist_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlist_itemsUpdateWithoutWishlistsInput, Prisma.wishlist_itemsUncheckedUpdateWithoutWishlistsInput>;
    create: Prisma.XOR<Prisma.wishlist_itemsCreateWithoutWishlistsInput, Prisma.wishlist_itemsUncheckedCreateWithoutWishlistsInput>;
};
export type wishlist_itemsUpdateWithWhereUniqueWithoutWishlistsInput = {
    where: Prisma.wishlist_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlist_itemsUpdateWithoutWishlistsInput, Prisma.wishlist_itemsUncheckedUpdateWithoutWishlistsInput>;
};
export type wishlist_itemsUpdateManyWithWhereWithoutWishlistsInput = {
    where: Prisma.wishlist_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlist_itemsUpdateManyMutationInput, Prisma.wishlist_itemsUncheckedUpdateManyWithoutWishlistsInput>;
};
export type wishlist_itemsCreateManyCanonical_cardsInput = {
    id?: string;
    wishlist_id: string;
    printing_id?: string | null;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity_desired?: number;
    priority?: string;
    notes?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    willing_to_pay_cash?: boolean;
    willing_to_trade_cards?: boolean;
    max_cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    trade_notes?: string | null;
};
export type wishlist_itemsUpdateWithoutCanonical_cardsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity_desired?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    willing_to_pay_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    willing_to_trade_cards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    max_cash_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    card_printings?: Prisma.card_printingsUpdateOneWithoutWishlist_itemsNestedInput;
    wishlists?: Prisma.wishlistsUpdateOneRequiredWithoutWishlist_itemsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutWishlist_itemsNestedInput;
};
export type wishlist_itemsUncheckedUpdateWithoutCanonical_cardsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity_desired?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    willing_to_pay_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    willing_to_trade_cards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    max_cash_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutWishlist_itemsNestedInput;
};
export type wishlist_itemsUncheckedUpdateManyWithoutCanonical_cardsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity_desired?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    willing_to_pay_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    willing_to_trade_cards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    max_cash_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type wishlist_itemsCreateManyCard_printingsInput = {
    id?: string;
    wishlist_id: string;
    canonical_card_id?: string | null;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity_desired?: number;
    priority?: string;
    notes?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    willing_to_pay_cash?: boolean;
    willing_to_trade_cards?: boolean;
    max_cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    trade_notes?: string | null;
};
export type wishlist_itemsUpdateWithoutCard_printingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity_desired?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    willing_to_pay_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    willing_to_trade_cards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    max_cash_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canonical_cards?: Prisma.canonical_cardsUpdateOneWithoutWishlist_itemsNestedInput;
    wishlists?: Prisma.wishlistsUpdateOneRequiredWithoutWishlist_itemsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutWishlist_itemsNestedInput;
};
export type wishlist_itemsUncheckedUpdateWithoutCard_printingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_id?: Prisma.StringFieldUpdateOperationsInput | string;
    canonical_card_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity_desired?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    willing_to_pay_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    willing_to_trade_cards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    max_cash_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutWishlist_itemsNestedInput;
};
export type wishlist_itemsUncheckedUpdateManyWithoutCard_printingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_id?: Prisma.StringFieldUpdateOperationsInput | string;
    canonical_card_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity_desired?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    willing_to_pay_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    willing_to_trade_cards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    max_cash_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type wishlist_itemsCreateManyWishlistsInput = {
    id?: string;
    canonical_card_id?: string | null;
    printing_id?: string | null;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity_desired?: number;
    priority?: string;
    notes?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    willing_to_pay_cash?: boolean;
    willing_to_trade_cards?: boolean;
    max_cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    trade_notes?: string | null;
};
export type wishlist_itemsUpdateWithoutWishlistsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity_desired?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    willing_to_pay_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    willing_to_trade_cards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    max_cash_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canonical_cards?: Prisma.canonical_cardsUpdateOneWithoutWishlist_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneWithoutWishlist_itemsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutWishlist_itemsNestedInput;
};
export type wishlist_itemsUncheckedUpdateWithoutWishlistsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    canonical_card_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity_desired?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    willing_to_pay_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    willing_to_trade_cards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    max_cash_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutWishlist_itemsNestedInput;
};
export type wishlist_itemsUncheckedUpdateManyWithoutWishlistsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    canonical_card_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    printing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity_desired?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    willing_to_pay_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    willing_to_trade_cards?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    max_cash_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type Wishlist_itemsCountOutputType
 */
export type Wishlist_itemsCountOutputType = {
    wishlist_offers: number;
};
export type Wishlist_itemsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wishlist_offers?: boolean | Wishlist_itemsCountOutputTypeCountWishlist_offersArgs;
};
/**
 * Wishlist_itemsCountOutputType without action
 */
export type Wishlist_itemsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist_itemsCountOutputType
     */
    select?: Prisma.Wishlist_itemsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Wishlist_itemsCountOutputType without action
 */
export type Wishlist_itemsCountOutputTypeCountWishlist_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_offersWhereInput;
};
export type wishlist_itemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wishlist_id?: boolean;
    canonical_card_id?: boolean;
    printing_id?: boolean;
    desired_finish?: boolean;
    desired_condition?: boolean;
    language_code?: boolean;
    quantity_desired?: boolean;
    priority?: boolean;
    notes?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    willing_to_pay_cash?: boolean;
    willing_to_trade_cards?: boolean;
    max_cash_amount?: boolean;
    currency_code?: boolean;
    trade_notes?: boolean;
    game_id?: boolean;
    canonical_cards?: boolean | Prisma.wishlist_items$canonical_cardsArgs<ExtArgs>;
    card_printings?: boolean | Prisma.wishlist_items$card_printingsArgs<ExtArgs>;
    wishlists?: boolean | Prisma.wishlistsDefaultArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.wishlist_items$wishlist_offersArgs<ExtArgs>;
    _count?: boolean | Prisma.Wishlist_itemsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist_items"]>;
export type wishlist_itemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wishlist_id?: boolean;
    canonical_card_id?: boolean;
    printing_id?: boolean;
    desired_finish?: boolean;
    desired_condition?: boolean;
    language_code?: boolean;
    quantity_desired?: boolean;
    priority?: boolean;
    notes?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    willing_to_pay_cash?: boolean;
    willing_to_trade_cards?: boolean;
    max_cash_amount?: boolean;
    currency_code?: boolean;
    trade_notes?: boolean;
    game_id?: boolean;
    canonical_cards?: boolean | Prisma.wishlist_items$canonical_cardsArgs<ExtArgs>;
    card_printings?: boolean | Prisma.wishlist_items$card_printingsArgs<ExtArgs>;
    wishlists?: boolean | Prisma.wishlistsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist_items"]>;
export type wishlist_itemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wishlist_id?: boolean;
    canonical_card_id?: boolean;
    printing_id?: boolean;
    desired_finish?: boolean;
    desired_condition?: boolean;
    language_code?: boolean;
    quantity_desired?: boolean;
    priority?: boolean;
    notes?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    willing_to_pay_cash?: boolean;
    willing_to_trade_cards?: boolean;
    max_cash_amount?: boolean;
    currency_code?: boolean;
    trade_notes?: boolean;
    game_id?: boolean;
    canonical_cards?: boolean | Prisma.wishlist_items$canonical_cardsArgs<ExtArgs>;
    card_printings?: boolean | Prisma.wishlist_items$card_printingsArgs<ExtArgs>;
    wishlists?: boolean | Prisma.wishlistsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist_items"]>;
export type wishlist_itemsSelectScalar = {
    id?: boolean;
    wishlist_id?: boolean;
    canonical_card_id?: boolean;
    printing_id?: boolean;
    desired_finish?: boolean;
    desired_condition?: boolean;
    language_code?: boolean;
    quantity_desired?: boolean;
    priority?: boolean;
    notes?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    willing_to_pay_cash?: boolean;
    willing_to_trade_cards?: boolean;
    max_cash_amount?: boolean;
    currency_code?: boolean;
    trade_notes?: boolean;
    game_id?: boolean;
};
export type wishlist_itemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "wishlist_id" | "canonical_card_id" | "printing_id" | "desired_finish" | "desired_condition" | "language_code" | "quantity_desired" | "priority" | "notes" | "status" | "created_at" | "updated_at" | "willing_to_pay_cash" | "willing_to_trade_cards" | "max_cash_amount" | "currency_code" | "trade_notes" | "game_id", ExtArgs["result"]["wishlist_items"]>;
export type wishlist_itemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    canonical_cards?: boolean | Prisma.wishlist_items$canonical_cardsArgs<ExtArgs>;
    card_printings?: boolean | Prisma.wishlist_items$card_printingsArgs<ExtArgs>;
    wishlists?: boolean | Prisma.wishlistsDefaultArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.wishlist_items$wishlist_offersArgs<ExtArgs>;
    _count?: boolean | Prisma.Wishlist_itemsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type wishlist_itemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    canonical_cards?: boolean | Prisma.wishlist_items$canonical_cardsArgs<ExtArgs>;
    card_printings?: boolean | Prisma.wishlist_items$card_printingsArgs<ExtArgs>;
    wishlists?: boolean | Prisma.wishlistsDefaultArgs<ExtArgs>;
};
export type wishlist_itemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    canonical_cards?: boolean | Prisma.wishlist_items$canonical_cardsArgs<ExtArgs>;
    card_printings?: boolean | Prisma.wishlist_items$card_printingsArgs<ExtArgs>;
    wishlists?: boolean | Prisma.wishlistsDefaultArgs<ExtArgs>;
};
export type $wishlist_itemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "wishlist_items";
    objects: {
        canonical_cards: Prisma.$canonical_cardsPayload<ExtArgs> | null;
        card_printings: Prisma.$card_printingsPayload<ExtArgs> | null;
        wishlists: Prisma.$wishlistsPayload<ExtArgs>;
        wishlist_offers: Prisma.$wishlist_offersPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        wishlist_id: string;
        canonical_card_id: string | null;
        printing_id: string | null;
        desired_finish: string | null;
        desired_condition: string | null;
        language_code: string | null;
        quantity_desired: number;
        priority: string;
        notes: string | null;
        status: string;
        created_at: Date;
        updated_at: Date;
        willing_to_pay_cash: boolean;
        willing_to_trade_cards: boolean;
        max_cash_amount: runtime.Decimal | null;
        currency_code: string | null;
        trade_notes: string | null;
        game_id: string;
    }, ExtArgs["result"]["wishlist_items"]>;
    composites: {};
};
export type wishlist_itemsGetPayload<S extends boolean | null | undefined | wishlist_itemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload, S>;
export type wishlist_itemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<wishlist_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Wishlist_itemsCountAggregateInputType | true;
};
export interface wishlist_itemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['wishlist_items'];
        meta: {
            name: 'wishlist_items';
        };
    };
    /**
     * Find zero or one Wishlist_items that matches the filter.
     * @param {wishlist_itemsFindUniqueArgs} args - Arguments to find a Wishlist_items
     * @example
     * // Get one Wishlist_items
     * const wishlist_items = await prisma.wishlist_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends wishlist_itemsFindUniqueArgs>(args: Prisma.SelectSubset<T, wishlist_itemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__wishlist_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Wishlist_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {wishlist_itemsFindUniqueOrThrowArgs} args - Arguments to find a Wishlist_items
     * @example
     * // Get one Wishlist_items
     * const wishlist_items = await prisma.wishlist_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends wishlist_itemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, wishlist_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__wishlist_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Wishlist_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_itemsFindFirstArgs} args - Arguments to find a Wishlist_items
     * @example
     * // Get one Wishlist_items
     * const wishlist_items = await prisma.wishlist_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends wishlist_itemsFindFirstArgs>(args?: Prisma.SelectSubset<T, wishlist_itemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__wishlist_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Wishlist_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_itemsFindFirstOrThrowArgs} args - Arguments to find a Wishlist_items
     * @example
     * // Get one Wishlist_items
     * const wishlist_items = await prisma.wishlist_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends wishlist_itemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, wishlist_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__wishlist_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Wishlist_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wishlist_items
     * const wishlist_items = await prisma.wishlist_items.findMany()
     *
     * // Get first 10 Wishlist_items
     * const wishlist_items = await prisma.wishlist_items.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const wishlist_itemsWithIdOnly = await prisma.wishlist_items.findMany({ select: { id: true } })
     *
     */
    findMany<T extends wishlist_itemsFindManyArgs>(args?: Prisma.SelectSubset<T, wishlist_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Wishlist_items.
     * @param {wishlist_itemsCreateArgs} args - Arguments to create a Wishlist_items.
     * @example
     * // Create one Wishlist_items
     * const Wishlist_items = await prisma.wishlist_items.create({
     *   data: {
     *     // ... data to create a Wishlist_items
     *   }
     * })
     *
     */
    create<T extends wishlist_itemsCreateArgs>(args: Prisma.SelectSubset<T, wishlist_itemsCreateArgs<ExtArgs>>): Prisma.Prisma__wishlist_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Wishlist_items.
     * @param {wishlist_itemsCreateManyArgs} args - Arguments to create many Wishlist_items.
     * @example
     * // Create many Wishlist_items
     * const wishlist_items = await prisma.wishlist_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends wishlist_itemsCreateManyArgs>(args?: Prisma.SelectSubset<T, wishlist_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Wishlist_items and returns the data saved in the database.
     * @param {wishlist_itemsCreateManyAndReturnArgs} args - Arguments to create many Wishlist_items.
     * @example
     * // Create many Wishlist_items
     * const wishlist_items = await prisma.wishlist_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Wishlist_items and only return the `id`
     * const wishlist_itemsWithIdOnly = await prisma.wishlist_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends wishlist_itemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, wishlist_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Wishlist_items.
     * @param {wishlist_itemsDeleteArgs} args - Arguments to delete one Wishlist_items.
     * @example
     * // Delete one Wishlist_items
     * const Wishlist_items = await prisma.wishlist_items.delete({
     *   where: {
     *     // ... filter to delete one Wishlist_items
     *   }
     * })
     *
     */
    delete<T extends wishlist_itemsDeleteArgs>(args: Prisma.SelectSubset<T, wishlist_itemsDeleteArgs<ExtArgs>>): Prisma.Prisma__wishlist_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Wishlist_items.
     * @param {wishlist_itemsUpdateArgs} args - Arguments to update one Wishlist_items.
     * @example
     * // Update one Wishlist_items
     * const wishlist_items = await prisma.wishlist_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends wishlist_itemsUpdateArgs>(args: Prisma.SelectSubset<T, wishlist_itemsUpdateArgs<ExtArgs>>): Prisma.Prisma__wishlist_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Wishlist_items.
     * @param {wishlist_itemsDeleteManyArgs} args - Arguments to filter Wishlist_items to delete.
     * @example
     * // Delete a few Wishlist_items
     * const { count } = await prisma.wishlist_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends wishlist_itemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, wishlist_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Wishlist_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wishlist_items
     * const wishlist_items = await prisma.wishlist_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends wishlist_itemsUpdateManyArgs>(args: Prisma.SelectSubset<T, wishlist_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Wishlist_items and returns the data updated in the database.
     * @param {wishlist_itemsUpdateManyAndReturnArgs} args - Arguments to update many Wishlist_items.
     * @example
     * // Update many Wishlist_items
     * const wishlist_items = await prisma.wishlist_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Wishlist_items and only return the `id`
     * const wishlist_itemsWithIdOnly = await prisma.wishlist_items.updateManyAndReturn({
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
    updateManyAndReturn<T extends wishlist_itemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, wishlist_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Wishlist_items.
     * @param {wishlist_itemsUpsertArgs} args - Arguments to update or create a Wishlist_items.
     * @example
     * // Update or create a Wishlist_items
     * const wishlist_items = await prisma.wishlist_items.upsert({
     *   create: {
     *     // ... data to create a Wishlist_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wishlist_items we want to update
     *   }
     * })
     */
    upsert<T extends wishlist_itemsUpsertArgs>(args: Prisma.SelectSubset<T, wishlist_itemsUpsertArgs<ExtArgs>>): Prisma.Prisma__wishlist_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Wishlist_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_itemsCountArgs} args - Arguments to filter Wishlist_items to count.
     * @example
     * // Count the number of Wishlist_items
     * const count = await prisma.wishlist_items.count({
     *   where: {
     *     // ... the filter for the Wishlist_items we want to count
     *   }
     * })
    **/
    count<T extends wishlist_itemsCountArgs>(args?: Prisma.Subset<T, wishlist_itemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Wishlist_itemsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Wishlist_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wishlist_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Wishlist_itemsAggregateArgs>(args: Prisma.Subset<T, Wishlist_itemsAggregateArgs>): Prisma.PrismaPromise<GetWishlist_itemsAggregateType<T>>;
    /**
     * Group by Wishlist_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_itemsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends wishlist_itemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: wishlist_itemsGroupByArgs['orderBy'];
    } : {
        orderBy?: wishlist_itemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, wishlist_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlist_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the wishlist_items model
     */
    readonly fields: wishlist_itemsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for wishlist_items.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__wishlist_itemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    canonical_cards<T extends Prisma.wishlist_items$canonical_cardsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_items$canonical_cardsArgs<ExtArgs>>): Prisma.Prisma__canonical_cardsClient<runtime.Types.Result.GetResult<Prisma.$canonical_cardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    card_printings<T extends Prisma.wishlist_items$card_printingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_items$card_printingsArgs<ExtArgs>>): Prisma.Prisma__card_printingsClient<runtime.Types.Result.GetResult<Prisma.$card_printingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    wishlists<T extends Prisma.wishlistsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlistsDefaultArgs<ExtArgs>>): Prisma.Prisma__wishlistsClient<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    wishlist_offers<T extends Prisma.wishlist_items$wishlist_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_items$wishlist_offersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the wishlist_items model
 */
export interface wishlist_itemsFieldRefs {
    readonly id: Prisma.FieldRef<"wishlist_items", 'String'>;
    readonly wishlist_id: Prisma.FieldRef<"wishlist_items", 'String'>;
    readonly canonical_card_id: Prisma.FieldRef<"wishlist_items", 'String'>;
    readonly printing_id: Prisma.FieldRef<"wishlist_items", 'String'>;
    readonly desired_finish: Prisma.FieldRef<"wishlist_items", 'String'>;
    readonly desired_condition: Prisma.FieldRef<"wishlist_items", 'String'>;
    readonly language_code: Prisma.FieldRef<"wishlist_items", 'String'>;
    readonly quantity_desired: Prisma.FieldRef<"wishlist_items", 'Int'>;
    readonly priority: Prisma.FieldRef<"wishlist_items", 'String'>;
    readonly notes: Prisma.FieldRef<"wishlist_items", 'String'>;
    readonly status: Prisma.FieldRef<"wishlist_items", 'String'>;
    readonly created_at: Prisma.FieldRef<"wishlist_items", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"wishlist_items", 'DateTime'>;
    readonly willing_to_pay_cash: Prisma.FieldRef<"wishlist_items", 'Boolean'>;
    readonly willing_to_trade_cards: Prisma.FieldRef<"wishlist_items", 'Boolean'>;
    readonly max_cash_amount: Prisma.FieldRef<"wishlist_items", 'Decimal'>;
    readonly currency_code: Prisma.FieldRef<"wishlist_items", 'String'>;
    readonly trade_notes: Prisma.FieldRef<"wishlist_items", 'String'>;
    readonly game_id: Prisma.FieldRef<"wishlist_items", 'String'>;
}
/**
 * wishlist_items findUnique
 */
export type wishlist_itemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_items
     */
    select?: Prisma.wishlist_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_items
     */
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which wishlist_items to fetch.
     */
    where: Prisma.wishlist_itemsWhereUniqueInput;
};
/**
 * wishlist_items findUniqueOrThrow
 */
export type wishlist_itemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_items
     */
    select?: Prisma.wishlist_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_items
     */
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which wishlist_items to fetch.
     */
    where: Prisma.wishlist_itemsWhereUniqueInput;
};
/**
 * wishlist_items findFirst
 */
export type wishlist_itemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_items
     */
    select?: Prisma.wishlist_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_items
     */
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which wishlist_items to fetch.
     */
    where?: Prisma.wishlist_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlist_items to fetch.
     */
    orderBy?: Prisma.wishlist_itemsOrderByWithRelationInput | Prisma.wishlist_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for wishlist_items.
     */
    cursor?: Prisma.wishlist_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlist_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlist_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wishlist_items.
     */
    distinct?: Prisma.Wishlist_itemsScalarFieldEnum | Prisma.Wishlist_itemsScalarFieldEnum[];
};
/**
 * wishlist_items findFirstOrThrow
 */
export type wishlist_itemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_items
     */
    select?: Prisma.wishlist_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_items
     */
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which wishlist_items to fetch.
     */
    where?: Prisma.wishlist_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlist_items to fetch.
     */
    orderBy?: Prisma.wishlist_itemsOrderByWithRelationInput | Prisma.wishlist_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for wishlist_items.
     */
    cursor?: Prisma.wishlist_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlist_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlist_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wishlist_items.
     */
    distinct?: Prisma.Wishlist_itemsScalarFieldEnum | Prisma.Wishlist_itemsScalarFieldEnum[];
};
/**
 * wishlist_items findMany
 */
export type wishlist_itemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_items
     */
    select?: Prisma.wishlist_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_items
     */
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which wishlist_items to fetch.
     */
    where?: Prisma.wishlist_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlist_items to fetch.
     */
    orderBy?: Prisma.wishlist_itemsOrderByWithRelationInput | Prisma.wishlist_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing wishlist_items.
     */
    cursor?: Prisma.wishlist_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlist_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlist_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wishlist_items.
     */
    distinct?: Prisma.Wishlist_itemsScalarFieldEnum | Prisma.Wishlist_itemsScalarFieldEnum[];
};
/**
 * wishlist_items create
 */
export type wishlist_itemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_items
     */
    select?: Prisma.wishlist_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_items
     */
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_itemsInclude<ExtArgs> | null;
    /**
     * The data needed to create a wishlist_items.
     */
    data: Prisma.XOR<Prisma.wishlist_itemsCreateInput, Prisma.wishlist_itemsUncheckedCreateInput>;
};
/**
 * wishlist_items createMany
 */
export type wishlist_itemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many wishlist_items.
     */
    data: Prisma.wishlist_itemsCreateManyInput | Prisma.wishlist_itemsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * wishlist_items createManyAndReturn
 */
export type wishlist_itemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_items
     */
    select?: Prisma.wishlist_itemsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_items
     */
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    /**
     * The data used to create many wishlist_items.
     */
    data: Prisma.wishlist_itemsCreateManyInput | Prisma.wishlist_itemsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_itemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * wishlist_items update
 */
export type wishlist_itemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_items
     */
    select?: Prisma.wishlist_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_items
     */
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_itemsInclude<ExtArgs> | null;
    /**
     * The data needed to update a wishlist_items.
     */
    data: Prisma.XOR<Prisma.wishlist_itemsUpdateInput, Prisma.wishlist_itemsUncheckedUpdateInput>;
    /**
     * Choose, which wishlist_items to update.
     */
    where: Prisma.wishlist_itemsWhereUniqueInput;
};
/**
 * wishlist_items updateMany
 */
export type wishlist_itemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update wishlist_items.
     */
    data: Prisma.XOR<Prisma.wishlist_itemsUpdateManyMutationInput, Prisma.wishlist_itemsUncheckedUpdateManyInput>;
    /**
     * Filter which wishlist_items to update
     */
    where?: Prisma.wishlist_itemsWhereInput;
    /**
     * Limit how many wishlist_items to update.
     */
    limit?: number;
};
/**
 * wishlist_items updateManyAndReturn
 */
export type wishlist_itemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_items
     */
    select?: Prisma.wishlist_itemsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_items
     */
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    /**
     * The data used to update wishlist_items.
     */
    data: Prisma.XOR<Prisma.wishlist_itemsUpdateManyMutationInput, Prisma.wishlist_itemsUncheckedUpdateManyInput>;
    /**
     * Filter which wishlist_items to update
     */
    where?: Prisma.wishlist_itemsWhereInput;
    /**
     * Limit how many wishlist_items to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_itemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * wishlist_items upsert
 */
export type wishlist_itemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_items
     */
    select?: Prisma.wishlist_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_items
     */
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_itemsInclude<ExtArgs> | null;
    /**
     * The filter to search for the wishlist_items to update in case it exists.
     */
    where: Prisma.wishlist_itemsWhereUniqueInput;
    /**
     * In case the wishlist_items found by the `where` argument doesn't exist, create a new wishlist_items with this data.
     */
    create: Prisma.XOR<Prisma.wishlist_itemsCreateInput, Prisma.wishlist_itemsUncheckedCreateInput>;
    /**
     * In case the wishlist_items was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.wishlist_itemsUpdateInput, Prisma.wishlist_itemsUncheckedUpdateInput>;
};
/**
 * wishlist_items delete
 */
export type wishlist_itemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_items
     */
    select?: Prisma.wishlist_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_items
     */
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_itemsInclude<ExtArgs> | null;
    /**
     * Filter which wishlist_items to delete.
     */
    where: Prisma.wishlist_itemsWhereUniqueInput;
};
/**
 * wishlist_items deleteMany
 */
export type wishlist_itemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which wishlist_items to delete
     */
    where?: Prisma.wishlist_itemsWhereInput;
    /**
     * Limit how many wishlist_items to delete.
     */
    limit?: number;
};
/**
 * wishlist_items.canonical_cards
 */
export type wishlist_items$canonical_cardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the canonical_cards
     */
    select?: Prisma.canonical_cardsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the canonical_cards
     */
    omit?: Prisma.canonical_cardsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.canonical_cardsInclude<ExtArgs> | null;
    where?: Prisma.canonical_cardsWhereInput;
};
/**
 * wishlist_items.card_printings
 */
export type wishlist_items$card_printingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the card_printings
     */
    select?: Prisma.card_printingsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the card_printings
     */
    omit?: Prisma.card_printingsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.card_printingsInclude<ExtArgs> | null;
    where?: Prisma.card_printingsWhereInput;
};
/**
 * wishlist_items.wishlist_offers
 */
export type wishlist_items$wishlist_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * wishlist_items without action
 */
export type wishlist_itemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_items
     */
    select?: Prisma.wishlist_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_items
     */
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_itemsInclude<ExtArgs> | null;
};
