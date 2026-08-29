import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model inventory_items
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type inventory_itemsModel = runtime.Types.Result.DefaultSelection<Prisma.$inventory_itemsPayload>;
export type AggregateInventory_items = {
    _count: Inventory_itemsCountAggregateOutputType | null;
    _avg: Inventory_itemsAvgAggregateOutputType | null;
    _sum: Inventory_itemsSumAggregateOutputType | null;
    _min: Inventory_itemsMinAggregateOutputType | null;
    _max: Inventory_itemsMaxAggregateOutputType | null;
};
export type Inventory_itemsAvgAggregateOutputType = {
    quantity: number | null;
    acquired_price: runtime.Decimal | null;
};
export type Inventory_itemsSumAggregateOutputType = {
    quantity: number | null;
    acquired_price: runtime.Decimal | null;
};
export type Inventory_itemsMinAggregateOutputType = {
    id: string | null;
    printing_id: string | null;
    finish: string | null;
    owner_user_id: string | null;
    owner_store_id: string | null;
    collection_id: string | null;
    condition: string | null;
    language_code: string | null;
    quantity: number | null;
    is_signed: boolean | null;
    is_altered: boolean | null;
    is_graded: boolean | null;
    grading_company: string | null;
    grade: string | null;
    certification_number: string | null;
    acquired_at: Date | null;
    acquired_price: runtime.Decimal | null;
    status: string | null;
    notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    game_id: string | null;
};
export type Inventory_itemsMaxAggregateOutputType = {
    id: string | null;
    printing_id: string | null;
    finish: string | null;
    owner_user_id: string | null;
    owner_store_id: string | null;
    collection_id: string | null;
    condition: string | null;
    language_code: string | null;
    quantity: number | null;
    is_signed: boolean | null;
    is_altered: boolean | null;
    is_graded: boolean | null;
    grading_company: string | null;
    grade: string | null;
    certification_number: string | null;
    acquired_at: Date | null;
    acquired_price: runtime.Decimal | null;
    status: string | null;
    notes: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    game_id: string | null;
};
export type Inventory_itemsCountAggregateOutputType = {
    id: number;
    printing_id: number;
    finish: number;
    owner_user_id: number;
    owner_store_id: number;
    collection_id: number;
    condition: number;
    language_code: number;
    quantity: number;
    is_signed: number;
    is_altered: number;
    is_graded: number;
    grading_company: number;
    grade: number;
    certification_number: number;
    acquired_at: number;
    acquired_price: number;
    status: number;
    notes: number;
    created_at: number;
    updated_at: number;
    game_id: number;
    _all: number;
};
export type Inventory_itemsAvgAggregateInputType = {
    quantity?: true;
    acquired_price?: true;
};
export type Inventory_itemsSumAggregateInputType = {
    quantity?: true;
    acquired_price?: true;
};
export type Inventory_itemsMinAggregateInputType = {
    id?: true;
    printing_id?: true;
    finish?: true;
    owner_user_id?: true;
    owner_store_id?: true;
    collection_id?: true;
    condition?: true;
    language_code?: true;
    quantity?: true;
    is_signed?: true;
    is_altered?: true;
    is_graded?: true;
    grading_company?: true;
    grade?: true;
    certification_number?: true;
    acquired_at?: true;
    acquired_price?: true;
    status?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
};
export type Inventory_itemsMaxAggregateInputType = {
    id?: true;
    printing_id?: true;
    finish?: true;
    owner_user_id?: true;
    owner_store_id?: true;
    collection_id?: true;
    condition?: true;
    language_code?: true;
    quantity?: true;
    is_signed?: true;
    is_altered?: true;
    is_graded?: true;
    grading_company?: true;
    grade?: true;
    certification_number?: true;
    acquired_at?: true;
    acquired_price?: true;
    status?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
};
export type Inventory_itemsCountAggregateInputType = {
    id?: true;
    printing_id?: true;
    finish?: true;
    owner_user_id?: true;
    owner_store_id?: true;
    collection_id?: true;
    condition?: true;
    language_code?: true;
    quantity?: true;
    is_signed?: true;
    is_altered?: true;
    is_graded?: true;
    grading_company?: true;
    grade?: true;
    certification_number?: true;
    acquired_at?: true;
    acquired_price?: true;
    status?: true;
    notes?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
    _all?: true;
};
export type Inventory_itemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which inventory_items to aggregate.
     */
    where?: Prisma.inventory_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventory_items to fetch.
     */
    orderBy?: Prisma.inventory_itemsOrderByWithRelationInput | Prisma.inventory_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.inventory_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventory_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventory_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned inventory_items
    **/
    _count?: true | Inventory_itemsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: Inventory_itemsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: Inventory_itemsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: Inventory_itemsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: Inventory_itemsMaxAggregateInputType;
};
export type GetInventory_itemsAggregateType<T extends Inventory_itemsAggregateArgs> = {
    [P in keyof T & keyof AggregateInventory_items]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInventory_items[P]> : Prisma.GetScalarType<T[P], AggregateInventory_items[P]>;
};
export type inventory_itemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventory_itemsWhereInput;
    orderBy?: Prisma.inventory_itemsOrderByWithAggregationInput | Prisma.inventory_itemsOrderByWithAggregationInput[];
    by: Prisma.Inventory_itemsScalarFieldEnum[] | Prisma.Inventory_itemsScalarFieldEnum;
    having?: Prisma.inventory_itemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Inventory_itemsCountAggregateInputType | true;
    _avg?: Inventory_itemsAvgAggregateInputType;
    _sum?: Inventory_itemsSumAggregateInputType;
    _min?: Inventory_itemsMinAggregateInputType;
    _max?: Inventory_itemsMaxAggregateInputType;
};
export type Inventory_itemsGroupByOutputType = {
    id: string;
    printing_id: string;
    finish: string;
    owner_user_id: string | null;
    owner_store_id: string | null;
    collection_id: string | null;
    condition: string;
    language_code: string;
    quantity: number;
    is_signed: boolean;
    is_altered: boolean;
    is_graded: boolean;
    grading_company: string | null;
    grade: string | null;
    certification_number: string | null;
    acquired_at: Date | null;
    acquired_price: runtime.Decimal | null;
    status: string;
    notes: string | null;
    created_at: Date;
    updated_at: Date;
    game_id: string;
    _count: Inventory_itemsCountAggregateOutputType | null;
    _avg: Inventory_itemsAvgAggregateOutputType | null;
    _sum: Inventory_itemsSumAggregateOutputType | null;
    _min: Inventory_itemsMinAggregateOutputType | null;
    _max: Inventory_itemsMaxAggregateOutputType | null;
};
export type GetInventory_itemsGroupByPayload<T extends inventory_itemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Inventory_itemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Inventory_itemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Inventory_itemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Inventory_itemsGroupByOutputType[P]>;
}>>;
export type inventory_itemsWhereInput = {
    AND?: Prisma.inventory_itemsWhereInput | Prisma.inventory_itemsWhereInput[];
    OR?: Prisma.inventory_itemsWhereInput[];
    NOT?: Prisma.inventory_itemsWhereInput | Prisma.inventory_itemsWhereInput[];
    id?: Prisma.UuidFilter<"inventory_items"> | string;
    printing_id?: Prisma.UuidFilter<"inventory_items"> | string;
    finish?: Prisma.StringFilter<"inventory_items"> | string;
    owner_user_id?: Prisma.UuidNullableFilter<"inventory_items"> | string | null;
    owner_store_id?: Prisma.UuidNullableFilter<"inventory_items"> | string | null;
    collection_id?: Prisma.UuidNullableFilter<"inventory_items"> | string | null;
    condition?: Prisma.StringFilter<"inventory_items"> | string;
    language_code?: Prisma.StringFilter<"inventory_items"> | string;
    quantity?: Prisma.IntFilter<"inventory_items"> | number;
    is_signed?: Prisma.BoolFilter<"inventory_items"> | boolean;
    is_altered?: Prisma.BoolFilter<"inventory_items"> | boolean;
    is_graded?: Prisma.BoolFilter<"inventory_items"> | boolean;
    grading_company?: Prisma.StringNullableFilter<"inventory_items"> | string | null;
    grade?: Prisma.StringNullableFilter<"inventory_items"> | string | null;
    certification_number?: Prisma.StringNullableFilter<"inventory_items"> | string | null;
    acquired_at?: Prisma.DateTimeNullableFilter<"inventory_items"> | Date | string | null;
    acquired_price?: Prisma.DecimalNullableFilter<"inventory_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFilter<"inventory_items"> | string;
    notes?: Prisma.StringNullableFilter<"inventory_items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"inventory_items"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"inventory_items"> | Date | string;
    game_id?: Prisma.UuidFilter<"inventory_items"> | string;
    inventory_item_interests?: Prisma.Inventory_item_interestsListRelationFilter;
    inventory_item_photos?: Prisma.Inventory_item_photosListRelationFilter;
    collections?: Prisma.XOR<Prisma.CollectionsNullableScalarRelationFilter, Prisma.collectionsWhereInput> | null;
    stores?: Prisma.XOR<Prisma.StoresNullableScalarRelationFilter, Prisma.storesWhereInput> | null;
    store_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    user_profiles?: Prisma.XOR<Prisma.User_profilesNullableScalarRelationFilter, Prisma.user_profilesWhereInput> | null;
    printing_finishes?: Prisma.XOR<Prisma.Printing_finishesScalarRelationFilter, Prisma.printing_finishesWhereInput>;
    card_printings?: Prisma.XOR<Prisma.Card_printingsScalarRelationFilter, Prisma.card_printingsWhereInput>;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.ListingsListRelationFilter;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.ListingsListRelationFilter;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.ListingsListRelationFilter;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.Offer_itemsListRelationFilter;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.Offer_itemsListRelationFilter;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.Offer_itemsListRelationFilter;
    transaction_items?: Prisma.Transaction_itemsListRelationFilter;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.Transaction_itemsListRelationFilter;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.Wishlist_offer_itemsListRelationFilter;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.Wishlist_offer_itemsListRelationFilter;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.Wishlist_offer_itemsListRelationFilter;
    wishlist_offer_requested_items?: Prisma.Wishlist_offer_requested_itemsListRelationFilter;
};
export type inventory_itemsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    printing_id?: Prisma.SortOrder;
    finish?: Prisma.SortOrder;
    owner_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    owner_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    collection_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    language_code?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    is_signed?: Prisma.SortOrder;
    is_altered?: Prisma.SortOrder;
    is_graded?: Prisma.SortOrder;
    grading_company?: Prisma.SortOrderInput | Prisma.SortOrder;
    grade?: Prisma.SortOrderInput | Prisma.SortOrder;
    certification_number?: Prisma.SortOrderInput | Prisma.SortOrder;
    acquired_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    acquired_price?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    inventory_item_interests?: Prisma.inventory_item_interestsOrderByRelationAggregateInput;
    inventory_item_photos?: Prisma.inventory_item_photosOrderByRelationAggregateInput;
    collections?: Prisma.collectionsOrderByWithRelationInput;
    stores?: Prisma.storesOrderByWithRelationInput;
    store_games?: Prisma.store_gamesOrderByWithRelationInput;
    user_profiles?: Prisma.user_profilesOrderByWithRelationInput;
    printing_finishes?: Prisma.printing_finishesOrderByWithRelationInput;
    card_printings?: Prisma.card_printingsOrderByWithRelationInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsOrderByRelationAggregateInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsOrderByRelationAggregateInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsOrderByRelationAggregateInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsOrderByRelationAggregateInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsOrderByRelationAggregateInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsOrderByRelationAggregateInput;
    transaction_items?: Prisma.transaction_itemsOrderByRelationAggregateInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsOrderByRelationAggregateInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsOrderByRelationAggregateInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsOrderByRelationAggregateInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsOrderByRelationAggregateInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsOrderByRelationAggregateInput;
};
export type inventory_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    id_owner_store_id?: Prisma.inventory_itemsIdOwner_store_idCompoundUniqueInput;
    id_owner_user_id?: Prisma.inventory_itemsIdOwner_user_idCompoundUniqueInput;
    id_game_id?: Prisma.inventory_itemsIdGame_idCompoundUniqueInput;
    AND?: Prisma.inventory_itemsWhereInput | Prisma.inventory_itemsWhereInput[];
    OR?: Prisma.inventory_itemsWhereInput[];
    NOT?: Prisma.inventory_itemsWhereInput | Prisma.inventory_itemsWhereInput[];
    printing_id?: Prisma.UuidFilter<"inventory_items"> | string;
    finish?: Prisma.StringFilter<"inventory_items"> | string;
    owner_user_id?: Prisma.UuidNullableFilter<"inventory_items"> | string | null;
    owner_store_id?: Prisma.UuidNullableFilter<"inventory_items"> | string | null;
    collection_id?: Prisma.UuidNullableFilter<"inventory_items"> | string | null;
    condition?: Prisma.StringFilter<"inventory_items"> | string;
    language_code?: Prisma.StringFilter<"inventory_items"> | string;
    quantity?: Prisma.IntFilter<"inventory_items"> | number;
    is_signed?: Prisma.BoolFilter<"inventory_items"> | boolean;
    is_altered?: Prisma.BoolFilter<"inventory_items"> | boolean;
    is_graded?: Prisma.BoolFilter<"inventory_items"> | boolean;
    grading_company?: Prisma.StringNullableFilter<"inventory_items"> | string | null;
    grade?: Prisma.StringNullableFilter<"inventory_items"> | string | null;
    certification_number?: Prisma.StringNullableFilter<"inventory_items"> | string | null;
    acquired_at?: Prisma.DateTimeNullableFilter<"inventory_items"> | Date | string | null;
    acquired_price?: Prisma.DecimalNullableFilter<"inventory_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFilter<"inventory_items"> | string;
    notes?: Prisma.StringNullableFilter<"inventory_items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"inventory_items"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"inventory_items"> | Date | string;
    game_id?: Prisma.UuidFilter<"inventory_items"> | string;
    inventory_item_interests?: Prisma.Inventory_item_interestsListRelationFilter;
    inventory_item_photos?: Prisma.Inventory_item_photosListRelationFilter;
    collections?: Prisma.XOR<Prisma.CollectionsNullableScalarRelationFilter, Prisma.collectionsWhereInput> | null;
    stores?: Prisma.XOR<Prisma.StoresNullableScalarRelationFilter, Prisma.storesWhereInput> | null;
    store_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    user_profiles?: Prisma.XOR<Prisma.User_profilesNullableScalarRelationFilter, Prisma.user_profilesWhereInput> | null;
    printing_finishes?: Prisma.XOR<Prisma.Printing_finishesScalarRelationFilter, Prisma.printing_finishesWhereInput>;
    card_printings?: Prisma.XOR<Prisma.Card_printingsScalarRelationFilter, Prisma.card_printingsWhereInput>;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.ListingsListRelationFilter;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.ListingsListRelationFilter;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.ListingsListRelationFilter;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.Offer_itemsListRelationFilter;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.Offer_itemsListRelationFilter;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.Offer_itemsListRelationFilter;
    transaction_items?: Prisma.Transaction_itemsListRelationFilter;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.Transaction_itemsListRelationFilter;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.Wishlist_offer_itemsListRelationFilter;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.Wishlist_offer_itemsListRelationFilter;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.Wishlist_offer_itemsListRelationFilter;
    wishlist_offer_requested_items?: Prisma.Wishlist_offer_requested_itemsListRelationFilter;
}, "id" | "id_owner_store_id" | "id_owner_user_id" | "id_game_id">;
export type inventory_itemsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    printing_id?: Prisma.SortOrder;
    finish?: Prisma.SortOrder;
    owner_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    owner_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    collection_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    language_code?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    is_signed?: Prisma.SortOrder;
    is_altered?: Prisma.SortOrder;
    is_graded?: Prisma.SortOrder;
    grading_company?: Prisma.SortOrderInput | Prisma.SortOrder;
    grade?: Prisma.SortOrderInput | Prisma.SortOrder;
    certification_number?: Prisma.SortOrderInput | Prisma.SortOrder;
    acquired_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    acquired_price?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    _count?: Prisma.inventory_itemsCountOrderByAggregateInput;
    _avg?: Prisma.inventory_itemsAvgOrderByAggregateInput;
    _max?: Prisma.inventory_itemsMaxOrderByAggregateInput;
    _min?: Prisma.inventory_itemsMinOrderByAggregateInput;
    _sum?: Prisma.inventory_itemsSumOrderByAggregateInput;
};
export type inventory_itemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.inventory_itemsScalarWhereWithAggregatesInput | Prisma.inventory_itemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.inventory_itemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.inventory_itemsScalarWhereWithAggregatesInput | Prisma.inventory_itemsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"inventory_items"> | string;
    printing_id?: Prisma.UuidWithAggregatesFilter<"inventory_items"> | string;
    finish?: Prisma.StringWithAggregatesFilter<"inventory_items"> | string;
    owner_user_id?: Prisma.UuidNullableWithAggregatesFilter<"inventory_items"> | string | null;
    owner_store_id?: Prisma.UuidNullableWithAggregatesFilter<"inventory_items"> | string | null;
    collection_id?: Prisma.UuidNullableWithAggregatesFilter<"inventory_items"> | string | null;
    condition?: Prisma.StringWithAggregatesFilter<"inventory_items"> | string;
    language_code?: Prisma.StringWithAggregatesFilter<"inventory_items"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"inventory_items"> | number;
    is_signed?: Prisma.BoolWithAggregatesFilter<"inventory_items"> | boolean;
    is_altered?: Prisma.BoolWithAggregatesFilter<"inventory_items"> | boolean;
    is_graded?: Prisma.BoolWithAggregatesFilter<"inventory_items"> | boolean;
    grading_company?: Prisma.StringNullableWithAggregatesFilter<"inventory_items"> | string | null;
    grade?: Prisma.StringNullableWithAggregatesFilter<"inventory_items"> | string | null;
    certification_number?: Prisma.StringNullableWithAggregatesFilter<"inventory_items"> | string | null;
    acquired_at?: Prisma.DateTimeNullableWithAggregatesFilter<"inventory_items"> | Date | string | null;
    acquired_price?: Prisma.DecimalNullableWithAggregatesFilter<"inventory_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringWithAggregatesFilter<"inventory_items"> | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"inventory_items"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"inventory_items"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"inventory_items"> | Date | string;
    game_id?: Prisma.UuidWithAggregatesFilter<"inventory_items"> | string;
};
export type inventory_itemsCreateInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsCreateManyInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type inventory_itemsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventory_itemsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type Inventory_itemsListRelationFilter = {
    every?: Prisma.inventory_itemsWhereInput;
    some?: Prisma.inventory_itemsWhereInput;
    none?: Prisma.inventory_itemsWhereInput;
};
export type inventory_itemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Inventory_itemsScalarRelationFilter = {
    is?: Prisma.inventory_itemsWhereInput;
    isNot?: Prisma.inventory_itemsWhereInput;
};
export type inventory_itemsIdOwner_store_idCompoundUniqueInput = {
    id: string;
    owner_store_id: string;
};
export type inventory_itemsIdOwner_user_idCompoundUniqueInput = {
    id: string;
    owner_user_id: string;
};
export type inventory_itemsIdGame_idCompoundUniqueInput = {
    id: string;
    game_id: string;
};
export type inventory_itemsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    printing_id?: Prisma.SortOrder;
    finish?: Prisma.SortOrder;
    owner_user_id?: Prisma.SortOrder;
    owner_store_id?: Prisma.SortOrder;
    collection_id?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    language_code?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    is_signed?: Prisma.SortOrder;
    is_altered?: Prisma.SortOrder;
    is_graded?: Prisma.SortOrder;
    grading_company?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    certification_number?: Prisma.SortOrder;
    acquired_at?: Prisma.SortOrder;
    acquired_price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type inventory_itemsAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    acquired_price?: Prisma.SortOrder;
};
export type inventory_itemsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    printing_id?: Prisma.SortOrder;
    finish?: Prisma.SortOrder;
    owner_user_id?: Prisma.SortOrder;
    owner_store_id?: Prisma.SortOrder;
    collection_id?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    language_code?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    is_signed?: Prisma.SortOrder;
    is_altered?: Prisma.SortOrder;
    is_graded?: Prisma.SortOrder;
    grading_company?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    certification_number?: Prisma.SortOrder;
    acquired_at?: Prisma.SortOrder;
    acquired_price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type inventory_itemsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    printing_id?: Prisma.SortOrder;
    finish?: Prisma.SortOrder;
    owner_user_id?: Prisma.SortOrder;
    owner_store_id?: Prisma.SortOrder;
    collection_id?: Prisma.SortOrder;
    condition?: Prisma.SortOrder;
    language_code?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    is_signed?: Prisma.SortOrder;
    is_altered?: Prisma.SortOrder;
    is_graded?: Prisma.SortOrder;
    grading_company?: Prisma.SortOrder;
    grade?: Prisma.SortOrder;
    certification_number?: Prisma.SortOrder;
    acquired_at?: Prisma.SortOrder;
    acquired_price?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type inventory_itemsSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    acquired_price?: Prisma.SortOrder;
};
export type Inventory_itemsNullableScalarRelationFilter = {
    is?: Prisma.inventory_itemsWhereInput | null;
    isNot?: Prisma.inventory_itemsWhereInput | null;
};
export type inventory_itemsCreateNestedManyWithoutCard_printingsInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutCard_printingsInput, Prisma.inventory_itemsUncheckedCreateWithoutCard_printingsInput> | Prisma.inventory_itemsCreateWithoutCard_printingsInput[] | Prisma.inventory_itemsUncheckedCreateWithoutCard_printingsInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutCard_printingsInput | Prisma.inventory_itemsCreateOrConnectWithoutCard_printingsInput[];
    createMany?: Prisma.inventory_itemsCreateManyCard_printingsInputEnvelope;
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
};
export type inventory_itemsUncheckedCreateNestedManyWithoutCard_printingsInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutCard_printingsInput, Prisma.inventory_itemsUncheckedCreateWithoutCard_printingsInput> | Prisma.inventory_itemsCreateWithoutCard_printingsInput[] | Prisma.inventory_itemsUncheckedCreateWithoutCard_printingsInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutCard_printingsInput | Prisma.inventory_itemsCreateOrConnectWithoutCard_printingsInput[];
    createMany?: Prisma.inventory_itemsCreateManyCard_printingsInputEnvelope;
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
};
export type inventory_itemsUpdateManyWithoutCard_printingsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutCard_printingsInput, Prisma.inventory_itemsUncheckedCreateWithoutCard_printingsInput> | Prisma.inventory_itemsCreateWithoutCard_printingsInput[] | Prisma.inventory_itemsUncheckedCreateWithoutCard_printingsInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutCard_printingsInput | Prisma.inventory_itemsCreateOrConnectWithoutCard_printingsInput[];
    upsert?: Prisma.inventory_itemsUpsertWithWhereUniqueWithoutCard_printingsInput | Prisma.inventory_itemsUpsertWithWhereUniqueWithoutCard_printingsInput[];
    createMany?: Prisma.inventory_itemsCreateManyCard_printingsInputEnvelope;
    set?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    disconnect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    delete?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    update?: Prisma.inventory_itemsUpdateWithWhereUniqueWithoutCard_printingsInput | Prisma.inventory_itemsUpdateWithWhereUniqueWithoutCard_printingsInput[];
    updateMany?: Prisma.inventory_itemsUpdateManyWithWhereWithoutCard_printingsInput | Prisma.inventory_itemsUpdateManyWithWhereWithoutCard_printingsInput[];
    deleteMany?: Prisma.inventory_itemsScalarWhereInput | Prisma.inventory_itemsScalarWhereInput[];
};
export type inventory_itemsUncheckedUpdateManyWithoutCard_printingsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutCard_printingsInput, Prisma.inventory_itemsUncheckedCreateWithoutCard_printingsInput> | Prisma.inventory_itemsCreateWithoutCard_printingsInput[] | Prisma.inventory_itemsUncheckedCreateWithoutCard_printingsInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutCard_printingsInput | Prisma.inventory_itemsCreateOrConnectWithoutCard_printingsInput[];
    upsert?: Prisma.inventory_itemsUpsertWithWhereUniqueWithoutCard_printingsInput | Prisma.inventory_itemsUpsertWithWhereUniqueWithoutCard_printingsInput[];
    createMany?: Prisma.inventory_itemsCreateManyCard_printingsInputEnvelope;
    set?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    disconnect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    delete?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    update?: Prisma.inventory_itemsUpdateWithWhereUniqueWithoutCard_printingsInput | Prisma.inventory_itemsUpdateWithWhereUniqueWithoutCard_printingsInput[];
    updateMany?: Prisma.inventory_itemsUpdateManyWithWhereWithoutCard_printingsInput | Prisma.inventory_itemsUpdateManyWithWhereWithoutCard_printingsInput[];
    deleteMany?: Prisma.inventory_itemsScalarWhereInput | Prisma.inventory_itemsScalarWhereInput[];
};
export type inventory_itemsCreateNestedManyWithoutCollectionsInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutCollectionsInput, Prisma.inventory_itemsUncheckedCreateWithoutCollectionsInput> | Prisma.inventory_itemsCreateWithoutCollectionsInput[] | Prisma.inventory_itemsUncheckedCreateWithoutCollectionsInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutCollectionsInput | Prisma.inventory_itemsCreateOrConnectWithoutCollectionsInput[];
    createMany?: Prisma.inventory_itemsCreateManyCollectionsInputEnvelope;
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
};
export type inventory_itemsUncheckedCreateNestedManyWithoutCollectionsInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutCollectionsInput, Prisma.inventory_itemsUncheckedCreateWithoutCollectionsInput> | Prisma.inventory_itemsCreateWithoutCollectionsInput[] | Prisma.inventory_itemsUncheckedCreateWithoutCollectionsInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutCollectionsInput | Prisma.inventory_itemsCreateOrConnectWithoutCollectionsInput[];
    createMany?: Prisma.inventory_itemsCreateManyCollectionsInputEnvelope;
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
};
export type inventory_itemsUpdateManyWithoutCollectionsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutCollectionsInput, Prisma.inventory_itemsUncheckedCreateWithoutCollectionsInput> | Prisma.inventory_itemsCreateWithoutCollectionsInput[] | Prisma.inventory_itemsUncheckedCreateWithoutCollectionsInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutCollectionsInput | Prisma.inventory_itemsCreateOrConnectWithoutCollectionsInput[];
    upsert?: Prisma.inventory_itemsUpsertWithWhereUniqueWithoutCollectionsInput | Prisma.inventory_itemsUpsertWithWhereUniqueWithoutCollectionsInput[];
    createMany?: Prisma.inventory_itemsCreateManyCollectionsInputEnvelope;
    set?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    disconnect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    delete?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    update?: Prisma.inventory_itemsUpdateWithWhereUniqueWithoutCollectionsInput | Prisma.inventory_itemsUpdateWithWhereUniqueWithoutCollectionsInput[];
    updateMany?: Prisma.inventory_itemsUpdateManyWithWhereWithoutCollectionsInput | Prisma.inventory_itemsUpdateManyWithWhereWithoutCollectionsInput[];
    deleteMany?: Prisma.inventory_itemsScalarWhereInput | Prisma.inventory_itemsScalarWhereInput[];
};
export type inventory_itemsUncheckedUpdateManyWithoutCollectionsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutCollectionsInput, Prisma.inventory_itemsUncheckedCreateWithoutCollectionsInput> | Prisma.inventory_itemsCreateWithoutCollectionsInput[] | Prisma.inventory_itemsUncheckedCreateWithoutCollectionsInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutCollectionsInput | Prisma.inventory_itemsCreateOrConnectWithoutCollectionsInput[];
    upsert?: Prisma.inventory_itemsUpsertWithWhereUniqueWithoutCollectionsInput | Prisma.inventory_itemsUpsertWithWhereUniqueWithoutCollectionsInput[];
    createMany?: Prisma.inventory_itemsCreateManyCollectionsInputEnvelope;
    set?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    disconnect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    delete?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    update?: Prisma.inventory_itemsUpdateWithWhereUniqueWithoutCollectionsInput | Prisma.inventory_itemsUpdateWithWhereUniqueWithoutCollectionsInput[];
    updateMany?: Prisma.inventory_itemsUpdateManyWithWhereWithoutCollectionsInput | Prisma.inventory_itemsUpdateManyWithWhereWithoutCollectionsInput[];
    deleteMany?: Prisma.inventory_itemsScalarWhereInput | Prisma.inventory_itemsScalarWhereInput[];
};
export type inventory_itemsCreateNestedOneWithoutInventory_item_interestsInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutInventory_item_interestsInput, Prisma.inventory_itemsUncheckedCreateWithoutInventory_item_interestsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutInventory_item_interestsInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
};
export type inventory_itemsUpdateOneRequiredWithoutInventory_item_interestsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutInventory_item_interestsInput, Prisma.inventory_itemsUncheckedCreateWithoutInventory_item_interestsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutInventory_item_interestsInput;
    upsert?: Prisma.inventory_itemsUpsertWithoutInventory_item_interestsInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.inventory_itemsUpdateToOneWithWhereWithoutInventory_item_interestsInput, Prisma.inventory_itemsUpdateWithoutInventory_item_interestsInput>, Prisma.inventory_itemsUncheckedUpdateWithoutInventory_item_interestsInput>;
};
export type inventory_itemsCreateNestedOneWithoutInventory_item_photosInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutInventory_item_photosInput, Prisma.inventory_itemsUncheckedCreateWithoutInventory_item_photosInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutInventory_item_photosInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
};
export type inventory_itemsUpdateOneRequiredWithoutInventory_item_photosNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutInventory_item_photosInput, Prisma.inventory_itemsUncheckedCreateWithoutInventory_item_photosInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutInventory_item_photosInput;
    upsert?: Prisma.inventory_itemsUpsertWithoutInventory_item_photosInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.inventory_itemsUpdateToOneWithWhereWithoutInventory_item_photosInput, Prisma.inventory_itemsUpdateWithoutInventory_item_photosInput>, Prisma.inventory_itemsUncheckedUpdateWithoutInventory_item_photosInput>;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
};
export type inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
};
export type inventory_itemsCreateNestedOneWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
};
export type inventory_itemsUpdateOneRequiredWithoutListings_listings_inventory_item_id_game_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput;
    upsert?: Prisma.inventory_itemsUpsertWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.inventory_itemsUpdateToOneWithWhereWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUpdateWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput>, Prisma.inventory_itemsUncheckedUpdateWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput>;
};
export type inventory_itemsUpdateOneWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    upsert?: Prisma.inventory_itemsUpsertWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    disconnect?: Prisma.inventory_itemsWhereInput | boolean;
    delete?: Prisma.inventory_itemsWhereInput | boolean;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.inventory_itemsUpdateToOneWithWhereWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput, Prisma.inventory_itemsUpdateWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput>, Prisma.inventory_itemsUncheckedUpdateWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput>;
};
export type inventory_itemsUpdateOneWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    upsert?: Prisma.inventory_itemsUpsertWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    disconnect?: Prisma.inventory_itemsWhereInput | boolean;
    delete?: Prisma.inventory_itemsWhereInput | boolean;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.inventory_itemsUpdateToOneWithWhereWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput, Prisma.inventory_itemsUpdateWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput>, Prisma.inventory_itemsUncheckedUpdateWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput>;
};
export type inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
};
export type inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
};
export type inventory_itemsCreateNestedOneWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
};
export type inventory_itemsUpdateOneRequiredWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    upsert?: Prisma.inventory_itemsUpsertWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.inventory_itemsUpdateToOneWithWhereWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUpdateWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput>, Prisma.inventory_itemsUncheckedUpdateWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
};
export type inventory_itemsUpdateOneWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    upsert?: Prisma.inventory_itemsUpsertWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    disconnect?: Prisma.inventory_itemsWhereInput | boolean;
    delete?: Prisma.inventory_itemsWhereInput | boolean;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.inventory_itemsUpdateToOneWithWhereWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.inventory_itemsUpdateWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>, Prisma.inventory_itemsUncheckedUpdateWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
};
export type inventory_itemsUpdateOneWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    upsert?: Prisma.inventory_itemsUpsertWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    disconnect?: Prisma.inventory_itemsWhereInput | boolean;
    delete?: Prisma.inventory_itemsWhereInput | boolean;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.inventory_itemsUpdateToOneWithWhereWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.inventory_itemsUpdateWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>, Prisma.inventory_itemsUncheckedUpdateWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
};
export type inventory_itemsCreateNestedManyWithoutPrinting_finishesInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutPrinting_finishesInput, Prisma.inventory_itemsUncheckedCreateWithoutPrinting_finishesInput> | Prisma.inventory_itemsCreateWithoutPrinting_finishesInput[] | Prisma.inventory_itemsUncheckedCreateWithoutPrinting_finishesInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutPrinting_finishesInput | Prisma.inventory_itemsCreateOrConnectWithoutPrinting_finishesInput[];
    createMany?: Prisma.inventory_itemsCreateManyPrinting_finishesInputEnvelope;
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
};
export type inventory_itemsUncheckedCreateNestedManyWithoutPrinting_finishesInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutPrinting_finishesInput, Prisma.inventory_itemsUncheckedCreateWithoutPrinting_finishesInput> | Prisma.inventory_itemsCreateWithoutPrinting_finishesInput[] | Prisma.inventory_itemsUncheckedCreateWithoutPrinting_finishesInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutPrinting_finishesInput | Prisma.inventory_itemsCreateOrConnectWithoutPrinting_finishesInput[];
    createMany?: Prisma.inventory_itemsCreateManyPrinting_finishesInputEnvelope;
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
};
export type inventory_itemsUpdateManyWithoutPrinting_finishesNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutPrinting_finishesInput, Prisma.inventory_itemsUncheckedCreateWithoutPrinting_finishesInput> | Prisma.inventory_itemsCreateWithoutPrinting_finishesInput[] | Prisma.inventory_itemsUncheckedCreateWithoutPrinting_finishesInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutPrinting_finishesInput | Prisma.inventory_itemsCreateOrConnectWithoutPrinting_finishesInput[];
    upsert?: Prisma.inventory_itemsUpsertWithWhereUniqueWithoutPrinting_finishesInput | Prisma.inventory_itemsUpsertWithWhereUniqueWithoutPrinting_finishesInput[];
    createMany?: Prisma.inventory_itemsCreateManyPrinting_finishesInputEnvelope;
    set?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    disconnect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    delete?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    update?: Prisma.inventory_itemsUpdateWithWhereUniqueWithoutPrinting_finishesInput | Prisma.inventory_itemsUpdateWithWhereUniqueWithoutPrinting_finishesInput[];
    updateMany?: Prisma.inventory_itemsUpdateManyWithWhereWithoutPrinting_finishesInput | Prisma.inventory_itemsUpdateManyWithWhereWithoutPrinting_finishesInput[];
    deleteMany?: Prisma.inventory_itemsScalarWhereInput | Prisma.inventory_itemsScalarWhereInput[];
};
export type inventory_itemsUncheckedUpdateManyWithoutPrinting_finishesNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutPrinting_finishesInput, Prisma.inventory_itemsUncheckedCreateWithoutPrinting_finishesInput> | Prisma.inventory_itemsCreateWithoutPrinting_finishesInput[] | Prisma.inventory_itemsUncheckedCreateWithoutPrinting_finishesInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutPrinting_finishesInput | Prisma.inventory_itemsCreateOrConnectWithoutPrinting_finishesInput[];
    upsert?: Prisma.inventory_itemsUpsertWithWhereUniqueWithoutPrinting_finishesInput | Prisma.inventory_itemsUpsertWithWhereUniqueWithoutPrinting_finishesInput[];
    createMany?: Prisma.inventory_itemsCreateManyPrinting_finishesInputEnvelope;
    set?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    disconnect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    delete?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    update?: Prisma.inventory_itemsUpdateWithWhereUniqueWithoutPrinting_finishesInput | Prisma.inventory_itemsUpdateWithWhereUniqueWithoutPrinting_finishesInput[];
    updateMany?: Prisma.inventory_itemsUpdateManyWithWhereWithoutPrinting_finishesInput | Prisma.inventory_itemsUpdateManyWithWhereWithoutPrinting_finishesInput[];
    deleteMany?: Prisma.inventory_itemsScalarWhereInput | Prisma.inventory_itemsScalarWhereInput[];
};
export type inventory_itemsCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutStoresInput, Prisma.inventory_itemsUncheckedCreateWithoutStoresInput> | Prisma.inventory_itemsCreateWithoutStoresInput[] | Prisma.inventory_itemsUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutStoresInput | Prisma.inventory_itemsCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.inventory_itemsCreateManyStoresInputEnvelope;
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
};
export type inventory_itemsUncheckedCreateNestedManyWithoutStoresInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutStoresInput, Prisma.inventory_itemsUncheckedCreateWithoutStoresInput> | Prisma.inventory_itemsCreateWithoutStoresInput[] | Prisma.inventory_itemsUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutStoresInput | Prisma.inventory_itemsCreateOrConnectWithoutStoresInput[];
    createMany?: Prisma.inventory_itemsCreateManyStoresInputEnvelope;
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
};
export type inventory_itemsUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutStoresInput, Prisma.inventory_itemsUncheckedCreateWithoutStoresInput> | Prisma.inventory_itemsCreateWithoutStoresInput[] | Prisma.inventory_itemsUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutStoresInput | Prisma.inventory_itemsCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.inventory_itemsUpsertWithWhereUniqueWithoutStoresInput | Prisma.inventory_itemsUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.inventory_itemsCreateManyStoresInputEnvelope;
    set?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    disconnect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    delete?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    update?: Prisma.inventory_itemsUpdateWithWhereUniqueWithoutStoresInput | Prisma.inventory_itemsUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.inventory_itemsUpdateManyWithWhereWithoutStoresInput | Prisma.inventory_itemsUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.inventory_itemsScalarWhereInput | Prisma.inventory_itemsScalarWhereInput[];
};
export type inventory_itemsUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutStoresInput, Prisma.inventory_itemsUncheckedCreateWithoutStoresInput> | Prisma.inventory_itemsCreateWithoutStoresInput[] | Prisma.inventory_itemsUncheckedCreateWithoutStoresInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutStoresInput | Prisma.inventory_itemsCreateOrConnectWithoutStoresInput[];
    upsert?: Prisma.inventory_itemsUpsertWithWhereUniqueWithoutStoresInput | Prisma.inventory_itemsUpsertWithWhereUniqueWithoutStoresInput[];
    createMany?: Prisma.inventory_itemsCreateManyStoresInputEnvelope;
    set?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    disconnect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    delete?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    update?: Prisma.inventory_itemsUpdateWithWhereUniqueWithoutStoresInput | Prisma.inventory_itemsUpdateWithWhereUniqueWithoutStoresInput[];
    updateMany?: Prisma.inventory_itemsUpdateManyWithWhereWithoutStoresInput | Prisma.inventory_itemsUpdateManyWithWhereWithoutStoresInput[];
    deleteMany?: Prisma.inventory_itemsScalarWhereInput | Prisma.inventory_itemsScalarWhereInput[];
};
export type inventory_itemsCreateNestedOneWithoutTransaction_itemsInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutTransaction_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutTransaction_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutTransaction_itemsInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
};
export type inventory_itemsCreateNestedOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
};
export type inventory_itemsUpdateOneRequiredWithoutTransaction_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutTransaction_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutTransaction_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutTransaction_itemsInput;
    upsert?: Prisma.inventory_itemsUpsertWithoutTransaction_itemsInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.inventory_itemsUpdateToOneWithWhereWithoutTransaction_itemsInput, Prisma.inventory_itemsUpdateWithoutTransaction_itemsInput>, Prisma.inventory_itemsUncheckedUpdateWithoutTransaction_itemsInput>;
};
export type inventory_itemsUpdateOneWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    upsert?: Prisma.inventory_itemsUpsertWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    disconnect?: Prisma.inventory_itemsWhereInput | boolean;
    delete?: Prisma.inventory_itemsWhereInput | boolean;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.inventory_itemsUpdateToOneWithWhereWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput, Prisma.inventory_itemsUpdateWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput>, Prisma.inventory_itemsUncheckedUpdateWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput>;
};
export type inventory_itemsCreateNestedManyWithoutUser_profilesInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutUser_profilesInput, Prisma.inventory_itemsUncheckedCreateWithoutUser_profilesInput> | Prisma.inventory_itemsCreateWithoutUser_profilesInput[] | Prisma.inventory_itemsUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutUser_profilesInput | Prisma.inventory_itemsCreateOrConnectWithoutUser_profilesInput[];
    createMany?: Prisma.inventory_itemsCreateManyUser_profilesInputEnvelope;
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
};
export type inventory_itemsUncheckedCreateNestedManyWithoutUser_profilesInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutUser_profilesInput, Prisma.inventory_itemsUncheckedCreateWithoutUser_profilesInput> | Prisma.inventory_itemsCreateWithoutUser_profilesInput[] | Prisma.inventory_itemsUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutUser_profilesInput | Prisma.inventory_itemsCreateOrConnectWithoutUser_profilesInput[];
    createMany?: Prisma.inventory_itemsCreateManyUser_profilesInputEnvelope;
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
};
export type inventory_itemsUpdateManyWithoutUser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutUser_profilesInput, Prisma.inventory_itemsUncheckedCreateWithoutUser_profilesInput> | Prisma.inventory_itemsCreateWithoutUser_profilesInput[] | Prisma.inventory_itemsUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutUser_profilesInput | Prisma.inventory_itemsCreateOrConnectWithoutUser_profilesInput[];
    upsert?: Prisma.inventory_itemsUpsertWithWhereUniqueWithoutUser_profilesInput | Prisma.inventory_itemsUpsertWithWhereUniqueWithoutUser_profilesInput[];
    createMany?: Prisma.inventory_itemsCreateManyUser_profilesInputEnvelope;
    set?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    disconnect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    delete?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    update?: Prisma.inventory_itemsUpdateWithWhereUniqueWithoutUser_profilesInput | Prisma.inventory_itemsUpdateWithWhereUniqueWithoutUser_profilesInput[];
    updateMany?: Prisma.inventory_itemsUpdateManyWithWhereWithoutUser_profilesInput | Prisma.inventory_itemsUpdateManyWithWhereWithoutUser_profilesInput[];
    deleteMany?: Prisma.inventory_itemsScalarWhereInput | Prisma.inventory_itemsScalarWhereInput[];
};
export type inventory_itemsUncheckedUpdateManyWithoutUser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutUser_profilesInput, Prisma.inventory_itemsUncheckedCreateWithoutUser_profilesInput> | Prisma.inventory_itemsCreateWithoutUser_profilesInput[] | Prisma.inventory_itemsUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutUser_profilesInput | Prisma.inventory_itemsCreateOrConnectWithoutUser_profilesInput[];
    upsert?: Prisma.inventory_itemsUpsertWithWhereUniqueWithoutUser_profilesInput | Prisma.inventory_itemsUpsertWithWhereUniqueWithoutUser_profilesInput[];
    createMany?: Prisma.inventory_itemsCreateManyUser_profilesInputEnvelope;
    set?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    disconnect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    delete?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    update?: Prisma.inventory_itemsUpdateWithWhereUniqueWithoutUser_profilesInput | Prisma.inventory_itemsUpdateWithWhereUniqueWithoutUser_profilesInput[];
    updateMany?: Prisma.inventory_itemsUpdateManyWithWhereWithoutUser_profilesInput | Prisma.inventory_itemsUpdateManyWithWhereWithoutUser_profilesInput[];
    deleteMany?: Prisma.inventory_itemsScalarWhereInput | Prisma.inventory_itemsScalarWhereInput[];
};
export type inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
};
export type inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
};
export type inventory_itemsCreateNestedOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
};
export type inventory_itemsUpdateOneRequiredWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    upsert?: Prisma.inventory_itemsUpsertWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.inventory_itemsUpdateToOneWithWhereWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput>, Prisma.inventory_itemsUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
};
export type inventory_itemsUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    upsert?: Prisma.inventory_itemsUpsertWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    disconnect?: Prisma.inventory_itemsWhereInput | boolean;
    delete?: Prisma.inventory_itemsWhereInput | boolean;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.inventory_itemsUpdateToOneWithWhereWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.inventory_itemsUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>, Prisma.inventory_itemsUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
};
export type inventory_itemsUpdateOneWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    upsert?: Prisma.inventory_itemsUpsertWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    disconnect?: Prisma.inventory_itemsWhereInput | boolean;
    delete?: Prisma.inventory_itemsWhereInput | boolean;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.inventory_itemsUpdateToOneWithWhereWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.inventory_itemsUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>, Prisma.inventory_itemsUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
};
export type inventory_itemsCreateNestedOneWithoutWishlist_offer_requested_itemsInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutWishlist_offer_requested_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutWishlist_offer_requested_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutWishlist_offer_requested_itemsInput;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
};
export type inventory_itemsUpdateOneWithoutWishlist_offer_requested_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutWishlist_offer_requested_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutWishlist_offer_requested_itemsInput>;
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutWishlist_offer_requested_itemsInput;
    upsert?: Prisma.inventory_itemsUpsertWithoutWishlist_offer_requested_itemsInput;
    disconnect?: Prisma.inventory_itemsWhereInput | boolean;
    delete?: Prisma.inventory_itemsWhereInput | boolean;
    connect?: Prisma.inventory_itemsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.inventory_itemsUpdateToOneWithWhereWithoutWishlist_offer_requested_itemsInput, Prisma.inventory_itemsUpdateWithoutWishlist_offer_requested_itemsInput>, Prisma.inventory_itemsUncheckedUpdateWithoutWishlist_offer_requested_itemsInput>;
};
export type inventory_itemsCreateNestedManyWithoutStore_gamesInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutStore_gamesInput, Prisma.inventory_itemsUncheckedCreateWithoutStore_gamesInput> | Prisma.inventory_itemsCreateWithoutStore_gamesInput[] | Prisma.inventory_itemsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutStore_gamesInput | Prisma.inventory_itemsCreateOrConnectWithoutStore_gamesInput[];
    createMany?: Prisma.inventory_itemsCreateManyStore_gamesInputEnvelope;
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
};
export type inventory_itemsUncheckedCreateNestedManyWithoutStore_gamesInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutStore_gamesInput, Prisma.inventory_itemsUncheckedCreateWithoutStore_gamesInput> | Prisma.inventory_itemsCreateWithoutStore_gamesInput[] | Prisma.inventory_itemsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutStore_gamesInput | Prisma.inventory_itemsCreateOrConnectWithoutStore_gamesInput[];
    createMany?: Prisma.inventory_itemsCreateManyStore_gamesInputEnvelope;
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
};
export type inventory_itemsUpdateManyWithoutStore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutStore_gamesInput, Prisma.inventory_itemsUncheckedCreateWithoutStore_gamesInput> | Prisma.inventory_itemsCreateWithoutStore_gamesInput[] | Prisma.inventory_itemsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutStore_gamesInput | Prisma.inventory_itemsCreateOrConnectWithoutStore_gamesInput[];
    upsert?: Prisma.inventory_itemsUpsertWithWhereUniqueWithoutStore_gamesInput | Prisma.inventory_itemsUpsertWithWhereUniqueWithoutStore_gamesInput[];
    createMany?: Prisma.inventory_itemsCreateManyStore_gamesInputEnvelope;
    set?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    disconnect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    delete?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    update?: Prisma.inventory_itemsUpdateWithWhereUniqueWithoutStore_gamesInput | Prisma.inventory_itemsUpdateWithWhereUniqueWithoutStore_gamesInput[];
    updateMany?: Prisma.inventory_itemsUpdateManyWithWhereWithoutStore_gamesInput | Prisma.inventory_itemsUpdateManyWithWhereWithoutStore_gamesInput[];
    deleteMany?: Prisma.inventory_itemsScalarWhereInput | Prisma.inventory_itemsScalarWhereInput[];
};
export type inventory_itemsUncheckedUpdateManyWithoutStore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.inventory_itemsCreateWithoutStore_gamesInput, Prisma.inventory_itemsUncheckedCreateWithoutStore_gamesInput> | Prisma.inventory_itemsCreateWithoutStore_gamesInput[] | Prisma.inventory_itemsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.inventory_itemsCreateOrConnectWithoutStore_gamesInput | Prisma.inventory_itemsCreateOrConnectWithoutStore_gamesInput[];
    upsert?: Prisma.inventory_itemsUpsertWithWhereUniqueWithoutStore_gamesInput | Prisma.inventory_itemsUpsertWithWhereUniqueWithoutStore_gamesInput[];
    createMany?: Prisma.inventory_itemsCreateManyStore_gamesInputEnvelope;
    set?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    disconnect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    delete?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    connect?: Prisma.inventory_itemsWhereUniqueInput | Prisma.inventory_itemsWhereUniqueInput[];
    update?: Prisma.inventory_itemsUpdateWithWhereUniqueWithoutStore_gamesInput | Prisma.inventory_itemsUpdateWithWhereUniqueWithoutStore_gamesInput[];
    updateMany?: Prisma.inventory_itemsUpdateManyWithWhereWithoutStore_gamesInput | Prisma.inventory_itemsUpdateManyWithWhereWithoutStore_gamesInput[];
    deleteMany?: Prisma.inventory_itemsScalarWhereInput | Prisma.inventory_itemsScalarWhereInput[];
};
export type inventory_itemsCreateWithoutCard_printingsInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutCard_printingsInput = {
    id?: string;
    finish: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutCard_printingsInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutCard_printingsInput, Prisma.inventory_itemsUncheckedCreateWithoutCard_printingsInput>;
};
export type inventory_itemsCreateManyCard_printingsInputEnvelope = {
    data: Prisma.inventory_itemsCreateManyCard_printingsInput | Prisma.inventory_itemsCreateManyCard_printingsInput[];
    skipDuplicates?: boolean;
};
export type inventory_itemsUpsertWithWhereUniqueWithoutCard_printingsInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutCard_printingsInput, Prisma.inventory_itemsUncheckedUpdateWithoutCard_printingsInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutCard_printingsInput, Prisma.inventory_itemsUncheckedCreateWithoutCard_printingsInput>;
};
export type inventory_itemsUpdateWithWhereUniqueWithoutCard_printingsInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutCard_printingsInput, Prisma.inventory_itemsUncheckedUpdateWithoutCard_printingsInput>;
};
export type inventory_itemsUpdateManyWithWhereWithoutCard_printingsInput = {
    where: Prisma.inventory_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateManyMutationInput, Prisma.inventory_itemsUncheckedUpdateManyWithoutCard_printingsInput>;
};
export type inventory_itemsScalarWhereInput = {
    AND?: Prisma.inventory_itemsScalarWhereInput | Prisma.inventory_itemsScalarWhereInput[];
    OR?: Prisma.inventory_itemsScalarWhereInput[];
    NOT?: Prisma.inventory_itemsScalarWhereInput | Prisma.inventory_itemsScalarWhereInput[];
    id?: Prisma.UuidFilter<"inventory_items"> | string;
    printing_id?: Prisma.UuidFilter<"inventory_items"> | string;
    finish?: Prisma.StringFilter<"inventory_items"> | string;
    owner_user_id?: Prisma.UuidNullableFilter<"inventory_items"> | string | null;
    owner_store_id?: Prisma.UuidNullableFilter<"inventory_items"> | string | null;
    collection_id?: Prisma.UuidNullableFilter<"inventory_items"> | string | null;
    condition?: Prisma.StringFilter<"inventory_items"> | string;
    language_code?: Prisma.StringFilter<"inventory_items"> | string;
    quantity?: Prisma.IntFilter<"inventory_items"> | number;
    is_signed?: Prisma.BoolFilter<"inventory_items"> | boolean;
    is_altered?: Prisma.BoolFilter<"inventory_items"> | boolean;
    is_graded?: Prisma.BoolFilter<"inventory_items"> | boolean;
    grading_company?: Prisma.StringNullableFilter<"inventory_items"> | string | null;
    grade?: Prisma.StringNullableFilter<"inventory_items"> | string | null;
    certification_number?: Prisma.StringNullableFilter<"inventory_items"> | string | null;
    acquired_at?: Prisma.DateTimeNullableFilter<"inventory_items"> | Date | string | null;
    acquired_price?: Prisma.DecimalNullableFilter<"inventory_items"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFilter<"inventory_items"> | string;
    notes?: Prisma.StringNullableFilter<"inventory_items"> | string | null;
    created_at?: Prisma.DateTimeFilter<"inventory_items"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"inventory_items"> | Date | string;
    game_id?: Prisma.UuidFilter<"inventory_items"> | string;
};
export type inventory_itemsCreateWithoutCollectionsInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutCollectionsInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_store_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutCollectionsInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutCollectionsInput, Prisma.inventory_itemsUncheckedCreateWithoutCollectionsInput>;
};
export type inventory_itemsCreateManyCollectionsInputEnvelope = {
    data: Prisma.inventory_itemsCreateManyCollectionsInput | Prisma.inventory_itemsCreateManyCollectionsInput[];
    skipDuplicates?: boolean;
};
export type inventory_itemsUpsertWithWhereUniqueWithoutCollectionsInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutCollectionsInput, Prisma.inventory_itemsUncheckedUpdateWithoutCollectionsInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutCollectionsInput, Prisma.inventory_itemsUncheckedCreateWithoutCollectionsInput>;
};
export type inventory_itemsUpdateWithWhereUniqueWithoutCollectionsInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutCollectionsInput, Prisma.inventory_itemsUncheckedUpdateWithoutCollectionsInput>;
};
export type inventory_itemsUpdateManyWithWhereWithoutCollectionsInput = {
    where: Prisma.inventory_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateManyMutationInput, Prisma.inventory_itemsUncheckedUpdateManyWithoutCollectionsInput>;
};
export type inventory_itemsCreateWithoutInventory_item_interestsInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutInventory_item_interestsInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutInventory_item_interestsInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutInventory_item_interestsInput, Prisma.inventory_itemsUncheckedCreateWithoutInventory_item_interestsInput>;
};
export type inventory_itemsUpsertWithoutInventory_item_interestsInput = {
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutInventory_item_interestsInput, Prisma.inventory_itemsUncheckedUpdateWithoutInventory_item_interestsInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutInventory_item_interestsInput, Prisma.inventory_itemsUncheckedCreateWithoutInventory_item_interestsInput>;
    where?: Prisma.inventory_itemsWhereInput;
};
export type inventory_itemsUpdateToOneWithWhereWithoutInventory_item_interestsInput = {
    where?: Prisma.inventory_itemsWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutInventory_item_interestsInput, Prisma.inventory_itemsUncheckedUpdateWithoutInventory_item_interestsInput>;
};
export type inventory_itemsUpdateWithoutInventory_item_interestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutInventory_item_interestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsCreateWithoutInventory_item_photosInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutInventory_item_photosInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutInventory_item_photosInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutInventory_item_photosInput, Prisma.inventory_itemsUncheckedCreateWithoutInventory_item_photosInput>;
};
export type inventory_itemsUpsertWithoutInventory_item_photosInput = {
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutInventory_item_photosInput, Prisma.inventory_itemsUncheckedUpdateWithoutInventory_item_photosInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutInventory_item_photosInput, Prisma.inventory_itemsUncheckedCreateWithoutInventory_item_photosInput>;
    where?: Prisma.inventory_itemsWhereInput;
};
export type inventory_itemsUpdateToOneWithWhereWithoutInventory_item_photosInput = {
    where?: Prisma.inventory_itemsWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutInventory_item_photosInput, Prisma.inventory_itemsUncheckedUpdateWithoutInventory_item_photosInput>;
};
export type inventory_itemsUpdateWithoutInventory_item_photosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutInventory_item_photosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsCreateWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput>;
};
export type inventory_itemsCreateWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput>;
};
export type inventory_itemsCreateWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput>;
};
export type inventory_itemsUpsertWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput = {
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput>;
    where?: Prisma.inventory_itemsWhereInput;
};
export type inventory_itemsUpdateToOneWithWhereWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput = {
    where?: Prisma.inventory_itemsWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput>;
};
export type inventory_itemsUpdateWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutListings_listings_inventory_item_id_game_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUpsertWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput>;
    where?: Prisma.inventory_itemsWhereInput;
};
export type inventory_itemsUpdateToOneWithWhereWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    where?: Prisma.inventory_itemsWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput>;
};
export type inventory_itemsUpdateWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutListings_listings_inventory_item_id_seller_store_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUpsertWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput>;
    where?: Prisma.inventory_itemsWhereInput;
};
export type inventory_itemsUpdateToOneWithWhereWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    where?: Prisma.inventory_itemsWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput>;
};
export type inventory_itemsUpdateWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutListings_listings_inventory_item_id_seller_user_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsCreateWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
};
export type inventory_itemsCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
};
export type inventory_itemsCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
};
export type inventory_itemsUpsertWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
    where?: Prisma.inventory_itemsWhereInput;
};
export type inventory_itemsUpdateToOneWithWhereWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    where?: Prisma.inventory_itemsWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
};
export type inventory_itemsUpdateWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUpsertWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
    where?: Prisma.inventory_itemsWhereInput;
};
export type inventory_itemsUpdateToOneWithWhereWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    where?: Prisma.inventory_itemsWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
};
export type inventory_itemsUpdateWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUpsertWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
    where?: Prisma.inventory_itemsWhereInput;
};
export type inventory_itemsUpdateToOneWithWhereWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    where?: Prisma.inventory_itemsWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
};
export type inventory_itemsUpdateWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsCreateWithoutPrinting_finishesInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutPrinting_finishesInput = {
    id?: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutPrinting_finishesInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutPrinting_finishesInput, Prisma.inventory_itemsUncheckedCreateWithoutPrinting_finishesInput>;
};
export type inventory_itemsCreateManyPrinting_finishesInputEnvelope = {
    data: Prisma.inventory_itemsCreateManyPrinting_finishesInput | Prisma.inventory_itemsCreateManyPrinting_finishesInput[];
    skipDuplicates?: boolean;
};
export type inventory_itemsUpsertWithWhereUniqueWithoutPrinting_finishesInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutPrinting_finishesInput, Prisma.inventory_itemsUncheckedUpdateWithoutPrinting_finishesInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutPrinting_finishesInput, Prisma.inventory_itemsUncheckedCreateWithoutPrinting_finishesInput>;
};
export type inventory_itemsUpdateWithWhereUniqueWithoutPrinting_finishesInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutPrinting_finishesInput, Prisma.inventory_itemsUncheckedUpdateWithoutPrinting_finishesInput>;
};
export type inventory_itemsUpdateManyWithWhereWithoutPrinting_finishesInput = {
    where: Prisma.inventory_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateManyMutationInput, Prisma.inventory_itemsUncheckedUpdateManyWithoutPrinting_finishesInput>;
};
export type inventory_itemsCreateWithoutStoresInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutStoresInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutStoresInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutStoresInput, Prisma.inventory_itemsUncheckedCreateWithoutStoresInput>;
};
export type inventory_itemsCreateManyStoresInputEnvelope = {
    data: Prisma.inventory_itemsCreateManyStoresInput | Prisma.inventory_itemsCreateManyStoresInput[];
    skipDuplicates?: boolean;
};
export type inventory_itemsUpsertWithWhereUniqueWithoutStoresInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutStoresInput, Prisma.inventory_itemsUncheckedUpdateWithoutStoresInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutStoresInput, Prisma.inventory_itemsUncheckedCreateWithoutStoresInput>;
};
export type inventory_itemsUpdateWithWhereUniqueWithoutStoresInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutStoresInput, Prisma.inventory_itemsUncheckedUpdateWithoutStoresInput>;
};
export type inventory_itemsUpdateManyWithWhereWithoutStoresInput = {
    where: Prisma.inventory_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateManyMutationInput, Prisma.inventory_itemsUncheckedUpdateManyWithoutStoresInput>;
};
export type inventory_itemsCreateWithoutTransaction_itemsInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutTransaction_itemsInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutTransaction_itemsInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutTransaction_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutTransaction_itemsInput>;
};
export type inventory_itemsCreateWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput>;
};
export type inventory_itemsUpsertWithoutTransaction_itemsInput = {
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutTransaction_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutTransaction_itemsInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutTransaction_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutTransaction_itemsInput>;
    where?: Prisma.inventory_itemsWhereInput;
};
export type inventory_itemsUpdateToOneWithWhereWithoutTransaction_itemsInput = {
    where?: Prisma.inventory_itemsWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutTransaction_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutTransaction_itemsInput>;
};
export type inventory_itemsUpdateWithoutTransaction_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutTransaction_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUpsertWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput>;
    where?: Prisma.inventory_itemsWhereInput;
};
export type inventory_itemsUpdateToOneWithWhereWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    where?: Prisma.inventory_itemsWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput>;
};
export type inventory_itemsUpdateWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsCreateWithoutUser_profilesInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutUser_profilesInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutUser_profilesInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutUser_profilesInput, Prisma.inventory_itemsUncheckedCreateWithoutUser_profilesInput>;
};
export type inventory_itemsCreateManyUser_profilesInputEnvelope = {
    data: Prisma.inventory_itemsCreateManyUser_profilesInput | Prisma.inventory_itemsCreateManyUser_profilesInput[];
    skipDuplicates?: boolean;
};
export type inventory_itemsUpsertWithWhereUniqueWithoutUser_profilesInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutUser_profilesInput, Prisma.inventory_itemsUncheckedUpdateWithoutUser_profilesInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutUser_profilesInput, Prisma.inventory_itemsUncheckedCreateWithoutUser_profilesInput>;
};
export type inventory_itemsUpdateWithWhereUniqueWithoutUser_profilesInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutUser_profilesInput, Prisma.inventory_itemsUncheckedUpdateWithoutUser_profilesInput>;
};
export type inventory_itemsUpdateManyWithWhereWithoutUser_profilesInput = {
    where: Prisma.inventory_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateManyMutationInput, Prisma.inventory_itemsUncheckedUpdateManyWithoutUser_profilesInput>;
};
export type inventory_itemsCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
};
export type inventory_itemsCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
};
export type inventory_itemsCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
};
export type inventory_itemsUpsertWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
    where?: Prisma.inventory_itemsWhereInput;
};
export type inventory_itemsUpdateToOneWithWhereWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    where?: Prisma.inventory_itemsWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput>;
};
export type inventory_itemsUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUpsertWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
    where?: Prisma.inventory_itemsWhereInput;
};
export type inventory_itemsUpdateToOneWithWhereWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    where?: Prisma.inventory_itemsWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput>;
};
export type inventory_itemsUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUpsertWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
    where?: Prisma.inventory_itemsWhereInput;
};
export type inventory_itemsUpdateToOneWithWhereWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    where?: Prisma.inventory_itemsWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput>;
};
export type inventory_itemsUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsCreateWithoutWishlist_offer_requested_itemsInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutWishlist_offer_requested_itemsInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutWishlist_offer_requested_itemsInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutWishlist_offer_requested_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutWishlist_offer_requested_itemsInput>;
};
export type inventory_itemsUpsertWithoutWishlist_offer_requested_itemsInput = {
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutWishlist_offer_requested_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutWishlist_offer_requested_itemsInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutWishlist_offer_requested_itemsInput, Prisma.inventory_itemsUncheckedCreateWithoutWishlist_offer_requested_itemsInput>;
    where?: Prisma.inventory_itemsWhereInput;
};
export type inventory_itemsUpdateToOneWithWhereWithoutWishlist_offer_requested_itemsInput = {
    where?: Prisma.inventory_itemsWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutWishlist_offer_requested_itemsInput, Prisma.inventory_itemsUncheckedUpdateWithoutWishlist_offer_requested_itemsInput>;
};
export type inventory_itemsUpdateWithoutWishlist_offer_requested_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutWishlist_offer_requested_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
};
export type inventory_itemsCreateWithoutStore_gamesInput = {
    id?: string;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosCreateNestedManyWithoutInventory_itemsInput;
    collections?: Prisma.collectionsCreateNestedOneWithoutInventory_itemsInput;
    stores?: Prisma.storesCreateNestedOneWithoutInventory_itemsInput;
    user_profiles?: Prisma.user_profilesCreateNestedOneWithoutInventory_itemsInput;
    printing_finishes: Prisma.printing_finishesCreateNestedOneWithoutInventory_itemsInput;
    card_printings: Prisma.card_printingsCreateNestedOneWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsUncheckedCreateWithoutStore_gamesInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedCreateNestedManyWithoutInventory_itemsInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedCreateNestedManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedCreateNestedManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    transaction_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedCreateNestedManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedCreateNestedManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedCreateNestedManyWithoutInventory_itemsInput;
};
export type inventory_itemsCreateOrConnectWithoutStore_gamesInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutStore_gamesInput, Prisma.inventory_itemsUncheckedCreateWithoutStore_gamesInput>;
};
export type inventory_itemsCreateManyStore_gamesInputEnvelope = {
    data: Prisma.inventory_itemsCreateManyStore_gamesInput | Prisma.inventory_itemsCreateManyStore_gamesInput[];
    skipDuplicates?: boolean;
};
export type inventory_itemsUpsertWithWhereUniqueWithoutStore_gamesInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutStore_gamesInput, Prisma.inventory_itemsUncheckedUpdateWithoutStore_gamesInput>;
    create: Prisma.XOR<Prisma.inventory_itemsCreateWithoutStore_gamesInput, Prisma.inventory_itemsUncheckedCreateWithoutStore_gamesInput>;
};
export type inventory_itemsUpdateWithWhereUniqueWithoutStore_gamesInput = {
    where: Prisma.inventory_itemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateWithoutStore_gamesInput, Prisma.inventory_itemsUncheckedUpdateWithoutStore_gamesInput>;
};
export type inventory_itemsUpdateManyWithWhereWithoutStore_gamesInput = {
    where: Prisma.inventory_itemsScalarWhereInput;
    data: Prisma.XOR<Prisma.inventory_itemsUpdateManyMutationInput, Prisma.inventory_itemsUncheckedUpdateManyWithoutStore_gamesInput>;
};
export type inventory_itemsCreateManyCard_printingsInput = {
    id?: string;
    finish: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type inventory_itemsUpdateWithoutCard_printingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutCard_printingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateManyWithoutCard_printingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventory_itemsCreateManyCollectionsInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_store_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type inventory_itemsUpdateWithoutCollectionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutCollectionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateManyWithoutCollectionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type inventory_itemsCreateManyPrinting_finishesInput = {
    id?: string;
    owner_user_id?: string | null;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type inventory_itemsUpdateWithoutPrinting_finishesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutPrinting_finishesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateManyWithoutPrinting_finishesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type inventory_itemsCreateManyStoresInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type inventory_itemsUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateManyWithoutStoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type inventory_itemsCreateManyUser_profilesInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_store_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type inventory_itemsUpdateWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateManyWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type inventory_itemsCreateManyStore_gamesInput = {
    id?: string;
    printing_id: string;
    finish: string;
    owner_user_id?: string | null;
    collection_id?: string | null;
    condition: string;
    language_code?: string;
    quantity?: number;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: string | null;
    grade?: string | null;
    certification_number?: string | null;
    acquired_at?: Date | string | null;
    acquired_price?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type inventory_itemsUpdateWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUpdateManyWithoutInventory_itemsNestedInput;
    collections?: Prisma.collectionsUpdateOneWithoutInventory_itemsNestedInput;
    stores?: Prisma.storesUpdateOneWithoutInventory_itemsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneWithoutInventory_itemsNestedInput;
    printing_finishes?: Prisma.printing_finishesUpdateOneRequiredWithoutInventory_itemsNestedInput;
    card_printings?: Prisma.card_printingsUpdateOneRequiredWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory_item_interests?: Prisma.inventory_item_interestsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    inventory_item_photos?: Prisma.inventory_item_photosUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    listings_listings_inventory_item_id_game_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_game_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_store_idToinventory_itemsNestedInput;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: Prisma.listingsUncheckedUpdateManyWithoutInventory_items_listings_inventory_item_id_seller_user_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.offer_itemsUncheckedUpdateManyWithoutInventory_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    transaction_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: Prisma.transaction_itemsUncheckedUpdateManyWithoutInventory_items_transaction_items_result_inventory_item_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsNestedInput;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: Prisma.wishlist_offer_itemsUncheckedUpdateManyWithoutInventory_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsNestedInput;
    wishlist_offer_requested_items?: Prisma.wishlist_offer_requested_itemsUncheckedUpdateManyWithoutInventory_itemsNestedInput;
};
export type inventory_itemsUncheckedUpdateManyWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    printing_id?: Prisma.StringFieldUpdateOperationsInput | string;
    finish?: Prisma.StringFieldUpdateOperationsInput | string;
    owner_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    collection_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condition?: Prisma.StringFieldUpdateOperationsInput | string;
    language_code?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    is_signed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_altered?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_graded?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    grading_company?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grade?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    certification_number?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acquired_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acquired_price?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type Inventory_itemsCountOutputType
 */
export type Inventory_itemsCountOutputType = {
    inventory_item_interests: number;
    inventory_item_photos: number;
    listings_listings_inventory_item_id_game_idToinventory_items: number;
    listings_listings_inventory_item_id_seller_store_idToinventory_items: number;
    listings_listings_inventory_item_id_seller_user_idToinventory_items: number;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items: number;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items: number;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items: number;
    transaction_items: number;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items: number;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items: number;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items: number;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items: number;
    wishlist_offer_requested_items: number;
};
export type Inventory_itemsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_item_interests?: boolean | Inventory_itemsCountOutputTypeCountInventory_item_interestsArgs;
    inventory_item_photos?: boolean | Inventory_itemsCountOutputTypeCountInventory_item_photosArgs;
    listings_listings_inventory_item_id_game_idToinventory_items?: boolean | Inventory_itemsCountOutputTypeCountListings_listings_inventory_item_id_game_idToinventory_itemsArgs;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: boolean | Inventory_itemsCountOutputTypeCountListings_listings_inventory_item_id_seller_store_idToinventory_itemsArgs;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: boolean | Inventory_itemsCountOutputTypeCountListings_listings_inventory_item_id_seller_user_idToinventory_itemsArgs;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: boolean | Inventory_itemsCountOutputTypeCountOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsArgs;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: boolean | Inventory_itemsCountOutputTypeCountOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: boolean | Inventory_itemsCountOutputTypeCountOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs;
    transaction_items?: boolean | Inventory_itemsCountOutputTypeCountTransaction_itemsArgs;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: boolean | Inventory_itemsCountOutputTypeCountTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsArgs;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: boolean | Inventory_itemsCountOutputTypeCountWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsArgs;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: boolean | Inventory_itemsCountOutputTypeCountWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: boolean | Inventory_itemsCountOutputTypeCountWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs;
    wishlist_offer_requested_items?: boolean | Inventory_itemsCountOutputTypeCountWishlist_offer_requested_itemsArgs;
};
/**
 * Inventory_itemsCountOutputType without action
 */
export type Inventory_itemsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory_itemsCountOutputType
     */
    select?: Prisma.Inventory_itemsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * Inventory_itemsCountOutputType without action
 */
export type Inventory_itemsCountOutputTypeCountInventory_item_interestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventory_item_interestsWhereInput;
};
/**
 * Inventory_itemsCountOutputType without action
 */
