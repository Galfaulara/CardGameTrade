import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model wishlist_offer_requested_items
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type wishlist_offer_requested_itemsModel = runtime.Types.Result.DefaultSelection<Prisma.$wishlist_offer_requested_itemsPayload>;
export type AggregateWishlist_offer_requested_items = {
    _count: Wishlist_offer_requested_itemsCountAggregateOutputType | null;
    _avg: Wishlist_offer_requested_itemsAvgAggregateOutputType | null;
    _sum: Wishlist_offer_requested_itemsSumAggregateOutputType | null;
    _min: Wishlist_offer_requested_itemsMinAggregateOutputType | null;
    _max: Wishlist_offer_requested_itemsMaxAggregateOutputType | null;
};
export type Wishlist_offer_requested_itemsAvgAggregateOutputType = {
    quantity: number | null;
};
export type Wishlist_offer_requested_itemsSumAggregateOutputType = {
    quantity: number | null;
};
export type Wishlist_offer_requested_itemsMinAggregateOutputType = {
    id: string | null;
    wishlist_offer_id: string | null;
    requested_inventory_item_id: string | null;
    requested_canonical_card_id: string | null;
    requested_printing_id: string | null;
    desired_finish: string | null;
    desired_condition: string | null;
    language_code: string | null;
    quantity: number | null;
    notes: string | null;
    created_at: Date | null;
    game_id: string | null;
};
export type Wishlist_offer_requested_itemsMaxAggregateOutputType = {
    id: string | null;
    wishlist_offer_id: string | null;
    requested_inventory_item_id: string | null;
    requested_canonical_card_id: string | null;
    requested_printing_id: string | null;
    desired_finish: string | null;
    desired_condition: string | null;
    language_code: string | null;
    quantity: number | null;
    notes: string | null;
    created_at: Date | null;
    game_id: string | null;
};
export type Wishlist_offer_requested_itemsCountAggregateOutputType = {
    id: number;
    wishlist_offer_id: number;
    requested_inventory_item_id: number;
    requested_canonical_card_id: number;
    requested_printing_id: number;
    desired_finish: number;
    desired_condition: number;
    language_code: number;
    quantity: number;
    notes: number;
    created_at: number;
    game_id: number;
    _all: number;
};
export type Wishlist_offer_requested_itemsAvgAggregateInputType = {
    quantity?: true;
};
export type Wishlist_offer_requested_itemsSumAggregateInputType = {
    quantity?: true;
};
export type Wishlist_offer_requested_itemsMinAggregateInputType = {
    id?: true;
    wishlist_offer_id?: true;
    requested_inventory_item_id?: true;
    requested_canonical_card_id?: true;
    requested_printing_id?: true;
    desired_finish?: true;
    desired_condition?: true;
    language_code?: true;
    quantity?: true;
    notes?: true;
    created_at?: true;
    game_id?: true;
};
export type Wishlist_offer_requested_itemsMaxAggregateInputType = {
    id?: true;
    wishlist_offer_id?: true;
    requested_inventory_item_id?: true;
    requested_canonical_card_id?: true;
    requested_printing_id?: true;
    desired_finish?: true;
    desired_condition?: true;
    language_code?: true;
    quantity?: true;
    notes?: true;
    created_at?: true;
    game_id?: true;
};
export type Wishlist_offer_requested_itemsCountAggregateInputType = {
    id?: true;
    wishlist_offer_id?: true;
    requested_inventory_item_id?: true;
    requested_canonical_card_id?: true;
    requested_printing_id?: true;
    desired_finish?: true;
    desired_condition?: true;
    language_code?: true;
    quantity?: true;
    notes?: true;
    created_at?: true;
    game_id?: true;
    _all?: true;
};
export type Wishlist_offer_requested_itemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which wishlist_offer_requested_items to aggregate.
     */
    where?: Prisma.wishlist_offer_requested_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlist_offer_requested_items to fetch.
     */
    orderBy?: Prisma.wishlist_offer_requested_itemsOrderByWithRelationInput | Prisma.wishlist_offer_requested_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlist_offer_requested_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlist_offer_requested_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned wishlist_offer_requested_items
    **/
    _count?: true | Wishlist_offer_requested_itemsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Wishlist_offer_requested_itemsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Wishlist_offer_requested_itemsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Wishlist_offer_requested_itemsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Wishlist_offer_requested_itemsMaxAggregateInputType;
};
export type GetWishlist_offer_requested_itemsAggregateType<T extends Wishlist_offer_requested_itemsAggregateArgs> = {
    [P in keyof T & keyof AggregateWishlist_offer_requested_items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWishlist_offer_requested_items[P]> : Prisma.GetScalarType<T[P], AggregateWishlist_offer_requested_items[P]>;
};
export type wishlist_offer_requested_itemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_offer_requested_itemsWhereInput;
    orderBy?: Prisma.wishlist_offer_requested_itemsOrderByWithAggregationInput | Prisma.wishlist_offer_requested_itemsOrderByWithAggregationInput[];
    by: Prisma.Wishlist_offer_requested_itemsScalarFieldEnum[] | Prisma.Wishlist_offer_requested_itemsScalarFieldEnum;
    having?: Prisma.wishlist_offer_requested_itemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Wishlist_offer_requested_itemsCountAggregateInputType | true;
    _avg?: Wishlist_offer_requested_itemsAvgAggregateInputType;
    _sum?: Wishlist_offer_requested_itemsSumAggregateInputType;
    _min?: Wishlist_offer_requested_itemsMinAggregateInputType;
    _max?: Wishlist_offer_requested_itemsMaxAggregateInputType;
};
export type Wishlist_offer_requested_itemsGroupByOutputType = {
    id: string;
    wishlist_offer_id: string;
    requested_inventory_item_id: string | null;
    requested_canonical_card_id: string | null;
    requested_printing_id: string | null;
    desired_finish: string | null;
    desired_condition: string | null;
    language_code: string | null;
    quantity: number;
    notes: string | null;
    created_at: Date;
    game_id: string;
    _count: Wishlist_offer_requested_itemsCountAggregateOutputType | null;
    _avg: Wishlist_offer_requested_itemsAvgAggregateOutputType | null;
    _sum: Wishlist_offer_requested_itemsSumAggregateOutputType | null;
    _min: Wishlist_offer_requested_itemsMinAggregateOutputType | null;
    _max: Wishlist_offer_requested_itemsMaxAggregateOutputType | null;
};
export type GetWishlist_offer_requested_itemsGroupByPayload<T extends wishlist_offer_requested_itemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Wishlist_offer_requested_itemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Wishlist_offer_requested_itemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Wishlist_offer_requested_itemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Wishlist_offer_requested_itemsGroupByOutputType[P]>;
}>>;
export type wishlist_offer_requested_itemsWhereInput = {
    AND?: Prisma.wishlist_offer_requested_itemsWhereInput | Prisma.wishlist_offer_requested_itemsWhereInput[];
    OR?: Prisma.wishlist_offer_requested_itemsWhereInput[];
    NOT?: Prisma.wishlist_offer_requested_itemsWhereInput | Prisma.wishlist_offer_requested_itemsWhereInput[];
    id?: Prisma.UuidFilter<"wishlist_offer_requested_items"> | string;
    wishlist_offer_id?: Prisma.UuidFilter<"wishlist_offer_requested_items"> | string;
    requested_inventory_item_id?: Prisma.UuidNullableFilter<"wishlist_offer_requested_items"> | string | null;
    requested_canonical_card_id?: Prisma.UuidNullableFilter<"wishlist_offer_requested_items"> | string | null;
    requested_printing_id?: Prisma.UuidNullableFilter<"wishlist_offer_requested_items"> | string | null;
    desired_finish?: Prisma.StringNullableFilter<"wishlist_offer_requested_items"> | string | null;
    desired_condition?: Prisma.StringNullableFilter<"wishlist_offer_requested_items"> | string | null;
    language_code?: Prisma.StringNullableFilter<"wishlist_offer_requested_items"> | string | null;
    quantity?: Prisma.IntFilter<"wishlist_offer_requested_items"> | number;
    notes?: Prisma.StringNullableFilter<"wishlist_offer_requested_items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"wishlist_offer_requested_items"> | Date | string;
    game_id?: Prisma.UuidFilter<"wishlist_offer_requested_items"> | string;
    canonical_cards?: Prisma.XOR<Prisma.Canonical_cardsNullableScalarRelationFilter, Prisma.canonical_cardsWhereInput> | null;
    inventory_items?: Prisma.XOR<Prisma.Inventory_itemsNullableScalarRelationFilter, Prisma.inventory_itemsWhereInput> | null;
    wishlist_offers?: Prisma.XOR<Prisma.Wishlist_offersScalarRelationFilter, Prisma.wishlist_offersWhereInput>;
    card_printings?: Prisma.XOR<Prisma.Card_printingsNullableScalarRelationFilter, Prisma.card_printingsWhereInput> | null;
};
export type wishlist_offer_requested_itemsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    wishlist_offer_id?: Prisma.SortOrder;
    requested_inventory_item_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    requested_canonical_card_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    requested_printing_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    desired_finish?: Prisma.SortOrderInput | Prisma.SortOrder;
    desired_condition?: Prisma.SortOrderInput | Prisma.SortOrder;
    language_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    canonical_cards?: Prisma.canonical_cardsOrderByWithRelationInput;
    inventory_items?: Prisma.inventory_itemsOrderByWithRelationInput;
    wishlist_offers?: Prisma.wishlist_offersOrderByWithRelationInput;
    card_printings?: Prisma.card_printingsOrderByWithRelationInput;
};
export type wishlist_offer_requested_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.wishlist_offer_requested_itemsWhereInput | Prisma.wishlist_offer_requested_itemsWhereInput[];
    OR?: Prisma.wishlist_offer_requested_itemsWhereInput[];
    NOT?: Prisma.wishlist_offer_requested_itemsWhereInput | Prisma.wishlist_offer_requested_itemsWhereInput[];
    wishlist_offer_id?: Prisma.UuidFilter<"wishlist_offer_requested_items"> | string;
    requested_inventory_item_id?: Prisma.UuidNullableFilter<"wishlist_offer_requested_items"> | string | null;
    requested_canonical_card_id?: Prisma.UuidNullableFilter<"wishlist_offer_requested_items"> | string | null;
    requested_printing_id?: Prisma.UuidNullableFilter<"wishlist_offer_requested_items"> | string | null;
    desired_finish?: Prisma.StringNullableFilter<"wishlist_offer_requested_items"> | string | null;
    desired_condition?: Prisma.StringNullableFilter<"wishlist_offer_requested_items"> | string | null;
    language_code?: Prisma.StringNullableFilter<"wishlist_offer_requested_items"> | string | null;
    quantity?: Prisma.IntFilter<"wishlist_offer_requested_items"> | number;
    notes?: Prisma.StringNullableFilter<"wishlist_offer_requested_items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"wishlist_offer_requested_items"> | Date | string;
    game_id?: Prisma.UuidFilter<"wishlist_offer_requested_items"> | string;
    canonical_cards?: Prisma.XOR<Prisma.Canonical_cardsNullableScalarRelationFilter, Prisma.canonical_cardsWhereInput> | null;
    inventory_items?: Prisma.XOR<Prisma.Inventory_itemsNullableScalarRelationFilter, Prisma.inventory_itemsWhereInput> | null;
    wishlist_offers?: Prisma.XOR<Prisma.Wishlist_offersScalarRelationFilter, Prisma.wishlist_offersWhereInput>;
    card_printings?: Prisma.XOR<Prisma.Card_printingsNullableScalarRelationFilter, Prisma.card_printingsWhereInput> | null;
}, "id">;
export type wishlist_offer_requested_itemsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    wishlist_offer_id?: Prisma.SortOrder;
    requested_inventory_item_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    requested_canonical_card_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    requested_printing_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    desired_finish?: Prisma.SortOrderInput | Prisma.SortOrder;
    desired_condition?: Prisma.SortOrderInput | Prisma.SortOrder;
    language_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    _count?: Prisma.wishlist_offer_requested_itemsCountOrderByAggregateInput;
    _avg?: Prisma.wishlist_offer_requested_itemsAvgOrderByAggregateInput;
    _max?: Prisma.wishlist_offer_requested_itemsMaxOrderByAggregateInput;
    _min?: Prisma.wishlist_offer_requested_itemsMinOrderByAggregateInput;
    _sum?: Prisma.wishlist_offer_requested_itemsSumOrderByAggregateInput;
};
export type wishlist_offer_requested_itemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.wishlist_offer_requested_itemsScalarWhereWithAggregatesInput | Prisma.wishlist_offer_requested_itemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.wishlist_offer_requested_itemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.wishlist_offer_requested_itemsScalarWhereWithAggregatesInput | Prisma.wishlist_offer_requested_itemsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"wishlist_offer_requested_items"> | string;
    wishlist_offer_id?: Prisma.UuidWithAggregatesFilter<"wishlist_offer_requested_items"> | string;
    requested_inventory_item_id?: Prisma.UuidNullableWithAggregatesFilter<"wishlist_offer_requested_items"> | string | null;
    requested_canonical_card_id?: Prisma.UuidNullableWithAggregatesFilter<"wishlist_offer_requested_items"> | string | null;
    requested_printing_id?: Prisma.UuidNullableWithAggregatesFilter<"wishlist_offer_requested_items"> | string | null;
    desired_finish?: Prisma.StringNullableWithAggregatesFilter<"wishlist_offer_requested_items"> | string | null;
    desired_condition?: Prisma.StringNullableWithAggregatesFilter<"wishlist_offer_requested_items"> | string | null;
    language_code?: Prisma.StringNullableWithAggregatesFilter<"wishlist_offer_requested_items"> | string | null;
    quantity?: Prisma.IntWithAggregatesFilter<"wishlist_offer_requested_items"> | number;
    notes?: Prisma.StringNullableWithAggregatesFilter<"wishlist_offer_requested_items"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"wishlist_offer_requested_items"> | Date | string;
    game_id?: Prisma.UuidWithAggregatesFilter<"wishlist_offer_requested_items"> | string;
};
export type wishlist_offer_requested_itemsCreateInput = {
    id?: string;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    canonical_cards?: Prisma.canonical_cardsCreateNestedOneWithoutWishlist_offer_requested_itemsInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_requested_itemsInput;
    wishlist_offers: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_requested_itemsInput;
    card_printings?: Prisma.card_printingsCreateNestedOneWithoutWishlist_offer_requested_itemsInput;
};
export type wishlist_offer_requested_itemsUncheckedCreateInput = {
    id?: string;
    wishlist_offer_id: string;
    requested_inventory_item_id?: string | null;
    requested_canonical_card_id?: string | null;
    requested_printing_id?: string | null;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type wishlist_offer_requested_itemsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUpdateOneWithoutWishlist_offer_requested_itemsNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateOneWithoutWishlist_offer_requested_itemsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneRequiredWithoutWishlist_offer_requested_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneWithoutWishlist_offer_requested_itemsNestedInput;
};
export type wishlist_offer_requested_itemsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requested_canonical_card_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requested_printing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type wishlist_offer_requested_itemsCreateManyInput = {
    id?: string;
    wishlist_offer_id: string;
    requested_inventory_item_id?: string | null;
    requested_canonical_card_id?: string | null;
    requested_printing_id?: string | null;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type wishlist_offer_requested_itemsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type wishlist_offer_requested_itemsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requested_canonical_card_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requested_printing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Wishlist_offer_requested_itemsListRelationFilter = {
    every?: Prisma.wishlist_offer_requested_itemsWhereInput;
    some?: Prisma.wishlist_offer_requested_itemsWhereInput;
    none?: Prisma.wishlist_offer_requested_itemsWhereInput;
};
export type wishlist_offer_requested_itemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type wishlist_offer_requested_itemsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wishlist_offer_id?: Prisma.SortOrder;
    requested_inventory_item_id?: Prisma.SortOrder;
    requested_canonical_card_id?: Prisma.SortOrder;
    requested_printing_id?: Prisma.SortOrder;
    desired_finish?: Prisma.SortOrder;
    desired_condition?: Prisma.SortOrder;
    language_code?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type wishlist_offer_requested_itemsAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type wishlist_offer_requested_itemsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wishlist_offer_id?: Prisma.SortOrder;
    requested_inventory_item_id?: Prisma.SortOrder;
    requested_canonical_card_id?: Prisma.SortOrder;
    requested_printing_id?: Prisma.SortOrder;
    desired_finish?: Prisma.SortOrder;
    desired_condition?: Prisma.SortOrder;
    language_code?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type wishlist_offer_requested_itemsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wishlist_offer_id?: Prisma.SortOrder;
    requested_inventory_item_id?: Prisma.SortOrder;
    requested_canonical_card_id?: Prisma.SortOrder;
    requested_printing_id?: Prisma.SortOrder;
    desired_finish?: Prisma.SortOrder;
    desired_condition?: Prisma.SortOrder;
    language_code?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type wishlist_offer_requested_itemsSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type wishlist_offer_requested_itemsCreateNestedManyWithoutCanonical_cardsInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutCanonical_cardsInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCanonical_cardsInput> | Prisma.wishlist_offer_requested_itemsCreateWithoutCanonical_cardsInput[] | Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCanonical_cardsInput[];
    connectOrCreate?: Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutCanonical_cardsInput | Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutCanonical_cardsInput[];
    createMany?: Prisma.wishlist_offer_requested_itemsCreateManyCanonical_cardsInputEnvelope;
    connect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
};
export type wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutCanonical_cardsInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutCanonical_cardsInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCanonical_cardsInput> | Prisma.wishlist_offer_requested_itemsCreateWithoutCanonical_cardsInput[] | Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCanonical_cardsInput[];
    connectOrCreate?: Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutCanonical_cardsInput | Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutCanonical_cardsInput[];
    createMany?: Prisma.wishlist_offer_requested_itemsCreateManyCanonical_cardsInputEnvelope;
    connect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
};
export type wishlist_offer_requested_itemsUpdateManyWithoutCanonical_cardsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutCanonical_cardsInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCanonical_cardsInput> | Prisma.wishlist_offer_requested_itemsCreateWithoutCanonical_cardsInput[] | Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCanonical_cardsInput[];
    connectOrCreate?: Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutCanonical_cardsInput | Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutCanonical_cardsInput[];
    upsert?: Prisma.wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutCanonical_cardsInput | Prisma.wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutCanonical_cardsInput[];
    createMany?: Prisma.wishlist_offer_requested_itemsCreateManyCanonical_cardsInputEnvelope;
    set?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutCanonical_cardsInput | Prisma.wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutCanonical_cardsInput[];
    updateMany?: Prisma.wishlist_offer_requested_itemsUpdateManyWithWhereWithoutCanonical_cardsInput | Prisma.wishlist_offer_requested_itemsUpdateManyWithWhereWithoutCanonical_cardsInput[];
    deleteMany?: Prisma.wishlist_offer_requested_itemsScalarWhereInput | Prisma.wishlist_offer_requested_itemsScalarWhereInput[];
};
export type wishlist_offer_requested_itemsUncheckedUpdateManyWithoutCanonical_cardsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutCanonical_cardsInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCanonical_cardsInput> | Prisma.wishlist_offer_requested_itemsCreateWithoutCanonical_cardsInput[] | Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCanonical_cardsInput[];
    connectOrCreate?: Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutCanonical_cardsInput | Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutCanonical_cardsInput[];
    upsert?: Prisma.wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutCanonical_cardsInput | Prisma.wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutCanonical_cardsInput[];
    createMany?: Prisma.wishlist_offer_requested_itemsCreateManyCanonical_cardsInputEnvelope;
    set?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutCanonical_cardsInput | Prisma.wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutCanonical_cardsInput[];
    updateMany?: Prisma.wishlist_offer_requested_itemsUpdateManyWithWhereWithoutCanonical_cardsInput | Prisma.wishlist_offer_requested_itemsUpdateManyWithWhereWithoutCanonical_cardsInput[];
    deleteMany?: Prisma.wishlist_offer_requested_itemsScalarWhereInput | Prisma.wishlist_offer_requested_itemsScalarWhereInput[];
};
export type wishlist_offer_requested_itemsCreateNestedManyWithoutCard_printingsInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutCard_printingsInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCard_printingsInput> | Prisma.wishlist_offer_requested_itemsCreateWithoutCard_printingsInput[] | Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCard_printingsInput[];
    connectOrCreate?: Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutCard_printingsInput | Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutCard_printingsInput[];
    createMany?: Prisma.wishlist_offer_requested_itemsCreateManyCard_printingsInputEnvelope;
    connect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
};
export type wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutCard_printingsInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutCard_printingsInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCard_printingsInput> | Prisma.wishlist_offer_requested_itemsCreateWithoutCard_printingsInput[] | Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCard_printingsInput[];
    connectOrCreate?: Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutCard_printingsInput | Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutCard_printingsInput[];
    createMany?: Prisma.wishlist_offer_requested_itemsCreateManyCard_printingsInputEnvelope;
    connect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
};
export type wishlist_offer_requested_itemsUpdateManyWithoutCard_printingsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutCard_printingsInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCard_printingsInput> | Prisma.wishlist_offer_requested_itemsCreateWithoutCard_printingsInput[] | Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCard_printingsInput[];
    connectOrCreate?: Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutCard_printingsInput | Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutCard_printingsInput[];
    upsert?: Prisma.wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutCard_printingsInput | Prisma.wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutCard_printingsInput[];
    createMany?: Prisma.wishlist_offer_requested_itemsCreateManyCard_printingsInputEnvelope;
    set?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutCard_printingsInput | Prisma.wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutCard_printingsInput[];
    updateMany?: Prisma.wishlist_offer_requested_itemsUpdateManyWithWhereWithoutCard_printingsInput | Prisma.wishlist_offer_requested_itemsUpdateManyWithWhereWithoutCard_printingsInput[];
    deleteMany?: Prisma.wishlist_offer_requested_itemsScalarWhereInput | Prisma.wishlist_offer_requested_itemsScalarWhereInput[];
};
export type wishlist_offer_requested_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutCard_printingsInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCard_printingsInput> | Prisma.wishlist_offer_requested_itemsCreateWithoutCard_printingsInput[] | Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCard_printingsInput[];
    connectOrCreate?: Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutCard_printingsInput | Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutCard_printingsInput[];
    upsert?: Prisma.wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutCard_printingsInput | Prisma.wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutCard_printingsInput[];
    createMany?: Prisma.wishlist_offer_requested_itemsCreateManyCard_printingsInputEnvelope;
    set?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutCard_printingsInput | Prisma.wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutCard_printingsInput[];
    updateMany?: Prisma.wishlist_offer_requested_itemsUpdateManyWithWhereWithoutCard_printingsInput | Prisma.wishlist_offer_requested_itemsUpdateManyWithWhereWithoutCard_printingsInput[];
    deleteMany?: Prisma.wishlist_offer_requested_itemsScalarWhereInput | Prisma.wishlist_offer_requested_itemsScalarWhereInput[];
};
export type wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutInventory_itemsInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutInventory_itemsInput> | Prisma.wishlist_offer_requested_itemsCreateWithoutInventory_itemsInput[] | Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutInventory_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutInventory_itemsInput | Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutInventory_itemsInput[];
    createMany?: Prisma.wishlist_offer_requested_itemsCreateManyInventory_itemsInputEnvelope;
    connect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
};
export type wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutInventory_itemsInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutInventory_itemsInput> | Prisma.wishlist_offer_requested_itemsCreateWithoutInventory_itemsInput[] | Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutInventory_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutInventory_itemsInput | Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutInventory_itemsInput[];
    createMany?: Prisma.wishlist_offer_requested_itemsCreateManyInventory_itemsInputEnvelope;
    connect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
};
export type wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutInventory_itemsInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutInventory_itemsInput> | Prisma.wishlist_offer_requested_itemsCreateWithoutInventory_itemsInput[] | Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutInventory_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutInventory_itemsInput | Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutInventory_itemsInput[];
    upsert?: Prisma.wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutInventory_itemsInput | Prisma.wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutInventory_itemsInput[];
    createMany?: Prisma.wishlist_offer_requested_itemsCreateManyInventory_itemsInputEnvelope;
    set?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutInventory_itemsInput | Prisma.wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutInventory_itemsInput[];
    updateMany?: Prisma.wishlist_offer_requested_itemsUpdateManyWithWhereWithoutInventory_itemsInput | Prisma.wishlist_offer_requested_itemsUpdateManyWithWhereWithoutInventory_itemsInput[];
    deleteMany?: Prisma.wishlist_offer_requested_itemsScalarWhereInput | Prisma.wishlist_offer_requested_itemsScalarWhereInput[];
};
export type wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutInventory_itemsInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutInventory_itemsInput> | Prisma.wishlist_offer_requested_itemsCreateWithoutInventory_itemsInput[] | Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutInventory_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutInventory_itemsInput | Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutInventory_itemsInput[];
    upsert?: Prisma.wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutInventory_itemsInput | Prisma.wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutInventory_itemsInput[];
    createMany?: Prisma.wishlist_offer_requested_itemsCreateManyInventory_itemsInputEnvelope;
    set?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutInventory_itemsInput | Prisma.wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutInventory_itemsInput[];
    updateMany?: Prisma.wishlist_offer_requested_itemsUpdateManyWithWhereWithoutInventory_itemsInput | Prisma.wishlist_offer_requested_itemsUpdateManyWithWhereWithoutInventory_itemsInput[];
    deleteMany?: Prisma.wishlist_offer_requested_itemsScalarWhereInput | Prisma.wishlist_offer_requested_itemsScalarWhereInput[];
};
export type wishlist_offer_requested_itemsCreateNestedManyWithoutWishlist_offersInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutWishlist_offersInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutWishlist_offersInput> | Prisma.wishlist_offer_requested_itemsCreateWithoutWishlist_offersInput[] | Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutWishlist_offersInput[];
    connectOrCreate?: Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutWishlist_offersInput | Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutWishlist_offersInput[];
    createMany?: Prisma.wishlist_offer_requested_itemsCreateManyWishlist_offersInputEnvelope;
    connect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
};
export type wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutWishlist_offersInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutWishlist_offersInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutWishlist_offersInput> | Prisma.wishlist_offer_requested_itemsCreateWithoutWishlist_offersInput[] | Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutWishlist_offersInput[];
    connectOrCreate?: Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutWishlist_offersInput | Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutWishlist_offersInput[];
    createMany?: Prisma.wishlist_offer_requested_itemsCreateManyWishlist_offersInputEnvelope;
    connect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
};
export type wishlist_offer_requested_itemsUpdateManyWithoutWishlist_offersNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutWishlist_offersInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutWishlist_offersInput> | Prisma.wishlist_offer_requested_itemsCreateWithoutWishlist_offersInput[] | Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutWishlist_offersInput[];
    connectOrCreate?: Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutWishlist_offersInput | Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutWishlist_offersInput[];
    upsert?: Prisma.wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutWishlist_offersInput | Prisma.wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutWishlist_offersInput[];
    createMany?: Prisma.wishlist_offer_requested_itemsCreateManyWishlist_offersInputEnvelope;
    set?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutWishlist_offersInput | Prisma.wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutWishlist_offersInput[];
    updateMany?: Prisma.wishlist_offer_requested_itemsUpdateManyWithWhereWithoutWishlist_offersInput | Prisma.wishlist_offer_requested_itemsUpdateManyWithWhereWithoutWishlist_offersInput[];
    deleteMany?: Prisma.wishlist_offer_requested_itemsScalarWhereInput | Prisma.wishlist_offer_requested_itemsScalarWhereInput[];
};
export type wishlist_offer_requested_itemsUncheckedUpdateManyWithoutWishlist_offersNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutWishlist_offersInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutWishlist_offersInput> | Prisma.wishlist_offer_requested_itemsCreateWithoutWishlist_offersInput[] | Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutWishlist_offersInput[];
    connectOrCreate?: Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutWishlist_offersInput | Prisma.wishlist_offer_requested_itemsCreateOrConnectWithoutWishlist_offersInput[];
    upsert?: Prisma.wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutWishlist_offersInput | Prisma.wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutWishlist_offersInput[];
    createMany?: Prisma.wishlist_offer_requested_itemsCreateManyWishlist_offersInputEnvelope;
    set?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput | Prisma.wishlist_offer_requested_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutWishlist_offersInput | Prisma.wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutWishlist_offersInput[];
    updateMany?: Prisma.wishlist_offer_requested_itemsUpdateManyWithWhereWithoutWishlist_offersInput | Prisma.wishlist_offer_requested_itemsUpdateManyWithWhereWithoutWishlist_offersInput[];
    deleteMany?: Prisma.wishlist_offer_requested_itemsScalarWhereInput | Prisma.wishlist_offer_requested_itemsScalarWhereInput[];
};
export type wishlist_offer_requested_itemsCreateWithoutCanonical_cardsInput = {
    id?: string;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    inventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_requested_itemsInput;
    wishlist_offers: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_requested_itemsInput;
    card_printings?: Prisma.card_printingsCreateNestedOneWithoutWishlist_offer_requested_itemsInput;
};
export type wishlist_offer_requested_itemsUncheckedCreateWithoutCanonical_cardsInput = {
    id?: string;
    wishlist_offer_id: string;
    requested_inventory_item_id?: string | null;
    requested_printing_id?: string | null;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
};
export type wishlist_offer_requested_itemsCreateOrConnectWithoutCanonical_cardsInput = {
    where: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutCanonical_cardsInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCanonical_cardsInput>;
};
export type wishlist_offer_requested_itemsCreateManyCanonical_cardsInputEnvelope = {
    data: Prisma.wishlist_offer_requested_itemsCreateManyCanonical_cardsInput | Prisma.wishlist_offer_requested_itemsCreateManyCanonical_cardsInput[];
    skipDuplicates?: boolean;
};
export type wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutCanonical_cardsInput = {
    where: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlist_offer_requested_itemsUpdateWithoutCanonical_cardsInput, Prisma.wishlist_offer_requested_itemsUncheckedUpdateWithoutCanonical_cardsInput>;
    create: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutCanonical_cardsInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCanonical_cardsInput>;
};
export type wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutCanonical_cardsInput = {
    where: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlist_offer_requested_itemsUpdateWithoutCanonical_cardsInput, Prisma.wishlist_offer_requested_itemsUncheckedUpdateWithoutCanonical_cardsInput>;
};
export type wishlist_offer_requested_itemsUpdateManyWithWhereWithoutCanonical_cardsInput = {
    where: Prisma.wishlist_offer_requested_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offer_requested_itemsUpdateManyMutationInput, Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutCanonical_cardsInput>;
};
export type wishlist_offer_requested_itemsScalarWhereInput = {
    AND?: Prisma.wishlist_offer_requested_itemsScalarWhereInput | Prisma.wishlist_offer_requested_itemsScalarWhereInput[];
    OR?: Prisma.wishlist_offer_requested_itemsScalarWhereInput[];
    NOT?: Prisma.wishlist_offer_requested_itemsScalarWhereInput | Prisma.wishlist_offer_requested_itemsScalarWhereInput[];
    id?: Prisma.UuidFilter<"wishlist_offer_requested_items"> | string;
    wishlist_offer_id?: Prisma.UuidFilter<"wishlist_offer_requested_items"> | string;
    requested_inventory_item_id?: Prisma.UuidNullableFilter<"wishlist_offer_requested_items"> | string | null;
    requested_canonical_card_id?: Prisma.UuidNullableFilter<"wishlist_offer_requested_items"> | string | null;
    requested_printing_id?: Prisma.UuidNullableFilter<"wishlist_offer_requested_items"> | string | null;
    desired_finish?: Prisma.StringNullableFilter<"wishlist_offer_requested_items"> | string | null;
    desired_condition?: Prisma.StringNullableFilter<"wishlist_offer_requested_items"> | string | null;
    language_code?: Prisma.StringNullableFilter<"wishlist_offer_requested_items"> | string | null;
    quantity?: Prisma.IntFilter<"wishlist_offer_requested_items"> | number;
    notes?: Prisma.StringNullableFilter<"wishlist_offer_requested_items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"wishlist_offer_requested_items"> | Date | string;
    game_id?: Prisma.UuidFilter<"wishlist_offer_requested_items"> | string;
};
export type wishlist_offer_requested_itemsCreateWithoutCard_printingsInput = {
    id?: string;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    canonical_cards?: Prisma.canonical_cardsCreateNestedOneWithoutWishlist_offer_requested_itemsInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_requested_itemsInput;
    wishlist_offers: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_requested_itemsInput;
};
export type wishlist_offer_requested_itemsUncheckedCreateWithoutCard_printingsInput = {
    id?: string;
    wishlist_offer_id: string;
    requested_inventory_item_id?: string | null;
    requested_canonical_card_id?: string | null;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
};
export type wishlist_offer_requested_itemsCreateOrConnectWithoutCard_printingsInput = {
    where: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutCard_printingsInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCard_printingsInput>;
};
export type wishlist_offer_requested_itemsCreateManyCard_printingsInputEnvelope = {
    data: Prisma.wishlist_offer_requested_itemsCreateManyCard_printingsInput | Prisma.wishlist_offer_requested_itemsCreateManyCard_printingsInput[];
    skipDuplicates?: boolean;
};
export type wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutCard_printingsInput = {
    where: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlist_offer_requested_itemsUpdateWithoutCard_printingsInput, Prisma.wishlist_offer_requested_itemsUncheckedUpdateWithoutCard_printingsInput>;
    create: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutCard_printingsInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutCard_printingsInput>;
};
export type wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutCard_printingsInput = {
    where: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlist_offer_requested_itemsUpdateWithoutCard_printingsInput, Prisma.wishlist_offer_requested_itemsUncheckedUpdateWithoutCard_printingsInput>;
};
export type wishlist_offer_requested_itemsUpdateManyWithWhereWithoutCard_printingsInput = {
    where: Prisma.wishlist_offer_requested_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offer_requested_itemsUpdateManyMutationInput, Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutCard_printingsInput>;
};
export type wishlist_offer_requested_itemsCreateWithoutInventory_itemsInput = {
    id?: string;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    canonical_cards?: Prisma.canonical_cardsCreateNestedOneWithoutWishlist_offer_requested_itemsInput;
    wishlist_offers: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_requested_itemsInput;
    card_printings?: Prisma.card_printingsCreateNestedOneWithoutWishlist_offer_requested_itemsInput;
};
export type wishlist_offer_requested_itemsUncheckedCreateWithoutInventory_itemsInput = {
    id?: string;
    wishlist_offer_id: string;
    requested_canonical_card_id?: string | null;
    requested_printing_id?: string | null;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
};
export type wishlist_offer_requested_itemsCreateOrConnectWithoutInventory_itemsInput = {
    where: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutInventory_itemsInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutInventory_itemsInput>;
};
export type wishlist_offer_requested_itemsCreateManyInventory_itemsInputEnvelope = {
    data: Prisma.wishlist_offer_requested_itemsCreateManyInventory_itemsInput | Prisma.wishlist_offer_requested_itemsCreateManyInventory_itemsInput[];
    skipDuplicates?: boolean;
};
export type wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutInventory_itemsInput = {
    where: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlist_offer_requested_itemsUpdateWithoutInventory_itemsInput, Prisma.wishlist_offer_requested_itemsUncheckedUpdateWithoutInventory_itemsInput>;
    create: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutInventory_itemsInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutInventory_itemsInput>;
};
export type wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutInventory_itemsInput = {
    where: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlist_offer_requested_itemsUpdateWithoutInventory_itemsInput, Prisma.wishlist_offer_requested_itemsUncheckedUpdateWithoutInventory_itemsInput>;
};
export type wishlist_offer_requested_itemsUpdateManyWithWhereWithoutInventory_itemsInput = {
    where: Prisma.wishlist_offer_requested_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offer_requested_itemsUpdateManyMutationInput, Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsInput>;
};
export type wishlist_offer_requested_itemsCreateWithoutWishlist_offersInput = {
    id?: string;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    canonical_cards?: Prisma.canonical_cardsCreateNestedOneWithoutWishlist_offer_requested_itemsInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_requested_itemsInput;
    card_printings?: Prisma.card_printingsCreateNestedOneWithoutWishlist_offer_requested_itemsInput;
};
export type wishlist_offer_requested_itemsUncheckedCreateWithoutWishlist_offersInput = {
    id?: string;
    requested_inventory_item_id?: string | null;
    requested_canonical_card_id?: string | null;
    requested_printing_id?: string | null;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
};
export type wishlist_offer_requested_itemsCreateOrConnectWithoutWishlist_offersInput = {
    where: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutWishlist_offersInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutWishlist_offersInput>;
};
export type wishlist_offer_requested_itemsCreateManyWishlist_offersInputEnvelope = {
    data: Prisma.wishlist_offer_requested_itemsCreateManyWishlist_offersInput | Prisma.wishlist_offer_requested_itemsCreateManyWishlist_offersInput[];
    skipDuplicates?: boolean;
};
export type wishlist_offer_requested_itemsUpsertWithWhereUniqueWithoutWishlist_offersInput = {
    where: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlist_offer_requested_itemsUpdateWithoutWishlist_offersInput, Prisma.wishlist_offer_requested_itemsUncheckedUpdateWithoutWishlist_offersInput>;
    create: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateWithoutWishlist_offersInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateWithoutWishlist_offersInput>;
};
export type wishlist_offer_requested_itemsUpdateWithWhereUniqueWithoutWishlist_offersInput = {
    where: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlist_offer_requested_itemsUpdateWithoutWishlist_offersInput, Prisma.wishlist_offer_requested_itemsUncheckedUpdateWithoutWishlist_offersInput>;
};
export type wishlist_offer_requested_itemsUpdateManyWithWhereWithoutWishlist_offersInput = {
    where: Prisma.wishlist_offer_requested_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offer_requested_itemsUpdateManyMutationInput, Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutWishlist_offersInput>;
};
export type wishlist_offer_requested_itemsCreateManyCanonical_cardsInput = {
    id?: string;
    wishlist_offer_id: string;
    requested_inventory_item_id?: string | null;
    requested_printing_id?: string | null;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
};
export type wishlist_offer_requested_itemsUpdateWithoutCanonical_cardsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUpdateOneWithoutWishlist_offer_requested_itemsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneRequiredWithoutWishlist_offer_requested_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneWithoutWishlist_offer_requested_itemsNestedInput;
};
export type wishlist_offer_requested_itemsUncheckedUpdateWithoutCanonical_cardsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requested_printing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type wishlist_offer_requested_itemsUncheckedUpdateManyWithoutCanonical_cardsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requested_printing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type wishlist_offer_requested_itemsCreateManyCard_printingsInput = {
    id?: string;
    wishlist_offer_id: string;
    requested_inventory_item_id?: string | null;
    requested_canonical_card_id?: string | null;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
};
export type wishlist_offer_requested_itemsUpdateWithoutCard_printingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUpdateOneWithoutWishlist_offer_requested_itemsNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateOneWithoutWishlist_offer_requested_itemsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneRequiredWithoutWishlist_offer_requested_itemsNestedInput;
};
export type wishlist_offer_requested_itemsUncheckedUpdateWithoutCard_printingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requested_canonical_card_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type wishlist_offer_requested_itemsUncheckedUpdateManyWithoutCard_printingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requested_canonical_card_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type wishlist_offer_requested_itemsCreateManyInventory_itemsInput = {
    id?: string;
    wishlist_offer_id: string;
    requested_canonical_card_id?: string | null;
    requested_printing_id?: string | null;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
};
export type wishlist_offer_requested_itemsUpdateWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUpdateOneWithoutWishlist_offer_requested_itemsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneRequiredWithoutWishlist_offer_requested_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneWithoutWishlist_offer_requested_itemsNestedInput;
};
export type wishlist_offer_requested_itemsUncheckedUpdateWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_canonical_card_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requested_printing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_canonical_card_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requested_printing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type wishlist_offer_requested_itemsCreateManyWishlist_offersInput = {
    id?: string;
    requested_inventory_item_id?: string | null;
    requested_canonical_card_id?: string | null;
    requested_printing_id?: string | null;
    desired_finish?: string | null;
    desired_condition?: string | null;
    language_code?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
};
export type wishlist_offer_requested_itemsUpdateWithoutWishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    canonical_cards?: Prisma.canonical_cardsUpdateOneWithoutWishlist_offer_requested_itemsNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateOneWithoutWishlist_offer_requested_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneWithoutWishlist_offer_requested_itemsNestedInput;
};
export type wishlist_offer_requested_itemsUncheckedUpdateWithoutWishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requested_canonical_card_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requested_printing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type wishlist_offer_requested_itemsUncheckedUpdateManyWithoutWishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requested_inventory_item_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requested_canonical_card_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requested_printing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_finish?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    desired_condition?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type wishlist_offer_requested_itemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wishlist_offer_id?: boolean;
    requested_inventory_item_id?: boolean;
    requested_canonical_card_id?: boolean;
    requested_printing_id?: boolean;
    desired_finish?: boolean;
    desired_condition?: boolean;
    language_code?: boolean;
    quantity?: boolean;
    notes?: boolean;
    created_at?: boolean;
    game_id?: boolean;
    canonical_cards?: boolean | Prisma.wishlist_offer_requested_items$canonical_cardsArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.wishlist_offer_requested_items$inventory_itemsArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.wishlist_offersDefaultArgs<ExtArgs>;
    card_printings?: boolean | Prisma.wishlist_offer_requested_items$card_printingsArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist_offer_requested_items"]>;
