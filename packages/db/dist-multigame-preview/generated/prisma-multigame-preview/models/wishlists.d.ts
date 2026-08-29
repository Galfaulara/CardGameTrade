import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model wishlists
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type wishlistsModel = runtime.Types.Result.DefaultSelection<Prisma.$wishlistsPayload>;
export type AggregateWishlists = {
    _count: WishlistsCountAggregateOutputType | null;
    _min: WishlistsMinAggregateOutputType | null;
    _max: WishlistsMaxAggregateOutputType | null;
};
export type WishlistsMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    name: string | null;
    description: string | null;
    visibility: string | null;
    status: string | null;
    preferred_store_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    game_id: string | null;
};
export type WishlistsMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    name: string | null;
    description: string | null;
    visibility: string | null;
    status: string | null;
    preferred_store_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    game_id: string | null;
};
export type WishlistsCountAggregateOutputType = {
    id: number;
    user_id: number;
    name: number;
    description: number;
    visibility: number;
    status: number;
    preferred_store_id: number;
    created_at: number;
    updated_at: number;
    game_id: number;
    _all: number;
};
export type WishlistsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    name?: true;
    description?: true;
    visibility?: true;
    status?: true;
    preferred_store_id?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
};
export type WishlistsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    name?: true;
    description?: true;
    visibility?: true;
    status?: true;
    preferred_store_id?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
};
export type WishlistsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    name?: true;
    description?: true;
    visibility?: true;
    status?: true;
    preferred_store_id?: true;
    created_at?: true;
    updated_at?: true;
    game_id?: true;
    _all?: true;
};
export type WishlistsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which wishlists to aggregate.
     */
    where?: Prisma.wishlistsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlists to fetch.
     */
    orderBy?: Prisma.wishlistsOrderByWithRelationInput | Prisma.wishlistsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.wishlistsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned wishlists
    **/
    _count?: true | WishlistsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: WishlistsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: WishlistsMaxAggregateInputType;
};
export type GetWishlistsAggregateType<T extends WishlistsAggregateArgs> = {
    [P in keyof T & keyof AggregateWishlists]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWishlists[P]> : Prisma.GetScalarType<T[P], AggregateWishlists[P]>;
};
export type wishlistsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlistsWhereInput;
    orderBy?: Prisma.wishlistsOrderByWithAggregationInput | Prisma.wishlistsOrderByWithAggregationInput[];
    by: Prisma.WishlistsScalarFieldEnum[] | Prisma.WishlistsScalarFieldEnum;
    having?: Prisma.wishlistsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WishlistsCountAggregateInputType | true;
    _min?: WishlistsMinAggregateInputType;
    _max?: WishlistsMaxAggregateInputType;
};
export type WishlistsGroupByOutputType = {
    id: string;
    user_id: string;
    name: string;
    description: string | null;
    visibility: string;
    status: string;
    preferred_store_id: string | null;
    created_at: Date;
    updated_at: Date;
    game_id: string;
    _count: WishlistsCountAggregateOutputType | null;
    _min: WishlistsMinAggregateOutputType | null;
    _max: WishlistsMaxAggregateOutputType | null;
};
export type GetWishlistsGroupByPayload<T extends wishlistsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WishlistsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WishlistsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WishlistsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WishlistsGroupByOutputType[P]>;
}>>;
export type wishlistsWhereInput = {
    AND?: Prisma.wishlistsWhereInput | Prisma.wishlistsWhereInput[];
    OR?: Prisma.wishlistsWhereInput[];
    NOT?: Prisma.wishlistsWhereInput | Prisma.wishlistsWhereInput[];
    id?: Prisma.UuidFilter<"wishlists"> | string;
    user_id?: Prisma.UuidFilter<"wishlists"> | string;
    name?: Prisma.StringFilter<"wishlists"> | string;
    description?: Prisma.StringNullableFilter<"wishlists"> | string | null;
    visibility?: Prisma.StringFilter<"wishlists"> | string;
    status?: Prisma.StringFilter<"wishlists"> | string;
    preferred_store_id?: Prisma.UuidNullableFilter<"wishlists"> | string | null;
    created_at?: Prisma.DateTimeFilter<"wishlists"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"wishlists"> | Date | string;
    game_id?: Prisma.UuidFilter<"wishlists"> | string;
    wishlist_items?: Prisma.Wishlist_itemsListRelationFilter;
    games?: Prisma.XOR<Prisma.GamesScalarRelationFilter, Prisma.gamesWhereInput>;
    store_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    user_profiles?: Prisma.XOR<Prisma.User_profilesScalarRelationFilter, Prisma.user_profilesWhereInput>;
};
export type wishlistsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    preferred_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    wishlist_items?: Prisma.wishlist_itemsOrderByRelationAggregateInput;
    games?: Prisma.gamesOrderByWithRelationInput;
    store_games?: Prisma.store_gamesOrderByWithRelationInput;
    user_profiles?: Prisma.user_profilesOrderByWithRelationInput;
};
export type wishlistsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    id_game_id?: Prisma.wishlistsIdGame_idCompoundUniqueInput;
    user_id_game_id_name?: Prisma.wishlistsUser_idGame_idNameCompoundUniqueInput;
    AND?: Prisma.wishlistsWhereInput | Prisma.wishlistsWhereInput[];
    OR?: Prisma.wishlistsWhereInput[];
    NOT?: Prisma.wishlistsWhereInput | Prisma.wishlistsWhereInput[];
    user_id?: Prisma.UuidFilter<"wishlists"> | string;
    name?: Prisma.StringFilter<"wishlists"> | string;
    description?: Prisma.StringNullableFilter<"wishlists"> | string | null;
    visibility?: Prisma.StringFilter<"wishlists"> | string;
    status?: Prisma.StringFilter<"wishlists"> | string;
    preferred_store_id?: Prisma.UuidNullableFilter<"wishlists"> | string | null;
    created_at?: Prisma.DateTimeFilter<"wishlists"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"wishlists"> | Date | string;
    game_id?: Prisma.UuidFilter<"wishlists"> | string;
    wishlist_items?: Prisma.Wishlist_itemsListRelationFilter;
    games?: Prisma.XOR<Prisma.GamesScalarRelationFilter, Prisma.gamesWhereInput>;
    store_games?: Prisma.XOR<Prisma.Store_gamesNullableScalarRelationFilter, Prisma.store_gamesWhereInput> | null;
    user_profiles?: Prisma.XOR<Prisma.User_profilesScalarRelationFilter, Prisma.user_profilesWhereInput>;
}, "id" | "id_game_id" | "user_id_game_id_name">;
export type wishlistsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    preferred_store_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
    _count?: Prisma.wishlistsCountOrderByAggregateInput;
    _max?: Prisma.wishlistsMaxOrderByAggregateInput;
    _min?: Prisma.wishlistsMinOrderByAggregateInput;
};
export type wishlistsScalarWhereWithAggregatesInput = {
    AND?: Prisma.wishlistsScalarWhereWithAggregatesInput | Prisma.wishlistsScalarWhereWithAggregatesInput[];
    OR?: Prisma.wishlistsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.wishlistsScalarWhereWithAggregatesInput | Prisma.wishlistsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"wishlists"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"wishlists"> | string;
    name?: Prisma.StringWithAggregatesFilter<"wishlists"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"wishlists"> | string | null;
    visibility?: Prisma.StringWithAggregatesFilter<"wishlists"> | string;
    status?: Prisma.StringWithAggregatesFilter<"wishlists"> | string;
    preferred_store_id?: Prisma.UuidNullableWithAggregatesFilter<"wishlists"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"wishlists"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"wishlists"> | Date | string;
    game_id?: Prisma.UuidWithAggregatesFilter<"wishlists"> | string;
};
export type wishlistsCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    visibility?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutWishlistsInput;
    games: Prisma.gamesCreateNestedOneWithoutWishlistsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutWishlistsInput;
    user_profiles: Prisma.user_profilesCreateNestedOneWithoutWishlistsInput;
};
export type wishlistsUncheckedCreateInput = {
    id?: string;
    user_id: string;
    name: string;
    description?: string | null;
    visibility?: string;
    status?: string;
    preferred_store_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutWishlistsInput;
};
export type wishlistsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutWishlistsNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutWishlistsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutWishlistsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneRequiredWithoutWishlistsNestedInput;
};
export type wishlistsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutWishlistsNestedInput;
};
export type wishlistsCreateManyInput = {
    id?: string;
    user_id: string;
    name: string;
    description?: string | null;
    visibility?: string;
    status?: string;
    preferred_store_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type wishlistsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type wishlistsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type WishlistsListRelationFilter = {
    every?: Prisma.wishlistsWhereInput;
    some?: Prisma.wishlistsWhereInput;
    none?: Prisma.wishlistsWhereInput;
};
export type wishlistsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WishlistsScalarRelationFilter = {
    is?: Prisma.wishlistsWhereInput;
    isNot?: Prisma.wishlistsWhereInput;
};
export type wishlistsIdGame_idCompoundUniqueInput = {
    id: string;
    game_id: string;
};
export type wishlistsUser_idGame_idNameCompoundUniqueInput = {
    user_id: string;
    game_id: string;
    name: string;
};
export type wishlistsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    preferred_store_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type wishlistsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    preferred_store_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type wishlistsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    preferred_store_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    game_id?: Prisma.SortOrder;
};
export type wishlistsCreateNestedManyWithoutGamesInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutGamesInput, Prisma.wishlistsUncheckedCreateWithoutGamesInput> | Prisma.wishlistsCreateWithoutGamesInput[] | Prisma.wishlistsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutGamesInput | Prisma.wishlistsCreateOrConnectWithoutGamesInput[];
    createMany?: Prisma.wishlistsCreateManyGamesInputEnvelope;
    connect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
};
export type wishlistsUncheckedCreateNestedManyWithoutGamesInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutGamesInput, Prisma.wishlistsUncheckedCreateWithoutGamesInput> | Prisma.wishlistsCreateWithoutGamesInput[] | Prisma.wishlistsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutGamesInput | Prisma.wishlistsCreateOrConnectWithoutGamesInput[];
    createMany?: Prisma.wishlistsCreateManyGamesInputEnvelope;
    connect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
};
export type wishlistsUpdateManyWithoutGamesNestedInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutGamesInput, Prisma.wishlistsUncheckedCreateWithoutGamesInput> | Prisma.wishlistsCreateWithoutGamesInput[] | Prisma.wishlistsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutGamesInput | Prisma.wishlistsCreateOrConnectWithoutGamesInput[];
    upsert?: Prisma.wishlistsUpsertWithWhereUniqueWithoutGamesInput | Prisma.wishlistsUpsertWithWhereUniqueWithoutGamesInput[];
    createMany?: Prisma.wishlistsCreateManyGamesInputEnvelope;
    set?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    disconnect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    delete?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    connect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    update?: Prisma.wishlistsUpdateWithWhereUniqueWithoutGamesInput | Prisma.wishlistsUpdateWithWhereUniqueWithoutGamesInput[];
    updateMany?: Prisma.wishlistsUpdateManyWithWhereWithoutGamesInput | Prisma.wishlistsUpdateManyWithWhereWithoutGamesInput[];
    deleteMany?: Prisma.wishlistsScalarWhereInput | Prisma.wishlistsScalarWhereInput[];
};
export type wishlistsUncheckedUpdateManyWithoutGamesNestedInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutGamesInput, Prisma.wishlistsUncheckedCreateWithoutGamesInput> | Prisma.wishlistsCreateWithoutGamesInput[] | Prisma.wishlistsUncheckedCreateWithoutGamesInput[];
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutGamesInput | Prisma.wishlistsCreateOrConnectWithoutGamesInput[];
    upsert?: Prisma.wishlistsUpsertWithWhereUniqueWithoutGamesInput | Prisma.wishlistsUpsertWithWhereUniqueWithoutGamesInput[];
    createMany?: Prisma.wishlistsCreateManyGamesInputEnvelope;
    set?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    disconnect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    delete?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    connect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    update?: Prisma.wishlistsUpdateWithWhereUniqueWithoutGamesInput | Prisma.wishlistsUpdateWithWhereUniqueWithoutGamesInput[];
    updateMany?: Prisma.wishlistsUpdateManyWithWhereWithoutGamesInput | Prisma.wishlistsUpdateManyWithWhereWithoutGamesInput[];
    deleteMany?: Prisma.wishlistsScalarWhereInput | Prisma.wishlistsScalarWhereInput[];
};
export type wishlistsCreateNestedManyWithoutUser_profilesInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutUser_profilesInput, Prisma.wishlistsUncheckedCreateWithoutUser_profilesInput> | Prisma.wishlistsCreateWithoutUser_profilesInput[] | Prisma.wishlistsUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutUser_profilesInput | Prisma.wishlistsCreateOrConnectWithoutUser_profilesInput[];
    createMany?: Prisma.wishlistsCreateManyUser_profilesInputEnvelope;
    connect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
};
export type wishlistsUncheckedCreateNestedManyWithoutUser_profilesInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutUser_profilesInput, Prisma.wishlistsUncheckedCreateWithoutUser_profilesInput> | Prisma.wishlistsCreateWithoutUser_profilesInput[] | Prisma.wishlistsUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutUser_profilesInput | Prisma.wishlistsCreateOrConnectWithoutUser_profilesInput[];
    createMany?: Prisma.wishlistsCreateManyUser_profilesInputEnvelope;
    connect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
};
export type wishlistsUpdateManyWithoutUser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutUser_profilesInput, Prisma.wishlistsUncheckedCreateWithoutUser_profilesInput> | Prisma.wishlistsCreateWithoutUser_profilesInput[] | Prisma.wishlistsUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutUser_profilesInput | Prisma.wishlistsCreateOrConnectWithoutUser_profilesInput[];
    upsert?: Prisma.wishlistsUpsertWithWhereUniqueWithoutUser_profilesInput | Prisma.wishlistsUpsertWithWhereUniqueWithoutUser_profilesInput[];
    createMany?: Prisma.wishlistsCreateManyUser_profilesInputEnvelope;
    set?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    disconnect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    delete?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    connect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    update?: Prisma.wishlistsUpdateWithWhereUniqueWithoutUser_profilesInput | Prisma.wishlistsUpdateWithWhereUniqueWithoutUser_profilesInput[];
    updateMany?: Prisma.wishlistsUpdateManyWithWhereWithoutUser_profilesInput | Prisma.wishlistsUpdateManyWithWhereWithoutUser_profilesInput[];
    deleteMany?: Prisma.wishlistsScalarWhereInput | Prisma.wishlistsScalarWhereInput[];
};
export type wishlistsUncheckedUpdateManyWithoutUser_profilesNestedInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutUser_profilesInput, Prisma.wishlistsUncheckedCreateWithoutUser_profilesInput> | Prisma.wishlistsCreateWithoutUser_profilesInput[] | Prisma.wishlistsUncheckedCreateWithoutUser_profilesInput[];
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutUser_profilesInput | Prisma.wishlistsCreateOrConnectWithoutUser_profilesInput[];
    upsert?: Prisma.wishlistsUpsertWithWhereUniqueWithoutUser_profilesInput | Prisma.wishlistsUpsertWithWhereUniqueWithoutUser_profilesInput[];
    createMany?: Prisma.wishlistsCreateManyUser_profilesInputEnvelope;
    set?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    disconnect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    delete?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    connect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    update?: Prisma.wishlistsUpdateWithWhereUniqueWithoutUser_profilesInput | Prisma.wishlistsUpdateWithWhereUniqueWithoutUser_profilesInput[];
    updateMany?: Prisma.wishlistsUpdateManyWithWhereWithoutUser_profilesInput | Prisma.wishlistsUpdateManyWithWhereWithoutUser_profilesInput[];
    deleteMany?: Prisma.wishlistsScalarWhereInput | Prisma.wishlistsScalarWhereInput[];
};
export type wishlistsCreateNestedOneWithoutWishlist_itemsInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutWishlist_itemsInput, Prisma.wishlistsUncheckedCreateWithoutWishlist_itemsInput>;
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutWishlist_itemsInput;
    connect?: Prisma.wishlistsWhereUniqueInput;
};
export type wishlistsUpdateOneRequiredWithoutWishlist_itemsNestedInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutWishlist_itemsInput, Prisma.wishlistsUncheckedCreateWithoutWishlist_itemsInput>;
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutWishlist_itemsInput;
    upsert?: Prisma.wishlistsUpsertWithoutWishlist_itemsInput;
    connect?: Prisma.wishlistsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.wishlistsUpdateToOneWithWhereWithoutWishlist_itemsInput, Prisma.wishlistsUpdateWithoutWishlist_itemsInput>, Prisma.wishlistsUncheckedUpdateWithoutWishlist_itemsInput>;
};
export type wishlistsCreateNestedManyWithoutStore_gamesInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutStore_gamesInput, Prisma.wishlistsUncheckedCreateWithoutStore_gamesInput> | Prisma.wishlistsCreateWithoutStore_gamesInput[] | Prisma.wishlistsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutStore_gamesInput | Prisma.wishlistsCreateOrConnectWithoutStore_gamesInput[];
    createMany?: Prisma.wishlistsCreateManyStore_gamesInputEnvelope;
    connect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
};
export type wishlistsUncheckedCreateNestedManyWithoutStore_gamesInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutStore_gamesInput, Prisma.wishlistsUncheckedCreateWithoutStore_gamesInput> | Prisma.wishlistsCreateWithoutStore_gamesInput[] | Prisma.wishlistsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutStore_gamesInput | Prisma.wishlistsCreateOrConnectWithoutStore_gamesInput[];
    createMany?: Prisma.wishlistsCreateManyStore_gamesInputEnvelope;
    connect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
};
export type wishlistsUpdateManyWithoutStore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutStore_gamesInput, Prisma.wishlistsUncheckedCreateWithoutStore_gamesInput> | Prisma.wishlistsCreateWithoutStore_gamesInput[] | Prisma.wishlistsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutStore_gamesInput | Prisma.wishlistsCreateOrConnectWithoutStore_gamesInput[];
    upsert?: Prisma.wishlistsUpsertWithWhereUniqueWithoutStore_gamesInput | Prisma.wishlistsUpsertWithWhereUniqueWithoutStore_gamesInput[];
    createMany?: Prisma.wishlistsCreateManyStore_gamesInputEnvelope;
    set?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    disconnect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    delete?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    connect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    update?: Prisma.wishlistsUpdateWithWhereUniqueWithoutStore_gamesInput | Prisma.wishlistsUpdateWithWhereUniqueWithoutStore_gamesInput[];
    updateMany?: Prisma.wishlistsUpdateManyWithWhereWithoutStore_gamesInput | Prisma.wishlistsUpdateManyWithWhereWithoutStore_gamesInput[];
    deleteMany?: Prisma.wishlistsScalarWhereInput | Prisma.wishlistsScalarWhereInput[];
};
export type wishlistsUncheckedUpdateManyWithoutStore_gamesNestedInput = {
    create?: Prisma.XOR<Prisma.wishlistsCreateWithoutStore_gamesInput, Prisma.wishlistsUncheckedCreateWithoutStore_gamesInput> | Prisma.wishlistsCreateWithoutStore_gamesInput[] | Prisma.wishlistsUncheckedCreateWithoutStore_gamesInput[];
    connectOrCreate?: Prisma.wishlistsCreateOrConnectWithoutStore_gamesInput | Prisma.wishlistsCreateOrConnectWithoutStore_gamesInput[];
    upsert?: Prisma.wishlistsUpsertWithWhereUniqueWithoutStore_gamesInput | Prisma.wishlistsUpsertWithWhereUniqueWithoutStore_gamesInput[];
    createMany?: Prisma.wishlistsCreateManyStore_gamesInputEnvelope;
    set?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    disconnect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    delete?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    connect?: Prisma.wishlistsWhereUniqueInput | Prisma.wishlistsWhereUniqueInput[];
    update?: Prisma.wishlistsUpdateWithWhereUniqueWithoutStore_gamesInput | Prisma.wishlistsUpdateWithWhereUniqueWithoutStore_gamesInput[];
    updateMany?: Prisma.wishlistsUpdateManyWithWhereWithoutStore_gamesInput | Prisma.wishlistsUpdateManyWithWhereWithoutStore_gamesInput[];
    deleteMany?: Prisma.wishlistsScalarWhereInput | Prisma.wishlistsScalarWhereInput[];
};
export type wishlistsCreateWithoutGamesInput = {
    id?: string;
    name: string;
    description?: string | null;
    visibility?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutWishlistsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutWishlistsInput;
    user_profiles: Prisma.user_profilesCreateNestedOneWithoutWishlistsInput;
};
export type wishlistsUncheckedCreateWithoutGamesInput = {
    id?: string;
    user_id: string;
    name: string;
    description?: string | null;
    visibility?: string;
    status?: string;
    preferred_store_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutWishlistsInput;
};
export type wishlistsCreateOrConnectWithoutGamesInput = {
    where: Prisma.wishlistsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlistsCreateWithoutGamesInput, Prisma.wishlistsUncheckedCreateWithoutGamesInput>;
};
export type wishlistsCreateManyGamesInputEnvelope = {
    data: Prisma.wishlistsCreateManyGamesInput | Prisma.wishlistsCreateManyGamesInput[];
    skipDuplicates?: boolean;
};
export type wishlistsUpsertWithWhereUniqueWithoutGamesInput = {
    where: Prisma.wishlistsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlistsUpdateWithoutGamesInput, Prisma.wishlistsUncheckedUpdateWithoutGamesInput>;
    create: Prisma.XOR<Prisma.wishlistsCreateWithoutGamesInput, Prisma.wishlistsUncheckedCreateWithoutGamesInput>;
};
export type wishlistsUpdateWithWhereUniqueWithoutGamesInput = {
    where: Prisma.wishlistsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlistsUpdateWithoutGamesInput, Prisma.wishlistsUncheckedUpdateWithoutGamesInput>;
};
export type wishlistsUpdateManyWithWhereWithoutGamesInput = {
    where: Prisma.wishlistsScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlistsUpdateManyMutationInput, Prisma.wishlistsUncheckedUpdateManyWithoutGamesInput>;
};
export type wishlistsScalarWhereInput = {
    AND?: Prisma.wishlistsScalarWhereInput | Prisma.wishlistsScalarWhereInput[];
    OR?: Prisma.wishlistsScalarWhereInput[];
    NOT?: Prisma.wishlistsScalarWhereInput | Prisma.wishlistsScalarWhereInput[];
    id?: Prisma.UuidFilter<"wishlists"> | string;
    user_id?: Prisma.UuidFilter<"wishlists"> | string;
    name?: Prisma.StringFilter<"wishlists"> | string;
    description?: Prisma.StringNullableFilter<"wishlists"> | string | null;
    visibility?: Prisma.StringFilter<"wishlists"> | string;
    status?: Prisma.StringFilter<"wishlists"> | string;
    preferred_store_id?: Prisma.UuidNullableFilter<"wishlists"> | string | null;
    created_at?: Prisma.DateTimeFilter<"wishlists"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"wishlists"> | Date | string;
    game_id?: Prisma.UuidFilter<"wishlists"> | string;
};
export type wishlistsCreateWithoutUser_profilesInput = {
    id?: string;
    name: string;
    description?: string | null;
    visibility?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutWishlistsInput;
    games: Prisma.gamesCreateNestedOneWithoutWishlistsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutWishlistsInput;
};
export type wishlistsUncheckedCreateWithoutUser_profilesInput = {
    id?: string;
    name: string;
    description?: string | null;
    visibility?: string;
    status?: string;
    preferred_store_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutWishlistsInput;
};
export type wishlistsCreateOrConnectWithoutUser_profilesInput = {
    where: Prisma.wishlistsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlistsCreateWithoutUser_profilesInput, Prisma.wishlistsUncheckedCreateWithoutUser_profilesInput>;
};
export type wishlistsCreateManyUser_profilesInputEnvelope = {
    data: Prisma.wishlistsCreateManyUser_profilesInput | Prisma.wishlistsCreateManyUser_profilesInput[];
    skipDuplicates?: boolean;
};
export type wishlistsUpsertWithWhereUniqueWithoutUser_profilesInput = {
    where: Prisma.wishlistsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlistsUpdateWithoutUser_profilesInput, Prisma.wishlistsUncheckedUpdateWithoutUser_profilesInput>;
    create: Prisma.XOR<Prisma.wishlistsCreateWithoutUser_profilesInput, Prisma.wishlistsUncheckedCreateWithoutUser_profilesInput>;
};
export type wishlistsUpdateWithWhereUniqueWithoutUser_profilesInput = {
    where: Prisma.wishlistsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlistsUpdateWithoutUser_profilesInput, Prisma.wishlistsUncheckedUpdateWithoutUser_profilesInput>;
};
export type wishlistsUpdateManyWithWhereWithoutUser_profilesInput = {
    where: Prisma.wishlistsScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlistsUpdateManyMutationInput, Prisma.wishlistsUncheckedUpdateManyWithoutUser_profilesInput>;
};
export type wishlistsCreateWithoutWishlist_itemsInput = {
    id?: string;
    name: string;
    description?: string | null;
    visibility?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    games: Prisma.gamesCreateNestedOneWithoutWishlistsInput;
    store_games?: Prisma.store_gamesCreateNestedOneWithoutWishlistsInput;
    user_profiles: Prisma.user_profilesCreateNestedOneWithoutWishlistsInput;
};
export type wishlistsUncheckedCreateWithoutWishlist_itemsInput = {
    id?: string;
    user_id: string;
    name: string;
    description?: string | null;
    visibility?: string;
    status?: string;
    preferred_store_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type wishlistsCreateOrConnectWithoutWishlist_itemsInput = {
    where: Prisma.wishlistsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlistsCreateWithoutWishlist_itemsInput, Prisma.wishlistsUncheckedCreateWithoutWishlist_itemsInput>;
};
export type wishlistsUpsertWithoutWishlist_itemsInput = {
    update: Prisma.XOR<Prisma.wishlistsUpdateWithoutWishlist_itemsInput, Prisma.wishlistsUncheckedUpdateWithoutWishlist_itemsInput>;
    create: Prisma.XOR<Prisma.wishlistsCreateWithoutWishlist_itemsInput, Prisma.wishlistsUncheckedCreateWithoutWishlist_itemsInput>;
    where?: Prisma.wishlistsWhereInput;
};
export type wishlistsUpdateToOneWithWhereWithoutWishlist_itemsInput = {
    where?: Prisma.wishlistsWhereInput;
    data: Prisma.XOR<Prisma.wishlistsUpdateWithoutWishlist_itemsInput, Prisma.wishlistsUncheckedUpdateWithoutWishlist_itemsInput>;
};
export type wishlistsUpdateWithoutWishlist_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    games?: Prisma.gamesUpdateOneRequiredWithoutWishlistsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutWishlistsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneRequiredWithoutWishlistsNestedInput;
};
export type wishlistsUncheckedUpdateWithoutWishlist_itemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type wishlistsCreateWithoutStore_gamesInput = {
    id?: string;
    name: string;
    description?: string | null;
    visibility?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    wishlist_items?: Prisma.wishlist_itemsCreateNestedManyWithoutWishlistsInput;
    games: Prisma.gamesCreateNestedOneWithoutWishlistsInput;
    user_profiles: Prisma.user_profilesCreateNestedOneWithoutWishlistsInput;
};
export type wishlistsUncheckedCreateWithoutStore_gamesInput = {
    id?: string;
    user_id: string;
    name: string;
    description?: string | null;
    visibility?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    wishlist_items?: Prisma.wishlist_itemsUncheckedCreateNestedManyWithoutWishlistsInput;
};
export type wishlistsCreateOrConnectWithoutStore_gamesInput = {
    where: Prisma.wishlistsWhereUniqueInput;
    create: Prisma.XOR<Prisma.wishlistsCreateWithoutStore_gamesInput, Prisma.wishlistsUncheckedCreateWithoutStore_gamesInput>;
};
export type wishlistsCreateManyStore_gamesInputEnvelope = {
    data: Prisma.wishlistsCreateManyStore_gamesInput | Prisma.wishlistsCreateManyStore_gamesInput[];
    skipDuplicates?: boolean;
};
export type wishlistsUpsertWithWhereUniqueWithoutStore_gamesInput = {
    where: Prisma.wishlistsWhereUniqueInput;
    update: Prisma.XOR<Prisma.wishlistsUpdateWithoutStore_gamesInput, Prisma.wishlistsUncheckedUpdateWithoutStore_gamesInput>;
    create: Prisma.XOR<Prisma.wishlistsCreateWithoutStore_gamesInput, Prisma.wishlistsUncheckedCreateWithoutStore_gamesInput>;
};
export type wishlistsUpdateWithWhereUniqueWithoutStore_gamesInput = {
    where: Prisma.wishlistsWhereUniqueInput;
    data: Prisma.XOR<Prisma.wishlistsUpdateWithoutStore_gamesInput, Prisma.wishlistsUncheckedUpdateWithoutStore_gamesInput>;
};
export type wishlistsUpdateManyWithWhereWithoutStore_gamesInput = {
    where: Prisma.wishlistsScalarWhereInput;
    data: Prisma.XOR<Prisma.wishlistsUpdateManyMutationInput, Prisma.wishlistsUncheckedUpdateManyWithoutStore_gamesInput>;
};
export type wishlistsCreateManyGamesInput = {
    id?: string;
    user_id: string;
    name: string;
    description?: string | null;
    visibility?: string;
    status?: string;
    preferred_store_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type wishlistsUpdateWithoutGamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutWishlistsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutWishlistsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneRequiredWithoutWishlistsNestedInput;
};
export type wishlistsUncheckedUpdateWithoutGamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutWishlistsNestedInput;
};
export type wishlistsUncheckedUpdateManyWithoutGamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type wishlistsCreateManyUser_profilesInput = {
    id?: string;
    name: string;
    description?: string | null;
    visibility?: string;
    status?: string;
    preferred_store_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_id: string;
};
export type wishlistsUpdateWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutWishlistsNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutWishlistsNestedInput;
    store_games?: Prisma.store_gamesUpdateOneWithoutWishlistsNestedInput;
};
export type wishlistsUncheckedUpdateWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutWishlistsNestedInput;
};
export type wishlistsUncheckedUpdateManyWithoutUser_profilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    preferred_store_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    game_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type wishlistsCreateManyStore_gamesInput = {
    id?: string;
    user_id: string;
    name: string;
    description?: string | null;
    visibility?: string;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type wishlistsUpdateWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wishlist_items?: Prisma.wishlist_itemsUpdateManyWithoutWishlistsNestedInput;
    games?: Prisma.gamesUpdateOneRequiredWithoutWishlistsNestedInput;
    user_profiles?: Prisma.user_profilesUpdateOneRequiredWithoutWishlistsNestedInput;
};
export type wishlistsUncheckedUpdateWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wishlist_items?: Prisma.wishlist_itemsUncheckedUpdateManyWithoutWishlistsNestedInput;
};
export type wishlistsUncheckedUpdateManyWithoutStore_gamesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type WishlistsCountOutputType
 */
