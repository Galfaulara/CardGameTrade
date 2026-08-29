import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model offer_items
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type offer_itemsModel = runtime.Types.Result.DefaultSelection<Prisma.$offer_itemsPayload>;
export type AggregateOffer_items = {
    _count: Offer_itemsCountAggregateOutputType | null;
    _avg: Offer_itemsAvgAggregateOutputType | null;
    _sum: Offer_itemsSumAggregateOutputType | null;
    _min: Offer_itemsMinAggregateOutputType | null;
    _max: Offer_itemsMaxAggregateOutputType | null;
};
export type Offer_itemsAvgAggregateOutputType = {
    quantity: number | null;
};
export type Offer_itemsSumAggregateOutputType = {
    quantity: number | null;
};
export type Offer_itemsMinAggregateOutputType = {
    id: string | null;
    offer_id: string | null;
    offerer_user_id: string | null;
    offerer_store_id: string | null;
    inventory_item_id: string | null;
    quantity: number | null;
    notes: string | null;
    created_at: Date | null;
    game_id: string | null;
};
export type Offer_itemsMaxAggregateOutputType = {
    id: string | null;
    offer_id: string | null;
    offerer_user_id: string | null;
    offerer_store_id: string | null;
    inventory_item_id: string | null;
    quantity: number | null;
    notes: string | null;
    created_at: Date | null;
    game_id: string | null;
};
export type Offer_itemsCountAggregateOutputType = {
    id: number;
    offer_id: number;
    offerer_user_id: number;
    offerer_store_id: number;
    inventory_item_id: number;
    quantity: number;
    notes: number;
    created_at: number;
    game_id: number;
    _all: number;
};
export type Offer_itemsAvgAggregateInputType = {
    quantity?: true;
};
export type Offer_itemsSumAggregateInputType = {
    quantity?: true;
};
export type Offer_itemsMinAggregateInputType = {
    id?: true;
    offer_id?: true;
    offerer_user_id?: true;
    offerer_store_id?: true;
    inventory_item_id?: true;
    quantity?: true;
    notes?: true;
    created_at?: true;
    game_id?: true;
};
export type Offer_itemsMaxAggregateInputType = {
    id?: true;
    offer_id?: true;
    offerer_user_id?: true;
    offerer_store_id?: true;
    inventory_item_id?: true;
    quantity?: true;
    notes?: true;
    created_at?: true;
    game_id?: true;
};
export type Offer_itemsCountAggregateInputType = {
    id?: true;
    offer_id?: true;
    offerer_user_id?: true;
    offerer_store_id?: true;
    inventory_item_id?: true;
    quantity?: true;
    notes?: true;
    created_at?: true;
    game_id?: true;
    _all?: true;
};
export type Offer_itemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which offer_items to aggregate.
     */
    where?: Prisma.offer_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of offer_items to fetch.
     */
    orderBy?: Prisma.offer_itemsOrderByWithRelationInput | Prisma.offer_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.offer_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` offer_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` offer_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned offer_items
    **/
    _count?: true | Offer_itemsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Offer_itemsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Offer_itemsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Offer_itemsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Offer_itemsMaxAggregateInputType;
};
export type GetOffer_itemsAggregateType<T extends Offer_itemsAggregateArgs> = {
    [P in keyof T & keyof AggregateOffer_items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOffer_items[P]> : Prisma.GetScalarType<T[P], AggregateOffer_items[P]>;
};
export type offer_itemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.offer_itemsWhereInput;
    orderBy?: Prisma.offer_itemsOrderByWithAggregationInput | Prisma.offer_itemsOrderByWithAggregationInput[];
    by: Prisma.Offer_itemsScalarFieldEnum[] | Prisma.Offer_itemsScalarFieldEnum;
    having?: Prisma.offer_itemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Offer_itemsCountAggregateInputType | true;
    _avg?: Offer_itemsAvgAggregateInputType;
    _sum?: Offer_itemsSumAggregateInputType;
    _min?: Offer_itemsMinAggregateInputType;
    _max?: Offer_itemsMaxAggregateInputType;
};
export type Offer_itemsGroupByOutputType = {
    id: string;
    offer_id: string;
    offerer_user_id: string | null;
    offerer_store_id: string | null;
    inventory_item_id: string;
    quantity: number;
    notes: string | null;
    created_at: Date;
    game_id: string;
    _count: Offer_itemsCountAggregateOutputType | null;
    _avg: Offer_itemsAvgAggregateOutputType | null;
    _sum: Offer_itemsSumAggregateOutputType | null;
    _min: Offer_itemsMinAggregateOutputType | null;
    _max: Offer_itemsMaxAggregateOutputType | null;
};
export type GetOffer_itemsGroupByPayload<T extends offer_itemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Offer_itemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Offer_itemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Offer_itemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Offer_itemsGroupByOutputType[P]>;
}>>;
export type offer_itemsWhereInput = {
    AND?: Prisma.offer_itemsWhereInput | Prisma.offer_itemsWhereInput[];
    OR?: Prisma.offer_itemsWhereInput[];
    NOT?: Prisma.offer_itemsWhereInput | Prisma.offer_itemsWhereInput[];
    id?: Prisma.UuidFilter<"offer_items"> | string;
    offer_id?: Prisma.UuidFilter<"offer_items"> | string;
    offerer_user_id?: Prisma.UuidNullableFilter<"offer_items"> | string | null;
    offerer_store_id?: Prisma.UuidNullableFilter<"offer_items"> | string | null;
    inventory_item_id?: Prisma.UuidFilter<"offer_items"> | string;
    quantity?: Prisma.IntFilter<"offer_items"> | number;
    notes?: Prisma.StringNullableFilter<"offer_items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"offer_items"> | Date | string;
    game_id?: Prisma.UuidFilter<"offer_items"> | string;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsScalarRelationFilter, Prisma.inventory_itemsWhereInput>;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsNullableScalarRelationFilter, Prisma.inventory_itemsWhereInput> | null;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsNullableScalarRelationFilter, Prisma.inventory_itemsWhereInput> | null;
    listing_offers_offer_items_offer_idTolisting_offers?: Prisma.XOR<Prisma.Listing_offersScalarRelationFilter, Prisma.listing_offersWhereInput>;
    listing_offers_offer_items_offer_id_game_idTolisting_offers?: Prisma.XOR<Prisma.Listing_offersScalarRelationFilter, Prisma.listing_offersWhereInput>;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.XOR<Prisma.Listing_offersNullableScalarRelationFilter, Prisma.listing_offersWhereInput> | null;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.XOR<Prisma.Listing_offersNullableScalarRelationFilter, Prisma.listing_offersWhereInput> | null;
};
export type offer_itemsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    offer_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsOrderByWithRelationInput;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsOrderByWithRelationInput;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsOrderByWithRelationInput;
    listing_offers_offer_items_offer_idTolisting_offers?: Prisma.listing_offersOrderByWithRelationInput;
    listing_offers_offer_items_offer_id_game_idTolisting_offers?: Prisma.listing_offersOrderByWithRelationInput;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.listing_offersOrderByWithRelationInput;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.listing_offersOrderByWithRelationInput;
};
export type offer_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    offer_id_inventory_item_id?: Prisma.offer_itemsOffer_idInventory_item_idCompoundUniqueInput;
    AND?: Prisma.offer_itemsWhereInput | Prisma.offer_itemsWhereInput[];
    OR?: Prisma.offer_itemsWhereInput[];
    NOT?: Prisma.offer_itemsWhereInput | Prisma.offer_itemsWhereInput[];
    offer_id?: Prisma.UuidFilter<"offer_items"> | string;
    offerer_user_id?: Prisma.UuidNullableFilter<"offer_items"> | string | null;
    offerer_store_id?: Prisma.UuidNullableFilter<"offer_items"> | string | null;
    inventory_item_id?: Prisma.UuidFilter<"offer_items"> | string;
    quantity?: Prisma.IntFilter<"offer_items"> | number;
    notes?: Prisma.StringNullableFilter<"offer_items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"offer_items"> | Date | string;
    game_id?: Prisma.UuidFilter<"offer_items"> | string;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsScalarRelationFilter, Prisma.inventory_itemsWhereInput>;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsNullableScalarRelationFilter, Prisma.inventory_itemsWhereInput> | null;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsNullableScalarRelationFilter, Prisma.inventory_itemsWhereInput> | null;
    listing_offers_offer_items_offer_idTolisting_offers?: Prisma.XOR<Prisma.Listing_offersScalarRelationFilter, Prisma.listing_offersWhereInput>;
    listing_offers_offer_items_offer_id_game_idTolisting_offers?: Prisma.XOR<Prisma.Listing_offersScalarRelationFilter, Prisma.listing_offersWhereInput>;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.XOR<Prisma.Listing_offersNullableScalarRelationFilter, Prisma.listing_offersWhereInput> | null;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.XOR<Prisma.Listing_offersNullableScalarRelationFilter, Prisma.listing_offersWhereInput> | null;
}, "id" | "offer_id_inventory_item_id">;
export type offer_itemsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    offer_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    _count?: Prisma.offer_itemsCountOrderByAggregateInput;
    _avg?: Prisma.offer_itemsAvgOrderByAggregateInput;
    _max?: Prisma.offer_itemsMaxOrderByAggregateInput;
    _min?: Prisma.offer_itemsMinOrderByAggregateInput;
    _sum?: Prisma.offer_itemsSumOrderByAggregateInput;
};
export type offer_itemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.offer_itemsScalarWhereWithAggregatesInput | Prisma.offer_itemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.offer_itemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.offer_itemsScalarWhereWithAggregatesInput | Prisma.offer_itemsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"offer_items"> | string;
    offer_id?: Prisma.UuidWithAggregatesFilter<"offer_items"> | string;
    offerer_user_id?: Prisma.UuidNullableWithAggregatesFilter<"offer_items"> | string | null;
    offerer_store_id?: Prisma.UuidNullableWithAggregatesFilter<"offer_items"> | string | null;
    inventory_item_id?: Prisma.UuidWithAggregatesFilter<"offer_items"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"offer_items"> | number;
    notes?: Prisma.StringNullableWithAggregatesFilter<"offer_items"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"offer_items"> | Date | string;
    game_id?: Prisma.UuidWithAggregatesFilter<"offer_items"> | string;
};
export type offer_itemsCreateInput = {
    id?: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    listing_offers_offer_items_offer_idTolisting_offers: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_game_idTolisting_offers: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput;
};
export type offer_itemsUncheckedCreateInput = {
    id?: string;
    offer_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    inventory_item_id: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type offer_itemsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    listing_offers_offer_items_offer_idTolisting_offers?: Prisma.listing_offersUpdateOneRequiredWithoutOffer_items_offer_items_offer_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_game_idTolisting_offers?: Prisma.listing_offersUpdateOneRequiredWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
};
export type offer_itemsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type offer_itemsCreateManyInput = {
    id?: string;
    offer_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    inventory_item_id: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type offer_itemsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type offer_itemsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Offer_itemsListRelationFilter = {
    every?: Prisma.offer_itemsWhereInput;
    some?: Prisma.offer_itemsWhereInput;
    none?: Prisma.offer_itemsWhereInput;
};
export type offer_itemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type offer_itemsOffer_idInventory_item_idCompoundUniqueInput = {
    offer_id: string;
    inventory_item_id: string;
};
export type offer_itemsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    offer_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type offer_itemsAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type offer_itemsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    offer_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type offer_itemsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    offer_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type offer_itemsSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput> | Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput[] | Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    createMany?: Prisma.offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInputEnvelope;
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
};
export type offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput> | Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[] | Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    createMany?: Prisma.offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInputEnvelope;
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
};
export type offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput> | Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[] | Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    createMany?: Prisma.offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInputEnvelope;
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
};
export type offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput> | Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput[] | Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    createMany?: Prisma.offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInputEnvelope;
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
};
export type offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput> | Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[] | Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    createMany?: Prisma.offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInputEnvelope;
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
};
export type offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput> | Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[] | Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    createMany?: Prisma.offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInputEnvelope;
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
};
export type offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput> | Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput[] | Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    upsert?: Prisma.offer_itemsUpsertWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.offer_itemsUpsertWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    createMany?: Prisma.offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInputEnvelope;
    set?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    delete?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    update?: Prisma.offer_itemsUpdateWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.offer_itemsUpdateWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    updateMany?: Prisma.offer_itemsUpdateManyWithWhereWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.offer_itemsUpdateManyWithWhereWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    deleteMany?: Prisma.offer_itemsScalarWhereInput | Prisma.offer_itemsScalarWhereInput[];
};
export type offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput> | Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[] | Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    upsert?: Prisma.offer_itemsUpsertWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.offer_itemsUpsertWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    createMany?: Prisma.offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInputEnvelope;
    set?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    delete?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    update?: Prisma.offer_itemsUpdateWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.offer_itemsUpdateWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    updateMany?: Prisma.offer_itemsUpdateManyWithWhereWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.offer_itemsUpdateManyWithWhereWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    deleteMany?: Prisma.offer_itemsScalarWhereInput | Prisma.offer_itemsScalarWhereInput[];
};
export type offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput> | Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[] | Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    upsert?: Prisma.offer_itemsUpsertWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.offer_itemsUpsertWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    createMany?: Prisma.offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInputEnvelope;
    set?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    delete?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    update?: Prisma.offer_itemsUpdateWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.offer_itemsUpdateWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    updateMany?: Prisma.offer_itemsUpdateManyWithWhereWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.offer_itemsUpdateManyWithWhereWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    deleteMany?: Prisma.offer_itemsScalarWhereInput | Prisma.offer_itemsScalarWhereInput[];
};
export type offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput> | Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput[] | Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    upsert?: Prisma.offer_itemsUpsertWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.offer_itemsUpsertWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    createMany?: Prisma.offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInputEnvelope;
    set?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    delete?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    update?: Prisma.offer_itemsUpdateWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.offer_itemsUpdateWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    updateMany?: Prisma.offer_itemsUpdateManyWithWhereWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.offer_itemsUpdateManyWithWhereWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    deleteMany?: Prisma.offer_itemsScalarWhereInput | Prisma.offer_itemsScalarWhereInput[];
};
export type offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput> | Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[] | Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    upsert?: Prisma.offer_itemsUpsertWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.offer_itemsUpsertWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    createMany?: Prisma.offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInputEnvelope;
    set?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    delete?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    update?: Prisma.offer_itemsUpdateWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.offer_itemsUpdateWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    updateMany?: Prisma.offer_itemsUpdateManyWithWhereWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.offer_itemsUpdateManyWithWhereWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    deleteMany?: Prisma.offer_itemsScalarWhereInput | Prisma.offer_itemsScalarWhereInput[];
};
export type offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput> | Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[] | Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    upsert?: Prisma.offer_itemsUpsertWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.offer_itemsUpsertWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    createMany?: Prisma.offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInputEnvelope;
    set?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    delete?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    update?: Prisma.offer_itemsUpdateWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.offer_itemsUpdateWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    updateMany?: Prisma.offer_itemsUpdateManyWithWhereWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.offer_itemsUpdateManyWithWhereWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    deleteMany?: Prisma.offer_itemsScalarWhereInput | Prisma.offer_itemsScalarWhereInput[];
};
export type offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput> | Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput[] | Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_idTolisting_offersInput | Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_idTolisting_offersInput[];
    createMany?: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_idTolisting_offersInputEnvelope;
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
};
export type offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput> | Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput[] | Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput | Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput[];
    createMany?: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_id_game_idTolisting_offersInputEnvelope;
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
};
export type offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput> | Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput[] | Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput | Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput[];
    createMany?: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInputEnvelope;
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
};
export type offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput> | Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput[] | Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput | Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput[];
    createMany?: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInputEnvelope;
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
};
export type offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput> | Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput[] | Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_idTolisting_offersInput | Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_idTolisting_offersInput[];
    createMany?: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_idTolisting_offersInputEnvelope;
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
};
export type offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput> | Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput[] | Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput | Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput[];
    createMany?: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_id_game_idTolisting_offersInputEnvelope;
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
};
export type offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput> | Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput[] | Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput | Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput[];
    createMany?: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInputEnvelope;
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
};
export type offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput> | Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput[] | Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput | Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput[];
    createMany?: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInputEnvelope;
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
};
export type offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput> | Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput[] | Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_idTolisting_offersInput | Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_idTolisting_offersInput[];
    upsert?: Prisma.offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_idTolisting_offersInput | Prisma.offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_idTolisting_offersInput[];
    createMany?: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_idTolisting_offersInputEnvelope;
    set?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    delete?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    update?: Prisma.offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_idTolisting_offersInput | Prisma.offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_idTolisting_offersInput[];
    updateMany?: Prisma.offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_idTolisting_offersInput | Prisma.offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_idTolisting_offersInput[];
    deleteMany?: Prisma.offer_itemsScalarWhereInput | Prisma.offer_itemsScalarWhereInput[];
};
export type offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput> | Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput[] | Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput | Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput[];
    upsert?: Prisma.offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput | Prisma.offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput[];
    createMany?: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_id_game_idTolisting_offersInputEnvelope;
    set?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    delete?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    update?: Prisma.offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput | Prisma.offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput[];
    updateMany?: Prisma.offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput | Prisma.offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput[];
    deleteMany?: Prisma.offer_itemsScalarWhereInput | Prisma.offer_itemsScalarWhereInput[];
};
export type offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput> | Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput[] | Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput | Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput[];
    upsert?: Prisma.offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput | Prisma.offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput[];
    createMany?: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInputEnvelope;
    set?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    delete?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    update?: Prisma.offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput | Prisma.offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput[];
    updateMany?: Prisma.offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput | Prisma.offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput[];
    deleteMany?: Prisma.offer_itemsScalarWhereInput | Prisma.offer_itemsScalarWhereInput[];
};
export type offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput> | Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput[] | Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput | Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput[];
    upsert?: Prisma.offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput | Prisma.offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput[];
    createMany?: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInputEnvelope;
    set?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    delete?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    update?: Prisma.offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput | Prisma.offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput[];
    updateMany?: Prisma.offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput | Prisma.offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput[];
    deleteMany?: Prisma.offer_itemsScalarWhereInput | Prisma.offer_itemsScalarWhereInput[];
};
export type offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput> | Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput[] | Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_idTolisting_offersInput | Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_idTolisting_offersInput[];
    upsert?: Prisma.offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_idTolisting_offersInput | Prisma.offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_idTolisting_offersInput[];
    createMany?: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_idTolisting_offersInputEnvelope;
    set?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    delete?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    update?: Prisma.offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_idTolisting_offersInput | Prisma.offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_idTolisting_offersInput[];
    updateMany?: Prisma.offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_idTolisting_offersInput | Prisma.offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_idTolisting_offersInput[];
    deleteMany?: Prisma.offer_itemsScalarWhereInput | Prisma.offer_itemsScalarWhereInput[];
};
export type offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput> | Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput[] | Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput | Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput[];
    upsert?: Prisma.offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput | Prisma.offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput[];
    createMany?: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_id_game_idTolisting_offersInputEnvelope;
    set?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    delete?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    update?: Prisma.offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput | Prisma.offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput[];
    updateMany?: Prisma.offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput | Prisma.offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput[];
    deleteMany?: Prisma.offer_itemsScalarWhereInput | Prisma.offer_itemsScalarWhereInput[];
};
export type offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput> | Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput[] | Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput | Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput[];
    upsert?: Prisma.offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput | Prisma.offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput[];
    createMany?: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInputEnvelope;
    set?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    delete?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    update?: Prisma.offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput | Prisma.offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput[];
    updateMany?: Prisma.offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput | Prisma.offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput[];
    deleteMany?: Prisma.offer_itemsScalarWhereInput | Prisma.offer_itemsScalarWhereInput[];
};
export type offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput = {
    create?: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput> | Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput[] | Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput[];
    connectOrCreate?: Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput | Prisma.offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput[];
    upsert?: Prisma.offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput | Prisma.offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput[];
    createMany?: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInputEnvelope;
    set?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    disconnect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    delete?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    connect?: Prisma.offer_itemsWhereUniqueInput | Prisma.offer_itemsWhereUniqueInput[];
    update?: Prisma.offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput | Prisma.offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput[];
    updateMany?: Prisma.offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput | Prisma.offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput[];
    deleteMany?: Prisma.offer_itemsScalarWhereInput | Prisma.offer_itemsScalarWhereInput[];
};
export type offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    listing_offers_offer_items_offer_idTolisting_offers: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_game_idTolisting_offers: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput;
};
export type offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: string;
    offer_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
};
export type offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
};
export type offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInputEnvelope = {
    data: Prisma.offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput | Prisma.offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput[];
    skipDuplicates?: boolean;
};
export type offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    listing_offers_offer_items_offer_idTolisting_offers: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_game_idTolisting_offers: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput;
};
export type offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: string;
    offer_id: string;
    offerer_user_id?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
};
export type offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInputEnvelope = {
    data: Prisma.offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput | Prisma.offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput[];
    skipDuplicates?: boolean;
};
export type offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    listing_offers_offer_items_offer_idTolisting_offers: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_game_idTolisting_offers: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput;
};
export type offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: string;
    offer_id: string;
    offerer_store_id?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type offer_itemsCreateOrConnectWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
};
export type offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInputEnvelope = {
    data: Prisma.offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput | Prisma.offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput[];
    skipDuplicates?: boolean;
};
export type offer_itemsUpsertWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.offer_itemsUpdateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.offer_itemsUncheckedUpdateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
};
export type offer_itemsUpdateWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.offer_itemsUpdateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.offer_itemsUncheckedUpdateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
};
export type offer_itemsUpdateManyWithWhereWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    where: Prisma.offer_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.offer_itemsUpdateManyMutationInput, Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
};
export type offer_itemsScalarWhereInput = {
    AND?: Prisma.offer_itemsScalarWhereInput | Prisma.offer_itemsScalarWhereInput[];
    OR?: Prisma.offer_itemsScalarWhereInput[];
    NOT?: Prisma.offer_itemsScalarWhereInput | Prisma.offer_itemsScalarWhereInput[];
    id?: Prisma.UuidFilter<"offer_items"> | string;
    offer_id?: Prisma.UuidFilter<"offer_items"> | string;
    offerer_user_id?: Prisma.UuidNullableFilter<"offer_items"> | string | null;
    offerer_store_id?: Prisma.UuidNullableFilter<"offer_items"> | string | null;
    inventory_item_id?: Prisma.UuidFilter<"offer_items"> | string;
    quantity?: Prisma.IntFilter<"offer_items"> | number;
    notes?: Prisma.StringNullableFilter<"offer_items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"offer_items"> | Date | string;
    game_id?: Prisma.UuidFilter<"offer_items"> | string;
};
export type offer_itemsUpsertWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.offer_itemsUpdateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.offer_itemsUncheckedUpdateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
};
export type offer_itemsUpdateWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.offer_itemsUpdateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.offer_itemsUncheckedUpdateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
};
export type offer_itemsUpdateManyWithWhereWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    where: Prisma.offer_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.offer_itemsUpdateManyMutationInput, Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
};
export type offer_itemsUpsertWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.offer_itemsUpdateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.offer_itemsUncheckedUpdateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.offer_itemsCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.offer_itemsUncheckedCreateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
};
export type offer_itemsUpdateWithWhereUniqueWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.offer_itemsUpdateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.offer_itemsUncheckedUpdateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
};
export type offer_itemsUpdateManyWithWhereWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    where: Prisma.offer_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.offer_itemsUpdateManyMutationInput, Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
};
export type offer_itemsCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput = {
    id?: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    listing_offers_offer_items_offer_id_game_idTolisting_offers: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput;
};
export type offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput = {
    id?: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    inventory_item_id: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_idTolisting_offersInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput>;
};
export type offer_itemsCreateManyListing_offers_offer_items_offer_idTolisting_offersInputEnvelope = {
    data: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_idTolisting_offersInput | Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_idTolisting_offersInput[];
    skipDuplicates?: boolean;
};
export type offer_itemsCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput = {
    id?: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    listing_offers_offer_items_offer_idTolisting_offers: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput;
};
export type offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput = {
    id?: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    inventory_item_id: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
};
export type offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput>;
};
export type offer_itemsCreateManyListing_offers_offer_items_offer_id_game_idTolisting_offersInputEnvelope = {
    data: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_id_game_idTolisting_offersInput | Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_id_game_idTolisting_offersInput[];
    skipDuplicates?: boolean;
};
export type offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    id?: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    listing_offers_offer_items_offer_idTolisting_offers: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_game_idTolisting_offers: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput;
};
export type offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    id?: string;
    offerer_user_id?: string | null;
    inventory_item_id: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput>;
};
export type offer_itemsCreateManyListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInputEnvelope = {
    data: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput | Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput[];
    skipDuplicates?: boolean;
};
export type offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    id?: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    listing_offers_offer_items_offer_idTolisting_offers: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_game_idTolisting_offers: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput;
};
export type offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    id?: string;
    offerer_store_id?: string | null;
    inventory_item_id: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type offer_itemsCreateOrConnectWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput>;
};
export type offer_itemsCreateManyListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInputEnvelope = {
    data: Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput | Prisma.offer_itemsCreateManyListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput[];
    skipDuplicates?: boolean;
};
export type offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_idTolisting_offersInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.offer_itemsUpdateWithoutListing_offers_offer_items_offer_idTolisting_offersInput, Prisma.offer_itemsUncheckedUpdateWithoutListing_offers_offer_items_offer_idTolisting_offersInput>;
    create: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_idTolisting_offersInput>;
};
export type offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_idTolisting_offersInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.offer_itemsUpdateWithoutListing_offers_offer_items_offer_idTolisting_offersInput, Prisma.offer_itemsUncheckedUpdateWithoutListing_offers_offer_items_offer_idTolisting_offersInput>;
};
export type offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_idTolisting_offersInput = {
    where: Prisma.offer_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.offer_itemsUpdateManyMutationInput, Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput>;
};
export type offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.offer_itemsUpdateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput, Prisma.offer_itemsUncheckedUpdateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput>;
    create: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput>;
};
export type offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.offer_itemsUpdateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput, Prisma.offer_itemsUncheckedUpdateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput>;
};
export type offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput = {
    where: Prisma.offer_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.offer_itemsUpdateManyMutationInput, Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput>;
};
export type offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.offer_itemsUpdateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput, Prisma.offer_itemsUncheckedUpdateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput>;
    create: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput>;
};
export type offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.offer_itemsUpdateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput, Prisma.offer_itemsUncheckedUpdateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput>;
};
export type offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    where: Prisma.offer_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.offer_itemsUpdateManyMutationInput, Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput>;
};
export type offer_itemsUpsertWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.offer_itemsUpdateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput, Prisma.offer_itemsUncheckedUpdateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput>;
    create: Prisma.XOR<Prisma.offer_itemsCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput, Prisma.offer_itemsUncheckedCreateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput>;
};
export type offer_itemsUpdateWithWhereUniqueWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    where: Prisma.offer_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.offer_itemsUpdateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput, Prisma.offer_itemsUncheckedUpdateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput>;
};
export type offer_itemsUpdateManyWithWhereWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    where: Prisma.offer_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.offer_itemsUpdateManyMutationInput, Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput>;
};
export type offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: string;
    offer_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
};
export type offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: string;
    offer_id: string;
    offerer_user_id?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type offer_itemsCreateManyInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: string;
    offer_id: string;
    offerer_store_id?: string | null;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type offer_itemsUpdateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    listing_offers_offer_items_offer_idTolisting_offers?: Prisma.listing_offersUpdateOneRequiredWithoutOffer_items_offer_items_offer_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_game_idTolisting_offers?: Prisma.listing_offersUpdateOneRequiredWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
};
export type offer_itemsUncheckedUpdateWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type offer_itemsUpdateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    listing_offers_offer_items_offer_idTolisting_offers?: Prisma.listing_offersUpdateOneRequiredWithoutOffer_items_offer_items_offer_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_game_idTolisting_offers?: Prisma.listing_offersUpdateOneRequiredWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
};
export type offer_itemsUncheckedUpdateWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type offer_itemsUpdateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    listing_offers_offer_items_offer_idTolisting_offers?: Prisma.listing_offersUpdateOneRequiredWithoutOffer_items_offer_items_offer_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_game_idTolisting_offers?: Prisma.listing_offersUpdateOneRequiredWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
};
export type offer_itemsUncheckedUpdateWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offer_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type offer_itemsCreateManyListing_offers_offer_items_offer_idTolisting_offersInput = {
    id?: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    inventory_item_id: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type offer_itemsCreateManyListing_offers_offer_items_offer_id_game_idTolisting_offersInput = {
    id?: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    inventory_item_id: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
};
export type offer_itemsCreateManyListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    id?: string;
    offerer_user_id?: string | null;
    inventory_item_id: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type offer_itemsCreateManyListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    id?: string;
    offerer_store_id?: string | null;
    inventory_item_id: string;
    quantity?: number;
    notes?: string | null;
    created_at?: Date | string;
    game_id: string;
};
export type offer_itemsUpdateWithoutListing_offers_offer_items_offer_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    listing_offers_offer_items_offer_id_game_idTolisting_offers?: Prisma.listing_offersUpdateOneRequiredWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
};
export type offer_itemsUncheckedUpdateWithoutListing_offers_offer_items_offer_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type offer_itemsUpdateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    listing_offers_offer_items_offer_idTolisting_offers?: Prisma.listing_offersUpdateOneRequiredWithoutOffer_items_offer_items_offer_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
};
export type offer_itemsUncheckedUpdateWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type offer_itemsUpdateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    listing_offers_offer_items_offer_idTolisting_offers?: Prisma.listing_offersUpdateOneRequiredWithoutOffer_items_offer_items_offer_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_game_idTolisting_offers?: Prisma.listing_offersUpdateOneRequiredWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
};
export type offer_itemsUncheckedUpdateWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type offer_itemsUpdateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    listing_offers_offer_items_offer_idTolisting_offers?: Prisma.listing_offersUpdateOneRequiredWithoutOffer_items_offer_items_offer_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_game_idTolisting_offers?: Prisma.listing_offersUpdateOneRequiredWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersNestedInput;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
};
export type offer_itemsUncheckedUpdateWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type offer_itemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    offer_id?: boolean;
    offerer_user_id?: boolean;
    offerer_store_id?: boolean;
    inventory_item_id?: boolean;
    quantity?: boolean;
    notes?: boolean;
    created_at?: boolean;
    game_id?: boolean;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: boolean | Prisma.offer_items$inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: boolean | Prisma.offer_items$inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>;
    listing_offers_offer_items_offer_idTolisting_offers?: boolean | Prisma.listing_offersDefaultArgs<ExtArgs>;
    listing_offers_offer_items_offer_id_game_idTolisting_offers?: boolean | Prisma.listing_offersDefaultArgs<ExtArgs>;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: boolean | Prisma.offer_items$listing_offers_offer_items_offer_id_offerer_store_idTolisting_offersArgs<ExtArgs>;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: boolean | Prisma.offer_items$listing_offers_offer_items_offer_id_offerer_user_idTolisting_offersArgs<ExtArgs>;
}, ExtArgs["result"]["offer_items"]>;
export type offer_itemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    offer_id?: boolean;
    offerer_user_id?: boolean;
    offerer_store_id?: boolean;
    inventory_item_id?: boolean;
    quantity?: boolean;
    notes?: boolean;
    created_at?: boolean;
    game_id?: boolean;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: boolean | Prisma.offer_items$inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: boolean | Prisma.offer_items$inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>;
    listing_offers_offer_items_offer_idTolisting_offers?: boolean | Prisma.listing_offersDefaultArgs<ExtArgs>;
    listing_offers_offer_items_offer_id_game_idTolisting_offers?: boolean | Prisma.listing_offersDefaultArgs<ExtArgs>;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: boolean | Prisma.offer_items$listing_offers_offer_items_offer_id_offerer_store_idTolisting_offersArgs<ExtArgs>;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: boolean | Prisma.offer_items$listing_offers_offer_items_offer_id_offerer_user_idTolisting_offersArgs<ExtArgs>;
}, ExtArgs["result"]["offer_items"]>;
export type offer_itemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    offer_id?: boolean;
    offerer_user_id?: boolean;
    offerer_store_id?: boolean;
    inventory_item_id?: boolean;
    quantity?: boolean;
    notes?: boolean;
    created_at?: boolean;
    game_id?: boolean;
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: boolean | Prisma.offer_items$inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: boolean | Prisma.offer_items$inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>;
    listing_offers_offer_items_offer_idTolisting_offers?: boolean | Prisma.listing_offersDefaultArgs<ExtArgs>;
    listing_offers_offer_items_offer_id_game_idTolisting_offers?: boolean | Prisma.listing_offersDefaultArgs<ExtArgs>;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: boolean | Prisma.offer_items$listing_offers_offer_items_offer_id_offerer_store_idTolisting_offersArgs<ExtArgs>;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: boolean | Prisma.offer_items$listing_offers_offer_items_offer_id_offerer_user_idTolisting_offersArgs<ExtArgs>;
}, ExtArgs["result"]["offer_items"]>;
export type offer_itemsSelectScalar = {
    id?: boolean;
    offer_id?: boolean;
    offerer_user_id?: boolean;
    offerer_store_id?: boolean;
    inventory_item_id?: boolean;
    quantity?: boolean;
    notes?: boolean;
    created_at?: boolean;
    game_id?: boolean;
};
export type offer_itemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "offer_id" | "offerer_user_id" | "offerer_store_id" | "inventory_item_id" | "quantity" | "notes" | "created_at" | "game_id", ExtArgs["result"]["offer_items"]>;
export type offer_itemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: boolean | Prisma.offer_items$inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: boolean | Prisma.offer_items$inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>;
    listing_offers_offer_items_offer_idTolisting_offers?: boolean | Prisma.listing_offersDefaultArgs<ExtArgs>;
    listing_offers_offer_items_offer_id_game_idTolisting_offers?: boolean | Prisma.listing_offersDefaultArgs<ExtArgs>;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: boolean | Prisma.offer_items$listing_offers_offer_items_offer_id_offerer_store_idTolisting_offersArgs<ExtArgs>;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: boolean | Prisma.offer_items$listing_offers_offer_items_offer_id_offerer_user_idTolisting_offersArgs<ExtArgs>;
};
export type offer_itemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: boolean | Prisma.offer_items$inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: boolean | Prisma.offer_items$inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>;
    listing_offers_offer_items_offer_idTolisting_offers?: boolean | Prisma.listing_offersDefaultArgs<ExtArgs>;
    listing_offers_offer_items_offer_id_game_idTolisting_offers?: boolean | Prisma.listing_offersDefaultArgs<ExtArgs>;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: boolean | Prisma.offer_items$listing_offers_offer_items_offer_id_offerer_store_idTolisting_offersArgs<ExtArgs>;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: boolean | Prisma.offer_items$listing_offers_offer_items_offer_id_offerer_user_idTolisting_offersArgs<ExtArgs>;
};
export type offer_itemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: boolean | Prisma.offer_items$inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: boolean | Prisma.offer_items$inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>;
    listing_offers_offer_items_offer_idTolisting_offers?: boolean | Prisma.listing_offersDefaultArgs<ExtArgs>;
    listing_offers_offer_items_offer_id_game_idTolisting_offers?: boolean | Prisma.listing_offersDefaultArgs<ExtArgs>;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers?: boolean | Prisma.offer_items$listing_offers_offer_items_offer_id_offerer_store_idTolisting_offersArgs<ExtArgs>;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers?: boolean | Prisma.offer_items$listing_offers_offer_items_offer_id_offerer_user_idTolisting_offersArgs<ExtArgs>;
};
export type $offer_itemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "offer_items";
    objects: {
        inventory_items_offer_items_inventory_item_id_game_idToinventory_items: Prisma.$inventory_itemsPayload<ExtArgs>;
        inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items: Prisma.$inventory_itemsPayload<ExtArgs> | null;
        inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items: Prisma.$inventory_itemsPayload<ExtArgs> | null;
        listing_offers_offer_items_offer_idTolisting_offers: Prisma.$listing_offersPayload<ExtArgs>;
        listing_offers_offer_items_offer_id_game_idTolisting_offers: Prisma.$listing_offersPayload<ExtArgs>;
        listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers: Prisma.$listing_offersPayload<ExtArgs> | null;
        listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers: Prisma.$listing_offersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        offer_id: string;
        offerer_user_id: string | null;
        offerer_store_id: string | null;
        inventory_item_id: string;
        quantity: number;
        notes: string | null;
        created_at: Date;
        game_id: string;
    }, ExtArgs["result"]["offer_items"]>;
    composites: {};
};
export type offer_itemsGetPayload<S extends boolean | null | undefined | offer_itemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$offer_itemsPayload, S>;
export type offer_itemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<offer_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Offer_itemsCountAggregateInputType | true;
};
export interface offer_itemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['offer_items'];
        meta: {
            name: 'offer_items';
        };
    };
    /**
     * Find zero or one Offer_items that matches the filter.
     * @param {offer_itemsFindUniqueArgs} args - Arguments to find a Offer_items
     * @example
     * // Get one Offer_items
     * const offer_items = await prisma.offer_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends offer_itemsFindUniqueArgs>(args: Prisma.SelectSubset<T, offer_itemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__offer_itemsClient<runtime.Types.Result.GetResult<Prisma.$offer_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Offer_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {offer_itemsFindUniqueOrThrowArgs} args - Arguments to find a Offer_items
     * @example
     * // Get one Offer_items
     * const offer_items = await prisma.offer_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends offer_itemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, offer_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__offer_itemsClient<runtime.Types.Result.GetResult<Prisma.$offer_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Offer_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {offer_itemsFindFirstArgs} args - Arguments to find a Offer_items
     * @example
     * // Get one Offer_items
     * const offer_items = await prisma.offer_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends offer_itemsFindFirstArgs>(args?: Prisma.SelectSubset<T, offer_itemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__offer_itemsClient<runtime.Types.Result.GetResult<Prisma.$offer_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Offer_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {offer_itemsFindFirstOrThrowArgs} args - Arguments to find a Offer_items
     * @example
     * // Get one Offer_items
     * const offer_items = await prisma.offer_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends offer_itemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, offer_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__offer_itemsClient<runtime.Types.Result.GetResult<Prisma.$offer_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Offer_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {offer_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offer_items
     * const offer_items = await prisma.offer_items.findMany()
     *
     * // Get first 10 Offer_items
     * const offer_items = await prisma.offer_items.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const offer_itemsWithIdOnly = await prisma.offer_items.findMany({ select: { id: true } })
     *
     */
    findMany<T extends offer_itemsFindManyArgs>(args?: Prisma.SelectSubset<T, offer_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$offer_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Offer_items.
     * @param {offer_itemsCreateArgs} args - Arguments to create a Offer_items.
     * @example
     * // Create one Offer_items
     * const Offer_items = await prisma.offer_items.create({
     *   data: {
     *     // ... data to create a Offer_items
     *   }
     * })
     *
     */
    create<T extends offer_itemsCreateArgs>(args: Prisma.SelectSubset<T, offer_itemsCreateArgs<ExtArgs>>): Prisma.Prisma__offer_itemsClient<runtime.Types.Result.GetResult<Prisma.$offer_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Offer_items.
     * @param {offer_itemsCreateManyArgs} args - Arguments to create many Offer_items.
     * @example
     * // Create many Offer_items
     * const offer_items = await prisma.offer_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends offer_itemsCreateManyArgs>(args?: Prisma.SelectSubset<T, offer_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Offer_items and returns the data saved in the database.
     * @param {offer_itemsCreateManyAndReturnArgs} args - Arguments to create many Offer_items.
     * @example
     * // Create many Offer_items
     * const offer_items = await prisma.offer_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Offer_items and only return the `id`
     * const offer_itemsWithIdOnly = await prisma.offer_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends offer_itemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, offer_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$offer_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Offer_items.
     * @param {offer_itemsDeleteArgs} args - Arguments to delete one Offer_items.
     * @example
     * // Delete one Offer_items
     * const Offer_items = await prisma.offer_items.delete({
     *   where: {
     *     // ... filter to delete one Offer_items
     *   }
     * })
     *
     */
    delete<T extends offer_itemsDeleteArgs>(args: Prisma.SelectSubset<T, offer_itemsDeleteArgs<ExtArgs>>): Prisma.Prisma__offer_itemsClient<runtime.Types.Result.GetResult<Prisma.$offer_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Offer_items.
     * @param {offer_itemsUpdateArgs} args - Arguments to update one Offer_items.
     * @example
     * // Update one Offer_items
     * const offer_items = await prisma.offer_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends offer_itemsUpdateArgs>(args: Prisma.SelectSubset<T, offer_itemsUpdateArgs<ExtArgs>>): Prisma.Prisma__offer_itemsClient<runtime.Types.Result.GetResult<Prisma.$offer_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Offer_items.
     * @param {offer_itemsDeleteManyArgs} args - Arguments to filter Offer_items to delete.
     * @example
     * // Delete a few Offer_items
     * const { count } = await prisma.offer_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends offer_itemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, offer_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Offer_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {offer_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offer_items
     * const offer_items = await prisma.offer_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends offer_itemsUpdateManyArgs>(args: Prisma.SelectSubset<T, offer_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Offer_items and returns the data updated in the database.
     * @param {offer_itemsUpdateManyAndReturnArgs} args - Arguments to update many Offer_items.
     * @example
     * // Update many Offer_items
     * const offer_items = await prisma.offer_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Offer_items and only return the `id`
     * const offer_itemsWithIdOnly = await prisma.offer_items.updateManyAndReturn({
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
    updateManyAndReturn<T extends offer_itemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, offer_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$offer_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Offer_items.
     * @param {offer_itemsUpsertArgs} args - Arguments to update or create a Offer_items.
     * @example
     * // Update or create a Offer_items
     * const offer_items = await prisma.offer_items.upsert({
     *   create: {
     *     // ... data to create a Offer_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offer_items we want to update
     *   }
     * })
     */
    upsert<T extends offer_itemsUpsertArgs>(args: Prisma.SelectSubset<T, offer_itemsUpsertArgs<ExtArgs>>): Prisma.Prisma__offer_itemsClient<runtime.Types.Result.GetResult<Prisma.$offer_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Offer_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {offer_itemsCountArgs} args - Arguments to filter Offer_items to count.
     * @example
     * // Count the number of Offer_items
     * const count = await prisma.offer_items.count({
     *   where: {
     *     // ... the filter for the Offer_items we want to count
     *   }
     * })
    **/
    count<T extends offer_itemsCountArgs>(args?: Prisma.Subset<T, offer_itemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Offer_itemsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Offer_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Offer_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Offer_itemsAggregateArgs>(args: Prisma.Subset<T, Offer_itemsAggregateArgs>): Prisma.PrismaPromise<GetOffer_itemsAggregateType<T>>;
    /**
     * Group by Offer_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {offer_itemsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends offer_itemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: offer_itemsGroupByArgs['orderBy'];
    } : {
        orderBy?: offer_itemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, offer_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOffer_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the offer_items model
     */
    readonly fields: offer_itemsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for offer_items.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__offer_itemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    inventory_items_offer_items_inventory_item_id_game_idToinventory_items<T extends Prisma.inventory_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items<T extends Prisma.offer_items$inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.offer_items$inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items<T extends Prisma.offer_items$inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.offer_items$inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    listing_offers_offer_items_offer_idTolisting_offers<T extends Prisma.listing_offersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listing_offersDefaultArgs<ExtArgs>>): Prisma.Prisma__listing_offersClient<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    listing_offers_offer_items_offer_id_game_idTolisting_offers<T extends Prisma.listing_offersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listing_offersDefaultArgs<ExtArgs>>): Prisma.Prisma__listing_offersClient<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers<T extends Prisma.offer_items$listing_offers_offer_items_offer_id_offerer_store_idTolisting_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.offer_items$listing_offers_offer_items_offer_id_offerer_store_idTolisting_offersArgs<ExtArgs>>): Prisma.Prisma__listing_offersClient<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers<T extends Prisma.offer_items$listing_offers_offer_items_offer_id_offerer_user_idTolisting_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.offer_items$listing_offers_offer_items_offer_id_offerer_user_idTolisting_offersArgs<ExtArgs>>): Prisma.Prisma__listing_offersClient<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the offer_items model
 */
export interface offer_itemsFieldRefs {
    readonly id: Prisma.FieldRef<"offer_items", 'String'>;
    readonly offer_id: Prisma.FieldRef<"offer_items", 'String'>;
    readonly offerer_user_id: Prisma.FieldRef<"offer_items", 'String'>;
    readonly offerer_store_id: Prisma.FieldRef<"offer_items", 'String'>;
    readonly inventory_item_id: Prisma.FieldRef<"offer_items", 'String'>;
    readonly quantity: Prisma.FieldRef<"offer_items", 'Int'>;
    readonly notes: Prisma.FieldRef<"offer_items", 'String'>;
    readonly created_at: Prisma.FieldRef<"offer_items", 'DateTime'>;
    readonly game_id: Prisma.FieldRef<"offer_items", 'String'>;
}
/**
 * offer_items findUnique
 */
export type offer_itemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer_items
     */
    select?: Prisma.offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the offer_items
     */
    omit?: Prisma.offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.offer_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which offer_items to fetch.
     */
    where: Prisma.offer_itemsWhereUniqueInput;
};
/**
 * offer_items findUniqueOrThrow
 */
export type offer_itemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer_items
     */
    select?: Prisma.offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the offer_items
     */
    omit?: Prisma.offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.offer_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which offer_items to fetch.
     */
    where: Prisma.offer_itemsWhereUniqueInput;
};
/**
 * offer_items findFirst
 */
export type offer_itemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer_items
     */
    select?: Prisma.offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the offer_items
     */
    omit?: Prisma.offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.offer_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which offer_items to fetch.
     */
    where?: Prisma.offer_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of offer_items to fetch.
     */
    orderBy?: Prisma.offer_itemsOrderByWithRelationInput | Prisma.offer_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for offer_items.
     */
    cursor?: Prisma.offer_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` offer_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` offer_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of offer_items.
     */
    distinct?: Prisma.Offer_itemsScalarFieldEnum | Prisma.Offer_itemsScalarFieldEnum[];
};
/**
 * offer_items findFirstOrThrow
 */