export type wishlist_offer_requested_itemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wishlist_offer_id?: boolean;
    requested_inventory_item_id?: boolean;
    requested_canonical_card_id?: boolean;
    requested_printing_id?: boolean;
    desired_finish?: boolean;
    desired_condition?: boolean;
    language_code?: boolean;
    quantity?: boolean;
    notes?: boolean;
    created_at?: boolean;
    game_id?: boolean;
    canonical_cards?: boolean | Prisma.wishlist_offer_requested_items$canonical_cardsArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.wishlist_offer_requested_items$inventory_itemsArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.wishlist_offersDefaultArgs<ExtArgs>;
    card_printings?: boolean | Prisma.wishlist_offer_requested_items$card_printingsArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist_offer_requested_items"]>;
export type wishlist_offer_requested_itemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wishlist_offer_id?: boolean;
    requested_inventory_item_id?: boolean;
    requested_canonical_card_id?: boolean;
    requested_printing_id?: boolean;
    desired_finish?: boolean;
    desired_condition?: boolean;
    language_code?: boolean;
    quantity?: boolean;
    notes?: boolean;
    created_at?: boolean;
    game_id?: boolean;
    canonical_cards?: boolean | Prisma.wishlist_offer_requested_items$canonical_cardsArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.wishlist_offer_requested_items$inventory_itemsArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.wishlist_offersDefaultArgs<ExtArgs>;
    card_printings?: boolean | Prisma.wishlist_offer_requested_items$card_printingsArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist_offer_requested_items"]>;
