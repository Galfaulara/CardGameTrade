import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model wishlist_offers
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type wishlist_offersModel = runtime.Types.Result.DefaultSelection<Prisma.$wishlist_offersPayload>;
export type AggregateWishlist_offers = {
    _count: Wishlist_offersCountAggregateOutputType | null;
    _avg: Wishlist_offersAvgAggregateOutputType | null;
    _sum: Wishlist_offersSumAggregateOutputType | null;
    _min: Wishlist_offersMinAggregateOutputType | null;
    _max: Wishlist_offersMaxAggregateOutputType | null;
};
export type Wishlist_offersAvgAggregateOutputType = {
    cash_ask_amount: runtime.Decimal | null;
};
export type Wishlist_offersSumAggregateOutputType = {
    cash_ask_amount: runtime.Decimal | null;
};
export type Wishlist_offersMinAggregateOutputType = {
    id: string | null;
    wishlist_item_id: string | null;
    offerer_user_id: string | null;
    offerer_store_id: string | null;
    requests_cash: boolean | null;
    requests_trade: boolean | null;
    cash_ask_amount: runtime.Decimal | null;
    currency_code: string | null;
    message: string | null;
    trade_terms_note: string | null;
    status: string | null;
    expires_at: Date | null;
    responded_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    game_id: string | null;
};
export type Wishlist_offersMaxAggregateOutputType = {
    id: string | null;
    wishlist_item_id: string | null;
    offerer_user_id: string | null;
    offerer_store_id: string | null;
    requests_cash: boolean | null;
    requests_trade: boolean | null;
    cash_ask_amount: runtime.Decimal | null;
    currency_code: string | null;
    message: string | null;
    trade_terms_note: string | null;
    status: string | null;
    expires_at: Date | null;
    responded_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    game_id: string | null;
};
export type Wishlist_offersCountAggregateOutputType = {
    id: number;
    wishlist_item_id: number;
    offerer_user_id: number;
    offerer_store_id: number;
    requests_cash: number;
    requests_trade: number;
    cash_ask_amount: number;
    currency_code: number;
    message: number;
    trade_terms_note: number;
    status: number;
    expires_at: number;
    responded_at: number;
    created_at: number;
    updated_at: number;
    game_id: number;
    _all: number;
};
export type Wishlist_offersAvgAggregateInputType = {
    cash_ask_amount?: true;
};
export type Wishlist_offersSumAggregateInputType = {
    cash_ask_amount?: true;
};
export type Wishlist_offersMinAggregateInputType = {
    id?: true;
    wishlist_item_id?: true;
    offerer_user_id?: true;
    offerer_store_id?: true;
    requests_cash?: true;
    requests_trade?: true;
    cash_ask_amount?: true;
    currency_code?: true;
    message?: true;
    trade_terms_note?: true;
    status?: true;
    expires_at?: true;
    responded_at?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
};
export type Wishlist_offersMaxAggregateInputType = {
    id?: true;
    wishlist_item_id?: true;
    offerer_user_id?: true;
    offerer_store_id?: true;
    requests_cash?: true;
    requests_trade?: true;
    cash_ask_amount?: true;
    currency_code?: true;
    message?: true;
    trade_terms_note?: true;
    status?: true;
    expires_at?: true;
    responded_at?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
};
export type Wishlist_offersCountAggregateInputType = {
    id?: true;
    wishlist_item_id?: true;
    offerer_user_id?: true;
    offerer_store_id?: true;
    requests_cash?: true;
    requests_trade?: true;
    cash_ask_amount?: true;
    currency_code?: true;
    message?: true;
    trade_terms_note?: true;
    status?: true;
    expires_at?: true;
    responded_at?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
    _all?: true;
};
export type Wishlist_offersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which wishlist_offers to aggregate.
     */
    where?: Prisma.wishlist_offersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlist_offers to fetch.
     */
    orderBy?: Prisma.wishlist_offersOrderByWithRelationInput | Prisma.wishlist_offersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.wishlist_offersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlist_offers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlist_offers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned wishlist_offers
    **/
    _count?: true | Wishlist_offersCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Wishlist_offersAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Wishlist_offersSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Wishlist_offersMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Wishlist_offersMaxAggregateInputType;
};
export type GetWishlist_offersAggregateType<T extends Wishlist_offersAggregateArgs> = {
    [P in keyof T & keyof AggregateWishlist_offers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWishlist_offers[P]> : Prisma.GetScalarType<T[P], AggregateWishlist_offers[P]>;
};
export type wishlist_offersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_offersWhereInput;
    orderBy?: Prisma.wishlist_offersOrderByWithAggregationInput | Prisma.wishlist_offersOrderByWithAggregationInput[];
    by: Prisma.Wishlist_offersScalarFieldEnum[] | Prisma.Wishlist_offersScalarFieldEnum;
    having?: Prisma.wishlist_offersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Wishlist_offersCountAggregateInputType | true;
    _avg?: Wishlist_offersAvgAggregateInputType;
    _sum?: Wishlist_offersSumAggregateInputType;
    _min?: Wishlist_offersMinAggregateInputType;
    _max?: Wishlist_offersMaxAggregateInputType;
};
export type Wishlist_offersGroupByOutputType = {
    id: string;
    wishlist_item_id: string;
    offerer_user_id: string | null;
    offerer_store_id: string | null;
    requests_cash: boolean;
    requests_trade: boolean;
    cash_ask_amount: runtime.Decimal | null;
    currency_code: string | null;
    message: string | null;
    trade_terms_note: string | null;
    status: string;
    expires_at: Date | null;
    responded_at: Date | null;
    created_at: Date;
    updated_at: Date;
    game_id: string;
    _count: Wishlist_offersCountAggregateOutputType | null;
    _avg: Wishlist_offersAvgAggregateOutputType | null;
    _sum: Wishlist_offersSumAggregateOutputType | null;
    _min: Wishlist_offersMinAggregateOutputType | null;
    _max: Wishlist_offersMaxAggregateOutputType | null;
};
export type GetWishlist_offersGroupByPayload<T extends wishlist_offersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Wishlist_offersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Wishlist_offersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Wishlist_offersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Wishlist_offersGroupByOutputType[P]>;
}>>;
export type wishlist_offersWhereInput = {
    AND?: Prisma.wishlist_offersWhereInput | Prisma.wishlist_offersWhereInput[];
    OR?: Prisma.wishlist_offersWhereInput[];
    NOT?: Prisma.wishlist_offersWhereInput | Prisma.wishlist_offersWhereInput[];
    id?: Prisma.UuidFilter<"wishlist_offers"> | string;
    wishlist_item_id?: Prisma.UuidFilter<"wishlist_offers"> | string;
    offerer_user_id?: Prisma.UuidNullableFilter<"wishlist_offers"> | string | null;
    offerer_store_id?: Prisma.UuidNullableFilter<"wishlist_offers"> | string | null;
    requests_cash?: Prisma.BoolFilter<"wishlist_offers"> | boolean;
    requests_trade?: Prisma.BoolFilter<"wishlist_offers"> | boolean;
    cash_ask_amount?: Prisma.DecimalNullableFilter<"wishlist_offers"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.StringNullableFilter<"wishlist_offers"> | string | null;
    message?: Prisma.StringNullableFilter<"wishlist_offers"> | string | null;
    trade_terms_note?: Prisma.StringNullableFilter<"wishlist_offers"> | string | null;
    status?: Prisma.StringFilter<"wishlist_offers"> | string;
    expires_at?: Prisma.DateTimeNullableFilter<"wishlist_offers"> | Date | string | null;
    responded_at?: Prisma.DateTimeNullableFilter<"wishlist_offers"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"wishlist_offers"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"wishlist_offers"> | Date | string;
    game_id?: Prisma.UuidFilter<"wishlist_offers"> | string;
    inventory_item_interests?: Prisma.Inventory_item_interestsListRelationFilter;
    transactions?: Prisma.TransactionsListRelationFilter;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.Wishlist_offer_itemsListRelationFilter;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.Wishlist_offer_itemsListRelationFilter;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.Wishlist_offer_itemsListRelationFilter;
    wishlist_offer_requested_items?: Prisma.Wishlist_offer_requested_itemsListRelationFilter;
    stores?: Prisma.XOR<Prisma.StoresNullableScalarRelationFilter, Prisma.storesWhereInput> | null;
    store_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    user_profiles?: Prisma.XOR<Prisma.User_profilesNullableScalarRelationFilter, Prisma.user_profilesWhereInput> | null;
    wishlist_items?: Prisma.XOR<Prisma.Wishlist_itemsScalarRelationFilter, Prisma.wishlist_itemsWhereInput>;
};
export type wishlist_offersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    wishlist_item_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    requests_cash?: Prisma.SortOrder;
    requests_trade?: Prisma.SortOrder;
    cash_ask_amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    trade_terms_note?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    responded_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    inventory_item_interests?: Prisma.inventory_item_interestsOrderByRelationAggregateInput;
    transactions?: Prisma.transactionsOrderByRelationAggregateInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsOrderByRelationAggregateInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsOrderByRelationAggregateInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsOrderByRelationAggregateInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsOrderByRelationAggregateInput;
    stores?: Prisma.storesOrderByWithRelationInput;
    store_games?: Prisma.store_gamesOrderByWithRelationInput;
    user_profiles?: Prisma.user_profilesOrderByWithRelationInput;
    wishlist_items?: Prisma.wishlist_itemsOrderByWithRelationInput;
};
export type wishlist_offersWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    id_offerer_store_id?: Prisma.wishlist_offersIdOfferer_store_idCompoundUniqueInput;
    id_offerer_user_id?: Prisma.wishlist_offersIdOfferer_user_idCompoundUniqueInput;
    id_game_id?: Prisma.wishlist_offersIdGame_idCompoundUniqueInput;
    AND?: Prisma.wishlist_offersWhereInput | Prisma.wishlist_offersWhereInput[];
    OR?: Prisma.wishlist_offersWhereInput[];
    NOT?: Prisma.wishlist_offersWhereInput | Prisma.wishlist_offersWhereInput[];
    wishlist_item_id?: Prisma.UuidFilter<"wishlist_offers"> | string;
    offerer_user_id?: Prisma.UuidNullableFilter<"wishlist_offers"> | string | null;
    offerer_store_id?: Prisma.UuidNullableFilter<"wishlist_offers"> | string | null;
    requests_cash?: Prisma.BoolFilter<"wishlist_offers"> | boolean;
    requests_trade?: Prisma.BoolFilter<"wishlist_offers"> | boolean;
    cash_ask_amount?: Prisma.DecimalNullableFilter<"wishlist_offers"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.StringNullableFilter<"wishlist_offers"> | string | null;
    message?: Prisma.StringNullableFilter<"wishlist_offers"> | string | null;
    trade_terms_note?: Prisma.StringNullableFilter<"wishlist_offers"> | string | null;
    status?: Prisma.StringFilter<"wishlist_offers"> | string;
    expires_at?: Prisma.DateTimeNullableFilter<"wishlist_offers"> | Date | string | null;
    responded_at?: Prisma.DateTimeNullableFilter<"wishlist_offers"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"wishlist_offers"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"wishlist_offers"> | Date | string;
    game_id?: Prisma.UuidFilter<"wishlist_offers"> | string;
    inventory_item_interests?: Prisma.Inventory_item_interestsListRelationFilter;
    transactions?: Prisma.TransactionsListRelationFilter;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.Wishlist_offer_itemsListRelationFilter;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.Wishlist_offer_itemsListRelationFilter;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.Wishlist_offer_itemsListRelationFilter;
    wishlist_offer_requested_items?: Prisma.Wishlist_offer_requested_itemsListRelationFilter;
    stores?: Prisma.XOR<Prisma.StoresNullableScalarRelationFilter, Prisma.storesWhereInput> | null;
    store_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    user_profiles?: Prisma.XOR<Prisma.User_profilesNullableScalarRelationFilter, Prisma.user_profilesWhereInput> | null;
    wishlist_items?: Prisma.XOR<Prisma.Wishlist_itemsScalarRelationFilter, Prisma.wishlist_itemsWhereInput>;
}, "id" | "id_offerer_store_id" | "id_offerer_user_id" | "id_game_id">;
export type wishlist_offersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    wishlist_item_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    requests_cash?: Prisma.SortOrder;
    requests_trade?: Prisma.SortOrder;
    cash_ask_amount?: Prisma.SortOrderInput | Prisma.SortOrder;
    currency_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    trade_terms_note?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    responded_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    _count?: Prisma.wishlist_offersCountOrderByAggregateInput;
    _avg?: Prisma.wishlist_offersAvgOrderByAggregateInput;
    _max?: Prisma.wishlist_offersMaxOrderByAggregateInput;
    _min?: Prisma.wishlist_offersMinOrderByAggregateInput;
    _sum?: Prisma.wishlist_offersSumOrderByAggregateInput;
};
export type wishlist_offersScalarWhereWithAggregatesInput = {
    AND?: Prisma.wishlist_offersScalarWhereWithAggregatesInput | Prisma.wishlist_offersScalarWhereWithAggregatesInput[];
    OR?: Prisma.wishlist_offersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.wishlist_offersScalarWhereWithAggregatesInput | Prisma.wishlist_offersScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"wishlist_offers"> | string;
    wishlist_item_id?: Prisma.UuidWithAggregatesFilter<"wishlist_offers"> | string;
    offerer_user_id?: Prisma.UuidNullableWithAggregatesFilter<"wishlist_offers"> | string | null;
    offerer_store_id?: Prisma.UuidNullableWithAggregatesFilter<"wishlist_offers"> | string | null;
    requests_cash?: Prisma.BoolWithAggregatesFilter<"wishlist_offers"> | boolean;
    requests_trade?: Prisma.BoolWithAggregatesFilter<"wishlist_offers"> | boolean;
    cash_ask_amount?: Prisma.DecimalNullableWithAggregatesFilter<"wishlist_offers"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.StringNullableWithAggregatesFilter<"wishlist_offers"> | string | null;
    message?: Prisma.StringNullableWithAggregatesFilter<"wishlist_offers"> | string | null;
    trade_terms_note?: Prisma.StringNullableWithAggregatesFilter<"wishlist_offers"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"wishlist_offers"> | string;
    expires_at?: Prisma.DateTimeNullableWithAggregatesFilter<"wishlist_offers"> | Date | string | null;
    responded_at?: Prisma.DateTimeNullableWithAggregatesFilter<"wishlist_offers"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"wishlist_offers"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"wishlist_offers"> | Date | string;
    game_id?: Prisma.UuidWithAggregatesFilter<"wishlist_offers"> | string;
};
export type wishlist_offersCreateInput = {
    id?: string;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutWishlist_offersInput;
    transactions?: Prisma.transactionsCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutWishlist_offersInput;
    stores?: Prisma.storesCreateNestedOneWithoutWishlist_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutWishlist_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutWishlist_offersInput;
    wishlist_items: Prisma.wishlist_itemsCreateNestedOneWithoutWishlist_offersInput;
};
export type wishlist_offersUncheckedCreateInput = {
    id?: string;
    wishlist_item_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutWishlist_offersInput;
};
export type wishlist_offersUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutWishlist_offersNestedInput;
    transactions?: Prisma.transactionsUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutWishlist_offersNestedInput;
    stores?: Prisma.storesUpdateOneWithoutWishlist_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutWishlist_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutWishlist_offersNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateOneRequiredWithoutWishlist_offersNestedInput;
};
export type wishlist_offersUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
};
export type wishlist_offersCreateManyInput = {
    id?: string;
    wishlist_item_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type wishlist_offersUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type wishlist_offersUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Wishlist_offersNullableScalarRelationFilter = {
    is?: Prisma.wishlist_offersWhereInput | null;
    isNot?: Prisma.wishlist_offersWhereInput | null;
};
export type Wishlist_offersListRelationFilter = {
    every?: Prisma.wishlist_offersWhereInput;
    some?: Prisma.wishlist_offersWhereInput;
    none?: Prisma.wishlist_offersWhereInput;
};
export type wishlist_offersOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Wishlist_offersScalarRelationFilter = {
    is?: Prisma.wishlist_offersWhereInput;
    isNot?: Prisma.wishlist_offersWhereInput;
};
export type wishlist_offersIdOfferer_store_idCompoundUniqueInput = {
    id: string;
    offerer_store_id: string;
};
export type wishlist_offersIdOfferer_user_idCompoundUniqueInput = {
    id: string;
    offerer_user_id: string;
};
export type wishlist_offersIdGame_idCompoundUniqueInput = {
    id: string;
    game_id: string;
};
export type wishlist_offersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wishlist_item_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrder;
    requests_cash?: Prisma.SortOrder;
    requests_trade?: Prisma.SortOrder;
    cash_ask_amount?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    trade_terms_note?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    responded_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type wishlist_offersAvgOrderByAggregateInput = {
    cash_ask_amount?: Prisma.SortOrder;
};
export type wishlist_offersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wishlist_item_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrder;
    requests_cash?: Prisma.SortOrder;
    requests_trade?: Prisma.SortOrder;
    cash_ask_amount?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    trade_terms_note?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    responded_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type wishlist_offersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wishlist_item_id?: Prisma.SortOrder;
    offerer_user_id?: Prisma.SortOrder;
    offerer_store_id?: Prisma.SortOrder;
    requests_cash?: Prisma.SortOrder;
    requests_trade?: Prisma.SortOrder;
    cash_ask_amount?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    trade_terms_note?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    responded_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type wishlist_offersSumOrderByAggregateInput = {
    cash_ask_amount?: Prisma.SortOrder;
};
export type wishlist_offersCreateNestedOneWithoutInventory_item_interestsInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutInventory_item_interestsInput, Prisma.wishlist_offersUncheckedCreateWithoutInventory_item_interestsInput>;
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutInventory_item_interestsInput;
    connect?: Prisma.wishlist_offersWhereUniqueInput;
};
export type wishlist_offersUpdateOneWithoutInventory_item_interestsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutInventory_item_interestsInput, Prisma.wishlist_offersUncheckedCreateWithoutInventory_item_interestsInput>;
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutInventory_item_interestsInput;
    upsert?: Prisma.wishlist_offersUpsertWithoutInventory_item_interestsInput;
    disconnect?: Prisma.wishlist_offersWhereInput | boolean;
    delete?: Prisma.wishlist_offersWhereInput | boolean;
    connect?: Prisma.wishlist_offersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.wishlist_offersUpdateToOneWithWhereWithoutInventory_item_interestsInput, Prisma.wishlist_offersUpdateWithoutInventory_item_interestsInput>, Prisma.wishlist_offersUncheckedUpdateWithoutInventory_item_interestsInput>;
};
export type wishlist_offersCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutStoresInput, Prisma.wishlist_offersUncheckedCreateWithoutStoresInput> | Prisma.wishlist_offersCreateWithoutStoresInput[] | Prisma.wishlist_offersUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutStoresInput | Prisma.wishlist_offersCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.wishlist_offersCreateManyStoresInputEnvelope;
    connect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
};
export type wishlist_offersUncheckedCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutStoresInput, Prisma.wishlist_offersUncheckedCreateWithoutStoresInput> | Prisma.wishlist_offersCreateWithoutStoresInput[] | Prisma.wishlist_offersUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutStoresInput | Prisma.wishlist_offersCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.wishlist_offersCreateManyStoresInputEnvelope;
    connect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
};
export type wishlist_offersUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutStoresInput, Prisma.wishlist_offersUncheckedCreateWithoutStoresInput> | Prisma.wishlist_offersCreateWithoutStoresInput[] | Prisma.wishlist_offersUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutStoresInput | Prisma.wishlist_offersCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.wishlist_offersUpsertWithWhereUniqueWithoutStoresInput | Prisma.wishlist_offersUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.wishlist_offersCreateManyStoresInputEnvelope;
    set?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    delete?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    connect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    update?: Prisma.wishlist_offersUpdateWithWhereUniqueWithoutStoresInput | Prisma.wishlist_offersUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.wishlist_offersUpdateManyWithWhereWithoutStoresInput | Prisma.wishlist_offersUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.wishlist_offersScalarWhereInput | Prisma.wishlist_offersScalarWhereInput[];
};
export type wishlist_offersUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutStoresInput, Prisma.wishlist_offersUncheckedCreateWithoutStoresInput> | Prisma.wishlist_offersCreateWithoutStoresInput[] | Prisma.wishlist_offersUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutStoresInput | Prisma.wishlist_offersCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.wishlist_offersUpsertWithWhereUniqueWithoutStoresInput | Prisma.wishlist_offersUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.wishlist_offersCreateManyStoresInputEnvelope;
    set?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    delete?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    connect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    update?: Prisma.wishlist_offersUpdateWithWhereUniqueWithoutStoresInput | Prisma.wishlist_offersUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.wishlist_offersUpdateManyWithWhereWithoutStoresInput | Prisma.wishlist_offersUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.wishlist_offersScalarWhereInput | Prisma.wishlist_offersScalarWhereInput[];
};
export type wishlist_offersCreateNestedOneWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutTransactionsInput, Prisma.wishlist_offersUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutTransactionsInput;
    connect?: Prisma.wishlist_offersWhereUniqueInput;
};
export type wishlist_offersUpdateOneWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutTransactionsInput, Prisma.wishlist_offersUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutTransactionsInput;
    upsert?: Prisma.wishlist_offersUpsertWithoutTransactionsInput;
    disconnect?: Prisma.wishlist_offersWhereInput | boolean;
    delete?: Prisma.wishlist_offersWhereInput | boolean;
    connect?: Prisma.wishlist_offersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.wishlist_offersUpdateToOneWithWhereWithoutTransactionsInput, Prisma.wishlist_offersUpdateWithoutTransactionsInput>, Prisma.wishlist_offersUncheckedUpdateWithoutTransactionsInput>;
};
export type wishlist_offersCreateNestedManyWithoutUser_profilesInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutUser_profilesInput, Prisma.wishlist_offersUncheckedCreateWithoutUser_profilesInput> | Prisma.wishlist_offersCreateWithoutUser_profilesInput[] | Prisma.wishlist_offersUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutUser_profilesInput | Prisma.wishlist_offersCreateOrConnectWithoutUser_profilesInput[];
    createMany?: Prisma.wishlist_offersCreateManyUser_profilesInputEnvelope;
    connect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
};
export type wishlist_offersUncheckedCreateNestedManyWithoutUser_profilesInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutUser_profilesInput, Prisma.wishlist_offersUncheckedCreateWithoutUser_profilesInput> | Prisma.wishlist_offersCreateWithoutUser_profilesInput[] | Prisma.wishlist_offersUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutUser_profilesInput | Prisma.wishlist_offersCreateOrConnectWithoutUser_profilesInput[];
    createMany?: Prisma.wishlist_offersCreateManyUser_profilesInputEnvelope;
    connect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
};
export type wishlist_offersUpdateManyWithoutUser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutUser_profilesInput, Prisma.wishlist_offersUncheckedCreateWithoutUser_profilesInput> | Prisma.wishlist_offersCreateWithoutUser_profilesInput[] | Prisma.wishlist_offersUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutUser_profilesInput | Prisma.wishlist_offersCreateOrConnectWithoutUser_profilesInput[];
    upsert?: Prisma.wishlist_offersUpsertWithWhereUniqueWithoutUser_profilesInput | Prisma.wishlist_offersUpsertWithWhereUniqueWithoutUser_profilesInput[];
    createMany?: Prisma.wishlist_offersCreateManyUser_profilesInputEnvelope;
    set?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    delete?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    connect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    update?: Prisma.wishlist_offersUpdateWithWhereUniqueWithoutUser_profilesInput | Prisma.wishlist_offersUpdateWithWhereUniqueWithoutUser_profilesInput[];
    updateMany?: Prisma.wishlist_offersUpdateManyWithWhereWithoutUser_profilesInput | Prisma.wishlist_offersUpdateManyWithWhereWithoutUser_profilesInput[];
    deleteMany?: Prisma.wishlist_offersScalarWhereInput | Prisma.wishlist_offersScalarWhereInput[];
};
export type wishlist_offersUncheckedUpdateManyWithoutUser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutUser_profilesInput, Prisma.wishlist_offersUncheckedCreateWithoutUser_profilesInput> | Prisma.wishlist_offersCreateWithoutUser_profilesInput[] | Prisma.wishlist_offersUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutUser_profilesInput | Prisma.wishlist_offersCreateOrConnectWithoutUser_profilesInput[];
    upsert?: Prisma.wishlist_offersUpsertWithWhereUniqueWithoutUser_profilesInput | Prisma.wishlist_offersUpsertWithWhereUniqueWithoutUser_profilesInput[];
    createMany?: Prisma.wishlist_offersCreateManyUser_profilesInputEnvelope;
    set?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    delete?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    connect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    update?: Prisma.wishlist_offersUpdateWithWhereUniqueWithoutUser_profilesInput | Prisma.wishlist_offersUpdateWithWhereUniqueWithoutUser_profilesInput[];
    updateMany?: Prisma.wishlist_offersUpdateManyWithWhereWithoutUser_profilesInput | Prisma.wishlist_offersUpdateManyWithWhereWithoutUser_profilesInput[];
    deleteMany?: Prisma.wishlist_offersScalarWhereInput | Prisma.wishlist_offersScalarWhereInput[];
};
export type wishlist_offersCreateNestedManyWithoutWishlist_itemsInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_itemsInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_itemsInput> | Prisma.wishlist_offersCreateWithoutWishlist_itemsInput[] | Prisma.wishlist_offersUncheckedCreateWithoutWishlist_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutWishlist_itemsInput | Prisma.wishlist_offersCreateOrConnectWithoutWishlist_itemsInput[];
    createMany?: Prisma.wishlist_offersCreateManyWishlist_itemsInputEnvelope;
    connect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
};
export type wishlist_offersUncheckedCreateNestedManyWithoutWishlist_itemsInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_itemsInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_itemsInput> | Prisma.wishlist_offersCreateWithoutWishlist_itemsInput[] | Prisma.wishlist_offersUncheckedCreateWithoutWishlist_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutWishlist_itemsInput | Prisma.wishlist_offersCreateOrConnectWithoutWishlist_itemsInput[];
    createMany?: Prisma.wishlist_offersCreateManyWishlist_itemsInputEnvelope;
    connect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
};
export type wishlist_offersUpdateManyWithoutWishlist_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_itemsInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_itemsInput> | Prisma.wishlist_offersCreateWithoutWishlist_itemsInput[] | Prisma.wishlist_offersUncheckedCreateWithoutWishlist_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutWishlist_itemsInput | Prisma.wishlist_offersCreateOrConnectWithoutWishlist_itemsInput[];
    upsert?: Prisma.wishlist_offersUpsertWithWhereUniqueWithoutWishlist_itemsInput | Prisma.wishlist_offersUpsertWithWhereUniqueWithoutWishlist_itemsInput[];
    createMany?: Prisma.wishlist_offersCreateManyWishlist_itemsInputEnvelope;
    set?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    delete?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    connect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    update?: Prisma.wishlist_offersUpdateWithWhereUniqueWithoutWishlist_itemsInput | Prisma.wishlist_offersUpdateWithWhereUniqueWithoutWishlist_itemsInput[];
    updateMany?: Prisma.wishlist_offersUpdateManyWithWhereWithoutWishlist_itemsInput | Prisma.wishlist_offersUpdateManyWithWhereWithoutWishlist_itemsInput[];
    deleteMany?: Prisma.wishlist_offersScalarWhereInput | Prisma.wishlist_offersScalarWhereInput[];
};
export type wishlist_offersUncheckedUpdateManyWithoutWishlist_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_itemsInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_itemsInput> | Prisma.wishlist_offersCreateWithoutWishlist_itemsInput[] | Prisma.wishlist_offersUncheckedCreateWithoutWishlist_itemsInput[];
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutWishlist_itemsInput | Prisma.wishlist_offersCreateOrConnectWithoutWishlist_itemsInput[];
    upsert?: Prisma.wishlist_offersUpsertWithWhereUniqueWithoutWishlist_itemsInput | Prisma.wishlist_offersUpsertWithWhereUniqueWithoutWishlist_itemsInput[];
    createMany?: Prisma.wishlist_offersCreateManyWishlist_itemsInputEnvelope;
    set?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    delete?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    connect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    update?: Prisma.wishlist_offersUpdateWithWhereUniqueWithoutWishlist_itemsInput | Prisma.wishlist_offersUpdateWithWhereUniqueWithoutWishlist_itemsInput[];
    updateMany?: Prisma.wishlist_offersUpdateManyWithWhereWithoutWishlist_itemsInput | Prisma.wishlist_offersUpdateManyWithWhereWithoutWishlist_itemsInput[];
    deleteMany?: Prisma.wishlist_offersScalarWhereInput | Prisma.wishlist_offersScalarWhereInput[];
};
export type wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput>;
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    connect?: Prisma.wishlist_offersWhereUniqueInput;
};
export type wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput>;
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    connect?: Prisma.wishlist_offersWhereUniqueInput;
};
export type wishlist_offersCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput>;
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    connect?: Prisma.wishlist_offersWhereUniqueInput;
};
export type wishlist_offersUpdateOneRequiredWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput>;
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    upsert?: Prisma.wishlist_offersUpsertWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    connect?: Prisma.wishlist_offersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.wishlist_offersUpdateToOneWithWhereWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput, Prisma.wishlist_offersUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput>, Prisma.wishlist_offersUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput>;
};
export type wishlist_offersUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput>;
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    upsert?: Prisma.wishlist_offersUpsertWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    disconnect?: Prisma.wishlist_offersWhereInput | boolean;
    delete?: Prisma.wishlist_offersWhereInput | boolean;
    connect?: Prisma.wishlist_offersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.wishlist_offersUpdateToOneWithWhereWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput, Prisma.wishlist_offersUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput>, Prisma.wishlist_offersUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput>;
};
export type wishlist_offersUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput>;
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    upsert?: Prisma.wishlist_offersUpsertWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    disconnect?: Prisma.wishlist_offersWhereInput | boolean;
    delete?: Prisma.wishlist_offersWhereInput | boolean;
    connect?: Prisma.wishlist_offersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.wishlist_offersUpdateToOneWithWhereWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput, Prisma.wishlist_offersUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput>, Prisma.wishlist_offersUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput>;
};
export type wishlist_offersCreateNestedOneWithoutWishlist_offer_requested_itemsInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_offer_requested_itemsInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_offer_requested_itemsInput>;
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutWishlist_offer_requested_itemsInput;
    connect?: Prisma.wishlist_offersWhereUniqueInput;
};
export type wishlist_offersUpdateOneRequiredWithoutWishlist_offer_requested_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_offer_requested_itemsInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_offer_requested_itemsInput>;
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutWishlist_offer_requested_itemsInput;
    upsert?: Prisma.wishlist_offersUpsertWithoutWishlist_offer_requested_itemsInput;
    connect?: Prisma.wishlist_offersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.wishlist_offersUpdateToOneWithWhereWithoutWishlist_offer_requested_itemsInput, Prisma.wishlist_offersUpdateWithoutWishlist_offer_requested_itemsInput>, Prisma.wishlist_offersUncheckedUpdateWithoutWishlist_offer_requested_itemsInput>;
};
export type wishlist_offersCreateNestedManyWithoutStore_gamesInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutStore_gamesInput, Prisma.wishlist_offersUncheckedCreateWithoutStore_gamesInput> | Prisma.wishlist_offersCreateWithoutStore_gamesInput[] | Prisma.wishlist_offersUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutStore_gamesInput | Prisma.wishlist_offersCreateOrConnectWithoutStore_gamesInput[];
    createMany?: Prisma.wishlist_offersCreateManyStore_gamesInputEnvelope;
    connect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
};
export type wishlist_offersUncheckedCreateNestedManyWithoutStore_gamesInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutStore_gamesInput, Prisma.wishlist_offersUncheckedCreateWithoutStore_gamesInput> | Prisma.wishlist_offersCreateWithoutStore_gamesInput[] | Prisma.wishlist_offersUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutStore_gamesInput | Prisma.wishlist_offersCreateOrConnectWithoutStore_gamesInput[];
    createMany?: Prisma.wishlist_offersCreateManyStore_gamesInputEnvelope;
    connect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
};
export type wishlist_offersUpdateManyWithoutStore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutStore_gamesInput, Prisma.wishlist_offersUncheckedCreateWithoutStore_gamesInput> | Prisma.wishlist_offersCreateWithoutStore_gamesInput[] | Prisma.wishlist_offersUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutStore_gamesInput | Prisma.wishlist_offersCreateOrConnectWithoutStore_gamesInput[];
    upsert?: Prisma.wishlist_offersUpsertWithWhereUniqueWithoutStore_gamesInput | Prisma.wishlist_offersUpsertWithWhereUniqueWithoutStore_gamesInput[];
    createMany?: Prisma.wishlist_offersCreateManyStore_gamesInputEnvelope;
    set?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    delete?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    connect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    update?: Prisma.wishlist_offersUpdateWithWhereUniqueWithoutStore_gamesInput | Prisma.wishlist_offersUpdateWithWhereUniqueWithoutStore_gamesInput[];
    updateMany?: Prisma.wishlist_offersUpdateManyWithWhereWithoutStore_gamesInput | Prisma.wishlist_offersUpdateManyWithWhereWithoutStore_gamesInput[];
    deleteMany?: Prisma.wishlist_offersScalarWhereInput | Prisma.wishlist_offersScalarWhereInput[];
};
export type wishlist_offersUncheckedUpdateManyWithoutStore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.wishlist_offersCreateWithoutStore_gamesInput, Prisma.wishlist_offersUncheckedCreateWithoutStore_gamesInput> | Prisma.wishlist_offersCreateWithoutStore_gamesInput[] | Prisma.wishlist_offersUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.wishlist_offersCreateOrConnectWithoutStore_gamesInput | Prisma.wishlist_offersCreateOrConnectWithoutStore_gamesInput[];
    upsert?: Prisma.wishlist_offersUpsertWithWhereUniqueWithoutStore_gamesInput | Prisma.wishlist_offersUpsertWithWhereUniqueWithoutStore_gamesInput[];
    createMany?: Prisma.wishlist_offersCreateManyStore_gamesInputEnvelope;
    set?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    disconnect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    delete?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    connect?: Prisma.wishlist_offersWhereUniqueInput | Prisma.wishlist_offersWhereUniqueInput[];
    update?: Prisma.wishlist_offersUpdateWithWhereUniqueWithoutStore_gamesInput | Prisma.wishlist_offersUpdateWithWhereUniqueWithoutStore_gamesInput[];
    updateMany?: Prisma.wishlist_offersUpdateManyWithWhereWithoutStore_gamesInput | Prisma.wishlist_offersUpdateManyWithWhereWithoutStore_gamesInput[];
    deleteMany?: Prisma.wishlist_offersScalarWhereInput | Prisma.wishlist_offersScalarWhereInput[];
};
export type wishlist_offersCreateWithoutInventory_item_interestsInput = {
    id?: string;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    transactions?: Prisma.transactionsCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutWishlist_offersInput;
    stores?: Prisma.storesCreateNestedOneWithoutWishlist_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutWishlist_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutWishlist_offersInput;
    wishlist_items: Prisma.wishlist_itemsCreateNestedOneWithoutWishlist_offersInput;
};
export type wishlist_offersUncheckedCreateWithoutInventory_item_interestsInput = {
    id?: string;
    wishlist_item_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutWishlist_offersInput;
};
export type wishlist_offersCreateOrConnectWithoutInventory_item_interestsInput = {
    where: Prisma.wishlist_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutInventory_item_interestsInput, Prisma.wishlist_offersUncheckedCreateWithoutInventory_item_interestsInput>;
};
export type wishlist_offersUpsertWithoutInventory_item_interestsInput = {
    update: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutInventory_item_interestsInput, Prisma.wishlist_offersUncheckedUpdateWithoutInventory_item_interestsInput>;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutInventory_item_interestsInput, Prisma.wishlist_offersUncheckedCreateWithoutInventory_item_interestsInput>;
    where?: Prisma.wishlist_offersWhereInput;
};
export type wishlist_offersUpdateToOneWithWhereWithoutInventory_item_interestsInput = {
    where?: Prisma.wishlist_offersWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutInventory_item_interestsInput, Prisma.wishlist_offersUncheckedUpdateWithoutInventory_item_interestsInput>;
};
export type wishlist_offersUpdateWithoutInventory_item_interestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.transactionsUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutWishlist_offersNestedInput;
    stores?: Prisma.storesUpdateOneWithoutWishlist_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutWishlist_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutWishlist_offersNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateOneRequiredWithoutWishlist_offersNestedInput;
};
export type wishlist_offersUncheckedUpdateWithoutInventory_item_interestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transactions?: Prisma.transactionsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
};
export type wishlist_offersCreateWithoutStoresInput = {
    id?: string;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutWishlist_offersInput;
    transactions?: Prisma.transactionsCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutWishlist_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutWishlist_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutWishlist_offersInput;
    wishlist_items: Prisma.wishlist_itemsCreateNestedOneWithoutWishlist_offersInput;
};
export type wishlist_offersUncheckedCreateWithoutStoresInput = {
    id?: string;
    wishlist_item_id: string;
    offerer_user_id?: string | null;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutWishlist_offersInput;
};
export type wishlist_offersCreateOrConnectWithoutStoresInput = {
    where: Prisma.wishlist_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutStoresInput, Prisma.wishlist_offersUncheckedCreateWithoutStoresInput>;
};
export type wishlist_offersCreateManyStoresInputEnvelope = {
    data: Prisma.wishlist_offersCreateManyStoresInput | Prisma.wishlist_offersCreateManyStoresInput[];
    skipDuplicates?: boolean;
};
export type wishlist_offersUpsertWithWhereUniqueWithoutStoresInput = {
    where: Prisma.wishlist_offersWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutStoresInput, Prisma.wishlist_offersUncheckedUpdateWithoutStoresInput>;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutStoresInput, Prisma.wishlist_offersUncheckedCreateWithoutStoresInput>;
};
export type wishlist_offersUpdateWithWhereUniqueWithoutStoresInput = {
    where: Prisma.wishlist_offersWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutStoresInput, Prisma.wishlist_offersUncheckedUpdateWithoutStoresInput>;
};
export type wishlist_offersUpdateManyWithWhereWithoutStoresInput = {
    where: Prisma.wishlist_offersScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offersUpdateManyMutationInput, Prisma.wishlist_offersUncheckedUpdateManyWithoutStoresInput>;
};
export type wishlist_offersScalarWhereInput = {
    AND?: Prisma.wishlist_offersScalarWhereInput | Prisma.wishlist_offersScalarWhereInput[];
    OR?: Prisma.wishlist_offersScalarWhereInput[];
    NOT?: Prisma.wishlist_offersScalarWhereInput | Prisma.wishlist_offersScalarWhereInput[];
    id?: Prisma.UuidFilter<"wishlist_offers"> | string;
    wishlist_item_id?: Prisma.UuidFilter<"wishlist_offers"> | string;
    offerer_user_id?: Prisma.UuidNullableFilter<"wishlist_offers"> | string | null;
    offerer_store_id?: Prisma.UuidNullableFilter<"wishlist_offers"> | string | null;
    requests_cash?: Prisma.BoolFilter<"wishlist_offers"> | boolean;
    requests_trade?: Prisma.BoolFilter<"wishlist_offers"> | boolean;
    cash_ask_amount?: Prisma.DecimalNullableFilter<"wishlist_offers"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.StringNullableFilter<"wishlist_offers"> | string | null;
    message?: Prisma.StringNullableFilter<"wishlist_offers"> | string | null;
    trade_terms_note?: Prisma.StringNullableFilter<"wishlist_offers"> | string | null;
    status?: Prisma.StringFilter<"wishlist_offers"> | string;
    expires_at?: Prisma.DateTimeNullableFilter<"wishlist_offers"> | Date | string | null;
    responded_at?: Prisma.DateTimeNullableFilter<"wishlist_offers"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"wishlist_offers"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"wishlist_offers"> | Date | string;
    game_id?: Prisma.UuidFilter<"wishlist_offers"> | string;
};
export type wishlist_offersCreateWithoutTransactionsInput = {
    id?: string;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutWishlist_offersInput;
    stores?: Prisma.storesCreateNestedOneWithoutWishlist_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutWishlist_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutWishlist_offersInput;
    wishlist_items: Prisma.wishlist_itemsCreateNestedOneWithoutWishlist_offersInput;
};
export type wishlist_offersUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    wishlist_item_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutWishlist_offersInput;
};
export type wishlist_offersCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.wishlist_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutTransactionsInput, Prisma.wishlist_offersUncheckedCreateWithoutTransactionsInput>;
};
export type wishlist_offersUpsertWithoutTransactionsInput = {
    update: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutTransactionsInput, Prisma.wishlist_offersUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutTransactionsInput, Prisma.wishlist_offersUncheckedCreateWithoutTransactionsInput>;
    where?: Prisma.wishlist_offersWhereInput;
};
export type wishlist_offersUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: Prisma.wishlist_offersWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutTransactionsInput, Prisma.wishlist_offersUncheckedUpdateWithoutTransactionsInput>;
};
export type wishlist_offersUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutWishlist_offersNestedInput;
    stores?: Prisma.storesUpdateOneWithoutWishlist_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutWishlist_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutWishlist_offersNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateOneRequiredWithoutWishlist_offersNestedInput;
};
export type wishlist_offersUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
};
export type wishlist_offersCreateWithoutUser_profilesInput = {
    id?: string;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutWishlist_offersInput;
    transactions?: Prisma.transactionsCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutWishlist_offersInput;
    stores?: Prisma.storesCreateNestedOneWithoutWishlist_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutWishlist_offersInput;
    wishlist_items: Prisma.wishlist_itemsCreateNestedOneWithoutWishlist_offersInput;
};
export type wishlist_offersUncheckedCreateWithoutUser_profilesInput = {
    id?: string;
    wishlist_item_id: string;
    offerer_store_id?: string | null;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutWishlist_offersInput;
};
export type wishlist_offersCreateOrConnectWithoutUser_profilesInput = {
    where: Prisma.wishlist_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutUser_profilesInput, Prisma.wishlist_offersUncheckedCreateWithoutUser_profilesInput>;
};
export type wishlist_offersCreateManyUser_profilesInputEnvelope = {
    data: Prisma.wishlist_offersCreateManyUser_profilesInput | Prisma.wishlist_offersCreateManyUser_profilesInput[];
    skipDuplicates?: boolean;
};
export type wishlist_offersUpsertWithWhereUniqueWithoutUser_profilesInput = {
    where: Prisma.wishlist_offersWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutUser_profilesInput, Prisma.wishlist_offersUncheckedUpdateWithoutUser_profilesInput>;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutUser_profilesInput, Prisma.wishlist_offersUncheckedCreateWithoutUser_profilesInput>;
};
export type wishlist_offersUpdateWithWhereUniqueWithoutUser_profilesInput = {
    where: Prisma.wishlist_offersWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutUser_profilesInput, Prisma.wishlist_offersUncheckedUpdateWithoutUser_profilesInput>;
};
export type wishlist_offersUpdateManyWithWhereWithoutUser_profilesInput = {
    where: Prisma.wishlist_offersScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offersUpdateManyMutationInput, Prisma.wishlist_offersUncheckedUpdateManyWithoutUser_profilesInput>;
};
export type wishlist_offersCreateWithoutWishlist_itemsInput = {
    id?: string;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutWishlist_offersInput;
    transactions?: Prisma.transactionsCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutWishlist_offersInput;
    stores?: Prisma.storesCreateNestedOneWithoutWishlist_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutWishlist_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutWishlist_offersInput;
};
export type wishlist_offersUncheckedCreateWithoutWishlist_itemsInput = {
    id?: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutWishlist_offersInput;
};
export type wishlist_offersCreateOrConnectWithoutWishlist_itemsInput = {
    where: Prisma.wishlist_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_itemsInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_itemsInput>;
};
export type wishlist_offersCreateManyWishlist_itemsInputEnvelope = {
    data: Prisma.wishlist_offersCreateManyWishlist_itemsInput | Prisma.wishlist_offersCreateManyWishlist_itemsInput[];
    skipDuplicates?: boolean;
};
export type wishlist_offersUpsertWithWhereUniqueWithoutWishlist_itemsInput = {
    where: Prisma.wishlist_offersWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutWishlist_itemsInput, Prisma.wishlist_offersUncheckedUpdateWithoutWishlist_itemsInput>;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_itemsInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_itemsInput>;
};
export type wishlist_offersUpdateWithWhereUniqueWithoutWishlist_itemsInput = {
    where: Prisma.wishlist_offersWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutWishlist_itemsInput, Prisma.wishlist_offersUncheckedUpdateWithoutWishlist_itemsInput>;
};
export type wishlist_offersUpdateManyWithWhereWithoutWishlist_itemsInput = {
    where: Prisma.wishlist_offersScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offersUpdateManyMutationInput, Prisma.wishlist_offersUncheckedUpdateManyWithoutWishlist_itemsInput>;
};
export type wishlist_offersCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    id?: string;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutWishlist_offersInput;
    transactions?: Prisma.transactionsCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutWishlist_offersInput;
    stores?: Prisma.storesCreateNestedOneWithoutWishlist_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutWishlist_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutWishlist_offersInput;
    wishlist_items: Prisma.wishlist_itemsCreateNestedOneWithoutWishlist_offersInput;
};
export type wishlist_offersUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    id?: string;
    wishlist_item_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutWishlist_offersInput;
};
export type wishlist_offersCreateOrConnectWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    where: Prisma.wishlist_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput>;
};
export type wishlist_offersCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    id?: string;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutWishlist_offersInput;
    transactions?: Prisma.transactionsCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutWishlist_offersInput;
    stores?: Prisma.storesCreateNestedOneWithoutWishlist_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutWishlist_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutWishlist_offersInput;
    wishlist_items: Prisma.wishlist_itemsCreateNestedOneWithoutWishlist_offersInput;
};
export type wishlist_offersUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    id?: string;
    wishlist_item_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutWishlist_offersInput;
};
export type wishlist_offersCreateOrConnectWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    where: Prisma.wishlist_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput>;
};
export type wishlist_offersCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    id?: string;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutWishlist_offersInput;
    transactions?: Prisma.transactionsCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutWishlist_offersInput;
    stores?: Prisma.storesCreateNestedOneWithoutWishlist_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutWishlist_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutWishlist_offersInput;
    wishlist_items: Prisma.wishlist_itemsCreateNestedOneWithoutWishlist_offersInput;
};
export type wishlist_offersUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    id?: string;
    wishlist_item_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutWishlist_offersInput;
};
export type wishlist_offersCreateOrConnectWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    where: Prisma.wishlist_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput>;
};
export type wishlist_offersUpsertWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    update: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput, Prisma.wishlist_offersUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput>;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput>;
    where?: Prisma.wishlist_offersWhereInput;
};
export type wishlist_offersUpdateToOneWithWhereWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    where?: Prisma.wishlist_offersWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput, Prisma.wishlist_offersUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput>;
};
export type wishlist_offersUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutWishlist_offersNestedInput;
    transactions?: Prisma.transactionsUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutWishlist_offersNestedInput;
    stores?: Prisma.storesUpdateOneWithoutWishlist_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutWishlist_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutWishlist_offersNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateOneRequiredWithoutWishlist_offersNestedInput;
};
export type wishlist_offersUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
};
export type wishlist_offersUpsertWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    update: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput, Prisma.wishlist_offersUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput>;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput>;
    where?: Prisma.wishlist_offersWhereInput;
};
export type wishlist_offersUpdateToOneWithWhereWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    where?: Prisma.wishlist_offersWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput, Prisma.wishlist_offersUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput>;
};
export type wishlist_offersUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutWishlist_offersNestedInput;
    transactions?: Prisma.transactionsUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutWishlist_offersNestedInput;
    stores?: Prisma.storesUpdateOneWithoutWishlist_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutWishlist_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutWishlist_offersNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateOneRequiredWithoutWishlist_offersNestedInput;
};
export type wishlist_offersUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
};
export type wishlist_offersUpsertWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    update: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput, Prisma.wishlist_offersUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput>;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput>;
    where?: Prisma.wishlist_offersWhereInput;
};
export type wishlist_offersUpdateToOneWithWhereWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    where?: Prisma.wishlist_offersWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput, Prisma.wishlist_offersUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput>;
};
export type wishlist_offersUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutWishlist_offersNestedInput;
    transactions?: Prisma.transactionsUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutWishlist_offersNestedInput;
    stores?: Prisma.storesUpdateOneWithoutWishlist_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutWishlist_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutWishlist_offersNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateOneRequiredWithoutWishlist_offersNestedInput;
};
export type wishlist_offersUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
};
export type wishlist_offersCreateWithoutWishlist_offer_requested_itemsInput = {
    id?: string;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutWishlist_offersInput;
    transactions?: Prisma.transactionsCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    stores?: Prisma.storesCreateNestedOneWithoutWishlist_offersInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutWishlist_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutWishlist_offersInput;
    wishlist_items: Prisma.wishlist_itemsCreateNestedOneWithoutWishlist_offersInput;
};
export type wishlist_offersUncheckedCreateWithoutWishlist_offer_requested_itemsInput = {
    id?: string;
    wishlist_item_id: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
};
export type wishlist_offersCreateOrConnectWithoutWishlist_offer_requested_itemsInput = {
    where: Prisma.wishlist_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_offer_requested_itemsInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_offer_requested_itemsInput>;
};
export type wishlist_offersUpsertWithoutWishlist_offer_requested_itemsInput = {
    update: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutWishlist_offer_requested_itemsInput, Prisma.wishlist_offersUncheckedUpdateWithoutWishlist_offer_requested_itemsInput>;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutWishlist_offer_requested_itemsInput, Prisma.wishlist_offersUncheckedCreateWithoutWishlist_offer_requested_itemsInput>;
    where?: Prisma.wishlist_offersWhereInput;
};
export type wishlist_offersUpdateToOneWithWhereWithoutWishlist_offer_requested_itemsInput = {
    where?: Prisma.wishlist_offersWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutWishlist_offer_requested_itemsInput, Prisma.wishlist_offersUncheckedUpdateWithoutWishlist_offer_requested_itemsInput>;
};
export type wishlist_offersUpdateWithoutWishlist_offer_requested_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutWishlist_offersNestedInput;
    transactions?: Prisma.transactionsUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
    stores?: Prisma.storesUpdateOneWithoutWishlist_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutWishlist_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutWishlist_offersNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateOneRequiredWithoutWishlist_offersNestedInput;
};
export type wishlist_offersUncheckedUpdateWithoutWishlist_offer_requested_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
};
export type wishlist_offersCreateWithoutStore_gamesInput = {
    id?: string;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutWishlist_offersInput;
    transactions?: Prisma.transactionsCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutWishlist_offersInput;
    stores?: Prisma.storesCreateNestedOneWithoutWishlist_offersInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutWishlist_offersInput;
    wishlist_items: Prisma.wishlist_itemsCreateNestedOneWithoutWishlist_offersInput;
};
export type wishlist_offersUncheckedCreateWithoutStore_gamesInput = {
    id?: string;
    wishlist_item_id: string;
    offerer_user_id?: string | null;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    transactions?: Prisma.transactionsUncheckedCreateNestedManyWithoutWishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutWishlist_offersInput;
};
export type wishlist_offersCreateOrConnectWithoutStore_gamesInput = {
    where: Prisma.wishlist_offersWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutStore_gamesInput, Prisma.wishlist_offersUncheckedCreateWithoutStore_gamesInput>;
};
export type wishlist_offersCreateManyStore_gamesInputEnvelope = {
    data: Prisma.wishlist_offersCreateManyStore_gamesInput | Prisma.wishlist_offersCreateManyStore_gamesInput[];
    skipDuplicates?: boolean;
};
export type wishlist_offersUpsertWithWhereUniqueWithoutStore_gamesInput = {
    where: Prisma.wishlist_offersWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutStore_gamesInput, Prisma.wishlist_offersUncheckedUpdateWithoutStore_gamesInput>;
    create: Prisma.XOR<Prisma.wishlist_offersCreateWithoutStore_gamesInput, Prisma.wishlist_offersUncheckedCreateWithoutStore_gamesInput>;
};
export type wishlist_offersUpdateWithWhereUniqueWithoutStore_gamesInput = {
    where: Prisma.wishlist_offersWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlist_offersUpdateWithoutStore_gamesInput, Prisma.wishlist_offersUncheckedUpdateWithoutStore_gamesInput>;
};
export type wishlist_offersUpdateManyWithWhereWithoutStore_gamesInput = {
    where: Prisma.wishlist_offersScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlist_offersUpdateManyMutationInput, Prisma.wishlist_offersUncheckedUpdateManyWithoutStore_gamesInput>;
};
export type wishlist_offersCreateManyStoresInput = {
    id?: string;
    wishlist_item_id: string;
    offerer_user_id?: string | null;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type wishlist_offersUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutWishlist_offersNestedInput;
    transactions?: Prisma.transactionsUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutWishlist_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutWishlist_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutWishlist_offersNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateOneRequiredWithoutWishlist_offersNestedInput;
};
export type wishlist_offersUncheckedUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
};
export type wishlist_offersUncheckedUpdateManyWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type wishlist_offersCreateManyUser_profilesInput = {
    id?: string;
    wishlist_item_id: string;
    offerer_store_id?: string | null;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type wishlist_offersUpdateWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutWishlist_offersNestedInput;
    transactions?: Prisma.transactionsUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutWishlist_offersNestedInput;
    stores?: Prisma.storesUpdateOneWithoutWishlist_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutWishlist_offersNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateOneRequiredWithoutWishlist_offersNestedInput;
};
export type wishlist_offersUncheckedUpdateWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
};
export type wishlist_offersUncheckedUpdateManyWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type wishlist_offersCreateManyWishlist_itemsInput = {
    id?: string;
    offerer_user_id?: string | null;
    offerer_store_id?: string | null;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type wishlist_offersUpdateWithoutWishlist_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutWishlist_offersNestedInput;
    transactions?: Prisma.transactionsUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutWishlist_offersNestedInput;
    stores?: Prisma.storesUpdateOneWithoutWishlist_offersNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutWishlist_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutWishlist_offersNestedInput;
};
export type wishlist_offersUncheckedUpdateWithoutWishlist_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
};
export type wishlist_offersUncheckedUpdateManyWithoutWishlist_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    offerer_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type wishlist_offersCreateManyStore_gamesInput = {
    id?: string;
    wishlist_item_id: string;
    offerer_user_id?: string | null;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: string | null;
    message?: string | null;
    trade_terms_note?: string | null;
    status?: string;
    expires_at?: Date | string | null;
    responded_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type wishlist_offersUpdateWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutWishlist_offersNestedInput;
    transactions?: Prisma.transactionsUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutWishlist_offersNestedInput;
    stores?: Prisma.storesUpdateOneWithoutWishlist_offersNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutWishlist_offersNestedInput;
    wishlist_items?: Prisma.wishlist_itemsUpdateOneRequiredWithoutWishlist_offersNestedInput;
};
export type wishlist_offersUncheckedUpdateWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    transactions?: Prisma.transactionsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersNestedInput;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutWishlist_offers_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutWishlist_offersNestedInput;
};
export type wishlist_offersUncheckedUpdateManyWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_item_id?: Prisma.StringFieldUpdateOperationsInput | string;
    offerer_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requests_cash?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    requests_trade?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cash_ask_amount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    currency_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_terms_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    expires_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    responded_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type Wishlist_offersCountOutputType
 */
