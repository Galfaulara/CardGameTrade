import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model listings
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type listingsModel = runtime.Types.Result.DefaultSelection<Prisma.$listingsPayload>;
export type AggregateListings = {
    _count: ListingsCountAggregateOutputType | null;
    _avg: ListingsAvgAggregateOutputType | null;
    _sum: ListingsSumAggregateOutputType | null;
    _min: ListingsMinAggregateOutputType | null;
    _max: ListingsMaxAggregateOutputType | null;
};
export type ListingsAvgAggregateOutputType = {
    asking_price: runtime.Decimal | null;
};
export type ListingsSumAggregateOutputType = {
    asking_price: runtime.Decimal | null;
};
export type ListingsMinAggregateOutputType = {
    id: string | null;
    inventory_item_id: string | null;
    seller_user_id: string | null;
    seller_store_id: string | null;
    accepts_cash: boolean | null;
    accepts_trade: boolean | null;
    asking_price: runtime.Decimal | null;
    currency_code: string | null;
    preferred_store_id: string | null;
    title: string | null;
    description: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    game_id: string | null;
};
export type ListingsMaxAggregateOutputType = {
    id: string | null;
    inventory_item_id: string | null;
    seller_user_id: string | null;
    seller_store_id: string | null;
    accepts_cash: boolean | null;
    accepts_trade: boolean | null;
    asking_price: runtime.Decimal | null;
    currency_code: string | null;
    preferred_store_id: string | null;
    title: string | null;
    description: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    game_id: string | null;
};
export type ListingsCountAggregateOutputType = {
    id: number;
    inventory_item_id: number;
    seller_user_id: number;
    seller_store_id: number;
    accepts_cash: number;
    accepts_trade: number;
    asking_price: number;
    currency_code: number;
    preferred_store_id: number;
    title: number;
    description: number;
    status: number;
    created_at: number;
    updated_at: number;
    game_id: number;
    _all: number;
};
export type ListingsAvgAggregateInputType = {
    asking_price?: true;
};
export type ListingsSumAggregateInputType = {
    asking_price?: true;
};
export type ListingsMinAggregateInputType = {
    id?: true;
    inventory_item_id?: true;
    seller_user_id?: true;
    seller_store_id?: true;
    accepts_cash?: true;
    accepts_trade?: true;
    asking_price?: true;
    currency_code?: true;
    preferred_store_id?: true;
    title?: true;
    description?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
};
export type ListingsMaxAggregateInputType = {
    id?: true;
    inventory_item_id?: true;
    seller_user_id?: true;
    seller_store_id?: true;
    accepts_cash?: true;
    accepts_trade?: true;
    asking_price?: true;
    currency_code?: true;
    preferred_store_id?: true;
    title?: true;
    description?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
};
export type ListingsCountAggregateInputType = {
    id?: true;
    inventory_item_id?: true;
    seller_user_id?: true;
    seller_store_id?: true;
    accepts_cash?: true;
    accepts_trade?: true;
    asking_price?: true;
    currency_code?: true;
    preferred_store_id?: true;
    title?: true;
    description?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
    _all?: true;
};
export type ListingsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which listings to aggregate.
     */
    where?: Prisma.listingsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of listings to fetch.
     */
    orderBy?: Prisma.listingsOrderByWithRelationInput | Prisma.listingsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.listingsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` listings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` listings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned listings
    **/
    _count?: true | ListingsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ListingsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ListingsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ListingsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ListingsMaxAggregateInputType;
};
export type GetListingsAggregateType<T extends ListingsAggregateArgs> = {
    [P in keyof T & keyof AggregateListings]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateListings[P]> : Prisma.GetScalarType<T[P], AggregateListings[P]>;
};
export type listingsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listingsWhereInput;
    orderBy?: Prisma.listingsOrderByWithAggregationInput | Prisma.listingsOrderByWithAggregationInput[];
    by: Prisma.ListingsScalarFieldEnum[] | Prisma.ListingsScalarFieldEnum;
    having?: Prisma.listingsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ListingsCountAggregateInputType | true;
    _avg?: ListingsAvgAggregateInputType;
    _sum?: ListingsSumAggregateInputType;
    _min?: ListingsMinAggregateInputType;
    _max?: ListingsMaxAggregateInputType;
};
export type ListingsGroupByOutputType = {
    id: string;
    inventory_item_id: string;
    seller_user_id: string | null;
    seller_store_id: string | null;
    accepts_cash: boolean;
    accepts_trade: boolean;
    asking_price: runtime.Decimal | null;
    currency_code: string | null;
    preferred_store_id: string | null;
    title: string | null;
    description: string | null;
    status: string;
    created_at: Date;
    updated_at: Date;
    game_id: string;
    _count: ListingsCountAggregateOutputType | null;
    _avg: ListingsAvgAggregateOutputType | null;
    _sum: ListingsSumAggregateOutputType | null;
    _min: ListingsMinAggregateOutputType | null;
    _max: ListingsMaxAggregateOutputType | null;
};
export type GetListingsGroupByPayload<T extends listingsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ListingsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ListingsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ListingsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ListingsGroupByOutputType[P]>;
}>>;
export type listingsWhereInput = {
    AND?: Prisma.listingsWhereInput | Prisma.listingsWhereInput[];
    OR?: Prisma.listingsWhereInput[];
    NOT?: Prisma.listingsWhereInput | Prisma.listingsWhereInput[];
    id?: Prisma.UuidFilter<"listings"> | string;
    inventory_item_id?: Prisma.UuidFilter<"listings"> | string;
    seller_user_id?: Prisma.UuidNullableFilter<"listings"> | string | null;
    seller_store_id?: Prisma.UuidNullableFilter<"listings"> | string | null;
    accepts_cash?: Prisma.BoolFilter<"listings"> | boolean;
    accepts_trade?: Prisma.BoolFilter<"listings"> | boolean;
    asking_price?: Prisma.DecimalNullableFilter<"listings"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.StringNullableFilter<"listings"> | string | null;
    preferred_store_id?: Prisma.UuidNullableFilter<"listings"> | string | null;
    title?: Prisma.StringNullableFilter<"listings"> | string | null;
    description?: Prisma.StringNullableFilter<"listings"> | string | null;
    status?: Prisma.StringFilter<"listings"> | string;
    created_at?: Prisma.DateTimeFilter<"listings"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"listings"> | Date | string;
    game_id?: Prisma.UuidFilter<"listings"> | string;
    listing_offers?: Prisma.Listing_offersListRelationFilter;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.Listing_offersListRelationFilter;
    inventory_items_listings_inventory_item_id_game_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsScalarRelationFilter, Prisma.inventory_itemsWhereInput>;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsNullableScalarRelationFilter, Prisma.inventory_itemsWhereInput> | null;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsNullableScalarRelationFilter, Prisma.inventory_itemsWhereInput> | null;
    store_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    transactions?: Prisma.TransactionsListRelationFilter;
};
export type listingsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    seller_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    seller_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    accepts_cash?: Prisma.SortOrder;
    accepts_trade?: Prisma.SortOrder;
    asking_price?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    preferred_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    listing_offers?: Prisma.listing_offersOrderByRelationAggregateInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersOrderByRelationAggregateInput;
    inventory_items_listings_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsOrderByWithRelationInput;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.inventory_itemsOrderByWithRelationInput;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.inventory_itemsOrderByWithRelationInput;
    store_games?: Prisma.store_gamesOrderByWithRelationInput;
    transactions?: Prisma.transactionsOrderByRelationAggregateInput;
};
export type listingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    inventory_item_id?: string;
    id_game_id?: Prisma.listingsIdGame_idCompoundUniqueInput;
    AND?: Prisma.listingsWhereInput | Prisma.listingsWhereInput[];
    OR?: Prisma.listingsWhereInput[];
    NOT?: Prisma.listingsWhereInput | Prisma.listingsWhereInput[];
    seller_user_id?: Prisma.UuidNullableFilter<"listings"> | string | null;
    seller_store_id?: Prisma.UuidNullableFilter<"listings"> | string | null;
    accepts_cash?: Prisma.BoolFilter<"listings"> | boolean;
    accepts_trade?: Prisma.BoolFilter<"listings"> | boolean;
    asking_price?: Prisma.DecimalNullableFilter<"listings"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.StringNullableFilter<"listings"> | string | null;
    preferred_store_id?: Prisma.UuidNullableFilter<"listings"> | string | null;
    title?: Prisma.StringNullableFilter<"listings"> | string | null;
    description?: Prisma.StringNullableFilter<"listings"> | string | null;
    status?: Prisma.StringFilter<"listings"> | string;
    created_at?: Prisma.DateTimeFilter<"listings"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"listings"> | Date | string;
    game_id?: Prisma.UuidFilter<"listings"> | string;
    listing_offers?: Prisma.Listing_offersListRelationFilter;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.Listing_offersListRelationFilter;
    inventory_items_listings_inventory_item_id_game_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsScalarRelationFilter, Prisma.inventory_itemsWhereInput>;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsNullableScalarRelationFilter, Prisma.inventory_itemsWhereInput> | null;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.XOR<Prisma.Inventory_itemsNullableScalarRelationFilter, Prisma.inventory_itemsWhereInput> | null;
    store_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    transactions?: Prisma.TransactionsListRelationFilter;
}, "id" | "inventory_item_id" | "id_game_id">;
export type listingsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    seller_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    seller_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    accepts_cash?: Prisma.SortOrder;
    accepts_trade?: Prisma.SortOrder;
    asking_price?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    preferred_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    _count?: Prisma.listingsCountOrderByAggregateInput;
    _avg?: Prisma.listingsAvgOrderByAggregateInput;
    _max?: Prisma.listingsMaxOrderByAggregateInput;
    _min?: Prisma.listingsMinOrderByAggregateInput;
    _sum?: Prisma.listingsSumOrderByAggregateInput;
};
export type listingsScalarWhereWithAggregatesInput = {
    AND?: Prisma.listingsScalarWhereWithAggregatesInput | Prisma.listingsScalarWhereWithAggregatesInput[];
    OR?: Prisma.listingsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.listingsScalarWhereWithAggregatesInput | Prisma.listingsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"listings"> | string;
    inventory_item_id?: Prisma.UuidWithAggregatesFilter<"listings"> | string;
    seller_user_id?: Prisma.UuidNullableWithAggregatesFilter<"listings"> | string | null;
    seller_store_id?: Prisma.UuidNullableWithAggregatesFilter<"listings"> | string | null;
    accepts_cash?: Prisma.BoolWithAggregatesFilter<"listings"> | boolean;
    accepts_trade?: Prisma.BoolWithAggregatesFilter<"listings"> | boolean;
    asking_price?: Prisma.DecimalNullableWithAggregatesFilter<"listings"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.StringNullableWithAggregatesFilter<"listings"> | string | null;
    preferred_store_id?: Prisma.UuidNullableWithAggregatesFilter<"listings"> | string | null;
    title?: Prisma.StringNullableWithAggregatesFilter<"listings"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"listings"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"listings"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"listings"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"listings"> | Date | string;
    game_id?: Prisma.UuidWithAggregatesFilter<"listings"> | string;
};
export type listingsCreateInput = {
    id?: string;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutListingsInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersCreateNestedManyWithoutListings_listing_offers_listing_id_game_idTolistingsInput;
    inventory_items_listings_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutListingsInput;
    transactions?: Prisma.transactionsCreateNestedManyWithoutListingsInput;
};
export type listingsUncheckedCreateInput = {
    id?: string;
    inventory_item_id: string;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    preferred_store_id?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutListingsInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUncheckedCreateNestedManyWithoutListings_listing_offers_listing_id_game_idTolistingsInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutListingsInput;
};
export type listingsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutListingsNestedInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUpdateManyWithoutListings_listing_offers_listing_id_game_idTolistingsNestedInput;
    inventory_items_listings_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutListings_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutListingsNestedInput;
    transactions?: Prisma.transactionsUpdateManyWithoutListingsNestedInput;
};
export type listingsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutListingsNestedInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUncheckedUpdateManyWithoutListings_listing_offers_listing_id_game_idTolistingsNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateManyWithoutListingsNestedInput;
};
export type listingsCreateManyInput = {
    id?: string;
    inventory_item_id: string;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    preferred_store_id?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type listingsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type listingsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ListingsListRelationFilter = {
    every?: Prisma.listingsWhereInput;
    some?: Prisma.listingsWhereInput;
    none?: Prisma.listingsWhereInput;
};
export type listingsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ListingsScalarRelationFilter = {
    is?: Prisma.listingsWhereInput;
    isNot?: Prisma.listingsWhereInput;
};
export type listingsIdGame_idCompoundUniqueInput = {
    id: string;
    game_id: string;
};
export type listingsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    seller_user_id?: Prisma.SortOrder;
    seller_store_id?: Prisma.SortOrder;
    accepts_cash?: Prisma.SortOrder;
    accepts_trade?: Prisma.SortOrder;
    asking_price?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    preferred_store_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type listingsAvgOrderByAggregateInput = {
    asking_price?: Prisma.SortOrder;
};
export type listingsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    seller_user_id?: Prisma.SortOrder;
    seller_store_id?: Prisma.SortOrder;
    accepts_cash?: Prisma.SortOrder;
    accepts_trade?: Prisma.SortOrder;
    asking_price?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    preferred_store_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type listingsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    inventory_item_id?: Prisma.SortOrder;
    seller_user_id?: Prisma.SortOrder;
    seller_store_id?: Prisma.SortOrder;
    accepts_cash?: Prisma.SortOrder;
    accepts_trade?: Prisma.SortOrder;
    asking_price?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    preferred_store_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type listingsSumOrderByAggregateInput = {
    asking_price?: Prisma.SortOrder;
};
export type ListingsNullableScalarRelationFilter = {
    is?: Prisma.listingsWhereInput | null;
    isNot?: Prisma.listingsWhereInput | null;
};
export type listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput, Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput> | Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput[] | Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput | Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput[];
    createMany?: Prisma.listingsCreateManyInventory_items_listings_inventory_item_id_game_idToinventory_itemsInputEnvelope;
    connect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
};
export type listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput, Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput> | Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput[] | Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput | Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput[];
    createMany?: Prisma.listingsCreateManyInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInputEnvelope;
    connect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
};
export type listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput, Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput> | Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput[] | Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput | Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput[];
    createMany?: Prisma.listingsCreateManyInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInputEnvelope;
    connect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
};
export type listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput, Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput> | Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput[] | Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput | Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput[];
    createMany?: Prisma.listingsCreateManyInventory_items_listings_inventory_item_id_game_idToinventory_itemsInputEnvelope;
    connect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
};
export type listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput, Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput> | Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput[] | Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput | Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput[];
    createMany?: Prisma.listingsCreateManyInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInputEnvelope;
    connect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
};
export type listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput, Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput> | Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput[] | Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput | Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput[];
    createMany?: Prisma.listingsCreateManyInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInputEnvelope;
    connect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
};
export type listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput, Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput> | Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput[] | Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput | Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput[];
    upsert?: Prisma.listingsUpsertWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput | Prisma.listingsUpsertWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput[];
    createMany?: Prisma.listingsCreateManyInventory_items_listings_inventory_item_id_game_idToinventory_itemsInputEnvelope;
    set?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    disconnect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    delete?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    connect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    update?: Prisma.listingsUpdateWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput | Prisma.listingsUpdateWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput[];
    updateMany?: Prisma.listingsUpdateManyWithWhereWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput | Prisma.listingsUpdateManyWithWhereWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput[];
    deleteMany?: Prisma.listingsScalarWhereInput | Prisma.listingsScalarWhereInput[];
};
export type listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput, Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput> | Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput[] | Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput | Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput[];
    upsert?: Prisma.listingsUpsertWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput | Prisma.listingsUpsertWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput[];
    createMany?: Prisma.listingsCreateManyInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInputEnvelope;
    set?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    disconnect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    delete?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    connect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    update?: Prisma.listingsUpdateWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput | Prisma.listingsUpdateWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput[];
    updateMany?: Prisma.listingsUpdateManyWithWhereWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput | Prisma.listingsUpdateManyWithWhereWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput[];
    deleteMany?: Prisma.listingsScalarWhereInput | Prisma.listingsScalarWhereInput[];
};
export type listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput, Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput> | Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput[] | Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput | Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput[];
    upsert?: Prisma.listingsUpsertWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput | Prisma.listingsUpsertWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput[];
    createMany?: Prisma.listingsCreateManyInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInputEnvelope;
    set?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    disconnect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    delete?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    connect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    update?: Prisma.listingsUpdateWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput | Prisma.listingsUpdateWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput[];
    updateMany?: Prisma.listingsUpdateManyWithWhereWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput | Prisma.listingsUpdateManyWithWhereWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput[];
    deleteMany?: Prisma.listingsScalarWhereInput | Prisma.listingsScalarWhereInput[];
};
export type listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput, Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput> | Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput[] | Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput | Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput[];
    upsert?: Prisma.listingsUpsertWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput | Prisma.listingsUpsertWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput[];
    createMany?: Prisma.listingsCreateManyInventory_items_listings_inventory_item_id_game_idToinventory_itemsInputEnvelope;
    set?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    disconnect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    delete?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    connect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    update?: Prisma.listingsUpdateWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput | Prisma.listingsUpdateWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput[];
    updateMany?: Prisma.listingsUpdateManyWithWhereWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput | Prisma.listingsUpdateManyWithWhereWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput[];
    deleteMany?: Prisma.listingsScalarWhereInput | Prisma.listingsScalarWhereInput[];
};
export type listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput, Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput> | Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput[] | Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput | Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput[];
    upsert?: Prisma.listingsUpsertWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput | Prisma.listingsUpsertWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput[];
    createMany?: Prisma.listingsCreateManyInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInputEnvelope;
    set?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    disconnect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    delete?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    connect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    update?: Prisma.listingsUpdateWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput | Prisma.listingsUpdateWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput[];
    updateMany?: Prisma.listingsUpdateManyWithWhereWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput | Prisma.listingsUpdateManyWithWhereWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput[];
    deleteMany?: Prisma.listingsScalarWhereInput | Prisma.listingsScalarWhereInput[];
};
export type listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput, Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput> | Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput[] | Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput[];
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput | Prisma.listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput[];
    upsert?: Prisma.listingsUpsertWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput | Prisma.listingsUpsertWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput[];
    createMany?: Prisma.listingsCreateManyInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInputEnvelope;
    set?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    disconnect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    delete?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    connect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    update?: Prisma.listingsUpdateWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput | Prisma.listingsUpdateWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput[];
    updateMany?: Prisma.listingsUpdateManyWithWhereWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput | Prisma.listingsUpdateManyWithWhereWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput[];
    deleteMany?: Prisma.listingsScalarWhereInput | Prisma.listingsScalarWhereInput[];
};
export type listingsCreateNestedOneWithoutListing_offersInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutListing_offersInput, Prisma.listingsUncheckedCreateWithoutListing_offersInput>;
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutListing_offersInput;
    connect?: Prisma.listingsWhereUniqueInput;
};
export type listingsCreateNestedOneWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput, Prisma.listingsUncheckedCreateWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput>;
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput;
    connect?: Prisma.listingsWhereUniqueInput;
};
export type listingsUpdateOneRequiredWithoutListing_offersNestedInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutListing_offersInput, Prisma.listingsUncheckedCreateWithoutListing_offersInput>;
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutListing_offersInput;
    upsert?: Prisma.listingsUpsertWithoutListing_offersInput;
    connect?: Prisma.listingsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.listingsUpdateToOneWithWhereWithoutListing_offersInput, Prisma.listingsUpdateWithoutListing_offersInput>, Prisma.listingsUncheckedUpdateWithoutListing_offersInput>;
};
export type listingsUpdateOneRequiredWithoutListing_offers_listing_offers_listing_id_game_idTolistingsNestedInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput, Prisma.listingsUncheckedCreateWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput>;
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput;
    upsert?: Prisma.listingsUpsertWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput;
    connect?: Prisma.listingsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.listingsUpdateToOneWithWhereWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput, Prisma.listingsUpdateWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput>, Prisma.listingsUncheckedUpdateWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput>;
};
export type listingsCreateNestedOneWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutTransactionsInput, Prisma.listingsUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutTransactionsInput;
    connect?: Prisma.listingsWhereUniqueInput;
};
export type listingsUpdateOneWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutTransactionsInput, Prisma.listingsUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutTransactionsInput;
    upsert?: Prisma.listingsUpsertWithoutTransactionsInput;
    disconnect?: Prisma.listingsWhereInput | boolean;
    delete?: Prisma.listingsWhereInput | boolean;
    connect?: Prisma.listingsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.listingsUpdateToOneWithWhereWithoutTransactionsInput, Prisma.listingsUpdateWithoutTransactionsInput>, Prisma.listingsUncheckedUpdateWithoutTransactionsInput>;
};
export type listingsCreateNestedManyWithoutStore_gamesInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutStore_gamesInput, Prisma.listingsUncheckedCreateWithoutStore_gamesInput> | Prisma.listingsCreateWithoutStore_gamesInput[] | Prisma.listingsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutStore_gamesInput | Prisma.listingsCreateOrConnectWithoutStore_gamesInput[];
    createMany?: Prisma.listingsCreateManyStore_gamesInputEnvelope;
    connect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
};
export type listingsUncheckedCreateNestedManyWithoutStore_gamesInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutStore_gamesInput, Prisma.listingsUncheckedCreateWithoutStore_gamesInput> | Prisma.listingsCreateWithoutStore_gamesInput[] | Prisma.listingsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutStore_gamesInput | Prisma.listingsCreateOrConnectWithoutStore_gamesInput[];
    createMany?: Prisma.listingsCreateManyStore_gamesInputEnvelope;
    connect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
};
export type listingsUpdateManyWithoutStore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutStore_gamesInput, Prisma.listingsUncheckedCreateWithoutStore_gamesInput> | Prisma.listingsCreateWithoutStore_gamesInput[] | Prisma.listingsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutStore_gamesInput | Prisma.listingsCreateOrConnectWithoutStore_gamesInput[];
    upsert?: Prisma.listingsUpsertWithWhereUniqueWithoutStore_gamesInput | Prisma.listingsUpsertWithWhereUniqueWithoutStore_gamesInput[];
    createMany?: Prisma.listingsCreateManyStore_gamesInputEnvelope;
    set?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    disconnect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    delete?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    connect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    update?: Prisma.listingsUpdateWithWhereUniqueWithoutStore_gamesInput | Prisma.listingsUpdateWithWhereUniqueWithoutStore_gamesInput[];
    updateMany?: Prisma.listingsUpdateManyWithWhereWithoutStore_gamesInput | Prisma.listingsUpdateManyWithWhereWithoutStore_gamesInput[];
    deleteMany?: Prisma.listingsScalarWhereInput | Prisma.listingsScalarWhereInput[];
};
export type listingsUncheckedUpdateManyWithoutStore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.listingsCreateWithoutStore_gamesInput, Prisma.listingsUncheckedCreateWithoutStore_gamesInput> | Prisma.listingsCreateWithoutStore_gamesInput[] | Prisma.listingsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.listingsCreateOrConnectWithoutStore_gamesInput | Prisma.listingsCreateOrConnectWithoutStore_gamesInput[];
    upsert?: Prisma.listingsUpsertWithWhereUniqueWithoutStore_gamesInput | Prisma.listingsUpsertWithWhereUniqueWithoutStore_gamesInput[];
    createMany?: Prisma.listingsCreateManyStore_gamesInputEnvelope;
    set?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    disconnect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    delete?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    connect?: Prisma.listingsWhereUniqueInput | Prisma.listingsWhereUniqueInput[];
    update?: Prisma.listingsUpdateWithWhereUniqueWithoutStore_gamesInput | Prisma.listingsUpdateWithWhereUniqueWithoutStore_gamesInput[];
    updateMany?: Prisma.listingsUpdateManyWithWhereWithoutStore_gamesInput | Prisma.listingsUpdateManyWithWhereWithoutStore_gamesInput[];
    deleteMany?: Prisma.listingsScalarWhereInput | Prisma.listingsScalarWhereInput[];
};
export type listingsCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput = {
    id?: string;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutListingsInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersCreateNestedManyWithoutListings_listing_offers_listing_id_game_idTolistingsInput;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutListingsInput;
    transactions?: Prisma.transactionsCreateNestedManyWithoutListingsInput;
};
export type listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput = {
    id?: string;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    preferred_store_id?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutListingsInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUncheckedCreateNestedManyWithoutListings_listing_offers_listing_id_game_idTolistingsInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutListingsInput;
};
export type listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput = {
    where: Prisma.listingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput, Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput>;
};
export type listingsCreateManyInventory_items_listings_inventory_item_id_game_idToinventory_itemsInputEnvelope = {
    data: Prisma.listingsCreateManyInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput | Prisma.listingsCreateManyInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput[];
    skipDuplicates?: boolean;
};
export type listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    id?: string;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutListingsInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersCreateNestedManyWithoutListings_listing_offers_listing_id_game_idTolistingsInput;
    inventory_items_listings_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutListingsInput;
    transactions?: Prisma.transactionsCreateNestedManyWithoutListingsInput;
};
export type listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    id?: string;
    seller_user_id?: string | null;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    preferred_store_id?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutListingsInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUncheckedCreateNestedManyWithoutListings_listing_offers_listing_id_game_idTolistingsInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutListingsInput;
};
export type listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    where: Prisma.listingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput, Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput>;
};
export type listingsCreateManyInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInputEnvelope = {
    data: Prisma.listingsCreateManyInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput | Prisma.listingsCreateManyInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput[];
    skipDuplicates?: boolean;
};
export type listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    id?: string;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutListingsInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersCreateNestedManyWithoutListings_listing_offers_listing_id_game_idTolistingsInput;
    inventory_items_listings_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutListingsInput;
    transactions?: Prisma.transactionsCreateNestedManyWithoutListingsInput;
};
export type listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    id?: string;
    seller_store_id?: string | null;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    preferred_store_id?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutListingsInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUncheckedCreateNestedManyWithoutListings_listing_offers_listing_id_game_idTolistingsInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutListingsInput;
};
export type listingsCreateOrConnectWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    where: Prisma.listingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput, Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput>;
};
export type listingsCreateManyInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInputEnvelope = {
    data: Prisma.listingsCreateManyInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput | Prisma.listingsCreateManyInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput[];
    skipDuplicates?: boolean;
};
export type listingsUpsertWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput = {
    where: Prisma.listingsWhereUniqueInput;
    update: Prisma.XOR<Prisma.listingsUpdateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput, Prisma.listingsUncheckedUpdateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput, Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput>;
};
export type listingsUpdateWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput = {
    where: Prisma.listingsWhereUniqueInput;
    data: Prisma.XOR<Prisma.listingsUpdateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput, Prisma.listingsUncheckedUpdateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput>;
};
export type listingsUpdateManyWithWhereWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput = {
    where: Prisma.listingsScalarWhereInput;
    data: Prisma.XOR<Prisma.listingsUpdateManyMutationInput, Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput>;
};
export type listingsScalarWhereInput = {
    AND?: Prisma.listingsScalarWhereInput | Prisma.listingsScalarWhereInput[];
    OR?: Prisma.listingsScalarWhereInput[];
    NOT?: Prisma.listingsScalarWhereInput | Prisma.listingsScalarWhereInput[];
    id?: Prisma.UuidFilter<"listings"> | string;
    inventory_item_id?: Prisma.UuidFilter<"listings"> | string;
    seller_user_id?: Prisma.UuidNullableFilter<"listings"> | string | null;
    seller_store_id?: Prisma.UuidNullableFilter<"listings"> | string | null;
    accepts_cash?: Prisma.BoolFilter<"listings"> | boolean;
    accepts_trade?: Prisma.BoolFilter<"listings"> | boolean;
    asking_price?: Prisma.DecimalNullableFilter<"listings"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.StringNullableFilter<"listings"> | string | null;
    preferred_store_id?: Prisma.UuidNullableFilter<"listings"> | string | null;
    title?: Prisma.StringNullableFilter<"listings"> | string | null;
    description?: Prisma.StringNullableFilter<"listings"> | string | null;
    status?: Prisma.StringFilter<"listings"> | string;
    created_at?: Prisma.DateTimeFilter<"listings"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"listings"> | Date | string;
    game_id?: Prisma.UuidFilter<"listings"> | string;
};
export type listingsUpsertWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    where: Prisma.listingsWhereUniqueInput;
    update: Prisma.XOR<Prisma.listingsUpdateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput, Prisma.listingsUncheckedUpdateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput, Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput>;
};
export type listingsUpdateWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    where: Prisma.listingsWhereUniqueInput;
    data: Prisma.XOR<Prisma.listingsUpdateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput, Prisma.listingsUncheckedUpdateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput>;
};
export type listingsUpdateManyWithWhereWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    where: Prisma.listingsScalarWhereInput;
    data: Prisma.XOR<Prisma.listingsUpdateManyMutationInput, Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput>;
};
export type listingsUpsertWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    where: Prisma.listingsWhereUniqueInput;
    update: Prisma.XOR<Prisma.listingsUpdateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput, Prisma.listingsUncheckedUpdateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.listingsCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput, Prisma.listingsUncheckedCreateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput>;
};
export type listingsUpdateWithWhereUniqueWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    where: Prisma.listingsWhereUniqueInput;
    data: Prisma.XOR<Prisma.listingsUpdateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput, Prisma.listingsUncheckedUpdateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput>;
};
export type listingsUpdateManyWithWhereWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    where: Prisma.listingsScalarWhereInput;
    data: Prisma.XOR<Prisma.listingsUpdateManyMutationInput, Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput>;
};
export type listingsCreateWithoutListing_offersInput = {
    id?: string;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersCreateNestedManyWithoutListings_listing_offers_listing_id_game_idTolistingsInput;
    inventory_items_listings_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutListingsInput;
    transactions?: Prisma.transactionsCreateNestedManyWithoutListingsInput;
};
export type listingsUncheckedCreateWithoutListing_offersInput = {
    id?: string;
    inventory_item_id: string;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    preferred_store_id?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUncheckedCreateNestedManyWithoutListings_listing_offers_listing_id_game_idTolistingsInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutListingsInput;
};
export type listingsCreateOrConnectWithoutListing_offersInput = {
    where: Prisma.listingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.listingsCreateWithoutListing_offersInput, Prisma.listingsUncheckedCreateWithoutListing_offersInput>;
};
export type listingsCreateWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput = {
    id?: string;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutListingsInput;
    inventory_items_listings_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutListingsInput;
    transactions?: Prisma.transactionsCreateNestedManyWithoutListingsInput;
};
export type listingsUncheckedCreateWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput = {
    id?: string;
    inventory_item_id: string;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    preferred_store_id?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutListingsInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutListingsInput;
};
export type listingsCreateOrConnectWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput = {
    where: Prisma.listingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.listingsCreateWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput, Prisma.listingsUncheckedCreateWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput>;
};
export type listingsUpsertWithoutListing_offersInput = {
    update: Prisma.XOR<Prisma.listingsUpdateWithoutListing_offersInput, Prisma.listingsUncheckedUpdateWithoutListing_offersInput>;
    create: Prisma.XOR<Prisma.listingsCreateWithoutListing_offersInput, Prisma.listingsUncheckedCreateWithoutListing_offersInput>;
    where?: Prisma.listingsWhereInput;
};
export type listingsUpdateToOneWithWhereWithoutListing_offersInput = {
    where?: Prisma.listingsWhereInput;
    data: Prisma.XOR<Prisma.listingsUpdateWithoutListing_offersInput, Prisma.listingsUncheckedUpdateWithoutListing_offersInput>;
};
export type listingsUpdateWithoutListing_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUpdateManyWithoutListings_listing_offers_listing_id_game_idTolistingsNestedInput;
    inventory_items_listings_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutListings_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutListingsNestedInput;
    transactions?: Prisma.transactionsUpdateManyWithoutListingsNestedInput;
};
export type listingsUncheckedUpdateWithoutListing_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUncheckedUpdateManyWithoutListings_listing_offers_listing_id_game_idTolistingsNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateManyWithoutListingsNestedInput;
};
export type listingsUpsertWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput = {
    update: Prisma.XOR<Prisma.listingsUpdateWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput, Prisma.listingsUncheckedUpdateWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput>;
    create: Prisma.XOR<Prisma.listingsCreateWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput, Prisma.listingsUncheckedCreateWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput>;
    where?: Prisma.listingsWhereInput;
};
export type listingsUpdateToOneWithWhereWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput = {
    where?: Prisma.listingsWhereInput;
    data: Prisma.XOR<Prisma.listingsUpdateWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput, Prisma.listingsUncheckedUpdateWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput>;
};
export type listingsUpdateWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutListingsNestedInput;
    inventory_items_listings_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutListings_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutListingsNestedInput;
    transactions?: Prisma.transactionsUpdateManyWithoutListingsNestedInput;
};
export type listingsUncheckedUpdateWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutListingsNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateManyWithoutListingsNestedInput;
};
export type listingsCreateWithoutTransactionsInput = {
    id?: string;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutListingsInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersCreateNestedManyWithoutListings_listing_offers_listing_id_game_idTolistingsInput;
    inventory_items_listings_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutListingsInput;
};
export type listingsUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    inventory_item_id: string;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    preferred_store_id?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutListingsInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUncheckedCreateNestedManyWithoutListings_listing_offers_listing_id_game_idTolistingsInput;
};
export type listingsCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.listingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.listingsCreateWithoutTransactionsInput, Prisma.listingsUncheckedCreateWithoutTransactionsInput>;
};
export type listingsUpsertWithoutTransactionsInput = {
    update: Prisma.XOR<Prisma.listingsUpdateWithoutTransactionsInput, Prisma.listingsUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.listingsCreateWithoutTransactionsInput, Prisma.listingsUncheckedCreateWithoutTransactionsInput>;
    where?: Prisma.listingsWhereInput;
};
export type listingsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: Prisma.listingsWhereInput;
    data: Prisma.XOR<Prisma.listingsUpdateWithoutTransactionsInput, Prisma.listingsUncheckedUpdateWithoutTransactionsInput>;
};
export type listingsUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutListingsNestedInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUpdateManyWithoutListings_listing_offers_listing_id_game_idTolistingsNestedInput;
    inventory_items_listings_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutListings_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutListingsNestedInput;
};
export type listingsUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutListingsNestedInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUncheckedUpdateManyWithoutListings_listing_offers_listing_id_game_idTolistingsNestedInput;
};
export type listingsCreateWithoutStore_gamesInput = {
    id?: string;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutListingsInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersCreateNestedManyWithoutListings_listing_offers_listing_id_game_idTolistingsInput;
    inventory_items_listings_inventory_item_id_game_idToinventory_items: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    transactions?: Prisma.transactionsCreateNestedManyWithoutListingsInput;
};
export type listingsUncheckedCreateWithoutStore_gamesInput = {
    id?: string;
    inventory_item_id: string;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutListingsInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUncheckedCreateNestedManyWithoutListings_listing_offers_listing_id_game_idTolistingsInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutListingsInput;
};
export type listingsCreateOrConnectWithoutStore_gamesInput = {
    where: Prisma.listingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.listingsCreateWithoutStore_gamesInput, Prisma.listingsUncheckedCreateWithoutStore_gamesInput>;
};
export type listingsCreateManyStore_gamesInputEnvelope = {
    data: Prisma.listingsCreateManyStore_gamesInput | Prisma.listingsCreateManyStore_gamesInput[];
    skipDuplicates?: boolean;
};
export type listingsUpsertWithWhereUniqueWithoutStore_gamesInput = {
    where: Prisma.listingsWhereUniqueInput;
    update: Prisma.XOR<Prisma.listingsUpdateWithoutStore_gamesInput, Prisma.listingsUncheckedUpdateWithoutStore_gamesInput>;
    create: Prisma.XOR<Prisma.listingsCreateWithoutStore_gamesInput, Prisma.listingsUncheckedCreateWithoutStore_gamesInput>;
};
export type listingsUpdateWithWhereUniqueWithoutStore_gamesInput = {
    where: Prisma.listingsWhereUniqueInput;
    data: Prisma.XOR<Prisma.listingsUpdateWithoutStore_gamesInput, Prisma.listingsUncheckedUpdateWithoutStore_gamesInput>;
};
export type listingsUpdateManyWithWhereWithoutStore_gamesInput = {
    where: Prisma.listingsScalarWhereInput;
    data: Prisma.XOR<Prisma.listingsUpdateManyMutationInput, Prisma.listingsUncheckedUpdateManyWithoutStore_gamesInput>;
};
export type listingsCreateManyInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput = {
    id?: string;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    preferred_store_id?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type listingsCreateManyInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    id?: string;
    seller_user_id?: string | null;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    preferred_store_id?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type listingsCreateManyInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    id?: string;
    seller_store_id?: string | null;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    preferred_store_id?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type listingsUpdateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutListingsNestedInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUpdateManyWithoutListings_listing_offers_listing_id_game_idTolistingsNestedInput;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutListingsNestedInput;
    transactions?: Prisma.transactionsUpdateManyWithoutListingsNestedInput;
};
export type listingsUncheckedUpdateWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutListingsNestedInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUncheckedUpdateManyWithoutListings_listing_offers_listing_id_game_idTolistingsNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateManyWithoutListingsNestedInput;
};
export type listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type listingsUpdateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutListingsNestedInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUpdateManyWithoutListings_listing_offers_listing_id_game_idTolistingsNestedInput;
    inventory_items_listings_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutListings_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutListingsNestedInput;
    transactions?: Prisma.transactionsUpdateManyWithoutListingsNestedInput;
};
export type listingsUncheckedUpdateWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutListingsNestedInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUncheckedUpdateManyWithoutListings_listing_offers_listing_id_game_idTolistingsNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateManyWithoutListingsNestedInput;
};
export type listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type listingsUpdateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutListingsNestedInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUpdateManyWithoutListings_listing_offers_listing_id_game_idTolistingsNestedInput;
    inventory_items_listings_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutListings_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutListingsNestedInput;
    transactions?: Prisma.transactionsUpdateManyWithoutListingsNestedInput;
};
export type listingsUncheckedUpdateWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutListingsNestedInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUncheckedUpdateManyWithoutListings_listing_offers_listing_id_game_idTolistingsNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateManyWithoutListingsNestedInput;
};
export type listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type listingsCreateManyStore_gamesInput = {
    id?: string;
    inventory_item_id: string;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    title?: string | null;
    description?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type listingsUpdateWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutListingsNestedInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUpdateManyWithoutListings_listing_offers_listing_id_game_idTolistingsNestedInput;
    inventory_items_listings_inventory_item_id_game_idToinventory_items?: Prisma.inventory_itemsUpdateOneRequiredWithoutListings_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.inventory_itemsUpdateOneWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    transactions?: Prisma.transactionsUpdateManyWithoutListingsNestedInput;
};
export type listingsUncheckedUpdateWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutListingsNestedInput;
    listing_offers_listing_offers_listing_id_game_idTolistings?: Prisma.listing_offersUncheckedUpdateManyWithoutListings_listing_offers_listing_id_game_idTolistingsNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateManyWithoutListingsNestedInput;
};
export type listingsUncheckedUpdateManyWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepts_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accepts_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    asking_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ListingsCountOutputType
 */
