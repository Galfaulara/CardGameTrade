import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model user_profiles
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type user_profilesModel = runtime.Types.Result.DefaultSelection<Prisma.$user_profilesPayload>;
export type AggregateUser_profiles = {
    _count: User_profilesCountAggregateOutputType | null;
    _min: User_profilesMinAggregateOutputType | null;
    _max: User_profilesMaxAggregateOutputType | null;
};
export type User_profilesMinAggregateOutputType = {
    id: string | null;
    auth_provider: string | null;
    auth_user_id: string | null;
    email: string | null;
    username: string | null;
    display_name: string | null;
    avatar_url: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    preferred_store_id: string | null;
    username_normalized: string | null;
};
export type User_profilesMaxAggregateOutputType = {
    id: string | null;
    auth_provider: string | null;
    auth_user_id: string | null;
    email: string | null;
    username: string | null;
    display_name: string | null;
    avatar_url: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    preferred_store_id: string | null;
    username_normalized: string | null;
};
export type User_profilesCountAggregateOutputType = {
    id: number;
    auth_provider: number;
    auth_user_id: number;
    email: number;
    username: number;
    display_name: number;
    avatar_url: number;
    status: number;
    created_at: number;
    updated_at: number;
    preferred_store_id: number;
    username_normalized: number;
    _all: number;
};
export type User_profilesMinAggregateInputType = {
    id?: true;
    auth_provider?: true;
    auth_user_id?: true;
    email?: true;
    username?: true;
    display_name?: true;
    avatar_url?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    preferred_store_id?: true;
    username_normalized?: true;
};
export type User_profilesMaxAggregateInputType = {
    id?: true;
    auth_provider?: true;
    auth_user_id?: true;
    email?: true;
    username?: true;
    display_name?: true;
    avatar_url?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    preferred_store_id?: true;
    username_normalized?: true;
};
export type User_profilesCountAggregateInputType = {
    id?: true;
    auth_provider?: true;
    auth_user_id?: true;
    email?: true;
    username?: true;
    display_name?: true;
    avatar_url?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    preferred_store_id?: true;
    username_normalized?: true;
    _all?: true;
};
export type User_profilesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which user_profiles to aggregate.
     */
    where?: Prisma.user_profilesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: Prisma.user_profilesOrderByWithRelationInput | Prisma.user_profilesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.user_profilesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned user_profiles
    **/
    _count?: true | User_profilesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: User_profilesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: User_profilesMaxAggregateInputType;
};
export type GetUser_profilesAggregateType<T extends User_profilesAggregateArgs> = {
    [P in keyof T & keyof AggregateUser_profiles]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser_profiles[P]> : Prisma.GetScalarType<T[P], AggregateUser_profiles[P]>;
};
export type user_profilesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_profilesWhereInput;
    orderBy?: Prisma.user_profilesOrderByWithAggregationInput | Prisma.user_profilesOrderByWithAggregationInput[];
    by: Prisma.User_profilesScalarFieldEnum[] | Prisma.User_profilesScalarFieldEnum;
    having?: Prisma.user_profilesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_profilesCountAggregateInputType | true;
    _min?: User_profilesMinAggregateInputType;
    _max?: User_profilesMaxAggregateInputType;
};
export type User_profilesGroupByOutputType = {
    id: string;
    auth_provider: string;
    auth_user_id: string;
    email: string;
    username: string | null;
    display_name: string | null;
    avatar_url: string | null;
    status: string;
    created_at: Date;
    updated_at: Date;
    preferred_store_id: string | null;
    username_normalized: string | null;
    _count: User_profilesCountAggregateOutputType | null;
    _min: User_profilesMinAggregateOutputType | null;
    _max: User_profilesMaxAggregateOutputType | null;
};
export type GetUser_profilesGroupByPayload<T extends user_profilesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<User_profilesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof User_profilesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], User_profilesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], User_profilesGroupByOutputType[P]>;
}>>;
export type user_profilesWhereInput = {
    AND?: Prisma.user_profilesWhereInput | Prisma.user_profilesWhereInput[];
    OR?: Prisma.user_profilesWhereInput[];
    NOT?: Prisma.user_profilesWhereInput | Prisma.user_profilesWhereInput[];
    id?: Prisma.UuidFilter<"user_profiles"> | string;
    auth_provider?: Prisma.StringFilter<"user_profiles"> | string;
    auth_user_id?: Prisma.StringFilter<"user_profiles"> | string;
    email?: Prisma.StringFilter<"user_profiles"> | string;
    username?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    display_name?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    avatar_url?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    status?: Prisma.StringFilter<"user_profiles"> | string;
    created_at?: Prisma.DateTimeFilter<"user_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"user_profiles"> | Date | string;
    preferred_store_id?: Prisma.UuidNullableFilter<"user_profiles"> | string | null;
    username_normalized?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    collections?: Prisma.CollectionsListRelationFilter;
    inventory_item_interests?: Prisma.Inventory_item_interestsListRelationFilter;
    inventory_items?: Prisma.Inventory_itemsListRelationFilter;
    listing_offers?: Prisma.Listing_offersListRelationFilter;
    store_staff?: Prisma.Store_staffListRelationFilter;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.Transaction_itemsListRelationFilter;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.Transaction_itemsListRelationFilter;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.TransactionsListRelationFilter;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.TransactionsListRelationFilter;
    user_preferences?: Prisma.XOR<Prisma.User_preferencesNullableScalarRelationFilter, Prisma.user_preferencesWhereInput> | null;
    preferred_store?: Prisma.XOR<Prisma.StoresNullableScalarRelationFilter, Prisma.storesWhereInput> | null;
    wishlist_offers?: Prisma.Wishlist_offersListRelationFilter;
    wishlists?: Prisma.WishlistsListRelationFilter;
};
export type user_profilesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    auth_provider?: Prisma.SortOrder;
    auth_user_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrderInput | Prisma.SortOrder;
    display_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatar_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    preferred_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    username_normalized?: Prisma.SortOrderInput | Prisma.SortOrder;
    collections?: Prisma.collectionsOrderByRelationAggregateInput;
    inventory_item_interests?: Prisma.inventory_item_interestsOrderByRelationAggregateInput;
    inventory_items?: Prisma.inventory_itemsOrderByRelationAggregateInput;
    listing_offers?: Prisma.listing_offersOrderByRelationAggregateInput;
    store_staff?: Prisma.store_staffOrderByRelationAggregateInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsOrderByRelationAggregateInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsOrderByRelationAggregateInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsOrderByRelationAggregateInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsOrderByRelationAggregateInput;
    user_preferences?: Prisma.user_preferencesOrderByWithRelationInput;
    preferred_store?: Prisma.storesOrderByWithRelationInput;
    wishlist_offers?: Prisma.wishlist_offersOrderByRelationAggregateInput;
    wishlists?: Prisma.wishlistsOrderByRelationAggregateInput;
};
export type user_profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    username?: string;
    username_normalized?: string;
    auth_provider_auth_user_id?: Prisma.user_profilesAuth_providerAuth_user_idCompoundUniqueInput;
    AND?: Prisma.user_profilesWhereInput | Prisma.user_profilesWhereInput[];
    OR?: Prisma.user_profilesWhereInput[];
    NOT?: Prisma.user_profilesWhereInput | Prisma.user_profilesWhereInput[];
    auth_provider?: Prisma.StringFilter<"user_profiles"> | string;
    auth_user_id?: Prisma.StringFilter<"user_profiles"> | string;
    display_name?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    avatar_url?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    status?: Prisma.StringFilter<"user_profiles"> | string;
    created_at?: Prisma.DateTimeFilter<"user_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"user_profiles"> | Date | string;
    preferred_store_id?: Prisma.UuidNullableFilter<"user_profiles"> | string | null;
    collections?: Prisma.CollectionsListRelationFilter;
    inventory_item_interests?: Prisma.Inventory_item_interestsListRelationFilter;
    inventory_items?: Prisma.Inventory_itemsListRelationFilter;
    listing_offers?: Prisma.Listing_offersListRelationFilter;
    store_staff?: Prisma.Store_staffListRelationFilter;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.Transaction_itemsListRelationFilter;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.Transaction_itemsListRelationFilter;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.TransactionsListRelationFilter;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.TransactionsListRelationFilter;
    user_preferences?: Prisma.XOR<Prisma.User_preferencesNullableScalarRelationFilter, Prisma.user_preferencesWhereInput> | null;
    preferred_store?: Prisma.XOR<Prisma.StoresNullableScalarRelationFilter, Prisma.storesWhereInput> | null;
    wishlist_offers?: Prisma.Wishlist_offersListRelationFilter;
    wishlists?: Prisma.WishlistsListRelationFilter;
}, "id" | "email" | "username" | "username_normalized" | "auth_provider_auth_user_id">;
export type user_profilesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    auth_provider?: Prisma.SortOrder;
    auth_user_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrderInput | Prisma.SortOrder;
    display_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatar_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    preferred_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    username_normalized?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.user_profilesCountOrderByAggregateInput;
    _max?: Prisma.user_profilesMaxOrderByAggregateInput;
    _min?: Prisma.user_profilesMinOrderByAggregateInput;
};
export type user_profilesScalarWhereWithAggregatesInput = {
    AND?: Prisma.user_profilesScalarWhereWithAggregatesInput | Prisma.user_profilesScalarWhereWithAggregatesInput[];
    OR?: Prisma.user_profilesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.user_profilesScalarWhereWithAggregatesInput | Prisma.user_profilesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"user_profiles"> | string;
    auth_provider?: Prisma.StringWithAggregatesFilter<"user_profiles"> | string;
    auth_user_id?: Prisma.StringWithAggregatesFilter<"user_profiles"> | string;
    email?: Prisma.StringWithAggregatesFilter<"user_profiles"> | string;
    username?: Prisma.StringNullableWithAggregatesFilter<"user_profiles"> | string | null;
    display_name?: Prisma.StringNullableWithAggregatesFilter<"user_profiles"> | string | null;
    avatar_url?: Prisma.StringNullableWithAggregatesFilter<"user_profiles"> | string | null;
    status?: Prisma.StringWithAggregatesFilter<"user_profiles"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"user_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"user_profiles"> | Date | string;
    preferred_store_id?: Prisma.UuidNullableWithAggregatesFilter<"user_profiles"> | string | null;
    username_normalized?: Prisma.StringNullableWithAggregatesFilter<"user_profiles"> | string | null;
};
export type user_profilesCreateInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    username_normalized?: string | null;
    collections?: Prisma.collectionsCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesCreateNestedOneWithoutUser_profilesInput;
    preferred_store?: Prisma.storesCreateNestedOneWithoutPreferred_by_usersInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesUncheckedCreateInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    preferred_store_id?: string | null;
    username_normalized?: string | null;
    collections?: Prisma.collectionsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedOneWithoutUser_profilesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateOneWithoutUser_profilesNestedInput;
    preferred_store?: Prisma.storesUpdateOneWithoutPreferred_by_usersNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateOneWithoutUser_profilesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesCreateManyInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    preferred_store_id?: string | null;
    username_normalized?: string | null;
};
export type user_profilesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type user_profilesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type User_profilesScalarRelationFilter = {
    is?: Prisma.user_profilesWhereInput;
    isNot?: Prisma.user_profilesWhereInput;
};
export type User_profilesNullableScalarRelationFilter = {
    is?: Prisma.user_profilesWhereInput | null;
    isNot?: Prisma.user_profilesWhereInput | null;
};
export type User_profilesListRelationFilter = {
    every?: Prisma.user_profilesWhereInput;
    some?: Prisma.user_profilesWhereInput;
    none?: Prisma.user_profilesWhereInput;
};
export type user_profilesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type user_profilesAuth_providerAuth_user_idCompoundUniqueInput = {
    auth_provider: string;
    auth_user_id: string;
};
export type user_profilesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    auth_provider?: Prisma.SortOrder;
    auth_user_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    display_name?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    preferred_store_id?: Prisma.SortOrder;
    username_normalized?: Prisma.SortOrder;
};
export type user_profilesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    auth_provider?: Prisma.SortOrder;
    auth_user_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    display_name?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    preferred_store_id?: Prisma.SortOrder;
    username_normalized?: Prisma.SortOrder;
};
export type user_profilesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    auth_provider?: Prisma.SortOrder;
    auth_user_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    display_name?: Prisma.SortOrder;
    avatar_url?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    preferred_store_id?: Prisma.SortOrder;
    username_normalized?: Prisma.SortOrder;
};
export type user_profilesCreateNestedOneWithoutCollectionsInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutCollectionsInput, Prisma.user_profilesUncheckedCreateWithoutCollectionsInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutCollectionsInput;
    connect?: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutCollectionsInput, Prisma.user_profilesUncheckedCreateWithoutCollectionsInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutCollectionsInput;
    upsert?: Prisma.user_profilesUpsertWithoutCollectionsInput;
    connect?: Prisma.user_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.user_profilesUpdateToOneWithWhereWithoutCollectionsInput, Prisma.user_profilesUpdateWithoutCollectionsInput>, Prisma.user_profilesUncheckedUpdateWithoutCollectionsInput>;
};
export type user_profilesCreateNestedOneWithoutInventory_item_interestsInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutInventory_item_interestsInput, Prisma.user_profilesUncheckedCreateWithoutInventory_item_interestsInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutInventory_item_interestsInput;
    connect?: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesUpdateOneWithoutInventory_item_interestsNestedInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutInventory_item_interestsInput, Prisma.user_profilesUncheckedCreateWithoutInventory_item_interestsInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutInventory_item_interestsInput;
    upsert?: Prisma.user_profilesUpsertWithoutInventory_item_interestsInput;
    disconnect?: Prisma.user_profilesWhereInput | boolean;
    delete?: Prisma.user_profilesWhereInput | boolean;
    connect?: Prisma.user_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.user_profilesUpdateToOneWithWhereWithoutInventory_item_interestsInput, Prisma.user_profilesUpdateWithoutInventory_item_interestsInput>, Prisma.user_profilesUncheckedUpdateWithoutInventory_item_interestsInput>;
};
export type user_profilesCreateNestedOneWithoutInventory_itemsInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutInventory_itemsInput, Prisma.user_profilesUncheckedCreateWithoutInventory_itemsInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutInventory_itemsInput;
    connect?: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesUpdateOneWithoutInventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutInventory_itemsInput, Prisma.user_profilesUncheckedCreateWithoutInventory_itemsInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutInventory_itemsInput;
    upsert?: Prisma.user_profilesUpsertWithoutInventory_itemsInput;
    disconnect?: Prisma.user_profilesWhereInput | boolean;
    delete?: Prisma.user_profilesWhereInput | boolean;
    connect?: Prisma.user_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.user_profilesUpdateToOneWithWhereWithoutInventory_itemsInput, Prisma.user_profilesUpdateWithoutInventory_itemsInput>, Prisma.user_profilesUncheckedUpdateWithoutInventory_itemsInput>;
};
export type user_profilesCreateNestedOneWithoutListing_offersInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutListing_offersInput, Prisma.user_profilesUncheckedCreateWithoutListing_offersInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutListing_offersInput;
    connect?: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesUpdateOneWithoutListing_offersNestedInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutListing_offersInput, Prisma.user_profilesUncheckedCreateWithoutListing_offersInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutListing_offersInput;
    upsert?: Prisma.user_profilesUpsertWithoutListing_offersInput;
    disconnect?: Prisma.user_profilesWhereInput | boolean;
    delete?: Prisma.user_profilesWhereInput | boolean;
    connect?: Prisma.user_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.user_profilesUpdateToOneWithWhereWithoutListing_offersInput, Prisma.user_profilesUpdateWithoutListing_offersInput>, Prisma.user_profilesUncheckedUpdateWithoutListing_offersInput>;
};
export type user_profilesCreateNestedOneWithoutStore_staffInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutStore_staffInput, Prisma.user_profilesUncheckedCreateWithoutStore_staffInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutStore_staffInput;
    connect?: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesUpdateOneRequiredWithoutStore_staffNestedInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutStore_staffInput, Prisma.user_profilesUncheckedCreateWithoutStore_staffInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutStore_staffInput;
    upsert?: Prisma.user_profilesUpsertWithoutStore_staffInput;
    connect?: Prisma.user_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.user_profilesUpdateToOneWithWhereWithoutStore_staffInput, Prisma.user_profilesUpdateWithoutStore_staffInput>, Prisma.user_profilesUncheckedUpdateWithoutStore_staffInput>;
};
export type user_profilesCreateNestedManyWithoutPreferred_storeInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutPreferred_storeInput, Prisma.user_profilesUncheckedCreateWithoutPreferred_storeInput> | Prisma.user_profilesCreateWithoutPreferred_storeInput[] | Prisma.user_profilesUncheckedCreateWithoutPreferred_storeInput[];
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutPreferred_storeInput | Prisma.user_profilesCreateOrConnectWithoutPreferred_storeInput[];
    createMany?: Prisma.user_profilesCreateManyPreferred_storeInputEnvelope;
    connect?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
};
export type user_profilesUncheckedCreateNestedManyWithoutPreferred_storeInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutPreferred_storeInput, Prisma.user_profilesUncheckedCreateWithoutPreferred_storeInput> | Prisma.user_profilesCreateWithoutPreferred_storeInput[] | Prisma.user_profilesUncheckedCreateWithoutPreferred_storeInput[];
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutPreferred_storeInput | Prisma.user_profilesCreateOrConnectWithoutPreferred_storeInput[];
    createMany?: Prisma.user_profilesCreateManyPreferred_storeInputEnvelope;
    connect?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
};
export type user_profilesUpdateManyWithoutPreferred_storeNestedInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutPreferred_storeInput, Prisma.user_profilesUncheckedCreateWithoutPreferred_storeInput> | Prisma.user_profilesCreateWithoutPreferred_storeInput[] | Prisma.user_profilesUncheckedCreateWithoutPreferred_storeInput[];
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutPreferred_storeInput | Prisma.user_profilesCreateOrConnectWithoutPreferred_storeInput[];
    upsert?: Prisma.user_profilesUpsertWithWhereUniqueWithoutPreferred_storeInput | Prisma.user_profilesUpsertWithWhereUniqueWithoutPreferred_storeInput[];
    createMany?: Prisma.user_profilesCreateManyPreferred_storeInputEnvelope;
    set?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
    disconnect?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
    delete?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
    connect?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
    update?: Prisma.user_profilesUpdateWithWhereUniqueWithoutPreferred_storeInput | Prisma.user_profilesUpdateWithWhereUniqueWithoutPreferred_storeInput[];
    updateMany?: Prisma.user_profilesUpdateManyWithWhereWithoutPreferred_storeInput | Prisma.user_profilesUpdateManyWithWhereWithoutPreferred_storeInput[];
    deleteMany?: Prisma.user_profilesScalarWhereInput | Prisma.user_profilesScalarWhereInput[];
};
export type user_profilesUncheckedUpdateManyWithoutPreferred_storeNestedInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutPreferred_storeInput, Prisma.user_profilesUncheckedCreateWithoutPreferred_storeInput> | Prisma.user_profilesCreateWithoutPreferred_storeInput[] | Prisma.user_profilesUncheckedCreateWithoutPreferred_storeInput[];
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutPreferred_storeInput | Prisma.user_profilesCreateOrConnectWithoutPreferred_storeInput[];
    upsert?: Prisma.user_profilesUpsertWithWhereUniqueWithoutPreferred_storeInput | Prisma.user_profilesUpsertWithWhereUniqueWithoutPreferred_storeInput[];
    createMany?: Prisma.user_profilesCreateManyPreferred_storeInputEnvelope;
    set?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
    disconnect?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
    delete?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
    connect?: Prisma.user_profilesWhereUniqueInput | Prisma.user_profilesWhereUniqueInput[];
    update?: Prisma.user_profilesUpdateWithWhereUniqueWithoutPreferred_storeInput | Prisma.user_profilesUpdateWithWhereUniqueWithoutPreferred_storeInput[];
    updateMany?: Prisma.user_profilesUpdateManyWithWhereWithoutPreferred_storeInput | Prisma.user_profilesUpdateManyWithWhereWithoutPreferred_storeInput[];
    deleteMany?: Prisma.user_profilesScalarWhereInput | Prisma.user_profilesScalarWhereInput[];
};
export type user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput, Prisma.user_profilesUncheckedCreateWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput;
    connect?: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesCreateNestedOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput, Prisma.user_profilesUncheckedCreateWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput;
    connect?: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesUpdateOneWithoutTransaction_items_transaction_items_from_user_idTouser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput, Prisma.user_profilesUncheckedCreateWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput;
    upsert?: Prisma.user_profilesUpsertWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput;
    disconnect?: Prisma.user_profilesWhereInput | boolean;
    delete?: Prisma.user_profilesWhereInput | boolean;
    connect?: Prisma.user_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.user_profilesUpdateToOneWithWhereWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput, Prisma.user_profilesUpdateWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput>, Prisma.user_profilesUncheckedUpdateWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput>;
};
export type user_profilesUpdateOneWithoutTransaction_items_transaction_items_to_user_idTouser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput, Prisma.user_profilesUncheckedCreateWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput;
    upsert?: Prisma.user_profilesUpsertWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput;
    disconnect?: Prisma.user_profilesWhereInput | boolean;
    delete?: Prisma.user_profilesWhereInput | boolean;
    connect?: Prisma.user_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.user_profilesUpdateToOneWithWhereWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput, Prisma.user_profilesUpdateWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput>, Prisma.user_profilesUncheckedUpdateWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput>;
};
export type user_profilesCreateNestedOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput, Prisma.user_profilesUncheckedCreateWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput;
    connect?: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesCreateNestedOneWithoutTransactions_transactions_seller_user_idTouser_profilesInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutTransactions_transactions_seller_user_idTouser_profilesInput, Prisma.user_profilesUncheckedCreateWithoutTransactions_transactions_seller_user_idTouser_profilesInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutTransactions_transactions_seller_user_idTouser_profilesInput;
    connect?: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesUpdateOneWithoutTransactions_transactions_counterparty_user_idTouser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput, Prisma.user_profilesUncheckedCreateWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput;
    upsert?: Prisma.user_profilesUpsertWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput;
    disconnect?: Prisma.user_profilesWhereInput | boolean;
    delete?: Prisma.user_profilesWhereInput | boolean;
    connect?: Prisma.user_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.user_profilesUpdateToOneWithWhereWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput, Prisma.user_profilesUpdateWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput>, Prisma.user_profilesUncheckedUpdateWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput>;
};
export type user_profilesUpdateOneWithoutTransactions_transactions_seller_user_idTouser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutTransactions_transactions_seller_user_idTouser_profilesInput, Prisma.user_profilesUncheckedCreateWithoutTransactions_transactions_seller_user_idTouser_profilesInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutTransactions_transactions_seller_user_idTouser_profilesInput;
    upsert?: Prisma.user_profilesUpsertWithoutTransactions_transactions_seller_user_idTouser_profilesInput;
    disconnect?: Prisma.user_profilesWhereInput | boolean;
    delete?: Prisma.user_profilesWhereInput | boolean;
    connect?: Prisma.user_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.user_profilesUpdateToOneWithWhereWithoutTransactions_transactions_seller_user_idTouser_profilesInput, Prisma.user_profilesUpdateWithoutTransactions_transactions_seller_user_idTouser_profilesInput>, Prisma.user_profilesUncheckedUpdateWithoutTransactions_transactions_seller_user_idTouser_profilesInput>;
};
export type user_profilesCreateNestedOneWithoutWishlist_offersInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutWishlist_offersInput, Prisma.user_profilesUncheckedCreateWithoutWishlist_offersInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutWishlist_offersInput;
    connect?: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesUpdateOneWithoutWishlist_offersNestedInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutWishlist_offersInput, Prisma.user_profilesUncheckedCreateWithoutWishlist_offersInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutWishlist_offersInput;
    upsert?: Prisma.user_profilesUpsertWithoutWishlist_offersInput;
    disconnect?: Prisma.user_profilesWhereInput | boolean;
    delete?: Prisma.user_profilesWhereInput | boolean;
    connect?: Prisma.user_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.user_profilesUpdateToOneWithWhereWithoutWishlist_offersInput, Prisma.user_profilesUpdateWithoutWishlist_offersInput>, Prisma.user_profilesUncheckedUpdateWithoutWishlist_offersInput>;
};
export type user_profilesCreateNestedOneWithoutWishlistsInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutWishlistsInput, Prisma.user_profilesUncheckedCreateWithoutWishlistsInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutWishlistsInput;
    connect?: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesUpdateOneRequiredWithoutWishlistsNestedInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutWishlistsInput, Prisma.user_profilesUncheckedCreateWithoutWishlistsInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutWishlistsInput;
    upsert?: Prisma.user_profilesUpsertWithoutWishlistsInput;
    connect?: Prisma.user_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.user_profilesUpdateToOneWithWhereWithoutWishlistsInput, Prisma.user_profilesUpdateWithoutWishlistsInput>, Prisma.user_profilesUncheckedUpdateWithoutWishlistsInput>;
};
export type user_profilesCreateNestedOneWithoutUser_preferencesInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutUser_preferencesInput, Prisma.user_profilesUncheckedCreateWithoutUser_preferencesInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutUser_preferencesInput;
    connect?: Prisma.user_profilesWhereUniqueInput;
};
export type user_profilesUpdateOneRequiredWithoutUser_preferencesNestedInput = {
    create?: Prisma.XOR<Prisma.user_profilesCreateWithoutUser_preferencesInput, Prisma.user_profilesUncheckedCreateWithoutUser_preferencesInput>;
    connectOrCreate?: Prisma.user_profilesCreateOrConnectWithoutUser_preferencesInput;
    upsert?: Prisma.user_profilesUpsertWithoutUser_preferencesInput;
    connect?: Prisma.user_profilesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.user_profilesUpdateToOneWithWhereWithoutUser_preferencesInput, Prisma.user_profilesUpdateWithoutUser_preferencesInput>, Prisma.user_profilesUncheckedUpdateWithoutUser_preferencesInput>;
};
export type user_profilesCreateWithoutCollectionsInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    username_normalized?: string | null;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesCreateNestedOneWithoutUser_profilesInput;
    preferred_store?: Prisma.storesCreateNestedOneWithoutPreferred_by_usersInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesUncheckedCreateWithoutCollectionsInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    preferred_store_id?: string | null;
    username_normalized?: string | null;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedOneWithoutUser_profilesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesCreateOrConnectWithoutCollectionsInput = {
    where: Prisma.user_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutCollectionsInput, Prisma.user_profilesUncheckedCreateWithoutCollectionsInput>;
};
export type user_profilesUpsertWithoutCollectionsInput = {
    update: Prisma.XOR<Prisma.user_profilesUpdateWithoutCollectionsInput, Prisma.user_profilesUncheckedUpdateWithoutCollectionsInput>;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutCollectionsInput, Prisma.user_profilesUncheckedCreateWithoutCollectionsInput>;
    where?: Prisma.user_profilesWhereInput;
};
export type user_profilesUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: Prisma.user_profilesWhereInput;
    data: Prisma.XOR<Prisma.user_profilesUpdateWithoutCollectionsInput, Prisma.user_profilesUncheckedUpdateWithoutCollectionsInput>;
};
export type user_profilesUpdateWithoutCollectionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateOneWithoutUser_profilesNestedInput;
    preferred_store?: Prisma.storesUpdateOneWithoutPreferred_by_usersNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesUncheckedUpdateWithoutCollectionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateOneWithoutUser_profilesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesCreateWithoutInventory_item_interestsInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    username_normalized?: string | null;
    collections?: Prisma.collectionsCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesCreateNestedOneWithoutUser_profilesInput;
    preferred_store?: Prisma.storesCreateNestedOneWithoutPreferred_by_usersInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesUncheckedCreateWithoutInventory_item_interestsInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    preferred_store_id?: string | null;
    username_normalized?: string | null;
    collections?: Prisma.collectionsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedOneWithoutUser_profilesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesCreateOrConnectWithoutInventory_item_interestsInput = {
    where: Prisma.user_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutInventory_item_interestsInput, Prisma.user_profilesUncheckedCreateWithoutInventory_item_interestsInput>;
};
export type user_profilesUpsertWithoutInventory_item_interestsInput = {
    update: Prisma.XOR<Prisma.user_profilesUpdateWithoutInventory_item_interestsInput, Prisma.user_profilesUncheckedUpdateWithoutInventory_item_interestsInput>;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutInventory_item_interestsInput, Prisma.user_profilesUncheckedCreateWithoutInventory_item_interestsInput>;
    where?: Prisma.user_profilesWhereInput;
};
export type user_profilesUpdateToOneWithWhereWithoutInventory_item_interestsInput = {
    where?: Prisma.user_profilesWhereInput;
    data: Prisma.XOR<Prisma.user_profilesUpdateWithoutInventory_item_interestsInput, Prisma.user_profilesUncheckedUpdateWithoutInventory_item_interestsInput>;
};
export type user_profilesUpdateWithoutInventory_item_interestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateOneWithoutUser_profilesNestedInput;
    preferred_store?: Prisma.storesUpdateOneWithoutPreferred_by_usersNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesUncheckedUpdateWithoutInventory_item_interestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateOneWithoutUser_profilesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesCreateWithoutInventory_itemsInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    username_normalized?: string | null;
    collections?: Prisma.collectionsCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesCreateNestedOneWithoutUser_profilesInput;
    preferred_store?: Prisma.storesCreateNestedOneWithoutPreferred_by_usersInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesUncheckedCreateWithoutInventory_itemsInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    preferred_store_id?: string | null;
    username_normalized?: string | null;
    collections?: Prisma.collectionsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedOneWithoutUser_profilesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesCreateOrConnectWithoutInventory_itemsInput = {
    where: Prisma.user_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutInventory_itemsInput, Prisma.user_profilesUncheckedCreateWithoutInventory_itemsInput>;
};
export type user_profilesUpsertWithoutInventory_itemsInput = {
    update: Prisma.XOR<Prisma.user_profilesUpdateWithoutInventory_itemsInput, Prisma.user_profilesUncheckedUpdateWithoutInventory_itemsInput>;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutInventory_itemsInput, Prisma.user_profilesUncheckedCreateWithoutInventory_itemsInput>;
    where?: Prisma.user_profilesWhereInput;
};
export type user_profilesUpdateToOneWithWhereWithoutInventory_itemsInput = {
    where?: Prisma.user_profilesWhereInput;
    data: Prisma.XOR<Prisma.user_profilesUpdateWithoutInventory_itemsInput, Prisma.user_profilesUncheckedUpdateWithoutInventory_itemsInput>;
};
export type user_profilesUpdateWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateOneWithoutUser_profilesNestedInput;
    preferred_store?: Prisma.storesUpdateOneWithoutPreferred_by_usersNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesUncheckedUpdateWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateOneWithoutUser_profilesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesCreateWithoutListing_offersInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    username_normalized?: string | null;
    collections?: Prisma.collectionsCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesCreateNestedOneWithoutUser_profilesInput;
    preferred_store?: Prisma.storesCreateNestedOneWithoutPreferred_by_usersInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesUncheckedCreateWithoutListing_offersInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    preferred_store_id?: string | null;
    username_normalized?: string | null;
    collections?: Prisma.collectionsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedOneWithoutUser_profilesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesCreateOrConnectWithoutListing_offersInput = {
    where: Prisma.user_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutListing_offersInput, Prisma.user_profilesUncheckedCreateWithoutListing_offersInput>;
};
export type user_profilesUpsertWithoutListing_offersInput = {
    update: Prisma.XOR<Prisma.user_profilesUpdateWithoutListing_offersInput, Prisma.user_profilesUncheckedUpdateWithoutListing_offersInput>;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutListing_offersInput, Prisma.user_profilesUncheckedCreateWithoutListing_offersInput>;
    where?: Prisma.user_profilesWhereInput;
};
export type user_profilesUpdateToOneWithWhereWithoutListing_offersInput = {
    where?: Prisma.user_profilesWhereInput;
    data: Prisma.XOR<Prisma.user_profilesUpdateWithoutListing_offersInput, Prisma.user_profilesUncheckedUpdateWithoutListing_offersInput>;
};
export type user_profilesUpdateWithoutListing_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateOneWithoutUser_profilesNestedInput;
    preferred_store?: Prisma.storesUpdateOneWithoutPreferred_by_usersNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesUncheckedUpdateWithoutListing_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateOneWithoutUser_profilesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesCreateWithoutStore_staffInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    username_normalized?: string | null;
    collections?: Prisma.collectionsCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesCreateNestedOneWithoutUser_profilesInput;
    preferred_store?: Prisma.storesCreateNestedOneWithoutPreferred_by_usersInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesUncheckedCreateWithoutStore_staffInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    preferred_store_id?: string | null;
    username_normalized?: string | null;
    collections?: Prisma.collectionsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedOneWithoutUser_profilesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesCreateOrConnectWithoutStore_staffInput = {
    where: Prisma.user_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutStore_staffInput, Prisma.user_profilesUncheckedCreateWithoutStore_staffInput>;
};
export type user_profilesUpsertWithoutStore_staffInput = {
    update: Prisma.XOR<Prisma.user_profilesUpdateWithoutStore_staffInput, Prisma.user_profilesUncheckedUpdateWithoutStore_staffInput>;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutStore_staffInput, Prisma.user_profilesUncheckedCreateWithoutStore_staffInput>;
    where?: Prisma.user_profilesWhereInput;
};
export type user_profilesUpdateToOneWithWhereWithoutStore_staffInput = {
    where?: Prisma.user_profilesWhereInput;
    data: Prisma.XOR<Prisma.user_profilesUpdateWithoutStore_staffInput, Prisma.user_profilesUncheckedUpdateWithoutStore_staffInput>;
};
export type user_profilesUpdateWithoutStore_staffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateOneWithoutUser_profilesNestedInput;
    preferred_store?: Prisma.storesUpdateOneWithoutPreferred_by_usersNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesUncheckedUpdateWithoutStore_staffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateOneWithoutUser_profilesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesCreateWithoutPreferred_storeInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    username_normalized?: string | null;
    collections?: Prisma.collectionsCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesCreateNestedOneWithoutUser_profilesInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesUncheckedCreateWithoutPreferred_storeInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    username_normalized?: string | null;
    collections?: Prisma.collectionsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedOneWithoutUser_profilesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesCreateOrConnectWithoutPreferred_storeInput = {
    where: Prisma.user_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutPreferred_storeInput, Prisma.user_profilesUncheckedCreateWithoutPreferred_storeInput>;
};
export type user_profilesCreateManyPreferred_storeInputEnvelope = {
    data: Prisma.user_profilesCreateManyPreferred_storeInput | Prisma.user_profilesCreateManyPreferred_storeInput[];
    skipDuplicates?: boolean;
};
export type user_profilesUpsertWithWhereUniqueWithoutPreferred_storeInput = {
    where: Prisma.user_profilesWhereUniqueInput;
    update: Prisma.XOR<Prisma.user_profilesUpdateWithoutPreferred_storeInput, Prisma.user_profilesUncheckedUpdateWithoutPreferred_storeInput>;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutPreferred_storeInput, Prisma.user_profilesUncheckedCreateWithoutPreferred_storeInput>;
};
export type user_profilesUpdateWithWhereUniqueWithoutPreferred_storeInput = {
    where: Prisma.user_profilesWhereUniqueInput;
    data: Prisma.XOR<Prisma.user_profilesUpdateWithoutPreferred_storeInput, Prisma.user_profilesUncheckedUpdateWithoutPreferred_storeInput>;
};
export type user_profilesUpdateManyWithWhereWithoutPreferred_storeInput = {
    where: Prisma.user_profilesScalarWhereInput;
    data: Prisma.XOR<Prisma.user_profilesUpdateManyMutationInput, Prisma.user_profilesUncheckedUpdateManyWithoutPreferred_storeInput>;
};
export type user_profilesScalarWhereInput = {
    AND?: Prisma.user_profilesScalarWhereInput | Prisma.user_profilesScalarWhereInput[];
    OR?: Prisma.user_profilesScalarWhereInput[];
    NOT?: Prisma.user_profilesScalarWhereInput | Prisma.user_profilesScalarWhereInput[];
    id?: Prisma.UuidFilter<"user_profiles"> | string;
    auth_provider?: Prisma.StringFilter<"user_profiles"> | string;
    auth_user_id?: Prisma.StringFilter<"user_profiles"> | string;
    email?: Prisma.StringFilter<"user_profiles"> | string;
    username?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    display_name?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    avatar_url?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
    status?: Prisma.StringFilter<"user_profiles"> | string;
    created_at?: Prisma.DateTimeFilter<"user_profiles"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"user_profiles"> | Date | string;
    preferred_store_id?: Prisma.UuidNullableFilter<"user_profiles"> | string | null;
    username_normalized?: Prisma.StringNullableFilter<"user_profiles"> | string | null;
};
export type user_profilesCreateWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    username_normalized?: string | null;
    collections?: Prisma.collectionsCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesCreateNestedOneWithoutUser_profilesInput;
    preferred_store?: Prisma.storesCreateNestedOneWithoutPreferred_by_usersInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesUncheckedCreateWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    preferred_store_id?: string | null;
    username_normalized?: string | null;
    collections?: Prisma.collectionsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedOneWithoutUser_profilesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesCreateOrConnectWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput = {
    where: Prisma.user_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput, Prisma.user_profilesUncheckedCreateWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput>;
};
export type user_profilesCreateWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    username_normalized?: string | null;
    collections?: Prisma.collectionsCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesCreateNestedOneWithoutUser_profilesInput;
    preferred_store?: Prisma.storesCreateNestedOneWithoutPreferred_by_usersInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesUncheckedCreateWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    preferred_store_id?: string | null;
    username_normalized?: string | null;
    collections?: Prisma.collectionsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedOneWithoutUser_profilesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesCreateOrConnectWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput = {
    where: Prisma.user_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput, Prisma.user_profilesUncheckedCreateWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput>;
};
export type user_profilesUpsertWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput = {
    update: Prisma.XOR<Prisma.user_profilesUpdateWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput, Prisma.user_profilesUncheckedUpdateWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput>;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput, Prisma.user_profilesUncheckedCreateWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput>;
    where?: Prisma.user_profilesWhereInput;
};
export type user_profilesUpdateToOneWithWhereWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput = {
    where?: Prisma.user_profilesWhereInput;
    data: Prisma.XOR<Prisma.user_profilesUpdateWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput, Prisma.user_profilesUncheckedUpdateWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput>;
};
export type user_profilesUpdateWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateOneWithoutUser_profilesNestedInput;
    preferred_store?: Prisma.storesUpdateOneWithoutPreferred_by_usersNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesUncheckedUpdateWithoutTransaction_items_transaction_items_from_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateOneWithoutUser_profilesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesUpsertWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput = {
    update: Prisma.XOR<Prisma.user_profilesUpdateWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput, Prisma.user_profilesUncheckedUpdateWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput>;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput, Prisma.user_profilesUncheckedCreateWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput>;
    where?: Prisma.user_profilesWhereInput;
};
export type user_profilesUpdateToOneWithWhereWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput = {
    where?: Prisma.user_profilesWhereInput;
    data: Prisma.XOR<Prisma.user_profilesUpdateWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput, Prisma.user_profilesUncheckedUpdateWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput>;
};
export type user_profilesUpdateWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateOneWithoutUser_profilesNestedInput;
    preferred_store?: Prisma.storesUpdateOneWithoutPreferred_by_usersNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesUncheckedUpdateWithoutTransaction_items_transaction_items_to_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateOneWithoutUser_profilesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesCreateWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    username_normalized?: string | null;
    collections?: Prisma.collectionsCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesCreateNestedOneWithoutUser_profilesInput;
    preferred_store?: Prisma.storesCreateNestedOneWithoutPreferred_by_usersInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesUncheckedCreateWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    preferred_store_id?: string | null;
    username_normalized?: string | null;
    collections?: Prisma.collectionsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedOneWithoutUser_profilesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesCreateOrConnectWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput = {
    where: Prisma.user_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput, Prisma.user_profilesUncheckedCreateWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput>;
};
export type user_profilesCreateWithoutTransactions_transactions_seller_user_idTouser_profilesInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    username_normalized?: string | null;
    collections?: Prisma.collectionsCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesCreateNestedOneWithoutUser_profilesInput;
    preferred_store?: Prisma.storesCreateNestedOneWithoutPreferred_by_usersInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesUncheckedCreateWithoutTransactions_transactions_seller_user_idTouser_profilesInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    preferred_store_id?: string | null;
    username_normalized?: string | null;
    collections?: Prisma.collectionsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedOneWithoutUser_profilesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesCreateOrConnectWithoutTransactions_transactions_seller_user_idTouser_profilesInput = {
    where: Prisma.user_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutTransactions_transactions_seller_user_idTouser_profilesInput, Prisma.user_profilesUncheckedCreateWithoutTransactions_transactions_seller_user_idTouser_profilesInput>;
};
export type user_profilesUpsertWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput = {
    update: Prisma.XOR<Prisma.user_profilesUpdateWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput, Prisma.user_profilesUncheckedUpdateWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput>;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput, Prisma.user_profilesUncheckedCreateWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput>;
    where?: Prisma.user_profilesWhereInput;
};
export type user_profilesUpdateToOneWithWhereWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput = {
    where?: Prisma.user_profilesWhereInput;
    data: Prisma.XOR<Prisma.user_profilesUpdateWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput, Prisma.user_profilesUncheckedUpdateWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput>;
};
export type user_profilesUpdateWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateOneWithoutUser_profilesNestedInput;
    preferred_store?: Prisma.storesUpdateOneWithoutPreferred_by_usersNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesUncheckedUpdateWithoutTransactions_transactions_counterparty_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateOneWithoutUser_profilesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesUpsertWithoutTransactions_transactions_seller_user_idTouser_profilesInput = {
    update: Prisma.XOR<Prisma.user_profilesUpdateWithoutTransactions_transactions_seller_user_idTouser_profilesInput, Prisma.user_profilesUncheckedUpdateWithoutTransactions_transactions_seller_user_idTouser_profilesInput>;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutTransactions_transactions_seller_user_idTouser_profilesInput, Prisma.user_profilesUncheckedCreateWithoutTransactions_transactions_seller_user_idTouser_profilesInput>;
    where?: Prisma.user_profilesWhereInput;
};
export type user_profilesUpdateToOneWithWhereWithoutTransactions_transactions_seller_user_idTouser_profilesInput = {
    where?: Prisma.user_profilesWhereInput;
    data: Prisma.XOR<Prisma.user_profilesUpdateWithoutTransactions_transactions_seller_user_idTouser_profilesInput, Prisma.user_profilesUncheckedUpdateWithoutTransactions_transactions_seller_user_idTouser_profilesInput>;
};
export type user_profilesUpdateWithoutTransactions_transactions_seller_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateOneWithoutUser_profilesNestedInput;
    preferred_store?: Prisma.storesUpdateOneWithoutPreferred_by_usersNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesUncheckedUpdateWithoutTransactions_transactions_seller_user_idTouser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateOneWithoutUser_profilesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesCreateWithoutWishlist_offersInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    username_normalized?: string | null;
    collections?: Prisma.collectionsCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesCreateNestedOneWithoutUser_profilesInput;
    preferred_store?: Prisma.storesCreateNestedOneWithoutPreferred_by_usersInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesUncheckedCreateWithoutWishlist_offersInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    preferred_store_id?: string | null;
    username_normalized?: string | null;
    collections?: Prisma.collectionsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedOneWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesCreateOrConnectWithoutWishlist_offersInput = {
    where: Prisma.user_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutWishlist_offersInput, Prisma.user_profilesUncheckedCreateWithoutWishlist_offersInput>;
};
export type user_profilesUpsertWithoutWishlist_offersInput = {
    update: Prisma.XOR<Prisma.user_profilesUpdateWithoutWishlist_offersInput, Prisma.user_profilesUncheckedUpdateWithoutWishlist_offersInput>;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutWishlist_offersInput, Prisma.user_profilesUncheckedCreateWithoutWishlist_offersInput>;
    where?: Prisma.user_profilesWhereInput;
};
export type user_profilesUpdateToOneWithWhereWithoutWishlist_offersInput = {
    where?: Prisma.user_profilesWhereInput;
    data: Prisma.XOR<Prisma.user_profilesUpdateWithoutWishlist_offersInput, Prisma.user_profilesUncheckedUpdateWithoutWishlist_offersInput>;
};
export type user_profilesUpdateWithoutWishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateOneWithoutUser_profilesNestedInput;
    preferred_store?: Prisma.storesUpdateOneWithoutPreferred_by_usersNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesUncheckedUpdateWithoutWishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateOneWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesCreateWithoutWishlistsInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    username_normalized?: string | null;
    collections?: Prisma.collectionsCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesCreateNestedOneWithoutUser_profilesInput;
    preferred_store?: Prisma.storesCreateNestedOneWithoutPreferred_by_usersInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesUncheckedCreateWithoutWishlistsInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    preferred_store_id?: string | null;
    username_normalized?: string | null;
    collections?: Prisma.collectionsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedOneWithoutUser_profilesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesCreateOrConnectWithoutWishlistsInput = {
    where: Prisma.user_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutWishlistsInput, Prisma.user_profilesUncheckedCreateWithoutWishlistsInput>;
};
export type user_profilesUpsertWithoutWishlistsInput = {
    update: Prisma.XOR<Prisma.user_profilesUpdateWithoutWishlistsInput, Prisma.user_profilesUncheckedUpdateWithoutWishlistsInput>;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutWishlistsInput, Prisma.user_profilesUncheckedCreateWithoutWishlistsInput>;
    where?: Prisma.user_profilesWhereInput;
};
export type user_profilesUpdateToOneWithWhereWithoutWishlistsInput = {
    where?: Prisma.user_profilesWhereInput;
    data: Prisma.XOR<Prisma.user_profilesUpdateWithoutWishlistsInput, Prisma.user_profilesUncheckedUpdateWithoutWishlistsInput>;
};
export type user_profilesUpdateWithoutWishlistsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateOneWithoutUser_profilesNestedInput;
    preferred_store?: Prisma.storesUpdateOneWithoutPreferred_by_usersNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesUncheckedUpdateWithoutWishlistsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateOneWithoutUser_profilesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesCreateWithoutUser_preferencesInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    username_normalized?: string | null;
    collections?: Prisma.collectionsCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    preferred_store?: Prisma.storesCreateNestedOneWithoutPreferred_by_usersInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesUncheckedCreateWithoutUser_preferencesInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    preferred_store_id?: string | null;
    username_normalized?: string | null;
    collections?: Prisma.collectionsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutUser_profilesInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutUser_profilesInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutUser_profilesInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedCreateNestedManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutUser_profilesInput;
    wishlists?: Prisma.wishlistsUncheckedCreateNestedManyWithoutUser_profilesInput;
};
export type user_profilesCreateOrConnectWithoutUser_preferencesInput = {
    where: Prisma.user_profilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutUser_preferencesInput, Prisma.user_profilesUncheckedCreateWithoutUser_preferencesInput>;
};
export type user_profilesUpsertWithoutUser_preferencesInput = {
    update: Prisma.XOR<Prisma.user_profilesUpdateWithoutUser_preferencesInput, Prisma.user_profilesUncheckedUpdateWithoutUser_preferencesInput>;
    create: Prisma.XOR<Prisma.user_profilesCreateWithoutUser_preferencesInput, Prisma.user_profilesUncheckedCreateWithoutUser_preferencesInput>;
    where?: Prisma.user_profilesWhereInput;
};
export type user_profilesUpdateToOneWithWhereWithoutUser_preferencesInput = {
    where?: Prisma.user_profilesWhereInput;
    data: Prisma.XOR<Prisma.user_profilesUpdateWithoutUser_preferencesInput, Prisma.user_profilesUncheckedUpdateWithoutUser_preferencesInput>;
};
export type user_profilesUpdateWithoutUser_preferencesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    preferred_store?: Prisma.storesUpdateOneWithoutPreferred_by_usersNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesUncheckedUpdateWithoutUser_preferencesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesCreateManyPreferred_storeInput = {
    id?: string;
    auth_provider?: string;
    auth_user_id: string;
    email: string;
    username?: string | null;
    display_name?: string | null;
    avatar_url?: string | null;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    username_normalized?: string | null;
};
export type user_profilesUpdateWithoutPreferred_storeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateOneWithoutUser_profilesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesUncheckedUpdateWithoutPreferred_storeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collections?: Prisma.collectionsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutUser_profilesNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutUser_profilesNestedInput;
    transaction_items_transaction_items_from_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_from_user_idTouser_profilesNestedInput;
    transaction_items_transaction_items_to_user_idTouser_profiles?: Prisma.transaction_itemsUncheckedUpdateManyWithoutUser_profiles_transaction_items_to_user_idTouser_profilesNestedInput;
    transactions_transactions_counterparty_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_counterparty_user_idTouser_profilesNestedInput;
    transactions_transactions_seller_user_idTouser_profiles?: Prisma.transactionsUncheckedUpdateManyWithoutUser_profiles_transactions_seller_user_idTouser_profilesNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateOneWithoutUser_profilesNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutUser_profilesNestedInput;
    wishlists?: Prisma.wishlistsUncheckedUpdateManyWithoutUser_profilesNestedInput;
};
export type user_profilesUncheckedUpdateManyWithoutPreferred_storeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_provider?: Prisma.StringFieldUpdateOperationsInput | string;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    display_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    username_normalized?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type User_profilesCountOutputType
 */
