import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model wishlist_offer_items
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type wishlist_offer_itemsModel = runtime.Types.Result.DefaultSelection<Prisma.$wishlist_offer_itemsPayload>;
export type AggregateWishlist_offer_items = {
    _count: Wishlist_offer_itemsCountAggregateOutputType | null;
    _avg: Wishlist_offer_itemsAvgAggregateOutputType | null;
    _sum: Wishlist_offer_itemsSumAggregateOutputType | null;
    _min: Wishlist_offer_itemsMinAggregateOutputType | null;
    _max: Wishlist_offer_itemsMaxAggregateOutputType | null;
};
export type Wishlist_offer_itemsAvgAggregateOutputType = {
    quantity: number | null;
};
export type Wishlist_offer_itemsSumAggregateOutputType = {
    quantity: number | null;
};
export type Wishlist_offer_itemsMinAggregateOutputType = {
    id: string | null;
    wishlist_offer_id: string | null;
    offerer_user_id: string | null;
    offerer_store_id: string | null;
    inventory_item_id: string | null;
    quantity: number | null;
    notes: string | null;
    created_at: Date | null;
    game_id: string | null;
};
export type Wishlist_offer_itemsMaxAggregateOutputType = {
    id: string | null;
    wishlist_offer_id: string | null;
    offerer_user_id: string | null;
    offerer_store_id: string | null;
    inventory_item_id: string | null;
    quantity: number | null;
    notes: string | null;
    created_at: Date | null;
    game_id: string | null;
};
export type Wishlist_offer_itemsCountAggregateOutputType = {
    id: number;
    wishlist_offer_id: number;
    offerer_user_id: number;
    offerer_store_id: number;
    inventory_item_id: number;
    quantity: number;
    notes: number;
    created_at: number;
    game_id: number;
    _all: number;
};
export type Wishlist_offer_itemsAvgAggregateInputType = {
    quantity?: true;
};
export type Wishlist_offer_itemsSumAggregateInputType = {
    quantity?: true;
};
export type Wishlist_offer_itemsMinAggregateInputType = {
    id?: true;
    wishlist_offer_id?: true;
    offerer_user_id?: true;
    offerer_store_id?: true;
    inventory_item_id?: true;
    quantity?: true;
    notes?: true;
    created_at?: true;
    game_id?: true;
};
export type Wishlist_offer_itemsMaxAggregateInputType = {
    id?: true;
    wishlist_offer_id?: true;
    offerer_user_id?: true;
    offerer_store_id?: true;
    inventory_item_id?: true;
    quantity?: true;
    notes?: true;
    created_at?: true;
    game_id?: true;
};
export type Wishlist_offer_itemsCountAggregateInputType = {
    id?: true;
    wishlist_offer_id?: true;
    offerer_user_id?: true;
    offerer_store_id?: true;
    inventory_item_id?: true;
    quantity?: true;
    notes?: true;
    created_at?: true;
    game_id?: true;
    _all?: true;
};
export type Wishlist_offer_itemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which wishlist_offer_items to aggregate.
     */
    where?: Prisma.wishlist_offer_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlist_offer_items to fetch.
     */
    orderBy?: Prisma.wishlist_offer_itemsOrderByWithRelationInput | Prisma.wishlist_offer_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.wishlist_offer_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlist_offer_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlist_offer_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned wishlist_offer_items
    **/
    _count?: true | Wishlist_offer_itemsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Wishlist_offer_itemsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Wishlist_offer_itemsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Wishlist_offer_itemsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Wishlist_offer_itemsMaxAggregateInputType;
};
export type GetWishlist_offer_itemsAggregateType<T extends Wishlist_offer_itemsAggregateArgs> = {
    [P in keyof T & keyof AggregateWishlist_offer_items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWishlist_offer_items[P]> : Prisma.GetScalarType<T[P], AggregateWishlist_offer_items[P]>;
};
export type wishlist_offer_itemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_offer_itemsWhereInput;
    orderBy?: Prisma.wishlist_offer_itemsOrderByWithAggregationInput | Prisma.wishlist_offer_itemsOrderByWithAggregationInput[];
    by: Prisma.Wishlist_offer_itemsScalarFieldEnum[] | Prisma.Wishlist_offer_itemsScalarFieldEnum;
    having?: Prisma.wishlist_offer_itemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Wishlist_offer_itemsCountAggregateInputType | true;
    _avg?: Wishlist_offer_itemsAvgAggregateInputType;
    _sum?: Wishlist_offer_itemsSumAggregateInputType;
    _min?: Wishlist_offer_itemsMinAggregateInputType;
    _max?: Wishlist_offer_itemsMaxAggregateInputType;
};
export type Wishlist_offer_itemsGroupByOutputType = {
    id: string;
    wishlist_offer_id: string;
    offerer_user_id: string | null;
    offerer_store_id: string | null;
    inventory_item_id: string;
    quantity: number;
    notes: string | null;
    created_at: Date;
    game_id: string;
    _count: Wishlist_offer_itemsCountAggregateOutputType | null;
    _avg: Wishlist_offer_itemsAvgAggregateOutputType | null;
    _sum: Wishlist_offer_itemsSumAggregateOutputType | null;
    _min: Wishlist_offer_itemsMinAggregateOutputType | null;
    _max: Wishlist_offer_itemsMaxAggregateOutputType | null;
};
export type GetWishlist_offer_itemsGroupByPayload<T extends wishlist_offer_itemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Wishlist_offer_itemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Wishlist_offer_itemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Wishlist_offer_itemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Wishlist_offer_itemsGroupByOutputType[P]>;
}>>;
export type wishlist_offer_itemsWhereInput = {
    AND?: Prisma.wishlist_offer_itemsWhereInput | Prisma.wishlist_offer_itemsWhereInput[];
    OR?: Prisma.wishlist_offer_itemsWhereInput[];
    NOT?: Prisma.wishlist_offer_itemsWhereInput | Prisma.wishlist_offer_itemsWhereInput[];
    id?: Prisma.UuidFilter<"wishlist_offer_items"> | string;
    wishlist_offer_id?: Prisma.UuidFilter<"wishlist_offer_items"> | string;
    offerer_user_id?: Prisma.UuidNullableFilter<"wishlist_offer_items"> | string | null;
    offerer_store_id?: Prisma.UuidNullableFilter<"wishlist_offer_items"> | string | null;
    inventory_item_id?: Prisma.UuidFilter<"wishlist_offer_items"> | string;
    quantity?: Prisma.IntFilter<"wishlist_offer_items"> | number;
    notes?: Prisma.StringNullableFilter<"wishlist_offer_items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"wishlist_offer_items"> | Date | string;
    game_id?: Prisma.UuidFilter<"wishlist_offer_items"> | string;
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsScalarRelationFilter, Prisma.inventory_itemsWhereInput>;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsNullableScalarRelationFilter, Prisma.inventory_itemsWhereInput> | null;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsNullableScalarRelationFilter, Prisma.inventory_itemsWhereInput> | null;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.XOR<Prisma.Wishlist_offersScalarRelationFilter, Prisma.wishlist_offersWhereInput>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.XOR<Prisma.Wishlist_offersNullableScalarRelationFilter, Prisma.wishlist_offersWhereInput> | null;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.XOR<Prisma.Wishlist_offersNullableScalarRelationFilter, Prisma.wishlist_offersWhereInput> | null;
};
export type wishlist_offer_itemsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    wishlist_offer_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsOrderByWithRelationInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsOrderByWithRelationInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsOrderByWithRelationInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offersOrderByWithRelationInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offersOrderByWithRelationInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offersOrderByWithRelationInput;
};
export type wishlist_offer_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    wishlist_offer_id_inventory_item_id?: Prisma.wishlist_offer_itemsWishlist_offer_idInventory_item_idCompoundUniqueInput;
    AND?: Prisma.wishlist_offer_itemsWhereInput | Prisma.wishlist_offer_itemsWhereInput[];
    OR?: Prisma.wishlist_offer_itemsWhereInput[];
    NOT?: Prisma.wishlist_offer_itemsWhereInput | Prisma.wishlist_offer_itemsWhereInput[];
    wishlist_offer_id?: Prisma.UuidFilter<"wishlist_offer_items"> | string;
    offerer_user_id?: Prisma.UuidNullableFilter<"wishlist_offer_items"> | string | null;
    offerer_store_id?: Prisma.UuidNullableFilter<"wishlist_offer_items"> | string | null;
    inventory_item_id?: Prisma.UuidFilter<"wishlist_offer_items"> | string;
    quantity?: Prisma.IntFilter<"wishlist_offer_items"> | number;
    notes?: Prisma.StringNullableFilter<"wishlist_offer_items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"wishlist_offer_items"> | Date | string;
    game_id?: Prisma.UuidFilter<"wishlist_offer_items"> | string;
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsScalarRelationFilter, Prisma.inventory_itemsWhereInput>;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsNullableScalarRelationFilter, Prisma.inventory_itemsWhereInput> | null;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsNullableScalarRelationFilter, Prisma.inventory_itemsWhereInput> | null;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.XOR<Prisma.Wishlist_offersScalarRelationFilter, Prisma.wishlist_offersWhereInput>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.XOR<Prisma.Wishlist_offersNullableScalarRelationFilter, Prisma.wishlist_offersWhereInput> | null;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.XOR<Prisma.Wishlist_offersNullableScalarRelationFilter, Prisma.wishlist_offersWhereInput> | null;
}, "id" | "wishlist_offer_id_inventory_item_id">;
export type wishlist_offer_itemsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    wishlist_offer_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    _count?: Prisma.wishlist_offer_itemsCountOrderByAggregateInput;
    _avg?: Prisma.wishlist_offer_itemsAvgOrderByAggregateInput;
    _max?: Prisma.wishlist_offer_itemsMaxOrderByAggregateInput;
    _min?: Prisma.wishlist_offer_itemsMinOrderByAggregateInput;
    _sum?: Prisma.wishlist_offer_itemsSumOrderByAggregateInput;
};
export type wishlist_offer_itemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.wishlist_offer_itemsScalarWhereWithAggregatesInput | Prisma.wishlist_offer_itemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.wishlist_offer_itemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.wishlist_offer_itemsScalarWhereWithAggregatesInput | Prisma.wishlist_offer_itemsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"wishlist_offer_items"> | string;
    wishlist_offer_id?: Prisma.UuidWithAggregatesFilter<"wishlist_offer_items"> | string;
    offerer_user_id?: Prisma.UuidNullableWithAggregatesFilter<"wishlist_offer_items"> | string | null;
    offerer_store_id?: Prisma.UuidNullableWithAggregatesFilter<"wishlist_offer_items"> | string | null;
    inventory_item_id?: Prisma.UuidWithAggregatesFilter<"wishlist_offer_items"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"wishlist_offer_items"> | number;
    notes?: Prisma.StringNullableWithAggregatesFilter<"wishlist_offer_items"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"wishlist_offer_items"> | Date | string;
    game_id?: Prisma.UuidWithAggregatesFilter<"wishlist_offer_items"> | string;
};
export type wishlist_offer_itemsCreateInput = {
    id?: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
};
export type wishlist_offer_itemsUncheckedCreateInput = {
    id?: string;
    wishlist_offer_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    inventory_item_id: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type wishlist_offer_itemsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offersUpdateOneRequiredWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
};
export type wishlist_offer_itemsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type wishlist_offer_itemsCreateManyInput = {
    id?: string;
    wishlist_offer_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    inventory_item_id: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type wishlist_offer_itemsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type wishlist_offer_itemsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Wishlist_offer_itemsListRelationFilter = {
    every?: Prisma.wishlist_offer_itemsWhereInput;
    some?: Prisma.wishlist_offer_itemsWhereInput;
    none?: Prisma.wishlist_offer_itemsWhereInput;
};
export type wishlist_offer_itemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type wishlist_offer_itemsWishlist_offer_idInventory_item_idCompoundUniqueInput = {
    wishlist_offer_id: string;
    inventory_item_id: string;
};
export type wishlist_offer_itemsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wishlist_offer_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type wishlist_offer_itemsAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type wishlist_offer_itemsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wishlist_offer_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type wishlist_offer_itemsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wishlist_offer_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type wishlist_offer_itemsSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput> | Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInputEnvelope;
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
};
export type wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput> | Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInputEnvelope;
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
};
export type wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput> | Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInputEnvelope;
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
};
export type wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput> | Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInputEnvelope;
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
};
export type wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput> | Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInputEnvelope;
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
};
export type wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput> | Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInputEnvelope;
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
};
export type wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput> | Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    upsert?: Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInputEnvelope;
    set?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    updateMany?: Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    deleteMany?: Prisma.wishlist_offer_itemsScalarWhereInput | Prisma.wishlist_offer_itemsScalarWhereInput[];
};
export type wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput> | Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    upsert?: Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInputEnvelope;
    set?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    updateMany?: Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    deleteMany?: Prisma.wishlist_offer_itemsScalarWhereInput | Prisma.wishlist_offer_itemsScalarWhereInput[];
};
export type wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput> | Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    upsert?: Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInputEnvelope;
    set?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    updateMany?: Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    deleteMany?: Prisma.wishlist_offer_itemsScalarWhereInput | Prisma.wishlist_offer_itemsScalarWhereInput[];
};
export type wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput> | Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    upsert?: Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInputEnvelope;
    set?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    updateMany?: Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    deleteMany?: Prisma.wishlist_offer_itemsScalarWhereInput | Prisma.wishlist_offer_itemsScalarWhereInput[];
};
export type wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput> | Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    upsert?: Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInputEnvelope;
    set?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    updateMany?: Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    deleteMany?: Prisma.wishlist_offer_itemsScalarWhereInput | Prisma.wishlist_offer_itemsScalarWhereInput[];
};
export type wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput> | Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    upsert?: Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInputEnvelope;
    set?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    updateMany?: Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    deleteMany?: Prisma.wishlist_offer_itemsScalarWhereInput | Prisma.wishlist_offer_itemsScalarWhereInput[];
};
export type wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput> | Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInputEnvelope;
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
};
export type wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput> | Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInputEnvelope;
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
};
export type wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput> | Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInputEnvelope;
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
};
export type wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput> | Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInputEnvelope;
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
};
export type wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput> | Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInputEnvelope;
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
};
export type wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput> | Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInputEnvelope;
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
};
export type wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput> | Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput[];
    upsert?: Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput | Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInputEnvelope;
    set?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput | Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput[];
    updateMany?: Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput | Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput[];
    deleteMany?: Prisma.wishlist_offer_itemsScalarWhereInput | Prisma.wishlist_offer_itemsScalarWhereInput[];
};
export type wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput> | Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput[];
    upsert?: Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput | Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInputEnvelope;
    set?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput | Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput[];
    updateMany?: Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput | Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput[];
    deleteMany?: Prisma.wishlist_offer_itemsScalarWhereInput | Prisma.wishlist_offer_itemsScalarWhereInput[];
};
export type wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput> | Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput[];
    upsert?: Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput | Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInputEnvelope;
    set?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput | Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput[];
    updateMany?: Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput | Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput[];
    deleteMany?: Prisma.wishlist_offer_itemsScalarWhereInput | Prisma.wishlist_offer_itemsScalarWhereInput[];
};
export type wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput> | Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput[];
    upsert?: Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput | Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInputEnvelope;
    set?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput | Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput[];
    updateMany?: Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput | Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput[];
    deleteMany?: Prisma.wishlist_offer_itemsScalarWhereInput | Prisma.wishlist_offer_itemsScalarWhereInput[];
};
export type wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput> | Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput[];
    upsert?: Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput | Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInputEnvelope;
    set?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput | Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput[];
    updateMany?: Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput | Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput[];
    deleteMany?: Prisma.wishlist_offer_itemsScalarWhereInput | Prisma.wishlist_offer_itemsScalarWhereInput[];
};
export type wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput> | Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput[] | Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput[];
    connectOrCreate?: Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput | Prisma.wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput[];
    upsert?: Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput | Prisma.wishlist_offer_itemsUpsertWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput[];
    createMany?: Prisma.wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInputEnvelope;
    set?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    delete?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    connect?: Prisma.wishlist_offer_itemsWhereUniqueInput | Prisma.wishlist_offer_itemsWhereUniqueInput[];
    update?: Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput | Prisma.wishlist_offer_itemsUpdateWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput[];
    updateMany?: Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput | Prisma.wishlist_offer_itemsUpdateManyWithWhereWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput[];
    deleteMany?: Prisma.wishlist_offer_itemsScalarWhereInput | Prisma.wishlist_offer_itemsScalarWhereInput[];
};
export type wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
};
export type wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: string;
    wishlist_offer_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
};
export type wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
};
export type wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInputEnvelope = {
    data: Prisma.wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    skipDuplicates?: boolean;
};
export type wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
};
export type wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: string;
    wishlist_offer_id: string;
    offerer_user_id?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
};
export type wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInputEnvelope = {
    data: Prisma.wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    skipDuplicates?: boolean;
};
export type wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
};
export type wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: string;
    wishlist_offer_id: string;
    offerer_store_id?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type wishlist_offer_itemsCreateOrConnectWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
};
export type wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInputEnvelope = {
    data: Prisma.wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    skipDuplicates?: boolean;
};
export type wishlist_offer_itemsUpsertWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedUpdateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
};
export type wishlist_offer_itemsUpdateWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedUpdateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
};
export type wishlist_offer_itemsUpdateManyWithWhereWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    where: Prisma.wishlist_offer_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateManyMutationInput, Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
};
export type wishlist_offer_itemsScalarWhereInput = {
    AND?: Prisma.wishlist_offer_itemsScalarWhereInput | Prisma.wishlist_offer_itemsScalarWhereInput[];
    OR?: Prisma.wishlist_offer_itemsScalarWhereInput[];
    NOT?: Prisma.wishlist_offer_itemsScalarWhereInput | Prisma.wishlist_offer_itemsScalarWhereInput[];
    id?: Prisma.UuidFilter<"wishlist_offer_items"> | string;
    wishlist_offer_id?: Prisma.UuidFilter<"wishlist_offer_items"> | string;
    offerer_user_id?: Prisma.UuidNullableFilter<"wishlist_offer_items"> | string | null;
    offerer_store_id?: Prisma.UuidNullableFilter<"wishlist_offer_items"> | string | null;
    inventory_item_id?: Prisma.UuidFilter<"wishlist_offer_items"> | string;
    quantity?: Prisma.IntFilter<"wishlist_offer_items"> | number;
    notes?: Prisma.StringNullableFilter<"wishlist_offer_items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"wishlist_offer_items"> | Date | string;
    game_id?: Prisma.UuidFilter<"wishlist_offer_items"> | string;
};
export type wishlist_offer_itemsUpsertWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedUpdateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
};
export type wishlist_offer_itemsUpdateWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedUpdateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
};
export type wishlist_offer_itemsUpdateManyWithWhereWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    where: Prisma.wishlist_offer_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateManyMutationInput, Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
};
export type wishlist_offer_itemsUpsertWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedUpdateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
};
export type wishlist_offer_itemsUpdateWithWhereUniqueWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.wishlist_offer_itemsUncheckedUpdateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
};
export type wishlist_offer_itemsUpdateManyWithWhereWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    where: Prisma.wishlist_offer_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateManyMutationInput, Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
};
export type wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    id?: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
};
export type wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    id?: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    inventory_item_id: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
};
export type wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput>;
};
export type wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInputEnvelope = {
    data: Prisma.wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput | Prisma.wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput[];
    skipDuplicates?: boolean;
};
export type wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    id?: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
};
export type wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    id?: string;
    offerer_user_id?: string | null;
    inventory_item_id: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput>;
};
export type wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInputEnvelope = {
    data: Prisma.wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput | Prisma.wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput[];
    skipDuplicates?: boolean;
};
export type wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    id?: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
};
export type wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    id?: string;
    offerer_store_id?: string | null;
    inventory_item_id: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type wishlist_offer_itemsCreateOrConnectWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput>;
};
export type wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInputEnvelope = {
    data: Prisma.wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput | Prisma.wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput[];
    skipDuplicates?: boolean;
};
export type wishlist_offer_itemsUpsertWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedUpdateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput>;
    create: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput>;
};
export type wishlist_offer_itemsUpdateWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedUpdateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput>;
};
export type wishlist_offer_itemsUpdateManyWithWhereWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    where: Prisma.wishlist_offer_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateManyMutationInput, Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput>;
};
export type wishlist_offer_itemsUpsertWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedUpdateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput>;
    create: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput>;
};
export type wishlist_offer_itemsUpdateWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedUpdateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput>;
};
export type wishlist_offer_itemsUpdateManyWithWhereWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    where: Prisma.wishlist_offer_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateManyMutationInput, Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput>;
};
export type wishlist_offer_itemsUpsertWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedUpdateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput>;
    create: Prisma.XOR<Prisma.wishlist_offer_itemsCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedCreateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput>;
};
export type wishlist_offer_itemsUpdateWithWhereUniqueWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput, Prisma.wishlist_offer_itemsUncheckedUpdateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput>;
};
export type wishlist_offer_itemsUpdateManyWithWhereWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    where: Prisma.wishlist_offer_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateManyMutationInput, Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput>;
};
export type wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: string;
    wishlist_offer_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
};
export type wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: string;
    wishlist_offer_id: string;
    offerer_user_id?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type wishlist_offer_itemsCreateManyInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: string;
    wishlist_offer_id: string;
    offerer_store_id?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type wishlist_offer_itemsUpdateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offersUpdateOneRequiredWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
};
export type wishlist_offer_itemsUncheckedUpdateWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type wishlist_offer_itemsUpdateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offersUpdateOneRequiredWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
};
export type wishlist_offer_itemsUncheckedUpdateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type wishlist_offer_itemsUpdateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offersUpdateOneRequiredWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
};
export type wishlist_offer_itemsUncheckedUpdateWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    id?: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    inventory_item_id: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
};
export type wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    id?: string;
    offerer_user_id?: string | null;
    inventory_item_id: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type wishlist_offer_itemsCreateManyWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    id?: string;
    offerer_store_id?: string | null;
    inventory_item_id: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type wishlist_offer_itemsUpdateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
};
export type wishlist_offer_itemsUncheckedUpdateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type wishlist_offer_itemsUpdateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offersUpdateOneRequiredWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
};
export type wishlist_offer_itemsUncheckedUpdateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type wishlist_offer_itemsUpdateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offersUpdateOneRequiredWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
};
export type wishlist_offer_itemsUncheckedUpdateWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type wishlist_offer_itemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wishlist_offer_id?: boolean;
    offerer_user_id?: boolean;
    offerer_store_id?: boolean;
    inventory_item_id?: boolean;
    quantity?: boolean;
    notes?: boolean;
    created_at?: boolean;
    game_id?: boolean;
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: boolean | Prisma.wishlist_offer_items$inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: boolean | Prisma.wishlist_offer_items$inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: boolean | Prisma.wishlist_offersDefaultArgs<ExtArgs>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: boolean | Prisma.wishlist_offer_items$wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersArgs<ExtArgs>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: boolean | Prisma.wishlist_offer_items$wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist_offer_items"]>;
export type wishlist_offer_itemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wishlist_offer_id?: boolean;
    offerer_user_id?: boolean;
    offerer_store_id?: boolean;
    inventory_item_id?: boolean;
    quantity?: boolean;
    notes?: boolean;
    created_at?: boolean;
    game_id?: boolean;
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: boolean | Prisma.wishlist_offer_items$inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: boolean | Prisma.wishlist_offer_items$inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: boolean | Prisma.wishlist_offersDefaultArgs<ExtArgs>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: boolean | Prisma.wishlist_offer_items$wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersArgs<ExtArgs>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: boolean | Prisma.wishlist_offer_items$wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist_offer_items"]>;
export type wishlist_offer_itemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wishlist_offer_id?: boolean;
    offerer_user_id?: boolean;
    offerer_store_id?: boolean;
    inventory_item_id?: boolean;
    quantity?: boolean;
    notes?: boolean;
    created_at?: boolean;
    game_id?: boolean;
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: boolean | Prisma.wishlist_offer_items$inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: boolean | Prisma.wishlist_offer_items$inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: boolean | Prisma.wishlist_offersDefaultArgs<ExtArgs>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: boolean | Prisma.wishlist_offer_items$wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersArgs<ExtArgs>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: boolean | Prisma.wishlist_offer_items$wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist_offer_items"]>;
export type wishlist_offer_itemsSelectScalar = {
    id?: boolean;
    wishlist_offer_id?: boolean;
    offerer_user_id?: boolean;
    offerer_store_id?: boolean;
    inventory_item_id?: boolean;
    quantity?: boolean;
    notes?: boolean;
    created_at?: boolean;
    game_id?: boolean;
};
export type wishlist_offer_itemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "wishlist_offer_id" | "offerer_user_id" | "offerer_store_id" | "inventory_item_id" | "quantity" | "notes" | "created_at" | "game_id", ExtArgs["result"]["wishlist_offer_items"]>;
export type wishlist_offer_itemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: boolean | Prisma.wishlist_offer_items$inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: boolean | Prisma.wishlist_offer_items$inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: boolean | Prisma.wishlist_offersDefaultArgs<ExtArgs>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: boolean | Prisma.wishlist_offer_items$wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersArgs<ExtArgs>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: boolean | Prisma.wishlist_offer_items$wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersArgs<ExtArgs>;
};
export type wishlist_offer_itemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: boolean | Prisma.wishlist_offer_items$inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: boolean | Prisma.wishlist_offer_items$inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: boolean | Prisma.wishlist_offersDefaultArgs<ExtArgs>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: boolean | Prisma.wishlist_offer_items$wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersArgs<ExtArgs>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: boolean | Prisma.wishlist_offer_items$wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersArgs<ExtArgs>;
};
export type wishlist_offer_itemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: boolean | Prisma.wishlist_offer_items$inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: boolean | Prisma.wishlist_offer_items$inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: boolean | Prisma.wishlist_offersDefaultArgs<ExtArgs>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: boolean | Prisma.wishlist_offer_items$wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersArgs<ExtArgs>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: boolean | Prisma.wishlist_offer_items$wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersArgs<ExtArgs>;
};
export type $wishlist_offer_itemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "wishlist_offer_items";
    objects: {
        inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items: Prisma.$inventory_itemsPayload<ExtArgs>;
        inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items: Prisma.$inventory_itemsPayload<ExtArgs> | null;
        inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items: Prisma.$inventory_itemsPayload<ExtArgs> | null;
        wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers: Prisma.$wishlist_offersPayload<ExtArgs>;
        wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers: Prisma.$wishlist_offersPayload<ExtArgs> | null;
        wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers: Prisma.$wishlist_offersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        wishlist_offer_id: string;
        offerer_user_id: string | null;
        offerer_store_id: string | null;
        inventory_item_id: string;
        quantity: number;
        notes: string | null;
        created_at: Date;
        game_id: string;
    }, ExtArgs["result"]["wishlist_offer_items"]>;
    composites: {};
};
export type wishlist_offer_itemsGetPayload<S extends boolean | null | undefined | wishlist_offer_itemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$wishlist_offer_itemsPayload, S>;
export type wishlist_offer_itemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<wishlist_offer_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Wishlist_offer_itemsCountAggregateInputType | true;
};
export interface wishlist_offer_itemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['wishlist_offer_items'];
        meta: {
            name: 'wishlist_offer_items';
        };
    };
    /**
     * Find zero or one Wishlist_offer_items that matches the filter.
     * @param {wishlist_offer_itemsFindUniqueArgs} args - Arguments to find a Wishlist_offer_items
     * @example
     * // Get one Wishlist_offer_items
     * const wishlist_offer_items = await prisma.wishlist_offer_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends wishlist_offer_itemsFindUniqueArgs>(args: Prisma.SelectSubset<T, wishlist_offer_itemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__wishlist_offer_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Wishlist_offer_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {wishlist_offer_itemsFindUniqueOrThrowArgs} args - Arguments to find a Wishlist_offer_items
     * @example
     * // Get one Wishlist_offer_items
     * const wishlist_offer_items = await prisma.wishlist_offer_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends wishlist_offer_itemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, wishlist_offer_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__wishlist_offer_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Wishlist_offer_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_offer_itemsFindFirstArgs} args - Arguments to find a Wishlist_offer_items
     * @example
     * // Get one Wishlist_offer_items
     * const wishlist_offer_items = await prisma.wishlist_offer_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends wishlist_offer_itemsFindFirstArgs>(args?: Prisma.SelectSubset<T, wishlist_offer_itemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__wishlist_offer_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Wishlist_offer_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_offer_itemsFindFirstOrThrowArgs} args - Arguments to find a Wishlist_offer_items
     * @example
     * // Get one Wishlist_offer_items
     * const wishlist_offer_items = await prisma.wishlist_offer_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends wishlist_offer_itemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, wishlist_offer_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__wishlist_offer_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Wishlist_offer_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_offer_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wishlist_offer_items
     * const wishlist_offer_items = await prisma.wishlist_offer_items.findMany()
     *
     * // Get first 10 Wishlist_offer_items
     * const wishlist_offer_items = await prisma.wishlist_offer_items.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const wishlist_offer_itemsWithIdOnly = await prisma.wishlist_offer_items.findMany({ select: { id: true } })
     *
     */
    findMany<T extends wishlist_offer_itemsFindManyArgs>(args?: Prisma.SelectSubset<T, wishlist_offer_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Wishlist_offer_items.
     * @param {wishlist_offer_itemsCreateArgs} args - Arguments to create a Wishlist_offer_items.
     * @example
     * // Create one Wishlist_offer_items
     * const Wishlist_offer_items = await prisma.wishlist_offer_items.create({
     *   data: {
     *     // ... data to create a Wishlist_offer_items
     *   }
     * })
     *
     */
    create<T extends wishlist_offer_itemsCreateArgs>(args: Prisma.SelectSubset<T, wishlist_offer_itemsCreateArgs<ExtArgs>>): Prisma.Prisma__wishlist_offer_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Wishlist_offer_items.
     * @param {wishlist_offer_itemsCreateManyArgs} args - Arguments to create many Wishlist_offer_items.
     * @example
     * // Create many Wishlist_offer_items
     * const wishlist_offer_items = await prisma.wishlist_offer_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends wishlist_offer_itemsCreateManyArgs>(args?: Prisma.SelectSubset<T, wishlist_offer_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Wishlist_offer_items and returns the data saved in the database.
     * @param {wishlist_offer_itemsCreateManyAndReturnArgs} args - Arguments to create many Wishlist_offer_items.
     * @example
     * // Create many Wishlist_offer_items
     * const wishlist_offer_items = await prisma.wishlist_offer_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Wishlist_offer_items and only return the `id`
     * const wishlist_offer_itemsWithIdOnly = await prisma.wishlist_offer_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends wishlist_offer_itemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, wishlist_offer_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Wishlist_offer_items.
     * @param {wishlist_offer_itemsDeleteArgs} args - Arguments to delete one Wishlist_offer_items.
     * @example
     * // Delete one Wishlist_offer_items
     * const Wishlist_offer_items = await prisma.wishlist_offer_items.delete({
     *   where: {
     *     // ... filter to delete one Wishlist_offer_items
     *   }
     * })
     *
     */
    delete<T extends wishlist_offer_itemsDeleteArgs>(args: Prisma.SelectSubset<T, wishlist_offer_itemsDeleteArgs<ExtArgs>>): Prisma.Prisma__wishlist_offer_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Wishlist_offer_items.
     * @param {wishlist_offer_itemsUpdateArgs} args - Arguments to update one Wishlist_offer_items.
     * @example
     * // Update one Wishlist_offer_items
     * const wishlist_offer_items = await prisma.wishlist_offer_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends wishlist_offer_itemsUpdateArgs>(args: Prisma.SelectSubset<T, wishlist_offer_itemsUpdateArgs<ExtArgs>>): Prisma.Prisma__wishlist_offer_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Wishlist_offer_items.
     * @param {wishlist_offer_itemsDeleteManyArgs} args - Arguments to filter Wishlist_offer_items to delete.
     * @example
     * // Delete a few Wishlist_offer_items
     * const { count } = await prisma.wishlist_offer_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends wishlist_offer_itemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, wishlist_offer_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Wishlist_offer_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_offer_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wishlist_offer_items
     * const wishlist_offer_items = await prisma.wishlist_offer_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends wishlist_offer_itemsUpdateManyArgs>(args: Prisma.SelectSubset<T, wishlist_offer_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Wishlist_offer_items and returns the data updated in the database.
     * @param {wishlist_offer_itemsUpdateManyAndReturnArgs} args - Arguments to update many Wishlist_offer_items.
     * @example
     * // Update many Wishlist_offer_items
     * const wishlist_offer_items = await prisma.wishlist_offer_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Wishlist_offer_items and only return the `id`
     * const wishlist_offer_itemsWithIdOnly = await prisma.wishlist_offer_items.updateManyAndReturn({
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
    updateManyAndReturn<T extends wishlist_offer_itemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, wishlist_offer_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Wishlist_offer_items.
     * @param {wishlist_offer_itemsUpsertArgs} args - Arguments to update or create a Wishlist_offer_items.
     * @example
     * // Update or create a Wishlist_offer_items
     * const wishlist_offer_items = await prisma.wishlist_offer_items.upsert({
     *   create: {
     *     // ... data to create a Wishlist_offer_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wishlist_offer_items we want to update
     *   }
     * })
     */
    upsert<T extends wishlist_offer_itemsUpsertArgs>(args: Prisma.SelectSubset<T, wishlist_offer_itemsUpsertArgs<ExtArgs>>): Prisma.Prisma__wishlist_offer_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Wishlist_offer_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_offer_itemsCountArgs} args - Arguments to filter Wishlist_offer_items to count.
     * @example
     * // Count the number of Wishlist_offer_items
     * const count = await prisma.wishlist_offer_items.count({
     *   where: {
     *     // ... the filter for the Wishlist_offer_items we want to count
     *   }
     * })
    **/
    count<T extends wishlist_offer_itemsCountArgs>(args?: Prisma.Subset<T, wishlist_offer_itemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Wishlist_offer_itemsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Wishlist_offer_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wishlist_offer_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Wishlist_offer_itemsAggregateArgs>(args: Prisma.Subset<T, Wishlist_offer_itemsAggregateArgs>): Prisma.PrismaPromise<GetWishlist_offer_itemsAggregateType<T>>;
    /**
     * Group by Wishlist_offer_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_offer_itemsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends wishlist_offer_itemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: wishlist_offer_itemsGroupByArgs['orderBy'];
    } : {
        orderBy?: wishlist_offer_itemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, wishlist_offer_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlist_offer_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the wishlist_offer_items model
     */
    readonly fields: wishlist_offer_itemsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for wishlist_offer_items.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__wishlist_offer_itemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    inventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items<T extends Prisma.inventory_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items<T extends Prisma.wishlist_offer_items$inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_offer_items$inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items<T extends Prisma.wishlist_offer_items$inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_offer_items$inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offers<T extends Prisma.wishlist_offersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_offersDefaultArgs<ExtArgs>>): Prisma.Prisma__wishlist_offersClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers<T extends Prisma.wishlist_offer_items$wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_offer_items$wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersArgs<ExtArgs>>): Prisma.Prisma__wishlist_offersClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers<T extends Prisma.wishlist_offer_items$wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_offer_items$wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersArgs<ExtArgs>>): Prisma.Prisma__wishlist_offersClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the wishlist_offer_items model
 */
export interface wishlist_offer_itemsFieldRefs {
    readonly id: Prisma.FieldRef<"wishlist_offer_items", 'String'>;
    readonly wishlist_offer_id: Prisma.FieldRef<"wishlist_offer_items", 'String'>;
    readonly offerer_user_id: Prisma.FieldRef<"wishlist_offer_items", 'String'>;
    readonly offerer_store_id: Prisma.FieldRef<"wishlist_offer_items", 'String'>;
    readonly inventory_item_id: Prisma.FieldRef<"wishlist_offer_items", 'String'>;
    readonly quantity: Prisma.FieldRef<"wishlist_offer_items", 'Int'>;
    readonly notes: Prisma.FieldRef<"wishlist_offer_items", 'String'>;
    readonly created_at: Prisma.FieldRef<"wishlist_offer_items", 'DateTime'>;
    readonly game_id: Prisma.FieldRef<"wishlist_offer_items", 'String'>;
}
/**
 * wishlist_offer_items findUnique
 */
export type wishlist_offer_itemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_items
     */
    select?: Prisma.wishlist_offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_items
     */
    omit?: Prisma.wishlist_offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which wishlist_offer_items to fetch.
     */
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
};
/**
 * wishlist_offer_items findUniqueOrThrow
 */
export type wishlist_offer_itemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_items
     */
    select?: Prisma.wishlist_offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_items
     */
    omit?: Prisma.wishlist_offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which wishlist_offer_items to fetch.
     */
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
};
/**
 * wishlist_offer_items findFirst
 */