export type ListingsCountOutputType = {
    listing_offers: number;
    listing_offers_listing_offers_listing_id_game_idTolistings: number;
    transactions: number;
};
export type ListingsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listing_offers?: boolean | ListingsCountOutputTypeCountListing_offersArgs;
    listing_offers_listing_offers_listing_id_game_idTolistings?: boolean | ListingsCountOutputTypeCountListing_offers_listing_offers_listing_id_game_idTolistingsArgs;
    transactions?: boolean | ListingsCountOutputTypeCountTransactionsArgs;
};
/**
 * ListingsCountOutputType without action
 */
export type ListingsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingsCountOutputType
     */
    select?: Prisma.ListingsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ListingsCountOutputType without action
 */
export type ListingsCountOutputTypeCountListing_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listing_offersWhereInput;
};
/**
 * ListingsCountOutputType without action
 */
export type ListingsCountOutputTypeCountListing_offers_listing_offers_listing_id_game_idTolistingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listing_offersWhereInput;
};
/**
 * ListingsCountOutputType without action
 */
export type ListingsCountOutputTypeCountTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transactionsWhereInput;
};
export type listingsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inventory_item_id?: boolean;
    seller_user_id?: boolean;
    seller_store_id?: boolean;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: boolean;
    currency_code?: boolean;
    preferred_store_id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    listing_offers?: boolean | Prisma.listings$listing_offersArgs<ExtArgs>;
    listing_offers_listing_offers_listing_id_game_idTolistings?: boolean | Prisma.listings$listing_offers_listing_offers_listing_id_game_idTolistingsArgs<ExtArgs>;
    inventory_items_listings_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: boolean | Prisma.listings$inventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsArgs<ExtArgs>;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: boolean | Prisma.listings$inventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsArgs<ExtArgs>;
    store_games?: boolean | Prisma.listings$store_gamesArgs<ExtArgs>;
    transactions?: boolean | Prisma.listings$transactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.ListingsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["listings"]>;