export type Inventory_itemsCountOutputTypeCountInventory_item_photosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.inventory_item_photosWhereInput;
};
/**
 * Inventory_itemsCountOutputType without action
 */
export type Inventory_itemsCountOutputTypeCountListings_listings_inventory_item_id_game_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listingsWhereInput;
};
/**
 * Inventory_itemsCountOutputType without action
 */
export type Inventory_itemsCountOutputTypeCountListings_listings_inventory_item_id_seller_store_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listingsWhereInput;
};
/**
 * Inventory_itemsCountOutputType without action
 */
export type Inventory_itemsCountOutputTypeCountListings_listings_inventory_item_id_seller_user_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.listingsWhereInput;
};
/**
 * Inventory_itemsCountOutputType without action
 */
export type Inventory_itemsCountOutputTypeCountOffer_items_offer_items_inventory_item_id_game_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.offer_itemsWhereInput;
};
/**
 * Inventory_itemsCountOutputType without action
 */
export type Inventory_itemsCountOutputTypeCountOffer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.offer_itemsWhereInput;
};
/**
 * Inventory_itemsCountOutputType without action
 */
export type Inventory_itemsCountOutputTypeCountOffer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.offer_itemsWhereInput;
};
/**
 * Inventory_itemsCountOutputType without action
 */