export type Wishlist_offersCountOutputType = {
    inventory_item_interests: number;
    transactions: number;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers: number;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers: number;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers: number;
    wishlist_offer_requested_items: number;
};
export type Wishlist_offersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_item_interests?: boolean | Wishlist_offersCountOutputTypeCountInventory_item_interestsArgs;
    transactions?: boolean | Wishlist_offersCountOutputTypeCountTransactionsArgs;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: boolean | Wishlist_offersCountOutputTypeCountWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersArgs;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: boolean | Wishlist_offersCountOutputTypeCountWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersArgs;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: boolean | Wishlist_offersCountOutputTypeCountWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersArgs;
    wishlist_offer_requested_items?: boolean | Wishlist_offersCountOutputTypeCountWishlist_offer_requested_itemsArgs;
};
/**
 * Wishlist_offersCountOutputType without action
 */
export type Wishlist_offersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wishlist_offersCountOutputType
     */
    select?: Prisma.Wishlist_offersCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Wishlist_offersCountOutputType without action
 */
export type Wishlist_offersCountOutputTypeCountInventory_item_interestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventory_item_interestsWhereInput;
};
/**
 * Wishlist_offersCountOutputType without action
 */
export type Wishlist_offersCountOutputTypeCountTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transactionsWhereInput;
};
/**
 * Wishlist_offersCountOutputType without action
 */