export type wishlist_offer_requested_itemsSelectScalar = {
    id?: boolean;
    wishlist_offer_id?: boolean;
    requested_inventory_item_id?: boolean;
    requested_canonical_card_id?: boolean;
    requested_printing_id?: boolean;
    desired_finish?: boolean;
    desired_condition?: boolean;
    language_code?: boolean;
    quantity?: boolean;
    notes?: boolean;
    created_at?: boolean;
    game_id?: boolean;
};
export type wishlist_offer_requested_itemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "wishlist_offer_id" | "requested_inventory_item_id" | "requested_canonical_card_id" | "requested_printing_id" | "desired_finish" | "desired_condition" | "language_code" | "quantity" | "notes" | "created_at" | "game_id", ExtArgs["result"]["wishlist_offer_requested_items"]>;
export type wishlist_offer_requested_itemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    canonical_cards?: boolean | Prisma.wishlist_offer_requested_items$canonical_cardsArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.wishlist_offer_requested_items$inventory_itemsArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.wishlist_offersDefaultArgs<ExtArgs>;
    card_printings?: boolean | Prisma.wishlist_offer_requested_items$card_printingsArgs<ExtArgs>;
};
export type wishlist_offer_requested_itemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    canonical_cards?: boolean | Prisma.wishlist_offer_requested_items$canonical_cardsArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.wishlist_offer_requested_items$inventory_itemsArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.wishlist_offersDefaultArgs<ExtArgs>;
    card_printings?: boolean | Prisma.wishlist_offer_requested_items$card_printingsArgs<ExtArgs>;
};
export type wishlist_offer_requested_itemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    canonical_cards?: boolean | Prisma.wishlist_offer_requested_items$canonical_cardsArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.wishlist_offer_requested_items$inventory_itemsArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.wishlist_offersDefaultArgs<ExtArgs>;
    card_printings?: boolean | Prisma.wishlist_offer_requested_items$card_printingsArgs<ExtArgs>;
};
export type $wishlist_offer_requested_itemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "wishlist_offer_requested_items";
    objects: {
        canonical_cards: Prisma.$canonical_cardsPayload<ExtArgs> | null;
        inventory_items: Prisma.$inventory_itemsPayload<ExtArgs> | null;
        wishlist_offers: Prisma.$wishlist_offersPayload<ExtArgs>;
        card_printings: Prisma.$card_printingsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        wishlist_offer_id: string;
        requested_inventory_item_id: string | null;
        requested_canonical_card_id: string | null;
        requested_printing_id: string | null;
        desired_finish: string | null;
        desired_condition: string | null;
        language_code: string | null;
        quantity: number;
        notes: string | null;
        created_at: Date;
        game_id: string;
    }, ExtArgs["result"]["wishlist_offer_requested_items"]>;
    composites: {};
};
export type wishlist_offer_requested_itemsGetPayload<S extends boolean | null | undefined | wishlist_offer_requested_itemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$wishlist_offer_requested_itemsPayload, S>;
export type wishlist_offer_requested_itemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<wishlist_offer_requested_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Wishlist_offer_requested_itemsCountAggregateInputType | true;
};
export interface wishlist_offer_requested_itemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['wishlist_offer_requested_items'];
        meta: {
            name: 'wishlist_offer_requested_items';
        };
    };
    /**
     * Find zero or one Wishlist_offer_requested_items that matches the filter.
     * @param {wishlist_offer_requested_itemsFindUniqueArgs} args - Arguments to find a Wishlist_offer_requested_items
     * @example
     * // Get one Wishlist_offer_requested_items
     * const wishlist_offer_requested_items = await prisma.wishlist_offer_requested_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends wishlist_offer_requested_itemsFindUniqueArgs>(args: Prisma.SelectSubset<T, wishlist_offer_requested_itemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__wishlist_offer_requested_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Wishlist_offer_requested_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {wishlist_offer_requested_itemsFindUniqueOrThrowArgs} args - Arguments to find a Wishlist_offer_requested_items
     * @example
     * // Get one Wishlist_offer_requested_items
     * const wishlist_offer_requested_items = await prisma.wishlist_offer_requested_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends wishlist_offer_requested_itemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, wishlist_offer_requested_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__wishlist_offer_requested_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Wishlist_offer_requested_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_offer_requested_itemsFindFirstArgs} args - Arguments to find a Wishlist_offer_requested_items
     * @example
     * // Get one Wishlist_offer_requested_items
     * const wishlist_offer_requested_items = await prisma.wishlist_offer_requested_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends wishlist_offer_requested_itemsFindFirstArgs>(args?: Prisma.SelectSubset<T, wishlist_offer_requested_itemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__wishlist_offer_requested_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Wishlist_offer_requested_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_offer_requested_itemsFindFirstOrThrowArgs} args - Arguments to find a Wishlist_offer_requested_items
     * @example
     * // Get one Wishlist_offer_requested_items
     * const wishlist_offer_requested_items = await prisma.wishlist_offer_requested_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends wishlist_offer_requested_itemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, wishlist_offer_requested_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__wishlist_offer_requested_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Wishlist_offer_requested_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_offer_requested_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wishlist_offer_requested_items
     * const wishlist_offer_requested_items = await prisma.wishlist_offer_requested_items.findMany()
     *
     * // Get first 10 Wishlist_offer_requested_items
     * const wishlist_offer_requested_items = await prisma.wishlist_offer_requested_items.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const wishlist_offer_requested_itemsWithIdOnly = await prisma.wishlist_offer_requested_items.findMany({ select: { id: true } })
     *
     */
    findMany<T extends wishlist_offer_requested_itemsFindManyArgs>(args?: Prisma.SelectSubset<T, wishlist_offer_requested_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Wishlist_offer_requested_items.
     * @param {wishlist_offer_requested_itemsCreateArgs} args - Arguments to create a Wishlist_offer_requested_items.
     * @example
     * // Create one Wishlist_offer_requested_items
     * const Wishlist_offer_requested_items = await prisma.wishlist_offer_requested_items.create({
     *   data: {
     *     // ... data to create a Wishlist_offer_requested_items
     *   }
     * })
     *
     */
    create<T extends wishlist_offer_requested_itemsCreateArgs>(args: Prisma.SelectSubset<T, wishlist_offer_requested_itemsCreateArgs<ExtArgs>>): Prisma.Prisma__wishlist_offer_requested_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Wishlist_offer_requested_items.
     * @param {wishlist_offer_requested_itemsCreateManyArgs} args - Arguments to create many Wishlist_offer_requested_items.
     * @example
     * // Create many Wishlist_offer_requested_items
     * const wishlist_offer_requested_items = await prisma.wishlist_offer_requested_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends wishlist_offer_requested_itemsCreateManyArgs>(args?: Prisma.SelectSubset<T, wishlist_offer_requested_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Wishlist_offer_requested_items and returns the data saved in the database.
     * @param {wishlist_offer_requested_itemsCreateManyAndReturnArgs} args - Arguments to create many Wishlist_offer_requested_items.
     * @example
     * // Create many Wishlist_offer_requested_items
     * const wishlist_offer_requested_items = await prisma.wishlist_offer_requested_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Wishlist_offer_requested_items and only return the `id`
     * const wishlist_offer_requested_itemsWithIdOnly = await prisma.wishlist_offer_requested_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends wishlist_offer_requested_itemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, wishlist_offer_requested_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Wishlist_offer_requested_items.
     * @param {wishlist_offer_requested_itemsDeleteArgs} args - Arguments to delete one Wishlist_offer_requested_items.
     * @example
     * // Delete one Wishlist_offer_requested_items
     * const Wishlist_offer_requested_items = await prisma.wishlist_offer_requested_items.delete({
     *   where: {
     *     // ... filter to delete one Wishlist_offer_requested_items
     *   }
     * })
     *
     */
    delete<T extends wishlist_offer_requested_itemsDeleteArgs>(args: Prisma.SelectSubset<T, wishlist_offer_requested_itemsDeleteArgs<ExtArgs>>): Prisma.Prisma__wishlist_offer_requested_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Wishlist_offer_requested_items.
     * @param {wishlist_offer_requested_itemsUpdateArgs} args - Arguments to update one Wishlist_offer_requested_items.
     * @example
     * // Update one Wishlist_offer_requested_items
     * const wishlist_offer_requested_items = await prisma.wishlist_offer_requested_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends wishlist_offer_requested_itemsUpdateArgs>(args: Prisma.SelectSubset<T, wishlist_offer_requested_itemsUpdateArgs<ExtArgs>>): Prisma.Prisma__wishlist_offer_requested_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Wishlist_offer_requested_items.
     * @param {wishlist_offer_requested_itemsDeleteManyArgs} args - Arguments to filter Wishlist_offer_requested_items to delete.
     * @example
     * // Delete a few Wishlist_offer_requested_items
     * const { count } = await prisma.wishlist_offer_requested_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends wishlist_offer_requested_itemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, wishlist_offer_requested_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Wishlist_offer_requested_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_offer_requested_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wishlist_offer_requested_items
     * const wishlist_offer_requested_items = await prisma.wishlist_offer_requested_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends wishlist_offer_requested_itemsUpdateManyArgs>(args: Prisma.SelectSubset<T, wishlist_offer_requested_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Wishlist_offer_requested_items and returns the data updated in the database.
     * @param {wishlist_offer_requested_itemsUpdateManyAndReturnArgs} args - Arguments to update many Wishlist_offer_requested_items.
     * @example
     * // Update many Wishlist_offer_requested_items
     * const wishlist_offer_requested_items = await prisma.wishlist_offer_requested_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Wishlist_offer_requested_items and only return the `id`
     * const wishlist_offer_requested_itemsWithIdOnly = await prisma.wishlist_offer_requested_items.updateManyAndReturn({
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
    updateManyAndReturn<T extends wishlist_offer_requested_itemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, wishlist_offer_requested_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Wishlist_offer_requested_items.
     * @param {wishlist_offer_requested_itemsUpsertArgs} args - Arguments to update or create a Wishlist_offer_requested_items.
     * @example
     * // Update or create a Wishlist_offer_requested_items
     * const wishlist_offer_requested_items = await prisma.wishlist_offer_requested_items.upsert({
     *   create: {
     *     // ... data to create a Wishlist_offer_requested_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wishlist_offer_requested_items we want to update
     *   }
     * })
     */
    upsert<T extends wishlist_offer_requested_itemsUpsertArgs>(args: Prisma.SelectSubset<T, wishlist_offer_requested_itemsUpsertArgs<ExtArgs>>): Prisma.Prisma__wishlist_offer_requested_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Wishlist_offer_requested_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_offer_requested_itemsCountArgs} args - Arguments to filter Wishlist_offer_requested_items to count.
     * @example
     * // Count the number of Wishlist_offer_requested_items
     * const count = await prisma.wishlist_offer_requested_items.count({
     *   where: {
     *     // ... the filter for the Wishlist_offer_requested_items we want to count
     *   }
     * })
    **/
    count<T extends wishlist_offer_requested_itemsCountArgs>(args?: Prisma.Subset<T, wishlist_offer_requested_itemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Wishlist_offer_requested_itemsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Wishlist_offer_requested_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wishlist_offer_requested_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Wishlist_offer_requested_itemsAggregateArgs>(args: Prisma.Subset<T, Wishlist_offer_requested_itemsAggregateArgs>): Prisma.PrismaPromise<GetWishlist_offer_requested_itemsAggregateType<T>>;
    /**
     * Group by Wishlist_offer_requested_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_offer_requested_itemsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends wishlist_offer_requested_itemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: wishlist_offer_requested_itemsGroupByArgs['orderBy'];
    } : {
        orderBy?: wishlist_offer_requested_itemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, wishlist_offer_requested_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlist_offer_requested_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the wishlist_offer_requested_items model
     */
    readonly fields: wishlist_offer_requested_itemsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for wishlist_offer_requested_items.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__wishlist_offer_requested_itemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    canonical_cards<T extends Prisma.wishlist_offer_requested_items$canonical_cardsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_offer_requested_items$canonical_cardsArgs<ExtArgs>>): Prisma.Prisma__canonical_cardsClient<runtime.Types.Result.GetResult<Prisma.$canonical_cardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    inventory_items<T extends Prisma.wishlist_offer_requested_items$inventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_offer_requested_items$inventory_itemsArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    wishlist_offers<T extends Prisma.wishlist_offersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_offersDefaultArgs<ExtArgs>>): Prisma.Prisma__wishlist_offersClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    card_printings<T extends Prisma.wishlist_offer_requested_items$card_printingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_offer_requested_items$card_printingsArgs<ExtArgs>>): Prisma.Prisma__card_printingsClient<runtime.Types.Result.GetResult<Prisma.$card_printingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the wishlist_offer_requested_items model
 */
export interface wishlist_offer_requested_itemsFieldRefs {
    readonly id: Prisma.FieldRef<"wishlist_offer_requested_items", 'String'>;
    readonly wishlist_offer_id: Prisma.FieldRef<"wishlist_offer_requested_items", 'String'>;
    readonly requested_inventory_item_id: Prisma.FieldRef<"wishlist_offer_requested_items", 'String'>;
    readonly requested_canonical_card_id: Prisma.FieldRef<"wishlist_offer_requested_items", 'String'>;
    readonly requested_printing_id: Prisma.FieldRef<"wishlist_offer_requested_items", 'String'>;
    readonly desired_finish: Prisma.FieldRef<"wishlist_offer_requested_items", 'String'>;
    readonly desired_condition: Prisma.FieldRef<"wishlist_offer_requested_items", 'String'>;
    readonly language_code: Prisma.FieldRef<"wishlist_offer_requested_items", 'String'>;
    readonly quantity: Prisma.FieldRef<"wishlist_offer_requested_items", 'Int'>;
    readonly notes: Prisma.FieldRef<"wishlist_offer_requested_items", 'String'>;
    readonly created_at: Prisma.FieldRef<"wishlist_offer_requested_items", 'DateTime'>;
    readonly game_id: Prisma.FieldRef<"wishlist_offer_requested_items", 'String'>;
}
/**
 * wishlist_offer_requested_items findUnique
 */
export type wishlist_offer_requested_itemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_requested_items
     */
    select?: Prisma.wishlist_offer_requested_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_requested_items
     */
    omit?: Prisma.wishlist_offer_requested_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_requested_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which wishlist_offer_requested_items to fetch.
     */
    where: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
};
/**
 * wishlist_offer_requested_items findUniqueOrThrow
 */
export type wishlist_offer_requested_itemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_requested_items
     */
    select?: Prisma.wishlist_offer_requested_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_requested_items
     */
    omit?: Prisma.wishlist_offer_requested_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_requested_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which wishlist_offer_requested_items to fetch.
     */
    where: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
};
/**
 * wishlist_offer_requested_items findFirst
 */
