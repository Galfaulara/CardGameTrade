import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model listing_offers
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type listing_offersModel = runtime.Types.Result.DefaultSelection<Prisma.$listing_offersPayload>;
export type AggregateListing_offers = {
    _count: Listing_offersCountAggregateOutputType | null;
    _avg: Listing_offersAvgAggregateOutputType | null;
    _sum: Listing_offersSumAggregateOutputType | null;
    _min: Listing_offersMinAggregateOutputType | null;
    _max: Listing_offersMaxAggregateOutputType | null;
};
export type Listing_offersAvgAggregateOutputType = {
    cash_amount: runtime.Decimal | null;
};
export type Listing_offersSumAggregateOutputType = {
    cash_amount: runtime.Decimal | null;
};
export type Listing_offersMinAggregateOutputType = {
    id: string | null;
    listing_id: string | null;
    offerer_user_id: string | null;
    offerer_store_id: string | null;
    cash_amount: runtime.Decimal | null;
    currency_code: string | null;
    message: string | null;
    visibility: string | null;
    status: string | null;
    expires_at: Date | null;
    responded_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    game_id: string | null;
};
export type Listing_offersMaxAggregateOutputType = {
    id: string | null;
    listing_id: string | null;
    offerer_user_id: string | null;
    offerer_store_id: string | null;
    cash_amount: runtime.Decimal | null;
    currency_code: string | null;
    message: string | null;
    visibility: string | null;
    status: string | null;
    expires_at: Date | null;
    responded_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    game_id: string | null;
};
export type Listing_offersCountAggregateOutputType = {
    id: number;
    listing_id: number;
    offerer_user_id: number;
    offerer_store_id: number;
    cash_amount: number;
    currency_code: number;
    message: number;
    visibility: number;
    status: number;
    expires_at: number;
    responded_at: number;
    created_at: number;
    updated_at: number;
    game_id: number;
    _all: number;
};
export type Listing_offersAvgAggregateInputType = {
    cash_amount?: true;
};
export type Listing_offersSumAggregateInputType = {
    cash_amount?: true;
};
export type Listing_offersMinAggregateInputType = {
    id?: true;
    listing_id?: true;
    offerer_user_id?: true;
    offerer_store_id?: true;
    cash_amount?: true;
    currency_code?: true;
    message?: true;
    visibility?: true;
    status?: true;
    expires_at?: true;
    responded_at?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
};
export type Listing_offersMaxAggregateInputType = {
    id?: true;
    listing_id?: true;
    offerer_user_id?: true;
    offerer_store_id?: true;
    cash_amount?: true;
    currency_code?: true;
    message?: true;
    visibility?: true;
    status?: true;
    expires_at?: true;
    responded_at?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
};
export type Listing_offersCountAggregateInputType = {
    id?: true;
    listing_id?: true;
    offerer_user_id?: true;
    offerer_store_id?: true;
    cash_amount?: true;
    currency_code?: true;
    message?: true;
    visibility?: true;
    status?: true;
    expires_at?: true;
    responded_at?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
    _all?: true;
};
export type Listing_offersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which listing_offers to aggregate.
     */
    where?: Prisma.listing_offersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of listing_offers to fetch.
     */
    orderBy?: Prisma.listing_offersOrderByWithRelationInput | Prisma.listing_offersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.listing_offersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` listing_offers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` listing_offers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned listing_offers
    **/
    _count?: true | Listing_offersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Listing_offersAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Listing_offersSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Listing_offersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Listing_offersMaxAggregateInputType;
};
export type GetListing_offersAggregateType<T extends Listing_offersAggregateArgs> = {
    [P in keyof T & keyof AggregateListing_offers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateListing_offers[P]> : Prisma.GetScalarType<T[P], AggregateListing_offers[P]>;
};
export type listing_offersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listing_offersWhereInput;
    orderBy?: Prisma.listing_offersOrderByWithAggregationInput | Prisma.listing_offersOrderByWithAggregationInput[];
    by: Prisma.Listing_offersScalarFieldEnum[] | Prisma.Listing_offersScalarFieldEnum;
    having?: Prisma.listing_offersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Listing_offersCountAggregateInputType | true;
    _avg?: Listing_offersAvgAggregateInputType;
    _sum?: Listing_offersSumAggregateInputType;
    _min?: Listing_offersMinAggregateInputType;
    _max?: Listing_offersMaxAggregateInputType;
};
export type Listing_offersGroupByOutputType = {
    id: string;
    listing_id: string;
    offerer_user_id: string | null;
    offerer_store_id: string | null;
    cash_amount: runtime.Decimal;
    currency_code: string;
    message: string | null;
    visibility: string;
    status: string;
    expires_at: Date | null;
    responded_at: Date | null;
    created_at: Date;
    updated_at: Date;
    game_id: string;
    _count: Listing_offersCountAggregateOutputType | null;
    _avg: Listing_offersAvgAggregateOutputType | null;
    _sum: Listing_offersSumAggregateOutputType | null;
    _min: Listing_offersMinAggregateOutputType | null;
    _max: Listing_offersMaxAggregateOutputType | null;
};
export type GetListing_offersGroupByPayload<T extends listing_offersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Listing_offersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Listing_offersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Listing_offersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Listing_offersGroupByOutputType[P]>;
}>>;
export type listing_offersWhereInput = {
    AND?: Prisma.listing_offersWhereInput | Prisma.listing_offersWhereInput[];
    OR?: Prisma.listing_offersWhereInput[];
    NOT?: Prisma.listing_offersWhereInput | Prisma.listing_offersWhereInput[];
    id?: Prisma.UuidFilter<"listing_offers"> | string;
    listing_id?: Prisma.UuidFilter<"listing_offers"> | string;
    offerer_user_id?: Prisma.UuidNullableFilter<"listing_offers"> | string | null;
    offerer_store_id?: Prisma.UuidNullableFilter<"listing_offers"> | string | null;
    cash_amount?: Prisma.DecimalFilter<"listing_offers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFilter<"listing_offers"> | string;
    message?: Prisma.StringNullableFilter<"listing_offers"> | string | null;
    visibility?: Prisma.StringFilter<"listing_offers"> | string;
    status?: Prisma.StringFilter<"listing_offers"> | string;
    expires_at?: Prisma.DateTimeNullableFilter<"listing_offers"> | Date | string | null;
    responded_at?: Prisma.DateTimeNullableFilter<"listing_offers"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"listing_offers"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"listing_offers"> | Date | string;
    game_id?: Prisma.UuidFilter<"listing_offers"> | string;
    inventory_item_interests?: Prisma.Inventory_item_interestsListRelationFilter;
    listings?: Prisma.XOR<Prisma.ListingsScalarRelationFilter, Prisma.listingsWhereInput>;
    listings_listing_offers_listing_id_game_idTolistings?: Prisma.XOR<Prisma.ListingsScalarRelationFilter, Prisma.listingsWhereInput>;
    stores?: Prisma.XOR<Prisma.StoresNullableScalarRelationFilter, Prisma.storesWhereInput> | null;
    store_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    user_profiles?: Prisma.XOR<Prisma.User_profilesNullableScalarRelationFilter, Prisma.user_profilesWhereInput> | null;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.Offer_itemsListRelationFilter;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.Offer_itemsListRelationFilter;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.Offer_itemsListRelationFilter;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.Offer_itemsListRelationFilter;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.TransactionsListRelationFilter;
    transactions?: Prisma.XOR<Prisma.TransactionsNullableScalarRelationFilter, Prisma.transactionsWhereInput> | null;
};
export type listing_offersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    cash_amount?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    responded_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    inventory_item_interests?: Prisma.inventory_item_interestsOrderByRelationAggregateInput;
    listings?: Prisma.listingsOrderByWithRelationInput;
    listings_listing_offers_listing_id_game_idTolistings?: Prisma.listingsOrderByWithRelationInput;
    stores?: Prisma.storesOrderByWithRelationInput;
    store_games?: Prisma.store_gamesOrderByWithRelationInput;
    user_profiles?: Prisma.user_profilesOrderByWithRelationInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsOrderByRelationAggregateInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsOrderByRelationAggregateInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsOrderByRelationAggregateInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsOrderByRelationAggregateInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsOrderByRelationAggregateInput;
    transactions?: Prisma.transactionsOrderByWithRelationInput;
};
export type listing_offersWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    id_listing_id?: Prisma.listing_offersIdListing_idCompoundUniqueInput;
    id_offerer_store_id?: Prisma.listing_offersIdOfferer_store_idCompoundUniqueInput;
    id_offerer_user_id?: Prisma.listing_offersIdOfferer_user_idCompoundUniqueInput;
    id_game_id?: Prisma.listing_offersIdGame_idCompoundUniqueInput;
    AND?: Prisma.listing_offersWhereInput | Prisma.listing_offersWhereInput[];
    OR?: Prisma.listing_offersWhereInput[];
    NOT?: Prisma.listing_offersWhereInput | Prisma.listing_offersWhereInput[];
    listing_id?: Prisma.UuidFilter<"listing_offers"> | string;
    offerer_user_id?: Prisma.UuidNullableFilter<"listing_offers"> | string | null;
    offerer_store_id?: Prisma.UuidNullableFilter<"listing_offers"> | string | null;
    cash_amount?: Prisma.DecimalFilter<"listing_offers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFilter<"listing_offers"> | string;
    message?: Prisma.StringNullableFilter<"listing_offers"> | string | null;
    visibility?: Prisma.StringFilter<"listing_offers"> | string;
    status?: Prisma.StringFilter<"listing_offers"> | string;
    expires_at?: Prisma.DateTimeNullableFilter<"listing_offers"> | Date | string | null;
    responded_at?: Prisma.DateTimeNullableFilter<"listing_offers"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"listing_offers"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"listing_offers"> | Date | string;
    game_id?: Prisma.UuidFilter<"listing_offers"> | string;
    inventory_item_interests?: Prisma.Inventory_item_interestsListRelationFilter;
    listings?: Prisma.XOR<Prisma.ListingsScalarRelationFilter, Prisma.listingsWhereInput>;
    listings_listing_offers_listing_id_game_idTolistings?: Prisma.XOR<Prisma.ListingsScalarRelationFilter, Prisma.listingsWhereInput>;
    stores?: Prisma.XOR<Prisma.StoresNullableScalarRelationFilter, Prisma.storesWhereInput> | null;
    store_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    user_profiles?: Prisma.XOR<Prisma.User_profilesNullableScalarRelationFilter, Prisma.user_profilesWhereInput> | null;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.Offer_itemsListRelationFilter;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.Offer_itemsListRelationFilter;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.Offer_itemsListRelationFilter;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.Offer_itemsListRelationFilter;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.TransactionsListRelationFilter;
    transactions?: Prisma.XOR<Prisma.TransactionsNullableScalarRelationFilter, Prisma.transactionsWhereInput> | null;
}, "id" | "id_listing_id" | "id_offerer_store_id" | "id_offerer_user_id" | "id_game_id">;
export type listing_offersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    cash_amount?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    responded_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    _count?: Prisma.listing_offersCountOrderByAggregateInput;
    _avg?: Prisma.listing_offersAvgOrderByAggregateInput;
    _max?: Prisma.listing_offersMaxOrderByAggregateInput;
    _min?: Prisma.listing_offersMinOrderByAggregateInput;
    _sum?: Prisma.listing_offersSumOrderByAggregateInput;
};
export type listing_offersScalarWhereWithAggregatesInput = {
    AND?: Prisma.listing_offersScalarWhereWithAggregatesInput | Prisma.listing_offersScalarWhereWithAggregatesInput[];
    OR?: Prisma.listing_offersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.listing_offersScalarWhereWithAggregatesInput | Prisma.listing_offersScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"listing_offers"> | string;
    listing_id?: Prisma.UuidWithAggregatesFilter<"listing_offers"> | string;
    offerer_user_id?: Prisma.UuidNullableWithAggregatesFilter<"listing_offers"> | string | null;
    offerer_store_id?: Prisma.UuidNullableWithAggregatesFilter<"listing_offers"> | string | null;
    cash_amount?: Prisma.DecimalWithAggregatesFilter<"listing_offers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringWithAggregatesFilter<"listing_offers"> | string;
    message?: Prisma.StringNullableWithAggregatesFilter<"listing_offers"> | string | null;
    visibility?: Prisma.StringWithAggregatesFilter<"listing_offers"> | string;
    status?: Prisma.StringWithAggregatesFilter<"listing_offers"> | string;
    expires_at?: Prisma.DateTimeNullableWithAggregatesFilter<"listing_offers"> | Date | string | null;
    responded_at?: Prisma.DateTimeNullableWithAggregatesFilter<"listing_offers"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"listing_offers"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"listing_offers"> | Date | string;
    game_id?: Prisma.UuidWithAggregatesFilter<"listing_offers"> | string;
};
export type listing_offersCreateInput = {
    id?: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutListing_offersInput;
    listings: Prisma.listingsCreateNestedOneWithoutListing_offersInput;
    listings_listing_offers_listing_id_game_idTolistings: Prisma.listingsCreateNestedOneWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput;
    stores?: Prisma.storesCreateNestedOneWithoutListing_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutListing_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersUncheckedCreateInput = {
    id?: string;
    listing_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutListing_offersNestedInput;
    listings?: Prisma.listingsUpdateOneRequiredWithoutListing_offersNestedInput;
    listings_listing_offers_listing_id_game_idTolistings?: Prisma.listingsUpdateOneRequiredWithoutListing_offers_listing_offers_listing_id_game_idTolistingsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutListing_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutListing_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersCreateManyInput = {
    id?: string;
    listing_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type listing_offersUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type listing_offersUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Listing_offersNullableScalarRelationFilter = {
    is?: Prisma.listing_offersWhereInput | null;
    isNot?: Prisma.listing_offersWhereInput | null;
};
export type listing_offersIdListing_idCompoundUniqueInput = {
    id: string;
    listing_id: string;
};
export type listing_offersIdOfferer_store_idCompoundUniqueInput = {
    id: string;
    offerer_store_id: string;
};
export type listing_offersIdOfferer_user_idCompoundUniqueInput = {
    id: string;
    offerer_user_id: string;
};
export type listing_offersIdGame_idCompoundUniqueInput = {
    id: string;
    game_id: string;
};
export type listing_offersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrder;
    cash_amount?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    responded_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type listing_offersAvgOrderByAggregateInput = {
    cash_amount?: Prisma.SortOrder;
};
export type listing_offersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrder;
    cash_amount?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    responded_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type listing_offersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrder;
    cash_amount?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    responded_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type listing_offersSumOrderByAggregateInput = {
    cash_amount?: Prisma.SortOrder;
};
export type Listing_offersListRelationFilter = {
    every?: Prisma.listing_offersWhereInput;
    some?: Prisma.listing_offersWhereInput;
    none?: Prisma.listing_offersWhereInput;
};
export type listing_offersOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Listing_offersScalarRelationFilter = {
    is?: Prisma.listing_offersWhereInput;
    isNot?: Prisma.listing_offersWhereInput;
};
export type listing_offersCreateNestedOneWithoutInventory_item_interestsInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutInventory_item_interestsInput, Prisma.listing_offersUncheckedCreateWithoutInventory_item_interestsInput>;
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutInventory_item_interestsInput;
    connect?: Prisma.listing_offersWhereUniqueInput;
};
export type listing_offersUpdateOneWithoutInventory_item_interestsNestedInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutInventory_item_interestsInput, Prisma.listing_offersUncheckedCreateWithoutInventory_item_interestsInput>;
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutInventory_item_interestsInput;
    upsert?: Prisma.listing_offersUpsertWithoutInventory_item_interestsInput;
    disconnect?: Prisma.listing_offersWhereInput | boolean;
    delete?: Prisma.listing_offersWhereInput | boolean;
    connect?: Prisma.listing_offersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.listing_offersUpdateToOneWithWhereWithoutInventory_item_interestsInput, Prisma.listing_offersUpdateWithoutInventory_item_interestsInput>, Prisma.listing_offersUncheckedUpdateWithoutInventory_item_interestsInput>;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type listing_offersCreateNestedManyWithoutListingsInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutListingsInput, Prisma.listing_offersUncheckedCreateWithoutListingsInput> | Prisma.listing_offersCreateWithoutListingsInput[] | Prisma.listing_offersUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutListingsInput | Prisma.listing_offersCreateOrConnectWithoutListingsInput[];
    createMany?: Prisma.listing_offersCreateManyListingsInputEnvelope;
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
};
export type listing_offersCreateNestedManyWithoutListings_listing_offers_listing_id_game_idTolistingsInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput, Prisma.listing_offersUncheckedCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput> | Prisma.listing_offersCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput[] | Prisma.listing_offersUncheckedCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutListings_listing_offers_listing_id_game_idTolistingsInput | Prisma.listing_offersCreateOrConnectWithoutListings_listing_offers_listing_id_game_idTolistingsInput[];
    createMany?: Prisma.listing_offersCreateManyListings_listing_offers_listing_id_game_idTolistingsInputEnvelope;
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
};
export type listing_offersUncheckedCreateNestedManyWithoutListingsInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutListingsInput, Prisma.listing_offersUncheckedCreateWithoutListingsInput> | Prisma.listing_offersCreateWithoutListingsInput[] | Prisma.listing_offersUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutListingsInput | Prisma.listing_offersCreateOrConnectWithoutListingsInput[];
    createMany?: Prisma.listing_offersCreateManyListingsInputEnvelope;
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
};
export type listing_offersUncheckedCreateNestedManyWithoutListings_listing_offers_listing_id_game_idTolistingsInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput, Prisma.listing_offersUncheckedCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput> | Prisma.listing_offersCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput[] | Prisma.listing_offersUncheckedCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutListings_listing_offers_listing_id_game_idTolistingsInput | Prisma.listing_offersCreateOrConnectWithoutListings_listing_offers_listing_id_game_idTolistingsInput[];
    createMany?: Prisma.listing_offersCreateManyListings_listing_offers_listing_id_game_idTolistingsInputEnvelope;
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
};
export type listing_offersUpdateManyWithoutListingsNestedInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutListingsInput, Prisma.listing_offersUncheckedCreateWithoutListingsInput> | Prisma.listing_offersCreateWithoutListingsInput[] | Prisma.listing_offersUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutListingsInput | Prisma.listing_offersCreateOrConnectWithoutListingsInput[];
    upsert?: Prisma.listing_offersUpsertWithWhereUniqueWithoutListingsInput | Prisma.listing_offersUpsertWithWhereUniqueWithoutListingsInput[];
    createMany?: Prisma.listing_offersCreateManyListingsInputEnvelope;
    set?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    disconnect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    delete?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    update?: Prisma.listing_offersUpdateWithWhereUniqueWithoutListingsInput | Prisma.listing_offersUpdateWithWhereUniqueWithoutListingsInput[];
    updateMany?: Prisma.listing_offersUpdateManyWithWhereWithoutListingsInput | Prisma.listing_offersUpdateManyWithWhereWithoutListingsInput[];
    deleteMany?: Prisma.listing_offersScalarWhereInput | Prisma.listing_offersScalarWhereInput[];
};
export type listing_offersUpdateManyWithoutListings_listing_offers_listing_id_game_idTolistingsNestedInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput, Prisma.listing_offersUncheckedCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput> | Prisma.listing_offersCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput[] | Prisma.listing_offersUncheckedCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutListings_listing_offers_listing_id_game_idTolistingsInput | Prisma.listing_offersCreateOrConnectWithoutListings_listing_offers_listing_id_game_idTolistingsInput[];
    upsert?: Prisma.listing_offersUpsertWithWhereUniqueWithoutListings_listing_offers_listing_id_game_idTolistingsInput | Prisma.listing_offersUpsertWithWhereUniqueWithoutListings_listing_offers_listing_id_game_idTolistingsInput[];
    createMany?: Prisma.listing_offersCreateManyListings_listing_offers_listing_id_game_idTolistingsInputEnvelope;
    set?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    disconnect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    delete?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    update?: Prisma.listing_offersUpdateWithWhereUniqueWithoutListings_listing_offers_listing_id_game_idTolistingsInput | Prisma.listing_offersUpdateWithWhereUniqueWithoutListings_listing_offers_listing_id_game_idTolistingsInput[];
    updateMany?: Prisma.listing_offersUpdateManyWithWhereWithoutListings_listing_offers_listing_id_game_idTolistingsInput | Prisma.listing_offersUpdateManyWithWhereWithoutListings_listing_offers_listing_id_game_idTolistingsInput[];
    deleteMany?: Prisma.listing_offersScalarWhereInput | Prisma.listing_offersScalarWhereInput[];
};
export type listing_offersUncheckedUpdateManyWithoutListingsNestedInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutListingsInput, Prisma.listing_offersUncheckedCreateWithoutListingsInput> | Prisma.listing_offersCreateWithoutListingsInput[] | Prisma.listing_offersUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutListingsInput | Prisma.listing_offersCreateOrConnectWithoutListingsInput[];
    upsert?: Prisma.listing_offersUpsertWithWhereUniqueWithoutListingsInput | Prisma.listing_offersUpsertWithWhereUniqueWithoutListingsInput[];
    createMany?: Prisma.listing_offersCreateManyListingsInputEnvelope;
    set?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    disconnect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    delete?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    update?: Prisma.listing_offersUpdateWithWhereUniqueWithoutListingsInput | Prisma.listing_offersUpdateWithWhereUniqueWithoutListingsInput[];
    updateMany?: Prisma.listing_offersUpdateManyWithWhereWithoutListingsInput | Prisma.listing_offersUpdateManyWithWhereWithoutListingsInput[];
    deleteMany?: Prisma.listing_offersScalarWhereInput | Prisma.listing_offersScalarWhereInput[];
};
export type listing_offersUncheckedUpdateManyWithoutListings_listing_offers_listing_id_game_idTolistingsNestedInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput, Prisma.listing_offersUncheckedCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput> | Prisma.listing_offersCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput[] | Prisma.listing_offersUncheckedCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutListings_listing_offers_listing_id_game_idTolistingsInput | Prisma.listing_offersCreateOrConnectWithoutListings_listing_offers_listing_id_game_idTolistingsInput[];
    upsert?: Prisma.listing_offersUpsertWithWhereUniqueWithoutListings_listing_offers_listing_id_game_idTolistingsInput | Prisma.listing_offersUpsertWithWhereUniqueWithoutListings_listing_offers_listing_id_game_idTolistingsInput[];
    createMany?: Prisma.listing_offersCreateManyListings_listing_offers_listing_id_game_idTolistingsInputEnvelope;
    set?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    disconnect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    delete?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    update?: Prisma.listing_offersUpdateWithWhereUniqueWithoutListings_listing_offers_listing_id_game_idTolistingsInput | Prisma.listing_offersUpdateWithWhereUniqueWithoutListings_listing_offers_listing_id_game_idTolistingsInput[];
    updateMany?: Prisma.listing_offersUpdateManyWithWhereWithoutListings_listing_offers_listing_id_game_idTolistingsInput | Prisma.listing_offersUpdateManyWithWhereWithoutListings_listing_offers_listing_id_game_idTolistingsInput[];
    deleteMany?: Prisma.listing_offersScalarWhereInput | Prisma.listing_offersScalarWhereInput[];
};
export type listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_idTolisting_offersInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutOffer_items_offer_items_offer_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_idTolisting_offersInput>;
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutOffer_items_offer_items_offer_idTolisting_offersInput;
    connect?: Prisma.listing_offersWhereUniqueInput;
};
export type listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput>;
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput;
    connect?: Prisma.listing_offersWhereUniqueInput;
};
export type listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput>;
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    connect?: Prisma.listing_offersWhereUniqueInput;
};
export type listing_offersCreateNestedOneWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput>;
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    connect?: Prisma.listing_offersWhereUniqueInput;
};
export type listing_offersUpdateOneRequiredWithoutOffer_items_offer_items_offer_idTolisting_offersNestedInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutOffer_items_offer_items_offer_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_idTolisting_offersInput>;
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutOffer_items_offer_items_offer_idTolisting_offersInput;
    upsert?: Prisma.listing_offersUpsertWithoutOffer_items_offer_items_offer_idTolisting_offersInput;
    connect?: Prisma.listing_offersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.listing_offersUpdateToOneWithWhereWithoutOffer_items_offer_items_offer_idTolisting_offersInput, Prisma.listing_offersUpdateWithoutOffer_items_offer_items_offer_idTolisting_offersInput>, Prisma.listing_offersUncheckedUpdateWithoutOffer_items_offer_items_offer_idTolisting_offersInput>;
};
export type listing_offersUpdateOneRequiredWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersNestedInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput>;
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput;
    upsert?: Prisma.listing_offersUpsertWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput;
    connect?: Prisma.listing_offersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.listing_offersUpdateToOneWithWhereWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput, Prisma.listing_offersUpdateWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput>, Prisma.listing_offersUncheckedUpdateWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput>;
};
export type listing_offersUpdateOneWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput>;
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    upsert?: Prisma.listing_offersUpsertWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    disconnect?: Prisma.listing_offersWhereInput | boolean;
    delete?: Prisma.listing_offersWhereInput | boolean;
    connect?: Prisma.listing_offersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.listing_offersUpdateToOneWithWhereWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput, Prisma.listing_offersUpdateWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput>, Prisma.listing_offersUncheckedUpdateWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput>;
};
export type listing_offersUpdateOneWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput>;
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    upsert?: Prisma.listing_offersUpsertWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    disconnect?: Prisma.listing_offersWhereInput | boolean;
    delete?: Prisma.listing_offersWhereInput | boolean;
    connect?: Prisma.listing_offersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.listing_offersUpdateToOneWithWhereWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput, Prisma.listing_offersUpdateWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput>, Prisma.listing_offersUncheckedUpdateWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput>;
};
export type listing_offersCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutStoresInput, Prisma.listing_offersUncheckedCreateWithoutStoresInput> | Prisma.listing_offersCreateWithoutStoresInput[] | Prisma.listing_offersUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutStoresInput | Prisma.listing_offersCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.listing_offersCreateManyStoresInputEnvelope;
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
};
export type listing_offersUncheckedCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutStoresInput, Prisma.listing_offersUncheckedCreateWithoutStoresInput> | Prisma.listing_offersCreateWithoutStoresInput[] | Prisma.listing_offersUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutStoresInput | Prisma.listing_offersCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.listing_offersCreateManyStoresInputEnvelope;
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
};
export type listing_offersUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutStoresInput, Prisma.listing_offersUncheckedCreateWithoutStoresInput> | Prisma.listing_offersCreateWithoutStoresInput[] | Prisma.listing_offersUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutStoresInput | Prisma.listing_offersCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.listing_offersUpsertWithWhereUniqueWithoutStoresInput | Prisma.listing_offersUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.listing_offersCreateManyStoresInputEnvelope;
    set?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    disconnect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    delete?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    update?: Prisma.listing_offersUpdateWithWhereUniqueWithoutStoresInput | Prisma.listing_offersUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.listing_offersUpdateManyWithWhereWithoutStoresInput | Prisma.listing_offersUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.listing_offersScalarWhereInput | Prisma.listing_offersScalarWhereInput[];
};
export type listing_offersUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutStoresInput, Prisma.listing_offersUncheckedCreateWithoutStoresInput> | Prisma.listing_offersCreateWithoutStoresInput[] | Prisma.listing_offersUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutStoresInput | Prisma.listing_offersCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.listing_offersUpsertWithWhereUniqueWithoutStoresInput | Prisma.listing_offersUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.listing_offersCreateManyStoresInputEnvelope;
    set?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    disconnect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    delete?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    update?: Prisma.listing_offersUpdateWithWhereUniqueWithoutStoresInput | Prisma.listing_offersUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.listing_offersUpdateManyWithWhereWithoutStoresInput | Prisma.listing_offersUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.listing_offersScalarWhereInput | Prisma.listing_offersScalarWhereInput[];
};
export type listing_offersCreateNestedOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput>;
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput;
    connect?: Prisma.listing_offersWhereUniqueInput;
};
export type listing_offersCreateNestedOneWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutTransactionsInput, Prisma.listing_offersUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutTransactionsInput;
    connect?: Prisma.listing_offersWhereUniqueInput;
};
export type listing_offersUpdateOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersNestedInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput>;
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput;
    upsert?: Prisma.listing_offersUpsertWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput;
    disconnect?: Prisma.listing_offersWhereInput | boolean;
    delete?: Prisma.listing_offersWhereInput | boolean;
    connect?: Prisma.listing_offersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.listing_offersUpdateToOneWithWhereWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput, Prisma.listing_offersUpdateWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput>, Prisma.listing_offersUncheckedUpdateWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput>;
};
export type listing_offersUpdateOneWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutTransactionsInput, Prisma.listing_offersUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutTransactionsInput;
    upsert?: Prisma.listing_offersUpsertWithoutTransactionsInput;
    disconnect?: Prisma.listing_offersWhereInput | boolean;
    delete?: Prisma.listing_offersWhereInput | boolean;
    connect?: Prisma.listing_offersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.listing_offersUpdateToOneWithWhereWithoutTransactionsInput, Prisma.listing_offersUpdateWithoutTransactionsInput>, Prisma.listing_offersUncheckedUpdateWithoutTransactionsInput>;
};
export type listing_offersCreateNestedManyWithoutUser_profilesInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutUser_profilesInput, Prisma.listing_offersUncheckedCreateWithoutUser_profilesInput> | Prisma.listing_offersCreateWithoutUser_profilesInput[] | Prisma.listing_offersUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutUser_profilesInput | Prisma.listing_offersCreateOrConnectWithoutUser_profilesInput[];
    createMany?: Prisma.listing_offersCreateManyUser_profilesInputEnvelope;
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
};
export type listing_offersUncheckedCreateNestedManyWithoutUser_profilesInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutUser_profilesInput, Prisma.listing_offersUncheckedCreateWithoutUser_profilesInput> | Prisma.listing_offersCreateWithoutUser_profilesInput[] | Prisma.listing_offersUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutUser_profilesInput | Prisma.listing_offersCreateOrConnectWithoutUser_profilesInput[];
    createMany?: Prisma.listing_offersCreateManyUser_profilesInputEnvelope;
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
};
export type listing_offersUpdateManyWithoutUser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutUser_profilesInput, Prisma.listing_offersUncheckedCreateWithoutUser_profilesInput> | Prisma.listing_offersCreateWithoutUser_profilesInput[] | Prisma.listing_offersUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutUser_profilesInput | Prisma.listing_offersCreateOrConnectWithoutUser_profilesInput[];
    upsert?: Prisma.listing_offersUpsertWithWhereUniqueWithoutUser_profilesInput | Prisma.listing_offersUpsertWithWhereUniqueWithoutUser_profilesInput[];
    createMany?: Prisma.listing_offersCreateManyUser_profilesInputEnvelope;
    set?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    disconnect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    delete?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    update?: Prisma.listing_offersUpdateWithWhereUniqueWithoutUser_profilesInput | Prisma.listing_offersUpdateWithWhereUniqueWithoutUser_profilesInput[];
    updateMany?: Prisma.listing_offersUpdateManyWithWhereWithoutUser_profilesInput | Prisma.listing_offersUpdateManyWithWhereWithoutUser_profilesInput[];
    deleteMany?: Prisma.listing_offersScalarWhereInput | Prisma.listing_offersScalarWhereInput[];
};
export type listing_offersUncheckedUpdateManyWithoutUser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutUser_profilesInput, Prisma.listing_offersUncheckedCreateWithoutUser_profilesInput> | Prisma.listing_offersCreateWithoutUser_profilesInput[] | Prisma.listing_offersUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutUser_profilesInput | Prisma.listing_offersCreateOrConnectWithoutUser_profilesInput[];
    upsert?: Prisma.listing_offersUpsertWithWhereUniqueWithoutUser_profilesInput | Prisma.listing_offersUpsertWithWhereUniqueWithoutUser_profilesInput[];
    createMany?: Prisma.listing_offersCreateManyUser_profilesInputEnvelope;
    set?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    disconnect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    delete?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    update?: Prisma.listing_offersUpdateWithWhereUniqueWithoutUser_profilesInput | Prisma.listing_offersUpdateWithWhereUniqueWithoutUser_profilesInput[];
    updateMany?: Prisma.listing_offersUpdateManyWithWhereWithoutUser_profilesInput | Prisma.listing_offersUpdateManyWithWhereWithoutUser_profilesInput[];
    deleteMany?: Prisma.listing_offersScalarWhereInput | Prisma.listing_offersScalarWhereInput[];
};
export type listing_offersCreateNestedManyWithoutStore_gamesInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutStore_gamesInput, Prisma.listing_offersUncheckedCreateWithoutStore_gamesInput> | Prisma.listing_offersCreateWithoutStore_gamesInput[] | Prisma.listing_offersUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutStore_gamesInput | Prisma.listing_offersCreateOrConnectWithoutStore_gamesInput[];
    createMany?: Prisma.listing_offersCreateManyStore_gamesInputEnvelope;
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
};
export type listing_offersUncheckedCreateNestedManyWithoutStore_gamesInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutStore_gamesInput, Prisma.listing_offersUncheckedCreateWithoutStore_gamesInput> | Prisma.listing_offersCreateWithoutStore_gamesInput[] | Prisma.listing_offersUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutStore_gamesInput | Prisma.listing_offersCreateOrConnectWithoutStore_gamesInput[];
    createMany?: Prisma.listing_offersCreateManyStore_gamesInputEnvelope;
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
};
export type listing_offersUpdateManyWithoutStore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutStore_gamesInput, Prisma.listing_offersUncheckedCreateWithoutStore_gamesInput> | Prisma.listing_offersCreateWithoutStore_gamesInput[] | Prisma.listing_offersUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutStore_gamesInput | Prisma.listing_offersCreateOrConnectWithoutStore_gamesInput[];
    upsert?: Prisma.listing_offersUpsertWithWhereUniqueWithoutStore_gamesInput | Prisma.listing_offersUpsertWithWhereUniqueWithoutStore_gamesInput[];
    createMany?: Prisma.listing_offersCreateManyStore_gamesInputEnvelope;
    set?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    disconnect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    delete?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    update?: Prisma.listing_offersUpdateWithWhereUniqueWithoutStore_gamesInput | Prisma.listing_offersUpdateWithWhereUniqueWithoutStore_gamesInput[];
    updateMany?: Prisma.listing_offersUpdateManyWithWhereWithoutStore_gamesInput | Prisma.listing_offersUpdateManyWithWhereWithoutStore_gamesInput[];
    deleteMany?: Prisma.listing_offersScalarWhereInput | Prisma.listing_offersScalarWhereInput[];
};
export type listing_offersUncheckedUpdateManyWithoutStore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.listing_offersCreateWithoutStore_gamesInput, Prisma.listing_offersUncheckedCreateWithoutStore_gamesInput> | Prisma.listing_offersCreateWithoutStore_gamesInput[] | Prisma.listing_offersUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.listing_offersCreateOrConnectWithoutStore_gamesInput | Prisma.listing_offersCreateOrConnectWithoutStore_gamesInput[];
    upsert?: Prisma.listing_offersUpsertWithWhereUniqueWithoutStore_gamesInput | Prisma.listing_offersUpsertWithWhereUniqueWithoutStore_gamesInput[];
    createMany?: Prisma.listing_offersCreateManyStore_gamesInputEnvelope;
    set?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    disconnect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    delete?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    connect?: Prisma.listing_offersWhereUniqueInput | Prisma.listing_offersWhereUniqueInput[];
    update?: Prisma.listing_offersUpdateWithWhereUniqueWithoutStore_gamesInput | Prisma.listing_offersUpdateWithWhereUniqueWithoutStore_gamesInput[];
    updateMany?: Prisma.listing_offersUpdateManyWithWhereWithoutStore_gamesInput | Prisma.listing_offersUpdateManyWithWhereWithoutStore_gamesInput[];
    deleteMany?: Prisma.listing_offersScalarWhereInput | Prisma.listing_offersScalarWhereInput[];
};
export type listing_offersCreateWithoutInventory_item_interestsInput = {
    id?: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    listings: Prisma.listingsCreateNestedOneWithoutListing_offersInput;
    listings_listing_offers_listing_id_game_idTolistings: Prisma.listingsCreateNestedOneWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput;
    stores?: Prisma.storesCreateNestedOneWithoutListing_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutListing_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersUncheckedCreateWithoutInventory_item_interestsInput = {
    id?: string;
    listing_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersCreateOrConnectWithoutInventory_item_interestsInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutInventory_item_interestsInput, Prisma.listing_offersUncheckedCreateWithoutInventory_item_interestsInput>;
};
export type listing_offersUpsertWithoutInventory_item_interestsInput = {
    update: Prisma.XOR<Prisma.listing_offersUpdateWithoutInventory_item_interestsInput, Prisma.listing_offersUncheckedUpdateWithoutInventory_item_interestsInput>;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutInventory_item_interestsInput, Prisma.listing_offersUncheckedCreateWithoutInventory_item_interestsInput>;
    where?: Prisma.listing_offersWhereInput;
};
export type listing_offersUpdateToOneWithWhereWithoutInventory_item_interestsInput = {
    where?: Prisma.listing_offersWhereInput;
    data: Prisma.XOR<Prisma.listing_offersUpdateWithoutInventory_item_interestsInput, Prisma.listing_offersUncheckedUpdateWithoutInventory_item_interestsInput>;
};
export type listing_offersUpdateWithoutInventory_item_interestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listings?: Prisma.listingsUpdateOneRequiredWithoutListing_offersNestedInput;
    listings_listing_offers_listing_id_game_idTolistings?: Prisma.listingsUpdateOneRequiredWithoutListing_offers_listing_offers_listing_id_game_idTolistingsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutListing_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutListing_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUncheckedUpdateWithoutInventory_item_interestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersCreateWithoutListingsInput = {
    id?: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutListing_offersInput;
    listings_listing_offers_listing_id_game_idTolistings: Prisma.listingsCreateNestedOneWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput;
    stores?: Prisma.storesCreateNestedOneWithoutListing_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutListing_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersUncheckedCreateWithoutListingsInput = {
    id?: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersCreateOrConnectWithoutListingsInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutListingsInput, Prisma.listing_offersUncheckedCreateWithoutListingsInput>;
};
export type listing_offersCreateManyListingsInputEnvelope = {
    data: Prisma.listing_offersCreateManyListingsInput | Prisma.listing_offersCreateManyListingsInput[];
    skipDuplicates?: boolean;
};
export type listing_offersCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput = {
    id?: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutListing_offersInput;
    listings: Prisma.listingsCreateNestedOneWithoutListing_offersInput;
    stores?: Prisma.storesCreateNestedOneWithoutListing_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutListing_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersUncheckedCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput = {
    id?: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersCreateOrConnectWithoutListings_listing_offers_listing_id_game_idTolistingsInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput, Prisma.listing_offersUncheckedCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput>;
};
export type listing_offersCreateManyListings_listing_offers_listing_id_game_idTolistingsInputEnvelope = {
    data: Prisma.listing_offersCreateManyListings_listing_offers_listing_id_game_idTolistingsInput | Prisma.listing_offersCreateManyListings_listing_offers_listing_id_game_idTolistingsInput[];
    skipDuplicates?: boolean;
};
export type listing_offersUpsertWithWhereUniqueWithoutListingsInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    update: Prisma.XOR<Prisma.listing_offersUpdateWithoutListingsInput, Prisma.listing_offersUncheckedUpdateWithoutListingsInput>;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutListingsInput, Prisma.listing_offersUncheckedCreateWithoutListingsInput>;
};
export type listing_offersUpdateWithWhereUniqueWithoutListingsInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    data: Prisma.XOR<Prisma.listing_offersUpdateWithoutListingsInput, Prisma.listing_offersUncheckedUpdateWithoutListingsInput>;
};
export type listing_offersUpdateManyWithWhereWithoutListingsInput = {
    where: Prisma.listing_offersScalarWhereInput;
    data: Prisma.XOR<Prisma.listing_offersUpdateManyMutationInput, Prisma.listing_offersUncheckedUpdateManyWithoutListingsInput>;
};
export type listing_offersScalarWhereInput = {
    AND?: Prisma.listing_offersScalarWhereInput | Prisma.listing_offersScalarWhereInput[];
    OR?: Prisma.listing_offersScalarWhereInput[];
    NOT?: Prisma.listing_offersScalarWhereInput | Prisma.listing_offersScalarWhereInput[];
    id?: Prisma.UuidFilter<"listing_offers"> | string;
    listing_id?: Prisma.UuidFilter<"listing_offers"> | string;
    offerer_user_id?: Prisma.UuidNullableFilter<"listing_offers"> | string | null;
    offerer_store_id?: Prisma.UuidNullableFilter<"listing_offers"> | string | null;
    cash_amount?: Prisma.DecimalFilter<"listing_offers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFilter<"listing_offers"> | string;
    message?: Prisma.StringNullableFilter<"listing_offers"> | string | null;
    visibility?: Prisma.StringFilter<"listing_offers"> | string;
    status?: Prisma.StringFilter<"listing_offers"> | string;
    expires_at?: Prisma.DateTimeNullableFilter<"listing_offers"> | Date | string | null;
    responded_at?: Prisma.DateTimeNullableFilter<"listing_offers"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"listing_offers"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"listing_offers"> | Date | string;
    game_id?: Prisma.UuidFilter<"listing_offers"> | string;
};
export type listing_offersUpsertWithWhereUniqueWithoutListings_listing_offers_listing_id_game_idTolistingsInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    update: Prisma.XOR<Prisma.listing_offersUpdateWithoutListings_listing_offers_listing_id_game_idTolistingsInput, Prisma.listing_offersUncheckedUpdateWithoutListings_listing_offers_listing_id_game_idTolistingsInput>;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput, Prisma.listing_offersUncheckedCreateWithoutListings_listing_offers_listing_id_game_idTolistingsInput>;
};
export type listing_offersUpdateWithWhereUniqueWithoutListings_listing_offers_listing_id_game_idTolistingsInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    data: Prisma.XOR<Prisma.listing_offersUpdateWithoutListings_listing_offers_listing_id_game_idTolistingsInput, Prisma.listing_offersUncheckedUpdateWithoutListings_listing_offers_listing_id_game_idTolistingsInput>;
};
export type listing_offersUpdateManyWithWhereWithoutListings_listing_offers_listing_id_game_idTolistingsInput = {
    where: Prisma.listing_offersScalarWhereInput;
    data: Prisma.XOR<Prisma.listing_offersUpdateManyMutationInput, Prisma.listing_offersUncheckedUpdateManyWithoutListings_listing_offers_listing_id_game_idTolistingsInput>;
};
export type listing_offersCreateWithoutOffer_items_offer_items_offer_idTolisting_offersInput = {
    id?: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutListing_offersInput;
    listings: Prisma.listingsCreateNestedOneWithoutListing_offersInput;
    listings_listing_offers_listing_id_game_idTolistings: Prisma.listingsCreateNestedOneWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput;
    stores?: Prisma.storesCreateNestedOneWithoutListing_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutListing_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutListing_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_idTolisting_offersInput = {
    id?: string;
    listing_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutListing_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersCreateOrConnectWithoutOffer_items_offer_items_offer_idTolisting_offersInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutOffer_items_offer_items_offer_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_idTolisting_offersInput>;
};
export type listing_offersCreateWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput = {
    id?: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutListing_offersInput;
    listings: Prisma.listingsCreateNestedOneWithoutListing_offersInput;
    listings_listing_offers_listing_id_game_idTolistings: Prisma.listingsCreateNestedOneWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput;
    stores?: Prisma.storesCreateNestedOneWithoutListing_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutListing_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput = {
    id?: string;
    listing_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersCreateOrConnectWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput>;
};
export type listing_offersCreateWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    id?: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutListing_offersInput;
    listings: Prisma.listingsCreateNestedOneWithoutListing_offersInput;
    listings_listing_offers_listing_id_game_idTolistings: Prisma.listingsCreateNestedOneWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput;
    stores?: Prisma.storesCreateNestedOneWithoutListing_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutListing_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    id?: string;
    listing_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersCreateOrConnectWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput>;
};
export type listing_offersCreateWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    id?: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutListing_offersInput;
    listings: Prisma.listingsCreateNestedOneWithoutListing_offersInput;
    listings_listing_offers_listing_id_game_idTolistings: Prisma.listingsCreateNestedOneWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput;
    stores?: Prisma.storesCreateNestedOneWithoutListing_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutListing_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    id?: string;
    listing_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersCreateOrConnectWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput>;
};
export type listing_offersUpsertWithoutOffer_items_offer_items_offer_idTolisting_offersInput = {
    update: Prisma.XOR<Prisma.listing_offersUpdateWithoutOffer_items_offer_items_offer_idTolisting_offersInput, Prisma.listing_offersUncheckedUpdateWithoutOffer_items_offer_items_offer_idTolisting_offersInput>;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutOffer_items_offer_items_offer_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_idTolisting_offersInput>;
    where?: Prisma.listing_offersWhereInput;
};
export type listing_offersUpdateToOneWithWhereWithoutOffer_items_offer_items_offer_idTolisting_offersInput = {
    where?: Prisma.listing_offersWhereInput;
    data: Prisma.XOR<Prisma.listing_offersUpdateWithoutOffer_items_offer_items_offer_idTolisting_offersInput, Prisma.listing_offersUncheckedUpdateWithoutOffer_items_offer_items_offer_idTolisting_offersInput>;
};
export type listing_offersUpdateWithoutOffer_items_offer_items_offer_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutListing_offersNestedInput;
    listings?: Prisma.listingsUpdateOneRequiredWithoutListing_offersNestedInput;
    listings_listing_offers_listing_id_game_idTolistings?: Prisma.listingsUpdateOneRequiredWithoutListing_offers_listing_offers_listing_id_game_idTolistingsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutListing_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutListing_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUncheckedUpdateWithoutOffer_items_offer_items_offer_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUpsertWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput = {
    update: Prisma.XOR<Prisma.listing_offersUpdateWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput, Prisma.listing_offersUncheckedUpdateWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput>;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput>;
    where?: Prisma.listing_offersWhereInput;
};
export type listing_offersUpdateToOneWithWhereWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput = {
    where?: Prisma.listing_offersWhereInput;
    data: Prisma.XOR<Prisma.listing_offersUpdateWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput, Prisma.listing_offersUncheckedUpdateWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput>;
};
export type listing_offersUpdateWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutListing_offersNestedInput;
    listings?: Prisma.listingsUpdateOneRequiredWithoutListing_offersNestedInput;
    listings_listing_offers_listing_id_game_idTolistings?: Prisma.listingsUpdateOneRequiredWithoutListing_offers_listing_offers_listing_id_game_idTolistingsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutListing_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutListing_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUncheckedUpdateWithoutOffer_items_offer_items_offer_id_game_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUpsertWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    update: Prisma.XOR<Prisma.listing_offersUpdateWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput, Prisma.listing_offersUncheckedUpdateWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput>;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput>;
    where?: Prisma.listing_offersWhereInput;
};
export type listing_offersUpdateToOneWithWhereWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    where?: Prisma.listing_offersWhereInput;
    data: Prisma.XOR<Prisma.listing_offersUpdateWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput, Prisma.listing_offersUncheckedUpdateWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput>;
};
export type listing_offersUpdateWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutListing_offersNestedInput;
    listings?: Prisma.listingsUpdateOneRequiredWithoutListing_offersNestedInput;
    listings_listing_offers_listing_id_game_idTolistings?: Prisma.listingsUpdateOneRequiredWithoutListing_offers_listing_offers_listing_id_game_idTolistingsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutListing_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutListing_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUncheckedUpdateWithoutOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUpsertWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    update: Prisma.XOR<Prisma.listing_offersUpdateWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput, Prisma.listing_offersUncheckedUpdateWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput>;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput>;
    where?: Prisma.listing_offersWhereInput;
};
export type listing_offersUpdateToOneWithWhereWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    where?: Prisma.listing_offersWhereInput;
    data: Prisma.XOR<Prisma.listing_offersUpdateWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput, Prisma.listing_offersUncheckedUpdateWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput>;
};
export type listing_offersUpdateWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutListing_offersNestedInput;
    listings?: Prisma.listingsUpdateOneRequiredWithoutListing_offersNestedInput;
    listings_listing_offers_listing_id_game_idTolistings?: Prisma.listingsUpdateOneRequiredWithoutListing_offers_listing_offers_listing_id_game_idTolistingsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutListing_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutListing_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUncheckedUpdateWithoutOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersCreateWithoutStoresInput = {
    id?: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutListing_offersInput;
    listings: Prisma.listingsCreateNestedOneWithoutListing_offersInput;
    listings_listing_offers_listing_id_game_idTolistings: Prisma.listingsCreateNestedOneWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutListing_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersUncheckedCreateWithoutStoresInput = {
    id?: string;
    listing_id: string;
    offerer_user_id?: string | null;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersCreateOrConnectWithoutStoresInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutStoresInput, Prisma.listing_offersUncheckedCreateWithoutStoresInput>;
};
export type listing_offersCreateManyStoresInputEnvelope = {
    data: Prisma.listing_offersCreateManyStoresInput | Prisma.listing_offersCreateManyStoresInput[];
    skipDuplicates?: boolean;
};
export type listing_offersUpsertWithWhereUniqueWithoutStoresInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    update: Prisma.XOR<Prisma.listing_offersUpdateWithoutStoresInput, Prisma.listing_offersUncheckedUpdateWithoutStoresInput>;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutStoresInput, Prisma.listing_offersUncheckedCreateWithoutStoresInput>;
};
export type listing_offersUpdateWithWhereUniqueWithoutStoresInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    data: Prisma.XOR<Prisma.listing_offersUpdateWithoutStoresInput, Prisma.listing_offersUncheckedUpdateWithoutStoresInput>;
};
export type listing_offersUpdateManyWithWhereWithoutStoresInput = {
    where: Prisma.listing_offersScalarWhereInput;
    data: Prisma.XOR<Prisma.listing_offersUpdateManyMutationInput, Prisma.listing_offersUncheckedUpdateManyWithoutStoresInput>;
};
export type listing_offersCreateWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    id?: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutListing_offersInput;
    listings: Prisma.listingsCreateNestedOneWithoutListing_offersInput;
    listings_listing_offers_listing_id_game_idTolistings: Prisma.listingsCreateNestedOneWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput;
    stores?: Prisma.storesCreateNestedOneWithoutListing_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutListing_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions?: Prisma.transactionsCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersUncheckedCreateWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    id?: string;
    listing_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersCreateOrConnectWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput>;
};
export type listing_offersCreateWithoutTransactionsInput = {
    id?: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutListing_offersInput;
    listings: Prisma.listingsCreateNestedOneWithoutListing_offersInput;
    listings_listing_offers_listing_id_game_idTolistings: Prisma.listingsCreateNestedOneWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput;
    stores?: Prisma.storesCreateNestedOneWithoutListing_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutListing_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
};
export type listing_offersUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    listing_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
};
export type listing_offersCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutTransactionsInput, Prisma.listing_offersUncheckedCreateWithoutTransactionsInput>;
};
export type listing_offersUpsertWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    update: Prisma.XOR<Prisma.listing_offersUpdateWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput, Prisma.listing_offersUncheckedUpdateWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput>;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput, Prisma.listing_offersUncheckedCreateWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput>;
    where?: Prisma.listing_offersWhereInput;
};
export type listing_offersUpdateToOneWithWhereWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    where?: Prisma.listing_offersWhereInput;
    data: Prisma.XOR<Prisma.listing_offersUpdateWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput, Prisma.listing_offersUncheckedUpdateWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput>;
};
export type listing_offersUpdateWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutListing_offersNestedInput;
    listings?: Prisma.listingsUpdateOneRequiredWithoutListing_offersNestedInput;
    listings_listing_offers_listing_id_game_idTolistings?: Prisma.listingsUpdateOneRequiredWithoutListing_offers_listing_offers_listing_id_game_idTolistingsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutListing_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutListing_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUncheckedUpdateWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUpsertWithoutTransactionsInput = {
    update: Prisma.XOR<Prisma.listing_offersUpdateWithoutTransactionsInput, Prisma.listing_offersUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutTransactionsInput, Prisma.listing_offersUncheckedCreateWithoutTransactionsInput>;
    where?: Prisma.listing_offersWhereInput;
};
export type listing_offersUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: Prisma.listing_offersWhereInput;
    data: Prisma.XOR<Prisma.listing_offersUpdateWithoutTransactionsInput, Prisma.listing_offersUncheckedUpdateWithoutTransactionsInput>;
};
export type listing_offersUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutListing_offersNestedInput;
    listings?: Prisma.listingsUpdateOneRequiredWithoutListing_offersNestedInput;
    listings_listing_offers_listing_id_game_idTolistings?: Prisma.listingsUpdateOneRequiredWithoutListing_offers_listing_offers_listing_id_game_idTolistingsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutListing_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutListing_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
};
export type listing_offersUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
};
export type listing_offersCreateWithoutUser_profilesInput = {
    id?: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutListing_offersInput;
    listings: Prisma.listingsCreateNestedOneWithoutListing_offersInput;
    listings_listing_offers_listing_id_game_idTolistings: Prisma.listingsCreateNestedOneWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput;
    stores?: Prisma.storesCreateNestedOneWithoutListing_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersUncheckedCreateWithoutUser_profilesInput = {
    id?: string;
    listing_id: string;
    offerer_store_id?: string | null;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersCreateOrConnectWithoutUser_profilesInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutUser_profilesInput, Prisma.listing_offersUncheckedCreateWithoutUser_profilesInput>;
};
export type listing_offersCreateManyUser_profilesInputEnvelope = {
    data: Prisma.listing_offersCreateManyUser_profilesInput | Prisma.listing_offersCreateManyUser_profilesInput[];
    skipDuplicates?: boolean;
};
export type listing_offersUpsertWithWhereUniqueWithoutUser_profilesInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    update: Prisma.XOR<Prisma.listing_offersUpdateWithoutUser_profilesInput, Prisma.listing_offersUncheckedUpdateWithoutUser_profilesInput>;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutUser_profilesInput, Prisma.listing_offersUncheckedCreateWithoutUser_profilesInput>;
};
export type listing_offersUpdateWithWhereUniqueWithoutUser_profilesInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    data: Prisma.XOR<Prisma.listing_offersUpdateWithoutUser_profilesInput, Prisma.listing_offersUncheckedUpdateWithoutUser_profilesInput>;
};
export type listing_offersUpdateManyWithWhereWithoutUser_profilesInput = {
    where: Prisma.listing_offersScalarWhereInput;
    data: Prisma.XOR<Prisma.listing_offersUpdateManyMutationInput, Prisma.listing_offersUncheckedUpdateManyWithoutUser_profilesInput>;
};
export type listing_offersCreateWithoutStore_gamesInput = {
    id?: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutListing_offersInput;
    listings: Prisma.listingsCreateNestedOneWithoutListing_offersInput;
    listings_listing_offers_listing_id_game_idTolistings: Prisma.listingsCreateNestedOneWithoutListing_offers_listing_offers_listing_id_game_idTolistingsInput;
    stores?: Prisma.storesCreateNestedOneWithoutListing_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersUncheckedCreateWithoutStore_gamesInput = {
    id?: string;
    listing_id: string;
    offerer_user_id?: string | null;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutListing_offersInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_idTolisting_offersInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedOneWithoutListing_offersInput;
};
export type listing_offersCreateOrConnectWithoutStore_gamesInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutStore_gamesInput, Prisma.listing_offersUncheckedCreateWithoutStore_gamesInput>;
};
export type listing_offersCreateManyStore_gamesInputEnvelope = {
    data: Prisma.listing_offersCreateManyStore_gamesInput | Prisma.listing_offersCreateManyStore_gamesInput[];
    skipDuplicates?: boolean;
};
export type listing_offersUpsertWithWhereUniqueWithoutStore_gamesInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    update: Prisma.XOR<Prisma.listing_offersUpdateWithoutStore_gamesInput, Prisma.listing_offersUncheckedUpdateWithoutStore_gamesInput>;
    create: Prisma.XOR<Prisma.listing_offersCreateWithoutStore_gamesInput, Prisma.listing_offersUncheckedCreateWithoutStore_gamesInput>;
};
export type listing_offersUpdateWithWhereUniqueWithoutStore_gamesInput = {
    where: Prisma.listing_offersWhereUniqueInput;
    data: Prisma.XOR<Prisma.listing_offersUpdateWithoutStore_gamesInput, Prisma.listing_offersUncheckedUpdateWithoutStore_gamesInput>;
};
export type listing_offersUpdateManyWithWhereWithoutStore_gamesInput = {
    where: Prisma.listing_offersScalarWhereInput;
    data: Prisma.XOR<Prisma.listing_offersUpdateManyMutationInput, Prisma.listing_offersUncheckedUpdateManyWithoutStore_gamesInput>;
};
export type listing_offersCreateManyListingsInput = {
    id?: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type listing_offersCreateManyListings_listing_offers_listing_id_game_idTolistingsInput = {
    id?: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type listing_offersUpdateWithoutListingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutListing_offersNestedInput;
    listings_listing_offers_listing_id_game_idTolistings?: Prisma.listingsUpdateOneRequiredWithoutListing_offers_listing_offers_listing_id_game_idTolistingsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutListing_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutListing_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUncheckedUpdateWithoutListingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUncheckedUpdateManyWithoutListingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type listing_offersUpdateWithoutListings_listing_offers_listing_id_game_idTolistingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutListing_offersNestedInput;
    listings?: Prisma.listingsUpdateOneRequiredWithoutListing_offersNestedInput;
    stores?: Prisma.storesUpdateOneWithoutListing_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutListing_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUncheckedUpdateWithoutListings_listing_offers_listing_id_game_idTolistingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUncheckedUpdateManyWithoutListings_listing_offers_listing_id_game_idTolistingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type listing_offersCreateManyStoresInput = {
    id?: string;
    listing_id: string;
    offerer_user_id?: string | null;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type listing_offersUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutListing_offersNestedInput;
    listings?: Prisma.listingsUpdateOneRequiredWithoutListing_offersNestedInput;
    listings_listing_offers_listing_id_game_idTolistings?: Prisma.listingsUpdateOneRequiredWithoutListing_offers_listing_offers_listing_id_game_idTolistingsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutListing_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUncheckedUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUncheckedUpdateManyWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type listing_offersCreateManyUser_profilesInput = {
    id?: string;
    listing_id: string;
    offerer_store_id?: string | null;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type listing_offersUpdateWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutListing_offersNestedInput;
    listings?: Prisma.listingsUpdateOneRequiredWithoutListing_offersNestedInput;
    listings_listing_offers_listing_id_game_idTolistings?: Prisma.listingsUpdateOneRequiredWithoutListing_offers_listing_offers_listing_id_game_idTolistingsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutListing_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUncheckedUpdateWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUncheckedUpdateManyWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type listing_offersCreateManyStore_gamesInput = {
    id?: string;
    listing_id: string;
    offerer_user_id?: string | null;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    message?: string | null;
    visibility?: string;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type listing_offersUpdateWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutListing_offersNestedInput;
    listings?: Prisma.listingsUpdateOneRequiredWithoutListing_offersNestedInput;
    listings_listing_offers_listing_id_game_idTolistings?: Prisma.listingsUpdateOneRequiredWithoutListing_offers_listing_offers_listing_id_game_idTolistingsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutListing_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUncheckedUpdateWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutListing_offersNestedInput;
    offer_items_offer_items_offer_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_game_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_store_idTolisting_offersNestedInput;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: Prisma.offer_itemsUncheckedUpdateManyWithoutListing_offers_offer_items_offer_id_offerer_user_idTolisting_offersNestedInput;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.transactionsUncheckedUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateOneWithoutListing_offersNestedInput;
};
export type listing_offersUncheckedUpdateManyWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type Listing_offersCountOutputType
 */
export type Listing_offersCountOutputType = {
    inventory_item_interests: number;
    offer_items_offer_items_offer_idTolisting_offers: number;
    offer_items_offer_items_offer_id_game_idTolisting_offers: number;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers: number;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers: number;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers: number;
};
export type Listing_offersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_item_interests?: boolean | Listing_offersCountOutputTypeCountInventory_item_interestsArgs;
    offer_items_offer_items_offer_idTolisting_offers?: boolean | Listing_offersCountOutputTypeCountOffer_items_offer_items_offer_idTolisting_offersArgs;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: boolean | Listing_offersCountOutputTypeCountOffer_items_offer_items_offer_id_game_idTolisting_offersArgs;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: boolean | Listing_offersCountOutputTypeCountOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersArgs;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: boolean | Listing_offersCountOutputTypeCountOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersArgs;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: boolean | Listing_offersCountOutputTypeCountTransactions_transactions_accepted_offer_id_game_idTolisting_offersArgs;
};
/**
 * Listing_offersCountOutputType without action
 */
export type Listing_offersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing_offersCountOutputType
     */
    select?: Prisma.Listing_offersCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Listing_offersCountOutputType without action
 */
export type Listing_offersCountOutputTypeCountInventory_item_interestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventory_item_interestsWhereInput;
};
/**
 * Listing_offersCountOutputType without action
 */
export type Listing_offersCountOutputTypeCountOffer_items_offer_items_offer_idTolisting_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.offer_itemsWhereInput;
};
/**
 * Listing_offersCountOutputType without action
 */
export type Listing_offersCountOutputTypeCountOffer_items_offer_items_offer_id_game_idTolisting_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.offer_itemsWhereInput;
};
/**
 * Listing_offersCountOutputType without action
 */
