import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model inventory_item_interests
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type inventory_item_interestsModel = runtime.Types.Result.DefaultSelection<Prisma.$inventory_item_interestsPayload>;
export type AggregateInventory_item_interests = {
    _count: Inventory_item_interestsCountAggregateOutputType | null;
    _min: Inventory_item_interestsMinAggregateOutputType | null;
    _max: Inventory_item_interestsMaxAggregateOutputType | null;
};
export type Inventory_item_interestsMinAggregateOutputType = {
    id: string | null;
    inventory_item_id: string | null;
    interested_user_id: string | null;
    interested_store_id: string | null;
    interest_type: string | null;
    message: string | null;
    status: string | null;
    converted_listing_offer_id: string | null;
    converted_wishlist_offer_id: string | null;
    converted_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    game_id: string | null;
};
export type Inventory_item_interestsMaxAggregateOutputType = {
    id: string | null;
    inventory_item_id: string | null;
    interested_user_id: string | null;
    interested_store_id: string | null;
    interest_type: string | null;
    message: string | null;
    status: string | null;
    converted_listing_offer_id: string | null;
    converted_wishlist_offer_id: string | null;
    converted_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    game_id: string | null;
};
export type Inventory_item_interestsCountAggregateOutputType = {
    id: number;
    inventory_item_id: number;
    interested_user_id: number;
    interested_store_id: number;
    interest_type: number;
    message: number;
    status: number;
    converted_listing_offer_id: number;
    converted_wishlist_offer_id: number;
    converted_at: number;
    created_at: number;
    updated_at: number;
    game_id: number;
    _all: number;
};
export type Inventory_item_interestsMinAggregateInputType = {
    id?: true;
    inventory_item_id?: true;
    interested_user_id?: true;
    interested_store_id?: true;
    interest_type?: true;
    message?: true;
    status?: true;
    converted_listing_offer_id?: true;
    converted_wishlist_offer_id?: true;
    converted_at?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
};
export type Inventory_item_interestsMaxAggregateInputType = {
    id?: true;
    inventory_item_id?: true;
    interested_user_id?: true;
    interested_store_id?: true;
    interest_type?: true;
    message?: true;
    status?: true;
    converted_listing_offer_id?: true;
    converted_wishlist_offer_id?: true;
    converted_at?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
};
export type Inventory_item_interestsCountAggregateInputType = {
    id?: true;
    inventory_item_id?: true;
    interested_user_id?: true;
    interested_store_id?: true;
    interest_type?: true;
    message?: true;
    status?: true;
    converted_listing_offer_id?: true;
    converted_wishlist_offer_id?: true;
    converted_at?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
    _all?: true;
};
export type Inventory_item_interestsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which inventory_item_interests to aggregate.
     */
    where?: Prisma.inventory_item_interestsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventory_item_interests to fetch.
     */
    orderBy?: Prisma.inventory_item_interestsOrderByWithRelationInput | Prisma.inventory_item_interestsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.inventory_item_interestsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventory_item_interests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventory_item_interests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned inventory_item_interests
    **/
    _count?: true | Inventory_item_interestsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Inventory_item_interestsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Inventory_item_interestsMaxAggregateInputType;
};
export type GetInventory_item_interestsAggregateType<T extends Inventory_item_interestsAggregateArgs> = {
    [P in keyof T & keyof AggregateInventory_item_interests]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInventory_item_interests[P]> : Prisma.GetScalarType<T[P], AggregateInventory_item_interests[P]>;
};
export type inventory_item_interestsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventory_item_interestsWhereInput;
    orderBy?: Prisma.inventory_item_interestsOrderByWithAggregationInput | Prisma.inventory_item_interestsOrderByWithAggregationInput[];
    by: Prisma.Inventory_item_interestsScalarFieldEnum[] | Prisma.Inventory_item_interestsScalarFieldEnum;
    having?: Prisma.inventory_item_interestsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Inventory_item_interestsCountAggregateInputType | true;
    _min?: Inventory_item_interestsMinAggregateInputType;
    _max?: Inventory_item_interestsMaxAggregateInputType;
};
export type Inventory_item_interestsGroupByOutputType = {
    id: string;
    inventory_item_id: string;
    interested_user_id: string | null;
    interested_store_id: string | null;
    interest_type: string;
    message: string | null;
    status: string;
    converted_listing_offer_id: string | null;
    converted_wishlist_offer_id: string | null;
    converted_at: Date | null;
    created_at: Date;
    updated_at: Date;
    game_id: string;
    _count: Inventory_item_interestsCountAggregateOutputType | null;
    _min: Inventory_item_interestsMinAggregateOutputType | null;
    _max: Inventory_item_interestsMaxAggregateOutputType | null;
};
export type GetInventory_item_interestsGroupByPayload<T extends inventory_item_interestsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Inventory_item_interestsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Inventory_item_interestsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Inventory_item_interestsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Inventory_item_interestsGroupByOutputType[P]>;
}>>;
export type inventory_item_interestsWhereInput = {
    AND?: Prisma.inventory_item_interestsWhereInput | Prisma.inventory_item_interestsWhereInput[];
    OR?: Prisma.inventory_item_interestsWhereInput[];
    NOT?: Prisma.inventory_item_interestsWhereInput | Prisma.inventory_item_interestsWhereInput[];
    id?: Prisma.UuidFilter<"inventory_item_interests"> | string;
    inventory_item_id?: Prisma.UuidFilter<"inventory_item_interests"> | string;
    interested_user_id?: Prisma.UuidNullableFilter<"inventory_item_interests"> | string | null;
    interested_store_id?: Prisma.UuidNullableFilter<"inventory_item_interests"> | string | null;
    interest_type?: Prisma.StringFilter<"inventory_item_interests"> | string;
    message?: Prisma.StringNullableFilter<"inventory_item_interests"> | string | null;
    status?: Prisma.StringFilter<"inventory_item_interests"> | string;
    converted_listing_offer_id?: Prisma.UuidNullableFilter<"inventory_item_interests"> | string | null;
    converted_wishlist_offer_id?: Prisma.UuidNullableFilter<"inventory_item_interests"> | string | null;
    converted_at?: Prisma.DateTimeNullableFilter<"inventory_item_interests"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"inventory_item_interests"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"inventory_item_interests"> | Date | string;
    game_id?: Prisma.UuidFilter<"inventory_item_interests"> | string;
    inventory_items?: Prisma.XOR<Prisma.Inventory_itemsScalarRelationFilter, Prisma.inventory_itemsWhereInput>;
    listing_offers?: Prisma.XOR<Prisma.Listing_offersNullableScalarRelationFilter, Prisma.listing_offersWhereInput> | null;
    stores?: Prisma.XOR<Prisma.StoresNullableScalarRelationFilter, Prisma.storesWhereInput> | null;
    store_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    user_profiles?: Prisma.XOR<Prisma.User_profilesNullableScalarRelationFilter, Prisma.user_profilesWhereInput> | null;
    wishlist_offers?: Prisma.XOR<Prisma.Wishlist_offersNullableScalarRelationFilter, Prisma.wishlist_offersWhereInput> | null;
};
export type inventory_item_interestsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    interested_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    interested_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    interest_type?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    converted_listing_offer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    converted_wishlist_offer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    converted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    inventory_items?: Prisma.inventory_itemsOrderByWithRelationInput;
    listing_offers?: Prisma.listing_offersOrderByWithRelationInput;
    stores?: Prisma.storesOrderByWithRelationInput;
    store_games?: Prisma.store_gamesOrderByWithRelationInput;
    user_profiles?: Prisma.user_profilesOrderByWithRelationInput;
    wishlist_offers?: Prisma.wishlist_offersOrderByWithRelationInput;
};
export type inventory_item_interestsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    inventory_item_id_interested_store_id?: Prisma.inventory_item_interestsInventory_item_idInterested_store_idCompoundUniqueInput;
    inventory_item_id_interested_user_id?: Prisma.inventory_item_interestsInventory_item_idInterested_user_idCompoundUniqueInput;
    AND?: Prisma.inventory_item_interestsWhereInput | Prisma.inventory_item_interestsWhereInput[];
    OR?: Prisma.inventory_item_interestsWhereInput[];
    NOT?: Prisma.inventory_item_interestsWhereInput | Prisma.inventory_item_interestsWhereInput[];
    inventory_item_id?: Prisma.UuidFilter<"inventory_item_interests"> | string;
    interested_user_id?: Prisma.UuidNullableFilter<"inventory_item_interests"> | string | null;
    interested_store_id?: Prisma.UuidNullableFilter<"inventory_item_interests"> | string | null;
    interest_type?: Prisma.StringFilter<"inventory_item_interests"> | string;
    message?: Prisma.StringNullableFilter<"inventory_item_interests"> | string | null;
    status?: Prisma.StringFilter<"inventory_item_interests"> | string;
    converted_listing_offer_id?: Prisma.UuidNullableFilter<"inventory_item_interests"> | string | null;
    converted_wishlist_offer_id?: Prisma.UuidNullableFilter<"inventory_item_interests"> | string | null;
    converted_at?: Prisma.DateTimeNullableFilter<"inventory_item_interests"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"inventory_item_interests"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"inventory_item_interests"> | Date | string;
    game_id?: Prisma.UuidFilter<"inventory_item_interests"> | string;
    inventory_items?: Prisma.XOR<Prisma.Inventory_itemsScalarRelationFilter, Prisma.inventory_itemsWhereInput>;
    listing_offers?: Prisma.XOR<Prisma.Listing_offersNullableScalarRelationFilter, Prisma.listing_offersWhereInput> | null;
    stores?: Prisma.XOR<Prisma.StoresNullableScalarRelationFilter, Prisma.storesWhereInput> | null;
    store_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    user_profiles?: Prisma.XOR<Prisma.User_profilesNullableScalarRelationFilter, Prisma.user_profilesWhereInput> | null;
    wishlist_offers?: Prisma.XOR<Prisma.Wishlist_offersNullableScalarRelationFilter, Prisma.wishlist_offersWhereInput> | null;
}, "id" | "inventory_item_id_interested_store_id" | "inventory_item_id_interested_user_id">;
export type inventory_item_interestsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    interested_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    interested_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    interest_type?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    converted_listing_offer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    converted_wishlist_offer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    converted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    _count?: Prisma.inventory_item_interestsCountOrderByAggregateInput;
    _max?: Prisma.inventory_item_interestsMaxOrderByAggregateInput;
    _min?: Prisma.inventory_item_interestsMinOrderByAggregateInput;
};
export type inventory_item_interestsScalarWhereWithAggregatesInput = {
    AND?: Prisma.inventory_item_interestsScalarWhereWithAggregatesInput | Prisma.inventory_item_interestsScalarWhereWithAggregatesInput[];
    OR?: Prisma.inventory_item_interestsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.inventory_item_interestsScalarWhereWithAggregatesInput | Prisma.inventory_item_interestsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"inventory_item_interests"> | string;
    inventory_item_id?: Prisma.UuidWithAggregatesFilter<"inventory_item_interests"> | string;
    interested_user_id?: Prisma.UuidNullableWithAggregatesFilter<"inventory_item_interests"> | string | null;
    interested_store_id?: Prisma.UuidNullableWithAggregatesFilter<"inventory_item_interests"> | string | null;
    interest_type?: Prisma.StringWithAggregatesFilter<"inventory_item_interests"> | string;
    message?: Prisma.StringNullableWithAggregatesFilter<"inventory_item_interests"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"inventory_item_interests"> | string;
    converted_listing_offer_id?: Prisma.UuidNullableWithAggregatesFilter<"inventory_item_interests"> | string | null;
    converted_wishlist_offer_id?: Prisma.UuidNullableWithAggregatesFilter<"inventory_item_interests"> | string | null;
    converted_at?: Prisma.DateTimeNullableWithAggregatesFilter<"inventory_item_interests"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"inventory_item_interests"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"inventory_item_interests"> | Date | string;
    game_id?: Prisma.UuidWithAggregatesFilter<"inventory_item_interests"> | string;
};
export type inventory_item_interestsCreateInput = {
    id?: string;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_items: Prisma.inventory_itemsCreateNestedOneWithoutInventory_item_interestsInput;
    listing_offers?: Prisma.listing_offersCreateNestedOneWithoutInventory_item_interestsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_item_interestsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_item_interestsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_item_interestsInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutInventory_item_interestsInput;
};
export type inventory_item_interestsUncheckedCreateInput = {
    id?: string;
    inventory_item_id: string;
    interested_user_id?: string | null;
    interested_store_id?: string | null;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_listing_offer_id?: string | null;
    converted_wishlist_offer_id?: string | null;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type inventory_item_interestsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutInventory_item_interestsNestedInput;
    listing_offers?: Prisma.listing_offersUpdateOneWithoutInventory_item_interestsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_item_interestsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_item_interestsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_item_interestsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutInventory_item_interestsNestedInput;
};
export type inventory_item_interestsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    interested_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interested_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_listing_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type inventory_item_interestsCreateManyInput = {
    id?: string;
    inventory_item_id: string;
    interested_user_id?: string | null;
    interested_store_id?: string | null;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_listing_offer_id?: string | null;
    converted_wishlist_offer_id?: string | null;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type inventory_item_interestsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventory_item_interestsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    interested_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interested_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_listing_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type inventory_item_interestsInventory_item_idInterested_store_idCompoundUniqueInput = {
    inventory_item_id: string;
    interested_store_id: string;
};
export type inventory_item_interestsInventory_item_idInterested_user_idCompoundUniqueInput = {
    inventory_item_id: string;
    interested_user_id: string;
};
export type inventory_item_interestsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    interested_user_id?: Prisma.SortOrder;
    interested_store_id?: Prisma.SortOrder;
    interest_type?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    converted_listing_offer_id?: Prisma.SortOrder;
    converted_wishlist_offer_id?: Prisma.SortOrder;
    converted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type inventory_item_interestsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    interested_user_id?: Prisma.SortOrder;
    interested_store_id?: Prisma.SortOrder;
    interest_type?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    converted_listing_offer_id?: Prisma.SortOrder;
    converted_wishlist_offer_id?: Prisma.SortOrder;
    converted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type inventory_item_interestsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    interested_user_id?: Prisma.SortOrder;
    interested_store_id?: Prisma.SortOrder;
    interest_type?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    converted_listing_offer_id?: Prisma.SortOrder;
    converted_wishlist_offer_id?: Prisma.SortOrder;
    converted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type Inventory_item_interestsListRelationFilter = {
    every?: Prisma.inventory_item_interestsWhereInput;
    some?: Prisma.inventory_item_interestsWhereInput;
    none?: Prisma.inventory_item_interestsWhereInput;
};
export type inventory_item_interestsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutInventory_itemsInput, Prisma.inventory_item_interestsUncheckedCreateWithoutInventory_itemsInput> | Prisma.inventory_item_interestsCreateWithoutInventory_itemsInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutInventory_itemsInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutInventory_itemsInput | Prisma.inventory_item_interestsCreateOrConnectWithoutInventory_itemsInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyInventory_itemsInputEnvelope;
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
};
export type inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutInventory_itemsInput, Prisma.inventory_item_interestsUncheckedCreateWithoutInventory_itemsInput> | Prisma.inventory_item_interestsCreateWithoutInventory_itemsInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutInventory_itemsInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutInventory_itemsInput | Prisma.inventory_item_interestsCreateOrConnectWithoutInventory_itemsInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyInventory_itemsInputEnvelope;
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
};
export type inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutInventory_itemsInput, Prisma.inventory_item_interestsUncheckedCreateWithoutInventory_itemsInput> | Prisma.inventory_item_interestsCreateWithoutInventory_itemsInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutInventory_itemsInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutInventory_itemsInput | Prisma.inventory_item_interestsCreateOrConnectWithoutInventory_itemsInput[];
    upsert?: Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutInventory_itemsInput | Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutInventory_itemsInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyInventory_itemsInputEnvelope;
    set?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    disconnect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    delete?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    update?: Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutInventory_itemsInput | Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutInventory_itemsInput[];
    updateMany?: Prisma.inventory_item_interestsUpdateManyWithWhereWithoutInventory_itemsInput | Prisma.inventory_item_interestsUpdateManyWithWhereWithoutInventory_itemsInput[];
    deleteMany?: Prisma.inventory_item_interestsScalarWhereInput | Prisma.inventory_item_interestsScalarWhereInput[];
};
export type inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutInventory_itemsInput, Prisma.inventory_item_interestsUncheckedCreateWithoutInventory_itemsInput> | Prisma.inventory_item_interestsCreateWithoutInventory_itemsInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutInventory_itemsInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutInventory_itemsInput | Prisma.inventory_item_interestsCreateOrConnectWithoutInventory_itemsInput[];
    upsert?: Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutInventory_itemsInput | Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutInventory_itemsInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyInventory_itemsInputEnvelope;
    set?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    disconnect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    delete?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    update?: Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutInventory_itemsInput | Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutInventory_itemsInput[];
    updateMany?: Prisma.inventory_item_interestsUpdateManyWithWhereWithoutInventory_itemsInput | Prisma.inventory_item_interestsUpdateManyWithWhereWithoutInventory_itemsInput[];
    deleteMany?: Prisma.inventory_item_interestsScalarWhereInput | Prisma.inventory_item_interestsScalarWhereInput[];
};
export type inventory_item_interestsCreateNestedManyWithoutListing_offersInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutListing_offersInput, Prisma.inventory_item_interestsUncheckedCreateWithoutListing_offersInput> | Prisma.inventory_item_interestsCreateWithoutListing_offersInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutListing_offersInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutListing_offersInput | Prisma.inventory_item_interestsCreateOrConnectWithoutListing_offersInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyListing_offersInputEnvelope;
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
};
export type inventory_item_interestsUncheckedCreateNestedManyWithoutListing_offersInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutListing_offersInput, Prisma.inventory_item_interestsUncheckedCreateWithoutListing_offersInput> | Prisma.inventory_item_interestsCreateWithoutListing_offersInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutListing_offersInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutListing_offersInput | Prisma.inventory_item_interestsCreateOrConnectWithoutListing_offersInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyListing_offersInputEnvelope;
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
};
export type inventory_item_interestsUpdateManyWithoutListing_offersNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutListing_offersInput, Prisma.inventory_item_interestsUncheckedCreateWithoutListing_offersInput> | Prisma.inventory_item_interestsCreateWithoutListing_offersInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutListing_offersInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutListing_offersInput | Prisma.inventory_item_interestsCreateOrConnectWithoutListing_offersInput[];
    upsert?: Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutListing_offersInput | Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutListing_offersInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyListing_offersInputEnvelope;
    set?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    disconnect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    delete?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    update?: Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutListing_offersInput | Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutListing_offersInput[];
    updateMany?: Prisma.inventory_item_interestsUpdateManyWithWhereWithoutListing_offersInput | Prisma.inventory_item_interestsUpdateManyWithWhereWithoutListing_offersInput[];
    deleteMany?: Prisma.inventory_item_interestsScalarWhereInput | Prisma.inventory_item_interestsScalarWhereInput[];
};
export type inventory_item_interestsUncheckedUpdateManyWithoutListing_offersNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutListing_offersInput, Prisma.inventory_item_interestsUncheckedCreateWithoutListing_offersInput> | Prisma.inventory_item_interestsCreateWithoutListing_offersInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutListing_offersInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutListing_offersInput | Prisma.inventory_item_interestsCreateOrConnectWithoutListing_offersInput[];
    upsert?: Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutListing_offersInput | Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutListing_offersInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyListing_offersInputEnvelope;
    set?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    disconnect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    delete?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    update?: Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutListing_offersInput | Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutListing_offersInput[];
    updateMany?: Prisma.inventory_item_interestsUpdateManyWithWhereWithoutListing_offersInput | Prisma.inventory_item_interestsUpdateManyWithWhereWithoutListing_offersInput[];
    deleteMany?: Prisma.inventory_item_interestsScalarWhereInput | Prisma.inventory_item_interestsScalarWhereInput[];
};
export type inventory_item_interestsCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutStoresInput, Prisma.inventory_item_interestsUncheckedCreateWithoutStoresInput> | Prisma.inventory_item_interestsCreateWithoutStoresInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutStoresInput | Prisma.inventory_item_interestsCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyStoresInputEnvelope;
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
};
export type inventory_item_interestsUncheckedCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutStoresInput, Prisma.inventory_item_interestsUncheckedCreateWithoutStoresInput> | Prisma.inventory_item_interestsCreateWithoutStoresInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutStoresInput | Prisma.inventory_item_interestsCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyStoresInputEnvelope;
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
};
export type inventory_item_interestsUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutStoresInput, Prisma.inventory_item_interestsUncheckedCreateWithoutStoresInput> | Prisma.inventory_item_interestsCreateWithoutStoresInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutStoresInput | Prisma.inventory_item_interestsCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutStoresInput | Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyStoresInputEnvelope;
    set?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    disconnect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    delete?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    update?: Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutStoresInput | Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.inventory_item_interestsUpdateManyWithWhereWithoutStoresInput | Prisma.inventory_item_interestsUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.inventory_item_interestsScalarWhereInput | Prisma.inventory_item_interestsScalarWhereInput[];
};
export type inventory_item_interestsUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutStoresInput, Prisma.inventory_item_interestsUncheckedCreateWithoutStoresInput> | Prisma.inventory_item_interestsCreateWithoutStoresInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutStoresInput | Prisma.inventory_item_interestsCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutStoresInput | Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyStoresInputEnvelope;
    set?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    disconnect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    delete?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    update?: Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutStoresInput | Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.inventory_item_interestsUpdateManyWithWhereWithoutStoresInput | Prisma.inventory_item_interestsUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.inventory_item_interestsScalarWhereInput | Prisma.inventory_item_interestsScalarWhereInput[];
};
export type inventory_item_interestsCreateNestedManyWithoutUser_profilesInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutUser_profilesInput, Prisma.inventory_item_interestsUncheckedCreateWithoutUser_profilesInput> | Prisma.inventory_item_interestsCreateWithoutUser_profilesInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutUser_profilesInput | Prisma.inventory_item_interestsCreateOrConnectWithoutUser_profilesInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyUser_profilesInputEnvelope;
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
};
export type inventory_item_interestsUncheckedCreateNestedManyWithoutUser_profilesInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutUser_profilesInput, Prisma.inventory_item_interestsUncheckedCreateWithoutUser_profilesInput> | Prisma.inventory_item_interestsCreateWithoutUser_profilesInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutUser_profilesInput | Prisma.inventory_item_interestsCreateOrConnectWithoutUser_profilesInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyUser_profilesInputEnvelope;
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
};
export type inventory_item_interestsUpdateManyWithoutUser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutUser_profilesInput, Prisma.inventory_item_interestsUncheckedCreateWithoutUser_profilesInput> | Prisma.inventory_item_interestsCreateWithoutUser_profilesInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutUser_profilesInput | Prisma.inventory_item_interestsCreateOrConnectWithoutUser_profilesInput[];
    upsert?: Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutUser_profilesInput | Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutUser_profilesInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyUser_profilesInputEnvelope;
    set?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    disconnect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    delete?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    update?: Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutUser_profilesInput | Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutUser_profilesInput[];
    updateMany?: Prisma.inventory_item_interestsUpdateManyWithWhereWithoutUser_profilesInput | Prisma.inventory_item_interestsUpdateManyWithWhereWithoutUser_profilesInput[];
    deleteMany?: Prisma.inventory_item_interestsScalarWhereInput | Prisma.inventory_item_interestsScalarWhereInput[];
};
export type inventory_item_interestsUncheckedUpdateManyWithoutUser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutUser_profilesInput, Prisma.inventory_item_interestsUncheckedCreateWithoutUser_profilesInput> | Prisma.inventory_item_interestsCreateWithoutUser_profilesInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutUser_profilesInput | Prisma.inventory_item_interestsCreateOrConnectWithoutUser_profilesInput[];
    upsert?: Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutUser_profilesInput | Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutUser_profilesInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyUser_profilesInputEnvelope;
    set?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    disconnect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    delete?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    update?: Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutUser_profilesInput | Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutUser_profilesInput[];
    updateMany?: Prisma.inventory_item_interestsUpdateManyWithWhereWithoutUser_profilesInput | Prisma.inventory_item_interestsUpdateManyWithWhereWithoutUser_profilesInput[];
    deleteMany?: Prisma.inventory_item_interestsScalarWhereInput | Prisma.inventory_item_interestsScalarWhereInput[];
};
export type inventory_item_interestsCreateNestedManyWithoutWishlist_offersInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutWishlist_offersInput, Prisma.inventory_item_interestsUncheckedCreateWithoutWishlist_offersInput> | Prisma.inventory_item_interestsCreateWithoutWishlist_offersInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutWishlist_offersInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutWishlist_offersInput | Prisma.inventory_item_interestsCreateOrConnectWithoutWishlist_offersInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyWishlist_offersInputEnvelope;
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
};
export type inventory_item_interestsUncheckedCreateNestedManyWithoutWishlist_offersInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutWishlist_offersInput, Prisma.inventory_item_interestsUncheckedCreateWithoutWishlist_offersInput> | Prisma.inventory_item_interestsCreateWithoutWishlist_offersInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutWishlist_offersInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutWishlist_offersInput | Prisma.inventory_item_interestsCreateOrConnectWithoutWishlist_offersInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyWishlist_offersInputEnvelope;
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
};
export type inventory_item_interestsUpdateManyWithoutWishlist_offersNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutWishlist_offersInput, Prisma.inventory_item_interestsUncheckedCreateWithoutWishlist_offersInput> | Prisma.inventory_item_interestsCreateWithoutWishlist_offersInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutWishlist_offersInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutWishlist_offersInput | Prisma.inventory_item_interestsCreateOrConnectWithoutWishlist_offersInput[];
    upsert?: Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutWishlist_offersInput | Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutWishlist_offersInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyWishlist_offersInputEnvelope;
    set?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    disconnect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    delete?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    update?: Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutWishlist_offersInput | Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutWishlist_offersInput[];
    updateMany?: Prisma.inventory_item_interestsUpdateManyWithWhereWithoutWishlist_offersInput | Prisma.inventory_item_interestsUpdateManyWithWhereWithoutWishlist_offersInput[];
    deleteMany?: Prisma.inventory_item_interestsScalarWhereInput | Prisma.inventory_item_interestsScalarWhereInput[];
};
export type inventory_item_interestsUncheckedUpdateManyWithoutWishlist_offersNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutWishlist_offersInput, Prisma.inventory_item_interestsUncheckedCreateWithoutWishlist_offersInput> | Prisma.inventory_item_interestsCreateWithoutWishlist_offersInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutWishlist_offersInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutWishlist_offersInput | Prisma.inventory_item_interestsCreateOrConnectWithoutWishlist_offersInput[];
    upsert?: Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutWishlist_offersInput | Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutWishlist_offersInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyWishlist_offersInputEnvelope;
    set?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    disconnect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    delete?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    update?: Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutWishlist_offersInput | Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutWishlist_offersInput[];
    updateMany?: Prisma.inventory_item_interestsUpdateManyWithWhereWithoutWishlist_offersInput | Prisma.inventory_item_interestsUpdateManyWithWhereWithoutWishlist_offersInput[];
    deleteMany?: Prisma.inventory_item_interestsScalarWhereInput | Prisma.inventory_item_interestsScalarWhereInput[];
};
export type inventory_item_interestsCreateNestedManyWithoutStore_gamesInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutStore_gamesInput, Prisma.inventory_item_interestsUncheckedCreateWithoutStore_gamesInput> | Prisma.inventory_item_interestsCreateWithoutStore_gamesInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutStore_gamesInput | Prisma.inventory_item_interestsCreateOrConnectWithoutStore_gamesInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyStore_gamesInputEnvelope;
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
};
export type inventory_item_interestsUncheckedCreateNestedManyWithoutStore_gamesInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutStore_gamesInput, Prisma.inventory_item_interestsUncheckedCreateWithoutStore_gamesInput> | Prisma.inventory_item_interestsCreateWithoutStore_gamesInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutStore_gamesInput | Prisma.inventory_item_interestsCreateOrConnectWithoutStore_gamesInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyStore_gamesInputEnvelope;
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
};
export type inventory_item_interestsUpdateManyWithoutStore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutStore_gamesInput, Prisma.inventory_item_interestsUncheckedCreateWithoutStore_gamesInput> | Prisma.inventory_item_interestsCreateWithoutStore_gamesInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutStore_gamesInput | Prisma.inventory_item_interestsCreateOrConnectWithoutStore_gamesInput[];
    upsert?: Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutStore_gamesInput | Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutStore_gamesInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyStore_gamesInputEnvelope;
    set?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    disconnect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    delete?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    update?: Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutStore_gamesInput | Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutStore_gamesInput[];
    updateMany?: Prisma.inventory_item_interestsUpdateManyWithWhereWithoutStore_gamesInput | Prisma.inventory_item_interestsUpdateManyWithWhereWithoutStore_gamesInput[];
    deleteMany?: Prisma.inventory_item_interestsScalarWhereInput | Prisma.inventory_item_interestsScalarWhereInput[];
};
export type inventory_item_interestsUncheckedUpdateManyWithoutStore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutStore_gamesInput, Prisma.inventory_item_interestsUncheckedCreateWithoutStore_gamesInput> | Prisma.inventory_item_interestsCreateWithoutStore_gamesInput[] | Prisma.inventory_item_interestsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.inventory_item_interestsCreateOrConnectWithoutStore_gamesInput | Prisma.inventory_item_interestsCreateOrConnectWithoutStore_gamesInput[];
    upsert?: Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutStore_gamesInput | Prisma.inventory_item_interestsUpsertWithWhereUniqueWithoutStore_gamesInput[];
    createMany?: Prisma.inventory_item_interestsCreateManyStore_gamesInputEnvelope;
    set?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    disconnect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    delete?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    connect?: Prisma.inventory_item_interestsWhereUniqueInput | Prisma.inventory_item_interestsWhereUniqueInput[];
    update?: Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutStore_gamesInput | Prisma.inventory_item_interestsUpdateWithWhereUniqueWithoutStore_gamesInput[];
    updateMany?: Prisma.inventory_item_interestsUpdateManyWithWhereWithoutStore_gamesInput | Prisma.inventory_item_interestsUpdateManyWithWhereWithoutStore_gamesInput[];
    deleteMany?: Prisma.inventory_item_interestsScalarWhereInput | Prisma.inventory_item_interestsScalarWhereInput[];
};
export type inventory_item_interestsCreateWithoutInventory_itemsInput = {
    id?: string;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    listing_offers?: Prisma.listing_offersCreateNestedOneWithoutInventory_item_interestsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_item_interestsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_item_interestsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_item_interestsInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutInventory_item_interestsInput;
};
export type inventory_item_interestsUncheckedCreateWithoutInventory_itemsInput = {
    id?: string;
    interested_user_id?: string | null;
    interested_store_id?: string | null;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_listing_offer_id?: string | null;
    converted_wishlist_offer_id?: string | null;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type inventory_item_interestsCreateOrConnectWithoutInventory_itemsInput = {
    where: Prisma.inventory_item_interestsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutInventory_itemsInput, Prisma.inventory_item_interestsUncheckedCreateWithoutInventory_itemsInput>;
};
export type inventory_item_interestsCreateManyInventory_itemsInputEnvelope = {
    data: Prisma.inventory_item_interestsCreateManyInventory_itemsInput | Prisma.inventory_item_interestsCreateManyInventory_itemsInput[];
    skipDuplicates?: boolean;
};
export type inventory_item_interestsUpsertWithWhereUniqueWithoutInventory_itemsInput = {
    where: Prisma.inventory_item_interestsWhereUniqueInput;
    update: Prisma.XOR<Prisma.inventory_item_interestsUpdateWithoutInventory_itemsInput, Prisma.inventory_item_interestsUncheckedUpdateWithoutInventory_itemsInput>;
    create: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutInventory_itemsInput, Prisma.inventory_item_interestsUncheckedCreateWithoutInventory_itemsInput>;
};
export type inventory_item_interestsUpdateWithWhereUniqueWithoutInventory_itemsInput = {
    where: Prisma.inventory_item_interestsWhereUniqueInput;
    data: Prisma.XOR<Prisma.inventory_item_interestsUpdateWithoutInventory_itemsInput, Prisma.inventory_item_interestsUncheckedUpdateWithoutInventory_itemsInput>;
};
export type inventory_item_interestsUpdateManyWithWhereWithoutInventory_itemsInput = {
    where: Prisma.inventory_item_interestsScalarWhereInput;
    data: Prisma.XOR<Prisma.inventory_item_interestsUpdateManyMutationInput, Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsInput>;
};
export type inventory_item_interestsScalarWhereInput = {
    AND?: Prisma.inventory_item_interestsScalarWhereInput | Prisma.inventory_item_interestsScalarWhereInput[];
    OR?: Prisma.inventory_item_interestsScalarWhereInput[];
    NOT?: Prisma.inventory_item_interestsScalarWhereInput | Prisma.inventory_item_interestsScalarWhereInput[];
    id?: Prisma.UuidFilter<"inventory_item_interests"> | string;
    inventory_item_id?: Prisma.UuidFilter<"inventory_item_interests"> | string;
    interested_user_id?: Prisma.UuidNullableFilter<"inventory_item_interests"> | string | null;
    interested_store_id?: Prisma.UuidNullableFilter<"inventory_item_interests"> | string | null;
    interest_type?: Prisma.StringFilter<"inventory_item_interests"> | string;
    message?: Prisma.StringNullableFilter<"inventory_item_interests"> | string | null;
    status?: Prisma.StringFilter<"inventory_item_interests"> | string;
    converted_listing_offer_id?: Prisma.UuidNullableFilter<"inventory_item_interests"> | string | null;
    converted_wishlist_offer_id?: Prisma.UuidNullableFilter<"inventory_item_interests"> | string | null;
    converted_at?: Prisma.DateTimeNullableFilter<"inventory_item_interests"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"inventory_item_interests"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"inventory_item_interests"> | Date | string;
    game_id?: Prisma.UuidFilter<"inventory_item_interests"> | string;
};
export type inventory_item_interestsCreateWithoutListing_offersInput = {
    id?: string;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_items: Prisma.inventory_itemsCreateNestedOneWithoutInventory_item_interestsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_item_interestsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_item_interestsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_item_interestsInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutInventory_item_interestsInput;
};
export type inventory_item_interestsUncheckedCreateWithoutListing_offersInput = {
    id?: string;
    inventory_item_id: string;
    interested_user_id?: string | null;
    interested_store_id?: string | null;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_wishlist_offer_id?: string | null;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type inventory_item_interestsCreateOrConnectWithoutListing_offersInput = {
    where: Prisma.inventory_item_interestsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutListing_offersInput, Prisma.inventory_item_interestsUncheckedCreateWithoutListing_offersInput>;
};
export type inventory_item_interestsCreateManyListing_offersInputEnvelope = {
    data: Prisma.inventory_item_interestsCreateManyListing_offersInput | Prisma.inventory_item_interestsCreateManyListing_offersInput[];
    skipDuplicates?: boolean;
};
export type inventory_item_interestsUpsertWithWhereUniqueWithoutListing_offersInput = {
    where: Prisma.inventory_item_interestsWhereUniqueInput;
    update: Prisma.XOR<Prisma.inventory_item_interestsUpdateWithoutListing_offersInput, Prisma.inventory_item_interestsUncheckedUpdateWithoutListing_offersInput>;
    create: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutListing_offersInput, Prisma.inventory_item_interestsUncheckedCreateWithoutListing_offersInput>;
};
export type inventory_item_interestsUpdateWithWhereUniqueWithoutListing_offersInput = {
    where: Prisma.inventory_item_interestsWhereUniqueInput;
    data: Prisma.XOR<Prisma.inventory_item_interestsUpdateWithoutListing_offersInput, Prisma.inventory_item_interestsUncheckedUpdateWithoutListing_offersInput>;
};
export type inventory_item_interestsUpdateManyWithWhereWithoutListing_offersInput = {
    where: Prisma.inventory_item_interestsScalarWhereInput;
    data: Prisma.XOR<Prisma.inventory_item_interestsUpdateManyMutationInput, Prisma.inventory_item_interestsUncheckedUpdateManyWithoutListing_offersInput>;
};
export type inventory_item_interestsCreateWithoutStoresInput = {
    id?: string;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_items: Prisma.inventory_itemsCreateNestedOneWithoutInventory_item_interestsInput;
    listing_offers?: Prisma.listing_offersCreateNestedOneWithoutInventory_item_interestsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_item_interestsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_item_interestsInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutInventory_item_interestsInput;
};
export type inventory_item_interestsUncheckedCreateWithoutStoresInput = {
    id?: string;
    inventory_item_id: string;
    interested_user_id?: string | null;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_listing_offer_id?: string | null;
    converted_wishlist_offer_id?: string | null;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type inventory_item_interestsCreateOrConnectWithoutStoresInput = {
    where: Prisma.inventory_item_interestsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutStoresInput, Prisma.inventory_item_interestsUncheckedCreateWithoutStoresInput>;
};
export type inventory_item_interestsCreateManyStoresInputEnvelope = {
    data: Prisma.inventory_item_interestsCreateManyStoresInput | Prisma.inventory_item_interestsCreateManyStoresInput[];
    skipDuplicates?: boolean;
};
export type inventory_item_interestsUpsertWithWhereUniqueWithoutStoresInput = {
    where: Prisma.inventory_item_interestsWhereUniqueInput;
    update: Prisma.XOR<Prisma.inventory_item_interestsUpdateWithoutStoresInput, Prisma.inventory_item_interestsUncheckedUpdateWithoutStoresInput>;
    create: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutStoresInput, Prisma.inventory_item_interestsUncheckedCreateWithoutStoresInput>;
};
export type inventory_item_interestsUpdateWithWhereUniqueWithoutStoresInput = {
    where: Prisma.inventory_item_interestsWhereUniqueInput;
    data: Prisma.XOR<Prisma.inventory_item_interestsUpdateWithoutStoresInput, Prisma.inventory_item_interestsUncheckedUpdateWithoutStoresInput>;
};
export type inventory_item_interestsUpdateManyWithWhereWithoutStoresInput = {
    where: Prisma.inventory_item_interestsScalarWhereInput;
    data: Prisma.XOR<Prisma.inventory_item_interestsUpdateManyMutationInput, Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStoresInput>;
};
export type inventory_item_interestsCreateWithoutUser_profilesInput = {
    id?: string;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_items: Prisma.inventory_itemsCreateNestedOneWithoutInventory_item_interestsInput;
    listing_offers?: Prisma.listing_offersCreateNestedOneWithoutInventory_item_interestsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_item_interestsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_item_interestsInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutInventory_item_interestsInput;
};
export type inventory_item_interestsUncheckedCreateWithoutUser_profilesInput = {
    id?: string;
    inventory_item_id: string;
    interested_store_id?: string | null;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_listing_offer_id?: string | null;
    converted_wishlist_offer_id?: string | null;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type inventory_item_interestsCreateOrConnectWithoutUser_profilesInput = {
    where: Prisma.inventory_item_interestsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutUser_profilesInput, Prisma.inventory_item_interestsUncheckedCreateWithoutUser_profilesInput>;
};
export type inventory_item_interestsCreateManyUser_profilesInputEnvelope = {
    data: Prisma.inventory_item_interestsCreateManyUser_profilesInput | Prisma.inventory_item_interestsCreateManyUser_profilesInput[];
    skipDuplicates?: boolean;
};
export type inventory_item_interestsUpsertWithWhereUniqueWithoutUser_profilesInput = {
    where: Prisma.inventory_item_interestsWhereUniqueInput;
    update: Prisma.XOR<Prisma.inventory_item_interestsUpdateWithoutUser_profilesInput, Prisma.inventory_item_interestsUncheckedUpdateWithoutUser_profilesInput>;
    create: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutUser_profilesInput, Prisma.inventory_item_interestsUncheckedCreateWithoutUser_profilesInput>;
};
export type inventory_item_interestsUpdateWithWhereUniqueWithoutUser_profilesInput = {
    where: Prisma.inventory_item_interestsWhereUniqueInput;
    data: Prisma.XOR<Prisma.inventory_item_interestsUpdateWithoutUser_profilesInput, Prisma.inventory_item_interestsUncheckedUpdateWithoutUser_profilesInput>;
};
export type inventory_item_interestsUpdateManyWithWhereWithoutUser_profilesInput = {
    where: Prisma.inventory_item_interestsScalarWhereInput;
    data: Prisma.XOR<Prisma.inventory_item_interestsUpdateManyMutationInput, Prisma.inventory_item_interestsUncheckedUpdateManyWithoutUser_profilesInput>;
};
export type inventory_item_interestsCreateWithoutWishlist_offersInput = {
    id?: string;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_items: Prisma.inventory_itemsCreateNestedOneWithoutInventory_item_interestsInput;
    listing_offers?: Prisma.listing_offersCreateNestedOneWithoutInventory_item_interestsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_item_interestsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_item_interestsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_item_interestsInput;
};
export type inventory_item_interestsUncheckedCreateWithoutWishlist_offersInput = {
    id?: string;
    inventory_item_id: string;
    interested_user_id?: string | null;
    interested_store_id?: string | null;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_listing_offer_id?: string | null;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type inventory_item_interestsCreateOrConnectWithoutWishlist_offersInput = {
    where: Prisma.inventory_item_interestsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutWishlist_offersInput, Prisma.inventory_item_interestsUncheckedCreateWithoutWishlist_offersInput>;
};
export type inventory_item_interestsCreateManyWishlist_offersInputEnvelope = {
    data: Prisma.inventory_item_interestsCreateManyWishlist_offersInput | Prisma.inventory_item_interestsCreateManyWishlist_offersInput[];
    skipDuplicates?: boolean;
};
export type inventory_item_interestsUpsertWithWhereUniqueWithoutWishlist_offersInput = {
    where: Prisma.inventory_item_interestsWhereUniqueInput;
    update: Prisma.XOR<Prisma.inventory_item_interestsUpdateWithoutWishlist_offersInput, Prisma.inventory_item_interestsUncheckedUpdateWithoutWishlist_offersInput>;
    create: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutWishlist_offersInput, Prisma.inventory_item_interestsUncheckedCreateWithoutWishlist_offersInput>;
};
export type inventory_item_interestsUpdateWithWhereUniqueWithoutWishlist_offersInput = {
    where: Prisma.inventory_item_interestsWhereUniqueInput;
    data: Prisma.XOR<Prisma.inventory_item_interestsUpdateWithoutWishlist_offersInput, Prisma.inventory_item_interestsUncheckedUpdateWithoutWishlist_offersInput>;
};
export type inventory_item_interestsUpdateManyWithWhereWithoutWishlist_offersInput = {
    where: Prisma.inventory_item_interestsScalarWhereInput;
    data: Prisma.XOR<Prisma.inventory_item_interestsUpdateManyMutationInput, Prisma.inventory_item_interestsUncheckedUpdateManyWithoutWishlist_offersInput>;
};
export type inventory_item_interestsCreateWithoutStore_gamesInput = {
    id?: string;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_items: Prisma.inventory_itemsCreateNestedOneWithoutInventory_item_interestsInput;
    listing_offers?: Prisma.listing_offersCreateNestedOneWithoutInventory_item_interestsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_item_interestsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_item_interestsInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutInventory_item_interestsInput;
};
export type inventory_item_interestsUncheckedCreateWithoutStore_gamesInput = {
    id?: string;
    inventory_item_id: string;
    interested_user_id?: string | null;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_listing_offer_id?: string | null;
    converted_wishlist_offer_id?: string | null;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type inventory_item_interestsCreateOrConnectWithoutStore_gamesInput = {
    where: Prisma.inventory_item_interestsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutStore_gamesInput, Prisma.inventory_item_interestsUncheckedCreateWithoutStore_gamesInput>;
};
export type inventory_item_interestsCreateManyStore_gamesInputEnvelope = {
    data: Prisma.inventory_item_interestsCreateManyStore_gamesInput | Prisma.inventory_item_interestsCreateManyStore_gamesInput[];
    skipDuplicates?: boolean;
};
export type inventory_item_interestsUpsertWithWhereUniqueWithoutStore_gamesInput = {
    where: Prisma.inventory_item_interestsWhereUniqueInput;
    update: Prisma.XOR<Prisma.inventory_item_interestsUpdateWithoutStore_gamesInput, Prisma.inventory_item_interestsUncheckedUpdateWithoutStore_gamesInput>;
    create: Prisma.XOR<Prisma.inventory_item_interestsCreateWithoutStore_gamesInput, Prisma.inventory_item_interestsUncheckedCreateWithoutStore_gamesInput>;
};
export type inventory_item_interestsUpdateWithWhereUniqueWithoutStore_gamesInput = {
    where: Prisma.inventory_item_interestsWhereUniqueInput;
    data: Prisma.XOR<Prisma.inventory_item_interestsUpdateWithoutStore_gamesInput, Prisma.inventory_item_interestsUncheckedUpdateWithoutStore_gamesInput>;
};
export type inventory_item_interestsUpdateManyWithWhereWithoutStore_gamesInput = {
    where: Prisma.inventory_item_interestsScalarWhereInput;
    data: Prisma.XOR<Prisma.inventory_item_interestsUpdateManyMutationInput, Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStore_gamesInput>;
};
export type inventory_item_interestsCreateManyInventory_itemsInput = {
    id?: string;
    interested_user_id?: string | null;
    interested_store_id?: string | null;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_listing_offer_id?: string | null;
    converted_wishlist_offer_id?: string | null;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type inventory_item_interestsUpdateWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing_offers?: Prisma.listing_offersUpdateOneWithoutInventory_item_interestsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_item_interestsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_item_interestsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_item_interestsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutInventory_item_interestsNestedInput;
};
export type inventory_item_interestsUncheckedUpdateWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    interested_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interested_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_listing_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    interested_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interested_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_listing_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventory_item_interestsCreateManyListing_offersInput = {
    id?: string;
    inventory_item_id: string;
    interested_user_id?: string | null;
    interested_store_id?: string | null;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_wishlist_offer_id?: string | null;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type inventory_item_interestsUpdateWithoutListing_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutInventory_item_interestsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_item_interestsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_item_interestsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_item_interestsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutInventory_item_interestsNestedInput;
};
export type inventory_item_interestsUncheckedUpdateWithoutListing_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    interested_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interested_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventory_item_interestsUncheckedUpdateManyWithoutListing_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    interested_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interested_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventory_item_interestsCreateManyStoresInput = {
    id?: string;
    inventory_item_id: string;
    interested_user_id?: string | null;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_listing_offer_id?: string | null;
    converted_wishlist_offer_id?: string | null;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type inventory_item_interestsUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutInventory_item_interestsNestedInput;
    listing_offers?: Prisma.listing_offersUpdateOneWithoutInventory_item_interestsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_item_interestsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_item_interestsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutInventory_item_interestsNestedInput;
};
export type inventory_item_interestsUncheckedUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    interested_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_listing_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type inventory_item_interestsUncheckedUpdateManyWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    interested_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_listing_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type inventory_item_interestsCreateManyUser_profilesInput = {
    id?: string;
    inventory_item_id: string;
    interested_store_id?: string | null;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_listing_offer_id?: string | null;
    converted_wishlist_offer_id?: string | null;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type inventory_item_interestsUpdateWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutInventory_item_interestsNestedInput;
    listing_offers?: Prisma.listing_offersUpdateOneWithoutInventory_item_interestsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_item_interestsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_item_interestsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutInventory_item_interestsNestedInput;
};
export type inventory_item_interestsUncheckedUpdateWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    interested_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_listing_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type inventory_item_interestsUncheckedUpdateManyWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    interested_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_listing_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type inventory_item_interestsCreateManyWishlist_offersInput = {
    id?: string;
    inventory_item_id: string;
    interested_user_id?: string | null;
    interested_store_id?: string | null;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_listing_offer_id?: string | null;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type inventory_item_interestsUpdateWithoutWishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutInventory_item_interestsNestedInput;
    listing_offers?: Prisma.listing_offersUpdateOneWithoutInventory_item_interestsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_item_interestsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_item_interestsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_item_interestsNestedInput;
};
export type inventory_item_interestsUncheckedUpdateWithoutWishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    interested_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interested_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_listing_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventory_item_interestsUncheckedUpdateManyWithoutWishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    interested_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interested_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_listing_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventory_item_interestsCreateManyStore_gamesInput = {
    id?: string;
    inventory_item_id: string;
    interested_user_id?: string | null;
    interest_type?: string;
    message?: string | null;
    status?: string;
    converted_listing_offer_id?: string | null;
    converted_wishlist_offer_id?: string | null;
    converted_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type inventory_item_interestsUpdateWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutInventory_item_interestsNestedInput;
    listing_offers?: Prisma.listing_offersUpdateOneWithoutInventory_item_interestsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_item_interestsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_item_interestsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutInventory_item_interestsNestedInput;
};
export type inventory_item_interestsUncheckedUpdateWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    interested_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_listing_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventory_item_interestsUncheckedUpdateManyWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    interested_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    interest_type?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    converted_listing_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    converted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventory_item_interestsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inventory_item_id?: boolean;
    interested_user_id?: boolean;
    interested_store_id?: boolean;
    interest_type?: boolean;
    message?: boolean;
    status?: boolean;
    converted_listing_offer_id?: boolean;
    converted_wishlist_offer_id?: boolean;
    converted_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    inventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    listing_offers?: boolean | Prisma.inventory_item_interests$listing_offersArgs<ExtArgs>;
    stores?: boolean | Prisma.inventory_item_interests$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.inventory_item_interests$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.inventory_item_interests$user_profilesArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.inventory_item_interests$wishlist_offersArgs<ExtArgs>;
}, ExtArgs["result"]["inventory_item_interests"]>;
export type inventory_item_interestsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inventory_item_id?: boolean;
    interested_user_id?: boolean;
    interested_store_id?: boolean;
    interest_type?: boolean;
    message?: boolean;
    status?: boolean;
    converted_listing_offer_id?: boolean;
    converted_wishlist_offer_id?: boolean;
    converted_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    inventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    listing_offers?: boolean | Prisma.inventory_item_interests$listing_offersArgs<ExtArgs>;
    stores?: boolean | Prisma.inventory_item_interests$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.inventory_item_interests$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.inventory_item_interests$user_profilesArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.inventory_item_interests$wishlist_offersArgs<ExtArgs>;
}, ExtArgs["result"]["inventory_item_interests"]>;
export type inventory_item_interestsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inventory_item_id?: boolean;
    interested_user_id?: boolean;
    interested_store_id?: boolean;
    interest_type?: boolean;
    message?: boolean;
    status?: boolean;
    converted_listing_offer_id?: boolean;
    converted_wishlist_offer_id?: boolean;
    converted_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    inventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    listing_offers?: boolean | Prisma.inventory_item_interests$listing_offersArgs<ExtArgs>;
    stores?: boolean | Prisma.inventory_item_interests$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.inventory_item_interests$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.inventory_item_interests$user_profilesArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.inventory_item_interests$wishlist_offersArgs<ExtArgs>;
}, ExtArgs["result"]["inventory_item_interests"]>;
export type inventory_item_interestsSelectScalar = {
    id?: boolean;
    inventory_item_id?: boolean;
    interested_user_id?: boolean;
    interested_store_id?: boolean;
    interest_type?: boolean;
    message?: boolean;
    status?: boolean;
    converted_listing_offer_id?: boolean;
    converted_wishlist_offer_id?: boolean;
    converted_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
};
export type inventory_item_interestsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "inventory_item_id" | "interested_user_id" | "interested_store_id" | "interest_type" | "message" | "status" | "converted_listing_offer_id" | "converted_wishlist_offer_id" | "converted_at" | "created_at" | "updated_at" | "game_id", ExtArgs["result"]["inventory_item_interests"]>;
export type inventory_item_interestsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    listing_offers?: boolean | Prisma.inventory_item_interests$listing_offersArgs<ExtArgs>;
    stores?: boolean | Prisma.inventory_item_interests$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.inventory_item_interests$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.inventory_item_interests$user_profilesArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.inventory_item_interests$wishlist_offersArgs<ExtArgs>;
};
export type inventory_item_interestsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    listing_offers?: boolean | Prisma.inventory_item_interests$listing_offersArgs<ExtArgs>;
    stores?: boolean | Prisma.inventory_item_interests$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.inventory_item_interests$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.inventory_item_interests$user_profilesArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.inventory_item_interests$wishlist_offersArgs<ExtArgs>;
};
export type inventory_item_interestsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    listing_offers?: boolean | Prisma.inventory_item_interests$listing_offersArgs<ExtArgs>;
    stores?: boolean | Prisma.inventory_item_interests$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.inventory_item_interests$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.inventory_item_interests$user_profilesArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.inventory_item_interests$wishlist_offersArgs<ExtArgs>;
};
export type $inventory_item_interestsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "inventory_item_interests";
    objects: {
        inventory_items: Prisma.$inventory_itemsPayload<ExtArgs>;
        listing_offers: Prisma.$listing_offersPayload<ExtArgs> | null;
        stores: Prisma.$storesPayload<ExtArgs> | null;
        store_games: Prisma.$store_gamesPayload<ExtArgs> | null;
        user_profiles: Prisma.$user_profilesPayload<ExtArgs> | null;
        wishlist_offers: Prisma.$wishlist_offersPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        inventory_item_id: string;
        interested_user_id: string | null;
        interested_store_id: string | null;
        interest_type: string;
        message: string | null;
        status: string;
        converted_listing_offer_id: string | null;
        converted_wishlist_offer_id: string | null;
        converted_at: Date | null;
        created_at: Date;
        updated_at: Date;
        game_id: string;
    }, ExtArgs["result"]["inventory_item_interests"]>;
    composites: {};
};
export type inventory_item_interestsGetPayload<S extends boolean | null | undefined | inventory_item_interestsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$inventory_item_interestsPayload, S>;
export type inventory_item_interestsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<inventory_item_interestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Inventory_item_interestsCountAggregateInputType | true;
};
export interface inventory_item_interestsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['inventory_item_interests'];
        meta: {
            name: 'inventory_item_interests';
        };
    };
    /**
     * Find zero or one Inventory_item_interests that matches the filter.
     * @param {inventory_item_interestsFindUniqueArgs} args - Arguments to find a Inventory_item_interests
     * @example
     * // Get one Inventory_item_interests
     * const inventory_item_interests = await prisma.inventory_item_interests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventory_item_interestsFindUniqueArgs>(args: Prisma.SelectSubset<T, inventory_item_interestsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__inventory_item_interestsClient<runtime.Types.Result.GetResult<Prisma.$inventory_item_interestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Inventory_item_interests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventory_item_interestsFindUniqueOrThrowArgs} args - Arguments to find a Inventory_item_interests
     * @example
     * // Get one Inventory_item_interests
     * const inventory_item_interests = await prisma.inventory_item_interests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventory_item_interestsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, inventory_item_interestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__inventory_item_interestsClient<runtime.Types.Result.GetResult<Prisma.$inventory_item_interestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Inventory_item_interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_item_interestsFindFirstArgs} args - Arguments to find a Inventory_item_interests
     * @example
     * // Get one Inventory_item_interests
     * const inventory_item_interests = await prisma.inventory_item_interests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventory_item_interestsFindFirstArgs>(args?: Prisma.SelectSubset<T, inventory_item_interestsFindFirstArgs<ExtArgs>>): Prisma.Prisma__inventory_item_interestsClient<runtime.Types.Result.GetResult<Prisma.$inventory_item_interestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Inventory_item_interests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_item_interestsFindFirstOrThrowArgs} args - Arguments to find a Inventory_item_interests
     * @example
     * // Get one Inventory_item_interests
     * const inventory_item_interests = await prisma.inventory_item_interests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventory_item_interestsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, inventory_item_interestsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__inventory_item_interestsClient<runtime.Types.Result.GetResult<Prisma.$inventory_item_interestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Inventory_item_interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_item_interestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventory_item_interests
     * const inventory_item_interests = await prisma.inventory_item_interests.findMany()
     *
     * // Get first 10 Inventory_item_interests
     * const inventory_item_interests = await prisma.inventory_item_interests.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const inventory_item_interestsWithIdOnly = await prisma.inventory_item_interests.findMany({ select: { id: true } })
     *
     */
    findMany<T extends inventory_item_interestsFindManyArgs>(args?: Prisma.SelectSubset<T, inventory_item_interestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_item_interestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Inventory_item_interests.
     * @param {inventory_item_interestsCreateArgs} args - Arguments to create a Inventory_item_interests.
     * @example
     * // Create one Inventory_item_interests
     * const Inventory_item_interests = await prisma.inventory_item_interests.create({
     *   data: {
     *     // ... data to create a Inventory_item_interests
     *   }
     * })
     *
     */
    create<T extends inventory_item_interestsCreateArgs>(args: Prisma.SelectSubset<T, inventory_item_interestsCreateArgs<ExtArgs>>): Prisma.Prisma__inventory_item_interestsClient<runtime.Types.Result.GetResult<Prisma.$inventory_item_interestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Inventory_item_interests.
     * @param {inventory_item_interestsCreateManyArgs} args - Arguments to create many Inventory_item_interests.
     * @example
     * // Create many Inventory_item_interests
     * const inventory_item_interests = await prisma.inventory_item_interests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends inventory_item_interestsCreateManyArgs>(args?: Prisma.SelectSubset<T, inventory_item_interestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Inventory_item_interests and returns the data saved in the database.
     * @param {inventory_item_interestsCreateManyAndReturnArgs} args - Arguments to create many Inventory_item_interests.
     * @example
     * // Create many Inventory_item_interests
     * const inventory_item_interests = await prisma.inventory_item_interests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Inventory_item_interests and only return the `id`
     * const inventory_item_interestsWithIdOnly = await prisma.inventory_item_interests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends inventory_item_interestsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, inventory_item_interestsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_item_interestsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Inventory_item_interests.
     * @param {inventory_item_interestsDeleteArgs} args - Arguments to delete one Inventory_item_interests.
     * @example
     * // Delete one Inventory_item_interests
     * const Inventory_item_interests = await prisma.inventory_item_interests.delete({
     *   where: {
     *     // ... filter to delete one Inventory_item_interests
     *   }
     * })
     *
     */
    delete<T extends inventory_item_interestsDeleteArgs>(args: Prisma.SelectSubset<T, inventory_item_interestsDeleteArgs<ExtArgs>>): Prisma.Prisma__inventory_item_interestsClient<runtime.Types.Result.GetResult<Prisma.$inventory_item_interestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Inventory_item_interests.
     * @param {inventory_item_interestsUpdateArgs} args - Arguments to update one Inventory_item_interests.
     * @example
     * // Update one Inventory_item_interests
     * const inventory_item_interests = await prisma.inventory_item_interests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends inventory_item_interestsUpdateArgs>(args: Prisma.SelectSubset<T, inventory_item_interestsUpdateArgs<ExtArgs>>): Prisma.Prisma__inventory_item_interestsClient<runtime.Types.Result.GetResult<Prisma.$inventory_item_interestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Inventory_item_interests.
     * @param {inventory_item_interestsDeleteManyArgs} args - Arguments to filter Inventory_item_interests to delete.
     * @example
     * // Delete a few Inventory_item_interests
     * const { count } = await prisma.inventory_item_interests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends inventory_item_interestsDeleteManyArgs>(args?: Prisma.SelectSubset<T, inventory_item_interestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Inventory_item_interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_item_interestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventory_item_interests
     * const inventory_item_interests = await prisma.inventory_item_interests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends inventory_item_interestsUpdateManyArgs>(args: Prisma.SelectSubset<T, inventory_item_interestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Inventory_item_interests and returns the data updated in the database.
     * @param {inventory_item_interestsUpdateManyAndReturnArgs} args - Arguments to update many Inventory_item_interests.
     * @example
     * // Update many Inventory_item_interests
     * const inventory_item_interests = await prisma.inventory_item_interests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Inventory_item_interests and only return the `id`
     * const inventory_item_interestsWithIdOnly = await prisma.inventory_item_interests.updateManyAndReturn({
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
    updateManyAndReturn<T extends inventory_item_interestsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, inventory_item_interestsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_item_interestsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Inventory_item_interests.
     * @param {inventory_item_interestsUpsertArgs} args - Arguments to update or create a Inventory_item_interests.
     * @example
     * // Update or create a Inventory_item_interests
     * const inventory_item_interests = await prisma.inventory_item_interests.upsert({
     *   create: {
     *     // ... data to create a Inventory_item_interests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory_item_interests we want to update
     *   }
     * })
     */
    upsert<T extends inventory_item_interestsUpsertArgs>(args: Prisma.SelectSubset<T, inventory_item_interestsUpsertArgs<ExtArgs>>): Prisma.Prisma__inventory_item_interestsClient<runtime.Types.Result.GetResult<Prisma.$inventory_item_interestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Inventory_item_interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_item_interestsCountArgs} args - Arguments to filter Inventory_item_interests to count.
     * @example
     * // Count the number of Inventory_item_interests
     * const count = await prisma.inventory_item_interests.count({
     *   where: {
     *     // ... the filter for the Inventory_item_interests we want to count
     *   }
     * })
    **/
    count<T extends inventory_item_interestsCountArgs>(args?: Prisma.Subset<T, inventory_item_interestsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Inventory_item_interestsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Inventory_item_interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Inventory_item_interestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Inventory_item_interestsAggregateArgs>(args: Prisma.Subset<T, Inventory_item_interestsAggregateArgs>): Prisma.PrismaPromise<GetInventory_item_interestsAggregateType<T>>;
    /**
     * Group by Inventory_item_interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_item_interestsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends inventory_item_interestsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: inventory_item_interestsGroupByArgs['orderBy'];
    } : {
        orderBy?: inventory_item_interestsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, inventory_item_interestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventory_item_interestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the inventory_item_interests model
     */
    readonly fields: inventory_item_interestsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for inventory_item_interests.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__inventory_item_interestsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    inventory_items<T extends Prisma.inventory_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    listing_offers<T extends Prisma.inventory_item_interests$listing_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_item_interests$listing_offersArgs<ExtArgs>>): Prisma.Prisma__listing_offersClient<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    stores<T extends Prisma.inventory_item_interests$storesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_item_interests$storesArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    store_games<T extends Prisma.inventory_item_interests$store_gamesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_item_interests$store_gamesArgs<ExtArgs>>): Prisma.Prisma__store_gamesClient<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user_profiles<T extends Prisma.inventory_item_interests$user_profilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_item_interests$user_profilesArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    wishlist_offers<T extends Prisma.inventory_item_interests$wishlist_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_item_interests$wishlist_offersArgs<ExtArgs>>): Prisma.Prisma__wishlist_offersClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the inventory_item_interests model
 */
export interface inventory_item_interestsFieldRefs {
    readonly id: Prisma.FieldRef<"inventory_item_interests", 'String'>;
    readonly inventory_item_id: Prisma.FieldRef<"inventory_item_interests", 'String'>;
    readonly interested_user_id: Prisma.FieldRef<"inventory_item_interests", 'String'>;
    readonly interested_store_id: Prisma.FieldRef<"inventory_item_interests", 'String'>;
    readonly interest_type: Prisma.FieldRef<"inventory_item_interests", 'String'>;
    readonly message: Prisma.FieldRef<"inventory_item_interests", 'String'>;
    readonly status: Prisma.FieldRef<"inventory_item_interests", 'String'>;
    readonly converted_listing_offer_id: Prisma.FieldRef<"inventory_item_interests", 'String'>;
    readonly converted_wishlist_offer_id: Prisma.FieldRef<"inventory_item_interests", 'String'>;
    readonly converted_at: Prisma.FieldRef<"inventory_item_interests", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"inventory_item_interests", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"inventory_item_interests", 'DateTime'>;
    readonly game_id: Prisma.FieldRef<"inventory_item_interests", 'String'>;
}
/**
 * inventory_item_interests findUnique
 */
export type inventory_item_interestsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which inventory_item_interests to fetch.
     */
    where: Prisma.inventory_item_interestsWhereUniqueInput;
};
/**
 * inventory_item_interests findUniqueOrThrow
 */
export type inventory_item_interestsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which inventory_item_interests to fetch.
     */
    where: Prisma.inventory_item_interestsWhereUniqueInput;
};
/**
 * inventory_item_interests findFirst
 */
export type inventory_item_interestsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which inventory_item_interests to fetch.
     */
    where?: Prisma.inventory_item_interestsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventory_item_interests to fetch.
     */
    orderBy?: Prisma.inventory_item_interestsOrderByWithRelationInput | Prisma.inventory_item_interestsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for inventory_item_interests.
     */
    cursor?: Prisma.inventory_item_interestsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventory_item_interests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventory_item_interests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventory_item_interests.
     */
    distinct?: Prisma.Inventory_item_interestsScalarFieldEnum | Prisma.Inventory_item_interestsScalarFieldEnum[];
};
/**
 * inventory_item_interests findFirstOrThrow
 */