export type WishlistsCountOutputType = {
    wishlist_items: number;
};
export type WishlistsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wishlist_items?: boolean | WishlistsCountOutputTypeCountWishlist_itemsArgs;
};
/**
 * WishlistsCountOutputType without action
 */
export type WishlistsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WishlistsCountOutputType
     */
    select?: Prisma.WishlistsCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * WishlistsCountOutputType without action
 */
export type WishlistsCountOutputTypeCountWishlist_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.wishlist_itemsWhereInput;
};
export type wishlistsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    name?: boolean;
    description?: boolean;
    visibility?: boolean;
    status?: boolean;
    preferred_store_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    wishlist_items?: boolean | Prisma.wishlists$wishlist_itemsArgs<ExtArgs>;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    store_games?: boolean | Prisma.wishlists$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.user_profilesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.WishlistsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlists"]>;
export type wishlistsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    name?: boolean;
    description?: boolean;
    visibility?: boolean;
    status?: boolean;
    preferred_store_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    store_games?: boolean | Prisma.wishlists$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.user_profilesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlists"]>;
export type wishlistsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    name?: boolean;
    description?: boolean;
    visibility?: boolean;
    status?: boolean;
    preferred_store_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    store_games?: boolean | Prisma.wishlists$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.user_profilesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlists"]>;