export type Listing_offersCountOutputTypeCountOffer_items_offer_items_offer_id_offerer_store_idTolisting_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.offer_itemsWhereInput;
};
/**
 * Listing_offersCountOutputType without action
 */
export type Listing_offersCountOutputTypeCountOffer_items_offer_items_offer_id_offerer_user_idTolisting_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.offer_itemsWhereInput;
};
/**
 * Listing_offersCountOutputType without action
 */
export type Listing_offersCountOutputTypeCountTransactions_transactions_accepted_offer_id_game_idTolisting_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transactionsWhereInput;
};
export type listing_offersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listing_id?: boolean;
    offerer_user_id?: boolean;
    offerer_store_id?: boolean;
    cash_amount?: boolean;
    currency_code?: boolean;
    message?: boolean;
    visibility?: boolean;
    status?: boolean;
    expires_at?: boolean;
    responded_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    inventory_item_interests?: boolean | Prisma.listing_offers$inventory_item_interestsArgs<ExtArgs>;
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
    listings_listing_offers_listing_id_game_idTolistings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
    stores?: boolean | Prisma.listing_offers$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.listing_offers$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.listing_offers$user_profilesArgs<ExtArgs>;
    offer_items_offer_items_offer_idTolisting_offers?: boolean | Prisma.listing_offers$offer_items_offer_items_offer_idTolisting_offersArgs<ExtArgs>;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: boolean | Prisma.listing_offers$offer_items_offer_items_offer_id_game_idTolisting_offersArgs<ExtArgs>;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: boolean | Prisma.listing_offers$offer_items_offer_items_offer_id_offerer_store_idTolisting_offersArgs<ExtArgs>;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: boolean | Prisma.listing_offers$offer_items_offer_items_offer_id_offerer_user_idTolisting_offersArgs<ExtArgs>;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: boolean | Prisma.listing_offers$transactions_transactions_accepted_offer_id_game_idTolisting_offersArgs<ExtArgs>;
    transactions?: boolean | Prisma.listing_offers$transactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.Listing_offersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["listing_offers"]>;