export type offer_itemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer_items
     */
    select?: Prisma.offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the offer_items
     */
    omit?: Prisma.offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.offer_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which offer_items to fetch.
     */
    where?: Prisma.offer_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of offer_items to fetch.
     */
    orderBy?: Prisma.offer_itemsOrderByWithRelationInput | Prisma.offer_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for offer_items.
     */
    cursor?: Prisma.offer_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` offer_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` offer_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of offer_items.
     */
    distinct?: Prisma.Offer_itemsScalarFieldEnum | Prisma.Offer_itemsScalarFieldEnum[];
};
/**
 * offer_items findMany
 */
export type offer_itemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer_items
     */
    select?: Prisma.offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the offer_items
     */
    omit?: Prisma.offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.offer_itemsInclude<ExtArgs> | null;
    /**
     * Filter, which offer_items to fetch.
     */
    where?: Prisma.offer_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of offer_items to fetch.
     */
    orderBy?: Prisma.offer_itemsOrderByWithRelationInput | Prisma.offer_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing offer_items.
     */
    cursor?: Prisma.offer_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` offer_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` offer_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of offer_items.
     */
    distinct?: Prisma.Offer_itemsScalarFieldEnum | Prisma.Offer_itemsScalarFieldEnum[];
};
/**
 * offer_items create
 */