export type Wishlist_offersCountOutputTypeCountWishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_offer_itemsWhereInput;
};
/**
 * Wishlist_offersCountOutputType without action
 */
export type Wishlist_offersCountOutputTypeCountWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_offer_itemsWhereInput;
};
/**
 * Wishlist_offersCountOutputType without action
 */
export type Wishlist_offersCountOutputTypeCountWishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_offer_itemsWhereInput;
};
/**
 * Wishlist_offersCountOutputType without action
 */
export type Wishlist_offersCountOutputTypeCountWishlist_offer_requested_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_offer_requested_itemsWhereInput;
};
export type wishlist_offersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wishlist_item_id?: boolean;
    offerer_user_id?: boolean;
    offerer_store_id?: boolean;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: boolean;
    currency_code?: boolean;
    message?: boolean;
    trade_terms_note?: boolean;
    status?: boolean;
    expires_at?: boolean;
    responded_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    inventory_item_interests?: boolean | Prisma.wishlist_offers$inventory_item_interestsArgs<ExtArgs>;
    transactions?: boolean | Prisma.wishlist_offers$transactionsArgs<ExtArgs>;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: boolean | Prisma.wishlist_offers$wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersArgs<ExtArgs>;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: boolean | Prisma.wishlist_offers$wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersArgs<ExtArgs>;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: boolean | Prisma.wishlist_offers$wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersArgs<ExtArgs>;
    wishlist_offer_requested_items?: boolean | Prisma.wishlist_offers$wishlist_offer_requested_itemsArgs<ExtArgs>;
    stores?: boolean | Prisma.wishlist_offers$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.wishlist_offers$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.wishlist_offers$user_profilesArgs<ExtArgs>;
    wishlist_items?: boolean | Prisma.wishlist_itemsDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Wishlist_offersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist_offers"]>;