export type listing_offersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listing_id?: boolean;
    offerer_user_id?: boolean;
    offerer_store_id?: boolean;
    cash_amount?: boolean;
    currency_code?: boolean;
    message?: boolean;
    visibility?: boolean;
    status?: boolean;
    expires_at?: boolean;
    responded_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
    listings_listing_offers_listing_id_game_idTolistings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
    stores?: boolean | Prisma.listing_offers$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.listing_offers$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.listing_offers$user_profilesArgs<ExtArgs>;
}, ExtArgs["result"]["listing_offers"]>;
export type listing_offersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listing_id?: boolean;
    offerer_user_id?: boolean;
    offerer_store_id?: boolean;
    cash_amount?: boolean;
    currency_code?: boolean;
    message?: boolean;
    visibility?: boolean;
    status?: boolean;
    expires_at?: boolean;
    responded_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
    listings_listing_offers_listing_id_game_idTolistings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
    stores?: boolean | Prisma.listing_offers$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.listing_offers$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.listing_offers$user_profilesArgs<ExtArgs>;
}, ExtArgs["result"]["listing_offers"]>;
export type listing_offersSelectScalar = {
    id?: boolean;
    listing_id?: boolean;
    offerer_user_id?: boolean;
    offerer_store_id?: boolean;
    cash_amount?: boolean;
    currency_code?: boolean;
    message?: boolean;
    visibility?: boolean;
    status?: boolean;
    expires_at?: boolean;
    responded_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
};
export type listing_offersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "listing_id" | "offerer_user_id" | "offerer_store_id" | "cash_amount" | "currency_code" | "message" | "visibility" | "status" | "expires_at" | "responded_at" | "created_at" | "updated_at" | "game_id", ExtArgs["result"]["listing_offers"]>;
export type listing_offersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_item_interests?: boolean | Prisma.listing_offers$inventory_item_interestsArgs<ExtArgs>;
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
    listings_listing_offers_listing_id_game_idTolistings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
    stores?: boolean | Prisma.listing_offers$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.listing_offers$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.listing_offers$user_profilesArgs<ExtArgs>;
    offer_items_offer_items_offer_idTolisting_offers?: boolean | Prisma.listing_offers$offer_items_offer_items_offer_idTolisting_offersArgs<ExtArgs>;
    offer_items_offer_items_offer_id_game_idTolisting_offers?: boolean | Prisma.listing_offers$offer_items_offer_items_offer_id_game_idTolisting_offersArgs<ExtArgs>;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers?: boolean | Prisma.listing_offers$offer_items_offer_items_offer_id_offerer_store_idTolisting_offersArgs<ExtArgs>;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers?: boolean | Prisma.listing_offers$offer_items_offer_items_offer_id_offerer_user_idTolisting_offersArgs<ExtArgs>;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers?: boolean | Prisma.listing_offers$transactions_transactions_accepted_offer_id_game_idTolisting_offersArgs<ExtArgs>;
    transactions?: boolean | Prisma.listing_offers$transactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.Listing_offersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type listing_offersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
    listings_listing_offers_listing_id_game_idTolistings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
    stores?: boolean | Prisma.listing_offers$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.listing_offers$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.listing_offers$user_profilesArgs<ExtArgs>;
};
export type listing_offersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
    listings_listing_offers_listing_id_game_idTolistings?: boolean | Prisma.listingsDefaultArgs<ExtArgs>;
    stores?: boolean | Prisma.listing_offers$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.listing_offers$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.listing_offers$user_profilesArgs<ExtArgs>;
};
export type $listing_offersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "listing_offers";
    objects: {
        inventory_item_interests: Prisma.$inventory_item_interestsPayload<ExtArgs>[];
        listings: Prisma.$listingsPayload<ExtArgs>;
        listings_listing_offers_listing_id_game_idTolistings: Prisma.$listingsPayload<ExtArgs>;
        stores: Prisma.$storesPayload<ExtArgs> | null;
        store_games: Prisma.$store_gamesPayload<ExtArgs> | null;
        user_profiles: Prisma.$user_profilesPayload<ExtArgs> | null;
        offer_items_offer_items_offer_idTolisting_offers: Prisma.$offer_itemsPayload<ExtArgs>[];
        offer_items_offer_items_offer_id_game_idTolisting_offers: Prisma.$offer_itemsPayload<ExtArgs>[];
        offer_items_offer_items_offer_id_offerer_store_idTolisting_offers: Prisma.$offer_itemsPayload<ExtArgs>[];
        offer_items_offer_items_offer_id_offerer_user_idTolisting_offers: Prisma.$offer_itemsPayload<ExtArgs>[];
        transactions_transactions_accepted_offer_id_game_idTolisting_offers: Prisma.$transactionsPayload<ExtArgs>[];
        transactions: Prisma.$transactionsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        listing_id: string;
        offerer_user_id: string | null;
        offerer_store_id: string | null;
        cash_amount: runtime.Decimal;
        currency_code: string;
        message: string | null;
        visibility: string;
        status: string;
        expires_at: Date | null;
        responded_at: Date | null;
        created_at: Date;
        updated_at: Date;
        game_id: string;
    }, ExtArgs["result"]["listing_offers"]>;
    composites: {};
};
export type listing_offersGetPayload<S extends boolean | null | undefined | listing_offersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$listing_offersPayload, S>;
export type listing_offersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<listing_offersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Listing_offersCountAggregateInputType | true;
};
export interface listing_offersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['listing_offers'];
        meta: {
            name: 'listing_offers';
        };
    };
    /**
     * Find zero or one Listing_offers that matches the filter.
     * @param {listing_offersFindUniqueArgs} args - Arguments to find a Listing_offers
     * @example
     * // Get one Listing_offers
     * const listing_offers = await prisma.listing_offers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends listing_offersFindUniqueArgs>(args: Prisma.SelectSubset<T, listing_offersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__listing_offersClient<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Listing_offers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {listing_offersFindUniqueOrThrowArgs} args - Arguments to find a Listing_offers
     * @example
     * // Get one Listing_offers
     * const listing_offers = await prisma.listing_offers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends listing_offersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, listing_offersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__listing_offersClient<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Listing_offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listing_offersFindFirstArgs} args - Arguments to find a Listing_offers
     * @example
     * // Get one Listing_offers
     * const listing_offers = await prisma.listing_offers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends listing_offersFindFirstArgs>(args?: Prisma.SelectSubset<T, listing_offersFindFirstArgs<ExtArgs>>): Prisma.Prisma__listing_offersClient<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Listing_offers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listing_offersFindFirstOrThrowArgs} args - Arguments to find a Listing_offers
     * @example
     * // Get one Listing_offers
     * const listing_offers = await prisma.listing_offers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends listing_offersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, listing_offersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__listing_offersClient<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Listing_offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listing_offersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listing_offers
     * const listing_offers = await prisma.listing_offers.findMany()
     *
     * // Get first 10 Listing_offers
     * const listing_offers = await prisma.listing_offers.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const listing_offersWithIdOnly = await prisma.listing_offers.findMany({ select: { id: true } })
     *
     */
    findMany<T extends listing_offersFindManyArgs>(args?: Prisma.SelectSubset<T, listing_offersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Listing_offers.
     * @param {listing_offersCreateArgs} args - Arguments to create a Listing_offers.
     * @example
     * // Create one Listing_offers
     * const Listing_offers = await prisma.listing_offers.create({
     *   data: {
     *     // ... data to create a Listing_offers
     *   }
     * })
     *
     */
    create<T extends listing_offersCreateArgs>(args: Prisma.SelectSubset<T, listing_offersCreateArgs<ExtArgs>>): Prisma.Prisma__listing_offersClient<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Listing_offers.
     * @param {listing_offersCreateManyArgs} args - Arguments to create many Listing_offers.
     * @example
     * // Create many Listing_offers
     * const listing_offers = await prisma.listing_offers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends listing_offersCreateManyArgs>(args?: Prisma.SelectSubset<T, listing_offersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Listing_offers and returns the data saved in the database.
     * @param {listing_offersCreateManyAndReturnArgs} args - Arguments to create many Listing_offers.
     * @example
     * // Create many Listing_offers
     * const listing_offers = await prisma.listing_offers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Listing_offers and only return the `id`
     * const listing_offersWithIdOnly = await prisma.listing_offers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends listing_offersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, listing_offersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Listing_offers.
     * @param {listing_offersDeleteArgs} args - Arguments to delete one Listing_offers.
     * @example
     * // Delete one Listing_offers
     * const Listing_offers = await prisma.listing_offers.delete({
     *   where: {
     *     // ... filter to delete one Listing_offers
     *   }
     * })
     *
     */
    delete<T extends listing_offersDeleteArgs>(args: Prisma.SelectSubset<T, listing_offersDeleteArgs<ExtArgs>>): Prisma.Prisma__listing_offersClient<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Listing_offers.
     * @param {listing_offersUpdateArgs} args - Arguments to update one Listing_offers.
     * @example
     * // Update one Listing_offers
     * const listing_offers = await prisma.listing_offers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends listing_offersUpdateArgs>(args: Prisma.SelectSubset<T, listing_offersUpdateArgs<ExtArgs>>): Prisma.Prisma__listing_offersClient<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Listing_offers.
     * @param {listing_offersDeleteManyArgs} args - Arguments to filter Listing_offers to delete.
     * @example
     * // Delete a few Listing_offers
     * const { count } = await prisma.listing_offers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends listing_offersDeleteManyArgs>(args?: Prisma.SelectSubset<T, listing_offersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Listing_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listing_offersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listing_offers
     * const listing_offers = await prisma.listing_offers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends listing_offersUpdateManyArgs>(args: Prisma.SelectSubset<T, listing_offersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Listing_offers and returns the data updated in the database.
     * @param {listing_offersUpdateManyAndReturnArgs} args - Arguments to update many Listing_offers.
     * @example
     * // Update many Listing_offers
     * const listing_offers = await prisma.listing_offers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Listing_offers and only return the `id`
     * const listing_offersWithIdOnly = await prisma.listing_offers.updateManyAndReturn({
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
    updateManyAndReturn<T extends listing_offersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, listing_offersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Listing_offers.
     * @param {listing_offersUpsertArgs} args - Arguments to update or create a Listing_offers.
     * @example
     * // Update or create a Listing_offers
     * const listing_offers = await prisma.listing_offers.upsert({
     *   create: {
     *     // ... data to create a Listing_offers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listing_offers we want to update
     *   }
     * })
     */
    upsert<T extends listing_offersUpsertArgs>(args: Prisma.SelectSubset<T, listing_offersUpsertArgs<ExtArgs>>): Prisma.Prisma__listing_offersClient<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Listing_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listing_offersCountArgs} args - Arguments to filter Listing_offers to count.
     * @example
     * // Count the number of Listing_offers
     * const count = await prisma.listing_offers.count({
     *   where: {
     *     // ... the filter for the Listing_offers we want to count
     *   }
     * })
    **/
    count<T extends listing_offersCountArgs>(args?: Prisma.Subset<T, listing_offersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Listing_offersCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Listing_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Listing_offersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Listing_offersAggregateArgs>(args: Prisma.Subset<T, Listing_offersAggregateArgs>): Prisma.PrismaPromise<GetListing_offersAggregateType<T>>;
    /**
     * Group by Listing_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listing_offersGroupByArgs} args - Group by arguments.
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
    groupBy<T extends listing_offersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: listing_offersGroupByArgs['orderBy'];
    } : {
        orderBy?: listing_offersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, listing_offersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListing_offersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the listing_offers model
     */
    readonly fields: listing_offersFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for listing_offers.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__listing_offersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    inventory_item_interests<T extends Prisma.listing_offers$inventory_item_interestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listing_offers$inventory_item_interestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_item_interestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    listings<T extends Prisma.listingsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listingsDefaultArgs<ExtArgs>>): Prisma.Prisma__listingsClient<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    listings_listing_offers_listing_id_game_idTolistings<T extends Prisma.listingsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listingsDefaultArgs<ExtArgs>>): Prisma.Prisma__listingsClient<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    stores<T extends Prisma.listing_offers$storesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listing_offers$storesArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    store_games<T extends Prisma.listing_offers$store_gamesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listing_offers$store_gamesArgs<ExtArgs>>): Prisma.Prisma__store_gamesClient<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user_profiles<T extends Prisma.listing_offers$user_profilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listing_offers$user_profilesArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    offer_items_offer_items_offer_idTolisting_offers<T extends Prisma.listing_offers$offer_items_offer_items_offer_idTolisting_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listing_offers$offer_items_offer_items_offer_idTolisting_offersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$offer_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    offer_items_offer_items_offer_id_game_idTolisting_offers<T extends Prisma.listing_offers$offer_items_offer_items_offer_id_game_idTolisting_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listing_offers$offer_items_offer_items_offer_id_game_idTolisting_offersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$offer_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    offer_items_offer_items_offer_id_offerer_store_idTolisting_offers<T extends Prisma.listing_offers$offer_items_offer_items_offer_id_offerer_store_idTolisting_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listing_offers$offer_items_offer_items_offer_id_offerer_store_idTolisting_offersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$offer_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    offer_items_offer_items_offer_id_offerer_user_idTolisting_offers<T extends Prisma.listing_offers$offer_items_offer_items_offer_id_offerer_user_idTolisting_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listing_offers$offer_items_offer_items_offer_id_offerer_user_idTolisting_offersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$offer_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transactions_transactions_accepted_offer_id_game_idTolisting_offers<T extends Prisma.listing_offers$transactions_transactions_accepted_offer_id_game_idTolisting_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listing_offers$transactions_transactions_accepted_offer_id_game_idTolisting_offersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transactions<T extends Prisma.listing_offers$transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.listing_offers$transactionsArgs<ExtArgs>>): Prisma.Prisma__transactionsClient<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the listing_offers model
 */
export interface listing_offersFieldRefs {
    readonly id: Prisma.FieldRef<"listing_offers", 'String'>;
    readonly listing_id: Prisma.FieldRef<"listing_offers", 'String'>;
    readonly offerer_user_id: Prisma.FieldRef<"listing_offers", 'String'>;
    readonly offerer_store_id: Prisma.FieldRef<"listing_offers", 'String'>;
    readonly cash_amount: Prisma.FieldRef<"listing_offers", 'Decimal'>;
    readonly currency_code: Prisma.FieldRef<"listing_offers", 'String'>;
    readonly message: Prisma.FieldRef<"listing_offers", 'String'>;
    readonly visibility: Prisma.FieldRef<"listing_offers", 'String'>;
    readonly status: Prisma.FieldRef<"listing_offers", 'String'>;
    readonly expires_at: Prisma.FieldRef<"listing_offers", 'DateTime'>;
    readonly responded_at: Prisma.FieldRef<"listing_offers", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"listing_offers", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"listing_offers", 'DateTime'>;
    readonly game_id: Prisma.FieldRef<"listing_offers", 'String'>;
}
/**
 * listing_offers findUnique
 */
export type listing_offersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which listing_offers to fetch.
     */
    where: Prisma.listing_offersWhereUniqueInput;
};
/**
 * listing_offers findUniqueOrThrow
 */
export type listing_offersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which listing_offers to fetch.
     */
    where: Prisma.listing_offersWhereUniqueInput;
};
/**
 * listing_offers findFirst
 */