export type listingsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inventory_item_id?: boolean;
    seller_user_id?: boolean;
    seller_store_id?: boolean;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: boolean;
    currency_code?: boolean;
    preferred_store_id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    inventory_items_listings_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: boolean | Prisma.listings$inventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsArgs<ExtArgs>;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: boolean | Prisma.listings$inventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsArgs<ExtArgs>;
    store_games?: boolean | Prisma.listings$store_gamesArgs<ExtArgs>;
}, ExtArgs["result"]["listings"]>;
export type listingsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    inventory_item_id?: boolean;
    seller_user_id?: boolean;
    seller_store_id?: boolean;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: boolean;
    currency_code?: boolean;
    preferred_store_id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    inventory_items_listings_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: boolean | Prisma.listings$inventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsArgs<ExtArgs>;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: boolean | Prisma.listings$inventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsArgs<ExtArgs>;
    store_games?: boolean | Prisma.listings$store_gamesArgs<ExtArgs>;
}, ExtArgs["result"]["listings"]>;
export type listingsSelectScalar = {
    id?: boolean;
    inventory_item_id?: boolean;
    seller_user_id?: boolean;
    seller_store_id?: boolean;
    accepts_cash?: boolean;
    accepts_trade?: boolean;
    asking_price?: boolean;
    currency_code?: boolean;
    preferred_store_id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
};
export type listingsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "inventory_item_id" | "seller_user_id" | "seller_store_id" | "accepts_cash" | "accepts_trade" | "asking_price" | "currency_code" | "preferred_store_id" | "title" | "description" | "status" | "created_at" | "updated_at" | "game_id", ExtArgs["result"]["listings"]>;
export type listingsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listing_offers?: boolean | Prisma.listings$listing_offersArgs<ExtArgs>;
    listing_offers_listing_offers_listing_id_game_idTolistings?: boolean | Prisma.listings$listing_offers_listing_offers_listing_id_game_idTolistingsArgs<ExtArgs>;
    inventory_items_listings_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: boolean | Prisma.listings$inventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsArgs<ExtArgs>;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: boolean | Prisma.listings$inventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsArgs<ExtArgs>;
    store_games?: boolean | Prisma.listings$store_gamesArgs<ExtArgs>;
    transactions?: boolean | Prisma.listings$transactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.ListingsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type listingsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_items_listings_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: boolean | Prisma.listings$inventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsArgs<ExtArgs>;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: boolean | Prisma.listings$inventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsArgs<ExtArgs>;
    store_games?: boolean | Prisma.listings$store_gamesArgs<ExtArgs>;
};
export type listingsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_items_listings_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_itemsDefaultArgs<ExtArgs>;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items?: boolean | Prisma.listings$inventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsArgs<ExtArgs>;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items?: boolean | Prisma.listings$inventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsArgs<ExtArgs>;
    store_games?: boolean | Prisma.listings$store_gamesArgs<ExtArgs>;
};
export type $listingsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "listings";
    objects: {
        listing_offers: Prisma.$listing_offersPayload<ExtArgs>[];
        listing_offers_listing_offers_listing_id_game_idTolistings: Prisma.$listing_offersPayload<ExtArgs>[];
        inventory_items_listings_inventory_item_id_game_idToinventory_items: Prisma.$inventory_itemsPayload<ExtArgs>;
        inventory_items_listings_inventory_item_id_seller_store_idToinventory_items: Prisma.$inventory_itemsPayload<ExtArgs> | null;
        inventory_items_listings_inventory_item_id_seller_user_idToinventory_items: Prisma.$inventory_itemsPayload<ExtArgs> | null;
        store_games: Prisma.$store_gamesPayload<ExtArgs> | null;
        transactions: Prisma.$transactionsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        inventory_item_id: string;
        seller_user_id: string | null;
        seller_store_id: string | null;
        accepts_cash: boolean;
        accepts_trade: boolean;
        asking_price: runtime.Decimal | null;
        currency_code: string | null;
        preferred_store_id: string | null;
        title: string | null;
        description: string | null;
        status: string;
        created_at: Date;
        updated_at: Date;
        game_id: string;
    }, ExtArgs["result"]["listings"]>;
    composites: {};
};
export type listingsGetPayload<S extends boolean | null | undefined | listingsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$listingsPayload, S>;
export type listingsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<listingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ListingsCountAggregateInputType | true;
};
export interface listingsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['listings'];
        meta: {
            name: 'listings';
        };
    };
    /**
     * Find zero or one Listings that matches the filter.
     * @param {listingsFindUniqueArgs} args - Arguments to find a Listings
     * @example
     * // Get one Listings
     * const listings = await prisma.listings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends listingsFindUniqueArgs>(args: Prisma.SelectSubset<T, listingsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__listingsClient<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Listings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {listingsFindUniqueOrThrowArgs} args - Arguments to find a Listings
     * @example
     * // Get one Listings
     * const listings = await prisma.listings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends listingsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, listingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__listingsClient<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listingsFindFirstArgs} args - Arguments to find a Listings
     * @example
     * // Get one Listings
     * const listings = await prisma.listings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends listingsFindFirstArgs>(args?: Prisma.SelectSubset<T, listingsFindFirstArgs<ExtArgs>>): Prisma.Prisma__listingsClient<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Listings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listingsFindFirstOrThrowArgs} args - Arguments to find a Listings
     * @example
     * // Get one Listings
     * const listings = await prisma.listings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends listingsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, listingsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__listingsClient<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listings
     * const listings = await prisma.listings.findMany()
     *
     * // Get first 10 Listings
     * const listings = await prisma.listings.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const listingsWithIdOnly = await prisma.listings.findMany({ select: { id: true } })
     *
     */
    findMany<T extends listingsFindManyArgs>(args?: Prisma.SelectSubset<T, listingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Listings.
     * @param {listingsCreateArgs} args - Arguments to create a Listings.
     * @example
     * // Create one Listings
     * const Listings = await prisma.listings.create({
     *   data: {
     *     // ... data to create a Listings
     *   }
     * })
     *
     */
    create<T extends listingsCreateArgs>(args: Prisma.SelectSubset<T, listingsCreateArgs<ExtArgs>>): Prisma.Prisma__listingsClient<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Listings.
     * @param {listingsCreateManyArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listings = await prisma.listings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends listingsCreateManyArgs>(args?: Prisma.SelectSubset<T, listingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Listings and returns the data saved in the database.
     * @param {listingsCreateManyAndReturnArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listings = await prisma.listings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Listings and only return the `id`
     * const listingsWithIdOnly = await prisma.listings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends listingsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, listingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Listings.
     * @param {listingsDeleteArgs} args - Arguments to delete one Listings.
     * @example
     * // Delete one Listings
     * const Listings = await prisma.listings.delete({
     *   where: {
     *     // ... filter to delete one Listings
     *   }
     * })
     *
     */
    delete<T extends listingsDeleteArgs>(args: Prisma.SelectSubset<T, listingsDeleteArgs<ExtArgs>>): Prisma.Prisma__listingsClient<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Listings.
     * @param {listingsUpdateArgs} args - Arguments to update one Listings.
     * @example
     * // Update one Listings
     * const listings = await prisma.listings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends listingsUpdateArgs>(args: Prisma.SelectSubset<T, listingsUpdateArgs<ExtArgs>>): Prisma.Prisma__listingsClient<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Listings.
     * @param {listingsDeleteManyArgs} args - Arguments to filter Listings to delete.
     * @example
     * // Delete a few Listings
     * const { count } = await prisma.listings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends listingsDeleteManyArgs>(args?: Prisma.SelectSubset<T, listingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listings
     * const listings = await prisma.listings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends listingsUpdateManyArgs>(args: Prisma.SelectSubset<T, listingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Listings and returns the data updated in the database.
     * @param {listingsUpdateManyAndReturnArgs} args - Arguments to update many Listings.
     * @example
     * // Update many Listings
     * const listings = await prisma.listings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Listings and only return the `id`
     * const listingsWithIdOnly = await prisma.listings.updateManyAndReturn({
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
    updateManyAndReturn<T extends listingsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, listingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Listings.
     * @param {listingsUpsertArgs} args - Arguments to update or create a Listings.
     * @example
     * // Update or create a Listings
     * const listings = await prisma.listings.upsert({
     *   create: {
     *     // ... data to create a Listings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listings we want to update
     *   }
     * })
     */
    upsert<T extends listingsUpsertArgs>(args: Prisma.SelectSubset<T, listingsUpsertArgs<ExtArgs>>): Prisma.Prisma__listingsClient<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listingsCountArgs} args - Arguments to filter Listings to count.
     * @example
     * // Count the number of Listings
     * const count = await prisma.listings.count({
     *   where: {
     *     // ... the filter for the Listings we want to count
     *   }
     * })
    **/
    count<T extends listingsCountArgs>(args?: Prisma.Subset<T, listingsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ListingsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListingsAggregateArgs>(args: Prisma.Subset<T, ListingsAggregateArgs>): Prisma.PrismaPromise<GetListingsAggregateType<T>>;
    /**
     * Group by Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listingsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends listingsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: listingsGroupByArgs['orderBy'];
    } : {
        orderBy?: listingsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, listingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the listings model
     */
    readonly fields: listingsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for listings.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__listingsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    listing_offers<T extends Prisma.listings$listing_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listings$listing_offersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    listing_offers_listing_offers_listing_id_game_idTolistings<T extends Prisma.listings$listing_offers_listing_offers_listing_id_game_idTolistingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listings$listing_offers_listing_offers_listing_id_game_idTolistingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    inventory_items_listings_inventory_item_id_game_idToinventory_items<T extends Prisma.inventory_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    inventory_items_listings_inventory_item_id_seller_store_idToinventory_items<T extends Prisma.listings$inventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listings$inventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    inventory_items_listings_inventory_item_id_seller_user_idToinventory_items<T extends Prisma.listings$inventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listings$inventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    store_games<T extends Prisma.listings$store_gamesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listings$store_gamesArgs<ExtArgs>>): Prisma.Prisma__store_gamesClient<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    transactions<T extends Prisma.listings$transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listings$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the listings model
 */
export interface listingsFieldRefs {
    readonly id: Prisma.FieldRef<"listings", 'String'>;
    readonly inventory_item_id: Prisma.FieldRef<"listings", 'String'>;
    readonly seller_user_id: Prisma.FieldRef<"listings", 'String'>;
    readonly seller_store_id: Prisma.FieldRef<"listings", 'String'>;
    readonly accepts_cash: Prisma.FieldRef<"listings", 'Boolean'>;
    readonly accepts_trade: Prisma.FieldRef<"listings", 'Boolean'>;
    readonly asking_price: Prisma.FieldRef<"listings", 'Decimal'>;
    readonly currency_code: Prisma.FieldRef<"listings", 'String'>;
    readonly preferred_store_id: Prisma.FieldRef<"listings", 'String'>;
    readonly title: Prisma.FieldRef<"listings", 'String'>;
    readonly description: Prisma.FieldRef<"listings", 'String'>;
    readonly status: Prisma.FieldRef<"listings", 'String'>;
    readonly created_at: Prisma.FieldRef<"listings", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"listings", 'DateTime'>;
    readonly game_id: Prisma.FieldRef<"listings", 'String'>;
}
/**
 * listings findUnique
 */
export type listingsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which listings to fetch.
     */
    where: Prisma.listingsWhereUniqueInput;
};
/**
 * listings findUniqueOrThrow
 */
export type listingsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which listings to fetch.
     */
    where: Prisma.listingsWhereUniqueInput;
};
/**
 * listings findFirst
 */
export type listingsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which listings to fetch.
     */
    where?: Prisma.listingsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of listings to fetch.
     */
    orderBy?: Prisma.listingsOrderByWithRelationInput | Prisma.listingsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for listings.
     */
    cursor?: Prisma.listingsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` listings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` listings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of listings.
     */
    distinct?: Prisma.ListingsScalarFieldEnum | Prisma.ListingsScalarFieldEnum[];
};
/**
 * listings findFirstOrThrow
 */
export type listingsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which listings to fetch.
     */
    where?: Prisma.listingsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of listings to fetch.
     */
    orderBy?: Prisma.listingsOrderByWithRelationInput | Prisma.listingsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for listings.
     */
    cursor?: Prisma.listingsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` listings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` listings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of listings.
     */
    distinct?: Prisma.ListingsScalarFieldEnum | Prisma.ListingsScalarFieldEnum[];
};
/**
 * listings findMany
 */
export type listingsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which listings to fetch.
     */
    where?: Prisma.listingsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of listings to fetch.
     */
    orderBy?: Prisma.listingsOrderByWithRelationInput | Prisma.listingsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing listings.
     */
    cursor?: Prisma.listingsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` listings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` listings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of listings.
     */
    distinct?: Prisma.ListingsScalarFieldEnum | Prisma.ListingsScalarFieldEnum[];
};
/**
 * listings create
 */
export type listingsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a listings.
     */
    data: Prisma.XOR<Prisma.listingsCreateInput, Prisma.listingsUncheckedCreateInput>;
};
/**
 * listings createMany
 */
export type listingsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many listings.
     */
    data: Prisma.listingsCreateManyInput | Prisma.listingsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * listings createManyAndReturn
 */
export type listingsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listings
     */
    select?: Prisma.listingsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the listings
     */
    omit?: Prisma.listingsOmit<ExtArgs> | null;
    /**
     * The data used to create many listings.
     */
    data: Prisma.listingsCreateManyInput | Prisma.listingsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.listingsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * listings update
 */
export type listingsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a listings.
     */
    data: Prisma.XOR<Prisma.listingsUpdateInput, Prisma.listingsUncheckedUpdateInput>;
    /**
     * Choose, which listings to update.
     */
    where: Prisma.listingsWhereUniqueInput;
};
/**
 * listings updateMany
 */