export type Inventory_itemsCountOutputTypeCountTransaction_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transaction_itemsWhereInput;
};
/**
 * Inventory_itemsCountOutputType without action
 */
export type Inventory_itemsCountOutputTypeCountTransaction_items_transaction_items_result_inventory_item_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transaction_itemsWhereInput;
};
/**
 * Inventory_itemsCountOutputType without action
 */
export type Inventory_itemsCountOutputTypeCountWishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_offer_itemsWhereInput;
};
/**
 * Inventory_itemsCountOutputType without action
 */
export type Inventory_itemsCountOutputTypeCountWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_offer_itemsWhereInput;
};
/**
 * Inventory_itemsCountOutputType without action
 */
export type Inventory_itemsCountOutputTypeCountWishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_offer_itemsWhereInput;
};
/**
 * Inventory_itemsCountOutputType without action
 */
export type Inventory_itemsCountOutputTypeCountWishlist_offer_requested_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_offer_requested_itemsWhereInput;
};
export type inventory_itemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    printing_id?: boolean;
    finish?: boolean;
    owner_user_id?: boolean;
    owner_store_id?: boolean;
    collection_id?: boolean;
    condition?: boolean;
    language_code?: boolean;
    quantity?: boolean;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: boolean;
    grade?: boolean;
    certification_number?: boolean;
    acquired_at?: boolean;
    acquired_price?: boolean;
    status?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    inventory_item_interests?: boolean | Prisma.inventory_items$inventory_item_interestsArgs<ExtArgs>;
    inventory_item_photos?: boolean | Prisma.inventory_items$inventory_item_photosArgs<ExtArgs>;
    collections?: boolean | Prisma.inventory_items$collectionsArgs<ExtArgs>;
    stores?: boolean | Prisma.inventory_items$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.inventory_items$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.inventory_items$user_profilesArgs<ExtArgs>;
    printing_finishes?: boolean | Prisma.printing_finishesDefaultArgs<ExtArgs>;
    card_printings?: boolean | Prisma.card_printingsDefaultArgs<ExtArgs>;
    listings_listings_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_items$listings_listings_inventory_item_id_game_idToinventory_itemsArgs<ExtArgs>;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: boolean | Prisma.inventory_items$listings_listings_inventory_item_id_seller_store_idToinventory_itemsArgs<ExtArgs>;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: boolean | Prisma.inventory_items$listings_listings_inventory_item_id_seller_user_idToinventory_itemsArgs<ExtArgs>;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_items$offer_items_offer_items_inventory_item_id_game_idToinventory_itemsArgs<ExtArgs>;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: boolean | Prisma.inventory_items$offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: boolean | Prisma.inventory_items$offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>;
    transaction_items?: boolean | Prisma.inventory_items$transaction_itemsArgs<ExtArgs>;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: boolean | Prisma.inventory_items$transaction_items_transaction_items_result_inventory_item_idToinventory_itemsArgs<ExtArgs>;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_items$wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsArgs<ExtArgs>;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: boolean | Prisma.inventory_items$wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: boolean | Prisma.inventory_items$wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>;
    wishlist_offer_requested_items?: boolean | Prisma.inventory_items$wishlist_offer_requested_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Inventory_itemsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventory_items"]>;