export type wishlist_offer_itemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_items
     */
    select?: Prisma.wishlist_offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_items
     */
    omit?: Prisma.wishlist_offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which wishlist_offer_items to fetch.
     */
    where?: Prisma.wishlist_offer_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlist_offer_items to fetch.
     */
    orderBy?: Prisma.wishlist_offer_itemsOrderByWithRelationInput | Prisma.wishlist_offer_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for wishlist_offer_items.
     */
    cursor?: Prisma.wishlist_offer_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlist_offer_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlist_offer_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wishlist_offer_items.
     */
    distinct?: Prisma.Wishlist_offer_itemsScalarFieldEnum | Prisma.Wishlist_offer_itemsScalarFieldEnum[];
};
/**
 * wishlist_offer_items findFirstOrThrow
 */
export type wishlist_offer_itemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_items
     */
    select?: Prisma.wishlist_offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_items
     */
    omit?: Prisma.wishlist_offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which wishlist_offer_items to fetch.
     */
    where?: Prisma.wishlist_offer_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlist_offer_items to fetch.
     */
    orderBy?: Prisma.wishlist_offer_itemsOrderByWithRelationInput | Prisma.wishlist_offer_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for wishlist_offer_items.
     */
    cursor?: Prisma.wishlist_offer_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlist_offer_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlist_offer_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wishlist_offer_items.
     */
    distinct?: Prisma.Wishlist_offer_itemsScalarFieldEnum | Prisma.Wishlist_offer_itemsScalarFieldEnum[];
};
/**
 * wishlist_offer_items findMany
 */
