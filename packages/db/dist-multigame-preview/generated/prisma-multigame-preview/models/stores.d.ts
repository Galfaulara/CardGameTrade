import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model stores
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type storesModel = runtime.Types.Result.DefaultSelection<Prisma.$storesPayload>;
export type AggregateStores = {
    _count: StoresCountAggregateOutputType | null;
    _min: StoresMinAggregateOutputType | null;
    _max: StoresMaxAggregateOutputType | null;
};
export type StoresMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    logo_url: string | null;
    banner_url: string | null;
    email: string | null;
    phone: string | null;
    website_url: string | null;
    address_line1: string | null;
    address_line2: string | null;
    city: string | null;
    state_region: string | null;
    postal_code: string | null;
    country_code: string | null;
    verification_status: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    trade_mediation_enabled: boolean | null;
};
export type StoresMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    logo_url: string | null;
    banner_url: string | null;
    email: string | null;
    phone: string | null;
    website_url: string | null;
    address_line1: string | null;
    address_line2: string | null;
    city: string | null;
    state_region: string | null;
    postal_code: string | null;
    country_code: string | null;
    verification_status: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    trade_mediation_enabled: boolean | null;
};
export type StoresCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    description: number;
    logo_url: number;
    banner_url: number;
    email: number;
    phone: number;
    website_url: number;
    address_line1: number;
    address_line2: number;
    city: number;
    state_region: number;
    postal_code: number;
    country_code: number;
    verification_status: number;
    status: number;
    created_at: number;
    updated_at: number;
    trade_mediation_enabled: number;
    _all: number;
};
export type StoresMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    description?: true;
    logo_url?: true;
    banner_url?: true;
    email?: true;
    phone?: true;
    website_url?: true;
    address_line1?: true;
    address_line2?: true;
    city?: true;
    state_region?: true;
    postal_code?: true;
    country_code?: true;
    verification_status?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    trade_mediation_enabled?: true;
};
export type StoresMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    description?: true;
    logo_url?: true;
    banner_url?: true;
    email?: true;
    phone?: true;
    website_url?: true;
    address_line1?: true;
    address_line2?: true;
    city?: true;
    state_region?: true;
    postal_code?: true;
    country_code?: true;
    verification_status?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    trade_mediation_enabled?: true;
};
export type StoresCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    description?: true;
    logo_url?: true;
    banner_url?: true;
    email?: true;
    phone?: true;
    website_url?: true;
    address_line1?: true;
    address_line2?: true;
    city?: true;
    state_region?: true;
    postal_code?: true;
    country_code?: true;
    verification_status?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    trade_mediation_enabled?: true;
    _all?: true;
};
export type StoresAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which stores to aggregate.
     */
    where?: Prisma.storesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of stores to fetch.
     */
    orderBy?: Prisma.storesOrderByWithRelationInput | Prisma.storesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.storesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` stores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` stores.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned stores
    **/
    _count?: true | StoresCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: StoresMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: StoresMaxAggregateInputType;
};
export type GetStoresAggregateType<T extends StoresAggregateArgs> = {
    [P in keyof T & keyof AggregateStores]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStores[P]> : Prisma.GetScalarType<T[P], AggregateStores[P]>;
};
export type storesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.storesWhereInput;
    orderBy?: Prisma.storesOrderByWithAggregationInput | Prisma.storesOrderByWithAggregationInput[];
    by: Prisma.StoresScalarFieldEnum[] | Prisma.StoresScalarFieldEnum;
    having?: Prisma.storesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StoresCountAggregateInputType | true;
    _min?: StoresMinAggregateInputType;
    _max?: StoresMaxAggregateInputType;
};
export type StoresGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    logo_url: string | null;
    banner_url: string | null;
    email: string | null;
    phone: string | null;
    website_url: string | null;
    address_line1: string | null;
    address_line2: string | null;
    city: string | null;
    state_region: string | null;
    postal_code: string | null;
    country_code: string | null;
    verification_status: string;
    status: string;
    created_at: Date;
    updated_at: Date;
    trade_mediation_enabled: boolean;
    _count: StoresCountAggregateOutputType | null;
    _min: StoresMinAggregateOutputType | null;
    _max: StoresMaxAggregateOutputType | null;
};
export type GetStoresGroupByPayload<T extends storesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StoresGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StoresGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StoresGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StoresGroupByOutputType[P]>;
}>>;
export type storesWhereInput = {
    AND?: Prisma.storesWhereInput | Prisma.storesWhereInput[];
    OR?: Prisma.storesWhereInput[];
    NOT?: Prisma.storesWhereInput | Prisma.storesWhereInput[];
    id?: Prisma.UuidFilter<"stores"> | string;
    name?: Prisma.StringFilter<"stores"> | string;
    slug?: Prisma.StringFilter<"stores"> | string;
    description?: Prisma.StringNullableFilter<"stores"> | string | null;
    logo_url?: Prisma.StringNullableFilter<"stores"> | string | null;
    banner_url?: Prisma.StringNullableFilter<"stores"> | string | null;
    email?: Prisma.StringNullableFilter<"stores"> | string | null;
    phone?: Prisma.StringNullableFilter<"stores"> | string | null;
    website_url?: Prisma.StringNullableFilter<"stores"> | string | null;
    address_line1?: Prisma.StringNullableFilter<"stores"> | string | null;
    address_line2?: Prisma.StringNullableFilter<"stores"> | string | null;
    city?: Prisma.StringNullableFilter<"stores"> | string | null;
    state_region?: Prisma.StringNullableFilter<"stores"> | string | null;
    postal_code?: Prisma.StringNullableFilter<"stores"> | string | null;
    country_code?: Prisma.StringNullableFilter<"stores"> | string | null;
    verification_status?: Prisma.StringFilter<"stores"> | string;
    status?: Prisma.StringFilter<"stores"> | string;
    created_at?: Prisma.DateTimeFilter<"stores"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"stores"> | Date | string;
    trade_mediation_enabled?: Prisma.BoolFilter<"stores"> | boolean;
    inventory_item_interests?: Prisma.Inventory_item_interestsListRelationFilter;
    inventory_items?: Prisma.Inventory_itemsListRelationFilter;
    listing_offers?: Prisma.Listing_offersListRelationFilter;
    store_games?: Prisma.Store_gamesListRelationFilter;
    store_staff?: Prisma.Store_staffListRelationFilter;
    user_preferences?: Prisma.User_preferencesListRelationFilter;
    preferred_by_users?: Prisma.User_profilesListRelationFilter;
    wishlist_offers?: Prisma.Wishlist_offersListRelationFilter;
};
export type storesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    logo_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    banner_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    website_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    address_line1?: Prisma.SortOrderInput | Prisma.SortOrder;
    address_line2?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    state_region?: Prisma.SortOrderInput | Prisma.SortOrder;
    postal_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    country_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    verification_status?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    trade_mediation_enabled?: Prisma.SortOrder;
    inventory_item_interests?: Prisma.inventory_item_interestsOrderByRelationAggregateInput;
    inventory_items?: Prisma.inventory_itemsOrderByRelationAggregateInput;
    listing_offers?: Prisma.listing_offersOrderByRelationAggregateInput;
    store_games?: Prisma.store_gamesOrderByRelationAggregateInput;
    store_staff?: Prisma.store_staffOrderByRelationAggregateInput;
    user_preferences?: Prisma.user_preferencesOrderByRelationAggregateInput;
    preferred_by_users?: Prisma.user_profilesOrderByRelationAggregateInput;
    wishlist_offers?: Prisma.wishlist_offersOrderByRelationAggregateInput;
};
export type storesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.storesWhereInput | Prisma.storesWhereInput[];
    OR?: Prisma.storesWhereInput[];
    NOT?: Prisma.storesWhereInput | Prisma.storesWhereInput[];
    name?: Prisma.StringFilter<"stores"> | string;
    description?: Prisma.StringNullableFilter<"stores"> | string | null;
    logo_url?: Prisma.StringNullableFilter<"stores"> | string | null;
    banner_url?: Prisma.StringNullableFilter<"stores"> | string | null;
    email?: Prisma.StringNullableFilter<"stores"> | string | null;
    phone?: Prisma.StringNullableFilter<"stores"> | string | null;
    website_url?: Prisma.StringNullableFilter<"stores"> | string | null;
    address_line1?: Prisma.StringNullableFilter<"stores"> | string | null;
    address_line2?: Prisma.StringNullableFilter<"stores"> | string | null;
    city?: Prisma.StringNullableFilter<"stores"> | string | null;
    state_region?: Prisma.StringNullableFilter<"stores"> | string | null;
    postal_code?: Prisma.StringNullableFilter<"stores"> | string | null;
    country_code?: Prisma.StringNullableFilter<"stores"> | string | null;
    verification_status?: Prisma.StringFilter<"stores"> | string;
    status?: Prisma.StringFilter<"stores"> | string;
    created_at?: Prisma.DateTimeFilter<"stores"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"stores"> | Date | string;
    trade_mediation_enabled?: Prisma.BoolFilter<"stores"> | boolean;
    inventory_item_interests?: Prisma.Inventory_item_interestsListRelationFilter;
    inventory_items?: Prisma.Inventory_itemsListRelationFilter;
    listing_offers?: Prisma.Listing_offersListRelationFilter;
    store_games?: Prisma.Store_gamesListRelationFilter;
    store_staff?: Prisma.Store_staffListRelationFilter;
    user_preferences?: Prisma.User_preferencesListRelationFilter;
    preferred_by_users?: Prisma.User_profilesListRelationFilter;
    wishlist_offers?: Prisma.Wishlist_offersListRelationFilter;
}, "id" | "slug">;
export type storesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    logo_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    banner_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    website_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    address_line1?: Prisma.SortOrderInput | Prisma.SortOrder;
    address_line2?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    state_region?: Prisma.SortOrderInput | Prisma.SortOrder;
    postal_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    country_code?: Prisma.SortOrderInput | Prisma.SortOrder;
    verification_status?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    trade_mediation_enabled?: Prisma.SortOrder;
    _count?: Prisma.storesCountOrderByAggregateInput;
    _max?: Prisma.storesMaxOrderByAggregateInput;
    _min?: Prisma.storesMinOrderByAggregateInput;
};
export type storesScalarWhereWithAggregatesInput = {
    AND?: Prisma.storesScalarWhereWithAggregatesInput | Prisma.storesScalarWhereWithAggregatesInput[];
    OR?: Prisma.storesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.storesScalarWhereWithAggregatesInput | Prisma.storesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"stores"> | string;
    name?: Prisma.StringWithAggregatesFilter<"stores"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"stores"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"stores"> | string | null;
    logo_url?: Prisma.StringNullableWithAggregatesFilter<"stores"> | string | null;
    banner_url?: Prisma.StringNullableWithAggregatesFilter<"stores"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"stores"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"stores"> | string | null;
    website_url?: Prisma.StringNullableWithAggregatesFilter<"stores"> | string | null;
    address_line1?: Prisma.StringNullableWithAggregatesFilter<"stores"> | string | null;
    address_line2?: Prisma.StringNullableWithAggregatesFilter<"stores"> | string | null;
    city?: Prisma.StringNullableWithAggregatesFilter<"stores"> | string | null;
    state_region?: Prisma.StringNullableWithAggregatesFilter<"stores"> | string | null;
    postal_code?: Prisma.StringNullableWithAggregatesFilter<"stores"> | string | null;
    country_code?: Prisma.StringNullableWithAggregatesFilter<"stores"> | string | null;
    verification_status?: Prisma.StringWithAggregatesFilter<"stores"> | string;
    status?: Prisma.StringWithAggregatesFilter<"stores"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"stores"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"stores"> | Date | string;
    trade_mediation_enabled?: Prisma.BoolWithAggregatesFilter<"stores"> | boolean;
};
export type storesCreateInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    logo_url?: string | null;
    banner_url?: string | null;
    email?: string | null;
    phone?: string | null;
    website_url?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    city?: string | null;
    state_region?: string | null;
    postal_code?: string | null;
    country_code?: string | null;
    verification_status?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trade_mediation_enabled?: boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStoresInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStoresInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStoresInput;
    store_games?: Prisma.store_gamesCreateNestedManyWithoutStoresInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutStoresInput;
    user_preferences?: Prisma.user_preferencesCreateNestedManyWithoutStoresInput;
    preferred_by_users?: Prisma.user_profilesCreateNestedManyWithoutPreferred_storeInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStoresInput;
};
export type storesUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    logo_url?: string | null;
    banner_url?: string | null;
    email?: string | null;
    phone?: string | null;
    website_url?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    city?: string | null;
    state_region?: string | null;
    postal_code?: string | null;
    country_code?: string | null;
    verification_status?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trade_mediation_enabled?: boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStoresInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStoresInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStoresInput;
    store_games?: Prisma.store_gamesUncheckedCreateNestedManyWithoutStoresInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutStoresInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedManyWithoutStoresInput;
    preferred_by_users?: Prisma.user_profilesUncheckedCreateNestedManyWithoutPreferred_storeInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStoresInput;
};
export type storesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStoresNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStoresNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStoresNestedInput;
    store_games?: Prisma.store_gamesUpdateManyWithoutStoresNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutStoresNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateManyWithoutStoresNestedInput;
    preferred_by_users?: Prisma.user_profilesUpdateManyWithoutPreferred_storeNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStoresNestedInput;
};
export type storesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStoresNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStoresNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStoresNestedInput;
    store_games?: Prisma.store_gamesUncheckedUpdateManyWithoutStoresNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutStoresNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateManyWithoutStoresNestedInput;
    preferred_by_users?: Prisma.user_profilesUncheckedUpdateManyWithoutPreferred_storeNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStoresNestedInput;
};
export type storesCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    logo_url?: string | null;
    banner_url?: string | null;
    email?: string | null;
    phone?: string | null;
    website_url?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    city?: string | null;
    state_region?: string | null;
    postal_code?: string | null;
    country_code?: string | null;
    verification_status?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trade_mediation_enabled?: boolean;
};
export type storesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type storesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type StoresNullableScalarRelationFilter = {
    is?: Prisma.storesWhereInput | null;
    isNot?: Prisma.storesWhereInput | null;
};
export type StoresScalarRelationFilter = {
    is?: Prisma.storesWhereInput;
    isNot?: Prisma.storesWhereInput;
};
export type storesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    logo_url?: Prisma.SortOrder;
    banner_url?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    website_url?: Prisma.SortOrder;
    address_line1?: Prisma.SortOrder;
    address_line2?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state_region?: Prisma.SortOrder;
    postal_code?: Prisma.SortOrder;
    country_code?: Prisma.SortOrder;
    verification_status?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    trade_mediation_enabled?: Prisma.SortOrder;
};
export type storesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    logo_url?: Prisma.SortOrder;
    banner_url?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    website_url?: Prisma.SortOrder;
    address_line1?: Prisma.SortOrder;
    address_line2?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state_region?: Prisma.SortOrder;
    postal_code?: Prisma.SortOrder;
    country_code?: Prisma.SortOrder;
    verification_status?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    trade_mediation_enabled?: Prisma.SortOrder;
};
export type storesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    logo_url?: Prisma.SortOrder;
    banner_url?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    website_url?: Prisma.SortOrder;
    address_line1?: Prisma.SortOrder;
    address_line2?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state_region?: Prisma.SortOrder;
    postal_code?: Prisma.SortOrder;
    country_code?: Prisma.SortOrder;
    verification_status?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    trade_mediation_enabled?: Prisma.SortOrder;
};
export type storesCreateNestedOneWithoutInventory_item_interestsInput = {
    create?: Prisma.XOR<Prisma.storesCreateWithoutInventory_item_interestsInput, Prisma.storesUncheckedCreateWithoutInventory_item_interestsInput>;
    connectOrCreate?: Prisma.storesCreateOrConnectWithoutInventory_item_interestsInput;
    connect?: Prisma.storesWhereUniqueInput;
};
export type storesUpdateOneWithoutInventory_item_interestsNestedInput = {
    create?: Prisma.XOR<Prisma.storesCreateWithoutInventory_item_interestsInput, Prisma.storesUncheckedCreateWithoutInventory_item_interestsInput>;
    connectOrCreate?: Prisma.storesCreateOrConnectWithoutInventory_item_interestsInput;
    upsert?: Prisma.storesUpsertWithoutInventory_item_interestsInput;
    disconnect?: Prisma.storesWhereInput | boolean;
    delete?: Prisma.storesWhereInput | boolean;
    connect?: Prisma.storesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.storesUpdateToOneWithWhereWithoutInventory_item_interestsInput, Prisma.storesUpdateWithoutInventory_item_interestsInput>, Prisma.storesUncheckedUpdateWithoutInventory_item_interestsInput>;
};
export type storesCreateNestedOneWithoutInventory_itemsInput = {
    create?: Prisma.XOR<Prisma.storesCreateWithoutInventory_itemsInput, Prisma.storesUncheckedCreateWithoutInventory_itemsInput>;
    connectOrCreate?: Prisma.storesCreateOrConnectWithoutInventory_itemsInput;
    connect?: Prisma.storesWhereUniqueInput;
};
export type storesUpdateOneWithoutInventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.storesCreateWithoutInventory_itemsInput, Prisma.storesUncheckedCreateWithoutInventory_itemsInput>;
    connectOrCreate?: Prisma.storesCreateOrConnectWithoutInventory_itemsInput;
    upsert?: Prisma.storesUpsertWithoutInventory_itemsInput;
    disconnect?: Prisma.storesWhereInput | boolean;
    delete?: Prisma.storesWhereInput | boolean;
    connect?: Prisma.storesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.storesUpdateToOneWithWhereWithoutInventory_itemsInput, Prisma.storesUpdateWithoutInventory_itemsInput>, Prisma.storesUncheckedUpdateWithoutInventory_itemsInput>;
};
export type storesCreateNestedOneWithoutListing_offersInput = {
    create?: Prisma.XOR<Prisma.storesCreateWithoutListing_offersInput, Prisma.storesUncheckedCreateWithoutListing_offersInput>;
    connectOrCreate?: Prisma.storesCreateOrConnectWithoutListing_offersInput;
    connect?: Prisma.storesWhereUniqueInput;
};
export type storesUpdateOneWithoutListing_offersNestedInput = {
    create?: Prisma.XOR<Prisma.storesCreateWithoutListing_offersInput, Prisma.storesUncheckedCreateWithoutListing_offersInput>;
    connectOrCreate?: Prisma.storesCreateOrConnectWithoutListing_offersInput;
    upsert?: Prisma.storesUpsertWithoutListing_offersInput;
    disconnect?: Prisma.storesWhereInput | boolean;
    delete?: Prisma.storesWhereInput | boolean;
    connect?: Prisma.storesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.storesUpdateToOneWithWhereWithoutListing_offersInput, Prisma.storesUpdateWithoutListing_offersInput>, Prisma.storesUncheckedUpdateWithoutListing_offersInput>;
};
export type storesCreateNestedOneWithoutStore_staffInput = {
    create?: Prisma.XOR<Prisma.storesCreateWithoutStore_staffInput, Prisma.storesUncheckedCreateWithoutStore_staffInput>;
    connectOrCreate?: Prisma.storesCreateOrConnectWithoutStore_staffInput;
    connect?: Prisma.storesWhereUniqueInput;
};
export type storesUpdateOneRequiredWithoutStore_staffNestedInput = {
    create?: Prisma.XOR<Prisma.storesCreateWithoutStore_staffInput, Prisma.storesUncheckedCreateWithoutStore_staffInput>;
    connectOrCreate?: Prisma.storesCreateOrConnectWithoutStore_staffInput;
    upsert?: Prisma.storesUpsertWithoutStore_staffInput;
    connect?: Prisma.storesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.storesUpdateToOneWithWhereWithoutStore_staffInput, Prisma.storesUpdateWithoutStore_staffInput>, Prisma.storesUncheckedUpdateWithoutStore_staffInput>;
};
export type storesCreateNestedOneWithoutPreferred_by_usersInput = {
    create?: Prisma.XOR<Prisma.storesCreateWithoutPreferred_by_usersInput, Prisma.storesUncheckedCreateWithoutPreferred_by_usersInput>;
    connectOrCreate?: Prisma.storesCreateOrConnectWithoutPreferred_by_usersInput;
    connect?: Prisma.storesWhereUniqueInput;
};
export type storesUpdateOneWithoutPreferred_by_usersNestedInput = {
    create?: Prisma.XOR<Prisma.storesCreateWithoutPreferred_by_usersInput, Prisma.storesUncheckedCreateWithoutPreferred_by_usersInput>;
    connectOrCreate?: Prisma.storesCreateOrConnectWithoutPreferred_by_usersInput;
    upsert?: Prisma.storesUpsertWithoutPreferred_by_usersInput;
    disconnect?: Prisma.storesWhereInput | boolean;
    delete?: Prisma.storesWhereInput | boolean;
    connect?: Prisma.storesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.storesUpdateToOneWithWhereWithoutPreferred_by_usersInput, Prisma.storesUpdateWithoutPreferred_by_usersInput>, Prisma.storesUncheckedUpdateWithoutPreferred_by_usersInput>;
};
export type storesCreateNestedOneWithoutWishlist_offersInput = {
    create?: Prisma.XOR<Prisma.storesCreateWithoutWishlist_offersInput, Prisma.storesUncheckedCreateWithoutWishlist_offersInput>;
    connectOrCreate?: Prisma.storesCreateOrConnectWithoutWishlist_offersInput;
    connect?: Prisma.storesWhereUniqueInput;
};
export type storesUpdateOneWithoutWishlist_offersNestedInput = {
    create?: Prisma.XOR<Prisma.storesCreateWithoutWishlist_offersInput, Prisma.storesUncheckedCreateWithoutWishlist_offersInput>;
    connectOrCreate?: Prisma.storesCreateOrConnectWithoutWishlist_offersInput;
    upsert?: Prisma.storesUpsertWithoutWishlist_offersInput;
    disconnect?: Prisma.storesWhereInput | boolean;
    delete?: Prisma.storesWhereInput | boolean;
    connect?: Prisma.storesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.storesUpdateToOneWithWhereWithoutWishlist_offersInput, Prisma.storesUpdateWithoutWishlist_offersInput>, Prisma.storesUncheckedUpdateWithoutWishlist_offersInput>;
};
export type storesCreateNestedOneWithoutUser_preferencesInput = {
    create?: Prisma.XOR<Prisma.storesCreateWithoutUser_preferencesInput, Prisma.storesUncheckedCreateWithoutUser_preferencesInput>;
    connectOrCreate?: Prisma.storesCreateOrConnectWithoutUser_preferencesInput;
    connect?: Prisma.storesWhereUniqueInput;
};
export type storesUpdateOneWithoutUser_preferencesNestedInput = {
    create?: Prisma.XOR<Prisma.storesCreateWithoutUser_preferencesInput, Prisma.storesUncheckedCreateWithoutUser_preferencesInput>;
    connectOrCreate?: Prisma.storesCreateOrConnectWithoutUser_preferencesInput;
    upsert?: Prisma.storesUpsertWithoutUser_preferencesInput;
    disconnect?: Prisma.storesWhereInput | boolean;
    delete?: Prisma.storesWhereInput | boolean;
    connect?: Prisma.storesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.storesUpdateToOneWithWhereWithoutUser_preferencesInput, Prisma.storesUpdateWithoutUser_preferencesInput>, Prisma.storesUncheckedUpdateWithoutUser_preferencesInput>;
};
export type storesCreateNestedOneWithoutStore_gamesInput = {
    create?: Prisma.XOR<Prisma.storesCreateWithoutStore_gamesInput, Prisma.storesUncheckedCreateWithoutStore_gamesInput>;
    connectOrCreate?: Prisma.storesCreateOrConnectWithoutStore_gamesInput;
    connect?: Prisma.storesWhereUniqueInput;
};
export type storesUpdateOneRequiredWithoutStore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.storesCreateWithoutStore_gamesInput, Prisma.storesUncheckedCreateWithoutStore_gamesInput>;
    connectOrCreate?: Prisma.storesCreateOrConnectWithoutStore_gamesInput;
    upsert?: Prisma.storesUpsertWithoutStore_gamesInput;
    connect?: Prisma.storesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.storesUpdateToOneWithWhereWithoutStore_gamesInput, Prisma.storesUpdateWithoutStore_gamesInput>, Prisma.storesUncheckedUpdateWithoutStore_gamesInput>;
};
export type storesCreateWithoutInventory_item_interestsInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    logo_url?: string | null;
    banner_url?: string | null;
    email?: string | null;
    phone?: string | null;
    website_url?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    city?: string | null;
    state_region?: string | null;
    postal_code?: string | null;
    country_code?: string | null;
    verification_status?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trade_mediation_enabled?: boolean;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStoresInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStoresInput;
    store_games?: Prisma.store_gamesCreateNestedManyWithoutStoresInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutStoresInput;
    user_preferences?: Prisma.user_preferencesCreateNestedManyWithoutStoresInput;
    preferred_by_users?: Prisma.user_profilesCreateNestedManyWithoutPreferred_storeInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStoresInput;
};
export type storesUncheckedCreateWithoutInventory_item_interestsInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    logo_url?: string | null;
    banner_url?: string | null;
    email?: string | null;
    phone?: string | null;
    website_url?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    city?: string | null;
    state_region?: string | null;
    postal_code?: string | null;
    country_code?: string | null;
    verification_status?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trade_mediation_enabled?: boolean;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStoresInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStoresInput;
    store_games?: Prisma.store_gamesUncheckedCreateNestedManyWithoutStoresInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutStoresInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedManyWithoutStoresInput;
    preferred_by_users?: Prisma.user_profilesUncheckedCreateNestedManyWithoutPreferred_storeInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStoresInput;
};
export type storesCreateOrConnectWithoutInventory_item_interestsInput = {
    where: Prisma.storesWhereUniqueInput;
    create: Prisma.XOR<Prisma.storesCreateWithoutInventory_item_interestsInput, Prisma.storesUncheckedCreateWithoutInventory_item_interestsInput>;
};
export type storesUpsertWithoutInventory_item_interestsInput = {
    update: Prisma.XOR<Prisma.storesUpdateWithoutInventory_item_interestsInput, Prisma.storesUncheckedUpdateWithoutInventory_item_interestsInput>;
    create: Prisma.XOR<Prisma.storesCreateWithoutInventory_item_interestsInput, Prisma.storesUncheckedCreateWithoutInventory_item_interestsInput>;
    where?: Prisma.storesWhereInput;
};
export type storesUpdateToOneWithWhereWithoutInventory_item_interestsInput = {
    where?: Prisma.storesWhereInput;
    data: Prisma.XOR<Prisma.storesUpdateWithoutInventory_item_interestsInput, Prisma.storesUncheckedUpdateWithoutInventory_item_interestsInput>;
};
export type storesUpdateWithoutInventory_item_interestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStoresNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStoresNestedInput;
    store_games?: Prisma.store_gamesUpdateManyWithoutStoresNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutStoresNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateManyWithoutStoresNestedInput;
    preferred_by_users?: Prisma.user_profilesUpdateManyWithoutPreferred_storeNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStoresNestedInput;
};
export type storesUncheckedUpdateWithoutInventory_item_interestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStoresNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStoresNestedInput;
    store_games?: Prisma.store_gamesUncheckedUpdateManyWithoutStoresNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutStoresNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateManyWithoutStoresNestedInput;
    preferred_by_users?: Prisma.user_profilesUncheckedUpdateManyWithoutPreferred_storeNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStoresNestedInput;
};
export type storesCreateWithoutInventory_itemsInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    logo_url?: string | null;
    banner_url?: string | null;
    email?: string | null;
    phone?: string | null;
    website_url?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    city?: string | null;
    state_region?: string | null;
    postal_code?: string | null;
    country_code?: string | null;
    verification_status?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trade_mediation_enabled?: boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStoresInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStoresInput;
    store_games?: Prisma.store_gamesCreateNestedManyWithoutStoresInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutStoresInput;
    user_preferences?: Prisma.user_preferencesCreateNestedManyWithoutStoresInput;
    preferred_by_users?: Prisma.user_profilesCreateNestedManyWithoutPreferred_storeInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStoresInput;
};
export type storesUncheckedCreateWithoutInventory_itemsInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    logo_url?: string | null;
    banner_url?: string | null;
    email?: string | null;
    phone?: string | null;
    website_url?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    city?: string | null;
    state_region?: string | null;
    postal_code?: string | null;
    country_code?: string | null;
    verification_status?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trade_mediation_enabled?: boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStoresInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStoresInput;
    store_games?: Prisma.store_gamesUncheckedCreateNestedManyWithoutStoresInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutStoresInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedManyWithoutStoresInput;
    preferred_by_users?: Prisma.user_profilesUncheckedCreateNestedManyWithoutPreferred_storeInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStoresInput;
};
export type storesCreateOrConnectWithoutInventory_itemsInput = {
    where: Prisma.storesWhereUniqueInput;
    create: Prisma.XOR<Prisma.storesCreateWithoutInventory_itemsInput, Prisma.storesUncheckedCreateWithoutInventory_itemsInput>;
};
export type storesUpsertWithoutInventory_itemsInput = {
    update: Prisma.XOR<Prisma.storesUpdateWithoutInventory_itemsInput, Prisma.storesUncheckedUpdateWithoutInventory_itemsInput>;
    create: Prisma.XOR<Prisma.storesCreateWithoutInventory_itemsInput, Prisma.storesUncheckedCreateWithoutInventory_itemsInput>;
    where?: Prisma.storesWhereInput;
};
export type storesUpdateToOneWithWhereWithoutInventory_itemsInput = {
    where?: Prisma.storesWhereInput;
    data: Prisma.XOR<Prisma.storesUpdateWithoutInventory_itemsInput, Prisma.storesUncheckedUpdateWithoutInventory_itemsInput>;
};
export type storesUpdateWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStoresNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStoresNestedInput;
    store_games?: Prisma.store_gamesUpdateManyWithoutStoresNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutStoresNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateManyWithoutStoresNestedInput;
    preferred_by_users?: Prisma.user_profilesUpdateManyWithoutPreferred_storeNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStoresNestedInput;
};
export type storesUncheckedUpdateWithoutInventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStoresNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStoresNestedInput;
    store_games?: Prisma.store_gamesUncheckedUpdateManyWithoutStoresNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutStoresNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateManyWithoutStoresNestedInput;
    preferred_by_users?: Prisma.user_profilesUncheckedUpdateManyWithoutPreferred_storeNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStoresNestedInput;
};
export type storesCreateWithoutListing_offersInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    logo_url?: string | null;
    banner_url?: string | null;
    email?: string | null;
    phone?: string | null;
    website_url?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    city?: string | null;
    state_region?: string | null;
    postal_code?: string | null;
    country_code?: string | null;
    verification_status?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trade_mediation_enabled?: boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStoresInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStoresInput;
    store_games?: Prisma.store_gamesCreateNestedManyWithoutStoresInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutStoresInput;
    user_preferences?: Prisma.user_preferencesCreateNestedManyWithoutStoresInput;
    preferred_by_users?: Prisma.user_profilesCreateNestedManyWithoutPreferred_storeInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStoresInput;
};
export type storesUncheckedCreateWithoutListing_offersInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    logo_url?: string | null;
    banner_url?: string | null;
    email?: string | null;
    phone?: string | null;
    website_url?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    city?: string | null;
    state_region?: string | null;
    postal_code?: string | null;
    country_code?: string | null;
    verification_status?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trade_mediation_enabled?: boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStoresInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStoresInput;
    store_games?: Prisma.store_gamesUncheckedCreateNestedManyWithoutStoresInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutStoresInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedManyWithoutStoresInput;
    preferred_by_users?: Prisma.user_profilesUncheckedCreateNestedManyWithoutPreferred_storeInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStoresInput;
};
export type storesCreateOrConnectWithoutListing_offersInput = {
    where: Prisma.storesWhereUniqueInput;
    create: Prisma.XOR<Prisma.storesCreateWithoutListing_offersInput, Prisma.storesUncheckedCreateWithoutListing_offersInput>;
};
export type storesUpsertWithoutListing_offersInput = {
    update: Prisma.XOR<Prisma.storesUpdateWithoutListing_offersInput, Prisma.storesUncheckedUpdateWithoutListing_offersInput>;
    create: Prisma.XOR<Prisma.storesCreateWithoutListing_offersInput, Prisma.storesUncheckedCreateWithoutListing_offersInput>;
    where?: Prisma.storesWhereInput;
};
export type storesUpdateToOneWithWhereWithoutListing_offersInput = {
    where?: Prisma.storesWhereInput;
    data: Prisma.XOR<Prisma.storesUpdateWithoutListing_offersInput, Prisma.storesUncheckedUpdateWithoutListing_offersInput>;
};
export type storesUpdateWithoutListing_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStoresNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStoresNestedInput;
    store_games?: Prisma.store_gamesUpdateManyWithoutStoresNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutStoresNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateManyWithoutStoresNestedInput;
    preferred_by_users?: Prisma.user_profilesUpdateManyWithoutPreferred_storeNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStoresNestedInput;
};
export type storesUncheckedUpdateWithoutListing_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStoresNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStoresNestedInput;
    store_games?: Prisma.store_gamesUncheckedUpdateManyWithoutStoresNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutStoresNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateManyWithoutStoresNestedInput;
    preferred_by_users?: Prisma.user_profilesUncheckedUpdateManyWithoutPreferred_storeNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStoresNestedInput;
};
export type storesCreateWithoutStore_staffInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    logo_url?: string | null;
    banner_url?: string | null;
    email?: string | null;
    phone?: string | null;
    website_url?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    city?: string | null;
    state_region?: string | null;
    postal_code?: string | null;
    country_code?: string | null;
    verification_status?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trade_mediation_enabled?: boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStoresInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStoresInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStoresInput;
    store_games?: Prisma.store_gamesCreateNestedManyWithoutStoresInput;
    user_preferences?: Prisma.user_preferencesCreateNestedManyWithoutStoresInput;
    preferred_by_users?: Prisma.user_profilesCreateNestedManyWithoutPreferred_storeInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStoresInput;
};
export type storesUncheckedCreateWithoutStore_staffInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    logo_url?: string | null;
    banner_url?: string | null;
    email?: string | null;
    phone?: string | null;
    website_url?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    city?: string | null;
    state_region?: string | null;
    postal_code?: string | null;
    country_code?: string | null;
    verification_status?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trade_mediation_enabled?: boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStoresInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStoresInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStoresInput;
    store_games?: Prisma.store_gamesUncheckedCreateNestedManyWithoutStoresInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedManyWithoutStoresInput;
    preferred_by_users?: Prisma.user_profilesUncheckedCreateNestedManyWithoutPreferred_storeInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStoresInput;
};
export type storesCreateOrConnectWithoutStore_staffInput = {
    where: Prisma.storesWhereUniqueInput;
    create: Prisma.XOR<Prisma.storesCreateWithoutStore_staffInput, Prisma.storesUncheckedCreateWithoutStore_staffInput>;
};
export type storesUpsertWithoutStore_staffInput = {
    update: Prisma.XOR<Prisma.storesUpdateWithoutStore_staffInput, Prisma.storesUncheckedUpdateWithoutStore_staffInput>;
    create: Prisma.XOR<Prisma.storesCreateWithoutStore_staffInput, Prisma.storesUncheckedCreateWithoutStore_staffInput>;
    where?: Prisma.storesWhereInput;
};
export type storesUpdateToOneWithWhereWithoutStore_staffInput = {
    where?: Prisma.storesWhereInput;
    data: Prisma.XOR<Prisma.storesUpdateWithoutStore_staffInput, Prisma.storesUncheckedUpdateWithoutStore_staffInput>;
};
export type storesUpdateWithoutStore_staffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStoresNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStoresNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStoresNestedInput;
    store_games?: Prisma.store_gamesUpdateManyWithoutStoresNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateManyWithoutStoresNestedInput;
    preferred_by_users?: Prisma.user_profilesUpdateManyWithoutPreferred_storeNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStoresNestedInput;
};
export type storesUncheckedUpdateWithoutStore_staffInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStoresNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStoresNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStoresNestedInput;
    store_games?: Prisma.store_gamesUncheckedUpdateManyWithoutStoresNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateManyWithoutStoresNestedInput;
    preferred_by_users?: Prisma.user_profilesUncheckedUpdateManyWithoutPreferred_storeNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStoresNestedInput;
};
export type storesCreateWithoutPreferred_by_usersInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    logo_url?: string | null;
    banner_url?: string | null;
    email?: string | null;
    phone?: string | null;
    website_url?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    city?: string | null;
    state_region?: string | null;
    postal_code?: string | null;
    country_code?: string | null;
    verification_status?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trade_mediation_enabled?: boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStoresInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStoresInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStoresInput;
    store_games?: Prisma.store_gamesCreateNestedManyWithoutStoresInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutStoresInput;
    user_preferences?: Prisma.user_preferencesCreateNestedManyWithoutStoresInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStoresInput;
};
export type storesUncheckedCreateWithoutPreferred_by_usersInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    logo_url?: string | null;
    banner_url?: string | null;
    email?: string | null;
    phone?: string | null;
    website_url?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    city?: string | null;
    state_region?: string | null;
    postal_code?: string | null;
    country_code?: string | null;
    verification_status?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trade_mediation_enabled?: boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStoresInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStoresInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStoresInput;
    store_games?: Prisma.store_gamesUncheckedCreateNestedManyWithoutStoresInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutStoresInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedManyWithoutStoresInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStoresInput;
};
export type storesCreateOrConnectWithoutPreferred_by_usersInput = {
    where: Prisma.storesWhereUniqueInput;
    create: Prisma.XOR<Prisma.storesCreateWithoutPreferred_by_usersInput, Prisma.storesUncheckedCreateWithoutPreferred_by_usersInput>;
};
export type storesUpsertWithoutPreferred_by_usersInput = {
    update: Prisma.XOR<Prisma.storesUpdateWithoutPreferred_by_usersInput, Prisma.storesUncheckedUpdateWithoutPreferred_by_usersInput>;
    create: Prisma.XOR<Prisma.storesCreateWithoutPreferred_by_usersInput, Prisma.storesUncheckedCreateWithoutPreferred_by_usersInput>;
    where?: Prisma.storesWhereInput;
};
export type storesUpdateToOneWithWhereWithoutPreferred_by_usersInput = {
    where?: Prisma.storesWhereInput;
    data: Prisma.XOR<Prisma.storesUpdateWithoutPreferred_by_usersInput, Prisma.storesUncheckedUpdateWithoutPreferred_by_usersInput>;
};
export type storesUpdateWithoutPreferred_by_usersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStoresNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStoresNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStoresNestedInput;
    store_games?: Prisma.store_gamesUpdateManyWithoutStoresNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutStoresNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateManyWithoutStoresNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStoresNestedInput;
};
export type storesUncheckedUpdateWithoutPreferred_by_usersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStoresNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStoresNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStoresNestedInput;
    store_games?: Prisma.store_gamesUncheckedUpdateManyWithoutStoresNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutStoresNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateManyWithoutStoresNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStoresNestedInput;
};
export type storesCreateWithoutWishlist_offersInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    logo_url?: string | null;
    banner_url?: string | null;
    email?: string | null;
    phone?: string | null;
    website_url?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    city?: string | null;
    state_region?: string | null;
    postal_code?: string | null;
    country_code?: string | null;
    verification_status?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trade_mediation_enabled?: boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStoresInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStoresInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStoresInput;
    store_games?: Prisma.store_gamesCreateNestedManyWithoutStoresInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutStoresInput;
    user_preferences?: Prisma.user_preferencesCreateNestedManyWithoutStoresInput;
    preferred_by_users?: Prisma.user_profilesCreateNestedManyWithoutPreferred_storeInput;
};
export type storesUncheckedCreateWithoutWishlist_offersInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    logo_url?: string | null;
    banner_url?: string | null;
    email?: string | null;
    phone?: string | null;
    website_url?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    city?: string | null;
    state_region?: string | null;
    postal_code?: string | null;
    country_code?: string | null;
    verification_status?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trade_mediation_enabled?: boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStoresInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStoresInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStoresInput;
    store_games?: Prisma.store_gamesUncheckedCreateNestedManyWithoutStoresInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutStoresInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedManyWithoutStoresInput;
    preferred_by_users?: Prisma.user_profilesUncheckedCreateNestedManyWithoutPreferred_storeInput;
};
export type storesCreateOrConnectWithoutWishlist_offersInput = {
    where: Prisma.storesWhereUniqueInput;
    create: Prisma.XOR<Prisma.storesCreateWithoutWishlist_offersInput, Prisma.storesUncheckedCreateWithoutWishlist_offersInput>;
};
export type storesUpsertWithoutWishlist_offersInput = {
    update: Prisma.XOR<Prisma.storesUpdateWithoutWishlist_offersInput, Prisma.storesUncheckedUpdateWithoutWishlist_offersInput>;
    create: Prisma.XOR<Prisma.storesCreateWithoutWishlist_offersInput, Prisma.storesUncheckedCreateWithoutWishlist_offersInput>;
    where?: Prisma.storesWhereInput;
};
export type storesUpdateToOneWithWhereWithoutWishlist_offersInput = {
    where?: Prisma.storesWhereInput;
    data: Prisma.XOR<Prisma.storesUpdateWithoutWishlist_offersInput, Prisma.storesUncheckedUpdateWithoutWishlist_offersInput>;
};
export type storesUpdateWithoutWishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStoresNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStoresNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStoresNestedInput;
    store_games?: Prisma.store_gamesUpdateManyWithoutStoresNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutStoresNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateManyWithoutStoresNestedInput;
    preferred_by_users?: Prisma.user_profilesUpdateManyWithoutPreferred_storeNestedInput;
};
export type storesUncheckedUpdateWithoutWishlist_offersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStoresNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStoresNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStoresNestedInput;
    store_games?: Prisma.store_gamesUncheckedUpdateManyWithoutStoresNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutStoresNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateManyWithoutStoresNestedInput;
    preferred_by_users?: Prisma.user_profilesUncheckedUpdateManyWithoutPreferred_storeNestedInput;
};
export type storesCreateWithoutUser_preferencesInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    logo_url?: string | null;
    banner_url?: string | null;
    email?: string | null;
    phone?: string | null;
    website_url?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    city?: string | null;
    state_region?: string | null;
    postal_code?: string | null;
    country_code?: string | null;
    verification_status?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trade_mediation_enabled?: boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStoresInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStoresInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStoresInput;
    store_games?: Prisma.store_gamesCreateNestedManyWithoutStoresInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutStoresInput;
    preferred_by_users?: Prisma.user_profilesCreateNestedManyWithoutPreferred_storeInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStoresInput;
};
export type storesUncheckedCreateWithoutUser_preferencesInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    logo_url?: string | null;
    banner_url?: string | null;
    email?: string | null;
    phone?: string | null;
    website_url?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    city?: string | null;
    state_region?: string | null;
    postal_code?: string | null;
    country_code?: string | null;
    verification_status?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trade_mediation_enabled?: boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStoresInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStoresInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStoresInput;
    store_games?: Prisma.store_gamesUncheckedCreateNestedManyWithoutStoresInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutStoresInput;
    preferred_by_users?: Prisma.user_profilesUncheckedCreateNestedManyWithoutPreferred_storeInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStoresInput;
};
export type storesCreateOrConnectWithoutUser_preferencesInput = {
    where: Prisma.storesWhereUniqueInput;
    create: Prisma.XOR<Prisma.storesCreateWithoutUser_preferencesInput, Prisma.storesUncheckedCreateWithoutUser_preferencesInput>;
};
export type storesUpsertWithoutUser_preferencesInput = {
    update: Prisma.XOR<Prisma.storesUpdateWithoutUser_preferencesInput, Prisma.storesUncheckedUpdateWithoutUser_preferencesInput>;
    create: Prisma.XOR<Prisma.storesCreateWithoutUser_preferencesInput, Prisma.storesUncheckedCreateWithoutUser_preferencesInput>;
    where?: Prisma.storesWhereInput;
};
export type storesUpdateToOneWithWhereWithoutUser_preferencesInput = {
    where?: Prisma.storesWhereInput;
    data: Prisma.XOR<Prisma.storesUpdateWithoutUser_preferencesInput, Prisma.storesUncheckedUpdateWithoutUser_preferencesInput>;
};
export type storesUpdateWithoutUser_preferencesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStoresNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStoresNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStoresNestedInput;
    store_games?: Prisma.store_gamesUpdateManyWithoutStoresNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutStoresNestedInput;
    preferred_by_users?: Prisma.user_profilesUpdateManyWithoutPreferred_storeNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStoresNestedInput;
};
export type storesUncheckedUpdateWithoutUser_preferencesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStoresNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStoresNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStoresNestedInput;
    store_games?: Prisma.store_gamesUncheckedUpdateManyWithoutStoresNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutStoresNestedInput;
    preferred_by_users?: Prisma.user_profilesUncheckedUpdateManyWithoutPreferred_storeNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStoresNestedInput;
};
export type storesCreateWithoutStore_gamesInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    logo_url?: string | null;
    banner_url?: string | null;
    email?: string | null;
    phone?: string | null;
    website_url?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    city?: string | null;
    state_region?: string | null;
    postal_code?: string | null;
    country_code?: string | null;
    verification_status?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trade_mediation_enabled?: boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutStoresInput;
    inventory_items?: Prisma.inventory_itemsCreateNestedManyWithoutStoresInput;
    listing_offers?: Prisma.listing_offersCreateNestedManyWithoutStoresInput;
    store_staff?: Prisma.store_staffCreateNestedManyWithoutStoresInput;
    user_preferences?: Prisma.user_preferencesCreateNestedManyWithoutStoresInput;
    preferred_by_users?: Prisma.user_profilesCreateNestedManyWithoutPreferred_storeInput;
    wishlist_offers?: Prisma.wishlist_offersCreateNestedManyWithoutStoresInput;
};
export type storesUncheckedCreateWithoutStore_gamesInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    logo_url?: string | null;
    banner_url?: string | null;
    email?: string | null;
    phone?: string | null;
    website_url?: string | null;
    address_line1?: string | null;
    address_line2?: string | null;
    city?: string | null;
    state_region?: string | null;
    postal_code?: string | null;
    country_code?: string | null;
    verification_status?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    trade_mediation_enabled?: boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutStoresInput;
    inventory_items?: Prisma.inventory_itemsUncheckedCreateNestedManyWithoutStoresInput;
    listing_offers?: Prisma.listing_offersUncheckedCreateNestedManyWithoutStoresInput;
    store_staff?: Prisma.store_staffUncheckedCreateNestedManyWithoutStoresInput;
    user_preferences?: Prisma.user_preferencesUncheckedCreateNestedManyWithoutStoresInput;
    preferred_by_users?: Prisma.user_profilesUncheckedCreateNestedManyWithoutPreferred_storeInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedCreateNestedManyWithoutStoresInput;
};
export type storesCreateOrConnectWithoutStore_gamesInput = {
    where: Prisma.storesWhereUniqueInput;
    create: Prisma.XOR<Prisma.storesCreateWithoutStore_gamesInput, Prisma.storesUncheckedCreateWithoutStore_gamesInput>;
};
export type storesUpsertWithoutStore_gamesInput = {
    update: Prisma.XOR<Prisma.storesUpdateWithoutStore_gamesInput, Prisma.storesUncheckedUpdateWithoutStore_gamesInput>;
    create: Prisma.XOR<Prisma.storesCreateWithoutStore_gamesInput, Prisma.storesUncheckedCreateWithoutStore_gamesInput>;
    where?: Prisma.storesWhereInput;
};
export type storesUpdateToOneWithWhereWithoutStore_gamesInput = {
    where?: Prisma.storesWhereInput;
    data: Prisma.XOR<Prisma.storesUpdateWithoutStore_gamesInput, Prisma.storesUncheckedUpdateWithoutStore_gamesInput>;
};
export type storesUpdateWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutStoresNestedInput;
    inventory_items?: Prisma.inventory_itemsUpdateManyWithoutStoresNestedInput;
    listing_offers?: Prisma.listing_offersUpdateManyWithoutStoresNestedInput;
    store_staff?: Prisma.store_staffUpdateManyWithoutStoresNestedInput;
    user_preferences?: Prisma.user_preferencesUpdateManyWithoutStoresNestedInput;
    preferred_by_users?: Prisma.user_profilesUpdateManyWithoutPreferred_storeNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUpdateManyWithoutStoresNestedInput;
};
export type storesUncheckedUpdateWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    logo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    banner_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    website_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line1?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state_region?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    postal_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    verification_status?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trade_mediation_enabled?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutStoresNestedInput;
    inventory_items?: Prisma.inventory_itemsUncheckedUpdateManyWithoutStoresNestedInput;
    listing_offers?: Prisma.listing_offersUncheckedUpdateManyWithoutStoresNestedInput;
    store_staff?: Prisma.store_staffUncheckedUpdateManyWithoutStoresNestedInput;
    user_preferences?: Prisma.user_preferencesUncheckedUpdateManyWithoutStoresNestedInput;
    preferred_by_users?: Prisma.user_profilesUncheckedUpdateManyWithoutPreferred_storeNestedInput;
    wishlist_offers?: Prisma.wishlist_offersUncheckedUpdateManyWithoutStoresNestedInput;
};
/**
 * Count Type StoresCountOutputType
 */