export type offer_itemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer_items
     */
    select?: Prisma.offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the offer_items
     */
    omit?: Prisma.offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.offer_itemsInclude<ExtArgs> | null;
    /**
     * The data needed to create a offer_items.
     */
    data: Prisma.XOR<Prisma.offer_itemsCreateInput, Prisma.offer_itemsUncheckedCreateInput>;
};
/**
 * offer_items createMany
 */
export type offer_itemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many offer_items.
     */
    data: Prisma.offer_itemsCreateManyInput | Prisma.offer_itemsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * offer_items createManyAndReturn
 */
export type offer_itemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer_items
     */
    select?: Prisma.offer_itemsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the offer_items
     */
    omit?: Prisma.offer_itemsOmit<ExtArgs> | null;
    /**
     * The data used to create many offer_items.
     */
    data: Prisma.offer_itemsCreateManyInput | Prisma.offer_itemsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.offer_itemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * offer_items update
 */
export type offer_itemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer_items
     */
    select?: Prisma.offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the offer_items
     */
    omit?: Prisma.offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.offer_itemsInclude<ExtArgs> | null;
    /**
     * The data needed to update a offer_items.
     */
    data: Prisma.XOR<Prisma.offer_itemsUpdateInput, Prisma.offer_itemsUncheckedUpdateInput>;
    /**
     * Choose, which offer_items to update.
     */
    where: Prisma.offer_itemsWhereUniqueInput;
};
/**
 * offer_items updateMany
 */