export type User_profilesCountOutputType = {
    collections: number;
    inventory_item_interests: number;
    inventory_items: number;
    listing_offers: number;
    store_staff: number;
    transaction_items_transaction_items_from_user_idTouser_profiles: number;
    transaction_items_transaction_items_to_user_idTouser_profiles: number;
    transactions_transactions_counterparty_user_idTouser_profiles: number;
    transactions_transactions_seller_user_idTouser_profiles: number;
    wishlist_offers: number;
    wishlists: number;
};
export type User_profilesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    collections?: boolean | User_profilesCountOutputTypeCountCollectionsArgs;
    inventory_item_interests?: boolean | User_profilesCountOutputTypeCountInventory_item_interestsArgs;
    inventory_items?: boolean | User_profilesCountOutputTypeCountInventory_itemsArgs;
    listing_offers?: boolean | User_profilesCountOutputTypeCountListing_offersArgs;
    store_staff?: boolean | User_profilesCountOutputTypeCountStore_staffArgs;
    transaction_items_transaction_items_from_user_idTouser_profiles?: boolean | User_profilesCountOutputTypeCountTransaction_items_transaction_items_from_user_idTouser_profilesArgs;
    transaction_items_transaction_items_to_user_idTouser_profiles?: boolean | User_profilesCountOutputTypeCountTransaction_items_transaction_items_to_user_idTouser_profilesArgs;
    transactions_transactions_counterparty_user_idTouser_profiles?: boolean | User_profilesCountOutputTypeCountTransactions_transactions_counterparty_user_idTouser_profilesArgs;
    transactions_transactions_seller_user_idTouser_profiles?: boolean | User_profilesCountOutputTypeCountTransactions_transactions_seller_user_idTouser_profilesArgs;
    wishlist_offers?: boolean | User_profilesCountOutputTypeCountWishlist_offersArgs;
    wishlists?: boolean | User_profilesCountOutputTypeCountWishlistsArgs;
};
/**
 * User_profilesCountOutputType without action
 */