export type inventory_itemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    printing_id?: boolean;
    finish?: boolean;
    owner_user_id?: boolean;
    owner_store_id?: boolean;
    collection_id?: boolean;
    condition?: boolean;
    language_code?: boolean;
    quantity?: boolean;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: boolean;
    grade?: boolean;
    certification_number?: boolean;
    acquired_at?: boolean;
    acquired_price?: boolean;
    status?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    collections?: boolean | Prisma.inventory_items$collectionsArgs<ExtArgs>;
    stores?: boolean | Prisma.inventory_items$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.inventory_items$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.inventory_items$user_profilesArgs<ExtArgs>;
    printing_finishes?: boolean | Prisma.printing_finishesDefaultArgs<ExtArgs>;
    card_printings?: boolean | Prisma.card_printingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventory_items"]>;
export type inventory_itemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    printing_id?: boolean;
    finish?: boolean;
    owner_user_id?: boolean;
    owner_store_id?: boolean;
    collection_id?: boolean;
    condition?: boolean;
    language_code?: boolean;
    quantity?: boolean;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: boolean;
    grade?: boolean;
    certification_number?: boolean;
    acquired_at?: boolean;
    acquired_price?: boolean;
    status?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    collections?: boolean | Prisma.inventory_items$collectionsArgs<ExtArgs>;
    stores?: boolean | Prisma.inventory_items$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.inventory_items$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.inventory_items$user_profilesArgs<ExtArgs>;
    printing_finishes?: boolean | Prisma.printing_finishesDefaultArgs<ExtArgs>;
    card_printings?: boolean | Prisma.card_printingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventory_items"]>;
