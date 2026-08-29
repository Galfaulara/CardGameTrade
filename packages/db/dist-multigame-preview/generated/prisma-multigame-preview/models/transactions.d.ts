import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model transactions
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type transactionsModel = runtime.Types.Result.DefaultSelection<Prisma.$transactionsPayload>;
export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null;
    _avg: TransactionsAvgAggregateOutputType | null;
    _sum: TransactionsSumAggregateOutputType | null;
    _min: TransactionsMinAggregateOutputType | null;
    _max: TransactionsMaxAggregateOutputType | null;
};
export type TransactionsAvgAggregateOutputType = {
    cash_amount: runtime.Decimal | null;
};
export type TransactionsSumAggregateOutputType = {
    cash_amount: runtime.Decimal | null;
};
export type TransactionsMinAggregateOutputType = {
    id: string | null;
    listing_id: string | null;
    accepted_offer_id: string | null;
    seller_user_id: string | null;
    seller_store_id: string | null;
    counterparty_user_id: string | null;
    counterparty_store_id: string | null;
    transaction_type: string | null;
    cash_amount: runtime.Decimal | null;
    currency_code: string | null;
    status: string | null;
    agreed_at: Date | null;
    completed_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    accepted_wishlist_offer_id: string | null;
    game_id: string | null;
};
export type TransactionsMaxAggregateOutputType = {
    id: string | null;
    listing_id: string | null;
    accepted_offer_id: string | null;
    seller_user_id: string | null;
    seller_store_id: string | null;
    counterparty_user_id: string | null;
    counterparty_store_id: string | null;
    transaction_type: string | null;
    cash_amount: runtime.Decimal | null;
    currency_code: string | null;
    status: string | null;
    agreed_at: Date | null;
    completed_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    accepted_wishlist_offer_id: string | null;
    game_id: string | null;
};
export type TransactionsCountAggregateOutputType = {
    id: number;
    listing_id: number;
    accepted_offer_id: number;
    seller_user_id: number;
    seller_store_id: number;
    counterparty_user_id: number;
    counterparty_store_id: number;
    transaction_type: number;
    cash_amount: number;
    currency_code: number;
    status: number;
    agreed_at: number;
    completed_at: number;
    created_at: number;
    updated_at: number;
    accepted_wishlist_offer_id: number;
    game_id: number;
    _all: number;
};
export type TransactionsAvgAggregateInputType = {
    cash_amount?: true;
};
export type TransactionsSumAggregateInputType = {
    cash_amount?: true;
};
export type TransactionsMinAggregateInputType = {
    id?: true;
    listing_id?: true;
    accepted_offer_id?: true;
    seller_user_id?: true;
    seller_store_id?: true;
    counterparty_user_id?: true;
    counterparty_store_id?: true;
    transaction_type?: true;
    cash_amount?: true;
    currency_code?: true;
    status?: true;
    agreed_at?: true;
    completed_at?: true;
    created_at?: true;
    updated_at?: true;
    accepted_wishlist_offer_id?: true;
    game_id?: true;
};
export type TransactionsMaxAggregateInputType = {
    id?: true;
    listing_id?: true;
    accepted_offer_id?: true;
    seller_user_id?: true;
    seller_store_id?: true;
    counterparty_user_id?: true;
    counterparty_store_id?: true;
    transaction_type?: true;
    cash_amount?: true;
    currency_code?: true;
    status?: true;
    agreed_at?: true;
    completed_at?: true;
    created_at?: true;
    updated_at?: true;
    accepted_wishlist_offer_id?: true;
    game_id?: true;
};
export type TransactionsCountAggregateInputType = {
    id?: true;
    listing_id?: true;
    accepted_offer_id?: true;
    seller_user_id?: true;
    seller_store_id?: true;
    counterparty_user_id?: true;
    counterparty_store_id?: true;
    transaction_type?: true;
    cash_amount?: true;
    currency_code?: true;
    status?: true;
    agreed_at?: true;
    completed_at?: true;
    created_at?: true;
    updated_at?: true;
    accepted_wishlist_offer_id?: true;
    game_id?: true;
    _all?: true;
};
export type TransactionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to aggregate.
     */
    where?: Prisma.transactionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?: Prisma.transactionsOrderByWithRelationInput | Prisma.transactionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.transactionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned transactions
    **/
    _count?: true | TransactionsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType;
};
export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
    [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTransactions[P]> : Prisma.GetScalarType<T[P], AggregateTransactions[P]>;
};
export type transactionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transactionsWhereInput;
    orderBy?: Prisma.transactionsOrderByWithAggregationInput | Prisma.transactionsOrderByWithAggregationInput[];
    by: Prisma.TransactionsScalarFieldEnum[] | Prisma.TransactionsScalarFieldEnum;
    having?: Prisma.transactionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionsCountAggregateInputType | true;
    _avg?: TransactionsAvgAggregateInputType;
    _sum?: TransactionsSumAggregateInputType;
    _min?: TransactionsMinAggregateInputType;
    _max?: TransactionsMaxAggregateInputType;
};
export type TransactionsGroupByOutputType = {
    id: string;
    listing_id: string | null;
    accepted_offer_id: string | null;
    seller_user_id: string | null;
    seller_store_id: string | null;
    counterparty_user_id: string | null;
    counterparty_store_id: string | null;
    transaction_type: string;
    cash_amount: runtime.Decimal;
    currency_code: string;
    status: string;
    agreed_at: Date;
    completed_at: Date | null;
    created_at: Date;
    updated_at: Date;
    accepted_wishlist_offer_id: string | null;
    game_id: string;
    _count: TransactionsCountAggregateOutputType | null;
    _avg: TransactionsAvgAggregateOutputType | null;
    _sum: TransactionsSumAggregateOutputType | null;
    _min: TransactionsMinAggregateOutputType | null;
    _max: TransactionsMaxAggregateOutputType | null;
};
export type GetTransactionsGroupByPayload<T extends transactionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TransactionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TransactionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TransactionsGroupByOutputType[P]>;
}>>;
export type transactionsWhereInput = {
    AND?: Prisma.transactionsWhereInput | Prisma.transactionsWhereInput[];
    OR?: Prisma.transactionsWhereInput[];
    NOT?: Prisma.transactionsWhereInput | Prisma.transactionsWhereInput[];
    id?: Prisma.UuidFilter<"transactions"> | string;
    listing_id?: Prisma.UuidNullableFilter<"transactions"> | string | null;
    accepted_offer_id?: Prisma.UuidNullableFilter<"transactions"> | string | null;
    seller_user_id?: Prisma.UuidNullableFilter<"transactions"> | string | null;
    seller_store_id?: Prisma.UuidNullableFilter<"transactions"> | string | null;
    counterparty_user_id?: Prisma.UuidNullableFilter<"transactions"> | string | null;
    counterparty_store_id?: Prisma.UuidNullableFilter<"transactions"> | string | null;
    transaction_type?: Prisma.StringFilter<"transactions"> | string;
    cash_amount?: Prisma.DecimalFilter<"transactions"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFilter<"transactions"> | string;
    status?: Prisma.StringFilter<"transactions"> | string;
    agreed_at?: Prisma.DateTimeFilter<"transactions"> | Date | string;
    completed_at?: Prisma.DateTimeNullableFilter<"transactions"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"transactions"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"transactions"> | Date | string;
    accepted_wishlist_offer_id?: Prisma.UuidNullableFilter<"transactions"> | string | null;
    game_id?: Prisma.UuidFilter<"transactions"> | string;
    store_trade_handoffs?: Prisma.Store_trade_handoffsListRelationFilter;
    transaction_items?: Prisma.Transaction_itemsListRelationFilter;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.XOR<Prisma.Listing_offersNullableScalarRelationFilter, Prisma.listing_offersWhereInput> | null;
    listing_offers?: Prisma.XOR<Prisma.Listing_offersNullableScalarRelationFilter, Prisma.listing_offersWhereInput> | null;
    wishlist_offers?: Prisma.XOR<Prisma.Wishlist_offersNullableScalarRelationFilter, Prisma.wishlist_offersWhereInput> | null;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.XOR<Prisma.User_profilesNullableScalarRelationFilter, Prisma.user_profilesWhereInput> | null;
    listings?: Prisma.XOR<Prisma.ListingsNullableScalarRelationFilter, Prisma.listingsWhereInput> | null;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.XOR<Prisma.User_profilesNullableScalarRelationFilter, Prisma.user_profilesWhereInput> | null;
};
export type transactionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    accepted_offer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    seller_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    seller_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    counterparty_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    counterparty_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    transaction_type?: Prisma.SortOrder;
    cash_amount?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    agreed_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    accepted_wishlist_offer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    store_trade_handoffs?: Prisma.store_trade_handoffsOrderByRelationAggregateInput;
    transaction_items?: Prisma.transaction_itemsOrderByRelationAggregateInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersOrderByWithRelationInput;
    listing_offers?: Prisma.listing_offersOrderByWithRelationInput;
    wishlist_offers?: Prisma.wishlist_offersOrderByWithRelationInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesOrderByWithRelationInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesOrderByWithRelationInput;
    listings?: Prisma.listingsOrderByWithRelationInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesOrderByWithRelationInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesOrderByWithRelationInput;
};
export type transactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    accepted_offer_id?: string;
    accepted_wishlist_offer_id?: string;
    accepted_offer_id_listing_id?: Prisma.transactionsAccepted_offer_idListing_idCompoundUniqueInput;
    id_game_id?: Prisma.transactionsIdGame_idCompoundUniqueInput;
    AND?: Prisma.transactionsWhereInput | Prisma.transactionsWhereInput[];
    OR?: Prisma.transactionsWhereInput[];
    NOT?: Prisma.transactionsWhereInput | Prisma.transactionsWhereInput[];
    listing_id?: Prisma.UuidNullableFilter<"transactions"> | string | null;
    seller_user_id?: Prisma.UuidNullableFilter<"transactions"> | string | null;
    seller_store_id?: Prisma.UuidNullableFilter<"transactions"> | string | null;
    counterparty_user_id?: Prisma.UuidNullableFilter<"transactions"> | string | null;
    counterparty_store_id?: Prisma.UuidNullableFilter<"transactions"> | string | null;
    transaction_type?: Prisma.StringFilter<"transactions"> | string;
    cash_amount?: Prisma.DecimalFilter<"transactions"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFilter<"transactions"> | string;
    status?: Prisma.StringFilter<"transactions"> | string;
    agreed_at?: Prisma.DateTimeFilter<"transactions"> | Date | string;
    completed_at?: Prisma.DateTimeNullableFilter<"transactions"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"transactions"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"transactions"> | Date | string;
    game_id?: Prisma.UuidFilter<"transactions"> | string;
    store_trade_handoffs?: Prisma.Store_trade_handoffsListRelationFilter;
    transaction_items?: Prisma.Transaction_itemsListRelationFilter;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.XOR<Prisma.Listing_offersNullableScalarRelationFilter, Prisma.listing_offersWhereInput> | null;
    listing_offers?: Prisma.XOR<Prisma.Listing_offersNullableScalarRelationFilter, Prisma.listing_offersWhereInput> | null;
    wishlist_offers?: Prisma.XOR<Prisma.Wishlist_offersNullableScalarRelationFilter, Prisma.wishlist_offersWhereInput> | null;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.XOR<Prisma.User_profilesNullableScalarRelationFilter, Prisma.user_profilesWhereInput> | null;
    listings?: Prisma.XOR<Prisma.ListingsNullableScalarRelationFilter, Prisma.listingsWhereInput> | null;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.XOR<Prisma.User_profilesNullableScalarRelationFilter, Prisma.user_profilesWhereInput> | null;
}, "id" | "accepted_offer_id" | "accepted_wishlist_offer_id" | "accepted_offer_id_listing_id" | "id_game_id">;
export type transactionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    accepted_offer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    seller_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    seller_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    counterparty_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    counterparty_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    transaction_type?: Prisma.SortOrder;
    cash_amount?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    agreed_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    accepted_wishlist_offer_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    _count?: Prisma.transactionsCountOrderByAggregateInput;
    _avg?: Prisma.transactionsAvgOrderByAggregateInput;
    _max?: Prisma.transactionsMaxOrderByAggregateInput;
    _min?: Prisma.transactionsMinOrderByAggregateInput;
    _sum?: Prisma.transactionsSumOrderByAggregateInput;
};
export type transactionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.transactionsScalarWhereWithAggregatesInput | Prisma.transactionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.transactionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.transactionsScalarWhereWithAggregatesInput | Prisma.transactionsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"transactions"> | string;
    listing_id?: Prisma.UuidNullableWithAggregatesFilter<"transactions"> | string | null;
    accepted_offer_id?: Prisma.UuidNullableWithAggregatesFilter<"transactions"> | string | null;
    seller_user_id?: Prisma.UuidNullableWithAggregatesFilter<"transactions"> | string | null;
    seller_store_id?: Prisma.UuidNullableWithAggregatesFilter<"transactions"> | string | null;
    counterparty_user_id?: Prisma.UuidNullableWithAggregatesFilter<"transactions"> | string | null;
    counterparty_store_id?: Prisma.UuidNullableWithAggregatesFilter<"transactions"> | string | null;
    transaction_type?: Prisma.StringWithAggregatesFilter<"transactions"> | string;
    cash_amount?: Prisma.DecimalWithAggregatesFilter<"transactions"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringWithAggregatesFilter<"transactions"> | string;
    status?: Prisma.StringWithAggregatesFilter<"transactions"> | string;
    agreed_at?: Prisma.DateTimeWithAggregatesFilter<"transactions"> | Date | string;
    completed_at?: Prisma.DateTimeNullableWithAggregatesFilter<"transactions"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"transactions"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"transactions"> | Date | string;
    accepted_wishlist_offer_id?: Prisma.UuidNullableWithAggregatesFilter<"transactions"> | string | null;
    game_id?: Prisma.UuidWithAggregatesFilter<"transactions"> | string;
};
export type transactionsCreateInput = {
    id?: string;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutTransactionsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutTransactionsInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput;
    listing_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactionsInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutTransactionsInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput;
    listings?: Prisma.listingsCreateNestedOneWithoutTransactionsInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_seller_user_idTouser_profilesInput;
};
export type transactionsUncheckedCreateInput = {
    id?: string;
    listing_id?: string | null;
    accepted_offer_id?: string | null;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    counterparty_user_id?: string | null;
    counterparty_store_id?: string | null;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    accepted_wishlist_offer_id?: string | null;
    game_id: string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutTransactionsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutTransactionsInput;
};
export type transactionsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutTransactionsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutTransactionsNestedInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    listing_offers?: Prisma.listing_offersUpdateOneWithoutTransactionsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutTransactionsNestedInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesNestedInput;
    listings?: Prisma.listingsUpdateOneWithoutTransactionsNestedInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_seller_user_idTouser_profilesNestedInput;
};
export type transactionsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepted_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accepted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutTransactionsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutTransactionsNestedInput;
};
export type transactionsCreateManyInput = {
    id?: string;
    listing_id?: string | null;
    accepted_offer_id?: string | null;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    counterparty_user_id?: string | null;
    counterparty_store_id?: string | null;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    accepted_wishlist_offer_id?: string | null;
    game_id: string;
};
export type transactionsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transactionsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepted_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accepted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TransactionsListRelationFilter = {
    every?: Prisma.transactionsWhereInput;
    some?: Prisma.transactionsWhereInput;
    none?: Prisma.transactionsWhereInput;
};
export type TransactionsNullableScalarRelationFilter = {
    is?: Prisma.transactionsWhereInput | null;
    isNot?: Prisma.transactionsWhereInput | null;
};
export type transactionsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TransactionsScalarRelationFilter = {
    is?: Prisma.transactionsWhereInput;
    isNot?: Prisma.transactionsWhereInput;
};
export type transactionsAccepted_offer_idListing_idCompoundUniqueInput = {
    accepted_offer_id: string;
    listing_id: string;
};
export type transactionsIdGame_idCompoundUniqueInput = {
    id: string;
    game_id: string;
};
export type transactionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    accepted_offer_id?: Prisma.SortOrder;
    seller_user_id?: Prisma.SortOrder;
    seller_store_id?: Prisma.SortOrder;
    counterparty_user_id?: Prisma.SortOrder;
    counterparty_store_id?: Prisma.SortOrder;
    transaction_type?: Prisma.SortOrder;
    cash_amount?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    agreed_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    accepted_wishlist_offer_id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type transactionsAvgOrderByAggregateInput = {
    cash_amount?: Prisma.SortOrder;
};
export type transactionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    accepted_offer_id?: Prisma.SortOrder;
    seller_user_id?: Prisma.SortOrder;
    seller_store_id?: Prisma.SortOrder;
    counterparty_user_id?: Prisma.SortOrder;
    counterparty_store_id?: Prisma.SortOrder;
    transaction_type?: Prisma.SortOrder;
    cash_amount?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    agreed_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    accepted_wishlist_offer_id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type transactionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    listing_id?: Prisma.SortOrder;
    accepted_offer_id?: Prisma.SortOrder;
    seller_user_id?: Prisma.SortOrder;
    seller_store_id?: Prisma.SortOrder;
    counterparty_user_id?: Prisma.SortOrder;
    counterparty_store_id?: Prisma.SortOrder;
    transaction_type?: Prisma.SortOrder;
    cash_amount?: Prisma.SortOrder;
    currency_code?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    agreed_at?: Prisma.SortOrder;
    completed_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    accepted_wishlist_offer_id?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type transactionsSumOrderByAggregateInput = {
    cash_amount?: Prisma.SortOrder;
};
export type transactionsCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput, Prisma.transactionsUncheckedCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput> | Prisma.transactionsCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput[] | Prisma.transactionsUncheckedCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput | Prisma.transactionsCreateOrConnectWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput[];
    createMany?: Prisma.transactionsCreateManyListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInputEnvelope;
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
};
export type transactionsCreateNestedOneWithoutListing_offersInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutListing_offersInput, Prisma.transactionsUncheckedCreateWithoutListing_offersInput>;
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutListing_offersInput;
    connect?: Prisma.transactionsWhereUniqueInput;
};
export type transactionsUncheckedCreateNestedManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput, Prisma.transactionsUncheckedCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput> | Prisma.transactionsCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput[] | Prisma.transactionsUncheckedCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput | Prisma.transactionsCreateOrConnectWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput[];
    createMany?: Prisma.transactionsCreateManyListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInputEnvelope;
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
};
export type transactionsUncheckedCreateNestedOneWithoutListing_offersInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutListing_offersInput, Prisma.transactionsUncheckedCreateWithoutListing_offersInput>;
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutListing_offersInput;
    connect?: Prisma.transactionsWhereUniqueInput;
};
export type transactionsUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput, Prisma.transactionsUncheckedCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput> | Prisma.transactionsCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput[] | Prisma.transactionsUncheckedCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput | Prisma.transactionsCreateOrConnectWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput[];
    upsert?: Prisma.transactionsUpsertWithWhereUniqueWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput | Prisma.transactionsUpsertWithWhereUniqueWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput[];
    createMany?: Prisma.transactionsCreateManyListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInputEnvelope;
    set?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    disconnect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    delete?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    update?: Prisma.transactionsUpdateWithWhereUniqueWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput | Prisma.transactionsUpdateWithWhereUniqueWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput[];
    updateMany?: Prisma.transactionsUpdateManyWithWhereWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput | Prisma.transactionsUpdateManyWithWhereWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput[];
    deleteMany?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
};
export type transactionsUpdateOneWithoutListing_offersNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutListing_offersInput, Prisma.transactionsUncheckedCreateWithoutListing_offersInput>;
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutListing_offersInput;
    upsert?: Prisma.transactionsUpsertWithoutListing_offersInput;
    disconnect?: Prisma.transactionsWhereInput | boolean;
    delete?: Prisma.transactionsWhereInput | boolean;
    connect?: Prisma.transactionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.transactionsUpdateToOneWithWhereWithoutListing_offersInput, Prisma.transactionsUpdateWithoutListing_offersInput>, Prisma.transactionsUncheckedUpdateWithoutListing_offersInput>;
};
export type transactionsUncheckedUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput, Prisma.transactionsUncheckedCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput> | Prisma.transactionsCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput[] | Prisma.transactionsUncheckedCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput | Prisma.transactionsCreateOrConnectWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput[];
    upsert?: Prisma.transactionsUpsertWithWhereUniqueWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput | Prisma.transactionsUpsertWithWhereUniqueWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput[];
    createMany?: Prisma.transactionsCreateManyListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInputEnvelope;
    set?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    disconnect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    delete?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    update?: Prisma.transactionsUpdateWithWhereUniqueWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput | Prisma.transactionsUpdateWithWhereUniqueWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput[];
    updateMany?: Prisma.transactionsUpdateManyWithWhereWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput | Prisma.transactionsUpdateManyWithWhereWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput[];
    deleteMany?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
};
export type transactionsUncheckedUpdateOneWithoutListing_offersNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutListing_offersInput, Prisma.transactionsUncheckedCreateWithoutListing_offersInput>;
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutListing_offersInput;
    upsert?: Prisma.transactionsUpsertWithoutListing_offersInput;
    disconnect?: Prisma.transactionsWhereInput | boolean;
    delete?: Prisma.transactionsWhereInput | boolean;
    connect?: Prisma.transactionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.transactionsUpdateToOneWithWhereWithoutListing_offersInput, Prisma.transactionsUpdateWithoutListing_offersInput>, Prisma.transactionsUncheckedUpdateWithoutListing_offersInput>;
};
export type transactionsCreateNestedManyWithoutListingsInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutListingsInput, Prisma.transactionsUncheckedCreateWithoutListingsInput> | Prisma.transactionsCreateWithoutListingsInput[] | Prisma.transactionsUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutListingsInput | Prisma.transactionsCreateOrConnectWithoutListingsInput[];
    createMany?: Prisma.transactionsCreateManyListingsInputEnvelope;
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
};
export type transactionsUncheckedCreateNestedManyWithoutListingsInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutListingsInput, Prisma.transactionsUncheckedCreateWithoutListingsInput> | Prisma.transactionsCreateWithoutListingsInput[] | Prisma.transactionsUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutListingsInput | Prisma.transactionsCreateOrConnectWithoutListingsInput[];
    createMany?: Prisma.transactionsCreateManyListingsInputEnvelope;
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
};
export type transactionsUpdateManyWithoutListingsNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutListingsInput, Prisma.transactionsUncheckedCreateWithoutListingsInput> | Prisma.transactionsCreateWithoutListingsInput[] | Prisma.transactionsUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutListingsInput | Prisma.transactionsCreateOrConnectWithoutListingsInput[];
    upsert?: Prisma.transactionsUpsertWithWhereUniqueWithoutListingsInput | Prisma.transactionsUpsertWithWhereUniqueWithoutListingsInput[];
    createMany?: Prisma.transactionsCreateManyListingsInputEnvelope;
    set?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    disconnect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    delete?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    update?: Prisma.transactionsUpdateWithWhereUniqueWithoutListingsInput | Prisma.transactionsUpdateWithWhereUniqueWithoutListingsInput[];
    updateMany?: Prisma.transactionsUpdateManyWithWhereWithoutListingsInput | Prisma.transactionsUpdateManyWithWhereWithoutListingsInput[];
    deleteMany?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
};
export type transactionsUncheckedUpdateManyWithoutListingsNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutListingsInput, Prisma.transactionsUncheckedCreateWithoutListingsInput> | Prisma.transactionsCreateWithoutListingsInput[] | Prisma.transactionsUncheckedCreateWithoutListingsInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutListingsInput | Prisma.transactionsCreateOrConnectWithoutListingsInput[];
    upsert?: Prisma.transactionsUpsertWithWhereUniqueWithoutListingsInput | Prisma.transactionsUpsertWithWhereUniqueWithoutListingsInput[];
    createMany?: Prisma.transactionsCreateManyListingsInputEnvelope;
    set?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    disconnect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    delete?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    update?: Prisma.transactionsUpdateWithWhereUniqueWithoutListingsInput | Prisma.transactionsUpdateWithWhereUniqueWithoutListingsInput[];
    updateMany?: Prisma.transactionsUpdateManyWithWhereWithoutListingsInput | Prisma.transactionsUpdateManyWithWhereWithoutListingsInput[];
    deleteMany?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
};
export type transactionsCreateNestedOneWithoutStore_trade_handoffsInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutStore_trade_handoffsInput, Prisma.transactionsUncheckedCreateWithoutStore_trade_handoffsInput>;
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutStore_trade_handoffsInput;
    connect?: Prisma.transactionsWhereUniqueInput;
};
export type transactionsUpdateOneRequiredWithoutStore_trade_handoffsNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutStore_trade_handoffsInput, Prisma.transactionsUncheckedCreateWithoutStore_trade_handoffsInput>;
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutStore_trade_handoffsInput;
    upsert?: Prisma.transactionsUpsertWithoutStore_trade_handoffsInput;
    connect?: Prisma.transactionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.transactionsUpdateToOneWithWhereWithoutStore_trade_handoffsInput, Prisma.transactionsUpdateWithoutStore_trade_handoffsInput>, Prisma.transactionsUncheckedUpdateWithoutStore_trade_handoffsInput>;
};
export type transactionsCreateNestedOneWithoutTransaction_itemsInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutTransaction_itemsInput, Prisma.transactionsUncheckedCreateWithoutTransaction_itemsInput>;
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutTransaction_itemsInput;
    connect?: Prisma.transactionsWhereUniqueInput;
};
export type transactionsUpdateOneRequiredWithoutTransaction_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutTransaction_itemsInput, Prisma.transactionsUncheckedCreateWithoutTransaction_itemsInput>;
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutTransaction_itemsInput;
    upsert?: Prisma.transactionsUpsertWithoutTransaction_itemsInput;
    connect?: Prisma.transactionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.transactionsUpdateToOneWithWhereWithoutTransaction_itemsInput, Prisma.transactionsUpdateWithoutTransaction_itemsInput>, Prisma.transactionsUncheckedUpdateWithoutTransaction_itemsInput>;
};
export type transactionsCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput, Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput> | Prisma.transactionsCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput[] | Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput | Prisma.transactionsCreateOrConnectWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput[];
    createMany?: Prisma.transactionsCreateManyUser_profiles_transactions_counterparty_user_idTouser_profilesInputEnvelope;
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
};
export type transactionsCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput, Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput> | Prisma.transactionsCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput[] | Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput | Prisma.transactionsCreateOrConnectWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput[];
    createMany?: Prisma.transactionsCreateManyUser_profiles_transactions_seller_user_idTouser_profilesInputEnvelope;
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
};
export type transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput, Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput> | Prisma.transactionsCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput[] | Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput | Prisma.transactionsCreateOrConnectWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput[];
    createMany?: Prisma.transactionsCreateManyUser_profiles_transactions_counterparty_user_idTouser_profilesInputEnvelope;
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
};
export type transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput, Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput> | Prisma.transactionsCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput[] | Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput | Prisma.transactionsCreateOrConnectWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput[];
    createMany?: Prisma.transactionsCreateManyUser_profiles_transactions_seller_user_idTouser_profilesInputEnvelope;
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
};
export type transactionsUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput, Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput> | Prisma.transactionsCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput[] | Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput | Prisma.transactionsCreateOrConnectWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput[];
    upsert?: Prisma.transactionsUpsertWithWhereUniqueWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput | Prisma.transactionsUpsertWithWhereUniqueWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput[];
    createMany?: Prisma.transactionsCreateManyUser_profiles_transactions_counterparty_user_idTouser_profilesInputEnvelope;
    set?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    disconnect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    delete?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    update?: Prisma.transactionsUpdateWithWhereUniqueWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput | Prisma.transactionsUpdateWithWhereUniqueWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput[];
    updateMany?: Prisma.transactionsUpdateManyWithWhereWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput | Prisma.transactionsUpdateManyWithWhereWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput[];
    deleteMany?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
};
export type transactionsUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput, Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput> | Prisma.transactionsCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput[] | Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput | Prisma.transactionsCreateOrConnectWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput[];
    upsert?: Prisma.transactionsUpsertWithWhereUniqueWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput | Prisma.transactionsUpsertWithWhereUniqueWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput[];
    createMany?: Prisma.transactionsCreateManyUser_profiles_transactions_seller_user_idTouser_profilesInputEnvelope;
    set?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    disconnect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    delete?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    update?: Prisma.transactionsUpdateWithWhereUniqueWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput | Prisma.transactionsUpdateWithWhereUniqueWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput[];
    updateMany?: Prisma.transactionsUpdateManyWithWhereWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput | Prisma.transactionsUpdateManyWithWhereWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput[];
    deleteMany?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
};
export type transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput, Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput> | Prisma.transactionsCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput[] | Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput | Prisma.transactionsCreateOrConnectWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput[];
    upsert?: Prisma.transactionsUpsertWithWhereUniqueWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput | Prisma.transactionsUpsertWithWhereUniqueWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput[];
    createMany?: Prisma.transactionsCreateManyUser_profiles_transactions_counterparty_user_idTouser_profilesInputEnvelope;
    set?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    disconnect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    delete?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    update?: Prisma.transactionsUpdateWithWhereUniqueWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput | Prisma.transactionsUpdateWithWhereUniqueWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput[];
    updateMany?: Prisma.transactionsUpdateManyWithWhereWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput | Prisma.transactionsUpdateManyWithWhereWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput[];
    deleteMany?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
};
export type transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput, Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput> | Prisma.transactionsCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput[] | Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput | Prisma.transactionsCreateOrConnectWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput[];
    upsert?: Prisma.transactionsUpsertWithWhereUniqueWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput | Prisma.transactionsUpsertWithWhereUniqueWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput[];
    createMany?: Prisma.transactionsCreateManyUser_profiles_transactions_seller_user_idTouser_profilesInputEnvelope;
    set?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    disconnect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    delete?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    update?: Prisma.transactionsUpdateWithWhereUniqueWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput | Prisma.transactionsUpdateWithWhereUniqueWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput[];
    updateMany?: Prisma.transactionsUpdateManyWithWhereWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput | Prisma.transactionsUpdateManyWithWhereWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput[];
    deleteMany?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
};
export type transactionsCreateNestedManyWithoutWishlist_offersInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutWishlist_offersInput, Prisma.transactionsUncheckedCreateWithoutWishlist_offersInput> | Prisma.transactionsCreateWithoutWishlist_offersInput[] | Prisma.transactionsUncheckedCreateWithoutWishlist_offersInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutWishlist_offersInput | Prisma.transactionsCreateOrConnectWithoutWishlist_offersInput[];
    createMany?: Prisma.transactionsCreateManyWishlist_offersInputEnvelope;
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
};
export type transactionsUncheckedCreateNestedManyWithoutWishlist_offersInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutWishlist_offersInput, Prisma.transactionsUncheckedCreateWithoutWishlist_offersInput> | Prisma.transactionsCreateWithoutWishlist_offersInput[] | Prisma.transactionsUncheckedCreateWithoutWishlist_offersInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutWishlist_offersInput | Prisma.transactionsCreateOrConnectWithoutWishlist_offersInput[];
    createMany?: Prisma.transactionsCreateManyWishlist_offersInputEnvelope;
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
};
export type transactionsUpdateManyWithoutWishlist_offersNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutWishlist_offersInput, Prisma.transactionsUncheckedCreateWithoutWishlist_offersInput> | Prisma.transactionsCreateWithoutWishlist_offersInput[] | Prisma.transactionsUncheckedCreateWithoutWishlist_offersInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutWishlist_offersInput | Prisma.transactionsCreateOrConnectWithoutWishlist_offersInput[];
    upsert?: Prisma.transactionsUpsertWithWhereUniqueWithoutWishlist_offersInput | Prisma.transactionsUpsertWithWhereUniqueWithoutWishlist_offersInput[];
    createMany?: Prisma.transactionsCreateManyWishlist_offersInputEnvelope;
    set?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    disconnect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    delete?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    update?: Prisma.transactionsUpdateWithWhereUniqueWithoutWishlist_offersInput | Prisma.transactionsUpdateWithWhereUniqueWithoutWishlist_offersInput[];
    updateMany?: Prisma.transactionsUpdateManyWithWhereWithoutWishlist_offersInput | Prisma.transactionsUpdateManyWithWhereWithoutWishlist_offersInput[];
    deleteMany?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
};
export type transactionsUncheckedUpdateManyWithoutWishlist_offersNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutWishlist_offersInput, Prisma.transactionsUncheckedCreateWithoutWishlist_offersInput> | Prisma.transactionsCreateWithoutWishlist_offersInput[] | Prisma.transactionsUncheckedCreateWithoutWishlist_offersInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutWishlist_offersInput | Prisma.transactionsCreateOrConnectWithoutWishlist_offersInput[];
    upsert?: Prisma.transactionsUpsertWithWhereUniqueWithoutWishlist_offersInput | Prisma.transactionsUpsertWithWhereUniqueWithoutWishlist_offersInput[];
    createMany?: Prisma.transactionsCreateManyWishlist_offersInputEnvelope;
    set?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    disconnect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    delete?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    update?: Prisma.transactionsUpdateWithWhereUniqueWithoutWishlist_offersInput | Prisma.transactionsUpdateWithWhereUniqueWithoutWishlist_offersInput[];
    updateMany?: Prisma.transactionsUpdateManyWithWhereWithoutWishlist_offersInput | Prisma.transactionsUpdateManyWithWhereWithoutWishlist_offersInput[];
    deleteMany?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
};
export type transactionsCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput, Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput> | Prisma.transactionsCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput[] | Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput | Prisma.transactionsCreateOrConnectWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput[];
    createMany?: Prisma.transactionsCreateManyStore_games_transactions_counterparty_store_id_game_idTostore_gamesInputEnvelope;
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
};
export type transactionsCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput, Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput> | Prisma.transactionsCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput[] | Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput | Prisma.transactionsCreateOrConnectWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput[];
    createMany?: Prisma.transactionsCreateManyStore_games_transactions_seller_store_id_game_idTostore_gamesInputEnvelope;
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
};
export type transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput, Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput> | Prisma.transactionsCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput[] | Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput | Prisma.transactionsCreateOrConnectWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput[];
    createMany?: Prisma.transactionsCreateManyStore_games_transactions_counterparty_store_id_game_idTostore_gamesInputEnvelope;
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
};
export type transactionsUncheckedCreateNestedManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput, Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput> | Prisma.transactionsCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput[] | Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput | Prisma.transactionsCreateOrConnectWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput[];
    createMany?: Prisma.transactionsCreateManyStore_games_transactions_seller_store_id_game_idTostore_gamesInputEnvelope;
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
};
export type transactionsUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput, Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput> | Prisma.transactionsCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput[] | Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput | Prisma.transactionsCreateOrConnectWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput[];
    upsert?: Prisma.transactionsUpsertWithWhereUniqueWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput | Prisma.transactionsUpsertWithWhereUniqueWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput[];
    createMany?: Prisma.transactionsCreateManyStore_games_transactions_counterparty_store_id_game_idTostore_gamesInputEnvelope;
    set?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    disconnect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    delete?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    update?: Prisma.transactionsUpdateWithWhereUniqueWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput | Prisma.transactionsUpdateWithWhereUniqueWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput[];
    updateMany?: Prisma.transactionsUpdateManyWithWhereWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput | Prisma.transactionsUpdateManyWithWhereWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput[];
    deleteMany?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
};
export type transactionsUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput, Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput> | Prisma.transactionsCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput[] | Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput | Prisma.transactionsCreateOrConnectWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput[];
    upsert?: Prisma.transactionsUpsertWithWhereUniqueWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput | Prisma.transactionsUpsertWithWhereUniqueWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput[];
    createMany?: Prisma.transactionsCreateManyStore_games_transactions_seller_store_id_game_idTostore_gamesInputEnvelope;
    set?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    disconnect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    delete?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    update?: Prisma.transactionsUpdateWithWhereUniqueWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput | Prisma.transactionsUpdateWithWhereUniqueWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput[];
    updateMany?: Prisma.transactionsUpdateManyWithWhereWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput | Prisma.transactionsUpdateManyWithWhereWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput[];
    deleteMany?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
};
export type transactionsUncheckedUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput, Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput> | Prisma.transactionsCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput[] | Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput | Prisma.transactionsCreateOrConnectWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput[];
    upsert?: Prisma.transactionsUpsertWithWhereUniqueWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput | Prisma.transactionsUpsertWithWhereUniqueWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput[];
    createMany?: Prisma.transactionsCreateManyStore_games_transactions_counterparty_store_id_game_idTostore_gamesInputEnvelope;
    set?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    disconnect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    delete?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    update?: Prisma.transactionsUpdateWithWhereUniqueWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput | Prisma.transactionsUpdateWithWhereUniqueWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput[];
    updateMany?: Prisma.transactionsUpdateManyWithWhereWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput | Prisma.transactionsUpdateManyWithWhereWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput[];
    deleteMany?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
};
export type transactionsUncheckedUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.transactionsCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput, Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput> | Prisma.transactionsCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput[] | Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput[];
    connectOrCreate?: Prisma.transactionsCreateOrConnectWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput | Prisma.transactionsCreateOrConnectWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput[];
    upsert?: Prisma.transactionsUpsertWithWhereUniqueWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput | Prisma.transactionsUpsertWithWhereUniqueWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput[];
    createMany?: Prisma.transactionsCreateManyStore_games_transactions_seller_store_id_game_idTostore_gamesInputEnvelope;
    set?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    disconnect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    delete?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    connect?: Prisma.transactionsWhereUniqueInput | Prisma.transactionsWhereUniqueInput[];
    update?: Prisma.transactionsUpdateWithWhereUniqueWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput | Prisma.transactionsUpdateWithWhereUniqueWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput[];
    updateMany?: Prisma.transactionsUpdateManyWithWhereWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput | Prisma.transactionsUpdateManyWithWhereWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput[];
    deleteMany?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
};
export type transactionsCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    id?: string;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutTransactionsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutTransactionsInput;
    listing_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactionsInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutTransactionsInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput;
    listings?: Prisma.listingsCreateNestedOneWithoutTransactionsInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_seller_user_idTouser_profilesInput;
};
export type transactionsUncheckedCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    id?: string;
    listing_id?: string | null;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    counterparty_user_id?: string | null;
    counterparty_store_id?: string | null;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    accepted_wishlist_offer_id?: string | null;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutTransactionsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutTransactionsInput;
};
export type transactionsCreateOrConnectWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    where: Prisma.transactionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput, Prisma.transactionsUncheckedCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput>;
};
export type transactionsCreateManyListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInputEnvelope = {
    data: Prisma.transactionsCreateManyListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput | Prisma.transactionsCreateManyListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput[];
    skipDuplicates?: boolean;
};
export type transactionsCreateWithoutListing_offersInput = {
    id?: string;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutTransactionsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutTransactionsInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutTransactionsInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput;
    listings?: Prisma.listingsCreateNestedOneWithoutTransactionsInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_seller_user_idTouser_profilesInput;
};
export type transactionsUncheckedCreateWithoutListing_offersInput = {
    id?: string;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    counterparty_user_id?: string | null;
    counterparty_store_id?: string | null;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    accepted_wishlist_offer_id?: string | null;
    game_id: string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutTransactionsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutTransactionsInput;
};
export type transactionsCreateOrConnectWithoutListing_offersInput = {
    where: Prisma.transactionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutListing_offersInput, Prisma.transactionsUncheckedCreateWithoutListing_offersInput>;
};
export type transactionsUpsertWithWhereUniqueWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    where: Prisma.transactionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.transactionsUpdateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput, Prisma.transactionsUncheckedUpdateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput>;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput, Prisma.transactionsUncheckedCreateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput>;
};
export type transactionsUpdateWithWhereUniqueWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    where: Prisma.transactionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.transactionsUpdateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput, Prisma.transactionsUncheckedUpdateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput>;
};
export type transactionsUpdateManyWithWhereWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    where: Prisma.transactionsScalarWhereInput;
    data: Prisma.XOR<Prisma.transactionsUpdateManyMutationInput, Prisma.transactionsUncheckedUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput>;
};
export type transactionsScalarWhereInput = {
    AND?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
    OR?: Prisma.transactionsScalarWhereInput[];
    NOT?: Prisma.transactionsScalarWhereInput | Prisma.transactionsScalarWhereInput[];
    id?: Prisma.UuidFilter<"transactions"> | string;
    listing_id?: Prisma.UuidNullableFilter<"transactions"> | string | null;
    accepted_offer_id?: Prisma.UuidNullableFilter<"transactions"> | string | null;
    seller_user_id?: Prisma.UuidNullableFilter<"transactions"> | string | null;
    seller_store_id?: Prisma.UuidNullableFilter<"transactions"> | string | null;
    counterparty_user_id?: Prisma.UuidNullableFilter<"transactions"> | string | null;
    counterparty_store_id?: Prisma.UuidNullableFilter<"transactions"> | string | null;
    transaction_type?: Prisma.StringFilter<"transactions"> | string;
    cash_amount?: Prisma.DecimalFilter<"transactions"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFilter<"transactions"> | string;
    status?: Prisma.StringFilter<"transactions"> | string;
    agreed_at?: Prisma.DateTimeFilter<"transactions"> | Date | string;
    completed_at?: Prisma.DateTimeNullableFilter<"transactions"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"transactions"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"transactions"> | Date | string;
    accepted_wishlist_offer_id?: Prisma.UuidNullableFilter<"transactions"> | string | null;
    game_id?: Prisma.UuidFilter<"transactions"> | string;
};
export type transactionsUpsertWithoutListing_offersInput = {
    update: Prisma.XOR<Prisma.transactionsUpdateWithoutListing_offersInput, Prisma.transactionsUncheckedUpdateWithoutListing_offersInput>;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutListing_offersInput, Prisma.transactionsUncheckedCreateWithoutListing_offersInput>;
    where?: Prisma.transactionsWhereInput;
};
export type transactionsUpdateToOneWithWhereWithoutListing_offersInput = {
    where?: Prisma.transactionsWhereInput;
    data: Prisma.XOR<Prisma.transactionsUpdateWithoutListing_offersInput, Prisma.transactionsUncheckedUpdateWithoutListing_offersInput>;
};
export type transactionsUpdateWithoutListing_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutTransactionsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutTransactionsNestedInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutTransactionsNestedInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesNestedInput;
    listings?: Prisma.listingsUpdateOneWithoutTransactionsNestedInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_seller_user_idTouser_profilesNestedInput;
};
export type transactionsUncheckedUpdateWithoutListing_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accepted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutTransactionsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutTransactionsNestedInput;
};
export type transactionsCreateWithoutListingsInput = {
    id?: string;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutTransactionsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutTransactionsInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput;
    listing_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactionsInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutTransactionsInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_seller_user_idTouser_profilesInput;
};
export type transactionsUncheckedCreateWithoutListingsInput = {
    id?: string;
    accepted_offer_id?: string | null;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    counterparty_user_id?: string | null;
    counterparty_store_id?: string | null;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    accepted_wishlist_offer_id?: string | null;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutTransactionsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutTransactionsInput;
};
export type transactionsCreateOrConnectWithoutListingsInput = {
    where: Prisma.transactionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutListingsInput, Prisma.transactionsUncheckedCreateWithoutListingsInput>;
};
export type transactionsCreateManyListingsInputEnvelope = {
    data: Prisma.transactionsCreateManyListingsInput | Prisma.transactionsCreateManyListingsInput[];
    skipDuplicates?: boolean;
};
export type transactionsUpsertWithWhereUniqueWithoutListingsInput = {
    where: Prisma.transactionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.transactionsUpdateWithoutListingsInput, Prisma.transactionsUncheckedUpdateWithoutListingsInput>;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutListingsInput, Prisma.transactionsUncheckedCreateWithoutListingsInput>;
};
export type transactionsUpdateWithWhereUniqueWithoutListingsInput = {
    where: Prisma.transactionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.transactionsUpdateWithoutListingsInput, Prisma.transactionsUncheckedUpdateWithoutListingsInput>;
};
export type transactionsUpdateManyWithWhereWithoutListingsInput = {
    where: Prisma.transactionsScalarWhereInput;
    data: Prisma.XOR<Prisma.transactionsUpdateManyMutationInput, Prisma.transactionsUncheckedUpdateManyWithoutListingsInput>;
};
export type transactionsCreateWithoutStore_trade_handoffsInput = {
    id?: string;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutTransactionsInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput;
    listing_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactionsInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutTransactionsInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput;
    listings?: Prisma.listingsCreateNestedOneWithoutTransactionsInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_seller_user_idTouser_profilesInput;
};
export type transactionsUncheckedCreateWithoutStore_trade_handoffsInput = {
    id?: string;
    listing_id?: string | null;
    accepted_offer_id?: string | null;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    counterparty_user_id?: string | null;
    counterparty_store_id?: string | null;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    accepted_wishlist_offer_id?: string | null;
    game_id: string;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutTransactionsInput;
};
export type transactionsCreateOrConnectWithoutStore_trade_handoffsInput = {
    where: Prisma.transactionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutStore_trade_handoffsInput, Prisma.transactionsUncheckedCreateWithoutStore_trade_handoffsInput>;
};
export type transactionsUpsertWithoutStore_trade_handoffsInput = {
    update: Prisma.XOR<Prisma.transactionsUpdateWithoutStore_trade_handoffsInput, Prisma.transactionsUncheckedUpdateWithoutStore_trade_handoffsInput>;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutStore_trade_handoffsInput, Prisma.transactionsUncheckedCreateWithoutStore_trade_handoffsInput>;
    where?: Prisma.transactionsWhereInput;
};
export type transactionsUpdateToOneWithWhereWithoutStore_trade_handoffsInput = {
    where?: Prisma.transactionsWhereInput;
    data: Prisma.XOR<Prisma.transactionsUpdateWithoutStore_trade_handoffsInput, Prisma.transactionsUncheckedUpdateWithoutStore_trade_handoffsInput>;
};
export type transactionsUpdateWithoutStore_trade_handoffsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutTransactionsNestedInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    listing_offers?: Prisma.listing_offersUpdateOneWithoutTransactionsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutTransactionsNestedInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesNestedInput;
    listings?: Prisma.listingsUpdateOneWithoutTransactionsNestedInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_seller_user_idTouser_profilesNestedInput;
};
export type transactionsUncheckedUpdateWithoutStore_trade_handoffsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepted_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accepted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutTransactionsNestedInput;
};
export type transactionsCreateWithoutTransaction_itemsInput = {
    id?: string;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutTransactionsInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput;
    listing_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactionsInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutTransactionsInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput;
    listings?: Prisma.listingsCreateNestedOneWithoutTransactionsInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_seller_user_idTouser_profilesInput;
};
export type transactionsUncheckedCreateWithoutTransaction_itemsInput = {
    id?: string;
    listing_id?: string | null;
    accepted_offer_id?: string | null;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    counterparty_user_id?: string | null;
    counterparty_store_id?: string | null;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    accepted_wishlist_offer_id?: string | null;
    game_id: string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutTransactionsInput;
};
export type transactionsCreateOrConnectWithoutTransaction_itemsInput = {
    where: Prisma.transactionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutTransaction_itemsInput, Prisma.transactionsUncheckedCreateWithoutTransaction_itemsInput>;
};
export type transactionsUpsertWithoutTransaction_itemsInput = {
    update: Prisma.XOR<Prisma.transactionsUpdateWithoutTransaction_itemsInput, Prisma.transactionsUncheckedUpdateWithoutTransaction_itemsInput>;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutTransaction_itemsInput, Prisma.transactionsUncheckedCreateWithoutTransaction_itemsInput>;
    where?: Prisma.transactionsWhereInput;
};
export type transactionsUpdateToOneWithWhereWithoutTransaction_itemsInput = {
    where?: Prisma.transactionsWhereInput;
    data: Prisma.XOR<Prisma.transactionsUpdateWithoutTransaction_itemsInput, Prisma.transactionsUncheckedUpdateWithoutTransaction_itemsInput>;
};
export type transactionsUpdateWithoutTransaction_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutTransactionsNestedInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    listing_offers?: Prisma.listing_offersUpdateOneWithoutTransactionsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutTransactionsNestedInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesNestedInput;
    listings?: Prisma.listingsUpdateOneWithoutTransactionsNestedInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_seller_user_idTouser_profilesNestedInput;
};
export type transactionsUncheckedUpdateWithoutTransaction_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepted_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accepted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutTransactionsNestedInput;
};
export type transactionsCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput = {
    id?: string;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutTransactionsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutTransactionsInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput;
    listing_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactionsInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutTransactionsInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput;
    listings?: Prisma.listingsCreateNestedOneWithoutTransactionsInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_seller_user_idTouser_profilesInput;
};
export type transactionsUncheckedCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput = {
    id?: string;
    listing_id?: string | null;
    accepted_offer_id?: string | null;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    counterparty_store_id?: string | null;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    accepted_wishlist_offer_id?: string | null;
    game_id: string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutTransactionsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutTransactionsInput;
};
export type transactionsCreateOrConnectWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput = {
    where: Prisma.transactionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput, Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput>;
};
export type transactionsCreateManyUser_profiles_transactions_counterparty_user_idTouser_profilesInputEnvelope = {
    data: Prisma.transactionsCreateManyUser_profiles_transactions_counterparty_user_idTouser_profilesInput | Prisma.transactionsCreateManyUser_profiles_transactions_counterparty_user_idTouser_profilesInput[];
    skipDuplicates?: boolean;
};
export type transactionsCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput = {
    id?: string;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutTransactionsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutTransactionsInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput;
    listing_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactionsInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutTransactionsInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput;
    listings?: Prisma.listingsCreateNestedOneWithoutTransactionsInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput;
};
export type transactionsUncheckedCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput = {
    id?: string;
    listing_id?: string | null;
    accepted_offer_id?: string | null;
    seller_store_id?: string | null;
    counterparty_user_id?: string | null;
    counterparty_store_id?: string | null;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    accepted_wishlist_offer_id?: string | null;
    game_id: string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutTransactionsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutTransactionsInput;
};
export type transactionsCreateOrConnectWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput = {
    where: Prisma.transactionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput, Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput>;
};
export type transactionsCreateManyUser_profiles_transactions_seller_user_idTouser_profilesInputEnvelope = {
    data: Prisma.transactionsCreateManyUser_profiles_transactions_seller_user_idTouser_profilesInput | Prisma.transactionsCreateManyUser_profiles_transactions_seller_user_idTouser_profilesInput[];
    skipDuplicates?: boolean;
};
export type transactionsUpsertWithWhereUniqueWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput = {
    where: Prisma.transactionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.transactionsUpdateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput, Prisma.transactionsUncheckedUpdateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput>;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput, Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput>;
};
export type transactionsUpdateWithWhereUniqueWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput = {
    where: Prisma.transactionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.transactionsUpdateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput, Prisma.transactionsUncheckedUpdateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput>;
};
export type transactionsUpdateManyWithWhereWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput = {
    where: Prisma.transactionsScalarWhereInput;
    data: Prisma.XOR<Prisma.transactionsUpdateManyMutationInput, Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput>;
};
export type transactionsUpsertWithWhereUniqueWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput = {
    where: Prisma.transactionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.transactionsUpdateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput, Prisma.transactionsUncheckedUpdateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput>;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput, Prisma.transactionsUncheckedCreateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput>;
};
export type transactionsUpdateWithWhereUniqueWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput = {
    where: Prisma.transactionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.transactionsUpdateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput, Prisma.transactionsUncheckedUpdateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput>;
};
export type transactionsUpdateManyWithWhereWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput = {
    where: Prisma.transactionsScalarWhereInput;
    data: Prisma.XOR<Prisma.transactionsUpdateManyMutationInput, Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput>;
};
export type transactionsCreateWithoutWishlist_offersInput = {
    id?: string;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutTransactionsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutTransactionsInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput;
    listing_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactionsInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput;
    listings?: Prisma.listingsCreateNestedOneWithoutTransactionsInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_seller_user_idTouser_profilesInput;
};
export type transactionsUncheckedCreateWithoutWishlist_offersInput = {
    id?: string;
    listing_id?: string | null;
    accepted_offer_id?: string | null;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    counterparty_user_id?: string | null;
    counterparty_store_id?: string | null;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutTransactionsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutTransactionsInput;
};
export type transactionsCreateOrConnectWithoutWishlist_offersInput = {
    where: Prisma.transactionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutWishlist_offersInput, Prisma.transactionsUncheckedCreateWithoutWishlist_offersInput>;
};
export type transactionsCreateManyWishlist_offersInputEnvelope = {
    data: Prisma.transactionsCreateManyWishlist_offersInput | Prisma.transactionsCreateManyWishlist_offersInput[];
    skipDuplicates?: boolean;
};
export type transactionsUpsertWithWhereUniqueWithoutWishlist_offersInput = {
    where: Prisma.transactionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.transactionsUpdateWithoutWishlist_offersInput, Prisma.transactionsUncheckedUpdateWithoutWishlist_offersInput>;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutWishlist_offersInput, Prisma.transactionsUncheckedCreateWithoutWishlist_offersInput>;
};
export type transactionsUpdateWithWhereUniqueWithoutWishlist_offersInput = {
    where: Prisma.transactionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.transactionsUpdateWithoutWishlist_offersInput, Prisma.transactionsUncheckedUpdateWithoutWishlist_offersInput>;
};
export type transactionsUpdateManyWithWhereWithoutWishlist_offersInput = {
    where: Prisma.transactionsScalarWhereInput;
    data: Prisma.XOR<Prisma.transactionsUpdateManyMutationInput, Prisma.transactionsUncheckedUpdateManyWithoutWishlist_offersInput>;
};
export type transactionsCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    id?: string;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutTransactionsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutTransactionsInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput;
    listing_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactionsInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutTransactionsInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput;
    listings?: Prisma.listingsCreateNestedOneWithoutTransactionsInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_seller_user_idTouser_profilesInput;
};
export type transactionsUncheckedCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    id?: string;
    listing_id?: string | null;
    accepted_offer_id?: string | null;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    counterparty_user_id?: string | null;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    accepted_wishlist_offer_id?: string | null;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutTransactionsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutTransactionsInput;
};
export type transactionsCreateOrConnectWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    where: Prisma.transactionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput, Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput>;
};
export type transactionsCreateManyStore_games_transactions_counterparty_store_id_game_idTostore_gamesInputEnvelope = {
    data: Prisma.transactionsCreateManyStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput | Prisma.transactionsCreateManyStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput[];
    skipDuplicates?: boolean;
};
export type transactionsCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput = {
    id?: string;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsCreateNestedManyWithoutTransactionsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutTransactionsInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersInput;
    listing_offers?: Prisma.listing_offersCreateNestedOneWithoutTransactionsInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedOneWithoutTransactionsInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesCreateNestedOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput;
    listings?: Prisma.listingsCreateNestedOneWithoutTransactionsInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesCreateNestedOneWithoutTransactions_transactions_seller_user_idTouser_profilesInput;
};
export type transactionsUncheckedCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput = {
    id?: string;
    listing_id?: string | null;
    accepted_offer_id?: string | null;
    seller_user_id?: string | null;
    counterparty_user_id?: string | null;
    counterparty_store_id?: string | null;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    accepted_wishlist_offer_id?: string | null;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedCreateNestedManyWithoutTransactionsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutTransactionsInput;
};
export type transactionsCreateOrConnectWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput = {
    where: Prisma.transactionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput, Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput>;
};
export type transactionsCreateManyStore_games_transactions_seller_store_id_game_idTostore_gamesInputEnvelope = {
    data: Prisma.transactionsCreateManyStore_games_transactions_seller_store_id_game_idTostore_gamesInput | Prisma.transactionsCreateManyStore_games_transactions_seller_store_id_game_idTostore_gamesInput[];
    skipDuplicates?: boolean;
};
export type transactionsUpsertWithWhereUniqueWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    where: Prisma.transactionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.transactionsUpdateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput, Prisma.transactionsUncheckedUpdateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput>;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput, Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput>;
};
export type transactionsUpdateWithWhereUniqueWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    where: Prisma.transactionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.transactionsUpdateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput, Prisma.transactionsUncheckedUpdateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput>;
};
export type transactionsUpdateManyWithWhereWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    where: Prisma.transactionsScalarWhereInput;
    data: Prisma.XOR<Prisma.transactionsUpdateManyMutationInput, Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput>;
};
export type transactionsUpsertWithWhereUniqueWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput = {
    where: Prisma.transactionsWhereUniqueInput;
    update: Prisma.XOR<Prisma.transactionsUpdateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput, Prisma.transactionsUncheckedUpdateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput>;
    create: Prisma.XOR<Prisma.transactionsCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput, Prisma.transactionsUncheckedCreateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput>;
};
export type transactionsUpdateWithWhereUniqueWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput = {
    where: Prisma.transactionsWhereUniqueInput;
    data: Prisma.XOR<Prisma.transactionsUpdateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput, Prisma.transactionsUncheckedUpdateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput>;
};
export type transactionsUpdateManyWithWhereWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput = {
    where: Prisma.transactionsScalarWhereInput;
    data: Prisma.XOR<Prisma.transactionsUpdateManyMutationInput, Prisma.transactionsUncheckedUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput>;
};
export type transactionsCreateManyListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    id?: string;
    listing_id?: string | null;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    counterparty_user_id?: string | null;
    counterparty_store_id?: string | null;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    accepted_wishlist_offer_id?: string | null;
};
export type transactionsUpdateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutTransactionsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutTransactionsNestedInput;
    listing_offers?: Prisma.listing_offersUpdateOneWithoutTransactionsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutTransactionsNestedInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesNestedInput;
    listings?: Prisma.listingsUpdateOneWithoutTransactionsNestedInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_seller_user_idTouser_profilesNestedInput;
};
export type transactionsUncheckedUpdateWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accepted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutTransactionsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutTransactionsNestedInput;
};
export type transactionsUncheckedUpdateManyWithoutListing_offers_transactions_accepted_offer_id_game_idTolisting_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accepted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transactionsCreateManyListingsInput = {
    id?: string;
    accepted_offer_id?: string | null;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    counterparty_user_id?: string | null;
    counterparty_store_id?: string | null;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    accepted_wishlist_offer_id?: string | null;
};
export type transactionsUpdateWithoutListingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutTransactionsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutTransactionsNestedInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    listing_offers?: Prisma.listing_offersUpdateOneWithoutTransactionsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutTransactionsNestedInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesNestedInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_seller_user_idTouser_profilesNestedInput;
};
export type transactionsUncheckedUpdateWithoutListingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accepted_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accepted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutTransactionsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutTransactionsNestedInput;
};
export type transactionsUncheckedUpdateManyWithoutListingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accepted_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accepted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transactionsCreateManyUser_profiles_transactions_counterparty_user_idTouser_profilesInput = {
    id?: string;
    listing_id?: string | null;
    accepted_offer_id?: string | null;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    counterparty_store_id?: string | null;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    accepted_wishlist_offer_id?: string | null;
    game_id: string;
};
export type transactionsCreateManyUser_profiles_transactions_seller_user_idTouser_profilesInput = {
    id?: string;
    listing_id?: string | null;
    accepted_offer_id?: string | null;
    seller_store_id?: string | null;
    counterparty_user_id?: string | null;
    counterparty_store_id?: string | null;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    accepted_wishlist_offer_id?: string | null;
    game_id: string;
};
export type transactionsUpdateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutTransactionsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutTransactionsNestedInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    listing_offers?: Prisma.listing_offersUpdateOneWithoutTransactionsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutTransactionsNestedInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    listings?: Prisma.listingsUpdateOneWithoutTransactionsNestedInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_seller_user_idTouser_profilesNestedInput;
};
export type transactionsUncheckedUpdateWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepted_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accepted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutTransactionsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutTransactionsNestedInput;
};
export type transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepted_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accepted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type transactionsUpdateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutTransactionsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutTransactionsNestedInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    listing_offers?: Prisma.listing_offersUpdateOneWithoutTransactionsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutTransactionsNestedInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesNestedInput;
    listings?: Prisma.listingsUpdateOneWithoutTransactionsNestedInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesNestedInput;
};
export type transactionsUncheckedUpdateWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepted_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accepted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutTransactionsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutTransactionsNestedInput;
};
export type transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepted_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accepted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type transactionsCreateManyWishlist_offersInput = {
    id?: string;
    listing_id?: string | null;
    accepted_offer_id?: string | null;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    counterparty_user_id?: string | null;
    counterparty_store_id?: string | null;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type transactionsUpdateWithoutWishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutTransactionsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutTransactionsNestedInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    listing_offers?: Prisma.listing_offersUpdateOneWithoutTransactionsNestedInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesNestedInput;
    listings?: Prisma.listingsUpdateOneWithoutTransactionsNestedInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_seller_user_idTouser_profilesNestedInput;
};
export type transactionsUncheckedUpdateWithoutWishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepted_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutTransactionsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutTransactionsNestedInput;
};
export type transactionsUncheckedUpdateManyWithoutWishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepted_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type transactionsCreateManyStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    id?: string;
    listing_id?: string | null;
    accepted_offer_id?: string | null;
    seller_user_id?: string | null;
    seller_store_id?: string | null;
    counterparty_user_id?: string | null;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    accepted_wishlist_offer_id?: string | null;
};
export type transactionsCreateManyStore_games_transactions_seller_store_id_game_idTostore_gamesInput = {
    id?: string;
    listing_id?: string | null;
    accepted_offer_id?: string | null;
    seller_user_id?: string | null;
    counterparty_user_id?: string | null;
    counterparty_store_id?: string | null;
    transaction_type: string;
    cash_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: string;
    status?: string;
    agreed_at?: Date | string;
    completed_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    accepted_wishlist_offer_id?: string | null;
};
export type transactionsUpdateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutTransactionsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutTransactionsNestedInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    listing_offers?: Prisma.listing_offersUpdateOneWithoutTransactionsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutTransactionsNestedInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesNestedInput;
    listings?: Prisma.listingsUpdateOneWithoutTransactionsNestedInput;
    store_games_transactions_seller_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_seller_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_seller_user_idTouser_profilesNestedInput;
};
export type transactionsUncheckedUpdateWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepted_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accepted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutTransactionsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutTransactionsNestedInput;
};
export type transactionsUncheckedUpdateManyWithoutStore_games_transactions_counterparty_store_id_game_idTostore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepted_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accepted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transactionsUpdateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    store_trade_handoffs?: Prisma.store_trade_handoffsUpdateManyWithoutTransactionsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutTransactionsNestedInput;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: Prisma.listing_offersUpdateOneWithoutTransactions_transactions_accepted_offer_id_game_idTolisting_offersNestedInput;
    listing_offers?: Prisma.listing_offersUpdateOneWithoutTransactionsNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateOneWithoutTransactionsNestedInput;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: Prisma.store_gamesUpdateOneWithoutTransactions_transactions_counterparty_store_id_game_idTostore_gamesNestedInput;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesNestedInput;
    listings?: Prisma.listingsUpdateOneWithoutTransactionsNestedInput;
    user_profiles_transactions_seller_user_idTouser_profiles?: Prisma.user_profilesUpdateOneWithoutTransactions_transactions_seller_user_idTouser_profilesNestedInput;
};
export type transactionsUncheckedUpdateWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepted_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accepted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    store_trade_handoffs?: Prisma.store_trade_handoffsUncheckedUpdateManyWithoutTransactionsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutTransactionsNestedInput;
};
export type transactionsUncheckedUpdateManyWithoutStore_games_transactions_seller_store_id_game_idTostore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    listing_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    accepted_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    seller_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    counterparty_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    transaction_type?: Prisma.StringFieldUpdateOperationsInput | string;
    cash_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency_code?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    agreed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    completed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accepted_wishlist_offer_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type TransactionsCountOutputType
 */