export type listing_offersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which listing_offers to fetch.
     */
    where?: Prisma.listing_offersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of listing_offers to fetch.
     */
    orderBy?: Prisma.listing_offersOrderByWithRelationInput | Prisma.listing_offersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for listing_offers.
     */
    cursor?: Prisma.listing_offersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` listing_offers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` listing_offers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of listing_offers.
     */
    distinct?: Prisma.Listing_offersScalarFieldEnum | Prisma.Listing_offersScalarFieldEnum[];
};
/**
 * listing_offers findFirstOrThrow
 */
export type listing_offersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which listing_offers to fetch.
     */
    where?: Prisma.listing_offersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of listing_offers to fetch.
     */
    orderBy?: Prisma.listing_offersOrderByWithRelationInput | Prisma.listing_offersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for listing_offers.
     */
    cursor?: Prisma.listing_offersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` listing_offers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` listing_offers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of listing_offers.
     */
    distinct?: Prisma.Listing_offersScalarFieldEnum | Prisma.Listing_offersScalarFieldEnum[];
};
/**
 * listing_offers findMany
 */
export type listing_offersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which listing_offers to fetch.
     */
    where?: Prisma.listing_offersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of listing_offers to fetch.
     */
    orderBy?: Prisma.listing_offersOrderByWithRelationInput | Prisma.listing_offersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing listing_offers.
     */
    cursor?: Prisma.listing_offersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` listing_offers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` listing_offers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of listing_offers.
     */
    distinct?: Prisma.Listing_offersScalarFieldEnum | Prisma.Listing_offersScalarFieldEnum[];
};
/**
 * listing_offers create
 */