export type inventory_item_interestsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which inventory_item_interests to fetch.
     */
    where?: Prisma.inventory_item_interestsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventory_item_interests to fetch.
     */
    orderBy?: Prisma.inventory_item_interestsOrderByWithRelationInput | Prisma.inventory_item_interestsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for inventory_item_interests.
     */
    cursor?: Prisma.inventory_item_interestsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventory_item_interests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventory_item_interests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventory_item_interests.
     */
    distinct?: Prisma.Inventory_item_interestsScalarFieldEnum | Prisma.Inventory_item_interestsScalarFieldEnum[];
};
/**
 * inventory_item_interests findMany
 */
export type inventory_item_interestsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which inventory_item_interests to fetch.
     */
    where?: Prisma.inventory_item_interestsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventory_item_interests to fetch.
     */
    orderBy?: Prisma.inventory_item_interestsOrderByWithRelationInput | Prisma.inventory_item_interestsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing inventory_item_interests.
     */
    cursor?: Prisma.inventory_item_interestsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventory_item_interests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventory_item_interests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventory_item_interests.
     */
    distinct?: Prisma.Inventory_item_interestsScalarFieldEnum | Prisma.Inventory_item_interestsScalarFieldEnum[];
};
/**
 * inventory_item_interests create
 */
export type inventory_item_interestsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a inventory_item_interests.
     */
    data: Prisma.XOR<Prisma.inventory_item_interestsCreateInput, Prisma.inventory_item_interestsUncheckedCreateInput>;
};
/**
 * inventory_item_interests createMany
 */