export type inventory_itemsSelectScalar = {
    id?: boolean;
    printing_id?: boolean;
    finish?: boolean;
    owner_user_id?: boolean;
    owner_store_id?: boolean;
    collection_id?: boolean;
    condition?: boolean;
    language_code?: boolean;
    quantity?: boolean;
    is_signed?: boolean;
    is_altered?: boolean;
    is_graded?: boolean;
    grading_company?: boolean;
    grade?: boolean;
    certification_number?: boolean;
    acquired_at?: boolean;
    acquired_price?: boolean;
    status?: boolean;
    notes?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
};
export type inventory_itemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "printing_id" | "finish" | "owner_user_id" | "owner_store_id" | "collection_id" | "condition" | "language_code" | "quantity" | "is_signed" | "is_altered" | "is_graded" | "grading_company" | "grade" | "certification_number" | "acquired_at" | "acquired_price" | "status" | "notes" | "created_at" | "updated_at" | "game_id", ExtArgs["result"]["inventory_items"]>;
export type inventory_itemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory_item_interests?: boolean | Prisma.inventory_items$inventory_item_interestsArgs<ExtArgs>;
    inventory_item_photos?: boolean | Prisma.inventory_items$inventory_item_photosArgs<ExtArgs>;
    collections?: boolean | Prisma.inventory_items$collectionsArgs<ExtArgs>;
    stores?: boolean | Prisma.inventory_items$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.inventory_items$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.inventory_items$user_profilesArgs<ExtArgs>;
    printing_finishes?: boolean | Prisma.printing_finishesDefaultArgs<ExtArgs>;
    card_printings?: boolean | Prisma.card_printingsDefaultArgs<ExtArgs>;
    listings_listings_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_items$listings_listings_inventory_item_id_game_idToinventory_itemsArgs<ExtArgs>;
    listings_listings_inventory_item_id_seller_store_idToinventory_items?: boolean | Prisma.inventory_items$listings_listings_inventory_item_id_seller_store_idToinventory_itemsArgs<ExtArgs>;
    listings_listings_inventory_item_id_seller_user_idToinventory_items?: boolean | Prisma.inventory_items$listings_listings_inventory_item_id_seller_user_idToinventory_itemsArgs<ExtArgs>;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_items$offer_items_offer_items_inventory_item_id_game_idToinventory_itemsArgs<ExtArgs>;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items?: boolean | Prisma.inventory_items$offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items?: boolean | Prisma.inventory_items$offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>;
    transaction_items?: boolean | Prisma.inventory_items$transaction_itemsArgs<ExtArgs>;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items?: boolean | Prisma.inventory_items$transaction_items_transaction_items_result_inventory_item_idToinventory_itemsArgs<ExtArgs>;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items?: boolean | Prisma.inventory_items$wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsArgs<ExtArgs>;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items?: boolean | Prisma.inventory_items$wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items?: boolean | Prisma.inventory_items$wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>;
    wishlist_offer_requested_items?: boolean | Prisma.inventory_items$wishlist_offer_requested_itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.Inventory_itemsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type inventory_itemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    collections?: boolean | Prisma.inventory_items$collectionsArgs<ExtArgs>;
    stores?: boolean | Prisma.inventory_items$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.inventory_items$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.inventory_items$user_profilesArgs<ExtArgs>;
    printing_finishes?: boolean | Prisma.printing_finishesDefaultArgs<ExtArgs>;
    card_printings?: boolean | Prisma.card_printingsDefaultArgs<ExtArgs>;
};
export type inventory_itemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    collections?: boolean | Prisma.inventory_items$collectionsArgs<ExtArgs>;
    stores?: boolean | Prisma.inventory_items$storesArgs<ExtArgs>;
    store_games?: boolean | Prisma.inventory_items$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.inventory_items$user_profilesArgs<ExtArgs>;
    printing_finishes?: boolean | Prisma.printing_finishesDefaultArgs<ExtArgs>;
    card_printings?: boolean | Prisma.card_printingsDefaultArgs<ExtArgs>;
};
export type $inventory_itemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "inventory_items";
    objects: {
        inventory_item_interests: Prisma.$inventory_item_interestsPayload<ExtArgs>[];
        inventory_item_photos: Prisma.$inventory_item_photosPayload<ExtArgs>[];
        collections: Prisma.$collectionsPayload<ExtArgs> | null;
        stores: Prisma.$storesPayload<ExtArgs> | null;
        store_games: Prisma.$store_gamesPayload<ExtArgs> | null;
        user_profiles: Prisma.$user_profilesPayload<ExtArgs> | null;
        printing_finishes: Prisma.$printing_finishesPayload<ExtArgs>;
        card_printings: Prisma.$card_printingsPayload<ExtArgs>;
        listings_listings_inventory_item_id_game_idToinventory_items: Prisma.$listingsPayload<ExtArgs>[];
        listings_listings_inventory_item_id_seller_store_idToinventory_items: Prisma.$listingsPayload<ExtArgs>[];
        listings_listings_inventory_item_id_seller_user_idToinventory_items: Prisma.$listingsPayload<ExtArgs>[];
        offer_items_offer_items_inventory_item_id_game_idToinventory_items: Prisma.$offer_itemsPayload<ExtArgs>[];
        offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items: Prisma.$offer_itemsPayload<ExtArgs>[];
        offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items: Prisma.$offer_itemsPayload<ExtArgs>[];
        transaction_items: Prisma.$transaction_itemsPayload<ExtArgs>[];
        transaction_items_transaction_items_result_inventory_item_idToinventory_items: Prisma.$transaction_itemsPayload<ExtArgs>[];
        wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items: Prisma.$wishlist_offer_itemsPayload<ExtArgs>[];
        wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items: Prisma.$wishlist_offer_itemsPayload<ExtArgs>[];
        wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items: Prisma.$wishlist_offer_itemsPayload<ExtArgs>[];
        wishlist_offer_requested_items: Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        printing_id: string;
        finish: string;
        owner_user_id: string | null;
        owner_store_id: string | null;
        collection_id: string | null;
        condition: string;
        language_code: string;
        quantity: number;
        is_signed: boolean;
        is_altered: boolean;
        is_graded: boolean;
        grading_company: string | null;
        grade: string | null;
        certification_number: string | null;
        acquired_at: Date | null;
        acquired_price: runtime.Decimal | null;
        status: string;
        notes: string | null;
        created_at: Date;
        updated_at: Date;
        game_id: string;
    }, ExtArgs["result"]["inventory_items"]>;
    composites: {};
};
export type inventory_itemsGetPayload<S extends boolean | null | undefined | inventory_itemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload, S>;
export type inventory_itemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<inventory_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Inventory_itemsCountAggregateInputType | true;
};
export interface inventory_itemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['inventory_items'];
        meta: {
            name: 'inventory_items';
        };
    };
    /**
     * Find zero or one Inventory_items that matches the filter.
     * @param {inventory_itemsFindUniqueArgs} args - Arguments to find a Inventory_items
     * @example
     * // Get one Inventory_items
     * const inventory_items = await prisma.inventory_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventory_itemsFindUniqueArgs>(args: Prisma.SelectSubset<T, inventory_itemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Inventory_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventory_itemsFindUniqueOrThrowArgs} args - Arguments to find a Inventory_items
     * @example
     * // Get one Inventory_items
     * const inventory_items = await prisma.inventory_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventory_itemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, inventory_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Inventory_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_itemsFindFirstArgs} args - Arguments to find a Inventory_items
     * @example
     * // Get one Inventory_items
     * const inventory_items = await prisma.inventory_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventory_itemsFindFirstArgs>(args?: Prisma.SelectSubset<T, inventory_itemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Inventory_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_itemsFindFirstOrThrowArgs} args - Arguments to find a Inventory_items
     * @example
     * // Get one Inventory_items
     * const inventory_items = await prisma.inventory_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventory_itemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, inventory_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Inventory_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventory_items
     * const inventory_items = await prisma.inventory_items.findMany()
     *
     * // Get first 10 Inventory_items
     * const inventory_items = await prisma.inventory_items.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const inventory_itemsWithIdOnly = await prisma.inventory_items.findMany({ select: { id: true } })
     *
     */
    findMany<T extends inventory_itemsFindManyArgs>(args?: Prisma.SelectSubset<T, inventory_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Inventory_items.
     * @param {inventory_itemsCreateArgs} args - Arguments to create a Inventory_items.
     * @example
     * // Create one Inventory_items
     * const Inventory_items = await prisma.inventory_items.create({
     *   data: {
     *     // ... data to create a Inventory_items
     *   }
     * })
     *
     */
    create<T extends inventory_itemsCreateArgs>(args: Prisma.SelectSubset<T, inventory_itemsCreateArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Inventory_items.
     * @param {inventory_itemsCreateManyArgs} args - Arguments to create many Inventory_items.
     * @example
     * // Create many Inventory_items
     * const inventory_items = await prisma.inventory_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends inventory_itemsCreateManyArgs>(args?: Prisma.SelectSubset<T, inventory_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Inventory_items and returns the data saved in the database.
     * @param {inventory_itemsCreateManyAndReturnArgs} args - Arguments to create many Inventory_items.
     * @example
     * // Create many Inventory_items
     * const inventory_items = await prisma.inventory_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Inventory_items and only return the `id`
     * const inventory_itemsWithIdOnly = await prisma.inventory_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends inventory_itemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, inventory_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Inventory_items.
     * @param {inventory_itemsDeleteArgs} args - Arguments to delete one Inventory_items.
     * @example
     * // Delete one Inventory_items
     * const Inventory_items = await prisma.inventory_items.delete({
     *   where: {
     *     // ... filter to delete one Inventory_items
     *   }
     * })
     *
     */
    delete<T extends inventory_itemsDeleteArgs>(args: Prisma.SelectSubset<T, inventory_itemsDeleteArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Inventory_items.
     * @param {inventory_itemsUpdateArgs} args - Arguments to update one Inventory_items.
     * @example
     * // Update one Inventory_items
     * const inventory_items = await prisma.inventory_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends inventory_itemsUpdateArgs>(args: Prisma.SelectSubset<T, inventory_itemsUpdateArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Inventory_items.
     * @param {inventory_itemsDeleteManyArgs} args - Arguments to filter Inventory_items to delete.
     * @example
     * // Delete a few Inventory_items
     * const { count } = await prisma.inventory_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends inventory_itemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, inventory_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Inventory_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventory_items
     * const inventory_items = await prisma.inventory_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends inventory_itemsUpdateManyArgs>(args: Prisma.SelectSubset<T, inventory_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Inventory_items and returns the data updated in the database.
     * @param {inventory_itemsUpdateManyAndReturnArgs} args - Arguments to update many Inventory_items.
     * @example
     * // Update many Inventory_items
     * const inventory_items = await prisma.inventory_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Inventory_items and only return the `id`
     * const inventory_itemsWithIdOnly = await prisma.inventory_items.updateManyAndReturn({
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
    updateManyAndReturn<T extends inventory_itemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, inventory_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Inventory_items.
     * @param {inventory_itemsUpsertArgs} args - Arguments to update or create a Inventory_items.
     * @example
     * // Update or create a Inventory_items
     * const inventory_items = await prisma.inventory_items.upsert({
     *   create: {
     *     // ... data to create a Inventory_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory_items we want to update
     *   }
     * })
     */
    upsert<T extends inventory_itemsUpsertArgs>(args: Prisma.SelectSubset<T, inventory_itemsUpsertArgs<ExtArgs>>): Prisma.Prisma__inventory_itemsClient<runtime.Types.Result.GetResult<Prisma.$inventory_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Inventory_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_itemsCountArgs} args - Arguments to filter Inventory_items to count.
     * @example
     * // Count the number of Inventory_items
     * const count = await prisma.inventory_items.count({
     *   where: {
     *     // ... the filter for the Inventory_items we want to count
     *   }
     * })
    **/
    count<T extends inventory_itemsCountArgs>(args?: Prisma.Subset<T, inventory_itemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Inventory_itemsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Inventory_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Inventory_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Inventory_itemsAggregateArgs>(args: Prisma.Subset<T, Inventory_itemsAggregateArgs>): Prisma.PrismaPromise<GetInventory_itemsAggregateType<T>>;
    /**
     * Group by Inventory_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_itemsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends inventory_itemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: inventory_itemsGroupByArgs['orderBy'];
    } : {
        orderBy?: inventory_itemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, inventory_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventory_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the inventory_items model
     */
    readonly fields: inventory_itemsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for inventory_items.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__inventory_itemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    inventory_item_interests<T extends Prisma.inventory_items$inventory_item_interestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_items$inventory_item_interestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_item_interestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    inventory_item_photos<T extends Prisma.inventory_items$inventory_item_photosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_items$inventory_item_photosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$inventory_item_photosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    collections<T extends Prisma.inventory_items$collectionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_items$collectionsArgs<ExtArgs>>): Prisma.Prisma__collectionsClient<runtime.Types.Result.GetResult<Prisma.$collectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    stores<T extends Prisma.inventory_items$storesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_items$storesArgs<ExtArgs>>): Prisma.Prisma__storesClient<runtime.Types.Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    store_games<T extends Prisma.inventory_items$store_gamesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_items$store_gamesArgs<ExtArgs>>): Prisma.Prisma__store_gamesClient<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user_profiles<T extends Prisma.inventory_items$user_profilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_items$user_profilesArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    printing_finishes<T extends Prisma.printing_finishesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.printing_finishesDefaultArgs<ExtArgs>>): Prisma.Prisma__printing_finishesClient<runtime.Types.Result.GetResult<Prisma.$printing_finishesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    card_printings<T extends Prisma.card_printingsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.card_printingsDefaultArgs<ExtArgs>>): Prisma.Prisma__card_printingsClient<runtime.Types.Result.GetResult<Prisma.$card_printingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    listings_listings_inventory_item_id_game_idToinventory_items<T extends Prisma.inventory_items$listings_listings_inventory_item_id_game_idToinventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_items$listings_listings_inventory_item_id_game_idToinventory_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    listings_listings_inventory_item_id_seller_store_idToinventory_items<T extends Prisma.inventory_items$listings_listings_inventory_item_id_seller_store_idToinventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_items$listings_listings_inventory_item_id_seller_store_idToinventory_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    listings_listings_inventory_item_id_seller_user_idToinventory_items<T extends Prisma.inventory_items$listings_listings_inventory_item_id_seller_user_idToinventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_items$listings_listings_inventory_item_id_seller_user_idToinventory_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$listingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    offer_items_offer_items_inventory_item_id_game_idToinventory_items<T extends Prisma.inventory_items$offer_items_offer_items_inventory_item_id_game_idToinventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_items$offer_items_offer_items_inventory_item_id_game_idToinventory_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$offer_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items<T extends Prisma.inventory_items$offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_items$offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$offer_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items<T extends Prisma.inventory_items$offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_items$offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$offer_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transaction_items<T extends Prisma.inventory_items$transaction_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_items$transaction_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transaction_items_transaction_items_result_inventory_item_idToinventory_items<T extends Prisma.inventory_items$transaction_items_transaction_items_result_inventory_item_idToinventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_items$transaction_items_transaction_items_result_inventory_item_idToinventory_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transaction_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items<T extends Prisma.inventory_items$wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_items$wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items<T extends Prisma.inventory_items$wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_items$wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items<T extends Prisma.inventory_items$wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_items$wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlist_offer_requested_items<T extends Prisma.inventory_items$wishlist_offer_requested_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.inventory_items$wishlist_offer_requested_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_offer_requested_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the inventory_items model
 */
export interface inventory_itemsFieldRefs {
    readonly id: Prisma.FieldRef<"inventory_items", 'String'>;
    readonly printing_id: Prisma.FieldRef<"inventory_items", 'String'>;
    readonly finish: Prisma.FieldRef<"inventory_items", 'String'>;
    readonly owner_user_id: Prisma.FieldRef<"inventory_items", 'String'>;
    readonly owner_store_id: Prisma.FieldRef<"inventory_items", 'String'>;
    readonly collection_id: Prisma.FieldRef<"inventory_items", 'String'>;
    readonly condition: Prisma.FieldRef<"inventory_items", 'String'>;
    readonly language_code: Prisma.FieldRef<"inventory_items", 'String'>;
    readonly quantity: Prisma.FieldRef<"inventory_items", 'Int'>;
    readonly is_signed: Prisma.FieldRef<"inventory_items", 'Boolean'>;
    readonly is_altered: Prisma.FieldRef<"inventory_items", 'Boolean'>;
    readonly is_graded: Prisma.FieldRef<"inventory_items", 'Boolean'>;
    readonly grading_company: Prisma.FieldRef<"inventory_items", 'String'>;
    readonly grade: Prisma.FieldRef<"inventory_items", 'String'>;
    readonly certification_number: Prisma.FieldRef<"inventory_items", 'String'>;
    readonly acquired_at: Prisma.FieldRef<"inventory_items", 'DateTime'>;
    readonly acquired_price: Prisma.FieldRef<"inventory_items", 'Decimal'>;
    readonly status: Prisma.FieldRef<"inventory_items", 'String'>;
    readonly notes: Prisma.FieldRef<"inventory_items", 'String'>;
    readonly created_at: Prisma.FieldRef<"inventory_items", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"inventory_items", 'DateTime'>;
    readonly game_id: Prisma.FieldRef<"inventory_items", 'String'>;
}
/**
 * inventory_items findUnique
 */
export type inventory_itemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which inventory_items to fetch.
     */
    where: Prisma.inventory_itemsWhereUniqueInput;
};
/**
 * inventory_items findUniqueOrThrow
 */
export type inventory_itemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which inventory_items to fetch.
     */
    where: Prisma.inventory_itemsWhereUniqueInput;
};
/**
 * inventory_items findFirst
 */
export type inventory_itemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which inventory_items to fetch.
     */
    where?: Prisma.inventory_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventory_items to fetch.
     */
    orderBy?: Prisma.inventory_itemsOrderByWithRelationInput | Prisma.inventory_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for inventory_items.
     */
    cursor?: Prisma.inventory_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventory_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventory_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventory_items.
     */
    distinct?: Prisma.Inventory_itemsScalarFieldEnum | Prisma.Inventory_itemsScalarFieldEnum[];
};
/**
 * inventory_items findFirstOrThrow
 */