export type User_profilesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_profilesCountOutputType
     */
    select?: Prisma.User_profilesCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * User_profilesCountOutputType without action
 */
export type User_profilesCountOutputTypeCountCollectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.collectionsWhereInput;
};
/**
 * User_profilesCountOutputType without action
 */
export type User_profilesCountOutputTypeCountInventory_item_interestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventory_item_interestsWhereInput;
};
/**
 * User_profilesCountOutputType without action
 */
export type User_profilesCountOutputTypeCountInventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventory_itemsWhereInput;
};
/**
 * User_profilesCountOutputType without action
 */
export type User_profilesCountOutputTypeCountListing_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listing_offersWhereInput;
};
/**
 * User_profilesCountOutputType without action
 */
export type User_profilesCountOutputTypeCountStore_staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.store_staffWhereInput;
};
/**
 * User_profilesCountOutputType without action
 */
export type User_profilesCountOutputTypeCountTransaction_items_transaction_items_from_user_idTouser_profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transaction_itemsWhereInput;
};
/**
 * User_profilesCountOutputType without action
 */
export type User_profilesCountOutputTypeCountTransaction_items_transaction_items_to_user_idTouser_profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transaction_itemsWhereInput;
};
/**
 * User_profilesCountOutputType without action
 */