export type inventory_item_interestsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventory_item_interests.
     */
    data: Prisma.inventory_item_interestsCreateManyInput | Prisma.inventory_item_interestsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * inventory_item_interests createManyAndReturn
 */
export type inventory_item_interestsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_item_interests
     */
    select?: Prisma.inventory_item_interestsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory_item_interests
     */
    omit?: Prisma.inventory_item_interestsOmit<ExtArgs> | null;
    /**
     * The data used to create many inventory_item_interests.
     */
    data: Prisma.inventory_item_interestsCreateManyInput | Prisma.inventory_item_interestsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.inventory_item_interestsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * inventory_item_interests update
 */
export type inventory_item_interestsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a inventory_item_interests.
     */
    data: Prisma.XOR<Prisma.inventory_item_interestsUpdateInput, Prisma.inventory_item_interestsUncheckedUpdateInput>;
    /**
     * Choose, which inventory_item_interests to update.
     */
    where: Prisma.inventory_item_interestsWhereUniqueInput;
};
/**
 * inventory_item_interests updateMany
 */
export type inventory_item_interestsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update inventory_item_interests.
     */
    data: Prisma.XOR<Prisma.inventory_item_interestsUpdateManyMutationInput, Prisma.inventory_item_interestsUncheckedUpdateManyInput>;
    /**
     * Filter which inventory_item_interests to update
     */
    where?: Prisma.inventory_item_interestsWhereInput;
    /**
     * Limit how many inventory_item_interests to update.
     */
    limit?: number;
};
/**
 * inventory_item_interests updateManyAndReturn
 */