export type wishlist_offer_itemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_items
     */
    select?: Prisma.wishlist_offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_items
     */
    omit?: Prisma.wishlist_offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which wishlist_offer_items to fetch.
     */
    where?: Prisma.wishlist_offer_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlist_offer_items to fetch.
     */
    orderBy?: Prisma.wishlist_offer_itemsOrderByWithRelationInput | Prisma.wishlist_offer_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing wishlist_offer_items.
     */
    cursor?: Prisma.wishlist_offer_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlist_offer_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlist_offer_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wishlist_offer_items.
     */
    distinct?: Prisma.Wishlist_offer_itemsScalarFieldEnum | Prisma.Wishlist_offer_itemsScalarFieldEnum[];
};
/**
 * wishlist_offer_items create
 */
export type wishlist_offer_itemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_items
     */
    select?: Prisma.wishlist_offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_items
     */
    omit?: Prisma.wishlist_offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_itemsInclude<ExtArgs> | null;
    /**
     * The data needed to create a wishlist_offer_items.
     */
    data: Prisma.XOR<Prisma.wishlist_offer_itemsCreateInput, Prisma.wishlist_offer_itemsUncheckedCreateInput>;
};
/**
 * wishlist_offer_items createMany
 */
export type wishlist_offer_itemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many wishlist_offer_items.
     */
    data: Prisma.wishlist_offer_itemsCreateManyInput | Prisma.wishlist_offer_itemsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * wishlist_offer_items createManyAndReturn
 */