export type User_profilesCountOutputTypeCountTransactions_transactions_counterparty_user_idTouser_profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transactionsWhereInput;
};
/**
 * User_profilesCountOutputType without action
 */
export type User_profilesCountOutputTypeCountTransactions_transactions_seller_user_idTouser_profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transactionsWhereInput;
};
/**
 * User_profilesCountOutputType without action
 */
export type User_profilesCountOutputTypeCountWishlist_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_offersWhereInput;
};
/**
 * User_profilesCountOutputType without action
 */
export type User_profilesCountOutputTypeCountWishlistsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlistsWhereInput;
};
export type user_profilesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    auth_provider?: boolean;
    auth_user_id?: boolean;
    email?: boolean;
    username?: boolean;
    display_name?: boolean;
    avatar_url?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    preferred_store_id?: boolean;
    username_normalized?: boolean;
    collections?: boolean | Prisma.user_profiles$collectionsArgs<ExtArgs>;
    inventory_item_interests?: boolean | Prisma.user_profiles$inventory_item_interestsArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.user_profiles$inventory_itemsArgs<ExtArgs>;
    listing_offers?: boolean | Prisma.user_profiles$listing_offersArgs<ExtArgs>;
    store_staff?: boolean | Prisma.user_profiles$store_staffArgs<ExtArgs>;
    transaction_items_transaction_items_from_user_idTouser_profiles?: boolean | Prisma.user_profiles$transaction_items_transaction_items_from_user_idTouser_profilesArgs<ExtArgs>;
    transaction_items_transaction_items_to_user_idTouser_profiles?: boolean | Prisma.user_profiles$transaction_items_transaction_items_to_user_idTouser_profilesArgs<ExtArgs>;
    transactions_transactions_counterparty_user_idTouser_profiles?: boolean | Prisma.user_profiles$transactions_transactions_counterparty_user_idTouser_profilesArgs<ExtArgs>;
    transactions_transactions_seller_user_idTouser_profiles?: boolean | Prisma.user_profiles$transactions_transactions_seller_user_idTouser_profilesArgs<ExtArgs>;
    user_preferences?: boolean | Prisma.user_profiles$user_preferencesArgs<ExtArgs>;
    preferred_store?: boolean | Prisma.user_profiles$preferred_storeArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.user_profiles$wishlist_offersArgs<ExtArgs>;
    wishlists?: boolean | Prisma.user_profiles$wishlistsArgs<ExtArgs>;
    _count?: boolean | Prisma.User_profilesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_profiles"]>;