export type wishlist_offersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wishlist_item_id?: boolean;
    offerer_user_id?: boolean;
    offerer_store_id?: boolean;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: boolean;
    currency_code?: boolean;
    message?: boolean;
    trade_terms_note?: boolean;
    status?: boolean;
    expires_at?: boolean;
    responded_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    stores?: boolean | Prisma.wishlist_offers$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.wishlist_offers$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.wishlist_offers$user_profilesArgs<ExtArgs>;
    wishlist_items?: boolean | Prisma.wishlist_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist_offers"]>;
export type wishlist_offersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wishlist_item_id?: boolean;
    offerer_user_id?: boolean;
    offerer_store_id?: boolean;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: boolean;
    currency_code?: boolean;
    message?: boolean;
    trade_terms_note?: boolean;
    status?: boolean;
    expires_at?: boolean;
    responded_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    stores?: boolean | Prisma.wishlist_offers$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.wishlist_offers$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.wishlist_offers$user_profilesArgs<ExtArgs>;
    wishlist_items?: boolean | Prisma.wishlist_itemsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist_offers"]>;
export type wishlist_offersSelectScalar = {
    id?: boolean;
    wishlist_item_id?: boolean;
    offerer_user_id?: boolean;
    offerer_store_id?: boolean;
    requests_cash?: boolean;
    requests_trade?: boolean;
    cash_ask_amount?: boolean;
    currency_code?: boolean;
    message?: boolean;
    trade_terms_note?: boolean;
    status?: boolean;
    expires_at?: boolean;
    responded_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
};
export type wishlist_offersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "wishlist_item_id" | "offerer_user_id" | "offerer_store_id" | "requests_cash" | "requests_trade" | "cash_ask_amount" | "currency_code" | "message" | "trade_terms_note" | "status" | "expires_at" | "responded_at" | "created_at" | "updated_at" | "game_id", ExtArgs["result"]["wishlist_offers"]>;
export type wishlist_offersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_item_interests?: boolean | Prisma.wishlist_offers$inventory_item_interestsArgs<ExtArgs>;
    transactions?: boolean | Prisma.wishlist_offers$transactionsArgs<ExtArgs>;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers?: boolean | Prisma.wishlist_offers$wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersArgs<ExtArgs>;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers?: boolean | Prisma.wishlist_offers$wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersArgs<ExtArgs>;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers?: boolean | Prisma.wishlist_offers$wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersArgs<ExtArgs>;
    wishlist_offer_requested_items?: boolean | Prisma.wishlist_offers$wishlist_offer_requested_itemsArgs<ExtArgs>;
    stores?: boolean | Prisma.wishlist_offers$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.wishlist_offers$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.wishlist_offers$user_profilesArgs<ExtArgs>;
    wishlist_items?: boolean | Prisma.wishlist_itemsDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.Wishlist_offersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type wishlist_offersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    stores?: boolean | Prisma.wishlist_offers$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.wishlist_offers$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.wishlist_offers$user_profilesArgs<ExtArgs>;
    wishlist_items?: boolean | Prisma.wishlist_itemsDefaultArgs<ExtArgs>;
};
export type wishlist_offersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    stores?: boolean | Prisma.wishlist_offers$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.wishlist_offers$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.wishlist_offers$user_profilesArgs<ExtArgs>;
    wishlist_items?: boolean | Prisma.wishlist_itemsDefaultArgs<ExtArgs>;
};
export type $wishlist_offersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "wishlist_offers";
    objects: {
        inventory_item_interests: Prisma.$inventory_item_interestsPayload<ExtArgs>[];
        transactions: Prisma.$transactionsPayload<ExtArgs>[];
        wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers: Prisma.$wishlist_offer_itemsPayload<ExtArgs>[];
        wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers: Prisma.$wishlist_offer_itemsPayload<ExtArgs>[];
        wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers: Prisma.$wishlist_offer_itemsPayload<ExtArgs>[];
        wishlist_offer_requested_items: Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>[];
        stores: Prisma.$storesPayload<ExtArgs> | null;
        store_games: Prisma.$store_gamesPayload<ExtArgs> | null;
        user_profiles: Prisma.$user_profilesPayload<ExtArgs> | null;
        wishlist_items: Prisma.$wishlist_itemsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        wishlist_item_id: string;
        offerer_user_id: string | null;
        offerer_store_id: string | null;
        requests_cash: boolean;
        requests_trade: boolean;
        cash_ask_amount: runtime.Decimal | null;
        currency_code: string | null;
        message: string | null;
        trade_terms_note: string | null;
        status: string;
        expires_at: Date | null;
        responded_at: Date | null;
        created_at: Date;
        updated_at: Date;
        game_id: string;
    }, ExtArgs["result"]["wishlist_offers"]>;
    composites: {};
};
export type wishlist_offersGetPayload<S extends boolean | null | undefined | wishlist_offersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload, S>;
export type wishlist_offersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<wishlist_offersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Wishlist_offersCountAggregateInputType | true;
};
export interface wishlist_offersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['wishlist_offers'];
        meta: {
            name: 'wishlist_offers';
        };
    };
    /**
     * Find zero or one Wishlist_offers that matches the filter.
     * @param {wishlist_offersFindUniqueArgs} args - Arguments to find a Wishlist_offers
     * @example
     * // Get one Wishlist_offers
     * const wishlist_offers = await prisma.wishlist_offers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends wishlist_offersFindUniqueArgs>(args: Prisma.SelectSubset<T, wishlist_offersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__wishlist_offersClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Wishlist_offers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {wishlist_offersFindUniqueOrThrowArgs} args - Arguments to find a Wishlist_offers
     * @example
     * // Get one Wishlist_offers
     * const wishlist_offers = await prisma.wishlist_offers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends wishlist_offersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, wishlist_offersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__wishlist_offersClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Wishlist_offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_offersFindFirstArgs} args - Arguments to find a Wishlist_offers
     * @example
     * // Get one Wishlist_offers
     * const wishlist_offers = await prisma.wishlist_offers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends wishlist_offersFindFirstArgs>(args?: Prisma.SelectSubset<T, wishlist_offersFindFirstArgs<ExtArgs>>): Prisma.Prisma__wishlist_offersClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Wishlist_offers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_offersFindFirstOrThrowArgs} args - Arguments to find a Wishlist_offers
     * @example
     * // Get one Wishlist_offers
     * const wishlist_offers = await prisma.wishlist_offers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends wishlist_offersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, wishlist_offersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__wishlist_offersClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Wishlist_offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_offersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wishlist_offers
     * const wishlist_offers = await prisma.wishlist_offers.findMany()
     *
     * // Get first 10 Wishlist_offers
     * const wishlist_offers = await prisma.wishlist_offers.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const wishlist_offersWithIdOnly = await prisma.wishlist_offers.findMany({ select: { id: true } })
     *
     */
    findMany<T extends wishlist_offersFindManyArgs>(args?: Prisma.SelectSubset<T, wishlist_offersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Wishlist_offers.
     * @param {wishlist_offersCreateArgs} args - Arguments to create a Wishlist_offers.
     * @example
     * // Create one Wishlist_offers
     * const Wishlist_offers = await prisma.wishlist_offers.create({
     *   data: {
     *     // ... data to create a Wishlist_offers
     *   }
     * })
     *
     */
    create<T extends wishlist_offersCreateArgs>(args: Prisma.SelectSubset<T, wishlist_offersCreateArgs<ExtArgs>>): Prisma.Prisma__wishlist_offersClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Wishlist_offers.
     * @param {wishlist_offersCreateManyArgs} args - Arguments to create many Wishlist_offers.
     * @example
     * // Create many Wishlist_offers
     * const wishlist_offers = await prisma.wishlist_offers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends wishlist_offersCreateManyArgs>(args?: Prisma.SelectSubset<T, wishlist_offersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Wishlist_offers and returns the data saved in the database.
     * @param {wishlist_offersCreateManyAndReturnArgs} args - Arguments to create many Wishlist_offers.
     * @example
     * // Create many Wishlist_offers
     * const wishlist_offers = await prisma.wishlist_offers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Wishlist_offers and only return the `id`
     * const wishlist_offersWithIdOnly = await prisma.wishlist_offers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends wishlist_offersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, wishlist_offersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Wishlist_offers.
     * @param {wishlist_offersDeleteArgs} args - Arguments to delete one Wishlist_offers.
     * @example
     * // Delete one Wishlist_offers
     * const Wishlist_offers = await prisma.wishlist_offers.delete({
     *   where: {
     *     // ... filter to delete one Wishlist_offers
     *   }
     * })
     *
     */
    delete<T extends wishlist_offersDeleteArgs>(args: Prisma.SelectSubset<T, wishlist_offersDeleteArgs<ExtArgs>>): Prisma.Prisma__wishlist_offersClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Wishlist_offers.
     * @param {wishlist_offersUpdateArgs} args - Arguments to update one Wishlist_offers.
     * @example
     * // Update one Wishlist_offers
     * const wishlist_offers = await prisma.wishlist_offers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends wishlist_offersUpdateArgs>(args: Prisma.SelectSubset<T, wishlist_offersUpdateArgs<ExtArgs>>): Prisma.Prisma__wishlist_offersClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Wishlist_offers.
     * @param {wishlist_offersDeleteManyArgs} args - Arguments to filter Wishlist_offers to delete.
     * @example
     * // Delete a few Wishlist_offers
     * const { count } = await prisma.wishlist_offers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends wishlist_offersDeleteManyArgs>(args?: Prisma.SelectSubset<T, wishlist_offersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Wishlist_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_offersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wishlist_offers
     * const wishlist_offers = await prisma.wishlist_offers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends wishlist_offersUpdateManyArgs>(args: Prisma.SelectSubset<T, wishlist_offersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Wishlist_offers and returns the data updated in the database.
     * @param {wishlist_offersUpdateManyAndReturnArgs} args - Arguments to update many Wishlist_offers.
     * @example
     * // Update many Wishlist_offers
     * const wishlist_offers = await prisma.wishlist_offers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Wishlist_offers and only return the `id`
     * const wishlist_offersWithIdOnly = await prisma.wishlist_offers.updateManyAndReturn({
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
    updateManyAndReturn<T extends wishlist_offersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, wishlist_offersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Wishlist_offers.
     * @param {wishlist_offersUpsertArgs} args - Arguments to update or create a Wishlist_offers.
     * @example
     * // Update or create a Wishlist_offers
     * const wishlist_offers = await prisma.wishlist_offers.upsert({
     *   create: {
     *     // ... data to create a Wishlist_offers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wishlist_offers we want to update
     *   }
     * })
     */
    upsert<T extends wishlist_offersUpsertArgs>(args: Prisma.SelectSubset<T, wishlist_offersUpsertArgs<ExtArgs>>): Prisma.Prisma__wishlist_offersClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Wishlist_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_offersCountArgs} args - Arguments to filter Wishlist_offers to count.
     * @example
     * // Count the number of Wishlist_offers
     * const count = await prisma.wishlist_offers.count({
     *   where: {
     *     // ... the filter for the Wishlist_offers we want to count
     *   }
     * })
    **/
    count<T extends wishlist_offersCountArgs>(args?: Prisma.Subset<T, wishlist_offersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Wishlist_offersCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Wishlist_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Wishlist_offersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Wishlist_offersAggregateArgs>(args: Prisma.Subset<T, Wishlist_offersAggregateArgs>): Prisma.PrismaPromise<GetWishlist_offersAggregateType<T>>;
    /**
     * Group by Wishlist_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlist_offersGroupByArgs} args - Group by arguments.
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
    groupBy<T extends wishlist_offersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: wishlist_offersGroupByArgs['orderBy'];
    } : {
        orderBy?: wishlist_offersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, wishlist_offersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlist_offersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the wishlist_offers model
     */
    readonly fields: wishlist_offersFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for wishlist_offers.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__wishlist_offersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    inventory_item_interests<T extends Prisma.wishlist_offers$inventory_item_interestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_offers$inventory_item_interestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_item_interestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transactions<T extends Prisma.wishlist_offers$transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_offers$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers<T extends Prisma.wishlist_offers$wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_offers$wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers<T extends Prisma.wishlist_offers$wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_offers$wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers<T extends Prisma.wishlist_offers$wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_offers$wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlist_offer_requested_items<T extends Prisma.wishlist_offers$wishlist_offer_requested_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_offers$wishlist_offer_requested_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    stores<T extends Prisma.wishlist_offers$storesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_offers$storesArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    store_games<T extends Prisma.wishlist_offers$store_gamesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_offers$store_gamesArgs<ExtArgs>>): Prisma.Prisma__store_gamesClient<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user_profiles<T extends Prisma.wishlist_offers$user_profilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_offers$user_profilesArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    wishlist_items<T extends Prisma.wishlist_itemsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlist_itemsDefaultArgs<ExtArgs>>): Prisma.Prisma__wishlist_itemsClient<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the wishlist_offers model
 */
export interface wishlist_offersFieldRefs {
    readonly id: Prisma.FieldRef<"wishlist_offers", 'String'>;
    readonly wishlist_item_id: Prisma.FieldRef<"wishlist_offers", 'String'>;
    readonly offerer_user_id: Prisma.FieldRef<"wishlist_offers", 'String'>;
    readonly offerer_store_id: Prisma.FieldRef<"wishlist_offers", 'String'>;
    readonly requests_cash: Prisma.FieldRef<"wishlist_offers", 'Boolean'>;
    readonly requests_trade: Prisma.FieldRef<"wishlist_offers", 'Boolean'>;
    readonly cash_ask_amount: Prisma.FieldRef<"wishlist_offers", 'Decimal'>;
    readonly currency_code: Prisma.FieldRef<"wishlist_offers", 'String'>;
    readonly message: Prisma.FieldRef<"wishlist_offers", 'String'>;
    readonly trade_terms_note: Prisma.FieldRef<"wishlist_offers", 'String'>;
    readonly status: Prisma.FieldRef<"wishlist_offers", 'String'>;
    readonly expires_at: Prisma.FieldRef<"wishlist_offers", 'DateTime'>;
    readonly responded_at: Prisma.FieldRef<"wishlist_offers", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"wishlist_offers", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"wishlist_offers", 'DateTime'>;
    readonly game_id: Prisma.FieldRef<"wishlist_offers", 'String'>;
}
/**
 * wishlist_offers findUnique
 */
export type wishlist_offersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which wishlist_offers to fetch.
     */
    where: Prisma.wishlist_offersWhereUniqueInput;
};
/**
 * wishlist_offers findUniqueOrThrow
 */
export type wishlist_offersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which wishlist_offers to fetch.
     */
    where: Prisma.wishlist_offersWhereUniqueInput;
};
/**
 * wishlist_offers findFirst
 */
export type wishlist_offersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which wishlist_offers to fetch.
     */
    where?: Prisma.wishlist_offersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlist_offers to fetch.
     */
    orderBy?: Prisma.wishlist_offersOrderByWithRelationInput | Prisma.wishlist_offersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for wishlist_offers.
     */
    cursor?: Prisma.wishlist_offersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlist_offers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlist_offers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wishlist_offers.
     */
    distinct?: Prisma.Wishlist_offersScalarFieldEnum | Prisma.Wishlist_offersScalarFieldEnum[];
};
/**
 * wishlist_offers findFirstOrThrow
 */
export type wishlist_offersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which wishlist_offers to fetch.
     */
    where?: Prisma.wishlist_offersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlist_offers to fetch.
     */
    orderBy?: Prisma.wishlist_offersOrderByWithRelationInput | Prisma.wishlist_offersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for wishlist_offers.
     */
    cursor?: Prisma.wishlist_offersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlist_offers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlist_offers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wishlist_offers.
     */
    distinct?: Prisma.Wishlist_offersScalarFieldEnum | Prisma.Wishlist_offersScalarFieldEnum[];
};
/**
 * wishlist_offers findMany
 */