export type wishlist_offer_requested_itemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_requested_items
     */
    select?: Prisma.wishlist_offer_requested_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_requested_items
     */
    omit?: Prisma.wishlist_offer_requested_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_requested_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which wishlist_offer_requested_items to fetch.
     */
    where?: Prisma.wishlist_offer_requested_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlist_offer_requested_items to fetch.
     */
    orderBy?: Prisma.wishlist_offer_requested_itemsOrderByWithRelationInput | Prisma.wishlist_offer_requested_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for wishlist_offer_requested_items.
     */
    cursor?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlist_offer_requested_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlist_offer_requested_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wishlist_offer_requested_items.
     */
    distinct?: Prisma.Wishlist_offer_requested_itemsScalarFieldEnum | Prisma.Wishlist_offer_requested_itemsScalarFieldEnum[];
};
/**
 * wishlist_offer_requested_items findFirstOrThrow
 */
export type wishlist_offer_requested_itemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_requested_items
     */
    select?: Prisma.wishlist_offer_requested_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_requested_items
     */
    omit?: Prisma.wishlist_offer_requested_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_requested_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which wishlist_offer_requested_items to fetch.
     */
    where?: Prisma.wishlist_offer_requested_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlist_offer_requested_items to fetch.
     */
    orderBy?: Prisma.wishlist_offer_requested_itemsOrderByWithRelationInput | Prisma.wishlist_offer_requested_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for wishlist_offer_requested_items.
     */
    cursor?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlist_offer_requested_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlist_offer_requested_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wishlist_offer_requested_items.
     */
    distinct?: Prisma.Wishlist_offer_requested_itemsScalarFieldEnum | Prisma.Wishlist_offer_requested_itemsScalarFieldEnum[];
};
/**
 * wishlist_offer_requested_items findMany
 */