export type user_profilesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    auth_provider?: boolean;
    auth_user_id?: boolean;
    email?: boolean;
    username?: boolean;
    display_name?: boolean;
    avatar_url?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    preferred_store_id?: boolean;
    username_normalized?: boolean;
    preferred_store?: boolean | Prisma.user_profiles$preferred_storeArgs<ExtArgs>;
}, ExtArgs["result"]["user_profiles"]>;
export type user_profilesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    auth_provider?: boolean;
    auth_user_id?: boolean;
    email?: boolean;
    username?: boolean;
    display_name?: boolean;
    avatar_url?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    preferred_store_id?: boolean;
    username_normalized?: boolean;
    preferred_store?: boolean | Prisma.user_profiles$preferred_storeArgs<ExtArgs>;
}, ExtArgs["result"]["user_profiles"]>;
export type user_profilesSelectScalar = {
    id?: boolean;
    auth_provider?: boolean;
    auth_user_id?: boolean;
    email?: boolean;
    username?: boolean;
    display_name?: boolean;
    avatar_url?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    preferred_store_id?: boolean;
    username_normalized?: boolean;
};
export type user_profilesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "auth_provider" | "auth_user_id" | "email" | "username" | "display_name" | "avatar_url" | "status" | "created_at" | "updated_at" | "preferred_store_id" | "username_normalized", ExtArgs["result"]["user_profiles"]>;
export type user_profilesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    collections?: boolean | Prisma.user_profiles$collectionsArgs<ExtArgs>;
    inventory_item_interests?: boolean | Prisma.user_profiles$inventory_item_interestsArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.user_profiles$inventory_itemsArgs<ExtArgs>;
    listing_offers?: boolean | Prisma.user_profiles$listing_offersArgs<ExtArgs>;
    store_staff?: boolean | Prisma.user_profiles$store_staffArgs<ExtArgs>;
    transaction_items_transaction_items_from_user_idTouser_profiles?: boolean | Prisma.user_profiles$transaction_items_transaction_items_from_user_idTouser_profilesArgs<ExtArgs>;
    transaction_items_transaction_items_to_user_idTouser_profiles?: boolean | Prisma.user_profiles$transaction_items_transaction_items_to_user_idTouser_profilesArgs<ExtArgs>;
    transactions_transactions_counterparty_user_idTouser_profiles?: boolean | Prisma.user_profiles$transactions_transactions_counterparty_user_idTouser_profilesArgs<ExtArgs>;
    transactions_transactions_seller_user_idTouser_profiles?: boolean | Prisma.user_profiles$transactions_transactions_seller_user_idTouser_profilesArgs<ExtArgs>;
    user_preferences?: boolean | Prisma.user_profiles$user_preferencesArgs<ExtArgs>;
    preferred_store?: boolean | Prisma.user_profiles$preferred_storeArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.user_profiles$wishlist_offersArgs<ExtArgs>;
    wishlists?: boolean | Prisma.user_profiles$wishlistsArgs<ExtArgs>;
    _count?: boolean | Prisma.User_profilesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type user_profilesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    preferred_store?: boolean | Prisma.user_profiles$preferred_storeArgs<ExtArgs>;
};
export type user_profilesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    preferred_store?: boolean | Prisma.user_profiles$preferred_storeArgs<ExtArgs>;
};
export type $user_profilesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "user_profiles";
    objects: {
        collections: Prisma.$collectionsPayload<ExtArgs>[];
        inventory_item_interests: Prisma.$inventory_item_interestsPayload<ExtArgs>[];
        inventory_items: Prisma.$inventory_itemsPayload<ExtArgs>[];
        listing_offers: Prisma.$listing_offersPayload<ExtArgs>[];
        store_staff: Prisma.$store_staffPayload<ExtArgs>[];
        transaction_items_transaction_items_from_user_idTouser_profiles: Prisma.$transaction_itemsPayload<ExtArgs>[];
        transaction_items_transaction_items_to_user_idTouser_profiles: Prisma.$transaction_itemsPayload<ExtArgs>[];
        transactions_transactions_counterparty_user_idTouser_profiles: Prisma.$transactionsPayload<ExtArgs>[];
        transactions_transactions_seller_user_idTouser_profiles: Prisma.$transactionsPayload<ExtArgs>[];
        user_preferences: Prisma.$user_preferencesPayload<ExtArgs> | null;
        preferred_store: Prisma.$storesPayload<ExtArgs> | null;
        wishlist_offers: Prisma.$wishlist_offersPayload<ExtArgs>[];
        wishlists: Prisma.$wishlistsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        auth_provider: string;
        auth_user_id: string;
        email: string;
        username: string | null;
        display_name: string | null;
        avatar_url: string | null;
        status: string;
        created_at: Date;
        updated_at: Date;
        preferred_store_id: string | null;
        username_normalized: string | null;
    }, ExtArgs["result"]["user_profiles"]>;
    composites: {};
};
export type user_profilesGetPayload<S extends boolean | null | undefined | user_profilesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$user_profilesPayload, S>;
export type user_profilesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<user_profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: User_profilesCountAggregateInputType | true;
};
export interface user_profilesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['user_profiles'];
        meta: {
            name: 'user_profiles';
        };
    };
    /**
     * Find zero or one User_profiles that matches the filter.
     * @param {user_profilesFindUniqueArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_profilesFindUniqueArgs>(args: Prisma.SelectSubset<T, user_profilesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User_profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_profilesFindUniqueOrThrowArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_profilesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, user_profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesFindFirstArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_profilesFindFirstArgs>(args?: Prisma.SelectSubset<T, user_profilesFindFirstArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User_profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesFindFirstOrThrowArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_profilesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, user_profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more User_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_profiles
     * const user_profiles = await prisma.user_profiles.findMany()
     *
     * // Get first 10 User_profiles
     * const user_profiles = await prisma.user_profiles.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const user_profilesWithIdOnly = await prisma.user_profiles.findMany({ select: { id: true } })
     *
     */
    findMany<T extends user_profilesFindManyArgs>(args?: Prisma.SelectSubset<T, user_profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User_profiles.
     * @param {user_profilesCreateArgs} args - Arguments to create a User_profiles.
     * @example
     * // Create one User_profiles
     * const User_profiles = await prisma.user_profiles.create({
     *   data: {
     *     // ... data to create a User_profiles
     *   }
     * })
     *
     */
    create<T extends user_profilesCreateArgs>(args: Prisma.SelectSubset<T, user_profilesCreateArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many User_profiles.
     * @param {user_profilesCreateManyArgs} args - Arguments to create many User_profiles.
     * @example
     * // Create many User_profiles
     * const user_profiles = await prisma.user_profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends user_profilesCreateManyArgs>(args?: Prisma.SelectSubset<T, user_profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many User_profiles and returns the data saved in the database.
     * @param {user_profilesCreateManyAndReturnArgs} args - Arguments to create many User_profiles.
     * @example
     * // Create many User_profiles
     * const user_profiles = await prisma.user_profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many User_profiles and only return the `id`
     * const user_profilesWithIdOnly = await prisma.user_profiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends user_profilesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, user_profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a User_profiles.
     * @param {user_profilesDeleteArgs} args - Arguments to delete one User_profiles.
     * @example
     * // Delete one User_profiles
     * const User_profiles = await prisma.user_profiles.delete({
     *   where: {
     *     // ... filter to delete one User_profiles
     *   }
     * })
     *
     */
    delete<T extends user_profilesDeleteArgs>(args: Prisma.SelectSubset<T, user_profilesDeleteArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User_profiles.
     * @param {user_profilesUpdateArgs} args - Arguments to update one User_profiles.
     * @example
     * // Update one User_profiles
     * const user_profiles = await prisma.user_profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends user_profilesUpdateArgs>(args: Prisma.SelectSubset<T, user_profilesUpdateArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more User_profiles.
     * @param {user_profilesDeleteManyArgs} args - Arguments to filter User_profiles to delete.
     * @example
     * // Delete a few User_profiles
     * const { count } = await prisma.user_profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends user_profilesDeleteManyArgs>(args?: Prisma.SelectSubset<T, user_profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_profiles
     * const user_profiles = await prisma.user_profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends user_profilesUpdateManyArgs>(args: Prisma.SelectSubset<T, user_profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more User_profiles and returns the data updated in the database.
     * @param {user_profilesUpdateManyAndReturnArgs} args - Arguments to update many User_profiles.
     * @example
     * // Update many User_profiles
     * const user_profiles = await prisma.user_profiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more User_profiles and only return the `id`
     * const user_profilesWithIdOnly = await prisma.user_profiles.updateManyAndReturn({
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
    updateManyAndReturn<T extends user_profilesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, user_profilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one User_profiles.
     * @param {user_profilesUpsertArgs} args - Arguments to update or create a User_profiles.
     * @example
     * // Update or create a User_profiles
     * const user_profiles = await prisma.user_profiles.upsert({
     *   create: {
     *     // ... data to create a User_profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_profiles we want to update
     *   }
     * })
     */
    upsert<T extends user_profilesUpsertArgs>(args: Prisma.SelectSubset<T, user_profilesUpsertArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesCountArgs} args - Arguments to filter User_profiles to count.
     * @example
     * // Count the number of User_profiles
     * const count = await prisma.user_profiles.count({
     *   where: {
     *     // ... the filter for the User_profiles we want to count
     *   }
     * })
    **/
    count<T extends user_profilesCountArgs>(args?: Prisma.Subset<T, user_profilesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], User_profilesCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_profilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_profilesAggregateArgs>(args: Prisma.Subset<T, User_profilesAggregateArgs>): Prisma.PrismaPromise<GetUser_profilesAggregateType<T>>;
    /**
     * Group by User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends user_profilesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: user_profilesGroupByArgs['orderBy'];
    } : {
        orderBy?: user_profilesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, user_profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_profilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user_profiles model
     */
    readonly fields: user_profilesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for user_profiles.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__user_profilesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    collections<T extends Prisma.user_profiles$collectionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user_profiles$collectionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    inventory_item_interests<T extends Prisma.user_profiles$inventory_item_interestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user_profiles$inventory_item_interestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_item_interestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    inventory_items<T extends Prisma.user_profiles$inventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user_profiles$inventory_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    listing_offers<T extends Prisma.user_profiles$listing_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user_profiles$listing_offersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    store_staff<T extends Prisma.user_profiles$store_staffArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user_profiles$store_staffArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$store_staffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transaction_items_transaction_items_from_user_idTouser_profiles<T extends Prisma.user_profiles$transaction_items_transaction_items_from_user_idTouser_profilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user_profiles$transaction_items_transaction_items_from_user_idTouser_profilesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transaction_items_transaction_items_to_user_idTouser_profiles<T extends Prisma.user_profiles$transaction_items_transaction_items_to_user_idTouser_profilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user_profiles$transaction_items_transaction_items_to_user_idTouser_profilesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transactions_transactions_counterparty_user_idTouser_profiles<T extends Prisma.user_profiles$transactions_transactions_counterparty_user_idTouser_profilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user_profiles$transactions_transactions_counterparty_user_idTouser_profilesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transactions_transactions_seller_user_idTouser_profiles<T extends Prisma.user_profiles$transactions_transactions_seller_user_idTouser_profilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user_profiles$transactions_transactions_seller_user_idTouser_profilesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user_preferences<T extends Prisma.user_profiles$user_preferencesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user_profiles$user_preferencesArgs<ExtArgs>>): Prisma.Prisma__user_preferencesClient<runtime.Types.Result.GetResult<Prisma.$user_preferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    preferred_store<T extends Prisma.user_profiles$preferred_storeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user_profiles$preferred_storeArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    wishlist_offers<T extends Prisma.user_profiles$wishlist_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user_profiles$wishlist_offersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlists<T extends Prisma.user_profiles$wishlistsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user_profiles$wishlistsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the user_profiles model
 */
export interface user_profilesFieldRefs {
    readonly id: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly auth_provider: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly auth_user_id: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly email: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly username: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly display_name: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly avatar_url: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly status: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly created_at: Prisma.FieldRef<"user_profiles", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"user_profiles", 'DateTime'>;
    readonly preferred_store_id: Prisma.FieldRef<"user_profiles", 'String'>;
    readonly username_normalized: Prisma.FieldRef<"user_profiles", 'String'>;
}
/**
 * user_profiles findUnique
 */
export type user_profilesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which user_profiles to fetch.
     */
    where: Prisma.user_profilesWhereUniqueInput;
};
/**
 * user_profiles findUniqueOrThrow
 */
export type user_profilesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which user_profiles to fetch.
     */
    where: Prisma.user_profilesWhereUniqueInput;
};
/**
 * user_profiles findFirst
 */
export type user_profilesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which user_profiles to fetch.
     */
    where?: Prisma.user_profilesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: Prisma.user_profilesOrderByWithRelationInput | Prisma.user_profilesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for user_profiles.
     */
    cursor?: Prisma.user_profilesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of user_profiles.
     */
    distinct?: Prisma.User_profilesScalarFieldEnum | Prisma.User_profilesScalarFieldEnum[];
};
/**
 * user_profiles findFirstOrThrow
 */
export type user_profilesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which user_profiles to fetch.
     */
    where?: Prisma.user_profilesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: Prisma.user_profilesOrderByWithRelationInput | Prisma.user_profilesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for user_profiles.
     */
    cursor?: Prisma.user_profilesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of user_profiles.
     */
    distinct?: Prisma.User_profilesScalarFieldEnum | Prisma.User_profilesScalarFieldEnum[];
};
/**
 * user_profiles findMany
 */
export type user_profilesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which user_profiles to fetch.
     */
    where?: Prisma.user_profilesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: Prisma.user_profilesOrderByWithRelationInput | Prisma.user_profilesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing user_profiles.
     */
    cursor?: Prisma.user_profilesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of user_profiles.
     */
    distinct?: Prisma.User_profilesScalarFieldEnum | Prisma.User_profilesScalarFieldEnum[];
};
/**
 * user_profiles create
 */
export type user_profilesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a user_profiles.
     */
    data: Prisma.XOR<Prisma.user_profilesCreateInput, Prisma.user_profilesUncheckedCreateInput>;
};
/**
 * user_profiles createMany
 */
export type user_profilesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_profiles.
     */
    data: Prisma.user_profilesCreateManyInput | Prisma.user_profilesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * user_profiles createManyAndReturn
 */
export type user_profilesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: Prisma.user_profilesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    /**
     * The data used to create many user_profiles.
     */
    data: Prisma.user_profilesCreateManyInput | Prisma.user_profilesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.user_profilesIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * user_profiles update
 */
export type user_profilesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a user_profiles.
     */
    data: Prisma.XOR<Prisma.user_profilesUpdateInput, Prisma.user_profilesUncheckedUpdateInput>;
    /**
     * Choose, which user_profiles to update.
     */
    where: Prisma.user_profilesWhereUniqueInput;
};
/**
 * user_profiles updateMany
 */
export type user_profilesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update user_profiles.
     */
    data: Prisma.XOR<Prisma.user_profilesUpdateManyMutationInput, Prisma.user_profilesUncheckedUpdateManyInput>;
    /**
     * Filter which user_profiles to update
     */
    where?: Prisma.user_profilesWhereInput;
    /**
     * Limit how many user_profiles to update.
     */
    limit?: number;
};
/**
 * user_profiles updateManyAndReturn
 */