export type offer_itemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update offer_items.
     */
    data: Prisma.XOR<Prisma.offer_itemsUpdateManyMutationInput, Prisma.offer_itemsUncheckedUpdateManyInput>;
    /**
     * Filter which offer_items to update
     */
    where?: Prisma.offer_itemsWhereInput;
    /**
     * Limit how many offer_items to update.
     */
    limit?: number;
};
/**
 * offer_items updateManyAndReturn
 */
export type offer_itemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer_items
     */
    select?: Prisma.offer_itemsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the offer_items
     */
    omit?: Prisma.offer_itemsOmit<ExtArgs> | null;
    /**
     * The data used to update offer_items.
     */
    data: Prisma.XOR<Prisma.offer_itemsUpdateManyMutationInput, Prisma.offer_itemsUncheckedUpdateManyInput>;
    /**
     * Filter which offer_items to update
     */
    where?: Prisma.offer_itemsWhereInput;
    /**
     * Limit how many offer_items to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.offer_itemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * offer_items upsert
 */
export type offer_itemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer_items
     */
    select?: Prisma.offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the offer_items
     */
    omit?: Prisma.offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.offer_itemsInclude<ExtArgs> | null;
    /**
     * The filter to search for the offer_items to update in case it exists.
     */
    where: Prisma.offer_itemsWhereUniqueInput;
    /**
     * In case the offer_items found by the `where` argument doesn't exist, create a new offer_items with this data.
     */
    create: Prisma.XOR<Prisma.offer_itemsCreateInput, Prisma.offer_itemsUncheckedCreateInput>;
    /**
     * In case the offer_items was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.offer_itemsUpdateInput, Prisma.offer_itemsUncheckedUpdateInput>;
};
/**
 * offer_items delete
 */
export type offer_itemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer_items
     */
    select?: Prisma.offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the offer_items
     */
    omit?: Prisma.offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.offer_itemsInclude<ExtArgs> | null;
    /**
     * Filter which offer_items to delete.
     */
    where: Prisma.offer_itemsWhereUniqueInput;
};
/**
 * offer_items deleteMany
 */
export type offer_itemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which offer_items to delete
     */
    where?: Prisma.offer_itemsWhereInput;
    /**
     * Limit how many offer_items to delete.
     */
    limit?: number;
};
/**
 * offer_items.inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_items
 */
export type offer_items$inventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * offer_items.inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_items
 */
export type offer_items$inventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * offer_items.listing_offers_offer_items_offer_id_offerer_store_idTolisting_offers
 */
export type offer_items$listing_offers_offer_items_offer_id_offerer_store_idTolisting_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * offer_items.listing_offers_offer_items_offer_id_offerer_user_idTolisting_offers
 */
export type offer_items$listing_offers_offer_items_offer_id_offerer_user_idTolisting_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * offer_items without action
 */
export type offer_itemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the offer_items
     */
    select?: Prisma.offer_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the offer_items
     */
    omit?: Prisma.offer_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.offer_itemsInclude<ExtArgs> | null;
};