export type wishlist_offer_requested_itemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_requested_items
     */
    select?: Prisma.wishlist_offer_requested_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_requested_items
     */
    omit?: Prisma.wishlist_offer_requested_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_requested_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which wishlist_offer_requested_items to fetch.
     */
    where?: Prisma.wishlist_offer_requested_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlist_offer_requested_items to fetch.
     */
    orderBy?: Prisma.wishlist_offer_requested_itemsOrderByWithRelationInput | Prisma.wishlist_offer_requested_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing wishlist_offer_requested_items.
     */
    cursor?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlist_offer_requested_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlist_offer_requested_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wishlist_offer_requested_items.
     */
    distinct?: Prisma.Wishlist_offer_requested_itemsScalarFieldEnum | Prisma.Wishlist_offer_requested_itemsScalarFieldEnum[];
};
/**
 * wishlist_offer_requested_items create
 */
export type wishlist_offer_requested_itemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_requested_items
     */
    select?: Prisma.wishlist_offer_requested_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_requested_items
     */
    omit?: Prisma.wishlist_offer_requested_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_requested_itemsInclude<ExtArgs> | null;
    /**
     * The data needed to create a wishlist_offer_requested_items.
     */
    data: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateInput>;
};
/**
 * wishlist_offer_requested_items createMany
 */