export type listing_offersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a listing_offers.
     */
    data: Prisma.XOR<Prisma.listing_offersCreateInput, Prisma.listing_offersUncheckedCreateInput>;
};
/**
 * listing_offers createMany
 */
export type listing_offersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many listing_offers.
     */
    data: Prisma.listing_offersCreateManyInput | Prisma.listing_offersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * listing_offers createManyAndReturn
 */
export type listing_offersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_offers
     */
    select?: Prisma.listing_offersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the listing_offers
     */
    omit?: Prisma.listing_offersOmit<ExtArgs> | null;
    /**
     * The data used to create many listing_offers.
     */
    data: Prisma.listing_offersCreateManyInput | Prisma.listing_offersCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.listing_offersIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * listing_offers update
 */
export type listing_offersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a listing_offers.
     */
    data: Prisma.XOR<Prisma.listing_offersUpdateInput, Prisma.listing_offersUncheckedUpdateInput>;
    /**
     * Choose, which listing_offers to update.
     */
    where: Prisma.listing_offersWhereUniqueInput;
};
/**
 * listing_offers updateMany
 */
export type listing_offersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update listing_offers.
     */
    data: Prisma.XOR<Prisma.listing_offersUpdateManyMutationInput, Prisma.listing_offersUncheckedUpdateManyInput>;
    /**
     * Filter which listing_offers to update
     */
    where?: Prisma.listing_offersWhereInput;
    /**
     * Limit how many listing_offers to update.
     */
    limit?: number;
};
/**
 * listing_offers updateManyAndReturn
 */