export type wishlistsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    name?: boolean;
    description?: boolean;
    visibility?: boolean;
    status?: boolean;
    preferred_store_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    game_id?: boolean;
};
export type wishlistsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "name" | "description" | "visibility" | "status" | "preferred_store_id" | "created_at" | "updated_at" | "game_id", ExtArgs["result"]["wishlists"]>;
export type wishlistsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wishlist_items?: boolean | Prisma.wishlists$wishlist_itemsArgs<ExtArgs>;
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    store_games?: boolean | Prisma.wishlists$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.user_profilesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.WishlistsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type wishlistsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    store_games?: boolean | Prisma.wishlists$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.user_profilesDefaultArgs<ExtArgs>;
};
export type wishlistsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    games?: boolean | Prisma.gamesDefaultArgs<ExtArgs>;
    store_games?: boolean | Prisma.wishlists$store_gamesArgs<ExtArgs>;
    user_profiles?: boolean | Prisma.user_profilesDefaultArgs<ExtArgs>;
};
export type $wishlistsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "wishlists";
    objects: {
        wishlist_items: Prisma.$wishlist_itemsPayload<ExtArgs>[];
        games: Prisma.$gamesPayload<ExtArgs>;
        store_games: Prisma.$store_gamesPayload<ExtArgs> | null;
        user_profiles: Prisma.$user_profilesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        name: string;
        description: string | null;
        visibility: string;
        status: string;
        preferred_store_id: string | null;
        created_at: Date;
        updated_at: Date;
        game_id: string;
    }, ExtArgs["result"]["wishlists"]>;
    composites: {};
};
export type wishlistsGetPayload<S extends boolean | null | undefined | wishlistsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$wishlistsPayload, S>;
export type wishlistsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<wishlistsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WishlistsCountAggregateInputType | true;
};
export interface wishlistsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['wishlists'];
        meta: {
            name: 'wishlists';
        };
    };
    /**
     * Find zero or one Wishlists that matches the filter.
     * @param {wishlistsFindUniqueArgs} args - Arguments to find a Wishlists
     * @example
     * // Get one Wishlists
     * const wishlists = await prisma.wishlists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends wishlistsFindUniqueArgs>(args: Prisma.SelectSubset<T, wishlistsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__wishlistsClient<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Wishlists that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {wishlistsFindUniqueOrThrowArgs} args - Arguments to find a Wishlists
     * @example
     * // Get one Wishlists
     * const wishlists = await prisma.wishlists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends wishlistsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, wishlistsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__wishlistsClient<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Wishlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistsFindFirstArgs} args - Arguments to find a Wishlists
     * @example
     * // Get one Wishlists
     * const wishlists = await prisma.wishlists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends wishlistsFindFirstArgs>(args?: Prisma.SelectSubset<T, wishlistsFindFirstArgs<ExtArgs>>): Prisma.Prisma__wishlistsClient<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Wishlists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistsFindFirstOrThrowArgs} args - Arguments to find a Wishlists
     * @example
     * // Get one Wishlists
     * const wishlists = await prisma.wishlists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends wishlistsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, wishlistsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__wishlistsClient<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Wishlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wishlists
     * const wishlists = await prisma.wishlists.findMany()
     *
     * // Get first 10 Wishlists
     * const wishlists = await prisma.wishlists.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const wishlistsWithIdOnly = await prisma.wishlists.findMany({ select: { id: true } })
     *
     */
    findMany<T extends wishlistsFindManyArgs>(args?: Prisma.SelectSubset<T, wishlistsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Wishlists.
     * @param {wishlistsCreateArgs} args - Arguments to create a Wishlists.
     * @example
     * // Create one Wishlists
     * const Wishlists = await prisma.wishlists.create({
     *   data: {
     *     // ... data to create a Wishlists
     *   }
     * })
     *
     */
    create<T extends wishlistsCreateArgs>(args: Prisma.SelectSubset<T, wishlistsCreateArgs<ExtArgs>>): Prisma.Prisma__wishlistsClient<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Wishlists.
     * @param {wishlistsCreateManyArgs} args - Arguments to create many Wishlists.
     * @example
     * // Create many Wishlists
     * const wishlists = await prisma.wishlists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends wishlistsCreateManyArgs>(args?: Prisma.SelectSubset<T, wishlistsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Wishlists and returns the data saved in the database.
     * @param {wishlistsCreateManyAndReturnArgs} args - Arguments to create many Wishlists.
     * @example
     * // Create many Wishlists
     * const wishlists = await prisma.wishlists.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Wishlists and only return the `id`
     * const wishlistsWithIdOnly = await prisma.wishlists.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends wishlistsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, wishlistsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Wishlists.
     * @param {wishlistsDeleteArgs} args - Arguments to delete one Wishlists.
     * @example
     * // Delete one Wishlists
     * const Wishlists = await prisma.wishlists.delete({
     *   where: {
     *     // ... filter to delete one Wishlists
     *   }
     * })
     *
     */
    delete<T extends wishlistsDeleteArgs>(args: Prisma.SelectSubset<T, wishlistsDeleteArgs<ExtArgs>>): Prisma.Prisma__wishlistsClient<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Wishlists.
     * @param {wishlistsUpdateArgs} args - Arguments to update one Wishlists.
     * @example
     * // Update one Wishlists
     * const wishlists = await prisma.wishlists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends wishlistsUpdateArgs>(args: Prisma.SelectSubset<T, wishlistsUpdateArgs<ExtArgs>>): Prisma.Prisma__wishlistsClient<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Wishlists.
     * @param {wishlistsDeleteManyArgs} args - Arguments to filter Wishlists to delete.
     * @example
     * // Delete a few Wishlists
     * const { count } = await prisma.wishlists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends wishlistsDeleteManyArgs>(args?: Prisma.SelectSubset<T, wishlistsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wishlists
     * const wishlists = await prisma.wishlists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends wishlistsUpdateManyArgs>(args: Prisma.SelectSubset<T, wishlistsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Wishlists and returns the data updated in the database.
     * @param {wishlistsUpdateManyAndReturnArgs} args - Arguments to update many Wishlists.
     * @example
     * // Update many Wishlists
     * const wishlists = await prisma.wishlists.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Wishlists and only return the `id`
     * const wishlistsWithIdOnly = await prisma.wishlists.updateManyAndReturn({
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
    updateManyAndReturn<T extends wishlistsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, wishlistsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Wishlists.
     * @param {wishlistsUpsertArgs} args - Arguments to update or create a Wishlists.
     * @example
     * // Update or create a Wishlists
     * const wishlists = await prisma.wishlists.upsert({
     *   create: {
     *     // ... data to create a Wishlists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wishlists we want to update
     *   }
     * })
     */
    upsert<T extends wishlistsUpsertArgs>(args: Prisma.SelectSubset<T, wishlistsUpsertArgs<ExtArgs>>): Prisma.Prisma__wishlistsClient<runtime.Types.Result.GetResult<Prisma.$wishlistsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistsCountArgs} args - Arguments to filter Wishlists to count.
     * @example
     * // Count the number of Wishlists
     * const count = await prisma.wishlists.count({
     *   where: {
     *     // ... the filter for the Wishlists we want to count
     *   }
     * })
    **/
    count<T extends wishlistsCountArgs>(args?: Prisma.Subset<T, wishlistsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WishlistsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WishlistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WishlistsAggregateArgs>(args: Prisma.Subset<T, WishlistsAggregateArgs>): Prisma.PrismaPromise<GetWishlistsAggregateType<T>>;
    /**
     * Group by Wishlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {wishlistsGroupByArgs} args - Group by arguments.
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
    groupBy<T extends wishlistsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: wishlistsGroupByArgs['orderBy'];
    } : {
        orderBy?: wishlistsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, wishlistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the wishlists model
     */
    readonly fields: wishlistsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for wishlists.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__wishlistsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wishlist_items<T extends Prisma.wishlists$wishlist_itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlists$wishlist_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$wishlist_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    games<T extends Prisma.gamesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.gamesDefaultArgs<ExtArgs>>): Prisma.Prisma__gamesClient<runtime.Types.Result.GetResult<Prisma.$gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    store_games<T extends Prisma.wishlists$store_gamesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.wishlists$store_gamesArgs<ExtArgs>>): Prisma.Prisma__store_gamesClient<runtime.Types.Result.GetResult<Prisma.$store_gamesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user_profiles<T extends Prisma.user_profilesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user_profilesDefaultArgs<ExtArgs>>): Prisma.Prisma__user_profilesClient<runtime.Types.Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the wishlists model
 */
export interface wishlistsFieldRefs {
    readonly id: Prisma.FieldRef<"wishlists", 'String'>;
    readonly user_id: Prisma.FieldRef<"wishlists", 'String'>;
    readonly name: Prisma.FieldRef<"wishlists", 'String'>;
    readonly description: Prisma.FieldRef<"wishlists", 'String'>;
    readonly visibility: Prisma.FieldRef<"wishlists", 'String'>;
    readonly status: Prisma.FieldRef<"wishlists", 'String'>;
    readonly preferred_store_id: Prisma.FieldRef<"wishlists", 'String'>;
    readonly created_at: Prisma.FieldRef<"wishlists", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"wishlists", 'DateTime'>;
    readonly game_id: Prisma.FieldRef<"wishlists", 'String'>;
}
/**
 * wishlists findUnique
 */
export type wishlistsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which wishlists to fetch.
     */
    where: Prisma.wishlistsWhereUniqueInput;
};
/**
 * wishlists findUniqueOrThrow
 */
export type wishlistsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which wishlists to fetch.
     */
    where: Prisma.wishlistsWhereUniqueInput;
};
/**
 * wishlists findFirst
 */
export type wishlistsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which wishlists to fetch.
     */
    where?: Prisma.wishlistsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlists to fetch.
     */
    orderBy?: Prisma.wishlistsOrderByWithRelationInput | Prisma.wishlistsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for wishlists.
     */
    cursor?: Prisma.wishlistsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wishlists.
     */
    distinct?: Prisma.WishlistsScalarFieldEnum | Prisma.WishlistsScalarFieldEnum[];
};
/**
 * wishlists findFirstOrThrow
 */