export type wishlist_offer_itemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_items
     */
    select?: Prisma.wishlist_offer_itemsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_items
     */
    omit?: Prisma.wishlist_offer_itemsOmit<ExtArgs> | null;
    /**
     * The data used to create many wishlist_offer_items.
     */
    data: Prisma.wishlist_offer_itemsCreateManyInput | Prisma.wishlist_offer_itemsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_itemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * wishlist_offer_items update
 */
export type wishlist_offer_itemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_items
     */
    select?: Prisma.wishlist_offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_items
     */
    omit?: Prisma.wishlist_offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_itemsInclude<ExtArgs> | null;
    /**
     * The data needed to update a wishlist_offer_items.
     */
    data: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateInput, Prisma.wishlist_offer_itemsUncheckedUpdateInput>;
    /**
     * Choose, which wishlist_offer_items to update.
     */
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
};
/**
 * wishlist_offer_items updateMany
 */
export type wishlist_offer_itemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update wishlist_offer_items.
     */
    data: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateManyMutationInput, Prisma.wishlist_offer_itemsUncheckedUpdateManyInput>;
    /**
     * Filter which wishlist_offer_items to update
     */
    where?: Prisma.wishlist_offer_itemsWhereInput;
    /**
     * Limit how many wishlist_offer_items to update.
     */
    limit?: number;
};
/**
 * wishlist_offer_items updateManyAndReturn
 */