export type wishlist_offersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which wishlist_offers to fetch.
     */
    where?: Prisma.wishlist_offersWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlist_offers to fetch.
     */
    orderBy?: Prisma.wishlist_offersOrderByWithRelationInput | Prisma.wishlist_offersOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing wishlist_offers.
     */
    cursor?: Prisma.wishlist_offersWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlist_offers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlist_offers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wishlist_offers.
     */
    distinct?: Prisma.Wishlist_offersScalarFieldEnum | Prisma.Wishlist_offersScalarFieldEnum[];
};
/**
 * wishlist_offers create
 */
export type wishlist_offersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a wishlist_offers.
     */
    data: Prisma.XOR<Prisma.wishlist_offersCreateInput, Prisma.wishlist_offersUncheckedCreateInput>;
};
/**
 * wishlist_offers createMany
 */
export type wishlist_offersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many wishlist_offers.
     */
    data: Prisma.wishlist_offersCreateManyInput | Prisma.wishlist_offersCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * wishlist_offers createManyAndReturn
 */
export type wishlist_offersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offers
     */
    select?: Prisma.wishlist_offersSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offers
     */
    omit?: Prisma.wishlist_offersOmit<ExtArgs> | null;
    /**
     * The data used to create many wishlist_offers.
     */
    data: Prisma.wishlist_offersCreateManyInput | Prisma.wishlist_offersCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offersIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * wishlist_offers update
 */