export type inventory_itemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which inventory_items to fetch.
     */
    where?: Prisma.inventory_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventory_items to fetch.
     */
    orderBy?: Prisma.inventory_itemsOrderByWithRelationInput | Prisma.inventory_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for inventory_items.
     */
    cursor?: Prisma.inventory_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventory_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventory_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventory_items.
     */
    distinct?: Prisma.Inventory_itemsScalarFieldEnum | Prisma.Inventory_itemsScalarFieldEnum[];
};
/**
 * inventory_items findMany
 */
export type inventory_itemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which inventory_items to fetch.
     */
    where?: Prisma.inventory_itemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of inventory_items to fetch.
     */
    orderBy?: Prisma.inventory_itemsOrderByWithRelationInput | Prisma.inventory_itemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing inventory_items.
     */
    cursor?: Prisma.inventory_itemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` inventory_items from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` inventory_items.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of inventory_items.
     */
    distinct?: Prisma.Inventory_itemsScalarFieldEnum | Prisma.Inventory_itemsScalarFieldEnum[];
};
/**
 * inventory_items create
 */
export type inventory_itemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a inventory_items.
     */
    data: Prisma.XOR<Prisma.inventory_itemsCreateInput, Prisma.inventory_itemsUncheckedCreateInput>;
};
/**
 * inventory_items createMany
 */