export type wishlist_offer_itemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_items
     */
    select?: Prisma.wishlist_offer_itemsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_items
     */
    omit?: Prisma.wishlist_offer_itemsOmit<ExtArgs> | null;
    /**
     * The data used to update wishlist_offer_items.
     */
    data: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateManyMutationInput, Prisma.wishlist_offer_itemsUncheckedUpdateManyInput>;
    /**
     * Filter which wishlist_offer_items to update
     */
    where?: Prisma.wishlist_offer_itemsWhereInput;
    /**
     * Limit how many wishlist_offer_items to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_itemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * wishlist_offer_items upsert
 */
export type wishlist_offer_itemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_items
     */
    select?: Prisma.wishlist_offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_items
     */
    omit?: Prisma.wishlist_offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_itemsInclude<ExtArgs> | null;
    /**
     * The filter to search for the wishlist_offer_items to update in case it exists.
     */
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
    /**
     * In case the wishlist_offer_items found by the `where` argument doesn't exist, create a new wishlist_offer_items with this data.
     */
    create: Prisma.XOR<Prisma.wishlist_offer_itemsCreateInput, Prisma.wishlist_offer_itemsUncheckedCreateInput>;
    /**
     * In case the wishlist_offer_items was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.wishlist_offer_itemsUpdateInput, Prisma.wishlist_offer_itemsUncheckedUpdateInput>;
};
/**
 * wishlist_offer_items delete
 */
export type wishlist_offer_itemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_items
     */
    select?: Prisma.wishlist_offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_items
     */
    omit?: Prisma.wishlist_offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_itemsInclude<ExtArgs> | null;
    /**
     * Filter which wishlist_offer_items to delete.
     */
    where: Prisma.wishlist_offer_itemsWhereUniqueInput;
};
/**
 * wishlist_offer_items deleteMany
 */
export type wishlist_offer_itemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which wishlist_offer_items to delete
     */
    where?: Prisma.wishlist_offer_itemsWhereInput;
    /**
     * Limit how many wishlist_offer_items to delete.
     */
    limit?: number;
};
/**
 * wishlist_offer_items.inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items
 */
export type wishlist_offer_items$inventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * wishlist_offer_items.inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items
 */
export type wishlist_offer_items$inventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * wishlist_offer_items.wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers
 */
export type wishlist_offer_items$wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * wishlist_offer_items.wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers
 */
export type wishlist_offer_items$wishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * wishlist_offer_items without action
 */
export type wishlist_offer_itemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offer_items
     */
    select?: Prisma.wishlist_offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offer_items
     */
    omit?: Prisma.wishlist_offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offer_itemsInclude<ExtArgs> | null;
};