export type user_profilesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: Prisma.user_profilesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: Prisma.user_profilesOmit<ExtArgs> | null;
    /**
     * The data used to update user_profiles.
     */
    data: Prisma.XOR<Prisma.user_profilesUpdateManyMutationInput, Prisma.user_profilesUncheckedUpdateManyInput>;
    /**
     * Filter which user_profiles to update
     */
    where?: Prisma.user_profilesWhereInput;
    /**
     * Limit how many user_profiles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.user_profilesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * user_profiles upsert
 */
export type user_profilesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the user_profiles to update in case it exists.
     */
    where: Prisma.user_profilesWhereUniqueInput;
    /**
     * In case the user_profiles found by the `where` argument doesn't exist, create a new user_profiles with this data.
     */
    create: Prisma.XOR<Prisma.user_profilesCreateInput, Prisma.user_profilesUncheckedCreateInput>;
    /**
     * In case the user_profiles was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.user_profilesUpdateInput, Prisma.user_profilesUncheckedUpdateInput>;
};
/**
 * user_profiles delete
 */
export type user_profilesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which user_profiles to delete.
     */
    where: Prisma.user_profilesWhereUniqueInput;
};
/**
 * user_profiles deleteMany
 */
export type user_profilesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which user_profiles to delete
     */
    where?: Prisma.user_profilesWhereInput;
    /**
     * Limit how many user_profiles to delete.
     */
    limit?: number;
};
/**
 * user_profiles.collections
 */