export type listing_offersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listing_offers
     */
    select?: Prisma.listing_offersSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the listing_offers
     */
    omit?: Prisma.listing_offersOmit<ExtArgs> | null;
    /**
     * The data used to update listing_offers.
     */
    data: Prisma.XOR<Prisma.listing_offersUpdateManyMutationInput, Prisma.listing_offersUncheckedUpdateManyInput>;
    /**
     * Filter which listing_offers to update
     */
    where?: Prisma.listing_offersWhereInput;
    /**
     * Limit how many listing_offers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.listing_offersIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * listing_offers upsert
 */
export type listing_offersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the listing_offers to update in case it exists.
     */
    where: Prisma.listing_offersWhereUniqueInput;
    /**
     * In case the listing_offers found by the `where` argument doesn't exist, create a new listing_offers with this data.
     */
    create: Prisma.XOR<Prisma.listing_offersCreateInput, Prisma.listing_offersUncheckedCreateInput>;
    /**
     * In case the listing_offers was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.listing_offersUpdateInput, Prisma.listing_offersUncheckedUpdateInput>;
};
/**
 * listing_offers delete
 */
export type listing_offersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which listing_offers to delete.
     */
    where: Prisma.listing_offersWhereUniqueInput;
};
/**
 * listing_offers deleteMany
 */