export type wishlistsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which wishlists to fetch.
     */
    where?: Prisma.wishlistsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlists to fetch.
     */
    orderBy?: Prisma.wishlistsOrderByWithRelationInput | Prisma.wishlistsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for wishlists.
     */
    cursor?: Prisma.wishlistsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wishlists.
     */
    distinct?: Prisma.WishlistsScalarFieldEnum | Prisma.WishlistsScalarFieldEnum[];
};
/**
 * wishlists findMany
 */
export type wishlistsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which wishlists to fetch.
     */
    where?: Prisma.wishlistsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of wishlists to fetch.
     */
    orderBy?: Prisma.wishlistsOrderByWithRelationInput | Prisma.wishlistsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing wishlists.
     */
    cursor?: Prisma.wishlistsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` wishlists from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` wishlists.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of wishlists.
     */
    distinct?: Prisma.WishlistsScalarFieldEnum | Prisma.WishlistsScalarFieldEnum[];
};
/**
 * wishlists create
 */
export type wishlistsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a wishlists.
     */
    data: Prisma.XOR<Prisma.wishlistsCreateInput, Prisma.wishlistsUncheckedCreateInput>;
};
/**
 * wishlists createMany
 */
export type wishlistsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many wishlists.
     */
    data: Prisma.wishlistsCreateManyInput | Prisma.wishlistsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * wishlists createManyAndReturn
 */