export type TransactionsCountOutputType = {
    store_trade_handoffs: number;
    transaction_items: number;
};
export type TransactionsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_trade_handoffs?: boolean | TransactionsCountOutputTypeCountStore_trade_handoffsArgs;
    transaction_items?: boolean | TransactionsCountOutputTypeCountTransaction_itemsArgs;
};
/**
 * TransactionsCountOutputType without action
 */
export type TransactionsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionsCountOutputType
     */
    select?: Prisma.TransactionsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * TransactionsCountOutputType without action
 */
export type TransactionsCountOutputTypeCountStore_trade_handoffsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.store_trade_handoffsWhereInput;
};
/**
 * TransactionsCountOutputType without action
 */
export type TransactionsCountOutputTypeCountTransaction_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transaction_itemsWhereInput;
};
export type transactionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listing_id?: boolean;
    accepted_offer_id?: boolean;
    seller_user_id?: boolean;
    seller_store_id?: boolean;
    counterparty_user_id?: boolean;
    counterparty_store_id?: boolean;
    transaction_type?: boolean;
    cash_amount?: boolean;
    currency_code?: boolean;
    status?: boolean;
    agreed_at?: boolean;
    completed_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    accepted_wishlist_offer_id?: boolean;
    game_id?: boolean;
    store_trade_handoffs?: boolean | Prisma.transactions$store_trade_handoffsArgs<ExtArgs>;
    transaction_items?: boolean | Prisma.transactions$transaction_itemsArgs<ExtArgs>;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: boolean | Prisma.transactions$listing_offers_transactions_accepted_offer_id_game_idTolisting_offersArgs<ExtArgs>;
    listing_offers?: boolean | Prisma.transactions$listing_offersArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.transactions$wishlist_offersArgs<ExtArgs>;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: boolean | Prisma.transactions$store_games_transactions_counterparty_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: boolean | Prisma.transactions$user_profiles_transactions_counterparty_user_idTouser_profilesArgs<ExtArgs>;
    listings?: boolean | Prisma.transactions$listingsArgs<ExtArgs>;
    store_games_transactions_seller_store_id_game_idTostore_games?: boolean | Prisma.transactions$store_games_transactions_seller_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transactions_seller_user_idTouser_profiles?: boolean | Prisma.transactions$user_profiles_transactions_seller_user_idTouser_profilesArgs<ExtArgs>;
    _count?: boolean | Prisma.TransactionsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["transactions"]>;