export type listing_offersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which listing_offers to delete
     */
    where?: Prisma.listing_offersWhereInput;
    /**
     * Limit how many listing_offers to delete.
     */
    limit?: number;
};
/**
 * listing_offers.inventory_item_interests
 */
export type listing_offers$inventory_item_interestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.inventory_item_interestsWhereInput;
    orderBy?: Prisma.inventory_item_interestsOrderByWithRelationInput | Prisma.inventory_item_interestsOrderByWithRelationInput[];
    cursor?: Prisma.inventory_item_interestsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Inventory_item_interestsScalarFieldEnum | Prisma.Inventory_item_interestsScalarFieldEnum[];
};
/**
 * listing_offers.stores
 */
export type listing_offers$storesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * listing_offers.store_games
 */
export type listing_offers$store_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * listing_offers.user_profiles
 */
export type listing_offers$user_profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * listing_offers.offer_items_offer_items_offer_idTolisting_offers
 */
export type listing_offers$offer_items_offer_items_offer_idTolisting_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.offer_itemsWhereInput;
    orderBy?: Prisma.offer_itemsOrderByWithRelationInput | Prisma.offer_itemsOrderByWithRelationInput[];
    cursor?: Prisma.offer_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Offer_itemsScalarFieldEnum | Prisma.Offer_itemsScalarFieldEnum[];
};
/**
 * listing_offers.offer_items_offer_items_offer_id_game_idTolisting_offers
 */