export type inventory_item_interestsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_item_interests
     */
    select?: Prisma.inventory_item_interestsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory_item_interests
     */
    omit?: Prisma.inventory_item_interestsOmit<ExtArgs> | null;
    /**
     * The data used to update inventory_item_interests.
     */
    data: Prisma.XOR<Prisma.inventory_item_interestsUpdateManyMutationInput, Prisma.inventory_item_interestsUncheckedUpdateManyInput>;
    /**
     * Filter which inventory_item_interests to update
     */
    where?: Prisma.inventory_item_interestsWhereInput;
    /**
     * Limit how many inventory_item_interests to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.inventory_item_interestsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * inventory_item_interests upsert
 */
export type inventory_item_interestsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the inventory_item_interests to update in case it exists.
     */
    where: Prisma.inventory_item_interestsWhereUniqueInput;
    /**
     * In case the inventory_item_interests found by the `where` argument doesn't exist, create a new inventory_item_interests with this data.
     */
    create: Prisma.XOR<Prisma.inventory_item_interestsCreateInput, Prisma.inventory_item_interestsUncheckedCreateInput>;
    /**
     * In case the inventory_item_interests was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.inventory_item_interestsUpdateInput, Prisma.inventory_item_interestsUncheckedUpdateInput>;
};
/**
 * inventory_item_interests delete
 */
export type inventory_item_interestsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which inventory_item_interests to delete.
     */
    where: Prisma.inventory_item_interestsWhereUniqueInput;
};
/**
 * inventory_item_interests deleteMany
 */
export type inventory_item_interestsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which inventory_item_interests to delete
     */
    where?: Prisma.inventory_item_interestsWhereInput;
    /**
     * Limit how many inventory_item_interests to delete.
     */
    limit?: number;
};
/**
 * inventory_item_interests.listing_offers
 */
export type inventory_item_interests$listing_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * inventory_item_interests.stores
 */
export type inventory_item_interests$storesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: Prisma.storesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the stores
     */
    omit?: Prisma.storesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.storesInclude<ExtArgs> | null;
    where?: Prisma.storesWhereInput;
};
/**
 * inventory_item_interests.store_games
 */
export type inventory_item_interests$store_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * inventory_item_interests.user_profiles
 */
export type inventory_item_interests$user_profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * inventory_item_interests.wishlist_offers
 */
export type inventory_item_interests$wishlist_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * inventory_item_interests without action
 */
export type inventory_item_interestsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