export type transactionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listing_id?: boolean;
    accepted_offer_id?: boolean;
    seller_user_id?: boolean;
    seller_store_id?: boolean;
    counterparty_user_id?: boolean;
    counterparty_store_id?: boolean;
    transaction_type?: boolean;
    cash_amount?: boolean;
    currency_code?: boolean;
    status?: boolean;
    agreed_at?: boolean;
    completed_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    accepted_wishlist_offer_id?: boolean;
    game_id?: boolean;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: boolean | Prisma.transactions$listing_offers_transactions_accepted_offer_id_game_idTolisting_offersArgs<ExtArgs>;
    listing_offers?: boolean | Prisma.transactions$listing_offersArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.transactions$wishlist_offersArgs<ExtArgs>;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: boolean | Prisma.transactions$store_games_transactions_counterparty_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: boolean | Prisma.transactions$user_profiles_transactions_counterparty_user_idTouser_profilesArgs<ExtArgs>;
    listings?: boolean | Prisma.transactions$listingsArgs<ExtArgs>;
    store_games_transactions_seller_store_id_game_idTostore_games?: boolean | Prisma.transactions$store_games_transactions_seller_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transactions_seller_user_idTouser_profiles?: boolean | Prisma.transactions$user_profiles_transactions_seller_user_idTouser_profilesArgs<ExtArgs>;
}, ExtArgs["result"]["transactions"]>;
export type transactionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    listing_id?: boolean;
    accepted_offer_id?: boolean;
    seller_user_id?: boolean;
    seller_store_id?: boolean;
    counterparty_user_id?: boolean;
    counterparty_store_id?: boolean;
    transaction_type?: boolean;
    cash_amount?: boolean;
    currency_code?: boolean;
    status?: boolean;
    agreed_at?: boolean;
    completed_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    accepted_wishlist_offer_id?: boolean;
    game_id?: boolean;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: boolean | Prisma.transactions$listing_offers_transactions_accepted_offer_id_game_idTolisting_offersArgs<ExtArgs>;
    listing_offers?: boolean | Prisma.transactions$listing_offersArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.transactions$wishlist_offersArgs<ExtArgs>;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: boolean | Prisma.transactions$store_games_transactions_counterparty_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: boolean | Prisma.transactions$user_profiles_transactions_counterparty_user_idTouser_profilesArgs<ExtArgs>;
    listings?: boolean | Prisma.transactions$listingsArgs<ExtArgs>;
    store_games_transactions_seller_store_id_game_idTostore_games?: boolean | Prisma.transactions$store_games_transactions_seller_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transactions_seller_user_idTouser_profiles?: boolean | Prisma.transactions$user_profiles_transactions_seller_user_idTouser_profilesArgs<ExtArgs>;
}, ExtArgs["result"]["transactions"]>;
export type transactionsSelectScalar = {
    id?: boolean;
    listing_id?: boolean;
    accepted_offer_id?: boolean;
    seller_user_id?: boolean;
    seller_store_id?: boolean;
    counterparty_user_id?: boolean;
    counterparty_store_id?: boolean;
    transaction_type?: boolean;
    cash_amount?: boolean;
    currency_code?: boolean;
    status?: boolean;
    agreed_at?: boolean;
    completed_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    accepted_wishlist_offer_id?: boolean;
    game_id?: boolean;
};
export type transactionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "listing_id" | "accepted_offer_id" | "seller_user_id" | "seller_store_id" | "counterparty_user_id" | "counterparty_store_id" | "transaction_type" | "cash_amount" | "currency_code" | "status" | "agreed_at" | "completed_at" | "created_at" | "updated_at" | "accepted_wishlist_offer_id" | "game_id", ExtArgs["result"]["transactions"]>;
export type transactionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    store_trade_handoffs?: boolean | Prisma.transactions$store_trade_handoffsArgs<ExtArgs>;
    transaction_items?: boolean | Prisma.transactions$transaction_itemsArgs<ExtArgs>;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: boolean | Prisma.transactions$listing_offers_transactions_accepted_offer_id_game_idTolisting_offersArgs<ExtArgs>;
    listing_offers?: boolean | Prisma.transactions$listing_offersArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.transactions$wishlist_offersArgs<ExtArgs>;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: boolean | Prisma.transactions$store_games_transactions_counterparty_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: boolean | Prisma.transactions$user_profiles_transactions_counterparty_user_idTouser_profilesArgs<ExtArgs>;
    listings?: boolean | Prisma.transactions$listingsArgs<ExtArgs>;
    store_games_transactions_seller_store_id_game_idTostore_games?: boolean | Prisma.transactions$store_games_transactions_seller_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transactions_seller_user_idTouser_profiles?: boolean | Prisma.transactions$user_profiles_transactions_seller_user_idTouser_profilesArgs<ExtArgs>;
    _count?: boolean | Prisma.TransactionsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type transactionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: boolean | Prisma.transactions$listing_offers_transactions_accepted_offer_id_game_idTolisting_offersArgs<ExtArgs>;
    listing_offers?: boolean | Prisma.transactions$listing_offersArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.transactions$wishlist_offersArgs<ExtArgs>;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: boolean | Prisma.transactions$store_games_transactions_counterparty_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: boolean | Prisma.transactions$user_profiles_transactions_counterparty_user_idTouser_profilesArgs<ExtArgs>;
    listings?: boolean | Prisma.transactions$listingsArgs<ExtArgs>;
    store_games_transactions_seller_store_id_game_idTostore_games?: boolean | Prisma.transactions$store_games_transactions_seller_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transactions_seller_user_idTouser_profiles?: boolean | Prisma.transactions$user_profiles_transactions_seller_user_idTouser_profilesArgs<ExtArgs>;
};
export type transactionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers?: boolean | Prisma.transactions$listing_offers_transactions_accepted_offer_id_game_idTolisting_offersArgs<ExtArgs>;
    listing_offers?: boolean | Prisma.transactions$listing_offersArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.transactions$wishlist_offersArgs<ExtArgs>;
    store_games_transactions_counterparty_store_id_game_idTostore_games?: boolean | Prisma.transactions$store_games_transactions_counterparty_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transactions_counterparty_user_idTouser_profiles?: boolean | Prisma.transactions$user_profiles_transactions_counterparty_user_idTouser_profilesArgs<ExtArgs>;
    listings?: boolean | Prisma.transactions$listingsArgs<ExtArgs>;
    store_games_transactions_seller_store_id_game_idTostore_games?: boolean | Prisma.transactions$store_games_transactions_seller_store_id_game_idTostore_gamesArgs<ExtArgs>;
    user_profiles_transactions_seller_user_idTouser_profiles?: boolean | Prisma.transactions$user_profiles_transactions_seller_user_idTouser_profilesArgs<ExtArgs>;
};
export type $transactionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "transactions";
    objects: {
        store_trade_handoffs: Prisma.$store_trade_handoffsPayload<ExtArgs>[];
        transaction_items: Prisma.$transaction_itemsPayload<ExtArgs>[];
        listing_offers_transactions_accepted_offer_id_game_idTolisting_offers: Prisma.$listing_offersPayload<ExtArgs> | null;
        listing_offers: Prisma.$listing_offersPayload<ExtArgs> | null;
        wishlist_offers: Prisma.$wishlist_offersPayload<ExtArgs> | null;
        store_games_transactions_counterparty_store_id_game_idTostore_games: Prisma.$store_gamesPayload<ExtArgs> | null;
        user_profiles_transactions_counterparty_user_idTouser_profiles: Prisma.$user_profilesPayload<ExtArgs> | null;
        listings: Prisma.$listingsPayload<ExtArgs> | null;
        store_games_transactions_seller_store_id_game_idTostore_games: Prisma.$store_gamesPayload<ExtArgs> | null;
        user_profiles_transactions_seller_user_idTouser_profiles: Prisma.$user_profilesPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        listing_id: string | null;
        accepted_offer_id: string | null;
        seller_user_id: string | null;
        seller_store_id: string | null;
        counterparty_user_id: string | null;
        counterparty_store_id: string | null;
        transaction_type: string;
        cash_amount: runtime.Decimal;
        currency_code: string;
        status: string;
        agreed_at: Date;
        completed_at: Date | null;
        created_at: Date;
        updated_at: Date;
        accepted_wishlist_offer_id: string | null;
        game_id: string;
    }, ExtArgs["result"]["transactions"]>;
    composites: {};
};
export type transactionsGetPayload<S extends boolean | null | undefined | transactionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$transactionsPayload, S>;
export type transactionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TransactionsCountAggregateInputType | true;
};
export interface transactionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['transactions'];
        meta: {
            name: 'transactions';
        };
    };
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {transactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionsFindUniqueArgs>(args: Prisma.SelectSubset<T, transactionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__transactionsClient<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__transactionsClient<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionsFindFirstArgs>(args?: Prisma.SelectSubset<T, transactionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__transactionsClient<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__transactionsClient<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     *
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     *
     */
    findMany<T extends transactionsFindManyArgs>(args?: Prisma.SelectSubset<T, transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Transactions.
     * @param {transactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     *
     */
    create<T extends transactionsCreateArgs>(args: Prisma.SelectSubset<T, transactionsCreateArgs<ExtArgs>>): Prisma.Prisma__transactionsClient<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Transactions.
     * @param {transactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends transactionsCreateManyArgs>(args?: Prisma.SelectSubset<T, transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends transactionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, transactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Transactions.
     * @param {transactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     *
     */
    delete<T extends transactionsDeleteArgs>(args: Prisma.SelectSubset<T, transactionsDeleteArgs<ExtArgs>>): Prisma.Prisma__transactionsClient<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Transactions.
     * @param {transactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends transactionsUpdateArgs>(args: Prisma.SelectSubset<T, transactionsUpdateArgs<ExtArgs>>): Prisma.Prisma__transactionsClient<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Transactions.
     * @param {transactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends transactionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends transactionsUpdateManyArgs>(args: Prisma.SelectSubset<T, transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionsUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Transactions and only return the `id`
     * const transactionsWithIdOnly = await prisma.transactions.updateManyAndReturn({
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
    updateManyAndReturn<T extends transactionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, transactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Transactions.
     * @param {transactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends transactionsUpsertArgs>(args: Prisma.SelectSubset<T, transactionsUpsertArgs<ExtArgs>>): Prisma.Prisma__transactionsClient<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionsCountArgs>(args?: Prisma.Subset<T, transactionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TransactionsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionsAggregateArgs>(args: Prisma.Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>;
    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends transactionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: transactionsGroupByArgs['orderBy'];
    } : {
        orderBy?: transactionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the transactions model
     */
    readonly fields: transactionsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for transactions.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__transactionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    store_trade_handoffs<T extends Prisma.transactions$store_trade_handoffsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transactions$store_trade_handoffsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$store_trade_handoffsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transaction_items<T extends Prisma.transactions$transaction_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transactions$transaction_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    listing_offers_transactions_accepted_offer_id_game_idTolisting_offers<T extends Prisma.transactions$listing_offers_transactions_accepted_offer_id_game_idTolisting_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transactions$listing_offers_transactions_accepted_offer_id_game_idTolisting_offersArgs<ExtArgs>>): Prisma.Prisma__listing_offersClient<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    listing_offers<T extends Prisma.transactions$listing_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transactions$listing_offersArgs<ExtArgs>>): Prisma.Prisma__listing_offersClient<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    wishlist_offers<T extends Prisma.transactions$wishlist_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transactions$wishlist_offersArgs<ExtArgs>>): Prisma.Prisma__wishlist_offersClient<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    store_games_transactions_counterparty_store_id_game_idTostore_games<T extends Prisma.transactions$store_games_transactions_counterparty_store_id_game_idTostore_gamesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transactions$store_games_transactions_counterparty_store_id_game_idTostore_gamesArgs<ExtArgs>>): Prisma.Prisma__store_gamesClient<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user_profiles_transactions_counterparty_user_idTouser_profiles<T extends Prisma.transactions$user_profiles_transactions_counterparty_user_idTouser_profilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transactions$user_profiles_transactions_counterparty_user_idTouser_profilesArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    listings<T extends Prisma.transactions$listingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transactions$listingsArgs<ExtArgs>>): Prisma.Prisma__listingsClient<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    store_games_transactions_seller_store_id_game_idTostore_games<T extends Prisma.transactions$store_games_transactions_seller_store_id_game_idTostore_gamesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transactions$store_games_transactions_seller_store_id_game_idTostore_gamesArgs<ExtArgs>>): Prisma.Prisma__store_gamesClient<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user_profiles_transactions_seller_user_idTouser_profiles<T extends Prisma.transactions$user_profiles_transactions_seller_user_idTouser_profilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transactions$user_profiles_transactions_seller_user_idTouser_profilesArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the transactions model
 */
export interface transactionsFieldRefs {
    readonly id: Prisma.FieldRef<"transactions", 'String'>;
    readonly listing_id: Prisma.FieldRef<"transactions", 'String'>;
    readonly accepted_offer_id: Prisma.FieldRef<"transactions", 'String'>;
    readonly seller_user_id: Prisma.FieldRef<"transactions", 'String'>;
    readonly seller_store_id: Prisma.FieldRef<"transactions", 'String'>;
    readonly counterparty_user_id: Prisma.FieldRef<"transactions", 'String'>;
    readonly counterparty_store_id: Prisma.FieldRef<"transactions", 'String'>;
    readonly transaction_type: Prisma.FieldRef<"transactions", 'String'>;
    readonly cash_amount: Prisma.FieldRef<"transactions", 'Decimal'>;
    readonly currency_code: Prisma.FieldRef<"transactions", 'String'>;
    readonly status: Prisma.FieldRef<"transactions", 'String'>;
    readonly agreed_at: Prisma.FieldRef<"transactions", 'DateTime'>;
    readonly completed_at: Prisma.FieldRef<"transactions", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"transactions", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"transactions", 'DateTime'>;
    readonly accepted_wishlist_offer_id: Prisma.FieldRef<"transactions", 'String'>;
    readonly game_id: Prisma.FieldRef<"transactions", 'String'>;
}
/**
 * transactions findUnique
 */
export type transactionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which transactions to fetch.
     */
    where: Prisma.transactionsWhereUniqueInput;
};
/**
 * transactions findUniqueOrThrow
 */
export type transactionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which transactions to fetch.
     */
    where: Prisma.transactionsWhereUniqueInput;
};
/**
 * transactions findFirst
 */
export type transactionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which transactions to fetch.
     */
    where?: Prisma.transactionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?: Prisma.transactionsOrderByWithRelationInput | Prisma.transactionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for transactions.
     */
    cursor?: Prisma.transactionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of transactions.
     */
    distinct?: Prisma.TransactionsScalarFieldEnum | Prisma.TransactionsScalarFieldEnum[];
};
/**
 * transactions findFirstOrThrow
 */
export type transactionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which transactions to fetch.
     */
    where?: Prisma.transactionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?: Prisma.transactionsOrderByWithRelationInput | Prisma.transactionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for transactions.
     */
    cursor?: Prisma.transactionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of transactions.
     */
    distinct?: Prisma.TransactionsScalarFieldEnum | Prisma.TransactionsScalarFieldEnum[];
};
/**
 * transactions findMany
 */
export type transactionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which transactions to fetch.
     */
    where?: Prisma.transactionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?: Prisma.transactionsOrderByWithRelationInput | Prisma.transactionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing transactions.
     */
    cursor?: Prisma.transactionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of transactions.
     */
    distinct?: Prisma.TransactionsScalarFieldEnum | Prisma.TransactionsScalarFieldEnum[];
};
/**
 * transactions create
 */
export type transactionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a transactions.
     */
    data: Prisma.XOR<Prisma.transactionsCreateInput, Prisma.transactionsUncheckedCreateInput>;
};
/**
 * transactions createMany
 */
export type transactionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: Prisma.transactionsCreateManyInput | Prisma.transactionsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * transactions createManyAndReturn
 */
export type transactionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: Prisma.transactionsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: Prisma.transactionsOmit<ExtArgs> | null;
    /**
     * The data used to create many transactions.
     */
    data: Prisma.transactionsCreateManyInput | Prisma.transactionsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transactionsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * transactions update
 */
export type transactionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a transactions.
     */
    data: Prisma.XOR<Prisma.transactionsUpdateInput, Prisma.transactionsUncheckedUpdateInput>;
    /**
     * Choose, which transactions to update.
     */
    where: Prisma.transactionsWhereUniqueInput;
};
/**
 * transactions updateMany
 */
export type transactionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: Prisma.XOR<Prisma.transactionsUpdateManyMutationInput, Prisma.transactionsUncheckedUpdateManyInput>;
    /**
     * Filter which transactions to update
     */
    where?: Prisma.transactionsWhereInput;
    /**
     * Limit how many transactions to update.
     */
    limit?: number;
};
/**
 * transactions updateManyAndReturn
 */
export type transactionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: Prisma.transactionsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the transactions
     */
    omit?: Prisma.transactionsOmit<ExtArgs> | null;
    /**
     * The data used to update transactions.
     */
    data: Prisma.XOR<Prisma.transactionsUpdateManyMutationInput, Prisma.transactionsUncheckedUpdateManyInput>;
    /**
     * Filter which transactions to update
     */
    where?: Prisma.transactionsWhereInput;
    /**
     * Limit how many transactions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.transactionsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * transactions upsert
 */
export type transactionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the transactions to update in case it exists.
     */
    where: Prisma.transactionsWhereUniqueInput;
    /**
     * In case the transactions found by the `where` argument doesn't exist, create a new transactions with this data.
     */
    create: Prisma.XOR<Prisma.transactionsCreateInput, Prisma.transactionsUncheckedCreateInput>;
    /**
     * In case the transactions was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.transactionsUpdateInput, Prisma.transactionsUncheckedUpdateInput>;
};
/**
 * transactions delete
 */
export type transactionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which transactions to delete.
     */
    where: Prisma.transactionsWhereUniqueInput;
};
/**
 * transactions deleteMany
 */
export type transactionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: Prisma.transactionsWhereInput;
    /**
     * Limit how many transactions to delete.
     */
    limit?: number;
};
/**
 * transactions.store_trade_handoffs
 */