export type listing_offers$offer_items_offer_items_offer_id_game_idTolisting_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.offer_itemsWhereInput;
    orderBy?: Prisma.offer_itemsOrderByWithRelationInput | Prisma.offer_itemsOrderByWithRelationInput[];
    cursor?: Prisma.offer_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Offer_itemsScalarFieldEnum | Prisma.Offer_itemsScalarFieldEnum[];
};
/**
 * listing_offers.offer_items_offer_items_offer_id_offerer_store_idTolisting_offers
 */
export type listing_offers$offer_items_offer_items_offer_id_offerer_store_idTolisting_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.offer_itemsWhereInput;
    orderBy?: Prisma.offer_itemsOrderByWithRelationInput | Prisma.offer_itemsOrderByWithRelationInput[];
    cursor?: Prisma.offer_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Offer_itemsScalarFieldEnum | Prisma.Offer_itemsScalarFieldEnum[];
};
/**
 * listing_offers.offer_items_offer_items_offer_id_offerer_user_idTolisting_offers
 */
export type listing_offers$offer_items_offer_items_offer_id_offerer_user_idTolisting_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.offer_itemsWhereInput;
    orderBy?: Prisma.offer_itemsOrderByWithRelationInput | Prisma.offer_itemsOrderByWithRelationInput[];
    cursor?: Prisma.offer_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Offer_itemsScalarFieldEnum | Prisma.Offer_itemsScalarFieldEnum[];
};
/**
 * listing_offers.transactions_transactions_accepted_offer_id_game_idTolisting_offers
 */
export type listing_offers$transactions_transactions_accepted_offer_id_game_idTolisting_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * listing_offers.transactions
 */
export type listing_offers$transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * listing_offers without action
 */
export type listing_offersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