export type listingsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update listings.
     */
    data: Prisma.XOR<Prisma.listingsUpdateManyMutationInput, Prisma.listingsUncheckedUpdateManyInput>;
    /**
     * Filter which listings to update
     */
    where?: Prisma.listingsWhereInput;
    /**
     * Limit how many listings to update.
     */
    limit?: number;
};
/**
 * listings updateManyAndReturn
 */
export type listingsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listings
     */
    select?: Prisma.listingsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the listings
     */
    omit?: Prisma.listingsOmit<ExtArgs> | null;
    /**
     * The data used to update listings.
     */
    data: Prisma.XOR<Prisma.listingsUpdateManyMutationInput, Prisma.listingsUncheckedUpdateManyInput>;
    /**
     * Filter which listings to update
     */
    where?: Prisma.listingsWhereInput;
    /**
     * Limit how many listings to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.listingsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * listings upsert
 */
export type listingsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the listings to update in case it exists.
     */
    where: Prisma.listingsWhereUniqueInput;
    /**
     * In case the listings found by the `where` argument doesn't exist, create a new listings with this data.
     */
    create: Prisma.XOR<Prisma.listingsCreateInput, Prisma.listingsUncheckedCreateInput>;
    /**
     * In case the listings was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.listingsUpdateInput, Prisma.listingsUncheckedUpdateInput>;
};
/**
 * listings delete
 */
export type listingsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which listings to delete.
     */
    where: Prisma.listingsWhereUniqueInput;
};
/**
 * listings deleteMany
 */
export type listingsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which listings to delete
     */
    where?: Prisma.listingsWhereInput;
    /**
     * Limit how many listings to delete.
     */
    limit?: number;
};
/**
 * listings.listing_offers
 */
export type listings$listing_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * listings.listing_offers_listing_offers_listing_id_game_idTolistings
 */
export type listings$listing_offers_listing_offers_listing_id_game_idTolistingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * listings.inventory_items_listings_inventory_item_id_seller_store_idToinventory_items
 */
export type listings$inventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * listings.inventory_items_listings_inventory_item_id_seller_user_idToinventory_items
 */
export type listings$inventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * listings.store_games
 */
export type listings$store_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * listings.transactions
 */
export type listings$transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * listings without action
 */
export type listingsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