export type wishlistsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlists
     */
    select?: Prisma.wishlistsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlists
     */
    omit?: Prisma.wishlistsOmit<ExtArgs> | null;
    /**
     * The data used to create many wishlists.
     */
    data: Prisma.wishlistsCreateManyInput | Prisma.wishlistsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlistsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * wishlists update
 */
export type wishlistsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a wishlists.
     */
    data: Prisma.XOR<Prisma.wishlistsUpdateInput, Prisma.wishlistsUncheckedUpdateInput>;
    /**
     * Choose, which wishlists to update.
     */
    where: Prisma.wishlistsWhereUniqueInput;
};
/**
 * wishlists updateMany
 */
export type wishlistsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update wishlists.
     */
    data: Prisma.XOR<Prisma.wishlistsUpdateManyMutationInput, Prisma.wishlistsUncheckedUpdateManyInput>;
    /**
     * Filter which wishlists to update
     */
    where?: Prisma.wishlistsWhereInput;
    /**
     * Limit how many wishlists to update.
     */
    limit?: number;
};
/**
 * wishlists updateManyAndReturn
 */
export type wishlistsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlists
     */
    select?: Prisma.wishlistsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlists
     */
    omit?: Prisma.wishlistsOmit<ExtArgs> | null;
    /**
     * The data used to update wishlists.
     */
    data: Prisma.XOR<Prisma.wishlistsUpdateManyMutationInput, Prisma.wishlistsUncheckedUpdateManyInput>;
    /**
     * Filter which wishlists to update
     */
    where?: Prisma.wishlistsWhereInput;
    /**
     * Limit how many wishlists to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlistsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * wishlists upsert
 */