export type StoresCountOutputType = {
    inventory_item_interests: number;
    inventory_items: number;
    listing_offers: number;
    store_games: number;
    store_staff: number;
    user_preferences: number;
    preferred_by_users: number;
    wishlist_offers: number;
};
export type StoresCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_item_interests?: boolean | StoresCountOutputTypeCountInventory_item_interestsArgs;
    inventory_items?: boolean | StoresCountOutputTypeCountInventory_itemsArgs;
    listing_offers?: boolean | StoresCountOutputTypeCountListing_offersArgs;
    store_games?: boolean | StoresCountOutputTypeCountStore_gamesArgs;
    store_staff?: boolean | StoresCountOutputTypeCountStore_staffArgs;
    user_preferences?: boolean | StoresCountOutputTypeCountUser_preferencesArgs;
    preferred_by_users?: boolean | StoresCountOutputTypeCountPreferred_by_usersArgs;
    wishlist_offers?: boolean | StoresCountOutputTypeCountWishlist_offersArgs;
};
/**
 * StoresCountOutputType without action
 */
export type StoresCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoresCountOutputType
     */
    select?: Prisma.StoresCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * StoresCountOutputType without action
 */
export type StoresCountOutputTypeCountInventory_item_interestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventory_item_interestsWhereInput;
};
/**
 * StoresCountOutputType without action
 */
export type StoresCountOutputTypeCountInventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventory_itemsWhereInput;
};
/**
 * StoresCountOutputType without action
 */
export type StoresCountOutputTypeCountListing_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listing_offersWhereInput;
};
/**
 * StoresCountOutputType without action
 */
export type StoresCountOutputTypeCountStore_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.store_gamesWhereInput;
};
/**
 * StoresCountOutputType without action
 */
export type StoresCountOutputTypeCountStore_staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.store_staffWhereInput;
};
/**
 * StoresCountOutputType without action
 */
export type StoresCountOutputTypeCountUser_preferencesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_preferencesWhereInput;
};
/**
 * StoresCountOutputType without action
 */
export type StoresCountOutputTypeCountPreferred_by_usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_profilesWhereInput;
};
/**
 * StoresCountOutputType without action
 */
export type StoresCountOutputTypeCountWishlist_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_offersWhereInput;
};
export type storesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    logo_url?: boolean;
    banner_url?: boolean;
    email?: boolean;
    phone?: boolean;
    website_url?: boolean;
    address_line1?: boolean;
    address_line2?: boolean;
    city?: boolean;
    state_region?: boolean;
    postal_code?: boolean;
    country_code?: boolean;
    verification_status?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    trade_mediation_enabled?: boolean;
    inventory_item_interests?: boolean | Prisma.stores$inventory_item_interestsArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.stores$inventory_itemsArgs<ExtArgs>;
    listing_offers?: boolean | Prisma.stores$listing_offersArgs<ExtArgs>;
    store_games?: boolean | Prisma.stores$store_gamesArgs<ExtArgs>;
    store_staff?: boolean | Prisma.stores$store_staffArgs<ExtArgs>;
    user_preferences?: boolean | Prisma.stores$user_preferencesArgs<ExtArgs>;
    preferred_by_users?: boolean | Prisma.stores$preferred_by_usersArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.stores$wishlist_offersArgs<ExtArgs>;
    _count?: boolean | Prisma.StoresCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stores"]>;