export type wishlist_offersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a wishlist_offers.
     */
    data: Prisma.XOR<Prisma.wishlist_offersUpdateInput, Prisma.wishlist_offersUncheckedUpdateInput>;
    /**
     * Choose, which wishlist_offers to update.
     */
    where: Prisma.wishlist_offersWhereUniqueInput;
};
/**
 * wishlist_offers updateMany
 */
export type wishlist_offersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update wishlist_offers.
     */
    data: Prisma.XOR<Prisma.wishlist_offersUpdateManyMutationInput, Prisma.wishlist_offersUncheckedUpdateManyInput>;
    /**
     * Filter which wishlist_offers to update
     */
    where?: Prisma.wishlist_offersWhereInput;
    /**
     * Limit how many wishlist_offers to update.
     */
    limit?: number;
};
/**
 * wishlist_offers updateManyAndReturn
 */
export type wishlist_offersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_offers
     */
    select?: Prisma.wishlist_offersSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_offers
     */
    omit?: Prisma.wishlist_offersOmit<ExtArgs> | null;
    /**
     * The data used to update wishlist_offers.
     */
    data: Prisma.XOR<Prisma.wishlist_offersUpdateManyMutationInput, Prisma.wishlist_offersUncheckedUpdateManyInput>;
    /**
     * Filter which wishlist_offers to update
     */
    where?: Prisma.wishlist_offersWhereInput;
    /**
     * Limit how many wishlist_offers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_offersIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * wishlist_offers upsert
 */