export type wishlist_offer_requested_itemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many wishlist_offer_requested_items.
     */
    data: Prisma.wishlist_offer_requested_itemsCreateManyInput | Prisma.wishlist_offer_requested_itemsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * wishlist_offer_requested_items createManyAndReturn
 */
export type wishlist_offer_requested_itemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_requested_items
     */
    select?: Prisma.wishlist_offer_requested_itemsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_requested_items
     */
    omit?: Prisma.wishlist_offer_requested_itemsOmit<ExtArgs> | null;
    /**
     * The data used to create many wishlist_offer_requested_items.
     */
    data: Prisma.wishlist_offer_requested_itemsCreateManyInput | Prisma.wishlist_offer_requested_itemsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_requested_itemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * wishlist_offer_requested_items update
 */
export type wishlist_offer_requested_itemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_requested_items
     */
    select?: Prisma.wishlist_offer_requested_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_requested_items
     */
    omit?: Prisma.wishlist_offer_requested_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_requested_itemsInclude<ExtArgs> | null;
    /**
     * The data needed to update a wishlist_offer_requested_items.
     */
    data: Prisma.XOR<Prisma.wishlist_offer_requested_itemsUpdateInput, Prisma.wishlist_offer_requested_itemsUncheckedUpdateInput>;
    /**
     * Choose, which wishlist_offer_requested_items to update.
     */
    where: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
};
/**
 * wishlist_offer_requested_items updateMany
 */