export type inventory_itemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventory_items.
     */
    data: Prisma.inventory_itemsCreateManyInput | Prisma.inventory_itemsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * inventory_items createManyAndReturn
 */
export type inventory_itemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_items
     */
    select?: Prisma.inventory_itemsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory_items
     */
    omit?: Prisma.inventory_itemsOmit<ExtArgs> | null;
    /**
     * The data used to create many inventory_items.
     */
    data: Prisma.inventory_itemsCreateManyInput | Prisma.inventory_itemsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.inventory_itemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * inventory_items update
 */
export type inventory_itemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a inventory_items.
     */
    data: Prisma.XOR<Prisma.inventory_itemsUpdateInput, Prisma.inventory_itemsUncheckedUpdateInput>;
    /**
     * Choose, which inventory_items to update.
     */
    where: Prisma.inventory_itemsWhereUniqueInput;
};
/**
 * inventory_items updateMany
 */
export type inventory_itemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update inventory_items.
     */
    data: Prisma.XOR<Prisma.inventory_itemsUpdateManyMutationInput, Prisma.inventory_itemsUncheckedUpdateManyInput>;
    /**
     * Filter which inventory_items to update
     */
    where?: Prisma.inventory_itemsWhereInput;
    /**
     * Limit how many inventory_items to update.
     */
    limit?: number;
};
/**
 * inventory_items updateManyAndReturn
 */