export type user_profiles$collectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collections
     */
    select?: Prisma.collectionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the collections
     */
    omit?: Prisma.collectionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.collectionsInclude<ExtArgs> | null;
    where?: Prisma.collectionsWhereInput;
    orderBy?: Prisma.collectionsOrderByWithRelationInput | Prisma.collectionsOrderByWithRelationInput[];
    cursor?: Prisma.collectionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CollectionsScalarFieldEnum | Prisma.CollectionsScalarFieldEnum[];
};
/**
 * user_profiles.inventory_item_interests
 */
export type user_profiles$inventory_item_interestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * user_profiles.inventory_items
 */
export type user_profiles$inventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.inventory_itemsOrderByWithRelationInput | Prisma.inventory_itemsOrderByWithRelationInput[];
    cursor?: Prisma.inventory_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Inventory_itemsScalarFieldEnum | Prisma.Inventory_itemsScalarFieldEnum[];
};
/**
 * user_profiles.listing_offers
 */
export type user_profiles$listing_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * user_profiles.store_staff
 */
export type user_profiles$store_staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the store_staff
     */
    select?: Prisma.store_staffSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the store_staff
     */
    omit?: Prisma.store_staffOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.store_staffInclude<ExtArgs> | null;
    where?: Prisma.store_staffWhereInput;
    orderBy?: Prisma.store_staffOrderByWithRelationInput | Prisma.store_staffOrderByWithRelationInput[];
    cursor?: Prisma.store_staffWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Store_staffScalarFieldEnum | Prisma.Store_staffScalarFieldEnum[];
};
/**
 * user_profiles.transaction_items_transaction_items_from_user_idTouser_profiles
 */