export type wishlistsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the wishlists to update in case it exists.
     */
    where: Prisma.wishlistsWhereUniqueInput;
    /**
     * In case the wishlists found by the `where` argument doesn't exist, create a new wishlists with this data.
     */
    create: Prisma.XOR<Prisma.wishlistsCreateInput, Prisma.wishlistsUncheckedCreateInput>;
    /**
     * In case the wishlists was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.wishlistsUpdateInput, Prisma.wishlistsUncheckedUpdateInput>;
};
/**
 * wishlists delete
 */
export type wishlistsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which wishlists to delete.
     */
    where: Prisma.wishlistsWhereUniqueInput;
};
/**
 * wishlists deleteMany
 */
export type wishlistsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which wishlists to delete
     */
    where?: Prisma.wishlistsWhereInput;
    /**
     * Limit how many wishlists to delete.
     */
    limit?: number;
};
/**
 * wishlists.wishlist_items
 */
export type wishlists$wishlist_itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wishlist_items
     */
    select?: Prisma.wishlist_itemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the wishlist_items
     */
    omit?: Prisma.wishlist_itemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.wishlist_itemsInclude<ExtArgs> | null;
    where?: Prisma.wishlist_itemsWhereInput;
    orderBy?: Prisma.wishlist_itemsOrderByWithRelationInput | Prisma.wishlist_itemsOrderByWithRelationInput[];
    cursor?: Prisma.wishlist_itemsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Wishlist_itemsScalarFieldEnum | Prisma.Wishlist_itemsScalarFieldEnum[];
};
/**
 * wishlists.store_games
 */
export type wishlists$store_gamesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * wishlists without action
 */
export type wishlistsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