export type wishlist_offer_requested_itemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update wishlist_offer_requested_items.
     */
    data: Prisma.XOR<Prisma.wishlist_offer_requested_itemsUpdateManyMutationInput, Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyInput>;
    /**
     * Filter which wishlist_offer_requested_items to update
     */
    where?: Prisma.wishlist_offer_requested_itemsWhereInput;
    /**
     * Limit how many wishlist_offer_requested_items to update.
     */
    limit?: number;
};
/**
 * wishlist_offer_requested_items updateManyAndReturn
 */
export type wishlist_offer_requested_itemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_requested_items
     */
    select?: Prisma.wishlist_offer_requested_itemsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_requested_items
     */
    omit?: Prisma.wishlist_offer_requested_itemsOmit<ExtArgs> | null;
    /**
     * The data used to update wishlist_offer_requested_items.
     */
    data: Prisma.XOR<Prisma.wishlist_offer_requested_itemsUpdateManyMutationInput, Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyInput>;
    /**
     * Filter which wishlist_offer_requested_items to update
     */
    where?: Prisma.wishlist_offer_requested_itemsWhereInput;
    /**
     * Limit how many wishlist_offer_requested_items to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_requested_itemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * wishlist_offer_requested_items upsert
 */
export type wishlist_offer_requested_itemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_requested_items
     */
    select?: Prisma.wishlist_offer_requested_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_requested_items
     */
    omit?: Prisma.wishlist_offer_requested_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_requested_itemsInclude<ExtArgs> | null;
    /**
     * The filter to search for the wishlist_offer_requested_items to update in case it exists.
     */
    where: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
    /**
     * In case the wishlist_offer_requested_items found by the `where` argument doesn't exist, create a new wishlist_offer_requested_items with this data.
     */
    create: Prisma.XOR<Prisma.wishlist_offer_requested_itemsCreateInput, Prisma.wishlist_offer_requested_itemsUncheckedCreateInput>;
    /**
     * In case the wishlist_offer_requested_items was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.wishlist_offer_requested_itemsUpdateInput, Prisma.wishlist_offer_requested_itemsUncheckedUpdateInput>;
};
/**
 * wishlist_offer_requested_items delete
 */