export type user_profiles$transaction_items_transaction_items_from_user_idTouser_profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * user_profiles.transaction_items_transaction_items_to_user_idTouser_profiles
 */
export type user_profiles$transaction_items_transaction_items_to_user_idTouser_profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * user_profiles.transactions_transactions_counterparty_user_idTouser_profiles
 */
export type user_profiles$transactions_transactions_counterparty_user_idTouser_profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * user_profiles.transactions_transactions_seller_user_idTouser_profiles
 */
export type user_profiles$transactions_transactions_seller_user_idTouser_profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * user_profiles.user_preferences
 */
export type user_profiles$user_preferencesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_preferences
     */
    select?: Prisma.user_preferencesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user_preferences
     */
    omit?: Prisma.user_preferencesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.user_preferencesInclude<ExtArgs> | null;
    where?: Prisma.user_preferencesWhereInput;
};
/**
 * user_profiles.preferred_store
 */
export type user_profiles$preferred_storeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * user_profiles.wishlist_offers
 */
export type user_profiles$wishlist_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * user_profiles.wishlists
 */
export type user_profiles$wishlistsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlists
     */
    select?: Prisma.wishlistsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlists
     */
    omit?: Prisma.wishlistsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlistsInclude<ExtArgs> | null;
    where?: Prisma.wishlistsWhereInput;
    orderBy?: Prisma.wishlistsOrderByWithRelationInput | Prisma.wishlistsOrderByWithRelationInput[];
    cursor?: Prisma.wishlistsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WishlistsScalarFieldEnum | Prisma.WishlistsScalarFieldEnum[];
};
/**
 * user_profiles without action
 */
export type user_profilesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