export type storesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    logo_url?: boolean;
    banner_url?: boolean;
    email?: boolean;
    phone?: boolean;
    website_url?: boolean;
    address_line1?: boolean;
    address_line2?: boolean;
    city?: boolean;
    state_region?: boolean;
    postal_code?: boolean;
    country_code?: boolean;
    verification_status?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    trade_mediation_enabled?: boolean;
}, ExtArgs["result"]["stores"]>;
export type storesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    logo_url?: boolean;
    banner_url?: boolean;
    email?: boolean;
    phone?: boolean;
    website_url?: boolean;
    address_line1?: boolean;
    address_line2?: boolean;
    city?: boolean;
    state_region?: boolean;
    postal_code?: boolean;
    country_code?: boolean;
    verification_status?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    trade_mediation_enabled?: boolean;
}, ExtArgs["result"]["stores"]>;
export type storesSelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    logo_url?: boolean;
    banner_url?: boolean;
    email?: boolean;
    phone?: boolean;
    website_url?: boolean;
    address_line1?: boolean;
    address_line2?: boolean;
    city?: boolean;
    state_region?: boolean;
    postal_code?: boolean;
    country_code?: boolean;
    verification_status?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    trade_mediation_enabled?: boolean;
};
export type storesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "description" | "logo_url" | "banner_url" | "email" | "phone" | "website_url" | "address_line1" | "address_line2" | "city" | "state_region" | "postal_code" | "country_code" | "verification_status" | "status" | "created_at" | "updated_at" | "trade_mediation_enabled", ExtArgs["result"]["stores"]>;
export type storesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_item_interests?: boolean | Prisma.stores$inventory_item_interestsArgs<ExtArgs>;
    inventory_items?: boolean | Prisma.stores$inventory_itemsArgs<ExtArgs>;
    listing_offers?: boolean | Prisma.stores$listing_offersArgs<ExtArgs>;
    store_games?: boolean | Prisma.stores$store_gamesArgs<ExtArgs>;
    store_staff?: boolean | Prisma.stores$store_staffArgs<ExtArgs>;
    user_preferences?: boolean | Prisma.stores$user_preferencesArgs<ExtArgs>;
    preferred_by_users?: boolean | Prisma.stores$preferred_by_usersArgs<ExtArgs>;
    wishlist_offers?: boolean | Prisma.stores$wishlist_offersArgs<ExtArgs>;
    _count?: boolean | Prisma.StoresCountOutputTypeDefaultArgs<ExtArgs>;
};
export type storesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type storesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $storesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "stores";
    objects: {
        inventory_item_interests: Prisma.$inventory_item_interestsPayload<ExtArgs>[];
        inventory_items: Prisma.$inventory_itemsPayload<ExtArgs>[];
        listing_offers: Prisma.$listing_offersPayload<ExtArgs>[];
        store_games: Prisma.$store_gamesPayload<ExtArgs>[];
        store_staff: Prisma.$store_staffPayload<ExtArgs>[];
        user_preferences: Prisma.$user_preferencesPayload<ExtArgs>[];
        preferred_by_users: Prisma.$user_profilesPayload<ExtArgs>[];
        wishlist_offers: Prisma.$wishlist_offersPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
        description: string | null;
        logo_url: string | null;
        banner_url: string | null;
        email: string | null;
        phone: string | null;
        website_url: string | null;
        address_line1: string | null;
        address_line2: string | null;
        city: string | null;
        state_region: string | null;
        postal_code: string | null;
        country_code: string | null;
        verification_status: string;
        status: string;
        created_at: Date;
        updated_at: Date;
        trade_mediation_enabled: boolean;
    }, ExtArgs["result"]["stores"]>;
    composites: {};
};
export type storesGetPayload<S extends boolean | null | undefined | storesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$storesPayload, S>;
export type storesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<storesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StoresCountAggregateInputType | true;
};
export interface storesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['stores'];
        meta: {
            name: 'stores';
        };
    };
    /**
     * Find zero or one Stores that matches the filter.
     * @param {storesFindUniqueArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends storesFindUniqueArgs>(args: Prisma.SelectSubset<T, storesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Stores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {storesFindUniqueOrThrowArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends storesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, storesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindFirstArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends storesFindFirstArgs>(args?: Prisma.SelectSubset<T, storesFindFirstArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Stores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindFirstOrThrowArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends storesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, storesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.stores.findMany()
     *
     * // Get first 10 Stores
     * const stores = await prisma.stores.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const storesWithIdOnly = await prisma.stores.findMany({ select: { id: true } })
     *
     */
    findMany<T extends storesFindManyArgs>(args?: Prisma.SelectSubset<T, storesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Stores.
     * @param {storesCreateArgs} args - Arguments to create a Stores.
     * @example
     * // Create one Stores
     * const Stores = await prisma.stores.create({
     *   data: {
     *     // ... data to create a Stores
     *   }
     * })
     *
     */
    create<T extends storesCreateArgs>(args: Prisma.SelectSubset<T, storesCreateArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Stores.
     * @param {storesCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const stores = await prisma.stores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends storesCreateManyArgs>(args?: Prisma.SelectSubset<T, storesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Stores and returns the data saved in the database.
     * @param {storesCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const stores = await prisma.stores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Stores and only return the `id`
     * const storesWithIdOnly = await prisma.stores.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends storesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, storesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Stores.
     * @param {storesDeleteArgs} args - Arguments to delete one Stores.
     * @example
     * // Delete one Stores
     * const Stores = await prisma.stores.delete({
     *   where: {
     *     // ... filter to delete one Stores
     *   }
     * })
     *
     */
    delete<T extends storesDeleteArgs>(args: Prisma.SelectSubset<T, storesDeleteArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Stores.
     * @param {storesUpdateArgs} args - Arguments to update one Stores.
     * @example
     * // Update one Stores
     * const stores = await prisma.stores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends storesUpdateArgs>(args: Prisma.SelectSubset<T, storesUpdateArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Stores.
     * @param {storesDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.stores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends storesDeleteManyArgs>(args?: Prisma.SelectSubset<T, storesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const stores = await prisma.stores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends storesUpdateManyArgs>(args: Prisma.SelectSubset<T, storesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Stores and returns the data updated in the database.
     * @param {storesUpdateManyAndReturnArgs} args - Arguments to update many Stores.
     * @example
     * // Update many Stores
     * const stores = await prisma.stores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Stores and only return the `id`
     * const storesWithIdOnly = await prisma.stores.updateManyAndReturn({
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
    updateManyAndReturn<T extends storesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, storesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Stores.
     * @param {storesUpsertArgs} args - Arguments to update or create a Stores.
     * @example
     * // Update or create a Stores
     * const stores = await prisma.stores.upsert({
     *   create: {
     *     // ... data to create a Stores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stores we want to update
     *   }
     * })
     */
    upsert<T extends storesUpsertArgs>(args: Prisma.SelectSubset<T, storesUpsertArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.stores.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends storesCountArgs>(args?: Prisma.Subset<T, storesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StoresCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoresAggregateArgs>(args: Prisma.Subset<T, StoresAggregateArgs>): Prisma.PrismaPromise<GetStoresAggregateType<T>>;
    /**
     * Group by Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesGroupByArgs} args - Group by arguments.
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
    groupBy<T extends storesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: storesGroupByArgs['orderBy'];
    } : {
        orderBy?: storesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, storesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the stores model
     */
    readonly fields: storesFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for stores.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__storesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    inventory_item_interests<T extends Prisma.stores$inventory_item_interestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.stores$inventory_item_interestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_item_interestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    inventory_items<T extends Prisma.stores$inventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.stores$inventory_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    listing_offers<T extends Prisma.stores$listing_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.stores$listing_offersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listing_offersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    store_games<T extends Prisma.stores$store_gamesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.stores$store_gamesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    store_staff<T extends Prisma.stores$store_staffArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.stores$store_staffArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$store_staffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user_preferences<T extends Prisma.stores$user_preferencesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.stores$user_preferencesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_preferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    preferred_by_users<T extends Prisma.stores$preferred_by_usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.stores$preferred_by_usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlist_offers<T extends Prisma.stores$wishlist_offersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.stores$wishlist_offersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the stores model
 */
export interface storesFieldRefs {
    readonly id: Prisma.FieldRef<"stores", 'String'>;
    readonly name: Prisma.FieldRef<"stores", 'String'>;
    readonly slug: Prisma.FieldRef<"stores", 'String'>;
    readonly description: Prisma.FieldRef<"stores", 'String'>;
    readonly logo_url: Prisma.FieldRef<"stores", 'String'>;
    readonly banner_url: Prisma.FieldRef<"stores", 'String'>;
    readonly email: Prisma.FieldRef<"stores", 'String'>;
    readonly phone: Prisma.FieldRef<"stores", 'String'>;
    readonly website_url: Prisma.FieldRef<"stores", 'String'>;
    readonly address_line1: Prisma.FieldRef<"stores", 'String'>;
    readonly address_line2: Prisma.FieldRef<"stores", 'String'>;
    readonly city: Prisma.FieldRef<"stores", 'String'>;
    readonly state_region: Prisma.FieldRef<"stores", 'String'>;
    readonly postal_code: Prisma.FieldRef<"stores", 'String'>;
    readonly country_code: Prisma.FieldRef<"stores", 'String'>;
    readonly verification_status: Prisma.FieldRef<"stores", 'String'>;
    readonly status: Prisma.FieldRef<"stores", 'String'>;
    readonly created_at: Prisma.FieldRef<"stores", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"stores", 'DateTime'>;
    readonly trade_mediation_enabled: Prisma.FieldRef<"stores", 'Boolean'>;
}
/**
 * stores findUnique
 */
export type storesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which stores to fetch.
     */
    where: Prisma.storesWhereUniqueInput;
};
/**
 * stores findUniqueOrThrow
 */
export type storesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which stores to fetch.
     */
    where: Prisma.storesWhereUniqueInput;
};
/**
 * stores findFirst
 */
export type storesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which stores to fetch.
     */
    where?: Prisma.storesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of stores to fetch.
     */
    orderBy?: Prisma.storesOrderByWithRelationInput | Prisma.storesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for stores.
     */
    cursor?: Prisma.storesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` stores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` stores.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of stores.
     */
    distinct?: Prisma.StoresScalarFieldEnum | Prisma.StoresScalarFieldEnum[];
};
/**
 * stores findFirstOrThrow
 */
export type storesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which stores to fetch.
     */
    where?: Prisma.storesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of stores to fetch.
     */
    orderBy?: Prisma.storesOrderByWithRelationInput | Prisma.storesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for stores.
     */
    cursor?: Prisma.storesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` stores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` stores.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of stores.
     */
    distinct?: Prisma.StoresScalarFieldEnum | Prisma.StoresScalarFieldEnum[];
};
/**
 * stores findMany
 */
export type storesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which stores to fetch.
     */
    where?: Prisma.storesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of stores to fetch.
     */
    orderBy?: Prisma.storesOrderByWithRelationInput | Prisma.storesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing stores.
     */
    cursor?: Prisma.storesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` stores from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` stores.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of stores.
     */
    distinct?: Prisma.StoresScalarFieldEnum | Prisma.StoresScalarFieldEnum[];
};
/**
 * stores create
 */
export type storesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a stores.
     */
    data: Prisma.XOR<Prisma.storesCreateInput, Prisma.storesUncheckedCreateInput>;
};
/**
 * stores createMany
 */
export type storesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many stores.
     */
    data: Prisma.storesCreateManyInput | Prisma.storesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * stores createManyAndReturn
 */
export type storesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: Prisma.storesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the stores
     */
    omit?: Prisma.storesOmit<ExtArgs> | null;
    /**
     * The data used to create many stores.
     */
    data: Prisma.storesCreateManyInput | Prisma.storesCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * stores update
 */
export type storesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a stores.
     */
    data: Prisma.XOR<Prisma.storesUpdateInput, Prisma.storesUncheckedUpdateInput>;
    /**
     * Choose, which stores to update.
     */
    where: Prisma.storesWhereUniqueInput;
};
/**
 * stores updateMany
 */
export type storesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update stores.
     */
    data: Prisma.XOR<Prisma.storesUpdateManyMutationInput, Prisma.storesUncheckedUpdateManyInput>;
    /**
     * Filter which stores to update
     */
    where?: Prisma.storesWhereInput;
    /**
     * Limit how many stores to update.
     */
    limit?: number;
};
/**
 * stores updateManyAndReturn
 */
export type storesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: Prisma.storesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the stores
     */
    omit?: Prisma.storesOmit<ExtArgs> | null;
    /**
     * The data used to update stores.
     */
    data: Prisma.XOR<Prisma.storesUpdateManyMutationInput, Prisma.storesUncheckedUpdateManyInput>;
    /**
     * Filter which stores to update
     */
    where?: Prisma.storesWhereInput;
    /**
     * Limit how many stores to update.
     */
    limit?: number;
};
/**
 * stores upsert
 */
export type storesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the stores to update in case it exists.
     */
    where: Prisma.storesWhereUniqueInput;
    /**
     * In case the stores found by the `where` argument doesn't exist, create a new stores with this data.
     */
    create: Prisma.XOR<Prisma.storesCreateInput, Prisma.storesUncheckedCreateInput>;
    /**
     * In case the stores was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.storesUpdateInput, Prisma.storesUncheckedUpdateInput>;
};
/**
 * stores delete
 */
export type storesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which stores to delete.
     */
    where: Prisma.storesWhereUniqueInput;
};
/**
 * stores deleteMany
 */
export type storesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which stores to delete
     */
    where?: Prisma.storesWhereInput;
    /**
     * Limit how many stores to delete.
     */
    limit?: number;
};
/**
 * stores.inventory_item_interests
 */
export type stores$inventory_item_interestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * stores.inventory_items
 */
export type stores$inventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * stores.listing_offers
 */
export type stores$listing_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * stores.store_games
 */
export type stores$store_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.store_gamesOrderByWithRelationInput | Prisma.store_gamesOrderByWithRelationInput[];
    cursor?: Prisma.store_gamesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Store_gamesScalarFieldEnum | Prisma.Store_gamesScalarFieldEnum[];
};
/**
 * stores.store_staff
 */
export type stores$store_staffArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * stores.user_preferences
 */
export type stores$user_preferencesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.user_preferencesOrderByWithRelationInput | Prisma.user_preferencesOrderByWithRelationInput[];
    cursor?: Prisma.user_preferencesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_preferencesScalarFieldEnum | Prisma.User_preferencesScalarFieldEnum[];
};
/**
 * stores.preferred_by_users
 */
export type stores$preferred_by_usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.user_profilesOrderByWithRelationInput | Prisma.user_profilesOrderByWithRelationInput[];
    cursor?: Prisma.user_profilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_profilesScalarFieldEnum | Prisma.User_profilesScalarFieldEnum[];
};
/**
 * stores.wishlist_offers
 */
export type stores$wishlist_offersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * stores without action
 */
export type storesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