export type wishlist_offer_requested_itemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_requested_items
     */
    select?: Prisma.wishlist_offer_requested_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_requested_items
     */
    omit?: Prisma.wishlist_offer_requested_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_requested_itemsInclude<ExtArgs> | null;
    /**
     * Filter which wishlist_offer_requested_items to delete.
     */
    where: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
};
/**
 * wishlist_offer_requested_items deleteMany
 */
export type wishlist_offer_requested_itemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which wishlist_offer_requested_items to delete
     */
    where?: Prisma.wishlist_offer_requested_itemsWhereInput;
    /**
     * Limit how many wishlist_offer_requested_items to delete.
     */
    limit?: number;
};
/**
 * wishlist_offer_requested_items.canonical_cards
 */
export type wishlist_offer_requested_items$canonical_cardsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * wishlist_offer_requested_items.inventory_items
 */
export type wishlist_offer_requested_items$inventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * wishlist_offer_requested_items.card_printings
 */
export type wishlist_offer_requested_items$card_printingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * wishlist_offer_requested_items without action
 */
export type wishlist_offer_requested_itemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_requested_items
     */
    select?: Prisma.wishlist_offer_requested_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_requested_items
     */
    omit?: Prisma.wishlist_offer_requested_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_requested_itemsInclude<ExtArgs> | null;
};