export type inventory_itemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_items
     */
    select?: Prisma.inventory_itemsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory_items
     */
    omit?: Prisma.inventory_itemsOmit<ExtArgs> | null;
    /**
     * The data used to update inventory_items.
     */
    data: Prisma.XOR<Prisma.inventory_itemsUpdateManyMutationInput, Prisma.inventory_itemsUncheckedUpdateManyInput>;
    /**
     * Filter which inventory_items to update
     */
    where?: Prisma.inventory_itemsWhereInput;
    /**
     * Limit how many inventory_items to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.inventory_itemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * inventory_items upsert
 */
export type inventory_itemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the inventory_items to update in case it exists.
     */
    where: Prisma.inventory_itemsWhereUniqueInput;
    /**
     * In case the inventory_items found by the `where` argument doesn't exist, create a new inventory_items with this data.
     */
    create: Prisma.XOR<Prisma.inventory_itemsCreateInput, Prisma.inventory_itemsUncheckedCreateInput>;
    /**
     * In case the inventory_items was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.inventory_itemsUpdateInput, Prisma.inventory_itemsUncheckedUpdateInput>;
};
/**
 * inventory_items delete
 */
export type inventory_itemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which inventory_items to delete.
     */
    where: Prisma.inventory_itemsWhereUniqueInput;
};
/**
 * inventory_items deleteMany
 */
export type inventory_itemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which inventory_items to delete
     */
    where?: Prisma.inventory_itemsWhereInput;
    /**
     * Limit how many inventory_items to delete.
     */
    limit?: number;
};
/**
 * inventory_items.inventory_item_interests
 */
export type inventory_items$inventory_item_interestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * inventory_items.inventory_item_photos
 */
export type inventory_items$inventory_item_photosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_item_photos
     */
    select?: Prisma.inventory_item_photosSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the inventory_item_photos
     */
    omit?: Prisma.inventory_item_photosOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.inventory_item_photosInclude<ExtArgs> | null;
    where?: Prisma.inventory_item_photosWhereInput;
    orderBy?: Prisma.inventory_item_photosOrderByWithRelationInput | Prisma.inventory_item_photosOrderByWithRelationInput[];
    cursor?: Prisma.inventory_item_photosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Inventory_item_photosScalarFieldEnum | Prisma.Inventory_item_photosScalarFieldEnum[];
};
/**
 * inventory_items.collections
 */
export type inventory_items$collectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * inventory_items.stores
 */
export type inventory_items$storesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * inventory_items.store_games
 */
export type inventory_items$store_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * inventory_items.user_profiles
 */
export type inventory_items$user_profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * inventory_items.listings_listings_inventory_item_id_game_idToinventory_items
 */
export type inventory_items$listings_listings_inventory_item_id_game_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.listingsOrderByWithRelationInput | Prisma.listingsOrderByWithRelationInput[];
    cursor?: Prisma.listingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ListingsScalarFieldEnum | Prisma.ListingsScalarFieldEnum[];
};
/**
 * inventory_items.listings_listings_inventory_item_id_seller_store_idToinventory_items
 */
export type inventory_items$listings_listings_inventory_item_id_seller_store_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.listingsOrderByWithRelationInput | Prisma.listingsOrderByWithRelationInput[];
    cursor?: Prisma.listingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ListingsScalarFieldEnum | Prisma.ListingsScalarFieldEnum[];
};
/**
 * inventory_items.listings_listings_inventory_item_id_seller_user_idToinventory_items
 */
export type inventory_items$listings_listings_inventory_item_id_seller_user_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.listingsOrderByWithRelationInput | Prisma.listingsOrderByWithRelationInput[];
    cursor?: Prisma.listingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ListingsScalarFieldEnum | Prisma.ListingsScalarFieldEnum[];
};
/**
 * inventory_items.offer_items_offer_items_inventory_item_id_game_idToinventory_items
 */
export type inventory_items$offer_items_offer_items_inventory_item_id_game_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * inventory_items.offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_items
 */
export type inventory_items$offer_items_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * inventory_items.offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_items
 */
export type inventory_items$offer_items_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * inventory_items.transaction_items
 */
export type inventory_items$transaction_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * inventory_items.transaction_items_transaction_items_result_inventory_item_idToinventory_items
 */
export type inventory_items$transaction_items_transaction_items_result_inventory_item_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * inventory_items.wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_items
 */
export type inventory_items$wishlist_offer_items_wishlist_offer_items_inventory_item_id_game_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * inventory_items.wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_items
 */
export type inventory_items$wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_store_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * inventory_items.wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_items
 */
export type inventory_items$wishlist_offer_items_wishlist_offer_items_inventory_item_id_offerer_user_idToinventory_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * inventory_items.wishlist_offer_requested_items
 */
export type inventory_items$wishlist_offer_requested_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * inventory_items without action
 */
export type inventory_itemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