export type transactions$store_trade_handoffsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_trade_handoffs
     */
    select?: Prisma.store_trade_handoffsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the store_trade_handoffs
     */
    omit?: Prisma.store_trade_handoffsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_trade_handoffsInclude<ExtArgs> | null;
    where?: Prisma.store_trade_handoffsWhereInput;
    orderBy?: Prisma.store_trade_handoffsOrderByWithRelationInput | Prisma.store_trade_handoffsOrderByWithRelationInput[];
    cursor?: Prisma.store_trade_handoffsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Store_trade_handoffsScalarFieldEnum | Prisma.Store_trade_handoffsScalarFieldEnum[];
};
/**
 * transactions.transaction_items
 */
export type transactions$transaction_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * transactions.listing_offers_transactions_accepted_offer_id_game_idTolisting_offers
 */
export type transactions$listing_offers_transactions_accepted_offer_id_game_idTolisting_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * transactions.listing_offers
 */
export type transactions$listing_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * transactions.wishlist_offers
 */
export type transactions$wishlist_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * transactions.store_games_transactions_counterparty_store_id_game_idTostore_games
 */
export type transactions$store_games_transactions_counterparty_store_id_game_idTostore_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * transactions.user_profiles_transactions_counterparty_user_idTouser_profiles
 */
export type transactions$user_profiles_transactions_counterparty_user_idTouser_profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * transactions.listings
 */
export type transactions$listingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.listingsWhereInput;
};
/**
 * transactions.store_games_transactions_seller_store_id_game_idTostore_games
 */
export type transactions$store_games_transactions_seller_store_id_game_idTostore_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * transactions.user_profiles_transactions_seller_user_idTouser_profiles
 */
export type transactions$user_profiles_transactions_seller_user_idTouser_profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * transactions without action
 */
export type transactionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