export type wishlist_offersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the wishlist_offers to update in case it exists.
     */
    where: Prisma.wishlist_offersWhereUniqueInput;
    /**
     * In case the wishlist_offers found by the `where` argument doesn't exist, create a new wishlist_offers with this data.
     */
    create: Prisma.XOR<Prisma.wishlist_offersCreateInput, Prisma.wishlist_offersUncheckedCreateInput>;
    /**
     * In case the wishlist_offers was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.wishlist_offersUpdateInput, Prisma.wishlist_offersUncheckedUpdateInput>;
};
/**
 * wishlist_offers delete
 */
export type wishlist_offersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which wishlist_offers to delete.
     */
    where: Prisma.wishlist_offersWhereUniqueInput;
};
/**
 * wishlist_offers deleteMany
 */
export type wishlist_offersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which wishlist_offers to delete
     */
    where?: Prisma.wishlist_offersWhereInput;
    /**
     * Limit how many wishlist_offers to delete.
     */
    limit?: number;
};
/**
 * wishlist_offers.inventory_item_interests
 */
export type wishlist_offers$inventory_item_interestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * wishlist_offers.transactions
 */
export type wishlist_offers$transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * wishlist_offers.wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offers
 */
export type wishlist_offers$wishlist_offer_items_wishlist_offer_items_wishlist_offer_idTowishlist_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.wishlist_offer_itemsWhereInput;
    orderBy?: Prisma.wishlist_offer_itemsOrderByWithRelationInput | Prisma.wishlist_offer_itemsOrderByWithRelationInput[];
    cursor?: Prisma.wishlist_offer_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Wishlist_offer_itemsScalarFieldEnum | Prisma.Wishlist_offer_itemsScalarFieldEnum[];
};
/**
 * wishlist_offers.wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offers
 */
export type wishlist_offers$wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_store_idTowishlist_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.wishlist_offer_itemsWhereInput;
    orderBy?: Prisma.wishlist_offer_itemsOrderByWithRelationInput | Prisma.wishlist_offer_itemsOrderByWithRelationInput[];
    cursor?: Prisma.wishlist_offer_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Wishlist_offer_itemsScalarFieldEnum | Prisma.Wishlist_offer_itemsScalarFieldEnum[];
};
/**
 * wishlist_offers.wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offers
 */
export type wishlist_offers$wishlist_offer_items_wishlist_offer_items_wishlist_offer_id_offerer_user_idTowishlist_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.wishlist_offer_itemsWhereInput;
    orderBy?: Prisma.wishlist_offer_itemsOrderByWithRelationInput | Prisma.wishlist_offer_itemsOrderByWithRelationInput[];
    cursor?: Prisma.wishlist_offer_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Wishlist_offer_itemsScalarFieldEnum | Prisma.Wishlist_offer_itemsScalarFieldEnum[];
};
/**
 * wishlist_offers.wishlist_offer_requested_items
 */
export type wishlist_offers$wishlist_offer_requested_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.wishlist_offer_requested_itemsWhereInput;
    orderBy?: Prisma.wishlist_offer_requested_itemsOrderByWithRelationInput | Prisma.wishlist_offer_requested_itemsOrderByWithRelationInput[];
    cursor?: Prisma.wishlist_offer_requested_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Wishlist_offer_requested_itemsScalarFieldEnum | Prisma.Wishlist_offer_requested_itemsScalarFieldEnum[];
};
/**
 * wishlist_offers.stores
 */
export type wishlist_offers$storesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * wishlist_offers.store_games
 */
export type wishlist_offers$store_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * wishlist_offers.user_profiles
 */
export type wishlist_offers$user_profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * wishlist_offers without action
 */
export type wishlist_offersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
